(self["webpackChunkenhe_design"]=self["webpackChunkenhe_design"]||[]).push([[2886],{42886:function(e,t,n){"use strict";n.d(t,{J:function(){return F},Z:function(){return Q}});var a=n(3066),r=n(4763),o=n(19877),i=n(95676),c=n(63309),l=n(45937),u=n(67294),s=n(35510),f=n.n(s),d=n(10048),v=n(44581),m=n(82321),b=n(66156),h=n(90468),p=n(83710);function y(e){var t=(0,u.useRef)(),n=(0,u.useRef)(!1);function a(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];n.current||(h.Z.cancel(t.current),t.current=(0,h.Z)((function(){e.apply(void 0,r)})))}return(0,u.useEffect)((function(){return function(){n.current=!0,h.Z.cancel(t.current)}}),[]),a}function Z(e){var t=(0,u.useRef)([]),n=(0,u.useState)({}),a=(0,o.Z)(n,2),r=a[1],i=(0,u.useRef)("function"===typeof e?e():e),c=y((function(){var e=i.current;t.current.forEach((function(t){e=t(e)})),t.current=[],i.current=e,r({})}));function l(e){t.current.push(e),c()}return[i.current,l]}var g=n(90826);function E(e,t){var n,a=e.prefixCls,o=e.id,i=e.active,c=e.tab,l=c.key,s=c.tab,d=c.disabled,v=c.closeIcon,m=e.closable,b=e.renderWrapper,h=e.removeAriaLabel,p=e.editable,y=e.onClick,Z=e.onRemove,E=e.onFocus,k=e.style,w="".concat(a,"-tab");u.useEffect((function(){return Z}),[]);var x=p&&!1!==m&&!d;function C(e){d||y(e)}function T(e){e.preventDefault(),e.stopPropagation(),p.onEdit("remove",{key:l,event:e})}var N=u.createElement("div",{key:l,ref:t,className:f()(w,(n={},(0,r.Z)(n,"".concat(w,"-with-remove"),x),(0,r.Z)(n,"".concat(w,"-active"),i),(0,r.Z)(n,"".concat(w,"-disabled"),d),n)),style:k,onClick:C},u.createElement("div",{role:"tab","aria-selected":i,id:o&&"".concat(o,"-tab-").concat(l),className:"".concat(w,"-btn"),"aria-controls":o&&"".concat(o,"-panel-").concat(l),"aria-disabled":d,tabIndex:d?null:0,onClick:function(e){e.stopPropagation(),C(e)},onKeyDown:function(e){[g.Z.SPACE,g.Z.ENTER].includes(e.which)&&(e.preventDefault(),C(e))},onFocus:E},s),x&&u.createElement("button",{type:"button","aria-label":h||"remove",tabIndex:0,className:"".concat(w,"-remove"),onClick:function(e){e.stopPropagation(),T(e)}},v||p.removeIcon||"\xd7"));return b?b(N):N}var k=u.forwardRef(E),w={width:0,height:0,left:0,top:0};function x(e,t,n){return(0,u.useMemo)((function(){for(var n,a=new Map,r=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||w,o=r.left+r.width,i=0;i<e.length;i+=1){var c,u=e[i].key,s=t.get(u);if(!s)s=t.get(null===(c=e[i-1])||void 0===c?void 0:c.key)||w;var f=a.get(u)||(0,l.Z)({},s);f.right=o-f.left-f.width,a.set(u,f)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}var C={width:0,height:0,left:0,top:0,right:0};function T(e,t,n,a,r){var o,i,c,l=r.tabs,s=r.tabPosition,f=r.rtl;["top","bottom"].includes(s)?(o="width",i=f?"right":"left",c=Math.abs(t.left)):(o="height",i="top",c=-t.top);var d=t[o],v=n[o],m=a[o],b=d;return v+m>d&&v<d&&(b=d-m),(0,u.useMemo)((function(){if(!l.length)return[0,0];for(var t=l.length,n=t,a=0;a<t;a+=1){var r=e.get(l[a].key)||C;if(r[i]+r[o]>c+b){n=a-1;break}}for(var u=0,s=t-1;s>=0;s-=1){var f=e.get(l[s].key)||C;if(f[i]<c){u=s+1;break}}return[u,n]}),[e,c,b,s,l.map((function(e){return e.key})).join("_"),f])}var N=n(63250),R=n(84602);function S(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,o=e.style;return a&&!1!==a.showAdd?u.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(null===r||void 0===r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}var I=u.forwardRef(S);function P(e,t){var n=e.prefixCls,a=e.id,i=e.tabs,c=e.locale,l=e.mobile,s=e.moreIcon,d=void 0===s?"More":s,v=e.moreTransitionName,m=e.style,b=e.className,h=e.editable,p=e.tabBarGutter,y=e.rtl,Z=e.removeAriaLabel,E=e.onTabClick,k=(0,u.useState)(!1),w=(0,o.Z)(k,2),x=w[0],C=w[1],T=(0,u.useState)(null),S=(0,o.Z)(T,2),P=S[0],M=S[1],L="".concat(a,"-more-popup"),B="".concat(n,"-dropdown"),D=null!==P?"".concat(L,"-").concat(P):null,A=null===c||void 0===c?void 0:c.dropdownAriaLabel;function K(e,t){e.preventDefault(),e.stopPropagation(),h.onEdit("remove",{key:t,event:e})}var W=u.createElement(N.ZP,{onClick:function(e){var t=e.key,n=e.domEvent;E(t,n),C(!1)},id:L,tabIndex:-1,role:"listbox","aria-activedescendant":D,selectedKeys:[P],"aria-label":void 0!==A?A:"expanded dropdown"},i.map((function(e){var t=h&&!1!==e.closable&&!e.disabled;return u.createElement(N.sN,{key:e.key,id:"".concat(L,"-").concat(e.key),role:"option","aria-controls":a&&"".concat(a,"-panel-").concat(e.key),disabled:e.disabled},u.createElement("span",null,e.tab),t&&u.createElement("button",{type:"button","aria-label":Z||"remove",tabIndex:0,className:"".concat(B,"-menu-item-remove"),onClick:function(t){t.stopPropagation(),K(t,e.key)}},e.closeIcon||h.removeIcon||"\xd7"))})));function j(e){for(var t=i.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===P}))||0,a=t.length,r=0;r<a;r+=1){n=(n+e+a)%a;var o=t[n];if(!o.disabled)return void M(o.key)}}function V(e){var t=e.which;if(x)switch(t){case g.Z.UP:j(-1),e.preventDefault();break;case g.Z.DOWN:j(1),e.preventDefault();break;case g.Z.ESC:C(!1);break;case g.Z.SPACE:case g.Z.ENTER:null!==P&&E(P,e);break}else[g.Z.DOWN,g.Z.SPACE,g.Z.ENTER].includes(t)&&(C(!0),e.preventDefault())}(0,u.useEffect)((function(){var e=document.getElementById(D);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[P]),(0,u.useEffect)((function(){x||M(null)}),[x]);var _=(0,r.Z)({},y?"marginRight":"marginLeft",p);i.length||(_.visibility="hidden",_.order=1);var G=f()((0,r.Z)({},"".concat(B,"-rtl"),y)),H=l?null:u.createElement(R.Z,{prefixCls:B,overlay:W,trigger:["hover"],visible:x,transitionName:v,onVisibleChange:C,overlayClassName:G,mouseEnterDelay:.1,mouseLeaveDelay:.1},u.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:_,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":L,id:"".concat(a,"-more"),"aria-expanded":x,onKeyDown:V},d));return u.createElement("div",{className:f()("".concat(n,"-nav-operations"),b),style:m,ref:t},H,u.createElement(I,{prefixCls:n,locale:c,editable:h}))}var M=u.memo(u.forwardRef(P),(function(e,t){return t.tabMoving})),L=(0,u.createContext)(null),B=.1,D=.01,A=20,K=Math.pow(.995,A);function W(e,t){var n=(0,u.useState)(),a=(0,o.Z)(n,2),r=a[0],i=a[1],c=(0,u.useState)(0),l=(0,o.Z)(c,2),s=l[0],f=l[1],d=(0,u.useState)(0),v=(0,o.Z)(d,2),m=v[0],b=v[1],h=(0,u.useState)(),p=(0,o.Z)(h,2),y=p[0],Z=p[1],g=(0,u.useRef)();function E(e){var t=e.touches[0],n=t.screenX,a=t.screenY;i({x:n,y:a}),window.clearInterval(g.current)}function k(e){if(r){e.preventDefault();var n=e.touches[0],a=n.screenX,o=n.screenY;i({x:a,y:o});var c=a-r.x,l=o-r.y;t(c,l);var u=Date.now();f(u),b(u-s),Z({x:c,y:l})}}function w(){if(r&&(i(null),Z(null),y)){var e=y.x/m,n=y.y/m,a=Math.abs(e),o=Math.abs(n);if(Math.max(a,o)<B)return;var c=e,l=n;g.current=window.setInterval((function(){Math.abs(c)<D&&Math.abs(l)<D?window.clearInterval(g.current):(c*=K,l*=K,t(c*A,l*A))}),A)}}var x=(0,u.useRef)();function C(e){var n=e.deltaX,a=e.deltaY,r=0,o=Math.abs(n),i=Math.abs(a);o===i?r="x"===x.current?n:a:o>i?(r=n,x.current="x"):(r=a,x.current="y"),t(-r,-r)&&e.preventDefault()}var T=(0,u.useRef)(null);T.current={onTouchStart:E,onTouchMove:k,onTouchEnd:w,onWheel:C},u.useEffect((function(){function t(e){T.current.onTouchStart(e)}function n(e){T.current.onTouchMove(e)}function a(e){T.current.onTouchEnd(e)}function r(e){T.current.onWheel(e)}return document.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchend",a,{passive:!1}),e.current.addEventListener("touchstart",t,{passive:!1}),e.current.addEventListener("wheel",r),function(){document.removeEventListener("touchmove",n),document.removeEventListener("touchend",a)}}),[])}function j(){var e=(0,u.useRef)(new Map);function t(t){return e.current.has(t)||e.current.set(t,u.createRef()),e.current.get(t)}function n(t){e.current["delete"](t)}return[t,n]}function V(e,t){var n=u.useRef(e),a=u.useState({}),r=(0,o.Z)(a,2),i=r[1];function c(e){var a="function"===typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,i({})}return[n.current,c]}var _=function(e){var t,n=e.position,a=e.prefixCls,r=e.extra;if(!r)return null;var o={};return r&&"object"===(0,i.Z)(r)&&!u.isValidElement(r)?o=r:o.right=r,"right"===n&&(t=o.right),"left"===n&&(t=o.left),t?u.createElement("div",{className:"".concat(a,"-extra-content")},t):null};function G(e,t){var n,i=u.useContext(L),c=i.prefixCls,s=i.tabs,d=e.className,v=e.style,m=e.id,g=e.animated,E=e.activeKey,w=e.rtl,C=e.extra,N=e.editable,R=e.locale,S=e.tabPosition,P=e.tabBarGutter,B=e.children,D=e.onTabClick,A=e.onTabScroll,K=(0,u.useRef)(),G=(0,u.useRef)(),H=(0,u.useRef)(),Y=(0,u.useRef)(),F=j(),X=(0,o.Z)(F,2),z=X[0],O=X[1],J="top"===S||"bottom"===S,U=V(0,(function(e,t){J&&A&&A({direction:e>t?"left":"right"})})),q=(0,o.Z)(U,2),Q=q[0],$=q[1],ee=V(0,(function(e,t){!J&&A&&A({direction:e>t?"top":"bottom"})})),te=(0,o.Z)(ee,2),ne=te[0],ae=te[1],re=(0,u.useState)(0),oe=(0,o.Z)(re,2),ie=oe[0],ce=oe[1],le=(0,u.useState)(0),ue=(0,o.Z)(le,2),se=ue[0],fe=ue[1],de=(0,u.useState)(null),ve=(0,o.Z)(de,2),me=ve[0],be=ve[1],he=(0,u.useState)(null),pe=(0,o.Z)(he,2),ye=pe[0],Ze=pe[1],ge=(0,u.useState)(0),Ee=(0,o.Z)(ge,2),ke=Ee[0],we=Ee[1],xe=(0,u.useState)(0),Ce=(0,o.Z)(xe,2),Te=Ce[0],Ne=Ce[1],Re=Z(new Map),Se=(0,o.Z)(Re,2),Ie=Se[0],Pe=Se[1],Me=x(s,Ie,ie),Le="".concat(c,"-nav-operations-hidden"),Be=0,De=0;function Ae(e){return e<Be?Be:e>De?De:e}J?w?(Be=0,De=Math.max(0,ie-me)):(Be=Math.min(0,me-ie),De=0):(Be=Math.min(0,ye-se),De=0);var Ke=(0,u.useRef)(),We=(0,u.useState)(),je=(0,o.Z)(We,2),Ve=je[0],_e=je[1];function Ge(){_e(Date.now())}function He(){window.clearTimeout(Ke.current)}function Ye(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=Me.get(e)||{width:0,height:0,left:0,right:0,top:0};if(J){var n=Q;w?t.right<Q?n=t.right:t.right+t.width>Q+me&&(n=t.right+t.width-me):t.left<-Q?n=-t.left:t.left+t.width>-Q+me&&(n=-(t.left+t.width-me)),ae(0),$(Ae(n))}else{var a=ne;t.top<-ne?a=-t.top:t.top+t.height>-ne+ye&&(a=-(t.top+t.height-ye)),$(0),ae(Ae(a))}}W(K,(function(e,t){function n(e,t){e((function(e){var n=Ae(e+t);return n}))}if(J){if(me>=ie)return!1;n($,e)}else{if(ye>=se)return!1;n(ae,t)}return He(),Ge(),!0})),(0,u.useEffect)((function(){return He(),Ve&&(Ke.current=window.setTimeout((function(){_e(0)}),100)),He}),[Ve]);var Fe=T(Me,{width:me,height:ye,left:Q,top:ne},{width:ie,height:se},{width:ke,height:Te},(0,l.Z)((0,l.Z)({},e),{},{tabs:s})),Xe=(0,o.Z)(Fe,2),ze=Xe[0],Oe=Xe[1],Je={};"top"===S||"bottom"===S?Je[w?"marginRight":"marginLeft"]=P:Je.marginTop=P;var Ue=s.map((function(e,t){var n=e.key;return u.createElement(k,{id:m,prefixCls:c,key:n,tab:e,style:0===t?void 0:Je,closable:e.closable,editable:N,active:n===E,renderWrapper:B,removeAriaLabel:null===R||void 0===R?void 0:R.removeAriaLabel,ref:z(n),onClick:function(e){D(n,e)},onRemove:function(){O(n)},onFocus:function(){Ye(n),Ge(),K.current&&(w||(K.current.scrollLeft=0),K.current.scrollTop=0)}})})),qe=y((function(){var e,t,n,a,r,o,i=(null===(e=K.current)||void 0===e?void 0:e.offsetWidth)||0,c=(null===(t=K.current)||void 0===t?void 0:t.offsetHeight)||0,l=(null===(n=Y.current)||void 0===n?void 0:n.offsetWidth)||0,u=(null===(a=Y.current)||void 0===a?void 0:a.offsetHeight)||0;be(i),Ze(c),we(l),Ne(u);var f=((null===(r=G.current)||void 0===r?void 0:r.offsetWidth)||0)-l,d=((null===(o=G.current)||void 0===o?void 0:o.offsetHeight)||0)-u;ce(f),fe(d),Pe((function(){var e=new Map;return s.forEach((function(t){var n=t.key,a=z(n).current;a&&e.set(n,{width:a.offsetWidth,height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop})})),e}))})),Qe=s.slice(0,ze),$e=s.slice(Oe+1),et=[].concat((0,b.Z)(Qe),(0,b.Z)($e)),tt=(0,u.useState)(),nt=(0,o.Z)(tt,2),at=nt[0],rt=nt[1],ot=Me.get(E),it=(0,u.useRef)();function ct(){h.Z.cancel(it.current)}(0,u.useEffect)((function(){var e={};return ot&&(J?(w?e.right=ot.right:e.left=ot.left,e.width=ot.width):(e.top=ot.top,e.height=ot.height)),ct(),it.current=(0,h.Z)((function(){rt(e)})),ct}),[ot,J,w]),(0,u.useEffect)((function(){Ye()}),[E,ot,Me,J]),(0,u.useEffect)((function(){qe()}),[w,P,E,s.map((function(e){return e.key})).join("_")]);var lt,ut,st,ft,dt=!!et.length,vt="".concat(c,"-nav-wrap");return J?w?(ut=Q>0,lt=Q+me<ie):(lt=Q<0,ut=-Q+me<ie):(st=ne<0,ft=-ne+ye<se),u.createElement("div",{ref:t,role:"tablist",className:f()("".concat(c,"-nav"),d),style:v,onKeyDown:function(){Ge()}},u.createElement(_,{position:"left",extra:C,prefixCls:c}),u.createElement(p.Z,{onResize:qe},u.createElement("div",{className:f()(vt,(n={},(0,r.Z)(n,"".concat(vt,"-ping-left"),lt),(0,r.Z)(n,"".concat(vt,"-ping-right"),ut),(0,r.Z)(n,"".concat(vt,"-ping-top"),st),(0,r.Z)(n,"".concat(vt,"-ping-bottom"),ft),n)),ref:K},u.createElement(p.Z,{onResize:qe},u.createElement("div",{ref:G,className:"".concat(c,"-nav-list"),style:{transform:"translate(".concat(Q,"px, ").concat(ne,"px)"),transition:Ve?"none":void 0}},Ue,u.createElement(I,{ref:Y,prefixCls:c,locale:R,editable:N,style:(0,l.Z)((0,l.Z)({},0===Ue.length?void 0:Je),{},{visibility:dt?"hidden":null})}),u.createElement("div",{className:f()("".concat(c,"-ink-bar"),(0,r.Z)({},"".concat(c,"-ink-bar-animated"),g.inkBar)),style:at}))))),u.createElement(M,(0,a.Z)({},e,{removeAriaLabel:null===R||void 0===R?void 0:R.removeAriaLabel,ref:H,prefixCls:c,tabs:et,className:!dt&&Le,tabMoving:!!Ve})),u.createElement(_,{position:"right",extra:C,prefixCls:c}))}var H=u.forwardRef(G);function Y(e){var t=e.id,n=e.activeKey,a=e.animated,o=e.tabPosition,i=e.rtl,c=e.destroyInactiveTabPane,l=u.useContext(L),s=l.prefixCls,d=l.tabs,v=a.tabPane,m=d.findIndex((function(e){return e.key===n}));return u.createElement("div",{className:f()("".concat(s,"-content-holder"))},u.createElement("div",{className:f()("".concat(s,"-content"),"".concat(s,"-content-").concat(o),(0,r.Z)({},"".concat(s,"-content-animated"),v)),style:m&&v?(0,r.Z)({},i?"marginRight":"marginLeft","-".concat(m,"00%")):null},d.map((function(e){return u.cloneElement(e.node,{key:e.key,prefixCls:s,tabKey:e.key,id:t,animated:v,active:e.key===n,destroyInactiveTabPane:c})}))))}function F(e){var t=e.prefixCls,n=e.forceRender,a=e.className,r=e.style,i=e.id,c=e.active,s=e.animated,d=e.destroyInactiveTabPane,v=e.tabKey,m=e.children,b=u.useState(n),h=(0,o.Z)(b,2),p=h[0],y=h[1];u.useEffect((function(){c?y(!0):d&&y(!1)}),[c,d]);var Z={};return c||(s?(Z.visibility="hidden",Z.height=0,Z.overflowY="hidden"):Z.display="none"),u.createElement("div",{id:i&&"".concat(i,"-panel-").concat(v),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":i&&"".concat(i,"-tab-").concat(v),"aria-hidden":!c,style:(0,l.Z)((0,l.Z)({},Z),r),className:f()("".concat(t,"-tabpane"),c&&"".concat(t,"-tabpane-active"),a)},(c||p||n)&&m)}var X=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"],z=0;function O(e){return(0,d.Z)(e).map((function(e){if(u.isValidElement(e)){var t=void 0!==e.key?String(e.key):void 0;return(0,l.Z)((0,l.Z)({key:t},e.props),{},{node:e})}return null})).filter((function(e){return e}))}function J(e,t){var n,s,d=e.id,b=e.prefixCls,h=void 0===b?"rc-tabs":b,p=e.className,y=e.children,Z=e.direction,g=e.activeKey,E=e.defaultActiveKey,k=e.editable,w=e.animated,x=void 0===w?{inkBar:!0,tabPane:!1}:w,C=e.tabPosition,T=void 0===C?"top":C,N=e.tabBarGutter,R=e.tabBarStyle,S=e.tabBarExtraContent,I=e.locale,P=e.moreIcon,M=e.moreTransitionName,B=e.destroyInactiveTabPane,D=e.renderTabBar,A=e.onChange,K=e.onTabClick,W=e.onTabScroll,j=(0,c.Z)(e,X),V=O(y),_="rtl"===Z;s=!1===x?{inkBar:!1,tabPane:!1}:!0===x?{inkBar:!0,tabPane:!0}:(0,l.Z)({inkBar:!0,tabPane:!1},"object"===(0,i.Z)(x)?x:{});var G=(0,u.useState)(!1),F=(0,o.Z)(G,2),J=F[0],U=F[1];(0,u.useEffect)((function(){U((0,v.Z)())}),[]);var q=(0,m.Z)((function(){var e;return null===(e=V[0])||void 0===e?void 0:e.key}),{value:g,defaultValue:E}),Q=(0,o.Z)(q,2),$=Q[0],ee=Q[1],te=(0,u.useState)((function(){return V.findIndex((function(e){return e.key===$}))})),ne=(0,o.Z)(te,2),ae=ne[0],re=ne[1];(0,u.useEffect)((function(){var e,t=V.findIndex((function(e){return e.key===$}));-1===t&&(t=Math.max(0,Math.min(ae,V.length-1)),ee(null===(e=V[t])||void 0===e?void 0:e.key));re(t)}),[V.map((function(e){return e.key})).join("_"),$,ae]);var oe=(0,m.Z)(null,{value:d}),ie=(0,o.Z)(oe,2),ce=ie[0],le=ie[1],ue=T;function se(e,t){null===K||void 0===K||K(e,t);var n=e!==$;ee(e),n&&(null===A||void 0===A||A(e))}J&&!["left","right"].includes(T)&&(ue="top"),(0,u.useEffect)((function(){d||(le("rc-tabs-".concat(z)),z+=1)}),[]);var fe,de={id:ce,activeKey:$,animated:s,tabPosition:ue,rtl:_,mobile:J},ve=(0,l.Z)((0,l.Z)({},de),{},{editable:k,locale:I,moreIcon:P,moreTransitionName:M,tabBarGutter:N,onTabClick:se,onTabScroll:W,extra:S,style:R,panes:y});return fe=D?D(ve,H):u.createElement(H,ve),u.createElement(L.Provider,{value:{tabs:V,prefixCls:h}},u.createElement("div",(0,a.Z)({ref:t,id:d,className:f()(h,"".concat(h,"-").concat(ue),(n={},(0,r.Z)(n,"".concat(h,"-mobile"),J),(0,r.Z)(n,"".concat(h,"-editable"),k),(0,r.Z)(n,"".concat(h,"-rtl"),_),n),p)},j),fe,u.createElement(Y,(0,a.Z)({destroyInactiveTabPane:B},de,{animated:s}))))}var U=u.forwardRef(J);U.TabPane=F;var q=U,Q=q}}]);