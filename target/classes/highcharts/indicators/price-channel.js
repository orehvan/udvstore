/*
 Highstock JS v9.2.2 (2021-08-24)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Daniel Studencki

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/price-channel",["highcharts","highcharts/modules/stock"],function(c){a(c);a.Highcharts=c;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function c(a,b,g,f){a.hasOwnProperty(b)||(a[b]=f.apply(null,g))}a=a?a._modules:{};c(a,"Mixins/MultipleLines.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,
b){var g=b.defined,f=b.error,h=b.merge,l=a.seriesTypes.sma;return{pointArrayMap:["top","bottom"],pointValKey:"top",linesApiNames:["bottomLine"],getTranslatedLinesNames:function(k){var a=[];(this.pointArrayMap||[]).forEach(function(b){b!==k&&a.push("plot"+b.charAt(0).toUpperCase()+b.slice(1))});return a},toYData:function(k){var a=[];(this.pointArrayMap||[]).forEach(function(b){a.push(k[b])});return a},translate:function(){var a=this,b=a.pointArrayMap,g=[],e,m=a.modifyValue;g=a.getTranslatedLinesNames();
l.prototype.translate.apply(a,arguments);a.points.forEach(function(k){b.forEach(function(b,d){e=k[b];m&&(e=m.call(a,e));null!==e&&(k[g[d]]=a.yAxis.toPixels(e,!0))})})},drawGraph:function(){var a=this,b=a.linesApiNames,c=a.points,e=c.length,m=a.options,d=a.graph,t={options:{gapSize:m.gapSize}},p=[],n;a.getTranslatedLinesNames(a.pointValKey).forEach(function(a,b){for(p[b]=[];e--;)n=c[e],p[b].push({x:n.x,plotX:n.plotX,plotY:n[a],isNull:!g(n[a])});e=c.length});b.forEach(function(b,d){p[d]?(a.points=p[d],
m[b]?a.options=h(m[b].styles,t):f('Error: "There is no '+b+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),a.graph=a["graph"+b],l.prototype.drawGraph.call(a),a["graph"+b]=a.graph):f('Error: "'+b+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});a.points=c;a.options=m;a.graph=d;l.prototype.drawGraph.call(a)}}});c(a,"Mixins/ReduceArray.js",[],function(){return{minInArray:function(a,
b){return a.reduce(function(a,f){return Math.min(a,f[b])},Number.MAX_VALUE)},maxInArray:function(a,b){return a.reduce(function(a,f){return Math.max(a,f[b])},-Number.MAX_VALUE)},getArrayExtremes:function(a,b,g){return a.reduce(function(a,c){return[Math.min(a[0],c[b]),Math.max(a[1],c[g])]},[Number.MAX_VALUE,-Number.MAX_VALUE])}}});c(a,"Stock/Indicators/PC/PCIndicator.js",[a["Core/Color/Palette.js"],a["Mixins/MultipleLines.js"],a["Mixins/ReduceArray.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],
function(a,b,c,f,h){var g=this&&this.__extends||function(){var a=function(b,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d])};return a(b,d)};return function(b,d){function c(){this.constructor=b}a(b,d);b.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)}}(),k=f.seriesTypes.sma,l=h.merge;h=h.extend;var r=c.getArrayExtremes;c=function(b){function c(){var a=null!==b&&b.apply(this,arguments)||
this;a.data=void 0;a.options=void 0;a.points=void 0;return a}g(c,b);c.prototype.getValues=function(a,b){b=b.period;var c=a.xData,d=(a=a.yData)?a.length:0,f=[],g=[],k=[],e;if(!(d<b)){for(e=b;e<=d;e++){var m=c[e-1];var h=a.slice(e-b,e);var l=r(h,2,1);h=l[1];var q=l[0];l=(h+q)/2;f.push([m,h,l,q]);g.push(m);k.push([h,l,q])}return{values:f,xData:g,yData:k}}};c.defaultOptions=l(k.defaultOptions,{params:{index:void 0,period:20},lineWidth:1,topLine:{styles:{lineColor:a.colors[2],lineWidth:1}},bottomLine:{styles:{lineColor:a.colors[8],
lineWidth:1}},dataGrouping:{approximation:"averages"}});return c}(k);h(c.prototype,{getTranslatedLinesNames:b.getTranslatedLinesNames,drawGraph:b.drawGraph,toYData:b.toYData,pointArrayMap:["top","middle","bottom"],pointValKey:"middle",nameBase:"Price Channel",nameComponents:["period"],linesApiNames:["topLine","bottomLine"],translate:b.translate});f.registerSeriesType("pc",c);"";return c});c(a,"masters/indicators/price-channel.src.js",[],function(){})});
//# sourceMappingURL=price-channel.js.map