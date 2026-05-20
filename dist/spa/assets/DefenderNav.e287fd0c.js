import{N as pf,r as zi,j as El,a as mf,D as _f,L as gf,Q as Gn,X as Wn,Y as mn,Z as bn,ac as vf,aa as xf,a2 as wa,$ as ki,ab as Mf,aE as yf,aF as Sf,S as Ef,T as Tf,U as bf,_ as Af,a0 as wf}from"./index.652a3c21.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xo="164",Hi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rf=0,Tl=1,Cf=2,Ah=1,Pf=2,Ln=3,oi=0,Ne=1,Un=2,ii=0,pr=1,bl=2,Al=3,wl=4,Lf=5,Ai=100,Df=101,If=102,Uf=103,Nf=104,Of=200,Ff=201,Bf=202,zf=203,yo=204,So=205,kf=206,Hf=207,Vf=208,Gf=209,Wf=210,Xf=211,Yf=212,qf=213,jf=214,$f=0,Zf=1,Kf=2,ta=3,Jf=4,Qf=5,td=6,ed=7,Yo=0,nd=1,id=2,ri=0,rd=1,sd=2,ad=3,od=4,ld=5,cd=6,hd=7,wh=300,yr=301,Sr=302,Eo=303,To=304,_a=306,bo=1e3,Ri=1001,Ao=1002,rn=1003,ud=1004,ms=1005,hn=1006,Ra=1007,Ci=1008,li=1009,fd=1010,dd=1011,Rh=1012,Ch=1013,Er=1014,Qn=1015,ga=1016,Ph=1017,Lh=1018,os=1020,pd=35902,md=1021,_d=1022,Mn=1023,gd=1024,vd=1025,mr=1026,Kr=1027,xd=1028,Dh=1029,Md=1030,Ih=1031,Uh=1033,Ca=33776,Pa=33777,La=33778,Da=33779,Rl=35840,Cl=35841,Pl=35842,Ll=35843,Dl=36196,Il=37492,Ul=37496,Nl=37808,Ol=37809,Fl=37810,Bl=37811,zl=37812,kl=37813,Hl=37814,Vl=37815,Gl=37816,Wl=37817,Xl=37818,Yl=37819,ql=37820,jl=37821,Ia=36492,$l=36494,Zl=36495,yd=36283,Kl=36284,Jl=36285,Ql=36286,Sd=3200,Ed=3201,qo=0,Td=1,Jn="",_n="srgb",di="srgb-linear",jo="display-p3",va="display-p3-linear",ea="linear",se="srgb",na="rec709",ia="p3",Gi=7680,tc=519,bd=512,Ad=513,wd=514,Nh=515,Rd=516,Cd=517,Pd=518,Ld=519,wo=35044,ec="300 es",Nn=2e3,ra=2001;class Fi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nc=1234567;const _r=Math.PI/180,Jr=180/Math.PI;function Fn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[r&255]+we[r>>8&255]+we[r>>16&255]+we[r>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function ye(r,t,e){return Math.max(t,Math.min(e,r))}function $o(r,t){return(r%t+t)%t}function Dd(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Id(r,t,e){return r!==t?(e-r)/(t-r):0}function qr(r,t,e){return(1-e)*r+e*t}function Ud(r,t,e,n){return qr(r,t,1-Math.exp(-e*n))}function Nd(r,t=1){return t-Math.abs($o(r,t*2)-t)}function Od(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Fd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Bd(r,t){return r+Math.floor(Math.random()*(t-r+1))}function zd(r,t){return r+Math.random()*(t-r)}function kd(r){return r*(.5-Math.random())}function Hd(r){r!==void 0&&(nc=r);let t=nc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Vd(r){return r*_r}function Gd(r){return r*Jr}function Wd(r){return(r&r-1)===0&&r!==0}function Xd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Yd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function qd(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),h=a((t+n)/2),u=s((t-n)/2),f=a((t-n)/2),d=s((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":r.set(o*h,l*u,l*f,o*c);break;case"YZY":r.set(l*f,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*f,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*d,o*c);break;case"YXY":r.set(l*d,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function un(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Zt(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const jd={DEG2RAD:_r,RAD2DEG:Jr,generateUUID:Fn,clamp:ye,euclideanModulo:$o,mapLinear:Dd,inverseLerp:Id,lerp:qr,damp:Ud,pingpong:Nd,smoothstep:Od,smootherstep:Fd,randInt:Bd,randFloat:zd,randFloatSpread:kd,seededRandom:Hd,degToRad:Vd,radToDeg:Gd,isPowerOfTwo:Wd,ceilPowerOfTwo:Xd,floorPowerOfTwo:Yd,setQuaternionFromProperEuler:qd,normalize:Zt,denormalize:un};class yt{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,n,i,s,a,o,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],E=i[1],M=i[4],T=i[7],C=i[2],w=i[5],A=i[8];return s[0]=a*_+o*E+l*C,s[3]=a*p+o*M+l*w,s[6]=a*m+o*T+l*A,s[1]=c*_+h*E+u*C,s[4]=c*p+h*M+u*w,s[7]=c*m+h*T+u*A,s[2]=f*_+d*E+g*C,s[5]=f*p+d*M+g*w,s[8]=f*m+d*T+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*s,d=c*s-a*l,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ua.makeScale(t,e)),this}rotate(t){return this.premultiply(Ua.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ua=new zt;function Oh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function sa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function $d(){const r=sa("canvas");return r.style.display="block",r}const ic={};function Fh(r){r in ic||(ic[r]=!0,console.warn(r))}const rc=new zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sc=new zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_s={[di]:{transfer:ea,primaries:na,toReference:r=>r,fromReference:r=>r},[_n]:{transfer:se,primaries:na,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[va]:{transfer:ea,primaries:ia,toReference:r=>r.applyMatrix3(sc),fromReference:r=>r.applyMatrix3(rc)},[jo]:{transfer:se,primaries:ia,toReference:r=>r.convertSRGBToLinear().applyMatrix3(sc),fromReference:r=>r.applyMatrix3(rc).convertLinearToSRGB()}},Zd=new Set([di,va]),Jt={enabled:!0,_workingColorSpace:di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Zd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=_s[t].toReference,i=_s[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return _s[r].primaries},getTransfer:function(r){return r===Jn?ea:_s[r].transfer}};function gr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Na(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Wi;class Kd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Wi===void 0&&(Wi=sa("canvas")),Wi.width=t.width,Wi.height=t.height;const n=Wi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=sa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=gr(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gr(e[n]/255)*255):e[n]=gr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Jd=0;class Bh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Fn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Oa(i[a].image)):s.push(Oa(i[a]))}else s=Oa(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Oa(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Kd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qd=0;class Ie extends Fi{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=Ri,i=Ri,s=hn,a=Ci,o=Mn,l=li,c=Ie.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Fn(),this.name="",this.source=new Bh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bo:t.x=t.x-Math.floor(t.x);break;case Ri:t.x=t.x<0?0:1;break;case Ao:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bo:t.y=t.y-Math.floor(t.y);break;case Ri:t.y=t.y<0?0:1;break;case Ao:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=wh;Ie.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,i=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,T=(d+1)/2,C=(m+1)/2,w=(h+f)/4,A=(u+_)/4,P=(g+p)/4;return M>T&&M>C?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=w/n,s=A/n):T>C?T<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(T),n=w/i,s=P/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=A/s,i=P/s),this.set(n,i,s,e),this}let E=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(u-_)/E,this.z=(f-h)/E,this.w=Math.acos((c+d+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tp extends Fi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ie(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Bh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends tp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class zh extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ep extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let p=1-o;const m=l*f+c*d+h*g+u*_,E=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const C=Math.sqrt(M),w=Math.atan2(C,m*E);p=Math.sin(p*w)/C,o=Math.sin(o*w)/C}const T=o*E;if(l=l*p+f*T,c=c*p+d*T,h=h*p+g*T,u=u*p+_*T,p===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return t[e]=o*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-o*d,t[e+2]=c*g+h*d+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ac.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ac.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fa.copy(this).projectOnVector(t),this.sub(Fa)}reflect(t){return this.sub(Fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fa=new I,ac=new Oi;class ls{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,on):on.fromBufferAttribute(s,a),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gs.copy(n.boundingBox)),gs.applyMatrix4(t.matrixWorld),this.union(gs)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ur),vs.subVectors(this.max,Ur),Xi.subVectors(t.a,Ur),Yi.subVectors(t.b,Ur),qi.subVectors(t.c,Ur),Xn.subVectors(Yi,Xi),Yn.subVectors(qi,Yi),_i.subVectors(Xi,qi);let e=[0,-Xn.z,Xn.y,0,-Yn.z,Yn.y,0,-_i.z,_i.y,Xn.z,0,-Xn.x,Yn.z,0,-Yn.x,_i.z,0,-_i.x,-Xn.y,Xn.x,0,-Yn.y,Yn.x,0,-_i.y,_i.x,0];return!Ba(e,Xi,Yi,qi,vs)||(e=[1,0,0,0,1,0,0,0,1],!Ba(e,Xi,Yi,qi,vs))?!1:(xs.crossVectors(Xn,Yn),e=[xs.x,xs.y,xs.z],Ba(e,Xi,Yi,qi,vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const An=[new I,new I,new I,new I,new I,new I,new I,new I],on=new I,gs=new ls,Xi=new I,Yi=new I,qi=new I,Xn=new I,Yn=new I,_i=new I,Ur=new I,vs=new I,xs=new I,gi=new I;function Ba(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){gi.fromArray(r,s);const o=i.x*Math.abs(gi.x)+i.y*Math.abs(gi.y)+i.z*Math.abs(gi.z),l=t.dot(gi),c=e.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const np=new ls,Nr=new I,za=new I;class cs{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):np.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Nr.subVectors(t,this.center);const e=Nr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Nr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Nr.copy(t.center).add(za)),this.expandByPoint(Nr.copy(t.center).sub(za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new I,ka=new I,Ms=new I,qn=new I,Ha=new I,ys=new I,Va=new I;class hs{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ka.copy(t).add(e).multiplyScalar(.5),Ms.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(ka);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ms),o=qn.dot(this.direction),l=-qn.dot(Ms),c=qn.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ka).addScaledVector(Ms,f),d}intersectSphere(t,e){wn.subVectors(t.center,this.origin);const n=wn.dot(this.direction),i=wn.dot(wn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,i,s){Ha.subVectors(e,t),ys.subVectors(n,t),Va.crossVectors(Ha,ys);let a=this.direction.dot(Va),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,t);const l=o*this.direction.dot(ys.crossVectors(qn,ys));if(l<0)return null;const c=o*this.direction.dot(Ha.cross(qn));if(c<0||l+c>a)return null;const h=-o*qn.dot(Va);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,i,s,a,o,l,c,h,u,f,d,g,_,p){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,u,f,d,g,_,p)}set(t,e,n,i,s,a,o,l,c,h,u,f,d,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ji.setFromMatrixColumn(t,0).length(),s=1/ji.setFromMatrixColumn(t,1).length(),a=1/ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=a*h,d=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f+_*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,d=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ip,t,rp)}lookAt(t,e,n){const i=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),jn.crossVectors(n,Ve),jn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),jn.crossVectors(n,Ve)),jn.normalize(),Ss.crossVectors(Ve,jn),i[0]=jn.x,i[4]=Ss.x,i[8]=Ve.x,i[1]=jn.y,i[5]=Ss.y,i[9]=Ve.y,i[2]=jn.z,i[6]=Ss.z,i[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],E=n[3],M=n[7],T=n[11],C=n[15],w=i[0],A=i[4],P=i[8],S=i[12],y=i[1],O=i[5],z=i[9],D=i[13],H=i[2],Z=i[6],J=i[10],it=i[14],V=i[3],nt=i[7],rt=i[11],mt=i[15];return s[0]=a*w+o*y+l*H+c*V,s[4]=a*A+o*O+l*Z+c*nt,s[8]=a*P+o*z+l*J+c*rt,s[12]=a*S+o*D+l*it+c*mt,s[1]=h*w+u*y+f*H+d*V,s[5]=h*A+u*O+f*Z+d*nt,s[9]=h*P+u*z+f*J+d*rt,s[13]=h*S+u*D+f*it+d*mt,s[2]=g*w+_*y+p*H+m*V,s[6]=g*A+_*O+p*Z+m*nt,s[10]=g*P+_*z+p*J+m*rt,s[14]=g*S+_*D+p*it+m*mt,s[3]=E*w+M*y+T*H+C*V,s[7]=E*A+M*O+T*Z+C*nt,s[11]=E*P+M*z+T*J+C*rt,s[15]=E*S+M*D+T*it+C*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+s*l*u-i*c*u-s*o*f+n*c*f+i*o*d-n*l*d)+_*(+e*l*d-e*c*f+s*a*f-i*a*d+i*c*h-s*l*h)+p*(+e*c*u-e*o*d-s*a*u+n*a*d+s*o*h-n*c*h)+m*(-i*o*h-e*l*u+e*o*f+i*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],E=u*p*c-_*f*c+_*l*d-o*p*d-u*l*m+o*f*m,M=g*f*c-h*p*c-g*l*d+a*p*d+h*l*m-a*f*m,T=h*_*c-g*u*c+g*o*d-a*_*d-h*o*m+a*u*m,C=g*u*l-h*_*l-g*o*f+a*_*f+h*o*p-a*u*p,w=e*E+n*M+i*T+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=E*A,t[1]=(_*f*s-u*p*s-_*i*d+n*p*d+u*i*m-n*f*m)*A,t[2]=(o*p*s-_*l*s+_*i*c-n*p*c-o*i*m+n*l*m)*A,t[3]=(u*l*s-o*f*s-u*i*c+n*f*c+o*i*d-n*l*d)*A,t[4]=M*A,t[5]=(h*p*s-g*f*s+g*i*d-e*p*d-h*i*m+e*f*m)*A,t[6]=(g*l*s-a*p*s-g*i*c+e*p*c+a*i*m-e*l*m)*A,t[7]=(a*f*s-h*l*s+h*i*c-e*f*c-a*i*d+e*l*d)*A,t[8]=T*A,t[9]=(g*u*s-h*_*s-g*n*d+e*_*d+h*n*m-e*u*m)*A,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*m+e*o*m)*A,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*d-e*o*d)*A,t[12]=C*A,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*p+e*u*p)*A,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*p-e*o*p)*A,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,f=s*c,d=s*h,g=s*u,_=a*h,p=a*u,m=o*u,E=l*c,M=l*h,T=l*u,C=n.x,w=n.y,A=n.z;return i[0]=(1-(_+m))*C,i[1]=(d+T)*C,i[2]=(g-M)*C,i[3]=0,i[4]=(d-T)*w,i[5]=(1-(f+m))*w,i[6]=(p+E)*w,i[7]=0,i[8]=(g+M)*A,i[9]=(p-E)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ji.set(i[0],i[1],i[2]).length();const a=ji.set(i[4],i[5],i[6]).length(),o=ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ln.copy(this);const c=1/s,h=1/a,u=1/o;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,e.setFromRotationMatrix(ln),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Nn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,g;if(o===Nn)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ra)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Nn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-s),f=(e+t)*c,d=(n+i)*h;let g,_;if(o===Nn)g=(a+s)*u,_=-2*u;else if(o===ra)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ji=new I,ln=new ie,ip=new I(0,0,0),rp=new I(1,1,1),jn=new I,Ss=new I,Ve=new I,oc=new ie,lc=new Oi;class dn{constructor(t=0,e=0,n=0,i=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return oc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lc.setFromEuler(this),this.setFromQuaternion(lc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class Zo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sp=0;const cc=new I,$i=new Oi,Rn=new ie,Es=new I,Or=new I,ap=new I,op=new Oi,hc=new I(1,0,0),uc=new I(0,1,0),fc=new I(0,0,1),dc={type:"added"},lp={type:"removed"},Zi={type:"childadded",child:null},Ga={type:"childremoved",child:null};class ge extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new I,e=new dn,n=new Oi,i=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new zt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(hc,t)}rotateY(t){return this.rotateOnAxis(uc,t)}rotateZ(t){return this.rotateOnAxis(fc,t)}translateOnAxis(t,e){return cc.copy(t).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hc,t)}translateY(t){return this.translateOnAxis(uc,t)}translateZ(t){return this.translateOnAxis(fc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Es.copy(t):Es.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Or,Es,this.up):Rn.lookAt(Es,Or,this.up),this.quaternion.setFromRotationMatrix(Rn),i&&(Rn.extractRotation(i.matrixWorld),$i.setFromRotationMatrix(Rn),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dc),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lp),Ga.child=t,this.dispatchEvent(Ga),Ga.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dc),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,t,ap),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,op,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ge.DEFAULT_UP=new I(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new I,Cn=new I,Wa=new I,Pn=new I,Ki=new I,Ji=new I,pc=new I,Xa=new I,Ya=new I,qa=new I;class nn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),cn.subVectors(t,e),i.cross(cn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){cn.subVectors(i,e),Cn.subVectors(n,e),Wa.subVectors(t,e);const a=cn.dot(cn),o=cn.dot(Cn),l=cn.dot(Wa),c=Cn.dot(Cn),h=Cn.dot(Wa),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l)}static isFrontFacing(t,e,n,i){return cn.subVectors(n,e),Cn.subVectors(t,e),cn.cross(Cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),cn.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;Ki.subVectors(i,n),Ji.subVectors(s,n),Xa.subVectors(t,n);const l=Ki.dot(Xa),c=Ji.dot(Xa);if(l<=0&&c<=0)return e.copy(n);Ya.subVectors(t,i);const h=Ki.dot(Ya),u=Ji.dot(Ya);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ki,a);qa.subVectors(t,s);const d=Ki.dot(qa),g=Ji.dot(qa);if(g>=0&&d<=g)return e.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ji,o);const p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return pc.subVectors(s,i),o=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(pc,o);const m=1/(p+_+f);return a=_*m,o=f*m,e.copy(n).addScaledVector(Ki,a).addScaledVector(Ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function ja(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=$o(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=ja(a,s,t+1/3),this.g=ja(a,s,t),this.b=ja(a,s,t-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(t,e=_n){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_n){const n=kh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gr(t.r),this.g=gr(t.g),this.b=gr(t.b),this}copyLinearToSRGB(t){return this.r=Na(t.r),this.g=Na(t.g),this.b=Na(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_n){return Jt.fromWorkingColorSpace(Re.copy(this),t),Math.round(ye(Re.r*255,0,255))*65536+Math.round(ye(Re.g*255,0,255))*256+Math.round(ye(Re.b*255,0,255))}getHexString(t=_n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,i=Re.g,s=Re.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=_n){Jt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,i=Re.b;return t!==_n?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(Ts);const n=qr($n.h,Ts.h,e),i=qr($n.s,Ts.s,e),s=qr($n.l,Ts.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new Wt;Wt.NAMES=kh;let cp=0;class kn extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=pr,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=So,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yo&&(n.blendSrc=this.blendSrc),this.blendDst!==So&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ta&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Hh extends kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new I,bs=new yt;class fn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Fh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)bs.fromBufferAttribute(this,e),bs.applyMatrix3(t),this.setXY(e,bs.x,bs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=un(e,this.array)),e}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=un(e,this.array)),e}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=un(e,this.array)),e}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wo&&(t.usage=this.usage),t}}class Vh extends fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Gh extends fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qt extends fn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let hp=0;const Qe=new ie,$a=new ge,Qi=new I,Ge=new ls,Fr=new ls,Me=new I;class Te extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Oh(t)?Gh:Vh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return $a.lookAt(t),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ge.setFromBufferAttribute(s),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(Ge.min,Fr.min),Ge.expandByPoint(Me),Me.addVectors(Ge.max,Fr.max),Ge.expandByPoint(Me)):(Ge.expandByPoint(Fr.min),Ge.expandByPoint(Fr.max))}Ge.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Me.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Me));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Me.fromBufferAttribute(o,c),l&&(Qi.fromBufferAttribute(t,c),Me.add(Qi)),i=Math.max(i,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new I,l[P]=new I;const c=new I,h=new I,u=new I,f=new yt,d=new yt,g=new yt,_=new I,p=new I;function m(P,S,y){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,S),g.fromBufferAttribute(s,y),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const O=1/(d.x*g.y-g.x*d.y);!isFinite(O)||(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(O),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(O),o[P].add(_),o[S].add(_),o[y].add(_),l[P].add(p),l[S].add(p),l[y].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,S=E.length;P<S;++P){const y=E[P],O=y.start,z=y.count;for(let D=O,H=O+z;D<H;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const M=new I,T=new I,C=new I,w=new I;function A(P){C.fromBufferAttribute(i,P),w.copy(C);const S=o[P];M.copy(S),M.sub(C.multiplyScalar(C.dot(S))).normalize(),T.crossVectors(w,S);const O=T.dot(l[P])<0?-1:1;a.setXYZW(P,M.x,M.y,M.z,O)}for(let P=0,S=E.length;P<S;++P){const y=E[P],O=y.start,z=y.count;for(let D=O,H=O+z;D<H;D+=3)A(t.getX(D+0)),A(t.getX(D+1)),A(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new I,s=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new fn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Te,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mc=new ie,vi=new hs,As=new cs,_c=new I,tr=new I,er=new I,nr=new I,Za=new I,ws=new I,Rs=new yt,Cs=new yt,Ps=new yt,gc=new I,vc=new I,xc=new I,Ls=new I,Ds=new I;class On extends ge{constructor(t=new Te,e=new Hh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){ws.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Za.fromBufferAttribute(u,t),a?ws.addScaledVector(Za,h):ws.addScaledVector(Za.sub(e),h))}e.add(ws)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(s),vi.copy(t.ray).recast(t.near),!(As.containsPoint(vi.origin)===!1&&(vi.intersectSphere(As,_c)===null||vi.origin.distanceToSquared(_c)>(t.far-t.near)**2))&&(mc.copy(s).invert(),vi.copy(t.ray).applyMatrix4(mc),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=a[p.materialIndex],E=Math.max(p.start,d.start),M=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let T=E,C=M;T<C;T+=3){const w=o.getX(T),A=o.getX(T+1),P=o.getX(T+2);i=Is(this,m,t,n,c,h,u,w,A,P),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const E=o.getX(p),M=o.getX(p+1),T=o.getX(p+2);i=Is(this,a,t,n,c,h,u,E,M,T),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=a[p.materialIndex],E=Math.max(p.start,d.start),M=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let T=E,C=M;T<C;T+=3){const w=T,A=T+1,P=T+2;i=Is(this,m,t,n,c,h,u,w,A,P),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const E=p,M=p+1,T=p+2;i=Is(this,a,t,n,c,h,u,E,M,T),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function up(r,t,e,n,i,s,a,o){let l;if(t.side===Ne?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===oi,o),l===null)return null;Ds.copy(o),Ds.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ds);return c<e.near||c>e.far?null:{distance:c,point:Ds.clone(),object:r}}function Is(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,tr),r.getVertexPosition(l,er),r.getVertexPosition(c,nr);const h=up(r,t,e,n,tr,er,nr,Ls);if(h){i&&(Rs.fromBufferAttribute(i,o),Cs.fromBufferAttribute(i,l),Ps.fromBufferAttribute(i,c),h.uv=nn.getInterpolation(Ls,tr,er,nr,Rs,Cs,Ps,new yt)),s&&(Rs.fromBufferAttribute(s,o),Cs.fromBufferAttribute(s,l),Ps.fromBufferAttribute(s,c),h.uv1=nn.getInterpolation(Ls,tr,er,nr,Rs,Cs,Ps,new yt)),a&&(gc.fromBufferAttribute(a,o),vc.fromBufferAttribute(a,l),xc.fromBufferAttribute(a,c),h.normal=nn.getInterpolation(Ls,tr,er,nr,gc,vc,xc,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new I,materialIndex:0};nn.getNormal(tr,er,nr,u.normal),h.face=u}return h}class us extends Te{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(u,2));function g(_,p,m,E,M,T,C,w,A,P,S){const y=T/A,O=C/P,z=T/2,D=C/2,H=w/2,Z=A+1,J=P+1;let it=0,V=0;const nt=new I;for(let rt=0;rt<J;rt++){const mt=rt*O-D;for(let Rt=0;Rt<Z;Rt++){const Xt=Rt*y-z;nt[_]=Xt*E,nt[p]=mt*M,nt[m]=H,c.push(nt.x,nt.y,nt.z),nt[_]=0,nt[p]=0,nt[m]=w>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(Rt/A),u.push(1-rt/P),it+=1}}for(let rt=0;rt<P;rt++)for(let mt=0;mt<A;mt++){const Rt=f+mt+Z*rt,Xt=f+mt+Z*(rt+1),Y=f+(mt+1)+Z*(rt+1),st=f+(mt+1)+Z*rt;l.push(Rt,Xt,st),l.push(Xt,Y,st),V+=6}o.addGroup(d,V,S),d+=V,f+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Tr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function De(r){const t={};for(let e=0;e<r.length;e++){const n=Tr(r[e]);for(const i in n)t[i]=n[i]}return t}function fp(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Wh(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const dp={clone:Tr,merge:De};var pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pp,this.fragmentShader=mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Tr(t.uniforms),this.uniformsGroups=fp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Xh extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new I,Mc=new yt,yc=new yt;class en extends Xh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Jr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,Mc,yc),e.subVectors(yc,Mc)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_r*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ir=-90,rr=1;class _p extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new en(ir,rr,t,e);i.layers=this.layers,this.add(i);const s=new en(ir,rr,t,e);s.layers=this.layers,this.add(s);const a=new en(ir,rr,t,e);a.layers=this.layers,this.add(a);const o=new en(ir,rr,t,e);o.layers=this.layers,this.add(o);const l=new en(ir,rr,t,e);l.layers=this.layers,this.add(l);const c=new en(ir,rr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Yh extends Ie{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:yr,super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gp extends Ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Yh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new us(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:Tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:ii});s.uniforms.tEquirect.value=e;const a=new On(i,s),o=e.minFilter;return e.minFilter===Ci&&(e.minFilter=hn),new _p(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const Ka=new I,vp=new I,xp=new zt;class Kn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ka.subVectors(n,e).cross(vp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ka),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||xp.getNormalMatrix(t),i=this.coplanarPoint(Ka).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new cs,Us=new I;class Ko{constructor(t=new Kn,e=new Kn,n=new Kn,i=new Kn,s=new Kn,a=new Kn){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],_=i[10],p=i[11],m=i[12],E=i[13],M=i[14],T=i[15];if(n[0].setComponents(l-s,f-c,p-d,T-m).normalize(),n[1].setComponents(l+s,f+c,p+d,T+m).normalize(),n[2].setComponents(l+a,f+h,p+g,T+E).normalize(),n[3].setComponents(l-a,f-h,p-g,T-E).normalize(),n[4].setComponents(l-o,f-u,p-_,T-M).normalize(),e===Nn)n[5].setComponents(l+o,f+u,p+_,T+M).normalize();else if(e===ra)n[5].setComponents(o,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Us.x=i.normal.x>0?t.max.x:t.min.x,Us.y=i.normal.y>0?t.max.y:t.min.y,Us.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Us)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qh(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Mp(r){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l._updateRange,f=l.updateRanges;if(r.bindBuffer(c,o),u.count===-1&&f.length===0&&r.bufferSubData(c,0,h),f.length!==0){for(let d=0,g=f.length;d<g;d++){const _=f[d];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(r.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class xa extends Te{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,d=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const E=m*f-a;for(let M=0;M<c;M++){const T=M*u-s;g.push(T,-E,0),_.push(0,0,1),p.push(M/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<o;E++){const M=E+c*m,T=E+c*(m+1),C=E+1+c*(m+1),w=E+1+c*m;d.push(M,T,w),d.push(T,C,w)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xa(t.width,t.height,t.widthSegments,t.heightSegments)}}var yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Lp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ip=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Up=`#ifdef USE_IRIDESCENCE
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
#endif`,Np=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wp=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,Xp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Yp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Qp=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,em=`#ifdef USE_ENVMAP
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
#endif`,nm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lm=`#ifdef USE_GRADIENTMAP
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
}`,cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,dm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Mm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ym=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Em=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pm=`#if defined( USE_POINTS_UV )
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
#endif`,Lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Im=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Um=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nm=`#ifdef USE_MORPHNORMALS
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
#endif`,Om=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
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
#endif`,Fm=`#ifdef USE_MORPHTARGETS
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
#endif`,Bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,Wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$m=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,i_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,s_=`float getShadowMask() {
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
}`,a_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,l_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c_=`#ifdef USE_SKINNING
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
#endif`,h_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,p_=`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,m_=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,__=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
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
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,x_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const M_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y_=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,w_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,R_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,C_=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D_=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,I_=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U_=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,N_=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,F_=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,z_=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,H_=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,V_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,G_=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,X_=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,q_=`#define TOON
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j_=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,$_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,K_=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,J_=`uniform float rotation;
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
}`,Q_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:yp,alphahash_pars_fragment:Sp,alphamap_fragment:Ep,alphamap_pars_fragment:Tp,alphatest_fragment:bp,alphatest_pars_fragment:Ap,aomap_fragment:wp,aomap_pars_fragment:Rp,batching_pars_vertex:Cp,batching_vertex:Pp,begin_vertex:Lp,beginnormal_vertex:Dp,bsdfs:Ip,iridescence_fragment:Up,bumpmap_pars_fragment:Np,clipping_planes_fragment:Op,clipping_planes_pars_fragment:Fp,clipping_planes_pars_vertex:Bp,clipping_planes_vertex:zp,color_fragment:kp,color_pars_fragment:Hp,color_pars_vertex:Vp,color_vertex:Gp,common:Wp,cube_uv_reflection_fragment:Xp,defaultnormal_vertex:Yp,displacementmap_pars_vertex:qp,displacementmap_vertex:jp,emissivemap_fragment:$p,emissivemap_pars_fragment:Zp,colorspace_fragment:Kp,colorspace_pars_fragment:Jp,envmap_fragment:Qp,envmap_common_pars_fragment:tm,envmap_pars_fragment:em,envmap_pars_vertex:nm,envmap_physical_pars_fragment:dm,envmap_vertex:im,fog_vertex:rm,fog_pars_vertex:sm,fog_fragment:am,fog_pars_fragment:om,gradientmap_pars_fragment:lm,lightmap_pars_fragment:cm,lights_lambert_fragment:hm,lights_lambert_pars_fragment:um,lights_pars_begin:fm,lights_toon_fragment:pm,lights_toon_pars_fragment:mm,lights_phong_fragment:_m,lights_phong_pars_fragment:gm,lights_physical_fragment:vm,lights_physical_pars_fragment:xm,lights_fragment_begin:Mm,lights_fragment_maps:ym,lights_fragment_end:Sm,logdepthbuf_fragment:Em,logdepthbuf_pars_fragment:Tm,logdepthbuf_pars_vertex:bm,logdepthbuf_vertex:Am,map_fragment:wm,map_pars_fragment:Rm,map_particle_fragment:Cm,map_particle_pars_fragment:Pm,metalnessmap_fragment:Lm,metalnessmap_pars_fragment:Dm,morphinstance_vertex:Im,morphcolor_vertex:Um,morphnormal_vertex:Nm,morphtarget_pars_vertex:Om,morphtarget_vertex:Fm,normal_fragment_begin:Bm,normal_fragment_maps:zm,normal_pars_fragment:km,normal_pars_vertex:Hm,normal_vertex:Vm,normalmap_pars_fragment:Gm,clearcoat_normal_fragment_begin:Wm,clearcoat_normal_fragment_maps:Xm,clearcoat_pars_fragment:Ym,iridescence_pars_fragment:qm,opaque_fragment:jm,packing:$m,premultiplied_alpha_fragment:Zm,project_vertex:Km,dithering_fragment:Jm,dithering_pars_fragment:Qm,roughnessmap_fragment:t_,roughnessmap_pars_fragment:e_,shadowmap_pars_fragment:n_,shadowmap_pars_vertex:i_,shadowmap_vertex:r_,shadowmask_pars_fragment:s_,skinbase_vertex:a_,skinning_pars_vertex:o_,skinning_vertex:l_,skinnormal_vertex:c_,specularmap_fragment:h_,specularmap_pars_fragment:u_,tonemapping_fragment:f_,tonemapping_pars_fragment:d_,transmission_fragment:p_,transmission_pars_fragment:m_,uv_pars_fragment:__,uv_pars_vertex:g_,uv_vertex:v_,worldpos_vertex:x_,background_vert:M_,background_frag:y_,backgroundCube_vert:S_,backgroundCube_frag:E_,cube_vert:T_,cube_frag:b_,depth_vert:A_,depth_frag:w_,distanceRGBA_vert:R_,distanceRGBA_frag:C_,equirect_vert:P_,equirect_frag:L_,linedashed_vert:D_,linedashed_frag:I_,meshbasic_vert:U_,meshbasic_frag:N_,meshlambert_vert:O_,meshlambert_frag:F_,meshmatcap_vert:B_,meshmatcap_frag:z_,meshnormal_vert:k_,meshnormal_frag:H_,meshphong_vert:V_,meshphong_frag:G_,meshphysical_vert:W_,meshphysical_frag:X_,meshtoon_vert:Y_,meshtoon_frag:q_,points_vert:j_,points_frag:$_,shadow_vert:Z_,shadow_frag:K_,sprite_vert:J_,sprite_frag:Q_},ft={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},vn={basic:{uniforms:De([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:De([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:De([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:De([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:De([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:De([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:De([ft.points,ft.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:De([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:De([ft.common,ft.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:De([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:De([ft.sprite,ft.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:De([ft.common,ft.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:De([ft.lights,ft.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};vn.physical={uniforms:De([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Ns={r:0,b:0,g:0},Mi=new dn,tg=new ie;function eg(r,t,e,n,i,s,a){const o=new Wt(0);let l=s===!0?0:1,c,h,u=null,f=0,d=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function _(E){let M=!1;const T=g(E);T===null?m(o,l):T&&T.isColor&&(m(T,1),M=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil)}function p(E,M){const T=g(M);T&&(T.isCubeTexture||T.mapping===_a)?(h===void 0&&(h=new On(new us(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Tr(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Mi.copy(M.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tg.makeRotationFromEuler(Mi)),h.material.toneMapped=Jt.getTransfer(T.colorSpace)!==se,(u!==T||f!==T.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=T,f=T.version,d=r.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new On(new xa(2,2),new ci({name:"BackgroundMaterial",uniforms:Tr(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(T.colorSpace)!==se,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=T,f=T.version,d=r.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,M){E.getRGB(Ns,Wh(r)),n.buffers.color.setClear(Ns.r,Ns.g,Ns.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),l=M,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,m(o,l)},render:_,addToRenderList:p}}function ng(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(y,O,z,D,H){let Z=!1;const J=u(D,z,O);s!==J&&(s=J,c(s.object)),Z=d(y,D,z,H),Z&&g(y,D,z,H),H!==null&&t.update(H,r.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,T(y,O,z,D),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function u(y,O,z){const D=z.wireframe===!0;let H=n[y.id];H===void 0&&(H={},n[y.id]=H);let Z=H[O.id];Z===void 0&&(Z={},H[O.id]=Z);let J=Z[D];return J===void 0&&(J=f(l()),Z[D]=J),J}function f(y){const O=[],z=[],D=[];for(let H=0;H<e;H++)O[H]=0,z[H]=0,D[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:D,object:y,attributes:{},index:null}}function d(y,O,z,D){const H=s.attributes,Z=O.attributes;let J=0;const it=z.getAttributes();for(const V in it)if(it[V].location>=0){const rt=H[V];let mt=Z[V];if(mt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),rt===void 0||rt.attribute!==mt||mt&&rt.data!==mt.data)return!0;J++}return s.attributesNum!==J||s.index!==D}function g(y,O,z,D){const H={},Z=O.attributes;let J=0;const it=z.getAttributes();for(const V in it)if(it[V].location>=0){let rt=Z[V];rt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor));const mt={};mt.attribute=rt,rt&&rt.data&&(mt.data=rt.data),H[V]=mt,J++}s.attributes=H,s.attributesNum=J,s.index=D}function _(){const y=s.newAttributes;for(let O=0,z=y.length;O<z;O++)y[O]=0}function p(y){m(y,0)}function m(y,O){const z=s.newAttributes,D=s.enabledAttributes,H=s.attributeDivisors;z[y]=1,D[y]===0&&(r.enableVertexAttribArray(y),D[y]=1),H[y]!==O&&(r.vertexAttribDivisor(y,O),H[y]=O)}function E(){const y=s.newAttributes,O=s.enabledAttributes;for(let z=0,D=O.length;z<D;z++)O[z]!==y[z]&&(r.disableVertexAttribArray(z),O[z]=0)}function M(y,O,z,D,H,Z,J){J===!0?r.vertexAttribIPointer(y,O,z,H,Z):r.vertexAttribPointer(y,O,z,D,H,Z)}function T(y,O,z,D){_();const H=D.attributes,Z=z.getAttributes(),J=O.defaultAttributeValues;for(const it in Z){const V=Z[it];if(V.location>=0){let nt=H[it];if(nt===void 0&&(it==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),it==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor)),nt!==void 0){const rt=nt.normalized,mt=nt.itemSize,Rt=t.get(nt);if(Rt===void 0)continue;const Xt=Rt.buffer,Y=Rt.type,st=Rt.bytesPerElement,vt=Y===r.INT||Y===r.UNSIGNED_INT||nt.gpuType===Ch;if(nt.isInterleavedBufferAttribute){const ht=nt.data,kt=ht.stride,Nt=nt.offset;if(ht.isInstancedInterleavedBuffer){for(let k=0;k<V.locationSize;k++)m(V.location+k,ht.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let k=0;k<V.locationSize;k++)p(V.location+k);r.bindBuffer(r.ARRAY_BUFFER,Xt);for(let k=0;k<V.locationSize;k++)M(V.location+k,mt/V.locationSize,Y,rt,kt*st,(Nt+mt/V.locationSize*k)*st,vt)}else{if(nt.isInstancedBufferAttribute){for(let ht=0;ht<V.locationSize;ht++)m(V.location+ht,nt.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let ht=0;ht<V.locationSize;ht++)p(V.location+ht);r.bindBuffer(r.ARRAY_BUFFER,Xt);for(let ht=0;ht<V.locationSize;ht++)M(V.location+ht,mt/V.locationSize,Y,rt,mt*st,mt/V.locationSize*ht*st,vt)}}else if(J!==void 0){const rt=J[it];if(rt!==void 0)switch(rt.length){case 2:r.vertexAttrib2fv(V.location,rt);break;case 3:r.vertexAttrib3fv(V.location,rt);break;case 4:r.vertexAttrib4fv(V.location,rt);break;default:r.vertexAttrib1fv(V.location,rt)}}}}E()}function C(){P();for(const y in n){const O=n[y];for(const z in O){const D=O[z];for(const H in D)h(D[H].object),delete D[H];delete O[z]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const O=n[y.id];for(const z in O){const D=O[z];for(const H in D)h(D[H].object),delete D[H];delete O[z]}delete n[y.id]}function A(y){for(const O in n){const z=n[O];if(z[y.id]===void 0)continue;const D=z[y.id];for(const H in D)h(D[H].object),delete D[H];delete z[y.id]}}function P(){S(),a=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:E}}function ig(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<u;d++)this.render(c[d],h[d]);else{f.multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<f.length;_++)e.update(g,n,f[_])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function rg(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==Mn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const A=w===ga&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==li&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Qn&&!A)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=d>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:m,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:T,maxSamples:C}}function sg(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Kn,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const E=s?0:n,M=E*4;let T=m.clippingState||null;l.value=T,T=h(g,f,M,d);for(let C=0;C!==M;++C)T[C]=e[C];m.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,T=d;M!==_;++M,T+=4)a.copy(u[M]).applyMatrix4(E,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function ag(r){let t=new WeakMap;function e(a,o){return o===Eo?a.mapping=yr:o===To&&(a.mapping=Sr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Eo||o===To)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new gp(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class jh extends Xh{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ur=4,Sc=[.125,.215,.35,.446,.526,.582],wi=20,Ja=new jh,Ec=new Wt;let Qa=null,to=0,eo=0,no=!1;const Ti=(1+Math.sqrt(5))/2,sr=1/Ti,Tc=[new I(-Ti,sr,0),new I(Ti,sr,0),new I(-sr,0,Ti),new I(sr,0,Ti),new I(0,Ti,-sr),new I(0,Ti,sr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class bc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Qa=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qa,to,eo),this._renderer.xr.enabled=no,t.scissorTest=!1,Os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yr||t.mapping===Sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qa=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:ga,format:Mn,colorSpace:di,depthBuffer:!1},i=Ac(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ac(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=og(s)),this._blurMaterial=lg(s,t,e)}return i}_compileMaterial(t){const e=new On(this._lodPlanes[0],t);this._renderer.compile(e,Ja)}_sceneToCubeUV(t,e,n,i){const o=new en(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ec),h.toneMapping=ri,h.autoClear=!1;const d=new Hh({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),g=new On(new us,d);let _=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(Ec),_=!0);for(let m=0;m<6;m++){const E=m%3;E===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):E===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const M=this._cubeSize;Os(i,E*M,m>2?M:0,M,M),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===yr||t.mapping===Sr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new On(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Os(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ja)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Tc[(i-s-1)%Tc.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new On(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*wi-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):wi;p>wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wi}`);const m=[];let E=0;for(let A=0;A<wi;++A){const P=A/_,S=Math.exp(-P*P/2);m.push(S),A===0?E+=S:A<p&&(E+=2*S)}for(let A=0;A<m.length;A++)m[A]=m[A]/E;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const T=this._sizeLods[i],C=3*T*(i>M-ur?i-M+ur:0),w=4*(this._cubeSize-T);Os(e,C,w,3*T,2*T),l.setRenderTarget(e),l.render(u,Ja)}}function og(r){const t=[],e=[],n=[];let i=r;const s=r-ur+1+Sc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-ur?l=Sc[a-r+ur-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,p=2,m=1,E=new Float32Array(_*g*d),M=new Float32Array(p*g*d),T=new Float32Array(m*g*d);for(let w=0;w<d;w++){const A=w%3*2/3-1,P=w>2?0:-1,S=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];E.set(S,_*g*w),M.set(f,p*g*w);const y=[w,w,w,w,w,w];T.set(y,m*g*w)}const C=new Te;C.setAttribute("position",new fn(E,_)),C.setAttribute("uv",new fn(M,p)),C.setAttribute("faceIndex",new fn(T,m)),t.push(C),i>ur&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ac(r,t,e){const n=new Ni(r,t,e);return n.texture.mapping=_a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Os(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function lg(r,t,e){const n=new Float32Array(wi),i=new I(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function wc(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Rc(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Jo(){return`

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
	`}function cg(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Eo||l===To,h=l===yr||l===Sr;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new bc(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new bc(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function hg(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ug(r,t,e,n){const i={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],r.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],r.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const E=d.array;_=d.version;for(let M=0,T=E.length;M<T;M+=3){const C=E[M+0],w=E[M+1],A=E[M+2];f.push(C,w,w,A,A,C)}}else if(g!==void 0){const E=g.array;_=g.version;for(let M=0,T=E.length/3-1;M<T;M+=3){const C=M+0,w=M+1,A=M+2;f.push(C,w,w,A,A,C)}}else return;const p=new(Oh(f)?Gh:Vh)(f,1);p.version=_;const m=s.get(u);m&&t.remove(m),s.set(u,p)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function fg(r,t,e){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*a),e.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*a,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<g;p++)this.render(f[p]/a,d[p]);else{_.multiDrawElementsWEBGL(n,d,0,s,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}}function u(f,d,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/a,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let m=0;for(let E=0;E<g;E++)m+=d[E];for(let E=0;E<_.length;E++)e.update(m,n,_[E])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function dg(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function pg(r,t,e){const n=new WeakMap,i=new oe;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let S=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;d===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let T=o.attributes.position.count*M,C=1;T>t.maxTextureSize&&(C=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const w=new Float32Array(T*C*4*u),A=new zh(w,T,C,u);A.type=Qn,A.needsUpdate=!0;const P=M*4;for(let y=0;y<u;y++){const O=p[y],z=m[y],D=E[y],H=T*C*4*y;for(let Z=0;Z<O.count;Z++){const J=Z*P;d===!0&&(i.fromBufferAttribute(O,Z),w[H+J+0]=i.x,w[H+J+1]=i.y,w[H+J+2]=i.z,w[H+J+3]=0),g===!0&&(i.fromBufferAttribute(z,Z),w[H+J+4]=i.x,w[H+J+5]=i.y,w[H+J+6]=i.z,w[H+J+7]=0),_===!0&&(i.fromBufferAttribute(D,Z),w[H+J+8]=i.x,w[H+J+9]=i.y,w[H+J+10]=i.z,w[H+J+11]=D.itemSize===4?i.w:1)}}f={count:u,texture:A,size:new yt(T,C)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function mg(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class $h extends Ie{constructor(t,e,n,i,s,a,o,l,c,h){if(h=h!==void 0?h:mr,h!==mr&&h!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===mr&&(n=Er),n===void 0&&h===Kr&&(n=os),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Zh=new Ie,Kh=new $h(1,1);Kh.compareFunction=Nh;const Jh=new zh,Qh=new ep,tu=new Yh,Cc=[],Pc=[],Lc=new Float32Array(16),Dc=new Float32Array(9),Ic=new Float32Array(4);function Pr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Cc[i];if(s===void 0&&(s=new Float32Array(i),Cc[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ve(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function xe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ma(r,t){let e=Pc[t];e===void 0&&(e=new Int32Array(t),Pc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function _g(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function gg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;r.uniform2fv(this.addr,t),xe(e,t)}}function vg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;r.uniform3fv(this.addr,t),xe(e,t)}}function xg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;r.uniform4fv(this.addr,t),xe(e,t)}}function Mg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Ic.set(n),r.uniformMatrix2fv(this.addr,!1,Ic),xe(e,n)}}function yg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Dc.set(n),r.uniformMatrix3fv(this.addr,!1,Dc),xe(e,n)}}function Sg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Lc.set(n),r.uniformMatrix4fv(this.addr,!1,Lc),xe(e,n)}}function Eg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Tg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;r.uniform2iv(this.addr,t),xe(e,t)}}function bg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;r.uniform3iv(this.addr,t),xe(e,t)}}function Ag(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;r.uniform4iv(this.addr,t),xe(e,t)}}function wg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Rg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;r.uniform2uiv(this.addr,t),xe(e,t)}}function Cg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;r.uniform3uiv(this.addr,t),xe(e,t)}}function Pg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;r.uniform4uiv(this.addr,t),xe(e,t)}}function Lg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Kh:Zh;e.setTexture2D(t||s,i)}function Dg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Qh,i)}function Ig(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||tu,i)}function Ug(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Jh,i)}function Ng(r){switch(r){case 5126:return _g;case 35664:return gg;case 35665:return vg;case 35666:return xg;case 35674:return Mg;case 35675:return yg;case 35676:return Sg;case 5124:case 35670:return Eg;case 35667:case 35671:return Tg;case 35668:case 35672:return bg;case 35669:case 35673:return Ag;case 5125:return wg;case 36294:return Rg;case 36295:return Cg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Ug}}function Og(r,t){r.uniform1fv(this.addr,t)}function Fg(r,t){const e=Pr(t,this.size,2);r.uniform2fv(this.addr,e)}function Bg(r,t){const e=Pr(t,this.size,3);r.uniform3fv(this.addr,e)}function zg(r,t){const e=Pr(t,this.size,4);r.uniform4fv(this.addr,e)}function kg(r,t){const e=Pr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Hg(r,t){const e=Pr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Vg(r,t){const e=Pr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Gg(r,t){r.uniform1iv(this.addr,t)}function Wg(r,t){r.uniform2iv(this.addr,t)}function Xg(r,t){r.uniform3iv(this.addr,t)}function Yg(r,t){r.uniform4iv(this.addr,t)}function qg(r,t){r.uniform1uiv(this.addr,t)}function jg(r,t){r.uniform2uiv(this.addr,t)}function $g(r,t){r.uniform3uiv(this.addr,t)}function Zg(r,t){r.uniform4uiv(this.addr,t)}function Kg(r,t,e){const n=this.cache,i=t.length,s=Ma(e,i);ve(n,s)||(r.uniform1iv(this.addr,s),xe(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Zh,s[a])}function Jg(r,t,e){const n=this.cache,i=t.length,s=Ma(e,i);ve(n,s)||(r.uniform1iv(this.addr,s),xe(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Qh,s[a])}function Qg(r,t,e){const n=this.cache,i=t.length,s=Ma(e,i);ve(n,s)||(r.uniform1iv(this.addr,s),xe(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||tu,s[a])}function t0(r,t,e){const n=this.cache,i=t.length,s=Ma(e,i);ve(n,s)||(r.uniform1iv(this.addr,s),xe(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Jh,s[a])}function e0(r){switch(r){case 5126:return Og;case 35664:return Fg;case 35665:return Bg;case 35666:return zg;case 35674:return kg;case 35675:return Hg;case 35676:return Vg;case 5124:case 35670:return Gg;case 35667:case 35671:return Wg;case 35668:case 35672:return Xg;case 35669:case 35673:return Yg;case 5125:return qg;case 36294:return jg;case 36295:return $g;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Kg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return Qg;case 36289:case 36303:case 36311:case 36292:return t0}}class n0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ng(e.type)}}class i0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=e0(e.type)}}class r0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const io=/(\w+)(\])?(\[|\.)?/g;function Uc(r,t){r.seq.push(t),r.map[t.id]=t}function s0(r,t,e){const n=r.name,i=n.length;for(io.lastIndex=0;;){const s=io.exec(n),a=io.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Uc(e,c===void 0?new n0(o,r,t):new i0(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new r0(o),Uc(e,u)),e=u}}}class Zs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);s0(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Nc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const a0=37297;let o0=0;function l0(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function c0(r){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(r);let n;switch(t===e?n="":t===ia&&e===na?n="LinearDisplayP3ToLinearSRGB":t===na&&e===ia&&(n="LinearSRGBToLinearDisplayP3"),r){case di:case va:return[n,"LinearTransferOETF"];case _n:case jo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Oc(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+l0(r.getShaderSource(t),a)}else return i}function h0(r,t){const e=c0(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function u0(r,t){let e;switch(t){case rd:e="Linear";break;case sd:e="Reinhard";break;case ad:e="OptimizedCineon";break;case od:e="ACESFilmic";break;case cd:e="AgX";break;case hd:e="Neutral";break;case ld:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function f0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function d0(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function p0(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Wr(r){return r!==""}function Fc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const m0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ro(r){return r.replace(m0,g0)}const _0=new Map;function g0(r,t){let e=Bt[t];if(e===void 0){const n=_0.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ro(e)}const v0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zc(r){return r.replace(v0,x0)}function x0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function kc(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function M0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ah?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Pf?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function y0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case yr:case Sr:t="ENVMAP_TYPE_CUBE";break;case _a:t="ENVMAP_TYPE_CUBE_UV";break}return t}function S0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Sr:t="ENVMAP_MODE_REFRACTION";break}return t}function E0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Yo:t="ENVMAP_BLENDING_MULTIPLY";break;case nd:t="ENVMAP_BLENDING_MIX";break;case id:t="ENVMAP_BLENDING_ADD";break}return t}function T0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function b0(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=M0(e),c=y0(e),h=S0(e),u=E0(e),f=T0(e),d=f0(e),g=d0(s),_=i.createProgram();let p,m,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wr).join(`
`),m.length>0&&(m+=`
`)):(p=[kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),m=[kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?Bt.tonemapping_pars_fragment:"",e.toneMapping!==ri?u0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,h0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wr).join(`
`)),a=Ro(a),a=Fc(a,e),a=Bc(a,e),o=Ro(o),o=Fc(o,e),o=Bc(o,e),a=zc(a),o=zc(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=E+p+a,T=E+m+o,C=Nc(i,i.VERTEX_SHADER,M),w=Nc(i,i.FRAGMENT_SHADER,T);i.attachShader(_,C),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(O){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),D=i.getShaderInfoLog(C).trim(),H=i.getShaderInfoLog(w).trim();let Z=!0,J=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,w);else{const it=Oc(i,C,"vertex"),V=Oc(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+z+`
`+it+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(D===""||H==="")&&(J=!1);J&&(O.diagnostics={runnable:Z,programLog:z,vertexShader:{log:D,prefix:p},fragmentShader:{log:H,prefix:m}})}i.deleteShader(C),i.deleteShader(w),P=new Zs(i,_),S=p0(i,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,a0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=o0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}let A0=0;class w0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new R0(t),e.set(t,n)),n}}class R0{constructor(t){this.id=A0++,this.code=t,this.usedTimes=0}}function C0(r,t,e,n,i,s,a){const o=new Zo,l=new w0,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,y,O,z,D){const H=z.fog,Z=D.geometry,J=S.isMeshStandardMaterial?z.environment:null,it=(S.isMeshStandardMaterial?e:t).get(S.envMap||J),V=!!it&&it.mapping===_a?it.image.height:null,nt=g[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const rt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,mt=rt!==void 0?rt.length:0;let Rt=0;Z.morphAttributes.position!==void 0&&(Rt=1),Z.morphAttributes.normal!==void 0&&(Rt=2),Z.morphAttributes.color!==void 0&&(Rt=3);let Xt,Y,st,vt;if(nt){const It=vn[nt];Xt=It.vertexShader,Y=It.fragmentShader}else Xt=S.vertexShader,Y=S.fragmentShader,l.update(S),st=l.getVertexShaderID(S),vt=l.getFragmentShaderID(S);const ht=r.getRenderTarget(),kt=D.isInstancedMesh===!0,Nt=D.isBatchedMesh===!0,k=!!S.map,qt=!!S.matcap,At=!!it,jt=!!S.aoMap,wt=!!S.lightMap,Ht=!!S.bumpMap,Pt=!!S.normalMap,Vt=!!S.displacementMap,re=!!S.emissiveMap,L=!!S.metalnessMap,b=!!S.roughnessMap,q=S.anisotropy>0,x=S.clearcoat>0,F=S.dispersion>0,G=S.iridescence>0,ot=S.sheen>0,Q=S.transmission>0,tt=q&&!!S.anisotropyMap,ct=x&&!!S.clearcoatMap,K=x&&!!S.clearcoatNormalMap,ut=x&&!!S.clearcoatRoughnessMap,bt=G&&!!S.iridescenceMap,_t=G&&!!S.iridescenceThicknessMap,at=ot&&!!S.sheenColorMap,xt=ot&&!!S.sheenRoughnessMap,lt=!!S.specularMap,Mt=!!S.specularColorMap,gt=!!S.specularIntensityMap,v=Q&&!!S.transmissionMap,U=Q&&!!S.thicknessMap,N=!!S.gradientMap,$=!!S.alphaMap,et=S.alphaTest>0,pt=!!S.alphaHash,St=!!S.extensions;let Ot=ri;S.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Ot=r.toneMapping);const Kt={shaderID:nt,shaderType:S.type,shaderName:S.name,vertexShader:Xt,fragmentShader:Y,defines:S.defines,customVertexShaderID:st,customFragmentShaderID:vt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Nt,instancing:kt,instancingColor:kt&&D.instanceColor!==null,instancingMorph:kt&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ht===null?r.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:di,alphaToCoverage:!!S.alphaToCoverage,map:k,matcap:qt,envMap:At,envMapMode:At&&it.mapping,envMapCubeUVHeight:V,aoMap:jt,lightMap:wt,bumpMap:Ht,normalMap:Pt,displacementMap:f&&Vt,emissiveMap:re,normalMapObjectSpace:Pt&&S.normalMapType===Td,normalMapTangentSpace:Pt&&S.normalMapType===qo,metalnessMap:L,roughnessMap:b,anisotropy:q,anisotropyMap:tt,clearcoat:x,clearcoatMap:ct,clearcoatNormalMap:K,clearcoatRoughnessMap:ut,dispersion:F,iridescence:G,iridescenceMap:bt,iridescenceThicknessMap:_t,sheen:ot,sheenColorMap:at,sheenRoughnessMap:xt,specularMap:lt,specularColorMap:Mt,specularIntensityMap:gt,transmission:Q,transmissionMap:v,thicknessMap:U,gradientMap:N,opaque:S.transparent===!1&&S.blending===pr&&S.alphaToCoverage===!1,alphaMap:$,alphaTest:et,alphaHash:pt,combine:S.combine,mapUv:k&&_(S.map.channel),aoMapUv:jt&&_(S.aoMap.channel),lightMapUv:wt&&_(S.lightMap.channel),bumpMapUv:Ht&&_(S.bumpMap.channel),normalMapUv:Pt&&_(S.normalMap.channel),displacementMapUv:Vt&&_(S.displacementMap.channel),emissiveMapUv:re&&_(S.emissiveMap.channel),metalnessMapUv:L&&_(S.metalnessMap.channel),roughnessMapUv:b&&_(S.roughnessMap.channel),anisotropyMapUv:tt&&_(S.anisotropyMap.channel),clearcoatMapUv:ct&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:K&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:at&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(S.sheenRoughnessMap.channel),specularMapUv:lt&&_(S.specularMap.channel),specularColorMapUv:Mt&&_(S.specularColorMap.channel),specularIntensityMapUv:gt&&_(S.specularIntensityMap.channel),transmissionMapUv:v&&_(S.transmissionMap.channel),thicknessMapUv:U&&_(S.thicknessMap.channel),alphaMapUv:$&&_(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Pt||q),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!Z.attributes.uv&&(k||$),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:D.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Rt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ot,useLegacyLights:r._useLegacyLights,decodeVideoTexture:k&&S.map.isVideoTexture===!0&&Jt.getTransfer(S.map.colorSpace)===se,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Un,flipSided:S.side===Ne,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:St&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:St&&S.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Kt.vertexUv1s=c.has(1),Kt.vertexUv2s=c.has(2),Kt.vertexUv3s=c.has(3),c.clear(),Kt}function m(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const O in S.defines)y.push(O),y.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(E(y,S),M(y,S),y.push(r.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function E(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),S.push(o.mask)}function T(S){const y=g[S.type];let O;if(y){const z=vn[y];O=dp.clone(z.uniforms)}else O=S.uniforms;return O}function C(S,y){let O;for(let z=0,D=h.length;z<D;z++){const H=h[z];if(H.cacheKey===y){O=H,++O.usedTimes;break}}return O===void 0&&(O=new b0(r,y,S,s),h.push(O)),O}function w(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function A(S){l.remove(S)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:T,acquireProgram:C,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:P}}function P0(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function L0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Hc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Vc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,d,g,_,p){let m=r[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},r[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),t++,m}function o(u,f,d,g,_,p){const m=a(u,f,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(u,f,d,g,_,p){const m=a(u,f,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||L0),n.length>1&&n.sort(f||Hc),i.length>1&&i.sort(f||Hc)}function h(){for(let u=t,f=r.length;u<f;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function D0(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Vc,r.set(n,[a])):i>=s.length?(a=new Vc,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function I0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Wt};break;case"SpotLight":e={position:new I,direction:new I,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new I,halfWidth:new I,halfHeight:new I};break}return r[t.id]=e,e}}}function U0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let N0=0;function O0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function F0(r){const t=new I0,e=U0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,s=new ie,a=new ie;function o(c,h){let u=0,f=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let g=0,_=0,p=0,m=0,E=0,M=0,T=0,C=0,w=0,A=0,P=0;c.sort(O0);const S=h===!0?Math.PI:1;for(let O=0,z=c.length;O<z;O++){const D=c[O],H=D.color,Z=D.intensity,J=D.distance,it=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=H.r*Z*S,f+=H.g*Z*S,d+=H.b*Z*S;else if(D.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(D.sh.coefficients[V],Z);P++}else if(D.isDirectionalLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){const nt=D.shadow,rt=e.get(D);rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,n.directionalShadow[g]=rt,n.directionalShadowMap[g]=it,n.directionalShadowMatrix[g]=D.shadow.matrix,M++}n.directional[g]=V,g++}else if(D.isSpotLight){const V=t.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(H).multiplyScalar(Z*S),V.distance=J,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,n.spot[p]=V;const nt=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,nt.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[p]=nt.matrix,D.castShadow){const rt=e.get(D);rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,n.spotShadow[p]=rt,n.spotShadowMap[p]=it,C++}p++}else if(D.isRectAreaLight){const V=t.get(D);V.color.copy(H).multiplyScalar(Z),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=V,m++}else if(D.isPointLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity*S),V.distance=D.distance,V.decay=D.decay,D.castShadow){const nt=D.shadow,rt=e.get(D);rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,rt.shadowCameraNear=nt.camera.near,rt.shadowCameraFar=nt.camera.far,n.pointShadow[_]=rt,n.pointShadowMap[_]=it,n.pointShadowMatrix[_]=D.shadow.matrix,T++}n.point[_]=V,_++}else if(D.isHemisphereLight){const V=t.get(D);V.skyColor.copy(D.color).multiplyScalar(Z*S),V.groundColor.copy(D.groundColor).multiplyScalar(Z*S),n.hemi[E]=V,E++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const y=n.hash;(y.directionalLength!==g||y.pointLength!==_||y.spotLength!==p||y.rectAreaLength!==m||y.hemiLength!==E||y.numDirectionalShadows!==M||y.numPointShadows!==T||y.numSpotShadows!==C||y.numSpotMaps!==w||y.numLightProbes!==P)&&(n.directional.length=g,n.spot.length=p,n.rectArea.length=m,n.point.length=_,n.hemi.length=E,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=C+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,y.directionalLength=g,y.pointLength=_,y.spotLength=p,y.rectAreaLength=m,y.hemiLength=E,y.numDirectionalShadows=M,y.numPointShadows=T,y.numSpotShadows=C,y.numSpotMaps=w,y.numLightProbes=P,n.version=N0++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,E=c.length;m<E;m++){const M=c[m];if(M.isDirectionalLight){const T=n.directional[u];T.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(p),u++}else if(M.isSpotLight){const T=n.spot[d];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(p),d++}else if(M.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const T=n.point[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const T=n.hemi[_];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function Gc(r){const t=new F0(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(h){t.setup(e,h)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function B0(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new Gc(r),t.set(i,[o])):s>=a.length?(o=new Gc(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class z0 extends kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class k0 extends kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const H0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V0=`uniform sampler2D shadow_pass;
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
}`;function G0(r,t,e){let n=new Ko;const i=new yt,s=new yt,a=new oe,o=new z0({depthPacking:Ed}),l=new k0,c={},h=e.maxTextureSize,u={[oi]:Ne,[Ne]:oi,[Un]:Un},f=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:H0,fragmentShader:V0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Te;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new On(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ah;let m=this.type;this.render=function(w,A,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const S=r.getRenderTarget(),y=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),z=r.state;z.setBlending(ii),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const D=m!==Ln&&this.type===Ln,H=m===Ln&&this.type!==Ln;for(let Z=0,J=w.length;Z<J;Z++){const it=w[Z],V=it.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const nt=V.getFrameExtents();if(i.multiply(nt),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/nt.x),i.x=s.x*nt.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/nt.y),i.y=s.y*nt.y,V.mapSize.y=s.y)),V.map===null||D===!0||H===!0){const mt=this.type!==Ln?{minFilter:rn,magFilter:rn}:{};V.map!==null&&V.map.dispose(),V.map=new Ni(i.x,i.y,mt),V.map.texture.name=it.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const rt=V.getViewportCount();for(let mt=0;mt<rt;mt++){const Rt=V.getViewport(mt);a.set(s.x*Rt.x,s.y*Rt.y,s.x*Rt.z,s.y*Rt.w),z.viewport(a),V.updateMatrices(it,mt),n=V.getFrustum(),T(A,P,V.camera,it,this.type)}V.isPointLightShadow!==!0&&this.type===Ln&&E(V,P),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(S,y,O)};function E(w,A){const P=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ni(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(A,null,P,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(A,null,P,d,_,null)}function M(w,A,P,S){let y=null;const O=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)y=O;else if(y=P.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=y.uuid,D=A.uuid;let H=c[z];H===void 0&&(H={},c[z]=H);let Z=H[D];Z===void 0&&(Z=y.clone(),H[D]=Z,A.addEventListener("dispose",C)),y=Z}if(y.visible=A.visible,y.wireframe=A.wireframe,S===Ln?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=r.properties.get(y);z.light=P}return y}function T(w,A,P,S,y){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Ln)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const D=t.update(w),H=w.material;if(Array.isArray(H)){const Z=D.groups;for(let J=0,it=Z.length;J<it;J++){const V=Z[J],nt=H[V.materialIndex];if(nt&&nt.visible){const rt=M(w,nt,S,y);w.onBeforeShadow(r,w,A,P,D,rt,V),r.renderBufferDirect(P,null,D,rt,w,V),w.onAfterShadow(r,w,A,P,D,rt,V)}}}else if(H.visible){const Z=M(w,H,S,y);w.onBeforeShadow(r,w,A,P,D,Z,null),r.renderBufferDirect(P,null,D,Z,w,null),w.onAfterShadow(r,w,A,P,D,Z,null)}}const z=w.children;for(let D=0,H=z.length;D<H;D++)T(z[D],A,P,S,y)}function C(w){w.target.removeEventListener("dispose",C);for(const P in c){const S=c[P],y=w.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}function W0(r){function t(){let v=!1;const U=new oe;let N=null;const $=new oe(0,0,0,0);return{setMask:function(et){N!==et&&!v&&(r.colorMask(et,et,et,et),N=et)},setLocked:function(et){v=et},setClear:function(et,pt,St,Ot,Kt){Kt===!0&&(et*=Ot,pt*=Ot,St*=Ot),U.set(et,pt,St,Ot),$.equals(U)===!1&&(r.clearColor(et,pt,St,Ot),$.copy(U))},reset:function(){v=!1,N=null,$.set(-1,0,0,0)}}}function e(){let v=!1,U=null,N=null,$=null;return{setTest:function(et){et?vt(r.DEPTH_TEST):ht(r.DEPTH_TEST)},setMask:function(et){U!==et&&!v&&(r.depthMask(et),U=et)},setFunc:function(et){if(N!==et){switch(et){case $f:r.depthFunc(r.NEVER);break;case Zf:r.depthFunc(r.ALWAYS);break;case Kf:r.depthFunc(r.LESS);break;case ta:r.depthFunc(r.LEQUAL);break;case Jf:r.depthFunc(r.EQUAL);break;case Qf:r.depthFunc(r.GEQUAL);break;case td:r.depthFunc(r.GREATER);break;case ed:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}N=et}},setLocked:function(et){v=et},setClear:function(et){$!==et&&(r.clearDepth(et),$=et)},reset:function(){v=!1,U=null,N=null,$=null}}}function n(){let v=!1,U=null,N=null,$=null,et=null,pt=null,St=null,Ot=null,Kt=null;return{setTest:function(It){v||(It?vt(r.STENCIL_TEST):ht(r.STENCIL_TEST))},setMask:function(It){U!==It&&!v&&(r.stencilMask(It),U=It)},setFunc:function(It,te,Ut){(N!==It||$!==te||et!==Ut)&&(r.stencilFunc(It,te,Ut),N=It,$=te,et=Ut)},setOp:function(It,te,Ut){(pt!==It||St!==te||Ot!==Ut)&&(r.stencilOp(It,te,Ut),pt=It,St=te,Ot=Ut)},setLocked:function(It){v=It},setClear:function(It){Kt!==It&&(r.clearStencil(It),Kt=It)},reset:function(){v=!1,U=null,N=null,$=null,et=null,pt=null,St=null,Ot=null,Kt=null}}}const i=new t,s=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],d=null,g=!1,_=null,p=null,m=null,E=null,M=null,T=null,C=null,w=new Wt(0,0,0),A=0,P=!1,S=null,y=null,O=null,z=null,D=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,J=0;const it=r.getParameter(r.VERSION);it.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(it)[1]),Z=J>=1):it.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),Z=J>=2);let V=null,nt={};const rt=r.getParameter(r.SCISSOR_BOX),mt=r.getParameter(r.VIEWPORT),Rt=new oe().fromArray(rt),Xt=new oe().fromArray(mt);function Y(v,U,N,$){const et=new Uint8Array(4),pt=r.createTexture();r.bindTexture(v,pt),r.texParameteri(v,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(v,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let St=0;St<N;St++)v===r.TEXTURE_3D||v===r.TEXTURE_2D_ARRAY?r.texImage3D(U,0,r.RGBA,1,1,$,0,r.RGBA,r.UNSIGNED_BYTE,et):r.texImage2D(U+St,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,et);return pt}const st={};st[r.TEXTURE_2D]=Y(r.TEXTURE_2D,r.TEXTURE_2D,1),st[r.TEXTURE_CUBE_MAP]=Y(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[r.TEXTURE_2D_ARRAY]=Y(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),st[r.TEXTURE_3D]=Y(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),vt(r.DEPTH_TEST),s.setFunc(ta),Ht(!1),Pt(Tl),vt(r.CULL_FACE),jt(ii);function vt(v){c[v]!==!0&&(r.enable(v),c[v]=!0)}function ht(v){c[v]!==!1&&(r.disable(v),c[v]=!1)}function kt(v,U){return h[v]!==U?(r.bindFramebuffer(v,U),h[v]=U,v===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=U),v===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=U),!0):!1}function Nt(v,U){let N=f,$=!1;if(v){N=u.get(U),N===void 0&&(N=[],u.set(U,N));const et=v.textures;if(N.length!==et.length||N[0]!==r.COLOR_ATTACHMENT0){for(let pt=0,St=et.length;pt<St;pt++)N[pt]=r.COLOR_ATTACHMENT0+pt;N.length=et.length,$=!0}}else N[0]!==r.BACK&&(N[0]=r.BACK,$=!0);$&&r.drawBuffers(N)}function k(v){return d!==v?(r.useProgram(v),d=v,!0):!1}const qt={[Ai]:r.FUNC_ADD,[Df]:r.FUNC_SUBTRACT,[If]:r.FUNC_REVERSE_SUBTRACT};qt[Uf]=r.MIN,qt[Nf]=r.MAX;const At={[Of]:r.ZERO,[Ff]:r.ONE,[Bf]:r.SRC_COLOR,[yo]:r.SRC_ALPHA,[Wf]:r.SRC_ALPHA_SATURATE,[Vf]:r.DST_COLOR,[kf]:r.DST_ALPHA,[zf]:r.ONE_MINUS_SRC_COLOR,[So]:r.ONE_MINUS_SRC_ALPHA,[Gf]:r.ONE_MINUS_DST_COLOR,[Hf]:r.ONE_MINUS_DST_ALPHA,[Xf]:r.CONSTANT_COLOR,[Yf]:r.ONE_MINUS_CONSTANT_COLOR,[qf]:r.CONSTANT_ALPHA,[jf]:r.ONE_MINUS_CONSTANT_ALPHA};function jt(v,U,N,$,et,pt,St,Ot,Kt,It){if(v===ii){g===!0&&(ht(r.BLEND),g=!1);return}if(g===!1&&(vt(r.BLEND),g=!0),v!==Lf){if(v!==_||It!==P){if((p!==Ai||M!==Ai)&&(r.blendEquation(r.FUNC_ADD),p=Ai,M=Ai),It)switch(v){case pr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bl:r.blendFunc(r.ONE,r.ONE);break;case Al:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case wl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case pr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Al:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case wl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}m=null,E=null,T=null,C=null,w.set(0,0,0),A=0,_=v,P=It}return}et=et||U,pt=pt||N,St=St||$,(U!==p||et!==M)&&(r.blendEquationSeparate(qt[U],qt[et]),p=U,M=et),(N!==m||$!==E||pt!==T||St!==C)&&(r.blendFuncSeparate(At[N],At[$],At[pt],At[St]),m=N,E=$,T=pt,C=St),(Ot.equals(w)===!1||Kt!==A)&&(r.blendColor(Ot.r,Ot.g,Ot.b,Kt),w.copy(Ot),A=Kt),_=v,P=!1}function wt(v,U){v.side===Un?ht(r.CULL_FACE):vt(r.CULL_FACE);let N=v.side===Ne;U&&(N=!N),Ht(N),v.blending===pr&&v.transparent===!1?jt(ii):jt(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),s.setFunc(v.depthFunc),s.setTest(v.depthTest),s.setMask(v.depthWrite),i.setMask(v.colorWrite);const $=v.stencilWrite;a.setTest($),$&&(a.setMask(v.stencilWriteMask),a.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),a.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),re(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?vt(r.SAMPLE_ALPHA_TO_COVERAGE):ht(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(v){S!==v&&(v?r.frontFace(r.CW):r.frontFace(r.CCW),S=v)}function Pt(v){v!==Rf?(vt(r.CULL_FACE),v!==y&&(v===Tl?r.cullFace(r.BACK):v===Cf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ht(r.CULL_FACE),y=v}function Vt(v){v!==O&&(Z&&r.lineWidth(v),O=v)}function re(v,U,N){v?(vt(r.POLYGON_OFFSET_FILL),(z!==U||D!==N)&&(r.polygonOffset(U,N),z=U,D=N)):ht(r.POLYGON_OFFSET_FILL)}function L(v){v?vt(r.SCISSOR_TEST):ht(r.SCISSOR_TEST)}function b(v){v===void 0&&(v=r.TEXTURE0+H-1),V!==v&&(r.activeTexture(v),V=v)}function q(v,U,N){N===void 0&&(V===null?N=r.TEXTURE0+H-1:N=V);let $=nt[N];$===void 0&&($={type:void 0,texture:void 0},nt[N]=$),($.type!==v||$.texture!==U)&&(V!==N&&(r.activeTexture(N),V=N),r.bindTexture(v,U||st[v]),$.type=v,$.texture=U)}function x(){const v=nt[V];v!==void 0&&v.type!==void 0&&(r.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function F(){try{r.compressedTexImage2D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function G(){try{r.compressedTexImage3D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ot(){try{r.texSubImage2D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Q(){try{r.texSubImage3D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function tt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ct(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function K(){try{r.texStorage2D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ut(){try{r.texStorage3D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function bt(){try{r.texImage2D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function _t(){try{r.texImage3D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function at(v){Rt.equals(v)===!1&&(r.scissor(v.x,v.y,v.z,v.w),Rt.copy(v))}function xt(v){Xt.equals(v)===!1&&(r.viewport(v.x,v.y,v.z,v.w),Xt.copy(v))}function lt(v,U){let N=l.get(U);N===void 0&&(N=new WeakMap,l.set(U,N));let $=N.get(v);$===void 0&&($=r.getUniformBlockIndex(U,v.name),N.set(v,$))}function Mt(v,U){const $=l.get(U).get(v);o.get(U)!==$&&(r.uniformBlockBinding(U,$,v.__bindingPointIndex),o.set(U,$))}function gt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},V=null,nt={},h={},u=new WeakMap,f=[],d=null,g=!1,_=null,p=null,m=null,E=null,M=null,T=null,C=null,w=new Wt(0,0,0),A=0,P=!1,S=null,y=null,O=null,z=null,D=null,Rt.set(0,0,r.canvas.width,r.canvas.height),Xt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:vt,disable:ht,bindFramebuffer:kt,drawBuffers:Nt,useProgram:k,setBlending:jt,setMaterial:wt,setFlipSided:Ht,setCullFace:Pt,setLineWidth:Vt,setPolygonOffset:re,setScissorTest:L,activeTexture:b,bindTexture:q,unbindTexture:x,compressedTexImage2D:F,compressedTexImage3D:G,texImage2D:bt,texImage3D:_t,updateUBOMapping:lt,uniformBlockBinding:Mt,texStorage2D:K,texStorage3D:ut,texSubImage2D:ot,texSubImage3D:Q,compressedTexSubImage2D:tt,compressedTexSubImage3D:ct,scissor:at,viewport:xt,reset:gt}}function X0(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new yt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,b){return d?new OffscreenCanvas(L,b):sa("canvas")}function _(L,b,q){let x=1;const F=re(L);if((F.width>q||F.height>q)&&(x=q/Math.max(F.width,F.height)),x<1)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap||typeof VideoFrame!="undefined"&&L instanceof VideoFrame){const G=Math.floor(x*F.width),ot=Math.floor(x*F.height);u===void 0&&(u=g(G,ot));const Q=b?g(G,ot):u;return Q.width=G,Q.height=ot,Q.getContext("2d").drawImage(L,0,0,G,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+G+"x"+ot+")."),Q}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),L;return L}function p(L){return L.generateMipmaps&&L.minFilter!==rn&&L.minFilter!==hn}function m(L){r.generateMipmap(L)}function E(L,b,q,x,F=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let G=b;if(b===r.RED&&(q===r.FLOAT&&(G=r.R32F),q===r.HALF_FLOAT&&(G=r.R16F),q===r.UNSIGNED_BYTE&&(G=r.R8)),b===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(G=r.R8UI),q===r.UNSIGNED_SHORT&&(G=r.R16UI),q===r.UNSIGNED_INT&&(G=r.R32UI),q===r.BYTE&&(G=r.R8I),q===r.SHORT&&(G=r.R16I),q===r.INT&&(G=r.R32I)),b===r.RG&&(q===r.FLOAT&&(G=r.RG32F),q===r.HALF_FLOAT&&(G=r.RG16F),q===r.UNSIGNED_BYTE&&(G=r.RG8)),b===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(G=r.RG8UI),q===r.UNSIGNED_SHORT&&(G=r.RG16UI),q===r.UNSIGNED_INT&&(G=r.RG32UI),q===r.BYTE&&(G=r.RG8I),q===r.SHORT&&(G=r.RG16I),q===r.INT&&(G=r.RG32I)),b===r.RGB&&q===r.UNSIGNED_INT_5_9_9_9_REV&&(G=r.RGB9_E5),b===r.RGBA){const ot=F?ea:Jt.getTransfer(x);q===r.FLOAT&&(G=r.RGBA32F),q===r.HALF_FLOAT&&(G=r.RGBA16F),q===r.UNSIGNED_BYTE&&(G=ot===se?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(G=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(G=r.RGB5_A1)}return(G===r.R16F||G===r.R32F||G===r.RG16F||G===r.RG32F||G===r.RGBA16F||G===r.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function M(L,b){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==rn&&L.minFilter!==hn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function T(L){const b=L.target;b.removeEventListener("dispose",T),w(b),b.isVideoTexture&&h.delete(b)}function C(L){const b=L.target;b.removeEventListener("dispose",C),P(b)}function w(L){const b=n.get(L);if(b.__webglInit===void 0)return;const q=L.source,x=f.get(q);if(x){const F=x[b.__cacheKey];F.usedTimes--,F.usedTimes===0&&A(L),Object.keys(x).length===0&&f.delete(q)}n.remove(L)}function A(L){const b=n.get(L);r.deleteTexture(b.__webglTexture);const q=L.source,x=f.get(q);delete x[b.__cacheKey],a.memory.textures--}function P(L){const b=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let x=0;x<6;x++){if(Array.isArray(b.__webglFramebuffer[x]))for(let F=0;F<b.__webglFramebuffer[x].length;F++)r.deleteFramebuffer(b.__webglFramebuffer[x][F]);else r.deleteFramebuffer(b.__webglFramebuffer[x]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[x])}else{if(Array.isArray(b.__webglFramebuffer))for(let x=0;x<b.__webglFramebuffer.length;x++)r.deleteFramebuffer(b.__webglFramebuffer[x]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let x=0;x<b.__webglColorRenderbuffer.length;x++)b.__webglColorRenderbuffer[x]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[x]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=L.textures;for(let x=0,F=q.length;x<F;x++){const G=n.get(q[x]);G.__webglTexture&&(r.deleteTexture(G.__webglTexture),a.memory.textures--),n.remove(q[x])}n.remove(L)}let S=0;function y(){S=0}function O(){const L=S;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),S+=1,L}function z(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function D(L,b){const q=n.get(L);if(L.isVideoTexture&&Pt(L),L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){const x=L.image;if(x===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(x.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(q,L,b);return}}e.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+b)}function H(L,b){const q=n.get(L);if(L.version>0&&q.__version!==L.version){Rt(q,L,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+b)}function Z(L,b){const q=n.get(L);if(L.version>0&&q.__version!==L.version){Rt(q,L,b);return}e.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+b)}function J(L,b){const q=n.get(L);if(L.version>0&&q.__version!==L.version){Xt(q,L,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+b)}const it={[bo]:r.REPEAT,[Ri]:r.CLAMP_TO_EDGE,[Ao]:r.MIRRORED_REPEAT},V={[rn]:r.NEAREST,[ud]:r.NEAREST_MIPMAP_NEAREST,[ms]:r.NEAREST_MIPMAP_LINEAR,[hn]:r.LINEAR,[Ra]:r.LINEAR_MIPMAP_NEAREST,[Ci]:r.LINEAR_MIPMAP_LINEAR},nt={[bd]:r.NEVER,[Ld]:r.ALWAYS,[Ad]:r.LESS,[Nh]:r.LEQUAL,[wd]:r.EQUAL,[Pd]:r.GEQUAL,[Rd]:r.GREATER,[Cd]:r.NOTEQUAL};function rt(L,b){if(b.type===Qn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===hn||b.magFilter===Ra||b.magFilter===ms||b.magFilter===Ci||b.minFilter===hn||b.minFilter===Ra||b.minFilter===ms||b.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,it[b.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,it[b.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,it[b.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,V[b.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,V[b.minFilter]),b.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,nt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===rn||b.minFilter!==ms&&b.minFilter!==Ci||b.type===Qn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function mt(L,b){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",T));const x=b.source;let F=f.get(x);F===void 0&&(F={},f.set(x,F));const G=z(b);if(G!==L.__cacheKey){F[G]===void 0&&(F[G]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,q=!0),F[G].usedTimes++;const ot=F[L.__cacheKey];ot!==void 0&&(F[L.__cacheKey].usedTimes--,ot.usedTimes===0&&A(b)),L.__cacheKey=G,L.__webglTexture=F[G].texture}return q}function Rt(L,b,q){let x=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(x=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(x=r.TEXTURE_3D);const F=mt(L,b),G=b.source;e.bindTexture(x,L.__webglTexture,r.TEXTURE0+q);const ot=n.get(G);if(G.version!==ot.__version||F===!0){e.activeTexture(r.TEXTURE0+q);const Q=Jt.getPrimaries(Jt.workingColorSpace),tt=b.colorSpace===Jn?null:Jt.getPrimaries(b.colorSpace),ct=b.colorSpace===Jn||Q===tt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let K=_(b.image,!1,i.maxTextureSize);K=Vt(b,K);const ut=s.convert(b.format,b.colorSpace),bt=s.convert(b.type);let _t=E(b.internalFormat,ut,bt,b.colorSpace,b.isVideoTexture);rt(x,b);let at;const xt=b.mipmaps,lt=b.isVideoTexture!==!0,Mt=ot.__version===void 0||F===!0,gt=G.dataReady,v=M(b,K);if(b.isDepthTexture)_t=r.DEPTH_COMPONENT16,b.type===Qn?_t=r.DEPTH_COMPONENT32F:b.type===Er?_t=r.DEPTH_COMPONENT24:b.type===os&&(_t=r.DEPTH24_STENCIL8),Mt&&(lt?e.texStorage2D(r.TEXTURE_2D,1,_t,K.width,K.height):e.texImage2D(r.TEXTURE_2D,0,_t,K.width,K.height,0,ut,bt,null));else if(b.isDataTexture)if(xt.length>0){lt&&Mt&&e.texStorage2D(r.TEXTURE_2D,v,_t,xt[0].width,xt[0].height);for(let U=0,N=xt.length;U<N;U++)at=xt[U],lt?gt&&e.texSubImage2D(r.TEXTURE_2D,U,0,0,at.width,at.height,ut,bt,at.data):e.texImage2D(r.TEXTURE_2D,U,_t,at.width,at.height,0,ut,bt,at.data);b.generateMipmaps=!1}else lt?(Mt&&e.texStorage2D(r.TEXTURE_2D,v,_t,K.width,K.height),gt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,K.width,K.height,ut,bt,K.data)):e.texImage2D(r.TEXTURE_2D,0,_t,K.width,K.height,0,ut,bt,K.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){lt&&Mt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,v,_t,xt[0].width,xt[0].height,K.depth);for(let U=0,N=xt.length;U<N;U++)at=xt[U],b.format!==Mn?ut!==null?lt?gt&&e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,U,0,0,0,at.width,at.height,K.depth,ut,at.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,U,_t,at.width,at.height,K.depth,0,at.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?gt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,U,0,0,0,at.width,at.height,K.depth,ut,bt,at.data):e.texImage3D(r.TEXTURE_2D_ARRAY,U,_t,at.width,at.height,K.depth,0,ut,bt,at.data)}else{lt&&Mt&&e.texStorage2D(r.TEXTURE_2D,v,_t,xt[0].width,xt[0].height);for(let U=0,N=xt.length;U<N;U++)at=xt[U],b.format!==Mn?ut!==null?lt?gt&&e.compressedTexSubImage2D(r.TEXTURE_2D,U,0,0,at.width,at.height,ut,at.data):e.compressedTexImage2D(r.TEXTURE_2D,U,_t,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?gt&&e.texSubImage2D(r.TEXTURE_2D,U,0,0,at.width,at.height,ut,bt,at.data):e.texImage2D(r.TEXTURE_2D,U,_t,at.width,at.height,0,ut,bt,at.data)}else if(b.isDataArrayTexture)lt?(Mt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,v,_t,K.width,K.height,K.depth),gt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ut,bt,K.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,_t,K.width,K.height,K.depth,0,ut,bt,K.data);else if(b.isData3DTexture)lt?(Mt&&e.texStorage3D(r.TEXTURE_3D,v,_t,K.width,K.height,K.depth),gt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ut,bt,K.data)):e.texImage3D(r.TEXTURE_3D,0,_t,K.width,K.height,K.depth,0,ut,bt,K.data);else if(b.isFramebufferTexture){if(Mt)if(lt)e.texStorage2D(r.TEXTURE_2D,v,_t,K.width,K.height);else{let U=K.width,N=K.height;for(let $=0;$<v;$++)e.texImage2D(r.TEXTURE_2D,$,_t,U,N,0,ut,bt,null),U>>=1,N>>=1}}else if(xt.length>0){if(lt&&Mt){const U=re(xt[0]);e.texStorage2D(r.TEXTURE_2D,v,_t,U.width,U.height)}for(let U=0,N=xt.length;U<N;U++)at=xt[U],lt?gt&&e.texSubImage2D(r.TEXTURE_2D,U,0,0,ut,bt,at):e.texImage2D(r.TEXTURE_2D,U,_t,ut,bt,at);b.generateMipmaps=!1}else if(lt){if(Mt){const U=re(K);e.texStorage2D(r.TEXTURE_2D,v,_t,U.width,U.height)}gt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ut,bt,K)}else e.texImage2D(r.TEXTURE_2D,0,_t,ut,bt,K);p(b)&&m(x),ot.__version=G.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Xt(L,b,q){if(b.image.length!==6)return;const x=mt(L,b),F=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+q);const G=n.get(F);if(F.version!==G.__version||x===!0){e.activeTexture(r.TEXTURE0+q);const ot=Jt.getPrimaries(Jt.workingColorSpace),Q=b.colorSpace===Jn?null:Jt.getPrimaries(b.colorSpace),tt=b.colorSpace===Jn||ot===Q?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const ct=b.isCompressedTexture||b.image[0].isCompressedTexture,K=b.image[0]&&b.image[0].isDataTexture,ut=[];for(let N=0;N<6;N++)!ct&&!K?ut[N]=_(b.image[N],!0,i.maxCubemapSize):ut[N]=K?b.image[N].image:b.image[N],ut[N]=Vt(b,ut[N]);const bt=ut[0],_t=s.convert(b.format,b.colorSpace),at=s.convert(b.type),xt=E(b.internalFormat,_t,at,b.colorSpace),lt=b.isVideoTexture!==!0,Mt=G.__version===void 0||x===!0,gt=F.dataReady;let v=M(b,bt);rt(r.TEXTURE_CUBE_MAP,b);let U;if(ct){lt&&Mt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,v,xt,bt.width,bt.height);for(let N=0;N<6;N++){U=ut[N].mipmaps;for(let $=0;$<U.length;$++){const et=U[$];b.format!==Mn?_t!==null?lt?gt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,$,0,0,et.width,et.height,_t,et.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,$,xt,et.width,et.height,0,et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?gt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,$,0,0,et.width,et.height,_t,at,et.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,$,xt,et.width,et.height,0,_t,at,et.data)}}}else{if(U=b.mipmaps,lt&&Mt){U.length>0&&v++;const N=re(ut[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,v,xt,N.width,N.height)}for(let N=0;N<6;N++)if(K){lt?gt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,ut[N].width,ut[N].height,_t,at,ut[N].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,xt,ut[N].width,ut[N].height,0,_t,at,ut[N].data);for(let $=0;$<U.length;$++){const pt=U[$].image[N].image;lt?gt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,$+1,0,0,pt.width,pt.height,_t,at,pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,$+1,xt,pt.width,pt.height,0,_t,at,pt.data)}}else{lt?gt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,_t,at,ut[N]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,xt,_t,at,ut[N]);for(let $=0;$<U.length;$++){const et=U[$];lt?gt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,$+1,0,0,_t,at,et.image[N]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+N,$+1,xt,_t,at,et.image[N])}}}p(b)&&m(r.TEXTURE_CUBE_MAP),G.__version=F.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Y(L,b,q,x,F,G){const ot=s.convert(q.format,q.colorSpace),Q=s.convert(q.type),tt=E(q.internalFormat,ot,Q,q.colorSpace);if(!n.get(b).__hasExternalTextures){const K=Math.max(1,b.width>>G),ut=Math.max(1,b.height>>G);F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?e.texImage3D(F,G,tt,K,ut,b.depth,0,ot,Q,null):e.texImage2D(F,G,tt,K,ut,0,ot,Q,null)}e.bindFramebuffer(r.FRAMEBUFFER,L),Ht(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,x,F,n.get(q).__webglTexture,0,wt(b)):(F===r.TEXTURE_2D||F>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,x,F,n.get(q).__webglTexture,G),e.bindFramebuffer(r.FRAMEBUFFER,null)}function st(L,b,q){if(r.bindRenderbuffer(r.RENDERBUFFER,L),b.depthBuffer&&!b.stencilBuffer){let x=r.DEPTH_COMPONENT24;if(q||Ht(b)){const F=b.depthTexture;F&&F.isDepthTexture&&(F.type===Qn?x=r.DEPTH_COMPONENT32F:F.type===Er&&(x=r.DEPTH_COMPONENT24));const G=wt(b);Ht(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G,x,b.width,b.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,G,x,b.width,b.height)}else r.renderbufferStorage(r.RENDERBUFFER,x,b.width,b.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,L)}else if(b.depthBuffer&&b.stencilBuffer){const x=wt(b);q&&Ht(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,x,r.DEPTH24_STENCIL8,b.width,b.height):Ht(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,x,r.DEPTH24_STENCIL8,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,L)}else{const x=b.textures;for(let F=0;F<x.length;F++){const G=x[F],ot=s.convert(G.format,G.colorSpace),Q=s.convert(G.type),tt=E(G.internalFormat,ot,Q,G.colorSpace),ct=wt(b);q&&Ht(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ct,tt,b.width,b.height):Ht(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ct,tt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,tt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function vt(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),D(b.depthTexture,0);const x=n.get(b.depthTexture).__webglTexture,F=wt(b);if(b.depthTexture.format===mr)Ht(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,x,0,F):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,x,0);else if(b.depthTexture.format===Kr)Ht(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,x,0,F):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,x,0);else throw new Error("Unknown depthTexture format")}function ht(L){const b=n.get(L),q=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");vt(b.__webglFramebuffer,L)}else if(q){b.__webglDepthbuffer=[];for(let x=0;x<6;x++)e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[x]),b.__webglDepthbuffer[x]=r.createRenderbuffer(),st(b.__webglDepthbuffer[x],L,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),st(b.__webglDepthbuffer,L,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(L,b,q){const x=n.get(L);b!==void 0&&Y(x.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&ht(L)}function Nt(L){const b=L.texture,q=n.get(L),x=n.get(b);L.addEventListener("dispose",C);const F=L.textures,G=L.isWebGLCubeRenderTarget===!0,ot=F.length>1;if(ot||(x.__webglTexture===void 0&&(x.__webglTexture=r.createTexture()),x.__version=b.version,a.memory.textures++),G){q.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[Q]=[];for(let tt=0;tt<b.mipmaps.length;tt++)q.__webglFramebuffer[Q][tt]=r.createFramebuffer()}else q.__webglFramebuffer[Q]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let Q=0;Q<b.mipmaps.length;Q++)q.__webglFramebuffer[Q]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(ot)for(let Q=0,tt=F.length;Q<tt;Q++){const ct=n.get(F[Q]);ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture(),a.memory.textures++)}if(L.samples>0&&Ht(L)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Q=0;Q<F.length;Q++){const tt=F[Q];q.__webglColorRenderbuffer[Q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[Q]);const ct=s.convert(tt.format,tt.colorSpace),K=s.convert(tt.type),ut=E(tt.internalFormat,ct,K,tt.colorSpace,L.isXRRenderTarget===!0),bt=wt(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,bt,ut,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Q,r.RENDERBUFFER,q.__webglColorRenderbuffer[Q])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),st(q.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(G){e.bindTexture(r.TEXTURE_CUBE_MAP,x.__webglTexture),rt(r.TEXTURE_CUBE_MAP,b);for(let Q=0;Q<6;Q++)if(b.mipmaps&&b.mipmaps.length>0)for(let tt=0;tt<b.mipmaps.length;tt++)Y(q.__webglFramebuffer[Q][tt],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,tt);else Y(q.__webglFramebuffer[Q],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(b)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let Q=0,tt=F.length;Q<tt;Q++){const ct=F[Q],K=n.get(ct);e.bindTexture(r.TEXTURE_2D,K.__webglTexture),rt(r.TEXTURE_2D,ct),Y(q.__webglFramebuffer,L,ct,r.COLOR_ATTACHMENT0+Q,r.TEXTURE_2D,0),p(ct)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let Q=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Q=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Q,x.__webglTexture),rt(Q,b),b.mipmaps&&b.mipmaps.length>0)for(let tt=0;tt<b.mipmaps.length;tt++)Y(q.__webglFramebuffer[tt],L,b,r.COLOR_ATTACHMENT0,Q,tt);else Y(q.__webglFramebuffer,L,b,r.COLOR_ATTACHMENT0,Q,0);p(b)&&m(Q),e.unbindTexture()}L.depthBuffer&&ht(L)}function k(L){const b=L.textures;for(let q=0,x=b.length;q<x;q++){const F=b[q];if(p(F)){const G=L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ot=n.get(F).__webglTexture;e.bindTexture(G,ot),m(G),e.unbindTexture()}}}const qt=[],At=[];function jt(L){if(L.samples>0){if(Ht(L)===!1){const b=L.textures,q=L.width,x=L.height;let F=r.COLOR_BUFFER_BIT;const G=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=n.get(L),Q=b.length>1;if(Q)for(let tt=0;tt<b.length;tt++)e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let tt=0;tt<b.length;tt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(F|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(F|=r.STENCIL_BUFFER_BIT)),Q){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ot.__webglColorRenderbuffer[tt]);const ct=n.get(b[tt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ct,0)}r.blitFramebuffer(0,0,q,x,0,0,q,x,F,r.NEAREST),l===!0&&(qt.length=0,At.length=0,qt.push(r.COLOR_ATTACHMENT0+tt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(qt.push(G),At.push(G),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,At)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,qt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Q)for(let tt=0;tt<b.length;tt++){e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.RENDERBUFFER,ot.__webglColorRenderbuffer[tt]);const ct=n.get(b[tt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.TEXTURE_2D,ct,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const b=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function wt(L){return Math.min(i.maxSamples,L.samples)}function Ht(L){const b=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Pt(L){const b=a.render.frame;h.get(L)!==b&&(h.set(L,b),L.update())}function Vt(L,b){const q=L.colorSpace,x=L.format,F=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==di&&q!==Jn&&(Jt.getTransfer(q)===se?(x!==Mn||F!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function re(L){return typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame!="undefined"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=y,this.setTexture2D=D,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=J,this.rebindTextures=kt,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=Ht}function Y0(r,t){function e(n,i=Jn){let s;const a=Jt.getTransfer(i);if(n===li)return r.UNSIGNED_BYTE;if(n===Ph)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Lh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===pd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===fd)return r.BYTE;if(n===dd)return r.SHORT;if(n===Rh)return r.UNSIGNED_SHORT;if(n===Ch)return r.INT;if(n===Er)return r.UNSIGNED_INT;if(n===Qn)return r.FLOAT;if(n===ga)return r.HALF_FLOAT;if(n===md)return r.ALPHA;if(n===_d)return r.RGB;if(n===Mn)return r.RGBA;if(n===gd)return r.LUMINANCE;if(n===vd)return r.LUMINANCE_ALPHA;if(n===mr)return r.DEPTH_COMPONENT;if(n===Kr)return r.DEPTH_STENCIL;if(n===xd)return r.RED;if(n===Dh)return r.RED_INTEGER;if(n===Md)return r.RG;if(n===Ih)return r.RG_INTEGER;if(n===Uh)return r.RGBA_INTEGER;if(n===Ca||n===Pa||n===La||n===Da)if(a===se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ca)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===La)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ca)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===La)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Da)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rl||n===Cl||n===Pl||n===Ll)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Rl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ll)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dl||n===Il||n===Ul)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Dl||n===Il)return a===se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ul)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Nl||n===Ol||n===Fl||n===Bl||n===zl||n===kl||n===Hl||n===Vl||n===Gl||n===Wl||n===Xl||n===Yl||n===ql||n===jl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Nl)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ol)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fl)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bl)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zl)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kl)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hl)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vl)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gl)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wl)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xl)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yl)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ql)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jl)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ia||n===$l||n===Zl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ia)return a===se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$l)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yd||n===Kl||n===Jl||n===Ql)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ia)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Kl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ql)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class q0 extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Fs extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j0={type:"move"};class ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(j0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Fs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const $0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class K0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ie,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new ci({vertexShader:$0,fragmentShader:Z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new On(new xa(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class J0 extends Fi{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const _=new K0,p=e.getContextAttributes();let m=null,E=null;const M=[],T=[],C=new yt;let w=null;const A=new en;A.layers.enable(1),A.viewport=new oe;const P=new en;P.layers.enable(2),P.viewport=new oe;const S=[A,P],y=new q0;y.layers.enable(1),y.layers.enable(2);let O=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let st=M[Y];return st===void 0&&(st=new ro,M[Y]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Y){let st=M[Y];return st===void 0&&(st=new ro,M[Y]=st),st.getGripSpace()},this.getHand=function(Y){let st=M[Y];return st===void 0&&(st=new ro,M[Y]=st),st.getHandSpace()};function D(Y){const st=T.indexOf(Y.inputSource);if(st===-1)return;const vt=M[st];vt!==void 0&&(vt.update(Y.inputSource,Y.frame,c||a),vt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<M.length;Y++){const st=T[Y];st!==null&&(T[Y]=null,M[Y].disconnect(st))}O=null,z=null,_.reset(),t.setRenderTarget(m),d=null,f=null,u=null,i=null,E=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",H),i.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){const st={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,st),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new Ni(d.framebufferWidth,d.framebufferHeight,{format:Mn,type:li,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let st=null,vt=null,ht=null;p.depth&&(ht=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=p.stencil?Kr:mr,vt=p.stencil?os:Er);const kt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(kt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Ni(f.textureWidth,f.textureHeight,{format:Mn,type:li,depthTexture:new $h(f.textureWidth,f.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Xt.setContext(i),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function Z(Y){for(let st=0;st<Y.removed.length;st++){const vt=Y.removed[st],ht=T.indexOf(vt);ht>=0&&(T[ht]=null,M[ht].disconnect(vt))}for(let st=0;st<Y.added.length;st++){const vt=Y.added[st];let ht=T.indexOf(vt);if(ht===-1){for(let Nt=0;Nt<M.length;Nt++)if(Nt>=T.length){T.push(vt),ht=Nt;break}else if(T[Nt]===null){T[Nt]=vt,ht=Nt;break}if(ht===-1)break}const kt=M[ht];kt&&kt.connect(vt)}}const J=new I,it=new I;function V(Y,st,vt){J.setFromMatrixPosition(st.matrixWorld),it.setFromMatrixPosition(vt.matrixWorld);const ht=J.distanceTo(it),kt=st.projectionMatrix.elements,Nt=vt.projectionMatrix.elements,k=kt[14]/(kt[10]-1),qt=kt[14]/(kt[10]+1),At=(kt[9]+1)/kt[5],jt=(kt[9]-1)/kt[5],wt=(kt[8]-1)/kt[0],Ht=(Nt[8]+1)/Nt[0],Pt=k*wt,Vt=k*Ht,re=ht/(-wt+Ht),L=re*-wt;st.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(L),Y.translateZ(re),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const b=k+re,q=qt+re,x=Pt-L,F=Vt+(ht-L),G=At*qt/q*b,ot=jt*qt/q*b;Y.projectionMatrix.makePerspective(x,F,G,ot,b,q),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function nt(Y,st){st===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(st.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;_.texture!==null&&(Y.near=_.depthNear,Y.far=_.depthFar),y.near=P.near=A.near=Y.near,y.far=P.far=A.far=Y.far,(O!==y.near||z!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),O=y.near,z=y.far,A.near=O,A.far=z,P.near=O,P.far=z,A.updateProjectionMatrix(),P.updateProjectionMatrix(),Y.updateProjectionMatrix());const st=Y.parent,vt=y.cameras;nt(y,st);for(let ht=0;ht<vt.length;ht++)nt(vt[ht],st);vt.length===2?V(y,A,P):y.projectionMatrix.copy(A.projectionMatrix),rt(Y,y,st)};function rt(Y,st,vt){vt===null?Y.matrix.copy(st.matrixWorld):(Y.matrix.copy(vt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(st.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(st.projectionMatrix),Y.projectionMatrixInverse.copy(st.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Jr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null};let mt=null;function Rt(Y,st){if(h=st.getViewerPose(c||a),g=st,h!==null){const vt=h.views;d!==null&&(t.setRenderTargetFramebuffer(E,d.framebuffer),t.setRenderTarget(E));let ht=!1;vt.length!==y.cameras.length&&(y.cameras.length=0,ht=!0);for(let Nt=0;Nt<vt.length;Nt++){const k=vt[Nt];let qt=null;if(d!==null)qt=d.getViewport(k);else{const jt=u.getViewSubImage(f,k);qt=jt.viewport,Nt===0&&(t.setRenderTargetTextures(E,jt.colorTexture,f.ignoreDepthValues?void 0:jt.depthStencilTexture),t.setRenderTarget(E))}let At=S[Nt];At===void 0&&(At=new en,At.layers.enable(Nt),At.viewport=new oe,S[Nt]=At),At.matrix.fromArray(k.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(k.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(qt.x,qt.y,qt.width,qt.height),Nt===0&&(y.matrix.copy(At.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ht===!0&&y.cameras.push(At)}const kt=i.enabledFeatures;if(kt&&kt.includes("depth-sensing")){const Nt=u.getDepthInformation(vt[0]);Nt&&Nt.isValid&&Nt.texture&&_.init(t,Nt,i.renderState)}}for(let vt=0;vt<M.length;vt++){const ht=T[vt],kt=M[vt];ht!==null&&kt!==void 0&&kt.update(ht,st,c||a)}_.render(t,y),mt&&mt(Y,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}const Xt=new qh;Xt.setAnimationLoop(Rt),this.setAnimationLoop=function(Y){mt=Y},this.dispose=function(){}}}const yi=new dn,Q0=new ie;function tv(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Wh(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,E,M,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,T)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,E,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ne&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ne&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const E=t.get(m),M=E.envMap,T=E.envMapRotation;if(M&&(p.envMap.value=M,yi.copy(T),yi.x*=-1,yi.y*=-1,yi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),p.envMapRotation.value.setFromMatrix4(Q0.makeRotationFromEuler(yi)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const C=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*C,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,E,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*E,p.scale.value=M*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,E){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ne&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const E=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ev(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){const T=M.program;n.uniformBlockBinding(E,T)}function c(E,M){let T=i[E.id];T===void 0&&(g(E),T=h(E),i[E.id]=T,E.addEventListener("dispose",p));const C=M.program;n.updateUBOMapping(E,C);const w=t.render.frame;s[E.id]!==w&&(f(E),s[E.id]=w)}function h(E){const M=u();E.__bindingPointIndex=M;const T=r.createBuffer(),C=E.__size,w=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,C,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,T),T}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const M=i[E.id],T=E.uniforms,C=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let w=0,A=T.length;w<A;w++){const P=Array.isArray(T[w])?T[w]:[T[w]];for(let S=0,y=P.length;S<y;S++){const O=P[S];if(d(O,w,S,C)===!0){const z=O.__offset,D=Array.isArray(O.value)?O.value:[O.value];let H=0;for(let Z=0;Z<D.length;Z++){const J=D[Z],it=_(J);typeof J=="number"||typeof J=="boolean"?(O.__data[0]=J,r.bufferSubData(r.UNIFORM_BUFFER,z+H,O.__data)):J.isMatrix3?(O.__data[0]=J.elements[0],O.__data[1]=J.elements[1],O.__data[2]=J.elements[2],O.__data[3]=0,O.__data[4]=J.elements[3],O.__data[5]=J.elements[4],O.__data[6]=J.elements[5],O.__data[7]=0,O.__data[8]=J.elements[6],O.__data[9]=J.elements[7],O.__data[10]=J.elements[8],O.__data[11]=0):(J.toArray(O.__data,H),H+=it.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(E,M,T,C){const w=E.value,A=M+"_"+T;if(C[A]===void 0)return typeof w=="number"||typeof w=="boolean"?C[A]=w:C[A]=w.clone(),!0;{const P=C[A];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return C[A]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(E){const M=E.uniforms;let T=0;const C=16;for(let A=0,P=M.length;A<P;A++){const S=Array.isArray(M[A])?M[A]:[M[A]];for(let y=0,O=S.length;y<O;y++){const z=S[y],D=Array.isArray(z.value)?z.value:[z.value];for(let H=0,Z=D.length;H<Z;H++){const J=D[H],it=_(J),V=T%C;V!==0&&C-V<it.boundary&&(T+=C-V),z.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=T,T+=it.storage}}}const w=T%C;return w>0&&(T+=C-w),E.__size=T,E.__cache={},this}function _(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function p(E){const M=E.target;M.removeEventListener("dispose",p);const T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function m(){for(const E in i)r.deleteBuffer(i[E]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Wx{constructor(t={}){const{canvas:e=$d(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this._useLegacyLights=!1,this.toneMapping=ri,this.toneMappingExposure=1;const M=this;let T=!1,C=0,w=0,A=null,P=-1,S=null;const y=new oe,O=new oe;let z=null;const D=new Wt(0);let H=0,Z=e.width,J=e.height,it=1,V=null,nt=null;const rt=new oe(0,0,Z,J),mt=new oe(0,0,Z,J);let Rt=!1;const Xt=new Ko;let Y=!1,st=!1;const vt=new ie,ht=new I,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Nt(){return A===null?it:1}let k=n;function qt(R,B){return e.getContext(R,B)}try{const R={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xo}`),e.addEventListener("webglcontextlost",v,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",N,!1),k===null){const B="webgl2";if(k=qt(B,R),k===null)throw qt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let At,jt,wt,Ht,Pt,Vt,re,L,b,q,x,F,G,ot,Q,tt,ct,K,ut,bt,_t,at,xt,lt;function Mt(){At=new hg(k),At.init(),at=new Y0(k,At),jt=new rg(k,At,t,at),wt=new W0(k),Ht=new dg(k),Pt=new P0,Vt=new X0(k,At,wt,Pt,jt,at,Ht),re=new ag(M),L=new cg(M),b=new Mp(k),xt=new ng(k,b),q=new ug(k,b,Ht,xt),x=new mg(k,q,b,Ht),ut=new pg(k,jt,Vt),tt=new sg(Pt),F=new C0(M,re,L,At,jt,xt,tt),G=new tv(M,Pt),ot=new D0,Q=new B0(At),K=new eg(M,re,L,wt,x,f,l),ct=new G0(M,x,jt),lt=new ev(k,Ht,jt,wt),bt=new ig(k,At,Ht),_t=new fg(k,At,Ht),Ht.programs=F.programs,M.capabilities=jt,M.extensions=At,M.properties=Pt,M.renderLists=ot,M.shadowMap=ct,M.state=wt,M.info=Ht}Mt();const gt=new J0(M,k);this.xr=gt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=At.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=At.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(R){R!==void 0&&(it=R,this.setSize(Z,J,!1))},this.getSize=function(R){return R.set(Z,J)},this.setSize=function(R,B,j=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=R,J=B,e.width=Math.floor(R*it),e.height=Math.floor(B*it),j===!0&&(e.style.width=R+"px",e.style.height=B+"px"),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(Z*it,J*it).floor()},this.setDrawingBufferSize=function(R,B,j){Z=R,J=B,it=j,e.width=Math.floor(R*j),e.height=Math.floor(B*j),this.setViewport(0,0,R,B)},this.getCurrentViewport=function(R){return R.copy(y)},this.getViewport=function(R){return R.copy(rt)},this.setViewport=function(R,B,j,W){R.isVector4?rt.set(R.x,R.y,R.z,R.w):rt.set(R,B,j,W),wt.viewport(y.copy(rt).multiplyScalar(it).round())},this.getScissor=function(R){return R.copy(mt)},this.setScissor=function(R,B,j,W){R.isVector4?mt.set(R.x,R.y,R.z,R.w):mt.set(R,B,j,W),wt.scissor(O.copy(mt).multiplyScalar(it).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(R){wt.setScissorTest(Rt=R)},this.setOpaqueSort=function(R){V=R},this.setTransparentSort=function(R){nt=R},this.getClearColor=function(R){return R.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(R=!0,B=!0,j=!0){let W=0;if(R){let X=!1;if(A!==null){const dt=A.texture.format;X=dt===Uh||dt===Ih||dt===Dh}if(X){const dt=A.texture.type,Et=dt===li||dt===Er||dt===Rh||dt===os||dt===Ph||dt===Lh,Tt=K.getClearColor(),Ct=K.getClearAlpha(),Lt=Tt.r,Ft=Tt.g,Gt=Tt.b;Et?(d[0]=Lt,d[1]=Ft,d[2]=Gt,d[3]=Ct,k.clearBufferuiv(k.COLOR,0,d)):(g[0]=Lt,g[1]=Ft,g[2]=Gt,g[3]=Ct,k.clearBufferiv(k.COLOR,0,g))}else W|=k.COLOR_BUFFER_BIT}B&&(W|=k.DEPTH_BUFFER_BIT),j&&(W|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",v,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",N,!1),ot.dispose(),Q.dispose(),Pt.dispose(),re.dispose(),L.dispose(),x.dispose(),xt.dispose(),lt.dispose(),F.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",It),gt.removeEventListener("sessionend",te),Ut.stop()};function v(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const R=Ht.autoReset,B=ct.enabled,j=ct.autoUpdate,W=ct.needsUpdate,X=ct.type;Mt(),Ht.autoReset=R,ct.enabled=B,ct.autoUpdate=j,ct.needsUpdate=W,ct.type=X}function N(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function $(R){const B=R.target;B.removeEventListener("dispose",$),et(B)}function et(R){pt(R),Pt.remove(R)}function pt(R){const B=Pt.get(R).programs;B!==void 0&&(B.forEach(function(j){F.releaseProgram(j)}),R.isShaderMaterial&&F.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,j,W,X,dt){B===null&&(B=kt);const Et=X.isMesh&&X.matrixWorld.determinant()<0,Tt=hf(R,B,j,W,X);wt.setMaterial(W,Et);let Ct=j.index,Lt=1;if(W.wireframe===!0){if(Ct=q.getWireframeAttribute(j),Ct===void 0)return;Lt=2}const Ft=j.drawRange,Gt=j.attributes.position;let pe=Ft.start*Lt,be=(Ft.start+Ft.count)*Lt;dt!==null&&(pe=Math.max(pe,dt.start*Lt),be=Math.min(be,(dt.start+dt.count)*Lt)),Ct!==null?(pe=Math.max(pe,0),be=Math.min(be,Ct.count)):Gt!=null&&(pe=Math.max(pe,0),be=Math.min(be,Gt.count));const He=be-pe;if(He<0||He===1/0)return;xt.setup(X,W,Tt,j,Ct);let Tn,$t=bt;if(Ct!==null&&(Tn=b.get(Ct),$t=_t,$t.setIndex(Tn)),X.isMesh)W.wireframe===!0?(wt.setLineWidth(W.wireframeLinewidth*Nt()),$t.setMode(k.LINES)):$t.setMode(k.TRIANGLES);else if(X.isLine){let Dt=W.linewidth;Dt===void 0&&(Dt=1),wt.setLineWidth(Dt*Nt()),X.isLineSegments?$t.setMode(k.LINES):X.isLineLoop?$t.setMode(k.LINE_LOOP):$t.setMode(k.LINE_STRIP)}else X.isPoints?$t.setMode(k.POINTS):X.isSprite&&$t.setMode(k.TRIANGLES);if(X.isBatchedMesh)X._multiDrawInstances!==null?$t.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances):$t.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)$t.renderInstances(pe,He,X.count);else if(j.isInstancedBufferGeometry){const Dt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Dr=Math.min(j.instanceCount,Dt);$t.renderInstances(pe,He,Dr)}else $t.render(pe,He)};function St(R,B,j){R.transparent===!0&&R.side===Un&&R.forceSinglePass===!1?(R.side=Ne,R.needsUpdate=!0,ps(R,B,j),R.side=oi,R.needsUpdate=!0,ps(R,B,j),R.side=Un):ps(R,B,j)}this.compile=function(R,B,j=null){j===null&&(j=R),p=Q.get(j),p.init(B),E.push(p),j.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),R!==j&&R.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights(M._useLegacyLights);const W=new Set;return R.traverse(function(X){const dt=X.material;if(dt)if(Array.isArray(dt))for(let Et=0;Et<dt.length;Et++){const Tt=dt[Et];St(Tt,j,X),W.add(Tt)}else St(dt,j,X),W.add(dt)}),E.pop(),p=null,W},this.compileAsync=function(R,B,j=null){const W=this.compile(R,B,j);return new Promise(X=>{function dt(){if(W.forEach(function(Et){Pt.get(Et).currentProgram.isReady()&&W.delete(Et)}),W.size===0){X(R);return}setTimeout(dt,10)}At.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Ot=null;function Kt(R){Ot&&Ot(R)}function It(){Ut.stop()}function te(){Ut.start()}const Ut=new qh;Ut.setAnimationLoop(Kt),typeof self!="undefined"&&Ut.setContext(self),this.setAnimationLoop=function(R){Ot=R,gt.setAnimationLoop(R),R===null?Ut.stop():Ut.start()},gt.addEventListener("sessionstart",It),gt.addEventListener("sessionend",te),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(B),B=gt.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,B,A),p=Q.get(R,E.length),p.init(B),E.push(p),vt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Xt.setFromProjectionMatrix(vt),st=this.localClippingEnabled,Y=tt.init(this.clippingPlanes,st),_=ot.get(R,m.length),_.init(),m.push(_),pn(R,B,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(V,nt);const j=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1;j&&K.addToRenderList(_,R),this.info.render.frame++,Y===!0&&tt.beginShadows();const W=p.state.shadowsArray;ct.render(W,R,B),Y===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,dt=_.transmissive;if(p.setupLights(M._useLegacyLights),B.isArrayCamera){const Et=B.cameras;if(dt.length>0)for(let Tt=0,Ct=Et.length;Tt<Ct;Tt++){const Lt=Et[Tt];Hn(X,dt,R,Lt)}j&&K.render(R);for(let Tt=0,Ct=Et.length;Tt<Ct;Tt++){const Lt=Et[Tt];Ke(_,R,Lt,Lt.viewport)}}else dt.length>0&&Hn(X,dt,R,B),j&&K.render(R),Ke(_,R,B);A!==null&&(Vt.updateMultisampleRenderTarget(A),Vt.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(M,R,B),xt.resetDefaultState(),P=-1,S=null,E.pop(),E.length>0?(p=E[E.length-1],Y===!0&&tt.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function pn(R,B,j,W){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Xt.intersectsSprite(R)){W&&ht.setFromMatrixPosition(R.matrixWorld).applyMatrix4(vt);const Et=x.update(R),Tt=R.material;Tt.visible&&_.push(R,Et,Tt,j,ht.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Xt.intersectsObject(R))){const Et=x.update(R),Tt=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ht.copy(R.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),ht.copy(Et.boundingSphere.center)),ht.applyMatrix4(R.matrixWorld).applyMatrix4(vt)),Array.isArray(Tt)){const Ct=Et.groups;for(let Lt=0,Ft=Ct.length;Lt<Ft;Lt++){const Gt=Ct[Lt],pe=Tt[Gt.materialIndex];pe&&pe.visible&&_.push(R,Et,pe,j,ht.z,Gt)}}else Tt.visible&&_.push(R,Et,Tt,j,ht.z,null)}}const dt=R.children;for(let Et=0,Tt=dt.length;Et<Tt;Et++)pn(dt[Et],B,j,W)}function Ke(R,B,j,W){const X=R.opaque,dt=R.transmissive,Et=R.transparent;p.setupLightsView(j),Y===!0&&tt.setGlobalState(M.clippingPlanes,j),W&&wt.viewport(y.copy(W)),X.length>0&&En(X,B,j),dt.length>0&&En(dt,B,j),Et.length>0&&En(Et,B,j),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Hn(R,B,j,W){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Ni(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float")?ga:li,minFilter:Ci,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const dt=p.state.transmissionRenderTarget[W.id],Et=W.viewport||y;dt.setSize(Et.z,Et.w);const Tt=M.getRenderTarget();M.setRenderTarget(dt),M.getClearColor(D),H=M.getClearAlpha(),H<1&&M.setClearColor(16777215,.5),M.clear();const Ct=M.toneMapping;M.toneMapping=ri;const Lt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),Y===!0&&tt.setGlobalState(M.clippingPlanes,W),En(R,j,W),Vt.updateMultisampleRenderTarget(dt),Vt.updateRenderTargetMipmap(dt),At.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Gt=0,pe=B.length;Gt<pe;Gt++){const be=B[Gt],He=be.object,Tn=be.geometry,$t=be.material,Dt=be.group;if($t.side===Un&&He.layers.test(W.layers)){const Dr=$t.side;$t.side=Ne,$t.needsUpdate=!0,Lr(He,j,W,Tn,$t,Dt),$t.side=Dr,$t.needsUpdate=!0,Ft=!0}}Ft===!0&&(Vt.updateMultisampleRenderTarget(dt),Vt.updateRenderTargetMipmap(dt))}M.setRenderTarget(Tt),M.setClearColor(D,H),Lt!==void 0&&(W.viewport=Lt),M.toneMapping=Ct}function En(R,B,j){const W=B.isScene===!0?B.overrideMaterial:null;for(let X=0,dt=R.length;X<dt;X++){const Et=R[X],Tt=Et.object,Ct=Et.geometry,Lt=W===null?Et.material:W,Ft=Et.group;Tt.layers.test(j.layers)&&Lr(Tt,B,j,Ct,Lt,Ft)}}function Lr(R,B,j,W,X,dt){R.onBeforeRender(M,B,j,W,X,dt),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(M,B,j,W,R,dt),X.transparent===!0&&X.side===Un&&X.forceSinglePass===!1?(X.side=Ne,X.needsUpdate=!0,M.renderBufferDirect(j,B,W,X,R,dt),X.side=oi,X.needsUpdate=!0,M.renderBufferDirect(j,B,W,X,R,dt),X.side=Un):M.renderBufferDirect(j,B,W,X,R,dt),R.onAfterRender(M,B,j,W,X,dt)}function ps(R,B,j){B.isScene!==!0&&(B=kt);const W=Pt.get(R),X=p.state.lights,dt=p.state.shadowsArray,Et=X.state.version,Tt=F.getParameters(R,X.state,dt,B,j),Ct=F.getProgramCacheKey(Tt);let Lt=W.programs;W.environment=R.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(R.isMeshStandardMaterial?L:re).get(R.envMap||W.environment),W.envMapRotation=W.environment!==null&&R.envMap===null?B.environmentRotation:R.envMapRotation,Lt===void 0&&(R.addEventListener("dispose",$),Lt=new Map,W.programs=Lt);let Ft=Lt.get(Ct);if(Ft!==void 0){if(W.currentProgram===Ft&&W.lightsStateVersion===Et)return Ml(R,Tt),Ft}else Tt.uniforms=F.getUniforms(R),R.onBuild(j,Tt,M),R.onBeforeCompile(Tt,M),Ft=F.acquireProgram(Tt,Ct),Lt.set(Ct,Ft),W.uniforms=Tt.uniforms;const Gt=W.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Gt.clippingPlanes=tt.uniform),Ml(R,Tt),W.needsLights=ff(R),W.lightsStateVersion=Et,W.needsLights&&(Gt.ambientLightColor.value=X.state.ambient,Gt.lightProbe.value=X.state.probe,Gt.directionalLights.value=X.state.directional,Gt.directionalLightShadows.value=X.state.directionalShadow,Gt.spotLights.value=X.state.spot,Gt.spotLightShadows.value=X.state.spotShadow,Gt.rectAreaLights.value=X.state.rectArea,Gt.ltc_1.value=X.state.rectAreaLTC1,Gt.ltc_2.value=X.state.rectAreaLTC2,Gt.pointLights.value=X.state.point,Gt.pointLightShadows.value=X.state.pointShadow,Gt.hemisphereLights.value=X.state.hemi,Gt.directionalShadowMap.value=X.state.directionalShadowMap,Gt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Gt.spotShadowMap.value=X.state.spotShadowMap,Gt.spotLightMatrix.value=X.state.spotLightMatrix,Gt.spotLightMap.value=X.state.spotLightMap,Gt.pointShadowMap.value=X.state.pointShadowMap,Gt.pointShadowMatrix.value=X.state.pointShadowMatrix),W.currentProgram=Ft,W.uniformsList=null,Ft}function xl(R){if(R.uniformsList===null){const B=R.currentProgram.getUniforms();R.uniformsList=Zs.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function Ml(R,B){const j=Pt.get(R);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function hf(R,B,j,W,X){B.isScene!==!0&&(B=kt),Vt.resetTextureUnits();const dt=B.fog,Et=W.isMeshStandardMaterial?B.environment:null,Tt=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:di,Ct=(W.isMeshStandardMaterial?L:re).get(W.envMap||Et),Lt=W.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ft=!!j.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Gt=!!j.morphAttributes.position,pe=!!j.morphAttributes.normal,be=!!j.morphAttributes.color;let He=ri;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(He=M.toneMapping);const Tn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,$t=Tn!==void 0?Tn.length:0,Dt=Pt.get(W),Dr=p.state.lights;if(Y===!0&&(st===!0||R!==S)){const Je=R===S&&W.id===P;tt.setState(W,R,Je)}let ae=!1;W.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Dr.state.version||Dt.outputColorSpace!==Tt||X.isBatchedMesh&&Dt.batching===!1||!X.isBatchedMesh&&Dt.batching===!0||X.isInstancedMesh&&Dt.instancing===!1||!X.isInstancedMesh&&Dt.instancing===!0||X.isSkinnedMesh&&Dt.skinning===!1||!X.isSkinnedMesh&&Dt.skinning===!0||X.isInstancedMesh&&Dt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Dt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Dt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Dt.instancingMorph===!1&&X.morphTexture!==null||Dt.envMap!==Ct||W.fog===!0&&Dt.fog!==dt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==tt.numPlanes||Dt.numIntersection!==tt.numIntersection)||Dt.vertexAlphas!==Lt||Dt.vertexTangents!==Ft||Dt.morphTargets!==Gt||Dt.morphNormals!==pe||Dt.morphColors!==be||Dt.toneMapping!==He||Dt.morphTargetsCount!==$t)&&(ae=!0):(ae=!0,Dt.__version=W.version);let mi=Dt.currentProgram;ae===!0&&(mi=ps(W,B,X));let yl=!1,Ir=!1,Ta=!1;const Ae=mi.getUniforms(),Vn=Dt.uniforms;if(wt.useProgram(mi.program)&&(yl=!0,Ir=!0,Ta=!0),W.id!==P&&(P=W.id,Ir=!0),yl||S!==R){Ae.setValue(k,"projectionMatrix",R.projectionMatrix),Ae.setValue(k,"viewMatrix",R.matrixWorldInverse);const Je=Ae.map.cameraPosition;Je!==void 0&&Je.setValue(k,ht.setFromMatrixPosition(R.matrixWorld)),jt.logarithmicDepthBuffer&&Ae.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ae.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Ir=!0,Ta=!0)}if(X.isSkinnedMesh){Ae.setOptional(k,X,"bindMatrix"),Ae.setOptional(k,X,"bindMatrixInverse");const Je=X.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),Ae.setValue(k,"boneTexture",Je.boneTexture,Vt))}X.isBatchedMesh&&(Ae.setOptional(k,X,"batchingTexture"),Ae.setValue(k,"batchingTexture",X._matricesTexture,Vt));const ba=j.morphAttributes;if((ba.position!==void 0||ba.normal!==void 0||ba.color!==void 0)&&ut.update(X,j,mi),(Ir||Dt.receiveShadow!==X.receiveShadow)&&(Dt.receiveShadow=X.receiveShadow,Ae.setValue(k,"receiveShadow",X.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Vn.envMap.value=Ct,Vn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(Vn.envMapIntensity.value=B.environmentIntensity),Ir&&(Ae.setValue(k,"toneMappingExposure",M.toneMappingExposure),Dt.needsLights&&uf(Vn,Ta),dt&&W.fog===!0&&G.refreshFogUniforms(Vn,dt),G.refreshMaterialUniforms(Vn,W,it,J,p.state.transmissionRenderTarget[R.id]),Zs.upload(k,xl(Dt),Vn,Vt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Zs.upload(k,xl(Dt),Vn,Vt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ae.setValue(k,"center",X.center),Ae.setValue(k,"modelViewMatrix",X.modelViewMatrix),Ae.setValue(k,"normalMatrix",X.normalMatrix),Ae.setValue(k,"modelMatrix",X.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Je=W.uniformsGroups;for(let Aa=0,df=Je.length;Aa<df;Aa++){const Sl=Je[Aa];lt.update(Sl,mi),lt.bind(Sl,mi)}}return mi}function uf(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function ff(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,B,j){Pt.get(R.texture).__webglTexture=B,Pt.get(R.depthTexture).__webglTexture=j;const W=Pt.get(R);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=j===void 0,W.__autoAllocateDepthBuffer||At.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,B){const j=Pt.get(R);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(R,B=0,j=0){A=R,C=B,w=j;let W=!0,X=null,dt=!1,Et=!1;if(R){const Ct=Pt.get(R);Ct.__useDefaultFramebuffer!==void 0?(wt.bindFramebuffer(k.FRAMEBUFFER,null),W=!1):Ct.__webglFramebuffer===void 0?Vt.setupRenderTarget(R):Ct.__hasExternalTextures&&Vt.rebindTextures(R,Pt.get(R.texture).__webglTexture,Pt.get(R.depthTexture).__webglTexture);const Lt=R.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(Et=!0);const Ft=Pt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ft[B])?X=Ft[B][j]:X=Ft[B],dt=!0):R.samples>0&&Vt.useMultisampledRTT(R)===!1?X=Pt.get(R).__webglMultisampledFramebuffer:Array.isArray(Ft)?X=Ft[j]:X=Ft,y.copy(R.viewport),O.copy(R.scissor),z=R.scissorTest}else y.copy(rt).multiplyScalar(it).floor(),O.copy(mt).multiplyScalar(it).floor(),z=Rt;if(wt.bindFramebuffer(k.FRAMEBUFFER,X)&&W&&wt.drawBuffers(R,X),wt.viewport(y),wt.scissor(O),wt.setScissorTest(z),dt){const Ct=Pt.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ct.__webglTexture,j)}else if(Et){const Ct=Pt.get(R.texture),Lt=B||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ct.__webglTexture,j||0,Lt)}P=-1},this.readRenderTargetPixels=function(R,B,j,W,X,dt,Et){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Pt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Et!==void 0&&(Tt=Tt[Et]),Tt){wt.bindFramebuffer(k.FRAMEBUFFER,Tt);try{const Ct=R.texture,Lt=Ct.format,Ft=Ct.type;if(!jt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-W&&j>=0&&j<=R.height-X&&k.readPixels(B,j,W,X,at.convert(Lt),at.convert(Ft),dt)}finally{const Ct=A!==null?Pt.get(A).__webglFramebuffer:null;wt.bindFramebuffer(k.FRAMEBUFFER,Ct)}}},this.copyFramebufferToTexture=function(R,B,j=0){const W=Math.pow(2,-j),X=Math.floor(B.image.width*W),dt=Math.floor(B.image.height*W);Vt.setTexture2D(B,0),k.copyTexSubImage2D(k.TEXTURE_2D,j,0,0,R.x,R.y,X,dt),wt.unbindTexture()},this.copyTextureToTexture=function(R,B,j,W=0){const X=B.image.width,dt=B.image.height,Et=at.convert(j.format),Tt=at.convert(j.type);Vt.setTexture2D(j,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment),B.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,W,R.x,R.y,X,dt,Et,Tt,B.image.data):B.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,W,R.x,R.y,B.mipmaps[0].width,B.mipmaps[0].height,Et,B.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,W,R.x,R.y,Et,Tt,B.image),W===0&&j.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),wt.unbindTexture()},this.copyTextureToTexture3D=function(R,B,j,W,X=0){const dt=R.max.x-R.min.x,Et=R.max.y-R.min.y,Tt=R.max.z-R.min.z,Ct=at.convert(W.format),Lt=at.convert(W.type);let Ft;if(W.isData3DTexture)Vt.setTexture3D(W,0),Ft=k.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)Vt.setTexture2DArray(W,0),Ft=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const Gt=k.getParameter(k.UNPACK_ROW_LENGTH),pe=k.getParameter(k.UNPACK_IMAGE_HEIGHT),be=k.getParameter(k.UNPACK_SKIP_PIXELS),He=k.getParameter(k.UNPACK_SKIP_ROWS),Tn=k.getParameter(k.UNPACK_SKIP_IMAGES),$t=j.isCompressedTexture?j.mipmaps[X]:j.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,$t.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,$t.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,R.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,R.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,R.min.z),j.isDataTexture||j.isData3DTexture?k.texSubImage3D(Ft,X,B.x,B.y,B.z,dt,Et,Tt,Ct,Lt,$t.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(Ft,X,B.x,B.y,B.z,dt,Et,Tt,Ct,$t.data):k.texSubImage3D(Ft,X,B.x,B.y,B.z,dt,Et,Tt,Ct,Lt,$t),k.pixelStorei(k.UNPACK_ROW_LENGTH,Gt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,pe),k.pixelStorei(k.UNPACK_SKIP_PIXELS,be),k.pixelStorei(k.UNPACK_SKIP_ROWS,He),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Tn),X===0&&W.generateMipmaps&&k.generateMipmap(Ft),wt.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?Vt.setTextureCube(R,0):R.isData3DTexture?Vt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Vt.setTexture2DArray(R,0):Vt.setTexture2D(R,0),wt.unbindTexture()},this.resetState=function(){C=0,w=0,A=null,wt.reset(),xt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===jo?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===va?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class eu{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Wt(t),this.density=e}clone(){return new eu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Xx extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class nv{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=wo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Fh("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Le=new I;class aa{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new fn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new aa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class iv extends kn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ar;const Br=new I,or=new I,lr=new I,cr=new yt,zr=new yt,nu=new ie,Bs=new I,kr=new I,zs=new I,Wc=new yt,so=new yt,Xc=new yt;class Yx extends ge{constructor(t=new iv){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new Te;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nv(e,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new aa(n,3,0,!1)),ar.setAttribute("uv",new aa(n,2,3,!1))}this.geometry=ar,this.material=t,this.center=new yt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),or.setFromMatrixScale(this.matrixWorld),nu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),lr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&or.multiplyScalar(-lr.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;ks(Bs.set(-.5,-.5,0),lr,a,or,i,s),ks(kr.set(.5,-.5,0),lr,a,or,i,s),ks(zs.set(.5,.5,0),lr,a,or,i,s),Wc.set(0,0),so.set(1,0),Xc.set(1,1);let o=t.ray.intersectTriangle(Bs,kr,zs,!1,Br);if(o===null&&(ks(kr.set(-.5,.5,0),lr,a,or,i,s),so.set(0,1),o=t.ray.intersectTriangle(Bs,zs,kr,!1,Br),o===null))return;const l=t.ray.origin.distanceTo(Br);l<t.near||l>t.far||e.push({distance:l,point:Br.clone(),uv:nn.getInterpolation(Br,Bs,kr,zs,Wc,so,Xc,new yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ks(r,t,e,n,i,s){cr.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(zr.x=s*cr.x-i*cr.y,zr.y=i*cr.x+s*cr.y):zr.copy(cr),r.copy(t),r.x+=zr.x,r.y+=zr.y,r.applyMatrix4(nu)}class iu extends kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const oa=new I,la=new I,Yc=new ie,Hr=new hs,Hs=new cs,ao=new I,qc=new I;class rv extends ge{constructor(t=new Te,e=new iu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)oa.fromBufferAttribute(e,i-1),la.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=oa.distanceTo(la);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(i),Hs.radius+=s,t.ray.intersectsSphere(Hs)===!1)return;Yc.copy(i).invert(),Hr.copy(t.ray).applyMatrix4(Yc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=d,p=g-1;_<p;_+=c){const m=h.getX(_),E=h.getX(_+1),M=Vs(this,t,Hr,l,m,E);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(d),m=Vs(this,t,Hr,l,_,p);m&&e.push(m)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,p=g-1;_<p;_+=c){const m=Vs(this,t,Hr,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=Vs(this,t,Hr,l,g-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Vs(r,t,e,n,i,s){const a=r.geometry.attributes.position;if(oa.fromBufferAttribute(a,i),la.fromBufferAttribute(a,s),e.distanceSqToSegment(oa,la,ao,qc)>n)return;ao.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(ao);if(!(l<t.near||l>t.far))return{distance:l,point:qc.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}const jc=new I,$c=new I;class qx extends rv{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)jc.fromBufferAttribute(e,i),$c.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+jc.distanceTo($c);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sv extends kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Zc=new ie,Co=new hs,Gs=new cs,Ws=new I;class jx extends ge{constructor(t=new Te,e=new sv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(i),Gs.radius+=s,t.ray.intersectsSphere(Gs)===!1)return;Zc.copy(i).invert(),Co.copy(t.ray).applyMatrix4(Zc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const p=c.getX(g);Ws.fromBufferAttribute(u,p),Kc(Ws,p,l,i,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,_=d;g<_;g++)Ws.fromBufferAttribute(u,g),Kc(Ws,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Kc(r,t,e,n,i,s,a){const o=Co.distanceSqToPoint(r);if(o<e){const l=new I;Co.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class $x extends Ie{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class av{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new yt:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,i=[],s=[],a=[],o=new I,l=new ie;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new I)}s[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ye(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(ye(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function ov(r,t){const e=1-r;return e*e*t}function lv(r,t){return 2*(1-r)*r*t}function cv(r,t){return r*r*t}function oo(r,t,e,n){return ov(r,t)+lv(r,e)+cv(r,n)}class Zx extends av{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(oo(t,i.x,s.x,a.x),oo(t,i.y,s.y,a.y),oo(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ru extends Te{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new I,h=new yt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(o,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ru(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Qo extends Te{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],d=[];let g=0;const _=[],p=n/2;let m=0;E(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(d,2));function E(){const T=new I,C=new I;let w=0;const A=(e-t)/n;for(let P=0;P<=s;P++){const S=[],y=P/s,O=y*(e-t)+t;for(let z=0;z<=i;z++){const D=z/i,H=D*l+o,Z=Math.sin(H),J=Math.cos(H);C.x=O*Z,C.y=-y*n+p,C.z=O*J,u.push(C.x,C.y,C.z),T.set(Z,A,J).normalize(),f.push(T.x,T.y,T.z),d.push(D,1-y),S.push(g++)}_.push(S)}for(let P=0;P<i;P++)for(let S=0;S<s;S++){const y=_[S][P],O=_[S+1][P],z=_[S+1][P+1],D=_[S][P+1];h.push(y,O,D),h.push(O,z,D),w+=6}c.addGroup(m,w,0),m+=w}function M(T){const C=g,w=new yt,A=new I;let P=0;const S=T===!0?t:e,y=T===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,p*y,0),f.push(0,y,0),d.push(.5,.5),g++;const O=g;for(let z=0;z<=i;z++){const H=z/i*l+o,Z=Math.cos(H),J=Math.sin(H);A.x=S*J,A.y=p*y,A.z=S*Z,u.push(A.x,A.y,A.z),f.push(0,y,0),w.x=Z*.5+.5,w.y=J*.5*y+.5,d.push(w.x,w.y),g++}for(let z=0;z<i;z++){const D=C+z,H=O+z;T===!0?h.push(H,H+1,D):h.push(H+1,H,D),P+=3}c.addGroup(m,P,T===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class su extends Qo{constructor(t=1,e=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new su(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fs extends Te{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(s.slice(),3)),this.setAttribute("uv",new Qt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const M=new I,T=new I,C=new I;for(let w=0;w<e.length;w+=3)d(e[w+0],M),d(e[w+1],T),d(e[w+2],C),l(M,T,C,E)}function l(E,M,T,C){const w=C+1,A=[];for(let P=0;P<=w;P++){A[P]=[];const S=E.clone().lerp(T,P/w),y=M.clone().lerp(T,P/w),O=w-P;for(let z=0;z<=O;z++)z===0&&P===w?A[P][z]=S:A[P][z]=S.clone().lerp(y,z/O)}for(let P=0;P<w;P++)for(let S=0;S<2*(w-P)-1;S++){const y=Math.floor(S/2);S%2===0?(f(A[P][y+1]),f(A[P+1][y]),f(A[P][y])):(f(A[P][y+1]),f(A[P+1][y+1]),f(A[P+1][y]))}}function c(E){const M=new I;for(let T=0;T<s.length;T+=3)M.x=s[T+0],M.y=s[T+1],M.z=s[T+2],M.normalize().multiplyScalar(E),s[T+0]=M.x,s[T+1]=M.y,s[T+2]=M.z}function h(){const E=new I;for(let M=0;M<s.length;M+=3){E.x=s[M+0],E.y=s[M+1],E.z=s[M+2];const T=p(E)/2/Math.PI+.5,C=m(E)/Math.PI+.5;a.push(T,1-C)}g(),u()}function u(){for(let E=0;E<a.length;E+=6){const M=a[E+0],T=a[E+2],C=a[E+4],w=Math.max(M,T,C),A=Math.min(M,T,C);w>.9&&A<.1&&(M<.2&&(a[E+0]+=1),T<.2&&(a[E+2]+=1),C<.2&&(a[E+4]+=1))}}function f(E){s.push(E.x,E.y,E.z)}function d(E,M){const T=E*3;M.x=t[T+0],M.y=t[T+1],M.z=t[T+2]}function g(){const E=new I,M=new I,T=new I,C=new I,w=new yt,A=new yt,P=new yt;for(let S=0,y=0;S<s.length;S+=9,y+=6){E.set(s[S+0],s[S+1],s[S+2]),M.set(s[S+3],s[S+4],s[S+5]),T.set(s[S+6],s[S+7],s[S+8]),w.set(a[y+0],a[y+1]),A.set(a[y+2],a[y+3]),P.set(a[y+4],a[y+5]),C.copy(E).add(M).add(T).divideScalar(3);const O=p(C);_(w,y+0,E,O),_(A,y+2,M,O),_(P,y+4,T,O)}}function _(E,M,T,C){C<0&&E.x===1&&(a[M]=E.x-1),T.x===0&&T.z===0&&(a[M]=C/2/Math.PI+.5)}function p(E){return Math.atan2(E.z,-E.x)}function m(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fs(t.vertices,t.indices,t.radius,t.details)}}class au extends fs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new au(t.radius,t.detail)}}const Xs=new I,Ys=new I,lo=new I,qs=new nn;class Kx extends Te{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),s=Math.cos(_r*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:p,c:m}=qs;if(_.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),qs.getNormal(lo),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,u[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let E=0;E<3;E++){const M=(E+1)%3,T=u[E],C=u[M],w=qs[h[E]],A=qs[h[M]],P=`${T}_${C}`,S=`${C}_${T}`;S in f&&f[S]?(lo.dot(f[S].normal)<=s&&(d.push(w.x,w.y,w.z),d.push(A.x,A.y,A.z)),f[S]=null):P in f||(f[P]={index0:c[E],index1:c[M],normal:lo.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:p}=f[g];Xs.fromBufferAttribute(o,_),Ys.fromBufferAttribute(o,p),d.push(Xs.x,Xs.y,Xs.z),d.push(Ys.x,Ys.y,Ys.z)}this.setAttribute("position",new Qt(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ou extends fs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ou(t.radius,t.detail)}}class lu extends fs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new lu(t.radius,t.detail)}}class cu extends Te{constructor(t=.5,e=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=t;const f=(e-t)/i,d=new I,g=new yt;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){const m=s+p/n*a;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<i;_++){const p=_*(n+1);for(let m=0;m<n;m++){const E=m+p,M=E,T=E+n+1,C=E+n+2,w=E+1;o.push(M,T,w),o.push(T,C,w)}}this.setIndex(o),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class hu extends Te{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new I,f=new I,d=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const E=[],M=m/n;let T=0;m===0&&a===0?T=.5/e:m===n&&l===Math.PI&&(T=-.5/e);for(let C=0;C<=e;C++){const w=C/e;u.x=-t*Math.cos(i+w*s)*Math.sin(a+M*o),u.y=t*Math.cos(a+M*o),u.z=t*Math.sin(i+w*s)*Math.sin(a+M*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(w+T,1-M),E.push(c++)}h.push(E)}for(let m=0;m<n;m++)for(let E=0;E<e;E++){const M=h[m][E+1],T=h[m][E],C=h[m+1][E],w=h[m+1][E+1];(m!==0||a>0)&&d.push(M,T,w),(m!==n-1||l<Math.PI)&&d.push(T,C,w)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class uu extends Te{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new I,u=new I,f=new I;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*s,p=d/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,p=(i+1)*(d-1)+g-1,m=(i+1)*(d-1)+g,E=(i+1)*d+g;a.push(_,p,E),a.push(p,m,E)}this.setIndex(a),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Jx extends kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qo,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qx extends kn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Wt(16777215),this.specular=new Wt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qo,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tM extends iu{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class tl extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const co=new ie,Jc=new I,Qc=new I;class fu{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ko,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Jc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jc),Qc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qc),e.updateMatrixWorld(),co.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(co),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(co)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const th=new ie,Vr=new I,ho=new I;class hv extends fu{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new yt(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Vr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Vr),ho.copy(n.position),ho.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ho),n.updateMatrixWorld(),i.makeTranslation(-Vr.x,-Vr.y,-Vr.z),th.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(th)}}class eM extends tl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new hv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class uv extends fu{constructor(){super(new jh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nM extends tl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new uv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class iM extends tl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class rM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=eh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=eh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function eh(){return(typeof performance=="undefined"?Date:performance).now()}const nh=new ie;class sM{constructor(t,e,n=0,i=1/0){this.ray=new hs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Zo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nh),this}intersectObject(t,e=!0,n=[]){return Po(t,this,n,e),n.sort(ih),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Po(t[i],this,n,e);return n.sort(ih),n}}function ih(r,t){return r.distance-t.distance}function Po(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)Po(i[s],t,e,!0)}}class rh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ye(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xo);const sh={type:"change"},uo={type:"start"},ah={type:"end"},js=new hs,oh=new Kn,fv=Math.cos(70*jd.DEG2RAD);class aM extends Fi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hi.ROTATE,MIDDLE:Hi.DOLLY,RIGHT:Hi.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",ct),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ct),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(sh),n.update(),s=i.NONE},this.update=function(){const v=new I,U=new Oi().setFromUnitVectors(t.up,new I(0,1,0)),N=U.clone().invert(),$=new I,et=new Oi,pt=new I,St=2*Math.PI;return function(Kt=null){const It=n.object.position;v.copy(It).sub(n.target),v.applyQuaternion(U),o.setFromVector3(v),n.autoRotate&&s===i.NONE&&z(y(Kt)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let te=n.minAzimuthAngle,Ut=n.maxAzimuthAngle;isFinite(te)&&isFinite(Ut)&&(te<-Math.PI?te+=St:te>Math.PI&&(te-=St),Ut<-Math.PI?Ut+=St:Ut>Math.PI&&(Ut-=St),te<=Ut?o.theta=Math.max(te,Math.min(Ut,o.theta)):o.theta=o.theta>(te+Ut)/2?Math.max(te,o.theta):Math.min(Ut,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let pn=!1;if(n.zoomToCursor&&w||n.object.isOrthographicCamera)o.radius=rt(o.radius);else{const Ke=o.radius;o.radius=rt(o.radius*c),pn=Ke!=o.radius}if(v.setFromSpherical(o),v.applyQuaternion(N),It.copy(n.target).add(v),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&w){let Ke=null;if(n.object.isPerspectiveCamera){const Hn=v.length();Ke=rt(Hn*c);const En=Hn-Ke;n.object.position.addScaledVector(T,En),n.object.updateMatrixWorld(),pn=!!En}else if(n.object.isOrthographicCamera){const Hn=new I(C.x,C.y,0);Hn.unproject(n.object);const En=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),pn=En!==n.object.zoom;const Lr=new I(C.x,C.y,0);Lr.unproject(n.object),n.object.position.sub(Lr).add(Hn),n.object.updateMatrixWorld(),Ke=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ke!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ke).add(n.object.position):(js.origin.copy(n.object.position),js.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(js.direction))<fv?t.lookAt(n.target):(oh.setFromNormalAndCoplanarPoint(n.object.up,n.target),js.intersectPlane(oh,n.target))))}else if(n.object.isOrthographicCamera){const Ke=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),Ke!==n.object.zoom&&(n.object.updateProjectionMatrix(),pn=!0)}return c=1,w=!1,pn||$.distanceToSquared(n.object.position)>a||8*(1-et.dot(n.object.quaternion))>a||pt.distanceToSquared(n.target)>a?(n.dispatchEvent(sh),$.copy(n.object.position),et.copy(n.object.quaternion),pt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",bt),n.domElement.removeEventListener("pointerdown",L),n.domElement.removeEventListener("pointercancel",q),n.domElement.removeEventListener("wheel",G),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",q),n.domElement.getRootNode().removeEventListener("keydown",Q,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ct),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new rh,l=new rh;let c=1;const h=new I,u=new yt,f=new yt,d=new yt,g=new yt,_=new yt,p=new yt,m=new yt,E=new yt,M=new yt,T=new I,C=new yt;let w=!1;const A=[],P={};let S=!1;function y(v){return v!==null?2*Math.PI/60*n.autoRotateSpeed*v:2*Math.PI/60/60*n.autoRotateSpeed}function O(v){const U=Math.abs(v*.01);return Math.pow(.95,n.zoomSpeed*U)}function z(v){l.theta-=v}function D(v){l.phi-=v}const H=function(){const v=new I;return function(N,$){v.setFromMatrixColumn($,0),v.multiplyScalar(-N),h.add(v)}}(),Z=function(){const v=new I;return function(N,$){n.screenSpacePanning===!0?v.setFromMatrixColumn($,1):(v.setFromMatrixColumn($,0),v.crossVectors(n.object.up,v)),v.multiplyScalar(N),h.add(v)}}(),J=function(){const v=new I;return function(N,$){const et=n.domElement;if(n.object.isPerspectiveCamera){const pt=n.object.position;v.copy(pt).sub(n.target);let St=v.length();St*=Math.tan(n.object.fov/2*Math.PI/180),H(2*N*St/et.clientHeight,n.object.matrix),Z(2*$*St/et.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(H(N*(n.object.right-n.object.left)/n.object.zoom/et.clientWidth,n.object.matrix),Z($*(n.object.top-n.object.bottom)/n.object.zoom/et.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function it(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function nt(v,U){if(!n.zoomToCursor)return;w=!0;const N=n.domElement.getBoundingClientRect(),$=v-N.left,et=U-N.top,pt=N.width,St=N.height;C.x=$/pt*2-1,C.y=-(et/St)*2+1,T.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function rt(v){return Math.max(n.minDistance,Math.min(n.maxDistance,v))}function mt(v){u.set(v.clientX,v.clientY)}function Rt(v){nt(v.clientX,v.clientX),m.set(v.clientX,v.clientY)}function Xt(v){g.set(v.clientX,v.clientY)}function Y(v){f.set(v.clientX,v.clientY),d.subVectors(f,u).multiplyScalar(n.rotateSpeed);const U=n.domElement;z(2*Math.PI*d.x/U.clientHeight),D(2*Math.PI*d.y/U.clientHeight),u.copy(f),n.update()}function st(v){E.set(v.clientX,v.clientY),M.subVectors(E,m),M.y>0?it(O(M.y)):M.y<0&&V(O(M.y)),m.copy(E),n.update()}function vt(v){_.set(v.clientX,v.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),J(p.x,p.y),g.copy(_),n.update()}function ht(v){nt(v.clientX,v.clientY),v.deltaY<0?V(O(v.deltaY)):v.deltaY>0&&it(O(v.deltaY)),n.update()}function kt(v){let U=!1;switch(v.code){case n.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(0,n.keyPanSpeed),U=!0;break;case n.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(0,-n.keyPanSpeed),U=!0;break;case n.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(n.keyPanSpeed,0),U=!0;break;case n.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(-n.keyPanSpeed,0),U=!0;break}U&&(v.preventDefault(),n.update())}function Nt(v){if(A.length===1)u.set(v.pageX,v.pageY);else{const U=Mt(v),N=.5*(v.pageX+U.x),$=.5*(v.pageY+U.y);u.set(N,$)}}function k(v){if(A.length===1)g.set(v.pageX,v.pageY);else{const U=Mt(v),N=.5*(v.pageX+U.x),$=.5*(v.pageY+U.y);g.set(N,$)}}function qt(v){const U=Mt(v),N=v.pageX-U.x,$=v.pageY-U.y,et=Math.sqrt(N*N+$*$);m.set(0,et)}function At(v){n.enableZoom&&qt(v),n.enablePan&&k(v)}function jt(v){n.enableZoom&&qt(v),n.enableRotate&&Nt(v)}function wt(v){if(A.length==1)f.set(v.pageX,v.pageY);else{const N=Mt(v),$=.5*(v.pageX+N.x),et=.5*(v.pageY+N.y);f.set($,et)}d.subVectors(f,u).multiplyScalar(n.rotateSpeed);const U=n.domElement;z(2*Math.PI*d.x/U.clientHeight),D(2*Math.PI*d.y/U.clientHeight),u.copy(f)}function Ht(v){if(A.length===1)_.set(v.pageX,v.pageY);else{const U=Mt(v),N=.5*(v.pageX+U.x),$=.5*(v.pageY+U.y);_.set(N,$)}p.subVectors(_,g).multiplyScalar(n.panSpeed),J(p.x,p.y),g.copy(_)}function Pt(v){const U=Mt(v),N=v.pageX-U.x,$=v.pageY-U.y,et=Math.sqrt(N*N+$*$);E.set(0,et),M.set(0,Math.pow(E.y/m.y,n.zoomSpeed)),it(M.y),m.copy(E);const pt=(v.pageX+U.x)*.5,St=(v.pageY+U.y)*.5;nt(pt,St)}function Vt(v){n.enableZoom&&Pt(v),n.enablePan&&Ht(v)}function re(v){n.enableZoom&&Pt(v),n.enableRotate&&wt(v)}function L(v){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(v.pointerId),n.domElement.addEventListener("pointermove",b),n.domElement.addEventListener("pointerup",q)),!xt(v)&&(_t(v),v.pointerType==="touch"?K(v):x(v)))}function b(v){n.enabled!==!1&&(v.pointerType==="touch"?ut(v):F(v))}function q(v){switch(at(v),A.length){case 0:n.domElement.releasePointerCapture(v.pointerId),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",q),n.dispatchEvent(ah),s=i.NONE;break;case 1:const U=A[0],N=P[U];K({pointerId:U,pageX:N.x,pageY:N.y});break}}function x(v){let U;switch(v.button){case 0:U=n.mouseButtons.LEFT;break;case 1:U=n.mouseButtons.MIDDLE;break;case 2:U=n.mouseButtons.RIGHT;break;default:U=-1}switch(U){case Hi.DOLLY:if(n.enableZoom===!1)return;Rt(v),s=i.DOLLY;break;case Hi.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enablePan===!1)return;Xt(v),s=i.PAN}else{if(n.enableRotate===!1)return;mt(v),s=i.ROTATE}break;case Hi.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enableRotate===!1)return;mt(v),s=i.ROTATE}else{if(n.enablePan===!1)return;Xt(v),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(uo)}function F(v){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Y(v);break;case i.DOLLY:if(n.enableZoom===!1)return;st(v);break;case i.PAN:if(n.enablePan===!1)return;vt(v);break}}function G(v){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(v.preventDefault(),n.dispatchEvent(uo),ht(ot(v)),n.dispatchEvent(ah))}function ot(v){const U=v.deltaMode,N={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch(U){case 1:N.deltaY*=16;break;case 2:N.deltaY*=100;break}return v.ctrlKey&&!S&&(N.deltaY*=10),N}function Q(v){v.key==="Control"&&(S=!0,n.domElement.getRootNode().addEventListener("keyup",tt,{passive:!0,capture:!0}))}function tt(v){v.key==="Control"&&(S=!1,n.domElement.getRootNode().removeEventListener("keyup",tt,{passive:!0,capture:!0}))}function ct(v){n.enabled===!1||n.enablePan===!1||kt(v)}function K(v){switch(lt(v),A.length){case 1:switch(n.touches.ONE){case Vi.ROTATE:if(n.enableRotate===!1)return;Nt(v),s=i.TOUCH_ROTATE;break;case Vi.PAN:if(n.enablePan===!1)return;k(v),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Vi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;At(v),s=i.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;jt(v),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(uo)}function ut(v){switch(lt(v),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;wt(v),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Ht(v),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Vt(v),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;re(v),n.update();break;default:s=i.NONE}}function bt(v){n.enabled!==!1&&v.preventDefault()}function _t(v){A.push(v.pointerId)}function at(v){delete P[v.pointerId];for(let U=0;U<A.length;U++)if(A[U]==v.pointerId){A.splice(U,1);return}}function xt(v){for(let U=0;U<A.length;U++)if(A[U]==v.pointerId)return!0;return!1}function lt(v){let U=P[v.pointerId];U===void 0&&(U=new yt,P[v.pointerId]=U),U.set(v.pageX,v.pageY)}function Mt(v){const U=v.pointerId===A[0]?A[1]:A[0];return P[U]}n.domElement.addEventListener("contextmenu",bt),n.domElement.addEventListener("pointerdown",L),n.domElement.addEventListener("pointercancel",q),n.domElement.addEventListener("wheel",G,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Q,{passive:!0,capture:!0}),this.update()}}function Dn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function du(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var je={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Qr={duration:.5,overwrite:!1,delay:0},el,Ee,le,sn=1e8,ne=1/sn,Lo=Math.PI*2,dv=Lo/4,pv=0,pu=Math.sqrt,mv=Math.cos,_v=Math.sin,Se=function(t){return typeof t=="string"},fe=function(t){return typeof t=="function"},Bn=function(t){return typeof t=="number"},nl=function(t){return typeof t=="undefined"},Sn=function(t){return typeof t=="object"},Oe=function(t){return t!==!1},il=function(){return typeof window!="undefined"},$s=function(t){return fe(t)||Se(t)},mu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pe=Array.isArray,gv=/random\([^)]+\)/g,vv=/,\s*/g,lh=/(?:-?\.?\d|\.)+/gi,_u=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,fr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,fo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,gu=/[+-]=-?[.\d]+/,xv=/[^,'"\[\]\s]+/gi,Mv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,he,gn,Do,rl,$e={},ca={},vu,xu=function(t){return(ca=br(t,$e))&&ke},sl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ts=function(t,e){return!e&&console.warn(t)},Mu=function(t,e){return t&&($e[t]=e)&&ca&&(ca[t]=e)||$e},es=function(){return 0},yv={suppressEvents:!0,isStart:!0,kill:!1},Ks={suppressEvents:!0,kill:!1},Sv={suppressEvents:!0},al={},si=[],Io={},yu,We={},po={},ch=30,Js=[],ol="",ll=function(t){var e=t[0],n,i;if(Sn(e)||fe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Js.length;i--&&!Js[i].targetTest(e););n=Js[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Gu(t[i],n)))||t.splice(i,1);return t},Li=function(t){return t._gsap||ll(an(t))[0]._gsap},Su=function(t,e,n){return(n=t[e])&&fe(n)?t[e]():nl(n)&&t.getAttribute&&t.getAttribute(e)||n},Fe=function(t,e){return(t=t.split(",")).forEach(e)||t},de=function(t){return Math.round(t*1e5)/1e5||0},ce=function(t){return Math.round(t*1e7)/1e7||0},vr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Ev=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ha=function(){var t=si.length,e=si.slice(0),n,i;for(Io={},si.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},cl=function(t){return!!(t._initted||t._startAt||t.add)},Eu=function(t,e,n,i){si.length&&!Ee&&ha(),t.render(e,n,i||!!(Ee&&e<0&&cl(t))),si.length&&!Ee&&ha()},Tu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(xv).length<2?e:Se(t)?t.trim():t},bu=function(t){return t},Ze=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Tv=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},br=function(t,e){for(var n in e)t[n]=e[n];return t},hh=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Sn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},ua=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},jr=function(t){var e=t.parent||he,n=t.keyframes?Tv(Pe(t.keyframes)):Ze;if(Oe(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},bv=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Au=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},ya=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},hi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Di=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Av=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Uo=function(t,e,n,i){return t._startAt&&(Ee?t._startAt.revert(Ks):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},wv=function r(t){return!t||t._ts&&r(t.parent)},uh=function(t){return t._repeat?Ar(t._tTime,t=t.duration()+t._rDelay)*t:0},Ar=function(t,e){var n=Math.floor(t=ce(t/e));return t&&n===t?n-1:n},fa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Sa=function(t){return t._end=ce(t._start+(t._tDur/Math.abs(t._ts||t._rts||ne)||0))},Ea=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ce(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Sa(t),n._dirty||Di(n,t)),t},wu=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=fa(t.rawTime(),e),(!e._dur||ds(0,e.totalDuration(),n)-e._tTime>ne)&&e.render(n,!0)),Di(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ne}},xn=function(t,e,n,i){return e.parent&&hi(e),e._start=ce((Bn(n)?n:n||t!==he?tn(t,n,e):t._time)+e._delay),e._end=ce(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Au(t,e,"_first","_last",t._sort?"_start":0),No(e)||(t._recent=e),i||wu(t,e),t._ts<0&&Ea(t,t._tTime),t},Ru=function(t,e){return($e.ScrollTrigger||sl("scrollTrigger",e))&&$e.ScrollTrigger.create(e,t)},Cu=function(t,e,n,i,s){if(ul(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ee&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&yu!==Xe.frame)return si.push(t),t._lazy=[s,i],1},Rv=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},No=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Cv=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&Rv(t)&&!(!t._initted&&No(t))||(t._ts<0||t._dp._ts<0)&&!No(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=ds(0,t._tDur,e),h=Ar(l,o),t._yoyo&&h&1&&(a=1-a),h!==Ar(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Ee||i||t._zTime===ne||!e&&t._zTime){if(!t._initted&&Cu(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?ne:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Uo(t,e,n,!0),t._onUpdate&&!n&&Ye(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Ye(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&hi(t,1),!n&&!Ee&&(Ye(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Pv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},wr=function(t,e,n,i){var s=t._repeat,a=ce(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:ce(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Ea(t,t._tTime=t._tDur*o),t.parent&&Sa(t),n||Di(t.parent,t),t},fh=function(t){return t instanceof Ue?Di(t):wr(t,t._dur)},Lv={_start:0,endTime:es,totalDuration:es},tn=function r(t,e,n){var i=t.labels,s=t._recent||Lv,a=t.duration()>=sn?s.endTime(!1):t._dur,o,l,c;return Se(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Pe(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},$r=function(t,e,n){var i=Bn(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Oe(l.vars.inherit)&&l.parent;a.immediateRender=Oe(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new _e(e[0],a,e[s+1])},pi=function(t,e){return t||t===0?e(t):e},ds=function(t,e,n){return n<t?t:n>e?e:n},Ce=function(t,e){return!Se(t)||!(e=Mv.exec(t))?"":e[1]},Dv=function(t,e,n){return pi(n,function(i){return ds(t,e,i)})},Oo=[].slice,Pu=function(t,e){return t&&Sn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Sn(t[0]))&&!t.nodeType&&t!==gn},Iv=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Se(i)&&!e||Pu(i,1)?(s=n).push.apply(s,an(i)):n.push(i)})||n},an=function(t,e,n){return le&&!e&&le.selector?le.selector(t):Se(t)&&!n&&(Do||!Rr())?Oo.call((e||rl).querySelectorAll(t),0):Pe(t)?Iv(t,n):Pu(t)?Oo.call(t,0):t?[t]:[]},Fo=function(t){return t=an(t)[0]||ts("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return an(e,n.querySelectorAll?n:n===t?ts("Invalid scope")||rl.createElement("div"):t)}},Lu=function(t){return t.sort(function(){return .5-Math.random()})},Du=function(t){if(fe(t))return t;var e=Sn(t)?t:{each:t},n=Ii(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return Se(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(f,d,g){var _=(g||e).length,p=a[_],m,E,M,T,C,w,A,P,S;if(!p){if(S=e.grid==="auto"?0:(e.grid||[1,sn])[1],!S){for(A=-sn;A<(A=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(p=a[_]=[],m=l?Math.min(S,_)*h-.5:i%S,E=S===sn?0:l?_*u/S-.5:i/S|0,A=0,P=sn,w=0;w<_;w++)M=w%S-m,T=E-(w/S|0),p[w]=C=c?Math.abs(c==="y"?T:M):pu(M*M+T*T),C>A&&(A=C),C<P&&(P=C);i==="random"&&Lu(p),p.max=A-P,p.min=P,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Ce(e.amount||e.each)||0,n=n&&_<0?Yv(n):n}return _=(p[f]-p.min)/p.max||0,ce(p.b+(n?n(_):_)*p.v)+p.u}},Bo=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ce(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Bn(n)?0:Ce(n))}},Iu=function(t,e){var n=Pe(t),i,s;return!n&&Sn(t)&&(i=n=t.radius||sn,t.values?(t=an(t.values),(s=!Bn(t[0]))&&(i*=i)):t=Bo(t.increment)),pi(e,n?fe(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=sn,h=0,u=t.length,f,d;u--;)s?(f=t[u].x-o,d=t[u].y-l,f=f*f+d*d):f=Math.abs(t[u]-o),f<c&&(c=f,h=u);return h=!i||c<=i?t[h]:a,s||h===a||Bn(a)?h:h+Ce(a)}:Bo(t))},Uu=function(t,e,n,i){return pi(Pe(t)?!e:n===!0?!!(n=0):!i,function(){return Pe(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Uv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Nv=function(t,e){return function(n){return t(parseFloat(n))+(e||Ce(n))}},Ov=function(t,e,n){return Ou(t,e,0,1,n)},Nu=function(t,e,n){return pi(n,function(i){return t[~~e(i)]})},Fv=function r(t,e,n){var i=e-t;return Pe(t)?Nu(t,r(0,t.length),e):pi(n,function(s){return(i+(s-t)%i)%i+t})},Bv=function r(t,e,n){var i=e-t,s=i*2;return Pe(t)?Nu(t,r(0,t.length-1),e):pi(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},ns=function(t){return t.replace(gv,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(vv);return Uu(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Ou=function(t,e,n,i,s){var a=e-t,o=i-n;return pi(s,function(l){return n+((l-t)/a*o||0)})},zv=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var a=Se(t),o={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Pe(t)&&!Pe(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(g){g*=u;var _=Math.min(f,~~g);return h[_](g-_)},n=e}else i||(t=br(Pe(t)?[]:{},t));if(!h){for(l in e)hl.call(o,t,l,"get",e[l]);s=function(g){return pl(g,o)||(a?t.p:t)}}}return pi(n,s)},dh=function(t,e,n){var i=t.labels,s=sn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Ye=function(t,e,n){var i=t.vars,s=i[e],a=le,o=t._ctx,l,c,h;if(!!s)return l=i[e+"Params"],c=i.callbackScope||t,n&&si.length&&ha(),o&&(le=o),h=l?s.apply(c,l):s.call(c),le=a,h},Xr=function(t){return hi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ee),t.progress()<1&&Ye(t,"onInterrupt"),t},dr,Fu=[],Bu=function(t){if(!!t)if(t=!t.name&&t.default||t,il()||t.headless){var e=t.name,n=fe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:es,render:pl,add:hl,kill:nx,modifier:ex,rawVars:0},a={targetTest:0,get:0,getSetter:dl,aliases:{},register:0};if(Rr(),t!==i){if(We[e])return;Ze(i,Ze(ua(t,s),a)),br(i.prototype,br(s,ua(t,a))),We[i.prop=e]=i,t.targetTest&&(Js.push(i),al[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Mu(e,i),t.register&&t.register(ke,i,Be)}else Fu.push(t)},ee=255,Yr={aqua:[0,ee,ee],lime:[0,ee,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ee],navy:[0,0,128],white:[ee,ee,ee],olive:[128,128,0],yellow:[ee,ee,0],orange:[ee,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ee,0,0],pink:[ee,192,203],cyan:[0,ee,ee],transparent:[ee,ee,ee,0]},mo=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ee+.5|0},zu=function(t,e,n){var i=t?Bn(t)?[t>>16,t>>8&ee,t&ee]:0:Yr.black,s,a,o,l,c,h,u,f,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Yr[t])i=Yr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ee,i&ee,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ee,t&ee]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(lh),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=mo(l+1/3,s,a),i[1]=mo(l,s,a),i[2]=mo(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(_u),n&&i.length<4&&(i[3]=1),i}else i=t.match(lh)||Yr.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/ee,a=i[1]/ee,o=i[2]/ee,u=Math.max(s,a,o),f=Math.min(s,a,o),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===s?(a-o)/d+(a<o?6:0):u===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},ku=function(t){var e=[],n=[],i=-1;return t.split(ai).forEach(function(s){var a=s.match(fr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},ph=function(t,e,n){var i="",s=(t+i).match(ai),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return t;if(s=s.map(function(f){return(f=zu(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=ku(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ai,"1").split(fr),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(ai),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},ai=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Yr)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),kv=/hsl[a]?\(/,Hu=function(t){var e=t.join(" "),n;if(ai.lastIndex=0,ai.test(e))return n=kv.test(e),t[1]=ph(t[1],n),t[0]=ph(t[0],n,ku(t[1])),!0},is,Xe=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,f,d,g=function _(p){var m=r()-i,E=p===!0,M,T,C,w;if((m>t||m<0)&&(n+=m-e),i+=m,C=i-n,M=C-a,(M>0||E)&&(w=++u.frame,f=C-u.time*1e3,u.time=C=C/1e3,a+=M+(M>=s?4:s-M),T=1),E||(l=c(_)),T)for(d=0;d<o.length;d++)o[d](C,f,w,p)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){vu&&(!Do&&il()&&(gn=Do=window,rl=gn.document||{},$e.gsap=ke,(gn.gsapVersions||(gn.gsapVersions=[])).push(ke.version),xu(ca||gn.GreenSockGlobals||!gn.gsap&&gn||{}),Fu.forEach(Bu)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&u.sleep(),c=h||function(p){return setTimeout(p,a-u.time*1e3+1|0)},is=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),is=0,c=es},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),a=u.time*1e3+s},add:function(p,m,E){var M=m?function(T,C,w,A){p(T,C,w,A),u.remove(M)}:p;return u.remove(p),o[E?"unshift":"push"](M),Rr(),M},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},u}(),Rr=function(){return!is&&Xe.wake()},Yt={},Hv=/^[\d.\-M][\d.\-,\s]/,Vv=/["']/g,Gv=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Vv,"").trim():+c,i=l.substr(o+1).trim();return e},Wv=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Xv=function(t){var e=(t+"").split("("),n=Yt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Gv(e[1])]:Wv(t).split(",").map(Tu)):Yt._CE&&Hv.test(t)?Yt._CE("",t):n},Yv=function(t){return function(e){return 1-t(1-e)}},Ii=function(t,e){return t&&(fe(t)?t:Yt[t]||Xv(t))||e},Bi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Fe(t,function(o){Yt[o]=$e[o]=s,Yt[a=o.toLowerCase()]=n;for(var l in s)Yt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Yt[o+"."+l]=s[l]}),s},Vu=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},_o=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Lo*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*_v((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Vu(o);return s=Lo/s,l.config=function(c,h){return r(t,c,h)},l},go=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Vu(n);return i.config=function(s){return r(t,s)},i};Fe("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Bi(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Yt.Linear.easeNone=Yt.none=Yt.Linear.easeIn;Bi("Elastic",_o("in"),_o("out"),_o());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Bi("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Bi("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Bi("Circ",function(r){return-(pu(1-r*r)-1)});Bi("Sine",function(r){return r===1?1:-mv(r*dv)+1});Bi("Back",go("in"),go("out"),go());Yt.SteppedEase=Yt.steps=$e.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-ne;return function(o){return((i*ds(0,a,o)|0)+s)*n}}};Qr.ease=Yt["quad.out"];Fe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ol+=r+","+r+"Params,"});var Gu=function(t,e){this.id=pv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Su,this.set=e?e.getSetter:dl},rs=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,wr(this,+e.duration,1,1),this.data=e.data,le&&(this._ctx=le,le.data.push(this)),is||Xe.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,wr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Rr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ea(this,n),!s._dp||s.parent||wu(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&xn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ne||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Eu(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+uh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+uh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ar(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ne?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?fa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ne?0:this._rts,this.totalTime(ds(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Sa(this),Av(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Rr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ne&&(this._tTime-=ne)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=ce(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&xn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Oe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?fa(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Sv);var i=Ee;return Ee=n,cl(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ee=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,fh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,fh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(tn(this,n),Oe(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Oe(i)),this._dur||(this._zTime=-ne),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ne:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ne,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ne)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=fe(n)?n:bu,l=function(){var h=i.then;i.then=null,s&&s(),fe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Xr(this)},r}();Ze(rs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ne,_prom:0,_ps:!1,_rts:1});var Ue=function(r){du(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Oe(n.sortChildren),he&&xn(n.parent||he,Dn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ru(Dn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return $r(0,arguments,this),this},e.from=function(i,s,a){return $r(1,arguments,this),this},e.fromTo=function(i,s,a,o){return $r(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,jr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new _e(i,s,tn(this,a),1),this},e.call=function(i,s,a){return xn(this,_e.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new _e(i,a,tn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,jr(a).immediateRender=Oe(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,jr(o).immediateRender=Oe(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:ce(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,p,m,E,M,T,C,w,A;if(this!==he&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,T=this._start,M=this._ts,m=!M,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=ce(h%p),h===l?(_=this._repeat,f=c):(C=ce(h/p),_=~~C,_&&_===C&&(f=c,_--),f>c&&(f=c)),C=Ar(this._tTime,p),!o&&this._tTime&&C!==_&&this._tTime-C*p-this._dur<=0&&(C=_),w&&_&1&&(f=c-f,A=1),_!==C&&!this._lock){var P=w&&C&1,S=P===(w&&_&1);if(_<C&&(P=!P),o=P?0:h%c?c:h,this._lock=1,this.render(o||(A?0:ce(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Ye(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,C=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=Pv(this,ce(o),ce(f)),E&&(h-=f-(f=E._start))),this._tTime=h,this._time=f,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!C&&(Ye(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&E!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!m){E=0,g&&(h+=this._zTime=-ne);break}}d=g}else{d=this._last;for(var y=i<0?i:f;d;){if(g=d._prev,(d._act||y<=d._end)&&d._ts&&E!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,s,a||Ee&&cl(d)),f!==this._time||!this._ts&&!m){E=0,g&&(h+=this._zTime=y?-ne:ne);break}}d=g}}if(E&&!s&&(this.pause(),E.render(f>=o?0:-ne)._zTime=f>=o?1:-1,this._ts))return this._start=T,Sa(this),this.render(i,s,a);this._onUpdate&&!s&&Ye(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(T===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&hi(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(Ye(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Bn(s)||(s=tn(this,s,i)),!(i instanceof rs)){if(Pe(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Se(i))return this.addLabel(i,s);if(fe(i))i=_e.delayedCall(0,i);else return this}return this!==i?xn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-sn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof _e?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Se(i)?this.removeLabel(i):fe(i)?this.killTweensOf(i):(i.parent===this&&ya(this,i),i===this._recent&&(this._recent=this._last),Di(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ce(Xe.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=tn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=_e.delayedCall(0,s||es,a);return o.data="isPause",this._hasPause=1,xn(this,o,tn(this,i))},e.removePause=function(i){var s=this._first;for(i=tn(this,i);s;)s._start===i&&s.data==="isPause"&&hi(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ti!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=an(i),l=this._first,c=Bn(s),h;l;)l instanceof _e?Ev(l._targets,o)&&(c?(!ti||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=tn(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,g=_e.to(a,Ze({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ne,onStart:function(){if(a.pause(),!d){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&wr(g,p,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,u||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,Ze({startAt:{time:tn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),dh(this,tn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),dh(this,tn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ne)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=ce(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Di(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Di(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=sn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,xn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=ce(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;wr(a,a===he&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(he._ts&&(Eu(he,fa(i,he)),yu=Xe.frame),Xe.frame>=ch){ch+=je.autoSleep||120;var s=he._first;if((!s||!s._ts)&&je.autoSleep&&Xe._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Xe.sleep()}}},t}(rs);Ze(Ue.prototype,{_lock:0,_hasPause:0,_forcing:0});var qv=function(t,e,n,i,s,a,o){var l=new Be(this._pt,t,e,0,1,$u,null,s),c=0,h=0,u,f,d,g,_,p,m,E;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=ns(i)),a&&(E=[n,i],a(E,t,e),n=E[0],i=E[1]),f=n.match(fo)||[];u=fo.exec(i);)g=u[0],_=i.substring(c,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?vr(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=fo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(gu.test(i)||m)&&(l.e=0),this._pt=l,l},hl=function(t,e,n,i,s,a,o,l,c,h){fe(i)&&(i=i(s||0,t,a));var u=t[e],f=n!=="get"?n:fe(u)?c?t[e.indexOf("set")||!fe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,d=fe(u)?c?Jv:qu:fl,g;if(Se(i)&&(~i.indexOf("random(")&&(i=ns(i)),i.charAt(1)==="="&&(g=vr(f,i)+(Ce(f)||0),(g||g===0)&&(i=g))),!h||f!==i||zo)return!isNaN(f*i)&&i!==""?(g=new Be(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?tx:ju,0,d),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!u&&!(e in t)&&sl(e,i),qv.call(this,t,e,f,i,d,l||je.stringFilter,c))},jv=function(t,e,n,i,s){if(fe(t)&&(t=Zr(t,s,e,n,i)),!Sn(t)||t.style&&t.nodeType||Pe(t)||mu(t))return Se(t)?Zr(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Zr(t[o],s,e,n,i);return a},Wu=function(t,e,n,i,s,a){var o,l,c,h;if(We[t]&&(o=new We[t]).init(s,o.rawVars?e[t]:jv(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Be(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==dr))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},ti,zo,ul=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,E=m&&m.data==="nested"?m.vars.targets:p,M=t._overwrite==="auto"&&!el,T=t.timeline,C=i.easeReverse||u,w,A,P,S,y,O,z,D,H,Z,J,it,V;if(T&&(!f||!s)&&(s="none"),t._ease=Ii(s,Qr.ease),t._rEase=C&&(Ii(C)||t._ease),t._from=!T&&!!i.runBackwards,t._from&&(t.ratio=1),!T||f&&!i.stagger){if(D=p[0]?Li(p[0]).harness:0,it=D&&i[D.prop],w=ua(i,al),_&&(_._zTime<0&&_.progress(1),e<0&&h&&o&&!d?_.render(-1,!0):_.revert(h&&g?Ks:yv),_._lazy=0),a){if(hi(t._startAt=_e.set(p,Ze({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Oe(l),startAt:null,delay:0,onUpdate:c&&function(){return Ye(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ee||!o&&!d)&&t._startAt.revert(Ks),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(o=!1),P=Ze({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Oe(l),immediateRender:o,stagger:0,parent:m},w),it&&(P[D.prop]=it),hi(t._startAt=_e.set(p,P)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ee?t._startAt.revert(Ks):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,ne,ne);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Oe(l)||l&&!g,A=0;A<p.length;A++){if(y=p[A],z=y._gsap||ll(p)[A]._gsap,t._ptLookup[A]=Z={},Io[z.id]&&si.length&&ha(),J=E===p?A:E.indexOf(y),D&&(H=new D).init(y,it||w,t,J,E)!==!1&&(t._pt=S=new Be(t._pt,y,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(nt){Z[nt]=S}),H.priority&&(O=1)),!D||it)for(P in w)We[P]&&(H=Wu(P,w,t,J,y,E))?H.priority&&(O=1):Z[P]=S=hl.call(t,y,P,"get",w[P],J,E,0,i.stringFilter);t._op&&t._op[A]&&t.kill(y,t._op[A]),M&&t._pt&&(ti=t,he.killTweensOf(y,Z,t.globalTime(e)),V=!t.parent,ti=0),t._pt&&l&&(Io[z.id]=1)}O&&Zu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!V,f&&e<=0&&T.render(sn,!0,!0)},$v=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return zo=1,t.vars[e]="+=0",ul(t,o),zo=0,l?ts(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=de(n)+Ce(u.e)),u.b&&(u.b=h.s+Ce(u.b))},Zv=function(t,e){var n=t[0]?Li(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=br({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Kv=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Pe(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Zr=function(t,e,n,i,s){return fe(t)?t.call(e,n,i,s):Se(t)&&~t.indexOf("random(")?ns(t):t},Xu=ol+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Yu={};Fe(Xu+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Yu[r]=1});var _e=function(r){du(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:jr(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=i.parent||he,E=(Pe(n)||mu(n)?Bn(n[0]):"length"in i)?[n]:an(n),M,T,C,w,A,P,S,y;if(o._targets=E.length?ll(E):ts("GSAP target "+n+" not found. https://gsap.com",!je.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||$s(c)||$s(h)){i=o.vars;var O=i.easeReverse||i.yoyoEase;if(M=o.timeline=new Ue({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:E}),M.kill(),M.parent=M._dp=Dn(o),M._start=0,f||$s(c)||$s(h)){if(w=E.length,S=f&&Du(f),Sn(f))for(A in f)~Xu.indexOf(A)&&(y||(y={}),y[A]=f[A]);for(T=0;T<w;T++)C=ua(i,Yu),C.stagger=0,O&&(C.easeReverse=O),y&&br(C,y),P=E[T],C.duration=+Zr(c,Dn(o),T,P,E),C.delay=(+Zr(h,Dn(o),T,P,E)||0)-o._delay,!f&&w===1&&C.delay&&(o._delay=h=C.delay,o._start+=h,C.delay=0),M.to(P,C,S?S(T,P,E):0),M._ease=Yt.none;M.duration()?c=h=0:o.timeline=0}else if(g){jr(Ze(M.vars.defaults,{ease:"none"})),M._ease=Ii(g.ease||i.ease||"none");var z=0,D,H,Z;if(Pe(g))g.forEach(function(J){return M.to(E,J,">")}),M.duration();else{C={};for(A in g)A==="ease"||A==="easeEach"||Kv(A,g[A],C,g.easeEach);for(A in C)for(D=C[A].sort(function(J,it){return J.t-it.t}),z=0,T=0;T<D.length;T++)H=D[T],Z={ease:H.e,duration:(H.t-(T?D[T-1].t:0))/100*c},Z[A]=H.v,M.to(E,Z,z),z+=Z.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return d===!0&&!el&&(ti=Dn(o),he.killTweensOf(E),ti=0),xn(m,Dn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!g&&o._start===ce(m._time)&&Oe(u)&&wv(Dn(o))&&m.data!=="nested")&&(o._tTime=-ne,o.render(Math.max(0,-h)||0)),p&&Ru(Dn(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ne&&!h?l:i<ne?0:i,f,d,g,_,p,m,E,M;if(!c)Cv(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(f=ce(u%_),u===l?(g=this._repeat,f=c):(p=ce(u/_),g=~~p,g&&g===p?(f=c,g--):f>c&&(f=c)),m=this._yoyo&&g&1,m&&(f=c-f),p=Ar(this._tTime,_),f===o&&!a&&this._initted&&g===p)return this._tTime=u,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(ce(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Cu(this,h?i:f,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var T=f<o;if(T!==this._inv){var C=T?o:c-o;this._inv=T,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=C?(T?-1:1)/C:0,this._invScale=T?-this.ratio:1-this.ratio,this._invEase=T?this._rEase:this._ease}this.ratio=E=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=E=this._ease(f/c);if(this._from&&(this.ratio=E=1-E),this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&u&&!s&&!p&&(Ye(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(E,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Uo(this,i,s,a),Ye(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Ye(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Uo(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&hi(this,1),!s&&!(h&&!o)&&(u||o||m)&&(Ye(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){is||Xe.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||ul(this,c),h=this._ease(c/this._dur),$v(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(Ea(this,0),this.parent||Au(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Xr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ee),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ti&&ti.vars.overwrite!==!0)._first||Xr(this),this.parent&&a!==this.timeline.totalDuration()&&wr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?an(i):o,c=this._ptLookup,h=this._pt,u,f,d,g,_,p,m;if((!s||s==="all")&&bv(o,l))return s==="all"&&(this._pt=0),Xr(this);for(u=this._op=this._op||[],s!=="all"&&(Se(s)&&(_={},Fe(s,function(E){return _[E]=1}),s=_),s=Zv(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],s==="all"?(u[m]=s,g=f,d={}):(d=u[m]=u[m]||{},g=s);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&ya(this,p,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&Xr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return $r(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return $r(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return he.killTweensOf(i,s,a)},t}(rs);Ze(_e.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Fe("staggerTo,staggerFrom,staggerFromTo",function(r){_e[r]=function(){var t=new Ue,e=Oo.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var fl=function(t,e,n){return t[e]=n},qu=function(t,e,n){return t[e](n)},Jv=function(t,e,n,i){return t[e](i.fp,n)},Qv=function(t,e,n){return t.setAttribute(e,n)},dl=function(t,e){return fe(t[e])?qu:nl(t[e])&&t.setAttribute?Qv:fl},ju=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},tx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},$u=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},pl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},ex=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},nx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ya(this,e,"_pt"):e.dep||(n=1),e=i;return!n},ix=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Zu=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Be=function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||ju,this.d=l||this,this.set=c||fl,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=ix,this.m=n,this.mt=s,this.tween=i},r}();Fe(ol+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return al[r]=1});$e.TweenMax=$e.TweenLite=_e;$e.TimelineLite=$e.TimelineMax=Ue;he=new Ue({sortChildren:!1,defaults:Qr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});je.stringFilter=Hu;var Ui=[],Qs={},rx=[],mh=0,sx=0,vo=function(t){return(Qs[t]||rx).map(function(e){return e()})},ko=function(){var t=Date.now(),e=[];t-mh>2&&(vo("matchMediaInit"),Ui.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=gn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),vo("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),mh=t,vo("matchMedia"))},Ku=function(){function r(e,n){this.selector=n&&Fo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=sx++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){fe(n)&&(s=i,i=n,n=fe);var a=this,o=function(){var c=le,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=Fo(s)),le=a,u=i.apply(a,arguments),fe(u)&&a._r.push(u),le=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===fe?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=le;le=null,n(this),le=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof _e&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ue?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof _e)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Ui.length;a--;)Ui[a].id===this.id&&Ui.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),ax=function(){function r(e){this.contexts=[],this.scope=e,le&&le.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Sn(n)||(n={matches:n});var a=new Ku(0,s||this.scope),o=a.conditions={},l,c,h;le&&!a.selector&&(a.selector=le.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=gn.matchMedia(n[c]),l&&(Ui.indexOf(a)<0&&Ui.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(ko):l.addEventListener("change",ko)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),da={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Bu(i)})},timeline:function(t){return new Ue(t)},getTweensOf:function(t,e){return he.getTweensOf(t,e)},getProperty:function(t,e,n,i){Se(t)&&(t=an(t)[0]);var s=Li(t||{}).get,a=n?bu:Tu;return n==="native"&&(n=""),t&&(e?a((We[e]&&We[e].get||s)(t,e,n,i)):function(o,l,c){return a((We[o]&&We[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=an(t),t.length>1){var i=t.map(function(h){return ke.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var a=We[e],o=Li(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;dr._pt=0,u.init(t,n?h+n:h,dr,0,[t]),u.render(1,u),dr._pt&&pl(1,dr)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=ke.to(t,Ze((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return he.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ii(t.ease,Qr.ease)),hh(Qr,t||{})},config:function(t){return hh(je,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!We[o]&&!$e[o]&&ts(e+" effect requires "+o+" plugin.")}),po[e]=function(o,l,c){return n(an(o),Ze(l||{},s),c)},a&&(Ue.prototype[e]=function(o,l,c){return this.add(po[e](o,Sn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Yt[t]=Ii(e)},parseEase:function(t,e){return arguments.length?Ii(t,e):Yt},getById:function(t){return he.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ue(t),i,s;for(n.smoothChildTiming=Oe(t.smoothChildTiming),he.remove(n),n._dp=0,n._time=n._tTime=he._time,i=he._first;i;)s=i._next,(e||!(!i._dur&&i instanceof _e&&i.vars.onComplete===i._targets[0]))&&xn(n,i,i._start-i._delay),i=s;return xn(he,n,0),n},context:function(t,e){return t?new Ku(t,e):le},matchMedia:function(t){return new ax(t)},matchMediaRefresh:function(){return Ui.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ko()},addEventListener:function(t,e){var n=Qs[t]||(Qs[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Qs[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Fv,wrapYoyo:Bv,distribute:Du,random:Uu,snap:Iu,normalize:Ov,getUnit:Ce,clamp:Dv,splitColor:zu,toArray:an,selector:Fo,mapRange:Ou,pipe:Uv,unitize:Nv,interpolate:zv,shuffle:Lu},install:xu,effects:po,ticker:Xe,updateRoot:Ue.updateRoot,plugins:We,globalTimeline:he,core:{PropTween:Be,globals:Mu,Tween:_e,Timeline:Ue,Animation:rs,getCache:Li,_removeLinkedListItem:ya,reverting:function(){return Ee},context:function(t){return t&&le&&(le.data.push(t),t._ctx=le),le},suppressOverwrites:function(t){return el=t}}};Fe("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return da[r]=_e[r]});Xe.add(Ue.updateRoot);dr=da.to({},{duration:0});var ox=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},lx=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=ox(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},xo=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Se(s)&&(l={},Fe(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}lx(o,s)}}}},ke=da.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Ee?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},xo("roundProps",Bo),xo("modifiers"),xo("snap",Iu))||da;_e.version=Ue.version=ke.version="3.15.0";vu=1;il()&&Rr();Yt.Power0;Yt.Power1;Yt.Power2;Yt.Power3;Yt.Power4;Yt.Linear;Yt.Quad;Yt.Cubic;Yt.Quart;Yt.Quint;Yt.Strong;Yt.Elastic;Yt.Back;Yt.SteppedEase;Yt.Bounce;Yt.Sine;Yt.Expo;Yt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var _h,ei,xr,ml,Pi,gh,_l,cx=function(){return typeof window!="undefined"},zn={},bi=180/Math.PI,Mr=Math.PI/180,hr=Math.atan2,vh=1e8,gl=/([A-Z])/g,hx=/(left|right|width|margin|padding|x)/i,ux=/[\s,\(]\S/,yn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ho=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},fx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},dx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},px=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},mx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Ju=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Qu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},_x=function(t,e,n){return t.style[e]=n},gx=function(t,e,n){return t.style.setProperty(e,n)},vx=function(t,e,n){return t._gsap[e]=n},xx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Mx=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},yx=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},ue="transform",ze=ue+"Origin",Sx=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in zn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=yn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=In(i,o)}):this.tfm[t]=a.x?a[t]:In(i,t),t===ze&&(this.tfm.zOrigin=a.zOrigin);else return yn.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(ue)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ze,e,"")),t=ue}(s||e)&&this.props.push(t,e,s[t])},tf=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Ex=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(gl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=_l(),(!s||!s.isStart)&&!n[ue]&&(tf(n),i.zOrigin&&n[ze]&&(n[ze]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},ef=function(t,e){var n={target:t,props:[],revert:Ex,save:Sx};return t._gsap||ke.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},nf,Vo=function(t,e){var n=ei.createElementNS?ei.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ei.createElement(t);return n&&n.style?n:ei.createElement(t)},qe=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(gl,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Cr(e)||e,1)||""},xh="O,Moz,ms,Ms,Webkit".split(","),Cr=function(t,e,n){var i=e||Pi,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(xh[a]+t in s););return a<0?null:(a===3?"ms":a>=0?xh[a]:"")+t},Go=function(){cx()&&window.document&&(_h=window,ei=_h.document,xr=ei.documentElement,Pi=Vo("div")||{style:{}},Vo("div"),ue=Cr(ue),ze=ue+"Origin",Pi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",nf=!!Cr("perspective"),_l=ke.core.reverting,ml=1)},Mh=function(t){var e=t.ownerSVGElement,n=Vo("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),xr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),xr.removeChild(n),s},yh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},rf=function(t){var e,n;try{e=t.getBBox()}catch{e=Mh(t),n=1}return e&&(e.width||e.height)||n||(e=Mh(t)),e&&!e.width&&!e.x&&!e.y?{x:+yh(t,["x","cx","x1"])||0,y:+yh(t,["y","cy","y1"])||0,width:0,height:0}:e},sf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&rf(t))},ui=function(t,e){if(e){var n=t.style,i;e in zn&&e!==ze&&(e=ue),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(gl,"-$1").toLowerCase())):n.removeAttribute(e)}},ni=function(t,e,n,i,s,a){var o=new Be(t._pt,e,n,0,1,a?Qu:Ju);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Sh={deg:1,rad:1,turn:1},Tx={grid:1,flex:1},fi=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Pi.style,l=hx.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",g,_,p,m;if(i===a||!s||Sh[i]||Sh[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),m=t.getCTM&&sf(t),(d||a==="%")&&(zn[e]||~e.indexOf("adius")))return g=m?t.getBBox()[l?"width":"height"]:t[h],de(d?s/g*u:s/100*g);if(o[l?"width":"height"]=u+(f?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===ei||!_.appendChild)&&(_=ei.body),p=_._gsap,p&&d&&p.width&&l&&p.time===Xe.time&&!p.uncache)return de(s/p.width*u);if(d&&(e==="height"||e==="width")){var E=t.style[e];t.style[e]=u+i,g=t[h],E?t.style[e]=E:ui(t,e)}else(d||a==="%")&&!Tx[qe(_,"display")]&&(o.position=qe(t,"position")),_===t&&(o.position="static"),_.appendChild(Pi),g=Pi[h],_.removeChild(Pi),o.position="absolute";return l&&d&&(p=Li(_),p.time=Xe.time,p.width=_[h]),de(f?g*s/u:g&&s?u/g*s:0)},In=function(t,e,n,i){var s;return ml||Go(),e in yn&&e!=="transform"&&(e=yn[e],~e.indexOf(",")&&(e=e.split(",")[0])),zn[e]&&e!=="transform"?(s=as(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ma(qe(t,ze))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=pa[e]&&pa[e](t,e,n)||qe(t,e)||Su(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?fi(t,e,s,n)+n:s},bx=function(t,e,n,i){if(!n||n==="none"){var s=Cr(e,t,1),a=s&&qe(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=qe(t,"borderTopColor"))}var o=new Be(this._pt,t.style,e,0,1,$u),l=0,c=0,h,u,f,d,g,_,p,m,E,M,T,C;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=qe(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=qe(t,e)||i,_?t.style[e]=_:ui(t,e)),h=[n,i],Hu(h),n=h[0],i=h[1],f=n.match(fr)||[],C=i.match(fr)||[],C.length){for(;u=fr.exec(i);)p=u[0],E=i.substring(l,u.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(d=parseFloat(_)||0,T=_.substr((d+"").length),p.charAt(1)==="="&&(p=vr(d,p)+T),m=parseFloat(p),M=p.substr((m+"").length),l=fr.lastIndex-M.length,M||(M=M||je.units[e]||T,l===i.length&&(i+=M,o.e+=M)),T!==M&&(d=fi(t,e,_,M)||0),o._pt={_next:o._pt,p:E||c===1?E:",",s:d,c:m-d,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Qu:Ju;return gu.test(i)&&(o.e=0),this._pt=o,o},Eh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ax=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Eh[n]||n,e[1]=Eh[i]||i,e.join(" ")},wx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],zn[o]&&(l=1,o=o==="transformOrigin"?ze:ue),ui(n,o);l&&(ui(n,ue),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",as(n,1),a.uncache=1,tf(i)))}},pa={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Be(t._pt,e,n,0,0,wx);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},ss=[1,0,0,1,0,0],af={},of=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Th=function(t){var e=qe(t,ue);return of(e)?ss:e.substr(7).match(_u).map(de)},vl=function(t,e){var n=t._gsap||Li(t),i=t.style,s=Th(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ss:s):(s===ss&&!t.offsetParent&&t!==xr&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,xr.appendChild(t)),s=Th(t),l?i.display=l:ui(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):xr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Wo=function(t,e,n,i,s,a){var o=t._gsap,l=s||vl(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],E=l[5],M=e.split(" "),T=parseFloat(M[0])||0,C=parseFloat(M[1])||0,w,A,P,S;n?l!==ss&&(A=d*p-g*_)&&(P=T*(p/A)+C*(-_/A)+(_*E-p*m)/A,S=T*(-g/A)+C*(d/A)-(d*E-g*m)/A,T=P,C=S):(w=rf(t),T=w.x+(~M[0].indexOf("%")?T/100*w.width:T),C=w.y+(~(M[1]||M[0]).indexOf("%")?C/100*w.height:C)),i||i!==!1&&o.smooth?(m=T-c,E=C-h,o.xOffset=u+(m*d+E*_)-m,o.yOffset=f+(m*g+E*p)-E):o.xOffset=o.yOffset=0,o.xOrigin=T,o.yOrigin=C,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[ze]="0px 0px",a&&(ni(a,o,"xOrigin",c,T),ni(a,o,"yOrigin",h,C),ni(a,o,"xOffset",u,o.xOffset),ni(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",T+" "+C)},as=function(t,e){var n=t._gsap||new Gu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=qe(t,ze)||"0",h,u,f,d,g,_,p,m,E,M,T,C,w,A,P,S,y,O,z,D,H,Z,J,it,V,nt,rt,mt,Rt,Xt,Y,st;return h=u=f=_=p=m=E=M=T=0,d=g=1,n.svg=!!(t.getCTM&&sf(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ue]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ue]!=="none"?l[ue]:"")),i.scale=i.rotate=i.translate="none"),A=vl(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",it=""):it=!e&&t.getAttribute("data-svg-origin"),Wo(t,it||c,!!it||n.originIsAbsolute,n.smooth!==!1,A)),C=n.xOrigin||0,w=n.yOrigin||0,A!==ss&&(O=A[0],z=A[1],D=A[2],H=A[3],h=Z=A[4],u=J=A[5],A.length===6?(d=Math.sqrt(O*O+z*z),g=Math.sqrt(H*H+D*D),_=O||z?hr(z,O)*bi:0,E=D||H?hr(D,H)*bi+_:0,E&&(g*=Math.abs(Math.cos(E*Mr))),n.svg&&(h-=C-(C*O+w*D),u-=w-(C*z+w*H))):(st=A[6],Xt=A[7],rt=A[8],mt=A[9],Rt=A[10],Y=A[11],h=A[12],u=A[13],f=A[14],P=hr(st,Rt),p=P*bi,P&&(S=Math.cos(-P),y=Math.sin(-P),it=Z*S+rt*y,V=J*S+mt*y,nt=st*S+Rt*y,rt=Z*-y+rt*S,mt=J*-y+mt*S,Rt=st*-y+Rt*S,Y=Xt*-y+Y*S,Z=it,J=V,st=nt),P=hr(-D,Rt),m=P*bi,P&&(S=Math.cos(-P),y=Math.sin(-P),it=O*S-rt*y,V=z*S-mt*y,nt=D*S-Rt*y,Y=H*y+Y*S,O=it,z=V,D=nt),P=hr(z,O),_=P*bi,P&&(S=Math.cos(P),y=Math.sin(P),it=O*S+z*y,V=Z*S+J*y,z=z*S-O*y,J=J*S-Z*y,O=it,Z=V),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=de(Math.sqrt(O*O+z*z+D*D)),g=de(Math.sqrt(J*J+st*st)),P=hr(Z,J),E=Math.abs(P)>2e-4?P*bi:0,T=Y?1/(Y<0?-Y:Y):0),n.svg&&(it=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!of(qe(t,ue)),it&&t.setAttribute("transform",it))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(d*=-1,E+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=de(d),n.scaleY=de(g),n.rotation=de(_)+o,n.rotationX=de(p)+o,n.rotationY=de(m)+o,n.skewX=E+o,n.skewY=M+o,n.transformPerspective=T+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[ze]=ma(c)),n.xOffset=n.yOffset=0,n.force3D=je.force3D,n.renderTransform=n.svg?Cx:nf?lf:Rx,n.uncache=0,n},ma=function(t){return(t=t.split(" "))[0]+" "+t[1]},Mo=function(t,e,n){var i=Ce(e);return de(parseFloat(e)+parseFloat(fi(t,"x",n+"px",i)))+i},Rx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,lf(t,e)},Si="0deg",Gr="0px",Ei=") ",lf=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,E=n.target,M=n.zOrigin,T="",C=m==="auto"&&t&&t!==1||m===!0;if(M&&(u!==Si||h!==Si)){var w=parseFloat(h)*Mr,A=Math.sin(w),P=Math.cos(w),S;w=parseFloat(u)*Mr,S=Math.cos(w),a=Mo(E,a,A*S*-M),o=Mo(E,o,-Math.sin(w)*-M),l=Mo(E,l,P*S*-M+M)}p!==Gr&&(T+="perspective("+p+Ei),(i||s)&&(T+="translate("+i+"%, "+s+"%) "),(C||a!==Gr||o!==Gr||l!==Gr)&&(T+=l!==Gr||C?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ei),c!==Si&&(T+="rotate("+c+Ei),h!==Si&&(T+="rotateY("+h+Ei),u!==Si&&(T+="rotateX("+u+Ei),(f!==Si||d!==Si)&&(T+="skew("+f+", "+d+Ei),(g!==1||_!==1)&&(T+="scale("+g+", "+_+Ei),E.style[ue]=T||"translate(0, 0)"},Cx=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,E=n.forceCSS,M=parseFloat(a),T=parseFloat(o),C,w,A,P,S;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Mr,c*=Mr,C=Math.cos(l)*u,w=Math.sin(l)*u,A=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(h*=Mr,S=Math.tan(c-h),S=Math.sqrt(1+S*S),A*=S,P*=S,h&&(S=Math.tan(h),S=Math.sqrt(1+S*S),C*=S,w*=S)),C=de(C),w=de(w),A=de(A),P=de(P)):(C=u,P=f,w=A=0),(M&&!~(a+"").indexOf("px")||T&&!~(o+"").indexOf("px"))&&(M=fi(d,"x",a,"px"),T=fi(d,"y",o,"px")),(g||_||p||m)&&(M=de(M+g-(g*C+_*A)+p),T=de(T+_-(g*w+_*P)+m)),(i||s)&&(S=d.getBBox(),M=de(M+i/100*S.width),T=de(T+s/100*S.height)),S="matrix("+C+","+w+","+A+","+P+","+M+","+T+")",d.setAttribute("transform",S),E&&(d.style[ue]=S)},Px=function(t,e,n,i,s){var a=360,o=Se(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?bi:1),c=l-i,h=i+c+"deg",u,f;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*vh)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*vh)%a-~~(c/a)*a)),t._pt=f=new Be(t._pt,e,n,i,c,fx),f.e=h,f.u="deg",t._props.push(n),f},bh=function(t,e){for(var n in e)t[n]=e[n];return t},Lx=function(t,e,n){var i=bh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ue]=e,o=as(n,1),ui(n,ue),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ue],a[ue]=e,o=as(n,1),a[ue]=c);for(l in zn)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(d=Ce(c),g=Ce(h),u=d!==g?fi(n,l,c,g):parseFloat(c),f=parseFloat(h),t._pt=new Be(t._pt,o,l,u,f-u,Ho),t._pt.u=g||0,t._props.push(l));bh(o,i)};Fe("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});pa[t>1?"border"+r:r]=function(o,l,c,h,u){var f,d;if(arguments.length<4)return f=a.map(function(g){return In(o,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},a.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,d,u)}});var cf={name:"css",register:Go,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,f,d,g,_,p,m,E,M,T,C,w,A,P,S;ml||Go(),this.styles=this.styles||ef(t),P=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(We[_]&&Wu(_,e,n,i,t,s)))){if(d=typeof h,g=pa[_],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=ns(h)),g)g(this,t,_,h,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",ai.lastIndex=0,ai.test(c)||(p=Ce(c),m=Ce(h),m?p!==m&&(c=fi(t,_,c,m)+m):p&&(h+=p)),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),P.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Se(c)&&~c.indexOf("random(")&&(c=ns(c)),Ce(c+"")||c==="auto"||(c+=je.units[_]||Ce(In(t,_))||""),(c+"").charAt(1)==="="&&(c=In(t,_))):c=In(t,_),f=parseFloat(c),E=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),E&&(h=h.substr(2)),u=parseFloat(h),_ in yn&&(_==="autoAlpha"&&(f===1&&In(t,"visibility")==="hidden"&&u&&(f=0),P.push("visibility",0,o.visibility),ni(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=yn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in zn,M){if(this.styles.save(_),S=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=qe(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var y=t.style.perspective;t.style.perspective=h,h=qe(t,"perspective"),y?t.style.perspective=y:ui(t,"perspective")}u=parseFloat(h)}if(T||(C=t._gsap,C.renderTransform&&!e.parseTransform||as(t,e.parseTransform),w=e.smoothOrigin!==!1&&C.smooth,T=this._pt=new Be(this._pt,o,ue,0,1,C.renderTransform,C,0,-1),T.dep=1),_==="scale")this._pt=new Be(this._pt,C,"scaleY",C.scaleY,(E?vr(C.scaleY,E+u):u)-C.scaleY||0,Ho),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(ze,0,o[ze]),h=Ax(h),C.svg?Wo(t,h,0,w,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==C.zOrigin&&ni(this,C,"zOrigin",C.zOrigin,m),ni(this,o,_,ma(c),ma(h)));continue}else if(_==="svgOrigin"){Wo(t,h,1,w,0,this);continue}else if(_ in af){Px(this,C,_,f,E?vr(f,E+h):h);continue}else if(_==="smoothOrigin"){ni(this,C,"smooth",C.smooth,h);continue}else if(_==="force3D"){C[_]=h;continue}else if(_==="transform"){Lx(this,h,t);continue}}else _ in o||(_=Cr(_)||_);if(M||(u||u===0)&&(f||f===0)&&!ux.test(h)&&_ in o)p=(c+"").substr((f+"").length),u||(u=0),m=Ce(h)||(_ in je.units?je.units[_]:p),p!==m&&(f=fi(t,_,c,m)),this._pt=new Be(this._pt,M?C:o,_,f,(E?vr(f,E+u):u)-f,!M&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?mx:Ho),this._pt.u=m||0,M&&S!==h?(this._pt.b=c,this._pt.e=S,this._pt.r=px):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=dx);else if(_ in o)bx.call(this,t,_,c,E?E+h:h);else if(_ in t)this.add(t,_,c||t[_],E?E+h:h,i,s);else if(_!=="parseTransform"){sl(_,h);continue}M||(_ in o?P.push(_,0,o[_]):typeof t[_]=="function"?P.push(_,2,t[_]()):P.push(_,1,c||t[_])),a.push(_)}}A&&Zu(this)},render:function(t,e){if(e.tween._time||!_l())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:In,aliases:yn,getSetter:function(t,e,n){var i=yn[e];return i&&i.indexOf(",")<0&&(e=i),e in zn&&e!==ze&&(t._gsap.x||In(t,"x"))?n&&gh===n?e==="scale"?xx:vx:(gh=n||{})&&(e==="scale"?Mx:yx):t.style&&!nl(t.style[e])?_x:~e.indexOf("-")?gx:dl(t,e)},core:{_removeProperty:ui,_getMatrix:vl}};ke.utils.checkPrefix=Cr;ke.core.getStyleSaver=ef;(function(r,t,e,n){var i=Fe(r+","+t+","+e,function(s){zn[s]=1});Fe(t,function(s){je.units[s]="deg",af[s]=1}),yn[i[13]]=r+","+t,Fe(n,function(s){var a=s.split(":");yn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Fe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){je.units[r]="px"});ke.registerPlugin(cf);var Dx=ke.registerPlugin(cf)||ke;Dx.core.Tween;const Ix={class:"defender-header"},Ux={class:"dn-breadcrumb"},Nx={class:"dn-view-pills"},Ox=["onClick","title"],Fx={class:"dn-tip-name"},Bx={key:0,class:"dn-tip-type"},zx={key:1,class:"dn-tip-stat"},kx={key:2,class:"dn-tip-action"},Hx={key:3,class:"dn-tip-warn"},Vx=pf({__name:"DefenderNav",props:{mode:{},sceneLabel:{},showReturnBtn:{type:Boolean}},emits:["flyTo","portalTo","viewModeChange","eventFinderOpen","contextZoom","returnToPrev"],setup(r,{expose:t,emit:e}){const n=r,i=[{key:"natural",label:"NAT",desc:"Natural light \u2014 standard visualization"},{key:"xray",label:"X-RAY",desc:"X-ray overlay \u2014 highlights hot gas, clusters, and AGN"},{key:"dark_matter",label:"DK.MAT",desc:"Dark matter view \u2014 filament density prototype"}],s=e,a=zi("natural"),o=zi(0),l=zi(!1);El(()=>{if(o.value===0)return"NOW";const x=Math.abs(o.value);return x>=1e3?`${(x/1e3).toFixed(1)} Gyr`:`${x} Myr`});function c(x){a.value=x,s("viewModeChange",x)}function h(){l.value=!l.value,s("eventFinderOpen")}let u=0,f=80,d=1,g=1,_=0,p=0,m=0,E=0,M=!1,T=0,C=0,w=!1,A=0,P=0,S=[];const y=zi(null),O=zi(!1),z=zi(1),D=mf({visible:!1,x:0,name:""}),H=El(()=>n.mode==="system"?"ORBITAL PLANE":n.mode==="surface"?"360\xB0 HORIZON":"COSMIC WEB");function Z(x){return x?x>=3e4?"#9bb0ff":x>=1e4?"#aabfff":x>=7500?"#cad7ff":x>=6e3?"#f8f7ff":x>=5200?"#fff4ea":x>=3700?"#ffd2a1":"#ffcc6f":"#fff4ea"}function J(x,F){return x!=null?x>2e3?"#ff4500":x>1200?"#ff8c42":x>500?"#f0c040":x>273?"#4ecdc4":x>100?"#82b4d0":"#c8e8f8":F!=null?F<.08?"#ff4500":F<.5?"#ff8c42":F<1.5?"#4ecdc4":F<4?"#82b4d0":"#c8e8f8":"#7fb3d3"}const it={art:"rgba(200,120,255,0.9)",community:"rgba(255,200,60,0.9)",research:"rgba(60,220,180,0.9)",stage:"rgba(255,60,180,0.9)",info:"rgba(140,200,255,0.9)"};function V(x){const F=360/g;return(x-_+3600)%360/F*u}function nt(x,F){return f-6-Math.log10(1+x)/Math.log10(1+F)*(f-10)}function rt(x){return V(x)}function mt(x){return f/2-x/90*(f/2-4)}function Rt(x,F){return(x-m)/F*u}function Xt(x,F){return(x-E)/F*f}function Y(x,F,G,ot,Q,tt){const ct=x.globalCompositeOperation;x.globalCompositeOperation="screen";const K=x.createRadialGradient(F,G,0,F,G,Q);K.addColorStop(0,ot),K.addColorStop(1,"rgba(0,0,0,0)"),x.globalAlpha=.13,x.fillStyle=K,x.beginPath(),x.arc(F,G,Q,0,Math.PI*2),x.fill();const ut=x.createRadialGradient(F,G,0,F,G,tt);ut.addColorStop(0,"#ffffff"),ut.addColorStop(.3,ot),ut.addColorStop(1,"rgba(0,0,0,0)"),x.globalAlpha=.88,x.fillStyle=ut,x.beginPath(),x.arc(F,G,tt,0,Math.PI*2),x.fill(),x.globalAlpha=1,x.globalCompositeOperation=ct}function st(x){x.fillStyle="#010810",x.fillRect(0,0,u,f),x.fillStyle="rgba(0,0,0,0.07)";for(let F=0;F<f;F+=2)x.fillRect(0,F,u,1)}function vt(x,F,G,ot){x.beginPath();for(let Q=0;Q<6;Q++){const tt=Math.PI/3*Q-Math.PI/6;Q===0?x.moveTo(F+ot*Math.cos(tt),G+ot*Math.sin(tt)):x.lineTo(F+ot*Math.cos(tt),G+ot*Math.sin(tt))}x.closePath()}function ht(x,F,G,ot,Q){const tt=Q*Math.PI/180,ct=Math.cos(tt),K=Math.sin(tt);x.beginPath(),x.moveTo(F+ct*ot,G+K*ot),x.lineTo(F-K*ot,G+ct*ot),x.lineTo(F-ct*ot,G-K*ot),x.lineTo(F+K*ot,G-ct*ot),x.closePath()}function kt(x,F){const ot=[.1,.5,1,2,5,10,20,50].filter(Q=>Q<=F*1.05).slice(-4);x.fillStyle="rgba(120,190,220,0.85)",x.font='7px "Courier New", monospace',x.textAlign="right";for(const Q of ot){const tt=nt(Q,F);x.fillStyle="rgba(60,120,160,0.35)",x.fillRect(u-36,tt,34,.5),x.fillStyle="rgba(120,190,220,0.65)",x.fillText(`${Q}AU`,u-2,tt-1)}}function Nt(x,F){const{planets:G,galleries:ot,cameraAngle:Q,cameraRadius:tt,stellarConfig:ct}=F,K=Math.max(2,...G.map(v=>v.radius),...ot.map(v=>v.radiusAU))*1.15;st(x);const ut=360/g;if((ct.type==="circumbinary"||ct.type==="hierarchical_triple")&&ct.innerBinary){const v=nt(ct.innerBinary.forbiddenZoneRadius,K),U=f-6-v;if(U>0){x.save(),x.beginPath(),x.rect(0,v,u,U),x.clip(),x.strokeStyle="rgba(180,60,30,0.55)",x.lineWidth=1;for(let N=-f;N<u+f;N+=6)x.beginPath(),x.moveTo(N,v),x.lineTo(N+U,v+U),x.stroke();x.restore()}}for(const v of G){const U=nt(v.radius,K);x.beginPath(),x.setLineDash([4,6]),x.lineWidth=.7,x.strokeStyle=v.orbitType==="circumbinary"?"rgba(255,160,30,0.35)":"rgba(40,80,120,0.35)",x.moveTo(0,U),x.lineTo(u,U),x.stroke(),x.setLineDash([])}for(const v of ot){const U=nt(v.radiusAU,K);x.beginPath(),x.setLineDash([2,5]),x.lineWidth=.5,x.strokeStyle="rgba(80,40,120,0.2)",x.moveTo(0,U),x.lineTo(u,U),x.stroke(),x.setLineDash([])}const bt=u/2+(0-_+3600)%360/ut*u-u/2,_t=(v,U,N,$)=>{Y(x,v,U,Z(N),$*3,$)},at=ct,xt=f-6;if(at.type==="single")_t(bt,xt,F.starTeff,4);else if(at.type==="circumstellar"&&at.companion){_t(bt,xt,F.starTeff,4);const v=V(at.companion.orbitalAngle),U=nt(at.companion.orbitalRadius,K);v>=-20&&v<=u+20&&_t(v,U,at.companion.teff,3)}else if((at.type==="circumbinary"||at.type==="contact")&&at.innerBinary){const v=at.innerBinary,U=g>=3?8:3,N=v.angle*Math.PI/180,$=Math.cos(N)*U;_t(bt-$,xt,v.primaryTeff,4),_t(bt+$,xt,v.companionTeff,3.5)}else if(at.type==="hierarchical_triple"&&at.innerBinary){const v=at.innerBinary,U=g>=3?8:3,N=v.angle*Math.PI/180,$=Math.cos(N)*U;if(_t(bt-$,xt,v.primaryTeff,4),_t(bt+$,xt,v.companionTeff,3.5),at.outerCompanion){const et=V(at.outerCompanion.orbitalAngle),pt=nt(at.outerCompanion.orbitalRadius,K);et>=-20&&et<=u+20&&_t(et,pt,at.outerCompanion.teff,3)}}for(const v of G){const U=J(v.eqt,v.radius),N=et=>{const pt=V(et);if(pt<-10||pt>u+10)return;const St=nt(v.radius,K),Ot=v.isCurrent?5:v.orbitType==="circumbinary"?4:3.5;if(v.isCurrent){const Ut=x.createRadialGradient(pt,St,0,pt,St,14);Ut.addColorStop(0,U+"aa"),Ut.addColorStop(1,"rgba(0,0,0,0)"),x.fillStyle=Ut,x.beginPath(),x.arc(pt,St,14,0,Math.PI*2),x.fill()}x.fillStyle=U,x.beginPath(),x.arc(pt,St,Ot,0,Math.PI*2),x.fill(),v.orbitType==="circumbinary"&&(x.strokeStyle="rgba(255,160,30,0.6)",x.lineWidth=1,x.beginPath(),x.arc(pt,St,Ot+2.5,0,Math.PI*2),x.stroke(),g>=2&&(x.fillStyle="rgba(255,160,30,0.8)",x.font='7px "Courier New", monospace',x.textAlign="center",x.fillText("\u27E1",pt,St+Ot+9))),v.hasSettlement&&(x.strokeStyle="rgba(0,200,220,0.9)",x.lineWidth=1.2,vt(x,pt,St-Ot-7,4),x.stroke());const Kt=V(v.l4angle);if(Kt>=0&&Kt<=u){const Ut=nt(v.radius,K);x.fillStyle="rgba(60,220,100,0.75)",x.beginPath(),x.moveTo(Kt,Ut-6),x.lineTo(Kt-4,Ut),x.lineTo(Kt+4,Ut),x.closePath(),x.fill(),S.push({x:Kt,y:Ut,r:8,target:{type:"lagrange",id:`${v.name}-L4`,angle:v.l4angle,radius:v.radius},tip:{name:`${v.name} L4`,type:"Lagrange point"}})}const It=V(v.l5angle);if(It>=0&&It<=u){const Ut=nt(v.radius,K);x.fillStyle="rgba(255,180,30,0.75)",x.beginPath(),x.moveTo(It,Ut+6),x.lineTo(It-4,Ut),x.lineTo(It+4,Ut),x.closePath(),x.fill(),S.push({x:It,y:Ut,r:8,target:{type:"lagrange",id:`${v.name}-L5`,angle:v.l5angle,radius:v.radius},tip:{name:`${v.name} L5`,type:"Lagrange point"}})}const te=v.name+(v.isCurrent?" (here)":"");S.push({x:pt,y:St,r:10,target:{type:"planet",id:v.name,angle:v.angle,radius:v.radius},tip:{name:te,type:v.orbitType==="circumbinary"?"P-type orbit":"Planet",stat:`${v.radius.toFixed(2)} AU`}}),(v.isCurrent||g>=3)&&(x.fillStyle=v.isCurrent?"#00e5ff":"rgba(120,190,220,0.7)",x.font=v.isCurrent?'10px "Courier New", monospace':'8px "Courier New", monospace',x.textAlign="left",x.fillText(v.name,pt+Ot+3,St+3))};N(v.angle);const $=360/g;v.angle-$<_+$&&N(v.angle-360),v.angle+360-_<$*2&&N(v.angle+360)}for(const v of ot){const U=$=>{const et=V($);if(et<-12||et>u+12)return;const pt=nt(v.radiusAU,K),St=it[v.galleryType],Ot=v.meetingState,Kt=Ot==="live"?1.4:Ot==="open"?.45:0,It=Kt>0?P*Kt*360:0;x.save(),x.translate(et,pt),x.rotate(It*Math.PI/180);const te=6;if(x.beginPath(),x.moveTo(0,-te),x.lineTo(te,0),x.lineTo(0,te),x.lineTo(-te,0),x.closePath(),Ot==="locked"||Ot==="exclusive"?(x.strokeStyle=St,x.lineWidth=1,x.globalAlpha=.75,x.stroke()):(x.fillStyle=St,x.globalAlpha=Ot==="live"?1:Ot==="open"?.75:.4,x.fill()),x.restore(),Ot==="live"){const pn=.5+Math.sin(P*4)*.35;x.globalAlpha=pn,x.strokeStyle=St,x.lineWidth=1.5,x.beginPath(),x.arc(et,pt,11,0,Math.PI*2),x.stroke(),x.globalAlpha=1,x.fillStyle="#ffffff",x.beginPath(),x.arc(et,pt-12,6,0,Math.PI*2),x.fill(),x.fillStyle="#010810",x.font='7px "Courier New", monospace',x.textAlign="center",x.fillText(String(v.presenceCount),et,pt-9),x.fillStyle=St,x.font='8px "Courier New", monospace',x.textAlign="left",x.fillText(v.name,et+8,pt-1)}const Ut=v.accessLevel==="none"?"No access":Ot==="locked"?"Locked":"Enter gallery";S.push({x:et,y:pt,r:10,target:{type:"gallery",id:v.id,galleryId:v.id,accessLevel:v.accessLevel,meetingState:v.meetingState},tip:{name:v.name,type:`${v.galleryType} \xB7 ${v.ownershipModel}`,stat:Ot==="live"?`${v.presenceCount} present`:Ot,action:Ut}})};U(v.currentAngleDeg);const N=360/g;v.currentAngleDeg-N<_+N&&U(v.currentAngleDeg-360),v.currentAngleDeg+360-_<N*2&&U(v.currentAngleDeg+360)}const lt=V(Q),Mt=nt(tt,K),gt=Math.floor(P*2.8)%2;x.globalAlpha=gt?1:.35,x.fillStyle="#00e5ff",x.beginPath(),x.moveTo(lt,Mt+9),x.lineTo(lt-5,Mt),x.lineTo(lt+5,Mt),x.closePath(),x.fill(),x.globalAlpha=1,S.push({x:lt,y:Mt,r:10,target:{type:"star",id:"cam"},tip:{name:"Camera",stat:`${tt.toFixed(2)} AU, ${Q.toFixed(1)}\xB0`}}),kt(x,K)}function k(x,F){const{cameraAzimuth:G,cameraFov:ot,skyObjects:Q,galleries:tt}=F;st(x);const ct=F.terrainProfile;x.beginPath();const K=u/64;for(let lt=0;lt<=64;lt++){const Mt=ct?ct[Math.min(lt,63)]:Math.sin(lt*.7)*6+Math.cos(lt*1.3)*4,gt=lt*K,v=mt(Mt);lt===0?x.moveTo(gt,v):x.lineTo(gt,v)}x.lineTo(u,f),x.lineTo(0,f),x.closePath(),x.fillStyle="rgba(20,40,20,0.3)",x.fill(),x.strokeStyle="rgba(40,100,40,0.45)",x.lineWidth=.7,x.beginPath(),x.moveTo(0,mt(0)),x.lineTo(u,mt(0)),x.stroke(),x.strokeStyle="rgba(0,200,220,0.7)",x.lineWidth=1.2,vt(x,rt(0),mt(0),5),x.stroke();for(const lt of Q){const Mt=rt(lt.azimuth);if(Mt<-15||Mt>u+15)continue;const gt=mt(lt.altitude);switch(lt.type){case"star":Y(x,Mt,gt,lt.color,12,4);break;case"companion_tight":{if(Y(x,Mt,gt,lt.color,10,3.5),lt.angularSeparation&&lt.separationAngle!=null){const v=lt.angularSeparation*u/360,U=lt.separationAngle*Math.PI/180,N=Mt+Math.cos(U)*v,$=gt+Math.sin(U)*v;Y(x,N,$,lt.color,8,2.5)}break}case"companion_wide":Y(x,Mt,gt,lt.color,8,3);break;case"outer_companion":Y(x,Mt,gt,lt.color,7,2.5);break;case"moon":{const v=x.createRadialGradient(Mt,gt,0,Mt,gt,6);v.addColorStop(0,lt.color),v.addColorStop(1,"rgba(0,0,0,0)"),x.globalCompositeOperation="screen",x.fillStyle=v,x.globalAlpha=.5,x.beginPath(),x.arc(Mt,gt,6,0,Math.PI*2),x.fill(),x.globalAlpha=1,x.globalCompositeOperation="source-over",x.fillStyle=lt.color,x.beginPath(),x.arc(Mt,gt,2,0,Math.PI*2),x.fill();break}case"planet":x.fillStyle=lt.color,x.beginPath(),x.arc(Mt,gt,2.5,0,Math.PI*2),x.fill();break;case"settlement":x.strokeStyle="rgba(0,200,220,0.8)",x.lineWidth=1.2,vt(x,Mt,gt,4.5),x.stroke();break;case"pyramid":x.fillStyle="rgba(255,180,40,0.85)",x.beginPath(),x.moveTo(Mt,gt-5),x.lineTo(Mt-4,gt+2),x.lineTo(Mt+4,gt+2),x.closePath(),x.fill();break;case"gallery":{const v=tt.find($=>$.id===lt.galleryId),U=v?it[v.galleryType]:"rgba(140,200,255,0.9)",N=(v==null?void 0:v.meetingState)==="live"?P*1.4*360:(v==null?void 0:v.meetingState)==="open"?P*.45*360:0;if(x.save(),x.translate(Mt,gt),x.rotate(N*Math.PI/180),ht(x,0,0,4,0),x.fillStyle=U,x.fill(),x.restore(),(v==null?void 0:v.meetingState)==="live"){const $=.4+Math.sin(P*4)*.35;x.globalAlpha=$,x.strokeStyle=U,x.lineWidth=1,x.beginPath(),x.arc(Mt,gt,8,0,Math.PI*2),x.stroke(),x.globalAlpha=1}v&&S.push({x:Mt,y:gt,r:9,target:{type:"gallery",id:v.id,galleryId:v.id,azimuth:lt.azimuth,accessLevel:v.accessLevel,meetingState:v.meetingState},tip:{name:v.name,type:v.galleryType,stat:v.meetingState,action:v.accessLevel==="none"?"No access":"Enter gallery"}});break}}lt.type!=="gallery"&&S.push({x:Mt,y:gt,r:10,target:{type:lt.type==="planet"?"planet":lt.type==="moon"?"moon":lt.type==="star"||lt.type==="companion_tight"||lt.type==="companion_wide"||lt.type==="outer_companion"?"companion":"azimuth",id:lt.name,azimuth:lt.azimuth},tip:{name:lt.name,type:lt.type,stat:`Az ${lt.azimuth.toFixed(1)}\xB0 Alt ${lt.altitude.toFixed(1)}\xB0`}})}const ut=rt(G);x.strokeStyle="rgba(255,255,255,0.85)",x.lineWidth=1,x.beginPath(),x.moveTo(ut,0),x.lineTo(ut,f),x.stroke();const bt=ot/2,_t=rt(G-bt),at=rt(G+bt),xt=mt(0);x.strokeStyle="rgba(0,229,255,0.55)",x.lineWidth=1,x.beginPath(),x.moveTo(_t,xt-8),x.lineTo(_t,xt),x.lineTo(_t+8,xt),x.moveTo(at,xt-8),x.lineTo(at,xt),x.lineTo(at-8,xt),x.stroke()}function qt(x,F){const{cameraX:G,cameraZ:ot,clusters:Q,conduits:tt}=F;if(st(x),!Q.length&&!tt.length)return;const ct=Q.map(N=>N.x).concat(tt.map(N=>N.x)),K=Q.map(N=>N.z).concat(tt.map(N=>N.z)),ut=Math.min(...ct),bt=Math.max(...ct),_t=Math.min(...K),at=Math.max(...K),xt=bt-ut||1,lt=at-_t||1;m=ut,E=_t;const Mt=Q.slice(0,300);for(const N of Mt){const $=Rt(N.x,xt),et=Xt(N.z,lt);if($<-10||$>u+10||et<-5||et>f+5)continue;const pt=2+N.richness/10*4;if(x.fillStyle=N.color,x.beginPath(),x.arc($,et,pt,0,Math.PI*2),x.fill(),N.hasEvent){const St=.4+Math.sin(P*3.5)*.35;x.globalAlpha=St,x.strokeStyle=N.color,x.lineWidth=1.5,x.beginPath(),x.arc($,et,pt+5,0,Math.PI*2),x.stroke(),x.globalAlpha=1}S.push({x:$,y:et,r:pt+6,target:{type:"cluster",id:N.name},tip:{name:N.name,type:"Cluster",stat:`richness ${N.richness.toFixed(1)}${N.hasEvent?" \xB7 event":""}`}})}for(const N of tt){const $=Rt(N.x,xt),et=Xt(N.z,lt);if($<-10||$>u+10||et<-5||et>f+5)continue;const pt=N.isPulsing?.4+Math.sin(P*2.4)*.35:.55;x.globalAlpha=pt,x.fillStyle="#00e5ff",ht(x,$,et,4,45),x.fill(),x.globalAlpha=1,S.push({x:$,y:et,r:8,target:{type:"cluster",id:N.name},tip:{name:N.name,type:"Conduit",stat:N.isPulsing?"pulsing":"stable"}})}const gt=Rt(G,xt),v=Xt(ot,lt),U=Math.floor(P*2.8)%2;x.globalAlpha=U?1:.35,x.strokeStyle="#00e5ff",x.lineWidth=1.5,ht(x,gt,v,5,45),x.stroke(),x.globalAlpha=1}function At(x){const F=y.value;if(!F||O.value)return;const G=F.getContext("2d");if(!!G){if(P=performance.now()/1e3,g+=(z.value-g)*.18,g<.5&&(g=.5),g>8&&(g=8),!w){const ot=360/g;n.mode==="system"&&x.systemData?(p=(x.systemData.cameraAngle-ot/2+3600)%360,_+=(p-_)*.12):n.mode==="surface"&&x.surfaceData&&(p=(x.surfaceData.cameraAzimuth-ot/2+3600)%360,_+=(p-_)*.12)}S=[],G.save(),G.scale(d,d),n.mode==="system"&&x.systemData?Nt(G,x.systemData):n.mode==="surface"&&x.surfaceData?k(G,x.surfaceData):n.mode==="cosmic"&&x.cosmicData?qt(G,x.cosmicData):(st(G),G.fillStyle="rgba(80,130,170,0.55)",G.font='10px "Courier New", monospace',G.textAlign="center",G.fillText("No data",u/2,f/2+4)),x.currentSystemRef&&(n.mode==="system"||n.mode==="surface")&&jt(G,x.currentSystemRef),G.restore()}}function jt(x,F){var pt,St;const Q=u-66-5,tt=f-50-3;x.save(),x.fillStyle="rgba(0, 4, 18, 0.90)",x.strokeStyle="rgba(0, 180, 220, 0.32)",x.lineWidth=.7,x.beginPath(),(St=(pt=x.roundRect)==null?void 0:pt.call(x,Q,tt,66,50,3))!=null||x.rect(Q,tt,66,50),x.fill(),x.stroke(),x.fillStyle="rgba(0, 160, 200, 0.55)",x.font='5px "Courier New", monospace',x.textAlign="left",x.letterSpacing="0.08em",x.fillText("EARTH \u2194 SYSTEM",Q+3,tt+7),x.letterSpacing="0";const ct=Q+12,K=tt+50-12,ut=x.createRadialGradient(ct,K,0,ct,K,8);ut.addColorStop(0,"rgba(255, 212, 128, 0.55)"),ut.addColorStop(1,"rgba(255, 212, 128, 0)"),x.globalCompositeOperation="screen",x.fillStyle=ut,x.beginPath(),x.arc(ct,K,8,0,Math.PI*2),x.fill(),x.globalCompositeOperation="source-over",x.fillStyle="#ffd480",x.beginPath(),x.arc(ct,K,2.2,0,Math.PI*2),x.fill(),x.fillStyle="rgba(255, 212, 128, 0.70)",x.font='6px "Courier New", monospace',x.textAlign="left",x.fillText("Sol",ct+4,K+2);const bt=F.ra*Math.PI/180,_t=F.dec*Math.PI/180,at=Math.cos(_t)*Math.cos(bt),xt=Math.cos(_t)*Math.sin(bt),lt=20,Mt=Math.sqrt(at*at+xt*xt),gt=Mt>0?1/Mt:1,v=Math.max(Q+5,Math.min(Q+66-5,ct+at*gt*lt)),U=Math.max(tt+10,Math.min(tt+50-5,K-xt*gt*lt));x.setLineDash([2,3]),x.strokeStyle="rgba(0, 180, 220, 0.42)",x.lineWidth=.7,x.beginPath(),x.moveTo(ct,K),x.lineTo(v,U),x.stroke(),x.setLineDash([]);const N=x.createRadialGradient(v,U,0,v,U,7);N.addColorStop(0,"rgba(0, 200, 255, 0.50)"),N.addColorStop(1,"rgba(0, 200, 255, 0)"),x.globalCompositeOperation="screen",x.fillStyle=N,x.beginPath(),x.arc(v,U,7,0,Math.PI*2),x.fill(),x.globalCompositeOperation="source-over",x.fillStyle="#00e5ff",x.beginPath(),x.arc(v,U,2,0,Math.PI*2),x.fill();const $=F.distPc>=1e3?`${(F.distPc/1e3).toFixed(1)} kpc`:`${Math.round(F.distPc)} pc`;x.fillStyle="rgba(0, 200, 240, 0.60)",x.font='6px "Courier New", monospace',x.textAlign="center",x.fillText($,Q+66/2,tt+50-2),Math.sin(P*1.5)>.3&&(x.fillStyle="rgba(0, 180, 220, 0.38)",x.font='5px "Courier New", monospace',x.textAlign="center",x.fillText("click to zoom out",Q+66/2,tt+50-10)),x.restore(),S.push({x:Q+66/2,y:tt+50/2,r:66/2,target:{type:"star",id:"context_zoom"},tip:{name:`Earth \u2194 ${F.hostname}`,type:"Context view",stat:`${$} from Sol`,action:"Click to zoom out \u2014 see both in galaxy"}})}t({redraw:At});function wt(x){const F=z.value*(1-x.deltaY*.001);z.value=Math.min(8,Math.max(.5,F))}function Ht(x){M=!0,T=x.clientX,C=_}function Pt(x){if(M){const ct=x.clientX-T,K=360/g;_=(C-ct/u*K+3600)%360;return}const F=y.value.getBoundingClientRect(),G=x.clientX-F.left,ot=x.clientY-F.top;let Q=null,tt=1/0;for(const ct of S){const K=Math.hypot(G-ct.x,ot-ct.y);K<ct.r&&K<tt&&(Q=ct,tt=K)}Q?Object.assign(D,Q.tip,{visible:!0,x:Math.min(G,u-140)}):D.visible=!1}function Vt(){M&&(M=!1,w=!0,clearTimeout(A),A=window.setTimeout(()=>{w=!1},3e3))}function re(){M=!1,D.visible=!1}function L(x){var K;const F=y.value.getBoundingClientRect(),G=x.clientX-F.left,ot=x.clientY-F.top;let Q=null,tt=1/0;for(const ut of S){const bt=Math.hypot(G-ut.x,ot-ut.y);bt<ut.r&&bt<tt&&(Q=ut,tt=bt)}if(!Q)return;const ct=Q.target;if(ct.type==="star"&&ct.id==="context_zoom"){s("contextZoom");return}if(ct.type==="gallery"){if(ct.accessLevel==="none"){Object.assign(D,{visible:!0,x:Math.min(G,u-160),name:Q.tip.name,type:Q.tip.type,stat:Q.tip.stat,warning:"No access \u2014 acquire on pon.ink",action:void 0});return}if(ct.meetingState==="locked"){Object.assign(D,{visible:!0,x:Math.min(G,u-160),name:Q.tip.name,type:Q.tip.type,stat:Q.tip.stat,warning:"Gallery is locked",action:void 0});return}const ut=(K=ct.hostname)!=null?K:"unknown";s("portalTo",{label:Q.tip.name,route:`/gallery/${ut}/${ct.galleryId}`})}else s("flyTo",ct)}function b(){const x=y.value;!x||(d=window.devicePixelRatio||1,u=window.innerWidth,f=60,x.width=u*d,x.height=f*d,x.style.width=u+"px",x.style.height=f+"px")}function q(){u=window.innerWidth;const x=y.value;!x||(x.width=u*d,x.style.width=u+"px")}return _f(()=>{b(),window.addEventListener("resize",q)}),gf(()=>{window.removeEventListener("resize",q),clearTimeout(A)}),(x,F)=>(Gn(),Wn("div",{class:wa(["defender-nav",{"is-collapsed":O.value}])},[mn("div",Ix,[mn("span",Ux,bn(H.value)+" / "+bn(r.sceneLabel),1),mn("div",Nx,[(Gn(),Wn(vf,null,xf(i,G=>mn("button",{key:G.key,class:wa(["dn-pill",{"dn-pill--active":a.value===G.key}]),onClick:ot=>c(G.key),title:G.desc},bn(G.label),11,Ox)),64))]),F[2]||(F[2]=mn("span",{class:"dn-sep"},"\u2502",-1)),mn("button",{class:wa(["dn-finder-btn",{"dn-finder-btn--active":l.value}]),onClick:h,title:"Event finder"},"\u2299",2),F[3]||(F[3]=mn("span",{class:"dn-sep"},"\u2502",-1)),n.showReturnBtn?(Gn(),Wn("button",{key:0,class:"dn-return-btn",onClick:F[0]||(F[0]=G=>s("returnToPrev")),title:"Return to previous view"},"\u25C4 PREV")):ki("",!0),mn("button",{class:"dn-collapse-btn",onClick:F[1]||(F[1]=G=>O.value=!O.value)},bn(O.value?"\u25B2":"\u25BC"),1)]),Mf(mn("canvas",{ref_key:"navCanvas",ref:y,class:"dn-canvas",onMousedown:Ht,onMousemove:Pt,onMouseup:Vt,onMouseleave:re,onWheel:Sf(wt,["prevent"]),onClick:L},null,544),[[yf,!O.value]]),Ef(bf,{name:"dn-tip"},{default:Tf(()=>[D.visible?(Gn(),Wn("div",{key:0,class:"dn-tooltip",style:Af({left:D.x+"px"})},[mn("div",Fx,bn(D.name),1),D.type?(Gn(),Wn("div",Bx,bn(D.type),1)):ki("",!0),D.stat?(Gn(),Wn("div",zx,bn(D.stat),1)):ki("",!0),D.action?(Gn(),Wn("div",kx,bn(D.action),1)):ki("",!0),D.warning?(Gn(),Wn("div",Hx,bn(D.warning),1)):ki("",!0)],4)):ki("",!0)]),_:1})],2))}});var oM=wf(Vx,[["__scopeId","data-v-6d81280e"]]);export{od as A,Te as B,Wt as C,oM as D,Kx as E,eu as F,Fs as G,tM as H,ou as I,xa as J,Qx as K,iu as L,On as M,pr as N,aM as O,en as P,Zx as Q,sM as R,Xx as S,uu as T,Qo as U,I as V,Wx as W,us as X,ad as Y,rM as Z,iM as a,Qt as b,jx as c,sv as d,lu as e,au as f,Dx as g,Hh as h,Un as i,qx as j,ci as k,bl as l,oi as m,hu as n,Ne as o,Jx as p,su as q,eM as r,yt as s,rv as t,cu as u,ru as v,iv as w,Yx as x,$x as y,nM as z};
