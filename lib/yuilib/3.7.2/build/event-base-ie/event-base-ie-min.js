/*
YUI 3.7.2 (build 5639)
Copyright 2012 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
(function(){var e,t=YUI.Env,n=YUI.config,r=n.doc,i=r&&r.documentElement,s="onreadystatechange",o=n.pollInterval||40;i.doScroll&&!t._ieready&&(t._ieready=function(){t._ready()},
/*! DOMReady: based on work by: Dean Edwards/John Resig/Matthias Miller/Diego Perini */
self!==self.top?(e=function(){r.readyState=="complete"&&(t.remove(r,s,e),t.ieready())},t.add(r,s,e)):t._dri=setInterval(function(){try{i.doScroll("left"),clearInterval(t._dri),t._dri=null,t._ieready()}catch(e){}},o))})(),YUI.add("event-base-ie",function(e,t){function n(){e.DOM2EventFacade.apply(this,arguments)}function r(t){var n=e.config.doc.createEventObject(t),i=r.prototype;return n.hasOwnProperty=function(){return!0},n.init=i.init,n.halt=i.halt,n.preventDefault=i.preventDefault,n.stopPropagation=i.stopPropagation,n.stopImmediatePropagation=i.stopImmediatePropagation,e.DOM2EventFacade.apply(n,arguments),n}var i=e.config.doc&&e.config.doc.implementation,s=e.config.lazyEventFacade,o={0:1,4:2,2:3},u={mouseout:"toElement",mouseover:"fromElement"},a=e.DOM2EventFacade.resolve,f={init:function(){n.superclass.init.apply(this,arguments);var t=this._event,r,i,s,u,f,l;this.target=a(t.srcElement),"clientX"in t&&!r&&0!==r&&(r=t.clientX,i=t.clientY,s=e.config.doc,u=s.body,f=s.documentElement,r+=f.scrollLeft||u&&u.scrollLeft||0,i+=f.scrollTop||u&&u.scrollTop||0,this.pageX=r,this.pageY=i),t.type=="mouseout"?l=t.toElement:t.type=="mouseover"&&(l=t.fromElement),this.relatedTarget=a(l||t.relatedTarget),this.which=this.button=t.keyCode||o[t.button]||t.button},stopPropagation:function(){this._event.cancelBubble=!0,this._wrapper.stopped=1,this.stopped=1},stopImmediatePropagation:function(){this.stopPropagation(),this._wrapper.stopped=2,this.stopped=2},preventDefault:function(e){this._event.returnValue=e||!1,this._wrapper.prevented=1,this.prevented=1}};e.extend(n,e.DOM2EventFacade,f),e.extend(r,e.DOM2EventFacade,f),r.prototype.init=function(){var e=this._event,t=this._wrapper.overrides,n=r._define,i=r._lazyProperties,s;this.altKey=e.altKey,this.ctrlKey=e.ctrlKey,this.metaKey=e.metaKey,this.shiftKey=e.shiftKey,this.type=t&&t.type||e.type,this.clientX=e.clientX,this.clientY=e.clientY,this.keyCode=this.charCode=e.keyCode,this.which=this.button=e.keyCode||o[e.button]||e.button;for(s in i)i.hasOwnProperty(s)&&n(this,s,i[s]);this._touch&&this._touch(e,this._currentTarget,this._wrapper)},r._lazyProperties={target:function(){return a(this._event.srcElement)},relatedTarget:function(){var e=this._event,t=u[e.type]||"relatedTarget";return a(e[t]||e.relatedTarget)},currentTarget:function(){return a(this._currentTarget)},wheelDelta:function(){var e=this._event;if(e.type==="mousewheel"||e.type==="DOMMouseScroll")return e.detail?e.detail*-1:Math.round(e.wheelDelta/80)||(e.wheelDelta<0?-1:1)},pageX:function(){var t=this._event,n=t.pageX,r,i,s;return n===undefined&&(r=e.config.doc,i=r.body&&r.body.scrollLeft,s=r.documentElement.scrollLeft,n=t.clientX+(s||i||0)),n},pageY:function(){var t=this._event,n=t.pageY,r,i,s;return n===undefined&&(r=e.config.doc,i=r.body&&r.body.scrollTop,s=r.documentElement.scrollTop,n=t.clientY+(s||i||0)),n}},r._define=function(e,t,n){function r(r){var i=arguments.length?r:n.call(this);return delete e[t],Object.defineProperty(e,t,{value:i,configurable:!0,writable:!0}),i}Object.defineProperty(e,t,{get:r,set:r,configurable:!0})};if(i&&!i.hasFeature("Events","2.0")){if(s)try{Object.defineProperty(e.config.doc.createEventObject(),"z",{})}catch(l){s=!1}e.DOMEventFacade=s?r:n}},"3.7.2",{requires:["node-base"]});