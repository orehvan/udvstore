"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const esbuild_1 = require("esbuild");
const webpack_sources_1 = require("webpack-sources");
const ModuleFilenameHelpers_js_1 = require("webpack/lib/ModuleFilenameHelpers.js");
const isWebpack5 = (compilation) => ('processAssets' in compilation.hooks);
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('../package.json');
const isJsFile = /\.[cm]?js(\?.*)?$/i;
const isCssFile = /\.css(\?.*)?$/i;
const pluginName = 'esbuild-minify';
const granularMinifyConfigs = ['minifyIdentifiers', 'minifySyntax', 'minifyWhitespace'];
class ESBuildMinifyPlugin {
    constructor(options = {}) {
        var _a;
        const { implementation, ...remainingOptions } = options;
        if (implementation && typeof implementation.transform !== 'function') {
            throw new TypeError(`ESBuildMinifyPlugin: implementation.transform must be an ESBuild transform function. Received ${typeof implementation.transform}`);
        }
        this.transform = (_a = implementation === null || implementation === void 0 ? void 0 : implementation.transform) !== null && _a !== void 0 ? _a : esbuild_1.transform;
        this.options = remainingOptions;
        const hasGranularMinificationConfig = granularMinifyConfigs.some(minifyConfig => minifyConfig in options);
        if (!hasGranularMinificationConfig) {
            this.options.minify = true;
        }
    }
    apply(compiler) {
        const meta = JSON.stringify({
            name: 'esbuild-loader',
            version,
            options: this.options,
        });
        compiler.hooks.compilation.tap(pluginName, (compilation) => {
            compilation.hooks.chunkHash.tap(pluginName, (_, hash) => hash.update(meta));
            if (isWebpack5(compilation)) {
                compilation.hooks.processAssets.tapPromise({
                    name: pluginName,
                    stage: compilation.constructor.PROCESS_ASSETS_STAGE_OPTIMIZE_SIZE,
                    // @ts-expect-error TODO: modify type
                    additionalAssets: true,
                }, async () => await this.transformAssets(compilation));
                compilation.hooks.statsPrinter.tap(pluginName, (statsPrinter) => {
                    statsPrinter.hooks.print
                        .for('asset.info.minimized')
                        .tap(pluginName, (minimized, { green, formatFlag }) => (minimized
                        ? green(formatFlag('minimized'))
                        : undefined));
                });
            }
            else {
                compilation.hooks.optimizeChunkAssets.tapPromise(pluginName, async () => await this.transformAssets(compilation));
            }
        });
    }
    async transformAssets(compilation) {
        const { options: { devtool } } = compilation.compiler;
        const sourcemap = (
        // TODO: drop support for esbuild sourcemap in future so it all goes through WP API
        // Might still be necessary when SourceMap plugin is used
        this.options.sourcemap === undefined
            ? devtool && devtool.includes('source-map')
            : this.options.sourcemap);
        const { css: minifyCss, include, exclude, ...transformOptions } = this.options;
        const assets = compilation.getAssets().filter(asset => (
        // Filter out already minimized
        !asset.info.minimized
            // Filter out by file type
            && (isJsFile.test(asset.name)
                || (minifyCss && isCssFile.test(asset.name)))
            && ModuleFilenameHelpers_js_1.matchObject({ include, exclude }, asset.name)));
        await Promise.all(assets.map(async (asset) => {
            const assetIsCss = isCssFile.test(asset.name);
            const { source, map } = asset.source.sourceAndMap();
            const sourceAsString = source.toString();
            const result = await this.transform(sourceAsString, {
                ...transformOptions,
                loader: (assetIsCss
                    ? 'css'
                    : transformOptions.loader),
                sourcemap,
                sourcefile: asset.name,
            });
            compilation.updateAsset(asset.name, (sourcemap
                ? new webpack_sources_1.SourceMapSource(result.code, asset.name, result.map, sourceAsString, map, true)
                : new webpack_sources_1.RawSource(result.code)), {
                ...asset.info,
                minimized: true,
            });
        }));
    }
}
exports.default = ESBuildMinifyPlugin;