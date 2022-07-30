import{r as s,s as ee,j as R,Z as te,i as C,C as K,n as j,g as l,e as Q,x as U,b as W}from"./index.d1435756.js";import{b as re,d as q,r as D}from"./useFlexGapSupport.88480f61.js";var de=s.exports.createContext({labelAlign:"right",vertical:!1,itemRef:function(){}}),pe=s.exports.createContext(null),ve=function(c){var r=ee(c,["prefixCls"]);return R(te,{...r})},xe=s.exports.createContext({prefixCls:""}),J=s.exports.createContext({}),me=function(c){var r=c.children,t=c.status,a=c.override,v=s.exports.useContext(J),x=s.exports.useMemo(function(){var i=C({},v);return a&&delete i.isFormItemInput,t&&(delete i.status,delete i.hasFeedback,delete i.feedbackIcon),i},[t,a,v]);return R(J.Provider,{value:x,children:r})},ae=s.exports.createContext({});const X=ae;var oe=globalThis&&globalThis.__rest||function(e,c){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&c.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)c.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};function ne(e){return typeof e=="number"?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}var se=["xs","sm","md","lg","xl","xxl"],ce=s.exports.forwardRef(function(e,c){var r,t=s.exports.useContext(K),a=t.getPrefixCls,v=t.direction,x=s.exports.useContext(X),i=x.gutter,E=x.wrap,F=x.supportFlexGap,h=e.prefixCls,b=e.span,N=e.order,P=e.offset,S=e.push,I=e.pull,k=e.className,$=e.children,G=e.flex,B=e.style,w=oe(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),u=a("col",h),O={};se.forEach(function(d){var f,o={},y=e[d];typeof y=="number"?o.span=y:j(y)==="object"&&(o=y||{}),delete w[d],O=C(C({},O),(f={},l(f,"".concat(u,"-").concat(d,"-").concat(o.span),o.span!==void 0),l(f,"".concat(u,"-").concat(d,"-order-").concat(o.order),o.order||o.order===0),l(f,"".concat(u,"-").concat(d,"-offset-").concat(o.offset),o.offset||o.offset===0),l(f,"".concat(u,"-").concat(d,"-push-").concat(o.push),o.push||o.push===0),l(f,"".concat(u,"-").concat(d,"-pull-").concat(o.pull),o.pull||o.pull===0),l(f,"".concat(u,"-rtl"),v==="rtl"),f))});var m=Q(u,(r={},l(r,"".concat(u,"-").concat(b),b!==void 0),l(r,"".concat(u,"-order-").concat(N),N),l(r,"".concat(u,"-offset-").concat(P),P),l(r,"".concat(u,"-push-").concat(S),S),l(r,"".concat(u,"-pull-").concat(I),I),r),k,O),n={};if(i&&i[0]>0){var A=i[0]/2;n.paddingLeft=A,n.paddingRight=A}if(i&&i[1]>0&&!F){var p=i[1]/2;n.paddingTop=p,n.paddingBottom=p}return G&&(n.flex=ne(G),E===!1&&!n.minWidth&&(n.minWidth=0)),R("div",{...w,style:C(C({},n),B),className:m,ref:c,children:$})});const ye=ce;var le=globalThis&&globalThis.__rest||function(e,c){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&c.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)c.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};U("top","middle","bottom","stretch");U("start","end","center","space-around","space-between","space-evenly");var ie=s.exports.forwardRef(function(e,c){var r,t=e.prefixCls,a=e.justify,v=e.align,x=e.className,i=e.style,E=e.children,F=e.gutter,h=F===void 0?0:F,b=e.wrap,N=le(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),P=s.exports.useContext(K),S=P.getPrefixCls,I=P.direction,k=s.exports.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),$=W(k,2),G=$[0],B=$[1],w=re(),u=s.exports.useRef(h);s.exports.useEffect(function(){var V=q.subscribe(function(_){var g=u.current||0;(!Array.isArray(g)&&j(g)==="object"||Array.isArray(g)&&(j(g[0])==="object"||j(g[1])==="object"))&&B(_)});return function(){return q.unsubscribe(V)}},[]);var O=function(){var _=[void 0,void 0],g=Array.isArray(h)?h:[h,void 0];return g.forEach(function(T,Z){if(j(T)==="object")for(var L=0;L<D.length;L++){var M=D[L];if(G[M]&&T[M]!==void 0){_[Z]=T[M];break}}else _[Z]=T}),_},m=S("row",t),n=O(),A=Q(m,(r={},l(r,"".concat(m,"-no-wrap"),b===!1),l(r,"".concat(m,"-").concat(a),a),l(r,"".concat(m,"-").concat(v),v),l(r,"".concat(m,"-rtl"),I==="rtl"),r),x),p={},d=n[0]!=null&&n[0]>0?n[0]/-2:void 0,f=n[1]!=null&&n[1]>0?n[1]/-2:void 0;if(d&&(p.marginLeft=d,p.marginRight=d),w){var o=W(n,2);p.rowGap=o[1]}else f&&(p.marginTop=f,p.marginBottom=f);var y=W(n,2),z=y[0],H=y[1],Y=s.exports.useMemo(function(){return{gutter:[z,H],wrap:b,supportFlexGap:w}},[z,H,b,w]);return R(X.Provider,{value:Y,children:R("div",{...N,className:A,style:C(C({},p),i),ref:c,children:E})})});const ge=ie;export{ye as C,xe as F,pe as N,ge as R,de as a,J as b,ve as c,me as d};
