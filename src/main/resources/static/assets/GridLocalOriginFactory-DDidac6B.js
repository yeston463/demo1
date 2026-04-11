const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RibbonLine.glsl-eThZlziI.js","assets/index-luRCGOLz.js","assets/index-Dq7Hg5GO.css","assets/projectionUtils-Dpkcy_F1.js","assets/geodesicConstants-D_LHmOL1.js","assets/vec4-DBQAf_6S.js","assets/vec4f64-QIYyFL-Q.js","assets/meshVertexSpaceUtils-Bsl-zP45.js","assets/vec3-DVb40hvp.js","assets/MeshLocalVertexSpace-DdYreZ1b.js","assets/projectVectorToVector-B_r3PY-E.js","assets/projectPointToVector-CpSQLB_H.js","assets/hydratedFeatures-Bb1ikpDZ.js","assets/vec2f64-rIxtbMRN.js","assets/ManagedTexture-ZZ6G-sdV.js","assets/glsl-CX8y9w8U.js","assets/Emissions.glsl-Cf6xo8r-.js","assets/enums-DQOO6RKE.js","assets/VertexAttributeLocations-DXFDOliQ.js","assets/VertexElementDescriptor-CVzmm3VW.js","assets/Texture-bS42Sq2a.js","assets/renderState-DfxO0_kH.js","assets/Camera-C-3iWPjH.js","assets/Cyclical-DCxnb76U.js","assets/ray-BhywKdw7.js","assets/vectorStacks-B0eoAXjr.js","assets/quatf64-CCm9z-pX.js","assets/frustum-4D5iCg_s.js","assets/plane-BYHiPlPU.js","assets/mathUtils-B3XN5Z0P.js","assets/HUDIntersectorResult-BVHaXStk.js","assets/sphere-BJ-oF36Z.js","assets/orientedBoundingBox-CUio5_et.js","assets/quat-LOigs_iB.js","assets/computeTranslationToOriginAndRotation-BpRjjMMj.js","assets/lineSegment-Ci1c8e7O.js","assets/normalizeUtils-Atkl4Sqi.js","assets/normalizeUtilsCommon-CNit72vR.js","assets/utils-PQmO_teQ.js","assets/utils-ecxwVE08.js","assets/Indices-BIyLxbkx.js","assets/BufferView-oiSmpgCC.js","assets/triangle-BIMxND6j.js","assets/videoUtils-De_F05EN.js","assets/image-kYImeWho.js","assets/ShaderBuilder-C8e9WFcQ.js"])))=>i.map(i=>d[i]);
import{d$ as la,fU as qe,ak as ca,_ as T,e as da,j8 as Si,eo as ua,av as St,bd as ns,dI as R,eH as rs,fo as os,eI as ls,ep as ke,dX as tt,hy as Qt,gw as cs,hv as oi,fm as ds,oa as us,em as xi,aL as ps,bv as fs,H as pa,dE as hs,ob as ms,gP as Rt,j5 as bi,je as vs,oc as gs,fa as Ss,g_ as xs,ge as bs,c9 as yi,bu as ys,mv as ws,gB as et,lV as $s,kH as Ie}from"./index-luRCGOLz.js";import{n as Xe,r as fa}from"./vec2f64-rIxtbMRN.js";import{u as K,E as re,_ as Y,e as se,x as q,N as wi,g as Mt,o as B,a as it,p as st,H as _s,A as at,c as Q,P as ze,I as Ps,C as Os}from"./vec3-DVb40hvp.js";import{a as ha,u as $i,e as Yt,n as nt,s as ma,r as zs}from"./vec4f64-QIYyFL-Q.js";import{i as li,z as Cs,m as va,n as As}from"./BufferView-oiSmpgCC.js";import{Y as ci,Z as ga,$ as di,a0 as Et,K as Je,a1 as Ts,a2 as Ds,a3 as rt,a4 as Sa,L as Rs,a5 as xa,F as Kt,a6 as Es,a7 as ba,a8 as ya,a9 as wa,aa as Zt,ab as Be,ac as $a,o as ne,r as Fs,ad as Vs,O as ui,s as _a,v as Pa,w as Oa,ae as za,af as Ca,y as D,a as Aa,t as Ms,ag as Ls,ah as js,ai as Ws,aj as Is,ak as Us,al as ks,am as Bs,g as _i,an as Ns,ao as Pi,ap as Oi,aq as Hs,ar as Gs,m as de,n as xe,as as qs,at as zi,au as Js,av as Xs,b as Qs,aw as Ys,ax as Ci,ay as Ks,M as Zs,az as en,J as tn,p as an,aA as sn,aB as nn,aC as rn,aD as Ai,aE as on,aF as Ti,aG as pt,aH as ln,aI as cn,aJ as dn,aK as Di,aL as un,aM as pn,aN as Ri,aO as fn,aP as hn,aQ as Ei}from"./ManagedTexture-ZZ6G-sdV.js";import{r as oe,e as ei,o as Ve,p as ft,c as Qe,d as mn,f as vn,x as Fi,g as gn}from"./Emissions.glsl-Cf6xo8r-.js";import{t as u,n as E}from"./glsl-CX8y9w8U.js";import{s as Ta}from"./ShaderBuilder-C8e9WFcQ.js";import{Q as pi,t as ti}from"./InterleavedLayout-Cm0DNUfT.js";import{_ as Ot,N as Ft,E as Vt}from"./enums-DQOO6RKE.js";import{w as Ze,u as xt,d as Sn,a as Vi}from"./renderState-DfxO0_kH.js";import{f as xn}from"./computeTranslationToOriginAndRotation-BpRjjMMj.js";import{o as ii,j as bn}from"./projectionUtils-Dpkcy_F1.js";import{t as Mi,r as U,n as ye}from"./vec3f32-WCVSSNPR.js";import{c as fi,l as yn}from"./Indices-BIyLxbkx.js";import{v as ot,U as wn,K as $n,k as ht,X as $e,y as Li}from"./plane-BYHiPlPU.js";import{v as _n}from"./ray-BhywKdw7.js";import{t as C}from"./orientedBoundingBox-CUio5_et.js";import{u as Pn}from"./hydratedFeatures-Bb1ikpDZ.js";import{w as On}from"./sphere-BJ-oF36Z.js";import{m as zn}from"./mathUtils-B3XN5Z0P.js";import{l as Cn}from"./Octree-CADwL4D9.js";import{o as bt}from"./vec4-DBQAf_6S.js";import{l as An,h as Lt,d as Tn,v as Da}from"./lineSegment-Ci1c8e7O.js";import{n as Dn}from"./uuid-KYjebW4v.js";import{E as hi,h as mi}from"./Texture-bS42Sq2a.js";function Ra(a){return a.type==="point"}let hl=class{constructor(e,t=null,i=0){this.array=e,this.spatialReference=t,this.offset=i}};function Ea(a){return"array"in a}function mt(a,e,t="ground"){if(Ra(e))return a.getElevation(e.x,e.y,e.z||0,e.spatialReference,t);if(Ea(e)){let i=e.offset;return a.getElevation(e.array[i++],e.array[i++],e.array[i]||0,e.spatialReference??a.spatialReference,t)}return a.getElevation(e[0],e[1],e[2]||0,a.spatialReference,t)}const Fa=.5;function Rn(a,e){a.include(ci),a.attributes.add("position","vec3"),a.attributes.add("normal","vec3"),a.attributes.add("centerOffsetAndDistance","vec4");const t=a.vertex;ga(t,e),di(t,e),t.uniforms.add(new Et("viewport",i=>i.camera.fullViewport),new oe("polygonOffset",i=>i.shaderPolygonOffset),new Je("aboveGround",i=>i.camera.aboveGround?1:-1)),e.hasVerticalOffset&&Ts(t),t.code.add(u`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),t.code.add(u`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${e.terrainDepthTest?u.float(0):u`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = aboveGround;
      }

      // aboveGround is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = aboveGround * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),e.draped&&!e.hasVerticalOffset||Ds(t),e.draped||(t.uniforms.add(new Je("perDistancePixelRatio",i=>Math.tan(i.camera.fovY/2)/(i.camera.fullViewport[2]/2))),t.code.add(u`
      void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
        float distanceToCamera = length(posView);

        // Compute offset in world units for a half pixel shift
        float pixelOffset = distanceToCamera * perDistancePixelRatio * ${u.float(Fa)};

        // Apply offset along normal in the direction away from the ground surface
        vec3 modelOffset = normalModel * aboveGround * pixelOffset;

        // Apply the same offset also on the view space position
        vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

        posModel += modelOffset;
        posView += viewOffset;
      }
    `)),e.screenCenterOffsetUnitsEnabled&&rt(t),e.hasScreenSizePerspective&&Sa(t),t.code.add(u`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.hasVerticalOffset?u`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":u`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled?e.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${e.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}function vi(a){a.uniforms.add(new Rs("alignPixelEnabled",e=>e.alignPixelEnabled)),a.code.add(u`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),a.code.add(u`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}function En(a,e){const{vertex:t,fragment:i}=a;a.include(xa,e),t.include(vi),t.main.add(u`vec4 posProjCenter;
if (dot(position, position) > 0.0) {
ProjectHUDAux projectAux;
vec4 posProj = projectPositionHUD(projectAux);
posProjCenter = alignToPixelCenter(posProj, viewport.zw);
forwardViewPosDepth(projectAux.posView);
vec3 vpos = projectAux.posModel;
if (rejectBySlice(vpos)) {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
} else {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
gl_Position = posProjCenter;
gl_PointSize = 1.0;`),i.main.add(u`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}function Fn(a){a.vertex.uniforms.add(new Je("renderTransparentlyOccludedHUD",e=>e.hudRenderStyle===0?1:e.hudRenderStyle===1?0:.75),new Et("viewport",e=>e.camera.fullViewport),new Kt("hudVisibilityTexture",e=>e.hudVisibility?.getTexture())),a.vertex.include(vi),a.vertex.code.add(u`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}const Va=u`vec4(0.0, 0.0, 2.0, 1.0)`;function Vn(a){const e=new Ta;if(e.include(Rn,a),e.vertex.include(Es,a),a.occlusionPass)return e.include(En,a),e;const{output:t,oitPass:i,hasOcclusionTexture:s,signedDistanceFieldEnabled:n,useVisibilityPixel:r,pixelSnappingEnabled:c,hasEmission:o,hasScreenSizePerspective:l,debugDrawLabelBorder:d,hasVVSize:p,hasVVColor:v,hasRotation:S,occludedFragmentFade:y,sampleSignedDistanceFieldTexelCenter:x}=a;e.include(ci),e.include(ba,a),e.include(ya,a),r&&e.include(Fn);const{vertex:h,fragment:b}=e;b.include(wa),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2");const w=t===8,f=w&&r;f&&e.varyings.add("voccluded","float"),h.uniforms.add(new Et("viewport",g=>g.camera.fullViewport),new Zt("screenOffset",(g,F)=>qe(yt,2*g.screenOffset[0]*F.camera.pixelRatio,2*g.screenOffset[1]*F.camera.pixelRatio)),new Zt("anchorPosition",g=>zt(g)),new Be("materialColor",({color:g})=>g),new oe("materialRotation",g=>g.rotation),new ei("tex",g=>g.texture)),rt(h),n&&(h.uniforms.add(new Be("outlineColor",g=>g.outlineColor)),b.uniforms.add(new Be("outlineColor",g=>ji(g)?g.outlineColor:ha),new oe("outlineSize",g=>ji(g)?g.outlineSize:0))),c&&h.include(vi),l&&($a(h),Sa(h)),d&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add("uv0","vec2"),e.attributes.add("uvi","vec4"),e.attributes.add("color","vec4"),e.attributes.add("size","vec2"),e.attributes.add("rotation","float"),(p||v)&&e.attributes.add("featureAttribute","vec4"),h.main.add(u`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      gl_Position = ${Va};
      return;
    }

    vec2 inputSize;
    ${E(l,u`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,u`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${E(p,u`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${E(r,u`
        bool visible = testHUDVisibility(posProj);
        if (!visible) {
          vtc = vec2(0.0);
          ${E(d,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
          return;
        }
      `)}
    ${E(f,u`voccluded = visible ? 0.0 : 1.0;`)}
  `);const P=u`
    vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0));
    vec2 texSize = vec2(textureSize(tex, 0));
    uv = mix(vec2(1.0), uv / texSize, lessThan(uv, vec2(${jn})));
    quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

    ${E(S,u`
        float angle = radians(materialRotation + rotation);
        float cosAngle = cos(angle);
        float sinAngle = sin(angle);
        mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

        quadOffset.xy = rotate * quadOffset.xy;
      `)}

    quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,m=c?n?u`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:u`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:u`posProj += quadOffset;`;h.main.add(u`
    ${P}
    ${v?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color * materialColor;"}

    ${E(t===9,u`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${u.float(ne)};
    ${E(n,`alphaDiscard = alphaDiscard && outlineColor.a < ${u.float(ne)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${m}
      gl_Position = posProj;
    }

    vtc = uv;

    ${E(d,u`debugBorderCoords = vec4(uv0, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),b.uniforms.add(new ei("tex",g=>g.texture)),y&&!w&&(b.include(Fs),b.uniforms.add(new Kt("depthMap",g=>g.mainDepth),new oe("occludedOpacity",g=>g.occludedFragmentOpacity?.value??1))),s&&b.uniforms.add(new Kt("texOcclusion",g=>g.hudOcclusion?.attachment));const _=d?u`(isBorder > 0.0 ? 0.0 : ${u.float(ne)})`:u.float(ne),O=u`
    ${E(d,u`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${E(x,u`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${n?u`
      vec4 fillPixelColor = vcolor;

      // Get distance in output units (i.e. pixels)

      float sdf = texture(tex, samplePos).r;
      float pixelDistance = sdf * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - pixelDistance, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(pixelDistance) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${_} ||
          fillPixelColor.a + outlinePixelColor.a < ${u.float(ne)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
                              vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${E(!w,u`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${_}) {
          discard;
        }

        ${E(!w,u`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:u`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${_}) {
            discard;
          }
          ${E(!w,u`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${E(y&&!w,u`
        float zSample = -linearizeDepth(texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x);
        float zFragment = -linearizeDepth(gl_FragCoord.z);
        if (zSample < ${u.float(1-Ln)} * zFragment) {
          fragColor *= occludedOpacity;
        }
      `)}
    ${E(s,u`fragColor *= texelFetch(texOcclusion, ivec2(gl_FragCoord.xy), 0).r;`)}

    ${E(!w&&d,u`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}

    ${E(i===2,u`
    if (fragColor.a < ${u.float(ne)}) {
      discard;
    }`)}
  `;switch(t){case 0:e.outputs.add("fragColor","vec4",0),o&&e.outputs.add("fragEmission","vec4",1),i===1&&e.outputs.add("fragAlpha","float",o?2:1),b.main.add(u`
        ${O}
        // Unlike other materials, the fragment shader outputs premultiplied colors.
        // Disable this for front face rendering for correct OIT compositing.
        ${E(i===2,u`fragColor.rgb /= fragColor.a;`)}
        ${E(o,u`fragEmission = vec4(0.0);`)}
        ${E(i===1,u`fragAlpha = fragColor.a;`)}`);break;case 9:b.main.add(u`
        ${O}
        outputObjectAndLayerIdColor();`);break;case 8:e.include(Vs,a),b.main.add(u`
        ${O}
        outputHighlight(${E(f,u`voccluded == 1.0`,u`false`)});`)}return e}function ji(a){return a.outlineColor[3]>0&&a.outlineSize>0}function zt(a){return a.textureIsSignedDistanceField?Mn(a.anchorPosition,a.distanceFieldBoundingBox,yt):la(yt,a.anchorPosition),yt}const yt=Xe();function Mn(a,e,t){qe(t,a[0]*(e[2]-e[0])+e[0],a[1]*(e[3]-e[1])+e[1])}const Ln=.08,Ct=32e3,jn=u.float(Ct),Wn=Object.freeze(Object.defineProperty({__proto__:null,build:Vn,calculateAnchorPosition:zt,fullUV:Ct},Symbol.toStringTag,{value:"Module"}));let ai=class extends _a{constructor(e,t){super(e,t,ti(Ma).concat(ti(ja()))),this.shader=new Pa(Wn,()=>ca(()=>import("./RibbonLine.glsl-eThZlziI.js").then(i=>i.H),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]))),this.primitiveType=t.occlusionPass?Ot.POINTS:Ot.TRIANGLE_STRIP}initializePipeline(e){const{oitPass:t,hasEmission:i,hasPolygonOffset:s,draped:n,output:r,depthTestEnabled:c,occlusionPass:o}=e,l=c&&!n&&t!==1&&!o&&r!==8;return Ze({blending:Ve(r)?za(t,!0):null,depthTest:c&&!n?{func:515}:null,depthWrite:l?Sn:null,drawBuffers:Oa(t,i),colorWrite:xt,polygonOffset:s?In:null})}};ai=T([da("esri.views.3d.webgl-engine.shaders.HUDMaterialTechnique")],ai);const In={factor:0,units:-4},Ma=pi().vec2u8("uv0",{glNormalized:!0}),La=pi().vec3f("position").vec3f("normal").vec4i16("uvi").vec4u8("color",{glNormalized:!0}).vec2f("size").f32("rotation").vec4f("centerOffsetAndDistance").vec4f("featureAttribute"),Un=La.clone().vec4u8("olidColor");function ja(){return ui()?Un:La}let W=class extends Ca{constructor(e,t){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.useVisibilityPixel=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.hasOcclusionTexture=!1,this.isFocused=!0,this.olidColorInstanced=!1,this.textureCoordinateType=0,this.emissionSource=0,this.discardInvisibleFragments=!0,this.hasVVInstancing=!1,this.snowCover=!1,this.transparentOccluded=t}};T([D()],W.prototype,"transparentOccluded",void 0),T([D()],W.prototype,"screenCenterOffsetUnitsEnabled",void 0),T([D()],W.prototype,"useVisibilityPixel",void 0),T([D()],W.prototype,"signedDistanceFieldEnabled",void 0),T([D()],W.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),T([D()],W.prototype,"hasVVSize",void 0),T([D()],W.prototype,"hasVVColor",void 0),T([D()],W.prototype,"hasVerticalOffset",void 0),T([D()],W.prototype,"hasScreenSizePerspective",void 0),T([D()],W.prototype,"hasRotation",void 0),T([D()],W.prototype,"debugDrawLabelBorder",void 0),T([D()],W.prototype,"hasPolygonOffset",void 0),T([D()],W.prototype,"depthTestEnabled",void 0),T([D()],W.prototype,"pixelSnappingEnabled",void 0),T([D()],W.prototype,"draped",void 0),T([D()],W.prototype,"terrainDepthTest",void 0),T([D()],W.prototype,"cullAboveTerrain",void 0),T([D()],W.prototype,"occlusionPass",void 0),T([D()],W.prototype,"occludedFragmentFade",void 0),T([D()],W.prototype,"hasOcclusionTexture",void 0),T([D()],W.prototype,"isFocused",void 0);class Sl extends Aa{constructor(e,t,i=!1){super(e,Jn),this.produces=new Map([[14,s=>ft(s)&&!this.parameters.drawAsLabel&&!this._configuration.transparentOccluded],[15,s=>ft(s)&&!this.parameters.drawAsLabel&&this._configuration.transparentOccluded],[16,s=>ft(s)&&this.parameters.drawAsLabel],[13,()=>this.parameters.useVisibilityPixel],[20,s=>this.parameters.draped&&ft(s)]]),this._visible=!0,this._configuration=new W(t,i)}getConfiguration(e,t){const i=this.parameters.draped;return super.getConfiguration(e,t,this._configuration),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=i,this._configuration.useVisibilityPixel=this.parameters.useVisibilityPixel,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.hasVVSize=!!this.parameters.vvSize,this._configuration.hasVVColor=!!this.parameters.vvColor,this._configuration.occlusionPass=t.slot===13,this._configuration.occludedFragmentFade=!i&&!!this.parameters.occludedFragmentOpacity,this._configuration.isFocused=this.parameters.isFocused,this._configuration.depthTestEnabled=this.parameters.depthEnabled||t.slot===13,Ve(e)&&(this._configuration.debugDrawLabelBorder=!!Ms.LABELS_SHOW_BORDER),this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.hasOcclusionTexture=this._configuration.transparentOccluded&&t.oitPass!==0,this._configuration}intersect(e,t,i,s,n,r){const{options:{selectionMode:c,hud:o,excludeLabels:l},point:d,camera:p}=i,{parameters:v}=this;if(!c||!o||l&&v.isLabel||!e.visible||!d||!p)return;const S=e.attributes.get("featureAttribute"),y=S==null?null:$i(S.data,Ni),{scaleX:x,scaleY:h}=Gi(y,v,p.pixelRatio),b=e.attributes.get("position"),w=e.attributes.get("size"),f=e.attributes.get("normal"),P=e.attributes.get("rotation"),m=e.attributes.get("centerOffsetAndDistance");li(b.size>=3);const _=zt(v),O=this.parameters.centerOffsetUnits==="screen";for(let g=0;g<b.data.length/b.size;g++){const F=g*b.size;K(H,b.data[F],b.data[F+1],b.data[F+2]),re(H,H,t),re(H,H,p.viewMatrix);const $=g*m.size;if(K(he,m.data[$],m.data[$+1],m.data[$+2]),!O&&(H[0]+=he[0],H[1]+=he[1],he[2]!==0)){const ve=he[2];Y(he,H),se(H,H,q(he,he,ve))}const M=g*f.size;K(Te,f.data[M],f.data[M+1],f.data[M+2]),wi(Te,Te,Si(Bi,t));const{normal:z,cosAngle:we}=Wi(Te,p,Hi),N=qi(this.parameters,H,we,p,jt);if(Mt(H,H,z,N),p.applyProjection(H,ee),ee[0]>-1){O&&(he[0]||he[1])&&(ee[0]+=he[0]*p.pixelRatio,he[1]!==0&&(ee[1]+=jt.alignmentEvaluator.apply(he[1])*p.pixelRatio),p.unapplyProjection(ee,H)),ee[0]+=this.parameters.screenOffset[0]*p.pixelRatio,ee[1]+=this.parameters.screenOffset[1]*p.pixelRatio,ee[0]=Math.floor(ee[0]),ee[1]=Math.floor(ee[1]);const ve=g*w.size;ce[0]=w.data[ve],ce[1]=w.data[ve+1],jt.evaluator.applyVec2(ce,ce);const ue=Hn*p.pixelRatio;let Ce=0;v.textureIsSignedDistanceField&&(Ce=Math.min(v.outlineSize,.5*ce[0])*p.pixelRatio/2),ce[0]*=x,ce[1]*=h;const A=g*P.size,J=v.rotation+P.data[A];if(Ii(d,ee[0],ee[1],ce,ue,Ce,J,v,_)){const Z=i.ray;if(re(Ui,H,ua(Nn,p.viewMatrix)),ee[0]=d[0],ee[1]=d[1],p.unprojectFromRenderScreen(ee,H)){const pe=R();B(pe,Z.direction);const ge=1/it(pe);q(pe,pe,ge),r(st(Z.origin,H)*ge,pe,-1,Ui)}}}}}intersectDraped(e,t,i,s,n){const r=e.attributes.get("position"),c=e.attributes.get("size"),o=e.attributes.get("rotation"),l=this.parameters,d=zt(l),p=e.attributes.get("featureAttribute"),v=p==null?null:$i(p.data,Ni),{scaleX:S,scaleY:y}=Gi(v,l,e.screenToWorldRatio),x=Gn*e.screenToWorldRatio;for(let h=0;h<r.data.length/r.size;h++){const b=h*r.size,w=r.data[b],f=r.data[b+1],P=h*c.size;ce[0]=c.data[P],ce[1]=c.data[P+1];let m=0;l.textureIsSignedDistanceField&&(m=Math.min(l.outlineSize,.5*ce[0])*e.screenToWorldRatio/2),ce[0]*=S,ce[1]*=y;const _=h*o.size,O=l.rotation+o.data[_];Ii(i,w,f,ce,x,m,O,l,d)&&s(n.distance,n.normal,-1)}}createBufferWriter(){return new Xn}applyShaderOffsets(e,t,i,s,n,r,c){wi(Wt,i,Si(Bi,s));const o=Wi(Wt,r,Hi),l=Qn(it(t),r),d=qi(this.parameters,t,o.cosAngle,r,c);Mt(t,t,o.normal,d+l),Mt(e,e,Wt,d+l);const p=n[3]+d;this._applyPolygonOffsetView(t,o,p,r,t),this._applyCenterOffsetView(t,n,t)}applyShaderOffsetsNDC(e,t,i,s,n){return this._applyCenterOffsetNDC(e,t,i,s),n!=null&&B(n,s),this._applyPolygonOffsetNDC(s,t,i,s),s}_applyPolygonOffsetView(e,t,i,s,n){const r=s.aboveGround?1:-1;let c=Math.sign(i);c===0&&(c=r);const o=r*c;if(this.parameters.shaderPolygonOffset<=0)return B(n,e);const l=St(Math.abs(t.cosAngle),.01,1),d=1-Math.sqrt(1-l*l)/l/s.viewport[2];return q(n,e,o>0?d:1/d),n}_applyCenterOffsetView(e,t,i){const s=this.parameters.centerOffsetUnits!=="screen";return i!==e&&B(i,e),s&&(i[0]+=t[0],i[1]+=t[1],t[2]&&(Y(Te,i),_s(i,i,q(Te,Te,t[2])))),i}_applyCenterOffsetNDC(e,t,i,s){const n=this.parameters.centerOffsetUnits!=="screen";return s!==e&&B(s,e),n||(s[0]+=t[0]/i.fullWidth*2,s[1]+=t[1]/i.fullHeight*2),s}_applyPolygonOffsetNDC(e,t,i,s){const n=this.parameters.shaderPolygonOffset;if(e!==s&&B(s,e),n){const r=i.aboveGround?1:-1,c=r*Math.sign(t[3]);s[2]-=(c||r)*n}return s}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:t,outlineColor:i}=this.parameters,s=e[3]>=ne||t>=ne&&i[3]>=ne;return this._visible&&s}createGLMaterial(e){return new kn(e)}calculateRelativeScreenBounds(e,t,i=ns()){return Bn(this.parameters,e,t,i),i[2]=i[0]+e[0],i[3]=i[1]+e[1],i}}class kn extends Gs{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(ai,e)}}function Bn(a,e,t,i){i[0]=a.anchorPosition[0]*-e[0]+a.screenOffset[0]*t,i[1]=a.anchorPosition[1]*-e[1]+a.screenOffset[1]*t}function Wi(a,e,t){return re(t.normal,a,e.viewInverseTransposeMatrix),t.cosAngle=at(t.normal,qn),t}function Ii(a,e,t,i,s,n,r,c,o){let l=e-s-i[0]*o[0],d=l+i[0]+2*s,p=t-s-i[1]*o[1],v=p+i[1]+2*s;const S=c.distanceFieldBoundingBox;return c.textureIsSignedDistanceField&&S!=null&&(l+=i[0]*S[0],p+=i[1]*S[1],d-=i[0]*(1-S[2]),v-=i[1]*(1-S[3]),l-=n,d+=n,p-=n,v+=n),qe(ki,e,t),os(Ye,a,ki,ls(r)),Ye[0]>l&&Ye[0]<d&&Ye[1]>p&&Ye[1]<v}const jt=new Ls,H=R(),Te=R(),ee=nt(),Wt=R(),Ui=R(),Ye=Xe(),ki=Xe(),Bi=rs(),Nn=ke(),he=R(),It=R(),Ni=nt(),Hi={normal:R(),cosAngle:0},Hn=1,Gn=2,ce=fa(0,0),qn=tt(0,0,1);class Jn extends js{constructor(){super(...arguments),this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.isDecoration=!1,this.color=Yt(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=fa(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=Yt(1,1,1,1),this.outlineSize=0,this.distanceFieldBoundingBox=nt(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.useVisibilityPixel=!0,this.occludedVisibilityMode="hidden",this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.isFocused=!0,this.draped=!1,this.isLabel=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}}class Xn{constructor(){this.layout=ja(),this.baseInstanceLayout=Ma}elementCount(e){return e.get("position").indices.length}elementCountBaseInstance(e){return e.get("uv0").indices.length}write(e,t,i,s,n,r){const{position:c,normal:o,color:l,size:d,rotation:p,centerOffsetAndDistance:v,featureAttribute:S,uvi:y}=n;Us(i.get("position"),e,c,r),ks(i.get("normal"),t,o,r);const x=i.get("position").indices.length;let h=0,b=0,w=Ct,f=Ct;const P=i.get("uvi")?.data;P&&P.length>=4&&(h=P[0],b=P[1],w=P[2],f=P[3]);for(let m=0;m<x;++m){const _=r+m;y.setValues(_,h,b,w,f)}if(Bs(i.get("color"),4,l,r),_i(i.get("size"),d,r),Ns(i.get("rotation"),p,r),i.get("centerOffsetAndDistance")?Pi(i.get("centerOffsetAndDistance"),v,r):Oi(v,r,x),i.get("featureAttribute")?Pi(i.get("featureAttribute"),S,r):Oi(S,r,x),s!=null){const m=i.get("position")?.indices;if(m){const _=m.length,O=n.getField("olidColor",Cs);Hs(s,O,_,r)}}return{numVerticesPerItem:1,numItems:x}}writeBaseInstance(e,t){const{uv0:i}=t;_i(e.get("uv0"),i,0)}}function Gi(a,e,t){return a==null||e.vvSize==null?{scaleX:t,scaleY:t}:(Ws(It,e,a),{scaleX:It[0]*t,scaleY:It[1]*t})}function Qn(a,e){const t=e.computeRenderPixelSizeAtDist(a)*Fa;return(e.aboveGround?1:-1)*t}function qi(a,e,t,i,s){if(!a.verticalOffset?.screenLength){const o=it(e);return s.update(t,o,a.screenSizePerspective,a.screenSizePerspectiveMinPixelReferenceSize,a.screenSizePerspectiveAlignment,null),0}const n=it(e),r=a.screenSizePerspectiveAlignment??a.screenSizePerspective,c=Is(i,n,a.verticalOffset,t,r,a.screenSizePerspectiveMinPixelReferenceSize);return s.update(t,n,a.screenSizePerspective,a.screenSizePerspectiveMinPixelReferenceSize,a.screenSizePerspectiveAlignment,null),c}function xl(a,e,t,i,s,n,r,c,o,l,d){const p=sr[d.mode];let v,S,y=0;if(ii(a,e,t,i,o.spatialReference,s,c))return p?.requiresAlignment(d)?(y=p.applyElevationAlignmentBuffer(i,s,n,r,c,o,l,d),v=n,S=r):(v=i,S=s),ii(v,o.spatialReference,S,n,l.spatialReference,r,c)?y:void 0}function Wa(a,e,t,i,s){const n=(Ra(a)?a.z:Ea(a)?a.array[a.offset+2]:a[2])||0;switch(t.mode){case"on-the-ground":{const r=mt(e,a,"ground")??0;return s.verticalDistanceToGround=0,s.sampledElevation=r,void(s.z=r)}case"relative-to-ground":{const r=mt(e,a,"ground")??0,c=t.geometryZWithOffset(n,i);return s.verticalDistanceToGround=c,s.sampledElevation=r,void(s.z=c+r)}case"relative-to-scene":{const r=mt(e,a,"scene")??0,c=t.geometryZWithOffset(n,i);return s.verticalDistanceToGround=c,s.sampledElevation=r,void(s.z=c+r)}case"absolute-height":{const r=t.geometryZWithOffset(n,i),c=mt(e,a,"ground")??0;return s.verticalDistanceToGround=r-c,s.sampledElevation=c,void(s.z=r)}default:return void(s.z=0)}}function bl(a,e,t,i){return Wa(a,e,t,i,Ue),Ue.z}function yl(a,e,t){return e==="on-the-ground"&&t==="on-the-ground"?a.staysOnTheGround:e===t||e!=="on-the-ground"&&t!=="on-the-ground"?e==null||t==null?a.definedChanged:1:a.onTheGroundChanged}function wl(a){return a==="relative-to-ground"||a==="relative-to-scene"}function $l(a){return a!=="absolute-height"}function _l(a,e,t,i,s){Wa(e,t,s,i,Ue),Yn(a,Ue.verticalDistanceToGround);const n=Ue.sampledElevation,r=Qt(nr,a.transformation);return vt[0]=e.x,vt[1]=e.y,vt[2]=Ue.z,xn(e.spatialReference,vt,r,i.spatialReference)?a.transformation=r:console.warn("Could not locate symbol object properly, it might be misplaced"),n}function Yn(a,e){for(let t=0;t<a.geometries.length;++t){const i=a.geometries[t].getMutableAttribute("centerOffsetAndDistance");i&&i.data[3]!==e&&(i.data[3]=e,a.geometryVertexAttributeUpdated(a.geometries[t],"centerOffsetAndDistance"))}}function Kn(a,e,t,i,s,n){let r=0;const c=n.spatialReference;e*=3,i*=3;for(let o=0;o<s;++o){const l=a[e],d=a[e+1],p=a[e+2],v=n.getElevation(l,d,p,c,"ground")??0;r+=v,t[i]=l,t[i+1]=d,t[i+2]=v,e+=3,i+=3}return r/s}function Zn(a,e,t,i,s,n,r,c){let o=0;const l=c.calculateOffsetRenderUnits(r),d=c.featureExpressionInfoContext,p=n.spatialReference;e*=3,i*=3;for(let v=0;v<s;++v){const S=a[e],y=a[e+1],x=a[e+2],h=n.getElevation(S,y,x,p,"ground")??0;o+=h,t[i]=S,t[i+1]=y,t[i+2]=d==null?x+h+l:h+l,e+=3,i+=3}return o/s}function er(a,e,t,i,s,n,r,c){let o=0;const l=c.calculateOffsetRenderUnits(r),d=c.featureExpressionInfoContext,p=n.spatialReference;e*=3,i*=3;for(let v=0;v<s;++v){const S=a[e],y=a[e+1],x=a[e+2],h=n.getElevation(S,y,x,p,"scene")??0;o+=h,t[i]=S,t[i+1]=y,t[i+2]=d==null?x+h+l:h+l,e+=3,i+=3}return o/s}function tr(a){const e=a.meterUnitOffset,t=a.featureExpressionInfoContext;return e!==0||t!=null}function ir(a,e,t,i,s,n,r,c){const o=c.calculateOffsetRenderUnits(r),l=c.featureExpressionInfoContext;e*=3,i*=3;for(let d=0;d<s;++d){const p=a[e],v=a[e+1],S=a[e+2];t[i]=p,t[i+1]=v,t[i+2]=l==null?S+o:o,e+=3,i+=3}return 0}let ar=class{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}};const sr={"absolute-height":{applyElevationAlignmentBuffer:ir,requiresAlignment:tr},"on-the-ground":{applyElevationAlignmentBuffer:Kn,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:Zn,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:er,requiresAlignment:()=>!0}},nr=ke(),Ue=new ar,vt=R();function rr(a,e=!1){return a<=cs?e?new Array(a).fill(0):new Array(a):va(a)}function Ol(a,e,t=null){const i=[],s=e.mapPositions,n=or(e,i),r=n.data,c=n.indices.length,o=fi(c);return lr(e,i,o),ur(e,i,o),cr(e,i,o),dr(e,i,n.indices,o),pr(e,i,n.indices,o),fr(e,i),hr(e,i,n.indices,o),mr(e,i,r),new de(a,i,s,2,t)}function or(a,e){const{attributeData:{position:t},removeDuplicateStartEnd:i}=a,s=vr(t)&&i,n=t.length/3-(s?1:0),r=new Array(2*(n-1)),c=s?t.slice(0,-3):t;let o=0;for(let d=0;d<n-1;d++)r[o++]=d,r[o++]=d+1;const l=new C(c,r,3,s);return e.push(["position",l]),l}function lr(a,e,t){if(a.attributeData.colorFeature!=null)return;const i=a.attributeData.color;e.push(["color",new C(i??ma,t,4)])}function cr(a,e,t){a.attributeData.normal&&e.push(["normal",new C(a.attributeData.normal,t,3)])}function dr(a,e,t,i){const s=a.attributeData.colorFeature;s!=null&&(typeof s=="number"?e.push(["colorFeatureAttribute",new C([s],i,1,!0)]):e.push(["colorFeatureAttribute",new C(s,t,1,!0)]))}function ur(a,e,t){a.attributeData.sizeFeature==null&&e.push(["size",new C([a.attributeData.size??1],t,1,!0)])}function pr(a,e,t,i){const s=a.attributeData.sizeFeature;s!=null&&(typeof s=="number"?e.push(["sizeFeatureAttribute",new C([s],i,1,!0)]):e.push(["sizeFeatureAttribute",new C(s,t,1,!0)]))}function fr(a,e){const{attributeData:{position:t,timeStamps:i}}=a;if(!i)return;const s=t.length/3,n=new Array(2*(s-1));let r=0;for(let c=0;c<s-1;c++)n[r++]=c,n[r++]=c+1;e.push(["timeStamps",new C(i,n,Fe,!0)])}function hr(a,e,t,i){const s=a.attributeData.opacityFeature;s!=null&&(typeof s=="number"?e.push(["opacityFeatureAttribute",new C([s],i,1,!0)]):e.push(["opacityFeatureAttribute",new C(s,t,1,!0)]))}function mr(a,e,t){if(a.overlayInfo==null||a.overlayInfo.renderCoordsHelper.viewingMode!==1||!a.overlayInfo.spatialReference.isGeographic)return;const i=oi(t.length),s=ds(a.overlayInfo.spatialReference);for(let p=0;p<i.length;p+=3)bn(t,p,i,p,s);const n=t.length/3,r=xe(n+1);let c=gr,o=Sr,l=0,d=0;qe(c,i[d++],i[d++]),d++,r[0]=0;for(let p=1;p<n+1;++p)p===n&&(d=0),qe(o,i[d++],i[d++]),d++,l+=us(c,o),r[p]=l,[c,o]=[o,c];e.push(["distanceToStart",new C(r,e[0][1].indices,1,!0)])}function vr(a){const e=a.length;return a[0]===a[e-3]&&a[1]===a[e-2]&&a[2]===a[e-1]}const gr=Xe(),Sr=Xe(),Fe=4;function xr(a,e,t,i,s){if(a==null||a.length===0)return[];const n=[];return a.forEach((r,c)=>{const o=r.length,l=oi(3*o);r.forEach((p,v)=>{l[3*v]=p[0],l[3*v+1]=p[1],l[3*v+2]=p[2]});const d={attributeData:{position:l,normal:e,colorFeature:t?.[c],opacityFeature:i?.[c],sizeFeature:s?.[c]},removeDuplicateStartEnd:!1};n.push(d)}),n}function zl(a,e,t,i,s,n){if(a==null||a.length===0)return[];const r=xr(a,e,i,s,n);return a.forEach((c,o)=>{const l=t?.[o],d=l!=null?Ia(l.timeStamps,l.stage):void 0;r[o].attributeData.timeStamps=d}),r}function Ia(a,e){const t=rr(a.length*Fe),i=a[0],s=a[a.length-1];for(let n=0;n<a.length;n++)t[n*Fe]=a[n],t[n*Fe+1]=i,t[n*Fe+2]=s,t[n*Fe+3]=e+.5;return t}function Ji(a,e){const t=a[e],i=a[e+1],s=a[e+2];return Math.sqrt(t*t+i*i+s*s)}function br(a,e){const t=a[e],i=a[e+1],s=a[e+2],n=1/Math.sqrt(t*t+i*i+s*s);a[e]*=n,a[e+1]*=n,a[e+2]*=n}function Xi(a,e,t){a[e]*=t,a[e+1]*=t,a[e+2]*=t}function yr(a,e,t,i,s,n=e){(s=s||a)[n]=a[e]+t[i],s[n+1]=a[e+1]+t[i+1],s[n+2]=a[e+2]+t[i+2]}function wr(){return Qi??=$r(),Qi}function $r(){const t=new C([0,0,0,255,255,0,255,255],[0,1,2,3],2,!0);return new qs([["uv0",t]])}let Qi=null;const Ut=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],_r=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],Pr=[0,0,1,0,1,1,0,1],Or=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Ua=new Array(36);for(let a=0;a<6;a++)for(let e=0;e<6;e++)Ua[6*a+e]=a;const Ee=new Array(36);for(let a=0;a<6;a++)Ee[6*a]=0,Ee[6*a+1]=1,Ee[6*a+2]=2,Ee[6*a+3]=2,Ee[6*a+4]=3,Ee[6*a+5]=0;function Cl(a,e){Array.isArray(e)||(e=[e,e,e]);const t=new Array(24);for(let i=0;i<8;i++)t[3*i]=Ut[i][0]*e[0],t[3*i+1]=Ut[i][1]*e[1],t[3*i+2]=Ut[i][2]*e[2];return new de(a,[["position",new C(t,Or,3,!0)],["normal",new C(_r,Ua,3)],["uv0",new C(Pr,Ee,2)]])}const kt=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],zr=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],Cr=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],Ar=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function Al(a,e){Array.isArray(e)||(e=[e,e,e]);const t=new Array(18);for(let i=0;i<6;i++)t[3*i]=kt[i][0]*e[0],t[3*i+1]=kt[i][1]*e[1],t[3*i+2]=kt[i][2]*e[2];return new de(a,[["position",new C(t,Cr,3,!0)],["normal",new C(zr,Ar,3)]])}const wt=U(-.5,0,-.5),$t=U(.5,0,-.5),_t=U(0,0,.5),Pt=U(0,.5,0),Le=ye(),je=ye(),Ne=ye(),He=ye(),Ge=ye();se(Le,wt,Pt),se(je,wt,$t),ze(Ne,Le,je),Y(Ne,Ne),se(Le,$t,Pt),se(je,$t,_t),ze(He,Le,je),Y(He,He),se(Le,_t,Pt),se(je,_t,wt),ze(Ge,Le,je),Y(Ge,Ge);const Bt=[wt,$t,_t,Pt],Tr=[0,-1,0,Ne[0],Ne[1],Ne[2],He[0],He[1],He[2],Ge[0],Ge[1],Ge[2]],Dr=[0,1,2,3,1,0,3,2,1,3,0,2],Rr=[0,0,0,1,1,1,2,2,2,3,3,3];function Tl(a,e){Array.isArray(e)||(e=[e,e,e]);const t=new Array(12);for(let i=0;i<4;i++)t[3*i]=Bt[i][0]*e[0],t[3*i+1]=Bt[i][1]*e[1],t[3*i+2]=Bt[i][2]*e[2];return new de(a,[["position",new C(t,Dr,3,!0)],["normal",new C(Tr,Rr,3)]])}function Dl(a,e,t,i,s={uv:!0}){const n=-Math.PI,r=2*Math.PI,c=-Math.PI/2,o=Math.PI,l=Math.max(3,Math.floor(t)),d=Math.max(2,Math.floor(i)),p=(l+1)*(d+1),v=xe(3*p),S=xe(3*p),y=xe(2*p),x=[];let h=0;for(let f=0;f<=d;f++){const P=[],m=f/d,_=c+m*o,O=Math.cos(_);for(let g=0;g<=l;g++){const F=g/l,$=n+F*r,M=Math.cos($)*O,z=Math.sin(_),we=-Math.sin($)*O;v[3*h]=M*e,v[3*h+1]=z*e,v[3*h+2]=we*e,S[3*h]=M,S[3*h+1]=z,S[3*h+2]=we,y[2*h]=F,y[2*h+1]=m,P.push(h),++h}x.push(P)}const b=new Array;for(let f=0;f<d;f++)for(let P=0;P<l;P++){const m=x[f][P],_=x[f][P+1],O=x[f+1][P+1],g=x[f+1][P];f===0?(b.push(m),b.push(O),b.push(g)):f===d-1?(b.push(m),b.push(_),b.push(O)):(b.push(m),b.push(_),b.push(O),b.push(O),b.push(g),b.push(m))}const w=[["position",new C(v,b,3,!0)],["normal",new C(S,b,3,!0)]];return s.uv&&w.push(["uv0",new C(y,b,2,!0)]),s.offset&&(w[0][0]="offset",w.push(["position",new C(Float64Array.from(s.offset),fi(b.length),3,!0)])),new de(a,w)}function Rl(a,e,t,i){const s=Er(e,t,i);return new de(a,s)}function Er(a,e,t){const i=a;let s,n;if(t)s=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],n=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];else{const l=i*(1+Math.sqrt(5))/2;s=[-i,l,0,i,l,0,-i,-l,0,i,-l,0,0,-i,l,0,i,l,0,-i,-l,0,i,-l,l,0,-i,l,0,i,-l,0,-i,-l,0,i],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1]}for(let l=0;l<s.length;l+=3)Xi(s,l,a/Ji(s,l));let r={};function c(l,d){l>d&&([l,d]=[d,l]);const p=l.toString()+"."+d.toString();if(r[p])return r[p];let v=s.length;return s.length+=3,yr(s,3*l,s,3*d,s,v),Xi(s,v,a/Ji(s,v)),v/=3,r[p]=v,v}for(let l=0;l<e;l++){const d=n.length,p=new Array(4*d);for(let v=0;v<d;v+=3){const S=n[v],y=n[v+1],x=n[v+2],h=c(S,y),b=c(y,x),w=c(x,S),f=4*v;p[f]=S,p[f+1]=h,p[f+2]=w,p[f+3]=y,p[f+4]=b,p[f+5]=h,p[f+6]=x,p[f+7]=w,p[f+8]=b,p[f+9]=h,p[f+10]=b,p[f+11]=w}n=p,r={}}const o=zi(s);for(let l=0;l<o.length;l+=3)br(o,l);return[["position",new C(zi(s),n,3,!0)],["normal",new C(o,n,3,!0)]]}function El(a,{normal:e,position:t,color:i,rotation:s,size:n,centerOffsetAndDistance:r,uvi:c,featureAttribute:o,olidColor:l=null}={}){const d=t?xi(t):R(),p=e?xi(e):tt(0,0,1),v=i?[i[0],i[1],i[2],i.length>3?i[3]:255]:[255,255,255,255],S=n!=null&&n.length===2?n:[1,1],y=s!=null?[s]:[0],x=fi(1),h=[["position",new C(d,x,3,!0)],["normal",new C(p,x,3,!0)],["color",new C(v,x,4,!0)],["size",new C(S,x,2)],["rotation",new C(y,x,1,!0)]];if(c&&h.push(["uvi",new C(c,x,c.length)]),r!=null){const b=[r[0],r[1],r[2],r[3]];h.push(["centerOffsetAndDistance",new C(b,x,4)])}if(o){const b=[o[0],o[1],o[2],o[3]];h.push(["featureAttribute",new C(b,x,4)])}return new de(a,h,null,1,l,void 0,wr())}const Fr=[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0]];function Fl(a,e=Fr){const t=new Array(12);for(let l=0;l<4;l++)for(let d=0;d<3;d++)t[3*l+d]=e[l][d];const i=[0,1,2,2,3,0],s=[0,0,1],n=[0,0,0,0,0,0],r=[0,0,1,0,1,1,0,1],c=[255,255,255,255],o=[["position",new C(t,i,3,!0)],["normal",new C(s,n,3,!0)],["uv0",new C(r,i,2,!0)],["color",new C(c,n,4,!0)]];return new de(a,o)}function Vr(a,e,t,i,s=!0,n=!0){let r=0;const c=e,o=a;let l=U(0,r,0),d=U(0,r+o,0),p=U(0,-1,0),v=U(0,1,0);i&&(r=o,d=U(0,0,0),l=U(0,r,0),p=U(0,1,0),v=U(0,-1,0));const S=[d,l],y=[p,v],x=t+2,h=Math.sqrt(o*o+c*c);if(i)for(let m=t-1;m>=0;m--){const _=m*(2*Math.PI/t),O=U(Math.cos(_)*c,r,Math.sin(_)*c);S.push(O);const g=U(o*Math.cos(_)/h,-c/h,o*Math.sin(_)/h);y.push(g)}else for(let m=0;m<t;m++){const _=m*(2*Math.PI/t),O=U(Math.cos(_)*c,r,Math.sin(_)*c);S.push(O);const g=U(o*Math.cos(_)/h,c/h,o*Math.sin(_)/h);y.push(g)}const b=new Array,w=new Array;if(s){for(let m=3;m<S.length;m++)b.push(1),b.push(m-1),b.push(m),w.push(0),w.push(0),w.push(0);b.push(S.length-1),b.push(2),b.push(1),w.push(0),w.push(0),w.push(0)}if(n){for(let m=3;m<S.length;m++)b.push(m),b.push(m-1),b.push(0),w.push(m),w.push(m-1),w.push(1);b.push(0),b.push(2),b.push(S.length-1),w.push(1),w.push(2),w.push(y.length-1)}const f=xe(3*x);for(let m=0;m<x;m++)f[3*m]=S[m][0],f[3*m+1]=S[m][1],f[3*m+2]=S[m][2];const P=xe(3*x);for(let m=0;m<x;m++)P[3*m]=y[m][0],P[3*m+1]=y[m][1],P[3*m+2]=y[m][2];return[["position",new C(f,b,3,!0)],["normal",new C(P,w,3,!0)]]}function Vl(a,e,t,i,s,n=!0,r=!0){return new de(a,Vr(e,t,i,s,n,r))}function Ml(a,e,t,i,s,n,r){const c=s?Mi(s):U(1,0,0),o=n?Mi(n):U(0,0,0);r??=!0;const l=ye();Y(l,c);const d=ye();q(d,l,Math.abs(e));const p=ye();q(p,d,-.5),Q(p,p,o);const v=U(0,1,0);Math.abs(1-at(l,v))<.2&&K(v,0,0,1);const S=ye();ze(S,l,v),Y(S,S),ze(v,S,l);const y=2*i+(r?2:0),x=i+(r?2:0),h=xe(3*y),b=xe(3*x),w=xe(2*y),f=new Array(3*i*(r?4:2)),P=new Array(3*i*(r?4:2));r&&(h[3*(y-2)]=p[0],h[3*(y-2)+1]=p[1],h[3*(y-2)+2]=p[2],w[2*(y-2)]=0,w[2*(y-2)+1]=0,h[3*(y-1)]=h[3*(y-2)]+d[0],h[3*(y-1)+1]=h[3*(y-2)+1]+d[1],h[3*(y-1)+2]=h[3*(y-2)+2]+d[2],w[2*(y-1)]=1,w[2*(y-1)+1]=1,b[3*(x-2)]=-l[0],b[3*(x-2)+1]=-l[1],b[3*(x-2)+2]=-l[2],b[3*(x-1)]=l[0],b[3*(x-1)+1]=l[1],b[3*(x-1)+2]=l[2]);const m=($,M,z)=>{f[$]=M,P[$]=z};let _=0;const O=ye(),g=ye();for(let $=0;$<i;$++){const M=$*(2*Math.PI/i);q(O,v,Math.sin(M)),q(g,S,Math.cos(M)),Q(O,O,g),b[3*$]=O[0],b[3*$+1]=O[1],b[3*$+2]=O[2],q(O,O,t),Q(O,O,p),h[3*$]=O[0],h[3*$+1]=O[1],h[3*$+2]=O[2],w[2*$]=$/i,w[2*$+1]=0,h[3*($+i)]=h[3*$]+d[0],h[3*($+i)+1]=h[3*$+1]+d[1],h[3*($+i)+2]=h[3*$+2]+d[2],w[2*($+i)]=$/i,w[2*$+1]=1;const z=($+1)%i;m(_++,$,$),m(_++,$+i,$),m(_++,z,z),m(_++,z,z),m(_++,$+i,$),m(_++,z+i,z)}if(r){for(let $=0;$<i;$++){const M=($+1)%i;m(_++,y-2,x-2),m(_++,$,x-2),m(_++,M,x-2)}for(let $=0;$<i;$++){const M=($+1)%i;m(_++,$+i,x-1),m(_++,y-1,x-1),m(_++,M+i,x-1)}}const F=[["position",new C(h,f,3,!0)],["normal",new C(b,P,3,!0)],["uv0",new C(w,f,2,!0)]];return new de(a,F)}function Ll(a,e,t,i,s,n){i=i||10,s=s==null||s,li(e.length>1);const r=[[0,0,0]],c=[],o=[];for(let l=0;l<i;l++){c.push([0,-l-1,-(l+1)%i-1]);const d=l/i*2*Math.PI;o.push([Math.cos(d)*t,Math.sin(d)*t])}return Mr(a,o,e,r,c,s,n)}function Mr(a,e,t,i,s,n,r=U(0,0,0)){const c=e.length,o=xe(t.length*c*3+(6*i.length||0)),l=xe(t.length*c*3+(i?6:0)),d=new Array,p=new Array;let v=0,S=0;const y=R(),x=R(),h=R(),b=R(),w=R(),f=R(),P=R(),m=R(),_=R(),O=R(),g=R(),F=R(),$=R(),M=ot();K(_,0,1,0),se(x,t[1],t[0]),Y(x,x),n?(Q(m,t[0],r),Y(h,m)):K(h,0,0,1),Yi(x,h,_,_,w,h,Ki),B(b,h),B(F,w);for(let A=0;A<i.length;A++)q(f,w,i[A][0]),q(m,h,i[A][2]),Q(f,f,m),Q(f,f,t[0]),o[v++]=f[0],o[v++]=f[1],o[v++]=f[2];l[S++]=-x[0],l[S++]=-x[1],l[S++]=-x[2];for(let A=0;A<s.length;A++)d.push(s[A][0]>0?s[A][0]:-s[A][0]-1+i.length),d.push(s[A][1]>0?s[A][1]:-s[A][1]-1+i.length),d.push(s[A][2]>0?s[A][2]:-s[A][2]-1+i.length),p.push(0),p.push(0),p.push(0);let z=i.length;const we=i.length-1;for(let A=0;A<t.length;A++){let J=!1;A>0&&(B(y,x),A<t.length-1?(se(x,t[A+1],t[A]),Y(x,x)):J=!0,Q(O,y,x),Y(O,O),Q(g,t[A-1],b),wn(t[A],O,M),$n(M,_n(g,y),m)?(se(m,m,t[A]),Y(h,m),ze(w,O,h),Y(w,w)):Yi(O,b,F,_,w,h,Ki),B(b,h),B(F,w)),n&&(Q(m,t[A],r),Y($,m));for(let Z=0;Z<c;Z++)if(q(f,w,e[Z][0]),q(m,h,e[Z][1]),Q(f,f,m),Y(P,f),l[S++]=P[0],l[S++]=P[1],l[S++]=P[2],Q(f,f,t[A]),o[v++]=f[0],o[v++]=f[1],o[v++]=f[2],!J){const pe=(Z+1)%c;d.push(z+Z),d.push(z+c+Z),d.push(z+pe),d.push(z+pe),d.push(z+c+Z),d.push(z+c+pe);for(let ge=0;ge<6;ge++){const V=d.length-6;p.push(d[V+ge]-we)}}z+=c}const N=t[t.length-1];for(let A=0;A<i.length;A++)q(f,w,i[A][0]),q(m,h,i[A][1]),Q(f,f,m),Q(f,f,N),o[v++]=f[0],o[v++]=f[1],o[v++]=f[2];const ve=S/3;l[S++]=x[0],l[S++]=x[1],l[S++]=x[2];const ue=z-c;for(let A=0;A<s.length;A++)d.push(s[A][0]>=0?z+s[A][0]:-s[A][0]-1+ue),d.push(s[A][2]>=0?z+s[A][2]:-s[A][2]-1+ue),d.push(s[A][1]>=0?z+s[A][1]:-s[A][1]-1+ue),p.push(ve),p.push(ve),p.push(ve);const Ce=[["position",new C(o,d,3,!0)],["normal",new C(l,p,3,!0)]];return new de(a,Ce)}function jl(a,e,t,i,s){const n=oi(3*e.length),r=new Array(2*(e.length-1));let c=0,o=0;for(let d=0;d<e.length;d++){for(let p=0;p<3;p++)n[c++]=e[d][p];d>0&&(r[o++]=d-1,r[o++]=d)}const l=[["position",new C(n,r,3,!0)]];if(t?.length===e.length&&t[0].length===3){const d=xe(3*t.length);let p=0;for(let v=0;v<e.length;v++)for(let S=0;S<3;S++)d[p++]=t[v][S];l.push(["normal",new C(d,r,3,!0)])}if(i&&l.push(["color",new C(i,yn(i.length/4),4)]),s?.length===e.length){const d=Ia(s,1);l.push(["timeStamps",new C(d,r,Fe,!0)])}return new de(a,l,null,2)}function Wl(a,e,t,i,s,n=0){const r=new Array(18),c=[[-t,n,s/2],[i,n,s/2],[0,e+n,s/2],[-t,n,-s/2],[i,n,-s/2],[0,e+n,-s/2]],o=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let l=0;l<6;l++)r[3*l]=c[l][0],r[3*l+1]=c[l][1],r[3*l+2]=c[l][2];return new de(a,[["position",new C(r,o,3,!0)]])}function Il(a,e){const t=a.getMutableAttribute("position").data;for(let i=0;i<t.length;i+=3){const s=t[i],n=t[i+1],r=t[i+2];K(We,s,n,r),re(We,We,e),t[i]=We[0],t[i+1]=We[1],t[i+2]=We[2]}}function Ul(a,e=a){const t=a.attributes,i=t.get("position").data,s=t.get("normal").data;if(s){const n=e.getMutableAttribute("normal").data;for(let r=0;r<s.length;r+=3){const c=s[r+1];n[r+1]=-s[r+2],n[r+2]=c}}if(i){const n=e.getMutableAttribute("position").data;for(let r=0;r<i.length;r+=3){const c=i[r+1];n[r+1]=-i[r+2],n[r+2]=c}}}function Nt(a,e,t,i,s){return!(Math.abs(at(e,a))>s)&&(ze(t,a,e),Y(t,t),ze(i,t,a),Y(i,i),!0)}function Yi(a,e,t,i,s,n,r){return Nt(a,e,s,n,r)||Nt(a,t,s,n,r)||Nt(a,i,s,n,r)}const Ki=.99619469809,We=R(),Lr=()=>pa.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function jr(a){return{cachedResult:a.cachedResult,arcade:a.arcade?{func:a.arcade.func,context:a.arcade.modules.arcadeUtils.createExecContext(null,{sr:a.arcade.context.spatialReference}),modules:a.arcade.modules}:null}}function kl(a){const e=a?.expression;if(typeof e=="string"){const t=Ba(e);if(t!=null)return{cachedResult:t}}return null}async function Bl(a,e,t,i){const s=a?.expression;if(typeof s!="string")return null;const n=Ba(s);if(n!=null)return{cachedResult:n};const r=await ps();fs(t);const c=r.arcadeUtils,o=c.createSyntaxTree(s);return c.dependsOnView(o)?(i?.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:c.createFunction(o),context:c.createExecContext(null,{sr:e}),modules:r}}}function Wr(a,e,t){return a.arcadeUtils.createFeature(e.attributes,e.geometry,t)}function Ir(a,e){if(a!=null&&!ka(a)){if(!e||!a.arcade)return void Lr().errorOncePerTick("Arcade support required but not provided");const t=e;t._geometry&&(t._geometry=Pn(t._geometry)),a.arcade.modules.arcadeUtils.updateExecContext(a.arcade.context,e)}}function Ur(a){if(a!=null){if(ka(a))return a.cachedResult;const e=a.arcade;let t=e?.modules.arcadeUtils.executeFunction(e.func,e.context);return typeof t!="number"&&(a.cachedResult=0,t=0),t}return 0}function Nl(a,e=!1){let t=a?.featureExpressionInfo;const i=t?.expression;return e||i==="0"||(t=null),t??null}const Hl={cachedResult:0};function ka(a){return a.cachedResult!=null}function Ba(a){return a==="0"?0:null}let Gl=class Na{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.mode=null,this.centerInElevationSR=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=hs(e)}get requiresSampledElevationInfo(){return this.mode!=="absolute-height"}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,t){const i=this.calculateOffsetRenderUnits(t);return this.featureExpressionInfoContext!=null?i:e+i}calculateOffsetRenderUnits(e){let t=this._meterUnitOffset;const i=this.featureExpressionInfoContext;return i!=null&&(t+=Ur(i)*this._metersPerElevationInfoUnit),t/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=ms(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}setFeatureExpressionInfoContext(e){this._featureExpressionInfoContext=e}updateFeatureExpressionInfoContextForGraphic(e,t,i){e.arcade?(this._featureExpressionInfoContext=jr(e),this.updateFeatureExpressionFeature(t,i)):this._featureExpressionInfoContext=e}updateFeatureExpressionFeature(e,t){const i=this.featureExpressionInfoContext;i?.arcade&&(i.cachedResult=void 0,Ir(this._featureExpressionInfoContext,e.geometry?Wr(i.arcade.modules,e,t):null))}static fromElevationInfo(e){const t=new Na;return e!=null&&t.setFromElevationInfo(e),t}};function kr(a){return a==="position"}function Br(a,e){return a==null&&(a=[]),a.push(e),a}function Nr(a,e){if(a==null)return null;const t=a.filter(i=>i!==e);return t.length===0?null:t}function ql(a,e,t,i,s){gt[0]=a.get(e,0),gt[1]=a.get(e,1),gt[2]=a.get(e,2),Js(gt,De,3),t.set(s,0,De[0]),i.set(s,0,De[1]),t.set(s,1,De[2]),i.set(s,1,De[3]),t.set(s,2,De[4]),i.set(s,2,De[5])}const gt=R(),De=new Float32Array(6);let Hr=class{constructor(e={}){this.id=Rt(),this._highlightIds=new Set,this._shaderTransformation=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerViewUid=e.layerViewUid,e.isElevationSource&&(this.lastValidElevationBB=new Ha),this._geometries=e.geometries?Array.from(e.geometries):[]}dispose(){this._geometries.length=0}get layer(){return this._layer}set layer(e){li(this._layer==null||e==null,"Object3D can only be added to a single Layer"),this._layer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e);for(const t of this._highlightIds)e.addHighlight(t);this._emit("geometryAdded",{object:this,geometry:e}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}removeGeometry(e){const t=this._geometries.splice(e,1)[0];if(t){for(const i of this._highlightIds)t.removeHighlight(i);this._emit("geometryRemoved",{object:this,geometry:t}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,t,i=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:t,sync:i}),kr(t)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const t of this._geometries)t.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new Xs;for(const t of this._geometries)t.occludees=Br(t.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const t of this._geometries)t.occludees=Nr(t.occludees,e);this._emit("occlusionChanged",this)}highlight(e){const t=new Qs(e);for(const i of this._geometries)i.addHighlight(t);return this._emit("highlightChanged",this),this._highlightIds.add(t),t}removeHighlight(e){this._highlightIds.delete(e);for(const t of this._geometries)t.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===0?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,t){return bi(t,this.transformation,e.transformation)}getCombinedShaderTransformation(e,t=ke()){return bi(t,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=new Zi,this._validateBoundingVolume(this._bvWorldSpace,0)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=new Zi,this._validateBoundingVolume(this._bvObjectSpace,1)),this._bvObjectSpace}_validateBoundingVolume(e,t){const i=t===1;for(const s of this._geometries){const n=s.boundingInfo;n&&Gr(n,e,i?s.transformation:this.getCombinedShaderTransformation(s))}Ps(e.bounds.center,e.min,e.max,.5);for(const s of this._geometries){const n=s.boundingInfo;if(n==null)continue;const r=i?s.transformation:this.getCombinedShaderTransformation(s),c=zn(r);re(ea,n.center,r);const o=st(ea,e.bounds.center),l=n.radius*c;e.bounds.radius=Math.max(e.bounds.radius,o+l)}}_invalidateBoundingVolume(){const e=this._bvWorldSpace?.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this.layer&&e&&this.layer.notifyObjectBBChanged(this,e)}_emit(e,t){this.layer?.events.emit(e,t)}get geometries(){return this._geometries}get transformation(){return this._transformation??vs}set transformation(e){this._transformation=Qt(this._transformation??ke(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?Qt(this._shaderTransformation??ke(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}get test(){}},Ha=class{constructor(){this._data=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE]}get min(){return tt(this._data[0],this._data[1],this._data[2])}get max(){return tt(this._data[3],this._data[4],this._data[5])}minWith(e){const{_data:t}=this;t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.min(t[2],e[2])}maxWith(e){const{_data:t}=this;t[3]=Math.max(t[3],e[0]),t[4]=Math.max(t[4],e[1]),t[5]=Math.max(t[5],e[2])}assignMinMax(e,t){for(let i=0;i<3;++i)this._data[0+i]=e[i],this._data[3+i]=t[i]}isEmpty(){return this._data[3]<this._data[0]&&this._data[4]<this._data[1]&&this._data[5]<this._data[2]}};class Zi extends Ha{constructor(){super(...arguments),this.bounds=new On}}function Gr(a,e,t){const i=a.bbMin,s=a.bbMax;if(gs(t)){const n=K(qr,t[12],t[13],t[14]);return Q(me,i,n),Q(be,s,n),e.minWith(me),void e.maxWith(be)}if(re(me,i,t),Os(i,s))return e.minWith(me),void e.maxWith(me);re(be,s,t),e.minWith(me),e.minWith(be),e.maxWith(me),e.maxWith(be);for(let n=0;n<3;++n)B(me,i),B(be,s),me[n]=s[n],be[n]=i[n],re(me,me,t),re(be,be,t),e.minWith(me),e.minWith(be),e.maxWith(me),e.maxWith(be)}const qr=R(),me=R(),be=R(),ea=R(),Jr=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];let Xr=class{constructor(e,t,i=""){this.stage=e,this.apiLayerViewUid=i,this.id=Rt(),this.events=new Ss,this.visible=!0,this.sliceable=!1,this._objectsAdded=new Array,this._handles=new xs,this._objects=new Map,this._pickable=!0,this.visible=t?.visible??!0,this._pickable=t?.pickable??!0,this.updatePolicy=t?.updatePolicy??0,e.addLayer(this);for(const s of Jr)this._handles.add(this.events.on(s,n=>e.handleEvent(s,n)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.removeLayer(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}getObject(e){return bs(this._objects.get(e))}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.set(e.id,e),e.layer=this,this.events.emit("layerObjectAdded",e),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.delete(e.id)&&(this.events.emit("layerObjectRemoved",e),e.layer=null,this._octree!=null&&(yi(this._objectsAdded,e)||this._octree.remove([e])))}addMany(e){for(const t of e)this._objects.set(t.id,t),t.layer=this;this.events.emit("layerObjectsAdded",e),this._octree!=null&&this._objectsAdded.push(...e)}removeMany(e){const t=new Array;for(const i of e)this._objects.delete(i.id)&&t.push(i);if(t.length!==0&&(this.events.emit("layerObjectsRemoved",t),t.forEach(i=>i.layer=null),this._octree!=null)){for(let i=0;i<t.length;)yi(this._objectsAdded,t[i])?(t[i]=t[t.length-1],t.length-=1):++i;this._octree.remove(t)}}commit(){this.stage.commitLayer(this)}sync(){this.updatePolicy!==1&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,t){this._octree==null||this._objectsAdded.includes(e)||this._octree.update(e,t)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.size>50?(this._octree=new Cn(e=>e.boundingVolumeWorldSpace.bounds),this._octree.add(this._objects.values())):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded),this._objectsAdded.length=0),this._octree}invalidateSpatialQueryAccelerator(){this._octree=ys(this._octree),this._objectsAdded.length=0}get test(){}},Qr=class{constructor(e,t){this.vec3=e,this.id=t}};function ta(a,e,t,i){return new Qr(tt(a,e,t),i)}const X={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},Yr={dash:X.dash,"dash-dot":[...X.dash,...X.dot],dot:X.dot,"long-dash":X["long-dash"],"long-dash-dot":[...X["long-dash"],...X.dot],"long-dash-dot-dot":[...X["long-dash"],...X.dot,...X.dot],none:null,"short-dash":X["short-dash"],"short-dash-dot":[...X["short-dash"],...X["short-dot"]],"short-dash-dot-dot":[...X["short-dash"],...X["short-dot"],...X["short-dot"]],"short-dot":X["short-dot"],solid:null},Kr=8;let Zr=class{constructor(e,t,i){this.image=e,this.width=t,this.length=i,this.uuid=Dn()}};function At(a){return a!=null&&"image"in a}function eo(a,e){return a==null?a:{pattern:a.slice(),pixelRatio:e}}function Zl(a){return{pattern:[a,a],pixelRatio:2}}function ec(a){switch(a?.type){case"style":return to(a.style);case"image":return new Zr(a.image,a.width,a.length);case void 0:case null:return null}return null}function to(a){return a!=null?eo(Yr[a],Kr):null}const ia=8;function io(a,e){const{vertex:t,attributes:i}=a;t.uniforms.add(new oe("intrinsicWidth",r=>r.width));const{hasScreenSizePerspective:s,spherical:n}=e;s?(a.include(ci,e),$a(t),di(t,e),t.uniforms.add(new Ys("inverseViewMatrix",(r,c)=>ua(aa,ws(aa,c.camera.viewMatrix,r.origin)))),t.code.add(u`
      float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
        vec3 worldPos = (inverseViewMatrix * vec4(pos, 1)).xyz;
        vec3 groundUp = ${n?u`normalize(worldPos + localOrigin)`:u`vec3(0.0, 0.0, 1.0)`};
        float absCosAngle = abs(dot(groundUp, normalize(worldPos - cameraPosition)));

        return screenSizePerspectiveScaleFloat(size, absCosAngle, length(pos), screenSizePerspective);
      }
    `)):t.code.add(u`float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
return size;
}`),e.hasVVSize?(i.add("sizeFeatureAttribute","float"),t.uniforms.add(new Qe("vvSizeMinSize",r=>r.vvSize.minSize),new Qe("vvSizeMaxSize",r=>r.vvSize.maxSize),new Qe("vvSizeOffset",r=>r.vvSize.offset),new Qe("vvSizeFactor",r=>r.vvSize.factor),new Qe("vvSizeFallback",r=>r.vvSize.fallback)),t.code.add(u`
    float getSize(${E(s,"vec3 pos")}) {
      float size = isnan(sizeFeatureAttribute)
        ? vvSizeFallback.x
        : intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;

      return ${E(s,"applyLineSizeScreenSizePerspective(size, pos)","size")};
    }
    `)):(i.add("size","float"),t.code.add(u`
    float getSize(${E(s,"vec3 pos")}) {
      float fullSize = intrinsicWidth * size;
      return ${E(s,"applyLineSizeScreenSizePerspective(fullSize, pos)","fullSize")};
    }
    `)),e.hasVVOpacity?(i.add("opacityFeatureAttribute","float"),t.constants.add("vvOpacityNumber","int",8),t.uniforms.add(new Ci("vvOpacityValues",ia,r=>r.vvOpacity.values),new Ci("vvOpacityOpacities",ia,r=>r.vvOpacity.opacityValues),new oe("vvOpacityFallback",r=>r.vvOpacity.fallback,{supportsNaN:!0})),t.code.add(u`
    float interpolateOpacity(float value) {
      if (value <= vvOpacityValues[0]) {
        return vvOpacityOpacities[0];
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
        }
      }

      return vvOpacityOpacities[vvOpacityNumber - 1];
    }

    vec4 applyOpacity(vec4 color) {
      if (isnan(opacityFeatureAttribute)) {
        // If there is a color vv then it will already have taken care of applying the fallback
        return ${E(e.hasVVColor,"color","vec4(color.rgb, vvOpacityFallback)")};
      }

      return vec4(color.rgb, interpolateOpacity(opacityFeatureAttribute));
    }
    `)):t.code.add(u`vec4 applyOpacity(vec4 color) {
return color;
}`),e.hasVVColor?(a.include(ba,e),i.add("colorFeatureAttribute","float"),t.code.add(u`vec4 getColor() {
vec4 color = interpolateVVColor(colorFeatureAttribute);
if (isnan(color.r)) {
return vec4(0);
}
return applyOpacity(color);
}`)):(i.add("color","vec4"),t.code.add(u`vec4 getColor() {
return applyOpacity(color);
}`))}const aa=ke();function ao(a){a.vertex.code.add("#define noPerspectiveWrite(x, w) (x * w)")}function si(a){a.fragment.code.add("#define noPerspectiveRead(x) (x * gl_FragCoord.w)")}let so=class{constructor(e,t,i){this._createTexture=e,this._parametersKey=t,this._repository=new Map,this._orphanCache=i.newCache(`procedural-texture-repository:${Rt()}`,s=>s.dispose())}destroy(){for(const{texture:e}of this._repository.values())e.dispose();this._repository.clear(),this._orphanCache.destroy()}swap(e,t=null){const i=this._acquire(e);return this.release(t),i}release(e){if(e==null)return;const t=this._parametersKey(e),i=this._repository.get(t);if(i&&(i.refCount--,i.refCount===0)){this._repository.delete(t);const{texture:s}=i;this._orphanCache.put(t,s)}}_acquire(e){if(e==null)return null;const t=this._parametersKey(e),i=this._repository.get(t);if(i)return i.refCount++,i.texture;const s=this._orphanCache.pop(t)??this._createTexture(e),n=new no(s);return this._repository.set(t,n),s}},no=class{constructor(e){this.texture=e,this.refCount=1}};function ac(a,e){return new so(t=>{if(At(t))return oo(a,t.image);const{data:i,textureSize:s}=ro(t),n=new mi(s,1);return n.dataType=Ft.FLOAT,n.pixelFormat=6403,n.internalFormat=Vt.R16F,n.wrapMode=10497,new hi(a,n,i)},t=>At(t)?`image-${t.uuid}`:`${t.pattern.join(",")}-r${t.pixelRatio}`,e)}function ro(a){const e=Ga(a),t=1/a.pixelRatio,i=qa(a),s=[];let n=1;for(const c of e){for(let o=0;o<c;o++){const l=n*(Math.min(o,c-1-o)+.5)*t;s.push(l)}n=-n}const r=Math.round(e[0]/2);return{data:new Float32Array([...s.slice(r),...s.slice(0,r)]),textureSize:i}}function Ga(a){return a.pattern.map(e=>Math.round(e*a.pixelRatio))}function qa(a){if(a==null)return 1;const e=Ga(a);return Math.floor(e.reduce((t,i)=>t+i))}function oo(a,e){const{data:t,width:i,height:s}=e,n=new mi(i,s);return n.dataType=Ft.UNSIGNED_BYTE,n.pixelFormat=6408,n.internalFormat=Vt.RGBA8,n.wrapMode={s:10497,t:33071},n.hasMipmap=!0,n.samplingMode=9987,new hi(a,n,t)}function lo(a){return a==null?ha:a.length===4?a:bt(co,a[0],a[1],a[2],1)}const co=nt();function uo(a,e){if(!e.stippleEnabled)return void a.fragment.code.add(u`float getStippleAlpha(float lineWidth) { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);const t=!(e.draped&&e.stipplePreferContinuous),{vertex:i,fragment:s}=a;e.draped||(di(i,e),i.uniforms.add(new Je("worldToScreenPerDistanceRatio",({camera:n})=>1/n.perScreenPixelRatio)).code.add(u`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),a.varyings.add("vStippleDistance","float"),a.varyings.add("vStippleDistanceLimits","vec2"),a.varyings.add("vStipplePatternStretch","float"),i.code.add(u`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${u.float(po)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),rt(i),i.code.add(u`
    vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {

      // First check if the segment is long enough to support fully screen space patterns.
      // Force sparse mode for segments that are very large in screen space even if it is not allowed,
      // to avoid imprecision from calculating with large floats.
      if (segmentLengthPseudoScreen >= ${t?"patternLength":"1e4"}) {
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        float stretch = repetitions / flooredRepetitions;

        // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
        // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
        vStipplePatternStretch = max(0.75, stretch);

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `),s.uniforms.add(new ei("stipplePatternTexture",n=>n.stippleTexture),new oe("stipplePatternPixelSizeInv",n=>1/Ja(n))),e.stippleOffColorEnabled&&s.uniforms.add(new Be("stippleOffColor",n=>lo(n.stippleOffColor))),a.include(si),e.worldSizedImagePattern?(a.varyings.add("vStippleV","float"),a.fragment.include(Ks),s.code.add(u`vec4 getStippleColor(out bool isClamped) {
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = vStippleDistance * stipplePatternPixelSizeInv;
float v = vStippleV == -1.0 ? 0.5 : vStippleV;
return texture(stipplePatternTexture, vec2(u, v));
}
vec4 getStippleColor() {
bool ignored;
return getStippleColor(ignored);
}
float getStippleSDF() {
vec4 color = getStippleColor();
return color.a == 0.0 ? -0.5 : 0.5;
}
float getStippleAlpha(float lineWidth) {
return getStippleColor().a;
}
vec4 blendStipple(vec4 color, float stippleAlpha) {
vec4 stippleColor = getStippleColor();
int mixMode  = 1;
vec3 col = mixExternalColor(color.rgb, vec3(1.0), stippleColor.rgb, mixMode);
float opacity = mixExternalOpacity(color.a, 1.0, stippleColor.a, mixMode);
return vec4(col, opacity);
}`)):s.code.add(u`
    float getStippleSDF(out bool isClamped) {
      float stippleDistanceClamped = noPerspectiveRead(clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y));
      float lineSizeInv = noPerspectiveRead(vLineSizeInv);

      vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
      isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;

      float u = stippleDistanceClamped * stipplePatternPixelSizeInv * lineSizeInv;
      u = fract(u);

      float sdf = texture(stipplePatternTexture, vec2(u, 0.5)).r;

      return (sdf - 0.5) * vStipplePatternStretch + 0.5;
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha(float lineWidth) {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);
      float antiAliasedResult = clamp(stippleSDF * lineWidth + 0.5, 0.0, 1.0);
      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${e.stippleOffColorEnabled?"mix(color, stippleOffColor, stippleAlpha)":"vec4(color.rgb, color.a * stippleAlpha)"};
    }
  `),s.code.add(u`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${E(!e.stippleOffColorEnabled,"if (stippleAlpha < threshold) { discard; }")}
    }
  `)}function Ja(a){const e=a.stipplePattern;return At(e)?e.length:e?qa(e)/e.pixelRatio:1}const po=.4,gi=128,Me=.5,sc=Yt(Me/2,Me/2,1-Me/2,1-Me/2);function nc(a){return a==="cross"||a==="x"}function rc(a,e=gi,t=e*Me,i=0){const{data:s,parameters:n}=fo(a,e,t,i);return new Zs(s,n)}function fo(a,e=gi,t=e*Me,i=0){return{data:Xa(a,e,t,i),parameters:{mipmap:!1,wrap:{s:33071,t:33071},width:e,height:e,noUnpackFlip:!0,dataType:Ft.FLOAT,pixelFormat:6403,internalFormat:Vt.R16F,reloadable:!0}}}function Xa(a,e=gi,t=e*Me,i=0){switch(a){case"circle":default:return ho(e,t);case"square":return mo(e,t);case"cross":return go(e,t,i);case"x":return So(e,t,i);case"kite":return vo(e,t);case"triangle":return xo(e,t);case"arrow":return bo(e,t)}}function ho(a,e){const t=a/2-.5;return lt(a,Ka(t,t,e/2))}function mo(a,e){return Qa(a,e,!1)}function vo(a,e){return Qa(a,e,!0)}function go(a,e,t=0){return Ya(a,e,!1,t)}function So(a,e,t=0){return Ya(a,e,!0,t)}function xo(a,e){return lt(a,Za(a/2,e,e/2))}function bo(a,e){const t=e,i=e/2,s=a/2,n=.8*t,r=Ka(s,(a-e)/2-n,Math.sqrt(n*n+i*i)),c=Za(s,t,i);return lt(a,(o,l)=>Math.max(c(o,l),-r(o,l)))}function Qa(a,e,t){return t&&(e/=Math.SQRT2),lt(a,(i,s)=>{let n=i-.5*a+.25,r=.5*a-s-.75;if(t){const c=(n+r)/Math.SQRT2;r=(r-n)/Math.SQRT2,n=c}return Math.max(Math.abs(n),Math.abs(r))-.5*e})}function Ya(a,e,t,i=0){e-=i,t&&(e*=Math.SQRT2);const s=.5*e;return lt(a,(n,r)=>{let c,o=n-.5*a,l=.5*a-r-1;if(t){const d=(o+l)/Math.SQRT2;l=(l-o)/Math.SQRT2,o=d}return o=Math.abs(o),l=Math.abs(l),c=o>l?o>s?Math.sqrt((o-s)*(o-s)+l*l):l:l>s?Math.sqrt(o*o+(l-s)*(l-s)):o,c-=i/2,c})}function Ka(a,e,t){return(i,s)=>{const n=i-a,r=s-e;return Math.sqrt(n*n+r*r)-t}}function Za(a,e,t){const i=Math.sqrt(e*e+t*t);return(s,n)=>{const r=Math.abs(s-a)-t,c=n-a+e/2+.75,o=(e*r+t*c)/i,l=-c;return Math.max(o,l)}}function lt(a,e){const t=new Float32Array(a*a);for(let i=0;i<a;i++)for(let s=0;s<a;s++)t[s+a*i]=e(s,i)/a;return t}const Tt=64,es=Tt/2,ts=es/5,yo=Tt/ts,oc=.25;function lc(a,e){const t=Xa(a,Tt,es,ts),i=new mi(Tt);return i.internalFormat=Vt.R16F,i.dataType=Ft.FLOAT,i.pixelFormat=6403,i.wrapMode=33071,new hi(e,i,t)}function wo(a,e){const t=a.vertex,i=e.hasScreenSizePerspective;rt(t),t.uniforms.get("markerScale")==null&&t.constants.add("markerScale","float",1),t.constants.add("markerSizePerLineWidth","float",yo).code.add(u`
  float getLineWidth(${E(i,"vec3 pos")}) {
     return max(getSize(${E(i,"pos")}), 1.0) * pixelRatio;
  }

  float getScreenMarkerSize(float lineWidth) {
    return markerScale * markerSizePerLineWidth * lineWidth;
  }
  `),e.space===2&&(t.constants.add("maxSegmentLengthFraction","float",.45),t.uniforms.add(new Je("perRenderPixelRatio",s=>s.camera.perRenderPixelRatio)),t.code.add(u`
  bool areWorldMarkersHidden(vec3 pos, vec3 other) {
    vec3 midPoint = mix(pos, other, 0.5);
    float distanceToCamera = length(midPoint);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    float worldMarkerSize = getScreenMarkerSize(getLineWidth(${E(i,"pos")})) * screenToWorldRatio;
    float segmentLen = length(pos - other);
    return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
  }

  float getWorldMarkerSize(vec3 pos) {
    float distanceToCamera = length(pos);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    return getScreenMarkerSize(getLineWidth(${E(i,"pos")})) * screenToWorldRatio;
  }
  `))}const cc=.1,$o=et(1),_o=et(1),dc=1e3,uc=!1,pc=3,fc=1,hc=27e6,mc=501,vc=256,gc=3,Sc=2,xc=2;function Po(a,e){const{hasAnimation:t,animation:i}=e;if(!t)return;const{attributes:s,varyings:n,vertex:r,fragment:c}=a;s.add("timeStamps","vec4"),n.add("vTimeStamp","float"),n.add("vFirstTime","float"),n.add("vLastTime","float"),n.add("vTransitionType","float"),r.main.add(u`vTimeStamp = timeStamps.x;
vFirstTime = timeStamps.y;
vLastTime = timeStamps.z;
vTransitionType = timeStamps.w;`),i===3&&c.constants.add("decayRate","float",2.3),c.code.add(u`
    float getTrailOpacity(float x) {
      if (x < 0.0) {
        return 0.0;
      }

      ${Oo(i)}
    }`),c.uniforms.add(new oe("timeElapsed",o=>o.timeElapsed),new oe("trailLength",o=>o.trailLength),new oe("speed",o=>o.animationSpeed),new Zt("startEndTime",o=>qe(zo,o.startTime,o.endTime))),c.constants.add("fadeInTime","float",_o),c.constants.add("fadeOutTime","float",$o),c.constants.add("incomingTransition","int",0),c.constants.add("outgoingTransition","int",2),c.code.add(u`float fadeIn(float x) {
return smoothstep(0.0, fadeInTime, x);
}
float fadeOut(float x) {
return isinf(fadeOutTime) ? 1.0 : smoothstep(fadeOutTime, 0.0, x);
}
void updateAlphaIf(inout float alpha, bool condition, float newAlpha) {
alpha = condition ? min(alpha, newAlpha) : alpha;
}
vec4 animate(vec4 color) {
float startTime = startEndTime[0];
float endTime = startEndTime[1];
float totalTime = vLastTime - vFirstTime;
float actualFadeOutTime = min(fadeOutTime * speed, trailLength);
float longStreamlineThreshold = (fadeInTime + 1.0) * speed + actualFadeOutTime;
bool longStreamline = totalTime > longStreamlineThreshold;
float totalTimeWithFadeOut = longStreamline && actualFadeOutTime != trailLength ? totalTime : totalTime + actualFadeOutTime;
float fadeOutStartTime = longStreamline ? totalTime - actualFadeOutTime : totalTime;
float originTime =  -vFirstTime;
float actualEndTime = int(vTransitionType) == outgoingTransition ? min(endTime, startTime + vLastTime / speed) : endTime;
vec4 animatedColor = color;
if (speed == 0.0) {
float alpha = getTrailOpacity((totalTimeWithFadeOut - (vTimeStamp - vFirstTime)) / trailLength);
updateAlphaIf(alpha, !isinf(actualEndTime), fadeOut(timeElapsed - actualEndTime));
updateAlphaIf(alpha, true, fadeIn(timeElapsed - startTime));
animatedColor.a *= alpha;
return animatedColor;
}
float relativeStartTime = mod(startTime, totalTimeWithFadeOut);
float shiftedTimeElapsed = timeElapsed - relativeStartTime + originTime;
float headRelativeToFirst = mod(shiftedTimeElapsed * speed, totalTimeWithFadeOut);
float vRelativeToHead = headRelativeToFirst - originTime - vTimeStamp;
float vAbsoluteTime = timeElapsed - vRelativeToHead / speed;
if (startTime > timeElapsed) {
return vec4(0.0);
}
float alpha = getTrailOpacity(vRelativeToHead / trailLength);
updateAlphaIf(alpha, true, fadeIn(timeElapsed - startTime));
updateAlphaIf(alpha, !isinf(actualEndTime), fadeOut(timeElapsed - actualEndTime));
updateAlphaIf(alpha, int(vTransitionType) != incomingTransition, step(startTime, vAbsoluteTime));
updateAlphaIf(alpha, headRelativeToFirst > fadeOutStartTime, fadeOut((headRelativeToFirst - fadeOutStartTime) / speed));
alpha *= fadeIn(vTimeStamp - vFirstTime);
animatedColor.a *= alpha;
return animatedColor;
}`)}function Oo(a){switch(a){case 2:return"return x >= 0.0 && x <= 1.0 ? 1.0 : 0.0;";case 3:return`float cutOff = exp(-decayRate);
        return (exp(-decayRate * x) - cutOff) / (1.0 - cutOff);`;default:return"return 1.0;"}}const zo=Xe(),Dt=1;function Co(a){const e=new Ta,{attributes:t,varyings:i,vertex:s,fragment:n}=e,{applyMarkerOffset:r,draped:c,output:o,capType:l,stippleEnabled:d,falloffEnabled:p,roundJoins:v,wireframe:S,innerColorEnabled:y,hasAnimation:x,hasScreenSizePerspective:h,worldSizedImagePattern:b}=a;n.include(en),e.include(io,a),e.include(uo,a),e.include(ya,a),e.include(xa,a),e.include(Po,a);const w=r&&!c;w&&(s.uniforms.add(new oe("markerScale",g=>g.markerScale)),e.include(wo,{space:2,hasScreenSizePerspective:h})),ga(s,a),s.uniforms.add(new tn("inverseProjectionMatrix",g=>g.camera.inverseProjectionMatrix),new an("nearFar",g=>g.camera.nearFar),new oe("miterLimit",g=>g.join!=="miter"?0:g.miterLimit),new Et("viewport",g=>g.camera.fullViewport)),s.constants.add("LARGE_HALF_FLOAT","float",65500),t.add("position","vec3"),t.add("previousDelta","vec4"),t.add("nextDelta","vec4"),t.add("lineParameters","vec2"),t.add("u0","float"),i.add("vColor","vec4"),i.add("vpos","vec3",{invariant:!0}),i.add("vLineDistance","float"),i.add("vLineWidth","float");const f=d;f&&i.add("vLineSizeInv","float");const P=l===2,m=d&&P,_=p||m;_&&i.add("vLineDistanceNorm","float"),P&&(i.add("vSegmentSDF","float"),i.add("vReverseSegmentSDF","float")),s.code.add(u`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),s.code.add(u`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),s.code.add(u`void clip(
inout vec4 pos,
inout vec4 prev,
inout vec4 next,
bool isStartVertex
) {
float vnp = nearFar[0] * 0.99;
if (pos.z > -nearFar[0]) {
if (!isStartVertex) {
if (prev.z < -nearFar[0]) {
pos = mix(prev, pos, interp(vnp, prev, pos));
next = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
} else {
if (next.z < -nearFar[0]) {
pos = mix(pos, next, interp(vnp, pos, next));
prev = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
}
} else {
if (prev.z > -nearFar[0]) {
prev = mix(pos, prev, interp(vnp, pos, prev));
}
if (next.z > -nearFar[0]) {
next = mix(next, pos, interp(vnp, next, pos));
}
}
}`),rt(s),s.constants.add("aaWidth","float",d?0:1).main.add(u`
    // unpack values from vertex type
    bool isStartVertex = abs(abs(lineParameters.y) - 3.0) == 1.0;
    vec3 prevPosition = position + previousDelta.xyz * previousDelta.w;
    vec3 nextPosition = position + nextDelta.xyz * nextDelta.w;

    float coverage = 1.0;

    // Check for special value of lineParameters.y which is used by the Renderer when graphics are removed before the
    // VBO is recompacted. If this is the case, then we just project outside of clip space.
    if (lineParameters.y == 0.0) {
      gl_Position = ${Va};
    }
    else {
      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);

      bool isJoin = abs(lineParameters.y) < 3.0;
  `),w&&s.main.add(u`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos.xyz, other.xyz);
if (!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos.xyz) * 0.5;
}`),e.include(ao),s.main.add(u`
      clip(pos, prev, next, isStartVertex);

      vec3 clippedPos = pos.xyz;
      vec3 clippedCenter = mix(pos.xyz, isStartVertex ? next.xyz : prev.xyz, 0.5);

      forwardViewPosDepth(pos.xyz);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);

      vec2 left = (pos.xy - prev.xy);
      vec2 right = (next.xy - pos.xy);

      float leftLen = length(left);
      float rightLen = length(right);

      float lineSize = getSize(${E(h,"clippedPos")});
      ${E(d&&h,"float patternLineSize = getSize(clippedCenter);")}
      ${E(d&&!h,"float patternLineSize = lineSize;")}

      ${E(b,u`
          lineSize += aaWidth;
          float lineWidth = lineSize * pixelRatio * worldToScreenRatio;
          if (lineWidth < 1.0) {
            coverage = lineWidth;
            lineWidth = 1.0;
          }
        `,u`
          if (lineSize < 1.0) {
            coverage = lineSize; // convert sub-pixel coverage to alpha
            lineSize = 1.0;
          }

          lineSize += aaWidth;
          float lineWidth = lineSize * pixelRatio;
        `)}

      vLineWidth = noPerspectiveWrite(lineWidth, pos.w);
      ${f?u`vLineSizeInv = noPerspectiveWrite(1.0 / lineSize, pos.w);`:""}
  `),(d||P)&&s.main.add(u`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${P?u`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),s.main.add(u`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * lineParameters.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = perpendicular(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
float subdivisionFactor = lineParameters.x;
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),v?s.main.add(u`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = perpendicular(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${d?u`min(1.0, subdivisionFactor * ${u.float((Dt+2)/(Dt+1))})`:u`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(lineParameters.y) * factor * rotationAngle);
      `):s.main.add(u`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = perpendicular(joinDisplacementDir);`);const O=l!==0;return s.main.add(u`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${O?u`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),s.main.add(u`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(lineParameters.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = noPerspectiveWrite(sign(lineParameters.y), pos.w);

    vLineDistance = lineWidth * lineDistNorm;
    ${_?u`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),P&&s.main.add(u`vec2 segmentDir = normalize(segment);
vSegmentSDF = noPerspectiveWrite((isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir)), pos.w);
vReverseSegmentSDF = noPerspectiveWrite((isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir)), pos.w);`),d&&(c?s.uniforms.add(new Je("worldToScreenRatio",g=>1/g.screenToPCSRatio)):s.main.add(u`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),s.main.add(u`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),c?s.main.add(u`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = u0 * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):s.main.add(u`float startPseudoScreen = mix(u0, u0 - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),s.uniforms.add(new oe("stipplePatternPixelSize",g=>Ja(g))),s.main.add(u`
      float patternLength = patternLineSize * stipplePatternPixelSize;

      ${E(b,u`
          float uu = mix(u0, u0 - segmentLengthRender, isEndVertex);
          vStippleDistanceLimits = vec2(uu, uu + segmentLengthRender);
          vStipplePatternStretch = 1.0;

          // The v-coordinate used in case of an image pattern.
          bool isLeft = sign(lineParameters.y) < 0.0;
          vStippleV = isLeft ? 0.0 : 1.0;
        `,u`
          // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the
          // fragment shader
          vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
        `)}

      vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of
      // joins)
      if (segmentLengthScreenDouble >= 0.001) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1]
        // at the original vertex positions, and slightly outside of that range at the displaced positions
        vec2 stippleDisplacement = pos.xy - segmentOrigin;
        float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
      }

      // Cancel out perspective correct interpolation because we want this length the really represent the screen
      // distance
      vStippleDistanceLimits = noPerspectiveWrite(vStippleDistanceLimits, pos.w);
      vStippleDistance = noPerspectiveWrite(vStippleDistance, pos.w);

      // Disable stipple distance limits on caps
      vStippleDistanceLimits = isJoin ?
                                 vStippleDistanceLimits :
                                 isStartVertex ?
                                  vec2(-1e34, vStippleDistanceLimits.y) :
                                  vec2(vStippleDistanceLimits.x, 1e34);
    `)),s.main.add(u`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a = noPerspectiveWrite(vColor.a * coverage, pos.w);

      ${S&&!c?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),e.fragment.include(sn,a),e.include(nn,a),n.include(wa),n.main.add(u`discardBySlice(vpos);
discardByTerrainDepth();`),e.include(si),n.main.add(u`
    float lineWidth = noPerspectiveRead(vLineWidth);
    float lineDistance = noPerspectiveRead(vLineDistance);
    ${E(_,u`float lineDistanceNorm = noPerspectiveRead(vLineDistanceNorm);`)}
  `),S?n.main.add(u`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(P&&n.main.add(u`
        float sdf = noPerspectiveRead(min(vSegmentSDF, vReverseSegmentSDF));
        vec2 fragmentPosition = vec2(min(sdf, 0.0), lineDistance);

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - lineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${u.float(ne)}) {
          discard;
        }
      `),m?n.main.add(u`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        lineDistanceNorm
      );
      float stippleRadius = length(stipplePosition * lineWidth);
      float stippleCapSDF = (stippleRadius - lineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${u.float(ne)}, stippleCoverage);
      `):n.main.add(u`float stippleAlpha = getStippleAlpha(lineWidth);`),o!==9&&n.main.add(u`discardByStippleAlpha(stippleAlpha, ${u.float(ne)});`),e.include(si),n.uniforms.add(new Be("intrinsicColor",g=>g.color)).main.add(u`vec4 color = intrinsicColor * vColor;
color.a = noPerspectiveRead(color.a);`),y&&n.uniforms.add(new Be("innerColor",g=>g.innerColor??g.color),new oe("innerWidth",(g,F)=>g.innerWidth*F.camera.pixelRatio)).main.add(u`float distToInner = abs(lineDistance) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`),n.main.add(u`vec4 finalColor = blendStipple(color, stippleAlpha);`),p&&(n.uniforms.add(new oe("falloff",g=>g.falloff)),n.main.add(u`finalColor.a *= pow(max(0.0, 1.0 - abs(lineDistanceNorm)), falloff);`)),d||n.main.add(u`float featherStartDistance = max(lineWidth - 2.0, 0.0);
float value = abs(lineDistance);
float feather = (value - featherStartDistance) / (lineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`),x&&n.main.add(u`
        finalColor = animate(finalColor);

        ${E(o!==9,u`
            if (finalColor.a <= ${u.float(ne)}) {
              discard;
            }`)}
      `)),n.main.add(u`outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),e}const Ao=Object.freeze(Object.defineProperty({__proto__:null,build:Co,ribbonlineNumRoundJoinSubdivisions:Dt},Symbol.toStringTag,{value:"Module"}));let ni=class extends _a{constructor(a,e){super(a,e,ti(is(e))),this.shader=new Pa(Ao,()=>ca(()=>import("./RibbonLine.glsl-eThZlziI.js").then(t=>t.R),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]))),this.primitiveType=e.wireframe?Ot.LINES:Ot.TRIANGLE_STRIP}_makePipelineState(a,e){const{oitPass:t,output:i,hasEmission:s,hasOccludees:n,hasPolygonOffset:r}=a,c=t===0,o=t===2;return Ze({blending:Ve(i)?za(t):null,depthTest:cn(t),depthWrite:ln(a),drawBuffers:pt(i,Oa(t,s)),colorWrite:xt,stencilWrite:n?Ti:null,stencilTest:n?e?Ai:on:null,polygonOffset:c||o?r?sa:null:rn})}initializePipeline(a){if(a.occluder){const e=a.hasPolygonOffset?sa:null,{output:t,hasOccludees:i}=a;this._occluderPipelineTransparent=Ze({blending:Vi,polygonOffset:e,depthTest:Di,depthWrite:null,colorWrite:xt,stencilWrite:null,stencilTest:i?dn:null,drawBuffers:pt(t)}),this._occluderPipelineOpaque=Ze({blending:Vi,polygonOffset:e,depthTest:i?Di:Ri,depthWrite:null,colorWrite:xt,stencilWrite:i?pn:null,stencilTest:i?un:null,drawBuffers:pt(t)}),this._occluderPipelineMaskWrite=Ze({blending:null,polygonOffset:e,depthTest:Ri,depthWrite:null,colorWrite:null,stencilWrite:i?Ti:null,stencilTest:i?Ai:null,drawBuffers:pt(t)})}return this._occludeePipeline=this._makePipelineState(a,!0),this._makePipelineState(a,!1)}getPipeline(a,e){if(e)return this._occludeePipeline;switch(a.occluder){case 12:return this._occluderPipelineTransparent??super.getPipeline(a);case 11:return this._occluderPipelineOpaque??super.getPipeline(a);default:a.occluder;case void 0:case null:return this._occluderPipelineMaskWrite??super.getPipeline(a)}}};ni=T([da("esri.views.3d.webgl-engine.shaders.RibbonLineTechnique")],ni);const sa={factor:0,units:-4};function is(a){const e=pi().vec3f("position").vec4f16("previousDelta").vec4f16("nextDelta").f32("u0").vec2f16("lineParameters");return a.hasVVColor?e.f32("colorFeatureAttribute"):e.vec4u8("color",{glNormalized:!0}),a.hasVVSize?e.f32("sizeFeatureAttribute"):e.f32("size"),a.hasVVOpacity&&e.f32("opacityFeatureAttribute"),ui()&&e.vec4u8("olidColor"),a.hasAnimation&&e.vec4f16("timeStamps"),e}class j extends Ca{constructor(e){super(),this.spherical=e,this.capType=0,this.emissionSource=0,this.animation=2,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVVOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.hasScreenSizePerspective=!1,this.worldSizedImagePattern=!1,this.textureCoordinateType=0,this.occlusionPass=!1,this.hasVVInstancing=!1,this.hasSliceTranslatedView=!0,this.overlayEnabled=!1,this.snowCover=!1}get hasAnimation(){return this.animation!==0}}T([D({count:3})],j.prototype,"capType",void 0),T([D({count:8})],j.prototype,"emissionSource",void 0),T([D({count:4})],j.prototype,"animation",void 0),T([D()],j.prototype,"hasPolygonOffset",void 0),T([D()],j.prototype,"writeDepth",void 0),T([D()],j.prototype,"draped",void 0),T([D()],j.prototype,"stippleEnabled",void 0),T([D()],j.prototype,"stippleOffColorEnabled",void 0),T([D()],j.prototype,"stipplePreferContinuous",void 0),T([D()],j.prototype,"roundJoins",void 0),T([D()],j.prototype,"applyMarkerOffset",void 0),T([D()],j.prototype,"hasVVSize",void 0),T([D()],j.prototype,"hasVVColor",void 0),T([D()],j.prototype,"hasVVOpacity",void 0),T([D()],j.prototype,"falloffEnabled",void 0),T([D()],j.prototype,"innerColorEnabled",void 0),T([D()],j.prototype,"hasOccludees",void 0),T([D()],j.prototype,"occluder",void 0),T([D()],j.prototype,"terrainDepthTest",void 0),T([D()],j.prototype,"cullAboveTerrain",void 0),T([D()],j.prototype,"wireframe",void 0),T([D()],j.prototype,"discardInvisibleFragments",void 0),T([D()],j.prototype,"hasScreenSizePerspective",void 0),T([D()],j.prototype,"worldSizedImagePattern",void 0);class To extends Aa{constructor(e,t){super(e,Ro),this.produces=new Map([[2,i=>mn(i)||Ve(i)&&this.parameters.renderOccluded===8],[3,i=>vn(i)],[11,i=>Fi(i)&&this.parameters.renderOccluded===8],[12,i=>Fi(i)&&this.parameters.renderOccluded===8],[4,i=>Ve(i)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[9,i=>Ve(i)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[20,i=>gn(i)]]),this._configuration=new j(t)}getConfiguration(e,t){super.getConfiguration(e,t,this._configuration);const i=t.slot===20,s=this.parameters.stipplePattern!=null&&this.parameters.stippleTexture!=null&&e!==8,n=s&&i&&this.parameters.isImagePattern();return this._configuration.draped=i,this._configuration.stippleEnabled=s,this._configuration.stippleOffColorEnabled=s&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=s&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&Fo(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasVVSize=this.parameters.hasVVSize,this._configuration.hasVVColor=this.parameters.hasVVColor,this._configuration.hasVVOpacity=this.parameters.hasVVOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=t.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===8,this._configuration.terrainDepthTest=t.terrainDepthTest&&Ve(e),this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration.animation=this.parameters.animation,this._configuration.emissionSource=this.hasEmissions?1:0,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective&&!n,this._configuration.worldSizedImagePattern=n,this._configuration}get visible(){return this.parameters.color[3]>=ne||this.parameters.stipplePattern!=null&&(this.parameters.stippleOffColor?.[3]??0)>ne}setParameters(e,t){e.animation=this.parameters.animation,super.setParameters(e,t)}intersectDraped({attributes:e,screenToWorldRatio:t},i,s,n,r){if(!i.options.selectionMode)return;const c=e.get("size");let o=this.parameters.width;if(this.parameters.vvSize){const h=e.get("sizeFeatureAttribute").data[0];Number.isNaN(h)?o*=this.parameters.vvSize.fallback[0]:o*=St(this.parameters.vvSize.offset[0]+h*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else c&&(o*=c.data[0]);const l=s[0],d=s[1],p=(o/2+4)*t;let v=Number.MAX_VALUE,S=0;const y=e.get("position").data,x=ri(this.parameters,e)?y.length-2:y.length-5;for(let h=0;h<x;h+=3){const b=y[h],w=y[h+1],f=(h+3)%y.length,P=l-b,m=d-w,_=y[f]-b,O=y[f+1]-w,g=St((_*P+O*m)/(_*_+O*O),0,1),F=_*g-P,$=O*g-m,M=F*F+$*$;M<v&&(v=M,S=h/3)}v<p*p&&n(r.distance,r.normal,S)}intersect(e,t,i,s,n,r){const{options:c,camera:o,rayBegin:l,rayEnd:d}=i;if(!c.selectionMode||!e.visible||!o)return;if(!As(t))return void pa.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const p=e.attributes,v=p.get("position").data;let S=this.parameters.width;if(this.parameters.vvSize){const f=p.get("sizeFeatureAttribute").data[0];Number.isNaN(f)||(S*=St(this.parameters.vvSize.offset[0]+f*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0]))}else p.has("size")&&(S*=p.get("size").data[0]);const y=Vo;la(y,i.point);const x=S*o.pixelRatio/2+4*o.pixelRatio;K(Ke[0],y[0]-x,y[1]+x,0),K(Ke[1],y[0]+x,y[1]+x,0),K(Ke[2],y[0]+x,y[1]-x,0),K(Ke[3],y[0]-x,y[1]-x,0);for(let f=0;f<4;f++)if(!o.unprojectFromRenderScreen(Ke[f],Oe[f]))return;ht(o.eye,Oe[0],Oe[1],Gt),ht(o.eye,Oe[1],Oe[2],qt),ht(o.eye,Oe[2],Oe[3],Jt),ht(o.eye,Oe[3],Oe[0],Xt);let h=Number.MAX_VALUE,b=0;const w=ri(this.parameters,p)?v.length-2:v.length-5;for(let f=0;f<w;f+=3){te[0]=v[f]+t[12],te[1]=v[f+1]+t[13],te[2]=v[f+2]+t[14];const P=(f+3)%v.length;if(ie[0]=v[P]+t[12],ie[1]=v[P+1]+t[13],ie[2]=v[P+2]+t[14],$e(Gt,te)<0&&$e(Gt,ie)<0||$e(qt,te)<0&&$e(qt,ie)<0||$e(Jt,te)<0&&$e(Jt,ie)<0||$e(Xt,te)<0&&$e(Xt,ie)<0)continue;const m=o.projectToRenderScreen(te,Mo),_=o.projectToRenderScreen(ie,Lo);if(m==null||_==null)continue;if(m[2]<0&&_[2]>0){se(_e,te,ie);const g=o.frustum,F=-$e(g[4],te)/at(_e,Li(g[4]));if(q(_e,_e,F),Q(te,te,_e),!o.projectToRenderScreen(te,m))continue}else if(m[2]>0&&_[2]<0){se(_e,ie,te);const g=o.frustum,F=-$e(g[4],ie)/at(_e,Li(g[4]));if(q(_e,_e,F),Q(ie,ie,_e),!o.projectToRenderScreen(ie,_))continue}else if(m[2]<0&&_[2]<0)continue;m[2]=0,_[2]=0;const O=An(Lt(m,_,oa),y);O<h&&(h=O,B(na,te),B(ra,ie),b=f/3)}if(h<x*x){let f=Number.MAX_VALUE;if(Tn(Lt(na,ra,oa),Lt(l,d,jo),Re)){se(Re,Re,l);const P=it(Re);q(Re,Re,1/P),f=P/st(l,d)}r(f,Re,b)}}get hasEmissions(){return this.parameters.emissiveStrength>0}createBufferWriter(){return new Eo(is(this.parameters),this.parameters)}createGLMaterial(e){return new Do(e)}validateParameters(e){e.join!=="miter"&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}update(e){return!!this.parameters.hasAnimation&&(this.setParameters({timeElapsed:$s(e.time)},!1),e.dt!==0)}}class Do extends hn{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures?.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){const{stipplePattern:t}=this._material.parameters;return this._stipplePattern!==t&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(t,this._stipplePattern)}),this._stipplePattern=t),this.getTechnique(ni,e)}}class Ro extends fn{constructor(){super(...arguments),this._width=0,this.color=ma,this.join="miter",this.cap=0,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1,this.timeElapsed=et(0),this.animation=0,this.animationSpeed=1,this.trailLength=1,this.startTime=et(0),this.endTime=et(1/0),this.emissiveStrength=0}get width(){return this.isImagePattern()?this.stipplePattern.width:this._width}set width(e){this._width=e}get transparent(){return this.color[3]<1||this.hasAnimation||this.stipplePattern!=null&&(this.stippleOffColor?.[3]??0)<1}get hasAnimation(){return this.animation!==0}isImagePattern(){return At(this.stipplePattern)&&this.stippleTexture!=null}}class Eo{constructor(e,t){this.layout=e,this._parameters=t;const i=t.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=i;break;case"round":this.numJoinSubdivisions=Dt+i}}_isClosed(e){return ri(this._parameters,e)}allocate(e){return this.layout.createBuffer(e)}elementCount(e){const i=e.get("position").indices.length/2+1,s=this._isClosed(e);let n=s?2:4;return n+=((s?i:i-1)-(s?0:1))*(2*this.numJoinSubdivisions+4),n+=2,this._parameters.wireframe&&(n=2+4*(n-2)),n}write(e,t,i,s,n,r){const c=this.layout,o=i.get("position"),l=o.indices,d=o.data.length/3,p=i.get("distanceToStart")?.data;l&&l.length!==2*(d-1)&&console.warn("RibbonLineMaterial does not support indices");const v=c.fields.has("sizeFeatureAttribute");let S=1,y=null;if(v){const V=i.get("sizeFeatureAttribute");V.data.length===1?S=V.data[0]:y=V.data}else S=i.get("size")?.data[0]??1;let x=[1,1,1,1],h=0,b=null;const w=c.fields.has("colorFeatureAttribute");if(w){const V=i.get("colorFeatureAttribute");V.data.length===1?h=V.data[0]:b=V.data}else x=i.get("color")?.data??x;const f=i.get("timeStamps")?.data,P=f&&c.fields.has("timeStamps"),m=c.fields.has("opacityFeatureAttribute");let _=0,O=null;if(m){const V=i.get("opacityFeatureAttribute");V.data.length===1?_=V.data[0]:O=V.data}const g=new Float32Array(n.buffer),F=va(n.buffer),$=new Uint8Array(n.buffer),M=c.stride/4;let z=r*M;const we=z;let N=0;const ve=p?(V,Se,Ae)=>N=p[Ae]:(V,Se,Ae)=>N+=st(V,Se),ue=g.BYTES_PER_ELEMENT/F.BYTES_PER_ELEMENT,Ce=4/ue,A=ui(),J=(V,Se,Ae,fe,ct,as,dt,ss)=>{g[z++]=Se[0],g[z++]=Se[1],g[z++]=Se[2],Ei(V,Se,F,z*ue),z+=Ce,Ei(Ae,Se,F,z*ue),z+=Ce,g[z++]=ss;let Pe=z*ue;if(F[Pe++]=ct,F[Pe++]=as,z=Math.ceil(Pe/ue),w)g[z]=b?.[dt]??h;else{const le=Math.min(4*dt,x.length-4),ut=4*z;$[ut]=255*x[le],$[ut+1]=255*x[le+1],$[ut+2]=255*x[le+2],$[ut+3]=255*x[le+3]}if(z++,g[z++]=y?.[dt]??S,m&&(g[z++]=O?.[dt]??_),A){let le=4*z;s?($[le++]=s[0],$[le++]=s[1],$[le++]=s[2],$[le++]=s[3]):($[le++]=0,$[le++]=0,$[le++]=0,$[le++]=0),z=Math.ceil(.25*le)}P&&(Pe=z*ue,F[Pe++]=fe[0],F[Pe++]=fe[1],F[Pe++]=fe[2],F[Pe++]=fe[3],z=Math.ceil(Pe/ue))};z+=M,K(L,o.data[0],o.data[1],o.data[2]),P&&bt(ae,f[0],f[1],f[2],f[3]),e&&re(L,L,e);const Z=this._isClosed(i);if(Z){const V=o.data.length-3;K(G,o.data[V],o.data[V+1],o.data[V+2]),e&&re(G,G,e)}else K(I,o.data[3],o.data[4],o.data[5]),e&&re(I,I,e),J(L,L,I,ae,1,-4,0,0),J(L,L,I,ae,1,4,0,0),B(G,L),B(L,I),P&&bt(ae,f[4],f[5],f[6],f[7]);const pe=Z?0:1,ge=Z?d:d-1;for(let V=pe;V<ge;V++){const Se=(V+1)%d*3;K(I,o.data[Se],o.data[Se+1],o.data[Se+2]),e&&re(I,I,e),ve(G,L,V),J(G,L,I,ae,0,-1,V,N),J(G,L,I,ae,0,1,V,N);const Ae=this.numJoinSubdivisions;for(let fe=0;fe<Ae;++fe){const ct=(fe+1)/(Ae+1);J(G,L,I,ae,ct,-1,V,N),J(G,L,I,ae,ct,1,V,N)}if(J(G,L,I,ae,1,-2,V,N),J(G,L,I,ae,1,2,V,N),B(G,L),B(L,I),P){const fe=(V+1)%d*4;bt(ae,f[fe],f[fe+1],f[fe+2],f[fe+3])}}return Z?(K(I,o.data[3],o.data[4],o.data[5]),e&&re(I,I,e),N=ve(G,L,ge),J(G,L,I,ae,0,-1,pe,N),J(G,L,I,ae,0,1,pe,N)):(N=ve(G,L,ge),J(G,L,L,ae,0,-5,ge,N),J(G,L,L,ae,0,5,ge,N)),Ht(g,we+M,g,we,M),z=Ht(g,z-M,g,z,M),this._parameters.wireframe&&this._addWireframeVertices(n,we,z,M),null}_addWireframeVertices(e,t,i,s){const n=new Float32Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT),r=new Float32Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,i-t);let c=0;const o=l=>c=Ht(r,l,n,c,s);for(let l=0;l<r.length-1;l+=2*s)o(l),o(l+2*s),o(l+1*s),o(l+2*s),o(l+1*s),o(l+3*s)}}function Ht(a,e,t,i,s){for(let n=0;n<s;n++)t[i++]=a[e++];return i}function ri(a,e){return a.isClosed?e.get("position").indices.length>2:!1}function Fo(a){return a.anchor===1&&a.hideOnShortSegments&&a.placement==="begin-end"&&a.worldSpace}const te=R(),ie=R(),_e=R(),Re=R(),Vo=R(),Mo=Ie(),Lo=Ie(),na=R(),ra=R(),oa=Da(),jo=Da(),G=R(),L=R(),I=R(),ae=nt(),Ke=[Ie(),Ie(),Ie(),Ie()],Oe=[R(),R(),R(),R()],Gt=ot(),qt=ot(),Jt=ot(),Xt=ot();class bc{constructor(e){this._originSR=e,this._rootOriginId="root/"+Rt(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5,this._baselineDistance=.5*this._gridSize;const t=this._baselineDistance*Wo;this._baselineObjectSize=t/Io}getOrigin(e){const t=this._origins.get(this._rootOriginId);if(t==null){const d=ta(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,d),d}const i=this._gridSize,s=Math.round(e[0]/i),n=Math.round(e[1]/i),r=Math.round(e[2]/i),c=`${s}/${n}/${r}`;let o=this._origins.get(c);const l=.5*i;if(se(k,e,t.vec3),k[0]=Math.abs(k[0]),k[1]=Math.abs(k[1]),k[2]=Math.abs(k[2]),k[0]<l&&k[1]<l&&k[2]<l){if(o){const d=Math.max(...k);if(se(k,e,o.vec3),k[0]=Math.abs(k[0]),k[1]=Math.abs(k[1]),k[2]=Math.abs(k[2]),Math.max(...k)<d)return o}return t}return o||(o=ta(s*i,n*i,r*i,c),this._origins.set(c,o)),o}needsOriginUpdate(e,t,i){const s=st(e.vec3,t),n=Math.max(1,i/this._baselineObjectSize);return s>this._baselineDistance*n}_drawOriginBox(e,t=zs(1,1,0,1)){const i=window.view,s=i.stage,n=t.toString();if(!this._objects.has(n)){this._material=new To({width:2,color:t},!1);const S=new Xr(s,{pickable:!1}),y=new Hr({castShadow:!1});S.add(y),this._objects.set(n,y)}const r=this._objects.get(n),c=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],o=c.length,l=new Array(3*o),d=new Array,p=.5*this._gridSize;for(let S=0;S<o;S++)l[3*S]=e[0]+(1&c[S]?p:-p),l[3*S+1]=e[1]+(2&c[S]?p:-p),l[3*S+2]=e[2]+(4&c[S]?p:-p),S>0&&d.push(S-1,S);ii(l,this._originSR,0,l,i.renderSpatialReference,0,o);const v=new de(this._material,[["position",new C(l,d,3,!0)]],null,2);r.addGeometry(v)}get test(){}}const k=R(),Wo=2**-23,Io=.05;export{wo as $,pc as A,uc as B,Sc as C,xc as D,zl as E,cc as F,_o as G,vc as H,Wl as I,Il as J,Ml as K,Ll as L,jl as M,Vl as N,kr as O,yo as P,kl as Q,Mr as R,xr as S,ta as T,Ra as U,mt as V,At as W,Va as X,To as Y,io as Z,bc as _,Me as a,ao as a0,Tt as a1,si as a2,es as a3,oc as a4,Vn as a5,zt as a6,Ct as a7,Co as a8,Dt as a9,Yn as aa,hl as ab,Ul as ac,Al as ad,Tl as ae,Cl as af,Rl as ag,Hl as ah,_l as ai,vi as aj,Rn as ak,Fn as al,yl as am,wl as an,$l as ao,gi as ap,ec as aq,ql as ar,Yi as as,Er as at,so as au,lc as av,ac as aw,bl as b,nc as c,El as d,xl as e,Ol as f,Xr as g,Dl as h,Nl as i,Bl as j,Wa as k,Zl as l,ar as m,Fl as n,Gl as o,dc as p,rr as q,$o as r,rc as s,Sl as t,sc as u,mc as v,gc as w,Hr as x,hc as y,fc as z};
