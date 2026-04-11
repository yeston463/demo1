import{t as c,n as d}from"./glsl-CX8y9w8U.js";import{gi as f}from"./index-luRCGOLz.js";let u=class{constructor(s,t,i,r,o=null){if(this.name=s,this.type=t,this.arraySize=o,this.bind={0:null,1:null,2:null},r)switch(i){case void 0:break;case 0:this.bind[0]=r;break;case 1:this.bind[1]=r;break;case 2:this.bind[2]=r}}equals(s){return this.type===s.type&&this.name===s.name&&this.arraySize===s.arraySize}},$=class extends u{constructor(s,t,i){super(s,"float",1,(r,o,n)=>r.setUniform1f(s,t(o,n),i))}},y=class extends u{constructor(s,t){super(s,"sampler2D",1,(i,r,o)=>i.bindTexture(s,t(r,o)))}};function C(e){return e===3||e===4||e===5}function h(e){return C(e)||e===6||e===7}function q(e){return w(e)||e===2}function g(e){return e===8||e===9}function I(e){return m(e)||g(e)}function m(e){return e===0}function N(e){return m(e)||e===9}function T(e){return m(e)||g(e)}function w(e){return T(e)||p(e)}function p(e){return e===1}function _(e){return p(e)||h(e)}let S=class extends u{constructor(s,t,i){super(s,"vec3",1,(r,o,n)=>r.setUniform3fv(s,t(o,n),i))}},U=class extends u{constructor(s,t,i){super(s,"vec3",2,(r,o,n,v)=>r.setUniform3fv(s,t(o,n,v),i))}};function G(e,s){switch(s.textureCoordinateType){case 1:return e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(c`void forwardTextureCoordinates() { vuv0 = uv0; }`);case 2:return e.attributes.add("uv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuv0","vec2"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(c`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:s.textureCoordinateType;case 0:return void e.vertex.code.add(c`void forwardTextureCoordinates() {}`);case 3:return}}let z=class extends u{constructor(s,t,i){super(s,"float",2,(r,o,n)=>r.setUniform1f(s,t(o,n),i))}};function V(e){e.fragment.code.add(c`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function A(e,s){const{textureCoordinateType:t}=s;if(t===0||t===3)return;e.include(G,s);const i=t===2;i&&e.include(V),e.fragment.code.add(c`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${i?"textureAtlasLookup(tex, uv, vuvRegion)":"texture(tex, uv)"};
    }
  `)}class k extends u{constructor(s,t){super(s,"sampler2D",2,(i,r,o)=>i.bindTexture(s,t(r,o)))}}function R(e){e.constants.add("GAMMA","float",f).constants.add("INV_GAMMA","float",1/f).code.add(c`vec3 delinearizeGamma(vec3 color) {
return pow(color, vec3(INV_GAMMA));
}
vec4 delinearizeGamma(vec4 color) {
return vec4(delinearizeGamma(color.rgb), color.a);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`)}const K=1,E=1;function O(e,s){if(!m(s.output))return;e.fragment.include(R);const{emissionSource:t,hasEmissiveTextureTransform:i,bindType:r}=s,o=t===3||t===4||t===5;o&&(e.include(A,s),e.fragment.uniforms.add(r===1?new y("texEmission",a=>a.textureEmissive):new k("texEmission",a=>a.textureEmissive)));const n=t===2||o;n&&e.fragment.uniforms.add(r===1?new S("emissiveBaseColor",a=>a.emissiveBaseColor):new U("emissiveBaseColor",a=>a.emissiveBaseColor));const v=t!==0;v&&!(t===7||t===6||t===4||t===5)&&e.fragment.uniforms.add(r===1?new $("emissiveStrength",a=>a.emissiveStrength??0):new z("emissiveStrength",a=>a.emissiveStrength??0));const l=t===7,x=t===5,b=t===1||t===6||l;e.fragment.code.add(c`
    vec4 getEmissions(vec3 symbolColor) {
      vec4 emissions = ${n?x?"emissiveSource == 0 ? vec4(emissiveBaseColor, 1.0): vec4(linearizeGamma(symbolColor), 1.0)":"vec4(emissiveBaseColor, 1.0)":b?l?"emissiveSource == 0 ? vec4(0.0): vec4(linearizeGamma(symbolColor), 1.0)":"vec4(linearizeGamma(symbolColor), 1.0)":"vec4(0.0)"};
      ${d(o,`${d(x,`if(emissiveSource == 0) {
              vec4 emissiveFromTex = textureLookup(texEmission, ${i?"emissiveUV":"vuv0"});
              emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);
           }`,`vec4 emissiveFromTex = textureLookup(texEmission, ${i?"emissiveUV":"vuv0"});
           emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);`)}
        emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)}
      ${d(v,`emissions.rgb *= emissiveStrength * ${c.float(E)};`)}
      return emissions;
    }
  `)}export{R as a,k as b,S as c,g as d,y as e,p as f,I as g,z as h,u as i,G as j,A as k,U as l,h as m,_ as n,m as o,T as p,O as q,$ as r,N as s,q as t,K as u,C as v,w as x};
