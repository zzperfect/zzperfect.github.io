(self["webpackChunkenhe_design"]=self["webpackChunkenhe_design"]||[]).push([[3401],{13401:function(e,n,r){"use strict";var t=r(45937),a=r(19877),o=r(4763),i=r(63309),c=r(67294),f=r(35510),u=r.n(f),l=r(63017),s=r(58784),d=r(59068),h=r(41755),g=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];(0,d.U)("#1890ff");var b=c.forwardRef((function(e,n){var r,f=e.className,d=e.icon,b=e.spin,m=e.rotate,p=e.tabIndex,v=e.onClick,y=e.twoToneColor,k=(0,i.Z)(e,g),x=c.useContext(l.Z),C=x.prefixCls,w=void 0===C?"anticon":C,A=u()(w,(r={},(0,o.Z)(r,"".concat(w,"-").concat(d.name),!!d.name),(0,o.Z)(r,"".concat(w,"-spin"),!!b||"loading"===d.name),r),f),F=p;void 0===F&&v&&(F=-1);var Z=m?{msTransform:"rotate(".concat(m,"deg)"),transform:"rotate(".concat(m,"deg)")}:void 0,M=(0,h.H9)(y),T=(0,a.Z)(M,2),E=T[0],D=T[1];return c.createElement("span",(0,t.Z)((0,t.Z)({role:"img","aria-label":d.name},k),{},{ref:n,tabIndex:F,onClick:v,className:A}),c.createElement(s.Z,{icon:d,primaryColor:E,secondaryColor:D,style:Z}))}));b.displayName="AntdIcon",b.getTwoToneColor=d.m,b.setTwoToneColor=d.U,n["Z"]=b},63017:function(e,n,r){"use strict";var t=r(67294),a=(0,t.createContext)({});n["Z"]=a},58784:function(e,n,r){"use strict";var t=r(63309),a=r(45937),o=r(41755),i=["icon","className","onClick","style","primaryColor","secondaryColor"],c={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function f(e){var n=e.primaryColor,r=e.secondaryColor;c.primaryColor=n,c.secondaryColor=r||(0,o.pw)(n),c.calculated=!!r}function u(){return(0,a.Z)({},c)}var l=function(e){var n=e.icon,r=e.className,f=e.onClick,u=e.style,l=e.primaryColor,s=e.secondaryColor,d=(0,t.Z)(e,i),h=c;if(l&&(h={primaryColor:l,secondaryColor:s||(0,o.pw)(l)}),(0,o.C3)(),(0,o.Kp)((0,o.r)(n),"icon should be icon definiton, but got ".concat(n)),!(0,o.r)(n))return null;var g=n;return g&&"function"===typeof g.icon&&(g=(0,a.Z)((0,a.Z)({},g),{},{icon:g.icon(h.primaryColor,h.secondaryColor)})),(0,o.R_)(g.icon,"svg-".concat(g.name),(0,a.Z)({className:r,onClick:f,style:u,"data-icon":g.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},d))};l.displayName="IconReact",l.getTwoToneColors=u,l.setTwoToneColors=f,n["Z"]=l},59068:function(e,n,r){"use strict";r.d(n,{U:function(){return i},m:function(){return c}});var t=r(19877),a=r(58784),o=r(41755);function i(e){var n=(0,o.H9)(e),r=(0,t.Z)(n,2),i=r[0],c=r[1];return a.Z.setTwoToneColors({primaryColor:i,secondaryColor:c})}function c(){var e=a.Z.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}},41755:function(e,n,r){"use strict";r.d(n,{Kp:function(){return l},r:function(){return s},R_:function(){return h},pw:function(){return g},H9:function(){return b},vD:function(){return m},C3:function(){return v}});var t=r(45937),a=r(95676),o=r(398),i=r(67294),c=r(32503),f=r(78536),u=r(63017);function l(e,n){(0,c.ZP)(e,"[@ant-design/icons] ".concat(n))}function s(e){return"object"===(0,a.Z)(e)&&"string"===typeof e.name&&"string"===typeof e.theme&&("object"===(0,a.Z)(e.icon)||"function"===typeof e.icon)}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(n,r){var t=e[r];switch(r){case"class":n.className=t,delete n.class;break;default:n[r]=t}return n}),{})}function h(e,n,r){return r?i.createElement(e.tag,(0,t.Z)((0,t.Z)({key:n},d(e.attrs)),r),(e.children||[]).map((function(r,t){return h(r,"".concat(n,"-").concat(e.tag,"-").concat(t))}))):i.createElement(e.tag,(0,t.Z)({key:n},d(e.attrs)),(e.children||[]).map((function(r,t){return h(r,"".concat(n,"-").concat(e.tag,"-").concat(t))})))}function g(e){return(0,o.R_)(e)[0]}function b(e){return e?Array.isArray(e)?e:[e]:[]}var m={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},p="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=(0,i.useContext)(u.Z),r=n.csp;(0,i.useEffect)((function(){(0,f.hq)(e,"@ant-design-icons",{prepend:!0,csp:r})}),[])}},398:function(e,n,r){"use strict";r.d(n,{R_:function(){return y},ez:function(){return k}});var t=r(78145),a=r(76780),o=2,i=.16,c=.05,f=.05,u=.15,l=5,s=4,d=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function h(e){var n=e.r,r=e.g,a=e.b,o=(0,t.py)(n,r,a);return{h:360*o.h,s:o.s,v:o.v}}function g(e){var n=e.r,r=e.g,a=e.b;return"#".concat((0,t.vq)(n,r,a,!1))}function b(e,n,r){var t=r/100,a={r:(n.r-e.r)*t+e.r,g:(n.g-e.g)*t+e.g,b:(n.b-e.b)*t+e.b};return a}function m(e,n,r){var t;return t=Math.round(e.h)>=60&&Math.round(e.h)<=240?r?Math.round(e.h)-o*n:Math.round(e.h)+o*n:r?Math.round(e.h)+o*n:Math.round(e.h)-o*n,t<0?t+=360:t>=360&&(t-=360),t}function p(e,n,r){return 0===e.h&&0===e.s?e.s:(t=r?e.s-i*n:n===s?e.s+i:e.s+c*n,t>1&&(t=1),r&&n===l&&t>.1&&(t=.1),t<.06&&(t=.06),Number(t.toFixed(2)));var t}function v(e,n,r){var t;return t=r?e.v+f*n:e.v-u*n,t>1&&(t=1),Number(t.toFixed(2))}function y(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=[],t=(0,a.uA)(e),o=l;o>0;o-=1){var i=h(t),c=g((0,a.uA)({h:m(i,o,!0),s:p(i,o,!0),v:v(i,o,!0)}));r.push(c)}r.push(g(t));for(var f=1;f<=s;f+=1){var u=h(t),y=g((0,a.uA)({h:m(u,f),s:p(u,f),v:v(u,f)}));r.push(y)}return"dark"===n.theme?d.map((function(e){var t=e.index,o=e.opacity,i=g(b((0,a.uA)(n.backgroundColor||"#141414"),(0,a.uA)(r[t]),100*o));return i})):r}var k={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},x={},C={};Object.keys(k).forEach((function(e){x[e]=y(k[e]),x[e].primary=x[e][5],C[e]=y(k[e],{theme:"dark",backgroundColor:"#141414"}),C[e].primary=C[e][5]}));x.red,x.volcano,x.gold,x.orange,x.yellow,x.lime,x.green,x.cyan,x.blue,x.geekblue,x.purple,x.magenta,x.grey},78145:function(e,n,r){"use strict";r.d(n,{rW:function(){return a},lC:function(){return o},ve:function(){return c},py:function(){return f},WE:function(){return u},vq:function(){return l},s:function(){return s},T6:function(){return h},VD:function(){return g},Yt:function(){return b}});var t=r(36822);function a(e,n,r){return{r:255*(0,t.sh)(e,255),g:255*(0,t.sh)(n,255),b:255*(0,t.sh)(r,255)}}function o(e,n,r){e=(0,t.sh)(e,255),n=(0,t.sh)(n,255),r=(0,t.sh)(r,255);var a=Math.max(e,n,r),o=Math.min(e,n,r),i=0,c=0,f=(a+o)/2;if(a===o)c=0,i=0;else{var u=a-o;switch(c=f>.5?u/(2-a-o):u/(a+o),a){case e:i=(n-r)/u+(n<r?6:0);break;case n:i=(r-e)/u+2;break;case r:i=(e-n)/u+4;break;default:break}i/=6}return{h:i,s:c,l:f}}function i(e,n,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*r*(n-e):r<.5?n:r<2/3?e+(n-e)*(2/3-r)*6:e}function c(e,n,r){var a,o,c;if(e=(0,t.sh)(e,360),n=(0,t.sh)(n,100),r=(0,t.sh)(r,100),0===n)o=r,c=r,a=r;else{var f=r<.5?r*(1+n):r+n-r*n,u=2*r-f;a=i(u,f,e+1/3),o=i(u,f,e),c=i(u,f,e-1/3)}return{r:255*a,g:255*o,b:255*c}}function f(e,n,r){e=(0,t.sh)(e,255),n=(0,t.sh)(n,255),r=(0,t.sh)(r,255);var a=Math.max(e,n,r),o=Math.min(e,n,r),i=0,c=a,f=a-o,u=0===a?0:f/a;if(a===o)i=0;else{switch(a){case e:i=(n-r)/f+(n<r?6:0);break;case n:i=(r-e)/f+2;break;case r:i=(e-n)/f+4;break;default:break}i/=6}return{h:i,s:u,v:c}}function u(e,n,r){e=6*(0,t.sh)(e,360),n=(0,t.sh)(n,100),r=(0,t.sh)(r,100);var a=Math.floor(e),o=e-a,i=r*(1-n),c=r*(1-o*n),f=r*(1-(1-o)*n),u=a%6,l=[r,c,i,i,f,r][u],s=[f,r,r,c,i,i][u],d=[i,i,f,r,r,c][u];return{r:255*l,g:255*s,b:255*d}}function l(e,n,r,a){var o=[(0,t.FZ)(Math.round(e).toString(16)),(0,t.FZ)(Math.round(n).toString(16)),(0,t.FZ)(Math.round(r).toString(16))];return a&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function s(e,n,r,a,o){var i=[(0,t.FZ)(Math.round(e).toString(16)),(0,t.FZ)(Math.round(n).toString(16)),(0,t.FZ)(Math.round(r).toString(16)),(0,t.FZ)(d(a))];return o&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function d(e){return Math.round(255*parseFloat(e)).toString(16)}function h(e){return g(e)/255}function g(e){return parseInt(e,16)}function b(e){return{r:e>>16,g:(65280&e)>>8,b:255&e}}},84232:function(e,n,r){"use strict";r.d(n,{R:function(){return t}});var t={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},76780:function(e,n,r){"use strict";r.d(n,{uA:function(){return i}});var t=r(78145),a=r(84232),o=r(36822);function i(e){var n={r:0,g:0,b:0},r=1,a=null,i=null,c=null,f=!1,u=!1;return"string"===typeof e&&(e=h(e)),"object"===typeof e&&(g(e.r)&&g(e.g)&&g(e.b)?(n=(0,t.rW)(e.r,e.g,e.b),f=!0,u="%"===String(e.r).substr(-1)?"prgb":"rgb"):g(e.h)&&g(e.s)&&g(e.v)?(a=(0,o.JX)(e.s),i=(0,o.JX)(e.v),n=(0,t.WE)(e.h,a,i),f=!0,u="hsv"):g(e.h)&&g(e.s)&&g(e.l)&&(a=(0,o.JX)(e.s),c=(0,o.JX)(e.l),n=(0,t.ve)(e.h,a,c),f=!0,u="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(r=e.a)),r=(0,o.Yq)(r),{ok:f,format:e.format||u,r:Math.min(255,Math.max(n.r,0)),g:Math.min(255,Math.max(n.g,0)),b:Math.min(255,Math.max(n.b,0)),a:r}}var c="[-\\+]?\\d+%?",f="[-\\+]?\\d*\\.\\d+%?",u="(?:".concat(f,")|(?:").concat(c,")"),l="[\\s|\\(]+(".concat(u,")[,|\\s]+(").concat(u,")[,|\\s]+(").concat(u,")\\s*\\)?"),s="[\\s|\\(]+(".concat(u,")[,|\\s]+(").concat(u,")[,|\\s]+(").concat(u,")[,|\\s]+(").concat(u,")\\s*\\)?"),d={CSS_UNIT:new RegExp(u),rgb:new RegExp("rgb"+l),rgba:new RegExp("rgba"+s),hsl:new RegExp("hsl"+l),hsla:new RegExp("hsla"+s),hsv:new RegExp("hsv"+l),hsva:new RegExp("hsva"+s),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function h(e){if(e=e.trim().toLowerCase(),0===e.length)return!1;var n=!1;if(a.R[e])e=a.R[e],n=!0;else if("transparent"===e)return{r:0,g:0,b:0,a:0,format:"name"};var r=d.rgb.exec(e);return r?{r:r[1],g:r[2],b:r[3]}:(r=d.rgba.exec(e),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=d.hsl.exec(e),r?{h:r[1],s:r[2],l:r[3]}:(r=d.hsla.exec(e),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=d.hsv.exec(e),r?{h:r[1],s:r[2],v:r[3]}:(r=d.hsva.exec(e),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=d.hex8.exec(e),r?{r:(0,t.VD)(r[1]),g:(0,t.VD)(r[2]),b:(0,t.VD)(r[3]),a:(0,t.T6)(r[4]),format:n?"name":"hex8"}:(r=d.hex6.exec(e),r?{r:(0,t.VD)(r[1]),g:(0,t.VD)(r[2]),b:(0,t.VD)(r[3]),format:n?"name":"hex"}:(r=d.hex4.exec(e),r?{r:(0,t.VD)(r[1]+r[1]),g:(0,t.VD)(r[2]+r[2]),b:(0,t.VD)(r[3]+r[3]),a:(0,t.T6)(r[4]+r[4]),format:n?"name":"hex8"}:(r=d.hex3.exec(e),!!r&&{r:(0,t.VD)(r[1]+r[1]),g:(0,t.VD)(r[2]+r[2]),b:(0,t.VD)(r[3]+r[3]),format:n?"name":"hex"})))))))))}function g(e){return Boolean(d.CSS_UNIT.exec(String(e)))}},36822:function(e,n,r){"use strict";function t(e,n){o(e)&&(e="100%");var r=i(e);return e=360===n?e:Math.min(n,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*n),10)/100),Math.abs(e-n)<1e-6?1:(e=360===n?(e<0?e%n+n:e%n)/parseFloat(String(n)):e%n/parseFloat(String(n)),e)}function a(e){return Math.min(1,Math.max(0,e))}function o(e){return"string"===typeof e&&-1!==e.indexOf(".")&&1===parseFloat(e)}function i(e){return"string"===typeof e&&-1!==e.indexOf("%")}function c(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function f(e){return e<=1?"".concat(100*Number(e),"%"):e}function u(e){return 1===e.length?"0"+e:String(e)}r.d(n,{sh:function(){return t},V2:function(){return a},Yq:function(){return c},JX:function(){return f},FZ:function(){return u}})},78536:function(e,n,r){"use strict";r.d(n,{hq:function(){return l}});var t=r(20064),a="rc-util-key";function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.mark;return n?n.startsWith("data-")?n:"data-".concat(n):a}function i(e){if(e.attachTo)return e.attachTo;var n=document.querySelector("head");return n||document.body}function c(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(0,t.Z)())return null;var a,o=document.createElement("style");(null===(n=r.csp)||void 0===n?void 0:n.nonce)&&(o.nonce=null===(a=r.csp)||void 0===a?void 0:a.nonce);o.innerHTML=e;var c=i(r),f=c.firstChild;return r.prepend&&c.prepend?c.prepend(o):r.prepend&&f?c.insertBefore(o,f):c.appendChild(o),o}var f=new Map;function u(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i(n);return Array.from(f.get(r).children).find((function(r){return"STYLE"===r.tagName&&r.getAttribute(o(n))===e}))}function l(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=i(r);if(!f.has(t)){var a=c("",r),l=a.parentNode;f.set(t,l),l.removeChild(a)}var s=u(n,r);if(s){var d,h,g;if((null===(d=r.csp)||void 0===d?void 0:d.nonce)&&s.nonce!==(null===(h=r.csp)||void 0===h?void 0:h.nonce))s.nonce=null===(g=r.csp)||void 0===g?void 0:g.nonce;return s.innerHTML!==e&&(s.innerHTML=e),s}var b=c(e,r);return b.setAttribute(o(r),n),b}}}]);