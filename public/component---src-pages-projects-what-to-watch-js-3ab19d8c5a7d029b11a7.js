(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{259:function(e,t,a){"use strict";a.r(t);var n=a(476),c=a(0),i=a.n(c),r=a(261),s=a(262),o=a(263),d=(a(41),a(28)),f=a(49),w=a(264),l=a(50),b=a.n(l),u=a(273),p=a.n(u),h=a(477),m=a.n(h),v=a(269),A=a(270),g=Object(A.a)("carousel-caption",{Component:"div"}),y=Object(A.a)("carousel-item"),x=a(276);a(18),a(29);var S=a(283),E=a(52),I=function(e){return i.a.Children.toArray(e).filter(i.a.isValidElement).length},C=40,N={slide:!0,fade:!1,interval:5e3,keyboard:!0,pauseOnHover:!0,wrap:!0,indicators:!0,controls:!0,activeIndex:0,prevIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next",touch:!0},P=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))||this).state={prevClasses:"",currentClasses:"active",touchStartX:0},t.isUnmounted=!1,t.carousel=i.a.createRef(),t.handleTouchStart=function(e){t.setState({touchStartX:e.changedTouches[0].screenX})},t.handleTouchEnd=function(e){Math.abs(e.changedTouches[0].screenX-t.state.touchStartX)<C||(e.changedTouches[0].screenX<t.state.touchStartX?t.handleNext(e):t.handlePrev(e))},t.handleSlideEnd=function(){var e=t._pendingIndex;t._isSliding=!1,t._pendingIndex=null,null!=e?t.to(e):t.cycle()},t.handleMouseOut=function(){t.cycle()},t.handleMouseOver=function(){t.props.pauseOnHover&&t.pause()},t.handleKeyDown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),t.handlePrev(e);break;case"ArrowRight":e.preventDefault(),t.handleNext(e)}},t.handleNextWhenVisible=function(){t.isUnmounted||document.hidden||"hidden"===p()(t.carousel.current,"visibility")||t.handleNext()},t.handleNext=function(e){if(!t._isSliding){var a=t.props,n=a.wrap,c=a.activeIndex+1;if(c>I(t.props.children)-1){if(!n)return;c=0}t.select(c,e,"next")}},t.handlePrev=function(e){if(!t._isSliding){var a=t.props,n=a.wrap,c=a.activeIndex-1;if(c<0){if(!n)return;c=I(t.props.children)-1}t.select(c,e,"prev")}},t}Object(w.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.cycle()},t.getDerivedStateFromProps=function(e,t){var a=t.activeIndex;if(e.activeIndex!==a){var n=I(e.children)-1,c=Math.max(0,Math.min(e.activeIndex,n));return{direction:0===c&&a>=n||a<=c?"next":"prev",previousActiveIndex:a,activeIndex:c}}return null},a.componentDidUpdate=function(e,t){var a=this,n=this.props,c=n.bsPrefix,i=n.slide,r=n.onSlideEnd;if(i&&this.state.activeIndex!==t.activeIndex&&!this._isSliding){var s,o,d=this.state,f=d.activeIndex,w=d.direction;"next"===w?(s=c+"-item-next",o=c+"-item-left"):"prev"===w&&(s=c+"-item-prev",o=c+"-item-right"),this._isSliding=!0,this.pause(),this.safeSetState({prevClasses:"active",currentClasses:s},(function(){var e=a.carousel.current.children[f];Object(S.a)(e),a.safeSetState({prevClasses:b()("active",o),currentClasses:b()(s,o)},(function(){return m.a.end(e,(function(){a.safeSetState({prevClasses:"",currentClasses:"active"},a.handleSlideEnd),r&&r()}))}))}))}},a.componentWillUnmount=function(){clearTimeout(this.timeout),this.isUnmounted=!0},a.safeSetState=function(e,t){var a=this;this.isUnmounted||this.setState(e,(function(){return!a.isUnmounted&&t()}))},a.pause=function(){this._isPaused=!0,clearInterval(this._interval),this._interval=null},a.cycle=function(){this._isPaused=!1,clearInterval(this._interval),this._interval=null,this.props.interval&&!this._isPaused&&(this._interval=setInterval(document.visibilityState?this.handleNextWhenVisible:this.handleNext,this.props.interval))},a.to=function(e,t){var a=this.props.children;e<0||e>I(a)-1||(this._isSliding?this._pendingIndex=e:this.select(e,t))},a.select=function(e,t,a){var n=this;clearTimeout(this.selectThrottle),t&&t.persist&&t.persist(),this.selectThrottle=setTimeout((function(){clearTimeout(n.timeout);var c=n.props,i=c.activeIndex,r=c.onSelect;e===i||n._isSliding||n.isUnmounted||r(e,a||(e<i?"prev":"next"),t)}),50)},a.renderControls=function(e){var t=this.props.bsPrefix,a=e.wrap,n=e.children,c=e.activeIndex,r=e.prevIcon,s=e.nextIcon,o=e.prevLabel,d=e.nextLabel,f=I(n);return[(a||0!==c)&&i.a.createElement(x.a,{key:"prev",className:t+"-control-prev",onClick:this.handlePrev},r,o&&i.a.createElement("span",{className:"sr-only"},o)),(a||c!==f-1)&&i.a.createElement(x.a,{key:"next",className:t+"-control-next",onClick:this.handleNext},s,d&&i.a.createElement("span",{className:"sr-only"},d))]},a.renderIndicators=function(e,t){var a=this,n=this.props.bsPrefix,c=[];return function(e,t){var a=0;i.a.Children.forEach(e,(function(e){i.a.isValidElement(e)&&t(e,a++)}))}(e,(function(e,n){c.push(i.a.createElement("li",{key:n,className:n===t?"active":null,onClick:function(e){return a.to(n,e)}})," ")})),i.a.createElement("ol",{className:n+"-indicators"},c)},a.render=function(){var e=this.props,t=e.as,a=void 0===t?"div":t,n=e.bsPrefix,r=e.slide,s=e.fade,o=e.indicators,w=e.controls,l=e.wrap,u=e.touch,p=e.prevIcon,h=e.prevLabel,m=e.nextIcon,v=e.nextLabel,A=e.className,g=e.children,y=e.keyboard,x=(e.activeIndex,e.pauseOnHover,e.interval,e.onSelect,e.onSlideEnd,Object(f.a)(e,["as","bsPrefix","slide","fade","indicators","controls","wrap","touch","prevIcon","prevLabel","nextIcon","nextLabel","className","children","keyboard","activeIndex","pauseOnHover","interval","onSelect","onSlideEnd"])),S=this.state,E=S.activeIndex,I=S.previousActiveIndex,C=S.prevClasses,N=S.currentClasses;return i.a.createElement(a,Object(d.a)({onTouchStart:u?this.handleTouchStart:void 0,onTouchEnd:u?this.handleTouchEnd:void 0},x,{className:b()(A,n,r&&"slide",s&&n+"-fade"),onKeyDown:y?this.handleKeyDown:void 0,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut}),o&&this.renderIndicators(g,E),i.a.createElement("div",{className:n+"-inner",ref:this.carousel},function(e,t){var a=0;return i.a.Children.map(e,(function(e){return i.a.isValidElement(e)?t(e,a++):e}))}(g,(function(e,t){var a=t===E,i=t===I;return Object(c.cloneElement)(e,{className:b()(e.props.className,n+"-item",a&&N,i&&C)})}))),w&&this.renderControls({wrap:l,children:g,activeIndex:E,prevIcon:p,prevLabel:h,nextIcon:m,nextLabel:v}))},t}(i.a.Component);P.defaultProps=N;var k=Object(E.a)(Object(v.a)(P,{activeIndex:"onSelect"}),"carousel");k.Caption=g,k.Item=y;var U=k,_=a(241),O=(a(243),a(244)),R=a(245),T=a(242),B=a.n(T),D=a(246),j=a(247),M=a(248),W=Object(_.a)(r.a).withConfig({displayName:"what-to-watch__StyledContainer",componentId:"qhzsyp-0"})(["padding:0;margin:0;padding-bottom:2rem;"]);t.default=function(){var e=n.data;return i.a.createElement(O.a,null,i.a.createElement(R.a,{title:"What to Watch",description:"Information on my portfolio project What to Watch",pathname:"/projects/what-to-watch"}),i.a.createElement(W,{fluid:!0},i.a.createElement(s.a,{noGutters:!0},i.a.createElement(o.a,{xs:{span:1,offset:11}},i.a.createElement(M.Link,{to:"/#projects",className:"noUnderline"},i.a.createElement(D.a,{icon:j.b,size:"1x"})))),i.a.createElement(s.a,{noGutters:!0},i.a.createElement(o.a,{xs:{span:8,offset:2}},i.a.createElement("h1",{className:"center"},"What to Watch"),i.a.createElement("hr",{className:"hrTitle"}))),i.a.createElement(s.a,{noGutters:!0},i.a.createElement(o.a,{xs:{span:10,offset:1},md:{span:6,offset:3}},i.a.createElement("p",{className:"center"},"What to Watch is a website I created in React, using the"," ",i.a.createElement("a",{href:"https://developers.themoviedb.org/3/getting-started/introduction",target:"_blank",rel:"noopener noreferrer"},"MovieDB API"),"for the sites data. The website includes a number of features such as:"),i.a.createElement("ul",null,i.a.createElement("li",null,"Netflix styled homepage with featured content"),i.a.createElement("li",null,"Movie, TV and person searching"),i.a.createElement("li",null,"Details on movies, TV shows and people"),i.a.createElement("li",null,"View collections of related items, such as movie collections with their overview, average rating and the number of items in the collection"),i.a.createElement("li",null,"View trailers using the YouTube Player API"),i.a.createElement("li",null,"View comments from users on the MovieDB website")),i.a.createElement(U,null,e.images.nodes.map((function(e,t){return i.a.createElement(U.Item,{key:e.childImageSharp.id},i.a.createElement(B.a,{fluid:e.childImageSharp.fluid,className:"d-block w-100"}))}))),i.a.createElement("p",{className:"center"},"Technologies used in project:"),i.a.createElement("ul",null,i.a.createElement("li",null,"React"),i.a.createElement("li",null,"JavaScript"),i.a.createElement("li",null,"React Router"),i.a.createElement("li",null,"Styled Components"),i.a.createElement("li",null,"React Bootstrap"),i.a.createElement("li",null,"React Icons"),i.a.createElement("li",null,"YouTube Player API"))))))}},264:function(e,t,a){"use strict";function n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}a.d(t,"a",(function(){return n}))},268:function(e,t,a){"use strict";var n=a(6),c=a(35),i=a(56),r=a(122),s=a(94),o=a(12),d=a(92).f,f=a(121).f,w=a(20).f,l=a(171).trim,b=n.Number,u=b,p=b.prototype,h="Number"==i(a(73)(p)),m="trim"in String.prototype,v=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var a,n,c,i=(t=m?t.trim():l(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+t}for(var r,o=t.slice(2),d=0,f=o.length;d<f;d++)if((r=o.charCodeAt(d))<48||r>c)return NaN;return parseInt(o,n)}}return+t};if(!b(" 0o1")||!b("0b1")||b("+0x1")){b=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof b&&(h?o((function(){p.valueOf.call(a)})):"Number"!=i(a))?r(new u(v(t)),a,b):v(t)};for(var A,g=a(16)?d(u):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;g.length>y;y++)c(u,A=g[y])&&!c(b,A)&&w(b,A,f(u,A));b.prototype=p,p.constructor=b,a(23)(n,"Number",b)}},269:function(e,t,a){"use strict";a(29),a(8),a(9),a(3),a(17),a(54),a(268),a(32),a(27);var n=a(28),c=a(49),i=a(0),r=a.n(i),s=(a(61),a(18),a(42)),o=a.n(s),d=function(){};function f(e,t){return void 0!==e[t]}function w(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function l(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function b(e,t){return Object.keys(t).reduce((function(a,r){var s,o=a[w(r)],d=a[r],b=Object(c.a)(a,[w(r),r].map(l)),u=t[r],p=Object(i.useRef)({}),h=Object(i.useState)(o),m=h[0],v=h[1],A=f(e,r),g=f(p.current,r);p.current=e,!A&&g&&v(o);var y=e[u],x=Object(i.useCallback)((function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];y&&y.apply(void 0,[e].concat(a)),v(e)}),[v,y]);return Object(n.a)({},b,((s={})[r]=A?d:m,s[u]=x,s))}),e)}a(51),a(15);var u=a(264);function p(e,t,a){void 0===a&&(a=[]);var i,s=e.displayName||e.name||"Component",l=!!(i=e)&&("function"!=typeof i||i.prototype&&i.prototype.isReactComponent),b=Object.keys(t),h=b.map(w);!l&&a.length&&o()(!1);var m=function(i){function s(){for(var e,n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=i.call.apply(i,[this].concat(c))||this).handlers=Object.create(null),b.forEach((function(a){var n=t[a];e.handlers[n]=function(t){if(e.props[n]){var c;e._notifying=!0;for(var i=arguments.length,r=new Array(i>1?i-1:0),s=1;s<i;s++)r[s-1]=arguments[s];(c=e.props)[n].apply(c,[t].concat(r)),e._notifying=!1}e._values[a]=t,e.unmounted||e.forceUpdate()}})),a.length&&(e.attachRef=function(t){e.inner=t}),e}Object(u.a)(s,i);var o=s.prototype;return o.shouldComponentUpdate=function(){return!this._notifying},o.componentWillMount=function(){var e=this,t=this.props;this._values=Object.create(null),b.forEach((function(a){e._values[a]=t[w(a)]}))},o.componentWillReceiveProps=function(e){var t=this,a=this.props;b.forEach((function(n){!f(e,n)&&f(a,n)&&(t._values[n]=e[w(n)])}))},o.componentWillUnmount=function(){this.unmounted=!0},o.render=function(){var t=this,a=this.props,i=a.innerRef,s=Object(c.a)(a,["innerRef"]);h.forEach((function(e){delete s[e]}));var o={};return b.forEach((function(e){var a=t.props[e];o[e]=void 0!==a?a:t._values[e]})),r.a.createElement(e,Object(n.a)({},s,o,this.handlers,{ref:i||this.attachRef}))},s}(r.a.Component);m.displayName="Uncontrolled("+s+")",m.propTypes=Object(n.a)({innerRef:function(){}},function(e,t){var a={};return Object.keys(e).forEach((function(e){a[w(e)]=d})),a}(t)),a.forEach((function(e){m.prototype[e]=function(){var t;return(t=this.inner)[e].apply(t,arguments)}}));var v=m;return r.a.forwardRef&&((v=r.a.forwardRef((function(e,t){return r.a.createElement(m,Object(n.a)({},e,{innerRef:t}))}))).propTypes=m.propTypes),v.ControlledComponent=e,v.deferControlTo=function(e,a,c){return void 0===a&&(a={}),p(e,Object(n.a)({},t,a),c)},v}a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return p}))},270:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(28),c=a(49),i=a(50),r=a.n(i),s=a(0),o=a.n(s),d=a(275),f=a.n(d),w=a(52),l=function(e){return e[0].toUpperCase()+f()(e).slice(1)};function b(e,t){var a=void 0===t?{}:t,i=a.displayName,s=void 0===i?l(e):i,d=a.Component,f=void 0===d?"div":d,b=a.defaultProps,u=o.a.forwardRef((function(t,a){var i=t.className,s=t.bsPrefix,d=t.as,l=void 0===d?f:d,b=Object(c.a)(t,["className","bsPrefix","as"]),u=Object(w.b)(s,e);return o.a.createElement(l,Object(n.a)({ref:a,className:r()(i,u)},b))}));return u.defaultProps=b,u.displayName=s,u}},271:function(e,t,a){"use strict";a(8),a(9),a(3),a(17);var n=a(19);t.__esModule=!0,t.default=t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var c,i,r,s,o,d,f,w,l,b,u,p=n(a(93)),h="transform";if(t.transform=h,t.animationEnd=r,t.transitionEnd=i,t.transitionDelay=f,t.transitionTiming=d,t.transitionDuration=o,t.transitionProperty=s,t.animationDelay=u,t.animationTiming=b,t.animationDuration=l,t.animationName=w,p.default){var m=function(){for(var e,t,a=document.createElement("div").style,n={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},c=Object.keys(n),i="",r=0;r<c.length;r++){var s=c[r];if(s+"TransitionProperty"in a){i="-"+s.toLowerCase(),e=n[s]("TransitionEnd"),t=n[s]("AnimationEnd");break}}!e&&"transitionProperty"in a&&(e="transitionend");!t&&"animationName"in a&&(t="animationend");return a=null,{animationEnd:t,transitionEnd:e,prefix:i}}();c=m.prefix,t.transitionEnd=i=m.transitionEnd,t.animationEnd=r=m.animationEnd,t.transform=h=c+"-"+h,t.transitionProperty=s=c+"-transition-property",t.transitionDuration=o=c+"-transition-duration",t.transitionDelay=f=c+"-transition-delay",t.transitionTiming=d=c+"-transition-timing-function",t.animationName=w=c+"-animation-name",t.animationDuration=l=c+"-animation-duration",t.animationTiming=b=c+"-animation-delay",t.animationDelay=u=c+"-animation-timing-function"}var v={transform:h,end:i,property:s,timing:d,delay:f,duration:o};t.default=v},273:function(e,t,a){"use strict";a(8),a(9),a(3),a(17),a(18);var n=a(19);t.__esModule=!0,t.default=function(e,t,a){var n="",f="",w=t;if("string"==typeof t){if(void 0===a)return e.style[(0,c.default)(t)]||(0,r.default)(e).getPropertyValue((0,i.default)(t));(w={})[t]=a}Object.keys(w).forEach((function(t){var a=w[t];a||0===a?(0,d.default)(t)?f+=t+"("+a+") ":n+=(0,i.default)(t)+": "+a+";":(0,s.default)(e,(0,i.default)(t))})),f&&(n+=o.transform+": "+f+";");e.style.cssText+=";"+n};var c=n(a(274)),i=n(a(287)),r=n(a(289)),s=n(a(290)),o=a(271),d=n(a(291));e.exports=t.default},274:function(e,t,a){"use strict";a(13);var n=a(19);t.__esModule=!0,t.default=function(e){return(0,c.default)(e.replace(i,"ms-"))};var c=n(a(275)),i=/^-ms-/;e.exports=t.default},275:function(e,t,a){"use strict";a(13),t.__esModule=!0,t.default=function(e){return e.replace(n,(function(e,t){return t.toUpperCase()}))};var n=/-(.)/g;e.exports=t.default},276:function(e,t,a){"use strict";a(61);var n=a(28),c=a(49),i=a(0),r=a.n(i),s=a(277);function o(e){return!e||"#"===e.trim()}var d=r.a.forwardRef((function(e,t){var a=e.as,i=void 0===a?"a":a,d=e.disabled,f=e.onKeyDown,w=Object(c.a)(e,["as","disabled","onKeyDown"]),l=function(e){var t=w.href,a=w.onClick;(d||o(t))&&e.preventDefault(),d?e.stopPropagation():a&&a(e)};return o(w.href)&&(w.role=w.role||"button",w.href=w.href||"#"),d&&(w.tabIndex=-1,w["aria-disabled"]=!0),r.a.createElement(i,Object(n.a)({ref:t},w,{onClick:l,onKeyDown:Object(s.a)((function(e){" "===e.key&&(e.preventDefault(),l(e))}),f)}))}));d.displayName="SafeAnchor",t.a=d},277:function(e,t,a){"use strict";a(41),a(54);t.a=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];e.apply(this,n),t.apply(this,n)}}),null)}},282:function(e,t,a){"use strict";a(14),a(53);var n=a(19);t.__esModule=!0,t.default=void 0;var c=n(a(271)),i=n(a(273));function r(e,t,a){var n,i={target:e,currentTarget:e};function r(e){e.target===e.currentTarget&&(clearTimeout(n),e.target.removeEventListener(c.default.end,r),t.call(this))}c.default.end?null==a&&(a=o(e)||0):a=0,c.default.end?(e.addEventListener(c.default.end,r,!1),n=setTimeout((function(){return r(i)}),1.5*(a||100))):setTimeout(r.bind(null,i),0)}r._parseDuration=o;var s=r;function o(e){var t=(0,i.default)(e,c.default.duration),a=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*a}t.default=s,e.exports=t.default},283:function(e,t,a){"use strict";function n(e){e.offsetHeight}a.d(t,"a",(function(){return n}))},287:function(e,t,a){"use strict";a(13);var n=a(19);t.__esModule=!0,t.default=function(e){return(0,c.default)(e).replace(i,"-ms-")};var c=n(a(288)),i=/^ms-/;e.exports=t.default},288:function(e,t,a){"use strict";a(13),t.__esModule=!0,t.default=function(e){return e.replace(n,"-$1").toLowerCase()};var n=/([A-Z])/g;e.exports=t.default},289:function(e,t,a){"use strict";var n=a(19);t.__esModule=!0,t.default=function(e){if(!e)throw new TypeError("No Element passed to `getComputedStyle()`");var t=e.ownerDocument;return"defaultView"in t?t.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):window.getComputedStyle(e,null):{getPropertyValue:function(t){var a=e.style;"float"==(t=(0,c.default)(t))&&(t="styleFloat");var n=e.currentStyle[t]||null;if(null==n&&a&&a[t]&&(n=a[t]),r.test(n)&&!i.test(t)){var s=a.left,o=e.runtimeStyle,d=o&&o.left;d&&(o.left=e.currentStyle.left),a.left="fontSize"===t?"1em":n,n=a.pixelLeft+"px",a.left=s,d&&(o.left=d)}return n}}};var c=n(a(274)),i=/^(top|right|bottom|left)$/,r=/^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;e.exports=t.default},290:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e,t){return"removeProperty"in e.style?e.style.removeProperty(t):e.style.removeAttribute(t)},e.exports=t.default},291:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e){return!(!e||!n.test(e))};var n=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;e.exports=t.default},476:function(e){e.exports=JSON.parse('{"data":{"images":{"nodes":[{"id":"aa16d9f5-4931-50c8-b1de-4eb8ef17445b","childImageSharp":{"fluid":{"base64":"data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADwAgCdASoUAAoAPtFUo0uoJKMhsAgBABoJZwC06C0kAAD+7+Nz7mqXKYWrjocYuvJwQAAA","aspectRatio":2.011128775834658,"src":"/static/7f6bcc43c5e9f4cf2c7c6a3a6a7cd59f/0c129/4-wtwdetailstwo.webp","srcSet":"/static/7f6bcc43c5e9f4cf2c7c6a3a6a7cd59f/0e93d/4-wtwdetailstwo.webp 200w,\\n/static/7f6bcc43c5e9f4cf2c7c6a3a6a7cd59f/2259f/4-wtwdetailstwo.webp 400w,\\n/static/7f6bcc43c5e9f4cf2c7c6a3a6a7cd59f/0c129/4-wtwdetailstwo.webp 800w,\\n/static/7f6bcc43c5e9f4cf2c7c6a3a6a7cd59f/45222/4-wtwdetailstwo.webp 1200w,\\n/static/7f6bcc43c5e9f4cf2c7c6a3a6a7cd59f/1f191/4-wtwdetailstwo.webp 1600w,\\n/static/7f6bcc43c5e9f4cf2c7c6a3a6a7cd59f/7fb76/4-wtwdetailstwo.webp 2530w","srcWebp":"/static/7f6bcc43c5e9f4cf2c7c6a3a6a7cd59f/0c129/4-wtwdetailstwo.webp","srcSetWebp":"/static/7f6bcc43c5e9f4cf2c7c6a3a6a7cd59f/0e93d/4-wtwdetailstwo.webp 200w,\\n/static/7f6bcc43c5e9f4cf2c7c6a3a6a7cd59f/2259f/4-wtwdetailstwo.webp 400w,\\n/static/7f6bcc43c5e9f4cf2c7c6a3a6a7cd59f/0c129/4-wtwdetailstwo.webp 800w,\\n/static/7f6bcc43c5e9f4cf2c7c6a3a6a7cd59f/45222/4-wtwdetailstwo.webp 1200w,\\n/static/7f6bcc43c5e9f4cf2c7c6a3a6a7cd59f/1f191/4-wtwdetailstwo.webp 1600w,\\n/static/7f6bcc43c5e9f4cf2c7c6a3a6a7cd59f/7fb76/4-wtwdetailstwo.webp 2530w","sizes":"(max-width: 800px) 100vw, 800px"}}},{"id":"882b0fd2-27b5-54ec-bbcb-88efad709378","childImageSharp":{"fluid":{"base64":"data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAABwAwCdASoUAAoAPtFUo0uoJKMhsAgBABoJZwCdACH6tCTwLAAA/u6Ff35Ih/lbWGH569HZabVzHMrERVzuUfPGfeyTOAH46PLG/XQzAAA=","aspectRatio":2.011128775834658,"src":"/static/e74403bcbbed50a58f4dcf8af99d35b0/0c129/8-wtwpersontwo.webp","srcSet":"/static/e74403bcbbed50a58f4dcf8af99d35b0/0e93d/8-wtwpersontwo.webp 200w,\\n/static/e74403bcbbed50a58f4dcf8af99d35b0/2259f/8-wtwpersontwo.webp 400w,\\n/static/e74403bcbbed50a58f4dcf8af99d35b0/0c129/8-wtwpersontwo.webp 800w,\\n/static/e74403bcbbed50a58f4dcf8af99d35b0/45222/8-wtwpersontwo.webp 1200w,\\n/static/e74403bcbbed50a58f4dcf8af99d35b0/1f191/8-wtwpersontwo.webp 1600w,\\n/static/e74403bcbbed50a58f4dcf8af99d35b0/7fb76/8-wtwpersontwo.webp 2530w","srcWebp":"/static/e74403bcbbed50a58f4dcf8af99d35b0/0c129/8-wtwpersontwo.webp","srcSetWebp":"/static/e74403bcbbed50a58f4dcf8af99d35b0/0e93d/8-wtwpersontwo.webp 200w,\\n/static/e74403bcbbed50a58f4dcf8af99d35b0/2259f/8-wtwpersontwo.webp 400w,\\n/static/e74403bcbbed50a58f4dcf8af99d35b0/0c129/8-wtwpersontwo.webp 800w,\\n/static/e74403bcbbed50a58f4dcf8af99d35b0/45222/8-wtwpersontwo.webp 1200w,\\n/static/e74403bcbbed50a58f4dcf8af99d35b0/1f191/8-wtwpersontwo.webp 1600w,\\n/static/e74403bcbbed50a58f4dcf8af99d35b0/7fb76/8-wtwpersontwo.webp 2530w","sizes":"(max-width: 800px) 100vw, 800px"}}},{"id":"ec8021b7-ff9c-57f8-ab2d-9be42d8ec1dd","childImageSharp":{"fluid":{"base64":"data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAAAwAwCdASoUAAoAPtFUo0uoJKMhsAgBABoJZwCdAB6Q/2YgAP7ujF5qpvugr4AkAA4NQAuR+yUD1smwjw0msHPGsDlELDbioSSLI414plP0AA==","aspectRatio":2.011128775834658,"src":"/static/8b724060735b9e736eaa955874e6d6eb/0c129/10-wtwkeywordgenresearch.webp","srcSet":"/static/8b724060735b9e736eaa955874e6d6eb/0e93d/10-wtwkeywordgenresearch.webp 200w,\\n/static/8b724060735b9e736eaa955874e6d6eb/2259f/10-wtwkeywordgenresearch.webp 400w,\\n/static/8b724060735b9e736eaa955874e6d6eb/0c129/10-wtwkeywordgenresearch.webp 800w,\\n/static/8b724060735b9e736eaa955874e6d6eb/45222/10-wtwkeywordgenresearch.webp 1200w,\\n/static/8b724060735b9e736eaa955874e6d6eb/1f191/10-wtwkeywordgenresearch.webp 1600w,\\n/static/8b724060735b9e736eaa955874e6d6eb/7fb76/10-wtwkeywordgenresearch.webp 2530w","srcWebp":"/static/8b724060735b9e736eaa955874e6d6eb/0c129/10-wtwkeywordgenresearch.webp","srcSetWebp":"/static/8b724060735b9e736eaa955874e6d6eb/0e93d/10-wtwkeywordgenresearch.webp 200w,\\n/static/8b724060735b9e736eaa955874e6d6eb/2259f/10-wtwkeywordgenresearch.webp 400w,\\n/static/8b724060735b9e736eaa955874e6d6eb/0c129/10-wtwkeywordgenresearch.webp 800w,\\n/static/8b724060735b9e736eaa955874e6d6eb/45222/10-wtwkeywordgenresearch.webp 1200w,\\n/static/8b724060735b9e736eaa955874e6d6eb/1f191/10-wtwkeywordgenresearch.webp 1600w,\\n/static/8b724060735b9e736eaa955874e6d6eb/7fb76/10-wtwkeywordgenresearch.webp 2530w","sizes":"(max-width: 800px) 100vw, 800px"}}},{"id":"c40d35b3-f3c2-5a42-b860-b6fafa0d094b","childImageSharp":{"fluid":{"base64":"data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAACwAwCdASoUAAoAPtFWo0uoJKMhsAgBABoJaQDE2B6RQBCXObtAAAD+9DLHv/cCy1p3HGI+XAQHFL0yPlXgCofJ/q1pbJ5AAAA=","aspectRatio":2.011128775834658,"src":"/static/df3f0026fd1fb061ef47c04c06c6a99e/0c129/5-wtwdetailstrailers.webp","srcSet":"/static/df3f0026fd1fb061ef47c04c06c6a99e/0e93d/5-wtwdetailstrailers.webp 200w,\\n/static/df3f0026fd1fb061ef47c04c06c6a99e/2259f/5-wtwdetailstrailers.webp 400w,\\n/static/df3f0026fd1fb061ef47c04c06c6a99e/0c129/5-wtwdetailstrailers.webp 800w,\\n/static/df3f0026fd1fb061ef47c04c06c6a99e/45222/5-wtwdetailstrailers.webp 1200w,\\n/static/df3f0026fd1fb061ef47c04c06c6a99e/1f191/5-wtwdetailstrailers.webp 1600w,\\n/static/df3f0026fd1fb061ef47c04c06c6a99e/7fb76/5-wtwdetailstrailers.webp 2530w","srcWebp":"/static/df3f0026fd1fb061ef47c04c06c6a99e/0c129/5-wtwdetailstrailers.webp","srcSetWebp":"/static/df3f0026fd1fb061ef47c04c06c6a99e/0e93d/5-wtwdetailstrailers.webp 200w,\\n/static/df3f0026fd1fb061ef47c04c06c6a99e/2259f/5-wtwdetailstrailers.webp 400w,\\n/static/df3f0026fd1fb061ef47c04c06c6a99e/0c129/5-wtwdetailstrailers.webp 800w,\\n/static/df3f0026fd1fb061ef47c04c06c6a99e/45222/5-wtwdetailstrailers.webp 1200w,\\n/static/df3f0026fd1fb061ef47c04c06c6a99e/1f191/5-wtwdetailstrailers.webp 1600w,\\n/static/df3f0026fd1fb061ef47c04c06c6a99e/7fb76/5-wtwdetailstrailers.webp 2530w","sizes":"(max-width: 800px) 100vw, 800px"}}},{"id":"e488e0ea-d2b0-508c-8260-32c6b3b57a43","childImageSharp":{"fluid":{"base64":"data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAABwAwCdASoUAAoAPtFUo0uoJKMhsAgBABoJZwCdAB0+nOK88EAA/u6favNFksuA5Xf2/MBY3lLntvFm9quSPCLeKxlyhfWwih9TLfcjUopudMMSAAA=","aspectRatio":2.011128775834658,"src":"/static/52e72506e585d4b2d289c5e3590968be/0c129/9-wtwdiscover.webp","srcSet":"/static/52e72506e585d4b2d289c5e3590968be/0e93d/9-wtwdiscover.webp 200w,\\n/static/52e72506e585d4b2d289c5e3590968be/2259f/9-wtwdiscover.webp 400w,\\n/static/52e72506e585d4b2d289c5e3590968be/0c129/9-wtwdiscover.webp 800w,\\n/static/52e72506e585d4b2d289c5e3590968be/45222/9-wtwdiscover.webp 1200w,\\n/static/52e72506e585d4b2d289c5e3590968be/1f191/9-wtwdiscover.webp 1600w,\\n/static/52e72506e585d4b2d289c5e3590968be/7fb76/9-wtwdiscover.webp 2530w","srcWebp":"/static/52e72506e585d4b2d289c5e3590968be/0c129/9-wtwdiscover.webp","srcSetWebp":"/static/52e72506e585d4b2d289c5e3590968be/0e93d/9-wtwdiscover.webp 200w,\\n/static/52e72506e585d4b2d289c5e3590968be/2259f/9-wtwdiscover.webp 400w,\\n/static/52e72506e585d4b2d289c5e3590968be/0c129/9-wtwdiscover.webp 800w,\\n/static/52e72506e585d4b2d289c5e3590968be/45222/9-wtwdiscover.webp 1200w,\\n/static/52e72506e585d4b2d289c5e3590968be/1f191/9-wtwdiscover.webp 1600w,\\n/static/52e72506e585d4b2d289c5e3590968be/7fb76/9-wtwdiscover.webp 2530w","sizes":"(max-width: 800px) 100vw, 800px"}}},{"id":"ddfe54b5-3d9b-5f6c-b6cf-396a59f39de6","childImageSharp":{"fluid":{"base64":"data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAACwAwCdASoUAAoAPtFWpEuoJKOhsAgBABoJZQCdACIO2Lsq/Knf4AD+7pFeKXqrDmssor/t1+zkYkMlU/qy2GXski8ZyfNybKPSmV2Pfe3jwW9Nrf5zsG5VmCXXuecYAAA=","aspectRatio":2.011128775834658,"src":"/static/ff0e1f7ab3d3d47a9d5e6cc2b297bf31/0c129/2-wtwsearch.webp","srcSet":"/static/ff0e1f7ab3d3d47a9d5e6cc2b297bf31/0e93d/2-wtwsearch.webp 200w,\\n/static/ff0e1f7ab3d3d47a9d5e6cc2b297bf31/2259f/2-wtwsearch.webp 400w,\\n/static/ff0e1f7ab3d3d47a9d5e6cc2b297bf31/0c129/2-wtwsearch.webp 800w,\\n/static/ff0e1f7ab3d3d47a9d5e6cc2b297bf31/45222/2-wtwsearch.webp 1200w,\\n/static/ff0e1f7ab3d3d47a9d5e6cc2b297bf31/1f191/2-wtwsearch.webp 1600w,\\n/static/ff0e1f7ab3d3d47a9d5e6cc2b297bf31/7fb76/2-wtwsearch.webp 2530w","srcWebp":"/static/ff0e1f7ab3d3d47a9d5e6cc2b297bf31/0c129/2-wtwsearch.webp","srcSetWebp":"/static/ff0e1f7ab3d3d47a9d5e6cc2b297bf31/0e93d/2-wtwsearch.webp 200w,\\n/static/ff0e1f7ab3d3d47a9d5e6cc2b297bf31/2259f/2-wtwsearch.webp 400w,\\n/static/ff0e1f7ab3d3d47a9d5e6cc2b297bf31/0c129/2-wtwsearch.webp 800w,\\n/static/ff0e1f7ab3d3d47a9d5e6cc2b297bf31/45222/2-wtwsearch.webp 1200w,\\n/static/ff0e1f7ab3d3d47a9d5e6cc2b297bf31/1f191/2-wtwsearch.webp 1600w,\\n/static/ff0e1f7ab3d3d47a9d5e6cc2b297bf31/7fb76/2-wtwsearch.webp 2530w","sizes":"(max-width: 800px) 100vw, 800px"}}},{"id":"4013faa7-a181-5d2d-8d1a-fa6a36bcf14c","childImageSharp":{"fluid":{"base64":"data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAACwAwCdASoUAAoAPtFUo0uoJKMhsAgBABoJZwCdMoADUF0OEUeTgAD+6+b1PLPDDPABjPW3lDY+tlK45V7XuQBLHc3I8W7TKtkPeiYXb8YkrAblPPuuAAAA","aspectRatio":2.011128775834658,"src":"/static/fe7690547912dcf3bc2c5100fd60a466/0c129/6-wtwcollection.webp","srcSet":"/static/fe7690547912dcf3bc2c5100fd60a466/0e93d/6-wtwcollection.webp 200w,\\n/static/fe7690547912dcf3bc2c5100fd60a466/2259f/6-wtwcollection.webp 400w,\\n/static/fe7690547912dcf3bc2c5100fd60a466/0c129/6-wtwcollection.webp 800w,\\n/static/fe7690547912dcf3bc2c5100fd60a466/45222/6-wtwcollection.webp 1200w,\\n/static/fe7690547912dcf3bc2c5100fd60a466/1f191/6-wtwcollection.webp 1600w,\\n/static/fe7690547912dcf3bc2c5100fd60a466/7fb76/6-wtwcollection.webp 2530w","srcWebp":"/static/fe7690547912dcf3bc2c5100fd60a466/0c129/6-wtwcollection.webp","srcSetWebp":"/static/fe7690547912dcf3bc2c5100fd60a466/0e93d/6-wtwcollection.webp 200w,\\n/static/fe7690547912dcf3bc2c5100fd60a466/2259f/6-wtwcollection.webp 400w,\\n/static/fe7690547912dcf3bc2c5100fd60a466/0c129/6-wtwcollection.webp 800w,\\n/static/fe7690547912dcf3bc2c5100fd60a466/45222/6-wtwcollection.webp 1200w,\\n/static/fe7690547912dcf3bc2c5100fd60a466/1f191/6-wtwcollection.webp 1600w,\\n/static/fe7690547912dcf3bc2c5100fd60a466/7fb76/6-wtwcollection.webp 2530w","sizes":"(max-width: 800px) 100vw, 800px"}}},{"id":"e6062a51-a263-55e4-85e4-6dc6bc3454ca","childImageSharp":{"fluid":{"base64":"data:image/webp;base64,UklGRowAAABXRUJQVlA4IIAAAABQBACdASoUAAoAPtFUo0uoJKMhsAgBABoJYwCdMoMxiezAnaOGDV9rDuYAAOCsFx/c+Fxhckfa+2RB649P3vpQl5UNVS2vqaZXMT6E6PltHovFM00gtHBjhriHFUPKiN+HL2RQcsdp2+L4PeZ2urj+slSDCZek3er6DuoOlU6AAA==","aspectRatio":2.011128775834658,"src":"/static/77cce730b929edb45105b54cf6899140/0c129/1-wtwhome.webp","srcSet":"/static/77cce730b929edb45105b54cf6899140/0e93d/1-wtwhome.webp 200w,\\n/static/77cce730b929edb45105b54cf6899140/2259f/1-wtwhome.webp 400w,\\n/static/77cce730b929edb45105b54cf6899140/0c129/1-wtwhome.webp 800w,\\n/static/77cce730b929edb45105b54cf6899140/45222/1-wtwhome.webp 1200w,\\n/static/77cce730b929edb45105b54cf6899140/1f191/1-wtwhome.webp 1600w,\\n/static/77cce730b929edb45105b54cf6899140/7fb76/1-wtwhome.webp 2530w","srcWebp":"/static/77cce730b929edb45105b54cf6899140/0c129/1-wtwhome.webp","srcSetWebp":"/static/77cce730b929edb45105b54cf6899140/0e93d/1-wtwhome.webp 200w,\\n/static/77cce730b929edb45105b54cf6899140/2259f/1-wtwhome.webp 400w,\\n/static/77cce730b929edb45105b54cf6899140/0c129/1-wtwhome.webp 800w,\\n/static/77cce730b929edb45105b54cf6899140/45222/1-wtwhome.webp 1200w,\\n/static/77cce730b929edb45105b54cf6899140/1f191/1-wtwhome.webp 1600w,\\n/static/77cce730b929edb45105b54cf6899140/7fb76/1-wtwhome.webp 2530w","sizes":"(max-width: 800px) 100vw, 800px"}}},{"id":"c0e98e18-3277-5b7d-9042-05718a20d62d","childImageSharp":{"fluid":{"base64":"data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADwAwCdASoUAAoAPtFUo0uoJKMhsAgBABoJZQCo9B5fxBtoNuuOKBIAAP7sA0SZuv0X2faixHJSLUJ5TL+thk7JSQ90bY6cjAPcYop3Qq+pZ5VgAAA=","aspectRatio":2.011128775834658,"src":"/static/2afe815ced7f5a602a17d824a242d3d8/0c129/3-wtwdetailsone.webp","srcSet":"/static/2afe815ced7f5a602a17d824a242d3d8/0e93d/3-wtwdetailsone.webp 200w,\\n/static/2afe815ced7f5a602a17d824a242d3d8/2259f/3-wtwdetailsone.webp 400w,\\n/static/2afe815ced7f5a602a17d824a242d3d8/0c129/3-wtwdetailsone.webp 800w,\\n/static/2afe815ced7f5a602a17d824a242d3d8/45222/3-wtwdetailsone.webp 1200w,\\n/static/2afe815ced7f5a602a17d824a242d3d8/1f191/3-wtwdetailsone.webp 1600w,\\n/static/2afe815ced7f5a602a17d824a242d3d8/7fb76/3-wtwdetailsone.webp 2530w","srcWebp":"/static/2afe815ced7f5a602a17d824a242d3d8/0c129/3-wtwdetailsone.webp","srcSetWebp":"/static/2afe815ced7f5a602a17d824a242d3d8/0e93d/3-wtwdetailsone.webp 200w,\\n/static/2afe815ced7f5a602a17d824a242d3d8/2259f/3-wtwdetailsone.webp 400w,\\n/static/2afe815ced7f5a602a17d824a242d3d8/0c129/3-wtwdetailsone.webp 800w,\\n/static/2afe815ced7f5a602a17d824a242d3d8/45222/3-wtwdetailsone.webp 1200w,\\n/static/2afe815ced7f5a602a17d824a242d3d8/1f191/3-wtwdetailsone.webp 1600w,\\n/static/2afe815ced7f5a602a17d824a242d3d8/7fb76/3-wtwdetailsone.webp 2530w","sizes":"(max-width: 800px) 100vw, 800px"}}},{"id":"c431f7cb-aba7-594b-9ac6-d01aef697114","childImageSharp":{"fluid":{"base64":"data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAABQAwCdASoUAAoAPtFUo0uoJKMhsAgBABoJZQCdABtY/Y5fgAD+7MGVx3iY5hAfaBGt3wP1GBIO4SgnGK/l0Gu+eTUi+T1QhAloqJHC1j2ZGnSZ2Bb/Okb9JGVorAAA","aspectRatio":2.011128775834658,"src":"/static/8925a5e1d4fbc346cedf9fb28d7d5455/0c129/7-wtwpersonone.webp","srcSet":"/static/8925a5e1d4fbc346cedf9fb28d7d5455/0e93d/7-wtwpersonone.webp 200w,\\n/static/8925a5e1d4fbc346cedf9fb28d7d5455/2259f/7-wtwpersonone.webp 400w,\\n/static/8925a5e1d4fbc346cedf9fb28d7d5455/0c129/7-wtwpersonone.webp 800w,\\n/static/8925a5e1d4fbc346cedf9fb28d7d5455/45222/7-wtwpersonone.webp 1200w,\\n/static/8925a5e1d4fbc346cedf9fb28d7d5455/1f191/7-wtwpersonone.webp 1600w,\\n/static/8925a5e1d4fbc346cedf9fb28d7d5455/7fb76/7-wtwpersonone.webp 2530w","srcWebp":"/static/8925a5e1d4fbc346cedf9fb28d7d5455/0c129/7-wtwpersonone.webp","srcSetWebp":"/static/8925a5e1d4fbc346cedf9fb28d7d5455/0e93d/7-wtwpersonone.webp 200w,\\n/static/8925a5e1d4fbc346cedf9fb28d7d5455/2259f/7-wtwpersonone.webp 400w,\\n/static/8925a5e1d4fbc346cedf9fb28d7d5455/0c129/7-wtwpersonone.webp 800w,\\n/static/8925a5e1d4fbc346cedf9fb28d7d5455/45222/7-wtwpersonone.webp 1200w,\\n/static/8925a5e1d4fbc346cedf9fb28d7d5455/1f191/7-wtwpersonone.webp 1600w,\\n/static/8925a5e1d4fbc346cedf9fb28d7d5455/7fb76/7-wtwpersonone.webp 2530w","sizes":"(max-width: 800px) 100vw, 800px"}}}]}}}')},477:function(e,t,a){"use strict";var n=a(19);t.__esModule=!0,t.default=void 0;var c=n(a(282));t.end=c.default;var i=n(a(271));t.properties=i.default;var r={end:c.default,properties:i.default};t.default=r}}]);
//# sourceMappingURL=component---src-pages-projects-what-to-watch-js-3ab19d8c5a7d029b11a7.js.map