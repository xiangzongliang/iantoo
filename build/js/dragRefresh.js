!function(t){var o={};function n(a){if(o[a])return o[a].exports;var e=o[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=o,n.d=function(t,o,a){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var e in t)n.d(a,e,function(o){return t[o]}.bind(null,e));return a},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="/",n(n.s=5)}({0:function(t,o,n){"use strict";t.exports={dom:function(t,o){var n=document.createElement(t);if(o)for(var a in o)n.setAttribute(a,o[a]);return n},addClass:function(t,o){if(t.className){var n=t.className;t.className=n+" "+o}else t.className=o},removeClass:function(t,o){var n=" "+t.className+" ",a=(n=n.replace(/(\s+)/gi," ")).replace(" "+o+" "," ");(a=a.replace(/(^\s+)|(\s+$)/g,""))?t.className=a:t.removeAttribute("class")}}},10:function(t,o){},5:function(t,o,n){"use strict";n(10);var a=function(t){return t&&t.__esModule?t:{default:t}}
/*!
* 	基于手机端的下拉刷新+上拉加载组件
*	author:xiangzongliang
*	time:20180810
*	version:V1.0.0
*	github:https://github.com/xiangzongliang/iantoo-old	
*/(n(0));
/*!
* 	基于手机端的下拉刷新+上拉加载组件
*	author:xiangzongliang
*	time:20180810
*	version:V1.0.0
*	github:https://github.com/xiangzongliang/iantoo-old	
*/!function(t,o){var n=t.iantoo||{},e={init:function(t){this.data.content=t.content||"body",this.data.loadingBox=t.loadingBox||"#dragRefreshLoading",this.data.downDragText=t.downDragText||"页面刷新中...",this.data.upDragText=t.upDragText||"数据加载中...",this.data.downTextColor=t.downTextColor||"#9c9c9c",this.data.upTextColor=t.upTextColor||"#9c9c9c",this.data.downRefresh=t.downRefresh||function(){},this.data.upRefresh=t.upRefresh||function(){},this.data.closeDown=t.closeDown||function(){},this.data.closeUp=t.closeUp||function(){},this.render()},data:{content:"",loadingBox:"",downDragText:"",upDragText:"",downTextColor:"",upTextColor:"",downRefresh:"",upRefresh:"",closeDown:"",closeUp:"",isDown:!1,isUp:!1,isIdenDown:!0,isIdenUp:!0},dom:{iantooDragRefresh:"",iantooTopLoading:"",dragContent:"",loadingBox:"",iantooBottomLoading:"",topImg:"",bottomImg:"",topSpan:"",bottomSpan:""},render:function(){this.dom.iantooDragRefresh=document.querySelector("#iantooDragRefresh"),this.dom.dragContent=document.querySelector(this.data.content),this.dom.loadingBox=document.querySelector(this.data.loadingBox),this.dom.iantooTopLoading=a.default.dom("div",{id:"iantooTopLoading"}),this.dom.iantooBottomLoading=a.default.dom("div",{id:"iantooBottomLoading"}),this.dom.topImg=a.default.dom("i"),this.dom.topSpan=a.default.dom("span"),this.dom.bottomImg=a.default.dom("i"),this.dom.bottomSpan=a.default.dom("span"),this.dom.topSpan.innerText=this.data.downDragText,this.dom.bottomSpan.innerText=this.data.upDragText,this.dom.topSpan.style.color=this.data.downTextColor,this.dom.bottomSpan.style.color=this.data.upTextColor,this.dom.iantooTopLoading.appendChild(this.dom.topImg),this.dom.iantooTopLoading.appendChild(this.dom.topSpan),this.dom.iantooBottomLoading.appendChild(this.dom.bottomImg),this.dom.iantooBottomLoading.appendChild(this.dom.bottomSpan),this.dom.loadingBox.appendChild(this.dom.iantooTopLoading),this.dom.loadingBox.appendChild(this.dom.iantooBottomLoading),this.event()},event:function(){var t=this,o={dargDom:null,startX:0,startY:0,clientX:0,clientY:0,translateX:0,translateY:0,contentH:0,contentScrollHeight:0,boxH:0,animate:function(t){}};this.dom.dragContent.addEventListener("touchstart",function(n){n.stopPropagation(),o.clientX=n.changedTouches[0].clientX,o.clientY=n.changedTouches[0].clientY,o.contentH=t.dom.dragContent.clientHeight,o.boxH=window.screen.availHeight||window.screen.height,o.contentScrollHeight=t.dom.dragContent.scrollHeight,t.dom.dragContent.style.WebkitTransition=t.dom.dragContent.style.transition="",o.startX=o.translateX,o.startY=o.translateY,t.data.isIdenDown=!0===t.data.isDown,t.data.isIdenUp=!0===t.data.isUp,!0!==t.data.isDown&&t.dom.iantooTopLoading.setAttribute("style","top:-60px;transition: all 0s ease-out"),!0!==t.data.isUp&&t.dom.iantooBottomLoading.setAttribute("style","bottom:-60px;transition: all 0s ease-out")},!1),this.dom.dragContent.addEventListener("touchmove",function(n){n.stopPropagation();var a=document.querySelector("div").scrollTop||document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;o.translateX=n.changedTouches[0].clientX-o.clientX+o.startX,o.translateY=n.changedTouches[0].clientY-o.clientY+o.startY,o.translateY>0?o.translateY*=.4:o.translateY<-(o.contentScrollHeight-t.dom.dragContent.clientHeight)&&(o.translateY=.4*(n.changedTouches[0].clientY-o.clientY)+o.startY),!1===t.data.isDown&&(o.translateY<=60?(t.dom.iantooTopLoading.style.top=o.translateY-60+"px",t.dom.topSpan.innerText="继续下拉刷新页面",t.dom.topImg.style.display="none"):(t.data.isDown=!0,t.dom.iantooTopLoading.style.top="0px",t.dom.topSpan.innerText=t.data.downDragText,t.dom.topImg.style.display="inline-block",t.data.downRefresh())),!1===t.data.isUp&&a>=o.contentH-o.boxH&&(t.dom.bottomSpan.innerText="继续上拉加载更多",t.dom.bottomImg.style.display="none",t.dom.iantooBottomLoading.style.bottom=-60-o.translateY+"px",o.translateY<-60&&(t.data.isUp=!0,t.dom.iantooBottomLoading.style.bottom="0px",t.dom.bottomSpan.innerText=t.data.upDragText,t.dom.bottomImg.style.display="inline-block",t.data.upRefresh())),!0===t.data.isDown&&!0===t.data.isIdenDown?t.animate(60+o.translateY):!0===t.data.isUp&&!0===t.data.isIdenUp?t.animate(-60+o.translateY):t.animate(o.translateY)},!1),this.dom.dragContent.addEventListener("touchend",function(n){n.stopPropagation(),o.translateY=0,t.dom.dragContent.style.WebkitTransition=t.dom.dragContent.style.transition="transform 500ms cubic-bezier(0.1, 0.57, 0.1, 1)",!0===t.data.isDown?e.animate(60):!0===t.data.isUp?e.animate(-60):(t.dom.iantooTopLoading.setAttribute("style","top:-60px;transition: all 0.2s ease-out"),t.dom.iantooBottomLoading.setAttribute("style","bottom:-60px;transition: all 0.2s ease-out"),e.animate(0))},!1)},animate:function(t){e.dom.dragContent.style.WebkitTransform=e.dom.dragContent.style.transform="translateY("+t+"px)"}},i={closeDown:function(t){e.dom.topSpan.innerText=1==t?"刷新成功":"刷新失败",e.dom.iantooTopLoading.setAttribute("style","top:-60px;transition: all 0.3s ease-out"),e.animate(0),e.data.isDown=!1,e.data.closeDown()},closeUp:function(t){e.dom.bottomSpan.innerText=1==t?"加载成功":"加载失败",e.dom.iantooBottomLoading.setAttribute("style","bottom:-60px;transition: all 0.3s ease-out"),e.animate(0),e.data.isUp=!1,e.data.closeUp()},updata:function(t){e.data.downDragText=t.downDragText||e.data.downDragText,e.data.upDragText=t.upDragText||e.data.upDragText,e.data.downTextColor=t.downTextColor||e.data.downTextColor,e.data.upTextColor=t.upTextColor||e.data.upTextColor,e.dom.topSpan.innerText=e.data.downDragText,e.dom.topSpan.style.color=e.data.downTextColor,e.dom.bottomSpan.innerText=e.data.upDragText,e.dom.bottomSpan.style.color=e.data.upTextColor}};n.dragRefresh=function(t){return new e.init(t)},n.dragRefresh.__proto__=i,e.init.prototype=e,t.iantoo=n}(window)}});