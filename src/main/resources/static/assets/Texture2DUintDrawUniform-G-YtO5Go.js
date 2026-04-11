import{n as Q,l as ae,r as v}from"./vec2f64-rIxtbMRN.js";import{dI as se,av as ce,d$ as de,fU as I,c$ as N,H as le,h as he,gP as q,fa as ue,gL as E,bb as j,_ as D,a as H,e as fe,dX as me,ad as pe}from"./index-luRCGOLz.js";import{r as ge,a as b,n as ve}from"./vec4f64-QIYyFL-Q.js";import{t as O,E as k,r as _e,p as xe,F as J,J as S,K as g,L as W,N as B,x as ye,y as we}from"./ManagedTexture-ZZ6G-sdV.js";import{i as Ce,c as be}from"./fontUtils-Yy7lmErQ.js";import{L as $e,o as Se}from"./vec4-DBQAf_6S.js";import{p as Re,o as Pe}from"./Scheduler-BnpwVzfG.js";import{h as De,E as ke}from"./Texture-bS42Sq2a.js";import{t as a,n as K}from"./glsl-CX8y9w8U.js";import{i as ee,a as ze}from"./Emissions.glsl-Cf6xo8r-.js";import{a as Me,b as Te,c as Le,e as Ae,d as Fe,f as Ie}from"./DefaultMaterial-DJcdieTE.js";import{i as Ne}from"./RenderGeometry-BqrNnDti.js";import{r as Ee,i as je}from"./BufferView-oiSmpgCC.js";const He=Symbol("hasTransparencyModeSymbol");function Pt(i){return He in i}let Dt=class{constructor(e,t="center",o=!1,r=Q(),n=ge(0,0,0,-1),s="world",l=se(),c=0){this.verticalOffset=e,this.anchor=t,this.hasLabelVerticalOffset=o,this.screenOffset=r,this.centerOffset=n,this.centerOffsetUnits=s,this.translation=l,this.elevationOffset=c}},zt=class{constructor(e,t="center",o="center",r=null,n=Q(),s=!0){this.placement=e,this.horizontalPlacement=t,this.verticalPlacement=o,this.text=r,this.displaySize=n,this.isFocused=s}};function z(i,e,t){return i.canvas||(i.canvas=document.createElement("canvas")),i.canvas.width=e,i.canvas.height=t,i.canvas}function Oe(i){const{size:e}=i.definition,t=i.fontString(e);let o=U.get(t);if(!o){const r=z(Be,0,0).getContext("2d");i.setFontProperties(r,e);const n=r.measureText(Ue);o=new We(n.actualBoundingBoxAscent,n.actualBoundingBoxDescent),U.set(t,o)}return o}const U=new Map;let We=class{get maxHeight(){return this.maxAscent+this.maxDescent}constructor(e,t){this.maxAscent=e,this.maxDescent=t}};const Be={canvas:null},Ue=(()=>{let i="";for(let e=32;e<127;e++)i+=String.fromCharCode(e);return i})(),M=1;let Lt=class{constructor(e,t,o,r){this.text=e,this._alignment=t,this._parameters=o,this._maxSize=r,this._textWidths=[],this._lineWidths=[],this._renderPixelRatio=null,this._metricsCached=null,this.key=`${e}--${this._parameters.key}-${this._alignment}`,this._lines=e.replaceAll(" "," ").split(/\r?\n/)}get displayWidth(){return Math.ceil(this._displayWidth+2*this._horizontalPadding)}get displayHeight(){let e=this._metrics.firstLineAscent;for(let t=0;t<this._lines.length-1;t++)e+=this._lineSpacing;return e+=this._metrics.lastLineDescent,Math.ceil(e+2*this._haloSize+2*this._verticalPadding)}get renderedWidth(){return this._toRoundedRenderUnit(this.displayWidth)}get renderedHeight(){return this._toRoundedRenderUnit(this.displayHeight)}get firstRenderedBaselinePosition(){return this._toRenderUnit(this._firstLineYOffset+this._metrics.firstLineAscent)}get _firstLineYOffset(){return this._verticalPadding+this._haloSize}get _metrics(){if(this._metricsCached==null){const e=z(Z,R,R).getContext("2d"),t=this._parameters.definition.pixelRatio,o=this._fontSize*t;this._parameters.setFontProperties(e,o);let r=2*this._haloSize;const n=this._parameters.definition.font;n.style!=="italic"&&n.style!=="oblique"&&n.weight!=="bold"&&n.weight!=="bolder"||(r+=.3*e.measureText("A").width),this._textWidths.length=0,this._lineWidths.length=0;let s=0,l=0,c=0,d=0,h=0;this._lines.forEach((ne,L)=>{const C=e.measureText(ne),A=C.width/t,F=A+r;this._textWidths.push(A),this._lineWidths.push(F),s=Math.max(s,F),d=Math.max(d,C.actualBoundingBoxAscent/t),h=Math.max(h,C.actualBoundingBoxDescent/t),L===0&&(l=C.actualBoundingBoxAscent/t),L===this._lines.length-1&&(c=C.actualBoundingBoxDescent/t)});const f=Oe(this._parameters),p=Math.max(d,f.maxAscent),m=Math.max(h,f.maxDescent),y=l,u=this._parameters.definition.font.decoration==="underline"?m:c,w=s;this._metricsCached=new Ve(y,u,p,m,w)}return this._metricsCached}get _lineSpacing(){return(this._midLineHeight+this._linePadding)*this._parameters.definition.lineSpacingFactor}get _midLineHeight(){return this._metrics.midLineHeight}get _linePadding(){return this._midLineHeight*Ze}get _midLineAscent(){return this._metrics.maxLineAscent}get _renderedFontSize(){return this._toRenderUnit(this._fontSize)}get _fontSize(){return this._parameters.definition.size}get _renderedHaloSize(){return this._toRenderUnit(this._haloSize)}get _haloSize(){return this._parameters.haloSize}get _horizontalPadding(){return this._hasBackground?this._parameters.definition.background.padding[0]:0}get _verticalPadding(){return Math.max(this._hasBackground?this._parameters.definition.background.padding[1]:0,M)}get _hasBackground(){return!!this._parameters.backgroundStyle}get renderPixelRatio(){if(this._renderPixelRatio==null){const e=this._parameters.definition.pixelRatio;this._renderPixelRatio=Math.min(e,Math.min(this._maxSize[0]/this.displayWidth,this._maxSize[1]/this.displayHeight))}return this._renderPixelRatio}_getLineXOffset(e){switch(this._alignment){case 0:return this._horizontalPadding;case 1:return(this.displayWidth-this._lineWidths[e])/2;case 2:return this.displayWidth-this._horizontalPadding-this._lineWidths[e]}}render(e,t,o){e.save();const r=t/=this.renderPixelRatio,n=o/=this.renderPixelRatio,s=this._haloSize,l=this._firstLineYOffset+this._metrics.firstLineAscent;t+=s,o+=l;const c=this._haloSize>0;c&&this._renderHalo(e,r,n,s,l),this._parameters.setFontProperties(e,this._renderedFontSize);for(let d=0;d<this._lines.length;++d){const h=this._lines[d],f=this._getLineXOffset(d);c&&(e.globalCompositeOperation="destination-out",e.fillStyle="rgb(0, 0, 0)",this._fillText(e,h,t+f,o),this._renderLineDecoration(e,t+f,o,this._textWidths[d])),e.globalCompositeOperation="source-over",e.fillStyle=this._parameters.textStyle,this._fillText(e,h,t+this._getLineXOffset(d),o),this._renderLineDecoration(e,t+f,o,this._textWidths[d]),o+=this._lineSpacing}if(O.TEXT_SHOW_BASELINE){e.strokeStyle=V,e.setLineDash([2,2]),e.lineWidth=1;let d=n+l;for(let h=0;h<this._lines.length;++h)this._drawLine(e,[r,d],[r+this.displayWidth,d]),d+=this._lineSpacing}if(O.TEXT_SHOW_BORDER&&(e.strokeStyle=V,e.setLineDash([]),e.lineWidth=1,this._drawBox(e,[r,n],[this.displayWidth,this.displayHeight])),this._hasBackground){const d=this._parameters.definition.background.borderRadius*this.renderPixelRatio;this._roundedRect(e,r,n,d),e.globalCompositeOperation="destination-over",e.fillStyle=this._parameters.backgroundStyle,e.fill()}e.restore()}_renderLineDecoration(e,t,o,r,n=!1){if(this._parameters.definition.font.decoration==="none"||r===0)return;const s=1,l=Math.max(this._parameters.definition.size/16,s);switch(this._parameters.definition.font.decoration){case"underline":o+=2*l;break;case"line-through":o-=.33*this._midLineAscent}const c=n?this._haloSize:0;e.strokeStyle=n?this._parameters.haloStyle:this._parameters.textStyle,e.lineWidth=this._toRenderUnit(l+2*c),e.beginPath(),e.moveTo(this._toRenderUnit(t-c),this._toRenderUnit(o)),e.lineTo(this._toRenderUnit(t+r+c),this._toRenderUnit(o)),e.stroke()}_roundedRect(e,t,o,r){t=this._toRenderUnit(t),o=this._toRenderUnit(o);const n=this.renderedWidth,s=this.renderedHeight;r!==0?(r=ce(r,0,Math.floor(s/2)),e.beginPath(),e.moveTo(t,o+r),e.arcTo(t,o,t+r,o,r),e.lineTo(t+n-r,o),e.arcTo(t+n,o,t+n,o+r,r),e.lineTo(t+n,o+s-r),e.arcTo(t+n,o+s,t+n-r,o+s,r),e.lineTo(t+r,o+s),e.arcTo(t,o+s,t,o+s-r,r),e.closePath()):e.rect(t,o,n,s)}_renderHalo(e,t,o,r,n){const s=this.renderedWidth,l=this.renderedHeight,c=z(Z,Math.max(s,R),Math.max(l,R)),d=c.getContext("2d");d.clearRect(0,0,s,l),this._parameters.setFontProperties(d,this._renderedFontSize),d.fillStyle=this._parameters.haloStyle,d.strokeStyle=this._parameters.haloStyle;const h=this._renderedHaloSize<3;d.lineJoin=h?"miter":"round",h?this._renderHaloEmulated(d,r,n):this._renderHaloNative(d,r,n);let f=n;for(let p=0;p<this._lines.length;++p){const m=this._getLineXOffset(p);this._renderLineDecoration(d,r+m,f,this._textWidths[p],!0),f+=this._lineSpacing}e.globalAlpha=this._parameters.definition.halo.color[3],e.drawImage(c,0,0,s,l,this._toRenderUnit(t),this._toRenderUnit(o),s,l),e.globalAlpha=1}_renderHaloEmulated(e,t,o){for(let r=0;r<this._lines.length;++r){const n=this._lines[r],s=this._getLineXOffset(r);for(const[l,c]of te)this._fillText(e,n,t+s+this._haloSize*l,o+this._haloSize*c);o+=this._lineSpacing}}_renderHaloNative(e,t,o){const r=2*this._haloSize;for(let n=0;n<this._lines.length;++n){const s=this._lines[n],l=this._getLineXOffset(n),c=5,d=.1;for(let h=0;h<c;h++){const f=1-(c-1)*d+h*d;e.lineWidth=this._toRenderUnit(f*r),this._strokeText(e,s,t+l,o)}o+=this._lineSpacing}}get _displayWidth(){return this._metrics.displayWidth}_toRenderUnit(e){return e*this.renderPixelRatio}_toRoundedRenderUnit(e){return Math.round(e*this.renderPixelRatio)}_fillText(e,t,o,r){e.fillText(t,this._toRenderUnit(o),this._toRenderUnit(r))}_strokeText(e,t,o,r){e.strokeText(t,this._toRenderUnit(o),this._toRenderUnit(r))}_drawLine(e,t,o){e.beginPath(),e.moveTo(this._toRoundedRenderUnit(t[0])+.5,this._toRoundedRenderUnit(t[1])+.5),e.lineTo(this._toRoundedRenderUnit(o[0])+.5,this._toRoundedRenderUnit(o[1])+.5),e.stroke()}_drawBox(e,t,o){const r=this._toRenderUnit(t[0]),n=this._toRenderUnit(t[1]),s=this._toRenderUnit(o[0]),l=this._toRenderUnit(o[1]),c=Math.floor(r)+.5,d=Math.ceil(r+s)-.5,h=Math.floor(n)+.5,f=Math.ceil(n+l)-.5;e.beginPath(),e.moveTo(c,h),e.lineTo(d,h),e.lineTo(d,f),e.lineTo(c,f),e.lineTo(c,h),e.stroke()}};const te=[];for(let e=0;e<360;e+=360/16)te.push([Math.cos(Math.PI*e/180),Math.sin(Math.PI*e/180)]);const Z={canvas:null},Ze=.2,R=512,V="rgb(255, 0, 255, 0.5)";class Ve{get firstLineHeight(){return this.firstLineAscent+this.maxLineDescent}get midLineHeight(){return this.maxLineAscent+this.maxLineDescent}get lastLineHeight(){return this.maxLineAscent+this.lastLineDescent}constructor(e,t,o,r,n){this.firstLineAscent=e,this.lastLineDescent=t,this.maxLineAscent=o,this.maxLineDescent=r,this.displayWidth=n}}const Ft=Object.freeze({left:0,center:.5,right:1}),It=Object.freeze({"bottom-left":v(0,0),bottom:v(.5,0),"bottom-right":v(1,0),left:v(0,.5),center:v(.5,.5),right:v(1,.5),"top-left":v(0,1),top:v(.5,1),"top-right":v(1,1)});function Nt(i){switch(i){case"left":return 0;case"right":return 2;default:return 1}}function Et(i){switch(i){case"bottom-left":case"left":case"top-left":return"left";case"bottom":case"center":case"top":return"center";case"bottom-right":case"right":case"top-right":return"right"}}function jt(i){switch(i){case"bottom-left":case"bottom":case"bottom-right":return"bottom";case"left":case"center":case"right":return"center";case"top-left":case"top":case"top-right":return"top"}}function Ht(i,e){switch(e){case"bottom":return i==="left"?"bottom-left":i==="right"?"bottom-right":"bottom";case"center":return i;case"top":return i==="left"?"top-left":i==="right"?"top-right":"top"}}function Ot(i){return i==="middle"?"center":i}function Wt(i,e){switch(i){case"top":return I(e,0,M);case"bottom":return I(e,0,-M);default:return de(e,ae)}}let Bt=class ie{constructor(e){this.definition=e,this.key=JSON.stringify(e),this.haloSize=Math.round(e.halo.size),this.textStyle=G(e.color),this.haloStyle=Ge(e.halo.color),this.backgroundStyle=e.background.color[3]!==0?G(e.background.color):null}fontString(e){const t=this.definition.font;return`${t.style} ${t.weight} ${e}px ${t.family}, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji`}setFontProperties(e,t){e.font=this.fontString(t),e.textAlign="left",e.textBaseline="alphabetic"}static async fromSymbol(e,t){const o=e?.material?.color?.toUnitRGBA()??b,r=e.size!=null?N(e.size):12,n=e.lineHeight,s=e.background?.color?.toUnitRGBA()??b,l={family:e.font?.family??"sans-serif",decoration:e.font?.decoration??"none",weight:e.font?.weight??"normal",style:e.font?.style??"normal"},c=e.halo,d=c?.color!=null&&c.size>0?{size:N(c.size),color:c.color.toUnitRGBA()}:{size:0,color:b},h=new ie({color:o,size:r,background:{color:s,padding:e.background!=null?[.65*r,.5*r]:[0,0],borderRadius:e.background!=null?r*(6/16):0},lineSpacingFactor:n,font:l,halo:d,pixelRatio:t});if(e.font){let f=!1;const p=h.fontString(r);try{f=(await document.fonts.load(p)).some(m=>!Ce(m))}catch{le.getLogger("esri.views.3d.webgl-engine.lib.TextRenderParameters").warnOnce(`Failed to preload font '${p}'. Some text symbology may be rendered using the default browser font.`)}if(!f&&!Ye.has(e.font.family))try{await be(e.font)}catch{}}return h}};function Ge(i){return`rgb(${i.slice(0,3).map(e=>Math.floor(255*e)).toString()})`}function G(i){return`rgba(${i.slice(0,3).map(e=>Math.floor(255*e)).toString()},${i[3]})`}const Ye=new Set(["Arial","Times New Roman","Courier New","serif","sans-serif","monospace","cursive","fantasy","system-ui","ui-serif","ui-sans-serif","ui-monospace","ui-rounded","math","emoji","fangsong"]),_=4096;let P=class extends he{constructor(i){super(i),this.id=q(),this.events=new ue,this._texture=null,this._atlas=new Qe(256,256),this._needsRepack=!1,this._canRepack=!0,this._elementsToRender=new Map,this._elements=new Map,this._uvCallbacks=new Map,this.updating=!1}initialize(){this._canvas=document.createElement("canvas"),this._canvas.setAttribute("id","textAtlasCanvas"),this._canvas.setAttribute("style","display:none"),this._ctx=this._canvas.getContext("2d"),this._stage=this.view.stage,this._stage.addTexture(this),this._updateCanvasElementSize(this._atlas),this._reset()}unload(){this._texture=E(this._texture),this._frameWorker=j(this._frameWorker),this.updating=!1,this.events.emit("unloaded")}get loaded(){return this._texture!=null}get texture(){return this._texture}static get maxSize(){return $=0,[_-x-$,_-x-$-Y]}load(i){if(this._texture)return this._texture;const e=new De;return e.wrapMode=33071,e.samplingMode=9987,e.hasMipmap=!0,e.preMultiplyAlpha=!0,e.maxAnisotropy=i.parameters.maxMaxAnisotropy,this._texture=new ke(i,e,this._canvas),this._frameWorker=this.view.resourceController.scheduler.registerTask(Re.TEXT_TEXTURE_ATLAS,this),this.setDirty(),this._texture}dispose(){this._elements.clear(),this._elementsToRender.clear(),this._frameWorker=j(this._frameWorker),this._texture&&(this._stage.removeTexture(this),this._texture=E(this._texture)),this._canvas.width=0,this._canvas.height=0,this._canvas=null,this._ctx=null}_updateCanvasElementSize(i){this._canvas.width=i.width,this._canvas.height=i.height}_resizeAtlas(i,e){const{width:t,height:o}=this._atlas;t===i&&o===e||(this._atlas.width=i,this._atlas.height=e,this._texture?.resize(i,e),this._texture?.updateData(0,0,0,t,o,this._canvas),this._updateCanvasElementSize(this._atlas),this._elements.forEach(r=>this._uvCallbacks.get(r.textRenderer.key)?.forEach(n=>n(r.uv))),this._reset())}_reset(){this._elementsToRender.clear(),this._atlas.reset(),this._needsRepack=!0,this.setDirty()}_addAtlasElement(i,e,t,o){const r=this._atlas;if(r.width<t||r.height<o)return!1;let n=r.cursors.get(o);if(!n){if(r.height<r.nextY+o)return!1;n=[new X(r.nextY)],r.cursors.set(o,n),r.nextY+=o}let s=n.find(l=>r.width>=l.x+t);if(s==null){if(r.height<r.nextY+o)return!1;s=new X(r.nextY),r.nextY+=o,n.push(s)}return i.setNewPosition(s),this._elements.set(e,i),this._elementsToRender.set(e,i),s.x+=t,!0}_ensureCallbacks(i){const e=this._uvCallbacks.get(i);if(e)return e;const t=new Set;return this._uvCallbacks.set(i,t),t}_addCallback(i,e){this._ensureCallbacks(i).add(e)}_removeCallback(i,e){const t=this._uvCallbacks.get(i);return!(!t?.delete(e)||t.size!==0)&&(this._uvCallbacks.delete(i),!0)}_processAddition(i){const e=i.textRenderer.key;if(this._needsRepack)return void this._elements.set(e,i);const t=this._atlas,o=i.textRenderer.renderedWidth,r=i.textRenderer.renderedHeight,n=o+x,s=r+x+Y;if(!this._addAtlasElement(i,e,n,s)){if(this._canRepack)this._reset();else if(t.width<n){const l=k(Math.max(n,1.5*t.width),_);this._resizeAtlas(l,t.height)}else{const l=t.nextY+s,c=k(Math.max(l,1.5*t.height),_);if(c>t.height)this._resizeAtlas(t.width,c);else if(t.width<_){const d=k(1.5*t.width,_);this._resizeAtlas(d,t.height)}}this._elements.set(e,i)}}_renderElement(i){const e=i.commitNewPosition(),t=i.textRenderer;this._ctx.clearRect(e[0]-x,e[1]-x,t.renderedWidth+2*x,t.renderedHeight+2*x),t.render(this._ctx,e[0],e[1]),this._uvCallbacks.get(t.key)?.forEach(o=>o(i.uv))}get readyToRun(){return this.updating}runTask(i){if(this._texture==null)return Pe;for(;this._needsRepack&&(this._canRepack||this._atlas.height<_&&this._atlas.height<_);){this._canRepack=this._needsRepack=!1;const e=this._elements;this._elements=new Map,e.forEach(t=>this._processAddition(t)),i.madeProgress()}if(this._elementsToRender.size>0){for(const[e,t]of this._elementsToRender){if(i.done)break;this._renderElement(t),this._elementsToRender.delete(e),i.madeProgress()}this._texture.setData(this._canvas)}this.updating=this._elementsToRender.size>0}addText(i,e){const t=i.key;this._addCallback(t,e);let o=this._elements.get(t);return o?$e(o.uv,b)||e(o.uv):(o=new Xe(i),this._processAddition(o),this.setDirty()),{remove:()=>this._removeText(i,e)}}_removeText(i,e){const t=i.key;this._elements.get(t)&&this._removeCallback(t,e)&&(this._elements.delete(t),this._elementsToRender.delete(t),this._canRepack=!0)}setDirty(){this._texture&&(this.updating=!0)}get test(){}get usedMemory(){return(this._texture?.usedMemory??0)+(this._canvas?.width??0)*(this._canvas?.height??0)*4}};D([H({constructOnly:!0})],P.prototype,"view",void 0),D([H({type:Boolean})],P.prototype,"updating",void 0),P=D([fe("esri.views.3d.webgl-engine.lib.TextTextureAtlas")],P);const x=2,Y=2;class Xe{constructor(e){this.textRenderer=e,this._uv=ve(),this._newPosition=[0,0]}get uv(){if(this._xOffset==null||this._yOffset==null)return b;const{renderedWidth:e,renderedHeight:t}=this.textRenderer;return Se(this._uv,this._xOffset,this._yOffset+t,this._xOffset+e,this._yOffset)}setNewPosition(e){this._newPosition[0]=e.x,this._newPosition[1]=e.y}commitNewPosition(){return this._xOffset=this._newPosition[0],this._yOffset=this._newPosition[1],this._newPosition}get xOffset(){return this._xOffset}get yOffset(){return this._yOffset}}class Qe{constructor(e,t){this.width=e,this.height=t,this.cursors=new Map,this.nextY=0}reset(){this.cursors.clear(),this.nextY=$}}class X{constructor(e){this.y=e,this.x=$}}let $=0,Ut=class{constructor(e,t){this._material=e,this._repository=t,this._map=new Map}dispose(){this._map.forEach((e,t)=>{e!=null&&this._repository.release(this._material,t)})}load(e,t,o){if(!this._material.produces.get(t)?.(o))return null;this._map.has(o)||this._map.set(o,this._repository.acquire(this._material,t,o));const n=this._map.get(o);if(n){if(n.ensureResources(e)===2)return n;this._repository.requestRender()}return null}};function Vt(i){i.code.add(a`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`)}function qe(i){i.code.add(a`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`)}function Je(i,e){if(!e.screenSpaceReflections)return;const t=i.fragment;t.include(_e),t.uniforms.add(new xe("nearFar",o=>o.camera.nearFar),new J("depthMap",o=>o.depth?.attachment),new S("proj",o=>o.camera.projectionMatrix),new g("invResolutionHeight",o=>1/o.camera.height),new S("reprojectionMatrix",o=>o.ssr.reprojectionMatrix)).code.add(a`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy * 0.5 + 0.5;
  }

  const int maxSteps = ${e.highStepCount?"150":"75"};

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);
    float dDepthBefore = 0.0;

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMap, P); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
        float weight = dDepth / (dDepth - dDepthBefore);
        vec2 Pf = mix(P - dP, P, 1.0 - weight);
        if (abs(Pf.y - projectedCoordStart.y) > invResolutionHeight) {
          return vec3(Pf, depth);
        }
        else {
          return vec3(P, depth);
        }
      }

      // continue with ray marching
      P = clamp(P + dP, vec2(0.0), vec2(0.999));
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
      dDepthBefore = dDepth;
    }
    return vec3(P, 0.0);
  }
  `)}function Ke(i){i.fragment.uniforms.add(new g("cloudAbsorption",e=>e.clouds.absorption),new g("cloudCoverage",e=>e.clouds.coverage)).code.add(a`vec4 lookupCloudsFromTextureArray(sampler2DArray cubeMap, vec3 rayDir) {
int faceIndex;
vec2 uv;
if(rayDir.z <= 0.0) {
float hazeFactor = smoothstep(-0.01, mix(0.0, 0.075, cloudCoverage), abs(dot(rayDir, vec3(0, 0, 1))));
float shading = clamp(1.0 - cloudAbsorption, 0.6, 1.0) * (1.0 - hazeFactor);
float totalTransmittance = hazeFactor;
return vec4(shading, totalTransmittance, shading, totalTransmittance);
}
if (abs(rayDir.x) >= abs(rayDir.y) && abs(rayDir.x) >= abs(rayDir.z)) {
if(rayDir.x > 0.0) {
faceIndex = 0;
uv = rayDir.yz / rayDir.x;
uv = vec2(-uv.x, uv.y);
} else {
faceIndex = 1;
uv = rayDir.yz / rayDir.x;
uv = vec2(-uv.x, -uv.y);
}
} else if (abs(rayDir.y) >= abs(rayDir.x) && abs(rayDir.y) >= abs(rayDir.z)) {
if(rayDir.y > 0.0) {
faceIndex = 2;
uv = rayDir.xz / rayDir.y;
} else {
faceIndex = 3;
uv = rayDir.xz / rayDir.y;
uv = vec2(uv.x, -uv.y);
}
} else {
if(rayDir.y < 0.0) {
faceIndex = 4;
uv = rayDir.xy / rayDir.z;
uv = vec2(uv.x, -uv.y);
} else {
faceIndex = 5;
uv = rayDir.xy / rayDir.z;
uv = vec2(uv.x, -uv.y);
}
}
uv = 0.5 * (uv + 1.0);
if(faceIndex != 5) {
uv.y = uv.y - 0.5;
}
uv.y = uv.y * 2.0;
vec4 s = texture(cubeMap, vec3(uv, float(faceIndex)));
return s;
}`)}let et=class extends ee{constructor(e,t){super(e,"sampler2DArray",0,(o,r)=>o.bindTexture(e,t(r)))}};function tt(i){const e=i.fragment;e.constants.add("radiusCloudsSquared","float",it).code.add(a`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos) {
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusCloudsSquared;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
return (cameraPosition + dir * pointIntDist) - spherePos;
}`),e.uniforms.add(new g("radiusCurvatureCorrection",({clouds:t})=>t.parallax.radiusCurvatureCorrection)).code.add(a`vec3 correctForPlanetCurvature(vec3 dir) {
dir.z = dir.z * (1.0 - radiusCurvatureCorrection) + radiusCurvatureCorrection;
return dir;
}`),e.code.add(a`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec) {
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),Me(e),Te(e),e.constants.add("RIM_COLOR","vec3",me(.28,.175,.035)),e.constants.add("sunsetTransitionFactor","float",.3),e.constants.add("rimScattering","float",140),e.constants.add("backlightFactor","float",.2),e.constants.add("backlightScattering","float",10),e.constants.add("backlightTransition","float",.3),e.code.add(a`vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds) {
float upDotLight = dot(cameraPosition, mainLightDirection);
float dirDotLight = max(dot(worldSpaceRay, mainLightDirection), 0.0);
float sunsetTransition = clamp(pow(max(upDotLight, 0.0), sunsetTransitionFactor), 0.0, 1.0);
vec3 ambientLight = calculateAmbientIrradiance(cameraPosition,  0.0);
vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));
float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
float rimLightIntensity = 0.5 + 0.5 * pow(max(upDotLight, 0.0), 0.35);
vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, rimScattering)) * scatteringMod;
float additionalLight = backlightFactor * pow(dirDotLight, backlightScattering) * (1. - pow(sunsetTransition, backlightTransition)) ;
return vec3(baseCloudColor * (1.0 + additionalLight) + directSunScattering);
}`),i.include(Ke),e.uniforms.add(new W("readChannelsRG",t=>t.clouds.readChannels===0),new et("cubeMap",t=>t.clouds.data?.cubeMap?.colorTexture)).code.add(a`vec4 sampleCloud(vec3 rayDir, bool readOtherChannel) {
vec4 s = lookupCloudsFromTextureArray(cubeMap, rayDir);
bool readRG = readChannelsRG ^^ readOtherChannel;
s = readRG ? vec4(vec3(s.r), s.g) : vec4(vec3(s.b), s.a);
return length(s) == 0.0 ? vec4(s.rgb, 1.0) : s;
}`),e.uniforms.add(new B("anchorPoint",t=>t.clouds.parallax.anchorPoint),new B("anchorPointNew",t=>t.clouds.parallaxNew.anchorPoint),new S("rotationClouds",t=>t.clouds.parallax.transform),new S("rotationCloudsNew",t=>t.clouds.parallaxNew.transform),new g("cloudsOpacity",t=>t.clouds.opacity),new g("fadeFactor",t=>t.clouds.fadeFactor),new W("crossFade",t=>t.clouds.fadeState===3)).code.add(a`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition) {
vec3 intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPoint);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = sampleCloud(worldRayRotatedCorrected, crossFade);
vec3 cameraPositionN = normalize(cameraPosition);
vec4 cloudColor = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
if(crossFade) {
intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPointNew);
worldRayRotated = rotateDirectionToAnchorPoint(rotationCloudsNew, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = sampleCloud(worldRayRotatedCorrected, false);
vec4 cloudColorNew = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorNew, fadeFactor);
}
float totalTransmittance = length(cloudColor.rgb) == 0.0 ?
1.0 :
clamp(cloudColor.a * cloudsOpacity + (1.0 - cloudsOpacity), 0.0 , 1.0);
return vec4(cloudColor.rgb, totalTransmittance);
}`)}const it=(pe.radius+Ne)**2;function Yt(i,e){const t=i.fragment;t.include(Le,e),t.include(ze),t.include(qe),e.cloudReflections&&i.include(tt),i.include(Je,e),t.include(Ae,e),t.constants.add("fresnelSky","vec3",[.02,1,15]),t.constants.add("fresnelMaterial","vec2",[.02,.1]),t.constants.add("roughness","float",.015),t.constants.add("foamIntensityExternal","float",1.7),t.constants.add("ssrIntensity","float",.65),t.constants.add("ssrHeightFadeStart","float",Fe),t.constants.add("ssrHeightFadeEnd","float",Ie),t.constants.add("waterDiffusion","float",.92),t.constants.add("waterSeaColorMod","float",.8),t.constants.add("correctionViewingPowerFactor","float",.4),t.constants.add("skyZenitColor","vec3",[.52,.68,.9]),t.constants.add("skyColor","vec3",[.67,.79,.9]),t.constants.add("cloudFresnelModifier","vec2",[1.2,.01]),t.code.add(a`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),t.uniforms.add(new g("lightingSpecularStrength",o=>o.lighting.mainLight.specularStrength),new g("lightingEnvironmentStrength",o=>o.lighting.mainLight.environmentStrength)),t.code.add(a`vec3 getWaterColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
float NdotL = clamp(dot(n, l), 0.0, 1.0);
specular = lightingSpecularStrength * NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`),e.cloudReflections&&t.uniforms.add(new g("cloudsOpacity",o=>o.clouds.opacity)).code.add(a`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y * cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * cloudsOpacity;`),e.screenSpaceReflections?t.uniforms.add(new S("view",o=>o.camera.viewMatrix),new J("lastFrameColorTexture",o=>o.ssr.lastFrameColor?.getTexture()),new g("fadeFactorSSR",o=>o.ssr.fadeFactor)).code.add(a`vec3 viewDir = normalize(viewPosition);
vec4 viewNormalVectorCoordinate = view * vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view * vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection(reflected, viewPosition, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -viewPosition.z);
reflectionHit = clamp(1.0 - (1.3 * dCoords.y), 0.0, 1.0) * heightMod * fadeFactorSSR;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture(lastFrameColorTexture, reprojectedCoordinate).xyz) *
reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod * 0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor +
reflSea * seaColorMod + specular + foam);`):t.code.add(a`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`),e.cloudReflections?e.screenSpaceReflections?t.code.add(a`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`):t.code.add(a`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`):t.code.add(a`return waterRenderedColor;
}`)}function Xt(i,e){e.spherical?i.vertex.code.add(a`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return normalize(pos + origin);
}`):i.vertex.code.add(a`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return vec3(0.0, 0.0, 1.0);
}`),e.spherical?i.vertex.code.add(a`mat3 getTBNMatrix(in vec3 n) {
vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`):i.vertex.code.add(a`mat3 getTBNMatrix(in vec3 n) {
vec3 t = vec3(1.0, 0.0, 0.0);
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`)}function ot(i){switch(i.elementType){case"float":switch(i.elementCount){case 1:return a`float`;case 2:return a`vec2`;case 3:return a`vec3`;case 4:return a`vec4`;case 9:return a`mat3`;default:i.elementCount}break;case"int":switch(i.elementCount){case 1:return a`int`;case 2:return a`ivec2`;case 3:return a`ivec3`;case 4:return a`ivec4`;case 9:throw new Error("Invalid element count 9 for type int");default:i.elementCount}break;case"uint":switch(i.elementCount){case 1:return a`uint`;case 2:return a`uvec2`;case 3:return a`uvec3`;case 4:return a`uvec4`;case 9:throw new Error("Invalid element count 9 for type uint");default:i.elementCount}break;default:i.elementType}throw new Error("unsupported field")}const oe=new g("const_NaN",()=>NaN,{supportsNaN:!0});let T=class extends ye{constructor(e){super(),this.supportNaN=e}};function rt(i,e){const t=e?.supportNaN;t&&(i.uniforms.add(oe),i.code.add(a`bool bitsEncodeFloat16NaN(highp uint bits) {
const highp uint nanExponent = 0x00007c00u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x000003ffu;
return exponent == nanExponent && mantissa != 0u;
}`)),i.code.add(a`
    mediump float unpackHalf2x8(highp uint bits0, highp uint bits1) {
      highp uint halfBits = (bits1 << 8u) | bits0;
      ${K(t,a`
        if (bitsEncodeFloat16NaN(halfBits)) {
          return const_NaN;
        }`)}
      return unpackHalf2x16(halfBits).x;
    }`)}function nt(i,e){const t=e?.supportNaN;t&&(i.uniforms.add(oe),i.code.add(a`bool bitsEncodeFloat32NaN(highp uint bits) {
const highp uint nanExponent = 0x7f800000u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x007fffffu;
return exponent == nanExponent && mantissa != 0u;
}`)),i.code.add(a`
    highp float unpackFloat4x8(highp uint bits0, highp uint bits1, highp uint bits2, highp uint bits3) {
      highp uint floatBits = (bits3 << 24u) |(bits2 << 16u) | (bits1 << 8u) | bits0;
      ${K(t,a`
        if (bitsEncodeFloat32NaN(floatBits)) {
          return const_NaN;
        }`)}
      return uintBitsToFloat(floatBits);
    }`)}function at(i){const{fieldType:e}=i;return`${(0,st[e])(ct(i))}`}D([we()],T.prototype,"supportNaN",void 0);const st={u8:i=>a`${i[0]}`,unorm8:i=>a`float(${i[0]})/255.0`,vec4unorm8:i=>a`vec4(${`${i[0]}, ${i[1]}, ${i[2]}, ${i[3]}`})/255.0`,f16:Ee?i=>a`unpackHalf2x8(${`${i[0]}, ${i[1]}`})`:i=>a`unpackFloat4x8(${`${i[0]}, ${i[1]}, ${i[2]}, ${i[3]}`})`,f32:i=>a`unpackFloat4x8(${`${i[0]}, ${i[1]}, ${i[2]}, ${i[3]}`})`,vec4u8:i=>a`uvec4(${`${i[0]}, ${i[1]}, ${i[2]}, ${i[3]}`})`,mat3f32:i=>{const e=i.reduce((t,o)=>{const r=t.at(-1);return r==null||r.length>=4?t.push([o]):r.push(o),t},new Array).map(t=>a`unpackFloat4x8(${`${t[0]}, ${t[1]}, ${t[2]}, ${t[3]}`})`);return a`mat3(${e.join(`,
`)})`}};function ct(i){const{startTexel:e,byteOffset:t,texelByteStride:o,byteSize:r}=i;let n=e,s=t%o;const l=new Array;for(let c=0;c<r;++c){const d=a`texel${a.int(n)}.${dt[s]}`;l.push(d),++s,s>=o&&(s=0,++n)}return l}const dt=["x","y","z","w"],lt=new T(!0),ht=new T(!1);class qt{constructor(e){this.moduleId=q(),this.namespace=`_tbb_${this.moduleId}_`;const{itemIndexAttribute:t,bufferUniform:o,layout:r}=e,n=e.fieldFilter??(()=>!0),s=e.enableNaNSupport?lt:ht;this.TextureBackedBufferModule=(l,c)=>ut(this.namespace,l,c,t,o,r,n,s),this.getTextureAttribute=ft(this.namespace)}}function ut(i,e,t,o,r,n,s,l){const{vertex:c}=e;c.include(nt,l),c.include(rt,l);const d=`${i}tbbStride`,h=`${i}TextureBackedBufferItemData`,f=`${i}fetchTextureBackedBufferItemData`,p=re(i);for(const u of[d,h,f,p])je(u.length<1024,"Identifiers do not have a valid length");c.constants.add(d,"uint",n.texelStride),c.uniforms.add(r);const m=new Array;for(const u of n.fields.values())s(u.name,t)&&m.push(u);if(m.length===0)return;const y=[];for(let u=0;u<n.texelStride;++u)y.push(!1);for(const u of m)for(let w=0;w<u.numTexels;++w)y[u.startTexel+w]=!0;c.code.add(a`
  struct ${h} {`);for(const u of m)c.code.add(a`\t${ot(u)} ${u.name};`);c.code.add(a`};`),c.code.add(a`
  ${h} ${f}(highp uint itemIndex) {
    ${h} itemData;
    highp uint index = itemIndex * ${d};
    highp uint rowWidth = uint(textureSize(${r.name}, 0).x);
    int coordX = int(index % rowWidth);
    int coordY = int(index / rowWidth);
  `);for(let u=0;u<y.length;++u)y[u]!==!1&&c.code.add(a`lowp uvec4 texel${a.int(u)} = texelFetch(${r.name}, ivec2(coordX + ${a.int(u)}, coordY), 0);`);for(const u of m)c.code.add(a`itemData.${u.name} = ${at(u)};`);c.code.add(a`return itemData;
}`),c.code.add(a`${h} ${p};`),c.main.add(a`${p} = ${f}(${o});`)}function ft(i){const e=re(i);return t=>a`${e}.${t}`}function re(i){return`${i}ItemData`}class Jt extends ee{constructor(e,t){super(e,"usampler2D",2,(o,r,n)=>o.bindTexture(e,t(r,n)))}}export{Lt as a,z as b,Bt as c,Wt as d,Jt as e,Dt as f,zt as g,Oe as h,It as i,Ft as j,Vt as k,Ht as l,Ot as m,He as n,Yt as o,Pt as p,M as q,Xt as r,Nt as s,Ut as t,qt as u,P as v,Et as w,jt as x,tt as y};
