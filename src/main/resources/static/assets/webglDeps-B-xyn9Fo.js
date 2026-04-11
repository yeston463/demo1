import{o as b}from"./BufferObject-CukBET3J.js";import{m as g,s as j,a as F}from"./Program-DY2G_VIJ.js";import{t as v}from"./ProgramCache-V2tDTmTw.js";import{e as P}from"./ShaderCompiler-G2XYGDs6.js";import{E as A}from"./Texture-bS42Sq2a.js";import{h as D}from"./VertexArrayObject-DrWxQikJ.js";import{e as M}from"./ProgramTemplate-p9M2b1il.js";import"./index-luRCGOLz.js";import"./enums-DQOO6RKE.js";import"./memoryEstimations-c73g1z_P.js";import"./VertexAttributeLocations-DXFDOliQ.js";function p(n){const{options:e,value:r}=n;return typeof e[r]=="number"}function x(n){let e="";for(const r in n){const o=n[r];if(typeof o=="boolean")o&&(e+=`#define ${r}
`);else if(typeof o=="number")e+=`#define ${r} ${o.toFixed()}
`;else if(typeof o=="object")if(p(o)){const{value:t,options:f,namespace:i}=o,s=i?`${i}_`:"";for(const a in f)e+=`#define ${s}${a} ${f[a].toFixed()}
`;e+=`#define ${r} ${s}${t}
`}else{const t=o.options;let f=0;for(const i in t)e+=`#define ${t[i]} ${(f++).toFixed()}
`;e+=`#define ${r} ${t[o.value]}
`}}return e}export{b as BufferObject,g as FramebufferObject,j as Program,v as ProgramCache,F as Renderbuffer,P as ShaderCompiler,A as Texture,D as VertexArrayObject,M as createProgram,x as glslifyDefineMap};
