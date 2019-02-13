/*!
 * An AutoHeight Waterfall Component For Vue2
 * v3.0.0-alpha.3 ©2019 PLDaily <pcd12321@gmail.com>
 * https://github.com/PLDaily/vue2-waterfall#readme
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Vue2Waterfall=e():t.Vue2Waterfall=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=3)}([function(t,e){t.exports=function(t,e,n,i,r,o){var a,s=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(a=t,s=t.default);var u="function"==typeof s?s.options:s;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),r&&(u._scopeId=r);var h;if(o?(h=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=h):i&&(h=i),h){var d=u.functional,f=d?u.render:u.beforeCreate;d?(u._injectStyles=h,u.render=function(t,e){return h.call(e),f(t,e)}):u.beforeCreate=f?[].concat(f,h):[h]}return{esModule:a,exports:s,options:u}}},function(t,e,n){"use strict";function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Waterfall",props:{gutterWidth:{type:Number,default:0},gutterHeight:{type:Number,default:0},resizable:{type:Boolean,default:!0},align:{type:String,default:"center"},fixWidth:{type:Number},minCol:{type:Number,default:1},maxCol:{type:Number},percent:{type:Array},itemWidth:{type:Number,default:200}},data:function(){return{width:0,minWidth:0,maxWidth:0,renderData:[],scrollBottomEventEmited:!1,preDataLength:0}},mounted:function(){var t=this;this.setWidth(),this.resizable&&this.onResize(),this.$on("itemRender",function(e){var n=e.height,i=t.minHeightIndex,r=t.renderLength,o=t.renderData[i],a=t.$slots.default;o.height=o.height+n,r<a.length&&t.renderData[t.minHeightIndex].nodes.push(a[r])}),window.addEventListener("scroll",this.handleScroll,{passive:!0})},render:function(t){return this.$slots.default?(this.preDataLength!==this.$slots.default.length&&(this.calc(),this.scrollBottomEventEmited=!1),this.preDataLength=this.$slots.default.length,this.grid(t)):t("div",{class:"waterfall",ref:"waterfall"})},computed:{renderLength:function(){return this.renderData.reduce(function(t,e){return t+e.nodes.length},0)},minHeightIndex:function(){var t=Math.min.apply(Math,i(this.renderData.map(function(t){return t.height})));return this.renderData.findIndex(function(e){return e.height===t})},colNum:function(){return this.percent?this.percent.length:parseInt(this.width/this.itemWidth,10)||1}},watch:{colNum:function(t,e){0!==e&&this.reflow()}},methods:{calc:function(){if(0===this.renderData.length){var t,e=Array.apply(null,{length:this.colNum}).map(function(t,e){return{height:0,nodes:[]}});e[0].nodes.push(this.$slots.default[0]),(t=this.renderData).push.apply(t,i(e))}else this.renderData[this.minHeightIndex].nodes.push(this.$slots.default[this.renderLength])},reflow:function(){var t=Array.apply(null,{length:this.colNum}).map(function(t,e){return{height:0,nodes:[]}});this.$children.forEach(function(e){var n=Math.min.apply(Math,i(t.map(function(t){return t.height}))),r=t.findIndex(function(t){return t.height===n});t[r].height+=e.height,t[r].nodes.push(e.$vnode)}),this.renderData=t},handleScroll:function(){this.$el.getBoundingClientRect().bottom-window.innerHeight<=100&&!this.scrollBottomEventEmited&&(this.$emit("scrollBottom"),this.scrollBottomEventEmited=!0)},grid:function(t){var e=this,n=this.renderData.map(function(n,i){var r=n.nodes.map(function(t){if(t)return t.componentOptions.propsData.gutterHeight=e.gutterHeight,t}),o=e.percent?e.percent[i]*e.width/e.percent.reduce(function(t,e){return t+e}):e.itemWidth;return t("div",{class:"waterfall-box",style:{width:o+"px",padding:"0 "+e.gutterWidth/2+"px",verticalAlign:"top",display:"inline-block",boxSizing:"border-box"}},[r])});return t("div",{class:"waterfall",ref:"waterfall",style:{display:"undefined"==typeof window?"none":"block",textAlign:this.align,margin:"0 auto"}},n)},setWidth:function(){this.width=this.$el.getBoundingClientRect().width},onResize:function(){window.addEventListener("resize",this.setWidth,!1)},calMinWidth:function(){this.minCol&&this.minCol>0&&(this.minWidth=(this.itemWidth+this.gutterWidth)*this.minCol,this.$el.style.minWidth=this.minWidth+"px")},calMaxWidth:function(){this.maxCol&&this.maxCol>0&&(this.maxWidth=(this.itemWidth+this.gutterWidth)*this.maxCol,this.$el.style.maxWidth=this.maxWidth+"px")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"WaterfallItem",props:{gutterHeight:{type:Number},emitEvent:{type:String}},mounted:function(){this.emitEvent?this.$on(this.emitEvent,this.emit):this.emit()},data:function(){return{height:0}},methods:{emit:function(){var t=this.$el.getBoundingClientRect(),e=t.height;this.height=e,this.$parent.$emit("itemRender",{height:e})}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.WaterfallItem=e.Waterfall=void 0;var r=n(4),o=i(r),a=n(5),s=i(a);e.Waterfall=o.default,e.WaterfallItem=s.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var a=n(0),s=a(r.a,null,!1,null,null,null);s.options.__file="src/Waterfall.vue",e.default=s.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var a=n(6),s=n(0),l=s(r.a,a.a,!1,null,null,null);l.options.__file="src/WaterfallItem.vue",e.default=l.exports},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"waterfall-item",style:{marginBottom:t.gutterHeight+"px"}},[t._t("default")],2)},r=[];i._withStripped=!0;var o={render:i,staticRenderFns:r};e.a=o}])});