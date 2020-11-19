/*! lazysizes - v4.1.1 */
!function(t,e){var n=function(t,e){"use strict";if(e.getElementsByClassName){var n,i,a=e.documentElement,r=t.Date,s=t.HTMLPictureElement,o="addEventListener",l="getAttribute",c=t[o],d=t.setTimeout,u=t.requestAnimationFrame||d,f=t.requestIdleCallback,m=/^picture$/i,z=["load","error","lazyincluded","_lazyloaded"],v={},y=Array.prototype.forEach,g=function(t,e){return v[e]||(v[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),v[e].test(t[l]("class")||"")&&v[e]},h=function(t,e){g(t,e)||t.setAttribute("class",(t[l]("class")||"").trim()+" "+e)},p=function(t,e){var n;(n=g(t,e))&&t.setAttribute("class",(t[l]("class")||"").replace(n," "))},C=function(t,e,n){var i=n?o:"removeEventListener";n&&C(t,e),z.forEach((function(n){t[i](n,e)}))},b=function(t,i,a,r,s){var o=e.createEvent("CustomEvent");return a||(a={}),a.instance=n,o.initCustomEvent(i,!r,!s,a),t.dispatchEvent(o),o},A=function(e,n){var a;!s&&(a=t.picturefill||i.pf)?(n&&n.src&&!e[l]("srcset")&&e.setAttribute("srcset",n.src),a({reevaluate:!0,elements:[e]})):n&&n.src&&(e.src=n.src)},E=function(t,e){return(getComputedStyle(t,null)||{})[e]},w=function(t,e,n){for(n=n||t.offsetWidth;n<i.minSize&&e&&!t._lazysizesWidth;)n=e.offsetWidth,e=e.parentNode;return n},M=function(){var t,n,i=[],a=[],r=i,s=function(){var e=r;for(r=i.length?a:i,t=!0,n=!1;e.length;)e.shift()();t=!1},o=function(i,a){t&&!a?i.apply(this,arguments):(r.push(i),n||(n=!0,(e.hidden?d:u)(s)))};return o._lsFlush=s,o}(),N=function(t,e){return e?function(){M(t)}:function(){var e=this,n=arguments;M((function(){t.apply(e,n)}))}},_=function(t){var e,n=0,a=i.throttleDelay,s=i.ricTimeout,o=function(){e=!1,n=r.now(),t()},l=f&&s>49?function(){f(o,{timeout:s}),s!==i.ricTimeout&&(s=i.ricTimeout)}:N((function(){d(o)}),!0);return function(t){var i;(t=!0===t)&&(s=33),e||(e=!0,0>(i=a-(r.now()-n))&&(i=0),t||9>i?l():d(l,i))}},W=function(t){var e,n,i=99,a=function(){e=null,t()},s=function(){var t=r.now()-n;i>t?d(s,i-t):(f||a)(a)};return function(){n=r.now(),e||(e=d(s,i))}};!function(){var e,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in i=t.lazySizesConfig||t.lazysizesConfig||{},n)e in i||(i[e]=n[e]);t.lazySizesConfig=i,d((function(){i.init&&B()}))}();var x=function(){var s,u,f,z,v,w,x,B,F,S,L,R,k,D,H=/^img$/i,O=/^iframe$/i,P="onscroll"in t&&!/(gle|ing)bot/.test(navigator.userAgent),$=0,I=0,q=0,j=-1,G=function(t){q--,t&&t.target&&C(t.target,G),(!t||0>q||!t.target)&&(q=0)},J=function(t,n){var i,r=t,s="hidden"==E(e.body,"visibility")||"hidden"!=E(t.parentNode,"visibility")&&"hidden"!=E(t,"visibility");for(B-=n,L+=n,F-=n,S+=n;s&&(r=r.offsetParent)&&r!=e.body&&r!=a;)(s=(E(r,"opacity")||1)>0)&&"visible"!=E(r,"overflow")&&(i=r.getBoundingClientRect(),s=S>i.left&&F<i.right&&L>i.top-1&&B<i.bottom+1);return s},K=function(){var t,r,o,c,d,f,m,v,y,g=n.elements;if((z=i.loadMode)&&8>q&&(t=g.length)){r=0,j++,null==k&&("expand"in i||(i.expand=a.clientHeight>500&&a.clientWidth>500?500:370),R=i.expand,k=R*i.expFactor),k>I&&1>q&&j>2&&z>2&&!e.hidden?(I=k,j=0):I=z>1&&j>1&&6>q?R:$;for(;t>r;r++)if(g[r]&&!g[r]._lazyRace)if(P)if((v=g[r][l]("data-expand"))&&(f=1*v)||(f=I),y!==f&&(w=innerWidth+f*D,x=innerHeight+f,m=-1*f,y=f),o=g[r].getBoundingClientRect(),(L=o.bottom)>=m&&(B=o.top)<=x&&(S=o.right)>=m*D&&(F=o.left)<=w&&(L||S||F||B)&&(i.loadHidden||"hidden"!=E(g[r],"visibility"))&&(u&&3>q&&!v&&(3>z||4>j)||J(g[r],f))){if(et(g[r]),d=!0,q>9)break}else!d&&u&&!c&&4>q&&4>j&&z>2&&(s[0]||i.preloadAfterLoad)&&(s[0]||!v&&(L||S||F||B||"auto"!=g[r][l](i.sizesAttr)))&&(c=s[0]||g[r]);else et(g[r]);c&&!d&&et(c)}},Q=_(K),U=function(t){h(t.target,i.loadedClass),p(t.target,i.loadingClass),C(t.target,X),b(t.target,"lazyloaded")},V=N(U),X=function(t){V({target:t.target})},Y=function(t,e){try{t.contentWindow.location.replace(e)}catch(n){t.src=e}},Z=function(t){var e,n=t[l](i.srcsetAttr);(e=i.customMedia[t[l]("data-media")||t[l]("media")])&&t.setAttribute("media",e),n&&t.setAttribute("srcset",n)},tt=N((function(t,e,n,a,r){var s,o,c,u,z,v;(z=b(t,"lazybeforeunveil",e)).defaultPrevented||(a&&(n?h(t,i.autosizesClass):t.setAttribute("sizes",a)),o=t[l](i.srcsetAttr),s=t[l](i.srcAttr),r&&(u=(c=t.parentNode)&&m.test(c.nodeName||"")),v=e.firesLoad||"src"in t&&(o||s||u),z={target:t},v&&(C(t,G,!0),clearTimeout(f),f=d(G,2500),h(t,i.loadingClass),C(t,X,!0)),u&&y.call(c.getElementsByTagName("source"),Z),o?t.setAttribute("srcset",o):s&&!u&&(O.test(t.nodeName)?Y(t,s):t.src=s),r&&(o||u)&&A(t,{src:s})),t._lazyRace&&delete t._lazyRace,p(t,i.lazyClass),M((function(){(!v||t.complete&&t.naturalWidth>1)&&(v?G(z):q--,U(z))}),!0)})),et=function(t){var e,n=H.test(t.nodeName),a=n&&(t[l](i.sizesAttr)||t[l]("sizes")),r="auto"==a;(!r&&u||!n||!t[l]("src")&&!t.srcset||t.complete||g(t,i.errorClass)||!g(t,i.lazyClass))&&(e=b(t,"lazyunveilread").detail,r&&T.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,q++,tt(t,e,r,a,n))},nt=function(){if(!u){if(r.now()-v<999)return void d(nt,999);var t=W((function(){i.loadMode=3,Q()}));u=!0,i.loadMode=3,Q(),c("scroll",(function(){3==i.loadMode&&(i.loadMode=2),t()}),!0)}};return{_:function(){v=r.now(),n.elements=e.getElementsByClassName(i.lazyClass),s=e.getElementsByClassName(i.lazyClass+" "+i.preloadClass),D=i.hFac,c("scroll",Q,!0),c("resize",Q,!0),t.MutationObserver?new MutationObserver(Q).observe(a,{childList:!0,subtree:!0,attributes:!0}):(a[o]("DOMNodeInserted",Q,!0),a[o]("DOMAttrModified",Q,!0),setInterval(Q,999)),c("hashchange",Q,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach((function(t){e[o](t,Q,!0)})),/d$|^c/.test(e.readyState)?nt():(c("load",nt),e[o]("DOMContentLoaded",Q),d(nt,2e4)),n.elements.length?(K(),M._lsFlush()):Q()},checkElems:Q,unveil:et}}(),T=function(){var t,n=N((function(t,e,n,i){var a,r,s;if(t._lazysizesWidth=i,i+="px",t.setAttribute("sizes",i),m.test(e.nodeName||""))for(r=0,s=(a=e.getElementsByTagName("source")).length;s>r;r++)a[r].setAttribute("sizes",i);n.detail.dataAttr||A(t,n.detail)})),a=function(t,e,i){var a,r=t.parentNode;r&&(i=w(t,r,i),(a=b(t,"lazybeforesizes",{width:i,dataAttr:!!e})).defaultPrevented||(i=a.detail.width)&&i!==t._lazysizesWidth&&n(t,r,a,i))},r=W((function(){var e,n=t.length;if(n)for(e=0;n>e;e++)a(t[e])}));return{_:function(){t=e.getElementsByClassName(i.autosizesClass),c("resize",r)},checkElems:r,updateElem:a}}(),B=function(){B.i||(B.i=!0,T._(),x._())};return n={cfg:i,autoSizer:T,loader:x,init:B,uP:A,aC:h,rC:p,hC:g,fire:b,gW:w,rAF:M}}}(t,t.document);t.lazySizes=n,"object"==typeof module&&module.exports&&(module.exports=n)}(window);