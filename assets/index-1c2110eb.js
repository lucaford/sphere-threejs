(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wa="151",yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fu=0,So=1,zu=2,sc=1,Bu=2,_r=3,Hn=0,At=1,An=2,kn=0,Xi=1,yo=2,bo=3,wo=4,ku=5,Gi=100,Gu=101,Vu=102,To=103,Eo=104,Hu=200,Wu=201,Xu=202,qu=203,ac=204,oc=205,Yu=206,ju=207,Zu=208,Ku=209,$u=210,Ju=0,Qu=1,eh=2,Sa=3,th=4,nh=5,ih=6,rh=7,lc=0,sh=1,ah=2,Pn=0,oh=1,lh=2,ch=3,uh=4,hh=5,cc=300,$i=301,Ji=302,ya=303,ba=304,bs=306,wa=1e3,an=1001,Ta=1002,wt=1003,Ao=1004,Is=1005,jt=1006,fh=1007,wr=1008,di=1009,dh=1010,ph=1011,uc=1012,mh=1013,ai=1014,oi=1015,Tr=1016,gh=1017,_h=1018,qi=1020,xh=1021,on=1023,vh=1024,Mh=1025,ci=1026,Qi=1027,Sh=1028,yh=1029,bh=1030,wh=1031,Th=1033,Us=33776,Os=33777,Ns=33778,Fs=33779,Co=35840,Po=35841,Lo=35842,Ro=35843,Eh=36196,Do=37492,Io=37496,Uo=37808,Oo=37809,No=37810,Fo=37811,zo=37812,Bo=37813,ko=37814,Go=37815,Vo=37816,Ho=37817,Wo=37818,Xo=37819,qo=37820,Yo=37821,zs=36492,Ah=36283,jo=36284,Zo=36285,Ko=36286,pi=3e3,We=3001,Ch=3200,Ph=3201,hc=0,Lh=1,hn="srgb",Er="srgb-linear",fc="display-p3",Bs=7680,Rh=519,$o=35044,Jo="300 es",Ea=1035;class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ks=Math.PI/180,Aa=180/Math.PI;function Ir(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gt[o&255]+gt[o>>8&255]+gt[o>>16&255]+gt[o>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function Tt(o,e,t){return Math.max(e,Math.min(t,o))}function Dh(o,e){return(o%e+e)%e}function Gs(o,e,t){return(1-t)*o+t*e}function Qo(o){return(o&o-1)===0&&o!==0}function Ih(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Gr(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ut(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,s,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],m=n[5],_=n[8],g=i[0],p=i[3],h=i[6],y=i[1],S=i[4],v=i[7],M=i[2],A=i[5],C=i[8];return r[0]=a*g+s*y+l*M,r[3]=a*p+s*S+l*A,r[6]=a*h+s*v+l*C,r[1]=c*g+u*y+f*M,r[4]=c*p+u*S+f*A,r[7]=c*h+u*v+f*C,r[2]=d*g+m*y+_*M,r[5]=d*p+m*S+_*A,r[8]=d*h+m*v+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*s*c-n*r*u+n*s*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=u*a-s*c,d=s*l-u*r,m=c*r-a*l,_=t*f+n*d+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(i*c-u*n)*g,e[2]=(s*n-i*a)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-s*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*s)+a+e,-i*c,i*l,-i*(-c*a+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Vs.makeScale(e,t)),this}rotate(e){return this.premultiply(Vs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vs=new Ie;function dc(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function ps(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Yi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Hs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Uh=new Ie().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Oh=new Ie().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Nh(o){return o.convertSRGBToLinear().applyMatrix3(Oh)}function Fh(o){return o.applyMatrix3(Uh).convertLinearToSRGB()}const zh={[Er]:o=>o,[hn]:o=>o.convertSRGBToLinear(),[fc]:Nh},Bh={[Er]:o=>o,[hn]:o=>o.convertLinearToSRGB(),[fc]:Fh},Ot={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return Er},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.enabled===!1||e===t||!e||!t)return o;const n=zh[e],i=Bh[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}};let wi;class pc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wi===void 0&&(wi=ps("canvas")),wi.width=e.width,wi.height=e.height;const n=wi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ps("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Yi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yi(t[n]/255)*255):t[n]=Yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class mc{constructor(e=null){this.isSource=!0,this.uuid=Ir(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(Ws(i[a].image)):r.push(Ws(i[a]))}else r=Ws(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ws(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?pc.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kh=0;class Gt extends Mi{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,n=an,i=an,r=jt,a=wr,s=on,l=di,c=Gt.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=Ir(),this.name="",this.source=new mc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wa:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case Ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wa:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case Ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=cc;Gt.DEFAULT_ANISOTROPY=1;class Xe{constructor(e=0,t=0,n=0,i=1){Xe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],_=l[9],g=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(m+1)/2,M=(h+1)/2,A=(u+d)/4,C=(f+g)/4,P=(_+p)/4;return S>v&&S>M?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=A/n,r=C/n):v>M?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=A/i,r=P/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=C/r,i=P/r),this.set(n,i,r,t),this}let y=Math.sqrt((p-_)*(p-_)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(f-g)/y,this.z=(d-u)/y,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mi extends Mi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xe(0,0,e,t),this.scissorTest=!1,this.viewport=new Xe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Gt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:jt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gc extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gh extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,s){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const d=r[a+0],m=r[a+1],_=r[a+2],g=r[a+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(s===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==d||c!==m||u!==_){let p=1-s;const h=l*d+c*m+u*_+f*g,y=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const M=Math.sqrt(S),A=Math.atan2(M,h*y);p=Math.sin(p*A)/M,s=Math.sin(s*A)/M}const v=s*y;if(l=l*p+d*v,c=c*p+m*v,u=u*p+_*v,f=f*p+g*v,p===1-s){const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){const s=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=r[a],d=r[a+1],m=r[a+2],_=r[a+3];return e[t]=s*_+u*f+l*m-c*d,e[t+1]=l*_+u*d+c*f-s*m,e[t+2]=c*_+u*m+s*d-l*f,e[t+3]=u*_-s*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(i/2),f=s(r/2),d=l(n/2),m=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"YXZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"ZXY":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"ZYX":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"YZX":this._x=d*u*f+c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f-d*m*_;break;case"XZY":this._x=d*u*f-c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],s=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+s+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>s&&n>f){const m=2*Math.sqrt(1+n-s-f);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(s>f){const m=2*Math.sqrt(1+s-n-f);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-s);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*s+i*c-r*l,this._y=i*u+a*l+r*s-n*c,this._z=r*u+a*c+n*l-i*s,this._w=a*u-n*s-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(el.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(el.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,s=e.z,l=e.w,c=l*t+a*i-s*n,u=l*n+s*t-r*i,f=l*i+r*n-a*t,d=-r*t-a*n-s*i;return this.x=c*l+d*-r+u*-s-f*-a,this.y=u*l+d*-a+f*-r-c*-s,this.z=f*l+d*-s+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,s=t.y,l=t.z;return this.x=i*l-r*s,this.y=r*a-n*l,this.z=n*s-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xs.copy(this).projectOnVector(e),this.sub(Xs)}reflect(e){return this.sub(Xs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xs=new I,el=new gi;class Ur{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ti.copy(e.boundingBox),Ti.applyMatrix4(e.matrixWorld),this.union(Ti);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let a=0,s=r.count;a<s;a++)Mn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Mn)}else i.boundingBox===null&&i.computeBoundingBox(),Ti.copy(i.boundingBox),Ti.applyMatrix4(e.matrixWorld),this.union(Ti)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),Vr.subVectors(this.max,hr),Ei.subVectors(e.a,hr),Ai.subVectors(e.b,hr),Ci.subVectors(e.c,hr),In.subVectors(Ai,Ei),Un.subVectors(Ci,Ai),$n.subVectors(Ei,Ci);let t=[0,-In.z,In.y,0,-Un.z,Un.y,0,-$n.z,$n.y,In.z,0,-In.x,Un.z,0,-Un.x,$n.z,0,-$n.x,-In.y,In.x,0,-Un.y,Un.x,0,-$n.y,$n.x,0];return!qs(t,Ei,Ai,Ci,Vr)||(t=[1,0,0,0,1,0,0,0,1],!qs(t,Ei,Ai,Ci,Vr))?!1:(Hr.crossVectors(In,Un),t=[Hr.x,Hr.y,Hr.z],qs(t,Ei,Ai,Ci,Vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vn=[new I,new I,new I,new I,new I,new I,new I,new I],Mn=new I,Ti=new Ur,Ei=new I,Ai=new I,Ci=new I,In=new I,Un=new I,$n=new I,hr=new I,Vr=new I,Hr=new I,Jn=new I;function qs(o,e,t,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){Jn.fromArray(o,r);const s=i.x*Math.abs(Jn.x)+i.y*Math.abs(Jn.y)+i.z*Math.abs(Jn.z),l=e.dot(Jn),c=t.dot(Jn),u=n.dot(Jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Vh=new Ur,fr=new I,Ys=new I;class Xa{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);const t=fr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(fr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ys.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(Ys)),this.expandByPoint(fr.copy(e.center).sub(Ys))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new I,js=new I,Wr=new I,On=new I,Zs=new I,Xr=new I,Ks=new I;class Hh{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){js.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),On.copy(this.origin).sub(js);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Wr),s=On.dot(this.direction),l=-On.dot(Wr),c=On.lengthSq(),u=Math.abs(1-a*a);let f,d,m,_;if(u>0)if(f=a*l-s,d=a*s-l,_=r*u,f>=0)if(d>=-_)if(d<=_){const g=1/u;f*=g,d*=g,m=f*(f+a*d+2*s)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+s)),m=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+s)),m=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*r+s)),d=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(f=Math.max(0,-(a*r+s)),d=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+s)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(js).addScaledVector(Wr,d),m}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,l=n+a;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,s,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(s=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(s=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,i,r){Zs.subVectors(t,e),Xr.subVectors(n,e),Ks.crossVectors(Zs,Xr);let a=this.direction.dot(Ks),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;On.subVectors(this.origin,e);const l=s*this.direction.dot(Xr.crossVectors(On,Xr));if(l<0)return null;const c=s*this.direction.dot(Zs.cross(On));if(c<0||l+c>a)return null;const u=-s*On.dot(Ks);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,s,l,c,u,f,d,m,_,g,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=i,h[1]=r,h[5]=a,h[9]=s,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=_,h[11]=g,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Pi.setFromMatrixColumn(e,0).length(),r=1/Pi.setFromMatrixColumn(e,1).length(),a=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*u,m=a*f,_=s*u,g=s*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=d-g*c,t[9]=-s*l,t[2]=g-d*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,_=c*u,g=c*f;t[0]=d+g*s,t[4]=_*s-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-s,t[2]=m*s-_,t[6]=g+d*s,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,_=c*u,g=c*f;t[0]=d-g*s,t[4]=-a*f,t[8]=_+m*s,t[1]=m+_*s,t[5]=a*u,t[9]=g-d*s,t[2]=-a*c,t[6]=s,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*f,_=s*u,g=s*f;t[0]=l*u,t[4]=_*c-m,t[8]=d*c+g,t[1]=l*f,t[5]=g*c+d,t[9]=m*c-_,t[2]=-c,t[6]=s*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,_=s*l,g=s*c;t[0]=l*u,t[4]=g-d*f,t[8]=_*f+m,t[1]=f,t[5]=a*u,t[9]=-s*u,t[2]=-c*u,t[6]=m*f+_,t[10]=d-g*f}else if(e.order==="XZY"){const d=a*l,m=a*c,_=s*l,g=s*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+g,t[5]=a*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=s*u,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wh,e,Xh)}lookAt(e,t,n){const i=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Nn.crossVectors(n,Nt),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Nn.crossVectors(n,Nt)),Nn.normalize(),qr.crossVectors(Nt,Nn),i[0]=Nn.x,i[4]=qr.x,i[8]=Nt.x,i[1]=Nn.y,i[5]=qr.y,i[9]=Nt.y,i[2]=Nn.z,i[6]=qr.z,i[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],m=n[13],_=n[2],g=n[6],p=n[10],h=n[14],y=n[3],S=n[7],v=n[11],M=n[15],A=i[0],C=i[4],P=i[8],x=i[12],T=i[1],k=i[5],G=i[9],D=i[13],O=i[2],F=i[6],$=i[10],Z=i[14],W=i[3],te=i[7],J=i[11],_e=i[15];return r[0]=a*A+s*T+l*O+c*W,r[4]=a*C+s*k+l*F+c*te,r[8]=a*P+s*G+l*$+c*J,r[12]=a*x+s*D+l*Z+c*_e,r[1]=u*A+f*T+d*O+m*W,r[5]=u*C+f*k+d*F+m*te,r[9]=u*P+f*G+d*$+m*J,r[13]=u*x+f*D+d*Z+m*_e,r[2]=_*A+g*T+p*O+h*W,r[6]=_*C+g*k+p*F+h*te,r[10]=_*P+g*G+p*$+h*J,r[14]=_*x+g*D+p*Z+h*_e,r[3]=y*A+S*T+v*O+M*W,r[7]=y*C+S*k+v*F+M*te,r[11]=y*P+S*G+v*$+M*J,r[15]=y*x+S*D+v*Z+M*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],s=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],_=e[3],g=e[7],p=e[11],h=e[15];return _*(+r*l*f-i*c*f-r*s*d+n*c*d+i*s*m-n*l*m)+g*(+t*l*m-t*c*d+r*a*d-i*a*m+i*c*u-r*l*u)+p*(+t*c*f-t*s*m-r*a*f+n*a*m+r*s*u-n*c*u)+h*(-i*s*u-t*l*f+t*s*d+i*a*f-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],_=e[12],g=e[13],p=e[14],h=e[15],y=f*p*c-g*d*c+g*l*m-s*p*m-f*l*h+s*d*h,S=_*d*c-u*p*c-_*l*m+a*p*m+u*l*h-a*d*h,v=u*g*c-_*f*c+_*s*m-a*g*m-u*s*h+a*f*h,M=_*f*l-u*g*l-_*s*d+a*g*d+u*s*p-a*f*p,A=t*y+n*S+i*v+r*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=y*C,e[1]=(g*d*r-f*p*r-g*i*m+n*p*m+f*i*h-n*d*h)*C,e[2]=(s*p*r-g*l*r+g*i*c-n*p*c-s*i*h+n*l*h)*C,e[3]=(f*l*r-s*d*r-f*i*c+n*d*c+s*i*m-n*l*m)*C,e[4]=S*C,e[5]=(u*p*r-_*d*r+_*i*m-t*p*m-u*i*h+t*d*h)*C,e[6]=(_*l*r-a*p*r-_*i*c+t*p*c+a*i*h-t*l*h)*C,e[7]=(a*d*r-u*l*r+u*i*c-t*d*c-a*i*m+t*l*m)*C,e[8]=v*C,e[9]=(_*f*r-u*g*r-_*n*m+t*g*m+u*n*h-t*f*h)*C,e[10]=(a*g*r-_*s*r+_*n*c-t*g*c-a*n*h+t*s*h)*C,e[11]=(u*s*r-a*f*r-u*n*c+t*f*c+a*n*m-t*s*m)*C,e[12]=M*C,e[13]=(u*g*i-_*f*i+_*n*d-t*g*d-u*n*p+t*f*p)*C,e[14]=(_*s*i-a*g*i-_*n*l+t*g*l+a*n*p-t*s*p)*C,e[15]=(a*f*i-u*s*i+u*n*l-t*f*l-a*n*d+t*s*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,s=e.y,l=e.z,c=r*a,u=r*s;return this.set(c*a+n,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+n,u*l-i*a,0,c*l-i*s,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,s=t._z,l=t._w,c=r+r,u=a+a,f=s+s,d=r*c,m=r*u,_=r*f,g=a*u,p=a*f,h=s*f,y=l*c,S=l*u,v=l*f,M=n.x,A=n.y,C=n.z;return i[0]=(1-(g+h))*M,i[1]=(m+v)*M,i[2]=(_-S)*M,i[3]=0,i[4]=(m-v)*A,i[5]=(1-(d+h))*A,i[6]=(p+y)*A,i[7]=0,i[8]=(_+S)*C,i[9]=(p-y)*C,i[10]=(1-(d+g))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Pi.set(i[0],i[1],i[2]).length();const a=Pi.set(i[4],i[5],i[6]).length(),s=Pi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],tn.copy(this);const c=1/r,u=1/a,f=1/s;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=f,tn.elements[9]*=f,tn.elements[10]*=f,t.setFromRotationMatrix(tn),n.x=r,n.y=a,n.z=s,this}makePerspective(e,t,n,i,r,a){const s=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d=-(a+r)/(a-r),m=-2*a*r/(a-r);return s[0]=l,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=c,s[9]=f,s[13]=0,s[2]=0,s[6]=0,s[10]=d,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,r,a){const s=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-r),f=(t+e)*l,d=(n+i)*c,m=(a+r)*u;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-f,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-d,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pi=new I,tn=new at,Wh=new I(0,0,0),Xh=new I(1,1,1),Nn=new I,qr=new I,Nt=new I,tl=new at,nl=new gi;class ws{constructor(e=0,t=0,n=0,i=ws.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],s=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Tt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nl.setFromEuler(this),this.setFromQuaternion(nl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ws.DEFAULT_ORDER="XYZ";class _c{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qh=0;const il=new I,Li=new gi,yn=new at,Yr=new I,dr=new I,Yh=new I,jh=new gi,rl=new I(1,0,0),sl=new I(0,1,0),al=new I(0,0,1),Zh={type:"added"},ol={type:"removed"};class Ct extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new I,t=new ws,n=new gi,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new Ie}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new _c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(rl,e)}rotateY(e){return this.rotateOnAxis(sl,e)}rotateZ(e){return this.rotateOnAxis(al,e)}translateOnAxis(e,t){return il.copy(e).applyQuaternion(this.quaternion),this.position.add(il.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rl,e)}translateY(e){return this.translateOnAxis(sl,e)}translateZ(e){return this.translateOnAxis(al,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yr.copy(e):Yr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(dr,Yr,this.up):yn.lookAt(Yr,dr,this.up),this.quaternion.setFromRotationMatrix(yn),i&&(yn.extractRotation(i.matrixWorld),Li.setFromRotationMatrix(yn),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Zh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ol)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ol)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,Yh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,jh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(e.materials,this.material[l]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(e.animations,l))}}if(t){const s=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ct.DEFAULT_UP=new I(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new I,bn=new I,$s=new I,wn=new I,Ri=new I,Di=new I,ll=new I,Js=new I,Qs=new I,ea=new I;let jr=!1;class sn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),nn.subVectors(e,t),i.cross(nn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){nn.subVectors(i,t),bn.subVectors(n,t),$s.subVectors(e,t);const a=nn.dot(nn),s=nn.dot(bn),l=nn.dot($s),c=bn.dot(bn),u=bn.dot($s),f=a*c-s*s;if(f===0)return r.set(-2,-1,-1);const d=1/f,m=(c*l-s*u)*d,_=(a*u-s*l)*d;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wn),wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getUV(e,t,n,i,r,a,s,l){return jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jr=!0),this.getInterpolation(e,t,n,i,r,a,s,l)}static getInterpolation(e,t,n,i,r,a,s,l){return this.getBarycoord(e,t,n,i,wn),l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(s,wn.z),l}static isFrontFacing(e,t,n,i){return nn.subVectors(n,t),bn.subVectors(e,t),nn.cross(bn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),nn.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jr=!0),sn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return sn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,s;Ri.subVectors(i,n),Di.subVectors(r,n),Js.subVectors(e,n);const l=Ri.dot(Js),c=Di.dot(Js);if(l<=0&&c<=0)return t.copy(n);Qs.subVectors(e,i);const u=Ri.dot(Qs),f=Di.dot(Qs);if(u>=0&&f<=u)return t.copy(i);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ri,a);ea.subVectors(e,r);const m=Ri.dot(ea),_=Di.dot(ea);if(_>=0&&m<=_)return t.copy(r);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return s=c/(c-_),t.copy(n).addScaledVector(Di,s);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return ll.subVectors(r,i),s=(f-u)/(f-u+(m-_)),t.copy(i).addScaledVector(ll,s);const h=1/(p+g+d);return a=g*h,s=d*h,t.copy(n).addScaledVector(Ri,a).addScaledVector(Di,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Kh=0;class Or extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Ir(),this.name="",this.type="Material",this.blending=Xi,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ac,this.blendDst=oc,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const l=r[s];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rn={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function ta(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ot.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ot.workingColorSpace){if(e=Dh(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ta(a,r,e+1/3),this.g=ta(a,r,e),this.b=ta(a,r,e-1/3)}return Ot.toWorkingColorSpace(this,i),this}setStyle(e,t=hn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Ot.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Ot.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const n=xc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return Ot.fromWorkingColorSpace(_t.copy(this),e),Tt(_t.r*255,0,255)<<16^Tt(_t.g*255,0,255)<<8^Tt(_t.b*255,0,255)<<0}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ot.workingColorSpace){Ot.fromWorkingColorSpace(_t.copy(this),t);const n=_t.r,i=_t.g,r=_t.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let l,c;const u=(s+a)/2;if(s===a)l=0,c=0;else{const f=a-s;switch(c=u<=.5?f/(a+s):f/(2-a-s),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ot.workingColorSpace){return Ot.fromWorkingColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=hn){Ot.fromWorkingColorSpace(_t.copy(this),e);const t=_t.r,n=_t.g,i=_t.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(rn),rn.h+=e,rn.s+=t,rn.l+=n,this.setHSL(rn.h,rn.s,rn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rn),e.getHSL(Zr);const n=Gs(rn.h,Zr.h,t),i=Gs(rn.s,Zr.s,t),r=Gs(rn.l,Zr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new Be;Be.NAMES=xc;class vc extends Or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new I,Kr=new Ce;class mn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$o,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$o&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Mc extends mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sc extends mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gn extends mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $h=0;const Xt=new at,na=new Ct,Ii=new I,Ft=new Ur,pr=new Ur,ht=new I;class qn extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Ir(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dc(e)?Sc:Mc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ie().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return na.lookAt(e),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new gn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ft.setFromBufferAttribute(r),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const s=t[r];pr.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(Ft.min,pr.min),Ft.expandByPoint(ht),ht.addVectors(Ft.max,pr.max),Ft.expandByPoint(ht)):(Ft.expandByPoint(pr.min),Ft.expandByPoint(pr.max))}Ft.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)ht.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ht));if(t)for(let r=0,a=t.length;r<a;r++){const s=t[r],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)ht.fromBufferAttribute(s,c),l&&(Ii.fromBufferAttribute(e,c),ht.add(Ii)),i=Math.max(i,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<s;T++)c[T]=new I,u[T]=new I;const f=new I,d=new I,m=new I,_=new Ce,g=new Ce,p=new Ce,h=new I,y=new I;function S(T,k,G){f.fromArray(i,T*3),d.fromArray(i,k*3),m.fromArray(i,G*3),_.fromArray(a,T*2),g.fromArray(a,k*2),p.fromArray(a,G*2),d.sub(f),m.sub(f),g.sub(_),p.sub(_);const D=1/(g.x*p.y-p.x*g.y);isFinite(D)&&(h.copy(d).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(D),y.copy(m).multiplyScalar(g.x).addScaledVector(d,-p.x).multiplyScalar(D),c[T].add(h),c[k].add(h),c[G].add(h),u[T].add(y),u[k].add(y),u[G].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let T=0,k=v.length;T<k;++T){const G=v[T],D=G.start,O=G.count;for(let F=D,$=D+O;F<$;F+=3)S(n[F+0],n[F+1],n[F+2])}const M=new I,A=new I,C=new I,P=new I;function x(T){C.fromArray(r,T*3),P.copy(C);const k=c[T];M.copy(k),M.sub(C.multiplyScalar(C.dot(k))).normalize(),A.crossVectors(P,k);const D=A.dot(u[T])<0?-1:1;l[T*4]=M.x,l[T*4+1]=M.y,l[T*4+2]=M.z,l[T*4+3]=D}for(let T=0,k=v.length;T<k;++T){const G=v[T],D=G.start,O=G.count;for(let F=D,$=D+O;F<$;F+=3)x(n[F+0]),x(n[F+1]),x(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new I,r=new I,a=new I,s=new I,l=new I,c=new I,u=new I,f=new I;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),g=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),s.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),s.add(u),l.add(u),c.add(u),n.setXYZ(_,s.x,s.y,s.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,f=s.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){s.isInterleavedBufferAttribute?m=l[g]*s.data.stride+s.offset:m=l[g]*u;for(let h=0;h<u;h++)d[_++]=c[m++]}return new mn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qn,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=e(l,n);t.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cl=new at,un=new Hh,$r=new Xa,ul=new I,Ui=new I,Oi=new I,Ni=new I,ia=new I,Jr=new I,Qr=new Ce,es=new Ce,ts=new Ce,hl=new I,fl=new I,dl=new I,ns=new I,is=new I;class Cn extends Ct{constructor(e=new qn,t=new vc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(r&&s){Jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=s[l],f=r[l];u!==0&&(ia.fromBufferAttribute(f,e),a?Jr.addScaledVector(ia,u):Jr.addScaledVector(ia.sub(t),u))}t.add(Jr)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(r),un.copy(e.ray).recast(e.near),$r.containsPoint(un.origin)===!1&&(un.intersectSphere($r,ul)===null||un.origin.distanceToSquared(ul)>(e.far-e.near)**2))||(cl.copy(r).invert(),un.copy(e.ray).applyMatrix4(cl),n.boundingBox!==null&&un.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.attributes.normal,d=n.groups,m=n.drawRange;if(s!==null)if(Array.isArray(i))for(let _=0,g=d.length;_<g;_++){const p=d[_],h=i[p.materialIndex],y=Math.max(p.start,m.start),S=Math.min(s.count,Math.min(p.start+p.count,m.start+m.count));for(let v=y,M=S;v<M;v+=3){const A=s.getX(v),C=s.getX(v+1),P=s.getX(v+2);a=rs(this,h,e,un,c,u,f,A,C,P),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const _=Math.max(0,m.start),g=Math.min(s.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const y=s.getX(p),S=s.getX(p+1),v=s.getX(p+2);a=rs(this,i,e,un,c,u,f,y,S,v),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let _=0,g=d.length;_<g;_++){const p=d[_],h=i[p.materialIndex],y=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let v=y,M=S;v<M;v+=3){const A=v,C=v+1,P=v+2;a=rs(this,h,e,un,c,u,f,A,C,P),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const y=p,S=p+1,v=p+2;a=rs(this,i,e,un,c,u,f,y,S,v),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function Jh(o,e,t,n,i,r,a,s){let l;if(e.side===At?l=n.intersectTriangle(a,r,i,!0,s):l=n.intersectTriangle(i,r,a,e.side===Hn,s),l===null)return null;is.copy(s),is.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(is);return c<t.near||c>t.far?null:{distance:c,point:is.clone(),object:o}}function rs(o,e,t,n,i,r,a,s,l,c){o.getVertexPosition(s,Ui),o.getVertexPosition(l,Oi),o.getVertexPosition(c,Ni);const u=Jh(o,e,t,n,Ui,Oi,Ni,ns);if(u){i&&(Qr.fromBufferAttribute(i,s),es.fromBufferAttribute(i,l),ts.fromBufferAttribute(i,c),u.uv=sn.getInterpolation(ns,Ui,Oi,Ni,Qr,es,ts,new Ce)),r&&(Qr.fromBufferAttribute(r,s),es.fromBufferAttribute(r,l),ts.fromBufferAttribute(r,c),u.uv2=sn.getInterpolation(ns,Ui,Oi,Ni,Qr,es,ts,new Ce)),a&&(hl.fromBufferAttribute(a,s),fl.fromBufferAttribute(a,l),dl.fromBufferAttribute(a,c),u.normal=sn.getInterpolation(ns,Ui,Oi,Ni,hl,fl,dl,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:s,b:l,c,normal:new I,materialIndex:0};sn.getNormal(Ui,Oi,Ni,f.normal),u.face=f}return u}class Nr extends qn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new gn(c,3)),this.setAttribute("normal",new gn(u,3)),this.setAttribute("uv",new gn(f,2));function _(g,p,h,y,S,v,M,A,C,P,x){const T=v/C,k=M/P,G=v/2,D=M/2,O=A/2,F=C+1,$=P+1;let Z=0,W=0;const te=new I;for(let J=0;J<$;J++){const _e=J*k-D;for(let ie=0;ie<F;ie++){const V=ie*T-G;te[g]=V*y,te[p]=_e*S,te[h]=O,c.push(te.x,te.y,te.z),te[g]=0,te[p]=0,te[h]=A>0?1:-1,u.push(te.x,te.y,te.z),f.push(ie/C),f.push(1-J/P),Z+=1}}for(let J=0;J<P;J++)for(let _e=0;_e<C;_e++){const ie=d+_e+F*J,V=d+_e+F*(J+1),j=d+(_e+1)+F*(J+1),re=d+(_e+1)+F*J;l.push(ie,V,re),l.push(V,j,re),W+=6}s.addGroup(m,W,x),m+=W,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function er(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bt(o){const e={};for(let t=0;t<o.length;t++){const n=er(o[t]);for(const i in n)e[i]=n[i]}return e}function Qh(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function yc(o){return o.getRenderTarget()===null&&o.outputEncoding===We?hn:Er}const ef={clone:er,merge:bt};var tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tf,this.fragmentShader=nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=Qh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bc extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Bt extends bc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Aa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Aa*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ks*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fi=-90,zi=1;class rf extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Bt(Fi,zi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Bt(Fi,zi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new Bt(Fi,zi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const s=new Bt(Fi,zi,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new Bt(Fi,zi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Bt(Fi,zi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Pn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class wc extends Gt{constructor(e,t,n,i,r,a,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:$i,super(e,t,n,i,r,a,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sf extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new wc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Nr(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:At,blending:kn});r.uniforms.tEquirect.value=t;const a=new Cn(i,r),s=t.minFilter;return t.minFilter===wr&&(t.minFilter=jt),new rf(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const ra=new I,af=new I,of=new Ie;class ni{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ra.subVectors(n,t).cross(af.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ra),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||of.getNormalMatrix(e),i=this.coplanarPoint(ra).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new Xa,ss=new I;class qa{constructor(e=new ni,t=new ni,n=new ni,i=new ni,r=new ni,a=new ni){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],s=n[3],l=n[4],c=n[5],u=n[6],f=n[7],d=n[8],m=n[9],_=n[10],g=n[11],p=n[12],h=n[13],y=n[14],S=n[15];return t[0].setComponents(s-i,f-l,g-d,S-p).normalize(),t[1].setComponents(s+i,f+l,g+d,S+p).normalize(),t[2].setComponents(s+r,f+c,g+m,S+h).normalize(),t[3].setComponents(s-r,f-c,g-m,S-h).normalize(),t[4].setComponents(s-a,f-u,g-_,S-y).normalize(),t[5].setComponents(s+a,f+u,g+_,S+y).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(e){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ss.x=i.normal.x>0?e.max.x:e.min.x,ss.y=i.normal.y>0?e.max.y:e.min.y,ss.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tc(){let o=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function lf(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,d=c.usage,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const d=u.array,m=u.updateRange;o.bindBuffer(f,c),m.count===-1?o.bufferSubData(f,0,d):(t?o.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):o.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:a,remove:s,update:l}}class Ya extends qn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,s=Math.floor(n),l=Math.floor(i),c=s+1,u=l+1,f=e/s,d=t/l,m=[],_=[],g=[],p=[];for(let h=0;h<u;h++){const y=h*d-a;for(let S=0;S<c;S++){const v=S*f-r;_.push(v,-y,0),g.push(0,0,1),p.push(S/s),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<s;y++){const S=y+c*h,v=y+c*(h+1),M=y+1+c*(h+1),A=y+1+c*h;m.push(S,v,A),m.push(v,M,A)}this.setIndex(m),this.setAttribute("position",new gn(_,3)),this.setAttribute("normal",new gn(g,3)),this.setAttribute("uv",new gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.width,e.height,e.widthSegments,e.heightSegments)}}var cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,df=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mf="vec3 transformed = vec3( position );",gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_f=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,If=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Of="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$f=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jf=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ed=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,td=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,id=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,rd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ad=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,od=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ld=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ud=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,md=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_d=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Md=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Sd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,yd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ad=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Pd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ld=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Id=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ud=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Od=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,qd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$d=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Qd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ep=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tp=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,np=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,op=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,up=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,fp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xp=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ep=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Up=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Np=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ae={alphamap_fragment:cf,alphamap_pars_fragment:uf,alphatest_fragment:hf,alphatest_pars_fragment:ff,aomap_fragment:df,aomap_pars_fragment:pf,begin_vertex:mf,beginnormal_vertex:gf,bsdfs:_f,iridescence_fragment:xf,bumpmap_pars_fragment:vf,clipping_planes_fragment:Mf,clipping_planes_pars_fragment:Sf,clipping_planes_pars_vertex:yf,clipping_planes_vertex:bf,color_fragment:wf,color_pars_fragment:Tf,color_pars_vertex:Ef,color_vertex:Af,common:Cf,cube_uv_reflection_fragment:Pf,defaultnormal_vertex:Lf,displacementmap_pars_vertex:Rf,displacementmap_vertex:Df,emissivemap_fragment:If,emissivemap_pars_fragment:Uf,encodings_fragment:Of,encodings_pars_fragment:Nf,envmap_fragment:Ff,envmap_common_pars_fragment:zf,envmap_pars_fragment:Bf,envmap_pars_vertex:kf,envmap_physical_pars_fragment:Jf,envmap_vertex:Gf,fog_vertex:Vf,fog_pars_vertex:Hf,fog_fragment:Wf,fog_pars_fragment:Xf,gradientmap_pars_fragment:qf,lightmap_fragment:Yf,lightmap_pars_fragment:jf,lights_lambert_fragment:Zf,lights_lambert_pars_fragment:Kf,lights_pars_begin:$f,lights_toon_fragment:Qf,lights_toon_pars_fragment:ed,lights_phong_fragment:td,lights_phong_pars_fragment:nd,lights_physical_fragment:id,lights_physical_pars_fragment:rd,lights_fragment_begin:sd,lights_fragment_maps:ad,lights_fragment_end:od,logdepthbuf_fragment:ld,logdepthbuf_pars_fragment:cd,logdepthbuf_pars_vertex:ud,logdepthbuf_vertex:hd,map_fragment:fd,map_pars_fragment:dd,map_particle_fragment:pd,map_particle_pars_fragment:md,metalnessmap_fragment:gd,metalnessmap_pars_fragment:_d,morphcolor_vertex:xd,morphnormal_vertex:vd,morphtarget_pars_vertex:Md,morphtarget_vertex:Sd,normal_fragment_begin:yd,normal_fragment_maps:bd,normal_pars_fragment:wd,normal_pars_vertex:Td,normal_vertex:Ed,normalmap_pars_fragment:Ad,clearcoat_normal_fragment_begin:Cd,clearcoat_normal_fragment_maps:Pd,clearcoat_pars_fragment:Ld,iridescence_pars_fragment:Rd,output_fragment:Dd,packing:Id,premultiplied_alpha_fragment:Ud,project_vertex:Od,dithering_fragment:Nd,dithering_pars_fragment:Fd,roughnessmap_fragment:zd,roughnessmap_pars_fragment:Bd,shadowmap_pars_fragment:kd,shadowmap_pars_vertex:Gd,shadowmap_vertex:Vd,shadowmask_pars_fragment:Hd,skinbase_vertex:Wd,skinning_pars_vertex:Xd,skinning_vertex:qd,skinnormal_vertex:Yd,specularmap_fragment:jd,specularmap_pars_fragment:Zd,tonemapping_fragment:Kd,tonemapping_pars_fragment:$d,transmission_fragment:Jd,transmission_pars_fragment:Qd,uv_pars_fragment:ep,uv_pars_vertex:tp,uv_vertex:np,worldpos_vertex:ip,background_vert:rp,background_frag:sp,backgroundCube_vert:ap,backgroundCube_frag:op,cube_vert:lp,cube_frag:cp,depth_vert:up,depth_frag:hp,distanceRGBA_vert:fp,distanceRGBA_frag:dp,equirect_vert:pp,equirect_frag:mp,linedashed_vert:gp,linedashed_frag:_p,meshbasic_vert:xp,meshbasic_frag:vp,meshlambert_vert:Mp,meshlambert_frag:Sp,meshmatcap_vert:yp,meshmatcap_frag:bp,meshnormal_vert:wp,meshnormal_frag:Tp,meshphong_vert:Ep,meshphong_frag:Ap,meshphysical_vert:Cp,meshphysical_frag:Pp,meshtoon_vert:Lp,meshtoon_frag:Rp,points_vert:Dp,points_frag:Ip,shadow_vert:Up,shadow_frag:Op,sprite_vert:Np,sprite_frag:Fp},ae={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaTest:{value:0}}},fn={basic:{uniforms:bt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:bt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:bt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:bt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:bt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:bt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:bt([ae.points,ae.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:bt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:bt([ae.common,ae.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:bt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:bt([ae.sprite,ae.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:bt([ae.common,ae.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:bt([ae.lights,ae.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};fn.physical={uniforms:bt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const as={r:0,b:0,g:0};function zp(o,e,t,n,i,r,a){const s=new Be(0);let l=r===!0?0:1,c,u,f=null,d=0,m=null;function _(p,h){let y=!1,S=h.isScene===!0?h.background:null;S&&S.isTexture&&(S=(h.backgroundBlurriness>0?t:e).get(S));const v=o.xr,M=v.getSession&&v.getSession();M&&M.environmentBlendMode==="additive"&&(S=null),S===null?g(s,l):S&&S.isColor&&(g(S,1),y=!0),(o.autoClear||y)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),S&&(S.isCubeTexture||S.mapping===bs)?(u===void 0&&(u=new Cn(new Nr(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:er(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=S.encoding!==We,(f!==S||d!==S.version||m!==o.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,m=o.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Cn(new Ya(2,2),new _i({name:"BackgroundMaterial",uniforms:er(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=S.encoding!==We,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||m!==o.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,m=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,h){p.getRGB(as,yc(o)),n.buffers.color.setClear(as.r,as.g,as.b,h,a)}return{getClearColor:function(){return s},setClearColor:function(p,h=1){s.set(p),l=h,g(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(s,l)},render:_}}function Bp(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},l=p(null);let c=l,u=!1;function f(O,F,$,Z,W){let te=!1;if(a){const J=g(Z,$,F);c!==J&&(c=J,m(c.object)),te=h(O,Z,$,W),te&&y(O,Z,$,W)}else{const J=F.wireframe===!0;(c.geometry!==Z.id||c.program!==$.id||c.wireframe!==J)&&(c.geometry=Z.id,c.program=$.id,c.wireframe=J,te=!0)}W!==null&&t.update(W,34963),(te||u)&&(u=!1,P(O,F,$,Z),W!==null&&o.bindBuffer(34963,t.get(W).buffer))}function d(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(O){return n.isWebGL2?o.bindVertexArray(O):r.bindVertexArrayOES(O)}function _(O){return n.isWebGL2?o.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function g(O,F,$){const Z=$.wireframe===!0;let W=s[O.id];W===void 0&&(W={},s[O.id]=W);let te=W[F.id];te===void 0&&(te={},W[F.id]=te);let J=te[Z];return J===void 0&&(J=p(d()),te[Z]=J),J}function p(O){const F=[],$=[],Z=[];for(let W=0;W<i;W++)F[W]=0,$[W]=0,Z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:$,attributeDivisors:Z,object:O,attributes:{},index:null}}function h(O,F,$,Z){const W=c.attributes,te=F.attributes;let J=0;const _e=$.getAttributes();for(const ie in _e)if(_e[ie].location>=0){const j=W[ie];let re=te[ie];if(re===void 0&&(ie==="instanceMatrix"&&O.instanceMatrix&&(re=O.instanceMatrix),ie==="instanceColor"&&O.instanceColor&&(re=O.instanceColor)),j===void 0||j.attribute!==re||re&&j.data!==re.data)return!0;J++}return c.attributesNum!==J||c.index!==Z}function y(O,F,$,Z){const W={},te=F.attributes;let J=0;const _e=$.getAttributes();for(const ie in _e)if(_e[ie].location>=0){let j=te[ie];j===void 0&&(ie==="instanceMatrix"&&O.instanceMatrix&&(j=O.instanceMatrix),ie==="instanceColor"&&O.instanceColor&&(j=O.instanceColor));const re={};re.attribute=j,j&&j.data&&(re.data=j.data),W[ie]=re,J++}c.attributes=W,c.attributesNum=J,c.index=Z}function S(){const O=c.newAttributes;for(let F=0,$=O.length;F<$;F++)O[F]=0}function v(O){M(O,0)}function M(O,F){const $=c.newAttributes,Z=c.enabledAttributes,W=c.attributeDivisors;$[O]=1,Z[O]===0&&(o.enableVertexAttribArray(O),Z[O]=1),W[O]!==F&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,F),W[O]=F)}function A(){const O=c.newAttributes,F=c.enabledAttributes;for(let $=0,Z=F.length;$<Z;$++)F[$]!==O[$]&&(o.disableVertexAttribArray($),F[$]=0)}function C(O,F,$,Z,W,te){n.isWebGL2===!0&&($===5124||$===5125)?o.vertexAttribIPointer(O,F,$,W,te):o.vertexAttribPointer(O,F,$,Z,W,te)}function P(O,F,$,Z){if(n.isWebGL2===!1&&(O.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const W=Z.attributes,te=$.getAttributes(),J=F.defaultAttributeValues;for(const _e in te){const ie=te[_e];if(ie.location>=0){let V=W[_e];if(V===void 0&&(_e==="instanceMatrix"&&O.instanceMatrix&&(V=O.instanceMatrix),_e==="instanceColor"&&O.instanceColor&&(V=O.instanceColor)),V!==void 0){const j=V.normalized,re=V.itemSize,ce=t.get(V);if(ce===void 0)continue;const B=ce.buffer,ye=ce.type,Me=ce.bytesPerElement;if(V.isInterleavedBufferAttribute){const se=V.data,ve=se.stride,Fe=V.offset;if(se.isInstancedInterleavedBuffer){for(let me=0;me<ie.locationSize;me++)M(ie.location+me,se.meshPerAttribute);O.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let me=0;me<ie.locationSize;me++)v(ie.location+me);o.bindBuffer(34962,B);for(let me=0;me<ie.locationSize;me++)C(ie.location+me,re/ie.locationSize,ye,j,ve*Me,(Fe+re/ie.locationSize*me)*Me)}else{if(V.isInstancedBufferAttribute){for(let se=0;se<ie.locationSize;se++)M(ie.location+se,V.meshPerAttribute);O.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let se=0;se<ie.locationSize;se++)v(ie.location+se);o.bindBuffer(34962,B);for(let se=0;se<ie.locationSize;se++)C(ie.location+se,re/ie.locationSize,ye,j,re*Me,re/ie.locationSize*se*Me)}}else if(J!==void 0){const j=J[_e];if(j!==void 0)switch(j.length){case 2:o.vertexAttrib2fv(ie.location,j);break;case 3:o.vertexAttrib3fv(ie.location,j);break;case 4:o.vertexAttrib4fv(ie.location,j);break;default:o.vertexAttrib1fv(ie.location,j)}}}}A()}function x(){G();for(const O in s){const F=s[O];for(const $ in F){const Z=F[$];for(const W in Z)_(Z[W].object),delete Z[W];delete F[$]}delete s[O]}}function T(O){if(s[O.id]===void 0)return;const F=s[O.id];for(const $ in F){const Z=F[$];for(const W in Z)_(Z[W].object),delete Z[W];delete F[$]}delete s[O.id]}function k(O){for(const F in s){const $=s[F];if($[O.id]===void 0)continue;const Z=$[O.id];for(const W in Z)_(Z[W].object),delete Z[W];delete $[O.id]}}function G(){D(),u=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:G,resetDefaultState:D,dispose:x,releaseStatesOfGeometry:T,releaseStatesOfProgram:k,initAttributes:S,enableAttribute:v,disableUnusedAttributes:A}}function kp(o,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function s(c,u){o.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let d,m;if(i)d=o,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,c,u,f),t.update(u,r,f)}this.setMode=a,this.render=s,this.renderInstances=l}function Gp(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=o.getParameter(34930),d=o.getParameter(35660),m=o.getParameter(3379),_=o.getParameter(34076),g=o.getParameter(34921),p=o.getParameter(36347),h=o.getParameter(36348),y=o.getParameter(36349),S=d>0,v=a||e.has("OES_texture_float"),M=S&&v,A=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:y,vertexTextures:S,floatFragmentTextures:v,floatVertexTextures:M,maxSamples:A}}function Vp(o){const e=this;let t=null,n=0,i=!1,r=!1;const a=new ni,s=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||i;return i=d,n=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,h=o.get(f);if(!i||_===null||_.length===0||r&&!p)r?u(null):c();else{const y=r?0:n,S=y*4;let v=h.clippingState||null;l.value=v,v=u(_,d,S,m);for(let M=0;M!==S;++M)v[M]=t[M];h.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,m,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const h=m+g*4,y=d.matrixWorldInverse;s.getNormalMatrix(y),(p===null||p.length<h)&&(p=new Float32Array(h));for(let S=0,v=m;S!==g;++S,v+=4)a.copy(f[S]).applyMatrix4(y,s),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Hp(o){let e=new WeakMap;function t(a,s){return s===ya?a.mapping=$i:s===ba&&(a.mapping=Ji),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===ya||s===ba)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new sf(l.height/2);return c.fromEquirectangularTexture(o,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Wp extends bc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,s=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vi=4,pl=[.125,.215,.35,.446,.526,.582],si=20,sa=new Wp,ml=new Be;let aa=null;const ii=(1+Math.sqrt(5))/2,Bi=1/ii,gl=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,ii,Bi),new I(0,ii,-Bi),new I(Bi,0,ii),new I(-Bi,0,ii),new I(ii,Bi,0),new I(-ii,Bi,0)];class _l{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){aa=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(aa),e.scissorTest=!1,os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$i||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),aa=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Tr,format:on,encoding:pi,depthBuffer:!1},i=xl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xp(r)),this._blurMaterial=qp(r,e,t)}return i}_compileMaterial(e){const t=new Cn(this._lodPlanes[0],e);this._renderer.compile(t,sa)}_sceneToCubeUV(e,t,n,i){const s=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(ml),u.toneMapping=Pn,u.autoClear=!1;const m=new vc({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),_=new Cn(new Nr,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(ml),g=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(s.up.set(0,l[h],0),s.lookAt(c[h],0,0)):y===1?(s.up.set(0,0,l[h]),s.lookAt(0,c[h],0)):(s.up.set(0,l[h],0),s.lookAt(0,0,c[h]));const S=this._cubeSize;os(i,y*S,h>2?S:0,S,S),u.setRenderTarget(i),g&&u.render(_,s),u.render(e,s)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===$i||e.mapping===Ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Cn(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const l=this._cubeSize;os(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,sa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=gl[(i-1)%gl.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Cn(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*si-1),g=r/_,p=isFinite(r)?1+Math.floor(u*g):si;p>si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${si}`);const h=[];let y=0;for(let C=0;C<si;++C){const P=C/g,x=Math.exp(-P*P/2);h.push(x),C===0?y+=x:C<p&&(y+=2*x)}for(let C=0;C<h.length;C++)h[C]=h[C]/y;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-n;const v=this._sizeLods[i],M=3*v*(i>S-Vi?i-S+Vi:0),A=4*(this._cubeSize-v);os(t,M,A,3*v,2*v),l.setRenderTarget(t),l.render(f,sa)}}function Xp(o){const e=[],t=[],n=[];let i=o;const r=o-Vi+1+pl.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);t.push(s);let l=1/s;a>o-Vi?l=pl[a-o+Vi-1]:a===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,g=3,p=2,h=1,y=new Float32Array(g*_*m),S=new Float32Array(p*_*m),v=new Float32Array(h*_*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,P=A>2?0:-1,x=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];y.set(x,g*_*A),S.set(d,p*_*A);const T=[A,A,A,A,A,A];v.set(T,h*_*A)}const M=new qn;M.setAttribute("position",new mn(y,g)),M.setAttribute("uv",new mn(S,p)),M.setAttribute("faceIndex",new mn(v,h)),e.push(M),i>Vi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xl(o,e,t){const n=new mi(o,e,t);return n.texture.mapping=bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function os(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function qp(o,e,t){const n=new Float32Array(si),i=new I(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function vl(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Ml(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function ja(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yp(o){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===ya||l===ba,u=l===$i||l===Ji;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new _l(o)),f=c?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new _l(o));const d=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",r),d.texture}else return null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function jp(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Zp(o,e,t,n){const i={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete i[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(f,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],34962);const m=f.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,h=g.length;p<h;p++)e.update(g[p],34962)}}function c(f){const d=[],m=f.index,_=f.attributes.position;let g=0;if(m!==null){const y=m.array;g=m.version;for(let S=0,v=y.length;S<v;S+=3){const M=y[S+0],A=y[S+1],C=y[S+2];d.push(M,A,A,C,C,M)}}else{const y=_.array;g=_.version;for(let S=0,v=y.length/3-1;S<v;S+=3){const M=S+0,A=S+1,C=S+2;d.push(M,A,A,C,C,M)}}const p=new(dc(d)?Sc:Mc)(d,1);p.version=g;const h=r.get(f);h&&e.remove(h),r.set(f,p)}function u(f){const d=r.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:s,update:l,getWireframeAttribute:u}}function Kp(o,e,t,n){const i=n.isWebGL2;let r;function a(d){r=d}let s,l;function c(d){s=d.type,l=d.bytesPerElement}function u(d,m){o.drawElements(r,m,s,d*l),t.update(m,r,1)}function f(d,m,_){if(_===0)return;let g,p;if(i)g=o,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,m,s,d*l,_),t.update(m,r,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function $p(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(t.calls++,a){case 4:t.triangles+=s*(r/3);break;case 1:t.lines+=s*(r/2);break;case 3:t.lines+=s*(r-1);break;case 2:t.lines+=s*r;break;case 0:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Jp(o,e){return o[0]-e[0]}function Qp(o,e){return Math.abs(e[1])-Math.abs(o[1])}function em(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new Xe,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let p=r.get(u);if(p===void 0||p.count!==g){let F=function(){D.dispose(),r.delete(u),u.removeEventListener("dispose",F)};var m=F;p!==void 0&&p.texture.dispose();const S=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let x=0;S===!0&&(x=1),v===!0&&(x=2),M===!0&&(x=3);let T=u.attributes.position.count*x,k=1;T>e.maxTextureSize&&(k=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const G=new Float32Array(T*k*4*g),D=new gc(G,T,k,g);D.type=oi,D.needsUpdate=!0;const O=x*4;for(let $=0;$<g;$++){const Z=A[$],W=C[$],te=P[$],J=T*k*4*$;for(let _e=0;_e<Z.count;_e++){const ie=_e*O;S===!0&&(a.fromBufferAttribute(Z,_e),G[J+ie+0]=a.x,G[J+ie+1]=a.y,G[J+ie+2]=a.z,G[J+ie+3]=0),v===!0&&(a.fromBufferAttribute(W,_e),G[J+ie+4]=a.x,G[J+ie+5]=a.y,G[J+ie+6]=a.z,G[J+ie+7]=0),M===!0&&(a.fromBufferAttribute(te,_e),G[J+ie+8]=a.x,G[J+ie+9]=a.y,G[J+ie+10]=a.z,G[J+ie+11]=te.itemSize===4?a.w:1)}}p={count:g,texture:D,size:new Ce(T,k)},r.set(u,p),u.addEventListener("dispose",F)}let h=0;for(let S=0;S<d.length;S++)h+=d[S];const y=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(o,"morphTargetBaseInfluence",y),f.getUniforms().setValue(o,"morphTargetInfluences",d),f.getUniforms().setValue(o,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(o,"morphTargetsTextureSize",p.size)}else{const _=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let v=0;v<_;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<_;v++){const M=g[v];M[0]=v,M[1]=d[v]}g.sort(Qp);for(let v=0;v<8;v++)v<_&&g[v][1]?(s[v][0]=g[v][0],s[v][1]=g[v][1]):(s[v][0]=Number.MAX_SAFE_INTEGER,s[v][1]=0);s.sort(Jp);const p=u.morphAttributes.position,h=u.morphAttributes.normal;let y=0;for(let v=0;v<8;v++){const M=s[v],A=M[0],C=M[1];A!==Number.MAX_SAFE_INTEGER&&C?(p&&u.getAttribute("morphTarget"+v)!==p[A]&&u.setAttribute("morphTarget"+v,p[A]),h&&u.getAttribute("morphNormal"+v)!==h[A]&&u.setAttribute("morphNormal"+v,h[A]),i[v]=C,y+=C):(p&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),h&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const S=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(o,"morphTargetBaseInfluence",S),f.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function tm(o,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Ec=new Gt,Ac=new gc,Cc=new Gh,Pc=new wc,Sl=[],yl=[],bl=new Float32Array(16),wl=new Float32Array(9),Tl=new Float32Array(4);function lr(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=Sl[i];if(r===void 0&&(r=new Float32Array(i),Sl[i]=r),e!==0){n.toArray(r,0);for(let a=1,s=0;a!==e;++a)s+=t,o[a].toArray(r,s)}return r}function lt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function ct(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Ts(o,e){let t=yl[e];t===void 0&&(t=new Int32Array(e),yl[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function nm(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function im(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;o.uniform2fv(this.addr,e),ct(t,e)}}function rm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;o.uniform3fv(this.addr,e),ct(t,e)}}function sm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;o.uniform4fv(this.addr,e),ct(t,e)}}function am(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Tl.set(n),o.uniformMatrix2fv(this.addr,!1,Tl),ct(t,n)}}function om(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;wl.set(n),o.uniformMatrix3fv(this.addr,!1,wl),ct(t,n)}}function lm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;bl.set(n),o.uniformMatrix4fv(this.addr,!1,bl),ct(t,n)}}function cm(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function um(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;o.uniform2iv(this.addr,e),ct(t,e)}}function hm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;o.uniform3iv(this.addr,e),ct(t,e)}}function fm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;o.uniform4iv(this.addr,e),ct(t,e)}}function dm(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function pm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;o.uniform2uiv(this.addr,e),ct(t,e)}}function mm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;o.uniform3uiv(this.addr,e),ct(t,e)}}function gm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;o.uniform4uiv(this.addr,e),ct(t,e)}}function _m(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Ec,i)}function xm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Cc,i)}function vm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Pc,i)}function Mm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ac,i)}function Sm(o){switch(o){case 5126:return nm;case 35664:return im;case 35665:return rm;case 35666:return sm;case 35674:return am;case 35675:return om;case 35676:return lm;case 5124:case 35670:return cm;case 35667:case 35671:return um;case 35668:case 35672:return hm;case 35669:case 35673:return fm;case 5125:return dm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return vm;case 36289:case 36303:case 36311:case 36292:return Mm}}function ym(o,e){o.uniform1fv(this.addr,e)}function bm(o,e){const t=lr(e,this.size,2);o.uniform2fv(this.addr,t)}function wm(o,e){const t=lr(e,this.size,3);o.uniform3fv(this.addr,t)}function Tm(o,e){const t=lr(e,this.size,4);o.uniform4fv(this.addr,t)}function Em(o,e){const t=lr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Am(o,e){const t=lr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function Cm(o,e){const t=lr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Pm(o,e){o.uniform1iv(this.addr,e)}function Lm(o,e){o.uniform2iv(this.addr,e)}function Rm(o,e){o.uniform3iv(this.addr,e)}function Dm(o,e){o.uniform4iv(this.addr,e)}function Im(o,e){o.uniform1uiv(this.addr,e)}function Um(o,e){o.uniform2uiv(this.addr,e)}function Om(o,e){o.uniform3uiv(this.addr,e)}function Nm(o,e){o.uniform4uiv(this.addr,e)}function Fm(o,e,t){const n=this.cache,i=e.length,r=Ts(t,i);lt(n,r)||(o.uniform1iv(this.addr,r),ct(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Ec,r[a])}function zm(o,e,t){const n=this.cache,i=e.length,r=Ts(t,i);lt(n,r)||(o.uniform1iv(this.addr,r),ct(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Cc,r[a])}function Bm(o,e,t){const n=this.cache,i=e.length,r=Ts(t,i);lt(n,r)||(o.uniform1iv(this.addr,r),ct(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Pc,r[a])}function km(o,e,t){const n=this.cache,i=e.length,r=Ts(t,i);lt(n,r)||(o.uniform1iv(this.addr,r),ct(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ac,r[a])}function Gm(o){switch(o){case 5126:return ym;case 35664:return bm;case 35665:return wm;case 35666:return Tm;case 35674:return Em;case 35675:return Am;case 35676:return Cm;case 5124:case 35670:return Pm;case 35667:case 35671:return Lm;case 35668:case 35672:return Rm;case 35669:case 35673:return Dm;case 5125:return Im;case 36294:return Um;case 36295:return Om;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return Fm;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return km}}class Vm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Sm(t.type)}}class Hm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Gm(t.type)}}class Wm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const oa=/(\w+)(\])?(\[|\.)?/g;function El(o,e){o.seq.push(e),o.map[e.id]=e}function Xm(o,e,t){const n=o.name,i=n.length;for(oa.lastIndex=0;;){const r=oa.exec(n),a=oa.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===i){El(t,c===void 0?new Vm(s,o,e):new Hm(s,o,e));break}else{let f=t.map[s];f===void 0&&(f=new Wm(s),El(t,f)),t=f}}}class us{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Xm(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const s=t[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Al(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let qm=0;function Ym(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return n.join(`
`)}function jm(o){switch(o){case pi:return["Linear","( value )"];case We:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Cl(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Ym(o.getShaderSource(e),a)}else return i}function Zm(o,e){const t=jm(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Km(o,e){let t;switch(e){case oh:t="Linear";break;case lh:t="Reinhard";break;case ch:t="OptimizedCineon";break;case uh:t="ACESFilmic";break;case hh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $m(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xr).join(`
`)}function Jm(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qm(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),t[a]={type:r.type,location:o.getAttribLocation(e,a),locationSize:s}}return t}function xr(o){return o!==""}function Pl(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ll(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ca(o){return o.replace(eg,tg)}function tg(o,e){const t=Ae[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ca(t)}const ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rl(o){return o.replace(ng,ig)}function ig(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Dl(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rg(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===sc?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Bu?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===_r&&(e="SHADOWMAP_TYPE_VSM"),e}function sg(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case $i:case Ji:e="ENVMAP_TYPE_CUBE";break;case bs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ag(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ji:e="ENVMAP_MODE_REFRACTION";break}return e}function og(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case lc:e="ENVMAP_BLENDING_MULTIPLY";break;case sh:e="ENVMAP_BLENDING_MIX";break;case ah:e="ENVMAP_BLENDING_ADD";break}return e}function lg(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function cg(o,e,t,n){const i=o.getContext(),r=t.defines;let a=t.vertexShader,s=t.fragmentShader;const l=rg(t),c=sg(t),u=ag(t),f=og(t),d=lg(t),m=t.isWebGL2?"":$m(t),_=Jm(r),g=i.createProgram();let p,h,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[_].filter(xr).join(`
`),p.length>0&&(p+=`
`),h=[m,_].filter(xr).join(`
`),h.length>0&&(h+=`
`)):(p=[Dl(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),h=[m,Dl(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?Ae.tonemapping_pars_fragment:"",t.toneMapping!==Pn?Km("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ae.encodings_pars_fragment,Zm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),a=Ca(a),a=Pl(a,t),a=Ll(a,t),s=Ca(s),s=Pl(s,t),s=Ll(s,t),a=Rl(a),s=Rl(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=y+p+a,v=y+h+s,M=Al(i,35633,S),A=Al(i,35632,v);if(i.attachShader(g,M),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),o.debug.checkShaderErrors){const x=i.getProgramInfoLog(g).trim(),T=i.getShaderInfoLog(M).trim(),k=i.getShaderInfoLog(A).trim();let G=!0,D=!0;if(i.getProgramParameter(g,35714)===!1)if(G=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,g,M,A);else{const O=Cl(i,M,"vertex"),F=Cl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+x+`
`+O+`
`+F)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(T===""||k==="")&&(D=!1);D&&(this.diagnostics={runnable:G,programLog:x,vertexShader:{log:T,prefix:p},fragmentShader:{log:k,prefix:h}})}i.deleteShader(M),i.deleteShader(A);let C;this.getUniforms=function(){return C===void 0&&(C=new us(i,g)),C};let P;return this.getAttributes=function(){return P===void 0&&(P=Qm(i,g)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=qm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=A,this}let ug=0;class hg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new fg(e),t.set(e,n)),n}}class fg{constructor(e){this.id=ug++,this.code=e,this.usedTimes=0}}function dg(o,e,t,n,i,r,a){const s=new _c,l=new hg,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return x===1?"uv2":"uv"}function p(x,T,k,G,D){const O=G.fog,F=D.geometry,$=x.isMeshStandardMaterial?G.environment:null,Z=(x.isMeshStandardMaterial?t:e).get(x.envMap||$),W=Z&&Z.mapping===bs?Z.image.height:null,te=_[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const J=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,_e=J!==void 0?J.length:0;let ie=0;F.morphAttributes.position!==void 0&&(ie=1),F.morphAttributes.normal!==void 0&&(ie=2),F.morphAttributes.color!==void 0&&(ie=3);let V,j,re,ce;if(te){const he=fn[te];V=he.vertexShader,j=he.fragmentShader}else V=x.vertexShader,j=x.fragmentShader,l.update(x),re=l.getVertexShaderID(x),ce=l.getFragmentShaderID(x);const B=o.getRenderTarget(),ye=D.isInstancedMesh===!0,Me=!!x.map,se=!!x.matcap,ve=!!Z,Fe=!!x.aoMap,me=!!x.lightMap,Te=!!x.bumpMap,Ke=!!x.normalMap,qe=!!x.displacementMap,nt=!!x.emissiveMap,Je=!!x.metalnessMap,Ne=!!x.roughnessMap,Ve=x.clearcoat>0,pt=x.iridescence>0,E=x.sheen>0,b=x.transmission>0,H=Ve&&!!x.clearcoatMap,Q=Ve&&!!x.clearcoatNormalMap,ne=Ve&&!!x.clearcoatRoughnessMap,oe=pt&&!!x.iridescenceMap,L=pt&&!!x.iridescenceThicknessMap,K=E&&!!x.sheenColorMap,z=E&&!!x.sheenRoughnessMap,le=!!x.specularMap,fe=!!x.specularColorMap,pe=!!x.specularIntensityMap,ue=b&&!!x.transmissionMap,de=b&&!!x.thicknessMap,be=!!x.gradientMap,Pe=!!x.alphaMap,Qe=x.alphaTest>0,R=!!x.extensions,q=!!F.attributes.uv2;return{isWebGL2:u,shaderID:te,shaderName:x.type,vertexShader:V,fragmentShader:j,defines:x.defines,customVertexShaderID:re,customFragmentShaderID:ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:ye,instancingColor:ye&&D.instanceColor!==null,supportsVertexTextures:d,outputEncoding:B===null?o.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:pi,map:Me,matcap:se,envMap:ve,envMapMode:ve&&Z.mapping,envMapCubeUVHeight:W,aoMap:Fe,lightMap:me,bumpMap:Te,normalMap:Ke,displacementMap:d&&qe,emissiveMap:nt,normalMapObjectSpace:Ke&&x.normalMapType===Lh,normalMapTangentSpace:Ke&&x.normalMapType===hc,decodeVideoTexture:Me&&x.map.isVideoTexture===!0&&x.map.encoding===We,metalnessMap:Je,roughnessMap:Ne,clearcoat:Ve,clearcoatMap:H,clearcoatNormalMap:Q,clearcoatRoughnessMap:ne,iridescence:pt,iridescenceMap:oe,iridescenceThicknessMap:L,sheen:E,sheenColorMap:K,sheenRoughnessMap:z,specularMap:le,specularColorMap:fe,specularIntensityMap:pe,transmission:b,transmissionMap:ue,thicknessMap:de,gradientMap:be,opaque:x.transparent===!1&&x.blending===Xi,alphaMap:Pe,alphaTest:Qe,combine:x.combine,mapUv:Me&&g(x.map.channel),aoMapUv:Fe&&g(x.aoMap.channel),lightMapUv:me&&g(x.lightMap.channel),bumpMapUv:Te&&g(x.bumpMap.channel),normalMapUv:Ke&&g(x.normalMap.channel),displacementMapUv:qe&&g(x.displacementMap.channel),emissiveMapUv:nt&&g(x.emissiveMap.channel),metalnessMapUv:Je&&g(x.metalnessMap.channel),roughnessMapUv:Ne&&g(x.roughnessMap.channel),clearcoatMapUv:H&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Q&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:L&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:K&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:z&&g(x.sheenRoughnessMap.channel),specularMapUv:le&&g(x.specularMap.channel),specularColorMapUv:fe&&g(x.specularColorMap.channel),specularIntensityMapUv:pe&&g(x.specularIntensityMap.channel),transmissionMapUv:ue&&g(x.transmissionMap.channel),thicknessMapUv:de&&g(x.thicknessMap.channel),alphaMapUv:Pe&&g(x.alphaMap.channel),vertexTangents:Ke&&!!F.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs2:q,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(Me||Pe),fog:!!O,useFog:x.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:D.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:ie,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:Pn,useLegacyLights:o.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===An,flipSided:x.side===At,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:R&&x.extensions.derivatives===!0,extensionFragDepth:R&&x.extensions.fragDepth===!0,extensionDrawBuffers:R&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:R&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function h(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const k in x.defines)T.push(k),T.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(y(T,x),S(T,x),T.push(o.outputEncoding)),T.push(x.customProgramCacheKey),T.join()}function y(x,T){x.push(T.precision),x.push(T.outputEncoding),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function S(x,T){s.disableAll(),T.isWebGL2&&s.enable(0),T.supportsVertexTextures&&s.enable(1),T.instancing&&s.enable(2),T.instancingColor&&s.enable(3),T.matcap&&s.enable(4),T.envMap&&s.enable(5),T.normalMapObjectSpace&&s.enable(6),T.normalMapTangentSpace&&s.enable(7),T.clearcoat&&s.enable(8),T.iridescence&&s.enable(9),T.alphaTest&&s.enable(10),T.vertexColors&&s.enable(11),T.vertexAlphas&&s.enable(12),T.vertexUvs2&&s.enable(13),T.vertexTangents&&s.enable(14),x.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.skinning&&s.enable(4),T.morphTargets&&s.enable(5),T.morphNormals&&s.enable(6),T.morphColors&&s.enable(7),T.premultipliedAlpha&&s.enable(8),T.shadowMapEnabled&&s.enable(9),T.useLegacyLights&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.decodeVideoTexture&&s.enable(17),T.opaque&&s.enable(18),T.pointsUvs&&s.enable(19),x.push(s.mask)}function v(x){const T=_[x.type];let k;if(T){const G=fn[T];k=ef.clone(G.uniforms)}else k=x.uniforms;return k}function M(x,T){let k;for(let G=0,D=c.length;G<D;G++){const O=c[G];if(O.cacheKey===T){k=O,++k.usedTimes;break}}return k===void 0&&(k=new cg(o,T,x,r),c.push(k)),k}function A(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),x.destroy()}}function C(x){l.remove(x)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:v,acquireProgram:M,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:P}}function pg(){let o=new WeakMap;function e(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function t(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function mg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Il(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Ul(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f,d,m,_,g,p){let h=o[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},o[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=g,h.group=p),e++,h}function s(f,d,m,_,g,p){const h=a(f,d,m,_,g,p);m.transmission>0?n.push(h):m.transparent===!0?i.push(h):t.push(h)}function l(f,d,m,_,g,p){const h=a(f,d,m,_,g,p);m.transmission>0?n.unshift(h):m.transparent===!0?i.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||mg),n.length>1&&n.sort(d||Il),i.length>1&&i.sort(d||Il)}function u(){for(let f=e,d=o.length;f<d;f++){const m=o[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:u,sort:c}}function gg(){let o=new WeakMap;function e(n,i){const r=o.get(n);let a;return r===void 0?(a=new Ul,o.set(n,[a])):i>=r.length?(a=new Ul,r.push(a)):a=r[i],a}function t(){o=new WeakMap}return{get:e,dispose:t}}function _g(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Be};break;case"SpotLight":t={position:new I,direction:new I,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new I,halfWidth:new I,halfHeight:new I};break}return o[e.id]=t,t}}}function xg(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let vg=0;function Mg(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Sg(o,e){const t=new _g,n=xg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new I);const r=new I,a=new at,s=new at;function l(u,f){let d=0,m=0,_=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let g=0,p=0,h=0,y=0,S=0,v=0,M=0,A=0,C=0,P=0;u.sort(Mg);const x=f===!0?Math.PI:1;for(let k=0,G=u.length;k<G;k++){const D=u[k],O=D.color,F=D.intensity,$=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=O.r*F*x,m+=O.g*F*x,_+=O.b*F*x;else if(D.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],F);else if(D.isDirectionalLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*x),D.castShadow){const te=D.shadow,J=n.get(D);J.shadowBias=te.bias,J.shadowNormalBias=te.normalBias,J.shadowRadius=te.radius,J.shadowMapSize=te.mapSize,i.directionalShadow[g]=J,i.directionalShadowMap[g]=Z,i.directionalShadowMatrix[g]=D.shadow.matrix,v++}i.directional[g]=W,g++}else if(D.isSpotLight){const W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(O).multiplyScalar(F*x),W.distance=$,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[h]=W;const te=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,te.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[h]=te.matrix,D.castShadow){const J=n.get(D);J.shadowBias=te.bias,J.shadowNormalBias=te.normalBias,J.shadowRadius=te.radius,J.shadowMapSize=te.mapSize,i.spotShadow[h]=J,i.spotShadowMap[h]=Z,A++}h++}else if(D.isRectAreaLight){const W=t.get(D);W.color.copy(O).multiplyScalar(F),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[y]=W,y++}else if(D.isPointLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*x),W.distance=D.distance,W.decay=D.decay,D.castShadow){const te=D.shadow,J=n.get(D);J.shadowBias=te.bias,J.shadowNormalBias=te.normalBias,J.shadowRadius=te.radius,J.shadowMapSize=te.mapSize,J.shadowCameraNear=te.camera.near,J.shadowCameraFar=te.camera.far,i.pointShadow[p]=J,i.pointShadowMap[p]=Z,i.pointShadowMatrix[p]=D.shadow.matrix,M++}i.point[p]=W,p++}else if(D.isHemisphereLight){const W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(F*x),W.groundColor.copy(D.groundColor).multiplyScalar(F*x),i.hemi[S]=W,S++}}y>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=_;const T=i.hash;(T.directionalLength!==g||T.pointLength!==p||T.spotLength!==h||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==v||T.numPointShadows!==M||T.numSpotShadows!==A||T.numSpotMaps!==C)&&(i.directional.length=g,i.spot.length=h,i.rectArea.length=y,i.point.length=p,i.hemi.length=S,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=A+C-P,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=P,T.directionalLength=g,T.pointLength=p,T.spotLength=h,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=v,T.numPointShadows=M,T.numSpotShadows=A,T.numSpotMaps=C,i.version=vg++)}function c(u,f){let d=0,m=0,_=0,g=0,p=0;const h=f.matrixWorldInverse;for(let y=0,S=u.length;y<S;y++){const v=u[y];if(v.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(h),d++}else if(v.isSpotLight){const M=i.spot[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(h),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(h),_++}else if(v.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(h),s.identity(),a.copy(v.matrixWorld),a.premultiply(h),s.extractRotation(a),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),g++}else if(v.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(h),m++}else if(v.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:i}}function Ol(o,e){const t=new Sg(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(f){n.push(f)}function s(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function yg(o,e){let t=new WeakMap;function n(r,a=0){const s=t.get(r);let l;return s===void 0?(l=new Ol(o,e),t.set(r,[l])):a>=s.length?(l=new Ol(o,e),s.push(l)):l=s[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class bg extends Or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wg extends Or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ag(o,e,t){let n=new qa;const i=new Ce,r=new Ce,a=new Xe,s=new bg({depthPacking:Ph}),l=new wg,c={},u=t.maxTextureSize,f={[Hn]:At,[At]:Hn,[An]:An},d=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Tg,fragmentShader:Eg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new qn;_.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Cn(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc,this.render=function(v,M,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;const C=o.getRenderTarget(),P=o.getActiveCubeFace(),x=o.getActiveMipmapLevel(),T=o.state;T.setBlending(kn),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);for(let k=0,G=v.length;k<G;k++){const D=v[k],O=D.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const F=O.getFrameExtents();if(i.multiply(F),r.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/F.x),i.x=r.x*F.x,O.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/F.y),i.y=r.y*F.y,O.mapSize.y=r.y)),O.map===null){const Z=this.type!==_r?{minFilter:wt,magFilter:wt}:{};O.map=new mi(i.x,i.y,Z),O.map.texture.name=D.name+".shadowMap",O.camera.updateProjectionMatrix()}o.setRenderTarget(O.map),o.clear();const $=O.getViewportCount();for(let Z=0;Z<$;Z++){const W=O.getViewport(Z);a.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),T.viewport(a),O.updateMatrices(D,Z),n=O.getFrustum(),S(M,A,O.camera,D,this.type)}O.isPointLightShadow!==!0&&this.type===_r&&h(O,A),O.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(C,P,x)};function h(v,M){const A=e.update(g);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,m.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new mi(i.x,i.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,o.setRenderTarget(v.mapPass),o.clear(),o.renderBufferDirect(M,null,A,d,g,null),m.uniforms.shadow_pass.value=v.mapPass.texture,m.uniforms.resolution.value=v.mapSize,m.uniforms.radius.value=v.radius,o.setRenderTarget(v.map),o.clear(),o.renderBufferDirect(M,null,A,m,g,null)}function y(v,M,A,C){let P=null;const x=A.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(x!==void 0)P=x;else if(P=A.isPointLight===!0?l:s,o.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const T=P.uuid,k=M.uuid;let G=c[T];G===void 0&&(G={},c[T]=G);let D=G[k];D===void 0&&(D=P.clone(),G[k]=D),P=D}if(P.visible=M.visible,P.wireframe=M.wireframe,C===_r?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:f[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.map=M.map,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,A.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const T=o.properties.get(P);T.light=A}return P}function S(v,M,A,C,P){if(v.visible===!1)return;if(v.layers.test(M.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&P===_r)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,v.matrixWorld);const k=e.update(v),G=v.material;if(Array.isArray(G)){const D=k.groups;for(let O=0,F=D.length;O<F;O++){const $=D[O],Z=G[$.materialIndex];if(Z&&Z.visible){const W=y(v,Z,C,P);o.renderBufferDirect(A,null,k,W,v,$)}}}else if(G.visible){const D=y(v,G,C,P);o.renderBufferDirect(A,null,k,D,v,null)}}const T=v.children;for(let k=0,G=T.length;k<G;k++)S(T[k],M,A,C,P)}}function Cg(o,e,t){const n=t.isWebGL2;function i(){let R=!1;const q=new Xe;let ee=null;const he=new Xe(0,0,0,0);return{setMask:function(ge){ee!==ge&&!R&&(o.colorMask(ge,ge,ge,ge),ee=ge)},setLocked:function(ge){R=ge},setClear:function(ge,He,Ye,mt,Dn){Dn===!0&&(ge*=mt,He*=mt,Ye*=mt),q.set(ge,He,Ye,mt),he.equals(q)===!1&&(o.clearColor(ge,He,Ye,mt),he.copy(q))},reset:function(){R=!1,ee=null,he.set(-1,0,0,0)}}}function r(){let R=!1,q=null,ee=null,he=null;return{setTest:function(ge){ge?B(2929):ye(2929)},setMask:function(ge){q!==ge&&!R&&(o.depthMask(ge),q=ge)},setFunc:function(ge){if(ee!==ge){switch(ge){case Ju:o.depthFunc(512);break;case Qu:o.depthFunc(519);break;case eh:o.depthFunc(513);break;case Sa:o.depthFunc(515);break;case th:o.depthFunc(514);break;case nh:o.depthFunc(518);break;case ih:o.depthFunc(516);break;case rh:o.depthFunc(517);break;default:o.depthFunc(515)}ee=ge}},setLocked:function(ge){R=ge},setClear:function(ge){he!==ge&&(o.clearDepth(ge),he=ge)},reset:function(){R=!1,q=null,ee=null,he=null}}}function a(){let R=!1,q=null,ee=null,he=null,ge=null,He=null,Ye=null,mt=null,Dn=null;return{setTest:function(et){R||(et?B(2960):ye(2960))},setMask:function(et){q!==et&&!R&&(o.stencilMask(et),q=et)},setFunc:function(et,Wt,cn){(ee!==et||he!==Wt||ge!==cn)&&(o.stencilFunc(et,Wt,cn),ee=et,he=Wt,ge=cn)},setOp:function(et,Wt,cn){(He!==et||Ye!==Wt||mt!==cn)&&(o.stencilOp(et,Wt,cn),He=et,Ye=Wt,mt=cn)},setLocked:function(et){R=et},setClear:function(et){Dn!==et&&(o.clearStencil(et),Dn=et)},reset:function(){R=!1,q=null,ee=null,he=null,ge=null,He=null,Ye=null,mt=null,Dn=null}}}const s=new i,l=new r,c=new a,u=new WeakMap,f=new WeakMap;let d={},m={},_=new WeakMap,g=[],p=null,h=!1,y=null,S=null,v=null,M=null,A=null,C=null,P=null,x=!1,T=null,k=null,G=null,D=null,O=null;const F=o.getParameter(35661);let $=!1,Z=0;const W=o.getParameter(7938);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),$=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),$=Z>=2);let te=null,J={};const _e=o.getParameter(3088),ie=o.getParameter(2978),V=new Xe().fromArray(_e),j=new Xe().fromArray(ie);function re(R,q,ee){const he=new Uint8Array(4),ge=o.createTexture();o.bindTexture(R,ge),o.texParameteri(R,10241,9728),o.texParameteri(R,10240,9728);for(let He=0;He<ee;He++)o.texImage2D(q+He,0,6408,1,1,0,6408,5121,he);return ge}const ce={};ce[3553]=re(3553,3553,1),ce[34067]=re(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),B(2929),l.setFunc(Sa),qe(!1),nt(So),B(2884),Te(kn);function B(R){d[R]!==!0&&(o.enable(R),d[R]=!0)}function ye(R){d[R]!==!1&&(o.disable(R),d[R]=!1)}function Me(R,q){return m[R]!==q?(o.bindFramebuffer(R,q),m[R]=q,n&&(R===36009&&(m[36160]=q),R===36160&&(m[36009]=q)),!0):!1}function se(R,q){let ee=g,he=!1;if(R)if(ee=_.get(q),ee===void 0&&(ee=[],_.set(q,ee)),R.isWebGLMultipleRenderTargets){const ge=R.texture;if(ee.length!==ge.length||ee[0]!==36064){for(let He=0,Ye=ge.length;He<Ye;He++)ee[He]=36064+He;ee.length=ge.length,he=!0}}else ee[0]!==36064&&(ee[0]=36064,he=!0);else ee[0]!==1029&&(ee[0]=1029,he=!0);he&&(t.isWebGL2?o.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function ve(R){return p!==R?(o.useProgram(R),p=R,!0):!1}const Fe={[Gi]:32774,[Gu]:32778,[Vu]:32779};if(n)Fe[To]=32775,Fe[Eo]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(Fe[To]=R.MIN_EXT,Fe[Eo]=R.MAX_EXT)}const me={[Hu]:0,[Wu]:1,[Xu]:768,[ac]:770,[$u]:776,[Zu]:774,[Yu]:772,[qu]:769,[oc]:771,[Ku]:775,[ju]:773};function Te(R,q,ee,he,ge,He,Ye,mt){if(R===kn){h===!0&&(ye(3042),h=!1);return}if(h===!1&&(B(3042),h=!0),R!==ku){if(R!==y||mt!==x){if((S!==Gi||A!==Gi)&&(o.blendEquation(32774),S=Gi,A=Gi),mt)switch(R){case Xi:o.blendFuncSeparate(1,771,1,771);break;case yo:o.blendFunc(1,1);break;case bo:o.blendFuncSeparate(0,769,0,1);break;case wo:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Xi:o.blendFuncSeparate(770,771,1,771);break;case yo:o.blendFunc(770,1);break;case bo:o.blendFuncSeparate(0,769,0,1);break;case wo:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}v=null,M=null,C=null,P=null,y=R,x=mt}return}ge=ge||q,He=He||ee,Ye=Ye||he,(q!==S||ge!==A)&&(o.blendEquationSeparate(Fe[q],Fe[ge]),S=q,A=ge),(ee!==v||he!==M||He!==C||Ye!==P)&&(o.blendFuncSeparate(me[ee],me[he],me[He],me[Ye]),v=ee,M=he,C=He,P=Ye),y=R,x=!1}function Ke(R,q){R.side===An?ye(2884):B(2884);let ee=R.side===At;q&&(ee=!ee),qe(ee),R.blending===Xi&&R.transparent===!1?Te(kn):Te(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),s.setMask(R.colorWrite);const he=R.stencilWrite;c.setTest(he),he&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ne(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?B(32926):ye(32926)}function qe(R){T!==R&&(R?o.frontFace(2304):o.frontFace(2305),T=R)}function nt(R){R!==Fu?(B(2884),R!==k&&(R===So?o.cullFace(1029):R===zu?o.cullFace(1028):o.cullFace(1032))):ye(2884),k=R}function Je(R){R!==G&&($&&o.lineWidth(R),G=R)}function Ne(R,q,ee){R?(B(32823),(D!==q||O!==ee)&&(o.polygonOffset(q,ee),D=q,O=ee)):ye(32823)}function Ve(R){R?B(3089):ye(3089)}function pt(R){R===void 0&&(R=33984+F-1),te!==R&&(o.activeTexture(R),te=R)}function E(R,q,ee){ee===void 0&&(te===null?ee=33984+F-1:ee=te);let he=J[ee];he===void 0&&(he={type:void 0,texture:void 0},J[ee]=he),(he.type!==R||he.texture!==q)&&(te!==ee&&(o.activeTexture(ee),te=ee),o.bindTexture(R,q||ce[R]),he.type=R,he.texture=q)}function b(){const R=J[te];R!==void 0&&R.type!==void 0&&(o.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function H(){try{o.compressedTexImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{o.compressedTexImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{o.texSubImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{o.texSubImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function L(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function z(){try{o.texStorage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(){try{o.texStorage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(){try{o.texImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pe(){try{o.texImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(R){V.equals(R)===!1&&(o.scissor(R.x,R.y,R.z,R.w),V.copy(R))}function de(R){j.equals(R)===!1&&(o.viewport(R.x,R.y,R.z,R.w),j.copy(R))}function be(R,q){let ee=f.get(q);ee===void 0&&(ee=new WeakMap,f.set(q,ee));let he=ee.get(R);he===void 0&&(he=o.getUniformBlockIndex(q,R.name),ee.set(R,he))}function Pe(R,q){const he=f.get(q).get(R);u.get(q)!==he&&(o.uniformBlockBinding(q,he,R.__bindingPointIndex),u.set(q,he))}function Qe(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},te=null,J={},m={},_=new WeakMap,g=[],p=null,h=!1,y=null,S=null,v=null,M=null,A=null,C=null,P=null,x=!1,T=null,k=null,G=null,D=null,O=null,V.set(0,0,o.canvas.width,o.canvas.height),j.set(0,0,o.canvas.width,o.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:B,disable:ye,bindFramebuffer:Me,drawBuffers:se,useProgram:ve,setBlending:Te,setMaterial:Ke,setFlipSided:qe,setCullFace:nt,setLineWidth:Je,setPolygonOffset:Ne,setScissorTest:Ve,activeTexture:pt,bindTexture:E,unbindTexture:b,compressedTexImage2D:H,compressedTexImage3D:Q,texImage2D:fe,texImage3D:pe,updateUBOMapping:be,uniformBlockBinding:Pe,texStorage2D:z,texStorage3D:le,texSubImage2D:ne,texSubImage3D:oe,compressedTexSubImage2D:L,compressedTexSubImage3D:K,scissor:ue,viewport:de,reset:Qe}}function Pg(o,e,t,n,i,r,a){const s=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,b){return h?new OffscreenCanvas(E,b):ps("canvas")}function S(E,b,H,Q){let ne=1;if((E.width>Q||E.height>Q)&&(ne=Q/Math.max(E.width,E.height)),ne<1||b===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const oe=b?Ih:Math.floor,L=oe(ne*E.width),K=oe(ne*E.height);g===void 0&&(g=y(L,K));const z=H?y(L,K):g;return z.width=L,z.height=K,z.getContext("2d").drawImage(E,0,0,L,K),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+L+"x"+K+")."),z}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function v(E){return Qo(E.width)&&Qo(E.height)}function M(E){return s?!1:E.wrapS!==an||E.wrapT!==an||E.minFilter!==wt&&E.minFilter!==jt}function A(E,b){return E.generateMipmaps&&b&&E.minFilter!==wt&&E.minFilter!==jt}function C(E){o.generateMipmap(E)}function P(E,b,H,Q,ne=!1){if(s===!1)return b;if(E!==null){if(o[E]!==void 0)return o[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let oe=b;return b===6403&&(H===5126&&(oe=33326),H===5131&&(oe=33325),H===5121&&(oe=33321)),b===33319&&(H===5126&&(oe=33328),H===5131&&(oe=33327),H===5121&&(oe=33323)),b===6408&&(H===5126&&(oe=34836),H===5131&&(oe=34842),H===5121&&(oe=Q===We&&ne===!1?35907:32856),H===32819&&(oe=32854),H===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function x(E,b,H){return A(E,H)===!0||E.isFramebufferTexture&&E.minFilter!==wt&&E.minFilter!==jt?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function T(E){return E===wt||E===Ao||E===Is?9728:9729}function k(E){const b=E.target;b.removeEventListener("dispose",k),D(b),b.isVideoTexture&&_.delete(b)}function G(E){const b=E.target;b.removeEventListener("dispose",G),F(b)}function D(E){const b=n.get(E);if(b.__webglInit===void 0)return;const H=E.source,Q=p.get(H);if(Q){const ne=Q[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&O(E),Object.keys(Q).length===0&&p.delete(H)}n.remove(E)}function O(E){const b=n.get(E);o.deleteTexture(b.__webglTexture);const H=E.source,Q=p.get(H);delete Q[b.__cacheKey],a.memory.textures--}function F(E){const b=E.texture,H=n.get(E),Q=n.get(b);if(Q.__webglTexture!==void 0&&(o.deleteTexture(Q.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)o.deleteFramebuffer(H.__webglFramebuffer[ne]),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer[ne]);else{if(o.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&o.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ne=0;ne<H.__webglColorRenderbuffer.length;ne++)H.__webglColorRenderbuffer[ne]&&o.deleteRenderbuffer(H.__webglColorRenderbuffer[ne]);H.__webglDepthRenderbuffer&&o.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ne=0,oe=b.length;ne<oe;ne++){const L=n.get(b[ne]);L.__webglTexture&&(o.deleteTexture(L.__webglTexture),a.memory.textures--),n.remove(b[ne])}n.remove(b),n.remove(E)}let $=0;function Z(){$=0}function W(){const E=$;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),$+=1,E}function te(E){const b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.encoding),b.join()}function J(E,b){const H=n.get(E);if(E.isVideoTexture&&Ve(E),E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){const Q=E.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(H,E,b);return}}t.bindTexture(3553,H.__webglTexture,33984+b)}function _e(E,b){const H=n.get(E);if(E.version>0&&H.__version!==E.version){ye(H,E,b);return}t.bindTexture(35866,H.__webglTexture,33984+b)}function ie(E,b){const H=n.get(E);if(E.version>0&&H.__version!==E.version){ye(H,E,b);return}t.bindTexture(32879,H.__webglTexture,33984+b)}function V(E,b){const H=n.get(E);if(E.version>0&&H.__version!==E.version){Me(H,E,b);return}t.bindTexture(34067,H.__webglTexture,33984+b)}const j={[wa]:10497,[an]:33071,[Ta]:33648},re={[wt]:9728,[Ao]:9984,[Is]:9986,[jt]:9729,[fh]:9985,[wr]:9987};function ce(E,b,H){if(H?(o.texParameteri(E,10242,j[b.wrapS]),o.texParameteri(E,10243,j[b.wrapT]),(E===32879||E===35866)&&o.texParameteri(E,32882,j[b.wrapR]),o.texParameteri(E,10240,re[b.magFilter]),o.texParameteri(E,10241,re[b.minFilter])):(o.texParameteri(E,10242,33071),o.texParameteri(E,10243,33071),(E===32879||E===35866)&&o.texParameteri(E,32882,33071),(b.wrapS!==an||b.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(E,10240,T(b.magFilter)),o.texParameteri(E,10241,T(b.minFilter)),b.minFilter!==wt&&b.minFilter!==jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===wt||b.minFilter!==Is&&b.minFilter!==wr||b.type===oi&&e.has("OES_texture_float_linear")===!1||s===!1&&b.type===Tr&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(o.texParameterf(E,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function B(E,b){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",k));const Q=b.source;let ne=p.get(Q);ne===void 0&&(ne={},p.set(Q,ne));const oe=te(b);if(oe!==E.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ne[oe].usedTimes++;const L=ne[E.__cacheKey];L!==void 0&&(ne[E.__cacheKey].usedTimes--,L.usedTimes===0&&O(b)),E.__cacheKey=oe,E.__webglTexture=ne[oe].texture}return H}function ye(E,b,H){let Q=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=35866),b.isData3DTexture&&(Q=32879);const ne=B(E,b),oe=b.source;t.bindTexture(Q,E.__webglTexture,33984+H);const L=n.get(oe);if(oe.version!==L.__version||ne===!0){t.activeTexture(33984+H),o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const K=M(b)&&v(b.image)===!1;let z=S(b.image,K,!1,u);z=pt(b,z);const le=v(z)||s,fe=r.convert(b.format,b.encoding);let pe=r.convert(b.type),ue=P(b.internalFormat,fe,pe,b.encoding,b.isVideoTexture);ce(Q,b,le);let de;const be=b.mipmaps,Pe=s&&b.isVideoTexture!==!0,Qe=L.__version===void 0||ne===!0,R=x(b,z,le);if(b.isDepthTexture)ue=6402,s?b.type===oi?ue=36012:b.type===ai?ue=33190:b.type===qi?ue=35056:ue=33189:b.type===oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ci&&ue===6402&&b.type!==uc&&b.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=ai,pe=r.convert(b.type)),b.format===Qi&&ue===6402&&(ue=34041,b.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=qi,pe=r.convert(b.type))),Qe&&(Pe?t.texStorage2D(3553,1,ue,z.width,z.height):t.texImage2D(3553,0,ue,z.width,z.height,0,fe,pe,null));else if(b.isDataTexture)if(be.length>0&&le){Pe&&Qe&&t.texStorage2D(3553,R,ue,be[0].width,be[0].height);for(let q=0,ee=be.length;q<ee;q++)de=be[q],Pe?t.texSubImage2D(3553,q,0,0,de.width,de.height,fe,pe,de.data):t.texImage2D(3553,q,ue,de.width,de.height,0,fe,pe,de.data);b.generateMipmaps=!1}else Pe?(Qe&&t.texStorage2D(3553,R,ue,z.width,z.height),t.texSubImage2D(3553,0,0,0,z.width,z.height,fe,pe,z.data)):t.texImage2D(3553,0,ue,z.width,z.height,0,fe,pe,z.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Pe&&Qe&&t.texStorage3D(35866,R,ue,be[0].width,be[0].height,z.depth);for(let q=0,ee=be.length;q<ee;q++)de=be[q],b.format!==on?fe!==null?Pe?t.compressedTexSubImage3D(35866,q,0,0,0,de.width,de.height,z.depth,fe,de.data,0,0):t.compressedTexImage3D(35866,q,ue,de.width,de.height,z.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(35866,q,0,0,0,de.width,de.height,z.depth,fe,pe,de.data):t.texImage3D(35866,q,ue,de.width,de.height,z.depth,0,fe,pe,de.data)}else{Pe&&Qe&&t.texStorage2D(3553,R,ue,be[0].width,be[0].height);for(let q=0,ee=be.length;q<ee;q++)de=be[q],b.format!==on?fe!==null?Pe?t.compressedTexSubImage2D(3553,q,0,0,de.width,de.height,fe,de.data):t.compressedTexImage2D(3553,q,ue,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(3553,q,0,0,de.width,de.height,fe,pe,de.data):t.texImage2D(3553,q,ue,de.width,de.height,0,fe,pe,de.data)}else if(b.isDataArrayTexture)Pe?(Qe&&t.texStorage3D(35866,R,ue,z.width,z.height,z.depth),t.texSubImage3D(35866,0,0,0,0,z.width,z.height,z.depth,fe,pe,z.data)):t.texImage3D(35866,0,ue,z.width,z.height,z.depth,0,fe,pe,z.data);else if(b.isData3DTexture)Pe?(Qe&&t.texStorage3D(32879,R,ue,z.width,z.height,z.depth),t.texSubImage3D(32879,0,0,0,0,z.width,z.height,z.depth,fe,pe,z.data)):t.texImage3D(32879,0,ue,z.width,z.height,z.depth,0,fe,pe,z.data);else if(b.isFramebufferTexture){if(Qe)if(Pe)t.texStorage2D(3553,R,ue,z.width,z.height);else{let q=z.width,ee=z.height;for(let he=0;he<R;he++)t.texImage2D(3553,he,ue,q,ee,0,fe,pe,null),q>>=1,ee>>=1}}else if(be.length>0&&le){Pe&&Qe&&t.texStorage2D(3553,R,ue,be[0].width,be[0].height);for(let q=0,ee=be.length;q<ee;q++)de=be[q],Pe?t.texSubImage2D(3553,q,0,0,fe,pe,de):t.texImage2D(3553,q,ue,fe,pe,de);b.generateMipmaps=!1}else Pe?(Qe&&t.texStorage2D(3553,R,ue,z.width,z.height),t.texSubImage2D(3553,0,0,0,fe,pe,z)):t.texImage2D(3553,0,ue,fe,pe,z);A(b,le)&&C(Q),L.__version=oe.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function Me(E,b,H){if(b.image.length!==6)return;const Q=B(E,b),ne=b.source;t.bindTexture(34067,E.__webglTexture,33984+H);const oe=n.get(ne);if(ne.version!==oe.__version||Q===!0){t.activeTexture(33984+H),o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const L=b.isCompressedTexture||b.image[0].isCompressedTexture,K=b.image[0]&&b.image[0].isDataTexture,z=[];for(let q=0;q<6;q++)!L&&!K?z[q]=S(b.image[q],!1,!0,c):z[q]=K?b.image[q].image:b.image[q],z[q]=pt(b,z[q]);const le=z[0],fe=v(le)||s,pe=r.convert(b.format,b.encoding),ue=r.convert(b.type),de=P(b.internalFormat,pe,ue,b.encoding),be=s&&b.isVideoTexture!==!0,Pe=oe.__version===void 0||Q===!0;let Qe=x(b,le,fe);ce(34067,b,fe);let R;if(L){be&&Pe&&t.texStorage2D(34067,Qe,de,le.width,le.height);for(let q=0;q<6;q++){R=z[q].mipmaps;for(let ee=0;ee<R.length;ee++){const he=R[ee];b.format!==on?pe!==null?be?t.compressedTexSubImage2D(34069+q,ee,0,0,he.width,he.height,pe,he.data):t.compressedTexImage2D(34069+q,ee,de,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?t.texSubImage2D(34069+q,ee,0,0,he.width,he.height,pe,ue,he.data):t.texImage2D(34069+q,ee,de,he.width,he.height,0,pe,ue,he.data)}}}else{R=b.mipmaps,be&&Pe&&(R.length>0&&Qe++,t.texStorage2D(34067,Qe,de,z[0].width,z[0].height));for(let q=0;q<6;q++)if(K){be?t.texSubImage2D(34069+q,0,0,0,z[q].width,z[q].height,pe,ue,z[q].data):t.texImage2D(34069+q,0,de,z[q].width,z[q].height,0,pe,ue,z[q].data);for(let ee=0;ee<R.length;ee++){const ge=R[ee].image[q].image;be?t.texSubImage2D(34069+q,ee+1,0,0,ge.width,ge.height,pe,ue,ge.data):t.texImage2D(34069+q,ee+1,de,ge.width,ge.height,0,pe,ue,ge.data)}}else{be?t.texSubImage2D(34069+q,0,0,0,pe,ue,z[q]):t.texImage2D(34069+q,0,de,pe,ue,z[q]);for(let ee=0;ee<R.length;ee++){const he=R[ee];be?t.texSubImage2D(34069+q,ee+1,0,0,pe,ue,he.image[q]):t.texImage2D(34069+q,ee+1,de,pe,ue,he.image[q])}}}A(b,fe)&&C(34067),oe.__version=ne.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function se(E,b,H,Q,ne){const oe=r.convert(H.format,H.encoding),L=r.convert(H.type),K=P(H.internalFormat,oe,L,H.encoding);n.get(b).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,K,b.width,b.height,b.depth,0,oe,L,null):t.texImage2D(ne,0,K,b.width,b.height,0,oe,L,null)),t.bindFramebuffer(36160,E),Ne(b)?d.framebufferTexture2DMultisampleEXT(36160,Q,ne,n.get(H).__webglTexture,0,Je(b)):(ne===3553||ne>=34069&&ne<=34074)&&o.framebufferTexture2D(36160,Q,ne,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function ve(E,b,H){if(o.bindRenderbuffer(36161,E),b.depthBuffer&&!b.stencilBuffer){let Q=33189;if(H||Ne(b)){const ne=b.depthTexture;ne&&ne.isDepthTexture&&(ne.type===oi?Q=36012:ne.type===ai&&(Q=33190));const oe=Je(b);Ne(b)?d.renderbufferStorageMultisampleEXT(36161,oe,Q,b.width,b.height):o.renderbufferStorageMultisample(36161,oe,Q,b.width,b.height)}else o.renderbufferStorage(36161,Q,b.width,b.height);o.framebufferRenderbuffer(36160,36096,36161,E)}else if(b.depthBuffer&&b.stencilBuffer){const Q=Je(b);H&&Ne(b)===!1?o.renderbufferStorageMultisample(36161,Q,35056,b.width,b.height):Ne(b)?d.renderbufferStorageMultisampleEXT(36161,Q,35056,b.width,b.height):o.renderbufferStorage(36161,34041,b.width,b.height),o.framebufferRenderbuffer(36160,33306,36161,E)}else{const Q=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ne=0;ne<Q.length;ne++){const oe=Q[ne],L=r.convert(oe.format,oe.encoding),K=r.convert(oe.type),z=P(oe.internalFormat,L,K,oe.encoding),le=Je(b);H&&Ne(b)===!1?o.renderbufferStorageMultisample(36161,le,z,b.width,b.height):Ne(b)?d.renderbufferStorageMultisampleEXT(36161,le,z,b.width,b.height):o.renderbufferStorage(36161,z,b.width,b.height)}}o.bindRenderbuffer(36161,null)}function Fe(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J(b.depthTexture,0);const Q=n.get(b.depthTexture).__webglTexture,ne=Je(b);if(b.depthTexture.format===ci)Ne(b)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,ne):o.framebufferTexture2D(36160,36096,3553,Q,0);else if(b.depthTexture.format===Qi)Ne(b)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,ne):o.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function me(E){const b=n.get(E),H=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Fe(b.__webglFramebuffer,E)}else if(H){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]=o.createRenderbuffer(),ve(b.__webglDepthbuffer[Q],E,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=o.createRenderbuffer(),ve(b.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function Te(E,b,H){const Q=n.get(E);b!==void 0&&se(Q.__webglFramebuffer,E,E.texture,36064,3553),H!==void 0&&me(E)}function Ke(E){const b=E.texture,H=n.get(E),Q=n.get(b);E.addEventListener("dispose",G),E.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=o.createTexture()),Q.__version=b.version,a.memory.textures++);const ne=E.isWebGLCubeRenderTarget===!0,oe=E.isWebGLMultipleRenderTargets===!0,L=v(E)||s;if(ne){H.__webglFramebuffer=[];for(let K=0;K<6;K++)H.__webglFramebuffer[K]=o.createFramebuffer()}else{if(H.__webglFramebuffer=o.createFramebuffer(),oe)if(i.drawBuffers){const K=E.texture;for(let z=0,le=K.length;z<le;z++){const fe=n.get(K[z]);fe.__webglTexture===void 0&&(fe.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&E.samples>0&&Ne(E)===!1){const K=oe?b:[b];H.__webglMultisampledFramebuffer=o.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let z=0;z<K.length;z++){const le=K[z];H.__webglColorRenderbuffer[z]=o.createRenderbuffer(),o.bindRenderbuffer(36161,H.__webglColorRenderbuffer[z]);const fe=r.convert(le.format,le.encoding),pe=r.convert(le.type),ue=P(le.internalFormat,fe,pe,le.encoding,E.isXRRenderTarget===!0),de=Je(E);o.renderbufferStorageMultisample(36161,de,ue,E.width,E.height),o.framebufferRenderbuffer(36160,36064+z,36161,H.__webglColorRenderbuffer[z])}o.bindRenderbuffer(36161,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=o.createRenderbuffer(),ve(H.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,Q.__webglTexture),ce(34067,b,L);for(let K=0;K<6;K++)se(H.__webglFramebuffer[K],E,b,36064,34069+K);A(b,L)&&C(34067),t.unbindTexture()}else if(oe){const K=E.texture;for(let z=0,le=K.length;z<le;z++){const fe=K[z],pe=n.get(fe);t.bindTexture(3553,pe.__webglTexture),ce(3553,fe,L),se(H.__webglFramebuffer,E,fe,36064+z,3553),A(fe,L)&&C(3553)}t.unbindTexture()}else{let K=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(s?K=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(K,Q.__webglTexture),ce(K,b,L),se(H.__webglFramebuffer,E,b,36064,K),A(b,L)&&C(K),t.unbindTexture()}E.depthBuffer&&me(E)}function qe(E){const b=v(E)||s,H=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0,ne=H.length;Q<ne;Q++){const oe=H[Q];if(A(oe,b)){const L=E.isWebGLCubeRenderTarget?34067:3553,K=n.get(oe).__webglTexture;t.bindTexture(L,K),C(L),t.unbindTexture()}}}function nt(E){if(s&&E.samples>0&&Ne(E)===!1){const b=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],H=E.width,Q=E.height;let ne=16384;const oe=[],L=E.stencilBuffer?33306:36096,K=n.get(E),z=E.isWebGLMultipleRenderTargets===!0;if(z)for(let le=0;le<b.length;le++)t.bindFramebuffer(36160,K.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+le,36161,null),t.bindFramebuffer(36160,K.__webglFramebuffer),o.framebufferTexture2D(36009,36064+le,3553,null,0);t.bindFramebuffer(36008,K.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,K.__webglFramebuffer);for(let le=0;le<b.length;le++){oe.push(36064+le),E.depthBuffer&&oe.push(L);const fe=K.__ignoreDepthValues!==void 0?K.__ignoreDepthValues:!1;if(fe===!1&&(E.depthBuffer&&(ne|=256),E.stencilBuffer&&(ne|=1024)),z&&o.framebufferRenderbuffer(36008,36064,36161,K.__webglColorRenderbuffer[le]),fe===!0&&(o.invalidateFramebuffer(36008,[L]),o.invalidateFramebuffer(36009,[L])),z){const pe=n.get(b[le]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,pe,0)}o.blitFramebuffer(0,0,H,Q,0,0,H,Q,ne,9728),m&&o.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),z)for(let le=0;le<b.length;le++){t.bindFramebuffer(36160,K.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+le,36161,K.__webglColorRenderbuffer[le]);const fe=n.get(b[le]).__webglTexture;t.bindFramebuffer(36160,K.__webglFramebuffer),o.framebufferTexture2D(36009,36064+le,3553,fe,0)}t.bindFramebuffer(36009,K.__webglMultisampledFramebuffer)}}function Je(E){return Math.min(f,E.samples)}function Ne(E){const b=n.get(E);return s&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ve(E){const b=a.render.frame;_.get(E)!==b&&(_.set(E,b),E.update())}function pt(E,b){const H=E.encoding,Q=E.format,ne=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Ea||H!==pi&&(H===We?s===!1?e.has("EXT_sRGB")===!0&&Q===on?(E.format=Ea,E.minFilter=jt,E.generateMipmaps=!1):b=pc.sRGBToLinear(b):(Q!==on||ne!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),b}this.allocateTextureUnit=W,this.resetTextureUnits=Z,this.setTexture2D=J,this.setTexture2DArray=_e,this.setTexture3D=ie,this.setTextureCube=V,this.rebindTextures=Te,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Ne}function Lg(o,e,t){const n=t.isWebGL2;function i(r,a=null){let s;if(r===di)return 5121;if(r===gh)return 32819;if(r===_h)return 32820;if(r===dh)return 5120;if(r===ph)return 5122;if(r===uc)return 5123;if(r===mh)return 5124;if(r===ai)return 5125;if(r===oi)return 5126;if(r===Tr)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===xh)return 6406;if(r===on)return 6408;if(r===vh)return 6409;if(r===Mh)return 6410;if(r===ci)return 6402;if(r===Qi)return 34041;if(r===Ea)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===Sh)return 6403;if(r===yh)return 36244;if(r===bh)return 33319;if(r===wh)return 33320;if(r===Th)return 36249;if(r===Us||r===Os||r===Ns||r===Fs)if(a===We)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Us)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Us)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Os)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ns)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Co||r===Po||r===Lo||r===Ro)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Co)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Po)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ro)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Eh)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Do||r===Io)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Do)return a===We?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Io)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Uo||r===Oo||r===No||r===Fo||r===zo||r===Bo||r===ko||r===Go||r===Vo||r===Ho||r===Wo||r===Xo||r===qo||r===Yo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Uo)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Oo)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===No)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fo)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zo)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Bo)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ko)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Go)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vo)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ho)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wo)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xo)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qo)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yo)return a===We?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===zs)return a===We?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Ah||r===jo||r===Zo||r===Ko)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===zs)return s.COMPRESSED_RED_RGTC1_EXT;if(r===jo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ko)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qi?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class Rg extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ls extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dg={type:"move"};class la{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),h=this._getHandJoint(c,g);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Dg)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ls;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ig extends Gt{constructor(e,t,n,i,r,a,s,l,c,u){if(u=u!==void 0?u:ci,u!==ci&&u!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ci&&(n=ai),n===void 0&&u===Qi&&(n=qi),super(null,i,r,a,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1}}class Ug extends Mi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,s="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,_=null;const g=t.getContextAttributes();let p=null,h=null;const y=[],S=[],v=new Set,M=new Map,A=new Bt;A.layers.enable(1),A.viewport=new Xe;const C=new Bt;C.layers.enable(2),C.viewport=new Xe;const P=[A,C],x=new Rg;x.layers.enable(1),x.layers.enable(2);let T=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=y[V];return j===void 0&&(j=new la,y[V]=j),j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=y[V];return j===void 0&&(j=new la,y[V]=j),j.getGripSpace()},this.getHand=function(V){let j=y[V];return j===void 0&&(j=new la,y[V]=j),j.getHandSpace()};function G(V){const j=S.indexOf(V.inputSource);if(j===-1)return;const re=y[j];re!==void 0&&re.dispatchEvent({type:V.type,data:V.inputSource})}function D(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",O);for(let V=0;V<y.length;V++){const j=S[V];j!==null&&(S[V]=null,y[V].disconnect(j))}T=null,k=null,e.setRenderTarget(p),m=null,d=null,f=null,i=null,h=null,ie.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",D),i.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:m}),h=new mi(m.framebufferWidth,m.framebufferHeight,{format:on,type:di,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let j=null,re=null,ce=null;g.depth&&(ce=g.stencil?35056:33190,j=g.stencil?Qi:ci,re=g.stencil?qi:ai);const B={colorFormat:32856,depthFormat:ce,scaleFactor:r};f=new XRWebGLBinding(i,t),d=f.createProjectionLayer(B),i.updateRenderState({layers:[d]}),h=new mi(d.textureWidth,d.textureHeight,{format:on,type:di,depthTexture:new Ig(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ye=e.properties.get(h);ye.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(s),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(V){for(let j=0;j<V.removed.length;j++){const re=V.removed[j],ce=S.indexOf(re);ce>=0&&(S[ce]=null,y[ce].disconnect(re))}for(let j=0;j<V.added.length;j++){const re=V.added[j];let ce=S.indexOf(re);if(ce===-1){for(let ye=0;ye<y.length;ye++)if(ye>=S.length){S.push(re),ce=ye;break}else if(S[ye]===null){S[ye]=re,ce=ye;break}if(ce===-1)break}const B=y[ce];B&&B.connect(re)}}const F=new I,$=new I;function Z(V,j,re){F.setFromMatrixPosition(j.matrixWorld),$.setFromMatrixPosition(re.matrixWorld);const ce=F.distanceTo($),B=j.projectionMatrix.elements,ye=re.projectionMatrix.elements,Me=B[14]/(B[10]-1),se=B[14]/(B[10]+1),ve=(B[9]+1)/B[5],Fe=(B[9]-1)/B[5],me=(B[8]-1)/B[0],Te=(ye[8]+1)/ye[0],Ke=Me*me,qe=Me*Te,nt=ce/(-me+Te),Je=nt*-me;j.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Je),V.translateZ(nt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const Ne=Me+nt,Ve=se+nt,pt=Ke-Je,E=qe+(ce-Je),b=ve*se/Ve*Ne,H=Fe*se/Ve*Ne;V.projectionMatrix.makePerspective(pt,E,b,H,Ne,Ve),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function W(V,j){j===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;x.near=C.near=A.near=V.near,x.far=C.far=A.far=V.far,(T!==x.near||k!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,k=x.far);const j=V.parent,re=x.cameras;W(x,j);for(let ce=0;ce<re.length;ce++)W(re[ce],j);re.length===2?Z(x,A,C):x.projectionMatrix.copy(A.projectionMatrix),te(V,x,j)};function te(V,j,re){re===null?V.matrix.copy(j.matrixWorld):(V.matrix.copy(re.matrixWorld),V.matrix.invert(),V.matrix.multiply(j.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0);const ce=V.children;for(let B=0,ye=ce.length;B<ye;B++)ce[B].updateMatrixWorld(!0);V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Aa*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.getPlanes=function(){return v};let J=null;function _e(V,j){if(u=j.getViewerPose(c||a),_=j,u!==null){const re=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let ce=!1;re.length!==x.cameras.length&&(x.cameras.length=0,ce=!0);for(let B=0;B<re.length;B++){const ye=re[B];let Me=null;if(m!==null)Me=m.getViewport(ye);else{const ve=f.getViewSubImage(d,ye);Me=ve.viewport,B===0&&(e.setRenderTargetTextures(h,ve.colorTexture,d.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(h))}let se=P[B];se===void 0&&(se=new Bt,se.layers.enable(B),se.viewport=new Xe,P[B]=se),se.matrix.fromArray(ye.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ye.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Me.x,Me.y,Me.width,Me.height),B===0&&(x.matrix.copy(se.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ce===!0&&x.cameras.push(se)}}for(let re=0;re<y.length;re++){const ce=S[re],B=y[re];ce!==null&&B!==void 0&&B.update(ce,j,c||a)}if(J&&J(V,j),j.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:j.detectedPlanes});let re=null;for(const ce of v)j.detectedPlanes.has(ce)||(re===null&&(re=[]),re.push(ce));if(re!==null)for(const ce of re)v.delete(ce),M.delete(ce),n.dispatchEvent({type:"planeremoved",data:ce});for(const ce of j.detectedPlanes)if(!v.has(ce))v.add(ce),M.set(ce,j.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ce});else{const B=M.get(ce);ce.lastChangedTime>B&&(M.set(ce,ce.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ce}))}}_=null}const ie=new Tc;ie.setAnimationLoop(_e),this.setAnimationLoop=function(V){J=V},this.dispose=function(){}}}function Og(o,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,yc(o)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function i(p,h,y,S,v){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),f(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,v)):h.isMeshMatcapMaterial?(r(p,h),_(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),g(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&s(p,h)):h.isPointsMaterial?l(p,h,y,S):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===At&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===At&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const y=e.get(h).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const S=o.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*S,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function s(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,y,S){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*y,p.scale.value=S*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,y){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===At&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function g(p,h){const y=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ng(o,e,t,n){let i={},r={},a=[];const s=t.isWebGL2?o.getParameter(35375):0;function l(y,S){const v=S.program;n.uniformBlockBinding(y,v)}function c(y,S){let v=i[y.id];v===void 0&&(_(y),v=u(y),i[y.id]=v,y.addEventListener("dispose",p));const M=S.program;n.updateUBOMapping(y,M);const A=e.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function u(y){const S=f();y.__bindingPointIndex=S;const v=o.createBuffer(),M=y.__size,A=y.usage;return o.bindBuffer(35345,v),o.bufferData(35345,M,A),o.bindBuffer(35345,null),o.bindBufferBase(35345,S,v),v}function f(){for(let y=0;y<s;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const S=i[y.id],v=y.uniforms,M=y.__cache;o.bindBuffer(35345,S);for(let A=0,C=v.length;A<C;A++){const P=v[A];if(m(P,A,M)===!0){const x=P.__offset,T=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let G=0;G<T.length;G++){const D=T[G],O=g(D);typeof D=="number"?(P.__data[0]=D,o.bufferSubData(35345,x+k,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=D.elements[0],P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=D.elements[0],P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=D.elements[0]):(D.toArray(P.__data,k),k+=O.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,x,P.__data)}}o.bindBuffer(35345,null)}function m(y,S,v){const M=y.value;if(v[S]===void 0){if(typeof M=="number")v[S]=M;else{const A=Array.isArray(M)?M:[M],C=[];for(let P=0;P<A.length;P++)C.push(A[P].clone());v[S]=C}return!0}else if(typeof M=="number"){if(v[S]!==M)return v[S]=M,!0}else{const A=Array.isArray(v[S])?v[S]:[v[S]],C=Array.isArray(M)?M:[M];for(let P=0;P<A.length;P++){const x=A[P];if(x.equals(C[P])===!1)return x.copy(C[P]),!0}}return!1}function _(y){const S=y.uniforms;let v=0;const M=16;let A=0;for(let C=0,P=S.length;C<P;C++){const x=S[C],T={boundary:0,storage:0},k=Array.isArray(x.value)?x.value:[x.value];for(let G=0,D=k.length;G<D;G++){const O=k[G],F=g(O);T.boundary+=F.boundary,T.storage+=F.storage}if(x.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=v,C>0){A=v%M;const G=M-A;A!==0&&G-T.boundary<0&&(v+=M-A,x.__offset=v)}v+=T.storage}return A=v%M,A>0&&(v+=M-A),y.__size=v,y.__cache={},this}function g(y){const S={boundary:0,storage:0};return typeof y=="number"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function p(y){const S=y.target;S.removeEventListener("dispose",p);const v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),o.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function h(){for(const y in i)o.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:h}}function Fg(){const o=ps("canvas");return o.style.display="block",o}class Lc{constructor(e={}){const{canvas:t=Fg(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let m=null,_=null;const g=[],p=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=pi,this.useLegacyLights=!0,this.toneMapping=Pn,this.toneMappingExposure=1;const h=this;let y=!1,S=0,v=0,M=null,A=-1,C=null;const P=new Xe,x=new Xe;let T=null,k=t.width,G=t.height,D=1,O=null,F=null;const $=new Xe(0,0,k,G),Z=new Xe(0,0,k,G);let W=!1;const te=new qa;let J=!1,_e=!1,ie=null;const V=new at,j=new I,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return M===null?D:1}let B=n;function ye(w,N){for(let X=0;X<w.length;X++){const U=w[X],Y=t.getContext(U,N);if(Y!==null)return Y}return null}try{const w={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wa}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),B===null){const N=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&N.shift(),B=ye(N,w),B===null)throw ye(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Me,se,ve,Fe,me,Te,Ke,qe,nt,Je,Ne,Ve,pt,E,b,H,Q,ne,oe,L,K,z,le,fe;function pe(){Me=new jp(B),se=new Gp(B,Me,e),Me.init(se),z=new Lg(B,Me,se),ve=new Cg(B,Me,se),Fe=new $p,me=new pg,Te=new Pg(B,Me,ve,me,se,z,Fe),Ke=new Hp(h),qe=new Yp(h),nt=new lf(B,se),le=new Bp(B,Me,nt,se),Je=new Zp(B,nt,Fe,le),Ne=new tm(B,Je,nt,Fe),oe=new em(B,se,Te),H=new Vp(me),Ve=new dg(h,Ke,qe,Me,se,le,H),pt=new Og(h,me),E=new gg,b=new yg(Me,se),ne=new zp(h,Ke,qe,ve,Ne,d,l),Q=new Ag(h,Ne,se),fe=new Ng(B,Fe,se,ve),L=new kp(B,Me,Fe,se),K=new Kp(B,Me,Fe,se),Fe.programs=Ve.programs,h.capabilities=se,h.extensions=Me,h.properties=me,h.renderLists=E,h.shadowMap=Q,h.state=ve,h.info=Fe}pe();const ue=new Ug(h,B);this.xr=ue,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=Me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(w){w!==void 0&&(D=w,this.setSize(k,G,!1))},this.getSize=function(w){return w.set(k,G)},this.setSize=function(w,N,X=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,G=N,t.width=Math.floor(w*D),t.height=Math.floor(N*D),X===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(k*D,G*D).floor()},this.setDrawingBufferSize=function(w,N,X){k=w,G=N,D=X,t.width=Math.floor(w*X),t.height=Math.floor(N*X),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,N,X,U){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,N,X,U),ve.viewport(P.copy($).multiplyScalar(D).floor())},this.getScissor=function(w){return w.copy(Z)},this.setScissor=function(w,N,X,U){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,N,X,U),ve.scissor(x.copy(Z).multiplyScalar(D).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(w){ve.setScissorTest(W=w)},this.setOpaqueSort=function(w){O=w},this.setTransparentSort=function(w){F=w},this.getClearColor=function(w){return w.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(w=!0,N=!0,X=!0){let U=0;w&&(U|=16384),N&&(U|=256),X&&(U|=1024),B.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),E.dispose(),b.dispose(),me.dispose(),Ke.dispose(),qe.dispose(),Ne.dispose(),le.dispose(),fe.dispose(),Ve.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",ge),ue.removeEventListener("sessionend",He),ie&&(ie.dispose(),ie=null),Ye.stop()};function de(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=Fe.autoReset,N=Q.enabled,X=Q.autoUpdate,U=Q.needsUpdate,Y=Q.type;pe(),Fe.autoReset=w,Q.enabled=N,Q.autoUpdate=X,Q.needsUpdate=U,Q.type=Y}function Pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Qe(w){const N=w.target;N.removeEventListener("dispose",Qe),R(N)}function R(w){q(w),me.remove(w)}function q(w){const N=me.get(w).programs;N!==void 0&&(N.forEach(function(X){Ve.releaseProgram(X)}),w.isShaderMaterial&&Ve.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,X,U,Y,xe){N===null&&(N=re);const Se=Y.isMesh&&Y.matrixWorld.determinant()<0,we=Iu(w,N,X,U,Y);ve.setMaterial(U,Se);let Ee=X.index,Le=1;U.wireframe===!0&&(Ee=Je.getWireframeAttribute(X),Le=2);const Re=X.drawRange,De=X.attributes.position;let ze=Re.start*Le,St=(Re.start+Re.count)*Le;xe!==null&&(ze=Math.max(ze,xe.start*Le),St=Math.min(St,(xe.start+xe.count)*Le)),Ee!==null?(ze=Math.max(ze,0),St=Math.min(St,Ee.count)):De!=null&&(ze=Math.max(ze,0),St=Math.min(St,De.count));const en=St-ze;if(en<0||en===1/0)return;le.setup(Y,U,we,X,Ee);let jn,it=L;if(Ee!==null&&(jn=nt.get(Ee),it=K,it.setIndex(jn)),Y.isMesh)U.wireframe===!0?(ve.setLineWidth(U.wireframeLinewidth*ce()),it.setMode(1)):it.setMode(4);else if(Y.isLine){let Oe=U.linewidth;Oe===void 0&&(Oe=1),ve.setLineWidth(Oe*ce()),Y.isLineSegments?it.setMode(1):Y.isLineLoop?it.setMode(2):it.setMode(3)}else Y.isPoints?it.setMode(0):Y.isSprite&&it.setMode(4);if(Y.isInstancedMesh)it.renderInstances(ze,en,Y.count);else if(X.isInstancedBufferGeometry){const Oe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ps=Math.min(X.instanceCount,Oe);it.renderInstances(ze,en,Ps)}else it.render(ze,en)},this.compile=function(w,N){function X(U,Y,xe){U.transparent===!0&&U.side===An&&U.forceSinglePass===!1?(U.side=At,U.needsUpdate=!0,kr(U,Y,xe),U.side=Hn,U.needsUpdate=!0,kr(U,Y,xe),U.side=An):kr(U,Y,xe)}_=b.get(w),_.init(),p.push(_),w.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(_.pushLight(U),U.castShadow&&_.pushShadow(U))}),_.setupLights(h.useLegacyLights),w.traverse(function(U){const Y=U.material;if(Y)if(Array.isArray(Y))for(let xe=0;xe<Y.length;xe++){const Se=Y[xe];X(Se,w,U)}else X(Y,w,U)}),p.pop(),_=null};let ee=null;function he(w){ee&&ee(w)}function ge(){Ye.stop()}function He(){Ye.start()}const Ye=new Tc;Ye.setAnimationLoop(he),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(w){ee=w,ue.setAnimationLoop(w),w===null?Ye.stop():Ye.start()},ue.addEventListener("sessionstart",ge),ue.addEventListener("sessionend",He),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(N),N=ue.getCamera()),w.isScene===!0&&w.onBeforeRender(h,w,N,M),_=b.get(w,p.length),_.init(),p.push(_),V.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),te.setFromProjectionMatrix(V),_e=this.localClippingEnabled,J=H.init(this.clippingPlanes,_e),m=E.get(w,g.length),m.init(),g.push(m),mt(w,N,0,h.sortObjects),m.finish(),h.sortObjects===!0&&m.sort(O,F),J===!0&&H.beginShadows();const X=_.state.shadowsArray;if(Q.render(X,w,N),J===!0&&H.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(m,w),_.setupLights(h.useLegacyLights),N.isArrayCamera){const U=N.cameras;for(let Y=0,xe=U.length;Y<xe;Y++){const Se=U[Y];Dn(m,w,Se,Se.viewport)}}else Dn(m,w,N);M!==null&&(Te.updateMultisampleRenderTarget(M),Te.updateRenderTargetMipmap(M)),w.isScene===!0&&w.onAfterRender(h,w,N),le.resetDefaultState(),A=-1,C=null,p.pop(),p.length>0?_=p[p.length-1]:_=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function mt(w,N,X,U){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||te.intersectsSprite(w)){U&&j.setFromMatrixPosition(w.matrixWorld).applyMatrix4(V);const Se=Ne.update(w),we=w.material;we.visible&&m.push(w,Se,we,X,j.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Fe.render.frame&&(w.skeleton.update(),w.skeleton.frame=Fe.render.frame),!w.frustumCulled||te.intersectsObject(w))){U&&j.setFromMatrixPosition(w.matrixWorld).applyMatrix4(V);const Se=Ne.update(w),we=w.material;if(Array.isArray(we)){const Ee=Se.groups;for(let Le=0,Re=Ee.length;Le<Re;Le++){const De=Ee[Le],ze=we[De.materialIndex];ze&&ze.visible&&m.push(w,Se,ze,X,j.z,De)}}else we.visible&&m.push(w,Se,we,X,j.z,null)}}const xe=w.children;for(let Se=0,we=xe.length;Se<we;Se++)mt(xe[Se],N,X,U)}function Dn(w,N,X,U){const Y=w.opaque,xe=w.transmissive,Se=w.transparent;_.setupLightsView(X),J===!0&&H.setGlobalState(h.clippingPlanes,X),xe.length>0&&et(Y,xe,N,X),U&&ve.viewport(P.copy(U)),Y.length>0&&Wt(Y,N,X),xe.length>0&&Wt(xe,N,X),Se.length>0&&Wt(Se,N,X),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function et(w,N,X,U){if(ie===null){const we=se.isWebGL2;ie=new mi(1024,1024,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Tr:di,minFilter:wr,samples:we&&s===!0?4:0})}const Y=h.getRenderTarget();h.setRenderTarget(ie),h.clear();const xe=h.toneMapping;h.toneMapping=Pn,Wt(w,X,U),Te.updateMultisampleRenderTarget(ie),Te.updateRenderTargetMipmap(ie);let Se=!1;for(let we=0,Ee=N.length;we<Ee;we++){const Le=N[we],Re=Le.object,De=Le.geometry,ze=Le.material,St=Le.group;if(ze.side===An&&Re.layers.test(U.layers)){const en=ze.side;ze.side=At,ze.needsUpdate=!0,cn(Re,X,U,De,ze,St),ze.side=en,ze.needsUpdate=!0,Se=!0}}Se===!0&&(Te.updateMultisampleRenderTarget(ie),Te.updateRenderTargetMipmap(ie)),h.setRenderTarget(Y),h.toneMapping=xe}function Wt(w,N,X){const U=N.isScene===!0?N.overrideMaterial:null;for(let Y=0,xe=w.length;Y<xe;Y++){const Se=w[Y],we=Se.object,Ee=Se.geometry,Le=U===null?Se.material:U,Re=Se.group;we.layers.test(X.layers)&&cn(we,N,X,Ee,Le,Re)}}function cn(w,N,X,U,Y,xe){w.onBeforeRender(h,N,X,U,Y,xe),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(h,N,X,U,w,xe),Y.transparent===!0&&Y.side===An&&Y.forceSinglePass===!1?(Y.side=At,Y.needsUpdate=!0,h.renderBufferDirect(X,N,U,Y,w,xe),Y.side=Hn,Y.needsUpdate=!0,h.renderBufferDirect(X,N,U,Y,w,xe),Y.side=An):h.renderBufferDirect(X,N,U,Y,w,xe),w.onAfterRender(h,N,X,U,Y,xe)}function kr(w,N,X){N.isScene!==!0&&(N=re);const U=me.get(w),Y=_.state.lights,xe=_.state.shadowsArray,Se=Y.state.version,we=Ve.getParameters(w,Y.state,xe,N,X),Ee=Ve.getProgramCacheKey(we);let Le=U.programs;U.environment=w.isMeshStandardMaterial?N.environment:null,U.fog=N.fog,U.envMap=(w.isMeshStandardMaterial?qe:Ke).get(w.envMap||U.environment),Le===void 0&&(w.addEventListener("dispose",Qe),Le=new Map,U.programs=Le);let Re=Le.get(Ee);if(Re!==void 0){if(U.currentProgram===Re&&U.lightsStateVersion===Se)return xo(w,we),Re}else we.uniforms=Ve.getUniforms(w),w.onBuild(X,we,h),w.onBeforeCompile(we,h),Re=Ve.acquireProgram(we,Ee),Le.set(Ee,Re),U.uniforms=we.uniforms;const De=U.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=H.uniform),xo(w,we),U.needsLights=Ou(w),U.lightsStateVersion=Se,U.needsLights&&(De.ambientLightColor.value=Y.state.ambient,De.lightProbe.value=Y.state.probe,De.directionalLights.value=Y.state.directional,De.directionalLightShadows.value=Y.state.directionalShadow,De.spotLights.value=Y.state.spot,De.spotLightShadows.value=Y.state.spotShadow,De.rectAreaLights.value=Y.state.rectArea,De.ltc_1.value=Y.state.rectAreaLTC1,De.ltc_2.value=Y.state.rectAreaLTC2,De.pointLights.value=Y.state.point,De.pointLightShadows.value=Y.state.pointShadow,De.hemisphereLights.value=Y.state.hemi,De.directionalShadowMap.value=Y.state.directionalShadowMap,De.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,De.spotShadowMap.value=Y.state.spotShadowMap,De.spotLightMatrix.value=Y.state.spotLightMatrix,De.spotLightMap.value=Y.state.spotLightMap,De.pointShadowMap.value=Y.state.pointShadowMap,De.pointShadowMatrix.value=Y.state.pointShadowMatrix);const ze=Re.getUniforms(),St=us.seqWithValue(ze.seq,De);return U.currentProgram=Re,U.uniformsList=St,Re}function xo(w,N){const X=me.get(w);X.outputEncoding=N.outputEncoding,X.instancing=N.instancing,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Iu(w,N,X,U,Y){N.isScene!==!0&&(N=re),Te.resetTextureUnits();const xe=N.fog,Se=U.isMeshStandardMaterial?N.environment:null,we=M===null?h.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:pi,Ee=(U.isMeshStandardMaterial?qe:Ke).get(U.envMap||Se),Le=U.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Re=!!U.normalMap&&!!X.attributes.tangent,De=!!X.morphAttributes.position,ze=!!X.morphAttributes.normal,St=!!X.morphAttributes.color,en=U.toneMapped?h.toneMapping:Pn,jn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,it=jn!==void 0?jn.length:0,Oe=me.get(U),Ps=_.state.lights;if(J===!0&&(_e===!0||w!==C)){const It=w===C&&U.id===A;H.setState(U,w,It)}let ut=!1;U.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Ps.state.version||Oe.outputEncoding!==we||Y.isInstancedMesh&&Oe.instancing===!1||!Y.isInstancedMesh&&Oe.instancing===!0||Y.isSkinnedMesh&&Oe.skinning===!1||!Y.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==Ee||U.fog===!0&&Oe.fog!==xe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==H.numPlanes||Oe.numIntersection!==H.numIntersection)||Oe.vertexAlphas!==Le||Oe.vertexTangents!==Re||Oe.morphTargets!==De||Oe.morphNormals!==ze||Oe.morphColors!==St||Oe.toneMapping!==en||se.isWebGL2===!0&&Oe.morphTargetsCount!==it)&&(ut=!0):(ut=!0,Oe.__version=U.version);let Zn=Oe.currentProgram;ut===!0&&(Zn=kr(U,N,Y));let vo=!1,ur=!1,Ls=!1;const yt=Zn.getUniforms(),Kn=Oe.uniforms;if(ve.useProgram(Zn.program)&&(vo=!0,ur=!0,Ls=!0),U.id!==A&&(A=U.id,ur=!0),vo||C!==w){if(yt.setValue(B,"projectionMatrix",w.projectionMatrix),se.logarithmicDepthBuffer&&yt.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),C!==w&&(C=w,ur=!0,Ls=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const It=yt.map.cameraPosition;It!==void 0&&It.setValue(B,j.setFromMatrixPosition(w.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&yt.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||Y.isSkinnedMesh)&&yt.setValue(B,"viewMatrix",w.matrixWorldInverse)}if(Y.isSkinnedMesh){yt.setOptional(B,Y,"bindMatrix"),yt.setOptional(B,Y,"bindMatrixInverse");const It=Y.skeleton;It&&(se.floatVertexTextures?(It.boneTexture===null&&It.computeBoneTexture(),yt.setValue(B,"boneTexture",It.boneTexture,Te),yt.setValue(B,"boneTextureSize",It.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Rs=X.morphAttributes;if((Rs.position!==void 0||Rs.normal!==void 0||Rs.color!==void 0&&se.isWebGL2===!0)&&oe.update(Y,X,Zn),(ur||Oe.receiveShadow!==Y.receiveShadow)&&(Oe.receiveShadow=Y.receiveShadow,yt.setValue(B,"receiveShadow",Y.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Kn.envMap.value=Ee,Kn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),ur&&(yt.setValue(B,"toneMappingExposure",h.toneMappingExposure),Oe.needsLights&&Uu(Kn,Ls),xe&&U.fog===!0&&pt.refreshFogUniforms(Kn,xe),pt.refreshMaterialUniforms(Kn,U,D,G,ie),us.upload(B,Oe.uniformsList,Kn,Te)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(us.upload(B,Oe.uniformsList,Kn,Te),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&yt.setValue(B,"center",Y.center),yt.setValue(B,"modelViewMatrix",Y.modelViewMatrix),yt.setValue(B,"normalMatrix",Y.normalMatrix),yt.setValue(B,"modelMatrix",Y.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const It=U.uniformsGroups;for(let Ds=0,Nu=It.length;Ds<Nu;Ds++)if(se.isWebGL2){const Mo=It[Ds];fe.update(Mo,Zn),fe.bind(Mo,Zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zn}function Uu(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Ou(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(w,N,X){me.get(w.texture).__webglTexture=N,me.get(w.depthTexture).__webglTexture=X;const U=me.get(w);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=X===void 0,U.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,N){const X=me.get(w);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,X=0){M=w,S=N,v=X;let U=!0,Y=null,xe=!1,Se=!1;if(w){const Ee=me.get(w);Ee.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(36160,null),U=!1):Ee.__webglFramebuffer===void 0?Te.setupRenderTarget(w):Ee.__hasExternalTextures&&Te.rebindTextures(w,me.get(w.texture).__webglTexture,me.get(w.depthTexture).__webglTexture);const Le=w.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Se=!0);const Re=me.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Y=Re[N],xe=!0):se.isWebGL2&&w.samples>0&&Te.useMultisampledRTT(w)===!1?Y=me.get(w).__webglMultisampledFramebuffer:Y=Re,P.copy(w.viewport),x.copy(w.scissor),T=w.scissorTest}else P.copy($).multiplyScalar(D).floor(),x.copy(Z).multiplyScalar(D).floor(),T=W;if(ve.bindFramebuffer(36160,Y)&&se.drawBuffers&&U&&ve.drawBuffers(w,Y),ve.viewport(P),ve.scissor(x),ve.setScissorTest(T),xe){const Ee=me.get(w.texture);B.framebufferTexture2D(36160,36064,34069+N,Ee.__webglTexture,X)}else if(Se){const Ee=me.get(w.texture),Le=N||0;B.framebufferTextureLayer(36160,36064,Ee.__webglTexture,X||0,Le)}A=-1},this.readRenderTargetPixels=function(w,N,X,U,Y,xe,Se){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=me.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){ve.bindFramebuffer(36160,we);try{const Ee=w.texture,Le=Ee.format,Re=Ee.type;if(Le!==on&&z.convert(Le)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Re===Tr&&(Me.has("EXT_color_buffer_half_float")||se.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Re!==di&&z.convert(Re)!==B.getParameter(35738)&&!(Re===oi&&(se.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-U&&X>=0&&X<=w.height-Y&&B.readPixels(N,X,U,Y,z.convert(Le),z.convert(Re),xe)}finally{const Ee=M!==null?me.get(M).__webglFramebuffer:null;ve.bindFramebuffer(36160,Ee)}}},this.copyFramebufferToTexture=function(w,N,X=0){const U=Math.pow(2,-X),Y=Math.floor(N.image.width*U),xe=Math.floor(N.image.height*U);Te.setTexture2D(N,0),B.copyTexSubImage2D(3553,X,0,0,w.x,w.y,Y,xe),ve.unbindTexture()},this.copyTextureToTexture=function(w,N,X,U=0){const Y=N.image.width,xe=N.image.height,Se=z.convert(X.format),we=z.convert(X.type);Te.setTexture2D(X,0),B.pixelStorei(37440,X.flipY),B.pixelStorei(37441,X.premultiplyAlpha),B.pixelStorei(3317,X.unpackAlignment),N.isDataTexture?B.texSubImage2D(3553,U,w.x,w.y,Y,xe,Se,we,N.image.data):N.isCompressedTexture?B.compressedTexSubImage2D(3553,U,w.x,w.y,N.mipmaps[0].width,N.mipmaps[0].height,Se,N.mipmaps[0].data):B.texSubImage2D(3553,U,w.x,w.y,Se,we,N.image),U===0&&X.generateMipmaps&&B.generateMipmap(3553),ve.unbindTexture()},this.copyTextureToTexture3D=function(w,N,X,U,Y=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=w.max.x-w.min.x+1,Se=w.max.y-w.min.y+1,we=w.max.z-w.min.z+1,Ee=z.convert(U.format),Le=z.convert(U.type);let Re;if(U.isData3DTexture)Te.setTexture3D(U,0),Re=32879;else if(U.isDataArrayTexture)Te.setTexture2DArray(U,0),Re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,U.flipY),B.pixelStorei(37441,U.premultiplyAlpha),B.pixelStorei(3317,U.unpackAlignment);const De=B.getParameter(3314),ze=B.getParameter(32878),St=B.getParameter(3316),en=B.getParameter(3315),jn=B.getParameter(32877),it=X.isCompressedTexture?X.mipmaps[0]:X.image;B.pixelStorei(3314,it.width),B.pixelStorei(32878,it.height),B.pixelStorei(3316,w.min.x),B.pixelStorei(3315,w.min.y),B.pixelStorei(32877,w.min.z),X.isDataTexture||X.isData3DTexture?B.texSubImage3D(Re,Y,N.x,N.y,N.z,xe,Se,we,Ee,Le,it.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Re,Y,N.x,N.y,N.z,xe,Se,we,Ee,it.data)):B.texSubImage3D(Re,Y,N.x,N.y,N.z,xe,Se,we,Ee,Le,it),B.pixelStorei(3314,De),B.pixelStorei(32878,ze),B.pixelStorei(3316,St),B.pixelStorei(3315,en),B.pixelStorei(32877,jn),Y===0&&U.generateMipmaps&&B.generateMipmap(Re),ve.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Te.setTextureCube(w,0):w.isData3DTexture?Te.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Te.setTexture2DArray(w,0):Te.setTexture2D(w,0),ve.unbindTexture()},this.resetState=function(){S=0,v=0,M=null,ve.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class zg extends Lc{}zg.prototype.isWebGL1Renderer=!0;class Bg extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Za extends qn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+s,Math.PI);let c=0;const u=[],f=new I,d=new I,m=[],_=[],g=[],p=[];for(let h=0;h<=n;h++){const y=[],S=h/n;let v=0;h===0&&a===0?v=.5/t:h===n&&l===Math.PI&&(v=-.5/t);for(let M=0;M<=t;M++){const A=M/t;f.x=-e*Math.cos(i+A*r)*Math.sin(a+S*s),f.y=e*Math.cos(a+S*s),f.z=e*Math.sin(i+A*r)*Math.sin(a+S*s),_.push(f.x,f.y,f.z),d.copy(f).normalize(),g.push(d.x,d.y,d.z),p.push(A+v,1-S),y.push(c++)}u.push(y)}for(let h=0;h<n;h++)for(let y=0;y<t;y++){const S=u[h][y+1],v=u[h][y],M=u[h+1][y],A=u[h+1][y+1];(h!==0||a>0)&&m.push(S,v,A),(h!==n-1||l<Math.PI)&&m.push(v,M,A)}this.setIndex(m),this.setAttribute("position",new gn(_,3)),this.setAttribute("normal",new gn(g,3)),this.setAttribute("uv",new gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class kg extends Or{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gg extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ca=new at,Nl=new I,Fl=new I;class Vg{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qa,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Nl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nl),Fl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fl),t.updateMatrixWorld(),ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ca),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const zl=new at,mr=new I,ua=new I;class Hg extends Vg{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),mr.setFromMatrixPosition(e.matrixWorld),n.position.copy(mr),ua.copy(n.position),ua.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ua),n.updateMatrixWorld(),i.makeTranslation(-mr.x,-mr.y,-mr.z),zl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl)}}class Wg extends Gg{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Hg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Bl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wa);const kl={type:"change"},ha={type:"start"},Gl={type:"end"};class Xg extends Mi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:bi.ROTATE,TWO:bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Ve),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ve),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(kl),n.update(),r=i.NONE},this.update=function(){const L=new I,K=new gi().setFromUnitVectors(e.up,new I(0,1,0)),z=K.clone().invert(),le=new I,fe=new gi,pe=2*Math.PI;return function(){const de=n.object.position;L.copy(de).sub(n.target),L.applyQuaternion(K),s.setFromVector3(L),n.autoRotate&&r===i.NONE&&x(C()),n.enableDamping?(s.theta+=l.theta*n.dampingFactor,s.phi+=l.phi*n.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let be=n.minAzimuthAngle,Pe=n.maxAzimuthAngle;return isFinite(be)&&isFinite(Pe)&&(be<-Math.PI?be+=pe:be>Math.PI&&(be-=pe),Pe<-Math.PI?Pe+=pe:Pe>Math.PI&&(Pe-=pe),be<=Pe?s.theta=Math.max(be,Math.min(Pe,s.theta)):s.theta=s.theta>(be+Pe)/2?Math.max(be,s.theta):Math.min(Pe,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=c,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),L.setFromSpherical(s),L.applyQuaternion(z),de.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||le.distanceToSquared(n.object.position)>a||8*(1-fe.dot(n.object.quaternion))>a?(n.dispatchEvent(kl),le.copy(n.object.position),fe.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",b),n.domElement.removeEventListener("pointerdown",Te),n.domElement.removeEventListener("pointercancel",qe),n.domElement.removeEventListener("wheel",Ne),n.domElement.removeEventListener("pointermove",Ke),n.domElement.removeEventListener("pointerup",qe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ve),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,s=new Bl,l=new Bl;let c=1;const u=new I;let f=!1;const d=new Ce,m=new Ce,_=new Ce,g=new Ce,p=new Ce,h=new Ce,y=new Ce,S=new Ce,v=new Ce,M=[],A={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function P(){return Math.pow(.95,n.zoomSpeed)}function x(L){l.theta-=L}function T(L){l.phi-=L}const k=function(){const L=new I;return function(z,le){L.setFromMatrixColumn(le,0),L.multiplyScalar(-z),u.add(L)}}(),G=function(){const L=new I;return function(z,le){n.screenSpacePanning===!0?L.setFromMatrixColumn(le,1):(L.setFromMatrixColumn(le,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(z),u.add(L)}}(),D=function(){const L=new I;return function(z,le){const fe=n.domElement;if(n.object.isPerspectiveCamera){const pe=n.object.position;L.copy(pe).sub(n.target);let ue=L.length();ue*=Math.tan(n.object.fov/2*Math.PI/180),k(2*z*ue/fe.clientHeight,n.object.matrix),G(2*le*ue/fe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(z*(n.object.right-n.object.left)/n.object.zoom/fe.clientWidth,n.object.matrix),G(le*(n.object.top-n.object.bottom)/n.object.zoom/fe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(L){d.set(L.clientX,L.clientY)}function Z(L){y.set(L.clientX,L.clientY)}function W(L){g.set(L.clientX,L.clientY)}function te(L){m.set(L.clientX,L.clientY),_.subVectors(m,d).multiplyScalar(n.rotateSpeed);const K=n.domElement;x(2*Math.PI*_.x/K.clientHeight),T(2*Math.PI*_.y/K.clientHeight),d.copy(m),n.update()}function J(L){S.set(L.clientX,L.clientY),v.subVectors(S,y),v.y>0?O(P()):v.y<0&&F(P()),y.copy(S),n.update()}function _e(L){p.set(L.clientX,L.clientY),h.subVectors(p,g).multiplyScalar(n.panSpeed),D(h.x,h.y),g.copy(p),n.update()}function ie(L){L.deltaY<0?F(P()):L.deltaY>0&&O(P()),n.update()}function V(L){let K=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),K=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),K=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?x(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),K=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?x(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),K=!0;break}K&&(L.preventDefault(),n.update())}function j(){if(M.length===1)d.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),K=.5*(M[0].pageY+M[1].pageY);d.set(L,K)}}function re(){if(M.length===1)g.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),K=.5*(M[0].pageY+M[1].pageY);g.set(L,K)}}function ce(){const L=M[0].pageX-M[1].pageX,K=M[0].pageY-M[1].pageY,z=Math.sqrt(L*L+K*K);y.set(0,z)}function B(){n.enableZoom&&ce(),n.enablePan&&re()}function ye(){n.enableZoom&&ce(),n.enableRotate&&j()}function Me(L){if(M.length==1)m.set(L.pageX,L.pageY);else{const z=oe(L),le=.5*(L.pageX+z.x),fe=.5*(L.pageY+z.y);m.set(le,fe)}_.subVectors(m,d).multiplyScalar(n.rotateSpeed);const K=n.domElement;x(2*Math.PI*_.x/K.clientHeight),T(2*Math.PI*_.y/K.clientHeight),d.copy(m)}function se(L){if(M.length===1)p.set(L.pageX,L.pageY);else{const K=oe(L),z=.5*(L.pageX+K.x),le=.5*(L.pageY+K.y);p.set(z,le)}h.subVectors(p,g).multiplyScalar(n.panSpeed),D(h.x,h.y),g.copy(p)}function ve(L){const K=oe(L),z=L.pageX-K.x,le=L.pageY-K.y,fe=Math.sqrt(z*z+le*le);S.set(0,fe),v.set(0,Math.pow(S.y/y.y,n.zoomSpeed)),O(v.y),y.copy(S)}function Fe(L){n.enableZoom&&ve(L),n.enablePan&&se(L)}function me(L){n.enableZoom&&ve(L),n.enableRotate&&Me(L)}function Te(L){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",Ke),n.domElement.addEventListener("pointerup",qe)),H(L),L.pointerType==="touch"?pt(L):nt(L))}function Ke(L){n.enabled!==!1&&(L.pointerType==="touch"?E(L):Je(L))}function qe(L){Q(L),M.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",Ke),n.domElement.removeEventListener("pointerup",qe)),n.dispatchEvent(Gl),r=i.NONE}function nt(L){let K;switch(L.button){case 0:K=n.mouseButtons.LEFT;break;case 1:K=n.mouseButtons.MIDDLE;break;case 2:K=n.mouseButtons.RIGHT;break;default:K=-1}switch(K){case yi.DOLLY:if(n.enableZoom===!1)return;Z(L),r=i.DOLLY;break;case yi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;W(L),r=i.PAN}else{if(n.enableRotate===!1)return;$(L),r=i.ROTATE}break;case yi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;$(L),r=i.ROTATE}else{if(n.enablePan===!1)return;W(L),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ha)}function Je(L){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;te(L);break;case i.DOLLY:if(n.enableZoom===!1)return;J(L);break;case i.PAN:if(n.enablePan===!1)return;_e(L);break}}function Ne(L){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(L.preventDefault(),n.dispatchEvent(ha),ie(L),n.dispatchEvent(Gl))}function Ve(L){n.enabled===!1||n.enablePan===!1||V(L)}function pt(L){switch(ne(L),M.length){case 1:switch(n.touches.ONE){case bi.ROTATE:if(n.enableRotate===!1)return;j(),r=i.TOUCH_ROTATE;break;case bi.PAN:if(n.enablePan===!1)return;re(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case bi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;B(),r=i.TOUCH_DOLLY_PAN;break;case bi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ye(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ha)}function E(L){switch(ne(L),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Me(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;se(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Fe(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(L),n.update();break;default:r=i.NONE}}function b(L){n.enabled!==!1&&L.preventDefault()}function H(L){M.push(L)}function Q(L){delete A[L.pointerId];for(let K=0;K<M.length;K++)if(M[K].pointerId==L.pointerId){M.splice(K,1);return}}function ne(L){let K=A[L.pointerId];K===void 0&&(K=new Ce,A[L.pointerId]=K),K.set(L.pageX,L.pageY)}function oe(L){const K=L.pointerId===M[0].pointerId?M[1]:M[0];return A[K.pointerId]}n.domElement.addEventListener("contextmenu",b),n.domElement.addEventListener("pointerdown",Te),n.domElement.addEventListener("pointercancel",qe),n.domElement.addEventListener("wheel",Ne,{passive:!1}),this.update()}}function Tn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Rc(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Vt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},tr={duration:.5,overwrite:!1,delay:0},Ka,vt,st,Kt=1e8,Ge=1/Kt,Pa=Math.PI*2,qg=Pa/4,Yg=0,Dc=Math.sqrt,jg=Math.cos,Zg=Math.sin,ft=function(e){return typeof e=="string"},$e=function(e){return typeof e=="function"},Ln=function(e){return typeof e=="number"},$a=function(e){return typeof e>"u"},xn=function(e){return typeof e=="object"},Pt=function(e){return e!==!1},Ja=function(){return typeof window<"u"},cs=function(e){return $e(e)||ft(e)},Ic=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Mt=Array.isArray,La=/(?:-?\.?\d|\.)+/gi,Uc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Hi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,fa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Oc=/[+-]=-?[.\d]+/,Nc=/[^,'"\[\]\s]+/gi,Kg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,je,Yt,Ra,Qa,Ht={},ms={},Fc,zc=function(e){return(ms=xi(e,Ht))&&Dt},eo=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},gs=function(e,t){return!t&&console.warn(e)},Bc=function(e,t){return e&&(Ht[e]=t)&&ms&&(ms[e]=t)||Ht},Ar=function(){return 0},$g={suppressEvents:!0,isStart:!0,kill:!1},hs={suppressEvents:!0,kill:!1},Jg={suppressEvents:!0},to={},Gn=[],Da={},kc,zt={},da={},Vl=30,fs=[],no="",io=function(e){var t=e[0],n,i;if(xn(t)||$e(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=fs.length;i--&&!fs[i].targetTest(t););n=fs[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new uu(e[i],n)))||e.splice(i,1);return e},ui=function(e){return e._gsap||io($t(e))[0]._gsap},Gc=function(e,t,n){return(n=e[t])&&$e(n)?e[t]():$a(n)&&e.getAttribute&&e.getAttribute(t)||n},Lt=function(e,t){return(e=e.split(",")).forEach(t)||e},tt=function(e){return Math.round(e*1e5)/1e5||0},dt=function(e){return Math.round(e*1e7)/1e7||0},ji=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Qg=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},_s=function(){var e=Gn.length,t=Gn.slice(0),n,i;for(Da={},Gn.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Vc=function(e,t,n,i){Gn.length&&!vt&&_s(),e.render(t,n,i||vt&&t<0&&(e._initted||e._startAt)),Gn.length&&!vt&&_s()},Hc=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Nc).length<2?t:ft(e)?e.trim():e},Wc=function(e){return e},Qt=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},e_=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},xi=function(e,t){for(var n in t)e[n]=t[n];return e},Hl=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=xn(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},xs=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Sr=function(e){var t=e.parent||je,n=e.keyframes?e_(Mt(e.keyframes)):Qt;if(Pt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},t_=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Xc=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],s;if(r)for(s=t[r];a&&a[r]>s;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Es=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Wn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},hi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},n_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ia=function(e,t,n,i){return e._startAt&&(vt?e._startAt.revert(hs):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},i_=function o(e){return!e||e._ts&&o(e.parent)},Wl=function(e){return e._repeat?nr(e._tTime,e=e.duration()+e._rDelay)*e:0},nr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},vs=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},As=function(e){return e._end=dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ge)||0))},Cs=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=dt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),As(e),n._dirty||hi(n,e)),e},qc=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=vs(e.rawTime(),t),(!t._dur||Fr(0,t.totalDuration(),n)-t._tTime>Ge)&&t.render(n,!0)),hi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ge}},dn=function(e,t,n,i){return t.parent&&Wn(t),t._start=dt((Ln(n)?n:n||e!==je?qt(e,n,t):e._time)+t._delay),t._end=dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Xc(e,t,"_first","_last",e._sort?"_start":0),Ua(t)||(e._recent=t),i||qc(e,t),e._ts<0&&Cs(e,e._tTime),e},Yc=function(e,t){return(Ht.ScrollTrigger||eo("scrollTrigger",t))&&Ht.ScrollTrigger.create(t,e)},jc=function(e,t,n,i,r){if(so(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!vt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&kc!==kt.frame)return Gn.push(e),e._lazy=[r,i],1},r_=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},Ua=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},s_=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&r_(e)&&!(!e._initted&&Ua(e))||(e._ts<0||e._dp._ts<0)&&!Ua(e))?0:1,s=e._rDelay,l=0,c,u,f;if(s&&e._repeat&&(l=Fr(0,e._tDur,t),u=nr(l,s),e._yoyo&&u&1&&(a=1-a),u!==nr(e._tTime,s)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||vt||i||e._zTime===Ge||!t&&e._zTime){if(!e._initted&&jc(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Ge:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Ia(e,t,n,!0),e._onUpdate&&!n&&Jt(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Jt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Wn(e,1),!n&&!vt&&(Jt(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},a_=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ir=function(e,t,n,i){var r=e._repeat,a=dt(t)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:dt(a*(r+1)+e._rDelay*r):a,s>0&&!i&&Cs(e,e._tTime=e._tDur*s),e.parent&&As(e),n||hi(e.parent,e),e},Xl=function(e){return e instanceof Et?hi(e):ir(e,e._dur)},o_={_start:0,endTime:Ar,totalDuration:Ar},qt=function o(e,t,n){var i=e.labels,r=e._recent||o_,a=e.duration()>=Kt?r.endTime(!1):e._dur,s,l,c;return ft(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(s<0?r:n).totalDuration()/100:1)):s<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),c&&n&&(l=l/100*(Mt(n)?n[0]:n).totalDuration()),s>1?o(e,t.substr(0,s-1),n)+l:a+l)):t==null?a:+t},yr=function(e,t,n){var i=Ln(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],s,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(s=a,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=Pt(l.vars.inherit)&&l.parent;a.immediateRender=Pt(s.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new ot(t[0],a,t[r+1])},Yn=function(e,t){return e||e===0?t(e):t},Fr=function(e,t,n){return n<e?e:n>t?t:n},xt=function(e,t){return!ft(e)||!(t=Kg.exec(e))?"":t[1]},l_=function(e,t,n){return Yn(n,function(i){return Fr(e,t,i)})},Oa=[].slice,Zc=function(e,t){return e&&xn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&xn(e[0]))&&!e.nodeType&&e!==Yt},c_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return ft(i)&&!t||Zc(i,1)?(r=n).push.apply(r,$t(i)):n.push(i)})||n},$t=function(e,t,n){return st&&!t&&st.selector?st.selector(e):ft(e)&&!n&&(Ra||!rr())?Oa.call((t||Qa).querySelectorAll(e),0):Mt(e)?c_(e,n):Zc(e)?Oa.call(e,0):e?[e]:[]},Na=function(e){return e=$t(e)[0]||gs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return $t(t,n.querySelectorAll?n:n===e?gs("Invalid scope")||Qa.createElement("div"):e)}},Kc=function(e){return e.sort(function(){return .5-Math.random()})},$c=function(e){if($e(e))return e;var t=xn(e)?e:{each:e},n=fi(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},s=i>0&&i<1,l=isNaN(i)||s,c=t.axis,u=i,f=i;return ft(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(u=i[0],f=i[1]),function(d,m,_){var g=(_||t).length,p=a[g],h,y,S,v,M,A,C,P,x;if(!p){if(x=t.grid==="auto"?0:(t.grid||[1,Kt])[1],!x){for(C=-Kt;C<(C=_[x++].getBoundingClientRect().left)&&x<g;);x--}for(p=a[g]=[],h=l?Math.min(x,g)*u-.5:i%x,y=x===Kt?0:l?g*f/x-.5:i/x|0,C=0,P=Kt,A=0;A<g;A++)S=A%x-h,v=y-(A/x|0),p[A]=M=c?Math.abs(c==="y"?v:S):Dc(S*S+v*v),M>C&&(C=M),M<P&&(P=M);i==="random"&&Kc(p),p.max=C-P,p.min=P,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(x>g?g-1:c?c==="y"?g/x:x:Math.max(x,g/x))||0)*(i==="edges"?-1:1),p.b=g<0?r-g:r,p.u=xt(t.amount||t.each)||0,n=n&&g<0?ou(n):n}return g=(p[d]-p.min)/p.max||0,dt(p.b+(n?n(g):g)*p.v)+p.u}},Fa=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=dt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ln(n)?0:xt(n))}},Jc=function(e,t){var n=Mt(e),i,r;return!n&&xn(e)&&(i=n=e.radius||Kt,e.values?(e=$t(e.values),(r=!Ln(e[0]))&&(i*=i)):e=Fa(e.increment)),Yn(t,n?$e(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Kt,u=0,f=e.length,d,m;f--;)r?(d=e[f].x-s,m=e[f].y-l,d=d*d+m*m):d=Math.abs(e[f]-s),d<c&&(c=d,u=f);return u=!i||c<=i?e[u]:a,r||u===a||Ln(a)?u:u+xt(a)}:Fa(e))},Qc=function(e,t,n,i){return Yn(Mt(e)?!t:n===!0?!!(n=0):!i,function(){return Mt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},u_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},h_=function(e,t){return function(n){return e(parseFloat(n))+(t||xt(n))}},f_=function(e,t,n){return tu(e,t,0,1,n)},eu=function(e,t,n){return Yn(n,function(i){return e[~~t(i)]})},d_=function o(e,t,n){var i=t-e;return Mt(e)?eu(e,o(0,e.length),t):Yn(n,function(r){return(i+(r-e)%i)%i+e})},p_=function o(e,t,n){var i=t-e,r=i*2;return Mt(e)?eu(e,o(0,e.length-1),t):Yn(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},Cr=function(e){for(var t=0,n="",i,r,a,s;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),s=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(s?Nc:La),n+=e.substr(t,i-t)+Qc(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},tu=function(e,t,n,i,r){var a=t-e,s=i-n;return Yn(r,function(l){return n+((l-e)/a*s||0)})},m_=function o(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var a=ft(e),s={},l,c,u,f,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Mt(e)&&!Mt(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(o(e[c-1],e[c]));f--,r=function(_){_*=f;var g=Math.min(d,~~_);return u[g](_-g)},n=t}else i||(e=xi(Mt(e)?[]:{},e));if(!u){for(l in t)ro.call(s,e,l,"get",t[l]);r=function(_){return lo(_,s)||(a?e.p:e)}}}return Yn(n,r)},ql=function(e,t,n){var i=e.labels,r=Kt,a,s,l;for(a in i)s=i[a]-t,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=a,r=s);return l},Jt=function(e,t,n){var i=e.vars,r=i[t],a=st,s=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Gn.length&&_s(),s&&(st=s),u=l?r.apply(c,l):r.call(c),st=a,u},vr=function(e){return Wn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!vt),e.progress()<1&&Jt(e,"onInterrupt"),e},Wi,nu=[],iu=function(e){if(!Ja()){nu.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=$e(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Ar,render:lo,add:ro,kill:R_,modifier:L_,rawVars:0},a={targetTest:0,get:0,getSetter:oo,aliases:{},register:0};if(rr(),e!==i){if(zt[t])return;Qt(i,Qt(xs(e,r),a)),xi(i.prototype,xi(r,xs(e,a))),zt[i.prop=t]=i,e.targetTest&&(fs.push(i),to[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Bc(t,i),e.register&&e.register(Dt,i,Rt)},ke=255,Mr={aqua:[0,ke,ke],lime:[0,ke,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ke],navy:[0,0,128],white:[ke,ke,ke],olive:[128,128,0],yellow:[ke,ke,0],orange:[ke,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ke,0,0],pink:[ke,192,203],cyan:[0,ke,ke],transparent:[ke,ke,ke,0]},pa=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ke+.5|0},ru=function(e,t,n){var i=e?Ln(e)?[e>>16,e>>8&ke,e&ke]:0:Mr.black,r,a,s,l,c,u,f,d,m,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Mr[e])i=Mr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),s=e.charAt(3),e="#"+r+r+a+a+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ke,i&ke,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ke,e&ke]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(La),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=pa(l+1/3,r,a),i[1]=pa(l,r,a),i[2]=pa(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Uc),n&&i.length<4&&(i[3]=1),i}else i=e.match(La)||Mr.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/ke,a=i[1]/ke,s=i[2]/ke,f=Math.max(r,a,s),d=Math.min(r,a,s),u=(f+d)/2,f===d?l=c=0:(m=f-d,c=u>.5?m/(2-f-d):m/(f+d),l=f===r?(a-s)/m+(a<s?6:0):f===a?(s-r)/m+2:(r-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},su=function(e){var t=[],n=[],i=-1;return e.split(Vn).forEach(function(r){var a=r.match(Hi)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Yl=function(e,t,n){var i="",r=(e+i).match(Vn),a=t?"hsla(":"rgba(",s=0,l,c,u,f;if(!r)return e;if(r=r.map(function(d){return(d=ru(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=su(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Vn,"1").split(Hi),f=c.length-1;s<f;s++)i+=c[s]+(~l.indexOf(s)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Vn),f=c.length-1;s<f;s++)i+=c[s]+r[s];return i+c[f]},Vn=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Mr)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),g_=/hsl[a]?\(/,au=function(e){var t=e.join(" "),n;if(Vn.lastIndex=0,Vn.test(t))return n=g_.test(t),e[1]=Yl(e[1],n),e[0]=Yl(e[0],n,su(e[1])),!0},Pr,kt=function(){var o=Date.now,e=500,t=33,n=o(),i=n,r=1e3/240,a=r,s=[],l,c,u,f,d,m,_=function g(p){var h=o()-i,y=p===!0,S,v,M,A;if(h>e&&(n+=h-t),i+=h,M=i-n,S=M-a,(S>0||y)&&(A=++f.frame,d=M-f.time*1e3,f.time=M=M/1e3,a+=S+(S>=r?4:r-S),v=1),y||(l=c(g)),v)for(m=0;m<s.length;m++)s[m](M,d,A,p)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Fc&&(!Ra&&Ja()&&(Yt=Ra=window,Qa=Yt.document||{},Ht.gsap=Dt,(Yt.gsapVersions||(Yt.gsapVersions=[])).push(Dt.version),zc(ms||Yt.GreenSockGlobals||!Yt.gsap&&Yt||{}),u=Yt.requestAnimationFrame,nu.forEach(iu)),l&&f.sleep(),c=u||function(p){return setTimeout(p,a-f.time*1e3+1|0)},Pr=1,_(2))},sleep:function(){(u?Yt.cancelAnimationFrame:clearTimeout)(l),Pr=0,c=Ar},lagSmoothing:function(p,h){e=p||1/0,t=Math.min(h||33,e)},fps:function(p){r=1e3/(p||240),a=f.time*1e3+r},add:function(p,h,y){var S=h?function(v,M,A,C){p(v,M,A,C),f.remove(S)}:p;return f.remove(p),s[y?"unshift":"push"](S),rr(),S},remove:function(p,h){~(h=s.indexOf(p))&&s.splice(h,1)&&m>=h&&m--},_listeners:s},f}(),rr=function(){return!Pr&&kt.wake()},Ue={},__=/^[\d.\-M][\d.\-,\s]/,x_=/["']/g,v_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,s,l,c;r<a;r++)l=n[r],s=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),t[i]=isNaN(c)?c.replace(x_,"").trim():+c,i=l.substr(s+1).trim();return t},M_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},S_=function(e){var t=(e+"").split("("),n=Ue[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[v_(t[1])]:M_(e).split(",").map(Hc)):Ue._CE&&__.test(e)?Ue._CE("",e):n},ou=function(e){return function(t){return 1-e(1-t)}},lu=function o(e,t){for(var n=e._first,i;n;)n instanceof Et?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},fi=function(e,t){return e&&($e(e)?e:Ue[e]||S_(e))||t},Si=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return Lt(e,function(s){Ue[s]=Ht[s]=r,Ue[a=s.toLowerCase()]=n;for(var l in r)Ue[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ue[s+"."+l]=r[l]}),r},cu=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ma=function o(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/Pa*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*Zg((u-a)*r)+1},l=e==="out"?s:e==="in"?function(c){return 1-s(1-c)}:cu(s);return r=Pa/r,l.config=function(c,u){return o(e,c,u)},l},ga=function o(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:cu(n);return i.config=function(r){return o(e,r)},i};Lt("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;Si(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ue.Linear.easeNone=Ue.none=Ue.Linear.easeIn;Si("Elastic",ma("in"),ma("out"),ma());(function(o,e){var t=1/e,n=2*t,i=2.5*t,r=function(s){return s<t?o*s*s:s<n?o*Math.pow(s-1.5/e,2)+.75:s<i?o*(s-=2.25/e)*s+.9375:o*Math.pow(s-2.625/e,2)+.984375};Si("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Si("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});Si("Circ",function(o){return-(Dc(1-o*o)-1)});Si("Sine",function(o){return o===1?1:-jg(o*qg)+1});Si("Back",ga("in"),ga("out"),ga());Ue.SteppedEase=Ue.steps=Ht.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-Ge;return function(s){return((i*Fr(0,a,s)|0)+r)*n}}};tr.ease=Ue["quad.out"];Lt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return no+=o+","+o+"Params,"});var uu=function(e,t){this.id=Yg++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Gc,this.set=t?t.getSetter:oo},sr=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ir(this,+t.duration,1,1),this.data=t.data,st&&(this._ctx=st,st.data.push(this)),Pr||kt.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ir(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(rr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Cs(this,n),!r._dp||r.parent||qc(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&dn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ge||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Vc(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Wl(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Wl(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?nr(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Ge?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?vs(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ge?0:this._rts,this.totalTime(Fr(-Math.abs(this._delay),this._tDur,i),!0),As(this),n_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(rr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ge&&(this._tTime-=Ge)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&dn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Pt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?vs(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Jg);var i=vt;return vt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),vt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Xl(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Xl(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(qt(this,n),Pt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Pt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ge:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ge,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ge)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=$e(n)?n:Wc,s=function(){var c=i.then;i.then=null,$e(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},e.kill=function(){vr(this)},o}();Qt(sr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ge,_prom:0,_ps:!1,_rts:1});var Et=function(o){Rc(e,o);function e(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Pt(n.sortChildren),je&&dn(n.parent||je,Tn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Yc(Tn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return yr(0,arguments,this),this},t.from=function(i,r,a){return yr(1,arguments,this),this},t.fromTo=function(i,r,a,s){return yr(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Sr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new ot(i,r,qt(this,a),1),this},t.call=function(i,r,a){return dn(this,ot.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,s,l,c,u){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new ot(i,a,qt(this,l)),this},t.staggerFrom=function(i,r,a,s,l,c,u){return a.runBackwards=1,Sr(a).immediateRender=Pt(a.immediateRender),this.staggerTo(i,r,a,s,l,c,u)},t.staggerFromTo=function(i,r,a,s,l,c,u,f){return s.startAt=a,Sr(s).immediateRender=Pt(s.immediateRender),this.staggerTo(i,r,s,l,c,u,f)},t.render=function(i,r,a){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:dt(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,m,_,g,p,h,y,S,v,M,A,C;if(this!==je&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(s!==this._time&&c&&(u+=this._time-s,i+=this._time-s),d=u,v=this._start,S=this._ts,h=!S,f&&(c||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(d=dt(u%p),u===l?(g=this._repeat,d=c):(g=~~(u/p),g&&g===u/p&&(d=c,g--),d>c&&(d=c)),M=nr(this._tTime,p),!s&&this._tTime&&M!==g&&this._tTime-M*p-this._dur<=0&&(M=g),A&&g&1&&(d=c-d,C=1),g!==M&&!this._lock){var P=A&&M&1,x=P===(A&&g&1);if(g<M&&(P=!P),s=P?0:c,this._lock=1,this.render(s||(C?0:dt(g*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Jt(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),s&&s!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,s=P?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!h)return this;lu(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=a_(this,dt(s),dt(d)),y&&(u-=d-(d=y._start))),this._tTime=u,this._time=d,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&d&&!r&&!g&&(Jt(this,"onStart"),this._tTime!==u))return this;if(d>=s&&i>=0)for(m=this._first;m;){if(_=m._next,(m._act||d>=m._start)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,r,a),d!==this._time||!this._ts&&!h){y=0,_&&(u+=this._zTime=-Ge);break}}m=_}else{m=this._last;for(var T=i<0?i:d;m;){if(_=m._prev,(m._act||T<=m._end)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(T-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(T-m._start)*m._ts,r,a||vt&&(m._initted||m._startAt)),d!==this._time||!this._ts&&!h){y=0,_&&(u+=this._zTime=T?-Ge:Ge);break}}m=_}}if(y&&!r&&(this.pause(),y.render(d>=s?0:-Ge)._zTime=d>=s?1:-1,this._ts))return this._start=v,As(this),this.render(i,r,a);this._onUpdate&&!r&&Jt(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&s)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Wn(this,1),!r&&!(i<0&&!s)&&(u||s||!l)&&(Jt(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Ln(r)||(r=qt(this,r,i)),!(i instanceof sr)){if(Mt(i))return i.forEach(function(s){return a.add(s,r)}),this;if(ft(i))return this.addLabel(i,r);if($e(i))i=ot.delayedCall(0,i);else return this}return this!==i?dn(this,i,r):this},t.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-Kt);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof ot?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return ft(i)?this.removeLabel(i):$e(i)?this.killTweensOf(i):(Es(this,i),i===this._recent&&(this._recent=this._last),hi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=dt(kt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=qt(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var s=ot.delayedCall(0,r||Ar,a);return s.data="isPause",this._hasPause=1,dn(this,s,qt(this,i))},t.removePause=function(i){var r=this._first;for(i=qt(this,i);r;)r._start===i&&r.data==="isPause"&&Wn(r),r=r._next},t.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),l=s.length;l--;)Fn!==s[l]&&s[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],s=$t(i),l=this._first,c=Ln(r),u;l;)l instanceof ot?Qg(l._targets,s)&&(c?(!Fn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(s,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,s=qt(a,i),l=r,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,m,_=ot.to(a,Qt({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ge,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&ir(_,p,0,1).render(_._time,!0,!0),m=1}u&&u.apply(_,f||[])}},r));return d?_.render(0):_},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,Qt({startAt:{time:qt(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ql(this,qt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ql(this,qt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ge)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var s=this._first,l=this.labels,c;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return hi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),hi(this)},t.totalDuration=function(i){var r=0,a=this,s=a._last,l=Kt,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>l&&a._sort&&s._ts&&!a._lock?(a._lock=1,dn(a,s,u-s._delay,1)._lock=0):l=u,u<0&&s._ts&&(r-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;ir(a,a===je&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(je._ts&&(Vc(je,vs(i,je)),kc=kt.frame),kt.frame>=Vl){Vl+=Vt.autoSleep||120;var r=je._first;if((!r||!r._ts)&&Vt.autoSleep&&kt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||kt.sleep()}}},e}(sr);Qt(Et.prototype,{_lock:0,_hasPause:0,_forcing:0});var y_=function(e,t,n,i,r,a,s){var l=new Rt(this._pt,e,t,0,1,gu,null,r),c=0,u=0,f,d,m,_,g,p,h,y;for(l.b=n,l.e=i,n+="",i+="",(h=~i.indexOf("random("))&&(i=Cr(i)),a&&(y=[n,i],a(y,e,t),n=y[0],i=y[1]),d=n.match(fa)||[];f=fa.exec(i);)_=f[0],g=i.substring(c,f.index),m?m=(m+1)%5:g.substr(-5)==="rgba("&&(m=1),_!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?ji(p,_)-p:parseFloat(_)-p,m:m&&m<4?Math.round:0},c=fa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=s,(Oc.test(i)||h)&&(l.e=0),this._pt=l,l},ro=function(e,t,n,i,r,a,s,l,c,u){$e(i)&&(i=i(r||0,e,a));var f=e[t],d=n!=="get"?n:$e(f)?c?e[t.indexOf("set")||!$e(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,m=$e(f)?c?A_:pu:ao,_;if(ft(i)&&(~i.indexOf("random(")&&(i=Cr(i)),i.charAt(1)==="="&&(_=ji(d,i)+(xt(d)||0),(_||_===0)&&(i=_))),!u||d!==i||za)return!isNaN(d*i)&&i!==""?(_=new Rt(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?P_:mu,0,m),c&&(_.fp=c),s&&_.modifier(s,this,e),this._pt=_):(!f&&!(t in e)&&eo(t,i),y_.call(this,e,t,d,i,m,l||Vt.stringFilter,c))},b_=function(e,t,n,i,r){if($e(e)&&(e=br(e,r,t,n,i)),!xn(e)||e.style&&e.nodeType||Mt(e)||Ic(e))return ft(e)?br(e,r,t,n,i):e;var a={},s;for(s in e)a[s]=br(e[s],r,t,n,i);return a},hu=function(e,t,n,i,r,a){var s,l,c,u;if(zt[e]&&(s=new zt[e]).init(r,s.rawVars?t[e]:b_(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Rt(n._pt,r,e,0,1,s.render,s,0,s.priority),n!==Wi))for(c=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)c[s._props[u]]=l;return s},Fn,za,so=function o(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,s=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,f=i.callbackScope,d=i.runBackwards,m=i.yoyoEase,_=i.keyframes,g=i.autoRevert,p=e._dur,h=e._startAt,y=e._targets,S=e.parent,v=S&&S.data==="nested"?S.vars.targets:y,M=e._overwrite==="auto"&&!Ka,A=e.timeline,C,P,x,T,k,G,D,O,F,$,Z,W,te;if(A&&(!_||!r)&&(r="none"),e._ease=fi(r,tr.ease),e._yEase=m?ou(fi(m===!0?r:m,tr.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!A&&!!i.runBackwards,!A||_&&!i.stagger){if(O=y[0]?ui(y[0]).harness:0,W=O&&i[O.prop],C=xs(i,to),h&&(h._zTime<0&&h.progress(1),t<0&&d&&s&&!g?h.render(-1,!0):h.revert(d&&p?hs:$g),h._lazy=0),a){if(Wn(e._startAt=ot.set(y,Qt({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!h&&Pt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vt||!s&&!g)&&e._startAt.revert(hs),s&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&p&&!h){if(t&&(s=!1),x=Qt({overwrite:!1,data:"isFromStart",lazy:s&&!h&&Pt(l),immediateRender:s,stagger:0,parent:S},C),W&&(x[O.prop]=W),Wn(e._startAt=ot.set(y,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vt?e._startAt.revert(hs):e._startAt.render(-1,!0)),e._zTime=t,!s)o(e._startAt,Ge,Ge);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Pt(l)||l&&!p,P=0;P<y.length;P++){if(k=y[P],D=k._gsap||io(y)[P]._gsap,e._ptLookup[P]=$={},Da[D.id]&&Gn.length&&_s(),Z=v===y?P:v.indexOf(k),O&&(F=new O).init(k,W||C,e,Z,v)!==!1&&(e._pt=T=new Rt(e._pt,k,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(J){$[J]=T}),F.priority&&(G=1)),!O||W)for(x in C)zt[x]&&(F=hu(x,C,e,Z,k,v))?F.priority&&(G=1):$[x]=T=ro.call(e,k,x,"get",C[x],Z,v,0,i.stringFilter);e._op&&e._op[P]&&e.kill(k,e._op[P]),M&&e._pt&&(Fn=e,je.killTweensOf(k,$,e.globalTime(t)),te=!e.parent,Fn=0),e._pt&&l&&(Da[D.id]=1)}G&&_u(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!te,_&&t<=0&&A.render(Kt,!0,!0)},w_=function(e,t,n,i,r,a,s){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,d;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(c=f[d][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return za=1,e.vars[t]="+=0",so(e,s),za=0,1;l.push(c)}for(d=l.length;d--;)u=l[d],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=tt(n)+xt(u.e)),u.b&&(u.b=c.s+xt(u.b))},T_=function(e,t){var n=e[0]?ui(e[0]).harness:0,i=n&&n.aliases,r,a,s,l;if(!i)return t;r=xi({},t);for(a in i)if(a in r)for(l=i[a].split(","),s=l.length;s--;)r[l[s]]=r[a];return r},E_=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,s;if(Mt(t))s=n[e]||(n[e]=[]),t.forEach(function(l,c){return s.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(e),v:t[a],e:r})},br=function(e,t,n,i,r){return $e(e)?e.call(t,n,i,r):ft(e)&&~e.indexOf("random(")?Cr(e):e},fu=no+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",du={};Lt(fu+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return du[o]=1});var ot=function(o){Rc(e,o);function e(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:Sr(i))||this;var l=s.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,m=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,h=l.yoyoEase,y=i.parent||je,S=(Mt(n)||Ic(n)?Ln(n[0]):"length"in i)?[n]:$t(n),v,M,A,C,P,x,T,k;if(s._targets=S.length?io(S):gs("GSAP target "+n+" not found. https://greensock.com",!Vt.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,_||d||cs(c)||cs(u)){if(i=s.vars,v=s.timeline=new Et({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:S}),v.kill(),v.parent=v._dp=Tn(s),v._start=0,d||cs(c)||cs(u)){if(C=S.length,T=d&&$c(d),xn(d))for(P in d)~fu.indexOf(P)&&(k||(k={}),k[P]=d[P]);for(M=0;M<C;M++)A=xs(i,du),A.stagger=0,h&&(A.yoyoEase=h),k&&xi(A,k),x=S[M],A.duration=+br(c,Tn(s),M,x,S),A.delay=(+br(u,Tn(s),M,x,S)||0)-s._delay,!d&&C===1&&A.delay&&(s._delay=u=A.delay,s._start+=u,A.delay=0),v.to(x,A,T?T(M,x,S):0),v._ease=Ue.none;v.duration()?c=u=0:s.timeline=0}else if(_){Sr(Qt(v.vars.defaults,{ease:"none"})),v._ease=fi(_.ease||i.ease||"none");var G=0,D,O,F;if(Mt(_))_.forEach(function($){return v.to(S,$,">")}),v.duration();else{A={};for(P in _)P==="ease"||P==="easeEach"||E_(P,_[P],A,_.easeEach);for(P in A)for(D=A[P].sort(function($,Z){return $.t-Z.t}),G=0,M=0;M<D.length;M++)O=D[M],F={ease:O.e,duration:(O.t-(M?D[M-1].t:0))/100*c},F[P]=O.v,v.to(S,F,G),G+=F.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||s.duration(c=v.duration())}else s.timeline=0;return m===!0&&!Ka&&(Fn=Tn(s),je.killTweensOf(S),Fn=0),dn(y,Tn(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(f||!c&&!_&&s._start===dt(y._time)&&Pt(f)&&i_(Tn(s))&&y.data!=="nested")&&(s._tTime=-Ge,s.render(Math.max(0,-u)||0)),p&&Yc(Tn(s),p),s}var t=e.prototype;return t.render=function(i,r,a){var s=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Ge&&!u?l:i<Ge?0:i,d,m,_,g,p,h,y,S,v;if(!c)s_(this,i,r,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=f,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,a);if(d=dt(f%g),f===l?(_=this._repeat,d=c):(_=~~(f/g),_&&_===f/g&&(d=c,_--),d>c&&(d=c)),h=this._yoyo&&_&1,h&&(v=this._yEase,d=c-d),p=nr(this._tTime,g),d===s&&!a&&this._initted)return this._tTime=f,this;_!==p&&(S&&this._yEase&&lu(S,h),this.vars.repeatRefresh&&!h&&!this._lock&&(this._lock=a=1,this.render(dt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(jc(this,u?i:d,a,r,f))return this._tTime=0,this;if(s!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(d/c),this._from&&(this.ratio=y=1-y),d&&!s&&!r&&!_&&(Jt(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(y,m.d),m=m._next;S&&S.render(i<0?i:!d&&h?-Ge:S._dur*S._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Ia(this,i,r,a),Jt(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&Jt(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Ia(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Wn(this,1),!r&&!(u&&!s)&&(f||s||h)&&(Jt(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,s){Pr||kt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||so(this,l),c=this._ease(l/this._dur),w_(this,i,r,a,s,c,l)?this.resetTo(i,r,a,s):(Cs(this,0),this.parent||Xc(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?vr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Fn&&Fn.vars.overwrite!==!0)._first||vr(this),this.parent&&a!==this.timeline.totalDuration()&&ir(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,l=i?$t(i):s,c=this._ptLookup,u=this._pt,f,d,m,_,g,p,h;if((!r||r==="all")&&t_(s,l))return r==="all"&&(this._pt=0),vr(this);for(f=this._op=this._op||[],r!=="all"&&(ft(r)&&(g={},Lt(r,function(y){return g[y]=1}),r=g),r=T_(s,r)),h=s.length;h--;)if(~l.indexOf(s[h])){d=c[h],r==="all"?(f[h]=r,_=d,m={}):(m=f[h]=f[h]||{},_=r);for(g in _)p=d&&d[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Es(this,p,"_pt"),delete d[g]),m!=="all"&&(m[g]=1)}return this._initted&&!this._pt&&u&&vr(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return yr(1,arguments)},e.delayedCall=function(i,r,a,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(i,r,a){return yr(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return je.killTweensOf(i,r,a)},e}(sr);Qt(ot.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Lt("staggerTo,staggerFrom,staggerFromTo",function(o){ot[o]=function(){var e=new Et,t=Oa.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var ao=function(e,t,n){return e[t]=n},pu=function(e,t,n){return e[t](n)},A_=function(e,t,n,i){return e[t](i.fp,n)},C_=function(e,t,n){return e.setAttribute(t,n)},oo=function(e,t){return $e(e[t])?pu:$a(e[t])&&e.setAttribute?C_:ao},mu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},P_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},gu=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},lo=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},L_=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},R_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Es(this,t,"_pt"):t.dep||(n=1),t=i;return!n},D_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},_u=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Rt=function(){function o(t,n,i,r,a,s,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||mu,this.d=l||this,this.set=c||ao,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=D_,this.m=n,this.mt=r,this.tween=i},o}();Lt(no+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return to[o]=1});Ht.TweenMax=Ht.TweenLite=ot;Ht.TimelineLite=Ht.TimelineMax=Et;je=new Et({sortChildren:!1,defaults:tr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Vt.stringFilter=au;var ar=[],ds={},I_=[],jl=0,_a=function(e){return(ds[e]||I_).map(function(t){return t()})},Ba=function(){var e=Date.now(),t=[];e-jl>2&&(_a("matchMediaInit"),ar.forEach(function(n){var i=n.queries,r=n.conditions,a,s,l,c;for(s in i)a=Yt.matchMedia(i[s]).matches,a&&(l=1),a!==r[s]&&(r[s]=a,c=1);c&&(n.revert(),l&&t.push(n))}),_a("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),jl=e,_a("matchMedia"))},xu=function(){function o(t,n){this.selector=n&&Na(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,r){$e(n)&&(r=i,i=n,n=$e);var a=this,s=function(){var c=st,u=a.selector,f;return c&&c!==a&&c.data.push(a),r&&(a.selector=Na(r)),st=a,f=i.apply(a,arguments),$e(f)&&a._r.push(f),st=c,a.selector=u,a.isReverted=!1,f};return a.last=s,n===$e?s(a):n?a[n]=s:s},e.ignore=function(n){var i=st;st=null,n(this),st=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof ot&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof sr)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var s=ar.indexOf(this);~s&&ar.splice(s,1)}},e.revert=function(n){this.kill(n||{})},o}(),U_=function(){function o(t){this.contexts=[],this.scope=t}var e=o.prototype;return e.add=function(n,i,r){xn(n)||(n={matches:n});var a=new xu(0,r||this.scope),s=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Yt.matchMedia(n[c]),l&&(ar.indexOf(a)<0&&ar.push(a),(s[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ba):l.addEventListener("change",Ba)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),Ms={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return iu(i)})},timeline:function(e){return new Et(e)},getTweensOf:function(e,t){return je.getTweensOf(e,t)},getProperty:function(e,t,n,i){ft(e)&&(e=$t(e)[0]);var r=ui(e||{}).get,a=n?Wc:Hc;return n==="native"&&(n=""),e&&(t?a((zt[t]&&zt[t].get||r)(e,t,n,i)):function(s,l,c){return a((zt[s]&&zt[s].get||r)(e,s,l,c))})},quickSetter:function(e,t,n){if(e=$t(e),e.length>1){var i=e.map(function(u){return Dt.quickSetter(u,t,n)}),r=i.length;return function(u){for(var f=r;f--;)i[f](u)}}e=e[0]||{};var a=zt[t],s=ui(e),l=s.harness&&(s.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;Wi._pt=0,f.init(e,n?u+n:u,Wi,0,[e]),f.render(1,f),Wi._pt&&lo(1,Wi)}:s.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,s,1)}},quickTo:function(e,t,n){var i,r=Dt.to(e,xi((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return je.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=fi(e.ease,tr.ease)),Hl(tr,e||{})},config:function(e){return Hl(Vt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!zt[s]&&!Ht[s]&&gs(t+" effect requires "+s+" plugin.")}),da[t]=function(s,l,c){return n($t(s),Qt(l||{},r),c)},a&&(Et.prototype[t]=function(s,l,c){return this.add(da[t](s,xn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ue[e]=fi(t)},parseEase:function(e,t){return arguments.length?fi(e,t):Ue},getById:function(e){return je.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Et(e),i,r;for(n.smoothChildTiming=Pt(e.smoothChildTiming),je.remove(n),n._dp=0,n._time=n._tTime=je._time,i=je._first;i;)r=i._next,(t||!(!i._dur&&i instanceof ot&&i.vars.onComplete===i._targets[0]))&&dn(n,i,i._start-i._delay),i=r;return dn(je,n,0),n},context:function(e,t){return e?new xu(e,t):st},matchMedia:function(e){return new U_(e)},matchMediaRefresh:function(){return ar.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ba()},addEventListener:function(e,t){var n=ds[e]||(ds[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ds[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:d_,wrapYoyo:p_,distribute:$c,random:Qc,snap:Jc,normalize:f_,getUnit:xt,clamp:l_,splitColor:ru,toArray:$t,selector:Na,mapRange:tu,pipe:u_,unitize:h_,interpolate:m_,shuffle:Kc},install:zc,effects:da,ticker:kt,updateRoot:Et.updateRoot,plugins:zt,globalTimeline:je,core:{PropTween:Rt,globals:Bc,Tween:ot,Timeline:Et,Animation:sr,getCache:ui,_removeLinkedListItem:Es,reverting:function(){return vt},context:function(e){return e&&st&&(st.data.push(e),e._ctx=st),st},suppressOverwrites:function(e){return Ka=e}}};Lt("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Ms[o]=ot[o]});kt.add(Et.updateRoot);Wi=Ms.to({},{duration:0});var O_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},N_=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=O_(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},xa=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(s){var l,c;if(ft(r)&&(l={},Lt(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}N_(s,r)}}}},Dt=Ms.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,s,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",s=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),s.op=a,s.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)vt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},xa("roundProps",Fa),xa("modifiers"),xa("snap",Jc))||Ms;ot.version=Et.version=Dt.version="3.11.5";Fc=1;Ja()&&rr();Ue.Power0;Ue.Power1;Ue.Power2;Ue.Power3;Ue.Power4;Ue.Linear;Ue.Quad;Ue.Cubic;Ue.Quart;Ue.Quint;Ue.Strong;Ue.Elastic;Ue.Back;Ue.SteppedEase;Ue.Bounce;Ue.Sine;Ue.Expo;Ue.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Zl,zn,Zi,co,li,Kl,uo,F_=function(){return typeof window<"u"},Rn={},ri=180/Math.PI,Ki=Math.PI/180,ki=Math.atan2,$l=1e8,ho=/([A-Z])/g,z_=/(left|right|width|margin|padding|x)/i,B_=/[\s,\(]\S/,pn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ka=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},k_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},G_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},V_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},vu=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Mu=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},H_=function(e,t,n){return e.style[t]=n},W_=function(e,t,n){return e.style.setProperty(t,n)},X_=function(e,t,n){return e._gsap[t]=n},q_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Y_=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},j_=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},Ze="transform",ln=Ze+"Origin",Z_=function o(e,t){var n=this,i=this.target,r=i.style;if(e in Rn){if(this.tfm=this.tfm||{},e!=="transform")e=pn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=En(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:En(i,e);else return pn.transform.split(",").forEach(function(a){return o.call(n,a,t)});if(this.props.indexOf(Ze)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ln,t,"")),e=Ze}(r||t)&&this.props.push(e,t,r[e])},Su=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},K_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(ho,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=uo(),(!r||!r.isStart)&&!n[Ze]&&(Su(n),i.uncache=1)}},yu=function(e,t){var n={target:e,props:[],revert:K_,save:Z_};return e._gsap||Dt.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},bu,Ga=function(e,t){var n=zn.createElementNS?zn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):zn.createElement(e);return n.style?n:zn.createElement(e)},_n=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ho,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,or(t)||t,1)||""},Jl="O,Moz,ms,Ms,Webkit".split(","),or=function(e,t,n){var i=t||li,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Jl[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Jl[a]:"")+e},Va=function(){F_()&&window.document&&(Zl=window,zn=Zl.document,Zi=zn.documentElement,li=Ga("div")||{style:{}},Ga("div"),Ze=or(Ze),ln=Ze+"Origin",li.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",bu=!!or("perspective"),uo=Dt.core.reverting,co=1)},va=function o(e){var t=Ga("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Zi.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Zi.removeChild(t),this.style.cssText=r,a},Ql=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},wu=function(e){var t;try{t=e.getBBox()}catch{t=va.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===va||(t=va.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Ql(e,["x","cx","x1"])||0,y:+Ql(e,["y","cy","y1"])||0,width:0,height:0}:t},Tu=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&wu(e))},Lr=function(e,t){if(t){var n=e.style;t in Rn&&t!==ln&&(t=Ze),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(ho,"-$1").toLowerCase())):n.removeAttribute(t)}},Bn=function(e,t,n,i,r,a){var s=new Rt(e._pt,t,n,0,1,a?Mu:vu);return e._pt=s,s.b=i,s.e=r,e._props.push(n),s},ec={deg:1,rad:1,turn:1},$_={grid:1,flex:1},Xn=function o(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=li.style,l=z_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",m=i==="%",_,g,p,h;return i===a||!r||ec[i]||ec[a]?r:(a!=="px"&&!d&&(r=o(e,t,n,"px")),h=e.getCTM&&Tu(e),(m||a==="%")&&(Rn[t]||~t.indexOf("adius"))?(_=h?e.getBBox()[l?"width":"height"]:e[u],tt(m?r/_*f:r/100*_)):(s[l?"width":"height"]=f+(d?a:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,h&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===zn||!g.appendChild)&&(g=zn.body),p=g._gsap,p&&m&&p.width&&l&&p.time===kt.time&&!p.uncache?tt(r/p.width*f):((m||a==="%")&&!$_[_n(g,"display")]&&(s.position=_n(e,"position")),g===e&&(s.position="static"),g.appendChild(li),_=li[u],g.removeChild(li),s.position="absolute",l&&m&&(p=ui(g),p.time=kt.time,p.width=g[u]),tt(d?_*r/f:_&&r?f/_*r:0))))},En=function(e,t,n,i){var r;return co||Va(),t in pn&&t!=="transform"&&(t=pn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Rn[t]&&t!=="transform"?(r=Dr(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:ys(_n(e,ln))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ss[t]&&Ss[t](e,t,n)||_n(e,t)||Gc(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Xn(e,t,r,n)+n:r},J_=function(e,t,n,i){if(!n||n==="none"){var r=or(t,e,1),a=r&&_n(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=_n(e,"borderTopColor"))}var s=new Rt(this._pt,e.style,t,0,1,gu),l=0,c=0,u,f,d,m,_,g,p,h,y,S,v,M;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=_n(e,t)||i,e.style[t]=n),u=[n,i],au(u),n=u[0],i=u[1],d=n.match(Hi)||[],M=i.match(Hi)||[],M.length){for(;f=Hi.exec(i);)p=f[0],y=i.substring(l,f.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),p!==(g=d[c++]||"")&&(m=parseFloat(g)||0,v=g.substr((m+"").length),p.charAt(1)==="="&&(p=ji(m,p)+v),h=parseFloat(p),S=p.substr((h+"").length),l=Hi.lastIndex-S.length,S||(S=S||Vt.units[t]||v,l===i.length&&(i+=S,s.e+=S)),v!==S&&(m=Xn(e,t,g,S)||0),s._pt={_next:s._pt,p:y||c===1?y:",",s:m,c:h-m,m:_&&_<4||t==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=t==="display"&&i==="none"?Mu:vu;return Oc.test(i)&&(s.e=0),this._pt=s,s},tc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Q_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=tc[n]||n,t[1]=tc[i]||i,t.join(" ")},e0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,s,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],Rn[s]&&(l=1,s=s==="transformOrigin"?ln:Ze),Lr(n,s);l&&(Lr(n,Ze),a&&(a.svg&&n.removeAttribute("transform"),Dr(n,1),a.uncache=1,Su(i)))}},Ss={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Rt(e._pt,t,n,0,0,e0);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Rr=[1,0,0,1,0,0],Eu={},Au=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},nc=function(e){var t=_n(e,Ze);return Au(t)?Rr:t.substr(7).match(Uc).map(tt)},fo=function(e,t){var n=e._gsap||ui(e),i=e.style,r=nc(e),a,s,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Rr:r):(r===Rr&&!e.offsetParent&&e!==Zi&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,s=e.nextElementSibling,Zi.appendChild(e)),r=nc(e),l?i.display=l:Lr(e,"display"),c&&(s?a.insertBefore(e,s):a?a.appendChild(e):Zi.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ha=function(e,t,n,i,r,a){var s=e._gsap,l=r||fo(e,!0),c=s.xOrigin||0,u=s.yOrigin||0,f=s.xOffset||0,d=s.yOffset||0,m=l[0],_=l[1],g=l[2],p=l[3],h=l[4],y=l[5],S=t.split(" "),v=parseFloat(S[0])||0,M=parseFloat(S[1])||0,A,C,P,x;n?l!==Rr&&(C=m*p-_*g)&&(P=v*(p/C)+M*(-g/C)+(g*y-p*h)/C,x=v*(-_/C)+M*(m/C)-(m*y-_*h)/C,v=P,M=x):(A=wu(e),v=A.x+(~S[0].indexOf("%")?v/100*A.width:v),M=A.y+(~(S[1]||S[0]).indexOf("%")?M/100*A.height:M)),i||i!==!1&&s.smooth?(h=v-c,y=M-u,s.xOffset=f+(h*m+y*g)-h,s.yOffset=d+(h*_+y*p)-y):s.xOffset=s.yOffset=0,s.xOrigin=v,s.yOrigin=M,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!n,e.style[ln]="0px 0px",a&&(Bn(a,s,"xOrigin",c,v),Bn(a,s,"yOrigin",u,M),Bn(a,s,"xOffset",f,s.xOffset),Bn(a,s,"yOffset",d,s.yOffset)),e.setAttribute("data-svg-origin",v+" "+M)},Dr=function(e,t){var n=e._gsap||new uu(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",s="deg",l=getComputedStyle(e),c=_n(e,ln)||"0",u,f,d,m,_,g,p,h,y,S,v,M,A,C,P,x,T,k,G,D,O,F,$,Z,W,te,J,_e,ie,V,j,re;return u=f=d=g=p=h=y=S=v=0,m=_=1,n.svg=!!(e.getCTM&&Tu(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ze]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ze]!=="none"?l[Ze]:"")),i.scale=i.rotate=i.translate="none"),C=fo(e,n.svg),n.svg&&(n.uncache?(W=e.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",Z=""):Z=!t&&e.getAttribute("data-svg-origin"),Ha(e,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,C)),M=n.xOrigin||0,A=n.yOrigin||0,C!==Rr&&(k=C[0],G=C[1],D=C[2],O=C[3],u=F=C[4],f=$=C[5],C.length===6?(m=Math.sqrt(k*k+G*G),_=Math.sqrt(O*O+D*D),g=k||G?ki(G,k)*ri:0,y=D||O?ki(D,O)*ri+g:0,y&&(_*=Math.abs(Math.cos(y*Ki))),n.svg&&(u-=M-(M*k+A*D),f-=A-(M*G+A*O))):(re=C[6],V=C[7],J=C[8],_e=C[9],ie=C[10],j=C[11],u=C[12],f=C[13],d=C[14],P=ki(re,ie),p=P*ri,P&&(x=Math.cos(-P),T=Math.sin(-P),Z=F*x+J*T,W=$*x+_e*T,te=re*x+ie*T,J=F*-T+J*x,_e=$*-T+_e*x,ie=re*-T+ie*x,j=V*-T+j*x,F=Z,$=W,re=te),P=ki(-D,ie),h=P*ri,P&&(x=Math.cos(-P),T=Math.sin(-P),Z=k*x-J*T,W=G*x-_e*T,te=D*x-ie*T,j=O*T+j*x,k=Z,G=W,D=te),P=ki(G,k),g=P*ri,P&&(x=Math.cos(P),T=Math.sin(P),Z=k*x+G*T,W=F*x+$*T,G=G*x-k*T,$=$*x-F*T,k=Z,F=W),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,h=180-h),m=tt(Math.sqrt(k*k+G*G+D*D)),_=tt(Math.sqrt($*$+re*re)),P=ki(F,$),y=Math.abs(P)>2e-4?P*ri:0,v=j?1/(j<0?-j:j):0),n.svg&&(Z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Au(_n(e,Ze)),Z&&e.setAttribute("transform",Z))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(m*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=tt(m),n.scaleY=tt(_),n.rotation=tt(g)+s,n.rotationX=tt(p)+s,n.rotationY=tt(h)+s,n.skewX=y+s,n.skewY=S+s,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[ln]=ys(c)),n.xOffset=n.yOffset=0,n.force3D=Vt.force3D,n.renderTransform=n.svg?n0:bu?Cu:t0,n.uncache=0,n},ys=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ma=function(e,t,n){var i=xt(t);return tt(parseFloat(t)+parseFloat(Xn(e,"x",n+"px",i)))+i},t0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Cu(e,t)},ei="0deg",gr="0px",ti=") ",Cu=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,m=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,h=n.force3D,y=n.target,S=n.zOrigin,v="",M=h==="auto"&&e&&e!==1||h===!0;if(S&&(f!==ei||u!==ei)){var A=parseFloat(u)*Ki,C=Math.sin(A),P=Math.cos(A),x;A=parseFloat(f)*Ki,x=Math.cos(A),a=Ma(y,a,C*x*-S),s=Ma(y,s,-Math.sin(A)*-S),l=Ma(y,l,P*x*-S+S)}p!==gr&&(v+="perspective("+p+ti),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(M||a!==gr||s!==gr||l!==gr)&&(v+=l!==gr||M?"translate3d("+a+", "+s+", "+l+") ":"translate("+a+", "+s+ti),c!==ei&&(v+="rotate("+c+ti),u!==ei&&(v+="rotateY("+u+ti),f!==ei&&(v+="rotateX("+f+ti),(d!==ei||m!==ei)&&(v+="skew("+d+", "+m+ti),(_!==1||g!==1)&&(v+="scale("+_+", "+g+ti),y.style[Ze]=v||"translate(0, 0)"},n0=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,m=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,h=n.yOffset,y=n.forceCSS,S=parseFloat(a),v=parseFloat(s),M,A,C,P,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ki,c*=Ki,M=Math.cos(l)*f,A=Math.sin(l)*f,C=Math.sin(l-c)*-d,P=Math.cos(l-c)*d,c&&(u*=Ki,x=Math.tan(c-u),x=Math.sqrt(1+x*x),C*=x,P*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),M*=x,A*=x)),M=tt(M),A=tt(A),C=tt(C),P=tt(P)):(M=f,P=d,A=C=0),(S&&!~(a+"").indexOf("px")||v&&!~(s+"").indexOf("px"))&&(S=Xn(m,"x",a,"px"),v=Xn(m,"y",s,"px")),(_||g||p||h)&&(S=tt(S+_-(_*M+g*C)+p),v=tt(v+g-(_*A+g*P)+h)),(i||r)&&(x=m.getBBox(),S=tt(S+i/100*x.width),v=tt(v+r/100*x.height)),x="matrix("+M+","+A+","+C+","+P+","+S+","+v+")",m.setAttribute("transform",x),y&&(m.style[Ze]=x)},i0=function(e,t,n,i,r){var a=360,s=ft(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?ri:1),c=l-i,u=i+c+"deg",f,d;return s&&(f=r.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*$l)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*$l)%a-~~(c/a)*a)),e._pt=d=new Rt(e._pt,t,n,i,c,k_),d.e=u,d.u="deg",e._props.push(n),d},ic=function(e,t){for(var n in t)e[n]=t[n];return e},r0=function(e,t,n){var i=ic({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,l,c,u,f,d,m,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ze]=t,s=Dr(n,1),Lr(n,Ze),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ze],a[Ze]=t,s=Dr(n,1),a[Ze]=c);for(l in Rn)c=i[l],u=s[l],c!==u&&r.indexOf(l)<0&&(m=xt(c),_=xt(u),f=m!==_?Xn(n,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new Rt(e._pt,s,l,f,d-f,ka),e._pt.u=_||0,e._props.push(l));ic(s,i)};Lt("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(s){return e<2?o+s:"border"+s+o});Ss[e>1?"border"+o:o]=function(s,l,c,u,f){var d,m;if(arguments.length<4)return d=a.map(function(_){return En(s,_,c)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(u+"").split(" "),m={},a.forEach(function(_,g){return m[_]=d[g]=d[g]||d[(g-1)/2|0]}),s.init(l,m,f)}});var Pu={name:"css",register:Va,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,s=e.style,l=n.vars.startAt,c,u,f,d,m,_,g,p,h,y,S,v,M,A,C,P;co||Va(),this.styles=this.styles||yu(e),P=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(zt[g]&&hu(g,t,n,i,e,r)))){if(m=typeof u,_=Ss[g],m==="function"&&(u=u.call(n,i,e,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Cr(u)),_)_(this,e,g,u,n)&&(C=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Vn.lastIndex=0,Vn.test(c)||(p=xt(c),h=xt(u)),h?p!==h&&(c=Xn(e,g,c,h)+h):p&&(u+=p),this.add(s,"setProperty",c,u,i,r,0,0,g),a.push(g),P.push(g,0,s[g]);else if(m!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],ft(c)&&~c.indexOf("random(")&&(c=Cr(c)),xt(c+"")||(c+=Vt.units[g]||xt(En(e,g))||""),(c+"").charAt(1)==="="&&(c=En(e,g))):c=En(e,g),d=parseFloat(c),y=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),g in pn&&(g==="autoAlpha"&&(d===1&&En(e,"visibility")==="hidden"&&f&&(d=0),P.push("visibility",0,s.visibility),Bn(this,s,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=pn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in Rn,S){if(this.styles.save(g),v||(M=e._gsap,M.renderTransform&&!t.parseTransform||Dr(e,t.parseTransform),A=t.smoothOrigin!==!1&&M.smooth,v=this._pt=new Rt(this._pt,s,Ze,0,1,M.renderTransform,M,0,-1),v.dep=1),g==="scale")this._pt=new Rt(this._pt,M,"scaleY",M.scaleY,(y?ji(M.scaleY,y+f):f)-M.scaleY||0,ka),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(ln,0,s[ln]),u=Q_(u),M.svg?Ha(e,u,0,A,0,this):(h=parseFloat(u.split(" ")[2])||0,h!==M.zOrigin&&Bn(this,M,"zOrigin",M.zOrigin,h),Bn(this,s,g,ys(c),ys(u)));continue}else if(g==="svgOrigin"){Ha(e,u,1,A,0,this);continue}else if(g in Eu){i0(this,M,g,d,y?ji(d,y+u):u);continue}else if(g==="smoothOrigin"){Bn(this,M,"smooth",M.smooth,u);continue}else if(g==="force3D"){M[g]=u;continue}else if(g==="transform"){r0(this,u,e);continue}}else g in s||(g=or(g)||g);if(S||(f||f===0)&&(d||d===0)&&!B_.test(u)&&g in s)p=(c+"").substr((d+"").length),f||(f=0),h=xt(u)||(g in Vt.units?Vt.units[g]:p),p!==h&&(d=Xn(e,g,c,h)),this._pt=new Rt(this._pt,S?M:s,g,d,(y?ji(d,y+f):f)-d,!S&&(h==="px"||g==="zIndex")&&t.autoRound!==!1?V_:ka),this._pt.u=h||0,p!==h&&h!=="%"&&(this._pt.b=c,this._pt.r=G_);else if(g in s)J_.call(this,e,g,c,y?y+u:u);else if(g in e)this.add(e,g,c||e[g],y?y+u:u,i,r);else if(g!=="parseTransform"){eo(g,u);continue}S||(g in s?P.push(g,0,s[g]):P.push(g,1,c||e[g])),a.push(g)}}C&&_u(this)},render:function(e,t){if(t.tween._time||!uo())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:En,aliases:pn,getSetter:function(e,t,n){var i=pn[t];return i&&i.indexOf(",")<0&&(t=i),t in Rn&&t!==ln&&(e._gsap.x||En(e,"x"))?n&&Kl===n?t==="scale"?q_:X_:(Kl=n||{})&&(t==="scale"?Y_:j_):e.style&&!$a(e.style[t])?H_:~t.indexOf("-")?W_:oo(e,t)},core:{_removeProperty:Lr,_getMatrix:fo}};Dt.utils.checkPrefix=or;Dt.core.getStyleSaver=yu;(function(o,e,t,n){var i=Lt(o+","+e+","+t,function(r){Rn[r]=1});Lt(e,function(r){Vt.units[r]="deg",Eu[r]=1}),pn[i[13]]=o+","+e,Lt(n,function(r){var a=r.split(":");pn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Lt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Vt.units[o]="px"});Dt.registerPlugin(Pu);var po=Dt.registerPlugin(Pu)||Dt;po.core.Tween;const zr=new Bg,s0=new Za(3,64,64),a0=new kg({color:"#A92CDE",roughness:.5}),mo=new Cn(s0,a0);zr.add(mo);const go=new Wg(16777215,1,100);go.intensity=1.25;go.position.set(0,10,10);zr.add(go);const Zt={width:window.innerWidth,height:window.innerHeight},vi=new Bt(45,Zt.width/Zt.height,.1,100);vi.position.z=20;zr.add(vi);const Lu=document.querySelector(".webgl"),Br=new Lc({canvas:Lu});Br.setSize(Zt.width,Zt.height);Br.setPixelRatio(2);Br.render(zr,vi);const cr=new Xg(vi,Lu);cr.enableDamping=!0;cr.enablePan=!1;cr.enableZoom=!1;cr.autoRotate=!0;cr.autoRotateSpeed=5;window.addEventListener("resize",()=>{Zt.width=window.innerWidth,Zt.height=window.innerHeight,vi.aspect=Zt.width/Zt.height,vi.updateProjectionMatrix(),Br.setSize(Zt.width,Zt.height)});const Ru=()=>{cr.update(),Br.render(zr,vi),window.requestAnimationFrame(Ru)};Ru();const Du=po.timeline({defaults:{duration:1}});Du.fromTo(mo.scale,{z:0,x:0,y:0},{z:1,x:1,y:1});Du.fromTo(".title",{opacity:0},{opacity:1});let _o=!1,rc=[12,23,55];window.addEventListener("mousedown",()=>_o=!0);window.addEventListener("mouseup",()=>_o=!1);window.addEventListener("mousemove",o=>{if(_o){rc=[Math.round(o.pageX/Zt.width*255),Math.round(o.pageY/Zt.height*255),150];let e=new Be(`rgb(${rc.join(",")})`);po.to(mo.material.color,{r:e.r,g:e.g,b:e.b})}});
