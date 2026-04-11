const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Compositing.glsl-B_2VjQBe.js","assets/index-luRCGOLz.js","assets/index-Dq7Hg5GO.css","assets/vec3-DVb40hvp.js","assets/ray-BhywKdw7.js","assets/vectorStacks-B0eoAXjr.js","assets/quatf64-CCm9z-pX.js","assets/vec2f64-rIxtbMRN.js","assets/vec4f64-QIYyFL-Q.js","assets/projectionUtils-Dpkcy_F1.js","assets/geodesicConstants-D_LHmOL1.js","assets/projectPointToVector-CpSQLB_H.js","assets/projectVectorToVector-B_r3PY-E.js","assets/boundedPlane-B39tl539.js","assets/lineSegment-Ci1c8e7O.js","assets/plane-BYHiPlPU.js","assets/vec4-DBQAf_6S.js","assets/mathUtils-B3XN5Z0P.js","assets/sphere-BJ-oF36Z.js","assets/GridLocalOriginFactory-DDidac6B.js","assets/BufferView-oiSmpgCC.js","assets/ManagedTexture-ZZ6G-sdV.js","assets/glsl-CX8y9w8U.js","assets/Emissions.glsl-Cf6xo8r-.js","assets/enums-DQOO6RKE.js","assets/VertexAttributeLocations-DXFDOliQ.js","assets/VertexElementDescriptor-CVzmm3VW.js","assets/Texture-bS42Sq2a.js","assets/renderState-DfxO0_kH.js","assets/Camera-C-3iWPjH.js","assets/Cyclical-DCxnb76U.js","assets/frustum-4D5iCg_s.js","assets/HUDIntersectorResult-BVHaXStk.js","assets/orientedBoundingBox-CUio5_et.js","assets/quat-LOigs_iB.js","assets/computeTranslationToOriginAndRotation-BpRjjMMj.js","assets/normalizeUtils-Atkl4Sqi.js","assets/normalizeUtilsCommon-CNit72vR.js","assets/utils-PQmO_teQ.js","assets/utils-ecxwVE08.js","assets/Indices-BIyLxbkx.js","assets/triangle-BIMxND6j.js","assets/videoUtils-De_F05EN.js","assets/image-kYImeWho.js","assets/ShaderBuilder-C8e9WFcQ.js","assets/InterleavedLayout-Cm0DNUfT.js","assets/types-BKo2foNY.js","assets/vec3f32-WCVSSNPR.js","assets/hydratedFeatures-Bb1ikpDZ.js","assets/Octree-CADwL4D9.js","assets/uuid-KYjebW4v.js"])))=>i.map(i=>d[i]);
import{c as _,l as g,p as b,r as v,s as F,v as T,w as d,x as O,y as f}from"./ManagedTexture-ZZ6G-sdV.js";import{t as c,n as x}from"./glsl-CX8y9w8U.js";import{e as A,r as $}from"./Emissions.glsl-Cf6xo8r-.js";import{s as w}from"./ShaderBuilder-C8e9WFcQ.js";import{ak as y,_ as u,e as C}from"./index-luRCGOLz.js";import{w as m,u as p,r as P,a as R}from"./renderState-DfxO0_kH.js";function E(t){t.code.add(c`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 floatToRgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),t.code.add(c`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaToFloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`)}class h extends _{constructor(){super(...arguments),this.opacity=1}}function M(t){const e=new w,{blendEmissive:r,blitMode:i,hasOpacityFactor:a}=t;e.include(g),e.fragment.uniforms.add(new A("tex",o=>o.texture)),a&&e.fragment.uniforms.add(new $("opacity",o=>o.opacity));const s=i===3;return s&&(e.fragment.uniforms.add(new b("nearFar",o=>o.camera.nearFar)),e.fragment.include(v),e.fragment.include(E)),r&&(e.outputs.add("fragColor","vec4",0),e.outputs.add("fragEmission","vec4",1)),e.fragment.main.add(c`
    ${s?c`
          float normalizedLinearDepth = (-linearDepthFromTexture(tex, uv) - nearFar[0]) / (nearFar[1] - nearFar[0]);
          fragColor = floatToRgba(normalizedLinearDepth);`:c`
          fragColor = texture(tex, uv) ${a?"* opacity":""};`}
    ${x(r,"fragEmission = vec4(0.0, 0.0, 0.0, fragColor.a);")}`),e}const D=Object.freeze(Object.defineProperty({__proto__:null,CompositingPassParameters:h,build:M},Symbol.toStringTag,{value:"Module"}));let n=class extends F{constructor(){super(...arguments),this.shader=new T(D,()=>y(()=>import("./Compositing.glsl-B_2VjQBe.js").then(t=>t.C),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50])))}initializePipeline(t){const{blitMode:e,blendEmissive:r}=t;switch(e){case 0:case 3:return m({colorWrite:p,drawBuffers:d(0,r)});case 1:return m({blending:R,colorWrite:p,drawBuffers:d(0,r)});default:return m({blending:P,colorWrite:p,drawBuffers:d(0,r)})}}};n=u([C("esri.views.3d.webgl-engine.shaders.CompositingTechnique")],n);let l=class extends O{constructor(){super(...arguments),this.blitMode=0,this.blendEmissive=!1,this.hasOpacityFactor=!1}};u([f({count:4})],l.prototype,"blitMode",void 0),u([f()],l.prototype,"blendEmissive",void 0),u([f()],l.prototype,"hasOpacityFactor",void 0);class U{constructor(e,r=0){this._techniques=e,this._parameters=new h,this._configuration=new l,this._configuration.blitMode=r,e.precompile(n,this._configuration),this._configuration.hasOpacityFactor=!0,e.precompile(n,this._configuration),this._configuration.hasOpacityFactor=!1}blit(e,r,i,a){this.blitTexture(e,r.getTexture(),i,a)}blitTexture(e,r,i,a){e.bindFramebuffer(i.fbo),e.setClearColor(0,0,0,1),e.clear(16384),this._parameters.texture=r;const s=this._techniques.get(n,this._configuration);e.bindTechnique(s,a,this._parameters),e.screen.draw()}blend(e,r,i,a,s=1){this._configuration.hasOpacityFactor=s<1;const o=this._techniques.get(n,this._configuration);return!!o.compiled&&(e.bindFramebuffer(i.fbo),this._parameters.texture=r.getTexture(),this._parameters.opacity=s,e.bindTechnique(o,a,this._parameters),e.screen.draw(),!0)}}function X(t){t.code.add(`
  vec4 blendColorsPremultiplied(vec4 source, vec4 dest) {
    float oneMinusSourceAlpha = 1.0 - source.a;
    return source + dest * oneMinusSourceAlpha;
  }
  `)}function V(t,e){return t[0]=e[0]*e[3],t[1]=e[1]*e[3],t[2]=e[2]*e[3],t[3]=e[3],t}export{l as a,X as e,M as g,n as l,h as m,V as n,U as r};
