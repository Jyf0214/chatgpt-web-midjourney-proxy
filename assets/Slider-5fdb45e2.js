import{r as x,bt as We,e as V,f as a,bh as f,bi as P,g as se,bu as qe,bv as Ze,d as Ge,h as Je,k as fe,i as Qe,l as w,t as eo,j as oo,Z as de,bw as to,n as ce,p as no,q,s as h,V as ao,v as ro,bx as lo,x as io,T as so,by as co,bz as j,bA as N,al as W,F as ue}from"./index-b574640b.js";function he(n){return window.TouchEvent&&n instanceof window.TouchEvent}function ve(){const n=x(new Map),i=T=>p=>{n.value.set(T,p)};return We(()=>n.value.clear()),[n,i]}const uo=V([a("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[f("reverse",[a("slider-handles",[a("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),a("slider-dots",[a("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),f("vertical",[a("slider-handles",[a("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),a("slider-marks",[a("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),a("slider-dots",[a("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),f("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[a("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[a("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),a("slider-rail",`
 height: 100%;
 `,[P("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),f("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),a("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[a("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),a("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[a("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),f("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[a("slider-handle",`
 cursor: not-allowed;
 `)]),f("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),V("&:hover",[a("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[P("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),a("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),f("active",[a("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[P("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),a("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),a("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[a("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),a("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[P("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),a("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[a("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[a("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[V("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),V("&:focus",[a("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[V("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),a("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[f("transition-disabled",[a("slider-dot","transition: none;")]),a("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[f("active","border: var(--n-dot-border-active);")])])]),a("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[se()]),a("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[f("top",`
 margin-bottom: 12px;
 `),f("right",`
 margin-left: 12px;
 `),f("bottom",`
 margin-top: 12px;
 `),f("left",`
 margin-right: 12px;
 `),se()]),qe(a("slider",[a("slider-dot","background-color: var(--n-dot-color-modal);")])),Ze(a("slider",[a("slider-dot","background-color: var(--n-dot-color-popover);")]))]),ho=0,vo=Object.assign(Object.assign({},fe.props),{to:q.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),mo=Ge({name:"Slider",props:vo,setup(n){const{mergedClsPrefixRef:i,namespaceRef:T,inlineThemeDisabled:p}=Je(n),v=fe("Slider","-slider",uo,co,n,i),d=x(null),[M,C]=ve(),[me,be]=ve(),ge=x(new Set),Z=Qe(n),{mergedDisabledRef:D}=Z,G=w(()=>{const{step:e}=n;if(e<=0||e==="mark")return 0;const o=e.toString();let t=0;return o.includes(".")&&(t=o.length-o.indexOf(".")-1),t}),U=x(n.defaultValue),we=eo(n,"value"),O=oo(we,U),m=w(()=>{const{value:e}=O;return(n.range?e:[e]).map(ae)}),J=w(()=>m.value.length>2),pe=w(()=>n.placement===void 0?n.vertical?"right":"top":n.placement),Q=w(()=>{const{marks:e}=n;return e?Object.keys(e).map(parseFloat):null}),b=x(-1),ee=x(-1),y=x(-1),R=x(!1),$=x(!1),_=w(()=>{const{vertical:e,reverse:o}=n;return e?o?"top":"bottom":o?"right":"left"}),xe=w(()=>{if(J.value)return;const e=m.value,o=B(n.range?Math.min(...e):n.min),t=B(n.range?Math.max(...e):e[0]),{value:r}=_;return n.vertical?{[r]:`${o}%`,height:`${t-o}%`}:{[r]:`${o}%`,width:`${t-o}%`}}),ke=w(()=>{const e=[],{marks:o}=n;if(o){const t=m.value.slice();t.sort((c,u)=>c-u);const{value:r}=_,{value:l}=J,{range:s}=n,g=l?()=>!1:c=>s?c>=t[0]&&c<=t[t.length-1]:c<=t[0];for(const c of Object.keys(o)){const u=Number(c);e.push({active:g(u),label:o[c],style:{[r]:`${B(u)}%`}})}}return e});function ye(e,o){const t=B(e),{value:r}=_;return{[r]:`${t}%`,zIndex:o===b.value?1:0}}function oe(e){return n.showTooltip||y.value===e||b.value===e&&R.value}function Re(e){return R.value?!(b.value===e&&ee.value===e):!0}function ze(e){var o;~e&&(b.value=e,(o=M.value.get(e))===null||o===void 0||o.focus())}function Se(){me.value.forEach((e,o)=>{oe(o)&&e.syncPosition()})}function te(e){const{"onUpdate:value":o,onUpdateValue:t}=n,{nTriggerFormInput:r,nTriggerFormChange:l}=Z;t&&ue(t,e),o&&ue(o,e),U.value=e,r(),l()}function ne(e){const{range:o}=n;if(o){if(Array.isArray(e)){const{value:t}=m;e.join()!==t.join()&&te(e)}}else Array.isArray(e)||m.value[0]!==e&&te(e)}function L(e,o){if(n.range){const t=m.value.slice();t.splice(o,1,e),ne(t)}else ne(e)}function K(e,o,t){const r=t!==void 0;t||(t=e-o>0?1:-1);const l=Q.value||[],{step:s}=n;if(s==="mark"){const u=I(e,l.concat(o),r?t:void 0);return u?u.value:o}if(s<=0)return o;const{value:g}=G;let c;if(r){const u=Number((o/s).toFixed(g)),k=Math.floor(u),X=u>k?k:k-1,Y=u<k?k:k+1;c=I(o,[Number((X*s).toFixed(g)),Number((Y*s).toFixed(g)),...l],t)}else{const u=Ce(e);c=I(e,[...l,u])}return c?ae(c.value):o}function ae(e){return Math.min(n.max,Math.max(n.min,e))}function B(e){const{max:o,min:t}=n;return(e-t)/(o-t)*100}function Te(e){const{max:o,min:t}=n;return t+(o-t)*e}function Ce(e){const{step:o,min:t}=n;if(o<=0||o==="mark")return e;const r=Math.round((e-t)/o)*o+t;return Number(r.toFixed(G.value))}function I(e,o=Q.value,t){if(!(o!=null&&o.length))return null;let r=null,l=-1;for(;++l<o.length;){const s=o[l]-e,g=Math.abs(s);(t===void 0||s*t>0)&&(r===null||g<r.distance)&&(r={index:l,distance:g,value:o[l]})}return r}function re(e){const o=d.value;if(!o)return;const t=he(e)?e.touches[0]:e,r=o.getBoundingClientRect();let l;return n.vertical?l=(r.bottom-t.clientY)/r.height:l=(t.clientX-r.left)/r.width,n.reverse&&(l=1-l),Te(l)}function Ve(e){if(D.value||!n.keyboard)return;const{vertical:o,reverse:t}=n;switch(e.key){case"ArrowUp":e.preventDefault(),F(o&&t?-1:1);break;case"ArrowRight":e.preventDefault(),F(!o&&t?-1:1);break;case"ArrowDown":e.preventDefault(),F(o&&t?1:-1);break;case"ArrowLeft":e.preventDefault(),F(!o&&t?1:-1);break}}function F(e){const o=b.value;if(o===-1)return;const{step:t}=n,r=m.value[o],l=t<=0||t==="mark"?r:r+t*e;L(K(l,r,e>0?1:-1),o)}function Me(e){var o,t;if(D.value||!he(e)&&e.button!==ho)return;const r=re(e);if(r===void 0)return;const l=m.value.slice(),s=n.range?(t=(o=I(r,l))===null||o===void 0?void 0:o.index)!==null&&t!==void 0?t:-1:0;s!==-1&&(e.preventDefault(),ze(s),De(),L(K(r,m.value[s]),s))}function De(){R.value||(R.value=!0,j("touchend",document,E),j("mouseup",document,E),j("touchmove",document,A),j("mousemove",document,A))}function H(){R.value&&(R.value=!1,N("touchend",document,E),N("mouseup",document,E),N("touchmove",document,A),N("mousemove",document,A))}function A(e){const{value:o}=b;if(!R.value||o===-1){H();return}const t=re(e);L(K(t,m.value[o]),o)}function E(){H()}function $e(e){b.value=e,D.value||(y.value=e)}function Be(e){b.value===e&&(b.value=-1,H()),y.value===e&&(y.value=-1)}function Ie(e){y.value=e}function Fe(e){y.value===e&&(y.value=-1)}de(b,(e,o)=>void W(()=>ee.value=o)),de(O,()=>{if(n.marks){if($.value)return;$.value=!0,W(()=>{$.value=!1})}W(Se)}),to(()=>{H()});const le=w(()=>{const{self:{markFontSize:e,railColor:o,railColorHover:t,fillColor:r,fillColorHover:l,handleColor:s,opacityDisabled:g,dotColor:c,dotColorModal:u,handleBoxShadow:k,handleBoxShadowHover:X,handleBoxShadowActive:Y,handleBoxShadowFocus:He,dotBorder:Ae,dotBoxShadow:Ee,railHeight:Pe,railWidthVertical:je,handleSize:Ne,dotHeight:Ue,dotWidth:Oe,dotBorderRadius:_e,fontSize:Le,dotBorderActive:Ke,dotColorPopover:Xe},common:{cubicBezierEaseInOut:Ye}}=v.value;return{"--n-bezier":Ye,"--n-dot-border":Ae,"--n-dot-border-active":Ke,"--n-dot-border-radius":_e,"--n-dot-box-shadow":Ee,"--n-dot-color":c,"--n-dot-color-modal":u,"--n-dot-color-popover":Xe,"--n-dot-height":Ue,"--n-dot-width":Oe,"--n-fill-color":r,"--n-fill-color-hover":l,"--n-font-size":Le,"--n-handle-box-shadow":k,"--n-handle-box-shadow-active":Y,"--n-handle-box-shadow-focus":He,"--n-handle-box-shadow-hover":X,"--n-handle-color":s,"--n-handle-size":Ne,"--n-opacity-disabled":g,"--n-rail-color":o,"--n-rail-color-hover":t,"--n-rail-height":Pe,"--n-rail-width-vertical":je,"--n-mark-font-size":e}}),z=p?ce("slider",void 0,le,n):void 0,ie=w(()=>{const{self:{fontSize:e,indicatorColor:o,indicatorBoxShadow:t,indicatorTextColor:r,indicatorBorderRadius:l}}=v.value;return{"--n-font-size":e,"--n-indicator-border-radius":l,"--n-indicator-box-shadow":t,"--n-indicator-color":o,"--n-indicator-text-color":r}}),S=p?ce("slider-indicator",void 0,ie,n):void 0;return{mergedClsPrefix:i,namespace:T,uncontrolledValue:U,mergedValue:O,mergedDisabled:D,mergedPlacement:pe,isMounted:no(),adjustedTo:q(n),dotTransitionDisabled:$,markInfos:ke,isShowTooltip:oe,shouldKeepTooltipTransition:Re,handleRailRef:d,setHandleRefs:C,setFollowerRefs:be,fillStyle:xe,getHandleStyle:ye,activeIndex:b,arrifiedValues:m,followerEnabledIndexSet:ge,handleRailMouseDown:Me,handleHandleFocus:$e,handleHandleBlur:Be,handleHandleMouseEnter:Ie,handleHandleMouseLeave:Fe,handleRailKeyDown:Ve,indicatorCssVars:p?void 0:ie,indicatorThemeClass:S==null?void 0:S.themeClass,indicatorOnRender:S==null?void 0:S.onRender,cssVars:p?void 0:le,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender}},render(){var n;const{mergedClsPrefix:i,themeClass:T,formatTooltip:p}=this;return(n=this.onRender)===null||n===void 0||n.call(this),h("div",{class:[`${i}-slider`,T,{[`${i}-slider--disabled`]:this.mergedDisabled,[`${i}-slider--active`]:this.activeIndex!==-1,[`${i}-slider--with-mark`]:this.marks,[`${i}-slider--vertical`]:this.vertical,[`${i}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},h("div",{class:`${i}-slider-rail`},h("div",{class:`${i}-slider-rail__fill`,style:this.fillStyle}),this.marks?h("div",{class:[`${i}-slider-dots`,this.dotTransitionDisabled&&`${i}-slider-dots--transition-disabled`]},this.markInfos.map(v=>h("div",{key:v.label,class:[`${i}-slider-dot`,{[`${i}-slider-dot--active`]:v.active}],style:v.style}))):null,h("div",{ref:"handleRailRef",class:`${i}-slider-handles`},this.arrifiedValues.map((v,d)=>{const M=this.isShowTooltip(d);return h(ao,null,{default:()=>[h(ro,null,{default:()=>h("div",{ref:this.setHandleRefs(d),class:`${i}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(v,d),onFocus:()=>this.handleHandleFocus(d),onBlur:()=>this.handleHandleBlur(d),onMouseenter:()=>this.handleHandleMouseEnter(d),onMouseleave:()=>this.handleHandleMouseLeave(d)},lo(this.$slots.thumb,()=>[h("div",{class:`${i}-slider-handle`})]))}),this.tooltip&&h(io,{ref:this.setFollowerRefs(d),show:M,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(d),teleportDisabled:this.adjustedTo===q.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>h(so,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(d),onEnter:()=>{this.followerEnabledIndexSet.add(d)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(d)}},{default:()=>{var C;return M?((C=this.indicatorOnRender)===null||C===void 0||C.call(this),h("div",{class:[`${i}-slider-handle-indicator`,this.indicatorThemeClass,`${i}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof p=="function"?p(v):v)):null}})})]})})),this.marks?h("div",{class:`${i}-slider-marks`},this.markInfos.map(v=>h("div",{key:v.label,class:`${i}-slider-mark`,style:v.style},v.label))):null))}});export{mo as N};
