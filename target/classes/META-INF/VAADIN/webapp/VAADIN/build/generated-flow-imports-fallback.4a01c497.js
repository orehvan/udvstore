var ms=Object.defineProperty,fs=Object.defineProperties;var _s=Object.getOwnPropertyDescriptors;var ii=Object.getOwnPropertySymbols;var gs=Object.prototype.hasOwnProperty,vs=Object.prototype.propertyIsEnumerable;var ri=(r,t,e)=>t in r?ms(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,be=(r,t)=>{for(var e in t||(t={}))gs.call(t,e)&&ri(r,e,t[e]);if(ii)for(var e of ii(t))vs.call(t,e)&&ri(r,e,t[e]);return r},lt=(r,t)=>fs(r,_s(t));import{t as mr,m as bs,u as ys,d as Ae,P as As,h as E,O as ws,a as ze,b as si,i as xs,f as Tt,D as _e,e as Cs,c as Is,g as Es,r as y,j as st,K as wt,E as O,T as D,k as S,F as J,l as xt,C as Be,n as Ss,o as fr,p as Ct,q as ks,B as Gt,s as ue,v as It,w as _r,L as gr,x as Ve,y as ee,z as xe,R as Et,A as Ts,G as vr,H as Ds,I as at,J as jt,M as br,N as yr,Q as Ne,S as Ee,U as St,V as kt,W as ot,X as Ps,Y as Se,Z as nt,_ as Qt,$ as Ze,a0 as zs,a1 as we,a2 as Os,a3 as ce,a4 as Ar,a5 as ke,a6 as Je,a7 as Xt,a8 as Kt,a9 as He,aa as wr,ab as xr,ac as Rs,ad as te,ae as Cr,af as Zt,ag as Fs,ah as Ir,ai as Ms,aj as Re,ak as Ls,al as $s,am as Bs,an as Vs,ao as Er,ap as Sr,aq as Ns,ar as kr,as as Tr,at as Hs,au as Ws,av as qs,aw as Ys,ax as Us,ay as Gs,az as js,aA as Qs,aB as Xs}from"./generated-flow-imports.062ac819.js";import{r as w,x as Dr,$ as Ks}from"./indexhtml.f435794c.js";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Zs={templatize(r,t){this._templatizerTemplate=r,this.ctor=mr(r,this,{mutableData:Boolean(t),parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(r){return new this.ctor(r)},modelForElement(r){return bs(this._templatizerTemplate,r)}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var dt=new Set;const Js={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(dt.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){!this.isAttached||(this._interestedResizables.forEach(function(r){this.resizerShouldNotify(r)&&this._notifyDescendant(r)},this),this._fireResize())},assignParentResizable:function(r){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=r,r&&r._interestedResizables.indexOf(this)===-1&&(r._interestedResizables.push(this),r._subscribeIronResize(this))},stopResizeNotificationsFor:function(r){var t=this._interestedResizables.indexOf(r);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(r))},_subscribeIronResize:function(r){r.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(r){r.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(r){return!0},_onDescendantIronResize:function(r){if(this._notifyingDescendant){r.stopPropagation();return}ys||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(r){var t=Ae(r).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),r.stopPropagation())},_parentResizableChanged:function(r){r&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(r){!this.isAttached||(this._notifyingDescendant=!0,r.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(!!this.isAttached)if(document.readyState==="loading"){var r=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function t(){document.removeEventListener("readystatechange",t),r()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(t){t!==this&&t._findParent()},this):(dt.forEach(function(t){t!==this&&t._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?dt.delete(this):dt.add(this)}};/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const ea={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(r,t){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),!!t)if(r==="document")this.scrollTarget=this._doc;else if(typeof r=="string"){var e=this.domHost;this.scrollTarget=e&&e.$?e.$[r]:Ae(this.ownerDocument).querySelector("#"+r)}else this._isValidScrollTarget()&&(this._oldScrollTarget=r,this._toggleScrollListener(this._shouldHaveListener,r))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(r){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,r):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=r)},set _scrollLeft(r){this.scrollTarget===this._doc?window.scrollTo(r,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=r)},scroll:function(r,t){var e;typeof r=="object"?(e=r.left,t=r.top):e=r,e=e||0,t=t||0,this.scrollTarget===this._doc?window.scrollTo(e,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e,this.scrollTarget.scrollTop=t)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(r,t){var e=t===this._doc?window:t;r?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),e.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(e.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(r){this._shouldHaveListener=r,this._toggleScrollListener(r,this.scrollTarget)}};/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var ai=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),ta=ai&&ai[1]>=8,oi=3,ni="-10000px",qe=-100;As({_template:E`
    <style>
      :host {
        display: block;
      }

      @media only screen and (-webkit-max-device-pixel-ratio: 1) {
        :host {
          will-change: transform;
        }
      }

      #items {
        @apply --iron-list-items-container;
        position: relative;
      }

      :host(:not([grid])) #items > ::slotted(*) {
        width: 100%;
      }

      #items > ::slotted(*) {
        box-sizing: border-box;
        margin: 0;
        position: absolute;
        top: 0;
        will-change: transform;
      }
    </style>

    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>

    <div id="items">
      <slot></slot>
    </div>
`,is:"iron-list",properties:{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},selectedAs:{type:String,value:"selected"},grid:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_gridChanged"},selectionEnabled:{type:Boolean,value:!1},selectedItem:{type:Object,notify:!0},selectedItems:{type:Object,notify:!0},multiSelection:{type:Boolean,value:!1},scrollOffset:{type:Number,value:0}},observers:["_itemsChanged(items.*)","_selectionEnabledChanged(selectionEnabled)","_multiSelectionChanged(multiSelection)","_setOverflow(scrollTarget, scrollOffset)"],behaviors:[Zs,Js,ea,ws],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedItem:null,_focusedVirtualIndex:-1,_focusedPhysicalIndex:-1,_offscreenFocusedItem:null,_focusBackfillItem:null,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:!0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){var r=this.grid?this._physicalRows*this._rowHeight:this._physicalSize;return r-this._viewportHeight},get _itemsParent(){return Ae(Ae(this._userTemplate).parentNode)},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var r=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,r-this._physicalCount)},set _virtualStart(r){r=this._clamp(r,0,this._maxVirtualStart),this.grid&&(r=r-r%this._itemsPerRow),this._virtualStartVal=r},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(r){r=r%this._physicalCount,r<0&&(r=this._physicalCount+r),this.grid&&(r=r-r%this._itemsPerRow),this._physicalStartVal=r},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(r){this._physicalCountVal=r},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var r=this._firstVisibleIndexVal;if(r==null){var t=this._physicalTop+this._scrollOffset;r=this._iterateItems(function(e,i){if(t+=this._getPhysicalSizeIncrement(e),t>this._scrollPosition)return this.grid?i-i%this._itemsPerRow:i;if(this.grid&&this._virtualCount-1===i)return i-i%this._itemsPerRow})||0,this._firstVisibleIndexVal=r}return r},get lastVisibleIndex(){var r=this._lastVisibleIndexVal;if(r==null){if(this.grid)r=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var t=this._physicalTop+this._scrollOffset;this._iterateItems(function(e,i){t<this._scrollBottom&&(r=i),t+=this._getPhysicalSizeIncrement(e)})}this._lastVisibleIndexVal=r}return r},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},ready:function(){this.addEventListener("focus",this._didFocus.bind(this),!0)},attached:function(){this._debounce("_render",this._render,ze),this.listen(this,"iron-resize","_resizeHandler"),this.listen(this,"keydown","_keydownHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler"),this.unlisten(this,"keydown","_keydownHandler")},_setOverflow:function(r){this.style.webkitOverflowScrolling=r===this?"touch":"",this.style.overflowY=r===this?"auto":"",this._lastVisibleIndexVal=null,this._firstVisibleIndexVal=null,this._debounce("_render",this._render,ze)},updateViewportBoundaries:function(){var r=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(r["padding-top"],10),this._isRTL=Boolean(r.direction==="rtl"),this._viewportWidth=this.$.items.offsetWidth,this._viewportHeight=this._scrollTargetHeight,this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var r=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),t=r-this._scrollPosition,e=t>=0;if(this._scrollPosition=r,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t=t-this._scrollOffset;var i=Math.round(t/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+i,this._physicalStart=this._physicalStart+i,this._physicalTop=Math.min(Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){var s=this._getReusables(e);e?(this._physicalTop=s.physicalTop,this._virtualStart=this._virtualStart+s.indexes.length,this._physicalStart=this._physicalStart+s.indexes.length):(this._virtualStart=this._virtualStart-s.indexes.length,this._physicalStart=this._physicalStart-s.indexes.length),this._update(s.indexes,e?null:s.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),si)}},_getReusables:function(r){var t,e,i,s=[],a=this._hiddenContentSize*this._ratio,o=this._virtualStart,n=this._virtualEnd,l=this._physicalCount,u=this._physicalTop+this._scrollOffset,m=this._physicalBottom+this._scrollOffset,_=this._scrollPosition,g=this._scrollBottom;for(r?(t=this._physicalStart,e=_-u):(t=this._physicalEnd,e=m-g);i=this._getPhysicalSizeIncrement(t),e=e-i,!(s.length>=l||e<=a);)if(r){if(n+s.length+1>=this._virtualCount||u+i>=_-this._scrollOffset)break;s.push(t),u=u+i,t=(t+1)%l}else{if(o-s.length<=0||u+this._physicalSize-i<=g)break;s.push(t),u=u-i,t=t===0?l-1:t-1}return{indexes:s,physicalTop:u-this._scrollOffset}},_update:function(r,t){if(!(r&&r.length===0||this._physicalCount===0)){if(this._manageFocus(),this._assignModels(r),this._updateMetrics(r),t)for(;t.length;){var e=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_createPool:function(r){this._ensureTemplatized();var t,e,i=new Array(r);for(t=0;t<r;t++)e=this.stamp(null),i[t]=e.root.querySelector("*"),this._itemsParent.appendChild(e.root);return i},_isClientFull:function(){return this._scrollBottom!=0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(r){var t=this._clamp(this._physicalCount+r,oi,this._virtualCount-this._virtualStart);if(t=this._convertIndexToCompleteRow(t),this.grid){var e=t%this._itemsPerRow;e&&t-e<=this._physicalCount&&(t+=this._itemsPerRow),t-=e}var i=t-this._physicalCount,s=Math.round(this._physicalCount*.5);if(!(i<0)){if(i>0){var a=window.performance.now();[].push.apply(this._physicalItems,this._createPool(i));for(var o=0;o<i;o++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+i,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+i),this._update(),this._templateCost=(window.performance.now()-a)/i,s=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||s===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,s)),xs):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,s),si))}},_render:function(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){var r=this._getReusables(!0);this._physicalTop=r.physicalTop,this._virtualStart=this._virtualStart+r.indexes.length,this._physicalStart=this._physicalStart+r.indexes.length,this._update(r.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(oi))},_ensureTemplatized:function(){if(!this.ctor){this._userTemplate=this.queryEffectiveChildren("template"),this._userTemplate||console.warn("iron-list requires a template to be provided in light-dom");var r={};r.__key__=!0,r[this.as]=!0,r[this.indexAs]=!0,r[this.selectedAs]=!0,r.tabIndex=!0,this._instanceProps=r,this.templatize(this._userTemplate,this.mutableData)}},_gridChanged:function(r,t){typeof t!="undefined"&&(this.notifyResize(),Tt(),r&&this._updateGridMetrics())},_itemsChanged:function(r){if(r.path==="items")this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,ze);else if(r.path==="items.splices"){this._adjustVirtualIndex(r.value.indexSplices),this._virtualCount=this.items?this.items.length:0;var t=r.value.indexSplices.some(function(s){return s.addedCount>0||s.removed.length>0});if(t){var e=this._getActiveElement();this.contains(e)&&e.blur()}var i=r.value.indexSplices.some(function(s){return s.index+s.addedCount>=this._virtualStart&&s.index<=this._virtualEnd},this);(!this._isClientFull()||i)&&this._debounce("_render",this._render,ze)}else r.path!=="items.length"&&this._forwardItemPath(r.path,r.value)},_forwardItemPath:function(r,t){r=r.slice(6);var e=r.indexOf(".");e===-1&&(e=r.length);var i,s,a,o=this.modelForElement(this._offscreenFocusedItem),n=parseInt(r.substring(0,e),10);i=this._isIndexRendered(n),i?(s=this._getPhysicalIndex(n),a=this.modelForElement(this._physicalItems[s])):o&&(a=o),!(!a||a[this.indexAs]!==n)&&(r=r.substring(e+1),r=this.as+(r?"."+r:""),a._setPendingPropertyOrPath(r,t,!1,!0),a._flushProperties&&a._flushProperties(),i&&(this._updateMetrics([s]),this._positionItems(),this._updateScrollerSize()))},_adjustVirtualIndex:function(r){r.forEach(function(t){if(t.removed.forEach(this._removeItem,this),t.index<this._virtualStart){var e=Math.max(t.addedCount-t.removed.length,t.index-this._virtualStart);this._virtualStart=this._virtualStart+e,this._focusedVirtualIndex>=0&&(this._focusedVirtualIndex=this._focusedVirtualIndex+e)}},this)},_removeItem:function(r){this.$.selector.deselect(r),this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===r&&this._removeFocusedItem()},_iterateItems:function(r,t){var e,i,s,a;if(arguments.length===2&&t){for(a=0;a<t.length;a++)if(e=t[a],i=this._computeVidx(e),(s=r.call(this,e,i))!=null)return s}else{for(e=this._physicalStart,i=this._virtualStart;e<this._physicalCount;e++,i++)if((s=r.call(this,e,i))!=null)return s;for(e=0;e<this._physicalStart;e++,i++)if((s=r.call(this,e,i))!=null)return s}},_computeVidx:function(r){return r>=this._physicalStart?this._virtualStart+(r-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+r},_assignModels:function(r){this._iterateItems(function(t,e){var i=this._physicalItems[t],s=this.items&&this.items[e];if(s!=null){var a=this.modelForElement(i);a.__key__=null,this._forwardProperty(a,this.as,s),this._forwardProperty(a,this.selectedAs,this.$.selector.isSelected(s)),this._forwardProperty(a,this.indexAs,e),this._forwardProperty(a,"tabIndex",this._focusedVirtualIndex===e?0:-1),this._physicalIndexForKey[a.__key__]=t,a._flushProperties&&a._flushProperties(!0),i.removeAttribute("hidden")}else i.setAttribute("hidden","")},r)},_updateMetrics:function(r){Tt();var t=0,e=0,i=this._physicalAverageCount,s=this._physicalAverage;this._iterateItems(function(a,o){e+=this._physicalSizes[a],this._physicalSizes[a]=this._physicalItems[a].offsetHeight,t+=this._physicalSizes[a],this._physicalAverageCount+=this._physicalSizes[a]?1:0},r),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(e=this._itemsPerRow===1?e:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+t-e,this._itemsPerRow=1),this._physicalAverageCount!==i&&(this._physicalAverage=Math.round((s*i+t)/this._physicalAverageCount))},_updateGridMetrics:function(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200,this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200,this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var r=this._physicalTop;if(this.grid){var t=this._itemsPerRow*this._itemWidth,e=(this._viewportWidth-t)/2;this._iterateItems(function(i,s){var a=s%this._itemsPerRow,o=Math.floor(a*this._itemWidth+e);this._isRTL&&(o=o*-1),this.translate3d(o+"px",r+"px",0,this._physicalItems[i]),this._shouldRenderNextRow(s)&&(r+=this._rowHeight)})}else{const i=[];this._iterateItems(function(s,a){const o=this._physicalItems[s];this.translate3d(0,r+"px",0,o),r+=this._physicalSizes[s];const n=o.id;n&&i.push(n)}),i.length&&this.setAttribute("aria-owns",i.join(" "))}},_getPhysicalSizeIncrement:function(r){return this.grid?this._computeVidx(r)%this._itemsPerRow!==this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[r]},_shouldRenderNextRow:function(r){return r%this._itemsPerRow===this._itemsPerRow-1},_adjustScrollPosition:function(){var r=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(r!==0){this._physicalTop=this._physicalTop-r;var t=this._scrollPosition;!ta&&t>0&&this._resetScrollPosition(t-r)}},_resetScrollPosition:function(r){this.scrollTarget&&r>=0&&(this._scrollTop=r,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(r){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,r=r||this._scrollHeight===0,r=r||this._scrollPosition>=this._estScrollHeight-this._physicalSize,r=r||this.grid&&this.$.items.style.height<this._estScrollHeight,(r||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToItem:function(r){return this.scrollToIndex(this.items.indexOf(r))},scrollToIndex:function(r){if(!(typeof r!="number"||r<0||r>this.items.length-1)&&(Tt(),this._physicalCount!==0)){r=this._clamp(r,0,this._virtualCount-1),(!this._isIndexRendered(r)||r>=this._maxVirtualStart)&&(this._virtualStart=this.grid?r-this._itemsPerRow*2:r-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var t=this._physicalStart,e=this._virtualStart,i=0,s=this._hiddenContentSize;e<r&&i<=s;)i=i+this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,e++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+i),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},ze)},selectItem:function(r){return this.selectIndex(this.items.indexOf(r))},selectIndex:function(r){if(!(r<0||r>=this._virtualCount)){if(!this.multiSelection&&this.selectedItem&&this.clearSelection(),this._isIndexRendered(r)){var t=this.modelForElement(this._physicalItems[this._getPhysicalIndex(r)]);t&&(t[this.selectedAs]=!0),this.updateSizeForIndex(r)}this.$.selector.selectIndex(r)}},deselectItem:function(r){return this.deselectIndex(this.items.indexOf(r))},deselectIndex:function(r){if(!(r<0||r>=this._virtualCount)){if(this._isIndexRendered(r)){var t=this.modelForElement(this._physicalItems[this._getPhysicalIndex(r)]);t[this.selectedAs]=!1,this.updateSizeForIndex(r)}this.$.selector.deselectIndex(r)}},toggleSelectionForItem:function(r){return this.toggleSelectionForIndex(this.items.indexOf(r))},toggleSelectionForIndex:function(r){var t=this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(r):this.$.selector.isSelected(this.items[r]);t?this.deselectIndex(r):this.selectIndex(r)},clearSelection:function(){this._iterateItems(function(r,t){this.modelForElement(this._physicalItems[r])[this.selectedAs]=!1}),this.$.selector.clearSelection()},_selectionEnabledChanged:function(r){var t=r?this.listen:this.unlisten;t.call(this,this,"tap","_selectionHandler")},_selectionHandler:function(r){var t=this.modelForElement(r.target);if(!!t){var e,i,s=Ae(r).path[0],a=this._getActiveElement(),o=this._physicalItems[this._getPhysicalIndex(t[this.indexAs])];s.localName==="input"||s.localName==="button"||s.localName==="select"||(e=t.tabIndex,t.tabIndex=qe,i=a?a.tabIndex:-1,t.tabIndex=e,!(a&&o!==a&&o.contains(a)&&i!==qe)&&this.toggleSelectionForItem(t[this.as]))}},_multiSelectionChanged:function(r){this.clearSelection(),this.$.selector.multi=r},updateSizeForItem:function(r){return this.updateSizeForIndex(this.items.indexOf(r))},updateSizeForIndex:function(r){return this._isIndexRendered(r)&&(this._updateMetrics([this._getPhysicalIndex(r)]),this._positionItems()),null},_manageFocus:function(){var r=this._focusedVirtualIndex;r>=0&&r<this._virtualCount?this._isIndexRendered(r)?this._restoreFocusedItem():this._createFocusBackfillItem():this._virtualCount>0&&this._physicalCount>0&&(this._focusedPhysicalIndex=this._physicalStart,this._focusedVirtualIndex=this._virtualStart,this._focusedItem=this._physicalItems[this._physicalStart])},_convertIndexToCompleteRow:function(r){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(r/this._itemsPerRow)*this._itemsPerRow:r},_isIndexRendered:function(r){return r>=this._virtualStart&&r<=this._virtualEnd},_isIndexVisible:function(r){return r>=this.firstVisibleIndex&&r<=this.lastVisibleIndex},_getPhysicalIndex:function(r){return(this._physicalStart+(r-this._virtualStart))%this._physicalCount},focusItem:function(r){this._focusPhysicalItem(r)},_focusPhysicalItem:function(r){if(!(r<0||r>=this._virtualCount)){this._restoreFocusedItem(),this._isIndexRendered(r)||this.scrollToIndex(r);var t=this._physicalItems[this._getPhysicalIndex(r)],e=this.modelForElement(t),i;e.tabIndex=qe,t.tabIndex===qe&&(i=t),i||(i=Ae(t).querySelector('[tabindex="'+qe+'"]')),e.tabIndex=0,this._focusedVirtualIndex=r,i&&i.focus()}},_removeFocusedItem:function(){this._offscreenFocusedItem&&this._itemsParent.removeChild(this._offscreenFocusedItem),this._offscreenFocusedItem=null,this._focusBackfillItem=null,this._focusedItem=null,this._focusedVirtualIndex=-1,this._focusedPhysicalIndex=-1},_createFocusBackfillItem:function(){var r=this._focusedPhysicalIndex;if(!(this._offscreenFocusedItem||this._focusedVirtualIndex<0)){if(!this._focusBackfillItem){var t=this.stamp(null);this._focusBackfillItem=t.root.querySelector("*"),this._itemsParent.appendChild(t.root)}this._offscreenFocusedItem=this._physicalItems[r],this.modelForElement(this._offscreenFocusedItem).tabIndex=0,this._physicalItems[r]=this._focusBackfillItem,this._focusedPhysicalIndex=r,this.translate3d(0,ni,0,this._offscreenFocusedItem)}},_restoreFocusedItem:function(){if(!(!this._offscreenFocusedItem||this._focusedVirtualIndex<0)){this._assignModels();var r=this._focusedPhysicalIndex=this._getPhysicalIndex(this._focusedVirtualIndex),t=this._physicalItems[r];if(!!t){var e=this.modelForElement(t),i=this.modelForElement(this._offscreenFocusedItem);e[this.as]===i[this.as]?(this._focusBackfillItem=t,e.tabIndex=-1,this._physicalItems[r]=this._offscreenFocusedItem,this.translate3d(0,ni,0,this._focusBackfillItem)):(this._removeFocusedItem(),this._focusBackfillItem=null),this._offscreenFocusedItem=null}}},_didFocus:function(r){var t=this.modelForElement(r.target),e=this.modelForElement(this._focusedItem),i=this._offscreenFocusedItem!==null,s=this._focusedVirtualIndex;!t||(e===t?this._isIndexVisible(s)||this.scrollToIndex(s):(this._restoreFocusedItem(),e&&(e.tabIndex=-1),t.tabIndex=0,s=t[this.indexAs],this._focusedVirtualIndex=s,this._focusedPhysicalIndex=this._getPhysicalIndex(s),this._focusedItem=this._physicalItems[this._focusedPhysicalIndex],i&&!this._offscreenFocusedItem&&this._update()))},_keydownHandler:function(r){switch(r.keyCode){case 40:this._focusedVirtualIndex<this._virtualCount-1&&r.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case 39:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case 38:this._focusedVirtualIndex>0&&r.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case 37:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case 13:this._focusPhysicalItem(this._focusedVirtualIndex),this.selectionEnabled&&this._selectionHandler(r);break}},_clamp:function(r,t,e){return Math.min(e,Math.max(t,r))},_debounce:function(r,t,e){this._debouncers=this._debouncers||{},this._debouncers[r]=_e.debounce(this._debouncers[r],e,t.bind(this)),Cs(this._debouncers[r])},_forwardProperty:function(r,t,e){r._setPendingProperty(t,e)},_forwardHostPropV2:function(r,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(e){e&&this.modelForElement(e).forwardHostProp(r,t)},this)},_notifyInstancePropV2:function(r,t,e){if(Is(this.as,t)){var i=r[this.indexAs];t==this.as&&(this.items[i]=e),this.notifyPath(Es(this.as,"items."+i,t),e)}},_getStampedChildren:function(){return this._physicalItems},_forwardInstancePath:function(r,t,e){t.indexOf(this.as+".")===0&&this.notifyPath("items."+r.__key__+"."+t.slice(this.as.length+1),e)},_forwardParentPath:function(r,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(e){e&&this.modelForElement(e).notifyPath(r,t)},this)},_forwardParentProp:function(r,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(e){e&&(this.modelForElement(e)[r]=t)},this)},_getActiveElement:function(){var r=this._itemsParent.node.domHost;return Ae(r?r.root:document).activeElement}});const Pr=w`
  :host {
    margin: var(--lumo-space-xs) 0;
    outline: none;
  }

  [part='summary'] {
    display: flex;
    align-items: center;
    width: 100%;
    outline: none;
    padding: var(--lumo-space-s) 0;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-secondary-text-color);
    background-color: inherit;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host([focus-ring]) [part='summary'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part='toggle'] {
    display: block;
    width: 1em;
    height: 1em;
    margin-left: calc(var(--lumo-space-xs) * -1);
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-s);
    line-height: 1;
    color: var(--lumo-contrast-60pct);
    font-family: 'lumo-icons';
    cursor: var(--lumo-clickable-cursor);
  }

  :host([disabled]) [part='summary'],
  :host([disabled]) [part='toggle'] {
    color: var(--lumo-disabled-text-color);
    cursor: default;
  }

  @media (hover: hover) {
    :host(:not([disabled])) [part='summary']:hover,
    :host(:not([disabled])) [part='summary']:hover [part='toggle'] {
      color: var(--lumo-contrast-80pct);
    }
  }

  [part='toggle']::before {
    content: var(--lumo-icons-angle-right);
  }

  :host([opened]) [part='toggle'] {
    transform: rotate(90deg);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) 0 var(--lumo-space-s);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
  }

  :host([theme~='filled']) {
    background-color: var(--lumo-contrast-5pct);
    border-radius: var(--lumo-border-radius-m);
  }

  :host([theme~='filled']) [part='summary'] {
    padding: var(--lumo-space-s) calc(var(--lumo-space-s) + var(--lumo-space-xs) / 2);
  }

  :host([theme~='filled']) [part='content'] {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }

  :host([theme~='small']) [part='summary'] {
    padding-top: var(--lumo-space-xs);
    padding-bottom: var(--lumo-space-xs);
  }

  :host([theme~='small']) [part='toggle'] {
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='small']) [part\$='content'] {
    font-size: var(--lumo-font-size-s);
  }

  :host([theme~='reverse']) [part='summary'] {
    justify-content: space-between;
  }

  :host([theme~='reverse']) [part='toggle'] {
    order: 1;
    margin-right: 0;
  }

  :host([theme~='reverse'][theme~='filled']) [part='summary'] {
    padding-left: var(--lumo-space-m);
  }

  /* RTL specific styles */
  :host([dir='rtl']) [part='toggle'] {
    margin-left: var(--lumo-space-xs);
    margin-right: calc(var(--lumo-space-xs) * -1);
  }

  :host([dir='rtl']) [part='toggle']::before {
    content: var(--lumo-icons-angle-left);
  }

  :host([opened][dir='rtl']) [part='toggle'] {
    transform: rotate(-90deg);
  }

  :host([theme~='small'][dir='rtl']) [part='toggle'] {
    margin-left: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='reverse'][dir='rtl']) [part='toggle'] {
    margin-left: 0;
  }

  :host([theme~='reverse'][theme~='filled'][dir='rtl']) [part='summary'] {
    padding-right: var(--lumo-space-m);
  }
`;y("vaadin-details",Pr,{moduleId:"lumo-details"});const ia=w`
  :host {
    margin: 0;
    border-bottom: solid 1px var(--lumo-contrast-10pct);
  }

  :host(:last-child) {
    border-bottom: none;
  }

  :host([theme~='filled']) {
    border-bottom: none;
  }

  :host([theme~='filled']:not(:last-child)) {
    margin-bottom: 2px;
  }
`;y("vaadin-accordion-panel",[Pr,ia],{moduleId:"lumo-accordion-panel"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ra=r=>class extends st(wt(r)){static get properties(){return{tabindex:{type:Number,value:0}}}_onKeyDown(e){super._onKeyDown(e),!e.defaultPrevented&&e.keyCode===9&&e.shiftKey&&HTMLElement.prototype.focus.apply(this)}_shouldSetFocus(e){if(!this.disabled&&this.focusElement){const i=e.composedPath();if(i[0]===this&&this._keyboardActive&&this.focusElement.focus(),i[0]===this||i.includes(this.focusElement))return!0}return!1}_tabindexChanged(e){e!==void 0&&(this.focusElement.tabIndex=e),this.disabled&&e&&(e!==-1&&(this._lastTabIndex=e),this.tabindex=void 0)}};/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Fe extends ra(O(D(S))){static get template(){return E`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='content'] {
          display: none;
          overflow: hidden;
        }

        [part='summary'][disabled] {
          pointer-events: none;
        }

        :host([opened]) [part='content'] {
          display: block;
          overflow: visible;
        }
      </style>
      <div role="heading">
        <div
          role="button"
          part="summary"
          on-click="_onToggleClick"
          on-keydown="_onToggleKeyDown"
          disabled$="[[disabled]]"
          aria-expanded$="[[_getAriaExpanded(opened)]]"
          aria-controls$="[[_contentId]]"
        >
          <span part="toggle" aria-hidden="true"></span>
          <span part="summary-content"><slot name="summary"></slot></span>
        </div>
      </div>
      <section id$="[[_contentId]]" part="content" aria-hidden$="[[_getAriaHidden(opened)]]">
        <slot></slot>
      </section>
    `}static get is(){return"vaadin-details"}static get properties(){return{opened:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"}}}get _collapsible(){return this.shadowRoot.querySelector('[part="content"]')}get focusElement(){return this.shadowRoot.querySelector('[part="summary"]')}ready(){super.ready();const t=Fe._uniqueId=1+Fe._uniqueId||0;this._contentId=`${this.constructor.is}-content-${t}`,this._collapsible.addEventListener("keydown",e=>{e.shiftKey&&e.keyCode===9&&e.stopPropagation()})}_getAriaExpanded(t){return t?"true":"false"}_getAriaHidden(t){return t?"false":"true"}_openedChanged(t){this._collapsible.style.maxHeight=t?"":"0px"}_onToggleClick(){this.opened=!this.opened}_onToggleKeyDown(t){[13,32].indexOf(t.keyCode)>-1&&(t.preventDefault(),this.opened=!this.opened)}}customElements.define(Fe.is,Fe);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ft extends Fe{static get is(){return"vaadin-accordion-panel"}}customElements.define(Ft.is,Ft);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class li extends D(O(S)){static get template(){return E`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot></slot>
    `}static get is(){return"vaadin-accordion"}static get properties(){return{opened:{type:Number,value:0,notify:!0,reflectToAttribute:!0},items:{type:Array,readOnly:!0,notify:!0}}}static get observers(){return["_updateItems(items, opened)"]}constructor(){super(),this._boundUpdateOpened=this._updateOpened.bind(this)}get focused(){return this.getRootNode().activeElement}focus(){if(this._observer&&this._observer.flush(),Array.isArray(this.items)){const t=this._getAvailableIndex(0);t>=0&&this.items[t].focus()}}ready(){super.ready(),this.addEventListener("keydown",t=>this._onKeydown(t)),this._observer=new J(this,t=>{this._setItems(this._filterItems(Array.from(this.children))),this._filterItems(t.addedNodes).forEach(e=>{e.addEventListener("opened-changed",this._boundUpdateOpened)})})}_filterItems(t){return t.filter(e=>e instanceof Ft)}_updateItems(t,e){if(t){const i=t[e];t.forEach(s=>{s.opened=s===i})}}_onKeydown(t){const e=t.composedPath()[0];if(!this.items.some(o=>o.focusElement===e))return;const i=this.items.indexOf(this.focused);let s,a;switch(t.key){case"ArrowUp":a=-1,s=i-1;break;case"ArrowDown":a=1,s=i+1;break;case"Home":a=1,s=0;break;case"End":a=-1,s=this.items.length-1;break}s=this._getAvailableIndex(s,a),s>=0&&(this.items[s].focus(),this.items[s].setAttribute("focus-ring",""),t.preventDefault())}_getAvailableIndex(t,e){const i=this.items.length;let s=t;for(let a=0;typeof s=="number"&&a<i;a++,s+=e||1)if(s<0?s=i-1:s>=i&&(s=0),!this.items[s].disabled)return s;return-1}_updateOpened(t){const e=this._filterItems(t.composedPath())[0],i=this.items.indexOf(e);if(t.detail.value){if(e.disabled||i===-1)return;this.opened=i}else this.items.some(s=>s.opened)||(this.opened=null)}}customElements.define(li.is,li);y("vaadin-app-layout",w`
    [part='navbar']::before {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    }

    :host(:not([dir='rtl']):not([overlay])) [part='drawer'] {
      border-right: 1px solid var(--lumo-contrast-10pct);
    }

    :host([dir='rtl']:not([overlay])) [part='drawer'] {
      border-left: 1px solid var(--lumo-contrast-10pct);
    }

    :host([overlay]) [part='drawer']::before {
      background: var(--lumo-base-color);
    }

    [part='navbar']::before,
    :host([overlay]) [part='drawer']::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    :host([overlay]) [part='drawer']::before {
      background: var(--lumo-base-color);
      height: var(--_vaadin-app-layout-drawer-scroll-size, 100%);
    }

    [part='backdrop'] {
      background-color: var(--lumo-shade-20pct);
      opacity: 1;
    }

    [part] ::slotted(h2),
    [part] ::slotted(h3),
    [part] ::slotted(h4) {
      margin-top: var(--lumo-space-xs) !important;
      margin-bottom: var(--lumo-space-xs) !important;
    }

    @supports (-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)) {
      [part='navbar']::before {
        opacity: 0.8;
      }

      [part='navbar'] {
        -webkit-backdrop-filter: blur(24px);
        backdrop-filter: blur(24px);
      }

      :host([overlay]) [part='drawer']::before {
        opacity: 0.9;
      }

      :host([overlay]) [part='drawer'] {
        -webkit-backdrop-filter: blur(24px);
        backdrop-filter: blur(24px);
      }
    }
  `,{moduleId:"lumo-app-layout"});const zr=document.createElement("template");zr.innerHTML=`
  <style>
    /* Use units so that the values can be used in calc() */
    html {
      --safe-area-inset-top: env(safe-area-inset-top, 0px);
      --safe-area-inset-right: env(safe-area-inset-right, 0px);
      --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
      --safe-area-inset-left: env(safe-area-inset-left, 0px);
    }
  </style>
`;document.head.appendChild(zr.content);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Or(){if(xt){const r=window.innerHeight,e=window.innerWidth>r,i=document.documentElement.clientHeight;e&&i>r?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",i-r+"px"):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}}Or();window.addEventListener("resize",Or);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class di extends O(D(Be(S))){static get template(){return E`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          height: 100%;
          --vaadin-app-layout-transition: 200ms;
          transition: padding var(--vaadin-app-layout-transition);
          --vaadin-app-layout-touch-optimized: false;
          --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);
          --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);
          padding-top: var(--vaadin-app-layout-navbar-offset-top);
          padding-bottom: var(--vaadin-app-layout-navbar-offset-bottom);
          padding-left: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([dir='rtl']) {
          padding-left: 0;
          padding-right: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([hidden]),
        [hidden] {
          display: none !important;
        }

        :host([no-anim]) {
          --vaadin-app-layout-transition: none !important;
        }

        :host([drawer-opened]) {
          --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
        }

        :host([overlay]) {
          --vaadin-app-layout-drawer-offset-left: 0;
          --vaadin-app-layout-navbar-offset-left: 0;
        }

        :host(:not([no-scroll])) [content] {
          overflow: auto;
        }

        [content] {
          height: 100%;
        }

        @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {
          :host {
            --vaadin-app-layout-touch-optimized: true;
          }
        }

        [part='navbar'],
        [part='navbar']::before {
          position: fixed;
          display: flex;
          align-items: center;
          top: 0;
          right: 0;
          left: 0;
          transition: left var(--vaadin-app-layout-transition);
          padding-top: var(--safe-area-inset-top);
          padding-left: var(--safe-area-inset-left);
          padding-right: var(--safe-area-inset-right);
          z-index: 1;
        }

        :host(:not([dir='rtl'])[primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          left: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([dir='rtl'][primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          right: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([primary-section='drawer']) [part='drawer'] {
          top: 0;
        }

        [part='navbar'][bottom] {
          top: auto;
          bottom: 0;
          padding-bottom: var(--safe-area-inset-bottom);
        }

        [part='drawer'] {
          overflow: auto;
          position: fixed;
          top: var(--vaadin-app-layout-navbar-offset-top, 0);
          right: auto;
          bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));
          left: var(--vaadin-app-layout-navbar-offset-left, 0);
          transition: transform var(--vaadin-app-layout-transition), visibility var(--vaadin-app-layout-transition);
          transform: translateX(-100%);
          max-width: 90%;
          width: 16em;
          box-sizing: border-box;
          padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);
          outline: none;
          /* The drawer should be inaccessible by the tabbing navigation when it is closed. */
          visibility: hidden;
        }

        :host([drawer-opened]) [part='drawer'] {
          /* The drawer should be accessible by the tabbing navigation when it is opened. */
          visibility: visible;
          transform: translateX(0%);
          touch-action: manipulation;
        }

        [part='backdrop'] {
          background-color: #000;
          opacity: 0.3;
        }

        :host(:not([drawer-opened])) [part='backdrop'] {
          opacity: 0;
        }

        :host([overlay]) [part='backdrop'] {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          pointer-events: none;
          transition: opacity var(--vaadin-app-layout-transition);
          -webkit-tap-highlight-color: transparent;
        }

        :host([overlay]) [part='drawer'] {
          top: 0;
          bottom: 0;
        }

        :host([overlay]) [part='drawer'],
        :host([overlay]) [part='backdrop'] {
          z-index: 2;
        }

        :host([drawer-opened][overlay]) [part='backdrop'] {
          pointer-events: auto;
          touch-action: manipulation;
        }

        :host([dir='rtl']) [part='drawer'] {
          left: auto;
          right: var(--vaadin-app-layout-navbar-offset-start, 0);
          transform: translateX(100%);
        }

        :host([dir='rtl']) [part='navbar'],
        :host([dir='rtl']) [part='navbar']::before {
          transition: right var(--vaadin-app-layout-transition);
        }

        :host([dir='rtl'][drawer-opened]) [part='drawer'] {
          transform: translateX(0%);
        }

        :host(:not([dir='rtl'])[drawer-opened]:not([overlay])) {
          padding-left: var(--vaadin-app-layout-drawer-offset-left);
        }

        :host([dir='rtl'][drawer-opened]:not([overlay])) {
          padding-right: var(--vaadin-app-layout-drawer-offset-left);
        }

        @media (max-width: 800px), (max-height: 600px) {
          :host {
            --vaadin-app-layout-drawer-overlay: true;
          }

          [part='drawer'] {
            width: 20em;
          }
        }
      </style>
      <div part="navbar" id="navbarTop">
        <slot name="navbar"></slot>
      </div>
      <div part="backdrop" on-click="_close" on-touchstart="_close"></div>
      <div part="drawer" id="drawer" on-keydown="__onDrawerKeyDown">
        <slot name="drawer" id="drawerSlot"></slot>
      </div>
      <div content>
        <slot></slot>
      </div>
      <div part="navbar" id="navbarBottom" bottom hidden>
        <slot name="navbar-bottom"></slot>
      </div>
      <div hidden><slot id="touchSlot" name="navbar touch-optimized"></slot></div>
    `}static get is(){return"vaadin-app-layout"}static get properties(){return{i18n:{type:Object,observer:"__i18nChanged",value:()=>({drawer:"Drawer"})},primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"__primarySectionChanged"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"__drawerOpenedChanged"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0},closeDrawerOn:{type:String,value:"vaadin-router-location-changed",observer:"_closeDrawerOnChanged"}}}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this),this.__trapFocusInDrawer=this.__trapFocusInDrawer.bind(this),this.__releaseFocusFromDrawer=this.__releaseFocusFromDrawer.bind(this),this.__focusTrapController=new Ss(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),fr(this,this._afterFirstRender),this._updateTouchOptimizedMode();const t=this.$.navbarTop.firstElementChild;this._navbarChildObserver=new J(t,()=>{this._updateTouchOptimizedMode()}),this._touchChildObserver=new J(this.$.touchSlot,()=>{this._updateTouchOptimizedMode()}),this._drawerChildObserver=new J(this.$.drawerSlot,()=>{this._updateDrawerSize()}),this._updateDrawerSize(),this._updateOverlayMode(),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener)}ready(){super.ready(),this.addController(this.__focusTrapController),this.__setAriaExpanded()}disconnectedCallback(){super.disconnectedCallback(),this._navbarChildObserver&&this._navbarChildObserver.disconnect(),this._drawerChildObserver&&this._drawerChildObserver.disconnect(),this._touchChildObserver&&this._touchChildObserver.disconnect(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener)}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}__primarySectionChanged(t){["navbar","drawer"].includes(t)||this.set("primarySection","navbar")}__drawerOpenedChanged(t,e){this.overlay&&(t?(this._updateDrawerHeight(),this.__trapFocusInDrawer()):e&&this.__releaseFocusFromDrawer()),this.__setAriaExpanded()}__i18nChanged(){this.__updateDrawerAriaAttributes()}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(t){t.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}__setAriaExpanded(){const t=this.querySelector("vaadin-drawer-toggle");t&&t.setAttribute("aria-expanded",this.drawerOpened)}_updateDrawerSize(){const t=this.querySelectorAll("[slot=drawer]").length,e=this.$.drawer;t===0?e.setAttribute("hidden",""):e.removeAttribute("hidden"),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){const e=this.$.navbarTop.getBoundingClientRect(),s=this.$.navbarBottom.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",e.height+"px"),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",s.height+"px");const o=this.$.drawer.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",o.width+"px")}_updateDrawerHeight(){const{scrollHeight:t,offsetHeight:e}=this.$.drawer,i=t>e?`${t}px`:"100%";this.style.setProperty("--_vaadin-app-layout-drawer-scroll-size",i)}_updateOverlayMode(){const t=this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay")==="true";!this.overlay&&t&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(t),!this.overlay&&this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),this._updateDrawerHeight(),this.__updateDrawerAriaAttributes()}__updateDrawerAriaAttributes(){const t=this.$.drawer;this.overlay?(t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",this.i18n.drawer)):(t.removeAttribute("role"),t.removeAttribute("aria-modal"),t.removeAttribute("aria-label"))}__drawerTransitionComplete(){return new Promise(t=>{if(this._getCustomPropertyValue("--vaadin-app-layout-transition")==="none"){t();return}this.$.drawer.addEventListener("transitionend",t,{once:!0})})}async __trapFocusInDrawer(){await this.__drawerTransitionComplete(),this.drawerOpened&&(this.$.drawer.setAttribute("tabindex","0"),this.__focusTrapController.trapFocus(this.$.drawer))}async __releaseFocusFromDrawer(){if(await this.__drawerTransitionComplete(),this.drawerOpened)return;this.__focusTrapController.releaseFocus(),this.$.drawer.removeAttribute("tabindex");const t=this.querySelector("vaadin-drawer-toggle");t&&(t.focus(),t.setAttribute("focus-ring","focus"))}__onDrawerKeyDown(t){t.key==="Escape"&&this.overlay&&(this.drawerOpened=!1)}_closeDrawerOnChanged(t,e){e&&window.removeEventListener(e,this.__closeOverlayDrawerListener),t&&window.addEventListener(t,this.__closeOverlayDrawerListener)}_close(){this.drawerOpened=!1}_getCustomPropertyValue(t){return(getComputedStyle(this).getPropertyValue(t)||"").trim().toLowerCase()}_updateTouchOptimizedMode(){const t=this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized")=="true",e=this.querySelectorAll('[slot*="navbar"]');e.length>0&&Array.from(e).forEach(i=>{i.getAttribute("slot").indexOf("touch-optimized")>-1&&(i.__touchOptimized=!0),t&&i.__touchOptimized?i.setAttribute("slot","navbar-bottom"):i.setAttribute("slot","navbar")}),this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length===0?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),t?this.$.navbarBottom.removeAttribute("hidden"):this.$.navbarBottom.setAttribute("hidden",""),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),Ct(this,()=>{this.removeAttribute("no-anim")})}}customElements.define(di.is,di);const sa=w`
  :host {
    width: var(--lumo-size-l);
    height: var(--lumo-size-l);
    min-width: auto;
    margin: 0 var(--lumo-space-s);
    padding: 0;
    background: transparent;
  }

  [part='icon'],
  [part='icon']::after,
  [part='icon']::before {
    position: inherit;
    height: auto;
    width: auto;
    background: transparent;
    top: auto;
  }

  [part='icon']::before {
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    content: var(--lumo-icons-menu);
  }
`;y("vaadin-drawer-toggle",[ks,sa],{moduleId:"lumo-drawer-toggle"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class hi extends Gt{static get template(){return E`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: default;
          position: relative;
          outline: none;
          height: 24px;
          width: 24px;
          padding: 4px;
        }

        [part='icon'],
        [part='icon']::after,
        [part='icon']::before {
          position: absolute;
          top: 8px;
          height: 3px;
          width: 24px;
          background-color: #000;
        }

        [part='icon']::after,
        [part='icon']::before {
          content: '';
        }

        [part='icon']::after {
          top: 6px;
        }

        [part='icon']::before {
          top: 12px;
        }
      </style>
      <slot>
        <div part="icon"></div>
      </slot>
    `}static get is(){return"vaadin-drawer-toggle"}static get properties(){return{ariaLabel:{type:String,value:"Toggle navigation panel",reflectToAttribute:!0}}}constructor(){super(),this.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("drawer-toggle-click",{bubbles:!0,composed:!0}))})}}customElements.define(hi.is,hi);y("vaadin-avatar",w`
    :host {
      --vaadin-avatar-size: var(--lumo-size-m);
      color: var(--lumo-secondary-text-color);
      background-color: var(--lumo-contrast-10pct);
      border-radius: 50%;
      outline: none;
      cursor: default;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([has-color-index]) {
      color: var(--lumo-base-color);
    }

    :host([focus-ring]) {
      border-color: var(--lumo-primary-color-50pct);
    }

    [part='icon'],
    [part='abbr'] {
      fill: currentColor;
    }

    [part='abbr'] {
      font-family: var(--lumo-font-family);
      font-size: 2.4375em;
      font-weight: 500;
    }

    :host([theme~='xlarge']) [part='abbr'] {
      font-size: 2.5em;
    }

    :host([theme~='large']) [part='abbr'] {
      font-size: 2.375em;
    }

    :host([theme~='small']) [part='abbr'] {
      font-size: 2.75em;
    }

    :host([theme~='xsmall']) [part='abbr'] {
      font-size: 3em;
    }

    :host([theme~='xlarge']) {
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='large']) {
      --vaadin-avatar-size: var(--lumo-size-l);
    }

    :host([theme~='small']) {
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-size: var(--lumo-size-xs);
    }
  `,{moduleId:"lumo-avatar"});/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rr=document.createElement("template");Rr.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-avatar-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQAAAsAAAAABnwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUmEY21hcAAAAYgAAABLAAABcOspwa1nbHlmAAAB1AAAAEUAAABMYO4o1WhlYWQAAAIcAAAALgAAADYYaAmGaGhlYQAAAkwAAAAdAAAAJAZsA1VobXR4AAACbAAAAAgAAAAIA+gAAGxvY2EAAAJ0AAAABgAAAAYAJgAAbWF4cAAAAnwAAAAeAAAAIAEOACFuYW1lAAACnAAAAUIAAAKavFDYrHBvc3QAAAPgAAAAHQAAAC52hGZ4eJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGT8wjiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+YmQO+p/FEMUcxDANKMwIkgMADiUMJQB4nGNgYGBlYGBgBmIdIGZhYGAMYWBkAAE/oCgjWJyZgQsszsKgBFbDAhJ/xfj/P4wE8lnAJAMjG8Mo4AGTMlAeOKwgmIERADU0CX0AeJxjYGIAAmYJpkgGHgYRBgZGJT1GEztGIzlGET5GKEuU8YuSpZKSpQuI+LfLv21emz9jHJQPJP7dsUywsEiwBACG8g9CAAAAeJxjYGRgYADicIOnh+P5bb4ycDO/AIow3JZ4rIJMM0swRQIpDgYmEA8AKwgJOwAAeJxjYGRgYA76nwUkXzAAAbMEAyMDKmACAE2GAskAAAAAAAAAA+gAAAAAAAAAJgAAeJxjYGRgYGBiEAViBjCLgYELCBkY/oP5DAAKuwEwAAB4nI2Qu07DMBSG//SGaCWEhMSAGDx1QU0vYyemdmDrUDEhuamTpkriyHEj9RF4B56Bh2Bg5mmY+8d4Qh3qo9jf+c45thQAt/hGgGYFuHN7s1q4YvbHbdKD5w555LmLAZ499+hfPPfxhDfPA/p33hB0rmmG+PDcwg2+PLfpfzx3yL+eu7gPHj33MAxmnvtYB6+eB/SftZTbtBjJWlppRmmki2qlkkMmzZnKGbVWpkp1Iabh5Ex1qQplpFVbsTmKqk5m1sYiNjoXC11YlWValEbvVWTDnbXlfDyOvQ8jnaOGZGyRouCfky63/AyzFBE0fYUVFBIckLnKZTOXda15s+GZulxgihCTC2eXnC3cfFNV7BfY4Mi9eT3BjNYiZh6zRyMnLdxs050xNE3panuaiD7Ezk2VmGPMiP/1h+71/ATcWYAhAAB4nGNgYoAALgbsgImRiZGZgaW0OLWIgQEACl4B2QAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(Rr.content);/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Mt extends ue(O(D(S))){static get template(){return E`
      <style>
        :host {
          display: inline-block;
          flex: none;
          border-radius: 50%;
          overflow: hidden;
          height: var(--vaadin-avatar-size);
          width: var(--vaadin-avatar-size);
          border: var(--vaadin-avatar-outline-width) solid transparent;
          margin: calc(var(--vaadin-avatar-outline-width) * -1);
          background-clip: content-box;
          --vaadin-avatar-outline-width: 2px;
          --vaadin-avatar-size: 64px;
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        [part='icon'] {
          font-size: 5.6em;
        }

        [part='abbr'] {
          font-size: 2.2em;
        }

        [part='icon'] > text {
          font-family: 'vaadin-avatar-icons';
        }

        :host([hidden]) {
          display: none !important;
        }

        svg[hidden] {
          display: none !important;
        }

        :host([has-color-index]) {
          position: relative;
          background-color: var(--vaadin-avatar-user-color);
        }

        :host([has-color-index])::before {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          border-radius: inherit;
          box-shadow: inset 0 0 0 2px var(--vaadin-avatar-user-color);
        }
      </style>
      <img hidden$="[[!__imgVisible]]" src$="[[img]]" aria-hidden="true" on-error="__onImageLoadError" />
      <svg
        part="icon"
        hidden$="[[!__iconVisible]]"
        id="avatar-icon"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle"></text>
      </svg>
      <svg
        part="abbr"
        hidden$="[[!__abbrVisible]]"
        id="avatar-abbr"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle">[[abbr]]</text>
      </svg>
    `}static get is(){return"vaadin-avatar"}static get properties(){return{img:{type:String,reflectToAttribute:!0,observer:"__imgChanged"},abbr:{type:String,reflectToAttribute:!0},name:{type:String,reflectToAttribute:!0},colorIndex:{type:Number,observer:"__colorIndexChanged"},i18n:{type:Object,value:()=>({anonymous:"anonymous"})},__imgVisible:Boolean,__iconVisible:Boolean,__abbrVisible:Boolean}}static get observers(){return["__imgOrAbbrOrNameChanged(img, abbr, name)","__i18nChanged(i18n.*)"]}ready(){super.ready(),this.__updateVisibility(),!this.name&&!this.abbr&&this.__setTitle(this.name),this.setAttribute("role","button"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}__colorIndexChanged(t){if(t!=null){const e=`--vaadin-user-color-${t}`;Boolean(getComputedStyle(document.documentElement).getPropertyValue(e))?(this.setAttribute("has-color-index",""),this.style.setProperty("--vaadin-avatar-user-color",`var(${e})`)):(this.removeAttribute("has-color-index"),console.warn(`The CSS property --vaadin-user-color-${t} is not defined`))}else this.removeAttribute("has-color-index")}__imgChanged(){this.__imgFailedToLoad=!1}__imgOrAbbrOrNameChanged(t,e,i){if(this.__updateVisibility(),e&&e!==this.__generatedAbbr){this.__setTitle(i?`${i} (${e})`:e);return}i?this.abbr=this.__generatedAbbr=i.split(" ").map(s=>s.charAt(0)).join(""):this.abbr=void 0,this.__setTitle(i)}__i18nChanged(t){t.base&&t.base.anonymous&&(this.__oldAnonymous&&this.getAttribute("title")===this.__oldAnonymous&&this.__setTitle(),this.__oldAnonymous=t.base.anonymous)}__updateVisibility(){this.__imgVisible=!!this.img&&!this.__imgFailedToLoad,this.__abbrVisible=!this.__imgVisible&&!!this.abbr,this.__iconVisible=!this.__imgVisible&&!this.abbr}__setTitle(t){t?this.setAttribute("title",t):this.setAttribute("title",this.i18n.anonymous)}__onImageLoadError(){this.img&&(console.warn(`<vaadin-avatar> The specified image could not be loaded: ${this.img}`),this.__imgFailedToLoad=!0,this.__updateVisibility())}}customElements.define(Mt.is,Mt);y("vaadin-avatar-group",w`
    :host {
      --vaadin-avatar-size: var(--lumo-size-m);
    }

    :host([theme~='small']) {
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-size: var(--lumo-size-xs);
    }

    :host([theme~='xlarge']) {
      --vaadin-avatar-group-overlap: 12px;
      --vaadin-avatar-group-overlap-border: 3px;
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='large']) {
      --vaadin-avatar-group-overlap: 10px;
      --vaadin-avatar-group-overlap-border: 3px;
      --vaadin-avatar-size: var(--lumo-size-l);
    }

    :host([theme~='small']) {
      --vaadin-avatar-group-overlap: 6px;
      --vaadin-avatar-group-overlap-border: 2px;
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-group-overlap: 4px;
      --vaadin-avatar-group-overlap-border: 2px;
      --vaadin-avatar-size: var(--lumo-size-xs);
    }
  `,{moduleId:"lumo-avatar-group"});const aa=w`
  :host {
    --_lumo-list-box-item-selected-icon-display: none;
    --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius-m) / 4);
  }

  [part='overlay'] {
    outline: none;
  }
`;y("vaadin-avatar-group-overlay",[It,_r,aa],{moduleId:"lumo-avatar-group-overlay"});y("vaadin-avatar-group-list-box",w`
    [part='items'] ::slotted(vaadin-item[theme='avatar-group-item']) {
      padding: var(--lumo-space-xs);
      padding-right: var(--lumo-space-m);
    }

    :host([dir='rtl']) [part='items'] ::slotted(vaadin-item[theme='avatar-group-item']) {
      padding: var(--lumo-space-xs);
      padding-left: var(--lumo-space-m);
    }
  `,{moduleId:"lumo-avatar-group-list-box"});y("vaadin-item",w`
    :host([theme='avatar-group-item']) [part='content'] {
      display: flex;
      align-items: center;
    }

    :host([theme='avatar-group-item']) ::slotted(vaadin-avatar) {
      width: var(--lumo-size-xs);
      height: var(--lumo-size-xs);
    }

    :host([theme='avatar-group-item']:not([dir='rtl'])) ::slotted(vaadin-avatar) {
      margin-right: var(--lumo-space-s);
    }

    :host([theme='avatar-group-item'][dir='rtl']) ::slotted(vaadin-avatar) {
      margin-left: var(--lumo-space-s);
    }
  `,{moduleId:"lumo-avatar-group-item"});/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ci extends gr{static get is(){return"vaadin-avatar-group-list-box"}}customElements.define(ci.is,ci);/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-avatar-group-overlay",w`
    :host {
      align-items: flex-start;
      justify-content: flex-start;
    }

    :host([bottom-aligned]) {
      justify-content: flex-end;
    }
  `,{moduleId:"vaadin-avatar-group-overlay-styles"});class ui extends Ve{static get is(){return"vaadin-avatar-group-overlay"}}customElements.define(ui.is,ui);/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const oe=document.createElement("div");oe.style.position="fixed";oe.style.clip="rect(0px, 0px, 0px, 0px)";oe.setAttribute("aria-live","polite");document.body.appendChild(oe);let ht;function Qe(r,t={}){const e=t.mode||"polite",i=t.timeout===void 0?150:t.timeout;e==="alert"?(oe.removeAttribute("aria-live"),oe.removeAttribute("role"),ht=ee.debounce(ht,xe,()=>{oe.setAttribute("role","alert")})):(ht&&ht.cancel(),oe.removeAttribute("role"),oe.setAttribute("aria-live",e)),oe.textContent="",setTimeout(()=>{oe.textContent=r},i)}/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dt=2;class pi extends Et(O(D(S))){static get template(){return E`
      <style>
        :host {
          display: block;
          width: 100%; /* prevent collapsing inside non-stretching column flex */
          --vaadin-avatar-group-overlap: 8px;
          --vaadin-avatar-group-overlap-border: 2px;
          --vaadin-avatar-size: 64px;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='container'] {
          display: flex;
          position: relative;
          width: 100%;
          flex-wrap: nowrap;
        }

        [part='avatar']:not(:first-child) {
          -webkit-mask-image: url('data:image/svg+xml;utf8,<svg viewBox=%220 0 300 300%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill-rule=%22evenodd%22 clip-rule=%22evenodd%22 d=%22M300 0H0V300H300V0ZM150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C122.386 100 100 122.386 100 150C100 177.614 122.386 200 150 200Z%22 fill=%22black%22/></svg>');
          mask-image: url('data:image/svg+xml;utf8,<svg viewBox=%220 0 300 300%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill-rule=%22evenodd%22 clip-rule=%22evenodd%22 d=%22M300 0H0V300H300V0ZM150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C122.386 100 100 122.386 100 150C100 177.614 122.386 200 150 200Z%22 fill=%22black%22/></svg>');
          -webkit-mask-size: calc(
            300% + var(--vaadin-avatar-group-overlap-border) * 6 - var(--vaadin-avatar-outline-width) * 6
          );
          mask-size: calc(
            300% + var(--vaadin-avatar-group-overlap-border) * 6 - var(--vaadin-avatar-outline-width) * 6
          );
        }

        [part='avatar']:not([dir='rtl']):not(:first-child) {
          margin-left: calc(var(--vaadin-avatar-group-overlap) * -1 - var(--vaadin-avatar-outline-width));
          -webkit-mask-position: calc(50% - var(--vaadin-avatar-size) + var(--vaadin-avatar-group-overlap));
          mask-position: calc(50% - var(--vaadin-avatar-size) + var(--vaadin-avatar-group-overlap));
        }

        [part='avatar'][dir='rtl']:not(:first-child) {
          margin-right: calc(var(--vaadin-avatar-group-overlap) * -1);
          -webkit-mask-position: calc(
            50% + var(--vaadin-avatar-size) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width)
          );
          mask-position: calc(
            50% + var(--vaadin-avatar-size) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width)
          );
        }
      </style>
      <div id="container" part="container">
        <template id="items" is="dom-repeat" items="[[__computeItems(items.*, __itemsInView, maxItemsVisible)]]">
          <vaadin-avatar
            name="[[item.name]]"
            abbr="[[item.abbr]]"
            img="[[item.img]]"
            part="avatar"
            theme$="[[theme]]"
            i18n="[[i18n]]"
            color-index="[[item.colorIndex]]"
          ></vaadin-avatar>
        </template>
        <vaadin-avatar
          id="overflow"
          part="avatar"
          hidden$="[[__computeMoreHidden(items.length, __itemsInView, __maxReached)]]"
          abbr="[[__computeMore(items.length, __itemsInView, maxItemsVisible)]]"
          theme$="[[theme]]"
          on-click="_onOverflowClick"
          on-keydown="_onOverflowKeyDown"
          aria-haspopup="listbox"
        ></vaadin-avatar>
      </div>
      <vaadin-avatar-group-overlay id="overlay" opened="{{_opened}}" on-vaadin-overlay-close="_onVaadinOverlayClose">
        <template>
          <vaadin-avatar-group-list-box on-keydown="_onListKeyDown">
            <template is="dom-repeat" items="[[__computeExtraItems(items.*, __itemsInView, maxItemsVisible)]]">
              <vaadin-item theme="avatar-group-item" role="option">
                <vaadin-avatar
                  name="[[item.name]]"
                  abbr="[[item.abbr]]"
                  img="[[item.img]]"
                  i18n="[[i18n]]"
                  part="avatar"
                  theme$="[[theme]]"
                  color-index="[[item.colorIndex]]"
                  tabindex="-1"
                  aria-hidden="true"
                ></vaadin-avatar>
                [[item.name]]
              </vaadin-item>
            </template>
          </vaadin-avatar-group-list-box>
        </template>
      </vaadin-avatar-group-overlay>
    `}static get is(){return"vaadin-avatar-group"}static get properties(){return{items:{type:Array},maxItemsVisible:{type:Number},i18n:{type:Object,value:()=>({anonymous:"anonymous",activeUsers:{one:"Currently one active user",many:"Currently {count} active users"},joined:"{user} joined",left:"{user} left"})},__maxReached:{type:Boolean,computed:"__computeMaxReached(items.length, maxItemsVisible)"},__itemsInView:{type:Number,value:null},_opened:{type:Boolean,observer:"__openedChanged",value:!1}}}static get observers(){return["__computeMoreTitle(items.length, __itemsInView, maxItemsVisible)","__itemsChanged(items.splices, items.*)","__i18nItemsChanged(i18n.*, items.length)"]}ready(){super.ready(),this.__boundSetPosition=this.__setPosition.bind(this),this._overlayElement=this.shadowRoot.querySelector("vaadin-avatar-group-overlay"),Ct(this,()=>{this.__setItemsInView()})}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),t==="dir"&&this.__setPosition()}get _avatars(){return this.shadowRoot.querySelectorAll("vaadin-avatar")}__getMessage(t,e){return e.replace("{user}",t.name||t.abbr||this.i18n.anonymous)}_onOverflowClick(t){t.stopPropagation(),this._opened?this.$.overlay.close():t.defaultPrevented||(this._opened=!0)}_onOverflowKeyDown(t){this._opened||/^(Enter|SpaceBar|\s)$/.test(t.key)&&(t.preventDefault(),this._opened=!0)}_onListKeyDown(t){(t.key==="Escape"||t.key==="Esc"||/^(Tab)$/.test(t.key))&&(this._opened=!1)}_onResize(){this.__setItemsInView(),this.__setPosition()}_onVaadinOverlayClose(t){t.detail.sourceEvent&&t.detail.sourceEvent.composedPath().indexOf(this)!==-1&&t.preventDefault()}__computeItems(t,e,i){const s=t.base||[],a=this.__getLimit(s.length,e,i);return a?s.slice(0,a):s}__computeExtraItems(t,e,i){const s=t.base||[],a=this.__getLimit(s.length,e,i);return a?s.slice(a):s}__computeMaxReached(t,e){return e!=null&&t>this.__getMax(e)}__computeMore(t,e,i){return`+${t-this.__getLimit(t,e,i)}`}__computeMoreHidden(t,e,i){return!i&&!(e&&e<t)}__computeMoreTitle(t,e,i){const s=this.__getLimit(t,e,i);if(s==null)return;const a=[];for(let o=s;o<t;o++){const n=this.items[o];n&&a.push(n.name||n.abbr||"anonymous")}this.$.overflow.setAttribute("title",a.join(`
`))}__getLimit(t,e,i){let s=null;const a=this.__getMax(i);return i!=null&&a<t?s=a-1:e&&e<t&&(s=e),Math.min(s,this.__calculateAvatarsFitWidth())}__getMax(t){return Math.max(t,Dt)}__itemsChanged(t,e){const i=e.base;this.$.items.render(),this.__setItemsInView(),t&&Array.isArray(t.indexSplices)?t.indexSplices.forEach(s=>{this.__announceItemsChange(i,s)}):Array.isArray(i)&&Array.isArray(this.__oldItems)&&Ts(i,this.__oldItems).forEach(a=>{this.__announceItemsChange(i,a)}),this.__oldItems=i}__announceItemsChange(t,e){const{addedCount:i,index:s,removed:a}=e;let o=[],n=[];i&&(o=t.slice(s,s+i).map(u=>this.__getMessage(u,this.i18n.joined||"{user} joined"))),a&&(n=a.map(u=>this.__getMessage(u,this.i18n.left||"{user} left")));const l=n.concat(o);l.length>0&&Qe(l.join(", "))}__i18nItemsChanged(t,e){const{base:i}=t;if(i&&i.activeUsers){const s=e===1?"one":"many";i.activeUsers[s]&&this.setAttribute("aria-label",i.activeUsers[s].replace("{count}",e||0))}}__openedChanged(t,e){t?(this._menuElement||(this._menuElement=this._overlayElement.content.querySelector("vaadin-avatar-group-list-box"),this._menuElement.setAttribute("role","listbox")),this._openedWithFocusRing=this.$.overflow.hasAttribute("focus-ring"),this._menuElement.querySelectorAll("vaadin-avatar").forEach(s=>s.removeAttribute("title")),this._menuElement.focus(),this.__setPosition(),window.addEventListener("scroll",this.__boundSetPosition,!0)):e&&(this.$.overflow.focus(),this._openedWithFocusRing&&this.$.overflow.setAttribute("focus-ring",""),window.removeEventListener("scroll",this.__boundSetPosition,!0)),this.$.overflow.setAttribute("aria-expanded",t===!0)}__setItemsInView(){const t=this._avatars,e=this.items;if(!e||!t||t.length<3)return;let i=this.__calculateAvatarsFitWidth();i===e.length-1&&(i=e.length),i>=e.length&&this._opened&&(this.$.overlay.close(),this.$.overlay._flushAnimation("closing")),this.__itemsInView=i}__calculateAvatarsFitWidth(){if(!this.shadowRoot||this._avatars.length<Dt)return Dt;const t=this._avatars,e=t[0].clientWidth,{marginLeft:i,marginRight:s}=getComputedStyle(t[1]),a=this.getAttribute("dir")=="rtl"?parseInt(s,0)-parseInt(i,0):parseInt(i,0)-parseInt(s,0);return Math.floor((this.$.container.offsetWidth-e)/(e+a))}__setPosition(){if(!this._opened)return;const t=this.$.overflow.getBoundingClientRect(),e=Math.min(window.innerHeight,document.documentElement.clientHeight),i=t.top>(e-t.height)/2;this.getAttribute("dir")==="rtl"?this._overlayElement.style.right=document.documentElement.clientWidth-t.right+"px":this._overlayElement.style.left=t.left+"px",i?(this._overlayElement.setAttribute("bottom-aligned",""),this._overlayElement.style.removeProperty("top"),this._overlayElement.style.bottom=e-t.top+"px"):(this._overlayElement.removeAttribute("bottom-aligned"),this._overlayElement.style.removeProperty("bottom"),this._overlayElement.style.top=t.bottom+"px")}}customElements.define(pi.is,pi);y("vaadin-checkbox",w`
    :host {
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
    }

    :host([has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    }

    [part='checkbox'] {
      width: calc(var(--lumo-size-m) / 2);
      height: calc(var(--lumo-size-m) / 2);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      line-height: 1.2;
      cursor: var(--lumo-clickable-cursor);
      flex: none;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--lumo-primary-color);
    }

    /* Needed to align the checkbox nicely on the baseline */
    [part='checkbox']::before {
      content: '\\2003';
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--lumo-icons-checkmark);
      color: var(--lumo-primary-contrast-color);
      font-size: calc(var(--lumo-size-m) / 2 + 2px);
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: '';
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background-color: var(--lumo-contrast-30pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background-color: var(--lumo-contrast-20pct);
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fr=vr(r=>class extends Ds(at(jt(r))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"checked"]}_onChange(e){this._toggleChecked(e.target.checked)}_toggleChecked(e){this.checked=e}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Mr{constructor(t,e,i){this.sourceSlot=t,this.targetFactory=e,this.copyCallback=i,t&&t.addEventListener("slotchange",()=>{this.__copying?this.__copying=!1:this.__checkAndCopyNodesToSlotTarget()})}hostConnected(){this.__sourceSlotObserver=new MutationObserver(()=>this.__checkAndCopyNodesToSlotTarget()),this.__checkAndCopyNodesToSlotTarget()}__checkAndCopyNodesToSlotTarget(){this.__sourceSlotObserver.disconnect();const t=this.targetFactory();if(!t)return;this.__slotTargetClones&&(this.__slotTargetClones.forEach(i=>{i.parentElement===t&&t.removeChild(i)}),delete this.__slotTargetClones);const e=this.sourceSlot.assignedNodes({flatten:!0}).filter(i=>!(i.nodeType==Node.TEXT_NODE&&i.textContent.trim()===""));e.length>0&&(t.innerHTML="",this.__copying=!0,this.__copyNodesToSlotTarget(e,t))}__copyNodesToSlotTarget(t,e){this.__slotTargetClones=this.__slotTargetClones||[],t.forEach(i=>{const s=i.cloneNode(!0);this.__slotTargetClones.push(s),e.appendChild(s),this.__sourceSlotObserver.observe(i,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}),typeof this.copyCallback=="function"&&this.copyCallback(t)}}/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Lt extends br(Fr(st(yr(O(D(Be(S))))))){static get is(){return"vaadin-checkbox"}static get template(){return E`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }

        .vaadin-checkbox-container {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: baseline;
        }

        .vaadin-checkbox-wrapper {
          position: relative;
          height: 100%;
        }

        /* visually hidden */
        ::slotted(input) {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: inherit;
          margin: 0;
        }
      </style>
      <div class="vaadin-checkbox-container">
        <div class="vaadin-checkbox-wrapper">
          <div part="checkbox"></div>
          <slot name="input"></slot>
        </div>

        <slot name="label"></slot>

        <div style="display: none !important">
          <slot id="noop"></slot>
        </div>
      </div>
    `}static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""}}}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("checkbox"),this.value="on"}connectedCallback(){super.connectedCallback(),this._inputController||(this._inputController=new Ne(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t}),this.addController(this._inputController),this.addController(new Ee(this.inputElement,this._labelController)),this.addController(new Mr(this.$.noop,()=>this._labelController.node,()=>this.__warnDeprecated())))}__warnDeprecated(){console.warn(`WARNING: Since Vaadin 22, placing the label as a direct child of a <vaadin-checkbox> is deprecated.
Please use <label slot="label"> wrapper or the label property instead.`)}_shouldSetActive(t){return t.target.localName==="a"?!1:super._shouldSetActive(t)}_toggleChecked(t){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(t)}}customElements.define(Lt.is,Lt);const oa=w`
  :host {
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    /* Effective height of vaadin-checkbox */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    display: flex;
    flex-direction: column;
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([focused]:not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;y("vaadin-checkbox-group",[St,kt,oa],{moduleId:"lumo-checkbox-group"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class mi extends ot(ue(at(O(D(S))))){static get is(){return"vaadin-checkbox-group"}static get template(){return E`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-group-field-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        :host(:not([has-label])) [part='label'] {
          display: none;
        }
      </style>

      <div class="vaadin-group-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div part="group-field">
          <slot></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{value:{type:Array,value:()=>[],notify:!0}}}static get observers(){return["__valueChanged(value, value.splices)"]}constructor(){super(),this.__registerCheckbox=this.__registerCheckbox.bind(this),this.__unregisterCheckbox=this.__unregisterCheckbox.bind(this),this.__onCheckboxCheckedChanged=this.__onCheckboxCheckedChanged.bind(this)}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","group"),this._observer=new J(this,({addedNodes:t,removedNodes:e})=>{const i=this.__filterCheckboxes(t),s=this.__filterCheckboxes(e);i.forEach(this.__registerCheckbox),s.forEach(this.__unregisterCheckbox),this.__warnOfCheckboxesWithoutValue(i)})}checkValidity(){return!this.required||this.value.length>0}__filterCheckboxes(t){return t.filter(e=>e instanceof Lt)}get __checkboxes(){return this.__filterCheckboxes([...this.children])}__warnOfCheckboxesWithoutValue(t){t.some(i=>{const{value:s}=i;return!i.hasAttribute("value")&&(!s||s==="on")})&&console.warn("Please provide the value attribute to all the checkboxes inside the checkbox group.")}__registerCheckbox(t){t.addEventListener("checked-changed",this.__onCheckboxCheckedChanged),this.disabled&&(t.disabled=!0),t.checked?this.__addCheckboxToValue(t.value):this.value.includes(t.value)&&(t.checked=!0)}__unregisterCheckbox(t){t.removeEventListener("checked-changed",this.__onCheckboxCheckedChanged),t.checked&&this.__removeCheckboxFromValue(t.value)}_disabledChanged(t,e){super._disabledChanged(t,e),!(!t&&e===void 0)&&e!==t&&this.__checkboxes.forEach(i=>{i.disabled=t})}__addCheckboxToValue(t){this.value.includes(t)||(this.value=[...this.value,t])}__removeCheckboxFromValue(t){this.value.includes(t)&&(this.value=this.value.filter(e=>e!==t))}__onCheckboxCheckedChanged(t){const e=t.target;e.checked?this.__addCheckboxToValue(e.value):this.__removeCheckboxFromValue(e.value)}__valueChanged(t){t.length===0&&this.__oldValue===void 0||(this.__oldValue=t,this.toggleAttribute("has-value",t.length>0),this.__checkboxes.forEach(e=>{e.checked=t.includes(e.value)}),this.validate())}_shouldRemoveFocus(t){return!this.contains(t.relatedTarget)}_setFocused(t){super._setFocused(t),t||this.validate()}}customElements.define(mi.is,mi);y("vaadin-overlay",It,{moduleId:"lumo-vaadin-overlay"});const na=w`
  [part='content'] {
    padding: 0;
  }

  :host {
    --_vaadin-combo-box-items-container-border-width: var(--lumo-space-xs);
    --_vaadin-combo-box-items-container-border-style: solid;
    --_vaadin-combo-box-items-container-border-color: transparent;
  }

  /* Loading state */

  /* When items are empty, the spinner needs some room */
  :host(:not([closing])) [part~='content'] {
    min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
  }

  [part~='overlay'] {
    position: relative;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  :host([loading]) [part~='loader'] {
    box-sizing: border-box;
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
    position: absolute;
    z-index: 1;
    left: var(--lumo-space-s);
    right: var(--lumo-space-s);
    top: var(--lumo-space-s);
    margin-left: auto;
    margin-inline-start: auto;
    margin-inline-end: 0;
    border: 2px solid transparent;
    border-color: var(--lumo-primary-color-50pct) var(--lumo-primary-color-50pct) var(--lumo-primary-color)
      var(--lumo-primary-color);
    border-radius: calc(0.5 * var(--lumo-icon-size-s));
    opacity: 0;
    animation: 1s linear infinite lumo-combo-box-loader-rotate, 0.3s 0.1s lumo-combo-box-loader-fade-in both;
    pointer-events: none;
  }

  @keyframes lumo-combo-box-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes lumo-combo-box-loader-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  /* RTL specific styles */

  :host([loading][dir='rtl']) [part~='loader'] {
    left: auto;
    margin-left: 0;
    margin-right: auto;
    margin-inline-start: 0;
    margin-inline-end: auto;
  }
`;y("vaadin-combo-box-overlay",[It,_r,na],{moduleId:"lumo-combo-box-overlay"});const la=w`
  :host {
    transition: background-color 100ms;
    overflow: hidden;
    --_lumo-item-selected-icon-display: block;
  }

  @media (any-hover: hover) {
    :host([focused]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  }
`;y("vaadin-combo-box-item",[Ps,la],{moduleId:"lumo-combo-box-item"});const da=w`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }
`;y("vaadin-combo-box",[Se,da],{moduleId:"lumo-combo-box"});/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class $t extends D(nt(S)){static get template(){return E`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-combo-box-item"}static get properties(){return{index:Number,item:Object,label:String,selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,_oldRenderer:Function}}static get observers(){return["__rendererOrItemChanged(renderer, index, item.*, selected, focused)","__updateLabel(label, renderer)"]}connectedCallback(){super.connectedCallback(),this._comboBox=this.parentNode.comboBox;const t=this._comboBox.getAttribute("dir");t&&this.setAttribute("dir",t)}requestContentUpdate(){if(!this.renderer)return;const t={index:this.index,item:this.item,focused:this.focused,selected:this.selected};this.renderer(this,this._comboBox,t)}__rendererOrItemChanged(t,e,i){i===void 0||e===void 0||(this._oldRenderer!==t&&(this.innerHTML="",delete this._$litPart$),t&&(this._oldRenderer=t,this.requestContentUpdate()))}__updateLabel(t,e){e||(this.textContent=t)}}customElements.define($t.is,$t);/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-combo-box-overlay",w`
    #overlay {
      width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));
    }

    [part='content'] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,{moduleId:"vaadin-combo-box-overlay-styles"});let ct;class Bt extends Qt(Ve){static get is(){return"vaadin-combo-box-overlay"}static get template(){return ct||(ct=super.template.cloneNode(!0),ct.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),ct}connectedCallback(){super.connectedCallback();const t=this.__dataHost,e=t&&t.getRootNode().host,i=e&&e.getAttribute("dir");i&&this.setAttribute("dir",i)}ready(){super.ready();const t=document.createElement("div");t.setAttribute("part","loader");const e=this.shadowRoot.querySelector('[part~="content"]');e.parentNode.insertBefore(t,e)}_outsideClickListener(t){const e=t.composedPath();!e.includes(this.positionTarget)&&!e.includes(this)&&this.close()}}customElements.define(Bt.is,Bt);/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */const fi=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),ha=fi&&fi[1]>=8,_i=3,ca={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:!0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){var r=this.grid?this._physicalRows*this._rowHeight:this._physicalSize;return r-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var r=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,r-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(r){r=this._clamp(r,0,this._maxVirtualStart),this.grid&&(r-=r%this._itemsPerRow),this._virtualStartVal=r},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(r){r%=this._physicalCount,r<0&&(r=this._physicalCount+r),this.grid&&(r-=r%this._itemsPerRow),this._physicalStartVal=r},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(r){this._physicalCountVal=r},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var r=this._firstVisibleIndexVal;if(r==null){var t=this._physicalTop+this._scrollOffset;r=this._iterateItems((e,i)=>{if(t+=this._getPhysicalSizeIncrement(e),t>this._scrollPosition)return this.grid?i-i%this._itemsPerRow:i;if(this.grid&&this._virtualCount-1===i)return i-i%this._itemsPerRow})||0,this._firstVisibleIndexVal=r}return r},get lastVisibleIndex(){var r=this._lastVisibleIndexVal;if(r==null){if(this.grid)r=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var t=this._physicalTop+this._scrollOffset;this._iterateItems((e,i)=>{t<this._scrollBottom&&(r=i),t+=this._getPhysicalSizeIncrement(e)})}this._lastVisibleIndexVal=r}return r},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler:function(){var r=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),t=r-this._scrollPosition,e=t>=0;if(this._scrollPosition=r,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;var i=Math.round(t/this._physicalAverage)*this._itemsPerRow;this._virtualStart+=i,this._physicalStart+=i,this._physicalTop=Math.min(Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){var s=this._getReusables(e);e?(this._physicalTop=s.physicalTop,this._virtualStart+=s.indexes.length,this._physicalStart+=s.indexes.length):(this._virtualStart-=s.indexes.length,this._physicalStart-=s.indexes.length),this._update(s.indexes,e?null:s.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),Ze)}},_getReusables:function(r){var t,e,i,s=[],a=this._hiddenContentSize*this._ratio,o=this._virtualStart,n=this._virtualEnd,l=this._physicalCount,u=this._physicalTop+this._scrollOffset,m=this._physicalBottom+this._scrollOffset,_=this._scrollPosition,g=this._scrollBottom;for(r?(t=this._physicalStart,e=_-u):(t=this._physicalEnd,e=m-g);i=this._getPhysicalSizeIncrement(t),e-=i,!(s.length>=l||e<=a);)if(r){if(n+s.length+1>=this._virtualCount||u+i>=_-this._scrollOffset)break;s.push(t),u+=i,t=(t+1)%l}else{if(o-s.length<=0||u+this._physicalSize-i<=g)break;s.push(t),u-=i,t=t===0?l-1:t-1}return{indexes:s,physicalTop:u-this._scrollOffset}},_update:function(r,t){if(!(r&&r.length===0||this._physicalCount===0)){if(this._manageFocus(),this._assignModels(r),this._updateMetrics(r),t)for(;t.length;){var e=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_isClientFull:function(){return this._scrollBottom!=0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(r){var t=this._clamp(this._physicalCount+r,_i,this._virtualCount-this._virtualStart);if(t=this._convertIndexToCompleteRow(t),this.grid){var e=t%this._itemsPerRow;e&&t-e<=this._physicalCount&&(t+=this._itemsPerRow),t-=e}var i=t-this._physicalCount,s=Math.round(this._physicalCount*.5);if(!(i<0)){if(i>0){var a=window.performance.now();[].push.apply(this._physicalItems,this._createPool(i));for(var o=0;o<i;o++)this._physicalSizes.push(0);this._physicalCount+=i,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=i),this._update(),this._templateCost=(window.performance.now()-a)/i,s=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||s===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,s)),zs):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,s),Ze))}},_render:function(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){var r=this._getReusables(!0);this._physicalTop=r.physicalTop,this._virtualStart+=r.indexes.length,this._physicalStart+=r.indexes.length,this._update(r.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(_i))},_gridChanged:function(r,t){typeof t!="undefined"&&(this.notifyResize(),we(),r&&this._updateGridMetrics())},_itemsChanged:function(r){if(r.path==="items")this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,xe);else if(r.path==="items.splices"){this._adjustVirtualIndex(r.value.indexSplices),this._virtualCount=this.items?this.items.length:0;var t=r.value.indexSplices.some(function(s){return s.addedCount>0||s.removed.length>0});if(t){var e=this._getActiveElement();this.contains(e)&&e.blur()}var i=r.value.indexSplices.some(function(s){return s.index+s.addedCount>=this._virtualStart&&s.index<=this._virtualEnd},this);(!this._isClientFull()||i)&&this._debounce("_render",this._render,xe)}else r.path!=="items.length"&&this._forwardItemPath(r.path,r.value)},_iterateItems:function(r,t){var e,i,s,a;if(arguments.length===2&&t){for(a=0;a<t.length;a++)if(e=t[a],i=this._computeVidx(e),(s=r.call(this,e,i))!=null)return s}else{for(e=this._physicalStart,i=this._virtualStart;e<this._physicalCount;e++,i++)if((s=r.call(this,e,i))!=null)return s;for(e=0;e<this._physicalStart;e++,i++)if((s=r.call(this,e,i))!=null)return s}},_computeVidx:function(r){return r>=this._physicalStart?this._virtualStart+(r-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+r},_updateMetrics:function(r){we();var t=0,e=0,i=this._physicalAverageCount,s=this._physicalAverage;this._iterateItems((a,o)=>{e+=this._physicalSizes[a],this._physicalSizes[a]=this._physicalItems[a].offsetHeight,t+=this._physicalSizes[a],this._physicalAverageCount+=this._physicalSizes[a]?1:0},r),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(e=this._itemsPerRow===1?e:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+t-e,this._itemsPerRow=1),this._physicalAverageCount!==i&&(this._physicalAverage=Math.round((s*i+t)/this._physicalAverageCount))},_updateGridMetrics:function(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200,this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200,this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var r=this._physicalTop;if(this.grid){var t=this._itemsPerRow*this._itemWidth,e=(this._viewportWidth-t)/2;this._iterateItems((i,s)=>{var a=s%this._itemsPerRow,o=Math.floor(a*this._itemWidth+e);this._isRTL&&(o*=-1),this.translate3d(o+"px",r+"px",0,this._physicalItems[i]),this._shouldRenderNextRow(s)&&(r+=this._rowHeight)})}else{const i=[];this._iterateItems((s,a)=>{const o=this._physicalItems[s];this.translate3d(0,r+"px",0,o),r+=this._physicalSizes[s];const n=o.id;n&&i.push(n)}),i.length&&this.setAttribute("aria-owns",i.join(" "))}},_getPhysicalSizeIncrement:function(r){return this.grid?this._computeVidx(r)%this._itemsPerRow!==this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[r]},_shouldRenderNextRow:function(r){return r%this._itemsPerRow===this._itemsPerRow-1},_adjustScrollPosition:function(){var r=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(r!==0){this._physicalTop-=r;var t=this._scrollPosition;!ha&&t>0&&this._resetScrollPosition(t-r)}},_resetScrollPosition:function(r){this.scrollTarget&&r>=0&&(this._scrollTop=r,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(r){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,r=r||this._scrollHeight===0,r=r||this._scrollPosition>=this._estScrollHeight-this._physicalSize,r=r||this.grid&&this.$.items.style.height<this._estScrollHeight,(r||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToIndex:function(r){if(!(typeof r!="number"||r<0||r>this.items.length-1)&&(we(),this._physicalCount!==0)){r=this._clamp(r,0,this._virtualCount-1),(!this._isIndexRendered(r)||r>=this._maxVirtualStart)&&(this._virtualStart=this.grid?r-this._itemsPerRow*2:r-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var t=this._physicalStart,e=this._virtualStart,i=0,s=this._hiddenContentSize;e<r&&i<=s;)i+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,e+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+i),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},xe)},updateSizeForItem:function(r){return this.updateSizeForIndex(this.items.indexOf(r))},updateSizeForIndex:function(r){return this._isIndexRendered(r)&&(this._updateMetrics([this._getPhysicalIndex(r)]),this._positionItems()),null},_convertIndexToCompleteRow:function(r){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(r/this._itemsPerRow)*this._itemsPerRow:r},_isIndexRendered:function(r){return r>=this._virtualStart&&r<=this._virtualEnd},_isIndexVisible:function(r){return r>=this.firstVisibleIndex&&r<=this.lastVisibleIndex},_getPhysicalIndex:function(r){return(this._physicalStart+(r-this._virtualStart))%this._physicalCount},_clamp:function(r,t,e){return Math.min(e,Math.max(t,r))},_debounce:function(r,t,e){this._debouncers=this._debouncers||{},this._debouncers[r]=ee.debounce(this._debouncers[r],e,t.bind(this)),Os(this._debouncers[r])}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ua=1e5,Pt=1e3;class Lr{constructor({createElements:t,updateElement:e,scrollTarget:i,scrollContainer:s,elementsContainer:a,reorderElements:o}){this.isAttached=!0,this._vidxOffset=0,this.createElements=t,this.updateElement=e,this.scrollTarget=i,this.scrollContainer=s,this.elementsContainer=a||s,this.reorderElements=o,this._maxPages=1.3,this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500},this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler()),getComputedStyle(this.scrollTarget).overflow==="visible"&&(this.scrollTarget.style.overflow="auto"),getComputedStyle(this.scrollContainer).position==="static"&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler()),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",n=>this.__onWheel(n)),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>this.__mouseDown=!0),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()}))}_manageFocus(){}_removeFocusedItem(){}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}scrollToIndex(t){if(typeof t!="number"||isNaN(t)||this.size===0||!this.scrollTarget.offsetHeight)return;t=this._clamp(t,0,this.size-1);const e=this.__getVisibleElements().length;let i=Math.floor(t/this.size*this._virtualCount);this._virtualCount-i<e?(i=this._virtualCount-(this.size-t),this._vidxOffset=this.size-this._virtualCount):i<e?t<Pt?(i=t,this._vidxOffset=0):(i=Pt,this._vidxOffset=t-i):this._vidxOffset=t-i,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(i),this.adjustedFirstVisibleIndex!==t&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(t)||0),this._scrollHandler()}flush(){this.scrollTarget.offsetHeight!==0&&(this._resizeHandler(),we(),this._scrollHandler(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}update(t=0,e=this.size-1){this.__getVisibleElements().forEach(i=>{i.__virtualIndex>=t&&i.__virtualIndex<=e&&this.__updateElement(i,i.__virtualIndex,!0)})}__updateElement(t,e,i){t.style.minHeight&&(t.style.minHeight=""),!this.__preventElementUpdates&&(t.__lastUpdatedIndex!==e||i)&&(this.updateElement(t,e),t.__lastUpdatedIndex=e),t.offsetHeight===0&&(t.style.minHeight="200px")}__getIndexScrollOffset(t){const e=this.__getVisibleElements().find(i=>i.__virtualIndex===t);return e?this.scrollTarget.getBoundingClientRect().top-e.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(t){if(t===this.size)return;this.__preventElementUpdates=!0;let e,i;if(t>0&&(e=this.adjustedFirstVisibleIndex,i=this.__getIndexScrollOffset(e)),this.__size=t,we(),this._itemsChanged({path:"items"}),we(),t>0){e=Math.min(e,t-1),this.scrollToIndex(e);const s=this.__getIndexScrollOffset(e);i!==void 0&&s!==void 0&&(this._scrollTop+=i-s)}this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler()),this.__preventElementUpdates=!1,this._resizeHandler(),we()}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(t){this.scrollTarget.scrollTop=t}get items(){return{length:Math.min(this.size,ua)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const t=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(t["padding-top"],10),this._isRTL=Boolean(t.direction==="rtl"),this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(t){const e=this.createElements(t),i=document.createDocumentFragment();return e.forEach(s=>{s.style.position="absolute",i.appendChild(s),this.__resizeObserver.observe(s)}),this.elementsContainer.appendChild(i),e}_assignModels(t){this._iterateItems((e,i)=>{const s=this._physicalItems[e];s.hidden=i>=this.size,s.hidden?delete s.__lastUpdatedIndex:(s.__virtualIndex=i+(this._vidxOffset||0),this.__updateElement(s,s.__virtualIndex))},t)}_isClientFull(){return setTimeout(()=>this.__clientFull=!0),this.__clientFull||super._isClientFull()}translate3d(t,e,i,s){s.style.transform=`translateY(${e})`}toggleScrollListener(){}_scrollHandler(){this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0)),super._scrollHandler(),this.reorderElements&&(this.__scrollReorderDebouncer=ee.debounce(this.__scrollReorderDebouncer,ce.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements())),this.__previousScrollTop=this._scrollTop}__onWheel(t){if(t.ctrlKey||this._hasScrolledAncestor(t.target,t.deltaX,t.deltaY))return;let e=t.deltaY;if(t.deltaMode===WheelEvent.DOM_DELTA_LINE?e*=this._scrollLineHeight:t.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(e*=this._scrollPageHeight),this._deltaYAcc=this._deltaYAcc||0,this._wheelAnimationFrame){this._deltaYAcc+=e,t.preventDefault();return}e+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=ee.debounce(this.__debouncerWheelAnimationFrame,xe,()=>this._wheelAnimationFrame=!1);const i=Math.abs(t.deltaX)+Math.abs(e);this._canScroll(this.scrollTarget,t.deltaX,e)?(t.preventDefault(),this.scrollTarget.scrollTop+=e,this.scrollTarget.scrollLeft+=t.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=ee.debounce(this._debouncerIgnoreNewWheel,ce.after(this.timeouts.IGNORE_WHEEL),()=>this._ignoreNewWheel=!1)):this._hasResidualMomentum&&i<=this._previousMomentum||this._ignoreNewWheel?t.preventDefault():i>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=i}_hasScrolledAncestor(t,e,i){if(t===this.scrollTarget||t===this.scrollTarget.getRootNode().host)return!1;if(this._canScroll(t,e,i)&&["auto","scroll"].indexOf(getComputedStyle(t).overflow)!==-1)return!0;if(t!==this&&t.parentElement)return this._hasScrolledAncestor(t.parentElement,e,i)}_canScroll(t,e,i){return i>0&&t.scrollTop<t.scrollHeight-t.offsetHeight||i<0&&t.scrollTop>0||e>0&&t.scrollLeft<t.scrollWidth-t.offsetWidth||e<0&&t.scrollLeft>0}_getScrollLineHeight(){const t=document.createElement("div");t.style.fontSize="initial",t.style.display="none",document.body.appendChild(t);const e=window.getComputedStyle(t).fontSize;return document.body.removeChild(t),e?window.parseInt(e):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(t=>!t.hidden)}__reorderElements(){if(this.__mouseDown){this.__pendingReorder=!0;return}this.__pendingReorder=!1;const t=this._virtualStart+(this._vidxOffset||0),e=this.__getVisibleElements(),s=e.find(n=>n.contains(this.elementsContainer.getRootNode().activeElement)||n.contains(this.scrollTarget.getRootNode().activeElement))||e[0];if(!s)return;const a=s.__virtualIndex-t,o=e.indexOf(s)-a;if(o>0)for(let n=0;n<o;n++)this.elementsContainer.appendChild(e[n]);else if(o<0)for(let n=e.length+o;n<e.length;n++)this.elementsContainer.insertBefore(e[n],e[0]);if(Ar){const{transform:n}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout(()=>this.scrollTarget.style.transform=n)}}_adjustVirtualIndexOffset(t){if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(t)>1e4){const e=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.offsetHeight),i=e*this.size;this._vidxOffset=Math.round(i-e*this._virtualCount)}else{const e=this._vidxOffset,i=Pt,s=100;this._scrollTop===0?(this._vidxOffset=0,e!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<i&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,s),super.scrollToIndex(this.firstVisibleIndex+(e-this._vidxOffset)));const a=this.size-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=a,e!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-i&&this._vidxOffset<a&&(this._vidxOffset+=Math.min(a-this._vidxOffset,s),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-e)))}}}Object.setPrototypeOf(Lr.prototype,ca);class Jt{constructor(t){this.__adapter=new Lr(t)}get size(){return this.__adapter.size}set size(t){this.__adapter.size=t}scrollToIndex(t){this.__adapter.scrollToIndex(t)}update(t=0,e=this.size-1){this.__adapter.update(t,e)}flush(){this.__adapter.flush()}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}}/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ie=class{toString(){return""}};/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Vt extends S{static get is(){return"vaadin-combo-box-scroller"}static get template(){return E`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-combo-box-items-container-border-width);
          border-style: var(--_vaadin-combo-box-items-container-border-style);
          border-color: var(--_vaadin-combo-box-items-container-border-color);
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}static get properties(){return{items:{type:Array,observer:"__itemsChanged"},focusedIndex:{type:Number,observer:"__focusedIndexChanged"},loading:{type:Boolean,observer:"__loadingChanged"},opened:{type:Boolean,observer:"__openedChanged"},selectedItem:{type:Object},itemIdPath:{type:String},comboBox:{type:Object},getItemLabel:{type:Object},renderer:{type:Object,observer:"__rendererChanged"},theme:{type:String}}}constructor(){super(),this.__boundOnItemClick=this.__onItemClick.bind(this)}__openedChanged(t){t&&this.requestContentUpdate()}ready(){super.ready(),this.__hostTagName=this.constructor.is.replace("-scroller",""),this.setAttribute("role","listbox"),this.addEventListener("click",t=>t.stopPropagation()),this.__patchWheelOverScrolling(),this.__virtualizer=new Jt({createElements:this.__createElements.bind(this),updateElement:this.__updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.$.selector})}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}scrollIntoView(t){if(!(this.opened&&t>=0))return;const e=this._visibleItemsCount();let i=t;t>this.__virtualizer.lastVisibleIndex-1?(this.__virtualizer.scrollToIndex(t),i=t-e+1):t>this.__virtualizer.firstVisibleIndex&&(i=this.__virtualizer.firstVisibleIndex),this.__virtualizer.scrollToIndex(Math.max(0,i));const s=[...this.children].find(l=>!l.hidden&&l.index===this.__virtualizer.lastVisibleIndex);if(!s||t!==s.index)return;const a=s.getBoundingClientRect(),o=this.getBoundingClientRect(),n=a.bottom-o.bottom+this._viewportTotalPaddingBottom;n>0&&(this.scrollTop+=n)}__getAriaRole(t){return t!==void 0?"option":!1}__getAriaSelected(t,e){return this.__isItemFocused(t,e).toString()}__isItemFocused(t,e){return t==e}__isItemSelected(t,e,i){return t instanceof Ie?!1:i&&t!==void 0&&e!==void 0?this.get(i,t)===this.get(i,e):t===e}__itemsChanged(t){this.__virtualizer&&t&&(this.__virtualizer.size=t.length,this.__virtualizer.flush(),this.setAttribute("aria-setsize",t.length),this.requestContentUpdate())}__loadingChanged(t){this.__virtualizer&&!t&&setTimeout(()=>this.requestContentUpdate())}__focusedIndexChanged(t,e){!this.__virtualizer||(t!==e&&this.requestContentUpdate(),t>=0&&this.scrollIntoView(t))}__rendererChanged(t,e){(t||e)&&this.requestContentUpdate()}__createElements(t){return[...Array(t)].map(()=>{const e=document.createElement(`${this.__hostTagName}-item`);return e.addEventListener("click",this.__boundOnItemClick),e.tabIndex="-1",e.style.width="100%",e})}__updateElement(t,e){const i=this.items[e],s=this.focusedIndex;t.setProperties({item:i,index:this.__requestItemByIndex(i,e),label:this.getItemLabel(i),selected:this.__isItemSelected(i,this.selectedItem,this.itemIdPath),renderer:this.renderer,focused:this.__isItemFocused(s,e)}),t.id=`${this.__hostTagName}-item-${e}`,t.setAttribute("role",this.__getAriaRole(e)),t.setAttribute("aria-selected",this.__getAriaSelected(s,e)),t.setAttribute("aria-posinset",e+1),this.theme?t.setAttribute("theme",this.theme):t.removeAttribute("theme")}__onItemClick(t){this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:t.currentTarget.item}}))}__patchWheelOverScrolling(){this.$.selector.addEventListener("wheel",t=>{const e=this.scrollTop===0,i=this.scrollHeight-this.scrollTop-this.clientHeight<=1;(e&&t.deltaY<0||i&&t.deltaY>0)&&t.preventDefault()})}get _viewportTotalPaddingBottom(){if(this._cachedViewportTotalPaddingBottom===void 0){const t=window.getComputedStyle(this.$.selector);this._cachedViewportTotalPaddingBottom=[t.paddingBottom,t.borderBottomWidth].map(e=>parseInt(e,10)).reduce((e,i)=>e+i)}return this._cachedViewportTotalPaddingBottom}__requestItemByIndex(t,e){return t instanceof Ie&&e!==void 0&&this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:e,currentScrollerPos:this._oldScrollerPosition}})),e}_visibleItemsCount(){return this.__virtualizer.scrollToIndex(this.__virtualizer.firstVisibleIndex),this.__virtualizer.size>0?this.__virtualizer.lastVisibleIndex-this.__virtualizer.firstVisibleIndex+1:0}}customElements.define(Vt.is,Vt);/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Me extends S{static get is(){return"vaadin-combo-box-dropdown"}static get template(){return E`
      <vaadin-combo-box-overlay
        id="overlay"
        hidden$="[[_isOverlayHidden(_items.*, loading)]]"
        loading$="[[loading]]"
        opened="{{_overlayOpened}}"
        theme$="[[theme]]"
        position-target="[[positionTarget]]"
        no-vertical-overlap
        restore-focus-on-close="[[restoreFocusOnClose]]"
        restore-focus-node="[[restoreFocusNode]]"
      ></vaadin-combo-box-overlay>
    `}static get properties(){return{opened:Boolean,positionTarget:{type:Object,observer:"_positionTargetChanged"},renderer:Function,loading:{type:Boolean,value:!1,reflectToAttribute:!0},theme:String,_selectedItem:{type:Object},_items:{type:Array},_focusedIndex:{type:Number,value:-1},focusedItem:{type:String,computed:"_getFocusedItem(_focusedIndex)"},_itemLabelPath:{type:String,value:"label"},_itemValuePath:{type:String,value:"value"},_scroller:Object,_itemIdPath:String,_overlayOpened:{type:Boolean,observer:"_openedChanged"}}}static get observers(){return["_openedOrItemsChanged(opened, _items, loading)","__updateScroller(_scroller, _items, opened, loading, _selectedItem, _itemIdPath, _focusedIndex, renderer, theme)"]}constructor(){super();const t=Me._uniqueId=1+Me._uniqueId||0;this.scrollerId=`${this.localName}-scroller-${t}`}ready(){super.ready(),this.__hostTagName=this.constructor.is.replace("-dropdown","");const t=this.$.overlay,e=`${this.__hostTagName}-scroller`;t.renderer=i=>{if(!i.firstChild){const s=document.createElement(e);i.appendChild(s)}},t.requestContentUpdate(),this._scroller=t.content.querySelector(e),this._scroller.id=this.scrollerId,this._scroller.getItemLabel=this.getItemLabel.bind(this),this._scroller.comboBox=this.getRootNode().host,this._scroller.addEventListener("selection-changed",i=>this._forwardScrollerEvent(i)),this._scroller.addEventListener("index-requested",i=>this._forwardScrollerEvent(i)),t.addEventListener("touchend",i=>this._fireTouchAction(i)),t.addEventListener("touchmove",i=>this._fireTouchAction(i)),t.addEventListener("mousedown",i=>i.preventDefault()),t.addEventListener("vaadin-overlay-outside-click",i=>{i.preventDefault()})}disconnectedCallback(){super.disconnectedCallback(),this._overlayOpened=!1}_fireTouchAction(t){this.dispatchEvent(new CustomEvent("vaadin-overlay-touch-action",{detail:{sourceEvent:t}}))}_forwardScrollerEvent(t){this.dispatchEvent(new CustomEvent(t.type,{detail:t.detail}))}_openedChanged(t,e){t?(this._setOverlayWidth(),this._scroller.style.maxHeight=getComputedStyle(this).getPropertyValue(`--${this.__hostTagName}-overlay-max-height`)||"65vh",this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0}))):e&&!this.__emptyItems&&this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0}))}_openedOrItemsChanged(t,e,i){const s=e&&e.length;s||(this.__emptyItems=!0),this._overlayOpened=!!(t&&(i||s)),this.__emptyItems=!1}_getFocusedItem(t){if(t>=0)return this._items[t]}indexOfLabel(t){if(this._items&&t){for(let e=0;e<this._items.length;e++)if(this.getItemLabel(this._items[e]).toString().toLowerCase()===t.toString().toLowerCase())return e}return-1}getItemLabel(t,e){e=e||this._itemLabelPath;let i=t&&e?this.get(e,t):void 0;return i==null&&(i=t?t.toString():""),i}_scrollIntoView(t){!this._scroller||this._scroller.scrollIntoView(t)}adjustScrollPosition(){this.opened&&this._items&&this._scrollIntoView(this._focusedIndex)}__updateScroller(t,e,i,s,a,o,n,l,u){t&&t.setProperties({items:i?e:[],opened:i,loading:s,selectedItem:a,itemIdPath:o,focusedIndex:n,renderer:l,theme:u})}_isOverlayHidden(){return!this.loading&&!(this._items&&this._items.length)}_positionTargetChanged(t){t&&this._setOverlayWidth()}_setOverlayWidth(){if(!this.positionTarget)return;const t=this.positionTarget.clientWidth+"px",e=`${this.__hostTagName}-overlay`,i=getComputedStyle(this).getPropertyValue(`--${e}-width`);this.$.overlay.style.setProperty(`--_${e}-default-width`,t),i===""?this.$.overlay.style.removeProperty(`--${e}-width`):this.$.overlay.style.setProperty(`--${e}-width`,i),this.$.overlay._updatePosition()}}customElements.define(Me.is,Me);/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pa=r=>class extends r{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new Ie}}}static get observers(){return["_dataProviderFilterChanged(filter, dataProvider)","_dataProviderClearFilter(dataProvider, opened, value)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}_dataProviderClearFilter(e,i,s){e&&!this.loading&&this.filter&&!(i&&this.autoOpenDisabled&&s===this.filter)&&(this.size=void 0,this._pendingRequests={},this.filter="",this.clearCache())}ready(){super.ready(),this.clearCache(),this.$.dropdown.addEventListener("index-requested",e=>{const i=e.detail.index,s=e.detail.currentScrollerPos,a=Math.floor(this.pageSize*1.5);if(!this._shouldSkipIndex(i,a,s)&&i!==void 0){const o=this._getPageForIndex(i);this._shouldLoadPage(o)&&this._loadPage(o)}})}_dataProviderFilterChanged(){!this._shouldFetchData()||(this.size=void 0,this._pendingRequests={},this.clearCache())}_shouldFetchData(){return this.dataProvider?this.opened||this.filter&&this.filter.length:!1}_ensureFirstPage(e){e&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldSkipIndex(e,i,s){return s!==0&&e>=s-i&&e<=s+i}_shouldLoadPage(e){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;const i=this.filteredItems[e*this.pageSize];return i!==void 0?i instanceof Ie:this.size===void 0}_loadPage(e){if(!this._pendingRequests[e]&&this.dataProvider){this.loading=!0;const i={page:e,pageSize:this.pageSize,filter:this.filter},s=(a,o)=>{if(this._pendingRequests[e]===s){if(this.filteredItems)this.splice("filteredItems",i.page*i.pageSize,a.length,...a);else{const n=[];n.splice(i.page*i.pageSize,a.length,...a),this.filteredItems=n}this._isValidValue(this.value)&&this._getItemValue(this.selectedItem)!==this.value&&this._selectItemForValue(this.value),!this.opened&&!this.hasAttribute("focused")&&this._commitValue(),this.size=o,delete this._pendingRequests[e],Object.keys(this._pendingRequests).length===0&&(this.loading=!1)}};this._pendingRequests[e]||(this._pendingRequests[e]=s,this.dataProvider(i,s))}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){if(!this.dataProvider)return;this._pendingRequests={};const e=[];for(let i=0;i<(this.size||0);i++)e.push(this.__placeHolder);this.filteredItems=e,this._shouldFetchData()?this._loadPage(0):this._forceNextRequest=!0}_sizeChanged(e=0){const i=(this.filteredItems||[]).slice(0,e);for(let s=0;s<e;s++)i[s]=i[s]!==void 0?i[s]:this.__placeHolder;this.filteredItems=i,this._flushPendingRequests(e)}_pageSizeChanged(e,i){if(Math.floor(e)!==e||e<1)throw this.pageSize=i,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(e,i){this._ensureItemsOrDataProvider(()=>{this.dataProvider=i})}_ensureItemsOrDataProvider(e){if(this.items!==void 0&&this.dataProvider!==void 0)throw e(),new Error("Using `items` and `dataProvider` together is not supported");this.dataProvider&&!this.filteredItems&&(this.filteredItems=[])}_warnDataProviderValue(e,i){if(e&&i!==""&&(this.selectedItem===void 0||this.selectedItem===null)){const s=this._indexOfValue(i,this.filteredItems);(s<0||!this._getItemLabel(this.filteredItems[s]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}_flushPendingRequests(e){if(this._pendingRequests){const i=Math.ceil(e/this.pageSize),s=Object.keys(this._pendingRequests);for(let a=0;a<s.length;a++){const o=parseInt(s[a]);o>=i&&this._pendingRequests[o]([],e)}}}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class $r{constructor(t){this.host=t,t.addEventListener("opened-changed",()=>{t.opened||this.__setVirtualKeyboardEnabled(!1)}),t.addEventListener("blur",()=>this.__setVirtualKeyboardEnabled(!0)),t.addEventListener("touchstart",()=>this.__setVirtualKeyboardEnabled(!0))}__setVirtualKeyboardEnabled(t){this.host.inputElement&&(this.host.inputElement.inputMode=t?"":"none")}}/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Br=r=>class extends Be(wt(jt(at(r)))){static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},autoOpenDisabled:{type:Boolean},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_loadingChanged"},_focusedIndex:{type:Number,observer:"_focusedIndexChanged",value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,_toggleElement:{type:Object,observer:"_toggleElementChanged"},_closeOnBlurIsPrevented:Boolean,__restoreFocusOnClose:Boolean}}static get observers(){return["_filterChanged(filter, itemValuePath, itemLabelPath)","_itemsOrPathsChanged(items.*, itemValuePath, itemLabelPath)","_filteredItemsChanged(filteredItems.*, itemValuePath, itemLabelPath)","_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)"]}constructor(){super(),this._boundOnFocusout=this._onFocusout.bind(this),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundOnClearButtonMouseDown=this.__onClearButtonMouseDown.bind(this),this._boundClose=this.close.bind(this),this._boundOnOpened=this._onOpened.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}get _inputElementValue(){return this.inputElement?this.inputElement[this._propertyForValue]:void 0}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._propertyForValue]=e)}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.autocomplete="off",e.autocapitalize="off",e.setAttribute("role","combobox"),e.setAttribute("aria-autocomplete","list"),e.setAttribute("aria-expanded",!!this.opened),e.setAttribute("spellcheck","false"),e.setAttribute("autocorrect","off"),this._revertInputValueToValue(),this.clearElement&&this.clearElement.addEventListener("mousedown",this._boundOnClearButtonMouseDown))}ready(){super.ready(),this.addEventListener("focusout",this._boundOnFocusout),this._lastCommittedValue=this.value,this.$.dropdown.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged),this.addEventListener("vaadin-combo-box-dropdown-closed",this._boundClose),this.addEventListener("vaadin-combo-box-dropdown-opened",this._boundOnOpened),this.addEventListener("click",this._boundOnClick),this.$.dropdown.addEventListener("vaadin-overlay-touch-action",this._boundOnOverlayTouchAction),this.addEventListener("touchend",this._boundOnTouchend);const e=()=>{requestAnimationFrame(()=>{this.$.dropdown.$.overlay.bringToFront()})};this.addEventListener("mousedown",e),this.addEventListener("touchstart",e),ke(this),this.addController(new $r(this))}requestContentUpdate(){!this.$.dropdown._scroller||(this.$.dropdown._scroller.requestContentUpdate(),this._getItemElements().forEach(e=>{e.requestContentUpdate()}))}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.opened=!1}_focusedIndexChanged(e,i){i!==void 0&&this._updateActiveDescendant(e)}_updateActiveDescendant(e){const i=this.inputElement;if(!i)return;const s=this._getItemElements().find(a=>a.index===e);s?i.setAttribute("aria-activedescendant",s.id):i.removeAttribute("aria-activedescendant")}_openedChanged(e,i){if(i===void 0)return;e?(this._openedWithFocusRing=this.hasAttribute("focus-ring"),!this.hasAttribute("focused")&&!Je&&this.focus(),this.__restoreFocusOnClose=!0):(this._onClosed(),this._openedWithFocusRing&&this.hasAttribute("focused")&&this.setAttribute("focus-ring",""));const s=this.inputElement;s&&(s.setAttribute("aria-expanded",!!e),e?s.setAttribute("aria-controls",this.$.dropdown.scrollerId):s.removeAttribute("aria-controls"))}_onOverlayTouchAction(){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_isClearButton(e){return e.composedPath()[0]===this.clearElement}_handleClearButtonClick(e){e.preventDefault(),this._clear(),this.opened&&this.requestContentUpdate()}_onHostClick(e){this.autoOpenDisabled||this.open()}_onClick(e){this._closeOnBlurIsPrevented=!0;const i=e.composedPath();this._isClearButton(e)?this._handleClearButtonClick(e):i.indexOf(this._toggleElement)>-1?this.opened?this.close():this.open():this._onHostClick(e),this._closeOnBlurIsPrevented=!1}_onKeyDown(e){e.key==="Tab"?this.__restoreFocusOnClose=!1:e.key==="ArrowDown"?(this._closeOnBlurIsPrevented=!0,this._onArrowDown(),this._closeOnBlurIsPrevented=!1,e.preventDefault()):e.key==="ArrowUp"?(this._closeOnBlurIsPrevented=!0,this._onArrowUp(),this._closeOnBlurIsPrevented=!1,e.preventDefault()):e.key==="Enter"?this._onEnter(e):e.key==="Escape"&&this._onEscape(e)}_getItemLabel(e){return this.$.dropdown.getItemLabel(e)}_getItemValue(e){let i=e&&this.itemValuePath?this.get(this.itemValuePath,e):void 0;return i===void 0&&(i=e?e.toString():""),i}_onArrowDown(){if(this.opened){const e=this._getOverlayItems();e&&(this._focusedIndex=Math.min(e.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel())}else this.open()}_onArrowUp(){if(this.opened){if(this._focusedIndex>-1)this._focusedIndex=Math.max(0,this._focusedIndex-1);else{const e=this._getOverlayItems();e&&(this._focusedIndex=e.length-1)}this._prefillFocusedItemLabel()}else this.open()}_prefillFocusedItemLabel(){this._focusedIndex>-1&&(this._inputElementValue=this._getItemLabel(this.$.dropdown.focusedItem),this._markAllSelectionRange())}_setSelectionRange(e,i){this.hasAttribute("focused")&&this.inputElement.setSelectionRange(e,i)}_markAllSelectionRange(){this._inputElementValue!==void 0&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(this._inputElementValue!==void 0){const e=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(e,e)}}_closeOrCommit(){!this.opened&&!this.loading?this._commitValue():this.close()}_onEnter(e){if(!this.allowCustomValue&&this._inputElementValue!==""&&this._focusedIndex<0){e.preventDefault(),e.stopPropagation();return}this.opened&&(e.preventDefault(),e.stopPropagation()),this._closeOrCommit()}_onEscape(e){this.autoOpenDisabled?this.opened||this.value!==this._inputElementValue&&this._inputElementValue.length>0?(e.stopPropagation(),this._focusedIndex=-1,this.cancel()):this.clearButtonVisible&&!this.opened&&!!this.value&&(e.stopPropagation(),this._clear()):this.opened?(e.stopPropagation(),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel()):this.clearButtonVisible&&!!this.value&&(e.stopPropagation(),this._clear())}_toggleElementChanged(e){e&&(e.addEventListener("mousedown",i=>i.preventDefault()),e.addEventListener("click",()=>{Je&&!this.hasAttribute("focused")&&document.activeElement.blur()}))}_clear(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){requestAnimationFrame(()=>{this.$.dropdown.adjustScrollPosition(),this._updateActiveDescendant(this._focusedIndex)}),this._lastCommittedValue=this.value}_onClosed(){this.opened&&this.close(),(!this.loading||this.allowCustomValue)&&this._commitValue()}_commitValue(){const e=this._getOverlayItems();if(e&&this._focusedIndex>-1){const i=e[this._focusedIndex];this.selectedItem!==i&&(this.selectedItem=i),this._inputElementValue=this._getItemLabel(this.selectedItem)}else if(this._inputElementValue===""||this._inputElementValue===void 0)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{const i=a=>a&&a.toLowerCase&&a.toLowerCase(),s=[...this.filteredItems||[],this.selectedItem].find(a=>i(this._getItemLabel(a))===i(this._inputElementValue));if(this.allowCustomValue&&!s){const a=this._inputElementValue;this._lastCustomValue=a;const o=new CustomEvent("custom-value-set",{detail:a,composed:!0,cancelable:!0,bubbles:!0});this.dispatchEvent(o),o.defaultPrevented||(this._selectItemForValue(a),this.value=a)}else!this.allowCustomValue&&!this.opened&&s?this.value=this._getItemValue(s):this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||""}this._detectAndDispatchChange(),this._clearSelectionRange(),this.dataProvider||(this.filter="")}get _propertyForValue(){return"value"}_onInput(e){!this.opened&&!this._isClearButton(e)&&!this.autoOpenDisabled&&this.open();const i=this._inputElementValue;this.filter===i?this._filterChanged(this.filter,this.itemValuePath,this.itemLabelPath):this.filter=i}_onChange(e){e.stopPropagation()}_itemLabelPathChanged(e){typeof e!="string"&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(e,i,s){e!==void 0&&(this.$.dropdown._scrollIntoView(0),this.items?this.filteredItems=this._filterItems(this.items,e):this._filteredItemsChanged({path:"filteredItems",value:this.filteredItems},i,s))}_loadingChanged(e){e&&(this._focusedIndex=-1)}_revertInputValue(){this.filter!==""?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_selectedItemChanged(e){if(e==null)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._toggleHasValue(this.value!==""),this._inputElementValue=this.value);else{const s=this._getItemValue(e);if(this.value!==s&&(this.value=s,this.value!==s))return;this._toggleHasValue(!0),this._inputElementValue=this._getItemLabel(e)}this.$.dropdown._selectedItem=e;const i=this._getOverlayItems();this.filteredItems&&i&&(this._focusedIndex=this.filteredItems.indexOf(e))}_valueChanged(e,i){if(!(e===""&&i===void 0)){if(this._isValidValue(e)){let s;this._getItemValue(this.selectedItem)!==e?this._selectItemForValue(e):s=this.selectedItem,!s&&this.allowCustomValue&&(this._inputElementValue=e),this._toggleHasValue(this.value!=="")}else this.selectedItem=null;this._lastCommittedValue=void 0}}_detectAndDispatchChange(){this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(e,i){this._ensureItemsOrDataProvider(()=>{this.items=i})}_itemsOrPathsChanged(e){if(e.path==="items"||e.path==="items.splices"){this.items?this.filteredItems=this.items.slice(0):this.__previousItems&&(this.filteredItems=null);const i=this._indexOfValue(this.value,this.items);this._focusedIndex=i;const s=i>-1&&this.items[i];s&&(this.selectedItem=s)}this.__previousItems=e.value}_filteredItemsChanged(e){if(e.path==="filteredItems"||e.path==="filteredItems.splices"){this._setOverlayItems(this.filteredItems);const i=this._indexOfValue(this.value,this.filteredItems);this.selectedItem===null&&i>=0&&this._selectItemForValue(this.value),this._inputElementValue===void 0||this._inputElementValue===this.value?this._focusedIndex=this._indexOfValue(this.value,this.filteredItems):this._focusedIndex=this.$.dropdown.indexOfLabel(this.filter)}}_filterItems(e,i){return e&&e.filter(a=>(i=i?i.toString().toLowerCase():"",this._getItemLabel(a).toString().toLowerCase().indexOf(i)>-1))}_selectItemForValue(e){const i=this._indexOfValue(e,this.filteredItems),s=this.selectedItem;i>=0?this.selectedItem=this.filteredItems[i]:this.dataProvider&&this.selectedItem===void 0?this.selectedItem=void 0:this.selectedItem=null,this.selectedItem===null&&s===null&&this._selectedItemChanged(this.selectedItem)}_getItemElements(){return Array.from(this.$.dropdown._scroller.querySelectorAll("vaadin-combo-box-item"))}_getOverlayItems(){return this.$.dropdown._items}_setOverlayItems(e){this.$.dropdown.set("_items",e)}_indexOfValue(e,i){return!i||!this._isValidValue(e)?-1:i.findIndex(s=>s instanceof Ie?!1:this._getItemValue(s)===e)}_isValidValue(e){return e!=null}_overlaySelectedItemChanged(e){e.stopPropagation(),!(e.detail.item instanceof Ie)&&(this.opened?(this._focusedIndex=this.filteredItems.indexOf(e.detail.item),this.close()):this.selectedItem!==e.detail.item&&(this.selectedItem=e.detail.item,this._detectAndDispatchChange()))}__onClearButtonMouseDown(e){e.preventDefault(),this.inputElement.focus()}_onFocusout(e){if(e.relatedTarget===this.$.dropdown.$.overlay){e.composedPath()[0].focus();return}if(!this.readonly&&!this._closeOnBlurIsPrevented){if(!this.opened&&this.allowCustomValue&&this._inputElementValue===this._lastCustomValue){delete this._lastCustomValue;return}this._closeOrCommit()}}_onTouchend(e){!this.clearElement||e.composedPath()[0]!==this.clearElement||(e.preventDefault(),this._clear())}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){return super.checkValidity?super.checkValidity():!this.required||!!this.value}};/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-combo-box",He,{moduleId:"vaadin-combo-box-styles"});class gi extends pa(Br(Xt(Kt(D(O(S)))))){static get is(){return"vaadin-combo-box"}static get template(){return E`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <div class="vaadin-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div id="toggleButton" part="toggle-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-combo-box-dropdown
        id="dropdown"
        opened="[[opened]]"
        renderer="[[renderer]]"
        position-target="[[_positionTarget]]"
        restore-focus-on-close="[[__restoreFocusOnClose]]"
        restore-focus-node="[[inputElement]]"
        _focused-index="[[_focusedIndex]]"
        _item-id-path="[[itemIdPath]]"
        _item-label-path="[[itemLabelPath]]"
        loading="[[loading]]"
        theme="[[theme]]"
      ></vaadin-combo-box-dropdown>
    `}static get properties(){return{_positionTarget:{type:Object}}}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Ne(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new Ee(this.inputElement,this._labelController)),this._positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this._toggleElement=this.$.toggleButton}_setFocused(t){super._setFocused(t),t||this.validate()}_shouldRemoveFocus(t){return t.relatedTarget===this.$.dropdown.$.overlay?(t.composedPath()[0].focus(),!1):!0}_onClearButtonClick(t){t.stopPropagation(),this._handleClearButtonClick(t)}_onHostClick(t){const e=t.composedPath();(e.includes(this._labelNode)||e.includes(this._positionTarget))&&super._onHostClick(t)}}customElements.define(gi.is,gi);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vr=w`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    /* align with text-field height + vertical paddings */
    line-height: calc(var(--lumo-text-field-size) + 2 * var(--lumo-space-xs));
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: 0;
  }

  :host::before {
    margin-top: var(--lumo-space-xs);
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  /* align with text-field label */
  :host([has-label]) [part='label'] {
    padding-bottom: calc(0.5em - var(--lumo-space-xs));
  }

  :host(:not([has-label])) [part='label'],
  :host(:not([has-label]))::before {
    display: none;
  }

  /* align with text-field error message */
  :host([has-error-message]) [part='error-message']::before {
    height: calc(0.4em - var(--lumo-space-xs));
  }

  :host([focused]:not([readonly]):not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }

  /* Disabled */
  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small'][has-label]) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small'][has-label]) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* When custom-field is used with components without outer margin */
  :host([theme~='whitespace'][has-label]) [part='label'] {
    padding-bottom: 0.5em;
  }
`;y("vaadin-custom-field",[St,kt,Vr],{moduleId:"lumo-custom-field"});/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class vi extends ot(ue(D(O(S)))){static get is(){return"vaadin-custom-field"}static get template(){return E`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
          /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-custom-field-container {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .inputs-wrapper {
          flex: none;
        }
      </style>

      <div class="vaadin-custom-field-container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div class="inputs-wrapper" on-change="__onInputChange">
          <slot id="slot"></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{name:String,value:{type:String,observer:"__valueChanged",notify:!0},inputs:{type:Array,readOnly:!0},i18n:{type:Object,value:()=>({parseValue:function(t){return t.split("	")},formatValue:function(t){return t.join("	")}})}}}connectedCallback(){super.connectedCallback(),this.__observer&&this.__observer.connect()}disconnectedCallback(){super.disconnectedCallback(),this.__observer&&this.__observer.disconnect()}ready(){super.ready(),this.setAttribute("role","group"),this.ariaTarget=this,this.__setInputsFromSlot(),this.__observer=new J(this.$.slot,()=>{this.__setInputsFromSlot()}),this.__fixChromeFocus()}focus(){this.inputs&&this.inputs[0]&&this.inputs[0].focus()}_setFocused(t){super._setFocused(t),t||this.validate()}_shouldRemoveFocus(t){const{relatedTarget:e}=t;return!this.inputs.some(i=>e===(i.focusElement||i))}checkValidity(){return!(this.inputs.filter(e=>!(e.validate||e.checkValidity).call(e)).length||this.required&&!this.value.trim())}__fixChromeFocus(){this.addEventListener("keydown",t=>{if(t.keyCode===9){if(t.target.parentElement.localName==="slot"&&!t.defaultPrevented&&wr){const e=t.target.parentElement;e.setAttribute("tabindex",-1),setTimeout(()=>e.removeAttribute("tabindex"))}this.inputs.indexOf(t.target)<this.inputs.length-1&&!t.shiftKey||this.inputs.indexOf(t.target)>0&&t.shiftKey?this.dispatchEvent(new CustomEvent("internal-tab")):this.__setValue()}})}__onInputChange(t){t.stopPropagation(),this.__setValue(),this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!1,detail:{value:this.value}}))}__setValue(){this.__settingValue=!0,this.value=this.i18n.formatValue.apply(this,[this.inputs.map(t=>t.value)]),this.__settingValue=!1}__queryAllAssignedElements(t){const e=[];let i;return t.tagName==="SLOT"?i=t.assignedElements({flatten:!0}):(e.push(t),i=Array.from(t.children)),i.forEach(s=>e.push(...this.__queryAllAssignedElements(s))),e}__isInput(t){return!(t.getAttribute("slot")==="input"||t.getAttribute("slot")==="textarea")&&(t.validate||t.checkValidity)}__getInputsFromSlot(){return this.__queryAllAssignedElements(this.$.slot).filter(t=>this.__isInput(t))}__setInputsFromSlot(){this._setInputs(this.__getInputsFromSlot()),this.__setValue()}__toggleHasValue(t){this.toggleAttribute("has-value",t!==null&&t.trim()!=="")}__valueChanged(t,e){if(this.__settingValue||!this.inputs)return;this.__toggleHasValue(t);const i=this.i18n.parseValue(t);if(!i||i.length==0){console.warn("Value parser has not provided values array");return}this.inputs.forEach((s,a)=>s.value=i[a]),e!==void 0&&this.validate()}}customElements.define(vi.is,vi);const ma=w`
  [part='overlay'] {
    /*
  Width:
      date cell widths
    + month calendar side padding
    + year scroller width
  */
    /* prettier-ignore */
    width:
    calc(
        var(--lumo-size-m) * 7
      + var(--lumo-space-xs) * 2
      + 57px
    );
    height: 100%;
    max-height: calc(var(--lumo-size-m) * 14);
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  [part='overlay'] {
    flex-direction: column;
  }

  [part='content'] {
    padding: 0;
    height: 100%;
    overflow: hidden;
    -webkit-mask-image: none;
    mask-image: none;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay'] {
      width: 100vw;
      height: 70vh;
      max-height: 70vh;
    }
  }
`;y("vaadin-date-picker-overlay",[xr,ma],{moduleId:"lumo-date-picker-overlay"});y("vaadin-date-picker-overlay-content",w`
    :host {
      position: relative;
      background-color: transparent;
      /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
      background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
      background-size: 57px 100%;
      background-position: top right;
      background-repeat: no-repeat;
      cursor: default;
    }

    /* Month scroller */

    [part='months'] {
      /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
      /* prettier-ignore */
      --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
      --vaadin-infinite-scroller-buffer-offset: 20%;
      -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      position: relative;
      margin-right: 57px;
    }

    /* Year scroller */
    [part='years'] {
      /* TODO get rid of fixed magic number */
      --vaadin-infinite-scroller-buffer-width: 97px;
      width: 57px;
      height: auto;
      top: 0;
      bottom: 0;
      font-size: var(--lumo-font-size-s);
      box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
      -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      cursor: var(--lumo-clickable-cursor);
    }

    [part='year-number']:not([current]),
    [part='year-separator'] {
      opacity: 0.7;
      transition: 0.2s opacity;
    }

    [part='years']:hover [part='year-number'],
    [part='years']:hover [part='year-separator'] {
      opacity: 1;
    }

    /* TODO unsupported selector */
    #scrollers {
      position: static;
      display: block;
    }

    /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the
       * width of the year scroller */
    #scrollers[desktop] [part='months'] {
      right: auto;
    }

    /* Year scroller position indicator */
    [part='years']::before {
      border: none;
      width: 1em;
      height: 1em;
      background-color: var(--lumo-base-color);
      background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
      transform: translate(-75%, -50%) rotate(45deg);
      border-top-right-radius: var(--lumo-border-radius-s);
      box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
      z-index: 1;
    }

    [part='year-number'],
    [part='year-separator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50%;
      transform: translateY(-50%);
    }

    [part='years'] [part='year-separator']::after {
      color: var(--lumo-disabled-text-color);
      content: '•';
    }

    /* Current year */

    [part='years'] [part='year-number'][current] {
      color: var(--lumo-primary-text-color);
    }

    /* Toolbar (footer) */

    [part='toolbar'] {
      padding: var(--lumo-space-s);
      box-shadow: 0 -1px 0 0 var(--lumo-contrast-10pct);
      border-bottom-left-radius: var(--lumo-border-radius-l);
      margin-right: 57px;
    }

    @supports (mask-image: linear-gradient(#000, #000)) or (-webkit-mask-image: linear-gradient(#000, #000)) {
      [part='toolbar'] {
        box-shadow: none;
      }
    }

    /* Today and Cancel buttons */

    [part='toolbar'] [part\$='button'] {
      margin: 0;
    }

    /* Narrow viewport mode (fullscreen) */

    :host([fullscreen]) [part='toolbar'] {
      order: -1;
      background-color: var(--lumo-base-color);
    }

    :host([fullscreen]) [part='overlay-header'] {
      order: -2;
      height: var(--lumo-size-m);
      padding: var(--lumo-space-s);
      position: absolute;
      left: 0;
      right: 0;
      justify-content: center;
    }

    :host([fullscreen]) [part='toggle-button'],
    :host([fullscreen]) [part='clear-button'],
    [part='overlay-header'] [part='label'] {
      display: none;
    }

    /* Very narrow screen (year scroller initially hidden) */

    [part='years-toggle-button'] {
      position: relative;
      right: auto;
      display: flex;
      align-items: center;
      height: var(--lumo-size-s);
      padding: 0 0.5em;
      border-radius: var(--lumo-border-radius-m);
      z-index: 3;
      color: var(--lumo-primary-text-color);
      font-weight: 500;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([years-visible]) [part='years-toggle-button'] {
      background-color: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
    }

    [part='years-toggle-button']::before {
      content: none;
    }

    /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */
    @media screen and (max-width: 374px) {
      :host {
        background-image: none;
      }

      [part='years'] {
        background-color: var(--lumo-shade-5pct);
      }

      [part='toolbar'],
      [part='months'] {
        margin-right: 0;
      }

      /* TODO make date-picker adapt to the width of the years part */
      [part='years'] {
        --vaadin-infinite-scroller-buffer-width: 90px;
        width: 50px;
      }

      :host([years-visible]) [part='months'] {
        padding-left: 50px;
      }
    }
  `,{moduleId:"lumo-date-picker-overlay-content"});y("vaadin-month-calendar",w`
    :host {
      -moz-user-select: none;
      -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      font-size: var(--lumo-font-size-m);
      color: var(--lumo-body-text-color);
      text-align: center;
      padding: 0 var(--lumo-space-xs);
    }

    /* Month header */

    [part='month-header'] {
      color: var(--lumo-header-text-color);
      font-size: var(--lumo-font-size-l);
      line-height: 1;
      font-weight: 500;
      margin-bottom: var(--lumo-space-m);
    }

    /* Week days and numbers */

    [part='weekdays'],
    [part='weekday'],
    [part='week-number'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      color: var(--lumo-secondary-text-color);
    }

    [part='weekdays'] {
      margin-bottom: var(--lumo-space-s);
    }

    [part='weekday']:empty,
    [part='week-number'] {
      width: var(--lumo-size-xs);
    }

    /* Date and week number cells */

    [part='date'],
    [part='week-number'] {
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: var(--lumo-size-m);
      position: relative;
    }

    [part='date'] {
      transition: color 0.1s;
    }

    [part='date']:not(:empty) {
      cursor: var(--lumo-clickable-cursor);
    }

    /* Today date */

    [part='date'][today] {
      color: var(--lumo-primary-text-color);
    }

    /* Focused date */

    [part='date']::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 2em;
      min-height: 2em;
      width: 80%;
      height: 80%;
      max-height: 100%;
      max-width: 100%;
      border-radius: var(--lumo-border-radius-m);
    }

    [part='date'][focused]::before {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    :host(:not([focused])) [part='date'][focused]::before {
      animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
    }

    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px transparent;
      }
    }

    [part='date']:not(:empty):not([disabled]):not([selected]):hover::before {
      background-color: var(--lumo-primary-color-10pct);
    }

    [part='date'][selected] {
      color: var(--lumo-primary-contrast-color);
    }

    [part='date'][selected]::before {
      background-color: var(--lumo-primary-color);
    }

    [part='date'][disabled] {
      color: var(--lumo-disabled-text-color);
    }

    @media (pointer: coarse) {
      [part='date']:hover:not([selected])::before,
      [part='date'][focused]:not([selected])::before {
        display: none;
      }

      [part='date']:not(:empty):not([disabled]):active::before {
        display: block;
      }

      [part='date'][selected]::before {
        box-shadow: none;
      }
    }

    /* Disabled */

    :host([disabled]) * {
      color: var(--lumo-disabled-text-color) !important;
    }
  `,{moduleId:"lumo-month-calendar"});const Nr=document.createElement("template");Nr.innerHTML=`
  <style>
    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 2px transparent;
      }
    }
  </style>
`;document.head.appendChild(Nr.content);const fa=w`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-calendar);
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay-content'] {
      height: 70vh;
    }
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;y("vaadin-date-picker",[Se,fa],{moduleId:"lumo-date-picker"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _a=w`
  :host([dir='rtl']) [part='input-field'] {
    direction: ltr;
  }

  :host([dir='rtl']) [part='value']::placeholder {
    direction: rtl;
    text-align: left;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
    direction: rtl;
    text-align: left;
  }
`,ga=w`
  [part='overlay'] {
    display: flex;
    flex: auto;
  }

  [part~='content'] {
    flex: auto;
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-date-picker-overlay",ga,{moduleId:"vaadin-date-picker-overlay-styles"});let ut;class bi extends Rs(Qt(Ve)){static get is(){return"vaadin-date-picker-overlay"}static get template(){return ut||(ut=super.template.cloneNode(!0),ut.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),ut}}customElements.define(bi.is,bi);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function va(r){let t=r.getDay();t===0&&(t=7);const e=4-t,i=new Date(r.getTime()+e*24*3600*1e3),s=new Date(0,0);s.setFullYear(i.getFullYear());const a=i.getTime()-s.getTime(),o=Math.round(a/(24*3600*1e3));return Math.floor(o/7+1)}function ie(r,t){return r instanceof Date&&t instanceof Date&&r.getFullYear()===t.getFullYear()&&r.getMonth()===t.getMonth()&&r.getDate()===t.getDate()}function Xe(r,t,e){return(!t||r>=t)&&(!e||r<=e)}function Hr(r,t){return t.filter(e=>e!==void 0).reduce((e,i)=>{if(!i)return e;if(!e)return i;var s=Math.abs(r.getTime()-i.getTime()),a=Math.abs(e.getTime()-r.getTime());return s<a?i:e})}function Wr(r){return{day:r.getDate(),month:r.getMonth(),year:r.getFullYear()}}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class yi extends ue(D(S)){static get template(){return E`
      <style>
        :host {
          display: block;
        }

        #monthGrid {
          display: block;
        }

        #monthGrid thead,
        #monthGrid tbody {
          display: block;
          width: 100%;
        }

        [part='weekdays'] {
          display: flex;
          flex-grow: 1;
        }

        #days-container tr,
        #weekdays-container tr {
          display: flex;
        }

        [part='date'] {
          outline: none;
        }

        [part='week-number'][hidden],
        [part='weekday'][hidden] {
          display: none;
        }

        [part='weekday'],
        [part='date'] {
          display: block;
          /* Would use calc(100% / 7) but it doesn't work nice on IE */
          width: 14.285714286%;
          padding: 0;
          font-weight: normal;
        }

        [part='weekday']:empty,
        [part='week-number'] {
          width: 12.5%;
          flex-shrink: 0;
        }
      </style>

      <div part="month-header" id="month-header" aria-hidden="true">[[_getTitle(month, i18n.monthNames)]]</div>
      <table
        id="monthGrid"
        role="grid"
        aria-labelledby="month-header"
        on-touchend="_preventDefault"
        on-touchstart="_onMonthGridTouchStart"
      >
        <thead id="weekdays-container">
          <tr role="row" part="weekdays">
            <th
              part="weekday"
              aria-hidden="true"
              hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]"
            ></th>
            <template
              is="dom-repeat"
              items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]"
            >
              <th role="columnheader" part="weekday" scope="col" abbr$="[[item.weekDay]]">[[item.weekDayShort]]</th>
            </template>
          </tr>
        </thead>
        <tbody id="days-container">
          <template is="dom-repeat" items="[[_weeks]]" as="week">
            <tr role="row">
              <td
                part="week-number"
                aria-hidden="true"
                hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]"
              >
                [[__getWeekNumber(week)]]
              </td>
              <template is="dom-repeat" items="[[week]]">
                <td
                  role="gridcell"
                  part="date"
                  date="[[item]]"
                  today$="[[_isToday(item)]]"
                  focused$="[[__isDayFocused(item, focusedDate)]]"
                  tabindex$="[[__getDayTabindex(item, focusedDate)]]"
                  selected$="[[__isDaySelected(item, selectedDate)]]"
                  disabled$="[[__isDayDisabled(item, minDate, maxDate)]]"
                  aria-selected$="[[__getDayAriaSelected(item, selectedDate)]]"
                  aria-disabled$="[[__getDayAriaDisabled(item, minDate, maxDate)]]"
                  aria-label$="[[__getDayAriaLabel(item)]]"
                  >[[_getDate(item)]]</td
                >
              </template>
            </tr>
          </template>
        </tbody>
      </table>
    `}static get is(){return"vaadin-month-calendar"}static get properties(){return{month:{type:Date,value:new Date},selectedDate:{type:Date,notify:!0},focusedDate:Date,showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Date,value:null},maxDate:{type:Date,value:null},_days:{type:Array,computed:"_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)"},_weeks:{type:Array,computed:"_getWeeks(_days)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}static get observers(){return["_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)","__focusedDateChanged(focusedDate, _days)"]}ready(){super.ready(),te(this.$.monthGrid,"tap",this._handleTap.bind(this))}get focusableDateElement(){return[...this.shadowRoot.querySelectorAll("[part=date]")].find(t=>ie(t.date,this.focusedDate))}_isDisabled(t,e,i){var s=new Date(0,0);s.setFullYear(t.getFullYear()),s.setMonth(t.getMonth()),s.setDate(1);var a=new Date(0,0);return a.setFullYear(t.getFullYear()),a.setMonth(t.getMonth()+1),a.setDate(0),e&&i&&e.getMonth()===i.getMonth()&&e.getMonth()===t.getMonth()&&i.getDate()-e.getDate()>=0?!1:!Xe(s,e,i)&&!Xe(a,e,i)}_getTitle(t,e){if(!(t===void 0||e===void 0))return this.i18n.formatTitle(e[t.getMonth()],t.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1,setTimeout(()=>this._notTapping=!0,300)}_dateAdd(t,e){t.setDate(t.getDate()+e)}_applyFirstDayOfWeek(t,e){if(!(t===void 0||e===void 0))return t.slice(e).concat(t.slice(0,e))}_getWeekDayNames(t,e,i,s){if(!(t===void 0||e===void 0||i===void 0||s===void 0))return t=this._applyFirstDayOfWeek(t,s),e=this._applyFirstDayOfWeek(e,s),t=t.map((a,o)=>({weekDay:a,weekDayShort:e[o]})),t}__focusedDateChanged(t,e){e.some(i=>ie(i,t))?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true")}_getDate(t){return t?t.getDate():""}_showWeekNumbersChanged(t,e){t&&e===1?this.setAttribute("week-numbers",""):this.removeAttribute("week-numbers")}_showWeekSeparator(t,e){return t&&e===1}_isToday(t){return ie(new Date,t)}_getDays(t,e){if(!(t===void 0||e===void 0)){var i=new Date(0,0);for(i.setFullYear(t.getFullYear()),i.setMonth(t.getMonth()),i.setDate(1);i.getDay()!==e;)this._dateAdd(i,-1);for(var s=[],a=i.getMonth(),o=t.getMonth();i.getMonth()===o||i.getMonth()===a;)s.push(i.getMonth()===o?new Date(i.getTime()):null),this._dateAdd(i,1);return s}}_getWeeks(t){return t.reduce((e,i,s)=>(s%7===0&&e.push([]),e[e.length-1].push(i),e),[])}_handleTap(t){!this.ignoreTaps&&!this._notTapping&&t.target.date&&!t.target.hasAttribute("disabled")&&(this.selectedDate=t.target.date,this.dispatchEvent(new CustomEvent("date-tap",{detail:{date:t.target.date},bubbles:!0,composed:!0})))}_preventDefault(t){t.preventDefault()}__getWeekNumber(t){const e=t.reduce((i,s)=>!i&&s?s:i);return va(e)}__isDayFocused(t,e){return ie(t,e)}__isDaySelected(t,e){return ie(t,e)}__getDayAriaSelected(t,e){if(this.__isDaySelected(t,e))return"true"}__isDayDisabled(t,e,i){return!Xe(t,e,i)}__getDayAriaDisabled(t,e,i){if(!(t===void 0||e===void 0||i===void 0)&&this.__isDayDisabled(t,e,i))return"true"}__getDayAriaLabel(t){if(!t)return"";var e=this._getDate(t)+" "+this.i18n.monthNames[t.getMonth()]+" "+t.getFullYear()+", "+this.i18n.weekdays[t.getDay()];return this._isToday(t)&&(e+=", "+this.i18n.today),e}__getDayTabindex(t,e){return this.__isDayFocused(t,e)?"0":"-1"}__getWeekNumbers(t){return t.map(e=>this.__getWeekNumber(e,t)).filter((e,i,s)=>s.indexOf(e)===i)}}customElements.define(yi.is,yi);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class et extends S{static get template(){return E`
      <style>
        :host {
          display: block;
          overflow: hidden;
          height: 500px;
        }

        #scroller {
          position: relative;
          height: 100%;
          overflow: auto;
          outline: none;
          margin-right: -40px;
          -webkit-overflow-scrolling: touch;
          overflow-x: hidden;
        }

        #scroller.notouchscroll {
          -webkit-overflow-scrolling: auto;
        }

        #scroller::-webkit-scrollbar {
          display: none;
        }

        .buffer {
          position: absolute;
          width: var(--vaadin-infinite-scroller-buffer-width, 100%);
          box-sizing: border-box;
          padding-right: 40px;
          top: var(--vaadin-infinite-scroller-buffer-offset, 0);
          animation: fadein 0.2s;
        }

        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      </style>

      <div id="scroller" on-scroll="_scroll">
        <div class="buffer"></div>
        <div class="buffer"></div>
        <div id="fullHeight"></div>
      </div>
    `}static get is(){return"vaadin-infinite-scroller"}static get properties(){return{bufferSize:{type:Number,value:20},_initialScroll:{value:5e5},_initialIndex:{value:0},_buffers:Array,_preventScrollEvent:Boolean,_mayHaveMomentum:Boolean,_initialized:Boolean,active:{type:Boolean,observer:"_activated"}}}ready(){super.ready(),this._buffers=Array.prototype.slice.call(this.root.querySelectorAll(".buffer")),this.$.fullHeight.style.height=this._initialScroll*2+"px";const t=this.querySelector("template");this._TemplateClass=mr(t,this,{forwardHostProp:function(e,i){e!=="index"&&this._buffers.forEach(s=>{[].forEach.call(s.children,a=>{a._itemWrapper.instance[e]=i})})}}),Cr&&(this.$.scroller.tabIndex=-1)}_activated(t){t&&!this._initialized&&(this._createPool(),this._initialized=!0)}_finishInit(){this._initDone||(this._buffers.forEach(t=>{[].forEach.call(t.children,e=>this._ensureStampedInstance(e._itemWrapper))},this),this._buffers[0].translateY||this._reset(),this._initDone=!0)}_translateBuffer(t){const e=t?1:0;this._buffers[e].translateY=this._buffers[e?0:1].translateY+this._bufferHeight*(e?-1:1),this._buffers[e].style.transform="translate3d(0, "+this._buffers[e].translateY+"px, 0)",this._buffers[e].updated=!1,this._buffers.reverse()}_scroll(){if(this._scrollDisabled)return;const t=this.$.scroller.scrollTop;(t<this._bufferHeight||t>this._initialScroll*2-this._bufferHeight)&&(this._initialIndex=~~this.position,this._reset());const e=this.itemHeight+this.bufferOffset,i=t>this._buffers[1].translateY+e,s=t<this._buffers[0].translateY+e;(i||s)&&(this._translateBuffer(s),this._updateClones()),this._preventScrollEvent||(this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0})),this._mayHaveMomentum=!0),this._preventScrollEvent=!1,this._debouncerScrollFinish=ee.debounce(this._debouncerScrollFinish,ce.after(200),()=>{const a=this.$.scroller.getBoundingClientRect();!this._isVisible(this._buffers[0],a)&&!this._isVisible(this._buffers[1],a)&&(this.position=this.position)})}get bufferOffset(){return this._buffers[0].offsetTop}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}set position(t){this._preventScrollEvent=!0,t>this._firstIndex&&t<this._firstIndex+this.bufferSize*2?this.$.scroller.scrollTop=this.itemHeight*(t-this._firstIndex)+this._buffers[0].translateY:(this._initialIndex=~~t,this._reset(),this._scrollDisabled=!0,this.$.scroller.scrollTop+=t%1*this.itemHeight,this._scrollDisabled=!1),this._mayHaveMomentum&&(this.$.scroller.classList.add("notouchscroll"),this._mayHaveMomentum=!1,setTimeout(()=>{this.$.scroller.classList.remove("notouchscroll")},10))}get itemHeight(){if(!this._itemHeightVal){const t=getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height"),e="background-position";this.$.fullHeight.style.setProperty(e,t);const i=getComputedStyle(this.$.fullHeight).getPropertyValue(e);this.$.fullHeight.style.removeProperty(e),this._itemHeightVal=parseFloat(i)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}_reset(){this._scrollDisabled=!0,this.$.scroller.scrollTop=this._initialScroll,this._buffers[0].translateY=this._initialScroll-this._bufferHeight,this._buffers[1].translateY=this._initialScroll,this._buffers.forEach(t=>{t.style.transform="translate3d(0, "+t.translateY+"px, 0)"}),this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(!0),this._debouncerUpdateClones=ee.debounce(this._debouncerUpdateClones,ce.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones()}),this._scrollDisabled=!1}_createPool(){const t=this.getBoundingClientRect();this._buffers.forEach(e=>{for(let i=0;i<this.bufferSize;i++){const s=document.createElement("div");s.style.height=this.itemHeight+"px",s.instance={};const a=et._contentIndex=et._contentIndex+1||0,o="vaadin-infinite-scroller-item-content-"+a,n=document.createElement("slot");n.setAttribute("name",o),n._itemWrapper=s,e.appendChild(n),s.setAttribute("slot",o),this.appendChild(s),setTimeout(()=>{this._isVisible(s,t)&&this._ensureStampedInstance(s)},1)}},this),setTimeout(()=>{Ct(this,this._finishInit.bind(this))},1)}_ensureStampedInstance(t){if(!t.firstElementChild){var e=t.instance;t.instance=new this._TemplateClass({}),t.appendChild(t.instance.root),Object.keys(e).forEach(i=>{t.instance.set(i,e[i])})}}_updateClones(t){this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;var e=t?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((i,s)=>{if(!i.updated){var a=this._firstIndex+this.bufferSize*s;[].forEach.call(i.children,(o,n)=>{const l=o._itemWrapper;(!t||this._isVisible(l,e))&&(l.instance.index=a+n)}),i.updated=!0}},this)}_isVisible(t,e){var i=t.getBoundingClientRect();return i.bottom>e.top&&i.top<e.bottom}}customElements.define(et.is,et);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ai extends Be(D(nt(S))){static get template(){return E`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          outline: none;
          background: #fff;
        }

        [part='overlay-header'] {
          display: flex;
          flex-shrink: 0;
          flex-wrap: nowrap;
          align-items: center;
        }

        :host(:not([fullscreen])) [part='overlay-header'] {
          display: none;
        }

        [part='label'] {
          flex-grow: 1;
        }

        [part='clear-button']:not([showclear]) {
          display: none;
        }

        [part='years-toggle-button'] {
          display: flex;
        }

        [part='years-toggle-button'][desktop] {
          display: none;
        }

        :host(:not([years-visible])) [part='years-toggle-button']::before {
          transform: rotate(180deg);
        }

        #scrollers {
          display: flex;
          height: 100%;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        [part='months'],
        [part='years'] {
          height: 100%;
        }

        [part='months'] {
          --vaadin-infinite-scroller-item-height: 270px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        #scrollers[desktop] [part='months'] {
          right: 50px;
          transform: none !important;
        }

        [part='years'] {
          --vaadin-infinite-scroller-item-height: 80px;
          width: 50px;
          position: absolute;
          right: 0;
          transform: translateX(100%);
          -webkit-tap-highlight-color: transparent;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          /* Center the year scroller position. */
          --vaadin-infinite-scroller-buffer-offset: 50%;
        }

        #scrollers[desktop] [part='years'] {
          position: absolute;
          transform: none !important;
        }

        [part='years']::before {
          content: '';
          display: block;
          background: transparent;
          width: 0;
          height: 0;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          border-width: 6px;
          border-style: solid;
          border-color: transparent;
          border-left-color: #000;
        }

        :host(.animate) [part='months'],
        :host(.animate) [part='years'] {
          transition: all 200ms;
        }

        [part='toolbar'] {
          display: flex;
          justify-content: space-between;
          z-index: 2;
          flex-shrink: 0;
        }

        [part~='overlay-header']:not([desktop]) {
          padding-bottom: 40px;
        }

        [part~='years-toggle-button'] {
          position: absolute;
          top: auto;
          right: 8px;
          bottom: 0;
          z-index: 1;
          padding: 8px;
        }
      </style>

      <div part="overlay-header" on-touchend="_preventDefault" desktop$="[[_desktopMode]]" aria-hidden="true">
        <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>
        <div part="clear-button" showclear$="[[_showClear(selectedDate)]]"></div>
        <div part="toggle-button"></div>

        <div part="years-toggle-button" desktop$="[[_desktopMode]]" aria-hidden="true">
          [[_yearAfterXMonths(_visibleMonthIndex)]]
        </div>
      </div>

      <div id="scrollers" desktop$="[[_desktopMode]]">
        <vaadin-infinite-scroller
          id="monthScroller"
          on-custom-scroll="_onMonthScroll"
          on-touchstart="_onMonthScrollTouchStart"
          buffer-size="3"
          active="[[initialPosition]]"
          part="months"
        >
          <template>
            <vaadin-month-calendar
              i18n="[[i18n]]"
              month="[[_dateAfterXMonths(index)]]"
              selected-date="{{selectedDate}}"
              focused-date="[[focusedDate]]"
              ignore-taps="[[_ignoreTaps]]"
              show-week-numbers="[[showWeekNumbers]]"
              min-date="[[minDate]]"
              max-date="[[maxDate]]"
              part="month"
              theme$="[[theme]]"
              on-keydown="__onMonthCalendarKeyDown"
            >
            </vaadin-month-calendar>
          </template>
        </vaadin-infinite-scroller>
        <vaadin-infinite-scroller
          id="yearScroller"
          on-custom-scroll="_onYearScroll"
          on-touchstart="_onYearScrollTouchStart"
          buffer-size="12"
          active="[[initialPosition]]"
          part="years"
          aria-hidden="true"
        >
          <template>
            <div
              part="year-number"
              current$="[[_isCurrentYear(index)]]"
              selected$="[[_isSelectedYear(index, selectedDate)]]"
            >
              [[_yearAfterXYears(index)]]
            </div>
            <div part="year-separator" aria-hidden="true"></div>
          </template>
        </vaadin-infinite-scroller>
      </div>

      <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
        <vaadin-button
          id="todayButton"
          part="today-button"
          theme="tertiary"
          disabled="[[!_isTodayAllowed(minDate, maxDate)]]"
          on-keydown="__onTodayButtonKeyDown"
        >
          [[i18n.today]]
        </vaadin-button>
        <vaadin-button id="cancelButton" part="cancel-button" theme="tertiary" on-keydown="__onCancelButtonKeyDown">
          [[i18n.cancel]]
        </vaadin-button>
      </div>
    `}static get is(){return"vaadin-date-picker-overlay-content"}static get properties(){return{selectedDate:{type:Date},focusedDate:{type:Date,notify:!0,observer:"_focusedDateChanged"},_focusedMonthDate:Number,initialPosition:{type:Date,observer:"_initialPositionChanged"},_originDate:{value:new Date},_visibleMonthIndex:Number,_desktopMode:Boolean,_desktopMediaQuery:{type:String,value:"(min-width: 375px)"},_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:Date,maxDate:Date,label:String}}get __isRTL(){return this.getAttribute("dir")==="rtl"}get focusableDateElement(){return[...this.shadowRoot.querySelectorAll("vaadin-month-calendar")].map(t=>t.focusableDateElement).find(Boolean)}ready(){super.ready(),te(this,"tap",this._stopPropagation),te(this.$.scrollers,"track",this._track.bind(this)),te(this.shadowRoot.querySelector('[part="clear-button"]'),"tap",this._clear.bind(this)),te(this.shadowRoot.querySelector('[part="today-button"]'),"tap",this._onTodayTap.bind(this)),te(this.shadowRoot.querySelector('[part="cancel-button"]'),"tap",this._cancel.bind(this)),te(this.shadowRoot.querySelector('[part="toggle-button"]'),"tap",this._cancel.bind(this)),te(this.shadowRoot.querySelector('[part="years"]'),"tap",this._onYearTap.bind(this)),te(this.shadowRoot.querySelector('[part="years-toggle-button"]'),"tap",this._toggleYearScroller.bind(this)),this.addController(new Zt(this._desktopMediaQuery,t=>{this._desktopMode=t}))}connectedCallback(){super.connectedCallback(),this._closeYearScroller(),this._toggleAnimateClass(!0),Fs(this.$.scrollers,"pan-y")}focusCancel(){this.$.cancelButton.focus()}scrollToDate(t,e){this._scrollToPosition(this._differenceInMonths(t,this._originDate),e)}_selectDate(t){this.selectedDate=t,this.dispatchEvent(new CustomEvent("date-selected",{detail:{date:t},bubbles:!0,composed:!0}))}_focusedDateChanged(t){this.revealDate(t)}_isCurrentYear(t){return t===0}_isSelectedYear(t,e){if(e)return e.getFullYear()===this._originDate.getFullYear()+t}revealDate(t,e=!0){if(t){const i=this._differenceInMonths(t,this._originDate),s=this.$.monthScroller.position>i,o=Math.max(this.$.monthScroller.itemHeight,this.$.monthScroller.clientHeight-this.$.monthScroller.bufferOffset*2)/this.$.monthScroller.itemHeight,n=this.$.monthScroller.position+o-1<i;s?this._scrollToPosition(i,e):n&&this._scrollToPosition(i-o+1,e)}}_initialPositionChanged(t){this.scrollToDate(t)}_repositionYearScroller(){this._visibleMonthIndex=Math.floor(this.$.monthScroller.position),this.$.yearScroller.position=(this.$.monthScroller.position+this._originDate.getMonth())/12}_repositionMonthScroller(){this.$.monthScroller.position=this.$.yearScroller.position*12-this._originDate.getMonth(),this._visibleMonthIndex=Math.floor(this.$.monthScroller.position)}_onMonthScroll(){this._repositionYearScroller(),this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller(),this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1,setTimeout(()=>this._notTapping=!0,300),this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0,this._debouncer=ee.debounce(this._debouncer,ce.after(300),()=>this._ignoreTaps=!1)}_formatDisplayed(t,e,i){return t?e(Wr(t)):i}_onTodayTap(){var t=new Date;Math.abs(this.$.monthScroller.position-this._differenceInMonths(t,this._originDate))<.001?(this._selectDate(t),this._close()):this._scrollToCurrentMonth()}_scrollToCurrentMonth(){this.focusedDate&&(this.focusedDate=new Date),this.scrollToDate(new Date,!0)}_showClear(t){return!!t}_onYearTap(t){if(!this._ignoreTaps&&!this._notTapping){var e=t.detail.y-(this.$.yearScroller.getBoundingClientRect().top+this.$.yearScroller.clientHeight/2),i=e/this.$.yearScroller.itemHeight;this._scrollToPosition(this.$.monthScroller.position+i*12,!0)}}_scrollToPosition(t,e){if(this._targetPosition!==void 0){this._targetPosition=t;return}if(!e){this.$.monthScroller.position=t,this._targetPosition=void 0,this._repositionYearScroller(),this.__tryFocusDate();return}this._targetPosition=t;var i=(l,u,m,_)=>(l/=_/2,l<1?m/2*l*l+u:(l-=1,-m/2*(l*(l-2)-1)+u)),s=e?300:0,a=0,o=this.$.monthScroller.position,n=l=>{a=a||l;var u=l-a;if(u<s){var m=i(u,o,this._targetPosition-o,s);this.$.monthScroller.position=m,window.requestAnimationFrame(n)}else this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:o}})),this.$.monthScroller.position=this._targetPosition,this._targetPosition=void 0,this.__tryFocusDate();setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(n)}_limit(t,e){return Math.min(e.max,Math.max(e.min,t))}_handleTrack(t){if(!(Math.abs(t.detail.dx)<10||Math.abs(t.detail.ddy)>10)){Math.abs(t.detail.ddx)>this._yearScrollerWidth/3&&this._toggleAnimateClass(!0);var e=this._translateX+t.detail.ddx;this._translateX=this._limit(e,{min:0,max:this._yearScrollerWidth})}}_track(t){if(!this._desktopMode)switch(t.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(t);break;case"end":this._toggleAnimateClass(!0),this._translateX>=this._yearScrollerWidth/2?this._closeYearScroller():this._openYearScroller();break}}_toggleAnimateClass(t){t?this.classList.add("animate"):this.classList.remove("animate")}_toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}_openYearScroller(){this._translateX=0,this.setAttribute("years-visible","")}_closeYearScroller(){this.removeAttribute("years-visible"),this._translateX=this._yearScrollerWidth}_isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}_translateXChanged(t){this._desktopMode||(this.$.monthScroller.style.transform="translateX("+(t-this._yearScrollerWidth)+"px)",this.$.yearScroller.style.transform="translateX("+t+"px)")}_yearAfterXYears(t){var e=new Date(this._originDate);return e.setFullYear(parseInt(t)+this._originDate.getFullYear()),e.getFullYear()}_yearAfterXMonths(t){return this._dateAfterXMonths(t).getFullYear()}_dateAfterXMonths(t){var e=new Date(this._originDate);return e.setDate(1),e.setMonth(parseInt(t)+this._originDate.getMonth()),e}_differenceInMonths(t,e){var i=(t.getFullYear()-e.getFullYear())*12;return i-e.getMonth()+t.getMonth()}_differenceInYears(t,e){return this._differenceInMonths(t,e)/12}_clear(){this._selectDate("")}_close(){const t=this.getRootNode().host,e=t?t.getRootNode().host:null;e&&(e.opened=!1),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate,this._close()}_preventDefault(t){t.preventDefault()}__toggleDate(t){ie(t,this.selectedDate)?(this._clear(),this.focusedDate=t):this._selectDate(t)}__onMonthCalendarKeyDown(t){let e=!1;switch(t.key){case"ArrowDown":this._moveFocusByDays(7),e=!0;break;case"ArrowUp":this._moveFocusByDays(-7),e=!0;break;case"ArrowRight":this._moveFocusByDays(this.__isRTL?-1:1),e=!0;break;case"ArrowLeft":this._moveFocusByDays(this.__isRTL?1:-1),e=!0;break;case"Enter":this._selectDate(this.focusedDate),this._close(),e=!0;break;case" ":this.__toggleDate(this.focusedDate),e=!0;break;case"Home":this._moveFocusInsideMonth(this.focusedDate,"minDate"),e=!0;break;case"End":this._moveFocusInsideMonth(this.focusedDate,"maxDate"),e=!0;break;case"PageDown":this._moveFocusByMonths(t.shiftKey?12:1),e=!0;break;case"PageUp":this._moveFocusByMonths(t.shiftKey?-12:-1),e=!0;break;case"Escape":this._cancel(),e=!0;break}e&&(t.preventDefault(),t.stopPropagation())}__onTodayButtonKeyDown(t){if(this.hasAttribute("fullscreen")){t.stopPropagation();return}t.key==="Tab"&&t.shiftKey&&(t.stopPropagation(),setTimeout(()=>this.revealDate(this.focusedDate),1)),t.key==="Escape"&&(this._cancel(),t.preventDefault(),t.stopPropagation())}__onCancelButtonKeyDown(t){if(this.hasAttribute("fullscreen")){t.stopPropagation();return}t.key==="Tab"&&!t.shiftKey&&(t.preventDefault(),t.stopPropagation(),this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))),t.key==="Escape"&&(this._cancel(),t.preventDefault(),t.stopPropagation())}__tryFocusDate(){if(this.__pendingDateFocus){const e=this.focusableDateElement;e&&ie(e.date,this.__pendingDateFocus)&&(delete this.__pendingDateFocus,e.focus())}}async focusDate(t,e){const i=t||this.selectedDate||this.initialPosition||new Date;this.focusedDate=i,e||(this._focusedMonthDate=i.getDate()),await this.focusDateElement()}async focusDateElement(){this.__pendingDateFocus=this.focusedDate,await new Promise(t=>{requestAnimationFrame(t)}),this.__tryFocusDate()}_focusClosestDate(t){this.focusDate(Hr(t,[this.minDate,this.maxDate]))}_moveFocusByDays(t){var e=this.focusedDate,i=new Date(0,0);i.setFullYear(e.getFullYear()),i.setMonth(e.getMonth()),i.setDate(e.getDate()+t),this._dateAllowed(i,this.minDate,this.maxDate)?this.focusDate(i):this._dateAllowed(e,this.minDate,this.maxDate)?t>0?this.focusDate(this.maxDate):this.focusDate(this.minDate):this._focusClosestDate(e)}_moveFocusByMonths(t){var e=this.focusedDate,i=new Date(0,0);i.setFullYear(e.getFullYear()),i.setMonth(e.getMonth()+t);var s=i.getMonth();i.setDate(this._focusedMonthDate||(this._focusedMonthDate=e.getDate())),i.getMonth()!==s&&i.setDate(0),this._dateAllowed(i,this.minDate,this.maxDate)?this.focusDate(i,!0):this._dateAllowed(e,this.minDate,this.maxDate)?t>0?this.focusDate(this.maxDate):this.focusDate(this.minDate):this._focusClosestDate(e)}_moveFocusInsideMonth(t,e){var i=new Date(0,0);i.setFullYear(t.getFullYear()),e==="minDate"?(i.setMonth(t.getMonth()),i.setDate(1)):(i.setMonth(t.getMonth()+1),i.setDate(0)),this._dateAllowed(i,this.minDate,this.maxDate)?this.focusDate(i):this._dateAllowed(t,this.minDate,this.maxDate)?this.focusDate(this[e]):this._focusClosestDate(t)}_dateAllowed(t,e,i){return(!e||t>=e)&&(!i||t<=i)}_isTodayAllowed(t,e){var i=new Date,s=new Date(0,0);return s.setFullYear(i.getFullYear()),s.setMonth(i.getMonth()),s.setDate(i.getDate()),this._dateAllowed(s,t,e)}_stopPropagation(t){t.stopPropagation()}}customElements.define(Ai.is,Ai);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ba=r=>class extends Be(st(jt(wt(r)))){static get properties(){return{_selectedDate:{type:Date},_focusedDate:Date,value:{type:String,observer:"_valueChanged",notify:!0,value:""},initialPosition:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"},autoOpenDisabled:Boolean,showWeekNumbers:{type:Boolean},_fullscreen:{type:Boolean,value:!1},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_touchPrevented:Array,i18n:{type:Object,value:()=>({monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,week:"Week",calendar:"Calendar",today:"Today",cancel:"Cancel",formatDate:e=>{const i=String(e.year).replace(/\d+/,s=>"0000".substr(s.length)+s);return[e.month+1,e.day,i].join("/")},parseDate:e=>{const i=e.split("/"),s=new Date;let a,o=s.getMonth(),n=s.getFullYear();if(i.length===3?(n=parseInt(i[2]),i[2].length<3&&n>=0&&(n+=n<50?2e3:1900),o=parseInt(i[0])-1,a=parseInt(i[1])):i.length===2?(o=parseInt(i[0])-1,a=parseInt(i[1])):i.length===1&&(a=parseInt(i[0])),a!==void 0)return{day:a,month:o,year:n}},formatTitle:(e,i)=>e+" "+i})},min:{type:String,observer:"_minChanged"},max:{type:String,observer:"_maxChanged"},_minDate:{type:Date,value:""},_maxDate:{type:Date,value:""},_noInput:{type:Boolean,computed:"_isNoInput(inputElement, _fullscreen, _ios, i18n, opened, autoOpenDisabled)"},_ios:{type:Boolean,value:xt},_webkitOverflowScroll:{type:Boolean,value:document.createElement("div").style.webkitOverflowScrolling===""},_focusOverlayOnOpen:Boolean,_overlayInitialized:Boolean}}static get observers(){return["_selectedDateChanged(_selectedDate, i18n.formatDate)","_focusedDateChanged(_focusedDate, i18n.formatDate)"]}get clearElement(){return null}get _inputValue(){return this.inputElement?this.inputElement.value:void 0}set _inputValue(e){this.inputElement&&(this.inputElement.value=e)}get _nativeInput(){return this.inputElement?this.inputElement.focusElement||this.inputElement:null}constructor(){super(),this._boundOnScroll=this._onScroll.bind(this)}_onFocus(e){super._onFocus(e),this._noInput&&e.target.blur()}_onBlur(e){if(super._onBlur(e),!this.opened){if(this.autoOpenDisabled){const i=this._getParsedDate();this._isValidDate(i)&&this._selectDate(i)}this.inputElement.value===""&&this.__dispatchChange?(this.validate(),this.value="",this.__dispatchChange=!1):this.validate()}}ready(){super.ready(),this.addEventListener("click",e=>{!this._isClearButton(e)&&(!this.autoOpenDisabled||this._noInput)&&this.open()}),this.addController(new Zt(this._fullscreenMediaQuery,e=>{this._fullscreen=e})),this.addController(new $r(this))}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}_propertiesChanged(e,i,s){super._propertiesChanged(e,i,s),"value"in i&&this.__dispatchChange&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__dispatchChange=!1)}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){(this._overlayInitialized||this.autoOpenDisabled)&&this.$.overlay.close()}_initOverlay(){this.$.overlay.removeAttribute("disable-upgrade"),this._overlayInitialized=!0,this.$.overlay.addEventListener("opened-changed",e=>this.opened=e.detail.value),this._overlayContent.addEventListener("close",this._close.bind(this)),this._overlayContent.addEventListener("focus-input",this._focusAndSelect.bind(this)),this._overlayContent.addEventListener("date-tap",e=>{this.__userConfirmedDate=!0,this._selectDate(e.detail.date)}),this._overlayContent.addEventListener("date-selected",e=>{this.__userConfirmedDate=!0,this._selectDate(e.detail.date)}),this._overlayContent.addEventListener("focus",()=>{this._setFocused(!0)}),this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this)),this.addEventListener("mousedown",()=>this.__bringToFront()),this.addEventListener("touchstart",()=>this.__bringToFront())}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){const e=!this._inputValue||this._selectedDate&&this._inputValue===this._getFormattedDate(this.i18n.formatDate,this._selectedDate),i=!this._selectedDate||Xe(this._selectedDate,this._minDate,this._maxDate);let s=!0;return this.inputElement&&(this.inputElement.checkValidity?s=this.inputElement.checkValidity():this.inputElement.validate&&(s=this.inputElement.validate())),e&&i&&s}_selectDate(e){const i=this._formatISO(e);this.value!==i&&(this.__dispatchChange=!0),this._selectedDate=e}_close(e){e&&e.stopPropagation(),this._focus(),this.close()}__bringToFront(){requestAnimationFrame(()=>{this.$.overlay.bringToFront()})}_parseDate(e){const i=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(e);if(!i)return;const s=new Date(0,0);return s.setFullYear(parseInt(i[1],10)),s.setMonth(parseInt(i[2],10)-1),s.setDate(parseInt(i[3],10)),s}_isNoInput(e,i,s,a,o,n){return!e||i&&(!n||o)||s&&o||!a.parseDate}_formatISO(e){if(!(e instanceof Date))return"";const i=(m,_="00")=>(_+m).substr((_+m).length-_.length);let s="",a="0000",o=e.getFullYear();o<0?(o=-o,s="-",a="000000"):e.getFullYear()>=1e4&&(s="+",a="000000");const n=s+i(o,a),l=i(e.getMonth()+1),u=i(e.getDate());return[n,l,u].join("-")}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.autocomplete="off",e.setAttribute("role","combobox"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded",!!this.opened),this._applyInputValue(this._selectedDate))}_openedChanged(e){e&&!this._overlayInitialized&&this._initOverlay(),this._overlayInitialized&&(this.$.overlay.opened=e),this.inputElement&&this.inputElement.setAttribute("aria-expanded",e)}_selectedDateChanged(e,i){if(e===void 0||i===void 0)return;const s=this._formatISO(e);this.__keepInputValue||this._applyInputValue(e),s!==this.value&&(this.validate(),this.value=s),this._ignoreFocusedDateChange=!0,this._focusedDate=e,this._ignoreFocusedDateChange=!1}_focusedDateChanged(e,i){e===void 0||i===void 0||!this._ignoreFocusedDateChange&&!this._noInput&&this._applyInputValue(e)}__getOverlayTheme(e,i){if(i)return e}_handleDateChange(e,i,s){if(!i){this[e]="";return}const a=this._parseDate(i);if(!a){this.value=s;return}ie(this[e],a)||(this[e]=a,this.value&&this.validate())}_valueChanged(e,i){this._handleDateChange("_selectedDate",e,i),this._toggleHasValue(!!e)}_minChanged(e,i){this._handleDateChange("_minDate",e,i)}_maxChanged(e,i){this._handleDateChange("_maxDate",e,i)}_onOverlayOpened(){this._openedWithFocusRing=this.hasAttribute("focus-ring");const e=this._parseDate(this.initialPosition),i=this._selectedDate||this._overlayContent.initialPosition||e||new Date;e||Xe(i,this._minDate,this._maxDate)?this._overlayContent.initialPosition=i:this._overlayContent.initialPosition=Hr(i,[this._minDate,this._maxDate]),this._overlayContent.scrollToDate(this._overlayContent.focusedDate||this._overlayContent.initialPosition),this._ignoreFocusedDateChange=!0,this._overlayContent.focusedDate=this._overlayContent.focusedDate||this._overlayContent.initialPosition,this._ignoreFocusedDateChange=!1,window.addEventListener("scroll",this._boundOnScroll,!0),this._webkitOverflowScroll&&(this._touchPrevented=this._preventWebkitOverflowScrollingTouch(this.parentElement)),this._focusOverlayOnOpen?(this._overlayContent.focusDateElement(),this._focusOverlayOnOpen=!1):this._focus(),this._noInput&&this.focusElement&&this.focusElement.blur()}_preventWebkitOverflowScrollingTouch(e){const i=[];for(;e;){if(window.getComputedStyle(e).webkitOverflowScrolling==="touch"){const s=e.style.webkitOverflowScrolling;e.style.webkitOverflowScrolling="auto",i.push({element:e,oldInlineValue:s})}e=e.parentElement}return i}_selectParsedOrFocusedDate(){if(this._ignoreFocusedDateChange=!0,this.i18n.parseDate){const e=this._inputValue||"",i=this._getParsedDate(e);this._isValidDate(i)?this._selectDate(i):(this.__keepInputValue=!0,this._selectDate(null),this._selectedDate=null,this.__keepInputValue=!1)}else this._focusedDate&&this._selectDate(this._focusedDate);this._ignoreFocusedDateChange=!1}_onOverlayClosed(){window.removeEventListener("scroll",this._boundOnScroll,!0),this._touchPrevented&&(this._touchPrevented.forEach(e=>e.element.style.webkitOverflowScrolling=e.oldInlineValue),this._touchPrevented=[]),this.__userConfirmedDate?this.__userConfirmedDate=!1:this._selectParsedOrFocusedDate(),this._nativeInput&&this._nativeInput.selectionStart&&(this._nativeInput.selectionStart=this._nativeInput.selectionEnd),this.value||this.validate(),this.getRootNode().activeElement!==this.inputElement&&this._setFocused(!1)}_onScroll(e){(e.target===window||!this._overlayContent.contains(e.target))&&this._overlayContent._repositionYearScroller()}_focus(){this._noInput?this._overlayInitialized&&this._overlayContent.focus():this.inputElement.focus()}_focusAndSelect(){this._focus(),this._setSelectionRange(0,this._inputValue.length)}_applyInputValue(e){this._inputValue=e?this._getFormattedDate(this.i18n.formatDate,e):""}_getFormattedDate(e,i){return e(Wr(i))}_setSelectionRange(e,i){this._nativeInput&&this._nativeInput.setSelectionRange&&this._nativeInput.setSelectionRange(e,i)}_isValidDate(e){return e&&!isNaN(e.getTime())}_onChange(e){this.inputElement.value===""&&!(e.detail&&e.detail.sourceEvent&&e.detail.sourceEvent.__fromClearButton)&&(this.__dispatchChange=!0),e.stopPropagation()}_onClearButtonClick(){this.value="",this._inputValue="",this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_onKeyDown(e){if(this._noInput){var i=[9];i.indexOf(e.keyCode)===-1&&e.preventDefault()}switch(e.key){case"ArrowDown":case"ArrowUp":e.preventDefault(),this.opened?this._overlayContent.focusDateElement():(this._focusOverlayOnOpen=!0,this.open());break;case"Enter":{const s=this._getParsedDate(),a=this._isValidDate(s);if(this.opened)this._overlayInitialized&&this._overlayContent.focusedDate&&a&&this._selectDate(this._overlayContent.focusedDate),this.close();else if(!a&&this.inputElement.value!=="")this.validate();else{const o=this.value;this._selectParsedOrFocusedDate(),o===this.value&&this.validate()}break}case"Escape":this.opened?(this._focusedDate=this._selectedDate,this._close()):this.clearButtonVisible?this._onClearButtonClick():this.autoOpenDisabled?(this.inputElement.value===""&&this._selectDate(null),this._applyInputValue(this._selectedDate)):(this._focusedDate=this._selectedDate,this._selectParsedOrFocusedDate());break;case"Tab":this.opened&&(e.preventDefault(),this._setSelectionRange(0,0),e.shiftKey?this._overlayContent.focusCancel():this._overlayContent.focusDate(this._focusedDate));break}}_getParsedDate(e=this._inputValue){const i=this.i18n.parseDate&&this.i18n.parseDate(e);return i&&this._parseDate(i.year+"-"+(i.month+1)+"-"+i.day)}_isClearButton(e){return e.composedPath()[0]===this.clearElement}_onInput(){!this.opened&&this.inputElement.value&&!this.autoOpenDisabled&&this.open(),this._userInputValueChanged()}_userInputValueChanged(){if(this.opened&&this._inputValue){const e=this._getParsedDate();this._isValidDate(e)&&(this._ignoreFocusedDateChange=!0,ie(e,this._focusedDate)||(this._focusedDate=e),this._ignoreFocusedDateChange=!1)}}get _overlayContent(){return this.$.overlay.content.querySelector("#overlay-content")}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-date-picker",[He,_a],{moduleId:"vaadin-date-picker-styles"});class Nt extends ba(Kt(D(O(S)))){static get is(){return"vaadin-date-picker"}static get template(){return E`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <div class="vaadin-date-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-click="_toggle"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-date-picker-overlay
        id="overlay"
        fullscreen$="[[_fullscreen]]"
        theme$="[[__getOverlayTheme(theme, _overlayInitialized)]]"
        on-vaadin-overlay-open="_onOverlayOpened"
        on-vaadin-overlay-close="_onOverlayClosed"
        restore-focus-on-close
        restore-focus-node="[[inputElement]]"
        disable-upgrade
      >
        <template>
          <vaadin-date-picker-overlay-content
            id="overlay-content"
            i18n="[[i18n]]"
            fullscreen$="[[_fullscreen]]"
            label="[[label]]"
            selected-date="[[_selectedDate]]"
            slot="dropdown-content"
            focused-date="{{_focusedDate}}"
            show-week-numbers="[[showWeekNumbers]]"
            min-date="[[_minDate]]"
            max-date="[[_maxDate]]"
            role="dialog"
            on-date-tap="_close"
            part="overlay-content"
            theme$="[[__getOverlayTheme(theme, _overlayInitialized)]]"
          ></vaadin-date-picker-overlay-content>
        </template>
      </vaadin-date-picker-overlay>
    `}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Ne(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Ee(this.inputElement,this._labelController)),this.shadowRoot.querySelector('[part="toggle-button"]').addEventListener("mousedown",e=>e.preventDefault())}_onVaadinOverlayClose(t){this._openedWithFocusRing&&this.hasAttribute("focused")?this.setAttribute("focus-ring",""):this.hasAttribute("focused")||this.blur(),t.detail.sourceEvent&&t.detail.sourceEvent.composedPath().indexOf(this)!==-1&&t.preventDefault()}_toggle(t){t.stopPropagation(),this[this._overlayInitialized&&this.$.overlay.opened?"close":"open"]()}_openedChanged(t){super._openedChanged(t),this.$.overlay.positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this.$.overlay.noVerticalOverlap=!0}}customElements.define(Nt.is,Nt);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ya=w`
  [part~='toggle-button']::before {
    content: var(--lumo-icons-clock);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;y("vaadin-time-picker",[Se,ya],{moduleId:"lumo-time-picker"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wi extends $t{static get is(){return"vaadin-time-picker-item"}}customElements.define(wi.is,wi);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-time-picker-overlay",w`
    #overlay {
      width: var(--vaadin-time-picker-overlay-width, var(--_vaadin-time-picker-overlay-default-width, auto));
    }
  `,{moduleId:"vaadin-time-picker-overlay-styles"});class xi extends Bt{static get is(){return"vaadin-time-picker-overlay"}}customElements.define(xi.is,xi);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ci extends Vt{static get is(){return"vaadin-time-picker-scroller"}}customElements.define(Ci.is,Ci);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ii extends Me{static get is(){return"vaadin-time-picker-dropdown"}static get template(){return E`
      <vaadin-time-picker-overlay
        id="overlay"
        hidden$="[[_isOverlayHidden(_items.*, loading)]]"
        loading$="[[loading]]"
        opened="{{_overlayOpened}}"
        theme$="[[theme]]"
        position-target="[[positionTarget]]"
        no-vertical-overlap
      ></vaadin-time-picker-overlay>
    `}}customElements.define(Ii.is,Ii);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ei extends Br(D(S)){static get is(){return"vaadin-time-picker-combo-box"}static get template(){return E`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-time-picker-dropdown
        id="dropdown"
        opened="[[opened]]"
        position-target="[[positionTarget]]"
        renderer="[[renderer]]"
        _focused-index="[[_focusedIndex]]"
        _item-id-path="[[itemIdPath]]"
        _item-label-path="[[itemLabelPath]]"
        loading="[[loading]]"
        theme="[[theme]]"
      ></vaadin-time-picker-dropdown>
    `}static get properties(){return{positionTarget:{type:Object}}}get clearElement(){return this.querySelector('[part="clear-button"]')}_getItemElements(){return Array.from(this.$.dropdown._scroller.querySelectorAll("vaadin-time-picker-item"))}ready(){super.ready(),this.allowCustomValue=!0,this._toggleElement=this.querySelector(".toggle-button"),this.setAttribute("dir","ltr")}_isClearButton(t){return super._isClearButton(t)||t.type==="input"&&!t.isTrusted||t.composedPath()[0].getAttribute("part")==="clear-button"}_onChange(t){super._onChange(t),this._isClearButton(t)&&this._clear()}}customElements.define(Ei.is,Ei);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-time-picker",He,{moduleId:"vaadin-time-picker-styles"});class Le extends Xt(Kt(D(O(S)))){static get is(){return"vaadin-time-picker"}static get template(){return E`
      <style>
        /* See https://github.com/vaadin/vaadin-time-picker/issues/145 */
        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }

        :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
          direction: rtl;
          text-align: left;
        }

        [part~='toggle-button'] {
          cursor: pointer;
        }
      </style>

      <div class="vaadin-time-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-time-picker-combo-box
          id="comboBox"
          filtered-items="[[__dropdownItems]]"
          value="{{_comboBoxValue}}"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          position-target="[[_inputContainer]]"
          theme$="[[theme]]"
          on-change="__onChange"
        >
          <vaadin-input-container
            part="input-field"
            readonly="[[readonly]]"
            disabled="[[disabled]]"
            invalid="[[invalid]]"
            theme$="[[theme]]"
          >
            <slot name="prefix" slot="prefix"></slot>
            <slot name="input"></slot>
            <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-input-container>
        </vaadin-time-picker-combo-box>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{value:{type:String,notify:!0,value:""},min:{type:String,value:"00:00:00.000"},max:{type:String,value:"23:59:59.999"},step:{type:Number},autoOpenDisabled:Boolean,__dropdownItems:{type:Array},i18n:{type:Object,value:()=>({formatTime:t=>{if(!t)return;const e=(s=0,a="00")=>(a+s).substr((a+s).length-a.length);let i=`${e(t.hours)}:${e(t.minutes)}`;return t.seconds!==void 0&&(i+=`:${e(t.seconds)}`),t.milliseconds!==void 0&&(i+=`.${e(t.milliseconds,"000")}`),i},parseTime:t=>{const e="(\\d|[0-1]\\d|2[0-3])",i="(\\d|[0-5]\\d)",s=i,a="(\\d{1,3})",n=new RegExp(`^${e}(?::${i}(?::${s}(?:\\.${a})?)?)?$`).exec(t);if(n){if(n[4])for(;n[4].length<3;)n[4]+="0";return{hours:n[1],minutes:n[2],seconds:n[3],milliseconds:n[4]}}}})},_comboBoxValue:{type:String,observer:"__comboBoxValueChanged"},_inputContainer:Object}}static get observers(){return["__updateDropdownItems(i18n.*, min, max, step)"]}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Ne(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new Ee(this.inputElement,this._labelController)),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]')}_inputElementChanged(t){super._inputElementChanged(t),t&&this.$.comboBox._setInputElement(t)}checkValidity(){return!!(this.inputElement.checkValidity()&&(!this.value||this._timeAllowed(this.i18n.parseTime(this.value)))&&(!this._comboBoxValue||this.i18n.parseTime(this._comboBoxValue)))}_setFocused(t){super._setFocused(t),t||this.validate()}__validDayDivisor(t){return!t||24*3600%t===0||t<1&&t%1*1e3%1===0}_onKeyDown(t){if(this.readonly||this.disabled||this.__dropdownItems.length)return;const e=this.__validDayDivisor(this.step)&&this.step||60;t.keyCode===40?this.__onArrowPressWithStep(-e):t.keyCode===38&&this.__onArrowPressWithStep(e)}__onArrowPressWithStep(t){const e=this.__addStep(this.__getMsec(this.__memoValue),t,!0);this.__memoValue=e,this.inputElement.value=this.i18n.formatTime(this.__validateTime(e)),this.__dispatchChange()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__getMsec(t){let e=(t&&t.hours||0)*60*60*1e3;return e+=(t&&t.minutes||0)*60*1e3,e+=(t&&t.seconds||0)*1e3,e+=t&&parseInt(t.milliseconds)||0,e}__getSec(t){let e=(t&&t.hours||0)*60*60;return e+=(t&&t.minutes||0)*60,e+=t&&t.seconds||0,e+=t&&t.milliseconds/1e3||0,e}__addStep(t,e,i){t===0&&e<0&&(t=24*60*60*1e3);const s=e*1e3,a=t%s;s<0&&a&&i?t-=a:s>0&&a&&i?t-=a-s:t+=s;var o=Math.floor(t/1e3/60/60);t-=o*1e3*60*60;var n=Math.floor(t/1e3/60);t-=n*1e3*60;var l=Math.floor(t/1e3);return t-=l*1e3,{hours:o<24?o:0,minutes:n,seconds:l,milliseconds:t}}__updateDropdownItems(t,e,i,s){const a=this.__validateTime(this.__parseISO(e)),o=this.__getSec(a),n=this.__validateTime(this.__parseISO(i)),l=this.__getSec(n);if(this.__adjustValue(o,l,a,n),this.__dropdownItems=this.__generateDropdownList(o,l,s),s!==this.__oldStep){this.__oldStep=s;const u=this.__validateTime(this.__parseISO(this.value));this.__updateValue(u)}this.value&&(this._comboBoxValue=this.i18n.formatTime(this.i18n.parseTime(this.value)))}__generateDropdownList(t,e,i){if(i<15*60||!this.__validDayDivisor(i))return[];const s=[];i=i||3600;let a=-i+t;for(;a+i>=t&&a+i<=e;){const o=this.__validateTime(this.__addStep(a*1e3,i));a+=i;const n=this.i18n.formatTime(o);s.push({label:n,value:n})}return s}__adjustValue(t,e,i,s){if(!this.__memoValue)return;const a=this.__getSec(this.__memoValue);a<t?this.__updateValue(i):a>e&&this.__updateValue(s)}_valueChanged(t,e){const i=this.__memoValue=this.__parseISO(t),s=this.__formatISO(i)||"";this.value!==""&&this.value!==null&&!i?this.value=e:this.value!==s?this.value=s:this.__updateInputValue(i),this._toggleHasValue(!!this.value)}__comboBoxValueChanged(t,e){if(t===""&&e===void 0)return;const i=this.i18n.parseTime(t),s=this.i18n.formatTime(i)||"";i?t!==s?this._comboBoxValue=s:this.__updateValue(i):this.value=""}__onChange(t){t.stopPropagation(),this.validate(),this.__dispatchChange()}__updateValue(t){const e=this.__formatISO(this.__validateTime(t))||"";this.value=e}__updateInputValue(t){const e=this.i18n.formatTime(this.__validateTime(t))||"";this._comboBoxValue=e}__validateTime(t){return t&&(t.hours=parseInt(t.hours),t.minutes=parseInt(t.minutes||0),t.seconds=this.__stepSegment<3?void 0:parseInt(t.seconds||0),t.milliseconds=this.__stepSegment<4?void 0:parseInt(t.milliseconds||0)),t}get __stepSegment(){if(this.step%3600===0)return 1;if(this.step%60===0||!this.step)return 2;if(this.step%1===0)return 3;if(this.step<1)return 4}__formatISO(t){return Le.properties.i18n.value().formatTime(t)}__parseISO(t){return Le.properties.i18n.value().parseTime(t)}_timeAllowed(t){const e=this.i18n.parseTime(this.min),i=this.i18n.parseTime(this.max);return(!this.__getMsec(e)||this.__getMsec(t)>=this.__getMsec(e))&&(!this.__getMsec(i)||this.__getMsec(t)<=this.__getMsec(i))}_onClearButtonClick(){}_onChange(){}_onInput(){this._checkInputValue()}}customElements.define(Le.is,Le);y("vaadin-date-time-picker",[St,kt,Vr],{moduleId:"lumo-date-time-picker"});y("vaadin-date-time-picker-date-picker",w`
    :host {
      margin-right: 2px;
    }

    /* RTL specific styles */
    :host([dir='rtl']) {
      margin-right: auto;
      margin-left: 2px;
    }

    [part~='input-field'] {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part~='input-field'] {
      border-radius: var(--lumo-border-radius-m);
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  `,{moduleId:"lumo-date-time-picker-date-picker"});y("vaadin-date-time-picker-time-picker",w`
    [part~='input-field'] {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part~='input-field'] {
      border-radius: var(--lumo-border-radius-m);
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  `,{moduleId:"lumo-date-time-picker-time-picker"});/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Si extends Nt{static get is(){return"vaadin-date-time-picker-date-picker"}}customElements.define(Si.is,Si);/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ki extends Le{static get is(){return"vaadin-date-time-picker-time-picker"}}customElements.define(ki.is,ki);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qr=vr(r=>class extends r{get slots(){return{}}ready(){super.ready(),this._connectSlotMixin()}_connectSlotMixin(){Object.keys(this.slots).forEach(e=>{if(!(this._getDirectSlotChild(e)!==void 0)){const a=this.slots[e]();a instanceof Element&&(e!==""&&a.setAttribute("slot",e),this.appendChild(a))}})}_getDirectSlotChild(e){return Array.from(this.childNodes).find(i=>i.nodeType===Node.ELEMENT_NODE&&i.slot===e||i.nodeType===Node.TEXT_NODE&&i.textContent.trim()&&e==="")}});/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-date-time-picker",He,{moduleId:"vaadin-date-time-picker"});function Yr(r,t){for(;r;){if(r.properties&&r.properties[t])return r.properties[t];r=Object.getPrototypeOf(r)}}const Ht=customElements.get("vaadin-date-time-picker-date-picker"),Aa=customElements.get("vaadin-date-time-picker-time-picker"),Ur=Yr(Ht,"i18n").value(),ft=Yr(Aa,"i18n").value(),Ti=Object.keys(Ur),Di=Object.keys(ft);class Pi extends ot(qr(at(ue(D(O(S)))))){static get template(){return E`
      <style>
        .vaadin-date-time-picker-container {
          --vaadin-field-default-width: auto;
        }

        .slots {
          display: flex;
          --vaadin-field-default-width: 12em;
        }

        [part='date'],
        .slots ::slotted([slot='date-picker']) {
          pointer-events: all;
          min-width: 0;
          flex: 1 1 auto;
        }

        [part='time'],
        .slots ::slotted([slot='time-picker']) {
          pointer-events: all;
          min-width: 0;
          flex: 1 1.65 auto;
        }
      </style>

      <div class="vaadin-date-time-picker-container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div class="slots">
          <slot name="date-picker" id="dateSlot"></slot>
          <slot name="time-picker" id="timeSlot"></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-date-time-picker"}static get properties(){return{name:{type:String},value:{type:String,notify:!0,value:"",observer:"__valueChanged"},min:{type:String,observer:"__minChanged"},max:{type:String,observer:"__maxChanged"},__minDateTime:{type:Date,value:""},__maxDateTime:{type:Date,value:""},datePlaceholder:{type:String},timePlaceholder:{type:String},step:{type:Number},initialPosition:String,showWeekNumbers:{type:Boolean},autoOpenDisabled:Boolean,readonly:{type:Boolean,value:!1,reflectToAttribute:!0},autofocus:{type:Boolean},__selectedDateTime:{type:Date},i18n:{type:Object,value:()=>be(be({},Ur),ft)},__datePicker:{type:HTMLElement,observer:"__datePickerChanged"},__timePicker:{type:HTMLElement,observer:"__timePickerChanged"}}}static get observers(){return["__selectedDateTimeChanged(__selectedDateTime)","__datePlaceholderChanged(datePlaceholder)","__timePlaceholderChanged(timePlaceholder)","__stepChanged(step)","__initialPositionChanged(initialPosition)","__showWeekNumbersChanged(showWeekNumbers)","__requiredChanged(required)","__invalidChanged(invalid)","__disabledChanged(disabled)","__readonlyChanged(readonly)","__i18nChanged(i18n.*)","__autoOpenDisabledChanged(autoOpenDisabled)","__themeChanged(theme, __datePicker, __timePicker)","__pickersChanged(__datePicker, __timePicker)"]}get slots(){return lt(be({},super.slots),{"date-picker":()=>{const t=document.createElement("vaadin-date-time-picker-date-picker");return t.__defaultPicker=!0,t},"time-picker":()=>{const t=document.createElement("vaadin-date-time-picker-time-picker");return t.__defaultPicker=!0,t}})}constructor(){super(),this.__defaultDateMinMaxValue=void 0,this.__defaultTimeMinValue="00:00:00.000",this.__defaultTimeMaxValue="23:59:59.999",this.__changeEventHandler=this.__changeEventHandler.bind(this),this.__valueChangedEventHandler=this.__valueChangedEventHandler.bind(this),this._observer=new J(this,t=>{this.__onDomChange(t.addedNodes)})}ready(){super.ready(),this.addEventListener("focusout",t=>{t.relatedTarget!==this.__datePicker.$.overlay&&this.validate()}),this.__datePicker=this._getDirectSlotChild("date-picker"),this.__timePicker=this._getDirectSlotChild("time-picker"),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>this.focus()),this.setAttribute("role","group"),this.ariaTarget=this}__filterElements(t){return t.nodeType===Node.ELEMENT_NODE}focus(){this.__datePicker.focus()}_shouldRemoveFocus(t){const e=t.relatedTarget;return!(this.__datePicker.contains(e)||this.__timePicker.contains(e)||e===this.__datePicker.$.overlay)}__syncI18n(t,e,i){i=i||Object.keys(e.i18n),i.forEach(s=>{e.i18n&&e.i18n.hasOwnProperty(s)&&t.set(`i18n.${s}`,e.i18n[s])})}__changeEventHandler(t){t.stopPropagation(),this.__dispatchChangeForValue===this.value&&(this.__dispatchChange(),this.validate()),this.__dispatchChangeForValue=void 0}__addInputListeners(t){t.addEventListener("change",this.__changeEventHandler),t.addEventListener("value-changed",this.__valueChangedEventHandler)}__removeInputListeners(t){t.removeEventListener("change",this.__changeEventHandler),t.removeEventListener("value-changed",this.__valueChangedEventHandler)}__onDomChange(t){t.filter(e=>e.nodeType===Node.ELEMENT_NODE).forEach(e=>{const i=e.getAttribute("slot");i==="date-picker"?this.__datePicker=e:i==="time-picker"&&(this.__timePicker=e)})}__datePickerChanged(t,e){!t||(e&&(this.__removeInputListeners(e),e.remove()),this.__addInputListeners(t),t.__defaultPicker?(t.placeholder=this.datePlaceholder,t.invalid=this.invalid,t.initialPosition=this.initialPosition,t.showWeekNumbers=this.showWeekNumbers,this.__syncI18n(t,this,Ti)):(this.datePlaceholder=t.placeholder,this.initialPosition=t.initialPosition,this.showWeekNumbers=t.showWeekNumbers,this.__syncI18n(this,t,Ti)),t.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue),t.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue),t.required=this.required,t.disabled=this.disabled,t.readonly=this.readonly,t.autoOpenDisabled=this.autoOpenDisabled,t.validate=()=>{},t._validateInput=()=>{})}__timePickerChanged(t,e){!t||(e&&(this.__removeInputListeners(e),e.remove()),this.__addInputListeners(t),t.__defaultPicker?(t.placeholder=this.timePlaceholder,t.step=this.step,t.invalid=this.invalid,this.__syncI18n(t,this,Di)):(this.timePlaceholder=t.placeholder,this.step=t.step,this.__syncI18n(this,t,Di)),this.__updateTimePickerMinMax(),t.required=this.required,t.disabled=this.disabled,t.readonly=this.readonly,t.autoOpenDisabled=this.autoOpenDisabled,t.validate=()=>{})}__updateTimePickerMinMax(){if(this.__timePicker&&this.__datePicker){const t=this.__parseDate(this.__datePicker.value),e=ie(this.__minDateTime,this.__maxDateTime),i=this.__timePicker.value;this.__minDateTime&&ie(t,this.__minDateTime)||e?this.__timePicker.min=this.__dateToIsoTimeString(this.__minDateTime):this.__timePicker.min=this.__defaultTimeMinValue,this.__maxDateTime&&ie(t,this.__maxDateTime)||e?this.__timePicker.max=this.__dateToIsoTimeString(this.__maxDateTime):this.__timePicker.max=this.__defaultTimeMaxValue,this.__timePicker.value!==i&&(this.__timePicker.value=i)}}__i18nChanged(t){this.__datePicker&&this.__datePicker.set(t.path,t.value),this.__timePicker&&this.__timePicker.set(t.path,t.value)}__datePlaceholderChanged(t){this.__datePicker&&(this.__datePicker.placeholder=t)}__timePlaceholderChanged(t){this.__timePicker&&(this.__timePicker.placeholder=t)}__stepChanged(t){this.__timePicker&&this.__timePicker.step!==t&&(this.__timePicker.step=t)}__initialPositionChanged(t){this.__datePicker&&(this.__datePicker.initialPosition=t)}__showWeekNumbersChanged(t){this.__datePicker&&(this.__datePicker.showWeekNumbers=t)}__invalidChanged(t){this.__datePicker&&(this.__datePicker.invalid=t),this.__timePicker&&(this.__timePicker.invalid=t)}__requiredChanged(t){this.__datePicker&&(this.__datePicker.required=t),this.__timePicker&&(this.__timePicker.required=t)}__disabledChanged(t){this.__datePicker&&(this.__datePicker.disabled=t),this.__timePicker&&(this.__timePicker.disabled=t)}__readonlyChanged(t){this.__datePicker&&(this.__datePicker.readonly=t),this.__timePicker&&(this.__timePicker.readonly=t)}__parseDate(t){return Ht.prototype._parseDate(t)}__formatDateISO(t,e){return t?Ht.prototype._formatISO(t):e}__formatTimeISO(t){return ft.formatTime(t)}__parseTimeISO(t){return ft.parseTime(t)}__parseDateTime(t){const[e,i]=t.split("T");if(!(e&&i))return;const s=this.__parseDate(e);if(!s)return;const a=this.__parseTimeISO(i);if(!!a)return s.setHours(parseInt(a.hours)),s.setMinutes(parseInt(a.minutes||0)),s.setSeconds(parseInt(a.seconds||0)),s.setMilliseconds(parseInt(a.milliseconds||0)),s}__formatDateTime(t){if(!t)return"";const e=this.__formatDateISO(t,""),i=this.__dateToIsoTimeString(t);return`${e}T${i}`}__dateToIsoTimeString(t){return this.__formatTimeISO(this.__validateTime({hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds(),milliseconds:t.getMilliseconds()}))}__validateTime(t){return t&&(t.seconds=this.__stepSegment<3?void 0:t.seconds,t.milliseconds=this.__stepSegment<4?void 0:t.milliseconds),t}get __inputs(){return[this.__datePicker,this.__timePicker]}checkValidity(){const t=this.__inputs.some(i=>!i.checkValidity()),e=this.required&&this.__inputs.some(i=>!i.value);return!(t||e)}get __stepSegment(){const t=this.step==null?60:parseFloat(this.step);if(t%3600===0)return 1;if(t%60===0||!t)return 2;if(t%1===0)return 3;if(t<1)return 4}__dateTimeEquals(t,e){return ie(t,e)?t.getHours()===e.getHours()&&t.getMinutes()===e.getMinutes()&&t.getSeconds()===e.getSeconds()&&t.getMilliseconds()===e.getMilliseconds():!1}__handleDateTimeChange(t,e,i,s){if(!i){this[t]="",this[e]="";return}const a=this.__parseDateTime(i);if(!a){this[t]=s;return}this.__dateTimeEquals(this[e],a)||(this[e]=a)}__valueChanged(t,e){this.__handleDateTimeChange("value","__selectedDateTime",t,e),e!==void 0&&(this.__dispatchChangeForValue=t),this.toggleAttribute("has-value",!!t),this.__updateTimePickerMinMax()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__minChanged(t,e){this.__handleDateTimeChange("min","__minDateTime",t,e),this.__datePicker&&(this.__datePicker.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax()}__maxChanged(t,e){this.__handleDateTimeChange("max","__maxDateTime",t,e),this.__datePicker&&(this.__datePicker.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax()}__selectedDateTimeChanged(t){const e=this.__formatDateTime(t);if(this.value!==e&&(this.value=e),Boolean(this.__datePicker&&this.__datePicker.$)&&!this.__ignoreInputValueChange){this.__ignoreInputValueChange=!0;const[s,a]=this.value.split("T");this.__datePicker.value=s||"",this.__timePicker.value=a||"",this.__ignoreInputValueChange=!1}}get __formattedValue(){const t=this.__datePicker.value,e=this.__timePicker.value;return t&&e?[t,e].join("T"):""}__valueChangedEventHandler(){if(this.__ignoreInputValueChange)return;const t=this.__formattedValue,[e,i]=t.split("T");this.__ignoreInputValueChange=!0,this.__updateTimePickerMinMax(),e&&i?t!==this.value&&(this.value=t):this.value="",this.__ignoreInputValueChange=!1}__autoOpenDisabledChanged(t){this.__datePicker&&(this.__datePicker.autoOpenDisabled=t),this.__timePicker&&(this.__timePicker.autoOpenDisabled=t)}__themeChanged(t,e,i){!e||!i||[e,i].forEach(s=>{t?s.setAttribute("theme",t):s.removeAttribute("theme")})}__pickersChanged(t,e){!t||!e||t.__defaultPicker===e.__defaultPicker&&(t.value?this.__valueChangedEventHandler():this.value&&this.__selectedDateTimeChanged(this.__selectedDateTime))}}customElements.define(Pi.is,Pi);const wa=w`
  /* Optical centering */
  :host::before,
  :host::after {
    content: '';
    flex-basis: 0;
    flex-grow: 1;
  }

  :host::after {
    flex-grow: 1.1;
  }

  [part='overlay'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-xl);
    background-image: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  [part='content'] {
    padding: var(--lumo-space-l);
  }

  /* No padding */
  :host([theme~='no-padding']) [part='content'] {
    padding: 0;
  }

  /* Animations */

  :host([opening]),
  :host([closing]) {
    animation: 0.25s lumo-overlay-dummy-animation;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.12s 0.05s vaadin-dialog-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }

  @keyframes vaadin-dialog-enter {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s 0.03s vaadin-dialog-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
  }

  :host([closing]) [part='backdrop'] {
    animation-delay: 0.05s;
  }

  @keyframes vaadin-dialog-exit {
    100% {
      opacity: 0;
      transform: scale(1.02);
    }
  }
`;y("vaadin-dialog-overlay",[It,wa],{moduleId:"lumo-dialog"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function _t(r){return r.touches?r.touches[0]:r}function Gr(r){return r.clientX>=0&&r.clientX<=window.innerWidth&&r.clientY>=0&&r.clientY<=window.innerHeight}/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xa=r=>class extends r{static get properties(){return{draggable:{type:Boolean,value:!1,reflectToAttribute:!0},_touchDevice:{type:Boolean,value:Je},__dragHandleClassName:{type:String}}}ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._startDrag=this._startDrag.bind(this),this._drag=this._drag.bind(this),this._stopDrag=this._stopDrag.bind(this),this.$.overlay.$.overlay.addEventListener("mousedown",this._startDrag),this.$.overlay.$.overlay.addEventListener("touchstart",this._startDrag)}_startDrag(e){if(!(e.type==="touchstart"&&e.touches.length>1)&&this.draggable&&(e.button===0||e.touches)){const i=this.$.overlay.$.resizerContainer,s=e.target===i,a=e.offsetX>i.clientWidth||e.offsetY>i.clientHeight,o=e.target===this.$.overlay.$.content,n=e.composedPath().some((l,u)=>{if(!l.classList)return!1;const m=l.classList.contains(this.__dragHandleClassName||"draggable"),_=l.classList.contains("draggable-leaf-only"),g=u===0;return _&&g||m&&(!_||g)});if(s&&!a||o||n){!n&&e.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const l=_t(e);this._originalMouseCoords={top:l.pageY,left:l.pageX},window.addEventListener("mouseup",this._stopDrag),window.addEventListener("touchend",this._stopDrag),window.addEventListener("mousemove",this._drag),window.addEventListener("touchmove",this._drag),this.$.overlay.$.overlay.style.position!=="absolute"&&this.$.overlay.setBounds(this._originalBounds)}}}_drag(e){const i=_t(e);if(Gr(i)){const s=this._originalBounds.top+(i.pageY-this._originalMouseCoords.top),a=this._originalBounds.left+(i.pageX-this._originalMouseCoords.left);this.$.overlay.setBounds({top:s,left:a})}}_stopDrag(){window.removeEventListener("mouseup",this._stopDrag),window.removeEventListener("touchend",this._stopDrag),window.removeEventListener("mousemove",this._drag),window.removeEventListener("touchmove",this._drag)}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-dialog-overlay",w`
    [part='overlay'] {
      position: relative;
      overflow: visible;
      max-height: 100%;
      display: flex;
    }

    [part='content'] {
      box-sizing: border-box;
      height: 100%;
    }

    .resizer-container {
      overflow: auto;
      flex-grow: 1;
      border-radius: inherit; /* prevent child elements being drawn outside part=overlay */
    }

    [part='overlay'][style] .resizer-container {
      min-height: 100%;
      width: 100%;
    }

    :host(:not([resizable])) .resizer {
      display: none;
    }

    .resizer {
      position: absolute;
      height: 16px;
      width: 16px;
    }

    .resizer.edge {
      height: 8px;
      width: 8px;
      top: -4px;
      right: -4px;
      bottom: -4px;
      left: -4px;
    }

    .resizer.edge.n {
      width: auto;
      bottom: auto;
      cursor: ns-resize;
    }

    .resizer.ne {
      top: -4px;
      right: -4px;
      cursor: nesw-resize;
    }

    .resizer.edge.e {
      height: auto;
      left: auto;
      cursor: ew-resize;
    }

    .resizer.se {
      bottom: -4px;
      right: -4px;
      cursor: nwse-resize;
    }

    .resizer.edge.s {
      width: auto;
      top: auto;
      cursor: ns-resize;
    }

    .resizer.sw {
      bottom: -4px;
      left: -4px;
      cursor: nesw-resize;
    }

    .resizer.edge.w {
      height: auto;
      right: auto;
      cursor: ew-resize;
    }

    .resizer.nw {
      top: -4px;
      left: -4px;
      cursor: nwse-resize;
    }
  `,{moduleId:"vaadin-dialog-resizable-overlay-styles"});const Ca=r=>class extends r{static get properties(){return{resizable:{type:Boolean,value:!1,reflectToAttribute:!0}}}ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._resizeListeners={start:{},resize:{},stop:{}},this._addResizeListeners()}_addResizeListeners(){["n","e","s","w","nw","ne","se","sw"].forEach(e=>{const i=document.createElement("div");this._resizeListeners.start[e]=s=>this._startResize(s,e),this._resizeListeners.resize[e]=s=>this._resize(s,e),this._resizeListeners.stop[e]=()=>this._stopResize(e),e.length===1&&i.classList.add("edge"),i.classList.add("resizer"),i.classList.add(e),i.addEventListener("mousedown",this._resizeListeners.start[e]),i.addEventListener("touchstart",this._resizeListeners.start[e]),this.$.overlay.$.resizerContainer.appendChild(i)})}_startResize(e,i){if(!(e.type==="touchstart"&&e.touches.length>1)&&(e.button===0||e.touches)){e.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const s=_t(e);this._originalMouseCoords={top:s.pageY,left:s.pageX},window.addEventListener("mousemove",this._resizeListeners.resize[i]),window.addEventListener("touchmove",this._resizeListeners.resize[i]),window.addEventListener("mouseup",this._resizeListeners.stop[i]),window.addEventListener("touchend",this._resizeListeners.stop[i]),this.$.overlay.$.overlay.style.position!=="absolute"&&this.$.overlay.setBounds(this._originalBounds)}}_resize(e,i){const s=_t(e);Gr(s)&&i.split("").forEach(o=>{switch(o){case"n":{const n=this._originalBounds.height-(s.pageY-this._originalMouseCoords.top),l=this._originalBounds.top+(s.pageY-this._originalMouseCoords.top);n>40&&this.$.overlay.setBounds({top:l,height:n});break}case"e":{const n=this._originalBounds.width+(s.pageX-this._originalMouseCoords.left);n>40&&this.$.overlay.setBounds({width:n});break}case"s":{const n=this._originalBounds.height+(s.pageY-this._originalMouseCoords.top);n>40&&this.$.overlay.setBounds({height:n});break}case"w":{const n=this._originalBounds.width-(s.pageX-this._originalMouseCoords.left),l=this._originalBounds.left+(s.pageX-this._originalMouseCoords.left);n>40&&this.$.overlay.setBounds({left:l,width:n});break}}})}_stopResize(e){window.removeEventListener("mousemove",this._resizeListeners.resize[e]),window.removeEventListener("touchmove",this._resizeListeners.resize[e]),window.removeEventListener("mouseup",this._resizeListeners.stop[e]),window.removeEventListener("touchend",this._resizeListeners.stop[e]),this.dispatchEvent(new CustomEvent("resize",{detail:this._getResizeDimensions()}))}_getResizeDimensions(){const e=this.$.overlay.$.resizerContainer.scrollTop,{width:i,height:s}=getComputedStyle(this.$.overlay.$.overlay),a=this.$.overlay.$.content;a.setAttribute("style","position: absolute; top: 0; right: 0; bottom: 0; left: 0; box-sizing: content-box; height: auto;");const{width:o,height:n}=getComputedStyle(a);return a.removeAttribute("style"),this.$.overlay.$.resizerContainer.scrollTop=e,{width:i,height:s,contentWidth:o,contentHeight:n}}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-dialog-overlay",w`
    /*
      NOTE(platosha): Make some min-width to prevent collapsing of the content
      taking the parent width, e. g., <vaadin-grid> and such.
    */
    [part='content'] {
      min-width: 12em; /* matches the default <vaadin-text-field> width */
    }

    :host([has-bounds-set]) [part='overlay'] {
      max-width: none;
    }
  `,{moduleId:"vaadin-dialog-overlay-styles"});let Ye;class zi extends Ve{static get is(){return"vaadin-dialog-overlay"}static get template(){if(!Ye){Ye=super.template.cloneNode(!0);const t=Ye.content.querySelector('[part="content"]'),e=Ye.content.querySelector('[part="overlay"]'),i=document.createElement("div");i.id="resizerContainer",i.classList.add("resizer-container"),i.appendChild(t),e.appendChild(i)}return Ye}static get properties(){return{modeless:Boolean,withBackdrop:Boolean}}setBounds(t){const e=this.$.overlay,i=be({},t);e.style.position!=="absolute"&&(e.style.position="absolute",this.setAttribute("has-bounds-set",""),this.__forceSafariReflow());for(const s in i)typeof i[s]=="number"&&(i[s]=`${i[s]}px`);Object.assign(e.style,i)}getBounds(){const t=this.$.overlay.getBoundingClientRect(),e=this.getBoundingClientRect(),i=t.top-e.top,s=t.left-e.left,a=t.width,o=t.height;return{top:i,left:s,width:a,height:o}}__forceSafariReflow(){const t=this.$.resizerContainer.scrollTop,e=this.$.overlay;e.style.display="block",requestAnimationFrame(()=>{e.style.display="",this.$.resizerContainer.scrollTop=t})}}customElements.define(zi.is,zi);class Oi extends Ir(O(xa(Ca(S)))){static get template(){return E`
      <style>
        :host {
          display: none;
        }
      </style>

      <vaadin-dialog-overlay
        id="overlay"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        focus-trap
      ></vaadin-dialog-overlay>
    `}static get is(){return"vaadin-dialog"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},noCloseOnOutsideClick:{type:Boolean,value:!1},noCloseOnEsc:{type:Boolean,value:!1},ariaLabel:{type:String,value:""},renderer:Function,modeless:{type:Boolean,value:!1}}}static get observers(){return["_openedChanged(opened)","_ariaLabelChanged(ariaLabel)","_rendererChanged(renderer)"]}ready(){super.ready(),this.$.overlay.setAttribute("role","dialog"),this.$.overlay.addEventListener("vaadin-overlay-outside-click",this._handleOutsideClick.bind(this)),this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._handleEscPress.bind(this)),ke(this)}requestContentUpdate(){this.$.overlay.requestContentUpdate()}_rendererChanged(t){this.$.overlay.setProperties({owner:this,renderer:t})}connectedCallback(){super.connectedCallback(),this.__restoreOpened&&(this.opened=!0)}disconnectedCallback(){super.disconnectedCallback(),this.__restoreOpened=this.opened,this.opened=!1}_openedChanged(t){this.$.overlay.opened=t}_ariaLabelChanged(t){t?this.$.overlay.setAttribute("aria-label",t):this.$.overlay.removeAttribute("aria-label")}_onOverlayOpened(t){t.detail.value===!1&&(this.opened=!1)}_handleOutsideClick(t){this.noCloseOnOutsideClick&&t.preventDefault()}_handleEscPress(t){this.noCloseOnEsc&&t.preventDefault()}_bringOverlayToFront(){this.modeless&&this.$.overlay.bringToFront()}}customElements.define(Oi.is,Oi);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ia=w`
  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;y("vaadin-email-field",[Se,Ia],{moduleId:"lumo-email-field"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-email-field",w`
    :host([dir='rtl']) [part='input-field'] {
      direction: ltr;
    }

    :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
      direction: rtl;
      text-align: left;
    }
  `,{moduleId:"vaadin-email-field-styles"});class Ea extends Ms{static get is(){return"vaadin-email-field"}constructor(){super(),this._setType("email")}connectedCallback(){super.connectedCallback(),this.inputElement&&(this.inputElement.autocapitalize="off")}_createConstraintsObserver(){this.pattern=this.pattern||"^([a-zA-Z0-9_\\.\\-+])+@[a-zA-Z0-9-.]+\\.[a-zA-Z0-9-]{2,}$",super._createConstraintsObserver()}}customElements.define("vaadin-email-field",Ea);(function(){const r=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Combo Box")};window.Vaadin.Flow.comboBoxConnector={initLazy:t=>r(function(e){if(e.$connector)return;e.$connector={};const i={};let s={},a="";const o=new window.Vaadin.ComboBoxPlaceholder,n=Math.max(e.pageSize*2,500),l=(()=>{let f="",A=!1;return{needsDataCommunicatorReset:()=>A=!0,getLastFilterSentToServer:()=>f,requestData:(I,M,R)=>{const Q=M-I,X=R.filter;e.$server.setRequestedRange(I,Q,X),f=X,A&&(e.$server.resetDataCommunicator(),A=!1)}}})(),u=(f=Object.keys(i))=>{f.forEach(A=>{i[A]([],e.size),delete i[A];const b=parseInt(A)*e.pageSize,C=b+e.pageSize,x=Math.min(C,e.filteredItems.length);for(let I=b;I<x;I++)e.filteredItems[I]=o})};e.dataProvider=function(f,A){if(f.pageSize!=e.pageSize)throw"Invalid pageSize";if(e._clientSideFilter)if(s[0]){T(s[0],A);return}else f.filter="";if(f.filter!==a){s={},a=f.filter,this._debouncer=_e.debounce(this._debouncer,Re.after(500),()=>{if(l.getLastFilterSentToServer()===f.filter&&l.needsDataCommunicatorReset(),f.filter!==a)throw new Error("Expected params.filter to be '"+a+"' but was '"+f.filter+"'");u(),e.dataProvider(f,A)});return}if(s[f.page])g(f.page,A);else{i[f.page]=A;const C=Object.keys(i).map(M=>parseInt(M)),x=Math.min(...C),I=Math.max(...C);if(C.length*f.pageSize>n)f.page===x?u([String(I)]):u([String(x)]),e.dataProvider(f,A);else if(I-x+1!==C.length)u();else{const M=f.pageSize*x,R=f.pageSize*(I+1);!this._debouncer||!this._debouncer.isActive()?l.requestData(M,R,f):this._debouncer=_e.debounce(this._debouncer,Re.after(200),()=>l.requestData(M,R,f))}}},e.$connector.clear=r((f,A)=>{const b=Math.floor(f/e.pageSize),C=Math.ceil(A/e.pageSize);for(let x=b;x<b+C;x++)delete s[x]}),e.$connector.filter=r(function(f,A){return A=A?A.toString().toLowerCase():"",e._getItemLabel(f).toString().toLowerCase().indexOf(A)>-1}),e.$connector.set=r(function(f,A,b){if(b!=l.getLastFilterSentToServer())return;if(f%e.pageSize!=0)throw"Got new data to index "+f+" which is not aligned with the page size of "+e.pageSize;if(f===0&&A.length===0&&i[0]){s[0]=[];return}const C=f/e.pageSize,x=Math.ceil(A.length/e.pageSize);for(let I=0;I<x;I++){let M=C+I,R=A.slice(I*e.pageSize,(I+1)*e.pageSize);s[M]=R}}),e.$connector.updateData=r(function(f){for(let A=0;A<f.length;A++){let b=f[A];for(let C=0;C<e.filteredItems.length;C++)if(e.filteredItems[C].key===b.key){e.set("filteredItems."+C,b);break}}}),e.$connector.updateSize=r(function(f){e._clientSideFilter||(e.size=f)}),e.$connector.reset=r(function(){u(),s={},e.clearCache()}),e.$connector.confirm=r(function(f,A){if(A!=l.getLastFilterSentToServer())return;let b=Object.getOwnPropertyNames(i);for(let C=0;C<b.length;C++){let x=b[C];s[x]&&g(x,i[x])}e.$server.confirmUpdate(f)}),e.addEventListener("opened-changed",r(()=>{const f=e.$.dropdown._scroller.__isItemSelected;e.$.dropdown._scroller.__isItemSelected=(A,b,C)=>{let x=f.call(e,A,b,C);return e._selectedKey&&(e.filteredItems.indexOf(b)>-1?delete e._selectedKey:x=x||A.key===e._selectedKey),x}}),{once:!0}),e.$connector.enableClientValidation=r(function(f){e.$?(f?_(e):m(e),e.validate()):setTimeout(function(){e.$connector.enableClientValidation(f)},10)});const m=r(function(f){typeof f.$checkValidity=="undefined"&&(f.$checkValidity=f.checkValidity,f.checkValidity=function(){return!e.invalid}),typeof f.$validate=="undefined"&&(f.$validate=f.validate,f.validate=function(){return!(e.focusElement.invalid=e.invalid)})}),_=r(function(f){f.$checkValidity&&(f.checkValidity=f.$checkValidity,delete f.$checkValidity),f.$validate&&(f.validate=f.$validate,delete f.$validate)}),g=r(function(f,A){let b=s[f];e._clientSideFilter?T(b,A):(delete s[f],A(b,e.size))}),T=r(function(f,A){let b=f;e.filter&&(b=f.filter(C=>e.$connector.filter(C,e.filter))),A(b,b.length)});e.addEventListener("custom-value-set",r(f=>f.preventDefault()))})(t)}})();window.Vaadin.ComboBoxPlaceholder=Ie;function Y(r,t){if(t.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+t.length+" present")}function Sa(r){return Y(1,arguments),r instanceof Date||typeof r=="object"&&Object.prototype.toString.call(r)==="[object Date]"}function K(r){Y(1,arguments);var t=Object.prototype.toString.call(r);return r instanceof Date||typeof r=="object"&&t==="[object Date]"?new Date(r.getTime()):typeof r=="number"||t==="[object Number]"?new Date(r):((typeof r=="string"||t==="[object String]")&&typeof console!="undefined"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}function jr(r){if(Y(1,arguments),!Sa(r)&&typeof r!="number")return!1;var t=K(r);return!isNaN(Number(t))}var ka={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ta=function(r,t,e){var i,s=ka[r];return typeof s=="string"?i=s:t===1?i=s.one:i=s.other.replace("{{count}}",t.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"in "+i:i+" ago":i},Da=Ta;function zt(r){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):r.defaultWidth,i=r.formats[e]||r.formats[r.defaultWidth];return i}}var Pa={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},za={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Oa={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ra={date:zt({formats:Pa,defaultWidth:"full"}),time:zt({formats:za,defaultWidth:"full"}),dateTime:zt({formats:Oa,defaultWidth:"full"})},Fa=Ra,Ma={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},La=function(r,t,e,i){return Ma[r]},$a=La;function Ue(r){return function(t,e){var i=e||{},s=i.context?String(i.context):"standalone",a;if(s==="formatting"&&r.formattingValues){var o=r.defaultFormattingWidth||r.defaultWidth,n=i.width?String(i.width):o;a=r.formattingValues[n]||r.formattingValues[o]}else{var l=r.defaultWidth,u=i.width?String(i.width):r.defaultWidth;a=r.values[u]||r.values[l]}var m=r.argumentCallback?r.argumentCallback(t):t;return a[m]}}var Ba={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Va={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Na={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ha={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Wa={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},qa={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ya=function(r,t){var e=Number(r),i=e%100;if(i>20||i<10)switch(i%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},Ua={ordinalNumber:Ya,era:Ue({values:Ba,defaultWidth:"wide"}),quarter:Ue({values:Va,defaultWidth:"wide",argumentCallback:function(r){return r-1}}),month:Ue({values:Na,defaultWidth:"wide"}),day:Ue({values:Ha,defaultWidth:"wide"}),dayPeriod:Ue({values:Wa,defaultWidth:"wide",formattingValues:qa,defaultFormattingWidth:"wide"})},Ga=Ua;function Ge(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.width,s=i&&r.matchPatterns[i]||r.matchPatterns[r.defaultMatchWidth],a=t.match(s);if(!a)return null;var o=a[0],n=i&&r.parsePatterns[i]||r.parsePatterns[r.defaultParseWidth],l=Array.isArray(n)?Qa(n,function(_){return _.test(o)}):ja(n,function(_){return _.test(o)}),u;u=r.valueCallback?r.valueCallback(l):l,u=e.valueCallback?e.valueCallback(u):u;var m=t.slice(o.length);return{value:u,rest:m}}}function ja(r,t){for(var e in r)if(r.hasOwnProperty(e)&&t(r[e]))return e}function Qa(r,t){for(var e=0;e<r.length;e++)if(t(r[e]))return e}function Xa(r){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.match(r.matchPattern);if(!i)return null;var s=i[0],a=t.match(r.parsePattern);if(!a)return null;var o=r.valueCallback?r.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var n=t.slice(s.length);return{value:o,rest:n}}}var Ka=/^(\d+)(th|st|nd|rd)?/i,Za=/\d+/i,Ja={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},eo={any:[/^b/i,/^(a|c)/i]},to={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},io={any:[/1/i,/2/i,/3/i,/4/i]},ro={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},so={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ao={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},oo={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},no={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},lo={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ho={ordinalNumber:Xa({matchPattern:Ka,parsePattern:Za,valueCallback:function(r){return parseInt(r,10)}}),era:Ge({matchPatterns:Ja,defaultMatchWidth:"wide",parsePatterns:eo,defaultParseWidth:"any"}),quarter:Ge({matchPatterns:to,defaultMatchWidth:"wide",parsePatterns:io,defaultParseWidth:"any",valueCallback:function(r){return r+1}}),month:Ge({matchPatterns:ro,defaultMatchWidth:"wide",parsePatterns:so,defaultParseWidth:"any"}),day:Ge({matchPatterns:ao,defaultMatchWidth:"wide",parsePatterns:oo,defaultParseWidth:"any"}),dayPeriod:Ge({matchPatterns:no,defaultMatchWidth:"any",parsePatterns:lo,defaultParseWidth:"any"})},co=ho,uo={code:"en-US",formatDistance:Da,formatLong:Fa,formatRelative:$a,localize:Ga,match:co,options:{weekStartsOn:0,firstWeekContainsDate:1}},Qr=uo;function H(r){if(r===null||r===!0||r===!1)return NaN;var t=Number(r);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function po(r,t){Y(2,arguments);var e=K(r).getTime(),i=H(t);return new Date(e+i)}function Xr(r,t){Y(2,arguments);var e=H(t);return po(r,-e)}var mo=864e5;function fo(r){Y(1,arguments);var t=K(r),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var i=t.getTime(),s=e-i;return Math.floor(s/mo)+1}function $e(r){Y(1,arguments);var t=1,e=K(r),i=e.getUTCDay(),s=(i<t?7:0)+i-t;return e.setUTCDate(e.getUTCDate()-s),e.setUTCHours(0,0,0,0),e}function Kr(r){Y(1,arguments);var t=K(r),e=t.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(e+1,0,4),i.setUTCHours(0,0,0,0);var s=$e(i),a=new Date(0);a.setUTCFullYear(e,0,4),a.setUTCHours(0,0,0,0);var o=$e(a);return t.getTime()>=s.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}function _o(r){Y(1,arguments);var t=Kr(r),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var i=$e(e);return i}var go=6048e5;function Zr(r){Y(1,arguments);var t=K(r),e=$e(t).getTime()-_o(t).getTime();return Math.round(e/go)+1}function Ce(r,t){Y(1,arguments);var e=t||{},i=e.locale,s=i&&i.options&&i.options.weekStartsOn,a=s==null?0:H(s),o=e.weekStartsOn==null?a:H(e.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var n=K(r),l=n.getUTCDay(),u=(l<o?7:0)+l-o;return n.setUTCDate(n.getUTCDate()-u),n.setUTCHours(0,0,0,0),n}function ei(r,t){Y(1,arguments);var e=K(r),i=e.getUTCFullYear(),s=t||{},a=s.locale,o=a&&a.options&&a.options.firstWeekContainsDate,n=o==null?1:H(o),l=s.firstWeekContainsDate==null?n:H(s.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=new Date(0);u.setUTCFullYear(i+1,0,l),u.setUTCHours(0,0,0,0);var m=Ce(u,t),_=new Date(0);_.setUTCFullYear(i,0,l),_.setUTCHours(0,0,0,0);var g=Ce(_,t);return e.getTime()>=m.getTime()?i+1:e.getTime()>=g.getTime()?i:i-1}function vo(r,t){Y(1,arguments);var e=t||{},i=e.locale,s=i&&i.options&&i.options.firstWeekContainsDate,a=s==null?1:H(s),o=e.firstWeekContainsDate==null?a:H(e.firstWeekContainsDate),n=ei(r,t),l=new Date(0);l.setUTCFullYear(n,0,o),l.setUTCHours(0,0,0,0);var u=Ce(l,t);return u}var bo=6048e5;function Jr(r,t){Y(1,arguments);var e=K(r),i=Ce(e,t).getTime()-vo(e,t).getTime();return Math.round(i/bo)+1}function F(r,t){for(var e=r<0?"-":"",i=Math.abs(r).toString();i.length<t;)i="0"+i;return e+i}var yo={y:function(r,t){var e=r.getUTCFullYear(),i=e>0?e:1-e;return F(t==="yy"?i%100:i,t.length)},M:function(r,t){var e=r.getUTCMonth();return t==="M"?String(e+1):F(e+1,2)},d:function(r,t){return F(r.getUTCDate(),t.length)},a:function(r,t){var e=r.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.toUpperCase();case"aaa":return e;case"aaaaa":return e[0];case"aaaa":default:return e==="am"?"a.m.":"p.m."}},h:function(r,t){return F(r.getUTCHours()%12||12,t.length)},H:function(r,t){return F(r.getUTCHours(),t.length)},m:function(r,t){return F(r.getUTCMinutes(),t.length)},s:function(r,t){return F(r.getUTCSeconds(),t.length)},S:function(r,t){var e=t.length,i=r.getUTCMilliseconds(),s=Math.floor(i*Math.pow(10,e-3));return F(s,t.length)}},me=yo,Pe={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ao={G:function(r,t,e){var i=r.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return e.era(i,{width:"abbreviated"});case"GGGGG":return e.era(i,{width:"narrow"});case"GGGG":default:return e.era(i,{width:"wide"})}},y:function(r,t,e){if(t==="yo"){var i=r.getUTCFullYear(),s=i>0?i:1-i;return e.ordinalNumber(s,{unit:"year"})}return me.y(r,t)},Y:function(r,t,e,i){var s=ei(r,i),a=s>0?s:1-s;if(t==="YY"){var o=a%100;return F(o,2)}return t==="Yo"?e.ordinalNumber(a,{unit:"year"}):F(a,t.length)},R:function(r,t){var e=Kr(r);return F(e,t.length)},u:function(r,t){var e=r.getUTCFullYear();return F(e,t.length)},Q:function(r,t,e){var i=Math.ceil((r.getUTCMonth()+1)/3);switch(t){case"Q":return String(i);case"QQ":return F(i,2);case"Qo":return e.ordinalNumber(i,{unit:"quarter"});case"QQQ":return e.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return e.quarter(i,{width:"wide",context:"formatting"})}},q:function(r,t,e){var i=Math.ceil((r.getUTCMonth()+1)/3);switch(t){case"q":return String(i);case"qq":return F(i,2);case"qo":return e.ordinalNumber(i,{unit:"quarter"});case"qqq":return e.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return e.quarter(i,{width:"wide",context:"standalone"})}},M:function(r,t,e){var i=r.getUTCMonth();switch(t){case"M":case"MM":return me.M(r,t);case"Mo":return e.ordinalNumber(i+1,{unit:"month"});case"MMM":return e.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return e.month(i,{width:"wide",context:"formatting"})}},L:function(r,t,e){var i=r.getUTCMonth();switch(t){case"L":return String(i+1);case"LL":return F(i+1,2);case"Lo":return e.ordinalNumber(i+1,{unit:"month"});case"LLL":return e.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return e.month(i,{width:"wide",context:"standalone"})}},w:function(r,t,e,i){var s=Jr(r,i);return t==="wo"?e.ordinalNumber(s,{unit:"week"}):F(s,t.length)},I:function(r,t,e){var i=Zr(r);return t==="Io"?e.ordinalNumber(i,{unit:"week"}):F(i,t.length)},d:function(r,t,e){return t==="do"?e.ordinalNumber(r.getUTCDate(),{unit:"date"}):me.d(r,t)},D:function(r,t,e){var i=fo(r);return t==="Do"?e.ordinalNumber(i,{unit:"dayOfYear"}):F(i,t.length)},E:function(r,t,e){var i=r.getUTCDay();switch(t){case"E":case"EE":case"EEE":return e.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(i,{width:"short",context:"formatting"});case"EEEE":default:return e.day(i,{width:"wide",context:"formatting"})}},e:function(r,t,e,i){var s=r.getUTCDay(),a=(s-i.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return F(a,2);case"eo":return e.ordinalNumber(a,{unit:"day"});case"eee":return e.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(s,{width:"short",context:"formatting"});case"eeee":default:return e.day(s,{width:"wide",context:"formatting"})}},c:function(r,t,e,i){var s=r.getUTCDay(),a=(s-i.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return F(a,t.length);case"co":return e.ordinalNumber(a,{unit:"day"});case"ccc":return e.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(s,{width:"narrow",context:"standalone"});case"cccccc":return e.day(s,{width:"short",context:"standalone"});case"cccc":default:return e.day(s,{width:"wide",context:"standalone"})}},i:function(r,t,e){var i=r.getUTCDay(),s=i===0?7:i;switch(t){case"i":return String(s);case"ii":return F(s,t.length);case"io":return e.ordinalNumber(s,{unit:"day"});case"iii":return e.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(i,{width:"short",context:"formatting"});case"iiii":default:return e.day(i,{width:"wide",context:"formatting"})}},a:function(r,t,e){var i=r.getUTCHours(),s=i/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return e.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(r,t,e){var i=r.getUTCHours(),s;switch(i===12?s=Pe.noon:i===0?s=Pe.midnight:s=i/12>=1?"pm":"am",t){case"b":case"bb":return e.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return e.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(r,t,e){var i=r.getUTCHours(),s;switch(i>=17?s=Pe.evening:i>=12?s=Pe.afternoon:i>=4?s=Pe.morning:s=Pe.night,t){case"B":case"BB":case"BBB":return e.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return e.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(r,t,e){if(t==="ho"){var i=r.getUTCHours()%12;return i===0&&(i=12),e.ordinalNumber(i,{unit:"hour"})}return me.h(r,t)},H:function(r,t,e){return t==="Ho"?e.ordinalNumber(r.getUTCHours(),{unit:"hour"}):me.H(r,t)},K:function(r,t,e){var i=r.getUTCHours()%12;return t==="Ko"?e.ordinalNumber(i,{unit:"hour"}):F(i,t.length)},k:function(r,t,e){var i=r.getUTCHours();return i===0&&(i=24),t==="ko"?e.ordinalNumber(i,{unit:"hour"}):F(i,t.length)},m:function(r,t,e){return t==="mo"?e.ordinalNumber(r.getUTCMinutes(),{unit:"minute"}):me.m(r,t)},s:function(r,t,e){return t==="so"?e.ordinalNumber(r.getUTCSeconds(),{unit:"second"}):me.s(r,t)},S:function(r,t){return me.S(r,t)},X:function(r,t,e,i){var s=i._originalDate||r,a=s.getTimezoneOffset();if(a===0)return"Z";switch(t){case"X":return Fi(a);case"XXXX":case"XX":return ye(a);case"XXXXX":case"XXX":default:return ye(a,":")}},x:function(r,t,e,i){var s=i._originalDate||r,a=s.getTimezoneOffset();switch(t){case"x":return Fi(a);case"xxxx":case"xx":return ye(a);case"xxxxx":case"xxx":default:return ye(a,":")}},O:function(r,t,e,i){var s=i._originalDate||r,a=s.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Ri(a,":");case"OOOO":default:return"GMT"+ye(a,":")}},z:function(r,t,e,i){var s=i._originalDate||r,a=s.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Ri(a,":");case"zzzz":default:return"GMT"+ye(a,":")}},t:function(r,t,e,i){var s=i._originalDate||r,a=Math.floor(s.getTime()/1e3);return F(a,t.length)},T:function(r,t,e,i){var s=i._originalDate||r,a=s.getTime();return F(a,t.length)}};function Ri(r,t){var e=r>0?"-":"+",i=Math.abs(r),s=Math.floor(i/60),a=i%60;if(a===0)return e+String(s);var o=t||"";return e+String(s)+o+F(a,2)}function Fi(r,t){if(r%60===0){var e=r>0?"-":"+";return e+F(Math.abs(r)/60,2)}return ye(r,t)}function ye(r,t){var e=t||"",i=r>0?"-":"+",s=Math.abs(r),a=F(Math.floor(s/60),2),o=F(s%60,2);return i+a+e+o}var wo=Ao;function Mi(r,t){switch(r){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function es(r,t){switch(r){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}function xo(r,t){var e=r.match(/(P+)(p+)?/)||[],i=e[1],s=e[2];if(!s)return Mi(r,t);var a;switch(i){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;case"PPPP":default:a=t.dateTime({width:"full"});break}return a.replace("{{date}}",Mi(i,t)).replace("{{time}}",es(s,t))}var Co={p:es,P:xo},ts=Co;function is(r){var t=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return t.setUTCFullYear(r.getFullYear()),r.getTime()-t.getTime()}var Io=["D","DD"],Eo=["YY","YYYY"];function rs(r){return Io.indexOf(r)!==-1}function ss(r){return Eo.indexOf(r)!==-1}function gt(r,t,e){if(r==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://git.io/fxCyr"));if(r==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://git.io/fxCyr"));if(r==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://git.io/fxCyr"));if(r==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://git.io/fxCyr"))}var So=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ko=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,To=/^'([^]*?)'?$/,Do=/''/g,Po=/[a-zA-Z]/;function zo(r,t,e){Y(2,arguments);var i=String(t),s=e||{},a=s.locale||Qr,o=a.options&&a.options.firstWeekContainsDate,n=o==null?1:H(o),l=s.firstWeekContainsDate==null?n:H(s.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=a.options&&a.options.weekStartsOn,m=u==null?0:H(u),_=s.weekStartsOn==null?m:H(s.weekStartsOn);if(!(_>=0&&_<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!a.localize)throw new RangeError("locale must contain localize property");if(!a.formatLong)throw new RangeError("locale must contain formatLong property");var g=K(r);if(!jr(g))throw new RangeError("Invalid time value");var T=is(g),f=Xr(g,T),A={firstWeekContainsDate:l,weekStartsOn:_,locale:a,_originalDate:g},b=i.match(ko).map(function(C){var x=C[0];if(x==="p"||x==="P"){var I=ts[x];return I(C,a.formatLong,A)}return C}).join("").match(So).map(function(C){if(C==="''")return"'";var x=C[0];if(x==="'")return Oo(C);var I=wo[x];if(I)return!s.useAdditionalWeekYearTokens&&ss(C)&&gt(C,t,r),!s.useAdditionalDayOfYearTokens&&rs(C)&&gt(C,t,r),I(f,C,a.localize,A);if(x.match(Po))throw new RangeError("Format string contains an unescaped latin alphabet character `"+x+"`");return C}).join("");return b}function Oo(r){return r.match(To)[1].replace(Do,"'")}function Ro(r,t){if(r==null)throw new TypeError("assign requires that input parameter not be null or undefined");t=t||{};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e]);return r}function Ot(r,t,e){Y(2,arguments);var i=e||{},s=i.locale,a=s&&s.options&&s.options.weekStartsOn,o=a==null?0:H(a),n=i.weekStartsOn==null?o:H(i.weekStartsOn);if(!(n>=0&&n<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var l=K(r),u=H(t),m=l.getUTCDay(),_=u%7,g=(_+7)%7,T=(g<n?7:0)+u-m;return l.setUTCDate(l.getUTCDate()+T),l}function Fo(r,t){Y(2,arguments);var e=H(t);e%7===0&&(e=e-7);var i=1,s=K(r),a=s.getUTCDay(),o=e%7,n=(o+7)%7,l=(n<i?7:0)+e-a;return s.setUTCDate(s.getUTCDate()+l),s}function Mo(r,t){Y(2,arguments);var e=K(r),i=H(t),s=Zr(e)-i;return e.setUTCDate(e.getUTCDate()-s*7),e}function Lo(r,t,e){Y(2,arguments);var i=K(r),s=H(t),a=Jr(i,e)-s;return i.setUTCDate(i.getUTCDate()-a*7),i}var $o=36e5,Bo=6e4,Vo=1e3,W={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},le={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function V(r,t,e){var i=t.match(r);if(!i)return null;var s=parseInt(i[0],10);return{value:e?e(s):s,rest:t.slice(i[0].length)}}function de(r,t){var e=t.match(r);if(!e)return null;if(e[0]==="Z")return{value:0,rest:t.slice(1)};var i=e[1]==="+"?1:-1,s=e[2]?parseInt(e[2],10):0,a=e[3]?parseInt(e[3],10):0,o=e[5]?parseInt(e[5],10):0;return{value:i*(s*$o+a*Bo+o*Vo),rest:t.slice(e[0].length)}}function Li(r,t){return V(W.anyDigitsSigned,r,t)}function N(r,t,e){switch(r){case 1:return V(W.singleDigit,t,e);case 2:return V(W.twoDigits,t,e);case 3:return V(W.threeDigits,t,e);case 4:return V(W.fourDigits,t,e);default:return V(new RegExp("^\\d{1,"+r+"}"),t,e)}}function pt(r,t,e){switch(r){case 1:return V(W.singleDigitSigned,t,e);case 2:return V(W.twoDigitsSigned,t,e);case 3:return V(W.threeDigitsSigned,t,e);case 4:return V(W.fourDigitsSigned,t,e);default:return V(new RegExp("^-?\\d{1,"+r+"}"),t,e)}}function Rt(r){switch(r){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function $i(r,t){var e=t>0,i=e?t:1-t,s;if(i<=50)s=r||100;else{var a=i+50,o=Math.floor(a/100)*100,n=r>=a%100;s=r+o-(n?100:0)}return e?s:1-s}var No=[31,28,31,30,31,30,31,31,30,31,30,31],Ho=[31,29,31,30,31,30,31,31,30,31,30,31];function Bi(r){return r%400===0||r%4===0&&r%100!==0}var Wo={G:{priority:140,parse:function(r,t,e,i){switch(t){case"G":case"GG":case"GGG":return e.era(r,{width:"abbreviated"})||e.era(r,{width:"narrow"});case"GGGGG":return e.era(r,{width:"narrow"});case"GGGG":default:return e.era(r,{width:"wide"})||e.era(r,{width:"abbreviated"})||e.era(r,{width:"narrow"})}},set:function(r,t,e,i){return t.era=e,r.setUTCFullYear(e,0,1),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["R","u","t","T"]},y:{priority:130,parse:function(r,t,e,i){var s=function(a){return{year:a,isTwoDigitYear:t==="yy"}};switch(t){case"y":return N(4,r,s);case"yo":return e.ordinalNumber(r,{unit:"year",valueCallback:s});default:return N(t.length,r,s)}},validate:function(r,t,e){return t.isTwoDigitYear||t.year>0},set:function(r,t,e,i){var s=r.getUTCFullYear();if(e.isTwoDigitYear){var a=$i(e.year,s);return r.setUTCFullYear(a,0,1),r.setUTCHours(0,0,0,0),r}var o=!("era"in t)||t.era===1?e.year:1-e.year;return r.setUTCFullYear(o,0,1),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["Y","R","u","w","I","i","e","c","t","T"]},Y:{priority:130,parse:function(r,t,e,i){var s=function(a){return{year:a,isTwoDigitYear:t==="YY"}};switch(t){case"Y":return N(4,r,s);case"Yo":return e.ordinalNumber(r,{unit:"year",valueCallback:s});default:return N(t.length,r,s)}},validate:function(r,t,e){return t.isTwoDigitYear||t.year>0},set:function(r,t,e,i){var s=ei(r,i);if(e.isTwoDigitYear){var a=$i(e.year,s);return r.setUTCFullYear(a,0,i.firstWeekContainsDate),r.setUTCHours(0,0,0,0),Ce(r,i)}var o=!("era"in t)||t.era===1?e.year:1-e.year;return r.setUTCFullYear(o,0,i.firstWeekContainsDate),r.setUTCHours(0,0,0,0),Ce(r,i)},incompatibleTokens:["y","R","u","Q","q","M","L","I","d","D","i","t","T"]},R:{priority:130,parse:function(r,t,e,i){return pt(t==="R"?4:t.length,r)},set:function(r,t,e,i){var s=new Date(0);return s.setUTCFullYear(e,0,4),s.setUTCHours(0,0,0,0),$e(s)},incompatibleTokens:["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]},u:{priority:130,parse:function(r,t,e,i){return pt(t==="u"?4:t.length,r)},set:function(r,t,e,i){return r.setUTCFullYear(e,0,1),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["G","y","Y","R","w","I","i","e","c","t","T"]},Q:{priority:120,parse:function(r,t,e,i){switch(t){case"Q":case"QQ":return N(t.length,r);case"Qo":return e.ordinalNumber(r,{unit:"quarter"});case"QQQ":return e.quarter(r,{width:"abbreviated",context:"formatting"})||e.quarter(r,{width:"narrow",context:"formatting"});case"QQQQQ":return e.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return e.quarter(r,{width:"wide",context:"formatting"})||e.quarter(r,{width:"abbreviated",context:"formatting"})||e.quarter(r,{width:"narrow",context:"formatting"})}},validate:function(r,t,e){return t>=1&&t<=4},set:function(r,t,e,i){return r.setUTCMonth((e-1)*3,1),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]},q:{priority:120,parse:function(r,t,e,i){switch(t){case"q":case"qq":return N(t.length,r);case"qo":return e.ordinalNumber(r,{unit:"quarter"});case"qqq":return e.quarter(r,{width:"abbreviated",context:"standalone"})||e.quarter(r,{width:"narrow",context:"standalone"});case"qqqqq":return e.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return e.quarter(r,{width:"wide",context:"standalone"})||e.quarter(r,{width:"abbreviated",context:"standalone"})||e.quarter(r,{width:"narrow",context:"standalone"})}},validate:function(r,t,e){return t>=1&&t<=4},set:function(r,t,e,i){return r.setUTCMonth((e-1)*3,1),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]},M:{priority:110,parse:function(r,t,e,i){var s=function(a){return a-1};switch(t){case"M":return V(W.month,r,s);case"MM":return N(2,r,s);case"Mo":return e.ordinalNumber(r,{unit:"month",valueCallback:s});case"MMM":return e.month(r,{width:"abbreviated",context:"formatting"})||e.month(r,{width:"narrow",context:"formatting"});case"MMMMM":return e.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return e.month(r,{width:"wide",context:"formatting"})||e.month(r,{width:"abbreviated",context:"formatting"})||e.month(r,{width:"narrow",context:"formatting"})}},validate:function(r,t,e){return t>=0&&t<=11},set:function(r,t,e,i){return r.setUTCMonth(e,1),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]},L:{priority:110,parse:function(r,t,e,i){var s=function(a){return a-1};switch(t){case"L":return V(W.month,r,s);case"LL":return N(2,r,s);case"Lo":return e.ordinalNumber(r,{unit:"month",valueCallback:s});case"LLL":return e.month(r,{width:"abbreviated",context:"standalone"})||e.month(r,{width:"narrow",context:"standalone"});case"LLLLL":return e.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return e.month(r,{width:"wide",context:"standalone"})||e.month(r,{width:"abbreviated",context:"standalone"})||e.month(r,{width:"narrow",context:"standalone"})}},validate:function(r,t,e){return t>=0&&t<=11},set:function(r,t,e,i){return r.setUTCMonth(e,1),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]},w:{priority:100,parse:function(r,t,e,i){switch(t){case"w":return V(W.week,r);case"wo":return e.ordinalNumber(r,{unit:"week"});default:return N(t.length,r)}},validate:function(r,t,e){return t>=1&&t<=53},set:function(r,t,e,i){return Ce(Lo(r,e,i),i)},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","i","t","T"]},I:{priority:100,parse:function(r,t,e,i){switch(t){case"I":return V(W.week,r);case"Io":return e.ordinalNumber(r,{unit:"week"});default:return N(t.length,r)}},validate:function(r,t,e){return t>=1&&t<=53},set:function(r,t,e,i){return $e(Mo(r,e,i),i)},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]},d:{priority:90,subPriority:1,parse:function(r,t,e,i){switch(t){case"d":return V(W.date,r);case"do":return e.ordinalNumber(r,{unit:"date"});default:return N(t.length,r)}},validate:function(r,t,e){var i=r.getUTCFullYear(),s=Bi(i),a=r.getUTCMonth();return s?t>=1&&t<=Ho[a]:t>=1&&t<=No[a]},set:function(r,t,e,i){return r.setUTCDate(e),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["Y","R","q","Q","w","I","D","i","e","c","t","T"]},D:{priority:90,subPriority:1,parse:function(r,t,e,i){switch(t){case"D":case"DD":return V(W.dayOfYear,r);case"Do":return e.ordinalNumber(r,{unit:"date"});default:return N(t.length,r)}},validate:function(r,t,e){var i=r.getUTCFullYear(),s=Bi(i);return s?t>=1&&t<=366:t>=1&&t<=365},set:function(r,t,e,i){return r.setUTCMonth(0,e),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]},E:{priority:90,parse:function(r,t,e,i){switch(t){case"E":case"EE":case"EEE":return e.day(r,{width:"abbreviated",context:"formatting"})||e.day(r,{width:"short",context:"formatting"})||e.day(r,{width:"narrow",context:"formatting"});case"EEEEE":return e.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(r,{width:"short",context:"formatting"})||e.day(r,{width:"narrow",context:"formatting"});case"EEEE":default:return e.day(r,{width:"wide",context:"formatting"})||e.day(r,{width:"abbreviated",context:"formatting"})||e.day(r,{width:"short",context:"formatting"})||e.day(r,{width:"narrow",context:"formatting"})}},validate:function(r,t,e){return t>=0&&t<=6},set:function(r,t,e,i){return r=Ot(r,e,i),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["D","i","e","c","t","T"]},e:{priority:90,parse:function(r,t,e,i){var s=function(a){var o=Math.floor((a-1)/7)*7;return(a+i.weekStartsOn+6)%7+o};switch(t){case"e":case"ee":return N(t.length,r,s);case"eo":return e.ordinalNumber(r,{unit:"day",valueCallback:s});case"eee":return e.day(r,{width:"abbreviated",context:"formatting"})||e.day(r,{width:"short",context:"formatting"})||e.day(r,{width:"narrow",context:"formatting"});case"eeeee":return e.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(r,{width:"short",context:"formatting"})||e.day(r,{width:"narrow",context:"formatting"});case"eeee":default:return e.day(r,{width:"wide",context:"formatting"})||e.day(r,{width:"abbreviated",context:"formatting"})||e.day(r,{width:"short",context:"formatting"})||e.day(r,{width:"narrow",context:"formatting"})}},validate:function(r,t,e){return t>=0&&t<=6},set:function(r,t,e,i){return r=Ot(r,e,i),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]},c:{priority:90,parse:function(r,t,e,i){var s=function(a){var o=Math.floor((a-1)/7)*7;return(a+i.weekStartsOn+6)%7+o};switch(t){case"c":case"cc":return N(t.length,r,s);case"co":return e.ordinalNumber(r,{unit:"day",valueCallback:s});case"ccc":return e.day(r,{width:"abbreviated",context:"standalone"})||e.day(r,{width:"short",context:"standalone"})||e.day(r,{width:"narrow",context:"standalone"});case"ccccc":return e.day(r,{width:"narrow",context:"standalone"});case"cccccc":return e.day(r,{width:"short",context:"standalone"})||e.day(r,{width:"narrow",context:"standalone"});case"cccc":default:return e.day(r,{width:"wide",context:"standalone"})||e.day(r,{width:"abbreviated",context:"standalone"})||e.day(r,{width:"short",context:"standalone"})||e.day(r,{width:"narrow",context:"standalone"})}},validate:function(r,t,e){return t>=0&&t<=6},set:function(r,t,e,i){return r=Ot(r,e,i),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]},i:{priority:90,parse:function(r,t,e,i){var s=function(a){return a===0?7:a};switch(t){case"i":case"ii":return N(t.length,r);case"io":return e.ordinalNumber(r,{unit:"day"});case"iii":return e.day(r,{width:"abbreviated",context:"formatting",valueCallback:s})||e.day(r,{width:"short",context:"formatting",valueCallback:s})||e.day(r,{width:"narrow",context:"formatting",valueCallback:s});case"iiiii":return e.day(r,{width:"narrow",context:"formatting",valueCallback:s});case"iiiiii":return e.day(r,{width:"short",context:"formatting",valueCallback:s})||e.day(r,{width:"narrow",context:"formatting",valueCallback:s});case"iiii":default:return e.day(r,{width:"wide",context:"formatting",valueCallback:s})||e.day(r,{width:"abbreviated",context:"formatting",valueCallback:s})||e.day(r,{width:"short",context:"formatting",valueCallback:s})||e.day(r,{width:"narrow",context:"formatting",valueCallback:s})}},validate:function(r,t,e){return t>=1&&t<=7},set:function(r,t,e,i){return r=Fo(r,e,i),r.setUTCHours(0,0,0,0),r},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]},a:{priority:80,parse:function(r,t,e,i){switch(t){case"a":case"aa":case"aaa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"})||e.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaaa":return e.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return e.dayPeriod(r,{width:"wide",context:"formatting"})||e.dayPeriod(r,{width:"abbreviated",context:"formatting"})||e.dayPeriod(r,{width:"narrow",context:"formatting"})}},set:function(r,t,e,i){return r.setUTCHours(Rt(e),0,0,0),r},incompatibleTokens:["b","B","H","k","t","T"]},b:{priority:80,parse:function(r,t,e,i){switch(t){case"b":case"bb":case"bbb":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"})||e.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbbb":return e.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return e.dayPeriod(r,{width:"wide",context:"formatting"})||e.dayPeriod(r,{width:"abbreviated",context:"formatting"})||e.dayPeriod(r,{width:"narrow",context:"formatting"})}},set:function(r,t,e,i){return r.setUTCHours(Rt(e),0,0,0),r},incompatibleTokens:["a","B","H","k","t","T"]},B:{priority:80,parse:function(r,t,e,i){switch(t){case"B":case"BB":case"BBB":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"})||e.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBBB":return e.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return e.dayPeriod(r,{width:"wide",context:"formatting"})||e.dayPeriod(r,{width:"abbreviated",context:"formatting"})||e.dayPeriod(r,{width:"narrow",context:"formatting"})}},set:function(r,t,e,i){return r.setUTCHours(Rt(e),0,0,0),r},incompatibleTokens:["a","b","t","T"]},h:{priority:70,parse:function(r,t,e,i){switch(t){case"h":return V(W.hour12h,r);case"ho":return e.ordinalNumber(r,{unit:"hour"});default:return N(t.length,r)}},validate:function(r,t,e){return t>=1&&t<=12},set:function(r,t,e,i){var s=r.getUTCHours()>=12;return s&&e<12?r.setUTCHours(e+12,0,0,0):!s&&e===12?r.setUTCHours(0,0,0,0):r.setUTCHours(e,0,0,0),r},incompatibleTokens:["H","K","k","t","T"]},H:{priority:70,parse:function(r,t,e,i){switch(t){case"H":return V(W.hour23h,r);case"Ho":return e.ordinalNumber(r,{unit:"hour"});default:return N(t.length,r)}},validate:function(r,t,e){return t>=0&&t<=23},set:function(r,t,e,i){return r.setUTCHours(e,0,0,0),r},incompatibleTokens:["a","b","h","K","k","t","T"]},K:{priority:70,parse:function(r,t,e,i){switch(t){case"K":return V(W.hour11h,r);case"Ko":return e.ordinalNumber(r,{unit:"hour"});default:return N(t.length,r)}},validate:function(r,t,e){return t>=0&&t<=11},set:function(r,t,e,i){var s=r.getUTCHours()>=12;return s&&e<12?r.setUTCHours(e+12,0,0,0):r.setUTCHours(e,0,0,0),r},incompatibleTokens:["h","H","k","t","T"]},k:{priority:70,parse:function(r,t,e,i){switch(t){case"k":return V(W.hour24h,r);case"ko":return e.ordinalNumber(r,{unit:"hour"});default:return N(t.length,r)}},validate:function(r,t,e){return t>=1&&t<=24},set:function(r,t,e,i){var s=e<=24?e%24:e;return r.setUTCHours(s,0,0,0),r},incompatibleTokens:["a","b","h","H","K","t","T"]},m:{priority:60,parse:function(r,t,e,i){switch(t){case"m":return V(W.minute,r);case"mo":return e.ordinalNumber(r,{unit:"minute"});default:return N(t.length,r)}},validate:function(r,t,e){return t>=0&&t<=59},set:function(r,t,e,i){return r.setUTCMinutes(e,0,0),r},incompatibleTokens:["t","T"]},s:{priority:50,parse:function(r,t,e,i){switch(t){case"s":return V(W.second,r);case"so":return e.ordinalNumber(r,{unit:"second"});default:return N(t.length,r)}},validate:function(r,t,e){return t>=0&&t<=59},set:function(r,t,e,i){return r.setUTCSeconds(e,0),r},incompatibleTokens:["t","T"]},S:{priority:30,parse:function(r,t,e,i){var s=function(a){return Math.floor(a*Math.pow(10,-t.length+3))};return N(t.length,r,s)},set:function(r,t,e,i){return r.setUTCMilliseconds(e),r},incompatibleTokens:["t","T"]},X:{priority:10,parse:function(r,t,e,i){switch(t){case"X":return de(le.basicOptionalMinutes,r);case"XX":return de(le.basic,r);case"XXXX":return de(le.basicOptionalSeconds,r);case"XXXXX":return de(le.extendedOptionalSeconds,r);case"XXX":default:return de(le.extended,r)}},set:function(r,t,e,i){return t.timestampIsSet?r:new Date(r.getTime()-e)},incompatibleTokens:["t","T","x"]},x:{priority:10,parse:function(r,t,e,i){switch(t){case"x":return de(le.basicOptionalMinutes,r);case"xx":return de(le.basic,r);case"xxxx":return de(le.basicOptionalSeconds,r);case"xxxxx":return de(le.extendedOptionalSeconds,r);case"xxx":default:return de(le.extended,r)}},set:function(r,t,e,i){return t.timestampIsSet?r:new Date(r.getTime()-e)},incompatibleTokens:["t","T","X"]},t:{priority:40,parse:function(r,t,e,i){return Li(r)},set:function(r,t,e,i){return[new Date(e*1e3),{timestampIsSet:!0}]},incompatibleTokens:"*"},T:{priority:20,parse:function(r,t,e,i){return Li(r)},set:function(r,t,e,i){return[new Date(e),{timestampIsSet:!0}]},incompatibleTokens:"*"}},qo=Wo,Yo=10,Uo=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Go=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,jo=/^'([^]*?)'?$/,Qo=/''/g,Xo=/\S/,Ko=/[a-zA-Z]/;function Zo(r,t,e,i){Y(3,arguments);var s=String(r),a=String(t),o=i||{},n=o.locale||Qr;if(!n.match)throw new RangeError("locale must contain match property");var l=n.options&&n.options.firstWeekContainsDate,u=l==null?1:H(l),m=o.firstWeekContainsDate==null?u:H(o.firstWeekContainsDate);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var _=n.options&&n.options.weekStartsOn,g=_==null?0:H(_),T=o.weekStartsOn==null?g:H(o.weekStartsOn);if(!(T>=0&&T<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(a==="")return s===""?K(e):new Date(NaN);var f={firstWeekContainsDate:m,weekStartsOn:T,locale:n},A=[{priority:Yo,subPriority:-1,set:Jo,index:0}],b,C=a.match(Go).map(function(L){var d=L[0];if(d==="p"||d==="P"){var h=ts[d];return h(L,n.formatLong,f)}return L}).join("").match(Uo),x=[];for(b=0;b<C.length;b++){var I=C[b];!o.useAdditionalWeekYearTokens&&ss(I)&&gt(I,a,r),!o.useAdditionalDayOfYearTokens&&rs(I)&&gt(I,a,r);var M=I[0],R=qo[M];if(R){var Q=R.incompatibleTokens;if(Array.isArray(Q)){for(var X=void 0,re=0;re<x.length;re++){var ge=x[re].token;if(Q.indexOf(ge)!==-1||ge===M){X=x[re];break}}if(X)throw new RangeError("The format string mustn't contain `".concat(X.fullToken,"` and `").concat(I,"` at the same time"))}else if(R.incompatibleTokens==="*"&&x.length)throw new RangeError("The format string mustn't contain `".concat(I,"` and any other token at the same time"));x.push({token:M,fullToken:I});var pe=R.parse(s,I,n.match,f);if(!pe)return new Date(NaN);A.push({priority:R.priority,subPriority:R.subPriority||0,set:R.set,validate:R.validate,value:pe.value,index:A.length}),s=pe.rest}else{if(M.match(Ko))throw new RangeError("Format string contains an unescaped latin alphabet character `"+M+"`");if(I==="''"?I="'":M==="'"&&(I=en(I)),s.indexOf(I)===0)s=s.slice(I.length);else return new Date(NaN)}}if(s.length>0&&Xo.test(s))return new Date(NaN);var ne=A.map(function(L){return L.priority}).sort(function(L,d){return d-L}).filter(function(L,d,h){return h.indexOf(L)===d}).map(function(L){return A.filter(function(d){return d.priority===L}).sort(function(d,h){return h.subPriority-d.subPriority})}).map(function(L){return L[0]}),ae=K(e);if(isNaN(ae))return new Date(NaN);var P=Xr(ae,is(ae)),q={};for(b=0;b<ne.length;b++){var $=ne[b];if($.validate&&!$.validate(P,$.value,f))return new Date(NaN);var Z=$.set(P,q,$.value,f);Z[0]?(P=Z[0],Ro(q,Z[1])):P=Z}return P}function Jo(r,t){if(t.timestampIsSet)return r;var e=new Date(0);return e.setFullYear(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()),e.setHours(r.getUTCHours(),r.getUTCMinutes(),r.getUTCSeconds(),r.getUTCMilliseconds()),e}function en(r){return r.match(jo)[1].replace(Qo,"'")}(function(){const r=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Date Picker")};class t{constructor(i){this.initial=i,this.index=0,this.value=0}static compare(i,s){return i.index<s.index?-1:i.index>s.index?1:0}}window.Vaadin.Flow.datepickerConnector={initLazy:e=>r(function(i){if(i.$connector)return;i.$connector={},i.$connector.dayPart=new t("22"),i.$connector.monthPart=new t("11"),i.$connector.yearPart=new t("1987"),i.$connector.parts=[i.$connector.dayPart,i.$connector.monthPart,i.$connector.yearPart],i.addEventListener("blur",r(n=>{!n.target.value&&n.target.invalid&&console.warn("Invalid value in the DatePicker.")}));const s=r(function(n){return n.replace(/[^\x00-\x7F]/g,"")});r(function(){let n="";try{n=i._inputValue}catch{n=i.value||""}return n});const a=r(function(n){try{new Date().toLocaleDateString(n)}catch{n="en-US",console.warn("The locale is not supported, using default locale setting(en-US).")}let l=new Date(Date.UTC(i.$connector.yearPart.initial,i.$connector.monthPart.initial-1,i.$connector.dayPart.initial)),u=s(l.toLocaleDateString(n,{timeZone:"UTC"}));i.$connector.parts.forEach(function(g){g.index=u.indexOf(g.initial)}),i.$connector.parts.sort(t.compare),i.$connector.regex=u.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&").replace(i.$connector.dayPart.initial,"(\\d{1,2})").replace(i.$connector.monthPart.initial,"(\\d{1,2})").replace(i.$connector.yearPart.initial,"(\\d{1,4})");function m(g){let T=i._parseDate(`${g.year}-${g.month+1}-${g.day}`);return T.setHours(12),s(T.toLocaleDateString(n))}function _(g){if(g=s(g),g.length==0)return;let T=g.match(i.$connector.regex);if(T&&T.length==4){for(let f=1;f<4;f++)i.$connector.parts[f-1].value=parseInt(T[f]);return{day:i.$connector.dayPart.value,month:i.$connector.monthPart.value-1,year:i.$connector.yearPart.value}}else return!1}return{formatDate:m,parseDate:_}}),o=r(function(n){if(!n||n.length===0)throw new Error("Array of custom date formats is null or empty");function l(m){const _=n[0],g=i._parseDate(`${m.year}-${m.month+1}-${m.day}`);return zo(g,_)}function u(m){for(let _ of n){const g=Zo(m,_,new Date);if(jr(g))return{day:g.getDate(),month:g.getMonth(),year:g.getFullYear()}}return!1}return{formatDate:l,parseDate:u}});i.$connector.updateI18n=r(function(n,l){const m=l&&l.dateFormats&&l.dateFormats.length>0?o(l.dateFormats):n?a(n):null;i.i18n=Object.assign({},i.i18n,l,m)})})(e)}})();window.Vaadin=window.Vaadin||{};window.Vaadin.Flow=window.Vaadin.Flow||{};window.Vaadin.Flow.dndConnector={__ondragenterListener:function(r){const t=r.currentTarget.__dropEffect;r.currentTarget.hasAttribute("disabled")||(t&&(r.dataTransfer.dropEffect=t),t&&t!=="none"&&(r.currentTarget.classList.contains("v-drag-over-target")?r.currentTarget["__skip-leave"]=!0:r.currentTarget.classList.add("v-drag-over-target"),r.preventDefault(),r.stopPropagation()))},__ondragoverListener:function(r){if(!r.currentTarget.hasAttribute("disabled")){const t=r.currentTarget.__dropEffect;t&&(r.dataTransfer.dropEffect=t),r.preventDefault(),r.stopPropagation()}},__ondragleaveListener:function(r){r.currentTarget["__skip-leave"]?r.currentTarget["__skip-leave"]=!1:r.currentTarget.classList.remove("v-drag-over-target"),r.stopPropagation()},__ondropListener:function(r){const t=r.currentTarget.__dropEffect;t&&(r.dataTransfer.dropEffect=t),r.currentTarget.classList.remove("v-drag-over-target"),r.preventDefault(),r.stopPropagation()},updateDropTarget:function(r){r.__active?(r.addEventListener("dragenter",this.__ondragenterListener,!1),r.addEventListener("dragover",this.__ondragoverListener,!1),r.addEventListener("dragleave",this.__ondragleaveListener,!1),r.addEventListener("drop",this.__ondropListener,!1)):(r.removeEventListener("dragenter",this.__ondragenterListener,!1),r.removeEventListener("dragover",this.__ondragoverListener,!1),r.removeEventListener("dragleave",this.__ondragleaveListener,!1),r.removeEventListener("drop",this.__ondropListener,!1),r.classList.remove("v-drag-over-target"))},__dragstartListener:function(r){r.stopPropagation(),r.dataTransfer.setData("text/plain",""),r.currentTarget.hasAttribute("disabled")?r.preventDefault():(r.currentTarget.__effectAllowed&&(r.dataTransfer.effectAllowed=r.currentTarget.__effectAllowed),r.currentTarget.classList.add("v-dragged"))},__dragendListener:function(r){r.currentTarget.classList.remove("v-dragged")},updateDragSource:function(r){r.draggable?(r.addEventListener("dragstart",this.__dragstartListener,!1),r.addEventListener("dragend",this.__dragendListener,!1)):(r.removeEventListener("dragstart",this.__dragstartListener,!1),r.removeEventListener("dragend",this.__dragendListener,!1))}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const as=r=>class extends r{static get properties(){return{resizable:{type:Boolean,value:function(){if(this.localName==="vaadin-grid-column-group")return;const e=this.parentNode;return e&&e.localName==="vaadin-grid-column-group"&&e.resizable||!1}},frozen:{type:Boolean,value:!1},hidden:{type:Boolean,value:!1},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:Function,_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)"},footerRenderer:Function,_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)"},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_onRendererOrBindingChanged(_renderer, _cells, _cells.*, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{!this._grid||this._allCells.forEach(e=>{e._content.parentNode||this._grid.appendChild(e._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._grid||this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})}),this._gridValue=void 0}ready(){super.ready(),ke(this)}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(e=>e)}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(i=>i.style.flexGrow=e)}_orderChanged(e){this._allCells.forEach(i=>i.style.order=e)}_widthChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(i=>i.style.width=e)}_frozenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach(i=>i.toggleAttribute("frozen",e)),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach(i=>i.toggleAttribute("last-frozen",e)),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/g,"-$1").toLowerCase().replace(/-/g," ").replace(/^./,i=>i.toUpperCase())}_reorderStatusChanged(e){this._allCells.forEach(i=>i.setAttribute("reorder-status",e))}_resizableChanged(e,i){e===void 0||i===void 0||i&&[i].concat(this._emptyCells).forEach(s=>{if(s){const a=s.querySelector('[part~="resize-handle"]');if(a&&s.removeChild(a),e){const o=document.createElement("div");o.setAttribute("part","resize-handle"),s.appendChild(o)}}})}_textAlignChanged(e){if(e===void 0)return;if(["start","end","center"].indexOf(e)===-1){console.warn('textAlign can only be set as "start", "end" or "center"');return}let i;getComputedStyle(this._grid).direction==="ltr"?e==="start"?i="left":e==="end"&&(i="right"):e==="start"?i="right":e==="end"&&(i="left"),this._allCells.forEach(s=>{s._content.style.textAlign=e,getComputedStyle(s._content).textAlign!==e&&(s._content.style.textAlign=i)})}_hiddenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(e===!0&&this._allCells.forEach(i=>{i._content.parentNode&&i._content.parentNode.removeChild(i._content)}),this._grid._debouncerHiddenChanged=ee.debounce(this._grid._debouncerHiddenChanged,xe,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._updateLastFrozen&&this._grid._updateLastFrozen(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}_runRenderer(e,i,s){const a=[i._content,this];s&&s.item&&a.push(s),e.apply(this,a)}__renderCellsContent(e,i){this.hidden||!this._grid||i.forEach(s=>{if(!s.parentElement)return;const a=this._grid.__getRowModel(s.parentElement);!e||(s._renderer!==e&&this._clearCellContent(s),s._renderer=e,(a.item||e===this._headerRenderer||e===this._footerRenderer)&&this._runRenderer(e,s,a))})}_clearCellContent(e){e._content.innerHTML="",delete e._content._$litPart$}_renderHeaderCellContent(e,i){!i||!e||(this.__renderCellsContent(e,[i]),this._grid&&this._grid.__updateHeaderFooterRowVisibility(i.parentElement))}_onHeaderRendererOrBindingChanged(e,i,...s){this._renderHeaderCellContent(e,i)}_renderBodyCellsContent(e,i){!i||!e||this.__renderCellsContent(e,i)}_onRendererOrBindingChanged(e,i,...s){this._renderBodyCellsContent(e,i)}_renderFooterCellContent(e,i){!i||!e||(this.__renderCellsContent(e,[i]),this._grid&&this._grid.__updateHeaderFooterRowVisibility(i.parentElement))}_onFooterRendererOrBindingChanged(e,i){this._renderFooterCellContent(e,i)}__setTextContent(e,i){e.textContent!==i&&(e.textContent=i)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){!this.path||this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(e,i,{item:s}){!this.path||this.__setTextContent(e,this.get(this.path,s))}_defaultFooterRenderer(){}_computeHeaderRenderer(e,i){return e||(i!=null?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(e){return e||this._defaultRenderer}_computeFooterRenderer(e){return e||this._defaultFooterRenderer}};class Wt extends as(nt(S)){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)"},path:{type:String},autoWidth:{type:Boolean,value:!1},_cells:Array}}}customElements.define(Wt.is,Wt);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-grid",w`
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([all-rows-visible]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([all-rows-visible]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    :host([all-rows-visible]) #items {
      min-height: 1px;
    }

    #table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      outline: none;
      /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
      z-index: 0;
    }

    #header,
    #footer {
      transform: translateX(var(--_grid-horizontal-scroll-position));
      display: block;
      position: -webkit-sticky;
      position: sticky;
      left: 0;
      overflow: visible;
      width: 100%;
      z-index: 1;
    }

    #header {
      top: 0;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      bottom: 0;
    }

    #items {
      transform: translateX(var(--_grid-horizontal-scroll-position));
      flex-grow: 1;
      flex-shrink: 0;
      display: block;
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      left: 0;
      overflow: visible;
    }

    [part~='row'] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~='row'] {
      position: absolute;
    }

    #items [part~='row']:empty {
      height: 100%;
    }

    [part~='cell']:not([part~='details-cell']) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~='details-cell'] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen] {
      z-index: 2;
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      will-change: transform;
    }

    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    /* Reordering styles */
    :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~='resize-handle'],
    #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~='reorder-ghost'] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Resizing styles */
    [part~='resize-handle'] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~='resize-handle']::before {
      position: absolute;
      content: '';
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~='resize-handle']::before,
    [last-frozen] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    #sizer {
      display: flex;
      position: absolute;
      visibility: hidden;
    }

    #sizer [part~='details-cell'] {
      display: none !important;
    }

    #sizer [part~='cell'][hidden] {
      display: none !important;
    }

    #sizer [part~='cell'] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    #sizer [part~='cell']::before {
      content: '-';
    }

    #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* RTL specific styles */

    :host([dir='rtl']) *:is(#items, #header, #footer, [frozen]) {
      transform: none;
    }

    :host([dir='rtl']) #items,
    :host([dir='rtl']) #header,
    :host([dir='rtl']) #footer {
      left: auto;
    }

    :host([dir='rtl']) [part~='reorder-ghost'] {
      left: auto;
      right: 0;
    }

    :host([dir='rtl']) [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [part~='resize-handle']::before {
      transform: translateX(50%);
    }

    :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
    :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }
  `,{moduleId:"vaadin-grid-styles"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const tn=r=>class extends r{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(e){return e.filter(i=>i.some(s=>s.headerRenderer||s.path||s.header)).length}_a11yGetFooterRowCount(e){return e.filter(i=>i.some(s=>s.headerRenderer)).length}_a11yUpdateGridSize(e,i){if(e===void 0||i===void 0)return;const s=i[i.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(i)+this._a11yGetFooterRowCount(i)),this.$.table.setAttribute("aria-colcount",s&&s.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){Array.from(this.$.header.children).forEach((e,i)=>e.setAttribute("aria-rowindex",i+1))}_a11yUpdateFooterRows(){Array.from(this.$.footer.children).forEach((e,i)=>e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+i+1))}_a11yUpdateRowRowindex(e,i){e.setAttribute("aria-rowindex",i+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,i){e.setAttribute("aria-selected",Boolean(i)),Array.from(e.children).forEach(s=>s.setAttribute("aria-selected",Boolean(i)))}_a11yUpdateRowExpanded(e){this.__isRowExpandable(e)?e.setAttribute("aria-expanded","false"):this.__isRowCollapsible(e)?e.setAttribute("aria-expanded","true"):e.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(e,i){i>0||this.__isRowCollapsible(e)||this.__isRowExpandable(e)?e.setAttribute("aria-level",i+1):e.removeAttribute("aria-level")}_a11ySetRowDetailsCell(e,i){Array.from(e.children).forEach(s=>{s!==i&&s.setAttribute("aria-controls",i.id)})}_a11yUpdateCellColspan(e,i){e.setAttribute("aria-colspan",Number(i))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(e=>{let i=e.parentNode;for(;i&&i.localName!=="vaadin-grid-cell-content";)i=i.parentNode;i&&i.assignedSlot&&i.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")})}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const rn=r=>class extends r{static get properties(){return{activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(e){const i=e.detail.model,s=i?i.item:null;s&&(this.activeItem=this._itemsEqual(this.activeItem,s)?null:s)}_onClick(e){if(e.defaultPrevented)return;const i=e.composedPath(),s=i[i.indexOf(this.$.table)-3];if(!s||s.getAttribute("part").indexOf("details-cell")>-1)return;const a=s._content,o=this.getRootNode().activeElement;!a.contains(o)&&!this._isFocusable(e.target)&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(s.parentElement)}}))}_isFocusable(e){return ti(e)}},ti=r=>{if(!r.parentNode)return!1;const e=Array.from(r.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]")).filter(i=>i.getAttribute("part")!=="cell body-cell").indexOf(r)!==-1;return!r.disabled&&e};function Oe(r,t){return r.split(".").reduce((e,i)=>e[i],t)}function Vi(r,t,e){if(e.length===0)return!1;let i=!0;for(const s in r){const a=r[s].path;if(!a||a.indexOf(".")===-1)continue;const o=a.replace(/\.[^.]*$/,"");Oe(o,e[0])===void 0&&(console.warn(`Path "${a}" used for ${t} does not exist in all of the items, ${t} is disabled.`),i=!1)}return i}function sn(r,t){return r.sort((e,i)=>t.map(s=>s.direction==="asc"?Ni(Oe(s.path,e),Oe(s.path,i)):s.direction==="desc"?Ni(Oe(s.path,i),Oe(s.path,e)):0).reduce((s,a)=>s!==0?s:a,0))}function vt(r){return[void 0,null].indexOf(r)>=0?"":isNaN(r)?r.toString():r}function Ni(r,t){return r=vt(r),t=vt(t),r<t?-1:r>t?1:0}function an(r,t){return r.filter(e=>t.every(i=>{const s=vt(Oe(i.path,e)),a=vt(i.value).toString().toLowerCase();return s.toString().toLowerCase().includes(a)}))}const on=r=>(t,e)=>{let i=r?[...r]:[];t.filters&&Vi(t.filters,"filtering",i)&&(i=an(i,t.filters)),Array.isArray(t.sortOrders)&&t.sortOrders.length&&Vi(t.sortOrders,"sorting",i)&&(i=sn(i,t.sortOrders));const s=Math.min(i.length,t.pageSize),a=t.page*s,o=a+s,n=i.slice(a,o);e(n,i.length)};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nn=r=>class extends r{static get properties(){return{items:Array}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, items.*, _filters, _sorters)"]}__setArrayDataProvider(e){const i=on(this.items);i.__items=e,this.setProperties({_arrayDataProvider:i,size:e.length,dataProvider:i})}__dataProviderOrItemsChanged(e,i,s){!s||(this._arrayDataProvider?e!==this._arrayDataProvider?this.setProperties({_arrayDataProvider:void 0,items:void 0}):i?this._arrayDataProvider.__items===i?(this.clearCache(),this.size=this._effectiveSize):this.__setArrayDataProvider(i):(this.setProperties({_arrayDataProvider:void 0,dataProvider:void 0,size:0}),this.clearCache()):i&&this.__setArrayDataProvider(i))}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function os(r,t,e){let i=1;r.forEach(s=>{i%10===0&&(i+=1),s._order=e+i*t,i+=1})}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ln=r=>class extends r{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree, _columnTree.*)"]}ready(){super.ready(),te(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&e.preventDefault()}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if(e.detail.state==="start"){const i=e.composedPath(),s=i[i.indexOf(this.$.header)-2];if(!s||!s._content||s._content.contains(this.getRootNode().activeElement)||this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else e.detail.state==="track"?this._onTrack(e):e.detail.state==="end"&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;const i=e.composedPath&&e.composedPath();if(i&&i.filter(a=>a.hasAttribute&&a.hasAttribute("draggable"))[0])return;const s=this._cellFromPoint(e.detail.x,e.detail.y);if(!(!s||s.getAttribute("part").indexOf("header-cell")===-1)){for(this.toggleAttribute("reordering",!0),this._draggedColumn=s._column;this._draggedColumn.parentElement.childElementCount===1;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(s),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;const i=this._cellFromPoint(e.detail.x,e.detail.y);if(!i)return;const s=this._getTargetColumn(i,this._draggedColumn);this._isSwapAllowed(this._draggedColumn,s)&&this._isSwappableByPosition(s,e.detail.x)&&this._swapColumnOrders(this._draggedColumn,s),this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){!this._draggedColumn||(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(){return this._columnTree.slice(0).pop().filter(e=>!e.hidden).sort((e,i)=>e._order-i._order)}_cellFromPoint(e,i){e=e||0,i=i||0,this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const s=this.shadowRoot.elementFromPoint(e,i);if(this.$.scroller.toggleAttribute("no-content-pointer-events",!1),s&&s._column)return s}_updateGhostPosition(e,i){const s=this._reorderGhost.getBoundingClientRect(),a=e-s.width/2,o=i-s.height/2,n=parseInt(this._reorderGhost._left||0),l=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=n-(s.left-a),this._reorderGhost._top=l-(s.top-o),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(e){const i=this._reorderGhost;i.textContent=e._content.innerText;const s=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(a=>i.style[a]=s[a]),i}_updateOrders(e,i){e===void 0||i===void 0||(e[0].forEach(s=>s._order=0),os(e[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(e,i){Array.from(e.parentNode.children).filter(s=>/column/.test(s.localName)&&this._isSwapAllowed(s,e)).forEach(s=>s._reorderStatus=i)}_autoScroller(){if(this._lastDragClientX){const e=this._lastDragClientX-this.getBoundingClientRect().right+50,i=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:i>0&&(this.$.table.scrollLeft-=i/10)}this._draggedColumn&&setTimeout(()=>this._autoScroller(),10)}_isSwapAllowed(e,i){if(e&&i){const s=e!==i,a=e.parentElement===i.parentElement,o=e.frozen===i.frozen;return s&&a&&o}}_isSwappableByPosition(e,i){const s=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).filter(n=>e.contains(n._column))[0],a=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),o=s.getBoundingClientRect();return o.left>a.left?i>o.right-a.width:i<o.left+a.width}_swapColumnOrders(e,i){const s=e._order;e._order=i._order,i._order=s,this._updateLastFrozen(),this._updateFirstAndLastColumn()}_getTargetColumn(e,i){if(e&&i){let s=e._column;for(;s.parentElement!==i.parentElement&&s!==this;)s=s.parentElement;return s.parentElement===i.parentElement?s:e._column}}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dn=r=>class extends r{ready(){super.ready();const e=this.$.scroller;te(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",i=>e.hasAttribute("column-resizing")&&i.preventDefault()),e.addEventListener("contextmenu",i=>i.target.getAttribute("part")=="resize-handle"&&i.preventDefault()),e.addEventListener("mousedown",i=>i.target.getAttribute("part")==="resize-handle"&&i.preventDefault())}_onHeaderTrack(e){const i=e.target;if(i.getAttribute("part")==="resize-handle"){let a=i.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);a.localName==="vaadin-grid-column-group";)a=Array.prototype.slice.call(a._childColumns,0).sort(function(l,u){return l._order-u._order}).filter(function(l){return!l.hidden}).pop();const o=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),n=o.filter(l=>l._column===a)[0];if(n.offsetWidth){const l=getComputedStyle(n._content),u=10+parseInt(l.paddingLeft)+parseInt(l.paddingRight)+parseInt(l.borderLeftWidth)+parseInt(l.borderRightWidth)+parseInt(l.marginLeft)+parseInt(l.marginRight),m=n.offsetWidth+(this.__isRTL?n.getBoundingClientRect().left-e.detail.x:e.detail.x-n.getBoundingClientRect().right);a.width=Math.max(u,m)+"px",a.flexGrow=0}o.sort(function(l,u){return l._column._order-u._column._order}).forEach(function(l,u,m){u<m.indexOf(n)&&(l._column.width=l.offsetWidth+"px",l._column.flexGrow=0)}),e.detail.state==="end"&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:a}}))),this._resizeHandler()}}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const se=class ns{constructor(t,e,i){this.grid=t,this.parentCache=e,this.parentItem=i,this.itemCaches={},this.items={},this.effectiveSize=0,this.size=0,this.pendingRequests={}}isLoading(){return Boolean(Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(t=>this.itemCaches[t].isLoading())[0])}getItemForIndex(t){const{cache:e,scaledIndex:i}=this.getCacheAndIndex(t);return e.items[i]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce((t,e)=>{const i=this.itemCaches[e];return i.updateSize(),t+i.effectiveSize},0):0}ensureSubCacheForScaledIndex(t){if(!this.itemCaches[t]){const e=new ns(this.grid,this,this.items[t]);this.itemCaches[t]=e,this.grid._loadPage(0,e)}}getCacheAndIndex(t){let e=t;const i=Object.keys(this.itemCaches);for(let s=0;s<i.length;s++){const a=Number(i[s]),o=this.itemCaches[a];if(e<=a)return{cache:this,scaledIndex:e};if(e<=a+o.effectiveSize)return o.getCacheAndIndex(e-a-1);e-=o.effectiveSize}return{cache:this,scaledIndex:e}}},hn=r=>class extends r{static get properties(){return{size:{type:Number,notify:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value:function(){return new se(this)}},_hasData:{type:Boolean,value:!1},itemHasChildrenPath:{type:String,value:"children"},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]},__expandedKeys:{type:Object,value:()=>new Set}}}static get observers(){return["_sizeChanged(size)","_itemIdPathChanged(itemIdPath)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(e){const i=e-this._cache.size;this._cache.size+=i,this._cache.effectiveSize+=i,this._effectiveSize=this._cache.effectiveSize}_getItem(e,i){if(e>=this._effectiveSize)return;i.index=e;const{cache:s,scaledIndex:a}=this._cache.getCacheAndIndex(e),o=s.items[a];o?(i.toggleAttribute("loading",!1),this._updateItem(i,o),this._isExpanded(o)&&s.ensureSubCacheForScaledIndex(a)):(i.toggleAttribute("loading",!0),this._loadPage(this._getPageForIndex(a),s))}getItemId(e){return this.itemIdPath?this.get(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(){this.__cacheExpandedKeys(),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this.__updateVisibleRows()}_itemIdPathChanged(){this.__cacheExpandedKeys()}__cacheExpandedKeys(){this.expandedItems&&(this.__expandedKeys=new Set,this.expandedItems.forEach(e=>{this.__expandedKeys.add(this.getItemId(e))}))}expandItem(e){this._isExpanded(e)||(this.expandedItems=[...this.expandedItems,e])}collapseItem(e){this._isExpanded(e)&&(this.expandedItems=this.expandedItems.filter(i=>!this._itemsEqual(i,e)))}_getIndexLevel(e){let{cache:i}=this._cache.getCacheAndIndex(e),s=0;for(;i.parentCache;)i=i.parentCache,s+=1;return s}_loadPage(e,i){if(!i.pendingRequests[e]&&this.dataProvider){this._setLoading(!0),i.pendingRequests[e]=!0;const s={page:e,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:i.parentItem};this.dataProvider(s,(a,o)=>{o!==void 0?i.size=o:s.parentItem&&(i.size=a.length);const n=Array.from(this.$.items.children).map(l=>l._item);a.forEach((l,u)=>{const m=e*this.pageSize+u;i.items[m]=l,this._isExpanded(l)&&n.indexOf(l)>-1&&i.ensureSubCacheForScaledIndex(m)}),this._hasData=!0,delete i.pendingRequests[e],this._debouncerApplyCachedData=ee.debounce(this._debouncerApplyCachedData,ce.after(0),()=>{this._setLoading(!1),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,Array.from(this.$.items.children).filter(l=>!l.hidden).forEach(l=>{this._cache.getItemForIndex(l.index)&&this._getItem(l.index,l)}),this.__scrollToPendingIndex()}),this._cache.isLoading()||this._debouncerApplyCachedData.flush(),this.__itemsReceived()})}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){this._cache=new se(this),this._cache.size=this.size||0,this._cache.updateSize(),this._hasData=!1,this.__updateVisibleRows(),this._effectiveSize||this._loadPage(0,this._cache)}_pageSizeChanged(e,i){i!==void 0&&e!==i&&this.clearCache()}_checkSize(){this.size===void 0&&this._effectiveSize===0&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows. Set the total number of items to the `size` property, or provide the total number of items in the second argument of the `dataProvider`\u2019s `callback` call.")}_dataProviderChanged(e,i){i!==void 0&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=ee.debounce(this._debouncerCheckSize,ce.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._loadPage(0,this._cache)}_itemsEqual(e,i){return this.getItemId(e)===this.getItemId(i)}_getItemIndexInArray(e,i){let s=-1;return i.forEach((a,o)=>{this._itemsEqual(a,e)&&(s=o)}),s}scrollToIndex(e){super.scrollToIndex(e),!isNaN(e)&&(this._cache.isLoading()||!this.clientHeight)&&(this.__pendingScrollToIndex=e)}__scrollToPendingIndex(){if(this.__pendingScrollToIndex&&this.$.items.children.length){const e=this.__pendingScrollToIndex;delete this.__pendingScrollToIndex,this.scrollToIndex(e)}}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const je={BETWEEN:"between",ON_TOP:"on-top",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},fe={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},cn=r=>class extends r{static get properties(){return{dropMode:String,rowsDraggable:Boolean,dragFilter:Function,dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())})}_onDragStart(e){if(this.rowsDraggable){let i=e.target;if(i.localName==="vaadin-grid-cell-content"&&(i=i.assignedSlot.parentNode.parentNode),i.parentNode!==this.$.items)return;if(e.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const n=i.style.transform;i.style.top=/translateY\((.*)\)/.exec(n)[1],i.style.transform="none",requestAnimationFrame(()=>{i.style.top="",i.style.transform=n})}const s=i.getBoundingClientRect();this._ios?e.dataTransfer.setDragImage(i):e.dataTransfer.setDragImage(i,e.clientX-s.left,e.clientY-s.top);let a=[i];this._isSelected(i._item)&&(a=this.__getViewportRows().filter(n=>this._isSelected(n._item)).filter(n=>!this.dragFilter||this.dragFilter(this.__getRowModel(n)))),e.dataTransfer.setData("text",this.__formatDefaultTransferData(a)),i.setAttribute("dragstart",a.length>1?a.length:""),this.style.setProperty("--_grid-drag-start-x",`${e.clientX-s.left+20}px`),this.style.setProperty("--_grid-drag-start-y",`${e.clientY-s.top+10}px`),requestAnimationFrame(()=>{i.removeAttribute("dragstart"),this.updateStyles({"--_grid-drag-start-x":"","--_grid-drag-start-y":""})});const o=new CustomEvent("grid-dragstart",{detail:{draggedItems:a.map(n=>n._item),setDragData:(n,l)=>e.dataTransfer.setData(n,l),setDraggedItemsCount:n=>i.setAttribute("dragstart",n)}});o.originalEvent=e,this.dispatchEvent(o)}}_onDragEnd(e){this.toggleAttribute("dragging-rows",!1),e.stopPropagation();const i=new CustomEvent("grid-dragend");i.originalEvent=e,this.dispatchEvent(i)}_onDragLeave(e){e.stopPropagation(),this._clearDragStyles()}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY)){this._clearDragStyles();return}let i=e.composedPath().filter(s=>s.localName==="tr")[0];if(!this._effectiveSize||this.dropMode===je.ON_GRID)this._dropLocation=fe.EMPTY;else if(!i||i.parentNode!==this.$.items){if(i)return;if(this.dropMode===je.BETWEEN||this.dropMode===je.ON_TOP_OR_BETWEEN)i=Array.from(this.$.items.children).filter(s=>!s.hidden).pop(),this._dropLocation=fe.BELOW;else return}else{const s=i.getBoundingClientRect();if(this._dropLocation=fe.ON_TOP,this.dropMode===je.BETWEEN){const a=e.clientY-s.top<s.bottom-e.clientY;this._dropLocation=a?fe.ABOVE:fe.BELOW}else this.dropMode===je.ON_TOP_OR_BETWEEN&&(e.clientY-s.top<s.height/3?this._dropLocation=fe.ABOVE:e.clientY-s.top>s.height/3*2&&(this._dropLocation=fe.BELOW))}if(i&&i.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}e.stopPropagation(),e.preventDefault(),this._dropLocation===fe.EMPTY?this.toggleAttribute("dragover",!0):i?(this._dragOverItem=i._item,i.getAttribute("dragover")!==this._dropLocation&&i.setAttribute("dragover",this._dropLocation)):this._clearDragStyles()}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;const i=this.$.header.getBoundingClientRect().bottom,s=this.$.footer.getBoundingClientRect().top,a=i-e+this.__dndAutoScrollThreshold,o=e-s+this.__dndAutoScrollThreshold;let n=0;if(o>0?n=o*2:a>0&&(n=-a*2),n){const l=this.$.table.scrollTop;if(this.$.table.scrollTop+=n,l!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>this.__dndAutoScrolling=!1,20),!0}}__getViewportRows(){const e=this.$.header.getBoundingClientRect().bottom,i=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(s=>{const a=s.getBoundingClientRect();return a.bottom>e&&a.top<i})}_clearDragStyles(){this.removeAttribute("dragover"),Array.from(this.$.items.children).forEach(e=>e.removeAttribute("dragover"))}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();const i=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(a=>({type:a,data:e.dataTransfer.getData(a)}));this._clearDragStyles();const s=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:i}});s.originalEvent=e,this.dispatchEvent(s)}}__formatDefaultTransferData(e){return e.map(i=>Array.from(i.children).filter(s=>!s.hidden&&s.getAttribute("part").indexOf("details-cell")===-1).sort((s,a)=>s._column._order>a._column._order?1:-1).map(s=>s._content.textContent.trim()).filter(s=>s).join("	")).join(`
`)}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){Array.from(this.$.items.children).filter(e=>!e.hidden).forEach(e=>{this._filterDragAndDrop(e,this.__getRowModel(e))})}_filterDragAndDrop(e,i){const s=this.loading||e.hasAttribute("loading"),a=!this.rowsDraggable||s||this.dragFilter&&!this.dragFilter(i),o=!this.dropMode||s||this.dropFilter&&!this.dropFilter(i);Array.from(e.children).map(l=>l._content).forEach(l=>{a?l.removeAttribute("draggable"):l.setAttribute("draggable",!0)}),e.toggleAttribute("drag-disabled",!!a),e.toggleAttribute("drop-disabled",!!o)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const un=r=>class extends r{static get properties(){return{_columnTree:Object}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){for(let i=0;i<e.length;i++)if(e[i].localName==="vaadin-grid-column-group")return!0;return!1}_getChildColumns(e){return J.getFlattenedNodes(e).filter(this._isColumnElement)}_flattenColumnGroups(e){return e.map(i=>i.localName==="vaadin-grid-column-group"?this._getChildColumns(i):[i]).reduce((i,s)=>i.concat(s),[])}_getColumnTree(){const e=J.getFlattenedNodes(this).filter(this._isColumnElement),i=[e];let s=e;for(;this._hasColumnGroups(s);)s=this._flattenColumnGroups(s),i.push(s);return i}_updateColumnTree(){const e=this._getColumnTree();this._arrayEquals(e,this._columnTree)||(this._columnTree=e)}_addNodeObserver(){this._observer=new J(this,e=>{const i=s=>s.filter(this._isColumnElement).length>0;if(i(e.addedNodes)||i(e.removedNodes)){const s=e.removedNodes.flatMap(o=>o._allCells),a=o=>s.filter(n=>n._content.contains(o)).length;this.__removeSorters(this._sorters.filter(a)),this.__removeFilters(this._filters.filter(a)),this._updateColumnTree()}this._debouncerCheckImports=ee.debounce(this._debouncerCheckImports,ce.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_arrayEquals(e,i){if(!e||!i||e.length!=i.length)return!1;for(let s=0,a=e.length;s<a;s++)if(e[s]instanceof Array&&i[s]instanceof Array){if(!this._arrayEquals(e[s],i[s]))return!1}else if(e[s]!=i[s])return!1;return!0}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(e=>{const i=this.querySelector(e);i&&!(i instanceof S)&&console.warn(`Make sure you have imported the required module for <${e}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(e=>this._updateFirstAndLastColumnForRow(e))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((i,s)=>i._column._order-s._column._order).forEach((i,s,a)=>{i.toggleAttribute("first-column",s===0),i.toggleAttribute("last-column",s===a.length-1)})}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(e.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pn=r=>class extends r{getEventContext(e){const i={},s=e.composedPath(),a=s[s.indexOf(this.$.table)-3];return a&&(i.section=["body","header","footer","details"].filter(o=>a.getAttribute("part").indexOf(o)>-1)[0],a._column&&(i.column=a._column),(i.section==="body"||i.section==="details")&&Object.assign(i,this.__getRowModel(a.parentElement))),i}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mn=r=>class extends r{static get properties(){return{_filters:{type:Array,value:function(){return[]}}}}ready(){super.ready(),this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(e){e.stopPropagation(),this.__addFilter(e.target),this.__applyFilters()}__removeFilters(e){e.length!=0&&(this._filters=this._filters.filter(i=>e.indexOf(i)<0),this.__applyFilters())}__addFilter(e){this._filters.indexOf(e)===-1&&this._filters.push(e)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(e=>({path:e.path,value:e.value}))}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fn=r=>class extends r{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}ready(){super.ready(),!(this._ios||this._android)&&(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0}),this.addEventListener("mouseup",()=>this._isMousedown=!1))}get __rowFocusMode(){return this.__isRow(this._itemsFocusable)||this.__isRow(this._headerFocusable)||this.__isRow(this._footerFocusable)}set __rowFocusMode(e){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach(i=>{e&&this.__isCell(this[i])?this[i]=this[i].parentElement:!e&&this.__isRow(this[i])&&(this[i]=this[i].firstElementChild)})}_focusableChanged(e,i){i&&i.setAttribute("tabindex","-1"),e&&this._updateGridSectionFocusTarget(e)}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const e=this.shadowRoot.activeElement===this._itemsFocusable;this._getVisibleRows().forEach(i=>{if(i.index===this._focusedItemIndex){if(this.__rowFocusMode)this._itemsFocusable=i;else if(this._itemsFocusable.parentElement){const s=[...this._itemsFocusable.parentElement.children].indexOf(this._itemsFocusable);this._itemsFocusable=i.children[s]}}}),e&&this._itemsFocusable.focus()}_onKeyDown(e){const i=e.key;let s;switch(i){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":s="Navigation";break;case"Enter":case"Escape":case"F2":s="Interaction";break;case"Tab":s="Tab";break;case" ":s="Space";break}this._detectInteracting(e),this.interacting&&s!=="Interaction"&&(s=void 0),s&&this[`_on${s}KeyDown`](e,i)}_ensureScrolledToIndex(e){[...this.$.items.children].find(s=>s.index===e)?this.__scrollIntoViewport(e):this.scrollToIndex(e)}__isRowExpandable(e){if(this.itemHasChildrenPath){const i=e._item;return i&&this.get(this.itemHasChildrenPath,i)&&!this._isExpanded(i)}}__isRowCollapsible(e){return this._isExpanded(e._item)}__isDetailsCell(e){return e.matches('[part~="details-cell"]')}__isCell(e){return e instanceof HTMLTableCellElement}__isRow(e){return e instanceof HTMLTableRowElement}__getIndexOfChildElement(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}_onNavigationKeyDown(e,i){e.preventDefault();const s=this._lastVisibleIndex-this._firstVisibleIndex-1;let a=0,o=0;switch(i){case"ArrowRight":a=this.__isRTL?-1:1;break;case"ArrowLeft":a=this.__isRTL?1:-1;break;case"Home":this.__rowFocusMode||e.ctrlKey?o=-1/0:a=-1/0;break;case"End":this.__rowFocusMode||e.ctrlKey?o=1/0:a=1/0;break;case"ArrowDown":o=1;break;case"ArrowUp":o=-1;break;case"PageDown":o=s;break;case"PageUp":o=-s;break}const n=e.composedPath().find(_=>this.__isRow(_)),l=e.composedPath().find(_=>this.__isCell(_));if(this.__rowFocusMode&&!n||!this.__rowFocusMode&&!l)return;const u=this.__isRTL?"ArrowLeft":"ArrowRight",m=this.__isRTL?"ArrowRight":"ArrowLeft";if(i===u){if(this.__rowFocusMode){if(this.__isRowExpandable(n)){this.expandItem(n._item);return}this.__rowFocusMode=!1,this._onCellNavigation(n.firstElementChild,0,0);return}}else if(i===m)if(this.__rowFocusMode){if(this.__isRowCollapsible(n)){this.collapseItem(n._item);return}}else{const _=[...n.children].sort((g,T)=>g._order-T._order);if(l===_[0]||this.__isDetailsCell(l)){this.__rowFocusMode=!0,this._onRowNavigation(n,0);return}}this.__rowFocusMode?this._onRowNavigation(n,o):this._onCellNavigation(l,a,o)}_onRowNavigation(e,i){const{dstRow:s}=this.__navigateRows(i,e);s&&s.focus()}__getIndexInGroup(e,i){return e.parentNode===this.$.items?i!==void 0?i:e.index:this.__getIndexOfChildElement(e)}__navigateRows(e,i,s){const a=this.__getIndexInGroup(i,this._focusedItemIndex),o=i.parentNode,n=(o===this.$.items?this._effectiveSize:o.children.length)-1;let l=Math.max(0,Math.min(a+e,n));if(o!==this.$.items){if(l>a)for(;l<n&&o.children[l].hidden;)l+=1;else if(l<a)for(;l>0&&o.children[l].hidden;)l-=1;return this.toggleAttribute("navigating",!0),{dstRow:o.children[l]}}let u=!1;if(s){const m=this.__isDetailsCell(s);if(o===this.$.items){const _=i._item,g=this._cache.getItemForIndex(l);m?u=e===0:u=e===1&&this._isDetailsOpened(_)||e===-1&&l!==a&&this._isDetailsOpened(g),u!==m&&(e===1&&u||e===-1&&!u)&&(l=a)}}return this._ensureScrolledToIndex(l),this._focusedItemIndex=l,this.toggleAttribute("navigating",!0),{dstRow:[...o.children].find(m=>!m.hidden&&m.index===l),dstIsRowDetails:u}}_onCellNavigation(e,i,s){const a=e.parentNode,{dstRow:o,dstIsRowDetails:n}=this.__navigateRows(s,a,e);if(!o)return;const l=this.__getIndexOfChildElement(e),u=this.__isDetailsCell(e),m=a.parentNode,_=this.__getIndexInGroup(a,this._focusedItemIndex);if(this._focusedColumnOrder===void 0&&(u?this._focusedColumnOrder=0:this._focusedColumnOrder=this._getColumns(m,_).filter(g=>!g.hidden)[l]._order),n)[...o.children].find(T=>this.__isDetailsCell(T)).focus();else{const g=this.__getIndexInGroup(o,this._focusedItemIndex),T=this._getColumns(m,g).filter(R=>!R.hidden),f=T.map(R=>R._order).sort((R,Q)=>R-Q),A=f.length-1,b=f.indexOf(f.slice(0).sort((R,Q)=>Math.abs(R-this._focusedColumnOrder)-Math.abs(Q-this._focusedColumnOrder))[0]),C=s===0&&u?b:Math.max(0,Math.min(b+i,A));C!==b&&(this._focusedColumnOrder=void 0);const I=T.reduce((R,Q,X)=>(R[Q._order]=X,R),{})[f[C]],M=o.children[I];this._scrollHorizontallyToCell(M),M.focus()}}_onInteractionKeyDown(e,i){const s=e.composedPath()[0],a=s.localName==="input"&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(s.type);let o;switch(i){case"Enter":o=this.interacting?!a:!0;break;case"Escape":o=!1;break;case"F2":o=!this.interacting;break}const{cell:n}=this._getGridEventLocation(e);if(this.interacting!==o&&n!==null)if(o){const l=n._content.querySelector("[focus-target]")||[...n._content.querySelectorAll("*")].find(u=>this._isFocusable(u));l&&(e.preventDefault(),l.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else e.preventDefault(),this._focusedColumnOrder=void 0,n.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0)}_predictFocusStepTarget(e,i){const s=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let a=s.indexOf(e);for(a+=i;a>=0&&a<=s.length-1;){let o=s[a];if(o&&!this.__rowFocusMode&&(o=s[a].parentNode),!o||o.hidden)a+=i;else break}return s[a]}_onTabKeyDown(e){const i=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(e.stopPropagation(),i===this.$.table)this.$.table.focus();else if(i===this.$.focusexit)this.$.focusexit.focus();else if(i===this._itemsFocusable){let s=i;const a=this.__isRow(i)?i:i.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),a.index!==this._focusedItemIndex&&this.__isCell(i)){const o=Array.from(a.children).indexOf(this._itemsFocusable),n=Array.from(this.$.items.children).find(l=>!l.hidden&&l.index===this._focusedItemIndex);n&&(s=n.children[o])}e.preventDefault(),s.focus()}else e.preventDefault(),i.focus();this.toggleAttribute("navigating",!0)}_onSpaceKeyDown(e){e.preventDefault();const i=e.composedPath()[0],s=this.__isRow(i);(s||!i._content||!i._content.firstElementChild)&&this.dispatchEvent(new CustomEvent(s?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(s?i:i.parentElement)}}))}_onKeyUp(e){if(!/^( |SpaceBar)$/.test(e.key)||this.interacting)return;e.preventDefault();const i=e.composedPath()[0];if(i._content&&i._content.firstElementChild){const s=this.hasAttribute("navigating");i._content.firstElementChild.click(),this.toggleAttribute("navigating",s)}}_onFocusIn(e){this._isMousedown||this.toggleAttribute("navigating",!0);const i=e.composedPath()[0];i===this.$.table||i===this.$.focusexit?(this._predictFocusStepTarget(i,i===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(e)}_onFocusOut(e){this.toggleAttribute("navigating",!1),this._detectInteracting(e)}_onContentFocusIn(e){const{section:i,cell:s,row:a}=this._getGridEventLocation(e);if(this._detectInteracting(e),i&&(s||a)&&(this._activeRowGroup=i,this.$.header===i?this._headerFocusable=this.__rowFocusMode?a:s:this.$.items===i?this._itemsFocusable=this.__rowFocusMode?a:s:this.$.footer===i&&(this._footerFocusable=this.__rowFocusMode?a:s),s)){const o=this.getEventContext(e);s.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:o}}))}this._detectFocusedItemIndex(e)}_detectInteracting(e){const i=e.composedPath().some(s=>s.localName==="vaadin-grid-cell-content");this._setInteracting(i)}_detectFocusedItemIndex(e){const{section:i,row:s}=this._getGridEventLocation(e);i===this.$.items&&(this._focusedItemIndex=s.index)}_updateGridSectionFocusTarget(e){if(!e)return;const i=this._getGridSectionFromFocusTarget(e),s=this.interacting&&i===this._activeRowGroup;e.tabIndex=s?-1:0}_preventScrollerRotatingCellFocus(e,i){e.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)),i===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this.toggleAttribute("navigating",!0))}_getColumns(e,i){let s=this._columnTree.length-1;return e===this.$.header?s=i:e===this.$.footer&&(s=this._columnTree.length-1-i),this._columnTree[s]}__isValidFocusable(e){return this.$.table.contains(e)&&e.offsetHeight}_resetKeyboardNavigation(){if(["header","footer"].forEach(e=>{if(!this.__isValidFocusable(this[`_${e}Focusable`])){const i=[...this.$[e].children].find(a=>a.offsetHeight),s=i?[...i.children].find(a=>!a.hidden):null;i&&s&&(this[`_${e}Focusable`]=this.__rowFocusMode?i:s)}}),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const e=this.__getFirstVisibleItem(),i=e?[...e.children].find(s=>!s.hidden):null;i&&e&&(delete this._focusedColumnOrder,this._itemsFocusable=this.__rowFocusMode?e:i)}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||this.__isDetailsCell(e))return;const i=e.getBoundingClientRect(),s=e.parentNode,a=Array.from(s.children).indexOf(e),o=this.$.table.getBoundingClientRect();let n=o.left,l=o.right;for(let u=a-1;u>=0;u--){const m=s.children[u];if(!(m.hasAttribute("hidden")||this.__isDetailsCell(m))&&m.hasAttribute("frozen")){n=m.getBoundingClientRect().right;break}}for(let u=a+1;u<s.children.length;u++){const m=s.children[u];if(!(m.hasAttribute("hidden")||this.__isDetailsCell(m))&&m.hasAttribute("frozen")){l=m.getBoundingClientRect().left;break}}i.left<n&&(this.$.table.scrollLeft+=Math.round(i.left-n)),i.right>l&&(this.$.table.scrollLeft+=Math.round(i.right-l))}_getGridEventLocation(e){const i=e.composedPath(),s=i.indexOf(this.$.table),a=s>=1?i[s-1]:null,o=s>=2?i[s-2]:null,n=s>=3?i[s-3]:null;return{section:a,row:o,cell:n}}_getGridSectionFromFocusTarget(e){return e===this._headerFocusable?this.$.header:e===this._itemsFocusable?this.$.items:e===this._footerFocusable?this.$.footer:null}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _n=r=>class extends r{static get properties(){return{detailsOpenedItems:{type:Array,value:function(){return[]}},rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver(e=>{e.forEach(({target:i})=>{this._updateDetailsCellHeight(i.parentElement)}),this.__virtualizer.__adapter._resizeHandler()})}_rowDetailsRendererChanged(e){!e||this._columnTree&&Array.from(this.$.items.children).forEach(i=>{if(!i.querySelector("[part~=details-cell]")){this._updateRow(i,this._columnTree[this._columnTree.length-1]);const s=this._isDetailsOpened(i._item);this._toggleDetailsCell(i,s)}})}_detailsOpenedItemsChanged(e,i){e.path==="detailsOpenedItems.length"||!e.value||[...this.$.items.children].forEach(s=>{if(s.hasAttribute("details-opened")){this._updateItem(s,s._item);return}i&&this._isDetailsOpened(s._item)&&this._updateItem(s,s._item)})}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),e.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(e)}_toggleDetailsCell(e,i){const s=e.querySelector('[part~="details-cell"]');!s||(s.hidden=!i,!s.hidden&&this.rowDetailsRenderer&&(s._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(e){const i=e.querySelector('[part~="details-cell"]');!i||(i.hidden?e.style.removeProperty("padding-bottom"):e.style.setProperty("padding-bottom",`${i.offsetHeight}px`))}_updateDetailsCellHeights(){[...this.$.items.children].forEach(e=>{this._updateDetailsCellHeight(e)})}_isDetailsOpened(e){return this.detailsOpenedItems&&this._getItemIndexInArray(e,this.detailsOpenedItems)!==-1}openItemDetails(e){this._isDetailsOpened(e)||(this.detailsOpenedItems=[...this.detailsOpenedItems,e])}closeItemDetails(e){this._isDetailsOpened(e)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter(i=>!this._itemsEqual(i,e)))}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gn={SCROLLING:500},vn=r=>class extends r{static get properties(){return{_frozenCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element}}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(e){this.$.table.scrollTop=e}get _scrollLeft(){return this.$.table.scrollLeft}ready(){super.ready(),this.$.outerscroller=document.createElement("div"),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",e=>{const i=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[i-1]}),this.$.items.addEventListener("focusout",()=>this._rowWithFocusedElement=void 0),this.$.table.addEventListener("scroll",()=>this._afterScroll())}scrollToIndex(e){e=Math.min(this._effectiveSize-1,Math.max(0,e)),this.__virtualizer.scrollToIndex(e),this.__scrollIntoViewport(e)}__scrollIntoViewport(e){const i=[...this.$.items.children].find(s=>s.index===e);if(i){const s=i.getBoundingClientRect(),a=this.$.footer.getBoundingClientRect().top,o=this.$.header.getBoundingClientRect().bottom;s.bottom>a?this.$.table.scrollTop+=s.bottom-a:s.top<o&&(this.$.table.scrollTop-=o-s.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this.$.scroller.toggleAttribute("scrolling",!0))),this._debounceScrolling=ee.debounce(this._debounceScrolling,ce.after(gn.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)})}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this._updateOverflow()}_updateOverflow(){let e="";const i=this.$.table;i.scrollTop<i.scrollHeight-i.clientHeight&&(e+=" bottom"),i.scrollTop>0&&(e+=" top"),i.scrollLeft<i.scrollWidth-i.clientWidth&&(e+=" right"),i.scrollLeft>0&&(e+=" left"),this._debounceOverflow=ee.debounce(this._debounceOverflow,xe,()=>{const s=e.trim();s.length>0&&this.getAttribute("overflow")!==s?this.setAttribute("overflow",s):s.length==0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")})}_frozenCellsChanged(){this._debouncerCacheElements=ee.debounce(this._debouncerCacheElements,Ze,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(function(e){e.style.transform=""}),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this.__updateHorizontalScrollPosition()}),this._updateLastFrozen()}_updateLastFrozen(){if(!this._columnTree)return;const e=this._columnTree[this._columnTree.length-1].slice(0);e.sort((s,a)=>s._order-a._order);const i=e.reduce((s,a,o)=>(a._lastFrozen=!1,a.frozen&&!a.hidden?o:s),void 0);i!==void 0&&(e[i]._lastFrozen=!0)}__updateHorizontalScrollPosition(){if(this.$.table.style.setProperty("--_grid-horizontal-scroll-position",-this._scrollLeft+"px"),this.__isRTL){const i=`translate(${this.__getNormalizedScrollLeft(this.$.table)+this.$.table.clientWidth-this.$.table.scrollWidth}px, 0)`;for(let s=0;s<this._frozenCells.length;s++)this._frozenCells[s].style.transform=i}}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bn=r=>class extends r{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_selectedItemsChanged(selectedItems.*)"]}_isSelected(e){return this.selectedItems&&this._getItemIndexInArray(e,this.selectedItems)>-1}selectItem(e){this._isSelected(e)||(this.selectedItems=[...this.selectedItems,e])}deselectItem(e){this._isSelected(e)&&(this.selectedItems=this.selectedItems.filter(i=>!this._itemsEqual(i,e)))}_toggleItem(e){this._getItemIndexInArray(e,this.selectedItems)===-1?this.selectItem(e):this.deselectItem(e)}_selectedItemsChanged(){this.requestContentUpdate()}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yn=r=>class extends r{static get properties(){return{multiSort:{type:Boolean,value:!1},_sorters:{type:Array,value:function(){return[]}},_previousSorters:{type:Array,value:function(){return[]}}}}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(e){const i=e.target;e.stopPropagation(),this.__updateSorter(i),this.__applySorters()}__removeSorters(e){e.length!=0&&(this._sorters=this._sorters.filter(i=>e.indexOf(i)<0),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach((e,i)=>e._order=this._sorters.length>1?i:null,this)}__updateSorter(e){if(!(!e.direction&&this._sorters.indexOf(e)===-1)){if(e._order=null,this.multiSort)this._removeArrayItem(this._sorters,e),e.direction&&this._sorters.unshift(e),this.__updateSortOrders();else if(e.direction){const i=this._sorters.filter(s=>s!=e);this._sorters=[e],i.forEach(s=>{s._order=null,s.direction=null})}}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.clearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(e=>({path:e.path,direction:e.direction}))}_removeArrayItem(e,i){const s=e.indexOf(i);s>-1&&e.splice(s,1)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const An=r=>class extends r{static get properties(){return{cellClassNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}generateCellClassNames(){Array.from(this.$.items.children).filter(e=>!e.hidden).forEach(e=>this._generateCellClassNames(e,this.__getRowModel(e)))}_generateCellClassNames(e,i){Array.from(e.children).forEach(s=>{if(s.__generatedClasses&&s.__generatedClasses.forEach(a=>s.classList.remove(a)),this.cellClassNameGenerator){const a=this.cellClassNameGenerator(s._column,i);s.__generatedClasses=a&&a.split(" ").filter(o=>o.length>0),s.__generatedClasses&&s.__generatedClasses.forEach(o=>s.classList.add(o))}})}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ke extends O(D(hn(nn(un(rn(vn(bn(yn(_n(fn(tn(mn(ln(dn(pn(cn(An(Ls(S))))))))))))))))))){static get template(){return E`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)","_effectiveSizeChanged(_effectiveSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:Ar},_ios:{type:Boolean,value:xt},_firefox:{type:Boolean,value:Cr},_android:{type:Boolean,value:$s},_touchDevice:{type:Boolean,value:Je},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},_recalculateColumnWidthOnceLoadingFinished:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1}__getFirstVisibleItem(){return this._getVisibleRows().find(t=>this._isInViewport(t))}get _firstVisibleIndex(){const t=this.__getFirstVisibleItem();return t?t.index:void 0}__getLastVisibleItem(){return this._getVisibleRows().reverse().find(t=>this._isInViewport(t))}get _lastVisibleIndex(){const t=this.__getLastVisibleItem();return t?t.index:void 0}_isInViewport(t){const e=this.$.table.getBoundingClientRect(),i=t.getBoundingClientRect(),s=this.$.header.getBoundingClientRect().height,a=this.$.footer.getBoundingClientRect().height;return i.bottom>e.top+s&&i.top<e.bottom-a}_getVisibleRows(){return Array.from(this.$.items.children).filter(t=>!t.hidden).sort((t,e)=>t.index-e.index)}ready(){super.ready(),this.__virtualizer=new Jt({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver(()=>setTimeout(()=>this.__updateFooterPositioning())).observe(this.$.footer),ke(this)}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),t==="dir"&&(this.__isRTL=i==="rtl")}__getBodyCellCoordinates(t){if(this.$.items.contains(t)&&t.localName==="td")return{item:t.parentElement._item,column:t._column}}__focusBodyCell({item:t,column:e}){const i=this._getVisibleRows().find(a=>a._item===t),s=i&&[...i.children].find(a=>a._column===e);s&&s.focus()}_effectiveSizeChanged(t,e,i,s){if(e&&i&&s){const a=this.shadowRoot.activeElement,o=this.__getBodyCellCoordinates(a);e.size=t,e.update(),e.flush(),o&&a.parentElement.hidden&&this.__focusBodyCell(o),this._resetKeyboardNavigation()}}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter(t=>t.clientHeight).length}__itemsReceived(){this._recalculateColumnWidthOnceLoadingFinished&&!this._cache.isLoading()&&this.__hasRowsWithClientHeight()&&(this._recalculateColumnWidthOnceLoadingFinished=!1,this.recalculateColumnWidths())}__getIntrinsicWidth(t){const e=t.width,i=t.flexGrow;t.width="auto",t.flexGrow=0;const s=t._allCells.filter(a=>!this.$.items.contains(a)||this._isInViewport(a.parentElement)).reduce((a,o)=>Math.max(a,o.offsetWidth+1),0);return t.flexGrow=i,t.width=e,s}__getDistributedWidth(t,e){if(t==null||t===this)return 0;const i=Math.max(this.__getIntrinsicWidth(t),this.__getDistributedWidth(t.parentElement,t));if(!e)return i;const s=t,a=i,o=s._visibleChildColumns.map(m=>this.__getIntrinsicWidth(m)).reduce((m,_)=>m+_,0),n=Math.max(0,a-o),u=this.__getIntrinsicWidth(e)/o*n;return this.__getIntrinsicWidth(e)+u}_recalculateColumnWidths(t){this.__virtualizer.flush(),t.forEach(e=>{e.width=`${this.__getDistributedWidth(e)}px`})}recalculateColumnWidths(){if(!!this._columnTree)if(this._cache.isLoading())this._recalculateColumnWidthOnceLoadingFinished=!0;else{const t=this._getColumns().filter(e=>!e.hidden&&e.autoWidth);this._recalculateColumnWidths(t)}}_createScrollerRows(t){const e=[];for(let i=0;i<t;i++){const s=document.createElement("tr");s.setAttribute("part","row"),s.setAttribute("role","row"),s.setAttribute("tabindex","-1"),this._columnTree&&this._updateRow(s,this._columnTree[this._columnTree.length-1],"body",!1,!0),e.push(s)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(i=>i.isConnected&&i.notifyPath&&i.notifyPath("_cells.*",i._cells)),fr(this,()=>{this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._afterScroll(),this.__itemsReceived()}),e}_createCell(t){const e=this._contentIndex=this._contentIndex+1||0,i="vaadin-grid-cell-content-"+e,s=document.createElement("vaadin-grid-cell-content");s.setAttribute("slot",i);const a=document.createElement(t);a.id=i.replace("-content-","-"),a.setAttribute("tabindex","-1"),a.setAttribute("role",t==="td"?"gridcell":"columnheader");const o=document.createElement("slot");return o.setAttribute("name",i),a.appendChild(o),a._content=s,s.addEventListener("mousedown",()=>{if(wr){const n=l=>{const u=s.contains(this.getRootNode().activeElement),m=s.contains(l.target);!u&&m&&a.focus(),document.removeEventListener("mouseup",n,!0)};document.addEventListener("mouseup",n,!0)}else setTimeout(()=>{s.contains(this.getRootNode().activeElement)||a.focus()})}),a}_updateRow(t,e,i,s,a){i=i||"body";const o=document.createDocumentFragment();Array.from(t.children).forEach(n=>n._vacant=!0),t.innerHTML="",e.filter(n=>!n.hidden).forEach((n,l,u)=>{let m;if(i==="body"){if(n._cells=n._cells||[],m=n._cells.filter(_=>_._vacant)[0],m||(m=this._createCell("td"),n._cells.push(m)),m.setAttribute("part","cell body-cell"),t.appendChild(m),l===u.length-1&&this.rowDetailsRenderer){this._detailsCells=this._detailsCells||[];const _=this._detailsCells.filter(g=>g._vacant)[0]||this._createCell("td");this._detailsCells.indexOf(_)===-1&&this._detailsCells.push(_),_._content.parentElement||o.appendChild(_._content),this._configureDetailsCell(_),t.appendChild(_),this._a11ySetRowDetailsCell(t,_),_._vacant=!1}n.notifyPath&&!a&&n.notifyPath("_cells.*",n._cells)}else{const _=i==="header"?"th":"td";s||n.localName==="vaadin-grid-column-group"?(m=n[`_${i}Cell`]||this._createCell(_),m._column=n,t.appendChild(m),n[`_${i}Cell`]=m):(n._emptyCells=n._emptyCells||[],m=n._emptyCells.filter(g=>g._vacant)[0]||this._createCell(_),m._column=n,t.appendChild(m),n._emptyCells.indexOf(m)===-1&&n._emptyCells.push(m)),m.setAttribute("part",`cell ${i}-cell`),this.__updateHeaderFooterRowVisibility(t)}m._content.parentElement||o.appendChild(m._content),m._vacant=!1,m._column=n}),this.appendChild(o),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(t)}__updateHeaderFooterRowVisibility(t){if(!t)return;const e=Array.from(t.children).filter(i=>{const s=i._column;if(s._emptyCells&&s._emptyCells.indexOf(i)>-1)return!1;if(t.parentElement===this.$.header){if(s.headerRenderer)return!0;if(s.header===null)return!1;if(s.path||s.header!==void 0)return!0}else if(s.footerRenderer)return!0;return!1});t.hidden!==!e.length&&(t.hidden=!e.length),this._resetKeyboardNavigation()}_updateScrollerItem(t,e){this._preventScrollerRotatingCellFocus(t,e),this._columnTree&&(t.toggleAttribute("first",e===0),t.toggleAttribute("last",e===this._effectiveSize-1),t.toggleAttribute("odd",e%2),this._a11yUpdateRowRowindex(t,e),this._getItem(e,t))}_columnTreeChanged(t){this._renderColumnTree(t),this.recalculateColumnWidths()}_renderColumnTree(t){for(Array.from(this.$.items.children).forEach(e=>this._updateRow(e,t[t.length-1],null,!1,!0));this.$.header.children.length<t.length;){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),this.$.header.appendChild(e);const i=document.createElement("tr");i.setAttribute("part","row"),i.setAttribute("role","row"),i.setAttribute("tabindex","-1"),this.$.footer.appendChild(i)}for(;this.$.header.children.length>t.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);Array.from(this.$.header.children).forEach((e,i)=>this._updateRow(e,t[i],"header",i===t.length-1)),Array.from(this.$.footer.children).forEach((e,i)=>this._updateRow(e,t[t.length-1-i],"footer",i===0)),this._updateRow(this.$.sizer,t[t.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.__updateFooterPositioning(),this.generateCellClassNames()}__updateFooterPositioning(){this._firefox&&(this.$.items.style.paddingBottom=0,this.allRowsVisible||(this.$.items.style.paddingBottom=`${this.$.footer.offsetHeight}px`))}_updateItem(t,e){t._item=e;const i=this.__getRowModel(t);this._toggleDetailsCell(t,i.detailsOpened),this._a11yUpdateRowLevel(t,i.level),this._a11yUpdateRowSelected(t,i.selected),t.toggleAttribute("expanded",i.expanded),t.toggleAttribute("selected",i.selected),t.toggleAttribute("details-opened",i.detailsOpened),this._generateCellClassNames(t,i),this._filterDragAndDrop(t,i),Array.from(t.children).forEach(s=>{if(s._renderer){const a=s._column||this;s._renderer.call(a,s._content,a,i)}}),this._updateDetailsCellHeight(t),this._a11yUpdateRowExpanded(t,i.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateFooterPositioning()}_onAnimationEnd(t){t.animationName.indexOf("vaadin-grid-appear")===0&&(t.stopPropagation(),this.__itemsReceived(),requestAnimationFrame(()=>{this.__scrollToPendingIndex(),this.$.table.style.webkitOverflowScrolling="touch"}))}__getRowModel(t){return{index:t.index,item:t._item,level:this._getIndexLevel(t.index),expanded:this._isExpanded(t._item),selected:this._isSelected(t._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(t._item)}}requestContentUpdate(){this._columnTree&&(this._columnTree.forEach(t=>{t.forEach(e=>{e._renderHeaderAndFooter()})}),this.__updateVisibleRows())}__updateVisibleRows(t,e){this.__virtualizer&&this.__virtualizer.update(t,e)}notifyResize(){console.warn("WARNING: Since Vaadin 22, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}}customElements.define(Ke.is,Ke);(function(){const r=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Grid")};let t=!1;window.Vaadin.Flow.gridConnector={initLazy:e=>r(function(i){if(i.$connector)return;t||(t=!0,se.prototype.ensureSubCacheForScaledIndexOriginal=se.prototype.ensureSubCacheForScaledIndex,se.prototype.ensureSubCacheForScaledIndex=r(function(d){if(!this.grid.$connector){this.ensureSubCacheForScaledIndexOriginal(d);return}this.itemCaches[d]||this.grid.$connector.beforeEnsureSubCacheForScaledIndex(this,d)}),se.prototype.isLoadingOriginal=se.prototype.isLoading,se.prototype.isLoading=r(function(){return this.grid.$connector?Boolean(this.grid.$connector.hasEnsureSubCacheQueue()||Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(d=>this.itemCaches[d].isLoading())[0]):this.isLoadingOriginal()}),se.prototype.doEnsureSubCacheForScaledIndex=r(function(d){if(!this.itemCaches[d]){const h=new se.prototype.constructor(this.grid,this,this.items[d]);h.itemkeyCaches={},this.itemkeyCaches||(this.itemkeyCaches={}),this.itemCaches[d]=h,this.itemkeyCaches[this.grid.getItemId(h.parentItem)]=h,this.grid._loadPage(0,h)}}),se.prototype.getCacheAndIndexByKey=r(function(d){for(let c in this.items)if(this.grid.getItemId(this.items[c])===d)return{cache:this,scaledIndex:c};const h=Object.keys(this.itemkeyCaches);for(let c=0;c<h.length;c++){const p=h[c];let k=this.itemkeyCaches[p].getCacheAndIndexByKey(d);if(k)return k}}),se.prototype.getLevel=r(function(){let d=this,h=0;for(;d.parentCache;)d=d.parentCache,h++;return h}));const s={},a={},o={},n=50,l=20;let u=[],m,_=[],g;const T=150;let f,A={};const b="null";A[b]=[0,0];const C=["SINGLE","NONE","MULTI"];let x={},I="SINGLE",M=!1;i.size=0,i.itemIdPath="key",i.$connector={},i.$connector.hasEnsureSubCacheQueue=r(()=>_.length>0),i.$connector.hasParentRequestQueue=r(()=>u.length>0),i.$connector.hasRootRequestQueue=r(()=>Object.keys(s).length>0||f&&f.isActive()),i.$connector.beforeEnsureSubCacheForScaledIndex=r(function(d,h){_.push({cache:d,scaledIndex:h,itemkey:i.getItemId(d.items[h]),level:d.getLevel()}),_.sort(function(c,p){return c.scaledIndex-p.scaledIndex||c.level-p.level}),g=_e.debounce(g,ze,()=>{for(;_.length;)i.$connector.flushEnsureSubCache()})}),i.$connector.doSelection=r(function(d,h){if(I==="NONE"||!d.length||h&&i.hasAttribute("disabled"))return;I==="SINGLE"&&(i.selectedItems=[],x={});const c=d.filter(p=>p!==null);i.selectedItems=i.selectedItems.concat(c),d.forEach(p=>{p&&(x[p.key]=p,h&&(p.selected=!0,i.$server.select(p.key)));const v=!i.activeItem||!p||p.key!=i.activeItem.key;!h&&I==="SINGLE"&&v&&(i.activeItem=p)})}),i.$connector.doDeselection=r(function(d,h){if(I==="NONE"||!d.length||h&&i.hasAttribute("disabled"))return;const c=i.selectedItems.slice();for(;d.length;){const p=d.shift();for(let v=0;v<c.length;v++){const k=c[v];if(p&&p.key===k.key){c.splice(v,1);break}}p&&(delete x[p.key],h&&(delete p.selected,i.$server.deselect(p.key)))}i.selectedItems=c}),i.__activeItemChanged=r(function(d,h){I=="SINGLE"&&(d?x[d.key]||i.$connector.doSelection([d],!0):h&&x[h.key]&&(i.__deselectDisallowed?i.activeItem=h:i.$connector.doDeselection([h],!0)))}),i._createPropertyObserver("activeItem","__activeItemChanged",!0),i.__activeItemChangedDetails=r(function(d,h){i.__disallowDetailsOnClick||d==null&&h===void 0||(d&&!d.detailsOpened?i.$server.setDetailsVisible(d.key):i.$server.setDetailsVisible(null))}),i._createPropertyObserver("activeItem","__activeItemChangedDetails",!0),i.$connector._getPageIfSameLevel=r(function(d,h,c){let p=i._cache.getCacheAndIndex(h),v=p.cache.parentItem,k=v?i.getItemId(v):b;return d!==k?c:i._getPageForIndex(p.scaledIndex)}),i.$connector.getCacheByKey=r(function(d){let h=i._cache.getCacheAndIndexByKey(d);if(h)return h.cache}),i.$connector.flushEnsureSubCache=r(function(){let d=_.splice(0,1)[0],h=d.itemkey;const c=i._getVisibleRows();let p=c[0].index,v=c[c.length-1].index,k=v-p,z=Math.max(0,p-k),U=Math.min(v+k,i._effectiveSize);for(let B=z;B<=U;B++){let G=i._cache.getItemForIndex(B);if(i.getItemId(G)===h){if(i._isExpanded(G))return d.cache.doEnsureSubCacheForScaledIndex(d.scaledIndex),!0;break}}return!1}),i.$connector.flushParentRequests=r(function(){let d=u.splice(0,l);return d.length?(i.$server.setParentRequestedRanges(d),!0):!1}),i.$connector.beforeParentRequest=r(function(d,h,c){u.push({firstIndex:d,size:h,parentKey:c}),m=_e.debounce(m,Re.after(n),()=>{for(;u.length;)i.$connector.flushParentRequests()})}),i.$connector.fetchPage=r(function(d,h,c){const p=i._getVisibleRows();let v=p.length>0?p[0].index:0,k=p.length>0?p[p.length-1].index:0,z=k-v,U=Math.max(0,v-z),B=Math.min(k+z,i._effectiveSize),G=h,j=h;for(let De=U;De<=B;De++)G=Math.min(G,i.$connector._getPageIfSameLevel(c,De,G)),j=Math.max(j,i.$connector._getPageIfSameLevel(c,De,j));let ve=Math.max(0,G),We=c!==b?j:Math.min(j,Math.floor(i.size/i.pageSize)),Te=A[c];if(Te||(Te=[-1,-1]),Te[0]!=ve||Te[1]!=We){Te=[ve,We],A[c]=Te;let De=We-ve+1;d(ve*i.pageSize,De*i.pageSize)}}),i.dataProvider=r(function(d,h){if(d.pageSize!=i.pageSize)throw"Invalid pageSize";let c=d.page;if(d.parentItem){let p=i.getItemId(d.parentItem);a[p]||(a[p]={});let v=i.$connector.getCacheByKey(p),k=v&&v.itemkeyCaches?v.itemkeyCaches[p]:void 0;o[p]&&o[p][c]&&k?(c=Math.min(c,Math.floor(o[p].size/i.pageSize)),h(o[p][c],o[p].size)):a[p][c]=h,i.$connector.fetchPage((z,U)=>i.$connector.beforeParentRequest(z,U,d.parentItem.key),c,p)}else c=Math.min(c,Math.floor(i.size/i.pageSize)),o[b]&&o[b][c]?h(o[b][c]):s[c]=h,f=_e.debounce(f,Re.after(i._hasData?T:0),()=>{i.$connector.fetchPage((p,v)=>i.$server.setRequestedRange(p,v),c,b)})});const R=r(function(d,h){h!==void 0&&!M&&i.$server.sortersChanged(i._sorters.map(function(c){return{path:c.path,direction:c.direction}}))});i.$connector.setSorterDirections=r(function(d){M=!0,setTimeout(r(()=>{try{const h=Array.from(i.querySelectorAll("vaadin-grid-sorter"));h.forEach(c=>{d.filter(p=>p.column===c.getAttribute("path"))[0]||(c.direction=null)}),d.reverse().forEach(({column:c,direction:p})=>{h.forEach(v=>{v.getAttribute("path")===c&&v.direction!==p&&(v.direction=p)})})}finally{M=!1}}))}),i._createPropertyObserver("_previousSorters",R),i._updateItem=r(function(d,h){Ke.prototype._updateItem.call(i,d,h),d.hidden||Array.from(d.children).forEach(c=>{c._content&&c._content.__templateInstance&&c._content.__templateInstance.children&&Array.from(c._content.__templateInstance.children).forEach(p=>{p._attachRenderedComponentIfAble&&p._attachRenderedComponentIfAble(),p.children&&Array.from(p.children).forEach(v=>{v._attachRenderedComponentIfAble&&v._attachRenderedComponentIfAble()})})}),I===C[1]&&(d.removeAttribute("aria-selected"),Array.from(d.children).forEach(c=>c.removeAttribute("aria-selected")))});const Q=r(function(d,h){if(d==null||i.$server.updateExpandedState==null)return;let c=i.getItemId(d);if(i.$server.updateExpandedState(c,h),!h){delete o[c];let p=i.$connector.getCacheByKey(c);p&&p.itemkeyCaches&&p.itemkeyCaches[c]&&delete p.itemkeyCaches[c],p&&p.itemkeyCaches&&Object.keys(p.itemCaches).filter(v=>p.items[v].key===c).forEach(v=>delete p.itemCaches[v]),delete A[c]}});i.expandItem=r(function(d){Q(d,!0),Ke.prototype.expandItem.call(i,d)}),i.collapseItem=r(function(d){Q(d,!1),Ke.prototype.collapseItem.call(i,d)});const X=function(d){if(!d||!Array.isArray(d))throw"Attempted to call itemsUpdated with an invalid value: "+JSON.stringify(d);let h=Array.from(i.detailsOpenedItems),c=!1;for(let p=0;p<d.length;++p){const v=d[p];!v||(v.detailsOpened?i._getItemIndexInArray(v,h)<0&&h.push(v):i._getItemIndexInArray(v,h)>=0&&h.splice(i._getItemIndexInArray(v,h),1),x[v.key]&&(x[v.key]=v,v.selected=!0,c=!0))}i.detailsOpenedItems=h,c&&(i.selectedItems=Object.keys(x).map(function(p){return x[p]}))},re=function(d,h){let c;if((h||b)!==b){c=o[h][d];let p=i.$connector.getCacheByKey(h);if(p&&p.itemkeyCaches){let v=p.itemkeyCaches[h];const k=a[h],z=k&&k[d];ge(d,c,z,v)}}else c=o[b][d],ge(d,c,s[d],i._cache);return c},ge=function(d,h,c,p){if(!c){let v=d*i.pageSize,k=v+i.pageSize;if(h){if(p&&p.items)for(let z=v;z<k;z++)p.items[z]&&(p.items[z]=h[z-v])}else if(p&&p.items)for(let z=v;z<k;z++)delete p.items[z]}},pe=function(){i._cache.updateSize(),i._effectiveSize=i._cache.effectiveSize,i.__updateVisibleRows()},ne=function(d){if(!d||!i.$||i.$.items.childElementCount===0)return;const h=d.map(p=>p.key),c=i._getVisibleRows().filter(p=>p._item&&h.includes(p._item.key)).map(p=>p.index);c.length>0&&i.__updateVisibleRows(c[0],c[c.length-1])};i.$connector.set=r(function(d,h,c){if(d%i.pageSize!=0)throw"Got new data to index "+d+" which is not aligned with the page size of "+i.pageSize;let p=c||b;const v=d/i.pageSize,k=Math.ceil(h.length/i.pageSize);for(let z=0;z<k;z++){let U=v+z,B=h.slice(z*i.pageSize,(z+1)*i.pageSize);o[p]||(o[p]={}),o[p][U]=B,i.$connector.doSelection(B.filter(j=>j.selected&&!P(j))),i.$connector.doDeselection(B.filter(j=>!j.selected&&(x[j.key]||P(j))));const G=re(U,p);G&&(X(G),ne(G))}});const ae=function(d){let h=d.parentUniqueKey||b;if(o[h]){for(let c in o[h])for(let p in o[h][c])if(i.getItemId(o[h][c][p])===i.getItemId(d))return{page:c,index:p,parentKey:h}}return null};i.$connector.updateHierarchicalData=r(function(d){let h=[];for(let p=0;p<d.length;p++){let v=ae(d[p]);if(v){o[v.parentKey][v.page][v.index]=d[p];let k=v.parentKey+":"+v.page;h[k]||(h[k]={parentKey:v.parentKey,page:v.page})}}let c=Object.keys(h);for(let p=0;p<c.length;p++){let v=h[c[p]];const k=re(v.page,v.parentKey);k&&(X(k),ne(k))}}),i.$connector.updateFlatData=r(function(d){for(let h=0;h<d.length;h++){let c=ae(d[h]);if(c){o[c.parentKey][c.page][c.index]=d[h];const p=parseInt(c.page)*i.pageSize+parseInt(c.index);i._cache.items[p]&&(i._cache.items[p]=d[h])}}X(d),ne(d)}),i.$connector.clearExpanded=r(function(){i.expandedItems=[],_=[],u=[]}),i.$connector.clear=r(function(d,h,c){let p=c||b;if(!o[p]||Object.keys(o[p]).length===0)return;if(d%i.pageSize!=0)throw"Got cleared data for index "+d+" which is not aligned with the page size of "+i.pageSize;let v=Math.floor(d/i.pageSize),k=Math.ceil(h/i.pageSize);for(let B=0;B<k;B++){let G=v+B,j=o[p][G];i.$connector.doDeselection(j.filter(We=>x[We.key])),delete o[p][G];const ve=re(G,c);ve&&X(ve),ne(j)}let z=i._cache;if(c){const B=i._cache.getCacheAndIndexByKey(p);z=B.cache.itemCaches[B.scaledIndex]}const U=d+k*i.pageSize;for(let B=d;B<U;B++){delete z.items[B];const G=z.itemCaches[B];delete z.itemCaches[B];const j=G&&G.parentItem.key;j&&delete z.itemkeyCaches[j]}i._cache.updateSize()});const P=function(d){const h=i.selectedItems;for(let c=0;c<h;c++)if(h[c].key===d.key)return!0;return!1};i.$connector.reset=r(function(){i.size=0,q(o),q(i._cache.items),q(A),g&&g.cancel(),m&&m.cancel(),f&&f.cancel(),g=void 0,m=void 0,_=[],u=[],pe()});const q=d=>Object.keys(d).forEach(h=>delete d[h]);i.$connector.updateSize=d=>i.size=d,i.$connector.updateUniqueItemIdPath=d=>i.itemIdPath=d,i.$connector.expandItems=r(function(d){let h=Array.from(i.expandedItems);d.filter(c=>!i._isExpanded(c)).forEach(c=>h.push(c)),i.expandedItems=h}),i.$connector.collapseItems=r(function(d){let h=Array.from(i.expandedItems);d.forEach(c=>{let p=i._getItemIndexInArray(c,h);p>=0&&h.splice(p,1)}),i.expandedItems=h,d.forEach(c=>i.$connector.removeFromQueue(c))}),i.$connector.removeFromQueue=r(function(d){let h=i.getItemId(d);delete a[h],i.$connector.removeFromArray(_,c=>c.itemkey===h),i.$connector.removeFromArray(u,c=>c.parentKey===h)}),i.$connector.removeFromArray=r(function(d,h){if(d.length)for(let c=d.length-1;c--;)h(d[c])&&d.splice(c,1)}),i.$connector.confirmParent=r(function(d,h,c){if(!a[h])return;o[h]&&(o[h].size=c);let p=Object.getOwnPropertyNames(a[h]);for(let v=0;v<p.length;v++){let k=p[v],z=A[h]||[0,0];const U=a[h][k];if(o[h]&&o[h][k]||k<z[0]||k>z[1]){delete a[h][k];let B=o[h][k]||new Array(c);U(B,c)}else U&&c===0&&(delete a[h][k],U([],c))}i.$server.confirmParentUpdate(d,h),i.loading||i.__updateVisibleRows()}),i.$connector.confirm=r(function(d){let h=Object.getOwnPropertyNames(s);for(let c=0;c<h.length;c++){let p=h[c],v=A[b]||[0,0];const k=i.size?Math.ceil(i.size/i.pageSize)-1:0,z=Math.min(v[1],k),U=s[p];o[b]&&o[b][p]||p<v[0]||+p>z?(delete s[p],o[b][p]?U(o[b][p]):(U(new Array(i.pageSize)),i.requestContentUpdate()),i._debounceIncreasePool&&i._debounceIncreasePool.flush()):U&&i.size===0&&(delete s[p],U([]))}i.$server.confirmUpdate(d)}),i.$connector.ensureHierarchy=r(function(){for(let d in o)d!==b&&delete o[d];q(A),i._cache.itemCaches={},i._cache.itemkeyCaches={},pe()}),i.$connector.setSelectionMode=r(function(d){if((typeof d=="string"||d instanceof String)&&C.indexOf(d)>=0)I=d,x={},i.$connector.updateMultiSelectable();else throw"Attempted to set an invalid selection mode"}),i.$connector.updateMultiSelectable=r(function(){!i.$||(I===C[0]?i.$.table.setAttribute("aria-multiselectable",!1):I===C[1]?i.$.table.removeAttribute("aria-multiselectable"):i.$.table.setAttribute("aria-multiselectable",!0))}),i._createPropertyObserver("isAttached",()=>i.$connector.updateMultiSelectable()),i.$connector.setVerticalScrollingEnabled=r(function(d){$(i.$.table,d)});const $=function(d,h){d.style.overflowY=h?"":"hidden",d.removeEventListener("wheel",d.__wheelListener),!h&&d.addEventListener("wheel",d.__wheelListener=r(c=>{c.deltaX?Object.defineProperty(c,"deltaY",{value:0}):c.stopImmediatePropagation()}))},Z=function(d){const h=d.detail.sourceEvent||d,c=i.getEventContext(h),p=c.item&&c.item.key,v=c.column&&c.column.id;i.$server.updateContextMenuTargetItem(p,v)};i.addEventListener("vaadin-context-menu-before-open",r(function(d){Z(i.$contextMenuTargetConnector.openEvent)})),i.getContextMenuBeforeOpenDetail=r(function(d){const h=d.detail.sourceEvent||d,c=i.getEventContext(h);return{key:c.item&&c.item.key||""}}),i.addEventListener("click",r(d=>L(d,"item-click"))),i.addEventListener("dblclick",r(d=>L(d,"item-double-click"))),i.addEventListener("column-resize",r(d=>{i._getColumnsInOrder().filter(c=>!c.hidden).forEach(c=>{c.dispatchEvent(new CustomEvent("column-drag-resize"))}),i.dispatchEvent(new CustomEvent("column-drag-resize",{detail:{resizedColumnKey:d.detail.resizedColumn._flowId}}))})),i.addEventListener("column-reorder",r(d=>{const h=i._columnTree.slice(0).pop().filter(c=>c._flowId).sort((c,p)=>c._order-p._order).map(c=>c._flowId);i.dispatchEvent(new CustomEvent("column-reorder-all-columns",{detail:{columns:h}}))})),i.addEventListener("cell-focus",r(d=>{const h=i.getEventContext(d);["header","body","footer"].indexOf(h.section)!==-1&&i.dispatchEvent(new CustomEvent("grid-cell-focus",{detail:{itemKey:h.item?h.item.key:null,internalColumnId:h.column?h.column._flowId:null,section:h.section}}))}));function L(d,h){const c=d.target,p=i.getEventContext(d),v=p.section;p.item&&!ti(c)&&v!=="details"&&(d.itemKey=p.item.key,p.column&&(d.internalColumnId=p.column._flowId),i.dispatchEvent(new CustomEvent(h,{detail:d})))}i.cellClassNameGenerator=r(function(d,h){const c=h.item.style;if(!!c)return(c.row||"")+" "+(d&&c[d._flowId]||"")}),i.dropFilter=r(d=>!d.item.dropDisabled),i.dragFilter=r(d=>!d.item.dragDisabled),i.addEventListener("grid-dragstart",r(d=>{i._isSelected(d.detail.draggedItems[0])?(i.__selectionDragData?Object.keys(i.__selectionDragData).forEach(h=>{d.detail.setDragData(h,i.__selectionDragData[h])}):(i.__dragDataTypes||[]).forEach(h=>{d.detail.setDragData(h,d.detail.draggedItems.map(c=>c.dragData[h]).join(`
`))}),i.__selectionDraggedItemsCount>1&&d.detail.setDraggedItemsCount(i.__selectionDraggedItemsCount)):(i.__dragDataTypes||[]).forEach(h=>{d.detail.setDragData(h,d.detail.draggedItems[0].dragData[h])})}))})(e)}})();window.Vaadin.Flow.ironListConnector={initLazy:function(r){if(r.$connector)return;const t=20;let e=[0,0];r.$connector={},r.$connector.placeholderItem={__placeholder:!0};const i=function(){let n=r._virtualStart,l=r._virtualEnd,u=Math.max(0,n-t),m=Math.min(l+t,r.items.length);if(e[0]!=u||e[1]!=m){e=[u,m];const _=1+m-u;r.$server.setRequestedRange(u,_)}};let s;const a=function(){s=_e.debounce(s,Re.after(10),i)},o=r._assignModels;r._assignModels=function(){const n=[],l=r._virtualStart,u=Math.min(r.items.length,r._physicalCount);for(let m=0;m<u;m++)r.items[l+m]===void 0&&(n.push(m),r.items[l+m]=r.$connector.placeholderItem);o.apply(r,arguments);for(let m=0;m<n.length;m++)delete r.items[l+n[m]];a()},r.items=[],r.$connector.set=function(n,l){for(let u=0;u<l.length;u++){const m=n+u;r.items[m]=l[u]}r._render()},r.$connector.updateData=function(n){const l=r.items,u={};let m=n.length;for(let _=0;_<n.length;_++){const g=n[_];u[g.key]=g}for(let _=0;_<l.length;_++){const g=l[_],T=u[g.key];if(T&&(r.items[_]=T,r.notifyPath("items."+_),m--,m==0))break}},r.$connector.clear=function(n,l){for(let u=0;u<l;u++){const m=n+u;delete r.items[m],r.notifyPath("items."+m)}},r.$connector.updateSize=function(n){const l=n-r.items.length;if(l>0)r.items.length=n,r.notifySplices("items",[{index:n-l,removed:[],addedCount:l,object:r.items,type:"splice"}]);else if(l<0){const u=r.items.slice(n,r.items.length);r.items.splice(n),r.notifySplices("items",[{index:n,removed:u,addedCount:0,object:r.items,type:"splice"}])}},r.$connector.setPlaceholderItem=function(n){n||(n={}),n.__placeholder=!0,r.$connector.placeholderItem=n}}};const ls=document.createElement("template");ls.innerHTML=`<style>
/* Fixes zero width in flex layouts */
iron-list {
  flex: auto;
  align-self: stretch;
}
</style>`;document.head.appendChild(ls.content);const bt=window;bt.Vaadin=bt.Vaadin||{};bt.Vaadin.setLitRenderer=(r,t,e,i,s,a)=>{const o=Function(`
    "use strict";

    const [render, html, returnChannel] = arguments;

    return (root, {item, index}, itemKey) => {
      ${s.map(l=>`
          const ${l} = (...args) => {
            if (itemKey !== undefined) {
              returnChannel('${l}', itemKey, args[0] instanceof Event ? [] : [...args]);
            }
          }`).join("")}

      render(html\`${e}\`, root)
    }
  `)(Dr,Ks,i),n=(l,u,{index:m,item:_})=>{l.__litRenderer!==n&&(l.innerHTML="",delete l._$litPart$,l.__litRenderer=n);const g={};for(const T in _)T.startsWith(a)&&(g[T.replace(a,"")]=_[T]);o(l,{index:m,item:g},_.key)};n.__rendererId=a,r[t]=n};bt.Vaadin.unsetLitRenderer=(r,t,e)=>{var i;((i=r[t])==null?void 0:i.__rendererId)===e&&(r[t]=void 0)};(function(){const r=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Message List")};window.Vaadin.Flow.messageListConnector={setItems:(t,e,i)=>r(function(s,a,o){const n=new Intl.DateTimeFormat(o,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"});s.items=a.map(l=>l.time?Object.assign(l,{time:n.format(new Date(l.time))}):l)})(t,e,i)}})();(function(){const r=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Select")};window.Vaadin.Flow.selectConnector={initLazy:t=>r(function(e){const i=r(function(){for(let s=0;s<e.childElementCount;s++){const a=e.children[s];if(a.tagName.toUpperCase()==="VAADIN-SELECT-LIST-BOX")return a}});e.$connector||(e.$connector={},e.renderer=r(function(s){const a=i();a&&(s.firstChild&&s.removeChild(s.firstChild),s.appendChild(a))}))})(t)}})();(function(){const r=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Time Picker")};function t(e,i,s=0){e()?i():setTimeout(()=>t(e,i,200),s)}window.Vaadin.Flow.timepickerConnector={initLazy:e=>r(function(i){if(i.$connector)return;i.$connector={};const s=function(f,A){const b=A.toLocaleTimeString(f),C=/[^\d\u0660-\u0669]+$/g;let x=b.match(C);return x||(x=b.match(/^[^\d\u0660-\u0669]+/g)),x&&(x=x[0].trim()),x},a=new Date("August 19, 1975 23:15:30"),o=new Date("August 19, 1975 05:15:30"),n=function(f){return s(f,a)},l=function(f){return s(f,o)},u={"\\u0660":"0","\\u0661":"1","\\u0662":"2","\\u0663":"3","\\u0664":"4","\\u0665":"5","\\u0666":"6","\\u0667":"7","\\u0668":"8","\\u0669":"9"},m=function(f){return f.replace(/[\u0660-\u0669]/g,function(A){const b="\\u0"+A.charCodeAt(0).toString(16);return u[b]})},_=function(f){return parseInt(m(f))},g=function(f){return f=m(f),f.length===1?f+="00":f.length===2&&(f+="0"),parseInt(f)},T=/[[\.][\d\u0660-\u0669]{1,3}$/;i.$connector.setLocale=r(function(f){let A;i.value&&i.value!==""&&(A=i.i18n.parseTime(i.value));try{a.toLocaleTimeString(f)}catch{throw f="en-US",new Error("vaadin-time-picker: The locale "+f+" is not supported, falling back to default locale setting(en-US).")}const b=n(f),C=l(f);let x=a.toLocaleTimeString(f);b&&x.startsWith(b)&&(x=x.replace(b,""));const I=x.match(/[^\u0660-\u0669\s\d]/),M=new RegExp("([\\d\\u0660-\\u0669]){1,2}(?:"+I+")?","g"),R=function(){return i.step&&i.step<60},Q=function(){return i.step&&i.step<1};let X,re;const ge=function(){return(!re||X!==i.step)&&(re={hour:"numeric",minute:"numeric",second:R()?"numeric":void 0},X=i.step),re},pe=function(P,q){if(Q()){let $=P;if(P.endsWith(C)?$=P.replace(" "+C,""):P.endsWith(b)&&($=P.replace(" "+b,"")),q){let Z=q<10?"0":"";Z+=q<100?"0":"",Z+=q,$+="."+Z}else $+=".000";return P.endsWith(C)?$=$+" "+C:P.endsWith(b)&&($=$+" "+b),$}return P};let ne,ae;i.i18n={formatTime:r(function(P){if(P){let q=new Date;q.setHours(P.hours),q.setMinutes(P.minutes),q.setSeconds(P.seconds!==void 0?P.seconds:0);let $=q.toLocaleTimeString(f,ge());return $=pe($,P.milliseconds),$}}),parseTime:r(function(P){if(P&&P===ne&&ae)return ae;if(P){const q=P.search(b),$=P.search(C);let Z=P.replace(C,"").replace(b,"").trim();M.lastIndex=0;let L=M.exec(Z);if(L){L=_(L[0].replace(I,"")),q!==$&&(L===12&&$!==-1?L=0:L+=q!==-1&&L!==12?12:0);const d=M.exec(Z),h=d&&M.exec(Z);let c=h&&Q()&&T.exec(Z);return c&&c.index<=h.index&&(c=void 0),ae=L!==void 0&&{hours:L,minutes:d?_(d[0].replace(I,"")):0,seconds:h?_(h[0].replace(I,"")):0,milliseconds:d&&h&&c?g(c[0].replace(".","")):0},ne=P,ae}}})},A&&t(()=>i.$,()=>{const P=i.i18n.formatTime(A);i.inputElement.value!==P&&(i.inputElement.value=P,i.$.comboBox.value=P)})})})(e)}})();(function(){let r;customElements.whenDefined("vaadin-text-field").then(()=>{class t extends customElements.get("vaadin-text-field"){static get template(){return r||(r=super.template.cloneNode(!0),r.innerHTML+=`<style>
                  :host {
                    width: 8em;
                  }

                  :host([dir="rtl"]) [part="input-field"] {
                    direction: ltr;
                  }

                  :host([dir="rtl"]) [part="input-field"] ::slotted(input) {
                    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em) !important;
                  }
            </style>`),r}static get is(){return"vaadin-big-decimal-field"}static get properties(){return{_decimalSeparator:{type:String,value:".",observer:"__decimalSeparatorChanged"}}}ready(){super.ready(),this.inputElement.setAttribute("inputmode","decimal")}__decimalSeparatorChanged(i,s){this._enabledCharPattern="[\\d-+"+i+"]",this.value&&s&&(this.value=this.value.split(s).join(i))}}customElements.define(t.is,t)})})();{class r extends Wt{static get is(){return"vaadin-grid-flow-selection-column"}static get properties(){return{autoWidth:{type:Boolean,value:!0},width:{type:String,value:"56px"},flexGrow:{type:Number,value:0},selectAll:{type:Boolean,value:!1,notify:!0},indeterminate:{type:Boolean,value:!1,notify:!0},selectAllHidden:Boolean}}constructor(){super(),this._boundOnSelectEvent=this._onSelectEvent.bind(this),this._boundOnDeselectEvent=this._onDeselectEvent.bind(this)}static get observers(){return["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, selectAll, indeterminate, selectAllHidden)"]}connectedCallback(){super.connectedCallback(),this._grid&&(this._grid.addEventListener("select",this._boundOnSelectEvent),this._grid.addEventListener("deselect",this._boundOnDeselectEvent))}disconnectedCallback(){super.disconnectedCallback(),this._grid&&(this._grid.removeEventListener("select",this._boundOnSelectEvent),this._grid.removeEventListener("deselect",this._boundOnDeselectEvent))}_defaultHeaderRenderer(e,i){let s=e.firstElementChild;s||(s=document.createElement("vaadin-checkbox"),s.id="selectAllCheckbox",s.setAttribute("aria-label","Select All"),s.classList.add("vaadin-grid-select-all-checkbox"),s.addEventListener("click",this._onSelectAllClick.bind(this)),e.appendChild(s));const a=this.selectAll;s.hidden=this.selectAllHidden,s.checked=a,s.indeterminate=this.indeterminate}_defaultRenderer(e,i,{item:s,selected:a}){let o=e.firstElementChild;o||(o=document.createElement("vaadin-checkbox"),o.setAttribute("aria-label","Select Row"),o.addEventListener("click",this._onSelectClick.bind(this)),e.appendChild(o)),o.__item=s,o.checked=a}_onSelectClick(e){e.currentTarget.checked?this._grid.$connector.doDeselection([e.currentTarget.__item],!0):this._grid.$connector.doSelection([e.currentTarget.__item],!0)}_onSelectAllClick(e){if(e.preventDefault(),this._grid.hasAttribute("disabled")){e.currentTarget.checked=!e.currentTarget.checked;return}this.selectAll?this.$server.deselectAll():this.$server.selectAll()}_onSelectEvent(e){}_onDeselectEvent(e){e.detail.userOriginated&&(this.selectAll=!1)}}customElements.define(r.is,r),Vaadin.GridFlowSelectionColumnElement=r}window.Vaadin.Flow.virtualListConnector={initLazy:function(r){if(r.$connector)return;const t=20;let e=[0,0];r.$connector={},r.$connector.placeholderItem={__placeholder:!0};const i=function(){const a=[...r.children].filter(m=>"__virtualListIndex"in m).map(m=>m.__virtualListIndex),o=Math.min(...a),n=Math.max(...a);let l=Math.max(0,o-t),u=Math.min(n+t,r.items.length);if(e[0]!=l||e[1]!=u){e=[l,u];const m=1+u-l;r.$server.setRequestedRange(l,m)}},s=function(){r.__requestDebounce=_e.debounce(r.__requestDebounce,Re.after(50),i)};requestAnimationFrame(()=>i),r.patchVirtualListRenderer=function(){if(!r.renderer||r.renderer.__virtualListConnectorPatched)return;const a=r.renderer,o=(n,l,u)=>{n.__virtualListIndex=u.index,u.item===void 0?a.call(l,n,l,lt(be({},u),{item:l.$connector.placeholderItem})):a.call(l,n,l,u),s()};o.__virtualListConnectorPatched=!0,o.__rendererId=a.__rendererId,r.renderer=o},r._createPropertyObserver("renderer","patchVirtualListRenderer",!0),r.patchVirtualListRenderer(),r.items=[],r.$connector.set=function(a,o){r.items.splice(a,o.length,...o),r.items=[...r.items]},r.$connector.clear=function(a,o){const n=Math.min(o,r.items.length-a);r.$connector.set(a,[...Array(n)])},r.$connector.updateData=function(a){const o=a.reduce((n,l)=>(n[l.key]=l,n),{});r.items=r.items.map(n=>o[n.key]||n)},r.$connector.updateSize=function(a){const o=a-r.items.length;o>0?r.items=[...r.items,...Array(o)]:o<0&&(r.items=r.items.slice(0,a))},r.$connector.setPlaceholderItem=function(a={}){a.__placeholder=!0,r.$connector.placeholderItem=a}}};y("vaadin-form-item",w`
    :host {
      --vaadin-form-item-row-spacing: 0;
    }

    /* font-weight, margin-bottom, transition and line-height same as for part label in text-field */
    [part='label'] {
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
      margin-top: var(--lumo-space-m);
      margin-left: calc(var(--lumo-border-radius-m) / 4);
      margin-bottom: var(--lumo-space-xs);
      transition: color 0.4s;
      line-height: 1.333;
    }

    [part='required-indicator']::after {
      content: var(--lumo-required-field-indicator, '•');
      transition: opacity 0.2s;
      opacity: 0;
      color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
      position: relative;
      width: 1em;
      text-align: center;
    }

    :host([required]) [part='required-indicator']::after {
      opacity: 1;
    }

    :host([invalid]) [part='required-indicator']::after {
      color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
    }
  `,{moduleId:"lumo-form-item"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class tt extends D(S){static get template(){return E`
      <style>
        :host {
          display: inline-flex;
          flex-direction: row;
          align-items: baseline;
          margin: calc(0.5 * var(--vaadin-form-item-row-spacing, 1em)) 0;
        }

        :host([label-position='top']) {
          flex-direction: column;
          align-items: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        #label {
          width: var(--vaadin-form-item-label-width, 8em);
          flex: 0 0 auto;
        }

        :host([label-position='top']) #label {
          width: auto;
        }

        #spacing {
          width: var(--vaadin-form-item-label-spacing, 1em);
          flex: 0 0 auto;
        }

        #content {
          flex: 1 1 auto;
        }

        #content ::slotted(.full-width) {
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
        }
      </style>
      <div id="label" part="label" on-click="__onLabelClick">
        <slot name="label" id="labelSlot" on-slotchange="__onLabelSlotChange"></slot>
        <span part="required-indicator" aria-hidden="true"></span>
      </div>
      <div id="spacing"></div>
      <div id="content">
        <slot id="contentSlot" on-slotchange="__onContentSlotChange"></slot>
      </div>
    `}static get is(){return"vaadin-form-item"}constructor(){super(),this.__updateInvalidState=this.__updateInvalidState.bind(this),this.__fieldNodeObserver=new MutationObserver(()=>this.__updateRequiredState(this.__fieldNode.required)),this.__labelNode=null,this.__fieldNode=null;const t=tt._uniqueLabelId=1+tt._uniqueLabelId||0;this.__labelId=`label-${this.localName}-${t}`}_getFieldAriaTarget(t){return t.ariaTarget||t}__linkLabelToField(t){Bs(this._getFieldAriaTarget(t),"aria-labelledby",this.__labelId)}__unlinkLabelFromField(t){Vs(this._getFieldAriaTarget(t),"aria-labelledby",this.__labelId)}__onLabelClick(){const t=this.__fieldNode;t&&(t.focus(),t.click())}__getValidateFunction(t){return t.validate||t.checkValidity}__onLabelSlotChange(){this.__labelNode&&(this.__labelNode.id="",this.__labelNode=null,this.__fieldNode&&this.__unlinkLabelFromField(this.__fieldNode));const t=this.$.labelSlot.assignedElements()[0];t&&(this.__labelNode=t,this.__labelNode.id=this.__labelId,this.__fieldNode&&this.__linkLabelToField(this.__fieldNode))}__onContentSlotChange(){this.__fieldNode&&(this.__unlinkLabelFromField(this.__fieldNode),this.__updateRequiredState(!1),this.__fieldNodeObserver.disconnect(),this.__fieldNode=null);const t=this.$.contentSlot.assignedElements();t.length>1&&console.warn(`WARNING: Since Vaadin 23, placing multiple fields directly to a <vaadin-form-item> is deprecated.
Please wrap fields with a <vaadin-custom-field> instead.`);const e=t.find(i=>!!this.__getValidateFunction(i));e&&(this.__fieldNode=e,this.__updateRequiredState(this.__fieldNode.required),this.__fieldNodeObserver.observe(this.__fieldNode,{attributes:!0,attributeFilter:["required"]}),this.__labelNode&&this.__linkLabelToField(this.__fieldNode))}__updateRequiredState(t){t?(this.setAttribute("required",""),this.__fieldNode.addEventListener("blur",this.__updateInvalidState),this.__fieldNode.addEventListener("change",this.__updateInvalidState)):(this.removeAttribute("invalid"),this.removeAttribute("required"),this.__fieldNode.removeEventListener("blur",this.__updateInvalidState),this.__fieldNode.removeEventListener("change",this.__updateInvalidState))}__updateInvalidState(){const t=this.__getValidateFunction(this.__fieldNode).call(this.__fieldNode);this.toggleAttribute("invalid",t===!1)}}customElements.define(tt.is,tt);y("vaadin-form-layout",w`
    :host {
      --vaadin-form-layout-column-spacing: var(--lumo-space-l);
    }
  `,{moduleId:"lumo-form-layout"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Hi extends Et(O(D(S))){static get template(){return E`
      <style>
        :host {
          display: block;
          max-width: 100%;
          animation: 1ms vaadin-form-layout-appear;
          /* CSS API for host */
          --vaadin-form-item-label-width: 8em;
          --vaadin-form-item-label-spacing: 1em;
          --vaadin-form-item-row-spacing: 1em;
          --vaadin-form-layout-column-spacing: 2em; /* (default) */
          align-self: stretch;
        }

        @keyframes vaadin-form-layout-appear {
          to {
            opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */
          }
        }

        :host([hidden]) {
          display: none !important;
        }

        #layout {
          display: flex;

          align-items: baseline; /* default \`stretch\` is not appropriate */

          flex-wrap: wrap; /* the items should wrap */
        }

        #layout ::slotted(*) {
          /* Items should neither grow nor shrink. */
          flex-grow: 0;
          flex-shrink: 0;

          /* Margins make spacing between the columns */
          margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));
          margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));
        }

        #layout ::slotted(br) {
          display: none;
        }
      </style>
      <div id="layout">
        <slot id="slot"></slot>
      </div>
    `}static get is(){return"vaadin-form-layout"}static get properties(){return{responsiveSteps:{type:Array,value:function(){return[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}]},observer:"_responsiveStepsChanged"},_columnCount:{type:Number},_labelsOnTop:{type:Boolean}}}static get observers(){return["_invokeUpdateLayout(_columnCount, _labelsOnTop)"]}ready(){this._styleElement=document.createElement("style"),this.appendChild(this._styleElement),this._styleElement.textContent=" ",super.ready(),this.addEventListener("animationend",this.__onAnimationEnd)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>this._selectResponsiveStep()),requestAnimationFrame(()=>this._updateLayout()),this._observeChildrenColspanChange()}disconnectedCallback(){super.disconnectedCallback(),this.__mutationObserver.disconnect(),this.__childObserver.disconnect()}_observeChildrenColspanChange(){const t={attributes:!0};this.__mutationObserver=new MutationObserver(e=>{e.forEach(i=>{i.type==="attributes"&&(i.attributeName==="colspan"||i.attributeName==="hidden")&&this._updateLayout()})}),this.__childObserver=new J(this,e=>{const i=this._getObservableNodes(e.addedNodes),s=this._getObservableNodes(e.removedNodes);i.forEach(a=>{this.__mutationObserver.observe(a,t)}),(i.length>0||s.length>0)&&this._updateLayout()})}_getObservableNodes(t){const e=["template","style","dom-repeat","dom-if"];return Array.from(t).filter(i=>i.nodeType===Node.ELEMENT_NODE&&e.indexOf(i.localName.toLowerCase())===-1)}_naturalNumberOrOne(t){return typeof t=="number"&&t>=1&&t<1/0?Math.floor(t):1}_isValidCSSLength(t){return t==="inherit"||t==="normal"?!1:(this._styleElement.firstChild.nodeValue=`#styleElement { word-spacing: ${t}; }`,this._styleElement.sheet?["",null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue("word-spacing"))<0:!0)}_responsiveStepsChanged(t,e){try{if(!Array.isArray(t))throw new Error('Invalid "responsiveSteps" type, an Array is required.');if(t.length<1)throw new Error('Invalid empty "responsiveSteps" array, at least one item is required.');t.forEach(i=>{if(this._naturalNumberOrOne(i.columns)!==i.columns)throw new Error(`Invalid 'columns' value of ${i.columns}, a natural number is required.`);if(i.minWidth!==void 0&&!this._isValidCSSLength(i.minWidth))throw new Error(`Invalid 'minWidth' value of ${i.minWidth}, a valid CSS length required.`);if(i.labelsPosition!==void 0&&["aside","top"].indexOf(i.labelsPosition)===-1)throw new Error(`Invalid 'labelsPosition' value of ${i.labelsPosition}, 'aside' or 'top' string is required.`)})}catch(i){e&&e!==t?(console.warn(`${i.message} Using previously set 'responsiveSteps' instead.`),this.responsiveSteps=e):(console.warn(`${i.message} Using default 'responsiveSteps' instead.`),this.responsiveSteps=[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}])}this._selectResponsiveStep()}__onAnimationEnd(t){t.animationName.indexOf("vaadin-form-layout-appear")===0&&this._selectResponsiveStep()}_selectResponsiveStep(){let t;const e="background-position";this.responsiveSteps.forEach(i=>{this.$.layout.style.setProperty(e,i.minWidth),parseFloat(getComputedStyle(this.$.layout).getPropertyValue(e))<=this.offsetWidth&&(t=i)}),this.$.layout.style.removeProperty(e),t&&(this._columnCount=t.columns,this._labelsOnTop=t.labelsPosition==="top")}_invokeUpdateLayout(){this._updateLayout()}updateStyles(t={}){console.warn("WARNING: Since Vaadin 23, updateStyles() is deprecated. Use the native element.style.setProperty API to set custom CSS property values."),Object.entries(t).forEach(([e,i])=>{this.style.setProperty(e,i)}),this._updateLayout()}_updateLayout(){const t=getComputedStyle(this),e=t.getPropertyValue("--vaadin-form-layout-column-spacing"),i=t.direction,s="margin-"+(i==="ltr"?"left":"right"),a="margin-"+(i==="ltr"?"right":"left"),o=this.offsetWidth;let n=0;Array.from(this.children).filter(l=>l.localName==="br"||getComputedStyle(l).display!=="none").forEach((l,u,m)=>{if(l.localName==="br"){n=0;return}let _;_=this._naturalNumberOrOne(parseFloat(l.getAttribute("colspan"))),_=Math.min(_,this._columnCount);const g=_/this._columnCount;l.style.width=`calc(${g*99.9}% - ${1-g} * ${e})`,n+_>this._columnCount&&(n=0),n===0?l.style.setProperty(s,"0px"):l.style.removeProperty(s);const T=u+1,f=T<m.length&&m[T].localName==="br";if(n+_===this._columnCount)l.style.setProperty(a,"0px");else if(f){const A=(this._columnCount-n-_)/this._columnCount;l.style.setProperty(a,`calc(${A*o}px + ${A} * ${e})`)}else l.style.removeProperty(a);n=(n+_)%this._columnCount,l.localName==="vaadin-form-item"&&(this._labelsOnTop?l.setAttribute("label-position","top"):l.removeAttribute("label-position"))})}_onResize(){this._selectResponsiveStep()}}customElements.define(Hi.is,Hi);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Wi extends as(S){static get is(){return"vaadin-grid-column-group"}static get properties(){return{_childColumns:{value:function(){return this._getChildColumns(this)}},flexGrow:{type:Number,readOnly:!0},width:{type:String,readOnly:!0},_visibleChildColumns:Array,_colSpan:Number,_rootColumns:Array}}static get observers(){return["_updateVisibleChildColumns(_childColumns)","_childColumnsChanged(_childColumns)","_groupFrozenChanged(frozen, _rootColumns)","_groupHiddenChanged(hidden, _rootColumns)","_visibleChildColumnsChanged(_visibleChildColumns)","_colSpanChanged(_colSpan, _headerCell, _footerCell)","_groupOrderChanged(_order, _rootColumns)","_groupReorderStatusChanged(_reorderStatus, _rootColumns)","_groupResizableChanged(resizable, _rootColumns)"]}connectedCallback(){super.connectedCallback(),this._addNodeObserver(),this._updateFlexAndWidth()}disconnectedCallback(){super.disconnectedCallback(),this._observer&&this._observer.disconnect()}_columnPropChanged(t,e){t==="hidden"&&(this._preventHiddenCascade=!0,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenCascade=!1),/flexGrow|width|hidden|_childColumns/.test(t)&&this._updateFlexAndWidth(),t==="frozen"&&(this.frozen=this.frozen||e),t==="lastFrozen"&&(this._lastFrozen=this._lastFrozen||e)}_groupOrderChanged(t,e){if(e){const i=e.slice(0);if(!t){i.forEach(n=>n._order=0);return}const s=/(0+)$/.exec(t).pop().length,a=~~(Math.log(e.length)/Math.LN10)+1,o=10**(s-a);i[0]&&i[0]._order&&i.sort((n,l)=>n._order-l._order),os(i,o,t)}}_groupReorderStatusChanged(t,e){t===void 0||e===void 0||e.forEach(i=>i._reorderStatus=t)}_groupResizableChanged(t,e){t===void 0||e===void 0||e.forEach(i=>i.resizable=t)}_updateVisibleChildColumns(t){this._visibleChildColumns=Array.prototype.filter.call(t,e=>!e.hidden)}_childColumnsChanged(t){!this._autoHidden&&this.hidden&&(Array.prototype.forEach.call(t,e=>e.hidden=!0),this._updateVisibleChildColumns(t))}_updateFlexAndWidth(){!this._visibleChildColumns||(this._visibleChildColumns.length?this._setWidth("calc("+Array.prototype.reduce.call(this._visibleChildColumns,(t,e)=>t+=" + "+(e.width||"0px").replace("calc",""),"").substring(3)+")"):this._setWidth("0px"),this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns,(t,e)=>t+e.flexGrow,0)))}_groupFrozenChanged(t,e){e===void 0||t===void 0||t!==!1&&Array.from(e).forEach(i=>i.frozen=t)}_groupHiddenChanged(t,e){e&&!this._preventHiddenCascade&&(this._ignoreVisibleChildColumns=!0,e.forEach(i=>i.hidden=t),this._ignoreVisibleChildColumns=!1),this._columnPropChanged("hidden")}_visibleChildColumnsChanged(t){this._colSpan=t.length,this._ignoreVisibleChildColumns||(t.length===0?this._autoHidden=this.hidden=!0:this.hidden&&this._autoHidden&&(this._autoHidden=this.hidden=!1))}_colSpanChanged(t,e,i){e&&(e.setAttribute("colspan",t),this._grid&&this._grid._a11yUpdateCellColspan(e,t)),i&&(i.setAttribute("colspan",t),this._grid&&this._grid._a11yUpdateCellColspan(i,t))}_getChildColumns(t){return J.getFlattenedNodes(t).filter(this._isColumnElement)}_addNodeObserver(){this._observer=new J(this,t=>{(t.addedNodes.filter(this._isColumnElement).length>0||t.removedNodes.filter(this._isColumnElement).length>0)&&(this._preventHiddenCascade=!0,this._rootColumns=this._getChildColumns(this),this._childColumns=this._rootColumns,this._preventHiddenCascade=!1,Ze.run(()=>{this._grid&&this._grid._updateColumnTree&&this._grid._updateColumnTree()}))}),this._observer.flush()}_isColumnElement(t){return t.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(t.localName)}}customElements.define(Wi.is,Wi);y("vaadin-grid-sorter",w`
    :host {
      justify-content: flex-start;
      align-items: baseline;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: var(--lumo-clickable-cursor);
    }

    [part='content'] {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [part='indicators'] {
      margin-left: var(--lumo-space-s);
    }

    [part='indicators']::before {
      transform: scale(0.8);
    }

    :host(:not([direction]):not(:hover)) [part='indicators'] {
      color: var(--lumo-tertiary-text-color);
    }

    :host([direction]) {
      color: var(--lumo-primary-text-color);
    }

    [part='order'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='indicators'] {
      margin-right: var(--lumo-space-s);
      margin-left: 0;
    }
  `,{moduleId:"lumo-grid-sorter"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ds=document.createElement("template");ds.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-grid-sorter-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(ds.content);class qi extends D(nt(S)){static get template(){return E`
      <style>
        :host {
          display: inline-flex;
          cursor: pointer;
          max-width: 100%;
        }

        [part='content'] {
          flex: 1 1 auto;
        }

        [part='indicators'] {
          position: relative;
          align-self: center;
          flex: none;
        }

        [part='order'] {
          display: inline;
          vertical-align: super;
        }

        [part='indicators']::before {
          font-family: 'vaadin-grid-sorter-icons';
          display: inline-block;
        }

        :host(:not([direction])) [part='indicators']::before {
          content: '\\e901';
        }

        :host([direction='asc']) [part='indicators']::before {
          content: '\\e900';
        }

        :host([direction='desc']) [part='indicators']::before {
          content: '\\e902';
        }
      </style>

      <div part="content">
        <slot></slot>
      </div>
      <div part="indicators">
        <span part="order">[[_getDisplayOrder(_order)]]</span>
      </div>
    `}static get is(){return"vaadin-grid-sorter"}static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null},_order:{type:Number,value:null},_isConnected:{type:Boolean,observer:"__isConnectedChanged"}}}static get observers(){return["_pathOrDirectionChanged(path, direction)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1}_pathOrDirectionChanged(){this.__dispatchSorterChangedEvenIfPossible()}__isConnectedChanged(t,e){e!==!1&&this.__dispatchSorterChangedEvenIfPossible()}__dispatchSorterChangedEvenIfPossible(){this.path===void 0||this.direction===void 0||!this._isConnected||this.dispatchEvent(new CustomEvent("sorter-changed",{bubbles:!0,composed:!0}))}_getDisplayOrder(t){return t===null?"":t+1}_onClick(t){const e=this.getRootNode().activeElement;this!==e&&this.contains(e)||(t.preventDefault(),this.direction==="asc"?this.direction="desc":this.direction==="desc"?this.direction=null:this.direction="asc")}}customElements.define(qi.is,qi);y("vaadin-grid-tree-toggle",w`
    :host {
      --vaadin-grid-tree-toggle-level-offset: 2em;
      align-items: center;
      vertical-align: middle;
      margin-left: calc(var(--lumo-space-s) * -1);
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([leaf])) {
      cursor: default;
    }

    [part='toggle'] {
      display: inline-block;
      font-size: 1.5em;
      line-height: 1;
      width: 1em;
      height: 1em;
      text-align: center;
      color: var(--lumo-contrast-50pct);
      cursor: var(--lumo-clickable-cursor);
      /* Increase touch target area */
      padding: calc(1em / 3);
      margin: calc(1em / -3);
    }

    :host(:not([dir='rtl'])) [part='toggle'] {
      margin-right: 0;
    }

    @media (hover: hover) {
      :host(:hover) [part='toggle'] {
        color: var(--lumo-contrast-80pct);
      }
    }

    [part='toggle']::before {
      font-family: 'lumo-icons';
      display: inline-block;
      height: 100%;
    }

    :host(:not([expanded])) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
    }

    :host([expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
      transform: rotate(90deg);
    }

    /* Experimental support for hierarchy connectors, using an unsupported selector */
    :host([theme~='connectors']) #level-spacer {
      position: relative;
      z-index: -1;
      font-size: 1em;
      height: 1.5em;
    }

    :host([theme~='connectors']) #level-spacer::before {
      display: block;
      content: '';
      margin-top: calc(var(--lumo-space-m) * -1);
      height: calc(var(--lumo-space-m) + 3em);
      background-image: linear-gradient(
        to right,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-size: var(--vaadin-grid-tree-toggle-level-offset) var(--vaadin-grid-tree-toggle-level-offset);
      background-position: calc(var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px) 0;
    }

    /* RTL specific styles */

    :host([dir='rtl']) {
      margin-left: 0;
      margin-right: calc(var(--lumo-space-s) * -1);
    }

    :host([dir='rtl']) [part='toggle'] {
      margin-left: 0;
    }

    :host([dir='rtl'][expanded]) [part='toggle']::before {
      transform: rotate(-90deg);
    }

    :host([dir='rtl'][theme~='connectors']) #level-spacer::before {
      background-image: linear-gradient(
        to left,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-position: calc(100% - (var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px)) 0;
    }

    :host([dir='rtl']:not([expanded])) [part='toggle']::before,
    :host([dir='rtl'][expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-left);
    }
  `,{moduleId:"lumo-grid-tree-toggle"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hs=document.createElement("template");hs.innerHTML=`
  <style>
    @font-face {
      font-family: "vaadin-grid-tree-icons";
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQkAA0AAAAABrwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAECAAAABoAAAAcgHwa6EdERUYAAAPsAAAAHAAAAB4AJwAOT1MvMgAAAZQAAAA/AAAAYA8TBIJjbWFwAAAB8AAAAFUAAAFeGJvXWmdhc3AAAAPkAAAACAAAAAgAAAAQZ2x5ZgAAAlwAAABLAAAAhIrPOhFoZWFkAAABMAAAACsAAAA2DsJI02hoZWEAAAFcAAAAHQAAACQHAgPHaG10eAAAAdQAAAAZAAAAHAxVAgBsb2NhAAACSAAAABIAAAASAIAAVG1heHAAAAF8AAAAGAAAACAACgAFbmFtZQAAAqgAAAECAAACTwflzbdwb3N0AAADrAAAADYAAABZQ7Ajh3icY2BkYGAA4twv3Vfi+W2+MnCzMIDANSOmbGSa2YEZRHEwMIEoAAoiB6sAeJxjYGRgYD7w/wADAwsDCDA7MDAyoAI2AFEEAtIAAAB4nGNgZGBg4GBgZgDRDAxMDGgAAAGbABB4nGNgZp7JOIGBlYGBaSbTGQYGhn4IzfiawZiRkwEVMAqgCTA4MDA+38d84P8BBgdmIAapQZJVYGAEAGc/C54AeJxjYYAAxlAIzQTELAwMBxgZGB0ACy0BYwAAAHicY2BgYGaAYBkGRgYQiADyGMF8FgYbIM3FwMHABISMDArP9/3/+/8/WJXC8z0Q9v8nEp5gHVwMMMAIMo+RDYiZoQJMQIKJARUA7WBhGN4AACFKDtoAAAAAAAAAAAgACAAQABgAJgA0AEIAAHichYvBEYBADAKBVHBjBT4swl9KS2k05o0XHd/yW1hAfBFwCv9sIlJu3nZaNS3PXAaXXHI8Lge7DlzF7C1RgXc7xkK6+gvcD2URmQB4nK2RQWoCMRiFX3RUqtCli65yADModOMBLLgQSqHddRFnQghIAnEUvEA3vUUP0LP0Fj1G+yb8R5iEhO9/ef/7FwFwj28o9EthiVp4hBlehcfUP4Ur8o/wBAv8CU+xVFvhOR7UB7tUdUdlVRJ6HnHWTnhM/V24In8JT5j/KzzFSi2E53hUz7jCcrcIiDDwyKSW1JEct2HdIPH1DFytbUM0PofWdNk5E5oUqb/Q6HHBiVGZpfOXkyUMEj5IyBuNmYZQjBobfsuassvnkKLe1OuBBj0VQ8cRni2xjLWsHaM0jrjx3peYA0/vrdmUYqe9iy7bzrX6eNP7Jh1SijX+AaUVbB8AAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSruZMzlHaB0q4A76kLlwAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKxJigiD6mhFTNowGACmcA/8AAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(hs.content);class Yi extends D(nt(S)){static get template(){return E`
      <style>
        :host {
          display: inline-flex;
          align-items: baseline;
          max-width: 100%;

          /* CSS API for :host */
          --vaadin-grid-tree-toggle-level-offset: 1em;
          --_collapsed-icon: '\\e7be\\00a0';
        }

        :host([dir='rtl']) {
          --_collapsed-icon: '\\e7bd\\00a0';
        }

        :host([hidden]) {
          display: none !important;
        }

        :host(:not([leaf])) {
          cursor: pointer;
        }

        #level-spacer,
        [part='toggle'] {
          flex: none;
        }

        #level-spacer {
          display: inline-block;
          width: calc(var(---level, '0') * var(--vaadin-grid-tree-toggle-level-offset));
        }

        [part='toggle']::before {
          font-family: 'vaadin-grid-tree-icons';
          line-height: 1em; /* make icon font metrics not affect baseline */
        }

        :host(:not([expanded])) [part='toggle']::before {
          content: var(--_collapsed-icon);
        }

        :host([expanded]) [part='toggle']::before {
          content: '\\e7bc\\00a0'; /* icon glyph + single non-breaking space */
        }

        :host([leaf]) [part='toggle'] {
          visibility: hidden;
        }

        slot {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>

      <span id="level-spacer"></span>
      <span part="toggle"></span>
      <slot></slot>
    `}static get is(){return"vaadin-grid-tree-toggle"}static get properties(){return{level:{type:Number,value:0,observer:"_levelChanged"},leaf:{type:Boolean,value:!1,reflectToAttribute:!0},expanded:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0}}}ready(){super.ready(),this.addEventListener("click",t=>this._onClick(t))}_onClick(t){this.leaf||ti(t.target)||(t.preventDefault(),this.expanded=!this.expanded)}_levelChanged(t){const e=Number(t).toString();this.style.setProperty("---level",e)}}customElements.define(Yi.is,Yi);y("vaadin-grid",w`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--lumo-base-color);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: default;
      padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='cell']:focus::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='row'][last][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    [ios] [part~='row'][dragstart] [part~='cell'] {
      background: var(--lumo-primary-color-50pct);
    }

    #scroller:not([ios]) [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content) {
      font-weight: 400;
    }

    [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    [part='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='left']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
    }

    :host([theme~='compact']) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    :host([theme~='compact']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='right']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"});y("vaadin-checkbox",w`
    :host(.vaadin-grid-select-all-checkbox) {
      font-size: var(--lumo-font-size-m);
    }
  `,{moduleId:"vaadin-grid-select-all-checkbox-lumo"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wn=w`
  :host {
    width: 8em;
  }

  :host([has-controls]:not([theme~='align-right'])) ::slotted(input) {
    text-align: center;
  }

  [part$='button'][disabled] {
    opacity: 0.2;
  }

  :host([has-controls]) [part='input-field'] {
    padding: 0;
  }

  [part\$='button'] {
    cursor: pointer;
    font-size: var(--lumo-icon-size-s);
    width: 1.6em;
    height: 1.6em;
  }

  [part\$='button']::before {
    margin-top: 0.3em;
  }

  [part='decrease-button']::before {
    content: var(--lumo-icons-minus);
  }

  [part='increase-button']::before {
    content: var(--lumo-icons-plus);
  }

  /* RTL specific styles */
  :host([dir='rtl']:not([theme~='align-right'])) ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;y("vaadin-number-field",[Se,Er,wn],{moduleId:"lumo-number-field"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-number-field",He,{moduleId:"vaadin-number-field-styles"});class qt extends Sr(Ns(D(O(S)))){static get is(){return"vaadin-number-field"}static get template(){return E`
      <style>
        :host([readonly]) [part$='button'] {
          pointer-events: none;
        }

        [part='decrease-button']::before {
          content: '−';
        }

        [part='increase-button']::before {
          content: '+';
        }

        [part='decrease-button'],
        [part='increase-button'] {
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[theme]]"
        >
          <div
            disabled$="[[!_allowed(-1, value, min, max, step)]]"
            part="decrease-button"
            on-click="_decreaseValue"
            on-touchend="_decreaseButtonTouchend"
            hidden$="[[!hasControls]]"
            aria-hidden="true"
            slot="prefix"
          ></div>
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div
            disabled$="[[!_allowed(1, value, min, max, step)]]"
            part="increase-button"
            on-click="_increaseValue"
            on-touchend="_increaseButtonTouchend"
            hidden$="[[!hasControls]]"
            aria-hidden="true"
            slot="suffix"
          ></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{hasControls:{type:Boolean,value:!1,reflectToAttribute:!0},min:{type:Number,observer:"_minChanged"},max:{type:Number,observer:"_maxChanged"},step:{type:Number,value:1,observer:"_stepChanged"}}}static get constraints(){return[...super.constraints,"min","max","step"]}constructor(){super(),this._setType("number")}get slotStyles(){const t=this.localName;return[`
        ${t} input[type="number"]::-webkit-outer-spin-button,
        ${t} input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        ${t} input[type="number"] {
          -moz-appearance: textfield;
        }

        ${t}[dir='rtl'] input[type="number"]::placeholder {
          direction: rtl;
        }

        ${t}[dir='rtl']:not([has-controls]) input[type="number"]::placeholder {
          text-align: left;
        }
      `]}get clearElement(){return this.$.clearButton}connectedCallback(){super.connectedCallback(),this.inputElement&&(this.inputElement.min=this.min,this.inputElement.max=this.max,this.__applyStep(this.step))}ready(){super.ready(),this.addController(new Ne(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new Ee(this.inputElement,this._labelController))}_decreaseButtonTouchend(t){t.preventDefault(),this._decreaseValue()}_increaseButtonTouchend(t){t.preventDefault(),this._increaseValue()}_constraintsChanged(t,e,i,s){if(!this.invalid)return;const a=o=>!o&&o!==0;!a(e)||!a(i)?this.validate():t||(this.invalid=!1)}_decreaseValue(){this._incrementValue(-1)}_increaseValue(){this._incrementValue(1)}_incrementValue(t){if(this.disabled||this.readonly)return;let e=parseFloat(this.value);this.value?e<this.min?(t=0,e=this.min):e>this.max&&(t=0,e=this.max):this.min==0&&t<0||this.max==0&&t>0||this.max==0&&this.min==0?(t=0,e=0):(this.max==null||this.max>=0)&&(this.min==null||this.min<=0)?e=0:this.min>0?(e=this.min,this.max<0&&t<0&&(e=this.max),t=0):this.max<0&&(e=this.max,t<0?t=0:this._getIncrement(1,e-this.step)>this.max?e-=2*this.step:e-=this.step);const i=this._getIncrement(t,e);(!this.value||t==0||this._incrementIsInsideTheLimits(t,e))&&this._setValue(i)}_setValue(t){this.value=this.inputElement.value=String(parseFloat(t)),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_getIncrement(t,e){let i=this.step||1,s=this.min||0;const a=Math.max(this._getMultiplier(e),this._getMultiplier(i),this._getMultiplier(s));i*=a,e=Math.round(e*a),s*=a;const o=(e-s)%i;return t>0?(e-o+i)/a:t<0?(e-(o||i))/a:e/a}_getDecimalCount(t){const e=String(t),i=e.indexOf(".");return i===-1?1:e.length-i-1}_getMultiplier(t){if(!isNaN(t))return 10**this._getDecimalCount(t)}_incrementIsInsideTheLimits(t,e){return t<0?this.min==null||this._getIncrement(t,e)>=this.min:t>0?this.max==null||this._getIncrement(t,e)<=this.max:this._getIncrement(t,e)<=this.max&&this._getIncrement(t,e)>=this.min}_allowed(t){const e=t*(this.step||1),i=parseFloat(this.value);return!this.value||!this.disabled&&this._incrementIsInsideTheLimits(e,i)}__applyStep(t){this.inputElement&&(this.inputElement.step=this.__validateByStep?t:"any")}_stepChanged(t){this.__validateByStep=this.__stepChangedCalled||this.getAttribute("step")!==null,this.__applyStep(t),this.__stepChangedCalled=!0,this.setAttribute("step",t)}_minChanged(t){this.inputElement&&(this.inputElement.min=t)}_maxChanged(t){this.inputElement&&(this.inputElement.max=t)}_valueChanged(t,e){t&&isNaN(parseFloat(t))?this.value="":typeof this.value!="string"&&(this.value=String(this.value)),super._valueChanged(this.value,e)}_onKeyDown(t){t.key==="ArrowUp"?(t.preventDefault(),this._increaseValue()):t.key==="ArrowDown"&&(t.preventDefault(),this._decreaseValue()),super._onKeyDown(t)}checkValidity(){return this.inputElement&&(this.required||this.min!==void 0||this.max!==void 0||this.__validateByStep)?this.inputElement.checkValidity():!this.invalid}}customElements.define(qt.is,qt);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ui extends qt{static get is(){return"vaadin-integer-field"}static get properties(){return{_enabledCharPattern:{value:"[-+\\d]"}}}_valueChanged(t,e){if(t!==""&&!this.__isInteger(t)){console.warn(`Trying to set non-integer value "${t}" to <vaadin-integer-field>. Clearing the value.`),this.value="";return}super._valueChanged(t,e)}_stepChanged(t,e){if(!this.__hasOnlyDigits(t)){console.warn(`Trying to set invalid step size "${t}", which is not a positive integer, to <vaadin-integer-field>. Resetting the default value 1.`),this.step=1;return}super._stepChanged(t,e)}__isInteger(t){return/^(-\d)?\d*$/.test(String(t))}__hasOnlyDigits(t){return/^\d*$/.test(String(t))}}customElements.define(Ui.is,Ui);const xn=w`
  :host {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  [part='backdrop'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
  }

  [part='content'] {
    padding: 0;
  }

  [part='overlay'] {
    background: none;
    border-radius: 0;
    box-shadow: none;
    width: 100%;
    height: 100%;
  }

  [part='card'] {
    width: calc(var(--lumo-size-m) * 10);
    background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
  }

  [part='brand'] {
    padding: var(--lumo-space-l) var(--lumo-space-xl) var(--lumo-space-l) var(--lumo-space-l);
    background-color: var(--lumo-primary-color);
    color: var(--lumo-primary-contrast-color);
    min-height: calc(var(--lumo-size-m) * 5);
  }

  [part='description'] {
    line-height: var(--lumo-line-height-s);
    color: var(--lumo-tint-70pct);
    margin-bottom: 0;
  }

  [part='content'] {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  [part='card'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow: var(--lumo-box-shadow-s);
    margin: var(--lumo-space-s);
    height: auto;
  }

  /* Small screen */
  @media only screen and (max-width: 500px) {
    [part='overlay'],
    [part='content'] {
      height: 100%;
    }

    [part='content'] {
      min-height: 100%;
      background: var(--lumo-base-color);
      align-items: flex-start;
    }

    [part='card'],
    [part='overlay'] {
      width: 100%;
      border-radius: 0;
      box-shadow: none;
      margin: 0;
    }

    /* RTL styles */
    :host([dir='rtl']) [part='brand'] {
      padding: var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-xl);
    }
  }

  /* Landscape small screen */
  @media only screen and (max-height: 600px) and (min-width: 600px) and (orientation: landscape) {
    [part='card'] {
      flex-direction: row;
      align-items: stretch;
      max-width: calc(var(--lumo-size-m) * 16);
      width: 100%;
    }

    [part='brand'],
    [part='form'] {
      flex: auto;
      flex-basis: 0;
      box-sizing: border-box;
    }

    [part='brand'] {
      justify-content: flex-start;
    }

    [part='form'] {
      padding: var(--lumo-space-l);
      overflow: auto;
    }
  }

  /* Landscape really small screen */
  @media only screen and (max-height: 500px) and (min-width: 600px) and (orientation: landscape),
    only screen and (max-width: 600px) and (min-width: 600px) and (orientation: landscape) {
    [part='content'] {
      height: 100vh;
    }

    [part='card'] {
      margin: 0;
      width: 100%;
      max-width: none;
      height: 100%;
      flex: auto;
      border-radius: 0;
      box-shadow: none;
    }

    [part='form'] {
      height: 100%;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
  }

  /* Handle iPhone X notch */
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    [part='card'] {
      padding-right: constant(safe-area-inset-right);
      padding-right: env(safe-area-inset-right);

      padding-left: constant(safe-area-inset-left);
      padding-left: env(safe-area-inset-left);
    }

    [part='brand'] {
      margin-left: calc(constant(safe-area-inset-left) * -1);
      margin-left: calc(env(safe-area-inset-left) * -1);

      padding-left: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
      padding-left: calc(var(--lumo-space-l) + env(safe-area-inset-left));
    }

    /* RTL styles */
    :host([dir='rtl']) [part='card'] {
      padding-left: constant(safe-area-inset-right);
      padding-left: env(safe-area-inset-right);
      padding-right: constant(safe-area-inset-left);
      padding-right: env(safe-area-inset-left);
    }

    :host([dir='rtl']) [part='brand'] {
      margin-right: calc(constant(safe-area-inset-left) * -1);
      margin-right: calc(env(safe-area-inset-left) * -1);
      padding-right: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
      padding-right: calc(var(--lumo-space-l) + env(safe-area-inset-left));
    }
  }
`;y("vaadin-login-overlay-wrapper",[kr,Tr,xn],{moduleId:"vaadin-login-overlay-wrapper-lumo-styles"});const Cn=w`
  :host([theme~='with-overlay']) {
    min-height: 100%;
    display: flex;
    justify-content: center;
    max-width: 100%;
  }

  /* Landscape small screen */
  @media only screen and (max-height: 600px) and (min-width: 600px) and (orientation: landscape) {
    :host([theme~='with-overlay']) [part='form'] {
      height: 100%;
      -webkit-overflow-scrolling: touch;
      flex: 1;
      padding: 2px;
    }
  }
`;y("vaadin-login-form-wrapper",[kr,Tr,Cn],{moduleId:"lumo-login-overlay"});/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cs=document.createElement("template");cs.innerHTML=`<dom-module id="vaadin-login-overlay-wrapper-template">
  <template>
    <style>
      [part="overlay"] {
        outline: none;
      }

      [part="card"] {
        max-width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      [part="brand"] {
        box-sizing: border-box;
        overflow: hidden;
        flex-grow: 1;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }

      [part="brand"] h1 {
        color: inherit;
        margin: 0;
      }
    </style>
    <section part="card">
      <div part="brand">
        <slot name="title">
          <h1 part="title">[[title]]</h1>
        </slot>
        <p part="description">[[description]]</p>
      </div>
      <div part="form">
        <slot></slot>
      </div>
    </section>
  </template>
</dom-module>`;document.head.appendChild(cs.content);let mt;class Gi extends Ve{static get is(){return"vaadin-login-overlay-wrapper"}static get properties(){return{title:{type:String},description:{type:String}}}static get template(){if(!mt){mt=super.template.cloneNode(!0);const t=Hs.import(this.is+"-template","template"),e=t.content.querySelector("[part=card]"),i=t.content.querySelector("style"),s=mt.content.querySelector("#content");s.replaceChild(e,s.children[0]),s.appendChild(i)}return mt}}customElements.define(Gi.is,Gi);/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ji extends Ws(O(D(S))){static get template(){return E`
      <vaadin-login-overlay-wrapper
        id="vaadinLoginOverlayWrapper"
        opened="{{opened}}"
        focus-trap
        with-backdrop
        title="[[title]]"
        description="[[description]]"
        theme$="[[theme]]"
      >
        <vaadin-login-form
          theme="with-overlay"
          id="vaadinLoginForm"
          action="{{action}}"
          disabled="{{disabled}}"
          error="{{error}}"
          no-autofocus="[[noAutofocus]]"
          no-forgot-password="{{noForgotPassword}}"
          i18n="{{i18n}}"
          on-login="_retargetEvent"
          on-forgot-password="_retargetEvent"
        ></vaadin-login-form>
      </vaadin-login-overlay-wrapper>
    `}static get is(){return"vaadin-login-overlay"}static get properties(){return{description:{type:String,value:"Application description",notify:!0},opened:{type:Boolean,value:!1,observer:"_onOpenedChange"},title:{type:String,value:"App name"}}}static get observers(){return["__i18nChanged(i18n.header.*)"]}ready(){super.ready(),this._preventClosingLogin=this._preventClosingLogin.bind(this)}connectedCallback(){super.connectedCallback(),this.$.vaadinLoginOverlayWrapper.addEventListener("vaadin-overlay-outside-click",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.addEventListener("vaadin-overlay-escape-press",this._preventClosingLogin),this.__restoreOpened&&(this.$.vaadinLoginOverlayWrapper.opened=!0)}disconnectedCallback(){super.disconnectedCallback(),this.$.vaadinLoginOverlayWrapper.removeEventListener("vaadin-overlay-outside-click",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.removeEventListener("vaadin-overlay-escape-press",this._preventClosingLogin),this.__restoreOpened=this.$.vaadinLoginOverlayWrapper.opened,this.$.vaadinLoginOverlayWrapper.opened=!1}__i18nChanged(t){const e=t.base;!e||(this.title=e.title,this.description=e.description)}_preventClosingLogin(t){t.preventDefault()}_onOpenedChange(){this.opened?(this._undoTeleport=this._teleport(this._getElementsToTeleport()),document.body.style.pointerEvents=this.$.vaadinLoginOverlayWrapper._previousDocumentPointerEvents):(this.$.vaadinLoginForm.$.vaadinLoginUsername.value="",this.$.vaadinLoginForm.$.vaadinLoginPassword.value="",this.disabled=!1,this._undoTeleport&&this._undoTeleport())}_teleport(t){const e=Array.from(t).map(i=>this.$.vaadinLoginOverlayWrapper.appendChild(i));return()=>{for(;e.length>0;)this.appendChild(e.shift())}}_getElementsToTeleport(){return this.querySelectorAll("[slot=title]")}}customElements.define(ji.is,ji);y("vaadin-message-input",w`
    :host {
      padding: var(--lumo-space-s) var(--lumo-space-m);
    }
  `,{moduleId:"lumo-message-input"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const In=w`
  [part='input-field'],
  [part='input-field'] ::slotted(textarea) {
    height: auto;
    box-sizing: border-box;
  }

  [part='input-field'] {
    /* Equal to the implicit padding in vaadin-text-field */
    padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    transition: background-color 0.1s;
    line-height: var(--lumo-line-height-s);
  }

  :host(:not([readonly])) [part='input-field']::after {
    display: none;
  }

  :host([readonly]) [part='input-field'] {
    border: 1px dashed var(--lumo-contrast-30pct);
  }

  :host([readonly]) [part='input-field']::after {
    border: none;
  }

  :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
    background-color: var(--lumo-contrast-20pct);
  }

  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field'] {
      background-color: var(--lumo-contrast-20pct);
    }
  }

  [part='input-field'] ::slotted(textarea) {
    line-height: inherit;
    --_lumo-text-field-overflow-mask-image: none;
  }

  /* Vertically align icon prefix/suffix with the first line of text */
  [part='input-field'] ::slotted(iron-icon),
  [part='input-field'] ::slotted(vaadin-icon) {
    margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);
  }
`;y("vaadin-text-area",[Se,In],{moduleId:"lumo-text-area"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class yt extends qs{constructor(t,e){super(t,"textarea",()=>document.createElement("textarea"),(i,s)=>{const a=i.getAttribute("value");a&&(s.value=a);const o=i.getAttribute("name");o&&s.setAttribute("name",o);const n=yt._uniqueTextAreaId=1+yt._uniqueTextAreaId||0;i._textareaId=`${i.localName}-${n}`,s.id=i._textareaId,typeof e=="function"&&e(s)})}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-text-area",He,{moduleId:"vaadin-text-area-styles"});class Yt extends Et(Xt(Sr(D(O(S))))){static get is(){return"vaadin-text-area"}static get template(){return E`
      <style>
        :host {
          animation: 1ms vaadin-text-area-appear;
        }

        .vaadin-text-area-container {
          flex: auto;
        }

        /* The label, helper text and the error message should neither grow nor shrink. */
        [part='label'],
        [part='helper-text'],
        [part='error-message'] {
          flex: none;
        }

        [part='input-field'] {
          flex: auto;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        ::slotted(textarea) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          resize: none;
          margin: 0;
          padding: 0 0.25em;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          font-size: 1em;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        /* Override styles from <vaadin-input-container> */
        [part='input-field'] ::slotted(textarea) {
          align-self: stretch;
          white-space: pre-wrap;
        }

        [part='input-field'] ::slotted(:not(textarea)) {
          align-self: flex-start;
        }

        /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
        :host([disabled]) ::slotted(textarea) {
          user-select: none;
        }

        @keyframes vaadin-text-area-appear {
          to {
            opacity: 1;
          }
        }
      </style>

      <div class="vaadin-text-area-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[theme]]"
          on-scroll="__scrollPositionUpdated"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="textarea"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength"]}static get constraints(){return[...super.constraints,"maxlength","minlength"]}get clearElement(){return this.$.clearButton}connectedCallback(){super.connectedCallback(),this._inputField=this.shadowRoot.querySelector("[part=input-field]"),this._inputField.addEventListener("wheel",t=>{const e=this._inputField.scrollTop;this._inputField.scrollTop+=t.deltaY,e!==this._inputField.scrollTop&&(t.preventDefault(),this.__scrollPositionUpdated())}),this._updateHeight(),this.__scrollPositionUpdated()}_onResize(){this.__scrollPositionUpdated()}ready(){super.ready(),this.addController(new yt(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new Ee(this.inputElement,this._labelController)),this.addEventListener("animationend",this._onAnimationEnd)}__scrollPositionUpdated(){this._inputField.style.setProperty("--_text-area-vertical-scroll-position","0px"),this._inputField.style.setProperty("--_text-area-vertical-scroll-position",this._inputField.scrollTop+"px")}_onAnimationEnd(t){t.animationName.indexOf("vaadin-text-area-appear")===0&&this._updateHeight()}_valueChanged(t,e){super._valueChanged(t,e),this._updateHeight()}_updateHeight(){const t=this.inputElement,e=this._inputField;if(!t||!e)return;const i=e.scrollTop,s=this.value?this.value.length:0;if(this._oldValueLength>=s){const o=getComputedStyle(e).height,n=getComputedStyle(t).width;e.style.display="block",e.style.height=o,t.style.maxWidth=n,t.style.height="auto"}this._oldValueLength=s;const a=t.scrollHeight;a>t.clientHeight&&(t.style.height=a+"px"),t.style.removeProperty("max-width"),e.style.removeProperty("display"),e.style.removeProperty("height"),e.scrollTop=i}checkValidity(){if(!super.checkValidity())return!1;if(!this.pattern||!this.inputElement.value)return!0;try{const t=this.inputElement.value.match(this.pattern);return t?t[0]===t.input:!1}catch{return!0}}}customElements.define(Yt.is,Yt);y("vaadin-message-input-text-area",w`
    :host {
      margin: 0 var(--lumo-space-s) 0 0;
    }

    :host([dir='rtl']) {
      margin: 0 0 0 var(--lumo-space-s);
    }
  `,{moduleId:"lumo-message-input-text-area"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-message-input-text-area",w`
    :host {
      align-self: stretch;
      flex-grow: 1;
    }

    .textarea-wrapper {
      min-height: 0;
    }
  `,{moduleId:"vaadin-message-input-text-area-styles"});class Qi extends Yt{static get is(){return"vaadin-message-input-text-area"}static get properties(){return{ariaLabel:{type:String,observer:"__ariaLabelChanged"}}}_inputElementChanged(t){super._inputElementChanged(t),t&&(t.removeAttribute("aria-labelledby"),t.setAttribute("rows",1),t.style.minHeight="0",this.__updateAriaLabel(this.ariaLabel))}_onKeyDown(t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),t.stopPropagation(),this.dispatchEvent(new CustomEvent("enter"))),super._onKeyDown(t)}__updateAriaLabel(t){t?this.inputElement.setAttribute("aria-label",t):this.inputElement.removeAttribute("aria-label")}__ariaLabelChanged(t){!this.inputElement||this.__updateAriaLabel(t)}}customElements.define(Qi.is,Qi);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-message-input-button",w`
    :host {
      flex-shrink: 0;
    }
  `,{moduleId:"vaadin-message-input-button-styles"});class Xi extends Gt{static get is(){return"vaadin-message-input-button"}}customElements.define(Xi.is,Xi);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ki extends O(D(S)){static get properties(){return{value:{type:String},i18n:{type:Object,value:()=>({send:"Send",message:"Message"})},disabled:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get template(){return E`
      <style>
        :host {
          align-items: flex-start;
          box-sizing: border-box;
          display: flex;
          max-height: 50vh;
          overflow: hidden;
          flex-shrink: 0;
        }
      </style>
      <vaadin-message-input-text-area
        disabled="[[disabled]]"
        value="{{value}}"
        placeholder="[[i18n.message]]"
        aria-label="[[i18n.message]]"
        on-enter="__submit"
      ></vaadin-message-input-text-area>
      <vaadin-message-input-button disabled="[[disabled]]" theme="primary contained" on-click="__submit"
        >[[i18n.send]]</vaadin-message-input-button
      >
    `}static get is(){return"vaadin-message-input"}__submit(){this.value!==""&&(this.dispatchEvent(new CustomEvent("submit",{detail:{value:this.value}})),this.value=""),this.shadowRoot.querySelector("vaadin-message-input-text-area").focus()}}customElements.define(Ki.is,Ki);y("vaadin-message-avatar",w`
    :host {
      margin-right: calc(var(--lumo-space-m) - var(--vaadin-avatar-outline-width));
      margin-top: calc(var(--lumo-space-s) - var(--vaadin-avatar-outline-width));
    }

    :host([dir='rtl']) {
      margin-left: calc(var(--lumo-space-m) - var(--vaadin-avatar-outline-width));
      margin-right: calc(var(--vaadin-avatar-outline-width) * -1);
    }
  `,{moduleId:"lumo-message-avatar"});y("vaadin-message",w`
    :host {
      color: var(--lumo-body-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-m);
      padding: var(--lumo-space-s) var(--lumo-space-m);
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
    }

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part='header'] {
      min-height: calc(var(--lumo-font-size-m) * var(--lumo-line-height-m));
    }

    [part='name'] {
      margin-right: var(--lumo-space-s);
    }

    [part='name']:empty {
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name'] {
      margin-left: var(--lumo-space-s);
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name']:empty {
      margin-left: 0;
    }

    [part='time'] {
      color: var(--lumo-secondary-text-color);
      font-size: var(--lumo-font-size-s);
    }
  `,{moduleId:"lumo-message"});y("vaadin-message-list",w``,{moduleId:"lumo-message-list"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-message-avatar",w`
    :host {
      --vaadin-avatar-outline-width: 0px; /* stylelint-disable-line length-zero-no-unit */
      flex-shrink: 0;
    }
  `,{moduleId:"vaadin-message-avatar-styles"});class Zi extends Mt{static get is(){return"vaadin-message-avatar"}}customElements.define(Zi.is,Zi);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ut extends ue(O(D(S))){static get properties(){return{time:{type:String},userName:{type:String},userAbbr:{type:String},userImg:{type:String},userColorIndex:{type:Number}}}static get template(){return E`
      <style>
        :host {
          display: flex;
          flex-direction: row;
          outline: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='content'] {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        [part='header'] {
          align-items: baseline;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        [part='name'] {
          font-weight: 500;
        }

        [part='message'] {
          white-space: pre-wrap;
        }
      </style>
      <vaadin-message-avatar
        part="avatar"
        name="[[userName]]"
        abbr="[[userAbbr]]"
        img="[[userImg]]"
        color-index="[[userColorIndex]]"
        tabindex="-1"
        aria-hidden="true"
      ></vaadin-message-avatar>
      <div part="content">
        <div part="header">
          <span part="name">[[userName]]</span>
          <span part="time">[[time]]</span>
        </div>
        <div part="message"><slot></slot></div>
      </div>
    `}static get is(){return"vaadin-message"}}customElements.define(Ut.is,Ut);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ji extends O(D(S)){static get is(){return"vaadin-message-list"}static get properties(){return{items:{type:Array,value:function(){return[]},observer:"_itemsChanged"}}}static get template(){return E`
      <style>
        :host {
          display: block;
          overflow: auto;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <div part="list" role="list">
        <template is="dom-repeat" items="[[items]]">
          <vaadin-message
            time="[[item.time]]"
            user-name="[[item.userName]]"
            user-abbr="[[item.userAbbr]]"
            user-img="[[item.userImg]]"
            user-color-index="[[item.userColorIndex]]"
            theme$="[[item.theme]]"
            role="listitem"
            on-focusin="_handleFocusEvent"
            >[[item.text]]</vaadin-message
          >
        </template>
      </div>
    `}ready(){super.ready(),this.setAttribute("aria-relevant","additions"),this.setAttribute("role","log"),this.addEventListener("keydown",t=>this._onKeydown(t))}get _messages(){return Array.from(this.shadowRoot.querySelectorAll("vaadin-message"))}_itemsChanged(t,e){const i=this._getIndexOfFocusableElement();if(t&&t.length){const s=!e||t.length>e.length,a=this.scrollHeight<this.clientHeight+this.scrollTop+50;Ze.run(()=>{this._setTabIndexesByIndex(i),s&&a&&this._scrollToLastMessage()})}}_scrollToLastMessage(){this.items.length>0&&(this.scrollTop=this.scrollHeight-this.clientHeight)}_onKeydown(t){if(t.metaKey||t.ctrlKey)return;const e=t.composedPath()[0];let i=this._messages.indexOf(e);switch(t.key){case"ArrowUp":i-=1;break;case"ArrowDown":i+=1;break;case"Home":i=0;break;case"End":i=this._messages.length-1;break;default:return}i<0&&(i=this._messages.length-1),i>this._messages.length-1&&(i=0),this._focus(i),t.preventDefault()}_focus(t){this._messages[t].focus()}_handleFocusEvent(t){const e=t.composedPath().find(i=>i instanceof Ut);this._setTabIndexesByMessage(e)}_setTabIndexesByIndex(t){const e=this._messages[t]||this._messages[0];this._setTabIndexesByMessage(e)}_setTabIndexesByMessage(t){this._messages.forEach(e=>e.tabIndex=e===t?0:-1)}_getIndexOfFocusableElement(){const t=this._messages.findIndex(e=>e.tabIndex==0);return t!=-1?t:0}}customElements.define(Ji.is,Ji);y("vaadin-notification-card",w`
    :host {
      position: relative;
      margin: var(--lumo-space-s);
    }

    [part='overlay'] {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      border-radius: var(--lumo-border-radius-l);
      box-shadow: 0 0 0 1px var(--lumo-contrast-10pct), var(--lumo-box-shadow-l);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      font-weight: 400;
      line-height: var(--lumo-line-height-s);
      letter-spacing: 0;
      text-transform: none;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    [part='content'] {
      padding: var(--lumo-space-wide-l);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    [part='content'] ::slotted(vaadin-button) {
      flex: none;
      margin: 0 calc(var(--lumo-space-s) * -1) 0 var(--lumo-space-m);
    }

    :host([slot^='middle']) {
      max-width: 80vw;
      margin: var(--lumo-space-s) auto;
    }

    :host([slot\$='stretch']) {
      margin: 0;
    }

    :host([slot\$='stretch']) [part='overlay'] {
      border-radius: 0;
    }

    @media (min-width: 421px) {
      :host(:not([slot\$='stretch'])) {
        display: flex;
      }

      :host([slot\$='end']) {
        justify-content: flex-end;
      }

      :host([slot^='middle']),
      :host([slot\$='center']) {
        display: flex;
        justify-content: center;
      }
    }

    @keyframes lumo-notification-exit-fade-out {
      100% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-fade-in {
      0% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-down {
      0% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-up {
      100% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-up {
      0% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-down {
      100% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    :host([slot='middle'][opening]) {
      animation: lumo-notification-enter-fade-in 300ms;
    }

    :host([slot='middle'][closing]) {
      animation: lumo-notification-exit-fade-out 300ms;
    }

    :host([slot^='top'][opening]) {
      animation: lumo-notification-enter-slide-down 300ms;
    }

    :host([slot^='top'][closing]) {
      animation: lumo-notification-exit-slide-up 300ms;
    }

    :host([slot^='bottom'][opening]) {
      animation: lumo-notification-enter-slide-up 300ms;
    }

    :host([slot^='bottom'][closing]) {
      animation: lumo-notification-exit-slide-down 300ms;
    }

    :host([theme~='primary']) [part='overlay'] {
      background: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='primary']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-primary-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-primary-contrast-color);
      --_lumo-button-primary-color: var(--lumo-primary-text-color);
    }

    :host([theme~='contrast']) [part='overlay'] {
      background: var(--lumo-contrast);
      color: var(--lumo-base-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='contrast']) {
      --_lumo-button-background-color: var(--lumo-contrast-20pct);
      --_lumo-button-color: var(--lumo-base-color);
      --_lumo-button-primary-background-color: var(--lumo-base-color);
      --_lumo-button-primary-color: var(--lumo-contrast);
    }

    :host([theme~='success']) [part='overlay'] {
      background: var(--lumo-success-color);
      color: var(--lumo-success-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='success']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-success-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-success-contrast-color);
      --_lumo-button-primary-color: var(--lumo-success-text-color);
    }

    :host([theme~='error']) [part='overlay'] {
      background: var(--lumo-error-color);
      color: var(--lumo-error-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='error']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-error-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-error-contrast-color);
      --_lumo-button-primary-color: var(--lumo-error-text-color);
    }
  `,{moduleId:"lumo-notification-card"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class er extends D(O(S)){static get template(){return E`
      <style>
        :host {
          position: fixed;
          z-index: 1000;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          box-sizing: border-box;

          display: flex;
          flex-direction: column;
          align-items: stretch;
          pointer-events: none;
        }

        [region-group] {
          flex: 1 1 0%;
          display: flex;
        }

        [region-group='top'] {
          align-items: flex-start;
        }

        [region-group='bottom'] {
          align-items: flex-end;
        }

        [region-group] > [region] {
          flex: 1 1 0%;
        }

        @media (max-width: 420px) {
          [region-group] {
            flex-direction: column;
            align-items: stretch;
          }

          [region-group='top'] {
            justify-content: flex-start;
          }

          [region-group='bottom'] {
            justify-content: flex-end;
          }

          [region-group] > [region] {
            flex: initial;
          }
        }
      </style>

      <div region="top-stretch"><slot name="top-stretch"></slot></div>
      <div region-group="top">
        <div region="top-start"><slot name="top-start"></slot></div>
        <div region="top-center"><slot name="top-center"></slot></div>
        <div region="top-end"><slot name="top-end"></slot></div>
      </div>
      <div region="middle"><slot name="middle"></slot></div>
      <div region-group="bottom">
        <div region="bottom-start"><slot name="bottom-start"></slot></div>
        <div region="bottom-center"><slot name="bottom-center"></slot></div>
        <div region="bottom-end"><slot name="bottom-end"></slot></div>
      </div>
      <div region="bottom-stretch"><slot name="bottom-stretch"></slot></div>
    `}static get is(){return"vaadin-notification-container"}static get properties(){return{opened:{type:Boolean,value:!1,observer:"_openedChanged"}}}_openedChanged(t){t?(document.body.appendChild(this),document.addEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))):(document.body.removeChild(this),document.removeEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener))}constructor(){super(),this._boundVaadinOverlayClose=this._onVaadinOverlayClose.bind(this),xt&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}_detectIosNavbar(){const t=window.innerHeight,i=window.innerWidth>t,s=document.documentElement.clientHeight;i&&s>t?this.style.bottom=s-t+"px":this.style.bottom="0"}_onVaadinOverlayClose(t){const e=t.detail.sourceEvent;e&&e.composedPath().indexOf(this)>=0&&t.preventDefault()}}class tr extends D(S){static get template(){return E`
      <style>
        :host {
          display: block;
        }

        [part='overlay'] {
          pointer-events: auto;
        }
      </style>

      <div part="overlay">
        <div part="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-notification-card"}ready(){super.ready(),this.setAttribute("role","alert"),this.setAttribute("aria-live","polite")}}class he extends Ir(O(S)){static get template(){return E`
      <style>
        :host {
          display: none;
        }
      </style>
      <vaadin-notification-card theme$="[[theme]]"> </vaadin-notification-card>
    `}static get is(){return"vaadin-notification"}static get properties(){return{duration:{type:Number,value:5e3},opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},position:{type:String,value:"bottom-start",observer:"_positionChanged"},renderer:Function}}static get observers(){return["_durationChanged(duration, opened)","_rendererChanged(renderer, opened, _card)"]}ready(){super.ready(),this._card=this.shadowRoot.querySelector("vaadin-notification-card"),ke(this)}requestContentUpdate(){!this.renderer||this.renderer(this._card,this)}_rendererChanged(t,e,i){if(!i)return;const s=this._oldRenderer!==t;this._oldRenderer=t,s&&(i.innerHTML="",delete i._$litPart$),e&&(this._didAnimateNotificationAppend||this._animatedAppendNotificationCard(),this.requestContentUpdate())}open(){this.opened=!0}close(){this.opened=!1}get _container(){return he._container||(he._container=document.createElement("vaadin-notification-container"),document.body.appendChild(he._container)),he._container}_openedChanged(t){t?(this._container.opened=!0,this._animatedAppendNotificationCard()):this._card&&this._closeNotificationCard()}_animatedAppendNotificationCard(){if(this._card){this._card.setAttribute("opening",""),this._appendNotificationCard();const t=()=>{this._card.removeEventListener("animationend",t),this._card.removeAttribute("opening")};this._card.addEventListener("animationend",t),this._didAnimateNotificationAppend=!0}else this._didAnimateNotificationAppend=!1}_appendNotificationCard(){if(!!this._card){if(!this._container.shadowRoot.querySelector(`slot[name="${this.position}"]`)){console.warn(`Invalid alignment parameter provided: position=${this.position}`);return}this._card.slot=this.position,this._container.firstElementChild&&/top/.test(this.position)?this._container.insertBefore(this._card,this._container.firstElementChild):this._container.appendChild(this._card)}}_removeNotificationCard(){this._card.parentNode&&this._card.parentNode.removeChild(this._card),this._card.removeAttribute("closing"),this._container.opened=Boolean(this._container.firstElementChild)}_closeNotificationCard(){this._durationTimeoutId&&clearTimeout(this._durationTimeoutId),this._animatedRemoveNotificationCard()}_animatedRemoveNotificationCard(){this._card.setAttribute("closing","");const t=getComputedStyle(this._card).getPropertyValue("animation-name");if(t&&t!="none"){const e=()=>{this._removeNotificationCard(),this._card.removeEventListener("animationend",e)};this._card.addEventListener("animationend",e)}else this._removeNotificationCard()}_positionChanged(){this.opened&&this._animatedAppendNotificationCard()}_durationChanged(t,e){e&&(clearTimeout(this._durationTimeoutId),t>0&&(this._durationTimeoutId=setTimeout(()=>this.close(),t)))}static show(t,e){return Ys(t)?he._createAndShowNotification(i=>{Dr(t,i)},e):he._createAndShowNotification(i=>{i.innerText=t},e)}static _createAndShowNotification(t,e){const i=document.createElement(he.is);return e&&Number.isFinite(e.duration)&&(i.duration=e.duration),e&&e.position&&(i.position=e.position),e&&e.theme&&i.setAttribute("theme",e.theme),i.renderer=t,document.body.appendChild(i),i.opened=!0,i.addEventListener("opened-changed",s=>{s.detail.value||i.remove()}),i}}customElements.define(er.is,er);customElements.define(tr.is,tr);customElements.define(he.is,he);y("vaadin-progress-bar",w`
    :host {
      height: calc(var(--lumo-size-l) / 10);
      margin: var(--lumo-space-s) 0;
    }

    [part='bar'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }

    [part='value'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-primary-color);
      /* Use width instead of transform to preserve border radius */
      transform: none;
      width: calc(var(--vaadin-progress-value) * 100%);
      will-change: width;
      transition: 0.1s width linear;
    }

    /* Indeterminate mode */
    :host([indeterminate]) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      width: 100%;
      background-color: transparent !important;
      background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      opacity: 0.75;
      will-change: transform;
      animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-indeterminate {
      0% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    :host(:not([aria-valuenow])) [part='value']::before,
    :host([indeterminate]) [part='value']::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: var(--lumo-primary-color);
      will-change: opacity;
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-pulse3 {
      0% {
        opacity: 1;
      }

      10% {
        opacity: 0;
      }

      40% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      50.1% {
        opacity: 1;
      }

      60% {
        opacity: 0;
      }

      90% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    /* Contrast color */
    :host([theme~='contrast']) [part='value'],
    :host([theme~='contrast']) [part='value']::before {
      background-color: var(--lumo-contrast-80pct);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error']) [part='value'],
    :host([theme~='error']) [part='value']::before {
      background-color: var(--lumo-error-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success']) [part='value'],
    :host([theme~='success']) [part='value']::before {
      background-color: var(--lumo-success-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }

    /* RTL specific styles */
    :host([indeterminate][dir='rtl']) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    :host(:not([aria-valuenow])[dir='rtl']) [part='value']::before,
    :host([indeterminate][dir='rtl']) [part='value']::before {
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    @keyframes vaadin-progress-indeterminate-rtl {
      0% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    /* Contrast color */
    :host([theme~='contrast'][dir='rtl']) [part='value'],
    :host([theme~='contrast'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error'][dir='rtl']) [part='value'],
    :host([theme~='error'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success'][dir='rtl']) [part='value'],
    :host([theme~='success'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }
  `,{moduleId:"lumo-progress-bar"});const us=document.createElement("template");us.innerHTML=`
  <style>
    @keyframes vaadin-progress-pulse3 {
      0% { opacity: 1; }
      10% { opacity: 0; }
      40% { opacity: 0; }
      50% { opacity: 1; }
      50.1% { opacity: 1; }
      60% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
`;document.head.appendChild(us.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const En=r=>class extends r{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(e,i,s){const a=this._normalizeValue(e,i,s);this.style.setProperty("--vaadin-progress-value",a)}_valueChanged(e){this.setAttribute("aria-valuenow",e)}_minChanged(e){this.setAttribute("aria-valuemin",e)}_maxChanged(e){this.setAttribute("aria-valuemax",e)}_normalizeValue(e,i,s){let a;return!e&&e!=0?a=0:i>=s?a=1:(a=(e-i)/(s-i),a=Math.min(Math.max(a,0),1)),a}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ir extends O(D(En(S))){static get template(){return E`
      <style>
        :host {
          display: block;
          width: 100%; /* prevent collapsing inside non-stretching column flex */
          height: 8px;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='bar'] {
          height: 100%;
        }

        [part='value'] {
          height: 100%;
          transform-origin: 0 50%;
          transform: scaleX(var(--vaadin-progress-value));
        }

        /* RTL specific styles */

        :host([dir='rtl']) [part='value'] {
          transform-origin: 100% 50%;
        }
      </style>

      <div part="bar">
        <div part="value"></div>
      </div>
    `}static get is(){return"vaadin-progress-bar"}}customElements.define(ir.is,ir);y("vaadin-radio-button",w`
    :host {
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
    }

    :host([has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    }

    [part='radio'] {
      width: calc(var(--lumo-size-m) / 2);
      height: calc(var(--lumo-size-m) / 2);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: 50%;
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      will-change: transform;
      line-height: 1.2;
      cursor: var(--lumo-clickable-cursor);
    }

    /* Used for activation "halo" */
    [part='radio']::before {
      /* Needed to align the radio-button nicely on the baseline */
      content: '\\2003';
      pointer-events: none;
      color: transparent;
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
      will-change: transform, opacity;
    }

    /* Used for the dot */
    [part='radio']::after {
      content: '';
      pointer-events: none;
      width: 0;
      height: 0;
      border: 3px solid var(--lumo-primary-contrast-color);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: 0.25s transform;
      will-change: transform;
      background-clip: content-box;
    }

    :host([checked]) [part='radio'] {
      background-color: var(--lumo-primary-color);
    }

    :host([checked]) [part='radio']::after {
      transform: translate(-50%, -50%) scale(1);
    }

    :host(:not([checked]):not([disabled]):hover) [part='radio'] {
      background-color: var(--lumo-contrast-30pct);
    }

    :host([active]) [part='radio'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='radio'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='radio']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }

    :host([focus-ring]) [part='radio'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='radio'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='radio']::after {
      border-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }
  `,{moduleId:"lumo-radio-button"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class At extends br(Fr(st(yr(O(D(Be(S))))))){static get is(){return"vaadin-radio-button"}static get template(){return E`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }

        .vaadin-radio-button-container {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: baseline;
        }

        .vaadin-radio-button-wrapper {
          position: relative;
          height: 100%;
        }

        /* visually hidden */
        ::slotted(input) {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: inherit;
          margin: 0;
        }
      </style>
      <div class="vaadin-radio-button-container">
        <div class="vaadin-radio-button-wrapper">
          <div part="radio"></div>
          <slot name="input"></slot>
        </div>

        <slot name="label"></slot>

        <div style="display: none !important">
          <slot id="noop"></slot>
        </div>
      </div>
    `}static get properties(){return{name:{type:String,value:""}}}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("radio"),this.value="on"}connectedCallback(){super.connectedCallback(),this._inputController||(this._inputController=new Ne(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t}),this.addController(this._inputController),this.addController(new Ee(this.inputElement,this._labelController)),this.addController(new Mr(this.$.noop,()=>this._labelController.node,()=>this.__warnDeprecated())))}__warnDeprecated(){console.warn(`WARNING: Since Vaadin 22, placing the label as a direct child of a <vaadin-radio-button> is deprecated.
  Please use <label slot="label"> wrapper or the label property instead.`)}}customElements.define(At.is,At);const Sn=w`
  :host {
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    /* Effective height of vaadin-radio-button */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    display: flex;
    flex-direction: column;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='label'],
  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;y("vaadin-radio-group",[St,kt,Sn],{moduleId:"lumo-radio-group"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class it extends ot(ue(at(wt(O(D(S)))))){static get is(){return"vaadin-radio-group"}static get template(){return E`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-group-field-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        :host(:not([has-label])) [part='label'] {
          display: none;
        }
      </style>
      <div class="vaadin-group-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div part="group-field">
          <slot></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{value:{type:String,notify:!0,observer:"__valueChanged"},readonly:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__readonlyChanged"},_fieldName:{type:String}}}constructor(){super(),this.__registerRadioButton=this.__registerRadioButton.bind(this),this.__unregisterRadioButton=this.__unregisterRadioButton.bind(this),this.__onRadioButtonCheckedChange=this.__onRadioButtonCheckedChange.bind(this)}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","radiogroup");const t=it._uniqueRadioGroupId=1+it._uniqueRadioGroupId||0;this._fieldName=`${this.localName}-${t}`,this._observer=new J(this,({addedNodes:e,removedNodes:i})=>{this.__filterRadioButtons(e).reverse().forEach(this.__registerRadioButton),this.__filterRadioButtons(i).forEach(this.__unregisterRadioButton)})}__filterRadioButtons(t){return t.filter(e=>e instanceof At)}get __radioButtons(){return this.__filterRadioButtons([...this.children])}get __selectedRadioButton(){return this.__radioButtons.find(t=>t.checked)}get isHorizontalRTL(){return this.getAttribute("dir")==="rtl"&&this.theme!=="vertical"}_onKeyDown(t){super._onKeyDown(t);const e=t.composedPath().find(i=>i instanceof At);["ArrowLeft","ArrowUp"].includes(t.key)&&(t.preventDefault(),this.__selectNextRadioButton(e)),["ArrowRight","ArrowDown"].includes(t.key)&&(t.preventDefault(),this.__selectPrevRadioButton(e))}__selectNextRadioButton(t){const e=this.__radioButtons.indexOf(t);this.__selectIncRadioButton(e,this.isHorizontalRTL?1:-1)}__selectPrevRadioButton(t){const e=this.__radioButtons.indexOf(t);this.__selectIncRadioButton(e,this.isHorizontalRTL?-1:1)}__selectIncRadioButton(t,e){const i=(this.__radioButtons.length+t+e)%this.__radioButtons.length,s=this.__radioButtons[i];s.disabled?this.__selectIncRadioButton(i,e):(s.focusElement.focus(),s.focusElement.click())}__registerRadioButton(t){t.name=this._fieldName,t.addEventListener("checked-changed",this.__onRadioButtonCheckedChange),(this.disabled||this.readonly)&&(t.disabled=!0),t.checked&&this.__selectRadioButton(t)}__unregisterRadioButton(t){t.removeEventListener("checked-changed",this.__onRadioButtonCheckedChange),t.value===this.value&&this.__selectRadioButton(null)}__onRadioButtonCheckedChange(t){t.target.checked&&this.__selectRadioButton(t.target)}__valueChanged(t,e){if(!e&&!t)return;if(e&&!t){this.__selectRadioButton(null),this.removeAttribute("has-value");return}const i=this.__radioButtons.find(s=>s.value===t);i?(this.__selectRadioButton(i),this.toggleAttribute("has-value",!0)):console.warn(`The radio button with the value "${t}" was not found.`)}__readonlyChanged(t,e){!t&&e===void 0||e!==t&&this.__updateRadioButtonsDisabledProperty()}_disabledChanged(t,e){super._disabledChanged(t,e),!(!t&&e===void 0)&&e!==t&&this.__updateRadioButtonsDisabledProperty()}_shouldRemoveFocus(t){return!this.contains(t.relatedTarget)}_setFocused(t){super._setFocused(t),t||this.validate()}__selectRadioButton(t){t?this.value=t.value:this.value="",this.__radioButtons.forEach(e=>{e.checked=e===t}),this.validate(),this.readonly&&this.__updateRadioButtonsDisabledProperty()}__updateRadioButtonsDisabledProperty(){this.__radioButtons.forEach(t=>{this.readonly?t.disabled=t!==this.__selectedRadioButton:t.disabled=this.disabled})}}customElements.define(it.is,it);const kn=w`
  :host {
    outline: none;
  }

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }
`;y("vaadin-scroller",kn,{moduleId:"lumo-scroller"});/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class rr extends ue(O(D(S))){static get template(){return E`
      <style>
        :host([hidden]) {
          display: none !important;
        }

        :host {
          display: block;
          overflow: auto;
        }

        :host([scroll-direction='vertical']) {
          overflow-x: hidden;
        }

        :host([scroll-direction='horizontal']) {
          overflow-y: hidden;
        }

        :host([scroll-direction='none']) {
          overflow: hidden;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-scroller"}static get properties(){return{scrollDirection:{type:String,reflectToAttribute:!0},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}_shouldSetFocus(t){return t.target===this}}customElements.define(rr.is,rr);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tn=w`
  :host(:not([theme*='align'])) ::slotted([slot='value']) {
    text-align: start;
  }

  [part='input-field'] {
    cursor: var(--lumo-clickable-cursor);
  }

  [part='input-field'] ::slotted([slot='value']) {
    font-weight: 500;
  }

  [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--lumo-body-text-color);
  }

  :host([readonly]) [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--lumo-secondary-text-color);
  }

  /* placeholder styles */
  [part='input-field'] ::slotted([slot='value'][placeholder]) {
    color: inherit;
    transition: opacity 0.175s 0.1s;
    opacity: 0.5;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  /* Highlight the toggle button when hovering over the entire component */
  :host(:hover:not([readonly]):not([disabled])) [part='toggle-button'] {
    color: var(--lumo-contrast-80pct);
  }

  :host([theme~='small']) [part='input-field'] ::slotted([slot='value']) {
    --lumo-button-size: var(--lumo-size-s);
    --_lumo-selected-item-padding: 0;
  }
`;y("vaadin-select",[Se,Tn],{moduleId:"lumo-select"});y("vaadin-select-value-button",w`
    :host {
      padding: 0 0.25em;
      --_lumo-selected-item-padding: 0.5em;
    }

    :host::before,
    :host::after {
      display: none;
    }

    :host([focus-ring]) {
      box-shadow: none;
    }

    ::slotted(:not([slot])) {
      min-height: var(--lumo-button-size);
      padding-top: var(--_lumo-selected-item-padding);
      padding-bottom: var(--_lumo-selected-item-padding);
    }

    ::slotted(:not([slot]):hover) {
      background-color: transparent;
    }
  `,{moduleId:"lumo-select-value-button"});const Dn=w`
  :host {
    --_lumo-item-selected-icon-display: block;
  }

  [part~='overlay'] {
    min-width: var(--vaadin-select-text-field-width);
  }

  /* Small viewport adjustment */
  :host([phone]) {
    top: 0 !important;
    right: 0 !important;
    bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
    left: 0 !important;
    align-items: stretch;
    justify-content: flex-end;
  }

  :host([theme~='align-left']) {
    text-align: left;
  }

  :host([theme~='align-right']) {
    text-align: right;
  }

  :host([theme~='align-center']) {
    text-align: center;
  }
`;y("vaadin-select-overlay",[xr,Dn],{moduleId:"lumo-select-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class sr extends Us{static get is(){return"vaadin-select-item"}}customElements.define(sr.is,sr);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ar extends gr{static get is(){return"vaadin-select-list-box"}}customElements.define(ar.is,ar);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-select-overlay",w`
    :host {
      align-items: flex-start;
      justify-content: flex-start;
    }
  `,{moduleId:"vaadin-select-overlay-styles"});class or extends Qt(Ve){static get is(){return"vaadin-select-overlay"}requestContentUpdate(){if(super.requestContentUpdate(),this.owner){const t=this._getMenuElement();this.owner._assignMenuElement(t)}}_getMenuElement(){return Array.from(this.children).find(t=>t.localName!=="style")}}customElements.define(or.is,or);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-select-value-button",w`
    :host {
      margin: 0;
      min-width: 0;
      width: 0;
      height: auto;
    }

    ::slotted(:not([slot])) {
      padding-left: 0;
      padding-right: 0;
      flex: auto;
    }

    /* placeholder styles */
    ::slotted(:not([slot]):not([selected])) {
      line-height: 1;
    }

    /* TODO: unsupported selector */
    .vaadin-button-container {
      text-align: inherit;
    }

    [part='label'] {
      width: 100%;
      padding: 0;
      line-height: inherit;
    }
  `,{moduleId:"vaadin-select-value-button-styles"});class nr extends Gt{static get is(){return"vaadin-select-value-button"}}customElements.define(nr.is,nr);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */y("vaadin-select",[Gs,js],{moduleId:"vaadin-select-styles"});class rt extends st(ot(qr(O(D(S))))){static get is(){return"vaadin-select"}static get template(){return E`
      <style>
        ::slotted([slot='value']) {
          flex-grow: 1;
          background-color: transparent;
        }
      </style>

      <div class="vaadin-select-container">
        <div part="label" on-click="_onClick">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[theme]]"
          on-click="_onClick"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="value"></slot>
          <div part="toggle-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-select-overlay
        position-target="[[_inputContainer]]"
        opened="{{opened}}"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        theme$="[[theme]]"
      ></vaadin-select-overlay>
    `}static get properties(){return{items:{type:Array,observer:"__itemsChanged"},opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,observer:"_openedChanged"},renderer:Function,value:{type:String,value:"",notify:!0,observer:"_valueChanged"},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},_phone:Boolean,_phoneMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_overlayElement:Object,_inputContainer:Object,_items:Object}}static get observers(){return["_updateAriaExpanded(opened)","_updateAriaRequired(required)","_updateSelectedItem(value, _items, placeholder)","_rendererChanged(renderer, _overlayElement)"]}get slots(){return lt(be({},super.slots),{value:()=>{const t=document.createElement("vaadin-select-value-button");return t.setAttribute("aria-haspopup","listbox"),t}})}get _valueButton(){return this._getDirectSlotChild("value")}constructor(){super();const t=rt._uniqueSelectId=1+rt._uniqueSelectId||0;this._fieldId=`${this.localName}-${t}`,this._boundOnKeyDown=this._onKeyDown.bind(this)}connectedCallback(){super.connectedCallback(),this._valueButton&&(this._valueButton.setAttribute("aria-labelledby",`${this._labelId} ${this._fieldId}`),this._updateAriaRequired(this.required),this._updateAriaExpanded(this.opened),this._setFocusElement(this._valueButton),this.ariaTarget=this._valueButton,this._valueButton.addEventListener("keydown",this._boundOnKeyDown))}disconnectedCallback(){super.disconnectedCallback(),this._valueButton&&this._valueButton.removeEventListener("keydown",this._boundOnKeyDown),this.opened=!1}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-select-overlay"),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]'),this.addController(new Zt(this._phoneMediaQuery,t=>{this._phone=t})),ke(this)}requestContentUpdate(){!this._overlayElement||(this._overlayElement.requestContentUpdate(),this._menuElement&&this._menuElement.items&&this._updateSelectedItem(this.value,this._menuElement.items))}_rendererChanged(t,e){!e||(e.setProperties({owner:this,renderer:t||this.__defaultRenderer}),this.requestContentUpdate())}__itemsChanged(t,e){(t||e)&&this.requestContentUpdate()}_assignMenuElement(t){t&&t!==this.__lastMenuElement&&(this._menuElement=t,this.__initMenuItems(t),t.addEventListener("items-changed",()=>{this.__initMenuItems(t)}),t.addEventListener("selected-changed",()=>this.__updateValueButton()),t.addEventListener("keydown",e=>this._onKeyDownInside(e),!0),t.addEventListener("click",()=>{this.__userInteraction=!0,this.opened=!1},!0),t.setAttribute("role","listbox"),this.__lastMenuElement=t)}__initMenuItems(t){t.items&&(this._items=t.items,this._items.forEach(e=>e.setAttribute("role","option")))}_valueChanged(t,e){this.toggleAttribute("has-value",Boolean(t)),!(t===""&&e===void 0)&&this.validate()}_onClick(){this.opened=!this.readonly}_onKeyDown(t){if(!this.readonly&&!this.opened){if(/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/.test(t.key))t.preventDefault(),this.opened=!0;else if(/[\p{L}\p{Nd}]/u.test(t.key)&&t.key.length===1){const e=this._menuElement.selected,i=e!==void 0?e:-1,s=this._menuElement._searchKey(i,t.key);s>=0&&(this.__userInteraction=!0,this._updateAriaLive(!0),this._menuElement.selected=s)}}}_onKeyDownInside(t){/^(Tab)$/.test(t.key)&&(this.opened=!1)}_openedChanged(t,e){if(t){if(this._updateAriaLive(!1),!this._overlayElement||!this._menuElement||!this.focusElement||this.disabled||this.readonly){this.opened=!1;return}this._overlayElement.style.setProperty("--vaadin-select-text-field-width",this._inputContainer.offsetWidth+"px");const i=this.hasAttribute("focus-ring");this._openedWithFocusRing=i,i&&this.removeAttribute("focus-ring"),this._menuElement.focus()}else e&&(this.focus(),this._openedWithFocusRing&&this.setAttribute("focus-ring",""),this.validate())}_updateAriaExpanded(t){this._valueButton&&this._valueButton.setAttribute("aria-expanded",t?"true":"false")}_updateAriaRequired(t){this._valueButton&&this._valueButton.setAttribute("aria-required",t?"true":"false")}_updateAriaLive(t){this._valueButton&&(t?this._valueButton.setAttribute("aria-live","polite"):this._valueButton.removeAttribute("aria-live"))}__attachSelectedItem(t){let e;const i=t.getAttribute("label");i?e=this.__createItemElement({label:i}):e=t.cloneNode(!0),e._sourceItem=t,this.__appendValueItemElement(e),e.selected=!0}__createItemElement(t){const e=document.createElement(t.component||"vaadin-select-item");return t.label&&(e.textContent=t.label),t.value&&(e.value=t.value),t.disabled&&(e.disabled=t.disabled),e}__appendValueItemElement(t){t.removeAttribute("tabindex"),t.removeAttribute("role"),t.setAttribute("id",this._fieldId),this._valueButton.appendChild(t)}__updateValueButton(){if(!this._valueButton)return;this._valueButton.innerHTML="";const t=this._items[this._menuElement.selected];if(this._valueButton.removeAttribute("placeholder"),t)this.__attachSelectedItem(t),this._valueChanging||(this._selectedChanging=!0,this.value=t.value||"",this.__userInteraction&&(this.opened=!1,this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__userInteraction=!1),delete this._selectedChanging);else if(this.placeholder){const e=this.__createItemElement({label:this.placeholder});this.__appendValueItemElement(e),this._valueButton.setAttribute("placeholder","")}}_updateSelectedItem(t,e){e&&(this._menuElement.selected=e.reduce((i,s,a)=>i===void 0&&s.value===t?a:i,void 0),this._selectedChanging||(this._valueChanging=!0,this.__updateValueButton(),delete this._valueChanging))}_shouldRemoveFocus(){return!this.opened}_setFocused(t){super._setFocused(t),t||this.validate()}validate(){return!(this.invalid=!(this.disabled||!this.required||this.value))}__defaultRenderer(t,e){if(!this.items||this.items.length===0){t.textContent="";return}let i=t.firstElementChild;i||(i=document.createElement("vaadin-select-list-box"),t.appendChild(i)),i.textContent="",this.items.forEach(s=>{i.appendChild(this.__createItemElement(s))})}}customElements.define(rt.is,rt);y("vaadin-split-layout",w`
    [part='splitter'] {
      min-width: var(--lumo-space-s);
      min-height: var(--lumo-space-s);
      background-color: var(--lumo-contrast-5pct);
      transition: 0.1s background-color;
    }

    [part='handle'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--lumo-size-m);
      height: var(--lumo-size-m);
    }

    [part='handle']::after {
      content: '';
      display: block;
      width: 4px;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-30pct);
      transition: 0.1s opacity, 0.1s background-color;
    }

    :host([orientation='vertical']) [part='handle']::after {
      width: 100%;
      height: 4px;
    }

    /* Hover style */
    [part='splitter']:hover [part='handle']::after {
      background-color: var(--lumo-contrast-40pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      [part='splitter']:hover [part='handle']::after {
        background-color: var(--lumo-contrast-30pct);
      }
    }

    /* Active style */
    [part='splitter']:active [part='handle']::after {
      background-color: var(--lumo-contrast-50pct);
    }

    /* Small/minimal */
    :host([theme~='small']) > [part='splitter'] {
      border-left: 1px solid var(--lumo-contrast-10pct);
      border-top: 1px solid var(--lumo-contrast-10pct);
    }

    :host([theme~='small']) > [part='splitter'],
    :host([theme~='minimal']) > [part='splitter'] {
      min-width: 0;
      min-height: 0;
      background-color: transparent;
    }

    :host([theme~='small']) > [part='splitter']::after,
    :host([theme~='minimal']) > [part='splitter']::after {
      content: '';
      position: absolute;
      top: -4px;
      right: -4px;
      bottom: -4px;
      left: -4px;
    }

    :host([theme~='small']) > [part='splitter'] > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter'] > [part='handle']::after {
      opacity: 0;
    }

    :host([theme~='small']) > [part='splitter']:hover > [part='handle']::after,
    :host([theme~='small']) > [part='splitter']:active > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter']:hover > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter']:active > [part='handle']::after {
      opacity: 1;
    }

    /* RTL specific styles */
    :host([theme~='small'][dir='rtl']) > [part='splitter'] {
      border-left: auto;
      border-right: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-split-layout"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class lr extends O(D(S)){static get template(){return E`
      <style>
        :host {
          display: flex;
          overflow: hidden !important;
          transform: translateZ(0);
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([orientation='vertical']) {
          flex-direction: column;
        }

        :host ::slotted(*) {
          flex: 1 1 auto;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        [part='splitter'] {
          flex: none;
          position: relative;
          z-index: 1;
          overflow: visible;
          min-width: 8px;
          min-height: 8px;
        }

        :host(:not([orientation='vertical'])) > [part='splitter'] {
          cursor: ew-resize;
        }

        :host([orientation='vertical']) > [part='splitter'] {
          cursor: ns-resize;
        }

        [part='handle'] {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
        }
      </style>
      <slot id="primary" name="primary"></slot>
      <div part="splitter" id="splitter">
        <div part="handle"></div>
      </div>
      <slot id="secondary" name="secondary"></slot>
    `}static get is(){return"vaadin-split-layout"}static get properties(){return{orientation:{type:String,reflectToAttribute:!0,value:"horizontal"},_previousPrimaryPointerEvents:String,_previousSecondaryPointerEvents:String}}ready(){super.ready(),this.__observer=new J(this,e=>{this._cleanupNodes(e.removedNodes),this._processChildren()});const t=this.$.splitter;te(t,"track",this._onHandleTrack.bind(this)),te(t,"down",this._setPointerEventsNone.bind(this)),te(t,"up",this._restorePointerEvents.bind(this))}_cleanupNodes(t){t.forEach(e=>{e.removeAttribute("slot")})}_processChildren(){[...this.children].forEach((t,e)=>{e===0?(this._primaryChild=t,t.setAttribute("slot","primary")):e==1?(this._secondaryChild=t,t.setAttribute("slot","secondary")):t.removeAttribute("slot")})}_setFlexBasis(t,e,i){e=Math.max(0,Math.min(e,i)),e===0&&(e=1e-6),t.style.flex="1 1 "+e+"px"}_setPointerEventsNone(t){!this._primaryChild||!this._secondaryChild||(this._previousPrimaryPointerEvents=this._primaryChild.style.pointerEvents,this._previousSecondaryPointerEvents=this._secondaryChild.style.pointerEvents,this._primaryChild.style.pointerEvents="none",this._secondaryChild.style.pointerEvents="none",t.preventDefault())}_restorePointerEvents(){!this._primaryChild||!this._secondaryChild||(this._primaryChild.style.pointerEvents=this._previousPrimaryPointerEvents,this._secondaryChild.style.pointerEvents=this._previousSecondaryPointerEvents)}_onHandleTrack(t){if(!this._primaryChild||!this._secondaryChild)return;var e=this.orientation==="vertical"?"height":"width";if(t.detail.state==="start"){this._startSize={container:this.getBoundingClientRect()[e]-this.$.splitter.getBoundingClientRect()[e],primary:this._primaryChild.getBoundingClientRect()[e],secondary:this._secondaryChild.getBoundingClientRect()[e]};return}var i=this.orientation==="vertical"?t.detail.dy:t.detail.dx;const a=this.orientation!=="vertical"&&this.getAttribute("dir")==="rtl"?-i:i;this._setFlexBasis(this._primaryChild,this._startSize.primary+a,this._startSize.container),this._setFlexBasis(this._secondaryChild,this._startSize.secondary-a,this._startSize.container),t.detail.state==="end"&&(this.dispatchEvent(new CustomEvent("splitter-dragend")),delete this._startSize)}notifyResize(){console.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}}customElements.define(lr.is,lr);y("vaadin-tab",w`
    :host {
      box-sizing: border-box;
      padding: 0.5rem 0.75rem;
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-xs);
      font-weight: 500;
      opacity: 1;
      color: var(--lumo-secondary-text-color);
      transition: 0.15s color, 0.2s transform;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      position: relative;
      cursor: var(--lumo-clickable-cursor);
      transform-origin: 50% 100%;
      outline: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow: hidden;
      min-width: var(--lumo-size-m);
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    :host(:not([orientation='vertical'])) {
      text-align: center;
    }

    :host([orientation='vertical']) {
      transform-origin: 0% 50%;
      padding: 0.25rem 1rem;
      min-height: var(--lumo-size-m);
      min-width: 0;
    }

    :host(:hover),
    :host([focus-ring]) {
      color: var(--lumo-body-text-color);
    }

    :host([selected]) {
      color: var(--lumo-primary-text-color);
      transition: 0.6s color;
    }

    :host([active]:not([selected])) {
      color: var(--lumo-primary-text-color);
      transition-duration: 0.1s;
    }

    :host::before,
    :host::after {
      content: '';
      position: absolute;
      display: var(--_lumo-tab-marker-display, block);
      bottom: 0;
      left: 50%;
      width: var(--lumo-size-s);
      height: 2px;
      background-color: var(--lumo-contrast-60pct);
      border-radius: var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0 0;
      transform: translateX(-50%) scale(0);
      transform-origin: 50% 100%;
      transition: 0.14s transform cubic-bezier(0.12, 0.32, 0.54, 1);
      will-change: transform;
    }

    :host([selected])::before,
    :host([selected])::after {
      background-color: var(--lumo-primary-color);
    }

    :host([orientation='vertical'])::before,
    :host([orientation='vertical'])::after {
      left: 0;
      bottom: 50%;
      transform: translateY(50%) scale(0);
      width: 2px;
      height: var(--lumo-size-xs);
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      transform-origin: 100% 50%;
    }

    :host::after {
      box-shadow: 0 0 0 4px var(--lumo-primary-color);
      opacity: 0.15;
      transition: 0.15s 0.02s transform, 0.8s 0.17s opacity;
    }

    :host([selected])::before,
    :host([selected])::after {
      transform: translateX(-50%) scale(1);
      transition-timing-function: cubic-bezier(0.12, 0.32, 0.54, 1.5);
    }

    :host([orientation='vertical'][selected])::before,
    :host([orientation='vertical'][selected])::after {
      transform: translateY(50%) scale(1);
    }

    :host([selected]:not([active]))::after {
      opacity: 0;
    }

    :host(:not([orientation='vertical'])) ::slotted(a[href]) {
      justify-content: center;
    }

    :host ::slotted(a) {
      display: flex;
      width: 100%;
      align-items: center;
      height: 100%;
      margin: -0.5rem -0.75rem;
      padding: 0.5rem 0.75rem;
      outline: none;

      /*
          Override the CSS inherited from \`lumo-color\` and \`lumo-typography\`.
          Note: \`!important\` is needed because of the \`:slotted\` specificity.
        */
      text-decoration: none !important;
      color: inherit !important;
    }

    :host ::slotted(vaadin-icon),
    :host ::slotted(iron-icon) {
      margin: 0 4px;
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    :host ::slotted(vaadin-icon[icon^='vaadin:']),
    :host ::slotted(iron-icon[icon^='vaadin:']) {
      padding: 0.25rem;
      box-sizing: border-box !important;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:first-child),
    :host(:not([dir='rtl'])) ::slotted(iron-icon:first-child) {
      margin-left: 0;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:last-child),
    :host(:not([dir='rtl'])) ::slotted(iron-icon:last-child) {
      margin-right: 0;
    }

    :host([theme~='icon-on-top']) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      padding-bottom: 0.5rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(a) {
      flex-direction: column;
      align-items: center;
      margin-top: -0.25rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(vaadin-icon),
    :host([theme~='icon-on-top']) ::slotted(iron-icon) {
      margin: 0;
    }

    /* Disabled */

    :host([disabled]) {
      pointer-events: none;
      opacity: 1;
      color: var(--lumo-disabled-text-color);
    }

    /* Focus-ring */

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      border-radius: var(--lumo-border-radius-m);
    }

    /* RTL specific styles */

    :host([dir='rtl'])::before,
    :host([dir='rtl'])::after {
      left: auto;
      right: 50%;
      transform: translateX(50%) scale(0);
    }

    :host([dir='rtl'][selected]:not([orientation='vertical']))::before,
    :host([dir='rtl'][selected]:not([orientation='vertical']))::after {
      transform: translateX(50%) scale(1);
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:first-child),
    :host([dir='rtl']) ::slotted(iron-icon:first-child) {
      margin-right: 0;
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:last-child),
    :host([dir='rtl']) ::slotted(iron-icon:last-child) {
      margin-left: 0;
    }

    :host([orientation='vertical'][dir='rtl']) {
      transform-origin: 100% 50%;
    }

    :host([dir='rtl'][orientation='vertical'])::before,
    :host([dir='rtl'][orientation='vertical'])::after {
      left: auto;
      right: 0;
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      transform-origin: 0% 50%;
    }
  `,{moduleId:"lumo-tab"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class dr extends O(D(Qs(S))){static get template(){return E`<slot></slot>`}static get is(){return"vaadin-tab"}ready(){super.ready(),this.setAttribute("role","tab")}_onKeyUp(t){const e=this.hasAttribute("active");if(super._onKeyUp(t),e){const i=this.querySelector("a");i&&i.click()}}}customElements.define(dr.is,dr);y("vaadin-tabs",w`
    :host {
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([orientation='vertical'])) {
      box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
      position: relative;
      min-height: var(--lumo-size-l);
    }

    :host([orientation='horizontal']) [part='tabs'] ::slotted(vaadin-tab:not([theme~='icon-on-top'])) {
      justify-content: center;
    }

    :host([orientation='vertical']) {
      box-shadow: -1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([orientation='horizontal']) [part='tabs'] {
      margin: 0 0.75rem;
    }

    :host([orientation='vertical']) [part='tabs'] {
      width: 100%;
      margin: 0.5rem 0;
    }

    [part='forward-button'],
    [part='back-button'] {
      position: absolute;
      z-index: 1;
      font-family: lumo-icons;
      color: var(--lumo-tertiary-text-color);
      font-size: var(--lumo-icon-size-m);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5em;
      height: 100%;
      transition: 0.2s opacity;
      top: 0;
    }

    [part='forward-button']:hover,
    [part='back-button']:hover {
      color: inherit;
    }

    :host(:not([dir='rtl'])) [part='forward-button'] {
      right: 0;
    }

    [part='forward-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    [part='back-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    /* Tabs overflow */

    [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: none;
      -webkit-mask-image: var(--_lumo-tabs-overflow-mask-image);
      mask-image: var(--_lumo-tabs-overflow-mask-image);
    }

    /* Horizontal tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em);
    }

    /* Vertical tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em, #000 calc(100% - 2em), transparent);
    }

    /* End overflowing */
    :host([overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(#000 calc(100% - 2em), transparent);
    }

    /* Start overflowing */
    :host([overflow~='start'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em);
    }

    :host [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: var(--lumo-space-m);
    }

    /* Centered */

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:first-of-type) {
      margin-inline-start: auto;
    }

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:last-of-type) {
      margin-inline-end: auto;
    }

    /* Small */

    :host([theme~='small']),
    :host([theme~='small']) [part='tabs'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='small']) [part='tabs'] ::slotted(vaadin-tab) {
      font-size: var(--lumo-font-size-s);
    }

    /* Minimal */

    :host([theme~='minimal']) {
      box-shadow: none;
      --_lumo-tab-marker-display: none;
    }

    /* Hide-scroll-buttons */

    :host([theme~='hide-scroll-buttons']) [part='back-button'],
    :host([theme~='hide-scroll-buttons']) [part='forward-button'] {
      display: none;
    }

    /* prettier-ignore */
    :host([theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em);
    }

    /* Equal-width tabs */
    :host([theme~='equal-width-tabs']) {
      flex: auto;
    }

    :host([theme~='equal-width-tabs']) [part='tabs'] ::slotted(vaadin-tab) {
      flex: 1 0 0%;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='forward-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    :host([dir='rtl']) [part='back-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    :host([orientation='vertical'][dir='rtl']) {
      box-shadow: 1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([dir='rtl']) [part='forward-button'] {
      left: 0;
    }

    :host([dir='rtl']) [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: 0;
      margin-right: var(--lumo-space-m);
    }

    /* Both ends overflowing */
    :host([dir='rtl'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([dir='rtl'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([dir='rtl'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent 2em, #000 4em);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical']))
      [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent, #000 2em);
    }
  `,{moduleId:"lumo-tabs"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class hr extends Et(O(Xs(D(S)))){static get template(){return E`
      <style>
        :host {
          display: flex;
          align-items: center;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([orientation='vertical']) {
          display: block;
        }

        :host([orientation='horizontal']) [part='tabs'] {
          flex-grow: 1;
          display: flex;
          align-self: stretch;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        /* This seems more future-proof than \`overflow: -moz-scrollbars-none\` which is marked obsolete
         and is no longer guaranteed to work:
         https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#Mozilla_Extensions */
        @-moz-document url-prefix() {
          :host([orientation='horizontal']) [part='tabs'] {
            overflow: hidden;
          }
        }

        :host([orientation='horizontal']) [part='tabs']::-webkit-scrollbar {
          display: none;
        }

        :host([orientation='vertical']) [part='tabs'] {
          height: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        [part='back-button'],
        [part='forward-button'] {
          pointer-events: none;
          opacity: 0;
          cursor: default;
        }

        :host([overflow~='start']) [part='back-button'],
        :host([overflow~='end']) [part='forward-button'] {
          pointer-events: auto;
          opacity: 1;
        }

        [part='back-button']::after {
          content: '◀';
        }

        [part='forward-button']::after {
          content: '▶';
        }

        :host([orientation='vertical']) [part='back-button'],
        :host([orientation='vertical']) [part='forward-button'] {
          display: none;
        }

        /* RTL specific styles */

        :host([dir='rtl']) [part='back-button']::after {
          content: '▶';
        }

        :host([dir='rtl']) [part='forward-button']::after {
          content: '◀';
        }
      </style>
      <div on-click="_scrollBack" part="back-button" aria-hidden="true"></div>

      <div id="scroll" part="tabs">
        <slot></slot>
      </div>

      <div on-click="_scrollForward" part="forward-button" aria-hidden="true"></div>
    `}static get is(){return"vaadin-tabs"}static get properties(){return{orientation:{value:"horizontal",type:String},selected:{value:0,type:Number}}}static get observers(){return["__tabsItemsChanged(items, items.*)"]}constructor(){super(),this.__itemsResizeObserver=new ResizeObserver(()=>{setTimeout(()=>this._updateOverflow())})}ready(){super.ready(),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist"),Ct(this,()=>{this._updateOverflow()})}_onResize(){this._updateOverflow()}__tabsItemsChanged(t){this.__itemsResizeObserver.disconnect(),(t||[]).forEach(e=>{this.__itemsResizeObserver.observe(e)}),this._updateOverflow()}_scrollForward(){this._scroll(-this.__direction*this._scrollOffset)}_scrollBack(){this._scroll(this.__direction*this._scrollOffset)}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return!this._vertical&&this.getAttribute("dir")==="rtl"?1:-1}_updateOverflow(){const t=this._vertical?this._scrollerElement.scrollTop:this.__getNormalizedScrollLeft(this._scrollerElement),e=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;let i=t>0?"start":"";i+=t+this._scrollOffset<e?" end":"",this.__direction==1&&(i=i.replace(/start|end/gi,s=>s==="start"?"end":"start")),i?this.setAttribute("overflow",i.trim()):this.removeAttribute("overflow")}}customElements.define(hr.is,hr);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ps=document.createElement("template");ps.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-upload-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(ps.content);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class cr extends ue(D(S)){static get template(){return E`
      <style>
        :host {
          display: block;
        }

        [hidden] {
          display: none;
        }

        [part='row'] {
          list-style-type: none;
        }

        button {
          background: transparent;
          padding: 0;
          border: none;
          box-shadow: none;
        }
      </style>

      <div part="row">
        <div part="info">
          <div part="done-icon" hidden$="[[!file.complete]]" aria-hidden="true"></div>
          <div part="warning-icon" hidden$="[[!file.error]]" aria-hidden="true"></div>

          <div part="meta">
            <div part="name" id="name">[[file.name]]</div>
            <div part="status" hidden$="[[!file.status]]" id="status">[[file.status]]</div>
            <div part="error" id="error" hidden$="[[!file.error]]">[[file.error]]</div>
          </div>
        </div>
        <div part="commands">
          <button
            type="button"
            part="start-button"
            file-event="file-start"
            on-click="_fireFileEvent"
            hidden$="[[!file.held]]"
            aria-label$="[[i18n.file.start]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="retry-button"
            file-event="file-retry"
            on-click="_fireFileEvent"
            hidden$="[[!file.error]]"
            aria-label$="[[i18n.file.retry]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="remove-button"
            file-event="file-abort"
            on-click="_fireFileEvent"
            aria-label$="[[i18n.file.remove]]"
            aria-describedby="name"
          ></button>
        </div>
      </div>

      <vaadin-progress-bar
        part="progress"
        id="progress"
        value$="[[_formatProgressValue(file.progress)]]"
        error$="[[file.error]]"
        indeterminate$="[[file.indeterminate]]"
        uploading$="[[file.uploading]]"
        complete$="[[file.complete]]"
      ></vaadin-progress-bar>
    `}static get is(){return"vaadin-upload-file"}static get properties(){return{file:Object,i18n:Object,tabindex:{type:Number,value:0,reflectToAttribute:!0}}}static get observers(){return["_fileAborted(file.abort)",'_toggleHostAttribute(file.error, "error")','_toggleHostAttribute(file.indeterminate, "indeterminate")','_toggleHostAttribute(file.uploading, "uploading")','_toggleHostAttribute(file.complete, "complete")']}ready(){super.ready(),this.shadowRoot.addEventListener("focusin",t=>{t.composedPath()[0].getAttribute("part").endsWith("button")&&this._setFocused(!1)}),this.shadowRoot.addEventListener("focusout",t=>{t.relatedTarget===this&&this._setFocused(!0)})}_shouldSetFocus(t){return t.composedPath()[0]===this}_fileAborted(t){t&&this._remove()}_remove(){this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:this.file},bubbles:!0,composed:!0}))}_formatProgressValue(t){return t/100}_fireFileEvent(t){return t.preventDefault(),this.dispatchEvent(new CustomEvent(t.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}_toggleHostAttribute(t,e){const i=Boolean(t);this.hasAttribute(e)!==i&&(i?this.setAttribute(e,""):this.removeAttribute(e))}}customElements.define(cr.is,cr);y("vaadin-upload",w`
    :host {
      line-height: var(--lumo-line-height-m);
    }

    :host(:not([nodrop])) {
      overflow: hidden;
      border: 1px dashed var(--lumo-contrast-20pct);
      border-radius: var(--lumo-border-radius-l);
      padding: var(--lumo-space-m);
      transition: background-color 0.6s, border-color 0.6s;
    }

    [part='primary-buttons'] > * {
      display: inline-block;
      white-space: nowrap;
    }

    [part='drop-label'] {
      display: inline-block;
      white-space: normal;
      padding: 0 var(--lumo-space-s);
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
    }

    :host([dragover-valid]) {
      border-color: var(--lumo-primary-color-50pct);
      background: var(--lumo-primary-color-10pct);
      transition: background-color 0.1s, border-color 0.1s;
    }

    :host([dragover-valid]) [part='drop-label'] {
      color: var(--lumo-primary-text-color);
    }

    :host([max-files-reached]) [part='drop-label'] {
      color: var(--lumo-disabled-text-color);
    }

    [part='drop-label-icon'] {
      display: inline-block;
    }

    [part='drop-label-icon']::before {
      content: var(--lumo-icons-upload);
      font-family: lumo-icons;
      font-size: var(--lumo-icon-size-m);
      line-height: 1;
      vertical-align: -0.25em;
    }

    [part='file-list'] > *:not(:first-child) > * {
      border-top: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-upload"});const Pn=w`
  :host {
    padding: var(--lumo-space-s) 0;
    outline: none;
  }

  :host([focus-ring]) [part='row'] {
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part='row'] {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  [part='status'],
  [part='error'] {
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-s);
  }

  [part='info'] {
    display: flex;
    align-items: baseline;
    flex: auto;
  }

  [part='meta'] {
    width: 0.001px;
    flex: 1 1 auto;
  }

  [part='name'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [part='commands'] {
    display: flex;
    align-items: baseline;
    flex: none;
  }

  [part$='icon'] {
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-m);
    font-family: 'lumo-icons';
    line-height: 1;
  }

  /* When both icons are hidden, let us keep space for one */
  [part='done-icon'][hidden] + [part='warning-icon'][hidden] {
    display: block !important;
    visibility: hidden;
  }

  [part$='button'] {
    flex: none;
    margin-left: var(--lumo-space-xs);
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:focus {
    outline: none;
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part$='icon']::before,
  [part$='button']::before {
    vertical-align: -0.25em;
  }

  [part='done-icon']::before {
    content: var(--lumo-icons-checkmark);
    color: var(--lumo-primary-text-color);
  }

  [part='warning-icon']::before {
    content: var(--lumo-icons-error);
    color: var(--lumo-error-text-color);
  }

  [part='start-button']::before {
    content: var(--lumo-icons-play);
  }

  [part='retry-button']::before {
    content: var(--lumo-icons-reload);
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  [part='error'] {
    color: var(--lumo-error-text-color);
  }

  [part='progress'] {
    width: auto;
    margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
    margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
  }

  [part='progress'][complete],
  [part='progress'][error] {
    display: none;
  }
`;y("vaadin-upload-file",[Er,Pn],{moduleId:"lumo-upload-file"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ur extends O(D(S)){static get template(){return E`
      <style>
        :host {
          display: block;
          position: relative;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        [hidden] {
          display: none !important;
        }

        [part='file-list'] {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
      </style>

      <div part="primary-buttons">
        <div id="addFiles" on-touchend="_onAddFilesTouchEnd" on-click="_onAddFilesClick">
          <slot name="add-button">
            <vaadin-button part="upload-button" id="addButton" disabled="[[maxFilesReached]]">
              [[_i18nPlural(maxFiles, i18n.addFiles, i18n.addFiles.*)]]
            </vaadin-button>
          </slot>
        </div>
        <div part="drop-label" hidden$="[[nodrop]]" id="dropLabelContainer" aria-hidden="true">
          <slot name="drop-label-icon">
            <div part="drop-label-icon"></div>
          </slot>
          <slot name="drop-label" id="dropLabel"> [[_i18nPlural(maxFiles, i18n.dropFiles, i18n.dropFiles.*)]] </slot>
        </div>
      </div>
      <slot name="file-list">
        <ul id="fileList" part="file-list">
          <template is="dom-repeat" items="[[files]]" as="file">
            <li>
              <vaadin-upload-file file="[[file]]" i18n="[[i18n]]"></vaadin-upload-file>
            </li>
          </template>
        </ul>
      </slot>
      <slot></slot>
      <input
        type="file"
        id="fileInput"
        hidden
        on-change="_onFileInputChange"
        accept$="{{accept}}"
        multiple$="[[_isMultiple(maxFiles)]]"
        capture$="[[capture]]"
      />
    `}static get is(){return"vaadin-upload"}static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:Je},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:function(){return[]}},maxFiles:{type:Number,value:1/0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0,computed:"_maxFilesAdded(maxFiles, files.length)"},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value:function(){return{dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Upload failed, please try again later",unexpectedServerError:"Upload failed due to server error",forbidden:"Upload forbidden"}},file:{retry:"Retry",start:"Start",remove:"Remove"},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}}}}}}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-remove",this._onFileRemove.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this)),this.addEventListener("file-reject",this._onFileReject.bind(this)),this.addEventListener("upload-start",this._onUploadStart.bind(this)),this.addEventListener("upload-success",this._onUploadSuccess.bind(this)),this.addEventListener("upload-error",this._onUploadError.bind(this))}_formatSize(t){if(typeof this.i18n.formatSize=="function")return this.i18n.formatSize(t);const e=this.i18n.units.sizeBase||1e3,i=~~(Math.log(t)/Math.log(e)),s=Math.max(0,Math.min(3,i-1));return parseFloat((t/e**i).toFixed(s))+" "+this.i18n.units.size[i]}_splitTimeByUnits(t){const e=[60,60,24,1/0],i=[0];for(var s=0;s<e.length&&t>0;s++)i[s]=t%e[s],t=Math.floor(t/e[s]);return i}_formatTime(t,e){if(typeof this.i18n.formatTime=="function")return this.i18n.formatTime(t,e);for(;e.length<3;)e.push(0);return e.reverse().map(i=>(i<10?"0":"")+i).join(":")}_formatFileProgress(t){return t.totalStr+": "+t.progress+"% ("+(t.loaded>0?this.i18n.uploading.remainingTime.prefix+t.remainingStr:this.i18n.uploading.remainingTime.unknown)+")"}_maxFilesAdded(t,e){return t>=0&&e>=t}_onDragover(t){t.preventDefault(),!this.nodrop&&!this._dragover&&(this._dragoverValid=!this.maxFilesReached,this._dragover=!0),t.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(t){t.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}_onDrop(t){this.nodrop||(t.preventDefault(),this._dragover=this._dragoverValid=!1,this._addFiles(t.dataTransfer.files))}_createXhr(){return new XMLHttpRequest}_configureXhr(t){if(typeof this.headers=="string")try{this.headers=JSON.parse(this.headers)}catch{this.headers=void 0}for(var e in this.headers)t.setRequestHeader(e,this.headers[e]);this.timeout&&(t.timeout=this.timeout),t.withCredentials=this.withCredentials}_setStatus(t,e,i,s){t.elapsed=s,t.elapsedStr=this._formatTime(t.elapsed,this._splitTimeByUnits(t.elapsed)),t.remaining=Math.ceil(s*(e/i-1)),t.remainingStr=this._formatTime(t.remaining,this._splitTimeByUnits(t.remaining)),t.speed=~~(e/s/1024),t.totalStr=this._formatSize(e),t.loadedStr=this._formatSize(i),t.status=this._formatFileProgress(t)}uploadFiles(t){t&&!Array.isArray(t)&&(t=[t]),t=t||this.files,t=t.filter(e=>!e.complete),Array.prototype.forEach.call(t,this._uploadFile.bind(this))}_uploadFile(t){if(t.uploading)return;const e=Date.now(),i=t.xhr=this._createXhr();let s,a;i.upload.onprogress=u=>{clearTimeout(s),a=Date.now();const m=(a-e)/1e3,_=u.loaded,g=u.total,T=~~(_/g*100);t.loaded=_,t.progress=T,t.indeterminate=_<=0||_>=g,t.error?t.indeterminate=t.status=void 0:t.abort||(T<100?(this._setStatus(t,g,_,m),s=setTimeout(()=>{t.status=this.i18n.uploading.status.stalled,this._notifyFileChanges(t)},2e3)):(t.loadedStr=t.totalStr,t.status=this.i18n.uploading.status.processing)),this._notifyFileChanges(t),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:t,xhr:i}}))},i.onreadystatechange=()=>{if(i.readyState==4){if(clearTimeout(s),t.indeterminate=t.uploading=!1,t.abort){this._notifyFileChanges(t);return}if(t.status="",!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:t,xhr:i},cancelable:!0})))return;i.status===0?t.error=this.i18n.uploading.error.serverUnavailable:i.status>=500?t.error=this.i18n.uploading.error.unexpectedServerError:i.status>=400&&(t.error=this.i18n.uploading.error.forbidden),t.complete=!t.error,this.dispatchEvent(new CustomEvent(`upload-${t.error?"error":"success"}`,{detail:{file:t,xhr:i}})),this._notifyFileChanges(t)}};const o=new FormData;if(t.uploadTarget=t.uploadTarget||this.target||"",t.formDataName=this.formDataName,!this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:t,xhr:i},cancelable:!0})))return;o.append(t.formDataName,t,t.name),i.open(this.method,t.uploadTarget,!0),this._configureXhr(i),t.status=this.i18n.uploading.status.connecting,t.uploading=t.indeterminate=!0,t.complete=t.abort=t.error=t.held=!1,i.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:t,xhr:i}})),this._notifyFileChanges(t)},this.dispatchEvent(new CustomEvent("upload-request",{detail:{file:t,xhr:i,formData:o},cancelable:!0}))&&i.send(o)}_retryFileUpload(t){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:t,xhr:t.xhr},cancelable:!0}))&&this._uploadFile(t)}_abortFileUpload(t){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:t,xhr:t.xhr},cancelable:!0}))&&(t.abort=!0,t.xhr&&t.xhr.abort(),this._notifyFileChanges(t))}_notifyFileChanges(t){var e="files."+this.files.indexOf(t)+".";for(const i in t)t.hasOwnProperty(i)&&this.notifyPath(e+i,t[i])}_addFiles(t){Array.prototype.forEach.call(t,this._addFile.bind(this))}_addFile(t){if(this.maxFilesReached){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:t,error:this.i18n.error.tooManyFiles}}));return}if(this.maxFileSize>=0&&t.size>this.maxFileSize){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:t,error:this.i18n.error.fileIsTooBig}}));return}const e=t.name.match(/\.[^.]*$|$/)[0],i=new RegExp("^("+this.accept.replace(/[, ]+/g,"|").replace(/\/\*/g,"/.*")+")$","i");if(this.accept&&!(i.test(t.type)||i.test(e))){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:t,error:this.i18n.error.incorrectFileType}}));return}t.loaded=0,t.held=!0,t.status=this.i18n.uploading.status.held,this.files=[t,...this.files],this.noAuto||this._uploadFile(t)}_removeFile(t){this.files.indexOf(t)>-1&&(this.files=this.files.filter(e=>e!==t))}_onAddFilesTouchEnd(t){t.preventDefault(),this._onAddFilesClick(t)}_onAddFilesClick(t){this.maxFilesReached||(t.stopPropagation(),this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(t){this._addFiles(t.target.files)}_onFileStart(t){this._uploadFile(t.detail.file)}_onFileRetry(t){this._retryFileUpload(t.detail.file)}_onFileAbort(t){this._abortFileUpload(t.detail.file)}_onFileRemove(t){this._removeFile(t.detail.file)}_onFileReject(t){Qe(`${t.detail.file.name}: ${t.detail.file.error}`,{mode:"alert"})}_onUploadStart(t){Qe(`${t.detail.file.name}: 0%`,{mode:"alert"})}_onUploadSuccess(t){Qe(`${t.detail.file.name}: 100%`,{mode:"alert"})}_onUploadError(t){Qe(`${t.detail.file.name}: ${t.detail.file.error}`,{mode:"alert"})}_dragoverChanged(t){t?this.setAttribute("dragover",t):this.removeAttribute("dragover")}_dragoverValidChanged(t){t?this.setAttribute("dragover-valid",t):this.removeAttribute("dragover-valid")}_i18nPlural(t,e){return t==1?e.one:e.many}_isMultiple(t){return t!=1}}customElements.define(ur.is,ur);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class pr extends O(D(S)){static get template(){return E`
      <style>
        :host {
          display: block;
          height: 400px;
          overflow: auto;
          flex: auto;
          align-self: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host(:not([grid])) #items > ::slotted(*) {
          width: 100%;
        }
      </style>

      <div id="items">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-virtual-list"}static get properties(){return{items:{type:Array},renderer:Function,__virtualizer:Object}}static get observers(){return["__itemsOrRendererChanged(items, renderer, __virtualizer)"]}ready(){super.ready(),this.__virtualizer=new Jt({createElements:this.__createElements,updateElement:this.__updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.shadowRoot.querySelector("#items")}),ke(this)}scrollToIndex(t){this.__virtualizer.scrollToIndex(t)}__createElements(t){return[...Array(t)].map(()=>document.createElement("div"))}__updateElement(t,e){t.__renderer!==this.renderer&&(t.__renderer=this.renderer,this.__clearRenderTargetContent(t)),this.renderer&&this.renderer(t,this,{item:this.items[e],index:e})}__clearRenderTargetContent(t){t.innerHTML="",delete t._$litPart$}__itemsOrRendererChanged(t,e,i){const s=this.childElementCount>0;(e||s)&&i&&(i.size=(t||[]).length,i.update())}get firstVisibleIndex(){return this.__virtualizer.firstVisibleIndex}get lastVisibleIndex(){return this.__virtualizer.lastVisibleIndex}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}}customElements.define(pr.is,pr);const ll=function(r,t=!1){const e=document.createElement("template");e.innerHTML=r,document.head[t?"insertBefore":"appendChild"](e.content,document.head.firstChild)};export{ll as addCssBlock};
