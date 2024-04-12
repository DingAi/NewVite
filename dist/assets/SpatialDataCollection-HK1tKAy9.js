import{O as St,P as Ea,Q as fl,R as cl,S as ko,T as Wo,U as dl,V as zn,W as At,X as vl,Y as pl,Z as ml,$ as gl,a0 as _l,a1 as Ir,a2 as le,a3 as kt,a4 as yl,a5 as qo,a6 as Ji,a7 as zi,a8 as Vi,a9 as ci,aa as Xo,ab as Zo,ac as Ko,ad as $i,ae as en,af as ta,ag as xl,ah as Tl,ai as El,aj as Sl,ak as Ze,al as Vn,am as di,an as wt,ao as ra,ap as Al,aq as wl,ar as Sa,as as bl,at as Cl,au as ia,av as Ll,aw as xr,ax as Aa,ay as Ml,az as Rl,aA as Pl,aB as Qo,aC as mt,aD as gt,aE as Dl,aF as Il,aG as _i,aH as Nl,aI as Ol,aJ as Bl,aK as jo,aL as Ul,aM as Fl,aN as wa,aO as ba,aP as Ca,l as zl,I as Vl,c as Gl,b as La,w as Hl,F as kl,o as Wl,M as ql}from"./index-JSkNnffE.js";function Ma(e,t,r){typeof t=="object"&&(r=t,t=null);var i=this,n;if(!(e instanceof Function)){n=[];for(var a in e)e.hasOwnProperty(a)&&n.push(a)}var o=function(l){if(i.apply(this,arguments),e instanceof Function?Ra(this,e.call(this,l)):Xl(this,e,n),this.constructor===o)for(var h=o.__initializers__,u=0;u<h.length;u++)h[u].apply(this,arguments)};o.__super__=i,i.__initializers__?o.__initializers__=i.__initializers__.slice():o.__initializers__=[],t&&o.__initializers__.push(t);var s=function(){};return s.prototype=i.prototype,o.prototype=new s,o.prototype.constructor=o,Ra(o.prototype,r),o.extend=i.extend,o.derive=i.extend,o}function Ra(e,t){if(t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])}function Xl(e,t,r){for(var i=0;i<r.length;i++){var n=r[i];e[n]=t[n]}}const Zl={extend:Ma,derive:Ma};function Kl(e,t){this.action=e,this.context=t}var Ql={trigger:function(e){if(this.hasOwnProperty("__handlers__")&&this.__handlers__.hasOwnProperty(e)){var t=this.__handlers__[e],r=t.length,i=-1,n=arguments;switch(n.length){case 1:for(;++i<r;)t[i].action.call(t[i].context);return;case 2:for(;++i<r;)t[i].action.call(t[i].context,n[1]);return;case 3:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2]);return;case 4:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2],n[3]);return;case 5:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2],n[3],n[4]);return;default:for(;++i<r;)t[i].action.apply(t[i].context,Array.prototype.slice.call(n,1));return}}},on:function(e,t,r){if(!(!e||!t)){var i=this.__handlers__||(this.__handlers__={});if(!i[e])i[e]=[];else if(this.has(e,t))return;var n=new Kl(t,r||this);return i[e].push(n),this}},once:function(e,t,r){if(!e||!t)return;var i=this;function n(){i.off(e,n),t.apply(this,arguments)}return this.on(e,n,r)},before:function(e,t,r){if(!(!e||!t))return e="before"+e,this.on(e,t,r)},after:function(e,t,r){if(!(!e||!t))return e="after"+e,this.on(e,t,r)},success:function(e,t){return this.once("success",e,t)},error:function(e,t){return this.once("error",e,t)},off:function(e,t){var r=this.__handlers__||(this.__handlers__={});if(!t){r[e]=[];return}if(r[e]){for(var i=r[e],n=[],a=0;a<i.length;a++)t&&i[a].action!==t&&n.push(i[a]);r[e]=n}return this},has:function(e,t){var r=this.__handlers__;if(!r||!r[e])return!1;for(var i=r[e],n=0;n<i.length;n++)if(i[n].action===t)return!0}};const na=Ql;var jl=0,Yl=Array.prototype,Jl=Yl.forEach,Ae={genGUID:function(){return++jl},relative2absolute:function(e,t){if(!t||e.match(/^\//))return e;for(var r=e.split("/"),i=t.split("/"),n=r[0];n==="."||n==="..";)n===".."&&i.pop(),r.shift(),n=r[0];return i.join("/")+"/"+r.join("/")},extend:function(e,t){if(t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e},defaults:function(e,t){if(t)for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e},extendWithPropList:function(e,t,r){if(t)for(var i=0;i<r.length;i++){var n=r[i];e[n]=t[n]}return e},defaultsWithPropList:function(e,t,r){if(t)for(var i=0;i<r.length;i++){var n=r[i];e[n]==null&&(e[n]=t[n])}return e},each:function(e,t,r){if(e&&t)if(e.forEach&&e.forEach===Jl)e.forEach(t,r);else if(e.length===+e.length)for(var i=0,n=e.length;i<n;i++)t.call(r,e[i],i,e);else for(var a in e)e.hasOwnProperty(a)&&t.call(r,e[a],a,e)},isObject:function(e){return e===Object(e)},isArray:function(e){return Array.isArray(e)},isArrayLike:function(e){return e?e.length===+e.length:!1},clone:function(e){if(Ae.isObject(e)){if(Ae.isArray(e))return e.slice();if(Ae.isArrayLike(e)){for(var t=new e.constructor(e.length),r=0;r<e.length;r++)t[r]=e[r];return t}else return Ae.extend({},e)}else return e}},He=function(){this.__uid__=Ae.genGUID()};He.__initializers__=[function(e){Ae.extend(this,e)}];Ae.extend(He,Zl);Ae.extend(He.prototype,na);var Pa=["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear","OES_standard_derivatives","OES_vertex_array_object","OES_element_index_uint","WEBGL_compressed_texture_s3tc","WEBGL_depth_texture","EXT_texture_filter_anisotropic","EXT_shader_texture_lod","WEBGL_draw_buffers","EXT_frag_depth","EXT_sRGB","ANGLE_instanced_arrays"],Da=["MAX_TEXTURE_SIZE","MAX_CUBE_MAP_TEXTURE_SIZE"];function $l(e){for(var t={},r={},i=0;i<Pa.length;i++){var n=Pa[i];o(n)}for(var i=0;i<Da.length;i++){var a=Da[i];r[a]=e.getParameter(e[a])}this.getExtension=function(s){return s in t||o(s),t[s]},this.getParameter=function(s){return r[s]};function o(s){if(e.getExtension){var l=e.getExtension(s);l||(l=e.getExtension("MOZ_"+s)),l||(l=e.getExtension("WEBKIT_"+s)),t[s]=l}}}const R={DEPTH_BUFFER_BIT:256,STENCIL_BUFFER_BIT:1024,COLOR_BUFFER_BIT:16384,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,ZERO:0,ONE:1,SRC_COLOR:768,ONE_MINUS_SRC_COLOR:769,SRC_ALPHA:770,ONE_MINUS_SRC_ALPHA:771,DST_ALPHA:772,ONE_MINUS_DST_ALPHA:773,DST_COLOR:774,ONE_MINUS_DST_COLOR:775,SRC_ALPHA_SATURATE:776,FUNC_ADD:32774,BLEND_EQUATION:32777,BLEND_EQUATION_RGB:32777,BLEND_EQUATION_ALPHA:34877,FUNC_SUBTRACT:32778,FUNC_REVERSE_SUBTRACT:32779,BLEND_DST_RGB:32968,BLEND_SRC_RGB:32969,BLEND_DST_ALPHA:32970,BLEND_SRC_ALPHA:32971,CONSTANT_COLOR:32769,ONE_MINUS_CONSTANT_COLOR:32770,CONSTANT_ALPHA:32771,ONE_MINUS_CONSTANT_ALPHA:32772,BLEND_COLOR:32773,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,ARRAY_BUFFER_BINDING:34964,ELEMENT_ARRAY_BUFFER_BINDING:34965,STREAM_DRAW:35040,STATIC_DRAW:35044,DYNAMIC_DRAW:35048,BUFFER_SIZE:34660,BUFFER_USAGE:34661,CURRENT_VERTEX_ATTRIB:34342,FRONT:1028,BACK:1029,FRONT_AND_BACK:1032,CULL_FACE:2884,BLEND:3042,DITHER:3024,STENCIL_TEST:2960,DEPTH_TEST:2929,SCISSOR_TEST:3089,POLYGON_OFFSET_FILL:32823,SAMPLE_ALPHA_TO_COVERAGE:32926,SAMPLE_COVERAGE:32928,NO_ERROR:0,INVALID_ENUM:1280,INVALID_VALUE:1281,INVALID_OPERATION:1282,OUT_OF_MEMORY:1285,CW:2304,CCW:2305,LINE_WIDTH:2849,ALIASED_POINT_SIZE_RANGE:33901,ALIASED_LINE_WIDTH_RANGE:33902,CULL_FACE_MODE:2885,FRONT_FACE:2886,DEPTH_RANGE:2928,DEPTH_WRITEMASK:2930,DEPTH_CLEAR_VALUE:2931,DEPTH_FUNC:2932,STENCIL_CLEAR_VALUE:2961,STENCIL_FUNC:2962,STENCIL_FAIL:2964,STENCIL_PASS_DEPTH_FAIL:2965,STENCIL_PASS_DEPTH_PASS:2966,STENCIL_REF:2967,STENCIL_VALUE_MASK:2963,STENCIL_WRITEMASK:2968,STENCIL_BACK_FUNC:34816,STENCIL_BACK_FAIL:34817,STENCIL_BACK_PASS_DEPTH_FAIL:34818,STENCIL_BACK_PASS_DEPTH_PASS:34819,STENCIL_BACK_REF:36003,STENCIL_BACK_VALUE_MASK:36004,STENCIL_BACK_WRITEMASK:36005,VIEWPORT:2978,SCISSOR_BOX:3088,COLOR_CLEAR_VALUE:3106,COLOR_WRITEMASK:3107,UNPACK_ALIGNMENT:3317,PACK_ALIGNMENT:3333,MAX_TEXTURE_SIZE:3379,MAX_VIEWPORT_DIMS:3386,SUBPIXEL_BITS:3408,RED_BITS:3410,GREEN_BITS:3411,BLUE_BITS:3412,ALPHA_BITS:3413,DEPTH_BITS:3414,STENCIL_BITS:3415,POLYGON_OFFSET_UNITS:10752,POLYGON_OFFSET_FACTOR:32824,TEXTURE_BINDING_2D:32873,SAMPLE_BUFFERS:32936,SAMPLES:32937,SAMPLE_COVERAGE_VALUE:32938,SAMPLE_COVERAGE_INVERT:32939,COMPRESSED_TEXTURE_FORMATS:34467,DONT_CARE:4352,FASTEST:4353,NICEST:4354,GENERATE_MIPMAP_HINT:33170,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DEPTH_COMPONENT:6402,ALPHA:6406,RGB:6407,RGBA:6408,LUMINANCE:6409,LUMINANCE_ALPHA:6410,UNSIGNED_SHORT_4_4_4_4:32819,UNSIGNED_SHORT_5_5_5_1:32820,UNSIGNED_SHORT_5_6_5:33635,FRAGMENT_SHADER:35632,VERTEX_SHADER:35633,MAX_VERTEX_ATTRIBS:34921,MAX_VERTEX_UNIFORM_VECTORS:36347,MAX_VARYING_VECTORS:36348,MAX_COMBINED_TEXTURE_IMAGE_UNITS:35661,MAX_VERTEX_TEXTURE_IMAGE_UNITS:35660,MAX_TEXTURE_IMAGE_UNITS:34930,MAX_FRAGMENT_UNIFORM_VECTORS:36349,SHADER_TYPE:35663,DELETE_STATUS:35712,LINK_STATUS:35714,VALIDATE_STATUS:35715,ATTACHED_SHADERS:35717,ACTIVE_UNIFORMS:35718,ACTIVE_ATTRIBUTES:35721,SHADING_LANGUAGE_VERSION:35724,CURRENT_PROGRAM:35725,NEVER:512,LESS:513,EQUAL:514,LEQUAL:515,GREATER:516,NOTEQUAL:517,GEQUAL:518,ALWAYS:519,KEEP:7680,REPLACE:7681,INCR:7682,DECR:7683,INVERT:5386,INCR_WRAP:34055,DECR_WRAP:34056,VENDOR:7936,RENDERER:7937,VERSION:7938,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,TEXTURE_2D:3553,TEXTURE:5890,TEXTURE_CUBE_MAP:34067,TEXTURE_BINDING_CUBE_MAP:34068,TEXTURE_CUBE_MAP_POSITIVE_X:34069,TEXTURE_CUBE_MAP_NEGATIVE_X:34070,TEXTURE_CUBE_MAP_POSITIVE_Y:34071,TEXTURE_CUBE_MAP_NEGATIVE_Y:34072,TEXTURE_CUBE_MAP_POSITIVE_Z:34073,TEXTURE_CUBE_MAP_NEGATIVE_Z:34074,MAX_CUBE_MAP_TEXTURE_SIZE:34076,TEXTURE0:33984,TEXTURE1:33985,TEXTURE2:33986,TEXTURE3:33987,TEXTURE4:33988,TEXTURE5:33989,TEXTURE6:33990,TEXTURE7:33991,TEXTURE8:33992,TEXTURE9:33993,TEXTURE10:33994,TEXTURE11:33995,TEXTURE12:33996,TEXTURE13:33997,TEXTURE14:33998,TEXTURE15:33999,TEXTURE16:34e3,TEXTURE17:34001,TEXTURE18:34002,TEXTURE19:34003,TEXTURE20:34004,TEXTURE21:34005,TEXTURE22:34006,TEXTURE23:34007,TEXTURE24:34008,TEXTURE25:34009,TEXTURE26:34010,TEXTURE27:34011,TEXTURE28:34012,TEXTURE29:34013,TEXTURE30:34014,TEXTURE31:34015,ACTIVE_TEXTURE:34016,REPEAT:10497,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,INT_VEC2:35667,INT_VEC3:35668,INT_VEC4:35669,BOOL:35670,BOOL_VEC2:35671,BOOL_VEC3:35672,BOOL_VEC4:35673,FLOAT_MAT2:35674,FLOAT_MAT3:35675,FLOAT_MAT4:35676,SAMPLER_2D:35678,SAMPLER_CUBE:35680,VERTEX_ATTRIB_ARRAY_ENABLED:34338,VERTEX_ATTRIB_ARRAY_SIZE:34339,VERTEX_ATTRIB_ARRAY_STRIDE:34340,VERTEX_ATTRIB_ARRAY_TYPE:34341,VERTEX_ATTRIB_ARRAY_NORMALIZED:34922,VERTEX_ATTRIB_ARRAY_POINTER:34373,VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:34975,COMPILE_STATUS:35713,LOW_FLOAT:36336,MEDIUM_FLOAT:36337,HIGH_FLOAT:36338,LOW_INT:36339,MEDIUM_INT:36340,HIGH_INT:36341,FRAMEBUFFER:36160,RENDERBUFFER:36161,RGBA4:32854,RGB5_A1:32855,RGB565:36194,DEPTH_COMPONENT16:33189,STENCIL_INDEX:6401,STENCIL_INDEX8:36168,DEPTH_STENCIL:34041,RENDERBUFFER_WIDTH:36162,RENDERBUFFER_HEIGHT:36163,RENDERBUFFER_INTERNAL_FORMAT:36164,RENDERBUFFER_RED_SIZE:36176,RENDERBUFFER_GREEN_SIZE:36177,RENDERBUFFER_BLUE_SIZE:36178,RENDERBUFFER_ALPHA_SIZE:36179,RENDERBUFFER_DEPTH_SIZE:36180,RENDERBUFFER_STENCIL_SIZE:36181,FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE:36048,FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:36049,FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL:36050,FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE:36051,COLOR_ATTACHMENT0:36064,DEPTH_ATTACHMENT:36096,STENCIL_ATTACHMENT:36128,DEPTH_STENCIL_ATTACHMENT:33306,NONE:0,FRAMEBUFFER_COMPLETE:36053,FRAMEBUFFER_INCOMPLETE_ATTACHMENT:36054,FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:36055,FRAMEBUFFER_INCOMPLETE_DIMENSIONS:36057,FRAMEBUFFER_UNSUPPORTED:36061,FRAMEBUFFER_BINDING:36006,RENDERBUFFER_BINDING:36007,MAX_RENDERBUFFER_SIZE:34024,INVALID_FRAMEBUFFER_OPERATION:1286,UNPACK_FLIP_Y_WEBGL:37440,UNPACK_PREMULTIPLY_ALPHA_WEBGL:37441,CONTEXT_LOST_WEBGL:37442,UNPACK_COLORSPACE_CONVERSION_WEBGL:37443,BROWSER_DEFAULT_WEBGL:37444};function eh(e){var t=new XMLHttpRequest;t.open("get",e.url),t.responseType=e.responseType||"text",e.onprogress&&(t.onprogress=function(r){if(r.lengthComputable){var i=r.loaded/r.total;e.onprogress(i,r.loaded,r.total)}else e.onprogress(null)}),t.onload=function(r){t.status>=400?e.onerror&&e.onerror():e.onload&&e.onload(t.response)},e.onerror&&(t.onerror=e.onerror),t.send(null)}const th={get:eh};var fn,oe={};oe.supportWebGL=function(){if(fn==null)try{var e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");if(!t)throw new Error}catch{fn=!1}return fn};oe.Int8Array=typeof Int8Array>"u"?Array:Int8Array;oe.Uint8Array=typeof Uint8Array>"u"?Array:Uint8Array;oe.Uint16Array=typeof Uint16Array>"u"?Array:Uint16Array;oe.Uint32Array=typeof Uint32Array>"u"?Array:Uint32Array;oe.Int16Array=typeof Int16Array>"u"?Array:Int16Array;oe.Float32Array=typeof Float32Array>"u"?Array:Float32Array;oe.Float64Array=typeof Float64Array>"u"?Array:Float64Array;var rr={};typeof window<"u"?rr=window:typeof global<"u"&&(rr=global);oe.requestAnimationFrame=rr.requestAnimationFrame||rr.msRequestAnimationFrame||rr.mozRequestAnimationFrame||rr.webkitRequestAnimationFrame||function(e){setTimeout(e,16)};oe.createCanvas=function(){return document.createElement("canvas")};oe.createImage=function(){return new rr.Image};oe.request={get:th.get};oe.addEventListener=function(e,t,r,i){e.addEventListener(t,r,i)};oe.removeEventListener=function(e,t,r){e.removeEventListener(t,r)};var ze=function(){this.head=null,this.tail=null,this._length=0};ze.prototype.insert=function(e){var t=new ze.Entry(e);return this.insertEntry(t),t};ze.prototype.insertAt=function(e,t){if(!(e<0)){for(var r=this.head,i=0;r&&i!=e;)r=r.next,i++;if(r){var n=new ze.Entry(t),a=r.prev;a?(a.next=n,n.prev=a):this.head=n,n.next=r,r.prev=n}else this.insert(t)}};ze.prototype.insertBeforeEntry=function(e,t){var r=new ze.Entry(e),i=t.prev;i?(i.next=r,r.prev=i):this.head=r,r.next=t,t.prev=r,this._length++};ze.prototype.insertEntry=function(e){this.head?(this.tail.next=e,e.prev=this.tail,this.tail=e):this.head=this.tail=e,this._length++};ze.prototype.remove=function(e){var t=e.prev,r=e.next;t?t.next=r:this.head=r,r?r.prev=t:this.tail=t,e.next=e.prev=null,this._length--};ze.prototype.removeAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;if(t)return this.remove(t),t.value}};ze.prototype.getHead=function(){if(this.head)return this.head.value};ze.prototype.getTail=function(){if(this.tail)return this.tail.value};ze.prototype.getAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;return t.value}};ze.prototype.indexOf=function(e){for(var t=this.head,r=0;t;){if(t.value===e)return r;t=t.next,r++}};ze.prototype.length=function(){return this._length};ze.prototype.isEmpty=function(){return this._length===0};ze.prototype.forEach=function(e,t){for(var r=this.head,i=0,n=typeof t<"u";r;)n?e.call(t,r.value,i):e(r.value,i),r=r.next,i++};ze.prototype.clear=function(){this.tail=this.head=null,this._length=0};ze.Entry=function(e){this.value=e,this.next=null,this.prev=null};var Nr=function(e){this._list=new ze,this._map={},this._maxSize=e||10};Nr.prototype.setMaxSize=function(e){this._maxSize=e};Nr.prototype.put=function(e,t){if(!this._map.hasOwnProperty(e)){var r=this._list.length();if(r>=this._maxSize&&r>0){var i=this._list.head;this._list.remove(i),delete this._map[i.key]}var n=this._list.insert(t);n.key=e,this._map[e]=n}};Nr.prototype.get=function(e){var t=this._map[e];if(this._map.hasOwnProperty(e))return t!==this._list.tail&&(this._list.remove(t),this._list.insertEntry(t)),t.value};Nr.prototype.remove=function(e){var t=this._map[e];typeof t<"u"&&(delete this._map[e],this._list.remove(t))};Nr.prototype.clear=function(){this._list.clear(),this._map={}};const Yo=Nr;var ge={},Ia={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function vt(e){return e=Math.round(e),e<0?0:e>255?255:e}function rh(e){return e=Math.round(e),e<0?0:e>360?360:e}function ri(e){return e<0?0:e>1?1:e}function cn(e){return e.length&&e.charAt(e.length-1)==="%"?vt(parseFloat(e)/100*255):vt(parseInt(e,10))}function Ar(e){return e.length&&e.charAt(e.length-1)==="%"?ri(parseFloat(e)/100):ri(parseFloat(e))}function dn(e,t,r){return r<0?r+=1:r>1&&(r-=1),r*6<1?e+(t-e)*r*6:r*2<1?t:r*3<2?e+(t-e)*(2/3-r)*6:e}function zt(e,t,r){return e+(t-e)*r}function dt(e,t,r,i,n){return e[0]=t,e[1]=r,e[2]=i,e[3]=n,e}function Gn(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}var Jo=new Yo(20),yi=null;function fr(e,t){yi&&Gn(yi,t),yi=Jo.put(e,yi||t.slice())}ge.parse=function(e,t){if(e){t=t||[];var r=Jo.get(e);if(r)return Gn(t,r);e=e+"";var i=e.replace(/ /g,"").toLowerCase();if(i in Ia)return Gn(t,Ia[i]),fr(e,t),t;if(i.charAt(0)==="#"){if(i.length===4){var n=parseInt(i.substr(1),16);if(!(n>=0&&n<=4095)){dt(t,0,0,0,1);return}return dt(t,(n&3840)>>4|(n&3840)>>8,n&240|(n&240)>>4,n&15|(n&15)<<4,1),fr(e,t),t}else if(i.length===7){var n=parseInt(i.substr(1),16);if(!(n>=0&&n<=16777215)){dt(t,0,0,0,1);return}return dt(t,(n&16711680)>>16,(n&65280)>>8,n&255,1),fr(e,t),t}return}var a=i.indexOf("("),o=i.indexOf(")");if(a!==-1&&o+1===i.length){var s=i.substr(0,a),l=i.substr(a+1,o-(a+1)).split(","),h=1;switch(s){case"rgba":if(l.length!==4){dt(t,0,0,0,1);return}h=Ar(l.pop());case"rgb":if(l.length!==3){dt(t,0,0,0,1);return}return dt(t,cn(l[0]),cn(l[1]),cn(l[2]),h),fr(e,t),t;case"hsla":if(l.length!==4){dt(t,0,0,0,1);return}return l[3]=Ar(l[3]),Hn(l,t),fr(e,t),t;case"hsl":if(l.length!==3){dt(t,0,0,0,1);return}return Hn(l,t),fr(e,t),t;default:return}}dt(t,0,0,0,1)}};ge.parseToFloat=function(e,t){if(t=ge.parse(e,t),!!t)return t[0]/=255,t[1]/=255,t[2]/=255,t};function Hn(e,t){var r=(parseFloat(e[0])%360+360)%360/360,i=Ar(e[1]),n=Ar(e[2]),a=n<=.5?n*(i+1):n+i-n*i,o=n*2-a;return t=t||[],dt(t,vt(dn(o,a,r+1/3)*255),vt(dn(o,a,r)*255),vt(dn(o,a,r-1/3)*255),1),e.length===4&&(t[3]=e[3]),t}function ih(e){if(e){var t=e[0]/255,r=e[1]/255,i=e[2]/255,n=Math.min(t,r,i),a=Math.max(t,r,i),o=a-n,s=(a+n)/2,l,h;if(o===0)l=0,h=0;else{s<.5?h=o/(a+n):h=o/(2-a-n);var u=((a-t)/6+o/2)/o,f=((a-r)/6+o/2)/o,d=((a-i)/6+o/2)/o;t===a?l=d-f:r===a?l=1/3+u-d:i===a&&(l=2/3+f-u),l<0&&(l+=1),l>1&&(l-=1)}var c=[l*360,h,s];return e[3]!=null&&c.push(e[3]),c}}ge.lift=function(e,t){var r=ge.parse(e);if(r){for(var i=0;i<3;i++)t<0?r[i]=r[i]*(1-t)|0:r[i]=(255-r[i])*t+r[i]|0;return ge.stringify(r,r.length===4?"rgba":"rgb")}};ge.toHex=function(e){var t=ge.parse(e);if(t)return((1<<24)+(t[0]<<16)+(t[1]<<8)+ +t[2]).toString(16).slice(1)};ge.fastLerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){r=r||[];var i=e*(t.length-1),n=Math.floor(i),a=Math.ceil(i),o=t[n],s=t[a],l=i-n;return r[0]=vt(zt(o[0],s[0],l)),r[1]=vt(zt(o[1],s[1],l)),r[2]=vt(zt(o[2],s[2],l)),r[3]=ri(zt(o[3],s[3],l)),r}};ge.fastMapToColor=ge.fastLerp;ge.lerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){var i=e*(t.length-1),n=Math.floor(i),a=Math.ceil(i),o=ge.parse(t[n]),s=ge.parse(t[a]),l=i-n,h=ge.stringify([vt(zt(o[0],s[0],l)),vt(zt(o[1],s[1],l)),vt(zt(o[2],s[2],l)),ri(zt(o[3],s[3],l))],"rgba");return r?{color:h,leftIndex:n,rightIndex:a,value:i}:h}};ge.mapToColor=ge.lerp;ge.modifyHSL=function(e,t,r,i){if(e=ge.parse(e),e)return e=ih(e),t!=null&&(e[0]=rh(t)),r!=null&&(e[1]=Ar(r)),i!=null&&(e[2]=Ar(i)),ge.stringify(Hn(e),"rgba")};ge.modifyAlpha=function(e,t){if(e=ge.parse(e),e&&t!=null)return e[3]=ri(t),ge.stringify(e,"rgba")};ge.stringify=function(e,t){if(!(!e||!e.length)){var r=e[0]+","+e[1]+","+e[2];return(t==="rgba"||t==="hsva"||t==="hsla")&&(r+=","+e[3]),t+"("+r+")"}};var nh=ge.parseToFloat,vn={};function Na(e){var t=Object.keys(e);t.sort();for(var r=[],i=0;i<t.length;i++){var n=t[i],a=e[n];a===null?r.push(n):r.push(n+" "+a.toString())}return r.join(`
`)}function ah(e,t,r){r.sort();for(var i=[],n=0;n<r.length;n++){var a=r[n];i.push(a)}var o=Na(e)+`
`+Na(t)+`
`+i.join(`
`);if(vn[o])return vn[o];var s=Ae.genGUID();return vn[o]=s,s}var ut=He.extend(function(){return{name:"",depthTest:!0,depthMask:!0,transparent:!1,blend:null,autoUpdateTextureStatus:!0,uniforms:{},vertexDefines:{},fragmentDefines:{},_textureStatus:{},_enabledUniforms:null}},function(){this.name||(this.name="MATERIAL_"+this.__uid__),this.shader&&this.attachShader(this.shader,!0)},{precision:"highp",setUniform:function(e,t){t===void 0&&console.warn('Uniform value "'+e+'" is undefined');var r=this.uniforms[e];r&&(typeof t=="string"&&(t=nh(t)||t),r.value=t,this.autoUpdateTextureStatus&&r.type==="t"&&(t?this.enableTexture(e):this.disableTexture(e)))},setUniforms:function(e){for(var t in e){var r=e[t];this.setUniform(t,r)}},isUniformEnabled:function(e){return this._enabledUniforms.indexOf(e)>=0},getEnabledUniforms:function(){return this._enabledUniforms},getTextureUniforms:function(){return this._textureUniforms},set:function(e,t){if(typeof e=="object")for(var r in e){var i=e[r];this.setUniform(r,i)}else this.setUniform(e,t)},get:function(e){var t=this.uniforms[e];if(t)return t.value},attachShader:function(e,t){var r=this.uniforms;this.uniforms=e.createUniforms(),this.shader=e;var i=this.uniforms;this._enabledUniforms=Object.keys(i),this._enabledUniforms.sort(),this._textureUniforms=this._enabledUniforms.filter(function(h){var u=this.uniforms[h].type;return u==="t"||u==="tv"},this);var n=this.vertexDefines,a=this.fragmentDefines;if(this.vertexDefines=Ae.clone(e.vertexDefines),this.fragmentDefines=Ae.clone(e.fragmentDefines),t){for(var o in r)i[o]&&(i[o].value=r[o].value);Ae.defaults(this.vertexDefines,n),Ae.defaults(this.fragmentDefines,a)}var s={};for(var l in e.textures)s[l]={shaderType:e.textures[l].shaderType,type:e.textures[l].type,enabled:t&&this._textureStatus[l]?this._textureStatus[l].enabled:!1};this._textureStatus=s,this._programKey=""},clone:function(){var e=new this.constructor({name:this.name,shader:this.shader});for(var t in this.uniforms)e.uniforms[t].value=this.uniforms[t].value;return e.depthTest=this.depthTest,e.depthMask=this.depthMask,e.transparent=this.transparent,e.blend=this.blend,e.vertexDefines=Ae.clone(this.vertexDefines),e.fragmentDefines=Ae.clone(this.fragmentDefines),e.enableTexture(this.getEnabledTextures()),e.precision=this.precision,e},define:function(e,t,r){var i=this.vertexDefines,n=this.fragmentDefines;e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<3&&(r=t,t=e,e="both"),r=r??null,(e==="vertex"||e==="both")&&i[t]!==r&&(i[t]=r,this._programKey=""),(e==="fragment"||e==="both")&&n[t]!==r&&(n[t]=r,e!=="both"&&(this._programKey=""))},undefine:function(e,t){e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<2&&(t=e,e="both"),(e==="vertex"||e==="both")&&this.isDefined("vertex",t)&&(delete this.vertexDefines[t],this._programKey=""),(e==="fragment"||e==="both")&&this.isDefined("fragment",t)&&(delete this.fragmentDefines[t],e!=="both"&&(this._programKey=""))},isDefined:function(e,t){switch(e){case"vertex":return this.vertexDefines[t]!==void 0;case"fragment":return this.fragmentDefines[t]!==void 0}},getDefine:function(e,t){switch(e){case"vertex":return this.vertexDefines[t];case"fragment":return this.fragmentDefines[t]}},enableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.enableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var i=r.enabled;i||(r.enabled=!0,this._programKey="")}},enableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!0;this._programKey=""},disableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.disableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var i=!r.enabled;i||(r.enabled=!1,this._programKey="")}},disableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!1;this._programKey=""},isTextureEnabled:function(e){var t=this._textureStatus;return!!t[e]&&t[e].enabled},getEnabledTextures:function(){var e=[],t=this._textureStatus;for(var r in t)t[r].enabled&&e.push(r);return e},dirtyDefines:function(){this._programKey=""},getProgramKey:function(){return this._programKey||(this._programKey=ah(this.vertexDefines,this.fragmentDefines,this.getEnabledTextures())),this._programKey}}),Ii=1e-6,ke=Array,Tr=Math.random,K={};K.create=function(){var e=new ke(2);return e[0]=0,e[1]=0,e};K.clone=function(e){var t=new ke(2);return t[0]=e[0],t[1]=e[1],t};K.fromValues=function(e,t){var r=new ke(2);return r[0]=e,r[1]=t,r};K.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e};K.set=function(e,t,r){return e[0]=t,e[1]=r,e};K.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e};K.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e};K.sub=K.subtract;K.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e};K.mul=K.multiply;K.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e};K.div=K.divide;K.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e};K.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e};K.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e};K.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e};K.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1];return Math.sqrt(r*r+i*i)};K.dist=K.distance;K.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1];return r*r+i*i};K.sqrDist=K.squaredDistance;K.length=function(e){var t=e[0],r=e[1];return Math.sqrt(t*t+r*r)};K.len=K.length;K.squaredLength=function(e){var t=e[0],r=e[1];return t*t+r*r};K.sqrLen=K.squaredLength;K.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e};K.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e};K.normalize=function(e,t){var r=t[0],i=t[1],n=r*r+i*i;return n>0&&(n=1/Math.sqrt(n),e[0]=t[0]*n,e[1]=t[1]*n),e};K.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]};K.cross=function(e,t,r){var i=t[0]*r[1]-t[1]*r[0];return e[0]=e[1]=0,e[2]=i,e};K.lerp=function(e,t,r,i){var n=t[0],a=t[1];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e};K.random=function(e,t){t=t||1;var r=GLMAT_RANDOM()*2*Math.PI;return e[0]=Math.cos(r)*t,e[1]=Math.sin(r)*t,e};K.transformMat2=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[2]*n,e[1]=r[1]*i+r[3]*n,e};K.transformMat2d=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[2]*n+r[4],e[1]=r[1]*i+r[3]*n+r[5],e};K.transformMat3=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[3]*n+r[6],e[1]=r[1]*i+r[4]*n+r[7],e};K.transformMat4=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[4]*n+r[12],e[1]=r[1]*i+r[5]*n+r[13],e};K.forEach=function(){var e=K.create();return function(t,r,i,n,a,o){var s,l;for(r||(r=2),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,s=i;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],a(e,e,o),t[s]=e[0],t[s+1]=e[1];return t}}();const X=K;var $=function(e,t){e=e||0,t=t||0,this.array=X.fromValues(e,t),this._dirty=!0};$.prototype={constructor:$,add:function(e){return X.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t){return this.array[0]=e,this.array[1]=t,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this._dirty=!0,this},clone:function(){return new $(this.x,this.y)},copy:function(e){return X.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return X.cross(e.array,this.array,t.array),e._dirty=!0,this},dist:function(e){return X.dist(this.array,e.array)},distance:function(e){return X.distance(this.array,e.array)},div:function(e){return X.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return X.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return X.dot(this.array,e.array)},len:function(){return X.len(this.array)},length:function(){return X.length(this.array)},lerp:function(e,t,r){return X.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return X.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return X.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return X.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return X.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return X.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return X.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return X.random(this.array,e),this._dirty=!0,this},scale:function(e){return X.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return X.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return X.sqrDist(this.array,e.array)},squaredDistance:function(e){return X.squaredDistance(this.array,e.array)},sqrLen:function(){return X.sqrLen(this.array)},squaredLength:function(){return X.squaredLength(this.array)},sub:function(e){return X.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return X.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat2:function(e){return X.transformMat2(this.array,this.array,e.array),this._dirty=!0,this},transformMat2d:function(e){return X.transformMat2d(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return X.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return X.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};if(Object.defineProperty){var Oa=$.prototype;Object.defineProperty(Oa,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Object.defineProperty(Oa,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}})}$.add=function(e,t,r){return X.add(e.array,t.array,r.array),e._dirty=!0,e};$.set=function(e,t,r){return X.set(e.array,t,r),e._dirty=!0,e};$.copy=function(e,t){return X.copy(e.array,t.array),e._dirty=!0,e};$.cross=function(e,t,r){return X.cross(e.array,t.array,r.array),e._dirty=!0,e};$.dist=function(e,t){return X.distance(e.array,t.array)};$.distance=$.dist;$.div=function(e,t,r){return X.divide(e.array,t.array,r.array),e._dirty=!0,e};$.divide=$.div;$.dot=function(e,t){return X.dot(e.array,t.array)};$.len=function(e){return X.length(e.array)};$.lerp=function(e,t,r,i){return X.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};$.min=function(e,t,r){return X.min(e.array,t.array,r.array),e._dirty=!0,e};$.max=function(e,t,r){return X.max(e.array,t.array,r.array),e._dirty=!0,e};$.mul=function(e,t,r){return X.multiply(e.array,t.array,r.array),e._dirty=!0,e};$.multiply=$.mul;$.negate=function(e,t){return X.negate(e.array,t.array),e._dirty=!0,e};$.normalize=function(e,t){return X.normalize(e.array,t.array),e._dirty=!0,e};$.random=function(e,t){return X.random(e.array,t),e._dirty=!0,e};$.scale=function(e,t,r){return X.scale(e.array,t.array,r),e._dirty=!0,e};$.scaleAndAdd=function(e,t,r,i){return X.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};$.sqrDist=function(e,t){return X.sqrDist(e.array,t.array)};$.squaredDistance=$.sqrDist;$.sqrLen=function(e){return X.sqrLen(e.array)};$.squaredLength=$.sqrLen;$.sub=function(e,t,r){return X.subtract(e.array,t.array,r.array),e._dirty=!0,e};$.subtract=$.sub;$.transformMat2=function(e,t,r){return X.transformMat2(e.array,t.array,r.array),e._dirty=!0,e};$.transformMat2d=function(e,t,r){return X.transformMat2d(e.array,t.array,r.array),e._dirty=!0,e};$.transformMat3=function(e,t,r){return X.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};$.transformMat4=function(e,t,r){return X.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};const nt=$;var Ba=1,Ua=2,pn=3,Fa={};function oh(e){for(var t=e.split(`
`),r=0,i=t.length;r<i;r++)t[r]=r+1+": "+t[r];return t.join(`
`)}function za(e,t,r){if(!e.getShaderParameter(t,e.COMPILE_STATUS))return[e.getShaderInfoLog(t),oh(r)].join(`
`)}var Va=new oe.Float32Array(16),sh=He.extend({uniformSemantics:{},attributes:{}},function(){this._locations={},this._textureSlot=0,this._program=null},{bind:function(e){this._textureSlot=0,e.gl.useProgram(this._program)},hasUniform:function(e){var t=this._locations[e];return t!=null},useTextureSlot:function(e,t,r){t&&(e.gl.activeTexture(e.gl.TEXTURE0+r),t.isRenderable()?t.bind(e):t.unbind(e))},currentTextureSlot:function(){return this._textureSlot},resetTextureSlot:function(e){this._textureSlot=e||0},takeCurrentTextureSlot:function(e,t){var r=this._textureSlot;return this.useTextureSlot(e,t,r),this._textureSlot++,r},setUniform:function(e,t,r,i){var n=this._locations,a=n[r];if(a==null)return!1;switch(t){case"m4":if(!(i instanceof Float32Array)){for(var o=0;o<i.length;o++)Va[o]=i[o];i=Va}e.uniformMatrix4fv(a,!1,i);break;case"2i":e.uniform2i(a,i[0],i[1]);break;case"2f":e.uniform2f(a,i[0],i[1]);break;case"3i":e.uniform3i(a,i[0],i[1],i[2]);break;case"3f":e.uniform3f(a,i[0],i[1],i[2]);break;case"4i":e.uniform4i(a,i[0],i[1],i[2],i[3]);break;case"4f":e.uniform4f(a,i[0],i[1],i[2],i[3]);break;case"1i":e.uniform1i(a,i);break;case"1f":e.uniform1f(a,i);break;case"1fv":e.uniform1fv(a,i);break;case"1iv":e.uniform1iv(a,i);break;case"2iv":e.uniform2iv(a,i);break;case"2fv":e.uniform2fv(a,i);break;case"3iv":e.uniform3iv(a,i);break;case"3fv":e.uniform3fv(a,i);break;case"4iv":e.uniform4iv(a,i);break;case"4fv":e.uniform4fv(a,i);break;case"m2":case"m2v":e.uniformMatrix2fv(a,!1,i);break;case"m3":case"m3v":e.uniformMatrix3fv(a,!1,i);break;case"m4v":if(Array.isArray(i)&&Array.isArray(i[0])){for(var s=new oe.Float32Array(i.length*16),l=0,o=0;o<i.length;o++)for(var h=i[o],u=0;u<16;u++)s[l++]=h[u];e.uniformMatrix4fv(a,!1,s)}else e.uniformMatrix4fv(a,!1,i);break}return!0},setUniformOfSemantic:function(e,t,r){var i=this.uniformSemantics[t];return i?this.setUniform(e,i.type,i.symbol,r):!1},enableAttributes:function(e,t,r){var i=e.gl,n=this._program,a=this._locations,o;r?o=r.__enabledAttributeList:o=Fa[e.__uid__],o||(r?o=r.__enabledAttributeList=[]:o=Fa[e.__uid__]=[]);for(var s=[],l=0;l<t.length;l++){var h=t[l];if(!this.attributes[h]){s[l]=-1;continue}var u=a[h];if(u==null){if(u=i.getAttribLocation(n,h),u===-1){s[l]=-1;continue}a[h]=u}s[l]=u,o[u]?o[u]=Ua:o[u]=Ba}for(var l=0;l<o.length;l++)switch(o[l]){case Ba:i.enableVertexAttribArray(l),o[l]=pn;break;case Ua:o[l]=pn;break;case pn:i.disableVertexAttribArray(l),o[l]=0;break}return s},getAttribLocation:function(e,t){var r=this._locations,i=r[t];return i==null&&(i=e.getAttribLocation(this._program,t),r[t]=i),i},buildProgram:function(e,t,r,i){var n=e.createShader(e.VERTEX_SHADER),a=e.createProgram();e.shaderSource(n,r),e.compileShader(n);var o=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(o,i),e.compileShader(o);var s=za(e,n,r);if(s||(s=za(e,o,i),s))return s;if(e.attachShader(a,n),e.attachShader(a,o),t.attributeSemantics.POSITION)e.bindAttribLocation(a,0,t.attributeSemantics.POSITION.symbol);else{var l=Object.keys(this.attributes);e.bindAttribLocation(a,0,l[0])}if(e.linkProgram(a),e.deleteShader(n),e.deleteShader(o),this._program=a,this.vertexCode=r,this.fragmentCode=i,!e.getProgramParameter(a,e.LINK_STATUS))return`Could not link program
`+e.getProgramInfoLog(a);for(var h=0;h<t.uniforms.length;h++){var u=t.uniforms[h];this._locations[u]=e.getUniformLocation(a,u)}}});const lh=sh;var hh=/for\s*?\(int\s*?_idx_\s*\=\s*([\w-]+)\;\s*_idx_\s*<\s*([\w-]+);\s*_idx_\s*\+\+\s*\)\s*\{\{([\s\S]+?)(?=\}\})\}\}/g;function Ga(e,t,r){function i(o,s,l,h){var u="";isNaN(s)&&(s in t?s=t[s]:s=n[s]),isNaN(l)&&(l in t?l=t[l]:l=n[l]);for(var f=parseInt(s);f<parseInt(l);f++)u+="{"+h.replace(/float\s*\(\s*_idx_\s*\)/g,f.toFixed(1)).replace(/_idx_/g,f)+"}";return u}var n={};for(var a in r)n[a+"_COUNT"]=r[a];return e.replace(hh,i)}function mn(e,t,r){var i=[];if(t)for(var n in t){var a=t[n];a>0&&i.push("#define "+n.toUpperCase()+"_COUNT "+a)}if(r)for(var o=0;o<r.length;o++){var s=r[o];i.push("#define "+s.toUpperCase()+"_ENABLED")}for(var s in e){var l=e[s];l===null?i.push("#define "+s):i.push("#define "+s+" "+l.toString())}return i.join(`
`)}function uh(e){for(var t=[],r=0;r<e.length;r++)t.push("#extension GL_"+e[r]+" : enable");return t.join(`
`)}function fh(e){return["precision",e,"float"].join(" ")+`;
`+["precision",e,"int"].join(" ")+`;
`+["precision",e,"sampler2D"].join(" ")+`;
`}function $o(e){this._renderer=e,this._cache={}}$o.prototype.getProgram=function(e,t,r){var i=this._cache,n=e.isSkinnedMesh&&e.isSkinnedMesh(),a=e.isInstancedMesh&&e.isInstancedMesh(),o="s"+t.shader.shaderID+"m"+t.getProgramKey();r&&(o+="se"+r.getProgramKey(e.lightGroup)),n&&(o+=",sk"+e.joints.length),a&&(o+=",is");var _=i[o];if(_)return _;var s=r?r.getLightsNumbers(e.lightGroup):{},l=this._renderer,h=l.gl,u=t.getEnabledTextures(),f="";if(n){var d={SKINNING:null,JOINT_COUNT:e.joints.length};e.joints.length>l.getMaxJointNumber()&&(d.USE_SKIN_MATRICES_TEXTURE=null),f+=`
`+mn(d)+`
`}a&&(f+=`
#define INSTANCING
`);var c=f+mn(t.vertexDefines,s,u),v=f+mn(t.fragmentDefines,s,u),p=c+`
`+t.shader.vertex,m=["OES_standard_derivatives","EXT_shader_texture_lod"].filter(function(A){return l.getGLExtension(A)!=null});m.indexOf("EXT_shader_texture_lod")>=0&&(v+=`
#define SUPPORT_TEXTURE_LOD`),m.indexOf("OES_standard_derivatives")>=0&&(v+=`
#define SUPPORT_STANDARD_DERIVATIVES`);var g=uh(m)+`
`+fh(t.precision)+`
`+v+`
`+t.shader.fragment,T=Ga(p,t.vertexDefines,s),x=Ga(g,t.fragmentDefines,s),_=new lh;_.uniformSemantics=t.shader.uniformSemantics,_.attributes=t.shader.attributes;var S=_.buildProgram(h,t.shader,T,x);return _.__error=S,i[o]=_,_};var Ha=/uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g,ch=/attribute\s+(float|int|vec2|vec3|vec4)\s+([\s\S]*?);/g,ka=/#define\s+(\w+)?(\s+[\d-.]+)?\s*;?\s*\n/g,dh={bool:"1i",int:"1i",sampler2D:"t",samplerCube:"t",float:"1f",vec2:"2f",vec3:"3f",vec4:"4f",ivec2:"2i",ivec3:"3i",ivec4:"4i",mat2:"m2",mat3:"m3",mat4:"m4"};function bt(e){for(var t=[],r=0;r<e;r++)t[r]=0;return t}var Wa={bool:function(){return!0},int:function(){return 0},float:function(){return 0},sampler2D:function(){return null},samplerCube:function(){return null},vec2:function(){return bt(2)},vec3:function(){return bt(3)},vec4:function(){return bt(4)},ivec2:function(){return bt(2)},ivec3:function(){return bt(3)},ivec4:function(){return bt(4)},mat2:function(){return bt(4)},mat3:function(){return bt(9)},mat4:function(){return bt(16)},array:function(){return[]}},kn=["POSITION","NORMAL","BINORMAL","TANGENT","TEXCOORD","TEXCOORD_0","TEXCOORD_1","COLOR","JOINT","WEIGHT"],es=["SKIN_MATRIX","VIEWPORT_SIZE","VIEWPORT","DEVICEPIXELRATIO","WINDOW_SIZE","NEAR","FAR","TIME"],ts=["WORLD","VIEW","PROJECTION","WORLDVIEW","VIEWPROJECTION","WORLDVIEWPROJECTION","WORLDINVERSE","VIEWINVERSE","PROJECTIONINVERSE","WORLDVIEWINVERSE","VIEWPROJECTIONINVERSE","WORLDVIEWPROJECTIONINVERSE","WORLDTRANSPOSE","VIEWTRANSPOSE","PROJECTIONTRANSPOSE","WORLDVIEWTRANSPOSE","VIEWPROJECTIONTRANSPOSE","WORLDVIEWPROJECTIONTRANSPOSE","WORLDINVERSETRANSPOSE","VIEWINVERSETRANSPOSE","PROJECTIONINVERSETRANSPOSE","WORLDVIEWINVERSETRANSPOSE","VIEWPROJECTIONINVERSETRANSPOSE","WORLDVIEWPROJECTIONINVERSETRANSPOSE"],vh={vec4:4,vec3:3,vec2:2,float:1},gn={},rs={};function ph(e,t){var r="vertex:"+e+"fragment:"+t;if(gn[r])return gn[r];var i=Ae.genGUID();return gn[r]=i,rs[i]={vertex:e,fragment:t},i}function qa(e){return e.replace(/[ \t]*\/\/.*\n/g,"").replace(/[ \t]*\/\*[\s\S]*?\*\//g,"")}function cr(){console.error("Wrong uniform/attributes syntax")}function Xa(e,t){for(var r=/[,=\(\):]/,i=t.replace(/:\s*\[\s*(.*)\s*\]/g,"="+e+"($1)").replace(/\s+/g,"").split(/(?=[,=\(\):])/g),n=[],a=0;a<i.length;a++)i[a].match(r)?n.push(i[a].charAt(0),i[a].slice(1)):n.push(i[a]);i=n;var o=0,s=1,l=2,h=3,u=4,f=5,d=o,c={},v=null,p;m(i[0]);function m(x){x||cr();var _=x.match(/\[(.*?)\]/);p=x.replace(/\[(.*?)\]/,""),c[p]={},_&&(c[p].isArray=!0,c[p].arraySize=_[1])}for(var a=1;a<i.length;a++){var g=i[a];if(g){if(g==="="){if(d!==o&&d!==h){cr();break}d=s;continue}else if(g===":"){d=u;continue}else if(g===","){if(d===l){if(!(v instanceof Array)){cr();break}v.push(+i[++a])}else d=f;continue}else if(g===")"){c[p].value=new oe.Float32Array(v),v=null,d=f;continue}else if(g==="("){if(d!==l){cr();break}if(!(v instanceof Array)){cr();break}v.push(+i[++a]);continue}else if(g.indexOf("vec")>=0){if(d!==s&&d!==u){cr();break}d=l,v=[];continue}else if(d===s){e==="bool"?c[p].value=g==="true":c[p].value=parseFloat(g),v=null;continue}else if(d===u){var T=g;kn.indexOf(T)>=0||es.indexOf(T)>=0||ts.indexOf(T)>=0?c[p].semantic=T:T==="ignore"||T==="unconfigurable"?c[p].ignore=!0:e==="bool"?c[p].value=T==="true":c[p].value=parseFloat(T);continue}m(g),d=o}}return c}function B(e,t){typeof e=="object"&&(t=e.fragment,e=e.vertex),e=qa(e),t=qa(t),this._shaderID=ph(e,t),this._vertexCode=B.parseImport(e),this._fragmentCode=B.parseImport(t),this.attributeSemantics={},this.matrixSemantics={},this.uniformSemantics={},this.matrixSemanticKeys=[],this.uniformTemplates={},this.attributes={},this.textures={},this.vertexDefines={},this.fragmentDefines={},this._parseAttributes(),this._parseUniforms(),this._parseDefines()}B.prototype={constructor:B,createUniforms:function(){var e={};for(var t in this.uniformTemplates){var r=this.uniformTemplates[t];e[t]={type:r.type,value:r.value()}}return e},_parseImport:function(){this._vertexCode=B.parseImport(this.vertex),this._fragmentCode=B.parseImport(this.fragment)},_addSemanticUniform:function(e,t,r){if(kn.indexOf(r)>=0)this.attributeSemantics[r]={symbol:e,type:t};else if(ts.indexOf(r)>=0){var i=!1,n=r;r.match(/TRANSPOSE$/)&&(i=!0,n=r.slice(0,-9)),this.matrixSemantics[r]={symbol:e,type:t,isTranspose:i,semanticNoTranspose:n}}else es.indexOf(r)>=0&&(this.uniformSemantics[r]={symbol:e,type:t})},_addMaterialUniform:function(e,t,r,i,n,a){a[e]={type:r,value:n?Wa.array:i||Wa[t],semantic:null}},_parseUniforms:function(){var e={},t=this,r="vertex";this._uniformList=[],this._vertexCode=this._vertexCode.replace(Ha,n),r="fragment",this._fragmentCode=this._fragmentCode.replace(Ha,n),t.matrixSemanticKeys=Object.keys(this.matrixSemantics);function i(a){return a!=null?function(){return a}:null}function n(a,o,s){var l=Xa(o,s),h=[];for(var u in l){var f=l[u],d=f.semantic,c=u,v=dh[o],p=i(l[u].value);l[u].isArray&&(c+="["+l[u].arraySize+"]",v+="v"),h.push(c),t._uniformList.push(u),f.ignore||((o==="sampler2D"||o==="samplerCube")&&(t.textures[u]={shaderType:r,type:o}),d?t._addSemanticUniform(u,v,d):t._addMaterialUniform(u,o,v,p,l[u].isArray,e))}return h.length>0?"uniform "+o+" "+h.join(",")+`;
`:""}this.uniformTemplates=e},_parseAttributes:function(){var e={},t=this;this._vertexCode=this._vertexCode.replace(ch,r);function r(i,n,a){var o=Xa(n,a),s=vh[n]||1,l=[];for(var h in o){var u=o[h].semantic;if(e[h]={type:"float",size:s,semantic:u||null},u){if(kn.indexOf(u)<0)throw new Error('Unkown semantic "'+u+'"');t.attributeSemantics[u]={symbol:h,type:n}}l.push(h)}return"attribute "+n+" "+l.join(",")+`;
`}this.attributes=e},_parseDefines:function(){var e=this,t="vertex";this._vertexCode=this._vertexCode.replace(ka,r),t="fragment",this._fragmentCode=this._fragmentCode.replace(ka,r);function r(i,n,a){var o=t==="vertex"?e.vertexDefines:e.fragmentDefines;return o[n]||(a==="false"?o[n]=!1:a==="true"?o[n]=!0:o[n]=a?isNaN(parseFloat(a))?a.trim():parseFloat(a):null),""}},clone:function(){var e=rs[this._shaderID],t=new B(e.vertex,e.fragment);return t}};Object.defineProperty&&(Object.defineProperty(B.prototype,"shaderID",{get:function(){return this._shaderID}}),Object.defineProperty(B.prototype,"vertex",{get:function(){return this._vertexCode}}),Object.defineProperty(B.prototype,"fragment",{get:function(){return this._fragmentCode}}),Object.defineProperty(B.prototype,"uniforms",{get:function(){return this._uniformList}}));var mh=/(@import)\s*([0-9a-zA-Z_\-\.]*)/g;B.parseImport=function(e){return e=e.replace(mh,function(n,r,i){var n=B.source(i);return n?B.parseImport(n):(console.error('Shader chunk "'+i+'" not existed in library'),"")}),e};var gh=/(@export)\s*([0-9a-zA-Z_\-\.]*)\s*\n([\s\S]*?)@end/g;B.import=function(e){e.replace(gh,function(t,r,i,a){var a=a.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+\x24)/g,"");if(a){for(var o=i.split("."),s=B.codes,l=0,h;l<o.length-1;)h=o[l++],s[h]||(s[h]={}),s=s[h];h=o[l],s[h]=a}return a})};B.codes={};B.source=function(e){for(var t=e.split("."),r=B.codes,i=0;r&&i<t.length;){var n=t[i++];r=r[n]}return typeof r!="string"?(console.error('Shader "'+e+'" not existed in library'),""):r};const is=`@export clay.prez.vertex
uniform mat4 WVP : WORLDVIEWPROJECTION;
attribute vec3 pos : POSITION;
attribute vec2 uv : TEXCOORD_0;
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec2 v_Texcoord;
void main()
{
 vec4 P = vec4(pos, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = WVP * P;
 v_Texcoord = uv * uvRepeat + uvOffset;
}
@end
@export clay.prez.fragment
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
varying vec2 v_Texcoord;
void main()
{
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
 gl_FragColor = vec4(0.0,0.0,0.0,1.0);
}
@end`;var P={};P.create=function(){var e=new ke(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};P.clone=function(e){var t=new ke(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t};P.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};P.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};P.transpose=function(e,t){if(e===t){var r=t[1],i=t[2],n=t[3],a=t[6],o=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=i,e[9]=a,e[11]=t[14],e[12]=n,e[13]=o,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e};P.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],h=t[7],u=t[8],f=t[9],d=t[10],c=t[11],v=t[12],p=t[13],m=t[14],g=t[15],T=r*s-i*o,x=r*l-n*o,_=r*h-a*o,S=i*l-n*s,A=i*h-a*s,b=n*h-a*l,w=u*p-f*v,L=u*m-d*v,I=u*g-c*v,M=f*m-d*p,N=f*g-c*p,U=d*g-c*m,D=T*U-x*N+_*M+S*I-A*L+b*w;return D?(D=1/D,e[0]=(s*U-l*N+h*M)*D,e[1]=(n*N-i*U-a*M)*D,e[2]=(p*b-m*A+g*S)*D,e[3]=(d*A-f*b-c*S)*D,e[4]=(l*I-o*U-h*L)*D,e[5]=(r*U-n*I+a*L)*D,e[6]=(m*_-v*b-g*x)*D,e[7]=(u*b-d*_+c*x)*D,e[8]=(o*N-s*I+h*w)*D,e[9]=(i*I-r*N-a*w)*D,e[10]=(v*A-p*_+g*T)*D,e[11]=(f*_-u*A-c*T)*D,e[12]=(s*L-o*M-l*w)*D,e[13]=(r*M-i*L+n*w)*D,e[14]=(p*x-v*S-m*T)*D,e[15]=(u*S-f*x+d*T)*D,e):null};P.adjoint=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],h=t[7],u=t[8],f=t[9],d=t[10],c=t[11],v=t[12],p=t[13],m=t[14],g=t[15];return e[0]=s*(d*g-c*m)-f*(l*g-h*m)+p*(l*c-h*d),e[1]=-(i*(d*g-c*m)-f*(n*g-a*m)+p*(n*c-a*d)),e[2]=i*(l*g-h*m)-s*(n*g-a*m)+p*(n*h-a*l),e[3]=-(i*(l*c-h*d)-s*(n*c-a*d)+f*(n*h-a*l)),e[4]=-(o*(d*g-c*m)-u*(l*g-h*m)+v*(l*c-h*d)),e[5]=r*(d*g-c*m)-u*(n*g-a*m)+v*(n*c-a*d),e[6]=-(r*(l*g-h*m)-o*(n*g-a*m)+v*(n*h-a*l)),e[7]=r*(l*c-h*d)-o*(n*c-a*d)+u*(n*h-a*l),e[8]=o*(f*g-c*p)-u*(s*g-h*p)+v*(s*c-h*f),e[9]=-(r*(f*g-c*p)-u*(i*g-a*p)+v*(i*c-a*f)),e[10]=r*(s*g-h*p)-o*(i*g-a*p)+v*(i*h-a*s),e[11]=-(r*(s*c-h*f)-o*(i*c-a*f)+u*(i*h-a*s)),e[12]=-(o*(f*m-d*p)-u*(s*m-l*p)+v*(s*d-l*f)),e[13]=r*(f*m-d*p)-u*(i*m-n*p)+v*(i*d-n*f),e[14]=-(r*(s*m-l*p)-o*(i*m-n*p)+v*(i*l-n*s)),e[15]=r*(s*d-l*f)-o*(i*d-n*f)+u*(i*l-n*s),e};P.determinant=function(e){var t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],o=e[5],s=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],c=e[12],v=e[13],p=e[14],m=e[15],g=t*o-r*a,T=t*s-i*a,x=t*l-n*a,_=r*s-i*o,S=r*l-n*o,A=i*l-n*s,b=h*v-u*c,w=h*p-f*c,L=h*m-d*c,I=u*p-f*v,M=u*m-d*v,N=f*m-d*p;return g*N-T*M+x*I+_*L-S*w+A*b};P.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],h=t[6],u=t[7],f=t[8],d=t[9],c=t[10],v=t[11],p=t[12],m=t[13],g=t[14],T=t[15],x=r[0],_=r[1],S=r[2],A=r[3];return e[0]=x*i+_*s+S*f+A*p,e[1]=x*n+_*l+S*d+A*m,e[2]=x*a+_*h+S*c+A*g,e[3]=x*o+_*u+S*v+A*T,x=r[4],_=r[5],S=r[6],A=r[7],e[4]=x*i+_*s+S*f+A*p,e[5]=x*n+_*l+S*d+A*m,e[6]=x*a+_*h+S*c+A*g,e[7]=x*o+_*u+S*v+A*T,x=r[8],_=r[9],S=r[10],A=r[11],e[8]=x*i+_*s+S*f+A*p,e[9]=x*n+_*l+S*d+A*m,e[10]=x*a+_*h+S*c+A*g,e[11]=x*o+_*u+S*v+A*T,x=r[12],_=r[13],S=r[14],A=r[15],e[12]=x*i+_*s+S*f+A*p,e[13]=x*n+_*l+S*d+A*m,e[14]=x*a+_*h+S*c+A*g,e[15]=x*o+_*u+S*v+A*T,e};P.multiplyAffine=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[4],s=t[5],l=t[6],h=t[8],u=t[9],f=t[10],d=t[12],c=t[13],v=t[14],p=r[0],m=r[1],g=r[2];return e[0]=p*i+m*o+g*h,e[1]=p*n+m*s+g*u,e[2]=p*a+m*l+g*f,p=r[4],m=r[5],g=r[6],e[4]=p*i+m*o+g*h,e[5]=p*n+m*s+g*u,e[6]=p*a+m*l+g*f,p=r[8],m=r[9],g=r[10],e[8]=p*i+m*o+g*h,e[9]=p*n+m*s+g*u,e[10]=p*a+m*l+g*f,p=r[12],m=r[13],g=r[14],e[12]=p*i+m*o+g*h+d,e[13]=p*n+m*s+g*u+c,e[14]=p*a+m*l+g*f+v,e};P.mul=P.multiply;P.mulAffine=P.multiplyAffine;P.translate=function(e,t,r){var i=r[0],n=r[1],a=r[2],o,s,l,h,u,f,d,c,v,p,m,g;return t===e?(e[12]=t[0]*i+t[4]*n+t[8]*a+t[12],e[13]=t[1]*i+t[5]*n+t[9]*a+t[13],e[14]=t[2]*i+t[6]*n+t[10]*a+t[14],e[15]=t[3]*i+t[7]*n+t[11]*a+t[15]):(o=t[0],s=t[1],l=t[2],h=t[3],u=t[4],f=t[5],d=t[6],c=t[7],v=t[8],p=t[9],m=t[10],g=t[11],e[0]=o,e[1]=s,e[2]=l,e[3]=h,e[4]=u,e[5]=f,e[6]=d,e[7]=c,e[8]=v,e[9]=p,e[10]=m,e[11]=g,e[12]=o*i+u*n+v*a+t[12],e[13]=s*i+f*n+p*a+t[13],e[14]=l*i+d*n+m*a+t[14],e[15]=h*i+c*n+g*a+t[15]),e};P.scale=function(e,t,r){var i=r[0],n=r[1],a=r[2];return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=t[3]*i,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};P.rotate=function(e,t,r,i){var n=i[0],a=i[1],o=i[2],s=Math.sqrt(n*n+a*a+o*o),l,h,u,f,d,c,v,p,m,g,T,x,_,S,A,b,w,L,I,M,N,U,D,z;return Math.abs(s)<Ii?null:(s=1/s,n*=s,a*=s,o*=s,l=Math.sin(r),h=Math.cos(r),u=1-h,f=t[0],d=t[1],c=t[2],v=t[3],p=t[4],m=t[5],g=t[6],T=t[7],x=t[8],_=t[9],S=t[10],A=t[11],b=n*n*u+h,w=a*n*u+o*l,L=o*n*u-a*l,I=n*a*u-o*l,M=a*a*u+h,N=o*a*u+n*l,U=n*o*u+a*l,D=a*o*u-n*l,z=o*o*u+h,e[0]=f*b+p*w+x*L,e[1]=d*b+m*w+_*L,e[2]=c*b+g*w+S*L,e[3]=v*b+T*w+A*L,e[4]=f*I+p*M+x*N,e[5]=d*I+m*M+_*N,e[6]=c*I+g*M+S*N,e[7]=v*I+T*M+A*N,e[8]=f*U+p*D+x*z,e[9]=d*U+m*D+_*z,e[10]=c*U+g*D+S*z,e[11]=v*U+T*D+A*z,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)};P.rotateX=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[4],o=t[5],s=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*n+h*i,e[5]=o*n+u*i,e[6]=s*n+f*i,e[7]=l*n+d*i,e[8]=h*n-a*i,e[9]=u*n-o*i,e[10]=f*n-s*i,e[11]=d*n-l*i,e};P.rotateY=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[0],o=t[1],s=t[2],l=t[3],h=t[8],u=t[9],f=t[10],d=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*n-h*i,e[1]=o*n-u*i,e[2]=s*n-f*i,e[3]=l*n-d*i,e[8]=a*i+h*n,e[9]=o*i+u*n,e[10]=s*i+f*n,e[11]=l*i+d*n,e};P.rotateZ=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[0],o=t[1],s=t[2],l=t[3],h=t[4],u=t[5],f=t[6],d=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*n+h*i,e[1]=o*n+u*i,e[2]=s*n+f*i,e[3]=l*n+d*i,e[4]=h*n-a*i,e[5]=u*n-o*i,e[6]=f*n-s*i,e[7]=d*n-l*i,e};P.fromRotationTranslation=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=i+i,l=n+n,h=a+a,u=i*s,f=i*l,d=i*h,c=n*l,v=n*h,p=a*h,m=o*s,g=o*l,T=o*h;return e[0]=1-(c+p),e[1]=f+T,e[2]=d-g,e[3]=0,e[4]=f-T,e[5]=1-(u+p),e[6]=v+m,e[7]=0,e[8]=d+g,e[9]=v-m,e[10]=1-(u+c),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e};P.fromQuat=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r+r,s=i+i,l=n+n,h=r*o,u=i*o,f=i*s,d=n*o,c=n*s,v=n*l,p=a*o,m=a*s,g=a*l;return e[0]=1-f-v,e[1]=u+g,e[2]=d-m,e[3]=0,e[4]=u-g,e[5]=1-h-v,e[6]=c+p,e[7]=0,e[8]=d+m,e[9]=c-p,e[10]=1-h-f,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};P.frustum=function(e,t,r,i,n,a,o){var s=1/(r-t),l=1/(n-i),h=1/(a-o);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*l,e[6]=0,e[7]=0,e[8]=(r+t)*s,e[9]=(n+i)*l,e[10]=(o+a)*h,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*a*2*h,e[15]=0,e};P.perspective=function(e,t,r,i,n){var a=1/Math.tan(t/2),o=1/(i-n);return e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(n+i)*o,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*n*i*o,e[15]=0,e};P.ortho=function(e,t,r,i,n,a,o){var s=1/(t-r),l=1/(i-n),h=1/(a-o);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*h,e[11]=0,e[12]=(t+r)*s,e[13]=(n+i)*l,e[14]=(o+a)*h,e[15]=1,e};P.lookAt=function(e,t,r,i){var n,a,o,s,l,h,u,f,d,c,v=t[0],p=t[1],m=t[2],g=i[0],T=i[1],x=i[2],_=r[0],S=r[1],A=r[2];return Math.abs(v-_)<Ii&&Math.abs(p-S)<Ii&&Math.abs(m-A)<Ii?P.identity(e):(u=v-_,f=p-S,d=m-A,c=1/Math.sqrt(u*u+f*f+d*d),u*=c,f*=c,d*=c,n=T*d-x*f,a=x*u-g*d,o=g*f-T*u,c=Math.sqrt(n*n+a*a+o*o),c?(c=1/c,n*=c,a*=c,o*=c):(n=0,a=0,o=0),s=f*o-d*a,l=d*n-u*o,h=u*a-f*n,c=Math.sqrt(s*s+l*l+h*h),c?(c=1/c,s*=c,l*=c,h*=c):(s=0,l=0,h=0),e[0]=n,e[1]=s,e[2]=u,e[3]=0,e[4]=a,e[5]=l,e[6]=f,e[7]=0,e[8]=o,e[9]=h,e[10]=d,e[11]=0,e[12]=-(n*v+a*p+o*m),e[13]=-(s*v+l*p+h*m),e[14]=-(u*v+f*p+d*m),e[15]=1,e)};P.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2)+Math.pow(e[9],2)+Math.pow(e[10],2)+Math.pow(e[11],2)+Math.pow(e[12],2)+Math.pow(e[13],2)+Math.pow(e[14],2)+Math.pow(e[15],2))};var E={};E.create=function(){var e=new ke(3);return e[0]=0,e[1]=0,e[2]=0,e};E.clone=function(e){var t=new ke(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t};E.fromValues=function(e,t,r){var i=new ke(3);return i[0]=e,i[1]=t,i[2]=r,i};E.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};E.set=function(e,t,r,i){return e[0]=t,e[1]=r,e[2]=i,e};E.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e};E.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e};E.sub=E.subtract;E.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e};E.mul=E.multiply;E.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e};E.div=E.divide;E.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e};E.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e};E.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e};E.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e};E.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2];return Math.sqrt(r*r+i*i+n*n)};E.dist=E.distance;E.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2];return r*r+i*i+n*n};E.sqrDist=E.squaredDistance;E.length=function(e){var t=e[0],r=e[1],i=e[2];return Math.sqrt(t*t+r*r+i*i)};E.len=E.length;E.squaredLength=function(e){var t=e[0],r=e[1],i=e[2];return t*t+r*r+i*i};E.sqrLen=E.squaredLength;E.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e};E.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e};E.normalize=function(e,t){var r=t[0],i=t[1],n=t[2],a=r*r+i*i+n*n;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e};E.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]};E.cross=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[0],s=r[1],l=r[2];return e[0]=n*l-a*s,e[1]=a*o-i*l,e[2]=i*s-n*o,e};E.lerp=function(e,t,r,i){var n=t[0],a=t[1],o=t[2];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e[2]=o+i*(r[2]-o),e};E.random=function(e,t){t=t||1;var r=Tr()*2*Math.PI,i=Tr()*2-1,n=Math.sqrt(1-i*i)*t;return e[0]=Math.cos(r)*n,e[1]=Math.sin(r)*n,e[2]=i*t,e};E.transformMat4=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[3]*i+r[7]*n+r[11]*a+r[15];return o=o||1,e[0]=(r[0]*i+r[4]*n+r[8]*a+r[12])/o,e[1]=(r[1]*i+r[5]*n+r[9]*a+r[13])/o,e[2]=(r[2]*i+r[6]*n+r[10]*a+r[14])/o,e};E.transformMat3=function(e,t,r){var i=t[0],n=t[1],a=t[2];return e[0]=i*r[0]+n*r[3]+a*r[6],e[1]=i*r[1]+n*r[4]+a*r[7],e[2]=i*r[2]+n*r[5]+a*r[8],e};E.transformQuat=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[0],s=r[1],l=r[2],h=r[3],u=h*i+s*a-l*n,f=h*n+l*i-o*a,d=h*a+o*n-s*i,c=-o*i-s*n-l*a;return e[0]=u*h+c*-o+f*-l-d*-s,e[1]=f*h+c*-s+d*-o-u*-l,e[2]=d*h+c*-l+u*-s-f*-o,e};E.rotateX=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[0],a[1]=n[1]*Math.cos(i)-n[2]*Math.sin(i),a[2]=n[1]*Math.sin(i)+n[2]*Math.cos(i),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};E.rotateY=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[2]*Math.sin(i)+n[0]*Math.cos(i),a[1]=n[1],a[2]=n[2]*Math.cos(i)-n[0]*Math.sin(i),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};E.rotateZ=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[0]*Math.cos(i)-n[1]*Math.sin(i),a[1]=n[0]*Math.sin(i)+n[1]*Math.cos(i),a[2]=n[2],e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};E.forEach=function(){var e=E.create();return function(t,r,i,n,a,o){var s,l;for(r||(r=3),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,s=i;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}}();E.angle=function(e,t){var r=E.fromValues(e[0],e[1],e[2]),i=E.fromValues(t[0],t[1],t[2]);E.normalize(r,r),E.normalize(i,i);var n=E.dot(r,i);return n>1?0:Math.acos(n)};B.import(is);var me=P.create,Za={};function Ka(e){return e.material}function _h(e,t,r){return t.uniforms[r].value}function yh(e,t,r,i){return r!==i}function xh(e){return!0}function Qa(){}var ja={float:R.FLOAT,byte:R.BYTE,ubyte:R.UNSIGNED_BYTE,short:R.SHORT,ushort:R.UNSIGNED_SHORT};function Th(e,t,r){this.availableAttributes=e,this.availableAttributeSymbols=t,this.indicesBuffer=r,this.vao=null}function Eh(e){var t,r;this.bind=function(i){t||(t=oe.createCanvas(),t.width=t.height=1,t.getContext("2d"));var n=i.gl,a=!r;a&&(r=n.createTexture()),n.bindTexture(n.TEXTURE_2D,r),a&&n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t)},this.unbind=function(i){i.gl.bindTexture(i.gl.TEXTURE_2D,null)},this.isRenderable=function(){return!0}}var Gt=He.extend(function(){return{canvas:null,_width:100,_height:100,devicePixelRatio:typeof window<"u"&&window.devicePixelRatio||1,clearColor:[0,0,0,0],clearBit:17664,alpha:!0,depth:!0,stencil:!1,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!1,throwError:!0,gl:null,viewport:{},maxJointNumber:20,__currentFrameBuffer:null,_viewportStack:[],_clearStack:[],_sceneRendering:null}},function(){this.canvas||(this.canvas=oe.createCanvas());var e=this.canvas;try{var t={alpha:this.alpha,depth:this.depth,stencil:this.stencil,antialias:this.antialias,premultipliedAlpha:this.premultipliedAlpha,preserveDrawingBuffer:this.preserveDrawingBuffer};if(this.gl=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),!this.gl)throw new Error;this._glinfo=new $l(this.gl),this.gl.targetRenderer&&console.error("Already created a renderer"),this.gl.targetRenderer=this,this.resize()}catch(r){throw"Error creating WebGL Context "+r}this._programMgr=new $o(this),this._placeholderTexture=new Eh},{resize:function(e,t){var r=this.canvas,i=this.devicePixelRatio;e!=null?(r.style&&(r.style.width=e+"px",r.style.height=t+"px"),r.width=e*i,r.height=t*i,this._width=e,this._height=t):(this._width=r.width/i,this._height=r.height/i),this.setViewport(0,0,this._width,this._height)},getWidth:function(){return this._width},getHeight:function(){return this._height},getViewportAspect:function(){var e=this.viewport;return e.width/e.height},setDevicePixelRatio:function(e){this.devicePixelRatio=e,this.resize(this._width,this._height)},getDevicePixelRatio:function(){return this.devicePixelRatio},getGLExtension:function(e){return this._glinfo.getExtension(e)},getGLParameter:function(e){return this._glinfo.getParameter(e)},setViewport:function(e,t,r,i,n){if(typeof e=="object"){var a=e;e=a.x,t=a.y,r=a.width,i=a.height,n=a.devicePixelRatio}n=n||this.devicePixelRatio,this.gl.viewport(e*n,t*n,r*n,i*n),this.viewport={x:e,y:t,width:r,height:i,devicePixelRatio:n}},saveViewport:function(){this._viewportStack.push(this.viewport)},restoreViewport:function(){this._viewportStack.length>0&&this.setViewport(this._viewportStack.pop())},saveClear:function(){this._clearStack.push({clearBit:this.clearBit,clearColor:this.clearColor})},restoreClear:function(){if(this._clearStack.length>0){var e=this._clearStack.pop();this.clearColor=e.clearColor,this.clearBit=e.clearBit}},bindSceneRendering:function(e){this._sceneRendering=e},render:function(e,t,r,i){var n=this.gl,a=this.clearColor;if(this.clearBit){n.colorMask(!0,!0,!0,!0),n.depthMask(!0);var o=this.viewport,s=!1,l=o.devicePixelRatio;(o.width!==this._width||o.height!==this._height||l&&l!==this.devicePixelRatio||o.x||o.y)&&(s=!0,n.enable(n.SCISSOR_TEST),n.scissor(o.x*l,o.y*l,o.width*l,o.height*l)),n.clearColor(a[0],a[1],a[2],a[3]),n.clear(this.clearBit),s&&n.disable(n.SCISSOR_TEST)}if(r||e.update(!1),e.updateLights(),t=t||e.getMainCamera(),!t){console.error("Can't find camera in the scene.");return}t.update();var h=e.updateRenderList(t,!0);this._sceneRendering=e;var u=h.opaque,f=h.transparent,d=e.material;e.trigger("beforerender",this,e,t,h),i?(this.renderPreZ(u,e,t),n.depthFunc(n.LEQUAL)):n.depthFunc(n.LESS);for(var c=me(),v=E.create(),p=0;p<f.length;p++){var m=f[p];P.multiplyAffine(c,t.viewMatrix.array,m.worldTransform.array),E.transformMat4(v,m.position.array,c),m.__depth=v[2]}this.renderPass(u,t,{getMaterial:function(g){return d||g.material},sortCompare:this.opaqueSortCompare}),this.renderPass(f,t,{getMaterial:function(g){return d||g.material},sortCompare:this.transparentSortCompare}),e.trigger("afterrender",this,e,t,h),this._sceneRendering=null},getProgram:function(e,t,r){return t=t||e.material,this._programMgr.getProgram(e,t,r)},validateProgram:function(e){if(e.__error){var t=e.__error;if(Za[e.__uid__])return;if(Za[e.__uid__]=!0,this.throwError)throw new Error(t);this.trigger("error",t)}},updatePrograms:function(e,t,r){var i=r&&r.getMaterial||Ka;t=t||null;for(var n=0;n<e.length;n++){var a=e[n],o=i.call(this,a);if(n>0){var s=e[n-1],l=s.joints?s.joints.length:0,h=a.joints?a.joints.length:0;if(h===l&&a.material===s.material&&a.lightGroup===s.lightGroup){a.__program=s.__program;continue}}var u=this._programMgr.getProgram(a,o,t);this.validateProgram(u),a.__program=u}},renderPass:function(e,t,r){this.trigger("beforerenderpass",this,e,t,r),r=r||{},r.getMaterial=r.getMaterial||Ka,r.getUniform=r.getUniform||_h,r.isMaterialChanged=r.isMaterialChanged||yh,r.beforeRender=r.beforeRender||Qa,r.afterRender=r.afterRender||Qa;var i=r.ifRender||xh;this.updatePrograms(e,this._sceneRendering,r),r.sortCompare&&e.sort(r.sortCompare);var n=this.viewport,a=n.devicePixelRatio,o=[n.x*a,n.y*a,n.width*a,n.height*a],s=this.devicePixelRatio,l=this.__currentFrameBuffer?[this.__currentFrameBuffer.getTextureWidth(),this.__currentFrameBuffer.getTextureHeight()]:[this._width*s,this._height*s],h=[o[2],o[3]],u=Date.now();t?(P.copy(pe.VIEW,t.viewMatrix.array),P.copy(pe.PROJECTION,t.projectionMatrix.array),P.copy(pe.VIEWINVERSE,t.worldTransform.array)):(P.identity(pe.VIEW),P.identity(pe.PROJECTION),P.identity(pe.VIEWINVERSE)),P.multiply(pe.VIEWPROJECTION,pe.PROJECTION,pe.VIEW),P.invert(pe.PROJECTIONINVERSE,pe.PROJECTION),P.invert(pe.VIEWPROJECTIONINVERSE,pe.VIEWPROJECTION);for(var f=this.gl,d=this._sceneRendering,c,v,p,m,g,T,x,_,S,A,b,w,L=null,I=0;I<e.length;I++){var M=e[I],N=M.worldTransform!=null,U;if(i(M)){N&&(U=M.isSkinnedMesh&&M.isSkinnedMesh()?M.offsetMatrix?M.offsetMatrix.array:pe.IDENTITY:M.worldTransform.array);var D=M.geometry,z=r.getMaterial.call(this,M),H=M.__program,W=z.shader,V=D.__uid__+"-"+H.__uid__,ne=V!==A;A=V,ne&&L&&L.bindVertexArrayOES(null),N&&(P.copy(pe.WORLD,U),P.multiply(pe.WORLDVIEWPROJECTION,pe.VIEWPROJECTION,U),P.multiplyAffine(pe.WORLDVIEW,pe.VIEW,U),(W.matrixSemantics.WORLDINVERSE||W.matrixSemantics.WORLDINVERSETRANSPOSE)&&P.invert(pe.WORLDINVERSE,U),(W.matrixSemantics.WORLDVIEWINVERSE||W.matrixSemantics.WORLDVIEWINVERSETRANSPOSE)&&P.invert(pe.WORLDVIEWINVERSE,pe.WORLDVIEW),(W.matrixSemantics.WORLDVIEWPROJECTIONINVERSE||W.matrixSemantics.WORLDVIEWPROJECTIONINVERSETRANSPOSE)&&P.invert(pe.WORLDVIEWPROJECTIONINVERSE,pe.WORLDVIEWPROJECTION)),M.beforeRender&&M.beforeRender(this),r.beforeRender.call(this,M,z,c);var k=H!==v;k?(H.bind(this),H.setUniformOfSemantic(f,"VIEWPORT",o),H.setUniformOfSemantic(f,"WINDOW_SIZE",l),t&&(H.setUniformOfSemantic(f,"NEAR",t.near),H.setUniformOfSemantic(f,"FAR",t.far)),H.setUniformOfSemantic(f,"DEVICEPIXELRATIO",a),H.setUniformOfSemantic(f,"TIME",u),H.setUniformOfSemantic(f,"VIEWPORT_SIZE",h),d&&d.setLightUniforms(H,M.lightGroup,this)):H=v,(k||r.isMaterialChanged(M,p,z,c))&&(z.depthTest!==m&&(z.depthTest?f.enable(f.DEPTH_TEST):f.disable(f.DEPTH_TEST),m=z.depthTest),z.depthMask!==g&&(f.depthMask(z.depthMask),g=z.depthMask),z.transparent!==S&&(z.transparent?f.enable(f.BLEND):f.disable(f.BLEND),S=z.transparent),z.transparent&&(z.blend?z.blend(f):(f.blendEquationSeparate(f.FUNC_ADD,f.FUNC_ADD),f.blendFuncSeparate(f.SRC_ALPHA,f.ONE_MINUS_SRC_ALPHA,f.ONE,f.ONE_MINUS_SRC_ALPHA))),w=this._bindMaterial(M,z,H,p||null,c||null,v||null,r.getUniform),c=z);var ue=W.matrixSemanticKeys;if(N)for(var ae=0;ae<ue.length;ae++){var de=ue[ae],ve=W.matrixSemantics[de],ee=pe[de];if(ve.isTranspose){var Me=pe[ve.semanticNoTranspose];P.transpose(ee,Me)}H.setUniform(f,ve.type,ve.symbol,ee)}M.cullFace!==x&&(x=M.cullFace,f.cullFace(x)),M.frontFace!==_&&(_=M.frontFace,f.frontFace(_)),M.culling!==T&&(T=M.culling,T?f.enable(f.CULL_FACE):f.disable(f.CULL_FACE)),this._updateSkeleton(M,H,w),ne&&(b=this._bindVAO(L,W,D,H)),this._renderObject(M,b,H),r.afterRender(this,M),M.afterRender&&M.afterRender(this),v=H,p=M}}this.trigger("afterrenderpass",this,e,t,r)},getMaxJointNumber:function(){return this.maxJointNumber},_updateSkeleton:function(e,t,r){var i=this.gl,n=e.skeleton;if(n)if(n.update(),e.joints.length>this.getMaxJointNumber()){var a=n.getSubSkinMatricesTexture(e.__uid__,e.joints);t.useTextureSlot(this,a,r),t.setUniform(i,"1i","skinMatricesTexture",r),t.setUniform(i,"1f","skinMatricesTextureSize",a.width)}else{var o=n.getSubSkinMatrices(e.__uid__,e.joints);t.setUniformOfSemantic(i,"SKIN_MATRIX",o)}},_renderObject:function(e,t,r){var i=this.gl,n=e.geometry,a=e.mode;a==null&&(a=4);var o=null,s=e.isInstancedMesh&&e.isInstancedMesh();if(s&&(o=this.getGLExtension("ANGLE_instanced_arrays"),!o)){console.warn("Device not support ANGLE_instanced_arrays extension");return}var l;if(s&&(l=this._bindInstancedAttributes(e,r,o)),t.indicesBuffer){var h=this.getGLExtension("OES_element_index_uint"),u=h&&n.indices instanceof Uint32Array,f=u?i.UNSIGNED_INT:i.UNSIGNED_SHORT;s?o.drawElementsInstancedANGLE(a,t.indicesBuffer.count,f,0,e.getInstanceCount()):i.drawElements(a,t.indicesBuffer.count,f,0)}else s?o.drawArraysInstancedANGLE(a,0,n.vertexCount,e.getInstanceCount()):i.drawArrays(a,0,n.vertexCount);if(s)for(var d=0;d<l.length;d++)i.disableVertexAttribArray(l[d])},_bindInstancedAttributes:function(e,t,r){for(var i=this.gl,n=e.getInstancedAttributesBuffers(this),a=[],o=0;o<n.length;o++){var s=n[o],l=t.getAttribLocation(i,s.symbol);if(!(l<0)){var h=ja[s.type]||i.FLOAT;i.enableVertexAttribArray(l),i.bindBuffer(i.ARRAY_BUFFER,s.buffer),i.vertexAttribPointer(l,s.size,h,!1,0,0),r.vertexAttribDivisorANGLE(l,s.divisor),a.push(l)}}return a},_bindMaterial:function(e,t,r,i,n,a,o){for(var s=this.gl,l=a===r,h=r.currentTextureSlot(),u=t.getEnabledUniforms(),f=t.getTextureUniforms(),d=this._placeholderTexture,c=0;c<f.length;c++){var v=f[c],p=o(e,t,v),m=t.uniforms[v].type;if(m==="t"&&p)p.__slot=-1;else if(m==="tv")for(var g=0;g<p.length;g++)p[g]&&(p[g].__slot=-1)}d.__slot=-1;for(var c=0;c<u.length;c++){var v=u[c],T=t.uniforms[v],p=o(e,t,v),m=T.type,x=m==="t";if(x&&(!p||!p.isRenderable())&&(p=d),n&&l){var _=o(i,n,v);if(x&&(!_||!_.isRenderable())&&(_=d),_===p){if(x)r.takeCurrentTextureSlot(this,null);else if(m==="tv"&&p)for(var g=0;g<p.length;g++)r.takeCurrentTextureSlot(this,null);continue}}if(p!=null)if(x)if(p.__slot<0){var S=r.currentTextureSlot(),A=r.setUniform(s,"1i",v,S);A&&(r.takeCurrentTextureSlot(this,p),p.__slot=S)}else r.setUniform(s,"1i",v,p.__slot);else if(Array.isArray(p)){if(p.length===0)continue;if(m==="tv"){if(!r.hasUniform(v))continue;for(var b=[],g=0;g<p.length;g++){var w=p[g];if(w.__slot<0){var S=r.currentTextureSlot();b.push(S),r.takeCurrentTextureSlot(this,w),w.__slot=S}else b.push(w.__slot)}r.setUniform(s,"1iv",v,b)}else r.setUniform(s,T.type,v,p)}else r.setUniform(s,T.type,v,p)}var L=r.currentTextureSlot();return r.resetTextureSlot(h),L},_bindVAO:function(e,t,r,i){var n=!r.dynamic,a=this.gl,o=this.__uid__+"-"+i.__uid__,s=r.__vaoCache[o];if(!s){var l=r.getBufferChunks(this);if(!l||!l.length)return;for(var h=l[0],u=h.attributeBuffers,_=h.indicesBuffer,x=[],f=[],d=0;d<u.length;d++){var c=u[d],v=c.name,p=c.semantic,m;if(p){var g=t.attributeSemantics[p];m=g&&g.symbol}else m=v;m&&i.attributes[m]&&(x.push(c),f.push(m))}s=new Th(x,f,_),n&&(r.__vaoCache[o]=s)}var T=!0;e&&n&&(s.vao==null?s.vao=e.createVertexArrayOES():T=!1,e.bindVertexArrayOES(s.vao));var x=s.availableAttributes,_=s.indicesBuffer;if(T){for(var S=i.enableAttributes(this,s.availableAttributeSymbols,e&&n&&s),d=0;d<x.length;d++){var A=S[d];if(A!==-1){var c=x[d],b=c.buffer,w=c.size,L=ja[c.type]||a.FLOAT;a.bindBuffer(a.ARRAY_BUFFER,b),a.vertexAttribPointer(A,w,L,!1,0,0)}}r.isUseIndices()&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,_.buffer)}return s},renderPreZ:function(e,t,r){var i=this.gl,n=this._prezMaterial||new ut({shader:new B(B.source("clay.prez.vertex"),B.source("clay.prez.fragment"))});this._prezMaterial=n,i.colorMask(!1,!1,!1,!1),i.depthMask(!0),this.renderPass(e,r,{ifRender:function(a){return!a.ignorePreZ},isMaterialChanged:function(a,o){var s=a.material,l=o.material;return s.get("diffuseMap")!==l.get("diffuseMap")||(s.get("alphaCutoff")||0)!==(l.get("alphaCutoff")||0)},getUniform:function(a,o,s){if(s==="alphaMap")return a.material.get("diffuseMap");if(s==="alphaCutoff"){if(a.material.isDefined("fragment","ALPHA_TEST")&&a.material.get("diffuseMap")){var l=a.material.get("alphaCutoff");return l||0}return 0}else return s==="uvRepeat"?a.material.get("uvRepeat"):s==="uvOffset"?a.material.get("uvOffset"):o.get(s)},getMaterial:function(){return n},sort:this.opaqueSortCompare}),i.colorMask(!0,!0,!0,!0),i.depthMask(!0)},disposeScene:function(e){this.disposeNode(e,!0,!0),e.dispose()},disposeNode:function(e,t,r){e.getParent()&&e.getParent().remove(e);var i={};e.traverse(function(n){var a=n.material;if(n.geometry&&t&&n.geometry.dispose(this),r&&a&&!i[a.__uid__]){for(var o=a.getTextureUniforms(),s=0;s<o.length;s++){var l=o[s],h=a.uniforms[l].value,u=a.uniforms[l].type;if(h){if(u==="t")h.dispose&&h.dispose(this);else if(u==="tv")for(var f=0;f<h.length;f++)h[f]&&h[f].dispose&&h[f].dispose(this)}}i[a.__uid__]=!0}n.dispose&&n.dispose(this)},this)},disposeGeometry:function(e){e.dispose(this)},disposeTexture:function(e){e.dispose(this)},disposeFrameBuffer:function(e){e.dispose(this)},dispose:function(){},screenToNDC:function(e,t,r){r||(r=new nt),t=this._height-t;var i=this.viewport,n=r.array;return n[0]=(e-i.x)/i.width,n[0]=n[0]*2-1,n[1]=(t-i.y)/i.height,n[1]=n[1]*2-1,r}});Gt.opaqueSortCompare=Gt.prototype.opaqueSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.renderOrder-t.renderOrder};Gt.transparentSortCompare=Gt.prototype.transparentSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__depth===t.__depth?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.__depth-t.__depth:e.renderOrder-t.renderOrder};var pe={IDENTITY:me(),WORLD:me(),VIEW:me(),PROJECTION:me(),WORLDVIEW:me(),VIEWPROJECTION:me(),WORLDVIEWPROJECTION:me(),WORLDINVERSE:me(),VIEWINVERSE:me(),PROJECTIONINVERSE:me(),WORLDVIEWINVERSE:me(),VIEWPROJECTIONINVERSE:me(),WORLDVIEWPROJECTIONINVERSE:me(),WORLDTRANSPOSE:me(),VIEWTRANSPOSE:me(),PROJECTIONTRANSPOSE:me(),WORLDVIEWTRANSPOSE:me(),VIEWPROJECTIONTRANSPOSE:me(),WORLDVIEWPROJECTIONTRANSPOSE:me(),WORLDINVERSETRANSPOSE:me(),VIEWINVERSETRANSPOSE:me(),PROJECTIONINVERSETRANSPOSE:me(),WORLDVIEWINVERSETRANSPOSE:me(),VIEWPROJECTIONINVERSETRANSPOSE:me(),WORLDVIEWPROJECTIONINVERSETRANSPOSE:me()};Gt.COLOR_BUFFER_BIT=R.COLOR_BUFFER_BIT;Gt.DEPTH_BUFFER_BIT=R.DEPTH_BUFFER_BIT;Gt.STENCIL_BUFFER_BIT=R.STENCIL_BUFFER_BIT;const ei=Gt;var C=function(e,t,r){e=e||0,t=t||0,r=r||0,this.array=E.fromValues(e,t,r),this._dirty=!0};C.prototype={constructor:C,add:function(e){return E.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this._dirty=!0,this},clone:function(){return new C(this.x,this.y,this.z)},copy:function(e){return E.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return E.cross(this.array,e.array,t.array),this._dirty=!0,this},dist:function(e){return E.dist(this.array,e.array)},distance:function(e){return E.distance(this.array,e.array)},div:function(e){return E.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return E.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return E.dot(this.array,e.array)},len:function(){return E.len(this.array)},length:function(){return E.length(this.array)},lerp:function(e,t,r){return E.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return E.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return E.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return E.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return E.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return E.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return E.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return E.random(this.array,e),this._dirty=!0,this},scale:function(e){return E.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return E.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return E.sqrDist(this.array,e.array)},squaredDistance:function(e){return E.squaredDistance(this.array,e.array)},sqrLen:function(){return E.sqrLen(this.array)},squaredLength:function(){return E.squaredLength(this.array)},sub:function(e){return E.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return E.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return E.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return E.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return E.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},applyProjection:function(e){var t=this.array;if(e=e.array,e[15]===0){var r=-1/t[2];t[0]=e[0]*t[0]*r,t[1]=e[5]*t[1]*r,t[2]=(e[10]*t[2]+e[14])*r}else t[0]=e[0]*t[0]+e[12],t[1]=e[5]*t[1]+e[13],t[2]=e[10]*t[2]+e[14];return this._dirty=!0,this},eulerFromQuat:function(e,t){C.eulerFromQuat(this,e,t)},eulerFromMat3:function(e,t){C.eulerFromMat3(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var xi=Object.defineProperty;if(xi){var _n=C.prototype;xi(_n,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),xi(_n,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),xi(_n,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}})}C.add=function(e,t,r){return E.add(e.array,t.array,r.array),e._dirty=!0,e};C.set=function(e,t,r,i){E.set(e.array,t,r,i),e._dirty=!0};C.copy=function(e,t){return E.copy(e.array,t.array),e._dirty=!0,e};C.cross=function(e,t,r){return E.cross(e.array,t.array,r.array),e._dirty=!0,e};C.dist=function(e,t){return E.distance(e.array,t.array)};C.distance=C.dist;C.div=function(e,t,r){return E.divide(e.array,t.array,r.array),e._dirty=!0,e};C.divide=C.div;C.dot=function(e,t){return E.dot(e.array,t.array)};C.len=function(e){return E.length(e.array)};C.lerp=function(e,t,r,i){return E.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};C.min=function(e,t,r){return E.min(e.array,t.array,r.array),e._dirty=!0,e};C.max=function(e,t,r){return E.max(e.array,t.array,r.array),e._dirty=!0,e};C.mul=function(e,t,r){return E.multiply(e.array,t.array,r.array),e._dirty=!0,e};C.multiply=C.mul;C.negate=function(e,t){return E.negate(e.array,t.array),e._dirty=!0,e};C.normalize=function(e,t){return E.normalize(e.array,t.array),e._dirty=!0,e};C.random=function(e,t){return E.random(e.array,t),e._dirty=!0,e};C.scale=function(e,t,r){return E.scale(e.array,t.array,r),e._dirty=!0,e};C.scaleAndAdd=function(e,t,r,i){return E.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};C.sqrDist=function(e,t){return E.sqrDist(e.array,t.array)};C.squaredDistance=C.sqrDist;C.sqrLen=function(e){return E.sqrLen(e.array)};C.squaredLength=C.sqrLen;C.sub=function(e,t,r){return E.subtract(e.array,t.array,r.array),e._dirty=!0,e};C.subtract=C.sub;C.transformMat3=function(e,t,r){return E.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};C.transformMat4=function(e,t,r){return E.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};C.transformQuat=function(e,t,r){return E.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};function lt(e,t,r){return e<t?t:e>r?r:e}var fe=Math.atan2,ht=Math.asin,dr=Math.abs;C.eulerFromQuat=function(e,t,d){e._dirty=!0,t=t.array;var i=e.array,n=t[0],a=t[1],o=t[2],s=t[3],l=n*n,h=a*a,u=o*o,f=s*s,d=(d||"XYZ").toUpperCase();switch(d){case"XYZ":i[0]=fe(2*(n*s-a*o),f-l-h+u),i[1]=ht(lt(2*(n*o+a*s),-1,1)),i[2]=fe(2*(o*s-n*a),f+l-h-u);break;case"YXZ":i[0]=ht(lt(2*(n*s-a*o),-1,1)),i[1]=fe(2*(n*o+a*s),f-l-h+u),i[2]=fe(2*(n*a+o*s),f-l+h-u);break;case"ZXY":i[0]=ht(lt(2*(n*s+a*o),-1,1)),i[1]=fe(2*(a*s-o*n),f-l-h+u),i[2]=fe(2*(o*s-n*a),f-l+h-u);break;case"ZYX":i[0]=fe(2*(n*s+o*a),f-l-h+u),i[1]=ht(lt(2*(a*s-n*o),-1,1)),i[2]=fe(2*(n*a+o*s),f+l-h-u);break;case"YZX":i[0]=fe(2*(n*s-o*a),f-l+h-u),i[1]=fe(2*(a*s-n*o),f+l-h-u),i[2]=ht(lt(2*(n*a+o*s),-1,1));break;case"XZY":i[0]=fe(2*(n*s+a*o),f-l+h-u),i[1]=fe(2*(n*o+a*s),f+l-h-u),i[2]=ht(lt(2*(o*s-n*a),-1,1));break;default:console.warn("Unkown order: "+d)}return e};C.eulerFromMat3=function(e,t,v){var i=t.array,n=i[0],a=i[3],o=i[6],s=i[1],l=i[4],h=i[7],u=i[2],f=i[5],d=i[8],c=e.array,v=(v||"XYZ").toUpperCase();switch(v){case"XYZ":c[1]=ht(lt(o,-1,1)),dr(o)<.99999?(c[0]=fe(-h,d),c[2]=fe(-a,n)):(c[0]=fe(f,l),c[2]=0);break;case"YXZ":c[0]=ht(-lt(h,-1,1)),dr(h)<.99999?(c[1]=fe(o,d),c[2]=fe(s,l)):(c[1]=fe(-u,n),c[2]=0);break;case"ZXY":c[0]=ht(lt(f,-1,1)),dr(f)<.99999?(c[1]=fe(-u,d),c[2]=fe(-a,l)):(c[1]=0,c[2]=fe(s,n));break;case"ZYX":c[1]=ht(-lt(u,-1,1)),dr(u)<.99999?(c[0]=fe(f,d),c[2]=fe(s,n)):(c[0]=0,c[2]=fe(-a,l));break;case"YZX":c[2]=ht(lt(s,-1,1)),dr(s)<.99999?(c[0]=fe(-h,l),c[1]=fe(-u,n)):(c[0]=0,c[1]=fe(o,d));break;case"XZY":c[2]=ht(-lt(a,-1,1)),dr(a)<.99999?(c[0]=fe(f,l),c[1]=fe(o,n)):(c[0]=fe(-h,d),c[1]=0);break;default:console.warn("Unkown order: "+v)}return e._dirty=!0,e};Object.defineProperties(C,{POSITIVE_X:{get:function(){return new C(1,0,0)}},NEGATIVE_X:{get:function(){return new C(-1,0,0)}},POSITIVE_Y:{get:function(){return new C(0,1,0)}},NEGATIVE_Y:{get:function(){return new C(0,-1,0)}},POSITIVE_Z:{get:function(){return new C(0,0,1)}},NEGATIVE_Z:{get:function(){return new C(0,0,-1)}},UP:{get:function(){return new C(0,1,0)}},ZERO:{get:function(){return new C}}});var yn=1e-5,Ni=function(e,t){this.origin=e||new C,this.direction=t||new C};Ni.prototype={constructor:Ni,intersectPlane:function(e,t){var r=e.normal.array,i=e.distance,n=this.origin.array,a=this.direction.array,o=E.dot(r,a);if(o===0)return null;t||(t=new C);var s=(E.dot(r,n)-i)/o;return E.scaleAndAdd(t.array,n,a,-s),t._dirty=!0,t},mirrorAgainstPlane:function(e){var t=E.dot(e.normal.array,this.direction.array);E.scaleAndAdd(this.direction.array,this.direction.array,e.normal.array,-t*2),this.direction._dirty=!0},distanceToPoint:function(){var e=E.create();return function(t){E.sub(e,t,this.origin.array);var r=E.dot(e,this.direction.array);if(r<0)return E.distance(this.origin.array,t);var i=E.lenSquared(e);return Math.sqrt(i-r*r)}}(),intersectSphere:function(){var e=E.create();return function(t,r,i){var n=this.origin.array,a=this.direction.array;t=t.array,E.sub(e,t,n);var o=E.dot(e,a),s=E.squaredLength(e),l=s-o*o,h=r*r;if(!(l>h)){var u=Math.sqrt(h-l),f=o-u,d=o+u;return i||(i=new C),f<0?d<0?null:(E.scaleAndAdd(i.array,n,a,d),i):(E.scaleAndAdd(i.array,n,a,f),i)}}}(),intersectBoundingBox:function(e,t){var r=this.direction.array,i=this.origin.array,n=e.min.array,a=e.max.array,o=1/r[0],s=1/r[1],l=1/r[2],h,u,f,d,c,v;if(o>=0?(h=(n[0]-i[0])*o,u=(a[0]-i[0])*o):(u=(n[0]-i[0])*o,h=(a[0]-i[0])*o),s>=0?(f=(n[1]-i[1])*s,d=(a[1]-i[1])*s):(d=(n[1]-i[1])*s,f=(a[1]-i[1])*s),h>d||f>u||((f>h||h!==h)&&(h=f),(d<u||u!==u)&&(u=d),l>=0?(c=(n[2]-i[2])*l,v=(a[2]-i[2])*l):(v=(n[2]-i[2])*l,c=(a[2]-i[2])*l),h>v||c>u)||((c>h||h!==h)&&(h=c),(v<u||u!==u)&&(u=v),u<0))return null;var p=h>=0?h:u;return t||(t=new C),E.scaleAndAdd(t.array,i,r,p),t},intersectTriangle:function(){var e=E.create(),t=E.create(),r=E.create(),i=E.create();return function(n,a,o,s,l,h){var u=this.direction.array,f=this.origin.array;n=n.array,a=a.array,o=o.array,E.sub(e,a,n),E.sub(t,o,n),E.cross(i,t,u);var d=E.dot(e,i);if(s){if(d>-yn)return null}else if(d>-yn&&d<yn)return null;E.sub(r,f,n);var c=E.dot(i,r)/d;if(c<0||c>1)return null;E.cross(i,e,r);var v=E.dot(u,i)/d;if(v<0||v>1||c+v>1)return null;E.cross(i,e,t);var p=-E.dot(r,i)/d;return p<0?null:(l||(l=new C),h&&C.set(h,1-c-v,c,v),E.scaleAndAdd(l.array,f,u,p),l)}}(),applyTransform:function(e){C.add(this.direction,this.direction,this.origin),C.transformMat4(this.origin,this.origin,e),C.transformMat4(this.direction,this.direction,e),C.sub(this.direction,this.direction,this.origin),C.normalize(this.direction,this.direction)},copy:function(e){C.copy(this.origin,e.origin),C.copy(this.direction,e.direction)},clone:function(){var e=new Ni;return e.copy(this),e}};const Gi=Ni;var j={};j.create=function(){var e=new ke(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e};j.clone=function(e){var t=new ke(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};j.fromValues=function(e,t,r,i){var n=new ke(4);return n[0]=e,n[1]=t,n[2]=r,n[3]=i,n};j.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};j.set=function(e,t,r,i,n){return e[0]=t,e[1]=r,e[2]=i,e[3]=n,e};j.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e};j.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e};j.sub=j.subtract;j.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e};j.mul=j.multiply;j.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e};j.div=j.divide;j.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e};j.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e};j.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e};j.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e[3]=t[3]+r[3]*i,e};j.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2],a=t[3]-e[3];return Math.sqrt(r*r+i*i+n*n+a*a)};j.dist=j.distance;j.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2],a=t[3]-e[3];return r*r+i*i+n*n+a*a};j.sqrDist=j.squaredDistance;j.length=function(e){var t=e[0],r=e[1],i=e[2],n=e[3];return Math.sqrt(t*t+r*r+i*i+n*n)};j.len=j.length;j.squaredLength=function(e){var t=e[0],r=e[1],i=e[2],n=e[3];return t*t+r*r+i*i+n*n};j.sqrLen=j.squaredLength;j.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e};j.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e};j.normalize=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r*r+i*i+n*n+a*a;return o>0&&(o=1/Math.sqrt(o),e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e[3]=t[3]*o),e};j.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]};j.lerp=function(e,t,r,i){var n=t[0],a=t[1],o=t[2],s=t[3];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e[2]=o+i*(r[2]-o),e[3]=s+i*(r[3]-s),e};j.random=function(e,t){return t=t||1,e[0]=Tr(),e[1]=Tr(),e[2]=Tr(),e[3]=Tr(),j.normalize(e,e),j.scale(e,e,t),e};j.transformMat4=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3];return e[0]=r[0]*i+r[4]*n+r[8]*a+r[12]*o,e[1]=r[1]*i+r[5]*n+r[9]*a+r[13]*o,e[2]=r[2]*i+r[6]*n+r[10]*a+r[14]*o,e[3]=r[3]*i+r[7]*n+r[11]*a+r[15]*o,e};j.transformQuat=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[0],s=r[1],l=r[2],h=r[3],u=h*i+s*a-l*n,f=h*n+l*i-o*a,d=h*a+o*n-s*i,c=-o*i-s*n-l*a;return e[0]=u*h+c*-o+f*-l-d*-s,e[1]=f*h+c*-s+d*-o-u*-l,e[2]=d*h+c*-l+u*-s-f*-o,e};j.forEach=function(){var e=j.create();return function(t,r,i,n,a,o){var s,l;for(r||(r=4),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,s=i;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],e[3]=t[s+3],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3];return t}}();const G=j;var q={};q.create=function(){var e=new ke(9);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};q.fromMat4=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e};q.clone=function(e){var t=new ke(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t};q.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};q.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};q.transpose=function(e,t){if(e===t){var r=t[1],i=t[2],n=t[5];e[1]=t[3],e[2]=t[6],e[3]=r,e[5]=t[7],e[6]=i,e[7]=n}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e};q.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],h=t[7],u=t[8],f=u*o-s*h,d=-u*a+s*l,c=h*a-o*l,v=r*f+i*d+n*c;return v?(v=1/v,e[0]=f*v,e[1]=(-u*i+n*h)*v,e[2]=(s*i-n*o)*v,e[3]=d*v,e[4]=(u*r-n*l)*v,e[5]=(-s*r+n*a)*v,e[6]=c*v,e[7]=(-h*r+i*l)*v,e[8]=(o*r-i*a)*v,e):null};q.adjoint=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],h=t[7],u=t[8];return e[0]=o*u-s*h,e[1]=n*h-i*u,e[2]=i*s-n*o,e[3]=s*l-a*u,e[4]=r*u-n*l,e[5]=n*a-r*s,e[6]=a*h-o*l,e[7]=i*l-r*h,e[8]=r*o-i*a,e};q.determinant=function(e){var t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],o=e[5],s=e[6],l=e[7],h=e[8];return t*(h*a-o*l)+r*(-h*n+o*s)+i*(l*n-a*s)};q.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],h=t[6],u=t[7],f=t[8],d=r[0],c=r[1],v=r[2],p=r[3],m=r[4],g=r[5],T=r[6],x=r[7],_=r[8];return e[0]=d*i+c*o+v*h,e[1]=d*n+c*s+v*u,e[2]=d*a+c*l+v*f,e[3]=p*i+m*o+g*h,e[4]=p*n+m*s+g*u,e[5]=p*a+m*l+g*f,e[6]=T*i+x*o+_*h,e[7]=T*n+x*s+_*u,e[8]=T*a+x*l+_*f,e};q.mul=q.multiply;q.translate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],h=t[6],u=t[7],f=t[8],d=r[0],c=r[1];return e[0]=i,e[1]=n,e[2]=a,e[3]=o,e[4]=s,e[5]=l,e[6]=d*i+c*o+h,e[7]=d*n+c*s+u,e[8]=d*a+c*l+f,e};q.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],h=t[6],u=t[7],f=t[8],d=Math.sin(r),c=Math.cos(r);return e[0]=c*i+d*o,e[1]=c*n+d*s,e[2]=c*a+d*l,e[3]=c*o-d*i,e[4]=c*s-d*n,e[5]=c*l-d*a,e[6]=h,e[7]=u,e[8]=f,e};q.scale=function(e,t,r){var i=r[0],n=r[1];return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=n*t[3],e[4]=n*t[4],e[5]=n*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};q.fromMat2d=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e};q.fromQuat=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r+r,s=i+i,l=n+n,h=r*o,u=i*o,f=i*s,d=n*o,c=n*s,v=n*l,p=a*o,m=a*s,g=a*l;return e[0]=1-f-v,e[3]=u-g,e[6]=d+m,e[1]=u+g,e[4]=1-h-v,e[7]=c-p,e[2]=d-m,e[5]=c+p,e[8]=1-h-f,e};q.normalFromMat4=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],h=t[7],u=t[8],f=t[9],d=t[10],c=t[11],v=t[12],p=t[13],m=t[14],g=t[15],T=r*s-i*o,x=r*l-n*o,_=r*h-a*o,S=i*l-n*s,A=i*h-a*s,b=n*h-a*l,w=u*p-f*v,L=u*m-d*v,I=u*g-c*v,M=f*m-d*p,N=f*g-c*p,U=d*g-c*m,D=T*U-x*N+_*M+S*I-A*L+b*w;return D?(D=1/D,e[0]=(s*U-l*N+h*M)*D,e[1]=(l*I-o*U-h*L)*D,e[2]=(o*N-s*I+h*w)*D,e[3]=(n*N-i*U-a*M)*D,e[4]=(r*U-n*I+a*L)*D,e[5]=(i*I-r*N-a*w)*D,e[6]=(p*b-m*A+g*S)*D,e[7]=(m*_-v*b-g*x)*D,e[8]=(v*A-p*_+g*T)*D,e):null};q.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2))};var ie={};ie.create=function(){var e=new ke(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};ie.rotationTo=function(){var e=E.create(),t=E.fromValues(1,0,0),r=E.fromValues(0,1,0);return function(i,n,a){var o=E.dot(n,a);return o<-.999999?(E.cross(e,t,n),E.length(e)<1e-6&&E.cross(e,r,n),E.normalize(e,e),ie.setAxisAngle(i,e,Math.PI),i):o>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(E.cross(e,n,a),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=1+o,ie.normalize(i,i))}}();ie.setAxes=function(){var e=q.create();return function(t,r,i,n){return e[0]=i[0],e[3]=i[1],e[6]=i[2],e[1]=n[0],e[4]=n[1],e[7]=n[2],e[2]=-r[0],e[5]=-r[1],e[8]=-r[2],ie.normalize(t,ie.fromMat3(t,e))}}();ie.clone=G.clone;ie.fromValues=G.fromValues;ie.copy=G.copy;ie.set=G.set;ie.identity=function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};ie.setAxisAngle=function(e,t,r){r=r*.5;var i=Math.sin(r);return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=Math.cos(r),e};ie.add=G.add;ie.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=r[0],l=r[1],h=r[2],u=r[3];return e[0]=i*u+o*s+n*h-a*l,e[1]=n*u+o*l+a*s-i*h,e[2]=a*u+o*h+i*l-n*s,e[3]=o*u-i*s-n*l-a*h,e};ie.mul=ie.multiply;ie.scale=G.scale;ie.rotateX=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+o*s,e[1]=n*l+a*s,e[2]=a*l-n*s,e[3]=o*l-i*s,e};ie.rotateY=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l-a*s,e[1]=n*l+o*s,e[2]=a*l+i*s,e[3]=o*l-n*s,e};ie.rotateZ=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+n*s,e[1]=n*l-i*s,e[2]=a*l+o*s,e[3]=o*l-a*s,e};ie.calculateW=function(e,t){var r=t[0],i=t[1],n=t[2];return e[0]=r,e[1]=i,e[2]=n,e[3]=Math.sqrt(Math.abs(1-r*r-i*i-n*n)),e};ie.dot=G.dot;ie.lerp=G.lerp;ie.slerp=function(e,t,r,i){var n=t[0],a=t[1],o=t[2],s=t[3],l=r[0],h=r[1],u=r[2],f=r[3],d,c,v,p,m;return c=n*l+a*h+o*u+s*f,c<0&&(c=-c,l=-l,h=-h,u=-u,f=-f),1-c>1e-6?(d=Math.acos(c),v=Math.sin(d),p=Math.sin((1-i)*d)/v,m=Math.sin(i*d)/v):(p=1-i,m=i),e[0]=p*n+m*l,e[1]=p*a+m*h,e[2]=p*o+m*u,e[3]=p*s+m*f,e};ie.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r*r+i*i+n*n+a*a,s=o?1/o:0;return e[0]=-r*s,e[1]=-i*s,e[2]=-n*s,e[3]=a*s,e};ie.conjugate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e};ie.length=G.length;ie.len=ie.length;ie.squaredLength=G.squaredLength;ie.sqrLen=ie.squaredLength;ie.normalize=G.normalize;ie.fromMat3=function(e,t){var r=t[0]+t[4]+t[8],i;if(r>0)i=Math.sqrt(r+1),e[3]=.5*i,i=.5/i,e[0]=(t[5]-t[7])*i,e[1]=(t[6]-t[2])*i,e[2]=(t[1]-t[3])*i;else{var n=0;t[4]>t[0]&&(n=1),t[8]>t[n*3+n]&&(n=2);var a=(n+1)%3,o=(n+2)%3;i=Math.sqrt(t[n*3+n]-t[a*3+a]-t[o*3+o]+1),e[n]=.5*i,i=.5/i,e[3]=(t[a*3+o]-t[o*3+a])*i,e[a]=(t[a*3+n]+t[n*3+a])*i,e[o]=(t[o*3+n]+t[n*3+o])*i}return e};const Z=ie;var F=function(){this._axisX=new C,this._axisY=new C,this._axisZ=new C,this.array=P.create(),this._dirty=!0};F.prototype={constructor:F,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return P.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new F().copy(this)},copy:function(e){return P.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return P.determinant(this.array)},fromQuat:function(e){return P.fromQuat(this.array,e.array),this._dirty=!0,this},fromRotationTranslation:function(e,t){return P.fromRotationTranslation(this.array,e.array,t.array),this._dirty=!0,this},fromMat2d:function(e){return F.fromMat2d(this,e),this},frustum:function(e,t,r,i,n,a){return P.frustum(this.array,e,t,r,i,n,a),this._dirty=!0,this},identity:function(){return P.identity(this.array),this._dirty=!0,this},invert:function(){return P.invert(this.array,this.array),this._dirty=!0,this},lookAt:function(e,t,r){return P.lookAt(this.array,e.array,t.array,r.array),this._dirty=!0,this},mul:function(e){return P.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return P.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return P.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return P.multiply(this.array,e.array,this.array),this._dirty=!0,this},ortho:function(e,t,r,i,n,a){return P.ortho(this.array,e,t,r,i,n,a),this._dirty=!0,this},perspective:function(e,t,r,i){return P.perspective(this.array,e,t,r,i),this._dirty=!0,this},rotate:function(e,t){return P.rotate(this.array,this.array,e,t.array),this._dirty=!0,this},rotateX:function(e){return P.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return P.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return P.rotateZ(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return P.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return P.translate(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return P.transpose(this.array,this.array),this._dirty=!0,this},decomposeMatrix:function(){var e=E.create(),t=E.create(),r=E.create(),i=q.create();return function(n,a,o){var s=this.array;E.set(e,s[0],s[1],s[2]),E.set(t,s[4],s[5],s[6]),E.set(r,s[8],s[9],s[10]);var l=E.length(e),h=E.length(t),u=E.length(r),f=this.determinant();f<0&&(l=-l),n&&n.set(l,h,u),o.set(s[12],s[13],s[14]),q.fromMat4(i,s),i[0]/=l,i[1]/=l,i[2]/=l,i[3]/=h,i[4]/=h,i[5]/=h,i[6]/=u,i[7]/=u,i[8]/=u,Z.fromMat3(a.array,i),Z.normalize(a.array,a.array),a._dirty=!0,o._dirty=!0}}(),toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Ti=Object.defineProperty;if(Ti){var xn=F.prototype;Ti(xn,"z",{get:function(){var e=this.array;return this._axisZ.set(e[8],e[9],e[10]),this._axisZ},set:function(e){var t=this.array;e=e.array,t[8]=e[0],t[9]=e[1],t[10]=e[2],this._dirty=!0}}),Ti(xn,"y",{get:function(){var e=this.array;return this._axisY.set(e[4],e[5],e[6]),this._axisY},set:function(e){var t=this.array;e=e.array,t[4]=e[0],t[5]=e[1],t[6]=e[2],this._dirty=!0}}),Ti(xn,"x",{get:function(){var e=this.array;return this._axisX.set(e[0],e[1],e[2]),this._axisX},set:function(e){var t=this.array;e=e.array,t[0]=e[0],t[1]=e[1],t[2]=e[2],this._dirty=!0}})}F.adjoint=function(e,t){return P.adjoint(e.array,t.array),e._dirty=!0,e};F.copy=function(e,t){return P.copy(e.array,t.array),e._dirty=!0,e};F.determinant=function(e){return P.determinant(e.array)};F.identity=function(e){return P.identity(e.array),e._dirty=!0,e};F.ortho=function(e,t,r,i,n,a,o){return P.ortho(e.array,t,r,i,n,a,o),e._dirty=!0,e};F.perspective=function(e,t,r,i,n){return P.perspective(e.array,t,r,i,n),e._dirty=!0,e};F.lookAt=function(e,t,r,i){return P.lookAt(e.array,t.array,r.array,i.array),e._dirty=!0,e};F.invert=function(e,t){return P.invert(e.array,t.array),e._dirty=!0,e};F.mul=function(e,t,r){return P.mul(e.array,t.array,r.array),e._dirty=!0,e};F.multiply=F.mul;F.fromQuat=function(e,t){return P.fromQuat(e.array,t.array),e._dirty=!0,e};F.fromRotationTranslation=function(e,t,r){return P.fromRotationTranslation(e.array,t.array,r.array),e._dirty=!0,e};F.fromMat2d=function(i,r){i._dirty=!0;var r=r.array,i=i.array;return i[0]=r[0],i[4]=r[2],i[12]=r[4],i[1]=r[1],i[5]=r[3],i[13]=r[5],i};F.rotate=function(e,t,r,i){return P.rotate(e.array,t.array,r,i.array),e._dirty=!0,e};F.rotateX=function(e,t,r){return P.rotateX(e.array,t.array,r),e._dirty=!0,e};F.rotateY=function(e,t,r){return P.rotateY(e.array,t.array,r),e._dirty=!0,e};F.rotateZ=function(e,t,r){return P.rotateZ(e.array,t.array,r),e._dirty=!0,e};F.scale=function(e,t,r){return P.scale(e.array,t.array,r.array),e._dirty=!0,e};F.transpose=function(e,t){return P.transpose(e.array,t.array),e._dirty=!0,e};F.translate=function(e,t,r){return P.translate(e.array,t.array,r.array),e._dirty=!0,e};var se=function(e,t,r,i){e=e||0,t=t||0,r=r||0,i=i===void 0?1:i,this.array=Z.fromValues(e,t,r,i),this._dirty=!0};se.prototype={constructor:se,add:function(e){return Z.add(this.array,this.array,e.array),this._dirty=!0,this},calculateW:function(){return Z.calculateW(this.array,this.array),this._dirty=!0,this},set:function(e,t,r,i){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=i,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new se(this.x,this.y,this.z,this.w)},conjugate:function(){return Z.conjugate(this.array,this.array),this._dirty=!0,this},copy:function(e){return Z.copy(this.array,e.array),this._dirty=!0,this},dot:function(e){return Z.dot(this.array,e.array)},fromMat3:function(e){return Z.fromMat3(this.array,e.array),this._dirty=!0,this},fromMat4:function(){var e=q.create();return function(t){return q.fromMat4(e,t.array),q.transpose(e,e),Z.fromMat3(this.array,e),this._dirty=!0,this}}(),identity:function(){return Z.identity(this.array),this._dirty=!0,this},invert:function(){return Z.invert(this.array,this.array),this._dirty=!0,this},len:function(){return Z.len(this.array)},length:function(){return Z.length(this.array)},lerp:function(e,t,r){return Z.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},mul:function(e){return Z.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return Z.multiply(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return Z.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return Z.multiply(this.array,e.array,this.array),this._dirty=!0,this},normalize:function(){return Z.normalize(this.array,this.array),this._dirty=!0,this},rotateX:function(e){return Z.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return Z.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return Z.rotateZ(this.array,this.array,e),this._dirty=!0,this},rotationTo:function(e,t){return Z.rotationTo(this.array,e.array,t.array),this._dirty=!0,this},setAxes:function(e,t,r){return Z.setAxes(this.array,e.array,t.array,r.array),this._dirty=!0,this},setAxisAngle:function(e,t){return Z.setAxisAngle(this.array,e.array,t),this._dirty=!0,this},slerp:function(e,t,r){return Z.slerp(this.array,e.array,t.array,r),this._dirty=!0,this},sqrLen:function(){return Z.sqrLen(this.array)},squaredLength:function(){return Z.squaredLength(this.array)},fromEuler:function(e,t){return se.fromEuler(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Hr=Object.defineProperty;if(Hr){var Ei=se.prototype;Hr(Ei,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Hr(Ei,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),Hr(Ei,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),Hr(Ei,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}se.add=function(e,t,r){return Z.add(e.array,t.array,r.array),e._dirty=!0,e};se.set=function(e,t,r,i,n){Z.set(e.array,t,r,i,n),e._dirty=!0};se.copy=function(e,t){return Z.copy(e.array,t.array),e._dirty=!0,e};se.calculateW=function(e,t){return Z.calculateW(e.array,t.array),e._dirty=!0,e};se.conjugate=function(e,t){return Z.conjugate(e.array,t.array),e._dirty=!0,e};se.identity=function(e){return Z.identity(e.array),e._dirty=!0,e};se.invert=function(e,t){return Z.invert(e.array,t.array),e._dirty=!0,e};se.dot=function(e,t){return Z.dot(e.array,t.array)};se.len=function(e){return Z.length(e.array)};se.lerp=function(e,t,r,i){return Z.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};se.slerp=function(e,t,r,i){return Z.slerp(e.array,t.array,r.array,i),e._dirty=!0,e};se.mul=function(e,t,r){return Z.multiply(e.array,t.array,r.array),e._dirty=!0,e};se.multiply=se.mul;se.rotateX=function(e,t,r){return Z.rotateX(e.array,t.array,r),e._dirty=!0,e};se.rotateY=function(e,t,r){return Z.rotateY(e.array,t.array,r),e._dirty=!0,e};se.rotateZ=function(e,t,r){return Z.rotateZ(e.array,t.array,r),e._dirty=!0,e};se.setAxisAngle=function(e,t,r){return Z.setAxisAngle(e.array,t.array,r),e._dirty=!0,e};se.normalize=function(e,t){return Z.normalize(e.array,t.array),e._dirty=!0,e};se.sqrLen=function(e){return Z.sqrLen(e.array)};se.squaredLength=se.sqrLen;se.fromMat3=function(e,t){return Z.fromMat3(e.array,t.array),e._dirty=!0,e};se.setAxes=function(e,t,r,i){return Z.setAxes(e.array,t.array,r.array,i.array),e._dirty=!0,e};se.rotationTo=function(e,t,r){return Z.rotationTo(e.array,t.array,r.array),e._dirty=!0,e};se.fromEuler=function(e,t,u){e._dirty=!0,t=t.array;var i=e.array,n=Math.cos(t[0]/2),a=Math.cos(t[1]/2),o=Math.cos(t[2]/2),s=Math.sin(t[0]/2),l=Math.sin(t[1]/2),h=Math.sin(t[2]/2),u=(u||"XYZ").toUpperCase();switch(u){case"XYZ":i[0]=s*a*o+n*l*h,i[1]=n*l*o-s*a*h,i[2]=n*a*h+s*l*o,i[3]=n*a*o-s*l*h;break;case"YXZ":i[0]=s*a*o+n*l*h,i[1]=n*l*o-s*a*h,i[2]=n*a*h-s*l*o,i[3]=n*a*o+s*l*h;break;case"ZXY":i[0]=s*a*o-n*l*h,i[1]=n*l*o+s*a*h,i[2]=n*a*h+s*l*o,i[3]=n*a*o-s*l*h;break;case"ZYX":i[0]=s*a*o-n*l*h,i[1]=n*l*o+s*a*h,i[2]=n*a*h-s*l*o,i[3]=n*a*o+s*l*h;break;case"YZX":i[0]=s*a*o+n*l*h,i[1]=n*l*o+s*a*h,i[2]=n*a*h-s*l*o,i[3]=n*a*o-s*l*h;break;case"XZY":i[0]=s*a*o-n*l*h,i[1]=n*l*o-s*a*h,i[2]=n*a*h+s*l*o,i[3]=n*a*o+s*l*h;break}};const ns=se;var Nt=E.set,Si=E.copy,Oi=function(e,t){this.min=e||new C(1/0,1/0,1/0),this.max=t||new C(-1/0,-1/0,-1/0),this.vertices=null};Oi.prototype={constructor:Oi,updateFromVertices:function(e){if(e.length>0){var t=this.min,r=this.max,i=t.array,n=r.array;Si(i,e[0]),Si(n,e[0]);for(var a=1;a<e.length;a++){var o=e[a];o[0]<i[0]&&(i[0]=o[0]),o[1]<i[1]&&(i[1]=o[1]),o[2]<i[2]&&(i[2]=o[2]),o[0]>n[0]&&(n[0]=o[0]),o[1]>n[1]&&(n[1]=o[1]),o[2]>n[2]&&(n[2]=o[2])}t._dirty=!0,r._dirty=!0}},union:function(e){var t=this.min,r=this.max;return E.min(t.array,t.array,e.min.array),E.max(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersection:function(e){var t=this.min,r=this.max;return E.max(t.array,t.array,e.min.array),E.min(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersectBoundingBox:function(e){var t=this.min.array,r=this.max.array,i=e.min.array,n=e.max.array;return!(t[0]>n[0]||t[1]>n[1]||t[2]>n[2]||r[0]<i[0]||r[1]<i[1]||r[2]<i[2])},containBoundingBox:function(e){var t=this.min.array,r=this.max.array,i=e.min.array,n=e.max.array;return t[0]<=i[0]&&t[1]<=i[1]&&t[2]<=i[2]&&r[0]>=n[0]&&r[1]>=n[1]&&r[2]>=n[2]},containPoint:function(e){var t=this.min.array,r=this.max.array,i=e.array;return t[0]<=i[0]&&t[1]<=i[1]&&t[2]<=i[2]&&r[0]>=i[0]&&r[1]>=i[1]&&r[2]>=i[2]},isFinite:function(){var e=this.min.array,t=this.max.array;return isFinite(e[0])&&isFinite(e[1])&&isFinite(e[2])&&isFinite(t[0])&&isFinite(t[1])&&isFinite(t[2])},applyTransform:function(e){this.transformFrom(this,e)},transformFrom:function(){var e=E.create(),t=E.create(),r=E.create(),i=E.create(),n=E.create(),a=E.create();return function(o,s){var l=o.min.array,h=o.max.array,u=s.array;return e[0]=u[0]*l[0],e[1]=u[1]*l[0],e[2]=u[2]*l[0],t[0]=u[0]*h[0],t[1]=u[1]*h[0],t[2]=u[2]*h[0],r[0]=u[4]*l[1],r[1]=u[5]*l[1],r[2]=u[6]*l[1],i[0]=u[4]*h[1],i[1]=u[5]*h[1],i[2]=u[6]*h[1],n[0]=u[8]*l[2],n[1]=u[9]*l[2],n[2]=u[10]*l[2],a[0]=u[8]*h[2],a[1]=u[9]*h[2],a[2]=u[10]*h[2],l=this.min.array,h=this.max.array,l[0]=Math.min(e[0],t[0])+Math.min(r[0],i[0])+Math.min(n[0],a[0])+u[12],l[1]=Math.min(e[1],t[1])+Math.min(r[1],i[1])+Math.min(n[1],a[1])+u[13],l[2]=Math.min(e[2],t[2])+Math.min(r[2],i[2])+Math.min(n[2],a[2])+u[14],h[0]=Math.max(e[0],t[0])+Math.max(r[0],i[0])+Math.max(n[0],a[0])+u[12],h[1]=Math.max(e[1],t[1])+Math.max(r[1],i[1])+Math.max(n[1],a[1])+u[13],h[2]=Math.max(e[2],t[2])+Math.max(r[2],i[2])+Math.max(n[2],a[2])+u[14],this.min._dirty=!0,this.max._dirty=!0,this}}(),applyProjection:function(e){var t=this.min.array,r=this.max.array,i=e.array,n=t[0],a=t[1],o=t[2],s=r[0],l=r[1],h=t[2],u=r[0],f=r[1],d=r[2];if(i[15]===1)t[0]=i[0]*n+i[12],t[1]=i[5]*a+i[13],r[2]=i[10]*o+i[14],r[0]=i[0]*u+i[12],r[1]=i[5]*f+i[13],t[2]=i[10]*d+i[14];else{var c=-1/o;t[0]=i[0]*n*c,t[1]=i[5]*a*c,r[2]=(i[10]*o+i[14])*c,c=-1/h,r[0]=i[0]*s*c,r[1]=i[5]*l*c,c=-1/d,t[2]=(i[10]*d+i[14])*c}return this.min._dirty=!0,this.max._dirty=!0,this},updateVertices:function(){var e=this.vertices;if(!e){e=[];for(var t=0;t<8;t++)e[t]=E.fromValues(0,0,0);this.vertices=e}var r=this.min.array,i=this.max.array;return Nt(e[0],r[0],r[1],r[2]),Nt(e[1],r[0],i[1],r[2]),Nt(e[2],i[0],r[1],r[2]),Nt(e[3],i[0],i[1],r[2]),Nt(e[4],r[0],r[1],i[2]),Nt(e[5],r[0],i[1],i[2]),Nt(e[6],i[0],r[1],i[2]),Nt(e[7],i[0],i[1],i[2]),this},copy:function(e){var t=this.min,r=this.max;return Si(t.array,e.min.array),Si(r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},clone:function(){var e=new Oi;return e.copy(this),e}};const Qe=Oi;var Sh=0,Tt=He.extend({name:"",position:null,rotation:null,scale:null,worldTransform:null,localTransform:null,autoUpdateLocalTransform:!0,_parent:null,_scene:null,_needsUpdateWorldTransform:!0,_inIterating:!1,__depth:0},function(){this.name||(this.name=(this.type||"NODE")+"_"+Sh++),this.position||(this.position=new C),this.rotation||(this.rotation=new ns),this.scale||(this.scale=new C(1,1,1)),this.worldTransform=new F,this.localTransform=new F,this._children=[]},{target:null,invisible:!1,isSkinnedMesh:function(){return!1},isRenderable:function(){return!1},setName:function(e){var t=this._scene;if(t){var r=t._nodeRepository;delete r[this.name],r[e]=this}this.name=e},add:function(e){var t=e._parent;if(t!==this){t&&t.remove(e),e._parent=this,this._children.push(e);var r=this._scene;r&&r!==e.scene&&e.traverse(this._addSelfToScene,this),e._needsUpdateWorldTransform=!0}},remove:function(e){var t=this._children,r=t.indexOf(e);r<0||(t.splice(r,1),e._parent=null,this._scene&&e.traverse(this._removeSelfFromScene,this))},removeAll:function(){for(var e=this._children,t=0;t<e.length;t++)e[t]._parent=null,this._scene&&e[t].traverse(this._removeSelfFromScene,this);this._children=[]},getScene:function(){return this._scene},getParent:function(){return this._parent},_removeSelfFromScene:function(e){e._scene.removeFromScene(e),e._scene=null},_addSelfToScene:function(e){this._scene.addToScene(e),e._scene=this._scene},isAncestor:function(e){for(var t=e._parent;t;){if(t===this)return!0;t=t._parent}return!1},children:function(){return this._children.slice()},childAt:function(e){return this._children[e]},getChildByName:function(e){for(var t=this._children,r=0;r<t.length;r++)if(t[r].name===e)return t[r]},getDescendantByName:function(e){for(var t=this._children,r=0;r<t.length;r++){var i=t[r];if(i.name===e)return i;var n=i.getDescendantByName(e);if(n)return n}},queryNode:function(e){if(e){for(var t=e.split("/"),r=this,i=0;i<t.length;i++){var n=t[i];if(n){for(var a=!1,o=r._children,s=0;s<o.length;s++){var l=o[s];if(l.name===n){r=l,a=!0;break}}if(!a)return}}return r}},getPath:function(e){if(!this._parent)return"/";for(var t=this._parent,r=this.name;t._parent&&(r=t.name+"/"+r,t._parent!=e);)t=t._parent;return!t._parent&&e?null:r},traverse:function(e,t){e.call(t,this);for(var r=this._children,i=0,n=r.length;i<n;i++)r[i].traverse(e,t)},eachChild:function(e,t){for(var r=this._children,i=0,n=r.length;i<n;i++){var a=r[i];e.call(t,a,i)}},setLocalTransform:function(e){P.copy(this.localTransform.array,e.array),this.decomposeLocalTransform()},decomposeLocalTransform:function(e){var t=e?null:this.scale;this.localTransform.decomposeMatrix(t,this.rotation,this.position)},setWorldTransform:function(e){P.copy(this.worldTransform.array,e.array),this.decomposeWorldTransform()},decomposeWorldTransform:function(){var e=P.create();return function(t){var r=this.localTransform,i=this.worldTransform;this._parent?(P.invert(e,this._parent.worldTransform.array),P.multiply(r.array,e,i.array)):P.copy(r.array,i.array);var n=t?null:this.scale;r.decomposeMatrix(n,this.rotation,this.position)}}(),transformNeedsUpdate:function(){return this.position._dirty||this.rotation._dirty||this.scale._dirty},updateLocalTransform:function(){var e=this.position,t=this.rotation,r=this.scale;if(this.transformNeedsUpdate()){var i=this.localTransform.array;P.fromRotationTranslation(i,t.array,e.array),P.scale(i,i,r.array),t._dirty=!1,r._dirty=!1,e._dirty=!1,this._needsUpdateWorldTransform=!0}},_updateWorldTransformTopDown:function(){var e=this.localTransform.array,t=this.worldTransform.array;this._parent?P.multiplyAffine(t,this._parent.worldTransform.array,e):P.copy(t,e)},updateWorldTransform:function(){for(var e=this;e&&e.getParent()&&e.getParent().transformNeedsUpdate();)e=e.getParent();e.update()},update:function(e){this.autoUpdateLocalTransform?this.updateLocalTransform():e=!0,(e||this._needsUpdateWorldTransform)&&(this._updateWorldTransformTopDown(),e=!0,this._needsUpdateWorldTransform=!1);for(var t=this._children,r=0,i=t.length;r<i;r++)t[r].update(e)},getBoundingBox:function(){function e(n){return!n.invisible&&n.geometry}var t=new Qe,r=new F,i=new F;return function(n,a){return a=a||new Qe,this._parent?F.invert(i,this._parent.worldTransform):F.identity(i),this.traverse(function(o){o.geometry&&o.geometry.boundingBox&&(t.copy(o.geometry.boundingBox),F.multiply(r,i,o.worldTransform),t.applyTransform(r),a.union(t))},this,e),a}}(),getWorldPosition:function(e){this.transformNeedsUpdate()&&this.updateWorldTransform();var t=this.worldTransform.array;if(e){var r=e.array;return r[0]=t[12],r[1]=t[13],r[2]=t[14],e}else return new C(t[12],t[13],t[14])},clone:function(){var e=new this.constructor,t=this._children;e.setName(this.name),e.position.copy(this.position),e.rotation.copy(this.rotation),e.scale.copy(this.scale);for(var r=0;r<t.length;r++)e.add(t[r].clone());return e},rotateAround:function(){var e=new C,t=new F;return function(r,i,n){e.copy(this.position).subtract(r);var a=this.localTransform;a.identity(),a.translate(r),a.rotate(n,i),t.fromRotationTranslation(this.rotation,e),a.multiply(t),a.scale(this.scale),this.decomposeLocalTransform(),this._needsUpdateWorldTransform=!0}}(),lookAt:function(){var e=new F;return function(t,r){e.lookAt(this.position,t,r||this.localTransform.y).invert(),this.setLocalTransform(e),this.target=t}}()}),Je=Tt.extend({material:null,geometry:null,mode:R.TRIANGLES,_renderInfo:null},{__program:null,lightGroup:0,renderOrder:0,culling:!0,cullFace:R.BACK,frontFace:R.CCW,frustumCulling:!0,receiveShadow:!0,castShadow:!0,ignorePicking:!1,ignorePreZ:!1,ignoreGBuffer:!1,isRenderable:function(){return this.geometry&&this.material&&this.material.shader&&!this.invisible&&this.geometry.vertexCount>0},beforeRender:function(e){},afterRender:function(e,t){},getBoundingBox:function(e,t){return t=Tt.prototype.getBoundingBox.call(this,e,t),this.geometry&&this.geometry.boundingBox&&t.union(this.geometry.boundingBox),t},clone:function(){var e=["castShadow","receiveShadow","mode","culling","cullFace","frontFace","frustumCulling","renderOrder","lineWidth","ignorePicking","ignorePreZ","ignoreGBuffer"];return function(){var t=Tt.prototype.clone.call(this);t.geometry=this.geometry,t.material=this.material;for(var r=0;r<e.length;r++){var i=e[r];t[i]!==this[i]&&(t[i]=this[i])}return t}}()});Je.POINTS=R.POINTS;Je.LINES=R.LINES;Je.LINE_LOOP=R.LINE_LOOP;Je.LINE_STRIP=R.LINE_STRIP;Je.TRIANGLES=R.TRIANGLES;Je.TRIANGLE_STRIP=R.TRIANGLE_STRIP;Je.TRIANGLE_FAN=R.TRIANGLE_FAN;Je.BACK=R.BACK;Je.FRONT=R.FRONT;Je.FRONT_AND_BACK=R.FRONT_AND_BACK;Je.CW=R.CW;Je.CCW=R.CCW;var aa=He.extend({scene:null,camera:null,renderer:null},function(){this._ray=new Gi,this._ndc=new nt},{pick:function(e,t,r){var i=this.pickAll(e,t,[],r);return i[0]||null},pickAll:function(e,t,r,i){return this.renderer.screenToNDC(e,t,this._ndc),this.camera.castRay(this._ndc,this._ray),r=r||[],this._intersectNode(this.scene,r,i||!1),r.sort(this._intersectionCompareFunc),r},_intersectNode:function(e,t,r){e instanceof Je&&e.isRenderable()&&(!e.ignorePicking||r)&&(e.mode===R.TRIANGLES&&e.geometry.isUseIndices()||e.geometry.pickByRay||e.geometry.pick)&&this._intersectRenderable(e,t);for(var i=0;i<e._children.length;i++)this._intersectNode(e._children[i],t,r)},_intersectRenderable:function(){var e=new C,t=new C,r=new C,i=new Gi,n=new F;return function(a,o){var s=a.isSkinnedMesh();i.copy(this._ray),F.invert(n,a.worldTransform),s||i.applyTransform(n);var l=a.geometry,h=s?a.skeleton.boundingBox:l.boundingBox;if(!(h&&!i.intersectBoundingBox(h))){if(l.pick){l.pick(this._ndc.x,this._ndc.y,this.renderer,this.camera,a,o);return}else if(l.pickByRay){l.pickByRay(i,a,o);return}var u=a.cullFace===R.BACK&&a.frontFace===R.CCW||a.cullFace===R.FRONT&&a.frontFace===R.CW,f,d=l.indices,c=l.attributes.position,v=l.attributes.weight,p=l.attributes.joint,m,g=[];if(!(!c||!c.value||!d)){if(s){m=a.skeleton.getSubSkinMatrices(a.__uid__,a.joints);for(var T=0;T<a.joints.length;T++){g[T]=g[T]||[];for(var x=0;x<16;x++)g[T][x]=m[T*16+x]}var _=[],S=[],A=[],b=[],w=[],L=l.attributes.skinnedPosition;(!L||!L.value)&&(l.createAttribute("skinnedPosition","f",3),L=l.attributes.skinnedPosition,L.init(l.vertexCount));for(var T=0;T<l.vertexCount;T++){c.get(T,_),v.get(T,S),p.get(T,A),S[3]=1-S[0]-S[1]-S[2],E.set(b,0,0,0);for(var x=0;x<4;x++)A[x]>=0&&S[x]>1e-4&&(E.transformMat4(w,_,g[A[x]]),E.scaleAndAdd(b,b,w,S[x]));L.set(T,b)}}for(var T=0;T<d.length;T+=3){var I=d[T],M=d[T+1],N=d[T+2],U=s?l.attributes.skinnedPosition:c;if(U.get(I,e.array),U.get(M,t.array),U.get(N,r.array),u?f=i.intersectTriangle(e,t,r,a.culling):f=i.intersectTriangle(e,r,t,a.culling),f){var D=new C;s?C.copy(D,f):C.transformMat4(D,f,a.worldTransform),o.push(new aa.Intersection(f,D,a,[I,M,N],T/3,C.dist(D,this._ray.origin)))}}}}}}(),_intersectionCompareFunc:function(e,t){return e.distance-t.distance}});aa.Intersection=function(e,t,r,i,n,a){this.point=e,this.pointWorld=t,this.target=r,this.triangle=i,this.triangleIndex=n,this.distance=a};const Ah=aa;var kr="__dt__",wr=function(){this._contextId=0,this._caches=[],this._context={}};wr.prototype={use:function(e,t){var r=this._caches;r[e]||(r[e]={},t&&(r[e]=t())),this._contextId=e,this._context=r[e]},put:function(e,t){this._context[e]=t},get:function(e){return this._context[e]},dirty:function(e){e=e||"";var t=kr+e;this.put(t,!0)},dirtyAll:function(e){e=e||"";for(var t=kr+e,r=this._caches,i=0;i<r.length;i++)r[i]&&(r[i][t]=!0)},fresh:function(e){e=e||"";var t=kr+e;this.put(t,!1)},freshAll:function(e){e=e||"";for(var t=kr+e,r=this._caches,i=0;i<r.length;i++)r[i]&&(r[i][t]=!1)},isDirty:function(e){e=e||"";var t=kr+e,r=this._context;return!r.hasOwnProperty(t)||r[t]===!0},deleteContext:function(e){delete this._caches[e],this._context={}},delete:function(e){delete this._context[e]},clearAll:function(){this._caches={}},getContext:function(){return this._context},eachContext:function(e,t){var r=Object.keys(this._caches);r.forEach(function(i){e&&e.call(t,i)})},miss:function(e){return!this._context.hasOwnProperty(e)}};wr.prototype.constructor=wr;var O=He.extend({width:512,height:512,type:R.UNSIGNED_BYTE,format:R.RGBA,wrapS:R.REPEAT,wrapT:R.REPEAT,minFilter:R.LINEAR_MIPMAP_LINEAR,magFilter:R.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,sRGB:!0,unpackAlignment:4,premultiplyAlpha:!1,dynamic:!1,NPOT:!1,__used:0},function(){this._cache=new wr},{getWebGLTexture:function(e){var t=e.gl,r=this._cache;return r.use(e.__uid__),r.miss("webgl_texture")&&r.put("webgl_texture",t.createTexture()),this.dynamic?this.update(e):r.isDirty()&&(this.update(e),r.fresh()),r.get("webgl_texture")},bind:function(){},unbind:function(){},dirty:function(){this._cache&&this._cache.dirtyAll()},update:function(e){},updateCommon:function(e){var t=e.gl;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,this.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,this.unpackAlignment),this.format===R.DEPTH_COMPONENT&&(this.useMipmap=!1);var r=e.getGLExtension("EXT_sRGB");this.format===O.SRGB&&!r&&(this.format=O.RGB),this.format===O.SRGB_ALPHA&&!r&&(this.format=O.RGBA),this.NPOT=!this.isPowerOfTwo()},getAvailableWrapS:function(){return this.NPOT?R.CLAMP_TO_EDGE:this.wrapS},getAvailableWrapT:function(){return this.NPOT?R.CLAMP_TO_EDGE:this.wrapT},getAvailableMinFilter:function(){var e=this.minFilter;return this.NPOT||!this.useMipmap?e===R.NEAREST_MIPMAP_NEAREST||e===R.NEAREST_MIPMAP_LINEAR?R.NEAREST:e===R.LINEAR_MIPMAP_LINEAR||e===R.LINEAR_MIPMAP_NEAREST?R.LINEAR:e:e},getAvailableMagFilter:function(){return this.magFilter},nextHighestPowerOfTwo:function(e){--e;for(var t=1;t<32;t<<=1)e=e|e>>t;return e+1},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("webgl_texture");r&&e.gl.deleteTexture(r),t.deleteContext(e.__uid__)},isRenderable:function(){},isPowerOfTwo:function(){}});Object.defineProperty(O.prototype,"width",{get:function(){return this._width},set:function(e){this._width=e}});Object.defineProperty(O.prototype,"height",{get:function(){return this._height},set:function(e){this._height=e}});O.BYTE=R.BYTE;O.UNSIGNED_BYTE=R.UNSIGNED_BYTE;O.SHORT=R.SHORT;O.UNSIGNED_SHORT=R.UNSIGNED_SHORT;O.INT=R.INT;O.UNSIGNED_INT=R.UNSIGNED_INT;O.FLOAT=R.FLOAT;O.HALF_FLOAT=36193;O.UNSIGNED_INT_24_8_WEBGL=34042;O.DEPTH_COMPONENT=R.DEPTH_COMPONENT;O.DEPTH_STENCIL=R.DEPTH_STENCIL;O.ALPHA=R.ALPHA;O.RGB=R.RGB;O.RGBA=R.RGBA;O.LUMINANCE=R.LUMINANCE;O.LUMINANCE_ALPHA=R.LUMINANCE_ALPHA;O.SRGB=35904;O.SRGB_ALPHA=35906;O.COMPRESSED_RGB_S3TC_DXT1_EXT=33776;O.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777;O.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778;O.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779;O.NEAREST=R.NEAREST;O.LINEAR=R.LINEAR;O.NEAREST_MIPMAP_NEAREST=R.NEAREST_MIPMAP_NEAREST;O.LINEAR_MIPMAP_NEAREST=R.LINEAR_MIPMAP_NEAREST;O.NEAREST_MIPMAP_LINEAR=R.NEAREST_MIPMAP_LINEAR;O.LINEAR_MIPMAP_LINEAR=R.LINEAR_MIPMAP_LINEAR;O.REPEAT=R.REPEAT;O.CLAMP_TO_EDGE=R.CLAMP_TO_EDGE;O.MIRRORED_REPEAT=R.MIRRORED_REPEAT;var at=Je.extend({skeleton:null,joints:null},function(){this.joints||(this.joints=[])},{offsetMatrix:null,isInstancedMesh:function(){return!1},isSkinnedMesh:function(){return!!(this.skeleton&&this.joints&&this.joints.length>0)},clone:function(){var e=Je.prototype.clone.call(this);return e.skeleton=this.skeleton,this.joints&&(e.joints=this.joints.slice()),e}});at.POINTS=R.POINTS;at.LINES=R.LINES;at.LINE_LOOP=R.LINE_LOOP;at.LINE_STRIP=R.LINE_STRIP;at.TRIANGLES=R.TRIANGLES;at.TRIANGLE_STRIP=R.TRIANGLE_STRIP;at.TRIANGLE_FAN=R.TRIANGLE_FAN;at.BACK=R.BACK;at.FRONT=R.FRONT;at.FRONT_AND_BACK=R.FRONT_AND_BACK;at.CW=R.CW;at.CCW=R.CCW;const ir=at;var vi={};vi.isPowerOfTwo=function(e){return(e&e-1)===0};vi.nextPowerOfTwo=function(e){return e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,e++,e};vi.nearestPowerOfTwo=function(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))};var Ya=vi.isPowerOfTwo;function Ja(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function wh(e,t){var r=Ja(e.width),i=Ja(e.height);t=t||document.createElement("canvas"),t.width=r,t.height=i;var n=t.getContext("2d");return n.drawImage(e.image,0,0,r,i),t}var oa=O.extend(function(){return{image:null,pixels:null,mipmaps:[],convertToPOT:!1}},{textureType:"texture2D",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,i=this.type,n=!!(this.convertToPOT&&!this.mipmaps.length&&this.image&&(this.wrapS===O.REPEAT||this.wrapT===O.REPEAT)&&this.NPOT);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,n?this.wrapS:this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,n?this.wrapT:this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n?this.magFilter:this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n?this.minFilter:this.getAvailableMinFilter());var a=e.getGLExtension("EXT_texture_filter_anisotropic");if(a&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_2D,a.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),i===36193){var o=e.getGLExtension("OES_texture_half_float");o||(i=R.FLOAT)}if(this.mipmaps.length)for(var s=this.width,l=this.height,h=0;h<this.mipmaps.length;h++){var u=this.mipmaps[h];this._updateTextureData(t,u,h,s,l,r,i,!1),s/=2,l/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,i,n),this.useMipmap&&(!this.NPOT||n)&&t.generateMipmap(t.TEXTURE_2D);t.bindTexture(t.TEXTURE_2D,null)},_updateTextureData:function(e,t,r,i,n,a,o,s){if(t.image){var l=t.image;s&&(this._potCanvas=wh(this,this._potCanvas),l=this._potCanvas),e.texImage2D(e.TEXTURE_2D,r,a,a,o,l)}else a<=O.COMPRESSED_RGBA_S3TC_DXT5_EXT&&a>=O.COMPRESSED_RGB_S3TC_DXT1_EXT?e.compressedTexImage2D(e.TEXTURE_2D,r,a,i,n,0,t.pixels):e.texImage2D(e.TEXTURE_2D,r,a,i,n,0,a,o,t.pixels)},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_2D))},isPowerOfTwo:function(){return Ya(this.width)&&Ya(this.height)},isRenderable:function(){return this.image?this.image.width>0&&this.image.height>0:!!(this.width&&this.height)},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,null)},load:function(e,t){var r=oe.createImage();t&&(r.crossOrigin=t);var i=this;return r.onload=function(){i.dirty(),i.trigger("success",i)},r.onerror=function(){i.trigger("error",i)},r.src=e,this.image=r,this}});Object.defineProperty(oa.prototype,"width",{get:function(){return this.image?this.image.width:this._width},set:function(e){this.image?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(oa.prototype,"height",{get:function(){return this.image?this.image.height:this._height},set:function(e){this.image?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});const Q=oa;function as(e){return{byte:oe.Int8Array,ubyte:oe.Uint8Array,short:oe.Int16Array,ushort:oe.Uint16Array}[e]||oe.Float32Array}function Tn(e){return"attr_"+e}function br(e,t,r,i){switch(this.name=e,this.type=t,this.size=r,this.semantic=i||"",this.value=null,r){case 1:this.get=function(n){return this.value[n]},this.set=function(n,a){this.value[n]=a},this.copy=function(n,a){this.value[n]=this.value[n]};break;case 2:this.get=function(n,a){var o=this.value;return a[0]=o[n*2],a[1]=o[n*2+1],a},this.set=function(n,a){var o=this.value;o[n*2]=a[0],o[n*2+1]=a[1]},this.copy=function(n,a){var o=this.value;a*=2,n*=2,o[n]=o[a],o[n+1]=o[a+1]};break;case 3:this.get=function(n,a){var o=n*3,s=this.value;return a[0]=s[o],a[1]=s[o+1],a[2]=s[o+2],a},this.set=function(n,a){var o=n*3,s=this.value;s[o]=a[0],s[o+1]=a[1],s[o+2]=a[2]},this.copy=function(n,a){var o=this.value;a*=3,n*=3,o[n]=o[a],o[n+1]=o[a+1],o[n+2]=o[a+2]};break;case 4:this.get=function(n,a){var o=this.value,s=n*4;return a[0]=o[s],a[1]=o[s+1],a[2]=o[s+2],a[3]=o[s+3],a},this.set=function(n,a){var o=this.value,s=n*4;o[s]=a[0],o[s+1]=a[1],o[s+2]=a[2],o[s+3]=a[3]},this.copy=function(n,a){var o=this.value;a*=4,n*=4,o[n]=o[a],o[n+1]=o[a+1],o[n+2]=o[a+2],o[n+3]=o[a+3]}}}br.prototype.init=function(e){if(!this.value||this.value.length!==e*this.size){var t=as(this.type);this.value=new t(e*this.size)}};br.prototype.fromArray=function(e){var t=as(this.type),r;if(e[0]&&e[0].length){var i=0,n=this.size;r=new t(e.length*n);for(var a=0;a<e.length;a++)for(var o=0;o<n;o++)r[i++]=e[a][o]}else r=new t(e);this.value=r};br.prototype.clone=function(e){var t=new br(this.name,this.type,this.size,this.semantic);return e&&console.warn("todo"),t};function os(e,t,r,i,n){this.name=e,this.type=t,this.buffer=r,this.size=i,this.semantic=n,this.symbol="",this.needsRemove=!1}function ss(e){this.buffer=e,this.count=0}var $e=He.extend(function(){return{attributes:{},indices:null,dynamic:!0,_enabledAttributes:null,__used:0}},function(){this._cache=new wr,this._attributeList=Object.keys(this.attributes),this.__vaoCache={}},{mainAttribute:"",pick:null,pickByRay:null,dirty:function(){for(var e=this.getEnabledAttributes(),t=0;t<e.length;t++)this.dirtyAttribute(e[t]);this.dirtyIndices(),this._enabledAttributes=null,this._cache.dirty("any")},dirtyIndices:function(){this._cache.dirtyAll("indices")},dirtyAttribute:function(e){this._cache.dirtyAll(Tn(e)),this._cache.dirtyAll("attributes")},getTriangleIndices:function(e,t){if(e<this.triangleCount&&e>=0){t||(t=[]);var r=this.indices;return t[0]=r[e*3],t[1]=r[e*3+1],t[2]=r[e*3+2],t}},setTriangleIndices:function(e,t){var r=this.indices;r[e*3]=t[0],r[e*3+1]=t[1],r[e*3+2]=t[2]},isUseIndices:function(){return!!this.indices},initIndicesFromArray:function(e){var t,r=this.vertexCount>65535?oe.Uint32Array:oe.Uint16Array;if(e[0]&&e[0].length){var i=0,n=3;t=new r(e.length*n);for(var a=0;a<e.length;a++)for(var o=0;o<n;o++)t[i++]=e[a][o]}else t=new r(e);this.indices=t},createAttribute:function(e,t,r,i){var n=new br(e,t,r,i);return this.attributes[e]&&this.removeAttribute(e),this.attributes[e]=n,this._attributeList.push(e),n},removeAttribute:function(e){var t=this._attributeList,r=t.indexOf(e);return r>=0?(t.splice(r,1),delete this.attributes[e],!0):!1},getAttribute:function(e){return this.attributes[e]},getEnabledAttributes:function(){var e=this._enabledAttributes,t=this._attributeList;if(e)return e;for(var r=[],i=this.vertexCount,n=0;n<t.length;n++){var a=t[n],o=this.attributes[a];o.value&&o.value.length===i*o.size&&r.push(a)}return this._enabledAttributes=r,r},getBufferChunks:function(e){var t=this._cache;t.use(e.__uid__);var r=t.isDirty("attributes"),i=t.isDirty("indices");if(r||i){this._updateBuffer(e.gl,r,i);for(var n=this.getEnabledAttributes(),a=0;a<n.length;a++)t.fresh(Tn(n[a]));t.fresh("attributes"),t.fresh("indices")}return t.fresh("any"),t.get("chunks")},_updateBuffer:function(e,t,r){var i=this._cache,n=i.get("chunks"),a=!1;n||(n=[],n[0]={attributeBuffers:[],indicesBuffer:null},i.put("chunks",n),a=!0);var o=n[0],s=o.attributeBuffers,l=o.indicesBuffer;if(t||a){var h=this.getEnabledAttributes(),u={};if(!a)for(var f=0;f<s.length;f++)u[s[f].name]=s[f];for(var d=0;d<h.length;d++){var c=h[d],v=this.attributes[c],p;a||(p=u[c]);var m;p?m=p.buffer:m=e.createBuffer(),i.isDirty(Tn(c))&&(e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,v.value,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW)),s[d]=new os(c,v.type,m,v.size,v.semantic)}for(var f=d;f<s.length;f++)e.deleteBuffer(s[f].buffer);s.length=d}this.isUseIndices()&&(r||a)&&(l||(l=new ss(e.createBuffer()),o.indicesBuffer=l),l.count=this.indices.length,e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,l.buffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW))},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var i=0;i<r.length;i++){for(var n=r[i],a=0;a<n.attributeBuffers.length;a++){var o=n.attributeBuffers[a];e.gl.deleteBuffer(o.buffer)}n.indicesBuffer&&e.gl.deleteBuffer(n.indicesBuffer.buffer)}if(this.__vaoCache){var s=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var h=this.__vaoCache[l].vao;h&&s.deleteVertexArrayOES(h)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});Object.defineProperty&&(Object.defineProperty($e.prototype,"vertexCount",{enumerable:!1,get:function(){var e=this.attributes[this.mainAttribute];return e||(e=this.attributes[this._attributeList[0]]),!e||!e.value?0:e.value.length/e.size}}),Object.defineProperty($e.prototype,"triangleCount",{enumerable:!1,get:function(){var e=this.indices;return e?e.length/3:0}}));$e.STATIC_DRAW=R.STATIC_DRAW;$e.DYNAMIC_DRAW=R.DYNAMIC_DRAW;$e.STREAM_DRAW=R.STREAM_DRAW;$e.AttributeBuffer=os;$e.IndicesBuffer=ss;$e.Attribute=br;var Ke=E.create,vr=E.add,Qt=E.set,yt=$e.Attribute,J=$e.extend(function(){return{attributes:{position:new yt("position","float",3,"POSITION"),texcoord0:new yt("texcoord0","float",2,"TEXCOORD_0"),texcoord1:new yt("texcoord1","float",2,"TEXCOORD_1"),normal:new yt("normal","float",3,"NORMAL"),tangent:new yt("tangent","float",4,"TANGENT"),color:new yt("color","float",4,"COLOR"),weight:new yt("weight","float",3,"WEIGHT"),joint:new yt("joint","float",4,"JOINT"),barycentric:new yt("barycentric","float",3,null)},boundingBox:null}},{mainAttribute:"position",updateBoundingBox:function(){var e=this.boundingBox;e||(e=this.boundingBox=new Qe);var t=this.attributes.position.value;if(t&&t.length){var r=e.min,i=e.max,n=r.array,a=i.array;E.set(n,t[0],t[1],t[2]),E.set(a,t[0],t[1],t[2]);for(var o=3;o<t.length;){var s=t[o++],l=t[o++],h=t[o++];s<n[0]&&(n[0]=s),l<n[1]&&(n[1]=l),h<n[2]&&(n[2]=h),s>a[0]&&(a[0]=s),l>a[1]&&(a[1]=l),h>a[2]&&(a[2]=h)}r._dirty=!0,i._dirty=!0}},generateVertexNormals:function(){if(this.vertexCount){var e=this.indices,t=this.attributes,r=t.position.value,i=t.normal.value;if(!i||i.length!==r.length)i=t.normal.value=new oe.Float32Array(r.length);else for(var n=0;n<i.length;n++)i[n]=0;for(var a=Ke(),o=Ke(),s=Ke(),l=Ke(),h=Ke(),u=Ke(),f=e?e.length:this.vertexCount,d,c,v,p=0;p<f;){e?(d=e[p++],c=e[p++],v=e[p++]):(d=p++,c=p++,v=p++),Qt(a,r[d*3],r[d*3+1],r[d*3+2]),Qt(o,r[c*3],r[c*3+1],r[c*3+2]),Qt(s,r[v*3],r[v*3+1],r[v*3+2]),E.sub(l,a,o),E.sub(h,o,s),E.cross(u,l,h);for(var n=0;n<3;n++)i[d*3+n]=i[d*3+n]+u[n],i[c*3+n]=i[c*3+n]+u[n],i[v*3+n]=i[v*3+n]+u[n]}for(var n=0;n<i.length;)Qt(u,i[n],i[n+1],i[n+2]),E.normalize(u,u),i[n++]=u[0],i[n++]=u[1],i[n++]=u[2];this.dirty()}},generateFaceNormals:function(){if(this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.indices,t=this.attributes,r=t.position.value,i=t.normal.value,n=Ke(),a=Ke(),o=Ke(),s=Ke(),l=Ke(),h=Ke();i||(i=t.normal.value=new Float32Array(r.length));for(var u=e?e.length:this.vertexCount,f,d,c,v=0;v<u;){e?(f=e[v++],d=e[v++],c=e[v++]):(f=v++,d=v++,c=v++),Qt(n,r[f*3],r[f*3+1],r[f*3+2]),Qt(a,r[d*3],r[d*3+1],r[d*3+2]),Qt(o,r[c*3],r[c*3+1],r[c*3+2]),E.sub(s,n,a),E.sub(l,a,o),E.cross(h,s,l),E.normalize(h,h);for(var p=0;p<3;p++)i[f*3+p]=h[p],i[d*3+p]=h[p],i[c*3+p]=h[p]}this.dirty()}},generateTangents:function(){if(this.vertexCount){var e=this.vertexCount,t=this.attributes;t.tangent.value||(t.tangent.value=new Float32Array(e*4));var r=t.texcoord0.value,i=t.position.value,n=t.tangent.value,a=t.normal.value;if(!r){console.warn("Geometry without texcoords can't generate tangents.");return}for(var o=[],s=[],l=0;l<e;l++)o[l]=[0,0,0],s[l]=[0,0,0];for(var h=[0,0,0],u=[0,0,0],f=this.indices,d=f?f.length:this.vertexCount,c,v,p,l=0;l<d;){f?(c=f[l++],v=f[l++],p=f[l++]):(c=l++,v=l++,p=l++);var m=r[c*2],g=r[v*2],T=r[p*2],x=r[c*2+1],_=r[v*2+1],S=r[p*2+1],A=i[c*3],b=i[v*3],w=i[p*3],L=i[c*3+1],I=i[v*3+1],M=i[p*3+1],N=i[c*3+2],U=i[v*3+2],D=i[p*3+2],z=b-A,H=w-A,W=I-L,V=M-L,ne=U-N,k=D-N,ue=g-m,ae=T-m,de=_-x,ve=S-x,ee=1/(ue*ve-de*ae);h[0]=(ve*z-de*H)*ee,h[1]=(ve*W-de*V)*ee,h[2]=(ve*ne-de*k)*ee,u[0]=(ue*H-ae*z)*ee,u[1]=(ue*V-ae*W)*ee,u[2]=(ue*k-ae*ne)*ee,vr(o[c],o[c],h),vr(o[v],o[v],h),vr(o[p],o[p],h),vr(s[c],s[c],u),vr(s[v],s[v],u),vr(s[p],s[p],u)}for(var Me=Ke(),_e=Ke(),Ee=Ke(),l=0;l<e;l++){Ee[0]=a[l*3],Ee[1]=a[l*3+1],Ee[2]=a[l*3+2];var We=o[l];E.scale(Me,Ee,E.dot(Ee,We)),E.sub(Me,We,Me),E.normalize(Me,Me),E.cross(_e,Ee,We),n[l*4]=Me[0],n[l*4+1]=Me[1],n[l*4+2]=Me[2],n[l*4+3]=E.dot(_e,s[l])<0?-1:1}this.dirty()}},isUniqueVertex:function(){return this.isUseIndices()?this.vertexCount===this.indices.length:!0},generateUniqueVertex:function(){if(!(!this.vertexCount||!this.indices)){this.indices.length>65535&&(this.indices=new oe.Uint32Array(this.indices));for(var e=this.attributes,t=this.indices,r=this.getEnabledAttributes(),i={},n=0;n<r.length;n++){var a=r[n];i[a]=e[a].value,e[a].init(this.indices.length)}for(var o=0,s=0;s<t.length;s++){for(var l=t[s],n=0;n<r.length;n++)for(var a=r[n],h=e[a].value,u=e[a].size,f=0;f<u;f++)h[o*u+f]=i[a][l*u+f];t[s]=o,o++}this.dirty()}},generateBarycentric:function(){if(this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.attributes,t=e.barycentric.value,r=this.indices;if(!(t&&t.length===r.length*3)){t=e.barycentric.value=new Float32Array(r.length*3);for(var i=0;i<(r?r.length:this.vertexCount/3);)for(var n=0;n<3;n++){var a=r?r[i++]:i*3+n;t[a*3+n]=1}this.dirty()}}},applyTransform:function(e){var t=this.attributes,r=t.position.value,i=t.normal.value,n=t.tangent.value;e=e.array;var a=P.create();P.invert(a,e),P.transpose(a,a);var o=E.transformMat4,s=E.forEach;s(r,3,0,null,o,e),i&&s(i,3,0,null,o,a),n&&s(n,4,0,null,o,a),this.boundingBox&&this.updateBoundingBox()},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var i=0;i<r.length;i++){for(var n=r[i],a=0;a<n.attributeBuffers.length;a++){var o=n.attributeBuffers[a];e.gl.deleteBuffer(o.buffer)}n.indicesBuffer&&e.gl.deleteBuffer(n.indicesBuffer.buffer)}if(this.__vaoCache){var s=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var h=this.__vaoCache[l].vao;h&&s.deleteVertexArrayOES(h)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});J.STATIC_DRAW=$e.STATIC_DRAW;J.DYNAMIC_DRAW=$e.DYNAMIC_DRAW;J.STREAM_DRAW=$e.STREAM_DRAW;J.AttributeBuffer=$e.AttributeBuffer;J.IndicesBuffer=$e.IndicesBuffer;J.Attribute=yt;const bh=`vec3 calcAmbientSHLight(int idx, vec3 N) {
 int offset = 9 * idx;
 return ambientSHLightCoefficients[0]
 + ambientSHLightCoefficients[1] * N.x
 + ambientSHLightCoefficients[2] * N.y
 + ambientSHLightCoefficients[3] * N.z
 + ambientSHLightCoefficients[4] * N.x * N.z
 + ambientSHLightCoefficients[5] * N.z * N.y
 + ambientSHLightCoefficients[6] * N.y * N.x
 + ambientSHLightCoefficients[7] * (3.0 * N.z * N.z - 1.0)
 + ambientSHLightCoefficients[8] * (N.x * N.x - N.y * N.y);
}`;var ct="uniform vec3 ",Wr="uniform float ",pr="@export clay.header.",mr="@end",Ge=":unconfigurable;";const Ch=[pr+"directional_light",ct+"directionalLightDirection[DIRECTIONAL_LIGHT_COUNT]"+Ge,ct+"directionalLightColor[DIRECTIONAL_LIGHT_COUNT]"+Ge,mr,pr+"ambient_light",ct+"ambientLightColor[AMBIENT_LIGHT_COUNT]"+Ge,mr,pr+"ambient_sh_light",ct+"ambientSHLightColor[AMBIENT_SH_LIGHT_COUNT]"+Ge,ct+"ambientSHLightCoefficients[AMBIENT_SH_LIGHT_COUNT * 9]"+Ge,bh,mr,pr+"ambient_cubemap_light",ct+"ambientCubemapLightColor[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Ge,"uniform samplerCube ambientCubemapLightCubemap[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Ge,"uniform sampler2D ambientCubemapLightBRDFLookup[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Ge,mr,pr+"point_light",ct+"pointLightPosition[POINT_LIGHT_COUNT]"+Ge,Wr+"pointLightRange[POINT_LIGHT_COUNT]"+Ge,ct+"pointLightColor[POINT_LIGHT_COUNT]"+Ge,mr,pr+"spot_light",ct+"spotLightPosition[SPOT_LIGHT_COUNT]"+Ge,ct+"spotLightDirection[SPOT_LIGHT_COUNT]"+Ge,Wr+"spotLightRange[SPOT_LIGHT_COUNT]"+Ge,Wr+"spotLightUmbraAngleCosine[SPOT_LIGHT_COUNT]"+Ge,Wr+"spotLightPenumbraAngleCosine[SPOT_LIGHT_COUNT]"+Ge,Wr+"spotLightFalloffFactor[SPOT_LIGHT_COUNT]"+Ge,ct+"spotLightColor[SPOT_LIGHT_COUNT]"+Ge,mr].join(`
`);B.import(Ch);var pt=Tt.extend(function(){return{color:[1,1,1],intensity:1,castShadow:!0,shadowResolution:512,group:0}},{type:"",clone:function(){var e=Tt.prototype.clone.call(this);return e.color=Array.prototype.slice.call(this.color),e.intensity=this.intensity,e.castShadow=this.castShadow,e.shadowResolution=this.shadowResolution,e}}),Bi=function(e,t){this.normal=e||new C(0,1,0),this.distance=t||0};Bi.prototype={constructor:Bi,distanceToPoint:function(e){return E.dot(e.array,this.normal.array)-this.distance},projectPoint:function(e,t){t||(t=new C);var r=this.distanceToPoint(e);return E.scaleAndAdd(t.array,e.array,this.normal.array,-r),t._dirty=!0,t},normalize:function(){var e=1/E.len(this.normal.array);E.scale(this.normal.array,e),this.distance*=e},intersectFrustum:function(e){for(var t=e.vertices,r=this.normal.array,i=E.dot(t[0].array,r)>this.distance,n=1;n<8;n++)if(E.dot(t[n].array,r)>this.distance!=i)return!0},intersectLine:function(){var e=E.create();return function(t,r,i){var n=this.distanceToPoint(t),a=this.distanceToPoint(r);if(n>0&&a>0||n<0&&a<0)return null;var o=this.normal.array,s=this.distance,l=t.array;E.sub(e,r.array,t.array),E.normalize(e,e);var h=E.dot(o,e);if(h===0)return null;i||(i=new C);var u=(E.dot(o,l)-s)/h;return E.scaleAndAdd(i.array,l,e,-u),i._dirty=!0,i}}(),applyTransform:function(){var e=P.create(),t=G.create(),r=G.create();return r[3]=1,function(i){i=i.array,E.scale(r,this.normal.array,this.distance),G.transformMat4(r,r,i),this.distance=E.dot(r,this.normal.array),P.invert(e,i),P.transpose(e,e),t[3]=0,E.copy(t,this.normal.array),G.transformMat4(t,t,e),E.copy(this.normal.array,t)}}(),copy:function(e){E.copy(this.normal.array,e.normal.array),this.normal._dirty=!0,this.distance=e.distance},clone:function(){var e=new Bi;return e.copy(this),e}};const ls=Bi;var Se=E.set,$a=E.copy,eo=E.transformMat4,En=Math.min,Sn=Math.max,hs=function(){this.planes=[];for(var e=0;e<6;e++)this.planes.push(new ls);this.boundingBox=new Qe,this.vertices=[];for(var e=0;e<8;e++)this.vertices[e]=E.fromValues(0,0,0)};hs.prototype={setFromProjection:function(e){var t=this.planes,r=e.array,i=r[0],n=r[1],a=r[2],o=r[3],s=r[4],l=r[5],h=r[6],u=r[7],f=r[8],d=r[9],c=r[10],v=r[11],p=r[12],m=r[13],g=r[14],T=r[15];Se(t[0].normal.array,o-i,u-s,v-f),t[0].distance=-(T-p),t[0].normalize(),Se(t[1].normal.array,o+i,u+s,v+f),t[1].distance=-(T+p),t[1].normalize(),Se(t[2].normal.array,o+n,u+l,v+d),t[2].distance=-(T+m),t[2].normalize(),Se(t[3].normal.array,o-n,u-l,v-d),t[3].distance=-(T-m),t[3].normalize(),Se(t[4].normal.array,o-a,u-h,v-c),t[4].distance=-(T-g),t[4].normalize(),Se(t[5].normal.array,o+a,u+h,v+c),t[5].distance=-(T+g),t[5].normalize();var x=this.boundingBox,_=this.vertices;if(T===0){var S=l/i,A=-g/(c-1),b=-g/(c+1),w=-b/l,L=-A/l;x.min.set(-w*S,-w,b),x.max.set(w*S,w,A),Se(_[0],-w*S,-w,b),Se(_[1],-w*S,w,b),Se(_[2],w*S,-w,b),Se(_[3],w*S,w,b),Se(_[4],-L*S,-L,A),Se(_[5],-L*S,L,A),Se(_[6],L*S,-L,A),Se(_[7],L*S,L,A)}else{var I=(-1-p)/i,M=(1-p)/i,N=(1-m)/l,U=(-1-m)/l,D=(-1-g)/c,z=(1-g)/c;x.min.set(Math.min(I,M),Math.min(U,N),Math.min(z,D)),x.max.set(Math.max(M,I),Math.max(N,U),Math.max(D,z));var H=x.min.array,W=x.max.array;Se(_[0],H[0],H[1],H[2]),Se(_[1],H[0],W[1],H[2]),Se(_[2],W[0],H[1],H[2]),Se(_[3],W[0],W[1],H[2]),Se(_[4],H[0],H[1],W[2]),Se(_[5],H[0],W[1],W[2]),Se(_[6],W[0],H[1],W[2]),Se(_[7],W[0],W[1],W[2])}},getTransformedBoundingBox:function(){var e=E.create();return function(t,r){var i=this.vertices,n=r.array,a=t.min,o=t.max,s=a.array,l=o.array,h=i[0];eo(e,h,n),$a(s,e),$a(l,e);for(var u=1;u<8;u++)h=i[u],eo(e,h,n),s[0]=En(e[0],s[0]),s[1]=En(e[1],s[1]),s[2]=En(e[2],s[2]),l[0]=Sn(e[0],l[0]),l[1]=Sn(e[1],l[1]),l[2]=Sn(e[2],l[2]);return a._dirty=!0,o._dirty=!0,t}}()};const sa=hs;var Cr=Tt.extend(function(){return{projectionMatrix:new F,invProjectionMatrix:new F,viewMatrix:new F,frustum:new sa}},function(){this.update(!0)},{update:function(e){Tt.prototype.update.call(this,e),F.invert(this.viewMatrix,this.worldTransform),this.updateProjectionMatrix(),F.invert(this.invProjectionMatrix,this.projectionMatrix),this.frustum.setFromProjection(this.projectionMatrix)},setViewMatrix:function(e){F.copy(this.viewMatrix,e),F.invert(this.worldTransform,e),this.decomposeWorldTransform()},decomposeProjectionMatrix:function(){},setProjectionMatrix:function(e){F.copy(this.projectionMatrix,e),F.invert(this.invProjectionMatrix,e),this.decomposeProjectionMatrix()},updateProjectionMatrix:function(){},castRay:function(){var e=G.create();return function(t,r){var i=r!==void 0?r:new Gi,n=t.array[0],a=t.array[1];return G.set(e,n,a,-1,1),G.transformMat4(e,e,this.invProjectionMatrix.array),G.transformMat4(e,e,this.worldTransform.array),E.scale(i.origin.array,e,1/e[3]),G.set(e,n,a,1,1),G.transformMat4(e,e,this.invProjectionMatrix.array),G.transformMat4(e,e,this.worldTransform.array),E.scale(e,e,1/e[3]),E.sub(i.direction.array,e,i.origin.array),E.normalize(i.direction.array,i.direction.array),i.direction._dirty=!0,i.origin._dirty=!0,i}}()}),Lh=P.create(),to=P.create(),An={};function Mh(e){var t=[],r=Object.keys(e);r.sort();for(var i=0;i<r.length;i++){var n=r[i];t.push(n+" "+e[n])}var a=t.join(`
`);if(An[a])return An[a];var o=Ae.genGUID();return An[a]=o,o}function tn(){this.opaque=[],this.transparent=[],this._opaqueCount=0,this._transparentCount=0}tn.prototype.startCount=function(){this._opaqueCount=0,this._transparentCount=0};tn.prototype.add=function(e,t){t?this.transparent[this._transparentCount++]=e:this.opaque[this._opaqueCount++]=e};tn.prototype.endCount=function(){this.transparent.length=this._transparentCount,this.opaque.length=this._opaqueCount};var Wt=Tt.extend(function(){return{material:null,lights:[],viewBoundingBoxLastFrame:new Qe,shadowUniforms:{},_cameraList:[],_lightUniforms:{},_previousLightNumber:{},_lightNumber:{},_lightProgramKeys:{},_nodeRepository:{},_renderLists:new Yo(20)}},function(){this._scene=this},{addToScene:function(e){e instanceof Cr?(this._cameraList.length>0&&console.warn("Found multiple camera in one scene. Use the fist one."),this._cameraList.push(e)):e instanceof pt&&this.lights.push(e),e.name&&(this._nodeRepository[e.name]=e)},removeFromScene:function(e){var t;e instanceof Cr?(t=this._cameraList.indexOf(e),t>=0&&this._cameraList.splice(t,1)):e instanceof pt&&(t=this.lights.indexOf(e),t>=0&&this.lights.splice(t,1)),e.name&&delete this._nodeRepository[e.name]},getNode:function(e){return this._nodeRepository[e]},setMainCamera:function(e){var t=this._cameraList.indexOf(e);t>=0&&this._cameraList.splice(t,1),this._cameraList.unshift(e)},getMainCamera:function(){return this._cameraList[0]},getLights:function(){return this.lights},updateLights:function(){var e=this.lights;this._previousLightNumber=this._lightNumber;for(var t={},r=0;r<e.length;r++){var i=e[r];if(!i.invisible){var n=i.group;t[n]||(t[n]={}),t[n][i.type]=t[n][i.type]||0,t[n][i.type]++}}this._lightNumber=t;for(var a in t)this._lightProgramKeys[a]=Mh(t[a]);this._updateLightUniforms()},cloneNode:function(e){var t=e.clone(),r={};function i(n,a){r[n.__uid__]=a;for(var o=0;o<n._children.length;o++){var s=n._children[o],l=a._children[o];i(s,l)}}return i(e,t),t.traverse(function(n){n.skeleton&&(n.skeleton=n.skeleton.clone(r)),n.material&&(n.material=n.material.clone())}),t},updateRenderList:function(e,t){var r=e.__uid__,i=this._renderLists.get(r);i||(i=new tn,this._renderLists.put(r,i)),i.startCount(),t&&(this.viewBoundingBoxLastFrame.min.set(1/0,1/0,1/0),this.viewBoundingBoxLastFrame.max.set(-1/0,-1/0,-1/0));var n=this.material&&this.material.transparent||!1;return this._doUpdateRenderList(this,e,n,i,t),i.endCount(),i},getRenderList:function(e){return this._renderLists.get(e.__uid__)},_doUpdateRenderList:function(e,t,r,i,n){if(!e.invisible)for(var a=0;a<e._children.length;a++){var o=e._children[a];if(o.isRenderable()){var s=o.isSkinnedMesh()?Lh:o.worldTransform.array,l=o.geometry;P.multiplyAffine(to,t.viewMatrix.array,s),(n&&!l.boundingBox||!this.isFrustumCulled(o,t,to))&&i.add(o,o.material.transparent||r)}o._children.length>0&&this._doUpdateRenderList(o,t,r,i,n)}},isFrustumCulled:function(){var e=new Qe,t=new F;return function(r,i,n){var a=r.boundingBox;if(a||(r.skeleton&&r.skeleton.boundingBox?a=r.skeleton.boundingBox:a=r.geometry.boundingBox),!a)return!1;if(t.array=n,e.transformFrom(a,t),r.castShadow&&this.viewBoundingBoxLastFrame.union(e),r.frustumCulling){if(!e.intersectBoundingBox(i.frustum.boundingBox))return!0;t.array=i.projectionMatrix.array,e.max.array[2]>0&&e.min.array[2]<0&&(e.max.array[2]=-1e-20),e.applyProjection(t);var o=e.min.array,s=e.max.array;if(s[0]<-1||o[0]>1||s[1]<-1||o[1]>1||s[2]<-1||o[2]>1)return!0}return!1}}(),_updateLightUniforms:function(){var e=this.lights;e.sort(Rh);var t=this._lightUniforms;for(var r in t)for(var i in t[r])t[r][i].value.length=0;for(var n=0;n<e.length;n++){var a=e[n];if(!a.invisible){var r=a.group;for(var i in a.uniformTemplates){var o=a.uniformTemplates[i],s=o.value(a);if(s!=null){t[r]||(t[r]={}),t[r][i]||(t[r][i]={type:"",value:[]});var l=t[r][i];switch(l.type=o.type+"v",o.type){case"1i":case"1f":case"t":l.value.push(s);break;case"2f":case"3f":case"4f":for(var h=0;h<s.length;h++)l.value.push(s[h]);break;default:console.error("Unkown light uniform type "+o.type)}}}}}},getLightGroups:function(){var e=[];for(var t in this._lightNumber)e.push(t);return e},getNumberChangedLightGroups:function(){var e=[];for(var t in this._lightNumber)this.isLightNumberChanged(t)&&e.push(t);return e},isLightNumberChanged:function(e){var t=this._previousLightNumber,r=this._lightNumber;for(var i in r[e])if(!t[e]||r[e][i]!==t[e][i])return!0;for(var i in t[e])if(!r[e]||r[e][i]!==t[e][i])return!0;return!1},getLightsNumbers:function(e){return this._lightNumber[e]},getProgramKey:function(e){return this._lightProgramKeys[e]},setLightUniforms:function(){function e(t,r,i){for(var n in t){var a=t[n];if(a.type==="tv"){if(!r.hasUniform(n))continue;for(var o=[],s=0;s<a.value.length;s++){var l=a.value[s],h=r.takeCurrentTextureSlot(i,l);o.push(h)}r.setUniform(i.gl,"1iv",n,o)}else r.setUniform(i.gl,a.type,n,a.value)}}return function(t,r,i){e(this._lightUniforms[r],t,i),e(this.shadowUniforms,t,i)}}(),dispose:function(){this.material=null,this._opaqueList=[],this._transparentList=[],this.lights=[],this._lightUniforms={},this._lightNumber={},this._nodeRepository={}}});function Rh(e,t){if(t.castShadow&&!e.castShadow)return!0}var Ai=vi.isPowerOfTwo,Ph=["px","nx","py","ny","pz","nz"],sr=O.extend(function(){return{image:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},pixels:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},mipmaps:[]}},{textureType:"textureCube",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,i=this.type;t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_S,this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_T,this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,this.getAvailableMinFilter());var n=e.getGLExtension("EXT_texture_filter_anisotropic");if(n&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),i===36193){var a=e.getGLExtension("OES_texture_half_float");a||(i=R.FLOAT)}if(this.mipmaps.length)for(var o=this.width,s=this.height,l=0;l<this.mipmaps.length;l++){var h=this.mipmaps[l];this._updateTextureData(t,h,l,o,s,r,i),o/=2,s/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,i),!this.NPOT&&this.useMipmap&&t.generateMipmap(t.TEXTURE_CUBE_MAP);t.bindTexture(t.TEXTURE_CUBE_MAP,null)},_updateTextureData:function(e,t,r,i,n,a,o){for(var s=0;s<6;s++){var l=Ph[s],h=t.image&&t.image[l];h?e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+s,r,a,a,o,h):e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+s,r,a,i,n,0,a,o,t.pixels&&t.pixels[l])}},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_CUBE_MAP))},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,null)},isPowerOfTwo:function(){return this.image.px?Ai(this.image.px.width)&&Ai(this.image.px.height):Ai(this.width)&&Ai(this.height)},isRenderable:function(){return this.image.px?gr(this.image.px)&&gr(this.image.nx)&&gr(this.image.py)&&gr(this.image.ny)&&gr(this.image.pz)&&gr(this.image.nz):!!(this.width&&this.height)},load:function(e,t){var r=0,i=this;return Ae.each(e,function(n,a){var o=oe.createImage();t&&(o.crossOrigin=t),o.onload=function(){r--,r===0&&(i.dirty(),i.trigger("success",i))},o.onerror=function(){r--},r++,o.src=n,i.image[a]=o}),this}});Object.defineProperty(sr.prototype,"width",{get:function(){return this.image&&this.image.px?this.image.px.width:this._width},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(sr.prototype,"height",{get:function(){return this.image&&this.image.px?this.image.px.height:this._height},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});function gr(e){return e.width>0&&e.height>0}var Dh=Cr.extend({fov:50,aspect:1,near:.1,far:2e3},{updateProjectionMatrix:function(){var e=this.fov/180*Math.PI;this.projectionMatrix.perspective(e,this.aspect,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array,t=Math.atan(1/e[5])*2;this.fov=t/Math.PI*180,this.aspect=e[5]/e[0],this.near=e[14]/(e[10]-1),this.far=e[14]/(e[10]+1)},clone:function(){var e=Cr.prototype.clone.call(this);return e.fov=this.fov,e.aspect=this.aspect,e.near=this.near,e.far=this.far,e}});const Be=Dh;var wi="framebuffer",Lt="renderbuffer",ro=Lt+"_width",io=Lt+"_height",wn=Lt+"_attached",bn="depthtexture_attached",jt=R.FRAMEBUFFER,qr=R.RENDERBUFFER,jr=R.DEPTH_ATTACHMENT,us=R.COLOR_ATTACHMENT0,we=He.extend({depthBuffer:!0,viewport:null,_width:0,_height:0,_textures:null,_boundRenderer:null},function(){this._cache=new wr,this._textures={}},{getTextureWidth:function(){return this._width},getTextureHeight:function(){return this._height},bind:function(e){if(e.__currentFrameBuffer){if(e.__currentFrameBuffer===this)return;console.warn("Renderer already bound with another framebuffer. Unbind it first")}e.__currentFrameBuffer=this;var t=e.gl;t.bindFramebuffer(jt,this._getFrameBufferGL(e)),this._boundRenderer=e;var r=this._cache;r.put("viewport",e.viewport);var i=!1,n,a;for(var o in this._textures){i=!0;var s=this._textures[o];s&&(n=s.texture.width,a=s.texture.height,this._doAttach(e,s.texture,o,s.target))}this._width=n,this._height=a,!i&&this.depthBuffer&&console.error("Must attach texture before bind, or renderbuffer may have incorrect width and height."),this.viewport?e.setViewport(this.viewport):e.setViewport(0,0,n,a,1);var l=r.get("attached_textures");if(l){for(var o in l)if(!this._textures[o]){var h=l[o];this._doDetach(t,o,h)}}if(!r.get(bn)&&this.depthBuffer){r.miss(Lt)&&r.put(Lt,t.createRenderbuffer());var u=r.get(Lt);(n!==r.get(ro)||a!==r.get(io))&&(t.bindRenderbuffer(qr,u),t.renderbufferStorage(qr,t.DEPTH_COMPONENT16,n,a),r.put(ro,n),r.put(io,a),t.bindRenderbuffer(qr,null)),r.get(wn)||(t.framebufferRenderbuffer(jt,jr,qr,u),r.put(wn,!0))}},unbind:function(e){e.__currentFrameBuffer=null;var t=e.gl;t.bindFramebuffer(jt,null),this._boundRenderer=null,this._cache.use(e.__uid__);var r=this._cache.get("viewport");r&&e.setViewport(r),this.updateMipmap(e)},updateMipmap:function(e){var t=e.gl;for(var r in this._textures){var i=this._textures[r];if(i){var n=i.texture;if(!n.NPOT&&n.useMipmap&&n.minFilter===O.LINEAR_MIPMAP_LINEAR){var a=n.textureType==="textureCube"?R.TEXTURE_CUBE_MAP:R.TEXTURE_2D;t.bindTexture(a,n.getWebGLTexture(e)),t.generateMipmap(a),t.bindTexture(a,null)}}}},checkStatus:function(e){return e.checkFramebufferStatus(jt)},_getFrameBufferGL:function(e){var t=this._cache;return t.use(e.__uid__),t.miss(wi)&&t.put(wi,e.gl.createFramebuffer()),t.get(wi)},attach:function(e,t,r){if(!e.width)throw new Error("The texture attached to color buffer is not a valid.");t=t||us,r=r||R.TEXTURE_2D;var i=this._boundRenderer,n=i&&i.gl,a;if(n){var o=this._cache;o.use(i.__uid__),a=o.get("attached_textures")}var s=this._textures[t];if(!(s&&s.target===r&&s.texture===e&&a&&a[t]!=null)){var l=!0;i&&(l=this._doAttach(i,e,t,r),this.viewport||i.setViewport(0,0,e.width,e.height,1)),l&&(this._textures[t]=this._textures[t]||{},this._textures[t].texture=e,this._textures[t].target=r)}},_doAttach:function(e,t,r,i){var n=e.gl,a=t.getWebGLTexture(e),o=this._cache.get("attached_textures");if(o&&o[r]){var s=o[r];if(s.texture===t&&s.target===i)return}r=+r;var l=!0;if(r===jr||r===R.DEPTH_STENCIL_ATTACHMENT){var h=e.getGLExtension("WEBGL_depth_texture");if(h||(console.error("Depth texture is not supported by the browser"),l=!1),t.format!==R.DEPTH_COMPONENT&&t.format!==R.DEPTH_STENCIL&&(console.error("The texture attached to depth buffer is not a valid."),l=!1),l){var u=this._cache.get(Lt);u&&(n.framebufferRenderbuffer(jt,jr,qr,null),n.deleteRenderbuffer(u),this._cache.put(Lt,!1)),this._cache.put(wn,!1),this._cache.put(bn,!0)}}return n.framebufferTexture2D(jt,r,i,a,0),o||(o={},this._cache.put("attached_textures",o)),o[r]=o[r]||{},o[r].texture=t,o[r].target=i,l},_doDetach:function(e,t,r){e.framebufferTexture2D(jt,t,r,null,0);var i=this._cache.get("attached_textures");i&&i[t]&&(i[t]=null),(t===jr||t===R.DEPTH_STENCIL_ATTACHMENT)&&this._cache.put(bn,!1)},detach:function(e,t){if(this._textures[e]=null,this._boundRenderer){var r=this._cache;r.use(this._boundRenderer.__uid__),this._doDetach(this._boundRenderer.gl,e,t)}},dispose:function(e){var t=e.gl,r=this._cache;r.use(e.__uid__);var i=r.get(Lt);i&&t.deleteRenderbuffer(i);var n=r.get(wi);n&&t.deleteFramebuffer(n),r.deleteContext(e.__uid__),this._textures={}}});we.DEPTH_ATTACHMENT=jr;we.COLOR_ATTACHMENT0=us;we.STENCIL_ATTACHMENT=R.STENCIL_ATTACHMENT;we.DEPTH_STENCIL_ATTACHMENT=R.DEPTH_STENCIL_ATTACHMENT;var Ih=["px","nx","py","ny","pz","nz"],la=He.extend(function(){var e={position:new C,far:1e3,near:.1,texture:null,shadowMapPass:null},t=e._cameras={px:new Be({fov:90}),nx:new Be({fov:90}),py:new Be({fov:90}),ny:new Be({fov:90}),pz:new Be({fov:90}),nz:new Be({fov:90})};return t.px.lookAt(C.POSITIVE_X,C.NEGATIVE_Y),t.nx.lookAt(C.NEGATIVE_X,C.NEGATIVE_Y),t.py.lookAt(C.POSITIVE_Y,C.POSITIVE_Z),t.ny.lookAt(C.NEGATIVE_Y,C.NEGATIVE_Z),t.pz.lookAt(C.POSITIVE_Z,C.NEGATIVE_Y),t.nz.lookAt(C.NEGATIVE_Z,C.NEGATIVE_Y),e._frameBuffer=new we,e},{getCamera:function(e){return this._cameras[e]},render:function(e,t,r){var i=e.gl;r||t.update();for(var n=this.texture.width,a=2*Math.atan(n/(n-.5))/Math.PI*180,o=0;o<6;o++){var s=Ih[o],l=this._cameras[s];if(C.copy(l.position,this.position),l.far=this.far,l.near=this.near,l.fov=a,this.shadowMapPass){l.update();var h=t.getBoundingBox();h.applyTransform(l.viewMatrix),t.viewBoundingBoxLastFrame.copy(h),this.shadowMapPass.render(e,t,l,!0)}this._frameBuffer.attach(this.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+o),this._frameBuffer.bind(e),e.render(t,l,!0),this._frameBuffer.unbind(e)}},dispose:function(e){this._frameBuffer.dispose(e)}}),Nh=J.extend({dynamic:!1,widthSegments:1,heightSegments:1},function(){this.build()},{build:function(){for(var e=this.heightSegments,t=this.widthSegments,r=this.attributes,i=[],n=[],a=[],o=[],s=0;s<=e;s++)for(var l=s/e,h=0;h<=t;h++){var u=h/t;if(i.push([2*u-1,2*l-1,0]),n&&n.push([u,l]),a&&a.push([0,0,1]),h<t&&s<e){var f=h+s*(t+1);o.push([f,f+1,f+t+1]),o.push([f+t+1,f+1,f+t+2])}}r.position.fromArray(i),r.texcoord0.fromArray(n),r.normal.fromArray(a),this.initIndicesFromArray(o),this.boundingBox=new Qe,this.boundingBox.min.set(-1,-1,0),this.boundingBox.max.set(1,1,0)}});const rn=Nh;var ye=new F,Oh=J.extend({dynamic:!1,widthSegments:1,heightSegments:1,depthSegments:1,inside:!1},function(){this.build()},{build:function(){var e={px:_r("px",this.depthSegments,this.heightSegments),nx:_r("nx",this.depthSegments,this.heightSegments),py:_r("py",this.widthSegments,this.depthSegments),ny:_r("ny",this.widthSegments,this.depthSegments),pz:_r("pz",this.widthSegments,this.heightSegments),nz:_r("nz",this.widthSegments,this.heightSegments)},t=["position","texcoord0","normal"],r=0,i=0;for(var n in e)r+=e[n].vertexCount,i+=e[n].indices.length;for(var a=0;a<t.length;a++)this.attributes[t[a]].init(r);this.indices=new oe.Uint16Array(i);var o=0,s=0;for(var n in e){for(var l=e[n],a=0;a<t.length;a++)for(var h=t[a],u=l.attributes[h].value,f=l.attributes[h].size,d=h==="normal",c=0;c<u.length;c++){var v=u[c];this.inside&&d&&(v=-v),this.attributes[h].value[c+f*s]=v}for(var p=l.indices.length,c=0;c<l.indices.length;c++)this.indices[c+o]=s+l.indices[this.inside?p-c-1:c];o+=l.indices.length,s+=l.vertexCount}this.boundingBox=new Qe,this.boundingBox.max.set(1,1,1),this.boundingBox.min.set(-1,-1,-1)}});function _r(e,t,r){ye.identity();var i=new rn({widthSegments:t,heightSegments:r});switch(e){case"px":F.translate(ye,ye,C.POSITIVE_X),F.rotateY(ye,ye,Math.PI/2);break;case"nx":F.translate(ye,ye,C.NEGATIVE_X),F.rotateY(ye,ye,-Math.PI/2);break;case"py":F.translate(ye,ye,C.POSITIVE_Y),F.rotateX(ye,ye,-Math.PI/2);break;case"ny":F.translate(ye,ye,C.NEGATIVE_Y),F.rotateX(ye,ye,Math.PI/2);break;case"pz":F.translate(ye,ye,C.POSITIVE_Z);break;case"nz":F.translate(ye,ye,C.NEGATIVE_Z),F.rotateY(ye,ye,Math.PI);break}return i.applyTransform(ye),i}const fs=Oh,Bh=`@export clay.skybox.vertex
#define SHADER_NAME skybox
uniform mat4 world : WORLD;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
varying vec3 v_WorldPosition;
void main()
{
 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end
@export clay.skybox.fragment
#define PI 3.1415926
uniform mat4 viewInverse : VIEWINVERSE;
#ifdef EQUIRECTANGULAR
uniform sampler2D environmentMap;
#else
uniform samplerCube environmentMap;
#endif
uniform float lod: 0.0;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
@import clay.util.srgb
@import clay.util.ACES
void main()
{
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
#ifdef EQUIRECTANGULAR
 float phi = acos(V.y);
 float theta = atan(-V.x, V.z) + PI * 0.5;
 vec2 uv = vec2(theta / 2.0 / PI, phi / PI);
 vec4 texel = decodeHDR(texture2D(environmentMap, fract(uv)));
#else
 #if defined(LOD) || defined(SUPPORT_TEXTURE_LOD)
 vec4 texel = decodeHDR(textureCubeLodEXT(environmentMap, V, lod));
 #else
 vec4 texel = decodeHDR(textureCube(environmentMap, V));
 #endif
#endif
#ifdef SRGB_DECODE
 texel = sRGBToLinear(texel);
#endif
#ifdef TONEMAPPING
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
#ifdef SRGB_ENCODE
 texel = linearTosRGB(texel);
#endif
 gl_FragColor = encodeHDR(vec4(texel.rgb, 1.0));
}
@end`;B.import(Bh);var Uh=ir.extend(function(){var e=new B({vertex:B.source("clay.skybox.vertex"),fragment:B.source("clay.skybox.fragment")}),t=new ut({shader:e,depthMask:!1});return{scene:null,geometry:new fs,material:t,environmentMap:null,culling:!1,_dummyCamera:new Be}},function(){var e=this.scene;e&&this.attachScene(e),this.environmentMap&&this.setEnvironmentMap(this.environmentMap)},{attachScene:function(e){this.scene&&this.detachScene(),e.skybox=this,this.scene=e,e.on("beforerender",this._beforeRenderScene,this)},detachScene:function(){this.scene&&(this.scene.off("beforerender",this._beforeRenderScene),this.scene.skybox=null),this.scene=null},dispose:function(e){this.detachScene(),this.geometry.dispose(e)},setEnvironmentMap:function(e){e.textureType==="texture2D"?(this.material.define("EQUIRECTANGULAR"),e.minFilter=O.LINEAR):this.material.undefine("EQUIRECTANGULAR"),this.material.set("environmentMap",e)},getEnvironmentMap:function(){return this.material.get("environmentMap")},_beforeRenderScene:function(e,t,r){this.renderSkybox(e,r)},renderSkybox:function(e,t){var r=this._dummyCamera;r.aspect=e.getViewportAspect(),r.fov=t.fov||50,r.updateProjectionMatrix(),F.invert(r.invProjectionMatrix,r.projectionMatrix),r.worldTransform.copy(t.worldTransform),r.viewMatrix.copy(t.viewMatrix),this.position.copy(t.getWorldPosition()),this.update(),e.gl.disable(e.gl.BLEND),this.material.get("lod")>0?this.material.define("fragment","LOD"):this.material.undefine("fragment","LOD"),e.renderPass([this],r)}});const ii=Uh;var Fh=542327876,zh=131072,Vh=512,Gh=4;function ha(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}var Hh=31,kh=ha("DXT1"),Wh=ha("DXT3"),qh=ha("DXT5"),Xh=0,Zh=1,Kh=2,Qh=3,jh=4,Yh=7,Jh=20,$h=21,eu=28,tu={parse:function(e,t){var r=new Int32Array(e,0,Hh);if(r[Xh]!==Fh||!r(Jh)&Gh)return null;var i=r($h),n=r[jh],a=r[Qh],o=r[eu]&Vh,s=r[Kh]&zh,l,h;switch(i){case kh:l=8,h=O.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Wh:l=16,h=O.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case qh:l=16,h=O.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return null}var u=r[Zh]+4,f=o?6:1,d=1;s&&(d=Math.max(1,r[Yh]));for(var c=[],v=0;v<f;v++){var p=n,m=a;c[v]=new Q({width:p,height:m,format:h});for(var g=[],T=0;T<d;T++){var x=Math.max(4,p)/4*Math.max(4,m)/4*l,_=new Uint8Array(e,u,x);u+=x,p*=.5,m*=.5,g[T]=_}c[v].pixels=g[0],s&&(c[v].mipmaps=g)}if(t)t.width=c[0].width,t.height=c[0].height,t.format=c[0].format,t.pixels=c[0].pixels,t.mipmaps=c[0].mipmaps;else return c[0]}},Ui=String.fromCharCode,ru=8,iu=32767;function nu(e,t,r,i){if(e[3]>0){var n=Math.pow(2,e[3]-128-8+i);t[r+0]=e[0]*n,t[r+1]=e[1]*n,t[r+2]=e[2]*n}else t[r+0]=0,t[r+1]=0,t[r+2]=0;return t[r+3]=1,t}function au(e,t,r){for(var i="",n=t;n<r;n++)i+=Ui(e[n]);return i}function ou(e,t){t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3]}function no(e,t,r,i){for(var n=0,a=0,o=i;o>0;)if(e[a][0]=t[r++],e[a][1]=t[r++],e[a][2]=t[r++],e[a][3]=t[r++],e[a][0]===1&&e[a][1]===1&&e[a][2]===1){for(var s=e[a][3]<<n>>>0;s>0;s--)ou(e[a-1],e[a]),a++,o--;n+=8}else a++,o--,n=0;return r}function su(e,t,r,i){if(i<ru|i>iu)return no(e,t,r,i);var n=t[r++];if(n!=2)return no(e,t,r-1,i);if(e[0][1]=t[r++],e[0][2]=t[r++],n=t[r++],(e[0][2]<<8>>>0|n)>>>0!==i)return null;for(var n=0;n<4;n++)for(var a=0;a<i;){var o=t[r++];if(o>128){o=(o&127)>>>0;for(var s=t[r++];o--;)e[a++][n]=s}else for(;o--;)e[a++][n]=t[r++]}return r}var lu={parseRGBE:function(e,t,r){r==null&&(r=0);var i=new Uint8Array(e),n=i.length;if(au(i,0,2)==="#?"){for(var a=2;a<n&&!(Ui(i[a])===`
`&&Ui(i[a+1])===`
`);a++);if(!(a>=n)){a+=2;for(var o="";a<n;a++){var s=Ui(i[a]);if(s===`
`)break;o+=s}var l=o.split(" "),h=parseInt(l[1]),u=parseInt(l[3]);if(!(!u||!h)){for(var f=a+1,d=[],c=0;c<u;c++){d[c]=[];for(var v=0;v<4;v++)d[c][v]=0}for(var p=new Float32Array(u*h*4),m=0,g=0;g<h;g++){var f=su(d,i,f,u);if(!f)return null;for(var c=0;c<u;c++)nu(d[c],p,m,r),m+=4}return t||(t=new Q),t.width=u,t.height=h,t.pixels=p,t.type=O.FLOAT,t}}}},parseRGBEFromPNG:function(e){}};const hu=lu;var Fi={loadTexture:function(e,t,r,i){var n;if(typeof t=="function"?(r=t,i=r,t={}):t=t||{},typeof e=="string"){if(e.match(/.hdr$/)||t.fileType==="hdr")return n=new Q({width:0,height:0,sRGB:!1}),Fi._fetchTexture(e,function(a){hu.parseRGBE(a,n,t.exposure),n.dirty(),r&&r(n)},i),n;e.match(/.dds$/)||t.fileType==="dds"?(n=new Q({width:0,height:0}),Fi._fetchTexture(e,function(a){tu.parse(a,n),n.dirty(),r&&r(n)},i)):(n=new Q,n.load(e),n.success(r),n.error(i))}else typeof e=="object"&&typeof e.px<"u"&&(n=new sr,n.load(e),n.success(r),n.error(i));return n},loadPanorama:function(e,t,r,i,n,a){var o=this;typeof i=="function"?(n=i,a=n,i={}):i=i||{},Fi.loadTexture(t,i,function(s){s.flipY=i.flipY||!1,o.panoramaToCubeMap(e,s,r,i),s.dispose(e),n&&n(r)},a)},panoramaToCubeMap:function(e,t,r,i){var n=new la,a=new ii({scene:new Wt});return a.setEnvironmentMap(t),i=i||{},i.encodeRGBM&&a.material.define("fragment","RGBM_ENCODE"),r.sRGB=t.sRGB,n.texture=r,n.render(e,a.scene),n.texture=null,n.dispose(e),r},heightToNormal:function(e,t){var r=document.createElement("canvas"),i=r.width=e.width,n=r.height=e.height,a=r.getContext("2d");a.drawImage(e,0,0,i,n),t=t||!1;for(var o=a.getImageData(0,0,i,n),s=a.createImageData(i,n),l=0;l<o.data.length;l+=4){if(t){var h=o.data[l],u=o.data[l+1],f=o.data[l+2],d=Math.abs(h-u)+Math.abs(u-f);if(d>20)return console.warn("Given image is not a height map"),e}var c,v,p,m;l%(i*4)===0?(c=o.data[l],p=o.data[l+4]):l%(i*4)===(i-1)*4?(c=o.data[l-4],p=o.data[l]):(c=o.data[l-4],p=o.data[l+4]),l<i*4?(v=o.data[l],m=o.data[l+i*4]):l>i*(n-1)*4?(v=o.data[l-i*4],m=o.data[l]):(v=o.data[l-i*4],m=o.data[l+i*4]),s.data[l]=c-p+127,s.data[l+1]=v-m+127,s.data[l+2]=255,s.data[l+3]=255}return a.putImageData(s,0,0),r},isHeightImage:function(e,t,r){if(!e||!e.width||!e.height)return!1;var i=document.createElement("canvas"),n=i.getContext("2d"),a=t||32;r=r||20,i.width=i.height=a,n.drawImage(e,0,0,a,a);for(var o=n.getImageData(0,0,a,a),s=0;s<o.data.length;s+=4){var l=o.data[s],h=o.data[s+1],u=o.data[s+2],f=Math.abs(l-h)+Math.abs(h-u);if(f>r)return!1}return!0},_fetchTexture:function(e,t,r){oe.request.get({url:e,responseType:"arraybuffer",onload:t,onerror:r})},createChessboard:function(e,t,r,i){e=e||512,t=t||64,r=r||"black",i=i||"white";var n=Math.ceil(e/t),a=document.createElement("canvas");a.width=e,a.height=e;var o=a.getContext("2d");o.fillStyle=i,o.fillRect(0,0,e,e),o.fillStyle=r;for(var s=0;s<n;s++)for(var l=0;l<n;l++){var h=l%2?s%2:s%2-1;h&&o.fillRect(s*t,l*t,t,t)}var u=new Q({image:a,anisotropic:8});return u},createBlank:function(e){var t=document.createElement("canvas");t.width=1,t.height=1;var r=t.getContext("2d");r.fillStyle=e,r.fillRect(0,0,1,1);var i=new Q({image:t});return i}};const or=Fi;var Wn=["mousedown","mouseup","mousemove","mouseover","mouseout","click","dblclick","contextmenu"];function qn(e){return"_on"+e}var Xn=function(e){var t=this;this._texture=new Q({anisotropic:32,flipY:!1,surface:this,dispose:function(r){t.dispose(),Q.prototype.dispose.call(this,r)}}),Wn.forEach(function(r){this[qn(r)]=function(i){i.triangle&&this._meshes.forEach(function(n){this.dispatchEvent(r,n,i.triangle,i.point)},this)}},this),this._meshes=[],e&&this.setECharts(e),this.onupdate=null};Xn.prototype={constructor:Xn,getTexture:function(){return this._texture},setECharts:function(e){this._chart=e;var t=e.getDom();if(!(t instanceof HTMLCanvasElement))console.error("ECharts must init on canvas if it is used as texture."),t=document.createElement("canvas");else{var r=this,i=e.getZr(),n=i.__oldRefreshImmediately||i.refreshImmediately;i.refreshImmediately=function(){n.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},i.__oldRefreshImmediately=n}this._texture.image=t,this._texture.dirty(),this.onupdate&&this.onupdate()},dispatchEvent:function(){var e=new C,t=new C,r=new C,i=new nt,n=new nt,a=new nt,o=new nt,s=new C;return function(l,h,u,f){var d=h.geometry,c=d.attributes.position,v=d.attributes.texcoord0,p=C.dot,m=C.cross;c.get(u[0],e.array),c.get(u[1],t.array),c.get(u[2],r.array),v.get(u[0],i.array),v.get(u[1],n.array),v.get(u[2],a.array),m(s,t,r);var g=p(e,s),T=p(f,s)/g;m(s,r,e);var x=p(f,s)/g;m(s,e,t);var _=p(f,s)/g;nt.scale(o,i,T),nt.scaleAndAdd(o,o,n,x),nt.scaleAndAdd(o,o,a,_);var S=o.x*this._chart.getWidth(),A=o.y*this._chart.getHeight();this._chart.getZr().handler.dispatch(l,{zrX:S,zrY:A})}}(),attachToMesh:function(e){this._meshes.indexOf(e)>=0||(Wn.forEach(function(t){e.on(t,this[qn(t)],this)},this),this._meshes.push(e))},detachFromMesh:function(e){var t=this._meshes.indexOf(e);t>=0&&this._meshes.splice(t,1),Wn.forEach(function(r){e.off(r,this[qn(r)])},this)},dispose:function(){this._meshes.forEach(function(e){this.detachFromMesh(e)},this)}};var uu=Cr.extend({left:-1,right:1,near:-1,far:1,top:1,bottom:-1},{updateProjectionMatrix:function(){this.projectionMatrix.ortho(this.left,this.right,this.bottom,this.top,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array;this.left=(-1-e[12])/e[0],this.right=(1-e[12])/e[0],this.top=(1-e[13])/e[5],this.bottom=(-1-e[13])/e[5],this.near=-(-1-e[14])/e[10],this.far=-(1-e[14])/e[10]},clone:function(){var e=Cr.prototype.clone.call(this);return e.left=this.left,e.right=this.right,e.near=this.near,e.far=this.far,e.top=this.top,e.bottom=this.bottom,e}});const Lr=uu,fu=`
@export clay.compositor.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
varying vec2 v_Texcoord;
void main()
{
 v_Texcoord = texcoord;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end`;B.import(fu);var cu=new rn,ao=new ir({geometry:cu,frustumCulling:!1}),du=new Lr,vu=He.extend(function(){return{fragment:"",outputs:null,material:null,blendWithPrevious:!1,clearColor:!1,clearDepth:!0}},function(){var e=new B(B.source("clay.compositor.vertex"),this.fragment),t=new ut({shader:e});t.enableTexturesAll(),this.material=t},{setUniform:function(e,t){this.material.setUniform(e,t)},getUniform:function(e){var t=this.material.uniforms[e];if(t)return t.value},attachOutput:function(e,t){this.outputs||(this.outputs={}),t=t||R.COLOR_ATTACHMENT0,this.outputs[t]=e},detachOutput:function(e){for(var t in this.outputs)this.outputs[t]===e&&(this.outputs[t]=null)},bind:function(e,t){if(this.outputs)for(var r in this.outputs){var i=this.outputs[r];i&&t.attach(i,r)}t&&t.bind(e)},unbind:function(e,t){t.unbind(e)},render:function(e,t){var r=e.gl;if(t){this.bind(e,t);var i=e.getGLExtension("EXT_draw_buffers");if(i&&this.outputs){var n=[];for(var a in this.outputs)a=+a,a>=r.COLOR_ATTACHMENT0&&a<=r.COLOR_ATTACHMENT0+8&&n.push(a);i.drawBuffersEXT(n)}}this.trigger("beforerender",this,e);var o=this.clearDepth?r.DEPTH_BUFFER_BIT:0;if(r.depthMask(!0),this.clearColor){o=o|r.COLOR_BUFFER_BIT,r.colorMask(!0,!0,!0,!0);var s=this.clearColor;Array.isArray(s)&&r.clearColor(s[0],s[1],s[2],s[3])}r.clear(o),this.blendWithPrevious?(r.enable(r.BLEND),this.material.transparent=!0):(r.disable(r.BLEND),this.material.transparent=!1),this.renderQuad(e),this.trigger("afterrender",this,e),t&&this.unbind(e,t)},renderQuad:function(e){ao.material=this.material,e.renderPass([ao],du)},dispose:function(e){}});const Le=vu,pu=`#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform sampler2D normalDistribution;
uniform vec2 viewportSize : [512, 256];
const vec3 N = vec3(0.0, 0.0, 1.0);
const float fSampleNumber = float(SAMPLE_NUMBER);
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
float G_Smith(float roughness, float NoV, float NoL) {
 float k = roughness * roughness / 2.0;
 float G1V = NoV / (NoV * (1.0 - k) + k);
 float G1L = NoL / (NoL * (1.0 - k) + k);
 return G1L * G1V;
}
void main() {
 vec2 uv = gl_FragCoord.xy / viewportSize;
 float NoV = uv.x;
 float roughness = uv.y;
 vec3 V;
 V.x = sqrt(1.0 - NoV * NoV);
 V.y = 0.0;
 V.z = NoV;
 float A = 0.0;
 float B = 0.0;
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(L.z, 0.0, 1.0);
 float NoH = clamp(H.z, 0.0, 1.0);
 float VoH = clamp(dot(V, H), 0.0, 1.0);
 if (NoL > 0.0) {
 float G = G_Smith(roughness, NoV, NoL);
 float G_Vis = G * VoH / (NoH * NoV);
 float Fc = pow(1.0 - VoH, 5.0);
 A += (1.0 - Fc) * G_Vis;
 B += Fc * G_Vis;
 }
 }
 gl_FragColor = vec4(vec2(A, B) / fSampleNumber, 0.0, 1.0);
}
`,mu=`#define SHADER_NAME prefilter
#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform mat4 viewInverse : VIEWINVERSE;
uniform samplerCube environmentMap;
uniform sampler2D normalDistribution;
uniform float roughness : 0.5;
varying vec2 v_Texcoord;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
void main() {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
 vec3 N = V;
 vec3 prefilteredColor = vec3(0.0);
 float totalWeight = 0.0;
 float fMaxSampleNumber = float(SAMPLE_NUMBER);
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fMaxSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(dot(N, L), 0.0, 1.0);
 if (NoL > 0.0) {
 prefilteredColor += decodeHDR(textureCube(environmentMap, L)).rgb * NoL;
 totalWeight += NoL;
 }
 }
 gl_FragColor = encodeHDR(vec4(prefilteredColor / totalWeight, 1.0));
}
`;var Et={},Cn=["px","nx","py","ny","pz","nz"];Et.prefilterEnvironmentMap=function(e,t,r,i,n){(!n||!i)&&(i=Et.generateNormalDistribution(),n=Et.integrateBRDF(e,i)),r=r||{};var a=r.width||64,o=r.height||64,s=r.type||t.type,l=new sr({width:a,height:o,type:s,flipY:!1,mipmaps:[]});l.isPowerOfTwo()||console.warn("Width and height must be power of two to enable mipmap.");var h=Math.min(a,o),u=Math.log(h)/Math.log(2)+1,f=new ut({shader:new B({vertex:B.source("clay.skybox.vertex"),fragment:mu})});f.set("normalDistribution",i),r.encodeRGBM&&f.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&f.define("fragment","RGBM_DECODE");var d=new Wt,c;if(t.textureType==="texture2D"){var v=new sr({width:a,height:o,type:s===O.FLOAT?O.HALF_FLOAT:s});or.panoramaToCubeMap(e,t,v,{encodeRGBM:r.decodeRGBM}),t=v}c=new ii({scene:d,material:f}),c.material.set("environmentMap",t);var p=new la({texture:l});r.encodeRGBM&&(s=l.type=O.UNSIGNED_BYTE);for(var m=new Q({width:a,height:o,type:s}),g=new we({depthBuffer:!1}),T=oe[s===O.UNSIGNED_BYTE?"Uint8Array":"Float32Array"],x=0;x<u;x++){l.mipmaps[x]={pixels:{}},c.material.set("roughness",x/(u-1));for(var _=m.width,S=2*Math.atan(_/(_-.5))/Math.PI*180,A=0;A<Cn.length;A++){var b=new T(m.width*m.height*4);g.attach(m),g.bind(e);var w=p.getCamera(Cn[A]);w.fov=S,e.render(d,w),e.gl.readPixels(0,0,m.width,m.height,O.RGBA,s,b),g.unbind(e),l.mipmaps[x].pixels[Cn[A]]=b}m.width/=2,m.height/=2,m.dirty()}return g.dispose(e),m.dispose(e),c.dispose(e),i.dispose(e),{environmentMap:l,brdfLookup:n,normalDistribution:i,maxMipmapLevel:u}};Et.integrateBRDF=function(e,t){t=t||Et.generateNormalDistribution();var r=new we({depthBuffer:!1}),i=new Le({fragment:pu}),n=new Q({width:512,height:256,type:O.HALF_FLOAT,wrapS:O.CLAMP_TO_EDGE,wrapT:O.CLAMP_TO_EDGE,minFilter:O.NEAREST,magFilter:O.NEAREST,useMipmap:!1});return i.setUniform("normalDistribution",t),i.setUniform("viewportSize",[512,256]),i.attachOutput(n),i.render(e,r),r.dispose(e),n};Et.generateNormalDistribution=function(r,i){for(var r=r||256,i=i||1024,n=new Q({width:r,height:i,type:O.FLOAT,minFilter:O.NEAREST,magFilter:O.NEAREST,wrapS:O.CLAMP_TO_EDGE,wrapT:O.CLAMP_TO_EDGE,useMipmap:!1}),a=new Float32Array(i*r*4),o=[],s=0;s<r;s++){for(var l=s/r,h=l*l,u=0;u<i;u++){var f=(u<<16|u>>>16)>>>0;f=((f&1431655765)<<1|(f&2863311530)>>>1)>>>0,f=((f&858993459)<<2|(f&3435973836)>>>2)>>>0,f=((f&252645135)<<4|(f&4042322160)>>>4)>>>0,f=(((f&16711935)<<8|(f&4278255360)>>>8)>>>0)/4294967296;var d=Math.sqrt((1-f)/(1+(h*h-1)*f));o[u]=d}for(var u=0;u<i;u++){var c=(u*r+s)*4,d=o[u],v=Math.sqrt(1-d*d),p=u/i,m=2*Math.PI*p;a[c]=v*Math.cos(m),a[c+1]=d,a[c+2]=v*Math.sin(m),a[c+3]=1}}return n.pixels=a,n};var gu=pt.extend({cubemap:null,castShadow:!1,_normalDistribution:null,_brdfLookup:null},{type:"AMBIENT_CUBEMAP_LIGHT",prefilter:function(e,t){if(!e.getGLExtension("EXT_shader_texture_lod")){console.warn("Device not support textureCubeLodEXT");return}this._brdfLookup||(this._normalDistribution=Et.generateNormalDistribution(),this._brdfLookup=Et.integrateBRDF(e,this._normalDistribution));var r=this.cubemap;if(!r.__prefiltered){var i=Et.prefilterEnvironmentMap(e,r,{encodeRGBM:!0,width:t,height:t},this._normalDistribution,this._brdfLookup);this.cubemap=i.environmentMap,this.cubemap.__prefiltered=!0,r.dispose(e)}},getBRDFLookup:function(){return this._brdfLookup},uniformTemplates:{ambientCubemapLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientCubemapLightCubemap:{type:"t",value:function(e){return e.cubemap}},ambientCubemapLightBRDFLookup:{type:"t",value:function(e){return e._brdfLookup}}}});const _u=gu;var yu=pt.extend({castShadow:!1,coefficients:[]},function(){this._coefficientsTmpArr=new oe.Float32Array(9*3)},{type:"AMBIENT_SH_LIGHT",uniformTemplates:{ambientSHLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientSHLightCoefficients:{type:"3f",value:function(e){for(var t=e._coefficientsTmpArr,r=0;r<e.coefficients.length;r++)t[r]=e.coefficients[r];return t}}}});const xu=yu;var cs={},nr=["px","nx","py","ny","pz","nz"];function Tu(e,t){var r=e[0],i=e[1],n=e[2];return t===0?1:t===1?r:t===2?i:t===3?n:t===4?r*n:t===5?i*n:t===6?r*i:t===7?3*n*n-1:r*r-i*i}var Eu={px:[2,1,0,-1,-1,1],nx:[2,1,0,1,-1,-1],py:[0,2,1,1,-1,-1],ny:[0,2,1,1,1,1],pz:[0,1,2,-1,-1,-1],nz:[0,1,2,1,-1,1]};function Su(e,t,r,i){for(var n=new oe.Float32Array(27),a=E.create(),o=E.create(),s=E.create(),l=0;l<9;l++){for(var h=E.create(),u=0;u<nr.length;u++){for(var f=t[nr[u]],d=E.create(),c=0,v=0,p=Eu[nr[u]],m=0;m<i;m++)for(var g=0;g<r;g++){a[0]=g/(r-1)*2-1,a[1]=m/(i-1)*2-1,a[2]=-1,E.normalize(a,a),s[0]=a[p[0]]*p[3],s[1]=a[p[1]]*p[4],s[2]=a[p[2]]*p[5],o[0]=f[v++]/255,o[1]=f[v++]/255,o[2]=f[v++]/255;var T=f[v++]/255*8.12;o[0]*=T,o[1]*=T,o[2]*=T,E.scaleAndAdd(d,d,o,Tu(s,l)*-a[2]),c+=-a[2]}E.scaleAndAdd(h,h,d,1/c)}n[l*3]=h[0]/6,n[l*3+1]=h[1]/6,n[l*3+2]=h[2]/6}return n}cs.projectEnvironmentMap=function(e,t,r){r=r||{},r.lod=r.lod||0;var i,n=new Wt,a=64;t.textureType==="texture2D"?i=new ii({scene:n,environmentMap:t}):(a=t.image&&t.image.px?t.image.px.width:t.width,i=new ii({scene:n,environmentMap:t}));var o=Math.ceil(a/Math.pow(2,r.lod)),s=Math.ceil(a/Math.pow(2,r.lod)),l=new Q({width:o,height:s}),h=new we;i.material.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&i.material.define("fragment","RGBM_DECODE"),i.material.set("lod",r.lod);for(var u=new la({texture:l}),f={},d=0;d<nr.length;d++){f[nr[d]]=new Uint8Array(o*s*4);var c=u.getCamera(nr[d]);c.fov=90,h.attach(l),h.bind(e),e.render(n,c),e.gl.readPixels(0,0,o,s,O.RGBA,O.UNSIGNED_BYTE,f[nr[d]]),h.unbind(e)}return i.dispose(e),h.dispose(e),l.dispose(e),Su(e,f,o,s)};var Y={firstNotNull:function(){for(var e=0,t=arguments.length;e<t;e++)if(arguments[e]!=null)return arguments[e]},queryDataIndex:function(e,t){if(t.dataIndexInside!=null)return t.dataIndexInside;if(t.dataIndex!=null)return St(t.dataIndex)?Ea(t.dataIndex,function(r){return e.indexOfRawIndex(r)}):e.indexOfRawIndex(t.dataIndex);if(t.name!=null)return St(t.name)?Ea(t.name,function(r){return e.indexOfName(r)}):e.indexOfName(t.name)}},Au=J.extend({dynamic:!1,widthSegments:40,heightSegments:20,phiStart:0,phiLength:Math.PI*2,thetaStart:0,thetaLength:Math.PI,radius:1},function(){this.build()},{build:function(){var e=this.heightSegments,t=this.widthSegments,r=this.attributes.position,i=this.attributes.texcoord0,n=this.attributes.normal,a=(t+1)*(e+1);r.init(a),i.init(a),n.init(a);var o=a>65535?Uint32Array:Uint16Array,s=this.indices=new o(t*e*6),l,h,u,f,d,c,v,x=this.radius,p=this.phiStart,m=this.phiLength,g=this.thetaStart,T=this.thetaLength,x=this.radius,_=[],S=[],A=0,b=1/x;for(v=0;v<=e;v++)for(c=0;c<=t;c++)f=c/t,d=v/e,l=-x*Math.cos(p+f*m)*Math.sin(g+d*T),h=x*Math.cos(g+d*T),u=x*Math.sin(p+f*m)*Math.sin(g+d*T),_[0]=l,_[1]=h,_[2]=u,S[0]=f,S[1]=d,r.set(A,_),i.set(A,S),_[0]*=b,_[1]*=b,_[2]*=b,n.set(A,_),A++;var w,L,I,M,N=t+1,U=0;for(v=0;v<e;v++)for(c=0;c<t;c++)L=v*N+c,w=v*N+c+1,M=(v+1)*N+c+1,I=(v+1)*N+c,s[U++]=w,s[U++]=L,s[U++]=M,s[U++]=L,s[U++]=I,s[U++]=M;this.boundingBox=new Qe,this.boundingBox.max.set(x,x,x),this.boundingBox.min.set(-x,-x,-x)}});const wu=Au;var bu=pt.extend({castShadow:!1},{type:"AMBIENT_LIGHT",uniformTemplates:{ambientLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}}});const Cu=bu;var Lu=pt.extend({shadowBias:.001,shadowSlopeScale:2,shadowCascade:1,cascadeSplitLogFactor:.2},{type:"DIRECTIONAL_LIGHT",uniformTemplates:{directionalLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new C,e.__dir.copy(e.worldTransform.z).normalize().negate().array}},directionalLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=pt.prototype.clone.call(this);return e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}});const Mu=Lu;var Ru=pt.extend({range:100,castShadow:!1},{type:"POINT_LIGHT",uniformTemplates:{pointLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},pointLightRange:{type:"1f",value:function(e){return e.range}},pointLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=pt.prototype.clone.call(this);return e.range=this.range,e}});const Pu=Ru;var Du=pt.extend({range:20,umbraAngle:30,penumbraAngle:45,falloffFactor:2,shadowBias:.001,shadowSlopeScale:2},{type:"SPOT_LIGHT",uniformTemplates:{spotLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},spotLightRange:{type:"1f",value:function(e){return e.range}},spotLightUmbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.umbraAngle*Math.PI/180)}},spotLightPenumbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.penumbraAngle*Math.PI/180)}},spotLightFalloffFactor:{type:"1f",value:function(e){return e.falloffFactor}},spotLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new C,e.__dir.copy(e.worldTransform.z).negate().array}},spotLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=pt.prototype.clone.call(this);return e.range=this.range,e.umbraAngle=this.umbraAngle,e.penumbraAngle=this.penumbraAngle,e.falloffFactor=this.falloffFactor,e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}});const Iu=Du;var re=function(e,t,r,i){e=e||0,t=t||0,r=r||0,i=i||0,this.array=G.fromValues(e,t,r,i),this._dirty=!0};re.prototype={constructor:re,add:function(e){return G.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r,i){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=i,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new re(this.x,this.y,this.z,this.w)},copy:function(e){return G.copy(this.array,e.array),this._dirty=!0,this},dist:function(e){return G.dist(this.array,e.array)},distance:function(e){return G.distance(this.array,e.array)},div:function(e){return G.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return G.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return G.dot(this.array,e.array)},len:function(){return G.len(this.array)},length:function(){return G.length(this.array)},lerp:function(e,t,r){return G.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return G.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return G.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return G.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return G.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return G.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return G.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return G.random(this.array,e),this._dirty=!0,this},scale:function(e){return G.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return G.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return G.sqrDist(this.array,e.array)},squaredDistance:function(e){return G.squaredDistance(this.array,e.array)},sqrLen:function(){return G.sqrLen(this.array)},squaredLength:function(){return G.squaredLength(this.array)},sub:function(e){return G.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return G.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return G.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return G.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Xr=Object.defineProperty;if(Xr){var bi=re.prototype;Xr(bi,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Xr(bi,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),Xr(bi,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),Xr(bi,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}re.add=function(e,t,r){return G.add(e.array,t.array,r.array),e._dirty=!0,e};re.set=function(e,t,r,i,n){G.set(e.array,t,r,i,n),e._dirty=!0};re.copy=function(e,t){return G.copy(e.array,t.array),e._dirty=!0,e};re.dist=function(e,t){return G.distance(e.array,t.array)};re.distance=re.dist;re.div=function(e,t,r){return G.divide(e.array,t.array,r.array),e._dirty=!0,e};re.divide=re.div;re.dot=function(e,t){return G.dot(e.array,t.array)};re.len=function(e){return G.length(e.array)};re.lerp=function(e,t,r,i){return G.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};re.min=function(e,t,r){return G.min(e.array,t.array,r.array),e._dirty=!0,e};re.max=function(e,t,r){return G.max(e.array,t.array,r.array),e._dirty=!0,e};re.mul=function(e,t,r){return G.multiply(e.array,t.array,r.array),e._dirty=!0,e};re.multiply=re.mul;re.negate=function(e,t){return G.negate(e.array,t.array),e._dirty=!0,e};re.normalize=function(e,t){return G.normalize(e.array,t.array),e._dirty=!0,e};re.random=function(e,t){return G.random(e.array,t),e._dirty=!0,e};re.scale=function(e,t,r){return G.scale(e.array,t.array,r),e._dirty=!0,e};re.scaleAndAdd=function(e,t,r,i){return G.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};re.sqrDist=function(e,t){return G.sqrDist(e.array,t.array)};re.squaredDistance=re.sqrDist;re.sqrLen=function(e){return G.sqrLen(e.array)};re.squaredLength=re.sqrLen;re.sub=function(e,t,r){return G.subtract(e.array,t.array,r.array),e._dirty=!0,e};re.subtract=re.sub;re.transformMat4=function(e,t,r){return G.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};re.transformQuat=function(e,t,r){return G.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};const Nu=re;var Xe={};Xe.create=function(){var e=new ke(4);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};Xe.clone=function(e){var t=new ke(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};Xe.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};Xe.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};Xe.transpose=function(e,t){if(e===t){var r=t[1];e[1]=t[2],e[2]=r}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e};Xe.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r*a-n*i;return o?(o=1/o,e[0]=a*o,e[1]=-i*o,e[2]=-n*o,e[3]=r*o,e):null};Xe.adjoint=function(e,t){var r=t[0];return e[0]=t[3],e[1]=-t[1],e[2]=-t[2],e[3]=r,e};Xe.determinant=function(e){return e[0]*e[3]-e[2]*e[1]};Xe.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=r[0],l=r[1],h=r[2],u=r[3];return e[0]=i*s+a*l,e[1]=n*s+o*l,e[2]=i*h+a*u,e[3]=n*h+o*u,e};Xe.mul=Xe.multiply;Xe.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+a*s,e[1]=n*l+o*s,e[2]=i*-s+a*l,e[3]=n*-s+o*l,e};Xe.scale=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=r[0],l=r[1];return e[0]=i*s,e[1]=n*s,e[2]=a*l,e[3]=o*l,e};Xe.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2))};Xe.LDU=function(e,t,r,i){return e[2]=i[2]/i[0],r[0]=i[0],r[1]=i[1],r[3]=i[3]-e[2]*r[1],[e,t,r]};const Te=Xe;var Ye=function(){this.array=Te.create(),this._dirty=!0};Ye.prototype={constructor:Ye,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new Ye().copy(this)},copy:function(e){return Te.copy(this.array,e.array),this._dirty=!0,this},adjoint:function(){return Te.adjoint(this.array,this.array),this._dirty=!0,this},determinant:function(){return Te.determinant(this.array)},identity:function(){return Te.identity(this.array),this._dirty=!0,this},invert:function(){return Te.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return Te.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return Te.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return Te.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return Te.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return Te.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return Te.scale(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return Te.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};Ye.adjoint=function(e,t){return Te.adjoint(e.array,t.array),e._dirty=!0,e};Ye.copy=function(e,t){return Te.copy(e.array,t.array),e._dirty=!0,e};Ye.determinant=function(e){return Te.determinant(e.array)};Ye.identity=function(e){return Te.identity(e.array),e._dirty=!0,e};Ye.invert=function(e,t){return Te.invert(e.array,t.array),e._dirty=!0,e};Ye.mul=function(e,t,r){return Te.mul(e.array,t.array,r.array),e._dirty=!0,e};Ye.multiply=Ye.mul;Ye.rotate=function(e,t,r){return Te.rotate(e.array,t.array,r),e._dirty=!0,e};Ye.scale=function(e,t,r){return Te.scale(e.array,t.array,r.array),e._dirty=!0,e};Ye.transpose=function(e,t){return Te.transpose(e.array,t.array),e._dirty=!0,e};const Ou=Ye;var it={};it.create=function(){var e=new ke(6);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};it.clone=function(e){var t=new ke(6);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t};it.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e};it.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};it.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=r*a-i*n;return l?(l=1/l,e[0]=a*l,e[1]=-i*l,e[2]=-n*l,e[3]=r*l,e[4]=(n*s-a*o)*l,e[5]=(i*o-r*s)*l,e):null};it.determinant=function(e){return e[0]*e[3]-e[1]*e[2]};it.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],h=r[0],u=r[1],f=r[2],d=r[3],c=r[4],v=r[5];return e[0]=i*h+a*u,e[1]=n*h+o*u,e[2]=i*f+a*d,e[3]=n*f+o*d,e[4]=i*c+a*v+s,e[5]=n*c+o*v+l,e};it.mul=it.multiply;it.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],h=Math.sin(r),u=Math.cos(r);return e[0]=i*u+a*h,e[1]=n*u+o*h,e[2]=i*-h+a*u,e[3]=n*-h+o*u,e[4]=s,e[5]=l,e};it.scale=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],h=r[0],u=r[1];return e[0]=i*h,e[1]=n*h,e[2]=a*u,e[3]=o*u,e[4]=s,e[5]=l,e};it.translate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],h=r[0],u=r[1];return e[0]=i,e[1]=n,e[2]=a,e[3]=o,e[4]=i*h+a*u+s,e[5]=n*h+o*u+l,e};it.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+1)};const Ce=it;var rt=function(){this.array=Ce.create(),this._dirty=!0};rt.prototype={constructor:rt,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new rt().copy(this)},copy:function(e){return Ce.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return Ce.determinant(this.array)},identity:function(){return Ce.identity(this.array),this._dirty=!0,this},invert:function(){return Ce.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return Ce.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return Ce.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return Ce.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return Ce.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return Ce.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return Ce.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return Ce.translate(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};rt.copy=function(e,t){return Ce.copy(e.array,t.array),e._dirty=!0,e};rt.determinant=function(e){return Ce.determinant(e.array)};rt.identity=function(e){return Ce.identity(e.array),e._dirty=!0,e};rt.invert=function(e,t){return Ce.invert(e.array,t.array),e._dirty=!0,e};rt.mul=function(e,t,r){return Ce.mul(e.array,t.array,r.array),e._dirty=!0,e};rt.multiply=rt.mul;rt.rotate=function(e,t,r){return Ce.rotate(e.array,t.array,r),e._dirty=!0,e};rt.scale=function(e,t,r){return Ce.scale(e.array,t.array,r.array),e._dirty=!0,e};rt.translate=function(e,t,r){return Ce.translate(e.array,t.array,r.array),e._dirty=!0,e};const Bu=rt;var Ie=function(){this.array=q.create(),this._dirty=!0};Ie.prototype={constructor:Ie,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return q.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new Ie().copy(this)},copy:function(e){return q.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return q.determinant(this.array)},fromMat2d:function(e){return q.fromMat2d(this.array,e.array),this._dirty=!0,this},fromMat4:function(e){return q.fromMat4(this.array,e.array),this._dirty=!0,this},fromQuat:function(e){return q.fromQuat(this.array,e.array),this._dirty=!0,this},identity:function(){return q.identity(this.array),this._dirty=!0,this},invert:function(){return q.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return q.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return q.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return q.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return q.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return q.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return q.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return q.translate(this.array,this.array,e.array),this._dirty=!0,this},normalFromMat4:function(e){return q.normalFromMat4(this.array,e.array),this._dirty=!0,this},transpose:function(){return q.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};Ie.adjoint=function(e,t){return q.adjoint(e.array,t.array),e._dirty=!0,e};Ie.copy=function(e,t){return q.copy(e.array,t.array),e._dirty=!0,e};Ie.determinant=function(e){return q.determinant(e.array)};Ie.identity=function(e){return q.identity(e.array),e._dirty=!0,e};Ie.invert=function(e,t){return q.invert(e.array,t.array),e};Ie.mul=function(e,t,r){return q.mul(e.array,t.array,r.array),e._dirty=!0,e};Ie.multiply=Ie.mul;Ie.fromMat2d=function(e,t){return q.fromMat2d(e.array,t.array),e._dirty=!0,e};Ie.fromMat4=function(e,t){return q.fromMat4(e.array,t.array),e._dirty=!0,e};Ie.fromQuat=function(e,t){return q.fromQuat(e.array,t.array),e._dirty=!0,e};Ie.normalFromMat4=function(e,t){return q.normalFromMat4(e.array,t.array),e._dirty=!0,e};Ie.rotate=function(e,t,r){return q.rotate(e.array,t.array,r),e._dirty=!0,e};Ie.scale=function(e,t,r){return q.scale(e.array,t.array,r.array),e._dirty=!0,e};Ie.transpose=function(e,t){return q.transpose(e.array,t.array),e._dirty=!0,e};Ie.translate=function(e,t,r){return q.translate(e.array,t.array,r.array),e._dirty=!0,e};const Uu=Ie;var Fu={_animators:null,getAnimators:function(){return this._animators=this._animators||[],this._animators},animate:function(e,t){this._animators=this._animators||[];var r=this,i;if(e){for(var n=e.split("."),a=r,o=0,s=n.length;o<s;o++)a&&(a=a[n[o]]);a&&(i=a)}else i=r;if(i==null)throw new Error("Target "+e+" not exists");var l=this._animators,h=new fl(i,t),u=this;return h.during(function(){u.__zr&&u.__zr.refresh()}).done(function(){var f=l.indexOf(h);f>=0&&l.splice(f,1)}),l.push(h),this.__zr&&this.__zr.animation.addAnimator(h),h},stopAnimation:function(e){this._animators=this._animators||[];for(var t=this._animators,r=t.length,i=0;i<r;i++)t[i].stop(e);return t.length=0,this},addAnimatorsToZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.addAnimator(this._animators[t])},removeAnimatorsFromZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.removeAnimator(this._animators[t])}};const zu=Fu,ds=`
@export clay.util.rand
highp float rand(vec2 uv) {
 const highp float a = 12.9898, b = 78.233, c = 43758.5453;
 highp float dt = dot(uv.xy, vec2(a,b)), sn = mod(dt, 3.141592653589793);
 return fract(sin(sn) * c);
}
@end
@export clay.util.calculate_attenuation
uniform float attenuationFactor : 5.0;
float lightAttenuation(float dist, float range)
{
 float attenuation = 1.0;
 attenuation = dist*dist/(range*range+1.0);
 float att_s = attenuationFactor;
 attenuation = 1.0/(attenuation*att_s+1.0);
 att_s = 1.0/(att_s+1.0);
 attenuation = attenuation - att_s;
 attenuation /= 1.0 - att_s;
 return clamp(attenuation, 0.0, 1.0);
}
@end
@export clay.util.edge_factor
#ifdef SUPPORT_STANDARD_DERIVATIVES
float edgeFactor(float width)
{
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * width, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#else
float edgeFactor(float width)
{
 return 1.0;
}
#endif
@end
@export clay.util.encode_float
vec4 encodeFloat(const in float depth)
{
 const vec4 bitShifts = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);
 const vec4 bit_mask = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);
 vec4 res = fract(depth * bitShifts);
 res -= res.xxyz * bit_mask;
 return res;
}
@end
@export clay.util.decode_float
float decodeFloat(const in vec4 color)
{
 const vec4 bitShifts = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);
 return dot(color, bitShifts);
}
@end
@export clay.util.float
@import clay.util.encode_float
@import clay.util.decode_float
@end
@export clay.util.rgbm_decode
vec3 RGBMDecode(vec4 rgbm, float range) {
 return range * rgbm.rgb * rgbm.a;
}
@end
@export clay.util.rgbm_encode
vec4 RGBMEncode(vec3 color, float range) {
 if (dot(color, color) == 0.0) {
 return vec4(0.0);
 }
 vec4 rgbm;
 color /= range;
 rgbm.a = clamp(max(max(color.r, color.g), max(color.b, 1e-6)), 0.0, 1.0);
 rgbm.a = ceil(rgbm.a * 255.0) / 255.0;
 rgbm.rgb = color / rgbm.a;
 return rgbm;
}
@end
@export clay.util.rgbm
@import clay.util.rgbm_decode
@import clay.util.rgbm_encode
vec4 decodeHDR(vec4 color)
{
#if defined(RGBM_DECODE) || defined(RGBM)
 return vec4(RGBMDecode(color, 8.12), 1.0);
#else
 return color;
#endif
}
vec4 encodeHDR(vec4 color)
{
#if defined(RGBM_ENCODE) || defined(RGBM)
 return RGBMEncode(color.xyz, 8.12);
#else
 return color;
#endif
}
@end
@export clay.util.srgb
vec4 sRGBToLinear(in vec4 value) {
 return vec4(mix(pow(value.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), value.rgb * 0.0773993808, vec3(lessThanEqual(value.rgb, vec3(0.04045)))), value.w);
}
vec4 linearTosRGB(in vec4 value) {
 return vec4(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))), value.w);
}
@end
@export clay.chunk.skinning_header
#ifdef SKINNING
attribute vec3 weight : WEIGHT;
attribute vec4 joint : JOINT;
#ifdef USE_SKIN_MATRICES_TEXTURE
uniform sampler2D skinMatricesTexture : ignore;
uniform float skinMatricesTextureSize: ignore;
mat4 getSkinMatrix(sampler2D tex, float idx) {
 float j = idx * 4.0;
 float x = mod(j, skinMatricesTextureSize);
 float y = floor(j / skinMatricesTextureSize) + 0.5;
 vec2 scale = vec2(skinMatricesTextureSize);
 return mat4(
 texture2D(tex, vec2(x + 0.5, y) / scale),
 texture2D(tex, vec2(x + 1.5, y) / scale),
 texture2D(tex, vec2(x + 2.5, y) / scale),
 texture2D(tex, vec2(x + 3.5, y) / scale)
 );
}
mat4 getSkinMatrix(float idx) {
 return getSkinMatrix(skinMatricesTexture, idx);
}
#else
uniform mat4 skinMatrix[JOINT_COUNT] : SKIN_MATRIX;
mat4 getSkinMatrix(float idx) {
 return skinMatrix[int(idx)];
}
#endif
#endif
@end
@export clay.chunk.skin_matrix
mat4 skinMatrixWS = getSkinMatrix(joint.x) * weight.x;
if (weight.y > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.y) * weight.y;
}
if (weight.z > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.z) * weight.z;
}
float weightW = 1.0-weight.x-weight.y-weight.z;
if (weightW > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.w) * weightW;
}
@end
@export clay.chunk.instancing_header
#ifdef INSTANCING
attribute vec4 instanceMat1;
attribute vec4 instanceMat2;
attribute vec4 instanceMat3;
#endif
@end
@export clay.chunk.instancing_matrix
mat4 instanceMat = mat4(
 vec4(instanceMat1.xyz, 0.0),
 vec4(instanceMat2.xyz, 0.0),
 vec4(instanceMat3.xyz, 0.0),
 vec4(instanceMat1.w, instanceMat2.w, instanceMat3.w, 1.0)
);
@end
@export clay.util.parallax_correct
vec3 parallaxCorrect(in vec3 dir, in vec3 pos, in vec3 boxMin, in vec3 boxMax) {
 vec3 first = (boxMax - pos) / dir;
 vec3 second = (boxMin - pos) / dir;
 vec3 further = max(first, second);
 float dist = min(further.x, min(further.y, further.z));
 vec3 fixedPos = pos + dir * dist;
 vec3 boxCenter = (boxMax + boxMin) * 0.5;
 return normalize(fixedPos - boxCenter);
}
@end
@export clay.util.clamp_sample
vec4 clampSample(const in sampler2D texture, const in vec2 coord)
{
#ifdef STEREO
 float eye = step(0.5, coord.x) * 0.5;
 vec2 coordClamped = clamp(coord, vec2(eye, 0.0), vec2(0.5 + eye, 1.0));
#else
 vec2 coordClamped = clamp(coord, vec2(0.0), vec2(1.0));
#endif
 return texture2D(texture, coordClamped);
}
@end
@export clay.util.ACES
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
@end`,Vu=`
@export ecgl.common.transformUniforms
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
uniform mat4 world : WORLD;
@end

@export ecgl.common.attributes
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 normal : NORMAL;
@end

@export ecgl.common.uv.header
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
uniform vec2 detailUvRepeat : [1.0, 1.0];
uniform vec2 detailUvOffset : [0.0, 0.0];

varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end

@export ecgl.common.uv.main
v_Texcoord = texcoord * uvRepeat + uvOffset;
v_DetailTexcoord = texcoord * detailUvRepeat + detailUvOffset;
@end

@export ecgl.common.uv.fragmentHeader
varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end


@export ecgl.common.albedo.main

 vec4 albedoTexel = vec4(1.0);
#ifdef DIFFUSEMAP_ENABLED
 albedoTexel = texture2D(diffuseMap, v_Texcoord);
 #ifdef SRGB_DECODE
 albedoTexel = sRGBToLinear(albedoTexel);
 #endif
#endif

#ifdef DETAILMAP_ENABLED
 vec4 detailTexel = texture2D(detailMap, v_DetailTexcoord);
 #ifdef SRGB_DECODE
 detailTexel = sRGBToLinear(detailTexel);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, detailTexel.rgb, detailTexel.a);
 albedoTexel.a = detailTexel.a + (1.0 - detailTexel.a) * albedoTexel.a;
#endif

@end

@export ecgl.common.wireframe.vertexHeader

#ifdef WIREFRAME_QUAD
attribute vec4 barycentric;
varying vec4 v_Barycentric;
#elif defined(WIREFRAME_TRIANGLE)
attribute vec3 barycentric;
varying vec3 v_Barycentric;
#endif

@end

@export ecgl.common.wireframe.vertexMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 v_Barycentric = barycentric;
#endif

@end


@export ecgl.common.wireframe.fragmentHeader

uniform float wireframeLineWidth : 1;
uniform vec4 wireframeLineColor: [0, 0, 0, 0.5];

#ifdef WIREFRAME_QUAD
varying vec4 v_Barycentric;
float edgeFactor () {
 vec4 d = fwidth(v_Barycentric);
 vec4 a4 = smoothstep(vec4(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(min(a4.x, a4.y), a4.z), a4.w);
}
#elif defined(WIREFRAME_TRIANGLE)
varying vec3 v_Barycentric;
float edgeFactor () {
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#endif

@end


@export ecgl.common.wireframe.fragmentMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 if (wireframeLineWidth > 0.) {
 vec4 lineColor = wireframeLineColor;
#ifdef SRGB_DECODE
 lineColor = sRGBToLinear(lineColor);
#endif

 gl_FragColor.rgb = mix(gl_FragColor.rgb, lineColor.rgb, (1.0 - edgeFactor()) * lineColor.a);
 }
#endif
@end




@export ecgl.common.bumpMap.header

#ifdef BUMPMAP_ENABLED
uniform sampler2D bumpMap;
uniform float bumpScale : 1.0;


vec3 bumpNormal(vec3 surfPos, vec3 surfNormal, vec3 baseNormal)
{
 vec2 dSTdx = dFdx(v_Texcoord);
 vec2 dSTdy = dFdy(v_Texcoord);

 float Hll = bumpScale * texture2D(bumpMap, v_Texcoord).x;
 float dHx = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdx).x - Hll;
 float dHy = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdy).x - Hll;

 vec3 vSigmaX = dFdx(surfPos);
 vec3 vSigmaY = dFdy(surfPos);
 vec3 vN = surfNormal;

 vec3 R1 = cross(vSigmaY, vN);
 vec3 R2 = cross(vN, vSigmaX);

 float fDet = dot(vSigmaX, R1);

 vec3 vGrad = sign(fDet) * (dHx * R1 + dHy * R2);
 return normalize(abs(fDet) * baseNormal - vGrad);

}
#endif

@end

@export ecgl.common.normalMap.vertexHeader

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.vertexMain

#ifdef NORMALMAP_ENABLED
 if (dot(tangent, tangent) > 0.0) {
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
 }
#endif

@end


@export ecgl.common.normalMap.fragmentHeader

#ifdef NORMALMAP_ENABLED
uniform sampler2D normalMap;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.fragmentMain
#ifdef NORMALMAP_ENABLED
 if (dot(v_Tangent, v_Tangent) > 0.0) {
 vec3 normalTexel = texture2D(normalMap, v_DetailTexcoord).xyz;
 if (dot(normalTexel, normalTexel) > 0.0) { N = normalTexel * 2.0 - 1.0;
 mat3 tbn = mat3(v_Tangent, v_Bitangent, v_Normal);
 N = normalize(tbn * N);
 }
 }
#endif
@end



@export ecgl.common.vertexAnimation.header

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevNormal;
uniform float percent;
#endif

@end

@export ecgl.common.vertexAnimation.main

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 vec3 norm = mix(prevNormal, normal, percent);
#else
 vec3 pos = position;
 vec3 norm = normal;
#endif

@end


@export ecgl.common.ssaoMap.header
#ifdef SSAOMAP_ENABLED
uniform sampler2D ssaoMap;
uniform vec4 viewport : VIEWPORT;
#endif
@end

@export ecgl.common.ssaoMap.main
 float ao = 1.0;
#ifdef SSAOMAP_ENABLED
 ao = texture2D(ssaoMap, (gl_FragCoord.xy - viewport.xy) / viewport.zw).r;
#endif
@end




@export ecgl.common.diffuseLayer.header

#if (LAYER_DIFFUSEMAP_COUNT > 0)
uniform float layerDiffuseIntensity[LAYER_DIFFUSEMAP_COUNT];
uniform sampler2D layerDiffuseMap[LAYER_DIFFUSEMAP_COUNT];
#endif

@end

@export ecgl.common.emissiveLayer.header

#if (LAYER_EMISSIVEMAP_COUNT > 0)
uniform float layerEmissionIntensity[LAYER_EMISSIVEMAP_COUNT];
uniform sampler2D layerEmissiveMap[LAYER_EMISSIVEMAP_COUNT];
#endif

@end

@export ecgl.common.layers.header
@import ecgl.common.diffuseLayer.header
@import ecgl.common.emissiveLayer.header
@end

@export ecgl.common.diffuseLayer.main

#if (LAYER_DIFFUSEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_DIFFUSEMAP_COUNT; _idx_++) {{
 float intensity = layerDiffuseIntensity[_idx_];
 vec4 texel2 = texture2D(layerDiffuseMap[_idx_], v_Texcoord);
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, texel2.rgb * intensity, texel2.a);
 albedoTexel.a = texel2.a + (1.0 - texel2.a) * albedoTexel.a;
 }}
#endif

@end

@export ecgl.common.emissiveLayer.main

#if (LAYER_EMISSIVEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_EMISSIVEMAP_COUNT; _idx_++)
 {{
 vec4 texel2 = texture2D(layerEmissiveMap[_idx_], v_Texcoord) * layerEmissionIntensity[_idx_];
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 float intensity = layerEmissionIntensity[_idx_];
 gl_FragColor.rgb += texel2.rgb * texel2.a * intensity;
 }}
#endif

@end
`,Gu=`@export ecgl.color.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

@import ecgl.common.uv.header

attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 position: POSITION;

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

#ifdef ATMOSPHERE_ENABLED
attribute vec3 normal: NORMAL;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
varying vec3 v_Normal;
#endif

void main()
{
#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 @import ecgl.common.uv.main

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef ATMOSPHERE_ENABLED
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end

@export ecgl.color.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
varying vec3 v_Normal;
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.layers.header

@import ecgl.common.uv.fragmentHeader

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain

}
@end`,Hu=`/**
 * http: */

@export ecgl.lambert.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header


@import ecgl.common.attributes

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif


@import ecgl.common.vertexAnimation.header


varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{
 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main


 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

 @import ecgl.common.wireframe.vertexMain
}

@end


@export ecgl.lambert.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 gl_FragColor *= sRGBToLinear(v_Color);
 #else
 gl_FragColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseColor = vec3(0.0, 0.0, 0.0);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 diffuseColor += ambientLightColor[i] * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseColor += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 vec3 lightColor = directionalLightColor[i];

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 diffuseColor += lightColor * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor.rgb *= diffuseColor;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,ku=`@export ecgl.realistic.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes


@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@import ecgl.common.vertexAnimation.header

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{

 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef NORMALMAP_ENABLED
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end



@export ecgl.realistic.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0
#define PI 3.14159265358979
#define ROUGHNESS_CHANEL 0
#define METALNESS_CHANEL 1

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;

uniform sampler2D detailMap;
uniform sampler2D metalnessMap;
uniform sampler2D roughnessMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform float metalness : 0.0;
uniform float roughness : 0.5;

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
@import clay.header.ambient_cubemap_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.normalMap.fragmentHeader

@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import clay.util.rgbm

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}

float D_Phong(float g, float ndh) {
 float a = pow(8192.0, g);
 return (a + 2.0) / 8.0 * pow(ndh, a);
}

void main()
{
 vec4 albedoColor = color;

 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);
#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 albedoColor *= sRGBToLinear(v_Color);
 #else
 albedoColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 albedoColor *= albedoTexel;

 float m = metalness;

#ifdef METALNESSMAP_ENABLED
 float m2 = texture2D(metalnessMap, v_DetailTexcoord)[METALNESS_CHANEL];
 m = clamp(m2 + (m - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 baseColor = albedoColor.rgb;
 albedoColor.rgb = baseColor * (1.0 - m);
 vec3 specFactor = mix(vec3(0.04), baseColor, m);

 float g = 1.0 - roughness;

#ifdef ROUGHNESSMAP_ENABLED
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 N = v_Normal;

#ifdef DOUBLE_SIDED
 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

@import ecgl.common.normalMap.fragmentMain

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseTerm = vec3(0.0);
 vec3 specularTerm = vec3(0.0);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 vec3 fresnelTerm = F_Schlick(ndv, specFactor);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += ambientLightColor[_idx_] * ambientFactor * ao;
 }}
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++)
 {{
 vec3 L = -directionalLightDirection[_idx_];
 vec3 lc = directionalLightColor[_idx_];

 vec3 H = normalize(L + V);
 float ndl = clamp(dot(N, normalize(L)), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[_idx_];
 }
#endif

 vec3 li = lc * ndl * shadowContrib;

 diffuseTerm += li;
 specularTerm += li * fresnelTerm * D_Phong(g, ndh);
 }}
#endif


#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
 vec3 L = reflect(-V, N);
 L = vec3(L.x, L[NORMAL_UP_AXIS], L[NORMAL_FRONT_AXIS]);
 float rough2 = clamp(1.0 - g, 0.0, 1.0);
 float bias2 = rough2 * 5.0;
 vec2 brdfParam2 = texture2D(ambientCubemapLightBRDFLookup[0], vec2(rough2, ndv)).xy;
 vec3 envWeight2 = specFactor * brdfParam2.x + brdfParam2.y;
 vec3 envTexel2;
 for(int _idx_ = 0; _idx_ < AMBIENT_CUBEMAP_LIGHT_COUNT; _idx_++)
 {{
 envTexel2 = RGBMDecode(textureCubeLodEXT(ambientCubemapLightCubemap[_idx_], L, bias2), 8.12);
 specularTerm += ambientCubemapLightColor[_idx_] * envTexel2 * envWeight2 * ao;
 }}
#endif

 gl_FragColor.rgb = albedoColor.rgb * diffuseTerm + specularTerm;
 gl_FragColor.a = albedoColor.a;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

#ifdef SRGB_ENCODE
 gl_FragColor = linearTosRGB(gl_FragColor);
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,Wu=`@export ecgl.hatching.vertex

@import ecgl.realistic.vertex

@end


@export ecgl.hatching.fragment

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform vec4 color : [0.0, 0.0, 0.0, 1.0];
uniform vec4 paperColor : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

uniform sampler2D hatch1;
uniform sampler2D hatch2;
uniform sampler2D hatch3;
uniform sampler2D hatch4;
uniform sampler2D hatch5;
uniform sampler2D hatch6;

float shade(in float tone) {
 vec4 c = vec4(1. ,1., 1., 1.);
 float step = 1. / 6.;
 vec2 uv = v_DetailTexcoord;
 if (tone <= step / 2.0) {
 c = mix(vec4(0.), texture2D(hatch6, uv), 12. * tone);
 }
 else if (tone <= step) {
 c = mix(texture2D(hatch6, uv), texture2D(hatch5, uv), 6. * tone);
 }
 if(tone > step && tone <= 2. * step){
 c = mix(texture2D(hatch5, uv), texture2D(hatch4, uv) , 6. * (tone - step));
 }
 if(tone > 2. * step && tone <= 3. * step){
 c = mix(texture2D(hatch4, uv), texture2D(hatch3, uv), 6. * (tone - 2. * step));
 }
 if(tone > 3. * step && tone <= 4. * step){
 c = mix(texture2D(hatch3, uv), texture2D(hatch2, uv), 6. * (tone - 3. * step));
 }
 if(tone > 4. * step && tone <= 5. * step){
 c = mix(texture2D(hatch2, uv), texture2D(hatch1, uv), 6. * (tone - 4. * step));
 }
 if(tone > 5. * step){
 c = mix(texture2D(hatch1, uv), vec4(1.), 6. * (tone - 5. * step));
 }

 return c.r;
}

const vec3 w = vec3(0.2125, 0.7154, 0.0721);

void main()
{
#ifdef SRGB_DECODE
 vec4 inkColor = sRGBToLinear(color);
#else
 vec4 inkColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 inkColor *= sRGBToLinear(v_Color);
 #else
 inkColor *= v_Color;
 #endif
#endif

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float tone = 0.0;

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 tone += dot(ambientLightColor[i], w) * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 tone += dot(calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_], w) * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 float lightTone = dot(directionalLightColor[i], w);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 tone += lightTone * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor = mix(inkColor, paperColor, shade(clamp(tone, 0.0, 1.0)));
 }
@end
`,qu=`@export ecgl.sm.depth.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;

void main(){

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 v_ViewPosition = worldViewProjection * vec4(pos, 1.0);
 gl_Position = v_ViewPosition;

 v_Texcoord = texcoord;

}
@end



@export ecgl.sm.depth.fragment

@import clay.sm.depth.fragment

@end`;Object.assign(Tt.prototype,zu);B.import(ds);B.import(is);B.import(Vu);B.import(Gu);B.import(Hu);B.import(ku);B.import(Wu);B.import(qu);function Xu(e){return!e||e==="none"}function vs(e){return e instanceof HTMLCanvasElement||e instanceof HTMLImageElement||e instanceof Image}function Zu(e){return e.getZr&&e.setOption}var Ku=Wt.prototype.addToScene,Qu=Wt.prototype.removeFromScene;Wt.prototype.addToScene=function(e){if(Ku.call(this,e),this.__zr){var t=this.__zr;e.traverse(function(r){r.__zr=t,r.addAnimatorsToZr&&r.addAnimatorsToZr(t)})}};Wt.prototype.removeFromScene=function(e){Qu.call(this,e),e.traverse(function(t){var r=t.__zr;t.__zr=null,r&&t.removeAnimatorsFromZr&&t.removeAnimatorsFromZr(r)})};ut.prototype.setTextureImage=function(e,t,r,i){if(this.shader){var n=r.getZr(),a=this,o;return a.autoUpdateTextureStatus=!1,a.disableTexture(e),Xu(t)||(o=y.loadTexture(t,r,i,function(s){a.enableTexture(e),n&&n.refresh()}),a.set(e,o)),o}};var y={};y.Renderer=ei;y.Node=Tt;y.Mesh=ir;y.Shader=B;y.Material=ut;y.Texture=O;y.Texture2D=Q;y.Geometry=J;y.SphereGeometry=wu;y.PlaneGeometry=rn;y.CubeGeometry=fs;y.AmbientLight=Cu;y.DirectionalLight=Mu;y.PointLight=Pu;y.SpotLight=Iu;y.PerspectiveCamera=Be;y.OrthographicCamera=Lr;y.Vector2=nt;y.Vector3=C;y.Vector4=Nu;y.Quaternion=ns;y.Matrix2=Ou;y.Matrix2d=Bu;y.Matrix3=Uu;y.Matrix4=F;y.Plane=ls;y.Ray=Gi;y.BoundingBox=Qe;y.Frustum=sa;var Ci=null;function ju(){return Ci!==null||(Ci=or.createBlank("rgba(255,255,255,0)").image),Ci}function oo(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function so(e){if((e.wrapS===O.REPEAT||e.wrapT===O.REPEAT)&&e.image){var t=oo(e.width),r=oo(e.height);if(t!==e.width||r!==e.height){var i=document.createElement("canvas");i.width=t,i.height=r;var n=i.getContext("2d");n.drawImage(e.image,0,0,t,r),e.image=i}}}y.loadTexture=function(e,t,r,i){typeof r=="function"&&(i=r,r={}),r=r||{};for(var n=Object.keys(r).sort(),a="",o=0;o<n.length;o++)a+=n[o]+"_"+r[n[o]]+"_";var s=t.__textureCache=t.__textureCache||new cl(20);if(Zu(e)){var l=e.__textureid__,h=s.get(a+l);if(h)h.texture.surface.setECharts(e),i&&i(h.texture);else{var u=new Xn(e);u.onupdate=function(){t.getZr().refresh()},h={texture:u.getTexture()};for(var o=0;o<n.length;o++)h.texture[n[o]]=r[n[o]];l=e.__textureid__||"__ecgl_ec__"+h.texture.__uid__,e.__textureid__=l,s.put(a+l,h),i&&i(h.texture)}return h.texture}else if(vs(e)){var l=e.__textureid__,h=s.get(a+l);if(!h){h={texture:new y.Texture2D({image:e})};for(var o=0;o<n.length;o++)h.texture[n[o]]=r[n[o]];l=e.__textureid__||"__ecgl_image__"+h.texture.__uid__,e.__textureid__=l,s.put(a+l,h),so(h.texture),i&&i(h.texture)}return h.texture}else{var h=s.get(a+e);if(h)h.callbacks?h.callbacks.push(i):i&&i(h.texture);else if(e.match(/.hdr$|^data:application\/octet-stream/)){h={callbacks:[i]};var f=or.loadTexture(e,{exposure:r.exposure,fileType:"hdr"},function(){f.dirty(),h.callbacks.forEach(function(v){v&&v(f)}),h.callbacks=null});h.texture=f,s.put(a+e,h)}else{for(var f=new y.Texture2D({image:new Image}),o=0;o<n.length;o++)f[n[o]]=r[n[o]];h={texture:f,callbacks:[i]};var d=f.image;d.onload=function(){f.image=d,so(f),f.dirty(),h.callbacks.forEach(function(p){p&&p(f)}),h.callbacks=null},d.crossOrigin="Anonymous",d.src=e,f.image=ju(),s.put(a+e,h)}return h.texture}};y.createAmbientCubemap=function(e,t,r,i){e=e||{};var n=e.texture,a=Y.firstNotNull(e.exposure,1),o=new _u({intensity:Y.firstNotNull(e.specularIntensity,1)}),s=new xu({intensity:Y.firstNotNull(e.diffuseIntensity,1),coefficients:[.844,.712,.691,-.037,.083,.167,.343,.288,.299,-.041,-.021,-.009,-.003,-.041,-.064,-.011,-.007,-.004,-.031,.034,.081,-.06,-.049,-.06,.046,.056,.05]});return o.cubemap=y.loadTexture(n,r,{exposure:a},function(){o.cubemap.flipY=!1,o.prefilter(t,32),s.coefficients=cs.projectEnvironmentMap(t,o.cubemap,{lod:1}),i&&i()}),{specular:o,diffuse:s}};y.createBlankTexture=or.createBlank;y.isImage=vs;y.additiveBlend=function(e){e.blendEquation(e.FUNC_ADD),e.blendFunc(e.SRC_ALPHA,e.ONE)};y.parseColor=function(e,t){return e instanceof Array?(t||(t=[]),t[0]=e[0],t[1]=e[1],t[2]=e[2],e.length>3?t[3]=e[3]:t[3]=1,t):(t=ko(e||"#000",t)||[0,0,0,0],t[0]/=255,t[1]/=255,t[2]/=255,t)};y.directionFromAlphaBeta=function(e,t){var r=e/180*Math.PI+Math.PI/2,i=-t/180*Math.PI+Math.PI/2,n=[],a=Math.sin(r);return n[0]=a*Math.cos(i),n[1]=-Math.cos(r),n[2]=a*Math.sin(i),n};y.getShadowResolution=function(e){var t=1024;switch(e){case"low":t=512;break;case"medium":break;case"high":t=2048;break;case"ultra":t=4096;break}return t};y.COMMON_SHADERS=["lambert","color","realistic","hatching","shadow"];y.createShader=function(e){e==="ecgl.shadow"&&(e="ecgl.displayShadow");var t=B.source(e+".vertex"),r=B.source(e+".fragment");t||console.error("Vertex shader of '%s' not exits",e),r||console.error("Fragment shader of '%s' not exits",e);var i=new B(t,r);return i.name=e,i};y.createMaterial=function(e,t){t instanceof Array||(t=[t]);var r=y.createShader(e),i=new ut({shader:r});return t.forEach(function(n){typeof n=="string"&&i.define(n)}),i};y.setMaterialFromModel=function(e,t,r,i){t.autoUpdateTextureStatus=!1;var n=r.getModel(e+"Material"),a=n.get("detailTexture"),o=Y.firstNotNull(n.get("textureTiling"),1),s=Y.firstNotNull(n.get("textureOffset"),0);typeof o=="number"&&(o=[o,o]),typeof s=="number"&&(s=[s,s]);var l=o[0]>1||o[1]>1?y.Texture.REPEAT:y.Texture.CLAMP_TO_EDGE,h={anisotropic:8,wrapS:l,wrapT:l};if(e==="realistic"){var u=n.get("roughness"),f=n.get("metalness");f!=null?isNaN(f)&&(t.setTextureImage("metalnessMap",f,i,h),f=Y.firstNotNull(n.get("metalnessAdjust"),.5)):f=0,u!=null?isNaN(u)&&(t.setTextureImage("roughnessMap",u,i,h),u=Y.firstNotNull(n.get("roughnessAdjust"),.5)):u=.5;var d=n.get("normalTexture");t.setTextureImage("detailMap",a,i,h),t.setTextureImage("normalMap",d,i,h),t.set({roughness:u,metalness:f,detailUvRepeat:o,detailUvOffset:s})}else if(e==="lambert")t.setTextureImage("detailMap",a,i,h),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="color")t.setTextureImage("detailMap",a,i,h),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="hatching"){var c=n.get("hatchingTextures")||[];c.length<6;for(var v=0;v<6;v++)t.setTextureImage("hatch"+(v+1),c[v],i,{anisotropic:8,wrapS:y.Texture.REPEAT,wrapT:y.Texture.REPEAT});t.set({detailUvRepeat:o,detailUvOffset:s})}};y.updateVertexAnimation=function(e,t,r,i){var n=i.get("animation"),a=i.get("animationDurationUpdate"),o=i.get("animationEasingUpdate"),s=r.shadowDepthMaterial;if(n&&t&&a>0&&t.geometry.vertexCount===r.geometry.vertexCount){r.material.define("vertex","VERTEX_ANIMATION"),r.ignorePreZ=!0,s&&s.define("vertex","VERTEX_ANIMATION");for(var l=0;l<e.length;l++)r.geometry.attributes[e[l][0]].value=t.geometry.attributes[e[l][1]].value;r.geometry.dirty(),r.__percent=0,r.material.set("percent",0),r.stopAnimation(),r.animate().when(a,{__percent:1}).during(function(){r.material.set("percent",r.__percent),s&&s.set("percent",r.__percent)}).done(function(){r.ignorePreZ=!1,r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")}).start(o)}else r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")};var ce=function(e,t){this.id=e,this.zr=t;try{this.renderer=new ei({clearBit:0,devicePixelRatio:t.painter.dpr,preserveDrawingBuffer:!0,premultipliedAlpha:!0}),this.renderer.resize(t.painter.getWidth(),t.painter.getHeight())}catch(i){this.renderer=null,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute; left: 0; top: 0; right: 0; bottom: 0;",this.dom.className="ecgl-nowebgl",this.dom.innerHTML="Sorry, your browser does not support WebGL",console.error(i);return}this.onglobalout=this.onglobalout.bind(this),t.on("globalout",this.onglobalout),this.dom=this.renderer.canvas;var r=this.dom.style;r.position="absolute",r.left="0",r.top="0",this.views=[],this._picking=new Ah({renderer:this.renderer}),this._viewsToDispose=[],this._accumulatingId=0,this._zrEventProxy=new Wo({shape:{x:-1,y:-1,width:2,height:2},__isGLToZRProxy:!0}),this._backgroundColor=null,this._disposed=!1};ce.prototype.setUnpainted=function(){};ce.prototype.addView=function(e){if(e.layer!==this){var t=this._viewsToDispose.indexOf(e);t>=0&&this._viewsToDispose.splice(t,1),this.views.push(e),e.layer=this;var r=this.zr;e.scene.traverse(function(i){i.__zr=r,i.addAnimatorsToZr&&i.addAnimatorsToZr(r)})}};function ps(e){var t=e.__zr;e.__zr=null,t&&e.removeAnimatorsFromZr&&e.removeAnimatorsFromZr(t)}ce.prototype.removeView=function(e){if(e.layer===this){var t=this.views.indexOf(e);t>=0&&(this.views.splice(t,1),e.scene.traverse(ps,this),e.layer=null,this._viewsToDispose.push(e))}};ce.prototype.removeViewsAll=function(){this.views.forEach(function(e){e.scene.traverse(ps,this),e.layer=null,this._viewsToDispose.push(e)},this),this.views.length=0};ce.prototype.resize=function(e,t){var r=this.renderer;r.resize(e,t)};ce.prototype.clear=function(){var e=this.renderer.gl,t=this._backgroundColor||[0,0,0,0];e.clearColor(t[0],t[1],t[2],t[3]),e.depthMask(!0),e.colorMask(!0,!0,!0,!0),e.clear(e.DEPTH_BUFFER_BIT|e.COLOR_BUFFER_BIT)};ce.prototype.clearDepth=function(){var e=this.renderer.gl;e.clear(e.DEPTH_BUFFER_BIT)};ce.prototype.clearColor=function(){var e=this.renderer.gl;e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT)};ce.prototype.needsRefresh=function(){this.zr.refresh()};ce.prototype.refresh=function(e){this._backgroundColor=e?y.parseColor(e):[0,0,0,0],this.renderer.clearColor=this._backgroundColor;for(var t=0;t<this.views.length;t++)this.views[t].prepareRender(this.renderer);this._doRender(!1),this._trackAndClean();for(var t=0;t<this._viewsToDispose.length;t++)this._viewsToDispose[t].dispose(this.renderer);this._viewsToDispose.length=0,this._startAccumulating()};ce.prototype.renderToCanvas=function(e){this._startAccumulating(!0),e.drawImage(this.dom,0,0,e.canvas.width,e.canvas.height)};ce.prototype._doRender=function(e){this.clear(),this.renderer.saveViewport();for(var t=0;t<this.views.length;t++)this.views[t].render(this.renderer,e);this.renderer.restoreViewport()};ce.prototype._stopAccumulating=function(){this._accumulatingId=0,clearTimeout(this._accumulatingTimeout)};var Yu=1;ce.prototype._startAccumulating=function(e){var t=this;this._stopAccumulating();for(var r=!1,i=0;i<this.views.length;i++)r=this.views[i].needsAccumulate()||r;if(!r)return;function n(a){if(!(!t._accumulatingId||a!==t._accumulatingId)){for(var o=!0,s=0;s<t.views.length;s++)o=t.views[s].isAccumulateFinished()&&r;o||(t._doRender(!0),e?n(a):zn(function(){n(a)}))}}this._accumulatingId=Yu++,e?n(t._accumulatingId):this._accumulatingTimeout=setTimeout(function(){n(t._accumulatingId)},50)};ce.prototype._trackAndClean=function(){var e=[],t=[];this._textureList&&(Hi(this._textureList),Hi(this._geometriesList));for(var r=0;r<this.views.length;r++)Ju(this.views[r].scene,e,t);this._textureList&&(ki(this.renderer,this._textureList),ki(this.renderer,this._geometriesList)),this._textureList=e,this._geometriesList=t};function Hi(e){for(var t=0;t<e.length;t++)e[t].__used__=0}function ki(e,t){for(var r=0;r<t.length;r++)t[r].__used__||t[r].dispose(e)}function Li(e,t){e.__used__=e.__used__||0,e.__used__++,e.__used__===1&&t.push(e)}function Ju(e,t,r){var i,n;e.traverse(function(o){if(o.isRenderable()){var s=o.geometry,l=o.material;if(l!==i)for(var h=l.getTextureUniforms(),u=0;u<h.length;u++){var f=h[u],d=l.uniforms[f].value;if(d){if(d instanceof O)Li(d,t);else if(d instanceof Array)for(var c=0;c<d.length;c++)d[c]instanceof O&&Li(d[c],t)}}s!==n&&Li(s,r),i=l,n=s}});for(var a=0;a<e.lights.length;a++)e.lights[a].cubemap&&Li(e.lights[a].cubemap,t)}ce.prototype.dispose=function(){this._disposed||(this._stopAccumulating(),this._textureList&&(Hi(this._textureList),Hi(this._geometriesList),ki(this.renderer,this._textureList),ki(this.renderer,this._geometriesList)),this.zr.off("globalout",this.onglobalout),this._disposed=!0)};ce.prototype.onmousedown=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mousedown",e,t),this._dispatchDataEvent("mousedown",e,t)),this._downX=e.offsetX,this._downY=e.offsetY}};ce.prototype.onmousemove=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY),r=t&&t.target,i=this._hovered;this._hovered=t,i&&r!==i.target&&(i.relatedTarget=r,this._dispatchEvent("mouseout",e,i),this.zr.setCursorStyle("default")),this._dispatchEvent("mousemove",e,t),t&&(this.zr.setCursorStyle("pointer"),(!i||r!==i.target)&&this._dispatchEvent("mouseover",e,t)),this._dispatchDataEvent("mousemove",e,t)}};ce.prototype.onmouseup=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mouseup",e,t),this._dispatchDataEvent("mouseup",e,t)),this._upX=e.offsetX,this._upY=e.offsetY}};ce.prototype.onclick=ce.prototype.dblclick=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){var t=this._upX-this._downX,r=this._upY-this._downY;if(!(Math.sqrt(t*t+r*r)>20)){e=e.event;var i=this.pickObject(e.offsetX,e.offsetY);i&&(this._dispatchEvent(e.type,e,i),this._dispatchDataEvent(e.type,e,i));var n=this._clickToSetFocusPoint(e);if(n){var a=n.view.setDOFFocusOnPoint(n.distance);a&&this.zr.refresh()}}}};ce.prototype._clickToSetFocusPoint=function(e){for(var t=this.renderer,r=t.viewport,i=this.views.length-1;i>=0;i--){var n=this.views[i];if(n.hasDOF()&&n.containPoint(e.offsetX,e.offsetY)){this._picking.scene=n.scene,this._picking.camera=n.camera,t.viewport=n.viewport;var a=this._picking.pick(e.offsetX,e.offsetY,!0);if(a)return a.view=n,a}}t.viewport=r};ce.prototype.onglobalout=function(e){var t=this._hovered;t&&this._dispatchEvent("mouseout",e,{target:t.target})};ce.prototype.pickObject=function(e,t){for(var r=[],i=this.renderer,n=i.viewport,a=0;a<this.views.length;a++){var o=this.views[a];o.containPoint(e,t)&&(this._picking.scene=o.scene,this._picking.camera=o.camera,i.viewport=o.viewport,this._picking.pickAll(e,t,r))}return i.viewport=n,r.sort(function(s,l){return s.distance-l.distance}),r[0]};ce.prototype._dispatchEvent=function(e,t,r){r||(r={});var i=r.target;for(r.cancelBubble=!1,r.event=t,r.type=e,r.offsetX=t.offsetX,r.offsetY=t.offsetY;i&&(i.trigger(e,r),i=i.getParent(),!r.cancelBubble););this._dispatchToView(e,r)};ce.prototype._dispatchDataEvent=function(e,t,r){var i=r&&r.target,n=i&&i.dataIndex,a=i&&i.seriesIndex,o=i&&i.eventData,s=!1,l=this._zrEventProxy;l.x=t.offsetX,l.y=t.offsetY,l.update();var h={target:l};const u=dl(l);e==="mousemove"&&(n!=null?n!==this._lastDataIndex&&(parseInt(this._lastDataIndex,10)>=0&&(u.dataIndex=this._lastDataIndex,u.seriesIndex=this._lastSeriesIndex,this.zr.handler.dispatchToElement(h,"mouseout",t)),s=!0):o!=null&&o!==this._lastEventData&&(this._lastEventData!=null&&(u.eventData=this._lastEventData,this.zr.handler.dispatchToElement(h,"mouseout",t)),s=!0),this._lastEventData=o,this._lastDataIndex=n,this._lastSeriesIndex=a),u.eventData=o,u.dataIndex=n,u.seriesIndex=a,(o!=null||parseInt(n,10)>=0&&parseInt(a,10)>=0)&&(this.zr.handler.dispatchToElement(h,e,t),s&&this.zr.handler.dispatchToElement(h,"mouseover",t))};ce.prototype._dispatchToView=function(e,t){for(var r=0;r<this.views.length;r++)this.views[r].containPoint(t.offsetX,t.offsetY)&&this.views[r].trigger(e,t)};Object.assign(ce.prototype,na);const ms=ce;var $u=["bar3D","line3D","map3D","scatter3D","surface","lines3D","scatterGL","scatter3D"];function Yr(e,t){if(e&&e[t]&&(e[t].normal||e[t].emphasis)){var r=e[t].normal,i=e[t].emphasis;r&&(e[t]=r),i&&(e.emphasis=e.emphasis||{},e.emphasis[t]=i)}}function ef(e){Yr(e,"itemStyle"),Yr(e,"lineStyle"),Yr(e,"areaStyle"),Yr(e,"label")}function Mi(e){e&&(e instanceof Array||(e=[e]),At(e,function(t){if(t.axisLabel){var r=t.axisLabel;Object.assign(r,r.textStyle),r.textStyle=null}}))}function tf(e){At(e.series,function(t){vl($u,t.type)>=0&&(ef(t),t.coordinateSystem==="mapbox"&&(t.coordinateSystem="mapbox3D",e.mapbox3D=e.mapbox))}),Mi(e.xAxis3D),Mi(e.yAxis3D),Mi(e.zAxis3D),Mi(e.grid3D),Yr(e.geo3D)}function gs(e){this._layers={},this._zr=e}gs.prototype.update=function(e,t){var r=this,i=t.getZr();if(!i.getWidth()||!i.getHeight()){console.warn("Dom has no width or height");return}function n(s){i.setSleepAfterStill(0);var l;s.coordinateSystem&&s.coordinateSystem.model,l=s.get("zlevel");var h=r._layers,u=h[l];if(!u){if(u=h[l]=new ms("gl-"+l,i),i.painter.isSingleCanvas()){u.virtual=!0;var f=new _l({z:1e4,style:{image:u.renderer.canvas},silent:!0});u.__hostImage=f,i.add(f)}i.painter.insertLayer(l,u)}return u.__hostImage&&u.__hostImage.setStyle({width:u.renderer.getWidth(),height:u.renderer.getHeight()}),u}function a(s,l){s&&s.traverse(function(h){h.isRenderable&&h.isRenderable()&&(h.ignorePicking=h.$ignorePicking!=null?h.$ignorePicking:l)})}for(var o in this._layers)this._layers[o].removeViewsAll();e.eachComponent(function(s,l){if(s!=="series"){var h=t.getViewOfComponentModel(l),u=l.coordinateSystem;if(h.__ecgl__){var f;if(u){if(!u.viewGL){console.error("Can't find viewGL in coordinateSystem of component "+l.id);return}f=u.viewGL}else{if(!l.viewGL){console.error("Can't find viewGL of component "+l.id);return}f=u.viewGL}var f=u.viewGL,d=n(l);d.addView(f),h.afterRender&&h.afterRender(l,e,t,d),a(h.groupGL,l.get("silent"))}}}),e.eachSeries(function(s){var l=t.getViewOfSeriesModel(s),h=s.coordinateSystem;if(l.__ecgl__){if(h&&!h.viewGL&&!l.viewGL){console.error("Can't find viewGL of series "+l.id);return}var u=h&&h.viewGL||l.viewGL,f=n(s);f.addView(u),l.afterRender&&l.afterRender(s,e,t,f),a(l.groupGL,s.get("silent"))}})};pl(function(e){var t=e.getZr(),r=t.painter.dispose;t.painter.dispose=function(){typeof this.eachOtherLayer=="function"&&this.eachOtherLayer(function(i){i instanceof ms&&i.dispose()}),r.call(this)},t.painter.getRenderedCanvas=function(i){if(i=i||{},this._singleCanvas)return this._layers[0].dom;var n=document.createElement("canvas"),a=i.pixelRatio||this.dpr;n.width=this.getWidth()*a,n.height=this.getHeight()*a;var o=n.getContext("2d");o.dpr=a,o.clearRect(0,0,n.width,n.height),i.backgroundColor&&(o.fillStyle=i.backgroundColor,o.fillRect(0,0,n.width,n.height));var s=this.storage.getDisplayList(!0),l={},h,u=this;function f(p,m){var g=u._zlevelList;p==null&&(p=-1/0);for(var T,x=0;x<g.length;x++){var _=g[x],S=u._layers[_];if(!S.__builtin__&&_>p&&_<m){T=S;break}}T&&T.renderToCanvas&&(o.save(),T.renderToCanvas(o),o.restore())}for(var d={ctx:o},c=0;c<s.length;c++){var v=s[c];v.zlevel!==h&&(f(h,v.zlevel),h=v.zlevel),this._doPaintEl(v,d,!0,null,l)}return f(h,1/0),n}});ml(function(e,t){var r=t.getZr(),i=r.__egl=r.__egl||new gs(r);i.update(e,t)});gl(tf);const nn={defaultOption:{viewControl:{projection:"perspective",autoRotate:!1,autoRotateDirection:"cw",autoRotateSpeed:10,autoRotateAfterStill:3,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",distance:150,minDistance:40,maxDistance:400,orthographicSize:150,maxOrthographicSize:400,minOrthographicSize:20,center:[0,0,0],alpha:0,beta:0,minAlpha:-90,maxAlpha:90}},setView:function(e){e=e||{},this.option.viewControl=this.option.viewControl||{},e.alpha!=null&&(this.option.viewControl.alpha=e.alpha),e.beta!=null&&(this.option.viewControl.beta=e.beta),e.distance!=null&&(this.option.viewControl.distance=e.distance),e.center!=null&&(this.option.viewControl.center=e.center)}},Or={defaultOption:{postEffect:{enable:!1,bloom:{enable:!0,intensity:.1},depthOfField:{enable:!1,focalRange:20,focalDistance:50,blurRadius:10,fstop:2.8,quality:"medium"},screenSpaceAmbientOcclusion:{enable:!1,radius:2,quality:"medium",intensity:1},screenSpaceReflection:{enable:!1,quality:"medium",maxRoughness:.8},colorCorrection:{enable:!0,exposure:0,brightness:0,contrast:1,saturation:1,lookupTexture:""},edge:{enable:!1},FXAA:{enable:!1}},temporalSuperSampling:{enable:"auto"}}},Br={defaultOption:{light:{main:{shadow:!1,shadowQuality:"high",color:"#fff",intensity:1,alpha:0,beta:0},ambient:{color:"#fff",intensity:.2},ambientCubemap:{texture:null,exposure:1,diffuseIntensity:.5,specularIntensity:.5}}}};var an=Ir.extend({type:"grid3D",dependencies:["xAxis3D","yAxis3D","zAxis3D"],defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",boxWidth:100,boxHeight:100,boxDepth:100,axisPointer:{show:!0,lineStyle:{color:"rgba(0, 0, 0, 0.8)",width:1},label:{show:!0,formatter:null,margin:8,textStyle:{fontSize:14,color:"#fff",backgroundColor:"rgba(0,0,0,0.5)",padding:3,borderRadius:3}}},axisLine:{show:!0,lineStyle:{color:"#333",width:2,type:"solid"}},axisTick:{show:!0,inside:!1,length:3,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,margin:8,textStyle:{fontSize:12}},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}},light:{main:{alpha:30,beta:40},ambient:{intensity:.4}},viewControl:{alpha:20,beta:40,autoRotate:!1,distance:200,minDistance:40,maxDistance:400}}});le(an.prototype,nn);le(an.prototype,Or);le(an.prototype,Br);const rf=an;var Zr=Y.firstNotNull,lo={left:0,middle:1,right:2};function ho(e){return e instanceof Array||(e=[e,e]),e}var _s=He.extend(function(){return{zr:null,viewGL:null,_center:new C,minDistance:.5,maxDistance:1.5,maxOrthographicSize:300,minOrthographicSize:30,minAlpha:-90,maxAlpha:90,minBeta:-1/0,maxBeta:1/0,autoRotateAfterStill:0,autoRotateDirection:"cw",autoRotateSpeed:60,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",_mode:"rotate",_camera:null,_needsUpdate:!1,_rotating:!1,_phi:0,_theta:0,_mouseX:0,_mouseY:0,_rotateVelocity:new nt,_panVelocity:new nt,_distance:500,_zoomSpeed:0,_stillTimeout:0,_animators:[]}},function(){["_mouseDownHandler","_mouseWheelHandler","_mouseMoveHandler","_mouseUpHandler","_pinchHandler","_contextMenuHandler","_update"].forEach(function(e){this[e]=this[e].bind(this)},this)},{init:function(){var e=this.zr;e&&(e.on("mousedown",this._mouseDownHandler),e.on("globalout",this._mouseUpHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("pinch",this._pinchHandler),e.animation.on("frame",this._update),e.dom.addEventListener("contextmenu",this._contextMenuHandler))},dispose:function(){var e=this.zr;e&&(e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("pinch",this._pinchHandler),e.off("globalout",this._mouseUpHandler),e.dom.removeEventListener("contextmenu",this._contextMenuHandler),e.animation.off("frame",this._update)),this.stopAllAnimation()},getDistance:function(){return this._distance},setDistance:function(e){this._distance=e,this._needsUpdate=!0},getOrthographicSize:function(){return this._orthoSize},setOrthographicSize:function(e){this._orthoSize=e,this._needsUpdate=!0},getAlpha:function(){return this._theta/Math.PI*180},getBeta:function(){return-this._phi/Math.PI*180},getCenter:function(){return this._center.toArray()},setAlpha:function(e){e=Math.max(Math.min(this.maxAlpha,e),this.minAlpha),this._theta=e/180*Math.PI,this._needsUpdate=!0},setBeta:function(e){e=Math.max(Math.min(this.maxBeta,e),this.minBeta),this._phi=-e/180*Math.PI,this._needsUpdate=!0},setCenter:function(e){this._center.setArray(e)},setViewGL:function(e){this.viewGL=e},getCamera:function(){return this.viewGL.camera},setFromViewControlModel:function(e,t){t=t||{};var r=t.baseDistance||0,i=t.baseOrthoSize||1,n=e.get("projection");n!=="perspective"&&n!=="orthographic"&&n!=="isometric"&&(n="perspective"),this._projection=n,this.viewGL.setProjection(n);var a=e.get("distance")+r,o=e.get("orthographicSize")+i;[["damping",.8],["autoRotate",!1],["autoRotateAfterStill",3],["autoRotateDirection","cw"],["autoRotateSpeed",10],["minDistance",30],["maxDistance",400],["minOrthographicSize",30],["maxOrthographicSize",300],["minAlpha",-90],["maxAlpha",90],["minBeta",-1/0],["maxBeta",1/0],["rotateSensitivity",1],["zoomSensitivity",1],["panSensitivity",1],["panMouseButton","left"],["rotateMouseButton","middle"]].forEach(function(d){this[d[0]]=Zr(e.get(d[0]),d[1])},this),this.minDistance+=r,this.maxDistance+=r,this.minOrthographicSize+=i,this.maxOrthographicSize+=i;var s=e.ecModel,l={};["animation","animationDurationUpdate","animationEasingUpdate"].forEach(function(d){l[d]=Zr(e.get(d),s&&s.get(d))});var h=Zr(t.alpha,e.get("alpha"))||0,u=Zr(t.beta,e.get("beta"))||0,f=Zr(t.center,e.get("center"))||[0,0,0];l.animation&&l.animationDurationUpdate>0&&this._notFirst?this.animateTo({alpha:h,beta:u,center:f,distance:a,orthographicSize:o,easing:l.animationEasingUpdate,duration:l.animationDurationUpdate}):(this.setDistance(a),this.setAlpha(h),this.setBeta(u),this.setCenter(f),this.setOrthographicSize(o)),this._notFirst=!0,this._validateProperties()},_validateProperties:function(){},animateTo:function(e){var t=this.zr,r=this,i={},n={};return e.distance!=null&&(i.distance=this.getDistance(),n.distance=e.distance),e.orthographicSize!=null&&(i.orthographicSize=this.getOrthographicSize(),n.orthographicSize=e.orthographicSize),e.alpha!=null&&(i.alpha=this.getAlpha(),n.alpha=e.alpha),e.beta!=null&&(i.beta=this.getBeta(),n.beta=e.beta),e.center!=null&&(i.center=this.getCenter(),n.center=e.center),this._addAnimator(t.animation.animate(i).when(e.duration||1e3,n).during(function(){i.alpha!=null&&r.setAlpha(i.alpha),i.beta!=null&&r.setBeta(i.beta),i.distance!=null&&r.setDistance(i.distance),i.center!=null&&r.setCenter(i.center),i.orthographicSize!=null&&r.setOrthographicSize(i.orthographicSize),r._needsUpdate=!0})).start(e.easing||"linear")},stopAllAnimation:function(){for(var e=0;e<this._animators.length;e++)this._animators[e].stop();this._animators.length=0},update:function(){this._needsUpdate=!0,this._update(20)},_isAnimating:function(){return this._animators.length>0},_update:function(e){if(this._rotating){var t=(this.autoRotateDirection==="cw"?1:-1)*this.autoRotateSpeed/180*Math.PI;this._phi-=t*e/1e3,this._needsUpdate=!0}else this._rotateVelocity.len()>0&&(this._needsUpdate=!0);(Math.abs(this._zoomSpeed)>.1||this._panVelocity.len()>0)&&(this._needsUpdate=!0),this._needsUpdate&&(e=Math.min(e,50),this._updateDistanceOrSize(e),this._updatePan(e),this._updateRotate(e),this._updateTransform(),this.getCamera().update(),this.zr&&this.zr.refresh(),this.trigger("update"),this._needsUpdate=!1)},_updateRotate:function(e){var t=this._rotateVelocity;this._phi=t.y*e/20+this._phi,this._theta=t.x*e/20+this._theta,this.setAlpha(this.getAlpha()),this.setBeta(this.getBeta()),this._vectorDamping(t,Math.pow(this.damping,e/16))},_updateDistanceOrSize:function(e){this._projection==="perspective"?this._setDistance(this._distance+this._zoomSpeed*e/20):this._setOrthoSize(this._orthoSize+this._zoomSpeed*e/20),this._zoomSpeed*=Math.pow(this.damping,e/16)},_setDistance:function(e){this._distance=Math.max(Math.min(e,this.maxDistance),this.minDistance)},_setOrthoSize:function(e){this._orthoSize=Math.max(Math.min(e,this.maxOrthographicSize),this.minOrthographicSize);var t=this.getCamera(),r=this._orthoSize,i=r/this.viewGL.viewport.height*this.viewGL.viewport.width;t.left=-i/2,t.right=i/2,t.top=r/2,t.bottom=-r/2},_updatePan:function(e){var t=this._panVelocity,r=this._distance,i=this.getCamera(),n=i.worldTransform.y,a=i.worldTransform.x;this._center.scaleAndAdd(a,-t.x*r/200).scaleAndAdd(n,-t.y*r/200),this._vectorDamping(t,0)},_updateTransform:function(){var e=this.getCamera(),t=new C,r=this._theta+Math.PI/2,i=this._phi+Math.PI/2,n=Math.sin(r);t.x=n*Math.cos(i),t.y=-Math.cos(r),t.z=n*Math.sin(i),e.position.copy(this._center).scaleAndAdd(t,this._distance),e.rotation.identity().rotateY(-this._phi).rotateX(-this._theta)},_startCountingStill:function(){clearTimeout(this._stillTimeout);var e=this.autoRotateAfterStill,t=this;!isNaN(e)&&e>0&&(this._stillTimeout=setTimeout(function(){t._rotating=!0},e*1e3))},_vectorDamping:function(e,t){var r=e.len();r=r*t,r<1e-4&&(r=0),e.normalize().scale(r)},_decomposeTransform:function(){if(this.getCamera()){this.getCamera().updateWorldTransform();var e=this.getCamera().worldTransform.z,t=Math.asin(e.y),r=Math.atan2(e.x,e.z);this._theta=t,this._phi=-r,this.setBeta(this.getBeta()),this.setAlpha(this.getAlpha()),this.getCamera().aspect?this._setDistance(this.getCamera().position.dist(this._center)):this._setOrthoSize(this.getCamera().top-this.getCamera().bottom)}},_mouseDownHandler:function(e){if(!e.target&&!this._isAnimating()){var t=e.offsetX,r=e.offsetY;this.viewGL&&!this.viewGL.containPoint(t,r)||(this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler),e.event.targetTouches?e.event.targetTouches.length===1&&(this._mode="rotate"):e.event.button===lo[this.rotateMouseButton]?this._mode="rotate":e.event.button===lo[this.panMouseButton]?this._mode="pan":this._mode="",this._rotateVelocity.set(0,0),this._rotating=!1,this.autoRotate&&this._startCountingStill(),this._mouseX=e.offsetX,this._mouseY=e.offsetY)}},_mouseMoveHandler:function(e){if(!(e.target&&e.target.__isGLToZRProxy)&&!this._isAnimating()){var t=ho(this.panSensitivity),r=ho(this.rotateSensitivity);this._mode==="rotate"?(this._rotateVelocity.y=(e.offsetX-this._mouseX)/this.zr.getHeight()*2*r[0],this._rotateVelocity.x=(e.offsetY-this._mouseY)/this.zr.getWidth()*2*r[1]):this._mode==="pan"&&(this._panVelocity.x=(e.offsetX-this._mouseX)/this.zr.getWidth()*t[0]*400,this._panVelocity.y=(-e.offsetY+this._mouseY)/this.zr.getHeight()*t[1]*400),this._mouseX=e.offsetX,this._mouseY=e.offsetY,e.event.preventDefault()}},_mouseWheelHandler:function(e){if(!this._isAnimating()){var t=e.event.wheelDelta||-e.event.detail;this._zoomHandler(e,t)}},_pinchHandler:function(e){this._isAnimating()||(this._zoomHandler(e,e.pinchScale>1?1:-1),this._mode="")},_zoomHandler:function(e,t){if(t!==0){var r=e.offsetX,i=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(r,i))){var n;this._projection==="perspective"?n=Math.max(Math.max(Math.min(this._distance-this.minDistance,this.maxDistance-this._distance))/20,.5):n=Math.max(Math.max(Math.min(this._orthoSize-this.minOrthographicSize,this.maxOrthographicSize-this._orthoSize))/20,.5),this._zoomSpeed=(t>0?-1:1)*n*this.zoomSensitivity,this._rotating=!1,this.autoRotate&&this._mode==="rotate"&&this._startCountingStill(),e.event.preventDefault()}}},_mouseUpHandler:function(){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_isRightMouseButtonUsed:function(){return this.rotateMouseButton==="right"||this.panMouseButton==="right"},_contextMenuHandler:function(e){this._isRightMouseButtonUsed()&&e.preventDefault()},_addAnimator:function(e){var t=this._animators;return t.push(e),e.done(function(){var r=t.indexOf(e);r>=0&&t.splice(r,1)}),e}});Object.defineProperty(_s.prototype,"autoRotate",{get:function(e){return this._autoRotate},set:function(e){this._autoRotate=e,this._rotating=e}});const on=_s,pi={convertToDynamicArray:function(e){e&&this.resetOffset();var t=this.attributes;for(var r in t)e||!t[r].value?t[r].value=[]:t[r].value=Array.prototype.slice.call(t[r].value);e||!this.indices?this.indices=[]:this.indices=Array.prototype.slice.call(this.indices)},convertToTypedArray:function(){var e=this.attributes;for(var t in e)e[t].value&&e[t].value.length>0?e[t].value=new Float32Array(e[t].value):e[t].value=null;this.indices&&this.indices.length>0&&(this.indices=this.vertexCount>65535?new Uint32Array(this.indices):new Uint16Array(this.indices)),this.dirty()}},be={vec2:X,vec3:E,vec4:G,mat2:Te,mat2d:Ce,mat3:q,mat4:P,quat:Z};var Ln=be.vec3,uo=[[0,0],[1,1]],qt=J.extend(function(){return{segmentScale:1,dynamic:!0,useNativeLine:!0,attributes:{position:new J.Attribute("position","float",3,"POSITION"),positionPrev:new J.Attribute("positionPrev","float",3),positionNext:new J.Attribute("positionNext","float",3),prevPositionPrev:new J.Attribute("prevPositionPrev","float",3),prevPosition:new J.Attribute("prevPosition","float",3),prevPositionNext:new J.Attribute("prevPositionNext","float",3),offset:new J.Attribute("offset","float",1),color:new J.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.positionPrev.init(e),t.positionNext.init(e),t.offset.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,r,i){var n=Ln.dist(e,t)+Ln.dist(r,t)+Ln.dist(i,r),a=1/(n+1)*this.segmentScale;return a},getCubicCurveVertexCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?a*2:a*2+2},getCubicCurveTriangleCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?0:a*2},getLineVertexCount:function(){return this.getPolylineVertexCount(uo)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(uo)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?0:Math.max(t-1,0)*2},addCubicCurve:function(e,t,r,i,n,a){a==null&&(a=1);for(var o=e[0],s=e[1],l=e[2],h=t[0],u=t[1],f=t[2],d=r[0],c=r[1],v=r[2],p=i[0],m=i[1],g=i[2],T=this._getCubicCurveApproxStep(e,t,r,i),x=T*T,_=x*T,S=3*T,A=3*x,b=6*x,w=6*_,L=o-h*2+d,I=s-u*2+c,M=l-f*2+v,N=(h-d)*3-o+p,U=(u-c)*3-s+m,D=(f-v)*3-l+g,z=o,H=s,W=l,V=(h-o)*S+L*A+N*_,ne=(u-s)*S+I*A+U*_,k=(f-l)*S+M*A+D*_,ue=L*b+N*w,ae=I*b+U*w,de=M*b+D*w,ve=N*w,ee=U*w,Me=D*w,_e=0,Ee=0,We=Math.ceil(1/T),Ve=new Float32Array((We+1)*3),Ve=[],Oe=0,Ee=0;Ee<We+1;Ee++)Ve[Oe++]=z,Ve[Oe++]=H,Ve[Oe++]=W,z+=V,H+=ne,W+=k,V+=ue,ne+=ae,k+=de,ue+=ve,ae+=ee,de+=Me,_e+=T,_e>1&&(z=V>0?Math.min(z,p):Math.max(z,p),H=ne>0?Math.min(H,m):Math.max(H,m),W=k>0?Math.min(W,g):Math.max(W,g));return this.addPolyline(Ve,n,a)},addLine:function(e,t,r,i){return this.addPolyline([e,t],r,i)},addPolyline:function(e,t,r,i,n){if(e.length){var a=typeof e[0]!="number";if(n==null&&(n=a?e.length:e.length/3),!(n<2)){i==null&&(i=0),r==null&&(r=1),this._itemVertexOffsets.push(this._vertexOffset);var a=typeof e[0]!="number",o=a?typeof t[0]!="number":t.length/4===n,s=this.attributes.position,l=this.attributes.positionPrev,h=this.attributes.positionNext,u=this.attributes.color,f=this.attributes.offset,d=this.indices,c=this._vertexOffset,v,p;r=Math.max(r,.01);for(var m=i;m<n;m++){if(a)v=e[m],o?p=t[m]:p=t;else{var g=m*3;if(v=v||[],v[0]=e[g],v[1]=e[g+1],v[2]=e[g+2],o){var T=m*4;p=p||[],p[0]=t[T],p[1]=t[T+1],p[2]=t[T+2],p[3]=t[T+3]}else p=t}if(this.useNativeLine?m>1&&(s.copy(c,c-1),u.copy(c,c-1),c++):(m<n-1&&(l.set(c+2,v),l.set(c+3,v)),m>0&&(h.set(c-2,v),h.set(c-1,v)),s.set(c,v),s.set(c+1,v),u.set(c,p),u.set(c+1,p),f.set(c,r/2),f.set(c+1,-r/2),c+=2),this.useNativeLine)u.set(c,p),s.set(c,v),c++;else if(m>0){var x=this._triangleOffset*3,d=this.indices;d[x]=c-4,d[x+1]=c-3,d[x+2]=c-2,d[x+3]=c-3,d[x+4]=c-1,d[x+5]=c-2,this._triangleOffset+=2}}if(!this.useNativeLine){var _=this._vertexOffset,S=this._vertexOffset+n*2;l.copy(_,_+2),l.copy(_+1,_+3),h.copy(S-1,S-3),h.copy(S-2,S-4)}return this._vertexOffset=c,this._vertexOffset}}},setItemColor:function(e,t){for(var r=this._itemVertexOffsets[e],i=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,n=r;n<i;n++)this.attributes.color.set(n,t);this.dirty("color")},currentTriangleOffset:function(){return this._triangleOffset},currentVertexOffset:function(){return this._vertexOffset}});kt(qt.prototype,pi);function Wi(e,t,r,i,n,a,o){this._zr=e,this._x=0,this._y=0,this._rowHeight=0,this.width=i,this.height=n,this.offsetX=t,this.offsetY=r,this.dpr=o,this.gap=a}Wi.prototype={constructor:Wi,clear:function(){this._x=0,this._y=0,this._rowHeight=0},add:function(e,t,r){var i=e.getBoundingRect();t==null&&(t=i.width),r==null&&(r=i.height),t*=this.dpr,r*=this.dpr,this._fitElement(e,t,r);var n=this._x,a=this._y,o=this.width*this.dpr,s=this.height*this.dpr,l=this.gap;if(n+t+l>o&&(n=this._x=0,a+=this._rowHeight+l,this._y=a,this._rowHeight=0),this._x+=t+l,this._rowHeight=Math.max(this._rowHeight,r),a+r+l>s)return null;e.x+=this.offsetX*this.dpr+n,e.y+=this.offsetY*this.dpr+a,this._zr.add(e);var h=[this.offsetX/this.width,this.offsetY/this.height],u=[[n/o+h[0],a/s+h[1]],[(n+t)/o+h[0],(a+r)/s+h[1]]];return u},_fitElement:function(e,t,r){var i=e.getBoundingRect(),n=t/i.width,a=r/i.height;e.x=-i.x*n,e.y=-i.y*a,e.scaleX=n,e.scaleY=a,e.update()}};function qi(e){e=e||{},e.width=e.width||512,e.height=e.height||512,e.devicePixelRatio=e.devicePixelRatio||1,e.gap=e.gap==null?2:e.gap;var t=document.createElement("canvas");t.width=e.width*e.devicePixelRatio,t.height=e.height*e.devicePixelRatio,this._canvas=t,this._texture=new Q({image:t,flipY:!1});var r=this;this._zr=yl(t);var i=this._zr.refreshImmediately;this._zr.refreshImmediately=function(){i.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},this._dpr=e.devicePixelRatio,this._coords={},this.onupdate=e.onupdate,this._gap=e.gap,this._textureAtlasNodes=[new Wi(this._zr,0,0,e.width,e.height,this._gap,this._dpr)],this._nodeWidth=e.width,this._nodeHeight=e.height,this._currentNodeIdx=0}qi.prototype={clear:function(){for(var e=0;e<this._textureAtlasNodes.length;e++)this._textureAtlasNodes[e].clear();this._currentNodeIdx=0,this._zr.clear(),this._coords={}},getWidth:function(){return this._width},getHeight:function(){return this._height},getTexture:function(){return this._texture},getDevicePixelRatio:function(){return this._dpr},getZr:function(){return this._zr},_getCurrentNode:function(){return this._textureAtlasNodes[this._currentNodeIdx]},_expand:function(){if(this._currentNodeIdx++,this._textureAtlasNodes[this._currentNodeIdx])return this._textureAtlasNodes[this._currentNodeIdx];var e=4096/this._dpr,t=this._textureAtlasNodes,r=t.length,i=r*this._nodeWidth%e,n=Math.floor(r*this._nodeWidth/e)*this._nodeHeight;if(!(n>=e)){var a=(i+this._nodeWidth)*this._dpr,o=(n+this._nodeHeight)*this._dpr;try{this._zr.resize({width:a,height:o})}catch{this._canvas.width=a,this._canvas.height=o}var s=new Wi(this._zr,i,n,this._nodeWidth,this._nodeHeight,this._gap,this._dpr);return this._textureAtlasNodes.push(s),s}},add:function(e,t,r){if(this._coords[e.id])return this._coords[e.id];var i=this._getCurrentNode().add(e,t,r);if(!i){var n=this._expand();if(!n)return;i=n.add(e,t,r)}return this._coords[e.id]=i,i},getCoordsScale:function(){var e=this._dpr;return[this._nodeWidth/this._canvas.width*e,this._nodeHeight/this._canvas.height*e]},getCoords:function(e){return this._coords[e]},dispose:function(){this._zr.dispose()}};function Ht(){}Ht.prototype={constructor:Ht,setScene:function(e){this._scene=e,this._skybox&&this._skybox.attachScene(this._scene)},initLight:function(e){this._lightRoot=e,this.mainLight=new y.DirectionalLight({shadowBias:.005}),this.ambientLight=new y.AmbientLight,e.add(this.mainLight),e.add(this.ambientLight)},dispose:function(){this._lightRoot&&(this._lightRoot.remove(this.mainLight),this._lightRoot.remove(this.ambientLight))},updateLight:function(e){var t=this.mainLight,r=this.ambientLight,i=e.getModel("light"),n=i.getModel("main"),a=i.getModel("ambient");t.intensity=n.get("intensity"),r.intensity=a.get("intensity"),t.color=y.parseColor(n.get("color")).slice(0,3),r.color=y.parseColor(a.get("color")).slice(0,3);var o=n.get("alpha")||0,s=n.get("beta")||0;t.position.setArray(y.directionFromAlphaBeta(o,s)),t.lookAt(y.Vector3.ZERO),t.castShadow=n.get("shadow"),t.shadowResolution=y.getShadowResolution(n.get("shadowQuality"))},updateAmbientCubemap:function(e,t,r){var i=t.getModel("light.ambientCubemap"),n=i.get("texture");if(n){this._cubemapLightsCache=this._cubemapLightsCache||{};var a=this._cubemapLightsCache[n];if(!a){var o=this;a=this._cubemapLightsCache[n]=y.createAmbientCubemap(i.option,e,r,function(){o._isSkyboxFromAmbientCubemap&&o._skybox.setEnvironmentMap(a.specular.cubemap),r.getZr().refresh()})}this._lightRoot.add(a.diffuse),this._lightRoot.add(a.specular),this._currentCubemapLights=a}else this._currentCubemapLights&&(this._lightRoot.remove(this._currentCubemapLights.diffuse),this._lightRoot.remove(this._currentCubemapLights.specular),this._currentCubemapLights=null)},updateSkybox:function(e,t,r){var i=t.get("environment"),n=this;function a(){return n._skybox=n._skybox||new ii,n._skybox}var o=a();if(i&&i!=="none")if(i==="auto")if(this._isSkyboxFromAmbientCubemap=!0,this._currentCubemapLights){var s=this._currentCubemapLights.specular.cubemap;o.setEnvironmentMap(s),this._scene&&o.attachScene(this._scene),o.material.set("lod",3)}else this._skybox&&this._skybox.detachScene();else if(typeof i=="object"&&i.colorStops||typeof i=="string"&&ko(i)){this._isSkyboxFromAmbientCubemap=!1;var l=new y.Texture2D({anisotropic:8,flipY:!1});o.setEnvironmentMap(l);var h=l.image=document.createElement("canvas");h.width=h.height=16;var u=h.getContext("2d"),f=new Wo({shape:{x:0,y:0,width:16,height:16},style:{fill:i}});qo(u,f),o.attachScene(this._scene)}else{this._isSkyboxFromAmbientCubemap=!1;var l=y.loadTexture(i,r,{anisotropic:8,flipY:!1});o.setEnvironmentMap(l),o.attachScene(this._scene)}else this._skybox&&this._skybox.detachScene(this._scene),this._skybox=null;var d=t.coordinateSystem;if(this._skybox)if(d&&d.viewGL&&i!=="auto"&&!(i.match&&i.match(/.hdr$/))){var c=d.viewGL.isLinearSpace()?"define":"undefine";this._skybox.material[c]("fragment","SRGB_DECODE")}else this._skybox.material.undefine("fragment","SRGB_DECODE")}};var Yt=be.vec3,ys=J.extend(function(){return{segmentScale:1,useNativeLine:!0,attributes:{position:new J.Attribute("position","float",3,"POSITION"),normal:new J.Attribute("normal","float",3,"NORMAL"),color:new J.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setQuadCount:function(e){var t=this.attributes,r=this.getQuadVertexCount()*e,i=this.getQuadTriangleCount()*e;this.vertexCount!==r&&(t.position.init(r),t.normal.init(r),t.color.init(r)),this.triangleCount!==i&&(this.indices=r>65535?new Uint32Array(i*3):new Uint16Array(i*3))},getQuadVertexCount:function(){return 4},getQuadTriangleCount:function(){return 2},addQuad:function(){var e=Yt.create(),t=Yt.create(),r=Yt.create(),i=[0,3,1,3,2,1];return function(n,a){var o=this.attributes.position,s=this.attributes.normal,l=this.attributes.color;Yt.sub(e,n[1],n[0]),Yt.sub(t,n[2],n[1]),Yt.cross(r,e,t),Yt.normalize(r,r);for(var h=0;h<4;h++)o.set(this._vertexOffset+h,n[h]),l.set(this._vertexOffset+h,a),s.set(this._vertexOffset+h,r);for(var u=this._faceOffset*3,h=0;h<6;h++)this.indices[u+h]=i[h]+this._vertexOffset;this._vertexOffset+=4,this._faceOffset+=2}}()});kt(ys.prototype,pi);var Zn=Y.firstNotNull,nf={x:0,y:2,z:1};function af(e,t,r,i){var n=[0,0,0],a=i<0?r.getExtentMin():r.getExtentMax();n[nf[r.dim]]=a,e.position.setArray(n),e.rotation.identity(),t.distance=-Math.abs(a),t.normal.set(0,0,0),r.dim==="x"?(e.rotation.rotateY(i*Math.PI/2),t.normal.x=-i):r.dim==="z"?(e.rotation.rotateX(-i*Math.PI/2),t.normal.y=-i):(i>0&&e.rotation.rotateY(Math.PI),t.normal.z=-i)}function sn(e,t,r){this.rootNode=new y.Node;var i=new y.Mesh({geometry:new qt({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:1}),n=new y.Mesh({geometry:new ys,material:r,castShadow:!1,culling:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:0});this.rootNode.add(n),this.rootNode.add(i),this.faceInfo=e,this.plane=new y.Plane,this.linesMesh=i,this.quadsMesh=n}sn.prototype.update=function(e,t,r){var i=e.coordinateSystem,n=[i.getAxis(this.faceInfo[0]),i.getAxis(this.faceInfo[1])],a=this.linesMesh.geometry,o=this.quadsMesh.geometry;a.convertToDynamicArray(!0),o.convertToDynamicArray(!0),this._updateSplitLines(a,n,e,r),this._udpateSplitAreas(o,n,e,r),a.convertToTypedArray(),o.convertToTypedArray();var s=i.getAxis(this.faceInfo[2]);af(this.rootNode,this.plane,s,this.faceInfo[3])};sn.prototype._updateSplitLines=function(e,t,r,i){var n=i.getDevicePixelRatio();t.forEach(function(a,o){var s=a.model,l=t[1-o].getExtent();if(!a.scale.isBlank()){var h=s.getModel("splitLine",r.getModel("splitLine"));if(h.get("show")){var u=h.getModel("lineStyle"),f=u.get("color"),d=Zn(u.get("opacity"),1),c=Zn(u.get("width"),1);f=St(f)?f:[f];for(var v=a.getTicksCoords({tickModel:h}),p=0,m=0;m<v.length;m++){var g=v[m].coord,T=y.parseColor(f[p%f.length]);T[3]*=d;var x=[0,0,0],_=[0,0,0];x[o]=_[o]=g,x[1-o]=l[0],_[1-o]=l[1],e.addLine(x,_,T,c*n),p++}}}})};sn.prototype._udpateSplitAreas=function(e,t,r,i){t.forEach(function(n,a){var o=n.model,s=t[1-a].getExtent();if(!n.scale.isBlank()){var l=o.getModel("splitArea",r.getModel("splitArea"));if(l.get("show")){var h=l.getModel("areaStyle"),u=h.get("color"),f=Zn(h.get("opacity"),1);u=St(u)?u:[u];for(var d=n.getTicksCoords({tickModel:l,clamp:!0}),c=0,v=[0,0,0],p=[0,0,0],m=0;m<d.length;m++){var g=d[m].coord,T=[0,0,0],x=[0,0,0];if(T[a]=x[a]=g,T[1-a]=s[0],x[1-a]=s[1],m===0){v=T,p=x;continue}var _=y.parseColor(u[c%u.length]);_[3]*=f,e.addQuad([v,T,x,p],_),v=T,p=x,c++}}}})};var fo=[0,1,2,0,2,3],xs=J.extend(function(){return{attributes:{position:new J.Attribute("position","float",3,"POSITION"),texcoord:new J.Attribute("texcoord","float",2,"TEXCOORD_0"),offset:new J.Attribute("offset","float",2),color:new J.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setSpriteCount:function(e){this._spriteCount=e;var t=e*4,r=e*2;this.vertexCount!==t&&(this.attributes.position.init(t),this.attributes.offset.init(t),this.attributes.color.init(t)),this.triangleCount!==r&&(this.indices=t>65535?new Uint32Array(r*3):new Uint16Array(r*3))},setSpriteAlign:function(e,t,r,i,n){r==null&&(r="left"),i==null&&(i="top");var a,o,s,l;switch(n=n||0,r){case"left":a=n,s=t[0]+n;break;case"center":case"middle":a=-t[0]/2,s=t[0]/2;break;case"right":a=-t[0]-n,s=-n;break}switch(i){case"bottom":o=n,l=t[1]+n;break;case"middle":o=-t[1]/2,l=t[1]/2;break;case"top":o=-t[1]-n,l=-n;break}var h=e*4,u=this.attributes.offset;u.set(h,[a,l]),u.set(h+1,[s,l]),u.set(h+2,[s,o]),u.set(h+3,[a,o])},addSprite:function(e,t,r,i,n,a){var o=this._vertexOffset;this.setSprite(this._vertexOffset/4,e,t,r,i,n,a);for(var s=0;s<fo.length;s++)this.indices[this._faceOffset*3+s]=fo[s]+o;return this._faceOffset+=2,this._vertexOffset+=4,o/4},setSprite:function(e,t,r,i,n,a,o){for(var s=e*4,l=this.attributes,h=0;h<4;h++)l.position.set(s+h,t);var u=l.texcoord;u.set(s,[i[0][0],i[0][1]]),u.set(s+1,[i[1][0],i[0][1]]),u.set(s+2,[i[1][0],i[1][1]]),u.set(s+3,[i[0][0],i[1][1]]),this.setSpriteAlign(e,r,n,a,o)}});kt(xs.prototype,pi);const of=`@export ecgl.labels.vertex

attribute vec3 position: POSITION;
attribute vec2 texcoord: TEXCOORD_0;
attribute vec2 offset;
#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec2 v_Texcoord;

void main()
{
 vec4 proj = worldViewProjection * vec4(position, 1.0);

 vec2 screen = (proj.xy / abs(proj.w) + 1.0) * 0.5 * viewport.zw;

 screen += offset;

 proj.xy = (screen / viewport.zw - 0.5) * 2.0 * abs(proj.w);
 gl_Position = proj;
#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif
 v_Texcoord = texcoord;
}
@end


@export ecgl.labels.fragment

uniform vec3 color : [1.0, 1.0, 1.0];
uniform float alpha : 1.0;
uniform sampler2D textureAtlas;
uniform vec2 uvScale: [1.0, 1.0];

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif
varying float v_Miter;

varying vec2 v_Texcoord;

void main()
{
 gl_FragColor = vec4(color, alpha) * texture2D(textureAtlas, v_Texcoord * uvScale);
#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif
}

@end`;y.Shader.import(of);const ua=y.Mesh.extend(function(){var e=new xs({dynamic:!0}),t=new y.Material({shader:y.createShader("ecgl.labels"),transparent:!0,depthMask:!1});return{geometry:e,material:t,culling:!1,castShadow:!1,ignorePicking:!0}});var Jt=Y.firstNotNull,$t={x:0,y:2,z:1};function fa(e,t){var r=new y.Mesh({geometry:new qt({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,renderOrder:2}),i=new ua;i.material.depthMask=!1;var n=new y.Node;n.add(r),n.add(i),this.rootNode=n,this.dim=e,this.linesMesh=r,this.labelsMesh=i,this.axisLineCoords=null,this.labelElements=[]}var Mn={x:"y",y:"x",z:"y"};fa.prototype.update=function(e,t,r){var i=e.coordinateSystem,n=i.getAxis(this.dim),a=this.linesMesh.geometry,o=this.labelsMesh.geometry;a.convertToDynamicArray(!0),o.convertToDynamicArray(!0);var s=n.model,l=n.getExtent(),M=r.getDevicePixelRatio(),h=s.getModel("axisLine",e.getModel("axisLine")),u=s.getModel("axisTick",e.getModel("axisTick")),f=s.getModel("axisLabel",e.getModel("axisLabel")),d=h.get("lineStyle.color");if(h.get("show")){var c=h.getModel("lineStyle"),v=[0,0,0],p=[0,0,0],m=$t[n.dim];v[m]=l[0],p[m]=l[1],this.axisLineCoords=[v,p];var g=y.parseColor(d),T=Jt(c.get("width"),1),x=Jt(c.get("opacity"),1);g[3]*=x,a.addLine(v,p,g,T*M)}if(u.get("show")){var _=u.getModel("lineStyle"),S=y.parseColor(Jt(_.get("color"),d)),T=Jt(_.get("width"),1);S[3]*=Jt(_.get("opacity"),1);for(var A=n.getTicksCoords(),b=u.get("length"),w=0;w<A.length;w++){var L=A[w].coord,v=[0,0,0],p=[0,0,0],m=$t[n.dim],I=$t[Mn[n.dim]];v[m]=p[m]=L,p[I]=b,a.addLine(v,p,S,T*M)}}this.labelElements=[];var M=r.getDevicePixelRatio();if(f.get("show"))for(var A=n.getTicksCoords(),N=s.get("data"),U=f.get("margin"),D=n.getViewLabels(),w=0;w<D.length;w++){var z=D[w].tickValue,H=D[w].formattedLabel,W=D[w].rawLabel,L=n.dataToCoord(z),V=[0,0,0],m=$t[n.dim],I=$t[Mn[n.dim]];V[m]=V[m]=L,V[I]=U;var ne=f;N&&N[z]&&N[z].textStyle&&(ne=new Ji(N[z].textStyle,f,s.ecModel));var k=Jt(ne.get("color"),d),ue=new zi({style:Vi(ne,{text:H,fill:typeof k=="function"?k(n.type==="category"?W:n.type==="value"?z+"":z,w):k,verticalAlign:"top",align:"left"})}),ae=t.add(ue),de=ue.getBoundingRect();o.addSprite(V,[de.width*M,de.height*M],ae),this.labelElements.push(ue)}if(s.get("name")){var ve=s.getModel("nameTextStyle"),V=[0,0,0],m=$t[n.dim],I=$t[Mn[n.dim]],ee=Jt(ve.get("color"),d),Me=ve.get("borderColor"),T=ve.get("borderWidth");V[m]=V[m]=(l[0]+l[1])/2,V[I]=s.get("nameGap");var ue=new zi({style:Vi(ve,{text:s.get("name"),fill:ee,stroke:Me,lineWidth:T})}),ae=t.add(ue),de=ue.getBoundingRect();o.addSprite(V,[de.width*M,de.height*M],ae),ue.__idx=this.labelElements.length,this.nameLabelElement=ue}this.labelsMesh.material.set("textureAtlas",t.getTexture()),this.labelsMesh.material.set("uvScale",t.getCoordsScale()),a.convertToTypedArray(),o.convertToTypedArray()};fa.prototype.setSpriteAlign=function(e,t,r){for(var i=r.getDevicePixelRatio(),n=this.labelsMesh.geometry,a=0;a<this.labelElements.length;a++){var o=this.labelElements[a],s=o.getBoundingRect();n.setSpriteAlign(a,[s.width*i,s.height*i],e,t)}var l=this.nameLabelElement;if(l){var s=l.getBoundingRect();n.setSpriteAlign(l.__idx,[s.width*i,s.height*i],e,t),n.dirty()}this.textAlign=e,this.textVerticalAlign=t};const ln=`@export ecgl.lines3D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

void main()
{
 gl_Position = worldViewProjection * vec4(position, 1.0);
 v_Color = a_Color;
}

@end

@export ecgl.lines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif
}
@end



@export ecgl.lines3D.clipNear

vec4 clipNear(vec4 p1, vec4 p2) {
 float n = (p1.w - near) / (p1.w - p2.w);
 return vec4(mix(p1.xy, p2.xy, n), -near, near);
}

@end

@export ecgl.lines3D.expandLine
#ifdef VERTEX_ANIMATION
 vec4 prevProj = worldViewProjection * vec4(mix(prevPositionPrev, positionPrev, percent), 1.0);
 vec4 currProj = worldViewProjection * vec4(mix(prevPosition, position, percent), 1.0);
 vec4 nextProj = worldViewProjection * vec4(mix(prevPositionNext, positionNext, percent), 1.0);
#else
 vec4 prevProj = worldViewProjection * vec4(positionPrev, 1.0);
 vec4 currProj = worldViewProjection * vec4(position, 1.0);
 vec4 nextProj = worldViewProjection * vec4(positionNext, 1.0);
#endif

 if (currProj.w < 0.0) {
 if (nextProj.w > 0.0) {
 currProj = clipNear(currProj, nextProj);
 }
 else if (prevProj.w > 0.0) {
 currProj = clipNear(currProj, prevProj);
 }
 }

 vec2 prevScreen = (prevProj.xy / abs(prevProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 currScreen = (currProj.xy / abs(currProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 nextScreen = (nextProj.xy / abs(nextProj.w) + 1.0) * 0.5 * viewport.zw;

 vec2 dir;
 float len = offset;
 if (position == positionPrev) {
 dir = normalize(nextScreen - currScreen);
 }
 else if (position == positionNext) {
 dir = normalize(currScreen - prevScreen);
 }
 else {
 vec2 dirA = normalize(currScreen - prevScreen);
 vec2 dirB = normalize(nextScreen - currScreen);

 vec2 tanget = normalize(dirA + dirB);

 float miter = 1.0 / max(dot(tanget, dirA), 0.5);
 len *= miter;
 dir = tanget;
 }

 dir = vec2(-dir.y, dir.x) * len;
 currScreen += dir;

 currProj.xy = (currScreen / viewport.zw - 0.5) * 2.0 * abs(currProj.w);
@end


@export ecgl.meshLines3D.vertex

attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute vec4 a_Color : COLOR;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevPositionPrev;
attribute vec3 prevPositionNext;
uniform float percent : 1.0;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

varying vec4 v_Color;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain
}
@end


@export ecgl.meshLines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain
}

@end`;var co=Y.firstNotNull;y.Shader.import(ln);var er={x:0,y:2,z:1};const sf=ci.extend({type:"grid3D",__ecgl__:!0,init:function(e,t){var r=[["y","z","x",-1,"left"],["y","z","x",1,"right"],["x","y","z",-1,"bottom"],["x","y","z",1,"top"],["x","z","y",-1,"far"],["x","z","y",1,"near"]],i=["x","y","z"],n=new y.Material({shader:y.createShader("ecgl.color"),depthMask:!1,transparent:!0}),a=new y.Material({shader:y.createShader("ecgl.meshLines3D"),depthMask:!1,transparent:!0});n.define("fragment","DOUBLE_SIDED"),n.define("both","VERTEX_COLOR"),this.groupGL=new y.Node,this._control=new on({zr:t.getZr()}),this._control.init(),this._faces=r.map(function(s){var l=new sn(s,a,n);return this.groupGL.add(l.rootNode),l},this),this._axes=i.map(function(s){var l=new fa(s,a);return this.groupGL.add(l.rootNode),l},this);var o=t.getDevicePixelRatio();this._axisLabelSurface=new qi({width:256,height:256,devicePixelRatio:o}),this._axisLabelSurface.onupdate=function(){t.getZr().refresh()},this._axisPointerLineMesh=new y.Mesh({geometry:new qt({useNativeLine:!1}),material:a,castShadow:!1,ignorePicking:!0,renderOrder:3}),this.groupGL.add(this._axisPointerLineMesh),this._axisPointerLabelsSurface=new qi({width:128,height:128,devicePixelRatio:o}),this._axisPointerLabelsMesh=new ua({ignorePicking:!0,renderOrder:4,castShadow:!1}),this._axisPointerLabelsMesh.material.set("textureAtlas",this._axisPointerLabelsSurface.getTexture()),this.groupGL.add(this._axisPointerLabelsMesh),this._lightRoot=new y.Node,this._sceneHelper=new Ht,this._sceneHelper.initLight(this._lightRoot)},render:function(e,t,r){this._model=e,this._api=r;var i=e.coordinateSystem;i.viewGL.add(this._lightRoot),e.get("show")?i.viewGL.add(this.groupGL):i.viewGL.remove(this.groupGL);var n=this._control;n.setViewGL(i.viewGL);var a=e.getModel("viewControl");n.setFromViewControlModel(a,0),this._axisLabelSurface.clear(),n.off("update"),e.get("show")&&(this._faces.forEach(function(o){o.update(e,t,r)},this),this._axes.forEach(function(o){o.update(e,this._axisLabelSurface,r)},this)),n.on("update",this._onCameraChange.bind(this,e,r),this),this._sceneHelper.setScene(i.viewGL.scene),this._sceneHelper.updateLight(e),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._initMouseHandler(e)},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r)},showAxisPointer:function(e,t,r,i){this._doShowAxisPointer(),this._updateAxisPointer(i.value)},hideAxisPointer:function(e,t,r,i){this._doHideAxisPointer()},_initMouseHandler:function(e){var t=e.coordinateSystem,r=t.viewGL;e.get("show")&&e.get("axisPointer.show")?r.on("mousemove",this._updateAxisPointerOnMousePosition,this):r.off("mousemove",this._updateAxisPointerOnMousePosition)},_updateAxisPointerOnMousePosition:function(e){if(!e.target){for(var t=this._model,r=t.coordinateSystem,i=r.viewGL,n=i.castRay(e.offsetX,e.offsetY,new y.Ray),a,o=0;o<this._faces.length;o++){var s=this._faces[o];if(!s.rootNode.invisible){s.plane.normal.dot(i.camera.worldTransform.z)<0&&s.plane.normal.negate();var l=n.intersectPlane(s.plane);if(l){var h=r.getAxis(s.faceInfo[0]),u=r.getAxis(s.faceInfo[1]),f=er[s.faceInfo[0]],d=er[s.faceInfo[1]];h.contain(l.array[f])&&u.contain(l.array[d])&&(a=l)}}}if(a){var c=r.pointToData(a.array,[],!0);this._updateAxisPointer(c),this._doShowAxisPointer()}else this._doHideAxisPointer()}},_onCameraChange:function(e,t){e.get("show")&&(this._updateFaceVisibility(),this._updateAxisLinePosition());var r=this._control;t.dispatchAction({type:"grid3DChangeCamera",alpha:r.getAlpha(),beta:r.getBeta(),distance:r.getDistance(),center:r.getCenter(),from:this.uid,grid3DId:e.id})},_updateFaceVisibility:function(){var e=this._control.getCamera(),t=new y.Vector3;e.update();for(var r=0;r<this._faces.length/2;r++){for(var i=[],n=0;n<2;n++){var a=this._faces[r*2+n];a.rootNode.getWorldPosition(t),t.transformMat4(e.viewMatrix),i[n]=t.z}var o=i[0]>i[1]?0:1,s=this._faces[r*2+o],l=this._faces[r*2+1-o];s.rootNode.invisible=!0,l.rootNode.invisible=!1}},_updateAxisLinePosition:function(){var e=this._model.coordinateSystem,t=e.getAxis("x"),r=e.getAxis("y"),i=e.getAxis("z"),n=i.getExtentMax(),a=i.getExtentMin(),o=t.getExtentMin(),s=t.getExtentMax(),l=r.getExtentMax(),h=r.getExtentMin(),u=this._axes[0].rootNode,f=this._axes[1].rootNode,d=this._axes[2].rootNode,c=this._faces,v=c[4].rootNode.invisible?h:l,p=c[2].rootNode.invisible?n:a,m=c[0].rootNode.invisible?o:s,g=c[2].rootNode.invisible?n:a,T=c[0].rootNode.invisible?s:o,x=c[4].rootNode.invisible?h:l;u.rotation.identity(),f.rotation.identity(),d.rotation.identity(),c[4].rootNode.invisible&&(this._axes[0].flipped=!0,u.rotation.rotateX(Math.PI)),c[0].rootNode.invisible&&(this._axes[1].flipped=!0,f.rotation.rotateZ(Math.PI)),c[4].rootNode.invisible&&(this._axes[2].flipped=!0,d.rotation.rotateY(Math.PI)),u.position.set(0,p,v),f.position.set(m,g,0),d.position.set(T,0,x),u.update(),f.update(),d.update(),this._updateAxisLabelAlign()},_updateAxisLabelAlign:function(){var e=this._control.getCamera(),t=[new y.Vector4,new y.Vector4],r=new y.Vector4;this.groupGL.getWorldPosition(r),r.w=1,r.transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),r.x/=r.w,r.y/=r.w,this._axes.forEach(function(i){var n=i.axisLineCoords;i.labelsMesh.geometry;for(var a=0;a<t.length;a++)t[a].setArray(n[a]),t[a].w=1,t[a].transformMat4(i.rootNode.worldTransform).transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),t[a].x/=t[a].w,t[a].y/=t[a].w;var o=t[1].x-t[0].x,s=t[1].y-t[0].y,l=(t[1].x+t[0].x)/2,h=(t[1].y+t[0].y)/2,u,f;Math.abs(s/o)<.5?(u="center",f=h>r.y?"bottom":"top"):(f="middle",u=l>r.x?"left":"right"),i.setSpriteAlign(u,f,this._api)},this)},_doShowAxisPointer:function(){this._axisPointerLineMesh.invisible&&(this._axisPointerLineMesh.invisible=!1,this._axisPointerLabelsMesh.invisible=!1,this._api.getZr().refresh())},_doHideAxisPointer:function(){this._axisPointerLineMesh.invisible||(this._axisPointerLineMesh.invisible=!0,this._axisPointerLabelsMesh.invisible=!0,this._api.getZr().refresh())},_updateAxisPointer:function(e){var t=this._model.coordinateSystem,r=t.dataToPoint(e),i=this._axisPointerLineMesh,n=i.geometry,a=this._model.getModel("axisPointer"),o=this._api.getDevicePixelRatio();n.convertToDynamicArray(!0);function s(w){return Y.firstNotNull(w.model.get("axisPointer.show"),a.get("show"))}function l(w){var L=w.model.getModel("axisPointer",a),I=L.getModel("lineStyle"),M=y.parseColor(I.get("color")),N=co(I.get("width"),1),U=co(I.get("opacity"),1);return M[3]*=U,{color:M,lineWidth:N}}for(var h=0;h<this._faces.length;h++){var u=this._faces[h];if(!u.rootNode.invisible){for(var f=u.faceInfo,d=f[3]<0?t.getAxis(f[2]).getExtentMin():t.getAxis(f[2]).getExtentMax(),c=er[f[2]],v=0;v<2;v++){var p=f[v],m=f[1-v],g=t.getAxis(p),T=t.getAxis(m);if(s(g)){var x=[0,0,0],_=[0,0,0],S=er[p],A=er[m];x[S]=_[S]=r[S],x[c]=_[c]=d,x[A]=T.getExtentMin(),_[A]=T.getExtentMax();var b=l(g);n.addLine(x,_,b.color,b.lineWidth*o)}}if(s(t.getAxis(f[2]))){var x=r.slice(),_=r.slice();_[c]=d;var b=l(t.getAxis(f[2]));n.addLine(x,_,b.color,b.lineWidth*o)}}}n.convertToTypedArray(),this._updateAxisPointerLabelsMesh(e),this._api.getZr().refresh()},_updateAxisPointerLabelsMesh:function(e){var t=this._model,r=this._axisPointerLabelsMesh,i=this._axisPointerLabelsSurface,n=t.coordinateSystem,a=t.getModel("axisPointer");r.geometry.convertToDynamicArray(!0),i.clear();var o={x:"y",y:"x",z:"y"};this._axes.forEach(function(s,l){var h=n.getAxis(s.dim),u=h.model,f=u.getModel("axisPointer",a),d=f.getModel("label"),c=f.get("lineStyle.color");if(!(!d.get("show")||!f.get("show"))){var v=e[l],p=d.get("formatter"),m=h.scale.getLabel({value:v});if(p!=null)m=p(m,e);else if(h.scale.type==="interval"||h.scale.type==="log"){var g=Xo(h.scale.getTicks()[0]);m=v.toFixed(g+2)}var T=d.get("color"),x=new zi({style:Vi(d,{text:m,fill:T||c,align:"left",verticalAlign:"top"})}),_=i.add(x),S=x.getBoundingRect(),A=this._api.getDevicePixelRatio(),b=s.rootNode.position.toArray(),w=er[o[s.dim]];b[w]+=(s.flipped?-1:1)*d.get("margin"),b[er[s.dim]]=h.dataToCoord(e[l]),r.geometry.addSprite(b,[S.width*A,S.height*A],_,s.textAlign,s.textVerticalAlign)}},this),i.getZr().refreshImmediately(),r.material.set("uvScale",i.getCoordsScale()),r.geometry.convertToTypedArray()},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._axisLabelSurface.dispose(),this._axisPointerLabelsSurface.dispose()}});function ni(e){Zo.call(this,e),this.type="cartesian3D",this.dimensions=["x","y","z"],this.size=[0,0,0]}ni.prototype={constructor:ni,model:null,containPoint:function(e){return this.getAxis("x").contain(e[0])&&this.getAxis("y").contain(e[2])&&this.getAxis("z").contain(e[1])},containData:function(e){return this.getAxis("x").containData(e[0])&&this.getAxis("y").containData(e[1])&&this.getAxis("z").containData(e[2])},dataToPoint:function(e,t,r){return t=t||[],t[0]=this.getAxis("x").dataToCoord(e[0],r),t[2]=this.getAxis("y").dataToCoord(e[1],r),t[1]=this.getAxis("z").dataToCoord(e[2],r),t},pointToData:function(e,t,r){return t=t||[],t[0]=this.getAxis("x").coordToData(e[0],r),t[1]=this.getAxis("y").coordToData(e[2],r),t[2]=this.getAxis("z").coordToData(e[1],r),t}};Ko(ni,Zo);function Xi(e,t,r){$i.call(this,e,t,r)}Xi.prototype={constructor:Xi,getExtentMin:function(){var e=this._extent;return Math.min(e[0],e[1])},getExtentMax:function(){var e=this._extent;return Math.max(e[0],e[1])},calculateCategoryInterval:function(){return Math.floor(this.scale.count()/8)}};Ko(Xi,$i);var Kn=function(){this._pool={},this._allocatedTextures=[]};Kn.prototype={constructor:Kn,get:function(e){var t=vo(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];if(!r.length){var i=new Q(e);return this._allocatedTextures.push(i),i}return r.pop()},put:function(e){var t=vo(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];r.push(e)},clear:function(e){for(var t=0;t<this._allocatedTextures.length;t++)this._allocatedTextures[t].dispose(e);this._pool={},this._allocatedTextures=[]}};var Ts={width:512,height:512,type:R.UNSIGNED_BYTE,format:R.RGBA,wrapS:R.CLAMP_TO_EDGE,wrapT:R.CLAMP_TO_EDGE,minFilter:R.LINEAR_MIPMAP_LINEAR,magFilter:R.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,unpackAlignment:4,premultiplyAlpha:!1},Rn=Object.keys(Ts);function vo(e){Ae.defaultsWithPropList(e,Ts,Rn),lf(e);for(var t="",r=0;r<Rn.length;r++){var i=Rn[r],n=e[i].toString();t+=n}return t}function lf(e){var t=hf(e.width,e.height);e.format===R.DEPTH_COMPONENT&&(e.useMipmap=!1),(!t||!e.useMipmap)&&(e.minFilter==R.NEAREST_MIPMAP_NEAREST||e.minFilter==R.NEAREST_MIPMAP_LINEAR?e.minFilter=R.NEAREST:(e.minFilter==R.LINEAR_MIPMAP_LINEAR||e.minFilter==R.LINEAR_MIPMAP_NEAREST)&&(e.minFilter=R.LINEAR)),t||(e.wrapS=R.CLAMP_TO_EDGE,e.wrapT=R.CLAMP_TO_EDGE)}function hf(e,t){return(e&e-1)===0&&(t&t-1)===0}const Es=Kn,uf=`@export clay.sm.depth.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
uniform vec2 uvRepeat = vec2(1.0, 1.0);
uniform vec2 uvOffset = vec2(0.0, 0.0);
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
void main(){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 v_ViewPosition = worldViewProjection * P;
 gl_Position = v_ViewPosition;
 v_Texcoord = texcoord * uvRepeat + uvOffset;
}
@end
@export clay.sm.depth.fragment
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
uniform float bias : 0.001;
uniform float slopeScale : 1.0;
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
@import clay.util.encode_float
void main(){
 float depth = v_ViewPosition.z / v_ViewPosition.w;
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
#ifdef USE_VSM
 depth = depth * 0.5 + 0.5;
 float moment1 = depth;
 float moment2 = depth * depth;
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 moment2 += 0.25*(dx*dx+dy*dy);
 #endif
 gl_FragColor = vec4(moment1, moment2, 0.0, 1.0);
#else
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 depth += sqrt(dx*dx + dy*dy) * slopeScale + bias;
 #else
 depth += bias;
 #endif
 gl_FragColor = encodeFloat(depth * 0.5 + 0.5);
#endif
}
@end
@export clay.sm.debug_depth
uniform sampler2D depthMap;
varying vec2 v_Texcoord;
@import clay.util.decode_float
void main() {
 vec4 tex = texture2D(depthMap, v_Texcoord);
#ifdef USE_VSM
 gl_FragColor = vec4(tex.rgb, 1.0);
#else
 float depth = decodeFloat(tex);
 gl_FragColor = vec4(depth, depth, depth, 1.0);
#endif
}
@end
@export clay.sm.distance.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 world : WORLD;
attribute vec3 position : POSITION;
@import clay.chunk.skinning_header
varying vec3 v_WorldPosition;
void main (){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = worldViewProjection * P;
 v_WorldPosition = (world * P).xyz;
}
@end
@export clay.sm.distance.fragment
uniform vec3 lightPosition;
uniform float range : 100;
varying vec3 v_WorldPosition;
@import clay.util.encode_float
void main(){
 float dist = distance(lightPosition, v_WorldPosition);
#ifdef USE_VSM
 gl_FragColor = vec4(dist, dist * dist, 0.0, 0.0);
#else
 dist = dist / range;
 gl_FragColor = encodeFloat(dist);
#endif
}
@end
@export clay.plugin.shadow_map_common
@import clay.util.decode_float
float tapShadowMap(sampler2D map, vec2 uv, float z){
 vec4 tex = texture2D(map, uv);
 return step(z, decodeFloat(tex) * 2.0 - 1.0);
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize, vec2 scale) {
 float shadowContrib = tapShadowMap(map, uv, z);
 vec2 offset = vec2(1.0 / textureSize) * scale;
#ifdef PCF_KERNEL_SIZE
 for (int _idx_ = 0; _idx_ < PCF_KERNEL_SIZE; _idx_++) {{
 shadowContrib += tapShadowMap(map, uv + offset * pcfKernel[_idx_], z);
 }}
 return shadowContrib / float(PCF_KERNEL_SIZE + 1);
#else
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, -offset.y), z);
 return shadowContrib / 9.0;
#endif
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize) {
 return pcf(map, uv, z, textureSize, vec2(1.0));
}
float chebyshevUpperBound(vec2 moments, float z){
 float p = 0.0;
 z = z * 0.5 + 0.5;
 if (z <= moments.x) {
 p = 1.0;
 }
 float variance = moments.y - moments.x * moments.x;
 variance = max(variance, 0.0000001);
 float mD = moments.x - z;
 float pMax = variance / (variance + mD * mD);
 pMax = clamp((pMax-0.4)/(1.0-0.4), 0.0, 1.0);
 return max(p, pMax);
}
float computeShadowContrib(
 sampler2D map, mat4 lightVPM, vec3 position, float textureSize, vec2 scale, vec2 offset
) {
 vec4 posInLightSpace = lightVPM * vec4(position, 1.0);
 posInLightSpace.xyz /= posInLightSpace.w;
 float z = posInLightSpace.z;
 if(all(greaterThan(posInLightSpace.xyz, vec3(-0.99, -0.99, -1.0))) &&
 all(lessThan(posInLightSpace.xyz, vec3(0.99, 0.99, 1.0)))){
 vec2 uv = (posInLightSpace.xy+1.0) / 2.0;
 #ifdef USE_VSM
 vec2 moments = texture2D(map, uv * scale + offset).xy;
 return chebyshevUpperBound(moments, z);
 #else
 return pcf(map, uv * scale + offset, z, textureSize, scale);
 #endif
 }
 return 1.0;
}
float computeShadowContrib(sampler2D map, mat4 lightVPM, vec3 position, float textureSize) {
 return computeShadowContrib(map, lightVPM, position, textureSize, vec2(1.0), vec2(0.0));
}
float computeShadowContribOmni(samplerCube map, vec3 direction, float range)
{
 float dist = length(direction);
 vec4 shadowTex = textureCube(map, direction);
#ifdef USE_VSM
 vec2 moments = shadowTex.xy;
 float variance = moments.y - moments.x * moments.x;
 float mD = moments.x - dist;
 float p = variance / (variance + mD * mD);
 if(moments.x + 0.001 < dist){
 return clamp(p, 0.0, 1.0);
 }else{
 return 1.0;
 }
#else
 return step(dist, (decodeFloat(shadowTex) + 0.0002) * range);
#endif
}
@end
@export clay.plugin.compute_shadow_map
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT) || defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT) || defined(POINT_LIGHT_SHADOWMAP_COUNT)
#ifdef SPOT_LIGHT_SHADOWMAP_COUNT
uniform sampler2D spotLightShadowMaps[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 spotLightMatrices[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float spotLightShadowMapSizes[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#ifdef DIRECTIONAL_LIGHT_SHADOWMAP_COUNT
#if defined(SHADOW_CASCADE)
uniform sampler2D directionalLightShadowMaps[1]:unconfigurable;
uniform mat4 directionalLightMatrices[SHADOW_CASCADE]:unconfigurable;
uniform float directionalLightShadowMapSizes[1]:unconfigurable;
uniform float shadowCascadeClipsNear[SHADOW_CASCADE]:unconfigurable;
uniform float shadowCascadeClipsFar[SHADOW_CASCADE]:unconfigurable;
#else
uniform sampler2D directionalLightShadowMaps[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 directionalLightMatrices[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float directionalLightShadowMapSizes[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#endif
#ifdef POINT_LIGHT_SHADOWMAP_COUNT
uniform samplerCube pointLightShadowMaps[POINT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
uniform bool shadowEnabled : true;
#ifdef PCF_KERNEL_SIZE
uniform vec2 pcfKernel[PCF_KERNEL_SIZE];
#endif
@import clay.plugin.shadow_map_common
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfSpotLights(vec3 position, inout float shadowContribs[SPOT_LIGHT_COUNT] ) {
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < SPOT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 spotLightShadowMaps[_idx_], spotLightMatrices[_idx_], position,
 spotLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = SPOT_LIGHT_SHADOWMAP_COUNT; _idx_ < SPOT_LIGHT_COUNT; _idx_++){{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
#ifdef SHADOW_CASCADE
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float depth = (2.0 * gl_FragCoord.z - gl_DepthRange.near - gl_DepthRange.far)
 / (gl_DepthRange.far - gl_DepthRange.near);
 float shadowContrib;
 shadowContribs[0] = 1.0;
 for (int _idx_ = 0; _idx_ < SHADOW_CASCADE; _idx_++) {{
 if (
 depth >= shadowCascadeClipsNear[_idx_] &&
 depth <= shadowCascadeClipsFar[_idx_]
 ) {
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[0], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[0],
 vec2(1.0 / float(SHADOW_CASCADE), 1.0),
 vec2(float(_idx_) / float(SHADOW_CASCADE), 0.0)
 );
 shadowContribs[0] = shadowContrib;
 }
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#else
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[_idx_], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
#if defined(POINT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfPointLights(vec3 position, inout float shadowContribs[POINT_LIGHT_COUNT] ){
 vec3 lightPosition;
 vec3 direction;
 for(int _idx_ = 0; _idx_ < POINT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 lightPosition = pointLightPosition[_idx_];
 direction = position - lightPosition;
 shadowContribs[_idx_] = computeShadowContribOmni(pointLightShadowMaps[_idx_], direction, pointLightRange[_idx_]);
 }}
 for(int _idx_ = POINT_LIGHT_SHADOWMAP_COUNT; _idx_ < POINT_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
@end`;var Ot=["px","nx","py","ny","pz","nz"];B.import(uf);function Pn(e,t,r){if(r==="alphaMap")return e.material.get("diffuseMap");if(r==="alphaCutoff"){if(e.material.isDefined("fragment","ALPHA_TEST")&&e.material.get("diffuseMap")){var i=e.material.get("alphaCutoff");return i||0}return 0}else return r==="uvRepeat"?e.material.get("uvRepeat"):r==="uvOffset"?e.material.get("uvOffset"):t.get(r)}function po(e,t){var r=e.material,i=t.material;return r.get("diffuseMap")!==i.get("diffuseMap")||(r.get("alphaCutoff")||0)!==(i.get("alphaCutoff")||0)}var xt=He.extend(function(){return{softShadow:xt.PCF,shadowBlur:1,lightFrustumBias:"auto",kernelPCF:new Float32Array([1,0,1,1,-1,1,0,1,-1,0,-1,-1,1,-1,0,-1]),precision:"highp",_lastRenderNotCastShadow:!1,_frameBuffer:new we,_textures:{},_shadowMapNumber:{POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},_depthMaterials:{},_distanceMaterials:{},_receivers:[],_lightsCastShadow:[],_lightCameras:{},_lightMaterials:{},_texturePool:new Es}},function(){this._gaussianPassH=new Le({fragment:B.source("clay.compositor.gaussian_blur")}),this._gaussianPassV=new Le({fragment:B.source("clay.compositor.gaussian_blur")}),this._gaussianPassH.setUniform("blurSize",this.shadowBlur),this._gaussianPassH.setUniform("blurDir",0),this._gaussianPassV.setUniform("blurSize",this.shadowBlur),this._gaussianPassV.setUniform("blurDir",1),this._outputDepthPass=new Le({fragment:B.source("clay.sm.debug_depth")})},{render:function(e,t,r,i){r||(r=t.getMainCamera()),this.trigger("beforerender",this,e,t,r),this._renderShadowPass(e,t,r,i),this.trigger("afterrender",this,e,t,r)},renderDebug:function(e,t){e.saveClear();var r=e.viewport,i=0,n=0,a=t||r.width/4,o=a;this.softShadow===xt.VSM?this._outputDepthPass.material.define("fragment","USE_VSM"):this._outputDepthPass.material.undefine("fragment","USE_VSM");for(var s in this._textures){var l=this._textures[s];e.setViewport(i,n,a*l.width/l.height,o),this._outputDepthPass.setUniform("depthMap",l),this._outputDepthPass.render(e),i+=a*l.width/l.height}e.setViewport(r),e.restoreClear()},_updateReceivers:function(e,t){if(t.receiveShadow?(this._receivers.push(t),t.material.set("shadowEnabled",1),t.material.set("pcfKernel",this.kernelPCF)):t.material.set("shadowEnabled",0),this.softShadow===xt.VSM)t.material.define("fragment","USE_VSM"),t.material.undefine("fragment","PCF_KERNEL_SIZE");else{t.material.undefine("fragment","USE_VSM");var r=this.kernelPCF;r&&r.length?t.material.define("fragment","PCF_KERNEL_SIZE",r.length/2):t.material.undefine("fragment","PCF_KERNEL_SIZE")}},_update:function(e,t){var r=this;t.traverse(function(a){a.isRenderable()&&r._updateReceivers(e,a)});for(var i=0;i<t.lights.length;i++){var n=t.lights[i];n.castShadow&&!n.invisible&&this._lightsCastShadow.push(n)}},_renderShadowPass:function(e,t,r,i){for(var n in this._shadowMapNumber)this._shadowMapNumber[n]=0;this._lightsCastShadow.length=0,this._receivers.length=0;var a=e.gl;if(i||t.update(),r&&r.update(),t.updateLights(),this._update(e,t),!this._lightsCastShadow.length&&this._lastRenderNotCastShadow)return;this._lastRenderNotCastShadow=this._lightsCastShadow===0,a.enable(a.DEPTH_TEST),a.depthMask(!0),a.disable(a.BLEND),a.clearColor(1,1,1,1);for(var o=[],s=[],l=[],h=[],u=[],f=[],d,c=0;c<this._lightsCastShadow.length;c++){var v=this._lightsCastShadow[c];if(v.type==="DIRECTIONAL_LIGHT"){if(d){console.warn("Only one direectional light supported with shadow cascade");continue}if(v.shadowCascade>4){console.warn("Support at most 4 cascade");continue}v.shadowCascade>1&&(d=v),this.renderDirectionalLightShadow(e,t,r,v,u,h,l)}else v.type==="SPOT_LIGHT"?this.renderSpotLightShadow(e,t,v,s,o):v.type==="POINT_LIGHT"&&this.renderPointLightShadow(e,t,v,f);this._shadowMapNumber[v.type]++}for(var p in this._shadowMapNumber)for(var m=this._shadowMapNumber[p],g=p+"_SHADOWMAP_COUNT",c=0;c<this._receivers.length;c++){var T=this._receivers[c],x=T.material;x.fragmentDefines[g]!==m&&(m>0?x.define("fragment",g,m):x.isDefined("fragment",g)&&x.undefine("fragment",g))}for(var c=0;c<this._receivers.length;c++){var T=this._receivers[c],x=T.material;d?x.define("fragment","SHADOW_CASCADE",d.shadowCascade):x.undefine("fragment","SHADOW_CASCADE")}var _=t.shadowUniforms;function S(I){return I.height}if(l.length>0){var A=l.map(S);if(_.directionalLightShadowMaps={value:l,type:"tv"},_.directionalLightMatrices={value:h,type:"m4v"},_.directionalLightShadowMapSizes={value:A,type:"1fv"},d){var b=u.slice(),w=u.slice();b.pop(),w.shift(),b.reverse(),w.reverse(),h.reverse(),_.shadowCascadeClipsNear={value:b,type:"1fv"},_.shadowCascadeClipsFar={value:w,type:"1fv"}}}if(o.length>0){var L=o.map(S),_=t.shadowUniforms;_.spotLightShadowMaps={value:o,type:"tv"},_.spotLightMatrices={value:s,type:"m4v"},_.spotLightShadowMapSizes={value:L,type:"1fv"}}f.length>0&&(_.pointLightShadowMaps={value:f,type:"tv"})},renderDirectionalLightShadow:function(){var e=new sa,t=new F,r=new Qe,i=new F,n=new F,a=new F,o=new F;return function(s,l,h,u,f,d,c){var v=this._getDepthMaterial(u),p={getMaterial:function(de){return de.shadowDepthMaterial||v},isMaterialChanged:po,getUniform:Pn,ifRender:function(de){return de.castShadow},sortCompare:ei.opaqueSortCompare};if(!l.viewBoundingBoxLastFrame.isFinite()){var m=l.getBoundingBox();l.viewBoundingBoxLastFrame.copy(m).applyTransform(h.viewMatrix)}var g=Math.min(-l.viewBoundingBoxLastFrame.min.z,h.far),T=Math.max(-l.viewBoundingBoxLastFrame.max.z,h.near),x=this._getDirectionalLightCamera(u,l,h),_=a.array;o.copy(x.projectionMatrix),P.invert(n.array,x.worldTransform.array),P.multiply(n.array,n.array,h.worldTransform.array),P.multiply(_,o.array,n.array);for(var S=[],A=h instanceof Be,b=(h.near+h.far)/(h.near-h.far),w=2*h.near*h.far/(h.near-h.far),L=0;L<=u.shadowCascade;L++){var I=T*Math.pow(g/T,L/u.shadowCascade),M=T+(g-T)*L/u.shadowCascade,N=I*u.cascadeSplitLogFactor+M*(1-u.cascadeSplitLogFactor);S.push(N),f.push(-(-N*b+w)/-N)}var U=this._getTexture(u,u.shadowCascade);c.push(U);var D=s.viewport,z=s.gl;this._frameBuffer.attach(U),this._frameBuffer.bind(s),z.clear(z.COLOR_BUFFER_BIT|z.DEPTH_BUFFER_BIT);for(var L=0;L<u.shadowCascade;L++){var H=S[L],W=S[L+1];A?P.perspective(t.array,h.fov/180*Math.PI,h.aspect,H,W):P.ortho(t.array,h.left,h.right,h.bottom,h.top,H,W),e.setFromProjection(t),e.getTransformedBoundingBox(r,n),r.applyProjection(o);var V=r.min.array,ne=r.max.array;V[0]=Math.max(V[0],-1),V[1]=Math.max(V[1],-1),ne[0]=Math.min(ne[0],1),ne[1]=Math.min(ne[1],1),i.ortho(V[0],ne[0],V[1],ne[1],1,-1),x.projectionMatrix.multiplyLeft(i);var k=u.shadowResolution||512;s.setViewport((u.shadowCascade-L-1)*k,0,k,k,1);var ue=l.updateRenderList(x);s.renderPass(ue.opaque,x,p),this.softShadow===xt.VSM&&this._gaussianFilter(s,U,U.width);var ae=new F;ae.copy(x.viewMatrix).multiplyLeft(x.projectionMatrix),d.push(ae.array),x.projectionMatrix.copy(o)}this._frameBuffer.unbind(s),s.setViewport(D)}}(),renderSpotLightShadow:function(e,t,r,i,n){var a=this._getTexture(r),o=this._getSpotLightCamera(r),s=e.gl;this._frameBuffer.attach(a),this._frameBuffer.bind(e),s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT);var l=this._getDepthMaterial(r),h={getMaterial:function(d){return d.shadowDepthMaterial||l},isMaterialChanged:po,getUniform:Pn,ifRender:function(d){return d.castShadow},sortCompare:ei.opaqueSortCompare},u=t.updateRenderList(o);e.renderPass(u.opaque,o,h),this._frameBuffer.unbind(e),this.softShadow===xt.VSM&&this._gaussianFilter(e,a,a.width);var f=new F;f.copy(o.worldTransform).invert().multiplyLeft(o.projectionMatrix),n.push(a),i.push(f.array)},renderPointLightShadow:function(e,t,r,i){var n=this._getTexture(r),a=e.gl;i.push(n);var o=this._getDepthMaterial(r),s={getMaterial:function(T){return T.shadowDepthMaterial||o},getUniform:Pn,sortCompare:ei.opaqueSortCompare},l={px:[],py:[],pz:[],nx:[],ny:[],nz:[]},h=new Qe,u=r.getWorldPosition().array,f=new Qe,d=r.range;f.min.setArray(u),f.max.setArray(u);var c=new C(d,d,d);f.max.add(c),f.min.sub(c);var v={px:!1,py:!1,pz:!1,nx:!1,ny:!1,nz:!1};t.traverse(function(T){if(T.isRenderable()&&T.castShadow){var x=T.geometry;if(!x.boundingBox){for(var _=0;_<Ot.length;_++)l[Ot[_]].push(T);return}if(h.transformFrom(x.boundingBox,T.worldTransform),!h.intersectBoundingBox(f))return;h.updateVertices();for(var _=0;_<Ot.length;_++)v[Ot[_]]=!1;for(var _=0;_<8;_++){var S=h.vertices[_],A=S[0]-u[0],b=S[1]-u[1],w=S[2]-u[2],L=Math.abs(A),I=Math.abs(b),M=Math.abs(w);L>I?L>M?v[A>0?"px":"nx"]=!0:v[w>0?"pz":"nz"]=!0:I>M?v[b>0?"py":"ny"]=!0:v[w>0?"pz":"nz"]=!0}for(var _=0;_<Ot.length;_++)v[Ot[_]]&&l[Ot[_]].push(T)}});for(var p=0;p<6;p++){var m=Ot[p],g=this._getPointLightCamera(r,m);this._frameBuffer.attach(n,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+p),this._frameBuffer.bind(e),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),e.renderPass(l[m],g,s)}this._frameBuffer.unbind(e)},_getDepthMaterial:function(e){var t=this._lightMaterials[e.__uid__],r=e.type==="POINT_LIGHT";if(!t){var i=r?"clay.sm.distance.":"clay.sm.depth.";t=new ut({precision:this.precision,shader:new B(B.source(i+"vertex"),B.source(i+"fragment"))}),this._lightMaterials[e.__uid__]=t}return e.shadowSlopeScale!=null&&t.setUniform("slopeScale",e.shadowSlopeScale),e.shadowBias!=null&&t.setUniform("bias",e.shadowBias),this.softShadow===xt.VSM?t.define("fragment","USE_VSM"):t.undefine("fragment","USE_VSM"),r&&(t.set("lightPosition",e.getWorldPosition().array),t.set("range",e.range)),t},_gaussianFilter:function(e,t,r){var i={width:r,height:r,type:O.FLOAT},n=this._texturePool.get(i);this._frameBuffer.attach(n),this._frameBuffer.bind(e),this._gaussianPassH.setUniform("texture",t),this._gaussianPassH.setUniform("textureWidth",r),this._gaussianPassH.render(e),this._frameBuffer.attach(t),this._gaussianPassV.setUniform("texture",n),this._gaussianPassV.setUniform("textureHeight",r),this._gaussianPassV.render(e),this._frameBuffer.unbind(e),this._texturePool.put(n)},_getTexture:function(e,t){var r=e.__uid__,i=this._textures[r],n=e.shadowResolution||512;return t=t||1,i||(e.type==="POINT_LIGHT"?i=new sr:i=new Q,i.width=n*t,i.height=n,this.softShadow===xt.VSM?(i.type=O.FLOAT,i.anisotropic=4):(i.minFilter=R.NEAREST,i.magFilter=R.NEAREST,i.useMipmap=!1),this._textures[r]=i),i},_getPointLightCamera:function(e,t){this._lightCameras.point||(this._lightCameras.point={px:new Be,nx:new Be,py:new Be,ny:new Be,pz:new Be,nz:new Be});var r=this._lightCameras.point[t];switch(r.far=e.range,r.fov=90,r.position.set(0,0,0),t){case"px":r.lookAt(C.POSITIVE_X,C.NEGATIVE_Y);break;case"nx":r.lookAt(C.NEGATIVE_X,C.NEGATIVE_Y);break;case"py":r.lookAt(C.POSITIVE_Y,C.POSITIVE_Z);break;case"ny":r.lookAt(C.NEGATIVE_Y,C.NEGATIVE_Z);break;case"pz":r.lookAt(C.POSITIVE_Z,C.NEGATIVE_Y);break;case"nz":r.lookAt(C.NEGATIVE_Z,C.NEGATIVE_Y);break}return e.getWorldPosition(r.position),r.update(),r},_getDirectionalLightCamera:function(){var e=new F,t=new Qe,r=new Qe;return function(i,n,a){this._lightCameras.directional||(this._lightCameras.directional=new Lr);var o=this._lightCameras.directional;t.copy(n.viewBoundingBoxLastFrame),t.intersection(a.frustum.boundingBox),o.position.copy(t.min).add(t.max).scale(.5).transformMat4(a.worldTransform),o.rotation.copy(i.rotation),o.scale.copy(i.scale),o.updateWorldTransform(),F.invert(e,o.worldTransform),F.multiply(e,e,a.worldTransform),r.copy(t).applyTransform(e);var s=r.min.array,l=r.max.array;return o.position.set((s[0]+l[0])/2,(s[1]+l[1])/2,l[2]).transformMat4(o.worldTransform),o.near=0,o.far=-s[2]+l[2],isNaN(this.lightFrustumBias)?o.far*=4:o.far+=this.lightFrustumBias,o.left=s[0],o.right=l[0],o.top=l[1],o.bottom=s[1],o.update(!0),o}}(),_getSpotLightCamera:function(e){this._lightCameras.spot||(this._lightCameras.spot=new Be);var t=this._lightCameras.spot;return t.fov=e.penumbraAngle*2,t.far=e.range,t.worldTransform.copy(e.worldTransform),t.updateProjectionMatrix(),P.invert(t.viewMatrix.array,t.worldTransform.array),t},dispose:function(e){var t=e.gl||e;this._frameBuffer&&this._frameBuffer.dispose(t);for(var r in this._textures)this._textures[r].dispose(t);this._texturePool.clear(e.gl),this._depthMaterials={},this._distanceMaterials={},this._textures={},this._lightCameras={},this._shadowMapNumber={POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},this._meshMaterials={};for(var i=0;i<this._receivers.length;i++){var n=this._receivers[i];if(n.material){var a=n.material;a.undefine("fragment","POINT_LIGHT_SHADOW_COUNT"),a.undefine("fragment","DIRECTIONAL_LIGHT_SHADOW_COUNT"),a.undefine("fragment","AMBIENT_LIGHT_SHADOW_COUNT"),a.set("shadowEnabled",0)}}this._receivers=[],this._lightsCastShadow=[]}});xt.VSM=1;xt.PCF=2;var ai=He.extend(function(){return{name:"",inputLinks:{},outputLinks:{},_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},{updateParameter:function(e,t){var r=this.outputs[e],i=r.parameters,n=r._parametersCopy;if(n||(n=r._parametersCopy={}),i)for(var a in i)a!=="width"&&a!=="height"&&(n[a]=i[a]);var o,s;return i.width instanceof Function?o=i.width.call(this,t):o=i.width,i.height instanceof Function?s=i.height.call(this,t):s=i.height,(n.width!==o||n.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t.gl),n.width=o,n.height=s,n},setParameter:function(e,t){},getParameter:function(e){},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},render:function(){},getOutput:function(e,t){if(t==null)return t=e,this._outputTextures[t];var r=this.outputs[t];if(r)return this._rendered?r.outputLastFrame?this._prevOutputTextures[t]:this._outputTextures[t]:this._rendering?(this._prevOutputTextures[t]||(this._prevOutputTextures[t]=this._compositor.allocateTexture(r.parameters||{})),this._prevOutputTextures[t]):(this.render(e),this._outputTextures[t])},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},link:function(e,t,r){this.inputLinks[e]={node:t,pin:r},t.outputLinks[r]||(t.outputLinks[r]=[]),t.outputLinks[r].push({node:this,pin:e}),this.pass.material.enableTexture(e)},clear:function(){this.inputLinks={},this.outputLinks={}},updateReference:function(e){if(!this._rendering){this._rendering=!0;for(var t in this.inputLinks){var r=this.inputLinks[t];r.node.updateReference(r.pin)}this._rendering=!1}e&&this._outputReferences[e]++},beforeFrame:function(){this._rendered=!1;for(var e in this.outputLinks)this._outputReferences[e]=0},afterFrame:function(){for(var e in this.outputLinks)if(this._outputReferences[e]>0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}}}),mo=He.extend(function(){return{nodes:[]}},{dirty:function(){this._dirty=!0},addNode:function(e){this.nodes.indexOf(e)>=0||(this.nodes.push(e),this._dirty=!0)},removeNode:function(e){typeof e=="string"&&(e=this.getNodeByName(e));var t=this.nodes.indexOf(e);t>=0&&(this.nodes.splice(t,1),this._dirty=!0)},getNodeByName:function(e){for(var t=0;t<this.nodes.length;t++)if(this.nodes[t].name===e)return this.nodes[t]},update:function(){for(var e=0;e<this.nodes.length;e++)this.nodes[e].clear();for(var e=0;e<this.nodes.length;e++){var t=this.nodes[e];if(t.inputs){for(var r in t.inputs)if(t.inputs[r]){if(t.pass&&!t.pass.material.isUniformEnabled(r)){console.warn("Pin "+t.name+"."+r+" not used.");continue}var i=t.inputs[r],n=this.findPin(i);n?t.link(r,n.node,n.pin):console.warn(typeof i=="string"?"Node "+i+" not exist":"Pin of "+i.node+"."+i.pin+" not exist")}}}},findPin:function(e){var t;if((typeof e=="string"||e instanceof ai)&&(e={node:e}),typeof e.node=="string")for(var r=0;r<this.nodes.length;r++){var i=this.nodes[r];i.name===e.node&&(t=i)}else t=e.node;if(t){var n=e.pin;if(n||t.outputs&&(n=Object.keys(t.outputs)[0]),t.outputs[n])return{node:t,pin:n}}}}),ff=mo.extend(function(){return{_outputs:[],_texturePool:new Es,_frameBuffer:new we({depthBuffer:!1})}},{addNode:function(e){mo.prototype.addNode.call(this,e),e._compositor=this},render:function(e,t){if(this._dirty){this.update(),this._dirty=!1,this._outputs.length=0;for(var r=0;r<this.nodes.length;r++)this.nodes[r].outputs||this._outputs.push(this.nodes[r])}for(var r=0;r<this.nodes.length;r++)this.nodes[r].beforeFrame();for(var r=0;r<this._outputs.length;r++)this._outputs[r].updateReference();for(var r=0;r<this._outputs.length;r++)this._outputs[r].render(e,t);for(var r=0;r<this.nodes.length;r++)this.nodes[r].afterFrame()},allocateTexture:function(e){return this._texturePool.get(e)},releaseTexture:function(e){this._texturePool.put(e)},getFrameBuffer:function(){return this._frameBuffer},dispose:function(e){this._texturePool.clear(e)}}),cf=ai.extend({name:"scene",scene:null,camera:null,autoUpdateScene:!0,preZ:!1},function(){this.frameBuffer=new we},{render:function(e){this._rendering=!0;var t=e.gl;this.trigger("beforerender");var r;if(!this.outputs)r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ);else{var i=this.frameBuffer;for(var n in this.outputs){var a=this.updateParameter(n,e),o=this.outputs[n],s=this._compositor.allocateTexture(a);this._outputTextures[n]=s;var l=o.attachment||t.COLOR_ATTACHMENT0;typeof l=="string"&&(l=t[l]),i.attach(s,l)}i.bind(e);var h=e.getGLExtension("EXT_draw_buffers");if(h){var u=[];for(var l in this.outputs)l=parseInt(l),l>=t.COLOR_ATTACHMENT0&&l<=t.COLOR_ATTACHMENT0+8&&u.push(l);h.drawBuffersEXT(u)}e.saveClear(),e.clearBit=R.DEPTH_BUFFER_BIT|R.COLOR_BUFFER_BIT,r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ),e.restoreClear(),i.unbind(e)}this.trigger("afterrender",r),this._rendering=!1,this._rendered=!0}});const df=cf;var vf=ai.extend(function(){return{texture:null,outputs:{color:{}}}},function(){},{getOutput:function(e,t){return this.texture},beforeFrame:function(){},afterFrame:function(){}});const pf=vf;var mf=ai.extend(function(){return{name:"",inputs:{},outputs:null,shader:"",inputLinks:{},outputLinks:{},pass:null,_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},function(){var e=new Le({fragment:this.shader});this.pass=e},{render:function(e,t){this.trigger("beforerender",e),this._rendering=!0;var r=e.gl;for(var i in this.inputLinks){var n=this.inputLinks[i],a=n.node.getOutput(e,n.pin);this.pass.setUniform(i,a)}if(!this.outputs)this.pass.outputs=null,this._compositor.getFrameBuffer().unbind(e),this.pass.render(e,t);else{this.pass.outputs={};var o={};for(var s in this.outputs){var l=this.updateParameter(s,e);isNaN(l.width)&&this.updateParameter(s,e);var h=this.outputs[s],u=this._compositor.allocateTexture(l);this._outputTextures[s]=u;var f=h.attachment||r.COLOR_ATTACHMENT0;typeof f=="string"&&(f=r[f]),o[f]=u}this._compositor.getFrameBuffer().bind(e);for(var f in o)this._compositor.getFrameBuffer().attach(o[f],f);this.pass.render(e),this._compositor.getFrameBuffer().updateMipmap(e)}for(var i in this.inputLinks){var n=this.inputLinks[i];n.node.removeReference(n.pin)}this._rendering=!1,this._rendered=!0,this.trigger("afterrender",e)},updateParameter:function(e,t){var r=this.outputs[e],i=r.parameters,n=r._parametersCopy;if(n||(n=r._parametersCopy={}),i)for(var a in i)a!=="width"&&a!=="height"&&(n[a]=i[a]);var o,s;return typeof i.width=="function"?o=i.width.call(this,t):o=i.width,typeof i.height=="function"?s=i.height.call(this,t):s=i.height,o=Math.ceil(o),s=Math.ceil(s),(n.width!==o||n.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t),n.width=o,n.height=s,n},setParameter:function(e,t){this.pass.setUniform(e,t)},getParameter:function(e){return this.pass.getUniform(e)},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},define:function(e,t){this.pass.material.define("fragment",e,t)},undefine:function(e){this.pass.material.undefine("fragment",e)},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},clear:function(){ai.prototype.clear.call(this),this.pass.material.disableTexturesAll()}});const gf=mf,_f=`@export clay.compositor.coloradjust
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float exposure : 0.0;
uniform float gamma : 1.0;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = clamp(tex.rgb + vec3(brightness), 0.0, 1.0);
 color = clamp( (color-vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 color = clamp( color * pow(2.0, exposure), 0.0, 1.0);
 color = clamp( pow(color, vec3(gamma)), 0.0, 1.0);
 float luminance = dot( color, w );
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.brightness
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = tex.rgb + vec3(brightness);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.contrast
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float contrast : 1.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = (tex.rgb-vec3(0.5))*contrast+vec3(0.5);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.exposure
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float exposure : 0.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb * pow(2.0, exposure);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.gamma
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float gamma : 1.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = pow(tex.rgb, vec3(gamma));
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.saturation
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb;
 float luminance = dot(color, w);
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end`,Ss=`@export clay.compositor.kernel.gaussian_9
float gaussianKernel[9];
gaussianKernel[0] = 0.07;
gaussianKernel[1] = 0.09;
gaussianKernel[2] = 0.12;
gaussianKernel[3] = 0.14;
gaussianKernel[4] = 0.16;
gaussianKernel[5] = 0.14;
gaussianKernel[6] = 0.12;
gaussianKernel[7] = 0.09;
gaussianKernel[8] = 0.07;
@end
@export clay.compositor.kernel.gaussian_13
float gaussianKernel[13];
gaussianKernel[0] = 0.02;
gaussianKernel[1] = 0.03;
gaussianKernel[2] = 0.06;
gaussianKernel[3] = 0.08;
gaussianKernel[4] = 0.11;
gaussianKernel[5] = 0.13;
gaussianKernel[6] = 0.14;
gaussianKernel[7] = 0.13;
gaussianKernel[8] = 0.11;
gaussianKernel[9] = 0.08;
gaussianKernel[10] = 0.06;
gaussianKernel[11] = 0.03;
gaussianKernel[12] = 0.02;
@end
@export clay.compositor.gaussian_blur
#define SHADER_NAME gaussian_blur
uniform sampler2D texture;varying vec2 v_Texcoord;
uniform float blurSize : 2.0;
uniform vec2 textureSize : [512.0, 512.0];
uniform float blurDir : 0.0;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main (void)
{
 @import clay.compositor.kernel.gaussian_9
 vec2 off = blurSize / textureSize;
 off *= vec2(1.0 - blurDir, blurDir);
 vec4 sum = vec4(0.0);
 float weightAll = 0.0;
 for (int i = 0; i < 9; i++) {
 float w = gaussianKernel[i];
 vec4 texel = decodeHDR(clampSample(texture, v_Texcoord + float(i - 4) * off));
 sum += texel * w;
 weightAll += w;
 }
 gl_FragColor = encodeHDR(sum / max(weightAll, 0.01));
}
@end
`,yf=`@export clay.compositor.hdr.log_lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 float luminance = dot(tex.rgb, w);
 luminance = log(luminance + 0.001);
 gl_FragColor = encodeHDR(vec4(vec3(luminance), 1.0));
}
@end
@export clay.compositor.hdr.lum_adaption
varying vec2 v_Texcoord;
uniform sampler2D adaptedLum;
uniform sampler2D currentLum;
uniform float frameTime : 0.02;
@import clay.util.rgbm
void main()
{
 float fAdaptedLum = decodeHDR(texture2D(adaptedLum, vec2(0.5, 0.5))).r;
 float fCurrentLum = exp(encodeHDR(texture2D(currentLum, vec2(0.5, 0.5))).r);
 fAdaptedLum += (fCurrentLum - fAdaptedLum) * (1.0 - pow(0.98, 30.0 * frameTime));
 gl_FragColor = encodeHDR(vec4(vec3(fAdaptedLum), 1.0));
}
@end
@export clay.compositor.lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord );
 float luminance = dot(tex.rgb, w);
 gl_FragColor = vec4(vec3(luminance), 1.0);
}
@end`,As=`
@export clay.compositor.lut
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform sampler2D lookup;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 float blueColor = tex.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec4 newColor1 = texture2D(lookup, texPos1);
 vec4 newColor2 = texture2D(lookup, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 gl_FragColor = vec4(newColor.rgb, tex.w);
}
@end`,xf=`@export clay.compositor.vignette
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float darkness: 1;
uniform float offset: 1;
@import clay.util.rgbm
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = texel.rgb;
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(offset);
 gl_FragColor = encodeHDR(vec4(mix(texel.rgb, vec3(1.0 - darkness), dot(uv, uv)), texel.a));
}
@end`,ws=`@export clay.compositor.output
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = tex.rgb;
#ifdef OUTPUT_ALPHA
 gl_FragColor.a = tex.a;
#else
 gl_FragColor.a = 1.0;
#endif
 gl_FragColor = encodeHDR(gl_FragColor);
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,bs=`@export clay.compositor.bright
uniform sampler2D texture;
uniform float threshold : 1;
uniform float scale : 1.0;
uniform vec2 textureSize: [512, 512];
varying vec2 v_Texcoord;
const vec3 lumWeight = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
vec4 median(vec4 a, vec4 b, vec4 c)
{
 return a + b + c - min(min(a, b), c) - max(max(a, b), c);
}
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
#ifdef ANTI_FLICKER
 vec3 d = 1.0 / textureSize.xyx * vec3(1.0, 1.0, 0.0);
 vec4 s1 = decodeHDR(texture2D(texture, v_Texcoord - d.xz));
 vec4 s2 = decodeHDR(texture2D(texture, v_Texcoord + d.xz));
 vec4 s3 = decodeHDR(texture2D(texture, v_Texcoord - d.zy));
 vec4 s4 = decodeHDR(texture2D(texture, v_Texcoord + d.zy));
 texel = median(median(texel, s1, s2), s3, s4);
#endif
 float lum = dot(texel.rgb , lumWeight);
 vec4 color;
 if (lum > threshold && texel.a > 0.0)
 {
 color = vec4(texel.rgb * scale, texel.a * scale);
 }
 else
 {
 color = vec4(0.0);
 }
 gl_FragColor = encodeHDR(color);
}
@end
`,Cs=`@export clay.compositor.downsample
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
varying vec2 v_Texcoord;
@import clay.util.rgbm
float brightness(vec3 c)
{
 return max(max(c.r, c.g), c.b);
}
@import clay.util.clamp_sample
void main()
{
 vec4 d = vec4(-1.0, -1.0, 1.0, 1.0) / textureSize.xyxy;
#ifdef ANTI_FLICKER
 vec3 s1 = decodeHDR(clampSample(texture, v_Texcoord + d.xy)).rgb;
 vec3 s2 = decodeHDR(clampSample(texture, v_Texcoord + d.zy)).rgb;
 vec3 s3 = decodeHDR(clampSample(texture, v_Texcoord + d.xw)).rgb;
 vec3 s4 = decodeHDR(clampSample(texture, v_Texcoord + d.zw)).rgb;
 float s1w = 1.0 / (brightness(s1) + 1.0);
 float s2w = 1.0 / (brightness(s2) + 1.0);
 float s3w = 1.0 / (brightness(s3) + 1.0);
 float s4w = 1.0 / (brightness(s4) + 1.0);
 float oneDivideSum = 1.0 / (s1w + s2w + s3w + s4w);
 vec4 color = vec4(
 (s1 * s1w + s2 * s2w + s3 * s3w + s4 * s4w) * oneDivideSum,
 1.0
 );
#else
 vec4 color = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 color *= 0.25;
#endif
 gl_FragColor = encodeHDR(color);
}
@end`,Ls=`
@export clay.compositor.upsample
#define HIGH_QUALITY
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
uniform float sampleScale: 0.5;
varying vec2 v_Texcoord;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main()
{
#ifdef HIGH_QUALITY
 vec4 d = vec4(1.0, 1.0, -1.0, 0.0) / textureSize.xyxy * sampleScale;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord - d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord - d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord - d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord )) * 4.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 gl_FragColor = encodeHDR(s / 16.0);
#else
 vec4 d = vec4(-1.0, -1.0, +1.0, +1.0) / textureSize.xyxy;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 gl_FragColor = encodeHDR(s / 4.0);
#endif
}
@end`,Ms=`@export clay.compositor.hdr.composite
#define TONEMAPPING
uniform sampler2D texture;
#ifdef BLOOM_ENABLED
uniform sampler2D bloom;
#endif
#ifdef LENSFLARE_ENABLED
uniform sampler2D lensflare;
uniform sampler2D lensdirt;
#endif
#ifdef LUM_ENABLED
uniform sampler2D lum;
#endif
#ifdef LUT_ENABLED
uniform sampler2D lut;
#endif
#ifdef COLOR_CORRECTION
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float saturation : 1.0;
#endif
#ifdef VIGNETTE
uniform float vignetteDarkness: 1.0;
uniform float vignetteOffset: 1.0;
#endif
uniform float exposure : 1.0;
uniform float bloomIntensity : 0.25;
uniform float lensflareIntensity : 1;
varying vec2 v_Texcoord;
@import clay.util.srgb
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
float eyeAdaption(float fLum)
{
 return mix(0.2, fLum, 0.5);
}
#ifdef LUT_ENABLED
vec3 lutTransform(vec3 color) {
 float blueColor = color.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec4 newColor1 = texture2D(lut, texPos1);
 vec4 newColor2 = texture2D(lut, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 return newColor.rgb;
}
#endif
@import clay.util.rgbm
void main()
{
 vec4 texel = vec4(0.0);
 vec4 originalTexel = vec4(0.0);
#ifdef TEXTURE_ENABLED
 texel = decodeHDR(texture2D(texture, v_Texcoord));
 originalTexel = texel;
#endif
#ifdef BLOOM_ENABLED
 vec4 bloomTexel = decodeHDR(texture2D(bloom, v_Texcoord));
 texel.rgb += bloomTexel.rgb * bloomIntensity;
 texel.a += bloomTexel.a * bloomIntensity;
#endif
#ifdef LENSFLARE_ENABLED
 texel += decodeHDR(texture2D(lensflare, v_Texcoord)) * texture2D(lensdirt, v_Texcoord) * lensflareIntensity;
#endif
 texel.a = min(texel.a, 1.0);
#ifdef LUM_ENABLED
 float fLum = texture2D(lum, vec2(0.5, 0.5)).r;
 float adaptedLumDest = 3.0 / (max(0.1, 1.0 + 10.0*eyeAdaption(fLum)));
 float exposureBias = adaptedLumDest * exposure;
#else
 float exposureBias = exposure;
#endif
#ifdef TONEMAPPING
 texel.rgb *= exposureBias;
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
 texel = linearTosRGB(texel);
#ifdef LUT_ENABLED
 texel.rgb = lutTransform(clamp(texel.rgb,vec3(0.0),vec3(1.0)));
#endif
#ifdef COLOR_CORRECTION
 texel.rgb = clamp(texel.rgb + vec3(brightness), 0.0, 1.0);
 texel.rgb = clamp((texel.rgb - vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 float lum = dot(texel.rgb, vec3(0.2125, 0.7154, 0.0721));
 texel.rgb = mix(vec3(lum), texel.rgb, saturation);
#endif
#ifdef VIGNETTE
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(vignetteOffset);
 texel.rgb = mix(texel.rgb, vec3(1.0 - vignetteDarkness), dot(uv, uv));
#endif
 gl_FragColor = encodeHDR(texel);
#ifdef DEBUG
 #if DEBUG == 1
 gl_FragColor = encodeHDR(decodeHDR(texture2D(texture, v_Texcoord)));
 #elif DEBUG == 2
 gl_FragColor = encodeHDR(decodeHDR(texture2D(bloom, v_Texcoord)) * bloomIntensity);
 #elif DEBUG == 3
 gl_FragColor = encodeHDR(decodeHDR(texture2D(lensflare, v_Texcoord) * lensflareIntensity));
 #endif
#endif
 if (originalTexel.a <= 0.01 && gl_FragColor.a > 1e-5) {
 gl_FragColor.a = dot(gl_FragColor.rgb, vec3(0.2125, 0.7154, 0.0721));
 }
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,Tf=`@export clay.compositor.lensflare
#define SAMPLE_NUMBER 8
uniform sampler2D texture;
uniform sampler2D lenscolor;
uniform vec2 textureSize : [512, 512];
uniform float dispersal : 0.3;
uniform float haloWidth : 0.4;
uniform float distortion : 1.0;
varying vec2 v_Texcoord;
@import clay.util.rgbm
vec4 textureDistorted(
 in vec2 texcoord,
 in vec2 direction,
 in vec3 distortion
) {
 return vec4(
 decodeHDR(texture2D(texture, texcoord + direction * distortion.r)).r,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.g)).g,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.b)).b,
 1.0
 );
}
void main()
{
 vec2 texcoord = -v_Texcoord + vec2(1.0); vec2 textureOffset = 1.0 / textureSize;
 vec2 ghostVec = (vec2(0.5) - texcoord) * dispersal;
 vec2 haloVec = normalize(ghostVec) * haloWidth;
 vec3 distortion = vec3(-textureOffset.x * distortion, 0.0, textureOffset.x * distortion);
 vec4 result = vec4(0.0);
 for (int i = 0; i < SAMPLE_NUMBER; i++)
 {
 vec2 offset = fract(texcoord + ghostVec * float(i));
 float weight = length(vec2(0.5) - offset) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 }
 result *= texture2D(lenscolor, vec2(length(vec2(0.5) - texcoord)) / length(vec2(0.5)));
 float weight = length(vec2(0.5) - fract(texcoord + haloVec)) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 vec2 offset = fract(texcoord + haloVec);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 gl_FragColor = result;
}
@end`,Rs=`@export clay.compositor.blend
#define SHADER_NAME blend
#ifdef TEXTURE1_ENABLED
uniform sampler2D texture1;
uniform float weight1 : 1.0;
#endif
#ifdef TEXTURE2_ENABLED
uniform sampler2D texture2;
uniform float weight2 : 1.0;
#endif
#ifdef TEXTURE3_ENABLED
uniform sampler2D texture3;
uniform float weight3 : 1.0;
#endif
#ifdef TEXTURE4_ENABLED
uniform sampler2D texture4;
uniform float weight4 : 1.0;
#endif
#ifdef TEXTURE5_ENABLED
uniform sampler2D texture5;
uniform float weight5 : 1.0;
#endif
#ifdef TEXTURE6_ENABLED
uniform sampler2D texture6;
uniform float weight6 : 1.0;
#endif
varying vec2 v_Texcoord;
@import clay.util.rgbm
void main()
{
 vec4 tex = vec4(0.0);
#ifdef TEXTURE1_ENABLED
 tex += decodeHDR(texture2D(texture1, v_Texcoord)) * weight1;
#endif
#ifdef TEXTURE2_ENABLED
 tex += decodeHDR(texture2D(texture2, v_Texcoord)) * weight2;
#endif
#ifdef TEXTURE3_ENABLED
 tex += decodeHDR(texture2D(texture3, v_Texcoord)) * weight3;
#endif
#ifdef TEXTURE4_ENABLED
 tex += decodeHDR(texture2D(texture4, v_Texcoord)) * weight4;
#endif
#ifdef TEXTURE5_ENABLED
 tex += decodeHDR(texture2D(texture5, v_Texcoord)) * weight5;
#endif
#ifdef TEXTURE6_ENABLED
 tex += decodeHDR(texture2D(texture6, v_Texcoord)) * weight6;
#endif
 gl_FragColor = encodeHDR(tex);
}
@end`,Ps=`@export clay.compositor.fxaa
uniform sampler2D texture;
uniform vec4 viewport : VIEWPORT;
varying vec2 v_Texcoord;
#define FXAA_REDUCE_MIN (1.0/128.0)
#define FXAA_REDUCE_MUL (1.0/8.0)
#define FXAA_SPAN_MAX 8.0
@import clay.util.rgbm
void main()
{
 vec2 resolution = 1.0 / viewport.zw;
 vec3 rgbNW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbNE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ) ).xyz;
 vec4 rgbaM = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution ) );
 vec3 rgbM = rgbaM.xyz;
 float opacity = rgbaM.w;
 vec3 luma = vec3( 0.299, 0.587, 0.114 );
 float lumaNW = dot( rgbNW, luma );
 float lumaNE = dot( rgbNE, luma );
 float lumaSW = dot( rgbSW, luma );
 float lumaSE = dot( rgbSE, luma );
 float lumaM = dot( rgbM, luma );
 float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );
 float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );
 vec2 dir;
 dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
 dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));
 float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );
 float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );
 dir = min( vec2( FXAA_SPAN_MAX, FXAA_SPAN_MAX),
 max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
 dir * rcpDirMin)) * resolution;
 vec3 rgbA = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 1.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 2.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA *= 0.5;
 vec3 rgbB = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * -0.5 ) ).xyz;
 rgbB += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * 0.5 ) ).xyz;
 rgbB *= 0.25;
 rgbB += rgbA * 0.5;
 float lumaB = dot( rgbB, luma );
 if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) )
 {
 gl_FragColor = vec4( rgbA, opacity );
 }
 else {
 gl_FragColor = vec4( rgbB, opacity );
 }
}
@end`;function Ef(e){e.import(_f),e.import(Ss),e.import(yf),e.import(As),e.import(xf),e.import(ws),e.import(bs),e.import(Cs),e.import(Ls),e.import(Ms),e.import(Tf),e.import(Rs),e.import(Ps)}Ef(B);var Sf=/^#source\((.*?)\)/;function Af(e,t){var r=new ff;t=t||{};var i={textures:{},parameters:{}},n=function(s,l){for(var h=0;h<e.nodes.length;h++){var u=e.nodes[h],f=wf(u,i,t);f&&r.addNode(f)}};for(var a in e.parameters){var o=e.parameters[a];i.parameters[a]=ca(o)}return Lf(e,i,t,function(s){i.textures=s,n()}),r}function wf(e,t,r){var i=e.type||"filter",n,a,o;if(i==="filter"){var s=e.shader.trim(),l=Sf.exec(s);if(l?n=B.source(l[1].trim()):s.charAt(0)==="#"&&(n=t.shaders[s.substr(1)]),n||(n=s),!n)return}if(e.inputs){a={};for(var h in e.inputs)typeof e.inputs[h]=="string"?a[h]=e.inputs[h]:a[h]={node:e.inputs[h].node,pin:e.inputs[h].pin}}if(e.outputs){o={};for(var h in e.outputs){var u=e.outputs[h];o[h]={},u.attachment!=null&&(o[h].attachment=u.attachment),u.keepLastFrame!=null&&(o[h].keepLastFrame=u.keepLastFrame),u.outputLastFrame!=null&&(o[h].outputLastFrame=u.outputLastFrame),u.parameters&&(o[h].parameters=ca(u.parameters))}}var f;if(i==="scene"?f=new df({name:e.name,scene:r.scene,camera:r.camera,outputs:o}):i==="texture"?f=new pf({name:e.name,outputs:o}):f=new gf({name:e.name,shader:n,inputs:a,outputs:o}),f){if(e.parameters)for(var h in e.parameters){var d=e.parameters[h];typeof d=="string"?(d=d.trim(),d.charAt(0)==="#"?d=t.textures[d.substr(1)]:f.on("beforerender",Mf(h,Ds(d)))):typeof d=="function"&&f.on("beforerender",d),f.setParameter(h,d)}if(e.defines&&f.pass)for(var h in e.defines){var d=e.defines[h];f.pass.material.define("fragment",h,d)}}return f}function bf(e,t){return e}function Cf(e,t){return t}function ca(e){var t={};if(!e)return t;["type","minFilter","magFilter","wrapS","wrapT","flipY","useMipmap"].forEach(function(i){var n=e[i];n!=null&&(typeof n=="string"&&(n=O[n]),t[i]=n)});var r=e.scale||1;return["width","height"].forEach(function(i){if(e[i]!=null){var n=e[i];typeof n=="string"?(n=n.trim(),t[i]=Rf(i,Ds(n),r)):t[i]=n}}),t.width||(t.width=bf),t.height||(t.height=Cf),e.useMipmap!=null&&(t.useMipmap=e.useMipmap),t}function Lf(e,t,r,i){if(!e.textures){i({});return}var n={},a=0,o=!1,s=r.textureRootPath;Ae.each(e.textures,function(l,h){var u,f=l.path,d=ca(l.parameters);if(Array.isArray(f)&&f.length===6)s&&(f=f.map(function(c){return Ae.relative2absolute(c,s)})),u=new sr(d);else if(typeof f=="string")s&&(f=Ae.relative2absolute(f,s)),u=new Q(d);else return;u.load(f),a++,u.once("success",function(){n[h]=u,a--,a===0&&(i(n),o=!0)})}),a===0&&!o&&i(n)}function Mf(e,t){return function(r){var i=r.getDevicePixelRatio(),n=r.getWidth(),a=r.getHeight(),o=t(n,a,i);this.setParameter(e,o)}}function Rf(e,t,r){return r=r||1,function(i){var n=i.getDevicePixelRatio(),a=i.getWidth()*r,o=i.getHeight()*r;return t(a,o,n)}}function Ds(e){var t=/^expr\((.*)\)$/.exec(e);if(t)try{var r=new Function("width","height","dpr","return "+t[1]);return r(1,1),r}catch{throw new Error("Invalid expression.")}}function Mr(e,t){for(var r=0,i=1/t,n=e;n>0;)r=r+i*(n%t),n=Math.floor(n/t),i=i/t;return r}const Pf=`@export ecgl.ssao.estimate

uniform sampler2D depthTex;

uniform sampler2D normalTex;

uniform sampler2D noiseTex;

uniform vec2 depthTexSize;

uniform vec2 noiseTexSize;

uniform mat4 projection;

uniform mat4 projectionInv;

uniform mat4 viewInverseTranspose;

uniform vec3 kernel[KERNEL_SIZE];

uniform float radius : 1;

uniform float power : 1;

uniform float bias: 1e-2;

uniform float intensity: 1.0;

varying vec2 v_Texcoord;

float ssaoEstimator(in vec3 originPos, in mat3 kernelBasis) {
 float occlusion = 0.0;

 for (int i = 0; i < KERNEL_SIZE; i++) {
 vec3 samplePos = kernel[i];
#ifdef NORMALTEX_ENABLED
 samplePos = kernelBasis * samplePos;
#endif
 samplePos = samplePos * radius + originPos;

 vec4 texCoord = projection * vec4(samplePos, 1.0);
 texCoord.xy /= texCoord.w;

 vec4 depthTexel = texture2D(depthTex, texCoord.xy * 0.5 + 0.5);

 float sampleDepth = depthTexel.r * 2.0 - 1.0;
 if (projection[3][3] == 0.0) {
 sampleDepth = projection[3][2] / (sampleDepth * projection[2][3] - projection[2][2]);
 }
 else {
 sampleDepth = (sampleDepth - projection[3][2]) / projection[2][2];
 }
 
 float rangeCheck = smoothstep(0.0, 1.0, radius / abs(originPos.z - sampleDepth));
 occlusion += rangeCheck * step(samplePos.z, sampleDepth - bias);
 }
#ifdef NORMALTEX_ENABLED
 occlusion = 1.0 - occlusion / float(KERNEL_SIZE);
#else
 occlusion = 1.0 - clamp((occlusion / float(KERNEL_SIZE) - 0.6) * 2.5, 0.0, 1.0);
#endif
 return pow(occlusion, power);
}

void main()
{

 vec4 depthTexel = texture2D(depthTex, v_Texcoord);

#ifdef NORMALTEX_ENABLED
 vec4 tex = texture2D(normalTex, v_Texcoord);
 if (dot(tex.rgb, tex.rgb) == 0.0) {
 gl_FragColor = vec4(1.0);
 return;
 }
 vec3 N = tex.rgb * 2.0 - 1.0;
 N = (viewInverseTranspose * vec4(N, 0.0)).xyz;

 vec2 noiseTexCoord = depthTexSize / vec2(noiseTexSize) * v_Texcoord;
 vec3 rvec = texture2D(noiseTex, noiseTexCoord).rgb * 2.0 - 1.0;
 vec3 T = normalize(rvec - N * dot(rvec, N));
 vec3 BT = normalize(cross(N, T));
 mat3 kernelBasis = mat3(T, BT, N);
#else
 if (depthTexel.r > 0.99999) {
 gl_FragColor = vec4(1.0);
 return;
 }
 mat3 kernelBasis;
#endif

 float z = depthTexel.r * 2.0 - 1.0;

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * projectedPos;

 vec3 position = p4.xyz / p4.w;

 float ao = ssaoEstimator(position, kernelBasis);
 ao = clamp(1.0 - (1.0 - ao) * intensity, 0.0, 1.0);
 gl_FragColor = vec4(vec3(ao), 1.0);
}

@end


@export ecgl.ssao.blur
#define SHADER_NAME SSAO_BLUR

uniform sampler2D ssaoTexture;

#ifdef NORMALTEX_ENABLED
uniform sampler2D normalTex;
#endif

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

uniform int direction: 0.0;

#ifdef DEPTHTEX_ENABLED
uniform sampler2D depthTex;
uniform mat4 projection;
uniform float depthRange : 0.5;

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(depthTex, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}
#endif

void main()
{
 float kernel[5];
 kernel[0] = 0.122581;
 kernel[1] = 0.233062;
 kernel[2] = 0.288713;
 kernel[3] = 0.233062;
 kernel[4] = 0.122581;

 vec2 off = vec2(0.0);
 if (direction == 0) {
 off[0] = blurSize / textureSize.x;
 }
 else {
 off[1] = blurSize / textureSize.y;
 }

 vec2 coord = v_Texcoord;

 float sum = 0.0;
 float weightAll = 0.0;

#ifdef NORMALTEX_ENABLED
 vec3 centerNormal = texture2D(normalTex, v_Texcoord).rgb * 2.0 - 1.0;
#endif
#if defined(DEPTHTEX_ENABLED)
 float centerDepth = getLinearDepth(v_Texcoord);
#endif

 for (int i = 0; i < 5; i++) {
 vec2 coord = clamp(v_Texcoord + vec2(float(i) - 2.0) * off, vec2(0.0), vec2(1.0));

 float w = kernel[i];
#ifdef NORMALTEX_ENABLED
 vec3 normal = texture2D(normalTex, coord).rgb * 2.0 - 1.0;
 w *= clamp(dot(normal, centerNormal), 0.0, 1.0);
#endif
#ifdef DEPTHTEX_ENABLED
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(centerDepth - d) / depthRange, 0.0, 1.0));
#endif

 weightAll += w;
 sum += texture2D(ssaoTexture, coord).r * w;
 }

 gl_FragColor = vec4(vec3(sum / weightAll), 1.0);
}

@end
`;B.import(Pf);function Is(e){for(var t=new Uint8Array(e*e*4),r=0,i=new C,n=0;n<e;n++)for(var a=0;a<e;a++)i.set(Math.random()*2-1,Math.random()*2-1,0).normalize(),t[r++]=(i.x*.5+.5)*255,t[r++]=(i.y*.5+.5)*255,t[r++]=0,t[r++]=255;return t}function go(e){return new Q({pixels:Is(e),wrapS:O.REPEAT,wrapT:O.REPEAT,width:e,height:e})}function Df(e,t,r){var i=new Float32Array(e*3);t=t||0;for(var n=0;n<e;n++){var a=Mr(n+t,2)*(r?1:2)*Math.PI,o=Mr(n+t,3)*Math.PI,s=Math.random(),l=Math.cos(a)*Math.sin(o)*s,h=Math.cos(o)*s,u=Math.sin(a)*Math.sin(o)*s;i[n*3]=l,i[n*3+1]=h,i[n*3+2]=u}return i}function Rt(e){e=e||{},this._ssaoPass=new Le({fragment:B.source("ecgl.ssao.estimate")}),this._blurPass=new Le({fragment:B.source("ecgl.ssao.blur")}),this._framebuffer=new we({depthBuffer:!1}),this._ssaoTexture=new Q,this._blurTexture=new Q,this._blurTexture2=new Q,this._depthTex=e.depthTexture,this._normalTex=e.normalTexture,this.setNoiseSize(4),this.setKernelSize(e.kernelSize||12),e.radius!=null&&this.setParameter("radius",e.radius),e.power!=null&&this.setParameter("power",e.power),this._normalTex||(this._ssaoPass.material.disableTexture("normalTex"),this._blurPass.material.disableTexture("normalTex")),this._depthTex||this._blurPass.material.disableTexture("depthTex"),this._blurPass.material.setUniform("normalTex",this._normalTex),this._blurPass.material.setUniform("depthTex",this._depthTex)}Rt.prototype.setDepthTexture=function(e){this._depthTex=e};Rt.prototype.setNormalTexture=function(e){this._normalTex=e,this._ssaoPass.material[e?"enableTexture":"disableTexture"]("normalTex"),this.setKernelSize(this._kernelSize)};Rt.prototype.update=function(e,t,r){var i=e.getWidth(),n=e.getHeight(),a=this._ssaoPass,o=this._blurPass;a.setUniform("kernel",this._kernels[r%this._kernels.length]),a.setUniform("depthTex",this._depthTex),this._normalTex!=null&&a.setUniform("normalTex",this._normalTex),a.setUniform("depthTexSize",[this._depthTex.width,this._depthTex.height]);var s=new F;F.transpose(s,t.worldTransform),a.setUniform("projection",t.projectionMatrix.array),a.setUniform("projectionInv",t.invProjectionMatrix.array),a.setUniform("viewInverseTranspose",s.array);var l=this._ssaoTexture,h=this._blurTexture,u=this._blurTexture2;l.width=i/2,l.height=n/2,h.width=i,h.height=n,u.width=i,u.height=n,this._framebuffer.attach(l),this._framebuffer.bind(e),e.gl.clearColor(1,1,1,1),e.gl.clear(e.gl.COLOR_BUFFER_BIT),a.render(e),o.setUniform("textureSize",[i/2,n/2]),o.setUniform("projection",t.projectionMatrix.array),this._framebuffer.attach(h),o.setUniform("direction",0),o.setUniform("ssaoTexture",l),o.render(e),this._framebuffer.attach(u),o.setUniform("textureSize",[i,n]),o.setUniform("direction",1),o.setUniform("ssaoTexture",h),o.render(e),this._framebuffer.unbind(e);var f=e.clearColor;e.gl.clearColor(f[0],f[1],f[2],f[3])};Rt.prototype.getTargetTexture=function(){return this._blurTexture2};Rt.prototype.setParameter=function(e,t){e==="noiseTexSize"?this.setNoiseSize(t):e==="kernelSize"?this.setKernelSize(t):e==="intensity"?this._ssaoPass.material.set("intensity",t):this._ssaoPass.setUniform(e,t)};Rt.prototype.setKernelSize=function(e){this._kernelSize=e,this._ssaoPass.material.define("fragment","KERNEL_SIZE",e),this._kernels=this._kernels||[];for(var t=0;t<30;t++)this._kernels[t]=Df(e,t*e,!!this._normalTex)};Rt.prototype.setNoiseSize=function(e){var t=this._ssaoPass.getUniform("noiseTex");t?(t.data=Is(e),t.width=t.height=e,t.dirty()):(t=go(e),this._ssaoPass.setUniform("noiseTex",go(e))),this._ssaoPass.setUniform("noiseTexSize",[e,e])};Rt.prototype.dispose=function(e){this._blurTexture.dispose(e),this._ssaoTexture.dispose(e),this._blurTexture2.dispose(e)};const If=`@export ecgl.ssr.main

#define SHADER_NAME SSR
#define MAX_ITERATION 20;
#define SAMPLE_PER_FRAME 5;
#define TOTAL_SAMPLES 128;

uniform sampler2D sourceTexture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform sampler2D gBufferTexture3;
uniform samplerCube specularCubemap;
uniform float specularIntensity: 1;

uniform mat4 projection;
uniform mat4 projectionInv;
uniform mat4 toViewSpace;
uniform mat4 toWorldSpace;

uniform float maxRayDistance: 200;

uniform float pixelStride: 16;
uniform float pixelStrideZCutoff: 50; 
uniform float screenEdgeFadeStart: 0.9; 
uniform float eyeFadeStart : 0.2; uniform float eyeFadeEnd: 0.8; 
uniform float minGlossiness: 0.2; uniform float zThicknessThreshold: 1;

uniform float nearZ;
uniform vec2 viewportSize : VIEWPORT_SIZE;

uniform float jitterOffset: 0;

varying vec2 v_Texcoord;

#ifdef DEPTH_DECODE
@import clay.util.decode_float
#endif

#ifdef PHYSICALLY_CORRECT
uniform sampler2D normalDistribution;
uniform float sampleOffset: 0;
uniform vec2 normalDistributionSize;

vec3 transformNormal(vec3 H, vec3 N) {
 vec3 upVector = N.y > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
vec3 importanceSampleNormalGGX(float i, float roughness, vec3 N) {
 float p = fract((i + sampleOffset) / float(TOTAL_SAMPLES));
 vec3 H = texture2D(normalDistribution,vec2(roughness, p)).rgb;
 return transformNormal(H, N);
}
float G_Smith(float g, float ndv, float ndl) {
 float roughness = 1.0 - g;
 float k = roughness * roughness / 2.0;
 float G1V = ndv / (ndv * (1.0 - k) + k);
 float G1L = ndl / (ndl * (1.0 - k) + k);
 return G1L * G1V;
}
vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}
#endif

float fetchDepth(sampler2D depthTexture, vec2 uv)
{
 vec4 depthTexel = texture2D(depthTexture, uv);
 return depthTexel.r * 2.0 - 1.0;
}

float linearDepth(float depth)
{
 if (projection[3][3] == 0.0) {
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
 }
 else {
 return (depth - projection[3][2]) / projection[2][2];
 }
}

bool rayIntersectDepth(float rayZNear, float rayZFar, vec2 hitPixel)
{
 if (rayZFar > rayZNear)
 {
 float t = rayZFar; rayZFar = rayZNear; rayZNear = t;
 }
 float cameraZ = linearDepth(fetchDepth(gBufferTexture2, hitPixel));
 return rayZFar <= cameraZ && rayZNear >= cameraZ - zThicknessThreshold;
}


bool traceScreenSpaceRay(
 vec3 rayOrigin, vec3 rayDir, float jitter,
 out vec2 hitPixel, out vec3 hitPoint, out float iterationCount
)
{
 float rayLength = ((rayOrigin.z + rayDir.z * maxRayDistance) > -nearZ)
 ? (-nearZ - rayOrigin.z) / rayDir.z : maxRayDistance;

 vec3 rayEnd = rayOrigin + rayDir * rayLength;

 vec4 H0 = projection * vec4(rayOrigin, 1.0);
 vec4 H1 = projection * vec4(rayEnd, 1.0);

 float k0 = 1.0 / H0.w, k1 = 1.0 / H1.w;

 vec3 Q0 = rayOrigin * k0, Q1 = rayEnd * k1;

 vec2 P0 = (H0.xy * k0 * 0.5 + 0.5) * viewportSize;
 vec2 P1 = (H1.xy * k1 * 0.5 + 0.5) * viewportSize;

 P1 += dot(P1 - P0, P1 - P0) < 0.0001 ? 0.01 : 0.0;
 vec2 delta = P1 - P0;

 bool permute = false;
 if (abs(delta.x) < abs(delta.y)) {
 permute = true;
 delta = delta.yx;
 P0 = P0.yx;
 P1 = P1.yx;
 }
 float stepDir = sign(delta.x);
 float invdx = stepDir / delta.x;

 vec3 dQ = (Q1 - Q0) * invdx;
 float dk = (k1 - k0) * invdx;

 vec2 dP = vec2(stepDir, delta.y * invdx);

 float strideScaler = 1.0 - min(1.0, -rayOrigin.z / pixelStrideZCutoff);
 float pixStride = 1.0 + strideScaler * pixelStride;

 dP *= pixStride; dQ *= pixStride; dk *= pixStride;

 vec4 pqk = vec4(P0, Q0.z, k0);
 vec4 dPQK = vec4(dP, dQ.z, dk);

 pqk += dPQK * jitter;
 float rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);
 float rayZNear;

 bool intersect = false;

 vec2 texelSize = 1.0 / viewportSize;

 iterationCount = 0.0;

 for (int i = 0; i < MAX_ITERATION; i++)
 {
 pqk += dPQK;

 rayZNear = rayZFar;
 rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);

 hitPixel = permute ? pqk.yx : pqk.xy;
 hitPixel *= texelSize;

 intersect = rayIntersectDepth(rayZNear, rayZFar, hitPixel);

 iterationCount += 1.0;

 dPQK *= 1.2;

 if (intersect) {
 break;
 }
 }

 Q0.xy += dQ.xy * iterationCount;
 Q0.z = pqk.z;
 hitPoint = Q0 / pqk.w;

 return intersect;
}

float calculateAlpha(
 float iterationCount, float reflectivity,
 vec2 hitPixel, vec3 hitPoint, float dist, vec3 rayDir
)
{
 float alpha = clamp(reflectivity, 0.0, 1.0);
 alpha *= 1.0 - (iterationCount / float(MAX_ITERATION));
 vec2 hitPixelNDC = hitPixel * 2.0 - 1.0;
 float maxDimension = min(1.0, max(abs(hitPixelNDC.x), abs(hitPixelNDC.y)));
 alpha *= 1.0 - max(0.0, maxDimension - screenEdgeFadeStart) / (1.0 - screenEdgeFadeStart);

 float _eyeFadeStart = eyeFadeStart;
 float _eyeFadeEnd = eyeFadeEnd;
 if (_eyeFadeStart > _eyeFadeEnd) {
 float tmp = _eyeFadeEnd;
 _eyeFadeEnd = _eyeFadeStart;
 _eyeFadeStart = tmp;
 }

 float eyeDir = clamp(rayDir.z, _eyeFadeStart, _eyeFadeEnd);
 alpha *= 1.0 - (eyeDir - _eyeFadeStart) / (_eyeFadeEnd - _eyeFadeStart);

 alpha *= 1.0 - clamp(dist / maxRayDistance, 0.0, 1.0);

 return alpha;
}

@import clay.util.rand

@import clay.util.rgbm

void main()
{
 vec4 normalAndGloss = texture2D(gBufferTexture1, v_Texcoord);

 if (dot(normalAndGloss.rgb, vec3(1.0)) == 0.0) {
 discard;
 }

 float g = normalAndGloss.a;
#if !defined(PHYSICALLY_CORRECT)
 if (g <= minGlossiness) {
 discard;
 }
#endif

 float reflectivity = (g - minGlossiness) / (1.0 - minGlossiness);

 vec3 N = normalize(normalAndGloss.rgb * 2.0 - 1.0);
 N = normalize((toViewSpace * vec4(N, 0.0)).xyz);

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, fetchDepth(gBufferTexture2, v_Texcoord), 1.0);
 vec4 pos = projectionInv * projectedPos;
 vec3 rayOrigin = pos.xyz / pos.w;
 vec3 V = -normalize(rayOrigin);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 float iterationCount;
 float jitter = rand(fract(v_Texcoord + jitterOffset));

#ifdef PHYSICALLY_CORRECT
 vec4 color = vec4(vec3(0.0), 1.0);
 vec4 albedoMetalness = texture2D(gBufferTexture3, v_Texcoord);
 vec3 albedo = albedoMetalness.rgb;
 float m = albedoMetalness.a;
 vec3 diffuseColor = albedo * (1.0 - m);
 vec3 spec = mix(vec3(0.04), albedo, m);

 float jitter2 = rand(fract(v_Texcoord)) * float(TOTAL_SAMPLES);

 for (int i = 0; i < SAMPLE_PER_FRAME; i++) {
 vec3 H = importanceSampleNormalGGX(float(i) + jitter2, 1.0 - g, N);
 vec3 rayDir = normalize(reflect(-V, H));
#else
 vec3 rayDir = normalize(reflect(-V, N));
#endif
 vec2 hitPixel;
 vec3 hitPoint;

 bool intersect = traceScreenSpaceRay(rayOrigin, rayDir, jitter, hitPixel, hitPoint, iterationCount);

 float dist = distance(rayOrigin, hitPoint);

 vec3 hitNormal = texture2D(gBufferTexture1, hitPixel).rgb * 2.0 - 1.0;
 hitNormal = normalize((toViewSpace * vec4(hitNormal, 0.0)).xyz);
#ifdef PHYSICALLY_CORRECT
 float ndl = clamp(dot(N, rayDir), 0.0, 1.0);
 float vdh = clamp(dot(V, H), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);
 vec3 litTexel = vec3(0.0);
 if (dot(hitNormal, rayDir) < 0.0 && intersect) {
 litTexel = texture2D(sourceTexture, hitPixel).rgb;
 litTexel *= pow(clamp(1.0 - dist / 200.0, 0.0, 1.0), 3.0);

 }
 else {
 #ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 litTexel = RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, 0.0), 8.12).rgb * specularIntensity;
#endif
 }
 color.rgb += ndl * litTexel * (
 F_Schlick(ndl, spec) * G_Smith(g, ndv, ndl) * vdh / (ndh * ndv + 0.001)
 );
 }
 color.rgb /= float(SAMPLE_PER_FRAME);
#else
 #if !defined(SPECULARCUBEMAP_ENABLED)
 if (dot(hitNormal, rayDir) >= 0.0) {
 discard;
 }
 if (!intersect) {
 discard;
 }
#endif
 float alpha = clamp(calculateAlpha(iterationCount, reflectivity, hitPixel, hitPoint, dist, rayDir), 0.0, 1.0);
 vec4 color = texture2D(sourceTexture, hitPixel);
 color.rgb *= alpha;

#ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 alpha = alpha * (intersect ? 1.0 : 0.0);
 float bias = (1.0 -g) * 5.0;
 color.rgb += (1.0 - alpha)
 * RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, bias), 8.12).rgb
 * specularIntensity;
#endif

#endif

 gl_FragColor = encodeHDR(color);
}
@end

@export ecgl.ssr.blur

uniform sampler2D texture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform mat4 projection;
uniform float depthRange : 0.05;

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

#ifdef BLEND
 #ifdef SSAOTEX_ENABLED
uniform sampler2D ssaoTex;
 #endif
uniform sampler2D sourceTexture;
#endif

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(gBufferTexture2, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}

@import clay.util.rgbm


void main()
{
 @import clay.compositor.kernel.gaussian_9

 vec4 centerNTexel = texture2D(gBufferTexture1, v_Texcoord);
 float g = centerNTexel.a;
 float maxBlurSize = clamp(1.0 - g, 0.0, 1.0) * blurSize;
#ifdef VERTICAL
 vec2 off = vec2(0.0, maxBlurSize / textureSize.y);
#else
 vec2 off = vec2(maxBlurSize / textureSize.x, 0.0);
#endif

 vec2 coord = v_Texcoord;

 vec4 sum = vec4(0.0);
 float weightAll = 0.0;

 vec3 cN = centerNTexel.rgb * 2.0 - 1.0;
 float cD = getLinearDepth(v_Texcoord);
 for (int i = 0; i < 9; i++) {
 vec2 coord = clamp((float(i) - 4.0) * off + v_Texcoord, vec2(0.0), vec2(1.0));
 float w = gaussianKernel[i]
 * clamp(dot(cN, texture2D(gBufferTexture1, coord).rgb * 2.0 - 1.0), 0.0, 1.0);
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(cD - d) / depthRange, 0.0, 1.0));

 weightAll += w;
 sum += decodeHDR(texture2D(texture, coord)) * w;
 }

#ifdef BLEND
 float aoFactor = 1.0;
 #ifdef SSAOTEX_ENABLED
 aoFactor = texture2D(ssaoTex, v_Texcoord).r;
 #endif
 gl_FragColor = encodeHDR(
 sum / weightAll * aoFactor + decodeHDR(texture2D(sourceTexture, v_Texcoord))
 );
#else
 gl_FragColor = encodeHDR(sum / weightAll);
#endif
}

@end`;B.import(If);function Pt(e){e=e||{},this._ssrPass=new Le({fragment:B.source("ecgl.ssr.main"),clearColor:[0,0,0,0]}),this._blurPass1=new Le({fragment:B.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blurPass2=new Le({fragment:B.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blendPass=new Le({fragment:B.source("clay.compositor.blend")}),this._blendPass.material.disableTexturesAll(),this._blendPass.material.enableTexture(["texture1","texture2"]),this._ssrPass.setUniform("gBufferTexture1",e.normalTexture),this._ssrPass.setUniform("gBufferTexture2",e.depthTexture),this._blurPass1.setUniform("gBufferTexture1",e.normalTexture),this._blurPass1.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.setUniform("gBufferTexture1",e.normalTexture),this._blurPass2.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.material.define("fragment","VERTICAL"),this._blurPass2.material.define("fragment","BLEND"),this._ssrTexture=new Q({type:O.HALF_FLOAT}),this._texture2=new Q({type:O.HALF_FLOAT}),this._texture3=new Q({type:O.HALF_FLOAT}),this._prevTexture=new Q({type:O.HALF_FLOAT}),this._currentTexture=new Q({type:O.HALF_FLOAT}),this._frameBuffer=new we({depthBuffer:!1}),this._normalDistribution=null,this._totalSamples=256,this._samplePerFrame=4,this._ssrPass.material.define("fragment","SAMPLE_PER_FRAME",this._samplePerFrame),this._ssrPass.material.define("fragment","TOTAL_SAMPLES",this._totalSamples),this._downScale=1}Pt.prototype.setAmbientCubemap=function(e,t){this._ssrPass.material.set("specularCubemap",e),this._ssrPass.material.set("specularIntensity",t);var r=e&&t;this._ssrPass.material[r?"enableTexture":"disableTexture"]("specularCubemap")};Pt.prototype.update=function(e,t,r,i){var n=e.getWidth(),a=e.getHeight(),o=this._ssrTexture,s=this._texture2,l=this._texture3;o.width=this._prevTexture.width=this._currentTexture.width=n/this._downScale,o.height=this._prevTexture.height=this._currentTexture.height=a/this._downScale,s.width=l.width=n,s.height=l.height=a;var h=this._frameBuffer,u=this._ssrPass,f=this._blurPass1,d=this._blurPass2,c=this._blendPass,v=new F,p=new F;F.transpose(v,t.worldTransform),F.transpose(p,t.viewMatrix),u.setUniform("sourceTexture",r),u.setUniform("projection",t.projectionMatrix.array),u.setUniform("projectionInv",t.invProjectionMatrix.array),u.setUniform("toViewSpace",v.array),u.setUniform("toWorldSpace",p.array),u.setUniform("nearZ",t.near);var m=i/this._totalSamples*this._samplePerFrame;if(u.setUniform("jitterOffset",m),u.setUniform("sampleOffset",i*this._samplePerFrame),f.setUniform("textureSize",[o.width,o.height]),d.setUniform("textureSize",[n,a]),d.setUniform("sourceTexture",r),f.setUniform("projection",t.projectionMatrix.array),d.setUniform("projection",t.projectionMatrix.array),h.attach(o),h.bind(e),u.render(e),this._physicallyCorrect&&(h.attach(this._currentTexture),c.setUniform("texture1",this._prevTexture),c.setUniform("texture2",o),c.material.set({weight1:i>=1?.95:0,weight2:i>=1?.05:1}),c.render(e)),h.attach(s),f.setUniform("texture",this._physicallyCorrect?this._currentTexture:o),f.render(e),h.attach(l),d.setUniform("texture",s),d.render(e),h.unbind(e),this._physicallyCorrect){var g=this._prevTexture;this._prevTexture=this._currentTexture,this._currentTexture=g}};Pt.prototype.getTargetTexture=function(){return this._texture3};Pt.prototype.setParameter=function(e,t){e==="maxIteration"?this._ssrPass.material.define("fragment","MAX_ITERATION",t):this._ssrPass.setUniform(e,t)};Pt.prototype.setPhysicallyCorrect=function(e){e?(this._normalDistribution||(this._normalDistribution=Et.generateNormalDistribution(64,this._totalSamples)),this._ssrPass.material.define("fragment","PHYSICALLY_CORRECT"),this._ssrPass.material.set("normalDistribution",this._normalDistribution),this._ssrPass.material.set("normalDistributionSize",[64,this._totalSamples])):this._ssrPass.material.undefine("fragment","PHYSICALLY_CORRECT"),this._physicallyCorrect=e};Pt.prototype.setSSAOTexture=function(e){var t=this._blurPass2;e?(t.material.enableTexture("ssaoTex"),t.material.set("ssaoTex",e)):t.material.disableTexture("ssaoTex")};Pt.prototype.isFinished=function(e){return this._physicallyCorrect?e>this._totalSamples/this._samplePerFrame:!0};Pt.prototype.dispose=function(e){this._ssrTexture.dispose(e),this._texture2.dispose(e),this._texture3.dispose(e),this._prevTexture.dispose(e),this._currentTexture.dispose(e),this._frameBuffer.dispose(e)};const _o=[0,0,-.321585265978,-.154972575841,.458126042375,.188473391593,.842080129861,.527766490688,.147304551086,-.659453822776,-.331943915203,-.940619700594,.0479226680259,.54812163202,.701581552186,-.709825561388,-.295436780218,.940589268233,-.901489676764,.237713156085,.973570876096,-.109899459384,-.866792314779,-.451805525005,.330975007087,.800048655954,-.344275183665,.381779221166,-.386139432542,-.437418421534,-.576478634965,-.0148463392551,.385798197415,-.262426961053,-.666302061145,.682427250835,-.628010632582,-.732836215494,.10163141741,-.987658134403,.711995289051,-.320024291314,.0296005138058,.950296523438,.0130612307608,-.351024443122,-.879596633704,-.10478487883,.435712737232,.504254490347,.779203817497,.206477676721,.388264289969,-.896736162545,-.153106280781,-.629203242522,-.245517550697,.657969239148,.126830499058,.26862328493,-.634888119007,-.302301223431,.617074219636,.779817204925],Nf=`@export ecgl.normal.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

@import ecgl.common.normalMap.vertexHeader

@import ecgl.common.vertexAnimation.header

void main()
{

 @import ecgl.common.vertexAnimation.main

 @import ecgl.common.uv.main

 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

 @import ecgl.common.normalMap.vertexMain

 gl_Position = worldViewProjection * vec4(pos, 1.0);

}


@end


@export ecgl.normal.fragment

#define ROUGHNESS_CHANEL 0

uniform bool useBumpMap;
uniform bool useRoughnessMap;
uniform bool doubleSide;
uniform float roughness;

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform mat4 viewInverse : VIEWINVERSE;

@import ecgl.common.normalMap.fragmentHeader
@import ecgl.common.bumpMap.header

uniform sampler2D roughnessMap;

void main()
{
 vec3 N = v_Normal;
 
 bool flipNormal = false;
 if (doubleSide) {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 flipNormal = true;
 }
 }

 @import ecgl.common.normalMap.fragmentMain

 if (useBumpMap) {
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 }

 float g = 1.0 - roughness;

 if (useRoughnessMap) {
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
 }

 if (flipNormal) {
 N = -N;
 }

 gl_FragColor.rgb = (N.xyz + 1.0) * 0.5;
 gl_FragColor.a = g;
}
@end`;B.import(Nf);function Dn(e,t,r,i,n){var a=e.gl;t.setUniform(a,"1i",r,n),a.activeTexture(a.TEXTURE0+n),i.isRenderable()?i.bind(e):i.unbind(e)}function Of(e,t,r,i,n){var a,o,s,l,h=e.gl;return function(u,f,d){if(!(l&&l.material===u.material)){var c=u.material,v=u.__program,p=c.get("roughness");p==null&&(p=1);var m=c.get("normalMap")||t,g=c.get("roughnessMap"),T=c.get("bumpMap"),x=c.get("uvRepeat"),_=c.get("uvOffset"),S=c.get("detailUvRepeat"),A=c.get("detailUvOffset"),b=!!T&&c.isTextureEnabled("bumpMap"),w=!!g&&c.isTextureEnabled("roughnessMap"),L=c.isDefined("fragment","DOUBLE_SIDED");T=T||r,g=g||i,d!==f?(f.set("normalMap",m),f.set("bumpMap",T),f.set("roughnessMap",g),f.set("useBumpMap",b),f.set("useRoughnessMap",w),f.set("doubleSide",L),x!=null&&f.set("uvRepeat",x),_!=null&&f.set("uvOffset",_),S!=null&&f.set("detailUvRepeat",S),A!=null&&f.set("detailUvOffset",A),f.set("roughness",p)):(v.setUniform(h,"1f","roughness",p),a!==m&&Dn(e,v,"normalMap",m,0),o!==T&&T&&Dn(e,v,"bumpMap",T,1),s!==g&&g&&Dn(e,v,"roughnessMap",g,2),x!=null&&v.setUniform(h,"2f","uvRepeat",x),_!=null&&v.setUniform(h,"2f","uvOffset",_),S!=null&&v.setUniform(h,"2f","detailUvRepeat",S),A!=null&&v.setUniform(h,"2f","detailUvOffset",A),v.setUniform(h,"1i","useBumpMap",+b),v.setUniform(h,"1i","useRoughnessMap",+w),v.setUniform(h,"1i","doubleSide",+L)),a=m,o=T,s=g,l=u}}}function Ur(e){this._depthTex=new Q({format:O.DEPTH_COMPONENT,type:O.UNSIGNED_INT}),this._normalTex=new Q({type:O.HALF_FLOAT}),this._framebuffer=new we,this._framebuffer.attach(this._normalTex),this._framebuffer.attach(this._depthTex,we.DEPTH_ATTACHMENT),this._normalMaterial=new ut({shader:new B(B.source("ecgl.normal.vertex"),B.source("ecgl.normal.fragment"))}),this._normalMaterial.enableTexture(["normalMap","bumpMap","roughnessMap"]),this._defaultNormalMap=or.createBlank("#000"),this._defaultBumpMap=or.createBlank("#000"),this._defaultRoughessMap=or.createBlank("#000"),this._debugPass=new Le({fragment:B.source("clay.compositor.output")}),this._debugPass.setUniform("texture",this._normalTex),this._debugPass.material.undefine("fragment","OUTPUT_ALPHA")}Ur.prototype.getDepthTexture=function(){return this._depthTex};Ur.prototype.getNormalTexture=function(){return this._normalTex};Ur.prototype.update=function(e,t,r){var i=e.getWidth(),n=e.getHeight(),a=this._depthTex,o=this._normalTex,s=this._normalMaterial;a.width=i,a.height=n,o.width=i,o.height=n;var l=t.getRenderList(r).opaque;this._framebuffer.bind(e),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.gl.disable(e.gl.BLEND),e.renderPass(l,r,{getMaterial:function(){return s},ifRender:function(h){return h.renderNormal},beforeRender:Of(e,this._defaultNormalMap,this._defaultBumpMap,this._defaultRoughessMap,this._normalMaterial),sort:e.opaqueSortCompare}),this._framebuffer.unbind(e)};Ur.prototype.renderDebug=function(e){this._debugPass.render(e)};Ur.prototype.dispose=function(e){this._depthTex.dispose(e),this._normalTex.dispose(e)};function mi(e){e=e||{},this._edgePass=new Le({fragment:B.source("ecgl.edge")}),this._edgePass.setUniform("normalTexture",e.normalTexture),this._edgePass.setUniform("depthTexture",e.depthTexture),this._targetTexture=new Q({type:O.HALF_FLOAT}),this._frameBuffer=new we,this._frameBuffer.attach(this._targetTexture)}mi.prototype.update=function(e,t,r,i){var n=e.getWidth(),a=e.getHeight(),o=this._targetTexture;o.width=n,o.height=a;var s=this._frameBuffer;s.bind(e),this._edgePass.setUniform("projectionInv",t.invProjectionMatrix.array),this._edgePass.setUniform("textureSize",[n,a]),this._edgePass.setUniform("texture",r),this._edgePass.render(e),s.unbind(e)};mi.prototype.getTargetTexture=function(){return this._targetTexture};mi.prototype.setParameter=function(e,t){this._edgePass.setUniform(e,t)};mi.prototype.dispose=function(e){this._targetTexture.dispose(e),this._frameBuffer.dispose(e)};const Bf={type:"compositor",nodes:[{name:"source",type:"texture",outputs:{color:{}}},{name:"source_half",shader:"#source(clay.compositor.downsample)",inputs:{texture:"source"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bright",shader:"#source(clay.compositor.bright)",inputs:{texture:"source_half"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{threshold:2,scale:4,textureSize:"expr([width * 1.0 / 2, height / 2])"}},{name:"bright_downsample_4",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 2, height / 2] )"}},{name:"bright_downsample_8",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 4, height / 4] )"}},{name:"bright_downsample_16",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 8, height / 8] )"}},{name:"bright_downsample_32",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 32)",height:"expr(height * 1.0 / 32)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 16, height / 16] )"}},{name:"bright_upsample_16_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_32"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 32, height / 32] )"}},{name:"bright_upsample_16_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_16_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_8_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_8_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_8_blur_v",texture2:"bright_upsample_16_blur_v"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_4_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_4_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_4_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_4_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_4_blur_v",texture2:"bright_upsample_8_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_2_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_2_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_2_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_2_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_2_blur_v",texture2:"bright_upsample_4_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_full_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_full_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_full_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bloom_composite",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_full_blur_v",texture2:"bright_upsample_2_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"coc",shader:"#source(ecgl.dof.coc)",outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{focalDist:50,focalRange:30}},{name:"dof_far_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"dof_near_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_NEARFIELD:null}},{name:"dof_coc_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"coc"},outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_COC:null}},{name:"dof_composite",shader:"#source(ecgl.dof.composite)",inputs:{original:"source",blurred:"dof_far_blur",nearfield:"dof_near_blur",coc:"coc",nearcoc:"dof_coc_blur"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}}},{name:"composite",shader:"#source(clay.compositor.hdr.composite)",inputs:{texture:"source",bloom:"bloom_composite"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},defines:{}},{name:"FXAA",shader:"#source(clay.compositor.fxaa)",inputs:{texture:"composite"}}]},Uf=`@export ecgl.dof.coc

uniform sampler2D depth;

uniform float zNear: 0.1;
uniform float zFar: 2000;

uniform float focalDistance: 3;
uniform float focalRange: 1;
uniform float focalLength: 30;
uniform float fstop: 2.8;

varying vec2 v_Texcoord;

@import clay.util.encode_float

void main()
{
 float z = texture2D(depth, v_Texcoord).r * 2.0 - 1.0;

 float dist = 2.0 * zNear * zFar / (zFar + zNear - z * (zFar - zNear));

 float aperture = focalLength / fstop;

 float coc;

 float uppper = focalDistance + focalRange;
 float lower = focalDistance - focalRange;
 if (dist <= uppper && dist >= lower) {
 coc = 0.5;
 }
 else {
 float focalAdjusted = dist > uppper ? uppper : lower;

 coc = abs(aperture * (focalLength * (dist - focalAdjusted)) / (dist * (focalAdjusted - focalLength)));
 coc = clamp(coc, 0.0, 2.0) / 2.00001;

 if (dist < lower) {
 coc = -coc;
 }
 coc = coc * 0.5 + 0.5;
 }

 gl_FragColor = encodeFloat(coc);
}
@end


@export ecgl.dof.composite

#define DEBUG 0

uniform sampler2D original;
uniform sampler2D blurred;
uniform sampler2D nearfield;
uniform sampler2D coc;
uniform sampler2D nearcoc;
varying vec2 v_Texcoord;

@import clay.util.rgbm
@import clay.util.float

void main()
{
 vec4 blurredColor = texture2D(blurred, v_Texcoord);
 vec4 originalColor = texture2D(original, v_Texcoord);

 float fCoc = decodeFloat(texture2D(coc, v_Texcoord));

 fCoc = abs(fCoc * 2.0 - 1.0);

 float weight = smoothstep(0.0, 1.0, fCoc);
 
#ifdef NEARFIELD_ENABLED
 vec4 nearfieldColor = texture2D(nearfield, v_Texcoord);
 float fNearCoc = decodeFloat(texture2D(nearcoc, v_Texcoord));
 fNearCoc = abs(fNearCoc * 2.0 - 1.0);

 gl_FragColor = encodeHDR(
 mix(
 nearfieldColor, mix(originalColor, blurredColor, weight),
 pow(1.0 - fNearCoc, 4.0)
 )
 );
#else
 gl_FragColor = encodeHDR(mix(originalColor, blurredColor, weight));
#endif

}

@end



@export ecgl.dof.diskBlur

#define POISSON_KERNEL_SIZE 16;

uniform sampler2D texture;
uniform sampler2D coc;
varying vec2 v_Texcoord;

uniform float blurRadius : 10.0;
uniform vec2 textureSize : [512.0, 512.0];

uniform vec2 poissonKernel[POISSON_KERNEL_SIZE];

uniform float percent;

float nrand(const in vec2 n) {
 return fract(sin(dot(n.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

@import clay.util.rgbm
@import clay.util.float


void main()
{
 vec2 offset = blurRadius / textureSize;

 float rnd = 6.28318 * nrand(v_Texcoord + 0.07 * percent );
 float cosa = cos(rnd);
 float sina = sin(rnd);
 vec4 basis = vec4(cosa, -sina, sina, cosa);

#if !defined(BLUR_NEARFIELD) && !defined(BLUR_COC)
 offset *= abs(decodeFloat(texture2D(coc, v_Texcoord)) * 2.0 - 1.0);
#endif

#ifdef BLUR_COC
 float cocSum = 0.0;
#else
 vec4 color = vec4(0.0);
#endif


 float weightSum = 0.0;

 for (int i = 0; i < POISSON_KERNEL_SIZE; i++) {
 vec2 ofs = poissonKernel[i];

 ofs = vec2(dot(ofs, basis.xy), dot(ofs, basis.zw));

 vec2 uv = v_Texcoord + ofs * offset;
 vec4 texel = texture2D(texture, uv);

 float w = 1.0;
#ifdef BLUR_COC
 float fCoc = decodeFloat(texel) * 2.0 - 1.0;
 cocSum += clamp(fCoc, -1.0, 0.0) * w;
#else
 texel = texel;
 #if !defined(BLUR_NEARFIELD)
 float fCoc = decodeFloat(texture2D(coc, uv)) * 2.0 - 1.0;
 w *= abs(fCoc);
 #endif
 texel.rgb *= texel.a;
 color += texel * w;
#endif

 weightSum += w;
 }

#ifdef BLUR_COC
 gl_FragColor = encodeFloat(clamp(cocSum / weightSum, -1.0, 0.0) * 0.5 + 0.5);
#else
 color /= weightSum;
 color.rgb /= (color.a + 0.0001);
 gl_FragColor = color;
#endif
}

@end`,Ff=`@export ecgl.edge

uniform sampler2D texture;

uniform sampler2D normalTexture;
uniform sampler2D depthTexture;

uniform mat4 projectionInv;

uniform vec2 textureSize;

uniform vec4 edgeColor: [0,0,0,0.8];

varying vec2 v_Texcoord;

vec3 packColor(vec2 coord) {
 float z = texture2D(depthTexture, coord).r * 2.0 - 1.0;
 vec4 p = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * p;

 return vec3(
 texture2D(normalTexture, coord).rg,
 -p4.z / p4.w / 5.0
 );
}

void main() {
 vec2 cc = v_Texcoord;
 vec3 center = packColor(cc);

 float size = clamp(1.0 - (center.z - 10.0) / 100.0, 0.0, 1.0) * 0.5;
 float dx = size / textureSize.x;
 float dy = size / textureSize.y;

 vec2 coord;
 vec3 topLeft = packColor(cc+vec2(-dx, -dy));
 vec3 top = packColor(cc+vec2(0.0, -dy));
 vec3 topRight = packColor(cc+vec2(dx, -dy));
 vec3 left = packColor(cc+vec2(-dx, 0.0));
 vec3 right = packColor(cc+vec2(dx, 0.0));
 vec3 bottomLeft = packColor(cc+vec2(-dx, dy));
 vec3 bottom = packColor(cc+vec2(0.0, dy));
 vec3 bottomRight = packColor(cc+vec2(dx, dy));

 vec3 v = -topLeft-2.0*top-topRight+bottomLeft+2.0*bottom+bottomRight;
 vec3 h = -bottomLeft-2.0*left-topLeft+bottomRight+2.0*right+topRight;

 float edge = sqrt(dot(h, h) + dot(v, v));

 edge = smoothstep(0.8, 1.0, edge);

 gl_FragColor = mix(texture2D(texture, v_Texcoord), vec4(edgeColor.rgb, 1.0), edgeColor.a * edge);
}
@end`;B.import(Ss);B.import(As);B.import(ws);B.import(bs);B.import(Cs);B.import(Ls);B.import(Ms);B.import(Rs);B.import(Ps);B.import(Uf);B.import(Ff);function Ns(e,t){return{color:{parameters:{width:e,height:t}}}}var da=["composite","FXAA"];function te(){this._width,this._height,this._dpr,this._sourceTexture=new Q({type:O.HALF_FLOAT}),this._depthTexture=new Q({format:O.DEPTH_COMPONENT,type:O.UNSIGNED_INT}),this._framebuffer=new we,this._framebuffer.attach(this._sourceTexture),this._framebuffer.attach(this._depthTexture,we.DEPTH_ATTACHMENT),this._normalPass=new Ur,this._compositor=Af(Bf);var e=this._compositor.getNodeByName("source");e.texture=this._sourceTexture;var t=this._compositor.getNodeByName("coc");this._sourceNode=e,this._cocNode=t,this._compositeNode=this._compositor.getNodeByName("composite"),this._fxaaNode=this._compositor.getNodeByName("FXAA"),this._dofBlurNodes=["dof_far_blur","dof_near_blur","dof_coc_blur"].map(function(i){return this._compositor.getNodeByName(i)},this),this._dofBlurKernel=0,this._dofBlurKernelSize=new Float32Array(0),this._finalNodesChain=da.map(function(i){return this._compositor.getNodeByName(i)},this);var r={normalTexture:this._normalPass.getNormalTexture(),depthTexture:this._normalPass.getDepthTexture()};this._ssaoPass=new Rt(r),this._ssrPass=new Pt(r),this._edgePass=new mi(r)}te.prototype.resize=function(i,n,r){r=r||1;var i=i*r,n=n*r,a=this._sourceTexture,o=this._depthTexture;a.width=i,a.height=n,o.width=i,o.height=n;var s={getWidth:function(){return i},getHeight:function(){return n},getDevicePixelRatio:function(){return r}};function l(h,u){if(typeof h[u]=="function"){var f=h[u].__original||h[u];h[u]=function(d){return f.call(this,s)},h[u].__original=f}}this._compositor.nodes.forEach(function(h){for(var u in h.outputs){var f=h.outputs[u].parameters;f&&(l(f,"width"),l(f,"height"))}for(var d in h.parameters)l(h.parameters,d)}),this._width=i,this._height=n,this._dpr=r};te.prototype.getWidth=function(){return this._width};te.prototype.getHeight=function(){return this._height};te.prototype._ifRenderNormalPass=function(){return this._enableSSAO||this._enableEdge||this._enableSSR};te.prototype._getPrevNode=function(e){for(var t=da.indexOf(e.name)-1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t-=1,r=this._finalNodesChain[t];return r};te.prototype._getNextNode=function(e){for(var t=da.indexOf(e.name)+1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t+=1,r=this._finalNodesChain[t];return r};te.prototype._addChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);t&&(e.inputs.texture=t.name,r?(e.outputs=Ns(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=e.name):e.outputs=null,this._compositor.addNode(e))};te.prototype._removeChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);t&&(r?(t.outputs=Ns(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=t.name):t.outputs=null,this._compositor.removeNode(e))};te.prototype.updateNormal=function(e,t,r,i){this._ifRenderNormalPass()&&this._normalPass.update(e,t,r)};te.prototype.updateSSAO=function(e,t,r,i){this._ssaoPass.update(e,r,i)};te.prototype.enableSSAO=function(){this._enableSSAO=!0};te.prototype.disableSSAO=function(){this._enableSSAO=!1};te.prototype.enableSSR=function(){this._enableSSR=!0};te.prototype.disableSSR=function(){this._enableSSR=!1};te.prototype.getSSAOTexture=function(){return this._ssaoPass.getTargetTexture()};te.prototype.getSourceFrameBuffer=function(){return this._framebuffer};te.prototype.getSourceTexture=function(){return this._sourceTexture};te.prototype.disableFXAA=function(){this._removeChainNode(this._fxaaNode)};te.prototype.enableFXAA=function(){this._addChainNode(this._fxaaNode)};te.prototype.enableBloom=function(){this._compositeNode.inputs.bloom="bloom_composite",this._compositor.dirty()};te.prototype.disableBloom=function(){this._compositeNode.inputs.bloom=null,this._compositor.dirty()};te.prototype.enableDOF=function(){this._compositeNode.inputs.texture="dof_composite",this._compositor.dirty()};te.prototype.disableDOF=function(){this._compositeNode.inputs.texture="source",this._compositor.dirty()};te.prototype.enableColorCorrection=function(){this._compositeNode.define("COLOR_CORRECTION"),this._enableColorCorrection=!0};te.prototype.disableColorCorrection=function(){this._compositeNode.undefine("COLOR_CORRECTION"),this._enableColorCorrection=!1};te.prototype.enableEdge=function(){this._enableEdge=!0};te.prototype.disableEdge=function(){this._enableEdge=!1};te.prototype.setBloomIntensity=function(e){this._compositeNode.setParameter("bloomIntensity",e)};te.prototype.setSSAOParameter=function(e,t){switch(e){case"quality":var r={low:6,medium:12,high:32,ultra:62}[t]||12;this._ssaoPass.setParameter("kernelSize",r);break;case"radius":this._ssaoPass.setParameter(e,t),this._ssaoPass.setParameter("bias",t/200);break;case"intensity":this._ssaoPass.setParameter(e,t);break}};te.prototype.setDOFParameter=function(e,t){switch(e){case"focalDistance":case"focalRange":case"fstop":this._cocNode.setParameter(e,t);break;case"blurRadius":for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].setParameter("blurRadius",t);break;case"quality":var i={low:4,medium:8,high:16,ultra:32}[t]||8;this._dofBlurKernelSize=i;for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].pass.material.define("POISSON_KERNEL_SIZE",i);this._dofBlurKernel=new Float32Array(i*2);break}};te.prototype.setSSRParameter=function(e,t){if(t!=null)switch(e){case"quality":var r={low:10,medium:15,high:30,ultra:80}[t]||20,i={low:32,medium:16,high:8,ultra:4}[t]||16;this._ssrPass.setParameter("maxIteration",r),this._ssrPass.setParameter("pixelStride",i);break;case"maxRoughness":this._ssrPass.setParameter("minGlossiness",Math.max(Math.min(1-t,1),0));break;case"physical":this.setPhysicallyCorrectSSR(t);break;default:console.warn("Unkown SSR parameter "+e)}};te.prototype.setPhysicallyCorrectSSR=function(e){this._ssrPass.setPhysicallyCorrect(e)};te.prototype.setEdgeColor=function(e){var t=y.parseColor(e);this._edgePass.setParameter("edgeColor",t)};te.prototype.setExposure=function(e){this._compositeNode.setParameter("exposure",Math.pow(2,e))};te.prototype.setColorLookupTexture=function(e,t){this._compositeNode.pass.material.setTextureImage("lut",this._enableColorCorrection?e:"none",t,{minFilter:y.Texture.NEAREST,magFilter:y.Texture.NEAREST,flipY:!1})};te.prototype.setColorCorrection=function(e,t){this._compositeNode.setParameter(e,t)};te.prototype.isSSREnabled=function(){return this._enableSSR};te.prototype.composite=function(e,t,r,i,n){var a=this._sourceTexture,o=a;this._enableEdge&&(this._edgePass.update(e,r,a,n),a=o=this._edgePass.getTargetTexture()),this._enableSSR&&(this._ssrPass.update(e,r,a,n),o=this._ssrPass.getTargetTexture(),this._ssrPass.setSSAOTexture(this._enableSSAO?this._ssaoPass.getTargetTexture():null)),this._sourceNode.texture=o,this._cocNode.setParameter("depth",this._depthTexture);for(var s=this._dofBlurKernel,l=this._dofBlurKernelSize,h=Math.floor(_o.length/2/l),u=n%h,f=0;f<l*2;f++)s[f]=_o[f+u*l*2];for(var f=0;f<this._dofBlurNodes.length;f++)this._dofBlurNodes[f].setParameter("percent",n/30),this._dofBlurNodes[f].setParameter("poissonKernel",s);this._cocNode.setParameter("zNear",r.near),this._cocNode.setParameter("zFar",r.far),this._compositor.render(e,i)};te.prototype.dispose=function(e){this._sourceTexture.dispose(e),this._depthTexture.dispose(e),this._framebuffer.dispose(e),this._compositor.dispose(e),this._normalPass.dispose(e),this._ssaoPass.dispose(e)};function Qn(e){for(var t=[],r=0;r<30;r++)t.push([Mr(r,2),Mr(r,3)]);this._haltonSequence=t,this._frame=0,this._sourceTex=new Q,this._sourceFb=new we,this._sourceFb.attach(this._sourceTex),this._prevFrameTex=new Q,this._outputTex=new Q;var i=this._blendPass=new Le({fragment:B.source("clay.compositor.blend")});i.material.disableTexturesAll(),i.material.enableTexture(["texture1","texture2"]),this._blendFb=new we({depthBuffer:!1}),this._outputPass=new Le({fragment:B.source("clay.compositor.output"),blendWithPrevious:!0}),this._outputPass.material.define("fragment","OUTPUT_ALPHA"),this._outputPass.material.blend=function(n){n.blendEquationSeparate(n.FUNC_ADD,n.FUNC_ADD),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA)}}Qn.prototype={constructor:Qn,jitterProjection:function(e,t){var r=e.viewport,i=r.devicePixelRatio||e.getDevicePixelRatio(),n=r.width*i,a=r.height*i,o=this._haltonSequence[this._frame%this._haltonSequence.length],s=new F;s.array[12]=(o[0]*2-1)/n,s.array[13]=(o[1]*2-1)/a,F.mul(t.projectionMatrix,s,t.projectionMatrix),F.invert(t.invProjectionMatrix,t.projectionMatrix)},resetFrame:function(){this._frame=0},getFrame:function(){return this._frame},getSourceFrameBuffer:function(){return this._sourceFb},getOutputTexture:function(){return this._outputTex},resize:function(e,t){this._prevFrameTex.width=e,this._prevFrameTex.height=t,this._outputTex.width=e,this._outputTex.height=t,this._sourceTex.width=e,this._sourceTex.height=t,this._prevFrameTex.dirty(),this._outputTex.dirty(),this._sourceTex.dirty()},isFinished:function(){return this._frame>=this._haltonSequence.length},render:function(e,t,r){var i=this._blendPass;this._frame===0?(i.setUniform("weight1",0),i.setUniform("weight2",1)):(i.setUniform("weight1",.9),i.setUniform("weight2",.1)),i.setUniform("texture1",this._prevFrameTex),i.setUniform("texture2",t||this._sourceTex),this._blendFb.attach(this._outputTex),this._blendFb.bind(e),i.render(e),this._blendFb.unbind(e),r||(this._outputPass.setUniform("texture",this._outputTex),this._outputPass.render(e));var n=this._prevFrameTex;this._prevFrameTex=this._outputTex,this._outputTex=n,this._frame++},dispose:function(e){this._sourceFb.dispose(e),this._blendFb.dispose(e),this._prevFrameTex.dispose(e),this._outputTex.dispose(e),this._sourceTex.dispose(e),this._outputPass.dispose(e),this._blendPass.dispose(e)}};function he(e){e=e||"perspective",this.layer=null,this.scene=new Wt,this.rootNode=this.scene,this.viewport={x:0,y:0,width:0,height:0},this.setProjection(e),this._compositor=new te,this._temporalSS=new Qn,this._shadowMapPass=new xt;for(var t=[],r=0,i=0;i<30;i++){for(var n=[],a=0;a<6;a++)n.push(Mr(r,2)*4-2),n.push(Mr(r,3)*4-2),r++;t.push(n)}this._pcfKernels=t,this.scene.on("beforerender",function(o,s,l){this.needsTemporalSS()&&this._temporalSS.jitterProjection(o,l)},this)}he.prototype.setProjection=function(e){var t=this.camera;t&&t.update(),e==="perspective"?this.camera instanceof Be||(this.camera=new Be,t&&this.camera.setLocalTransform(t.localTransform)):this.camera instanceof Lr||(this.camera=new Lr,t&&this.camera.setLocalTransform(t.localTransform)),this.camera.near=.1,this.camera.far=2e3};he.prototype.setViewport=function(e,t,r,i,n){this.camera instanceof Be&&(this.camera.aspect=r/i),n=n||1,this.viewport.x=e,this.viewport.y=t,this.viewport.width=r,this.viewport.height=i,this.viewport.devicePixelRatio=n,this._compositor.resize(r*n,i*n),this._temporalSS.resize(r*n,i*n)};he.prototype.containPoint=function(e,t){var r=this.viewport,i=this.layer.renderer.getHeight();return t=i-t,e>=r.x&&t>=r.y&&e<=r.x+r.width&&t<=r.y+r.height};var yo=new nt;he.prototype.castRay=function(e,t,r){var i=this.layer.renderer,n=i.viewport;return i.viewport=this.viewport,i.screenToNDC(e,t,yo),this.camera.castRay(yo,r),i.viewport=n,r};he.prototype.prepareRender=function(){this.scene.update(),this.camera.update(),this.scene.updateLights();var e=this.scene.updateRenderList(this.camera);this._needsSortProgressively=!1;for(var t=0;t<e.transparent.length;t++){var r=e.transparent[t],i=r.geometry;i.needsSortVerticesProgressively&&i.needsSortVerticesProgressively()&&(this._needsSortProgressively=!0),i.needsSortTrianglesProgressively&&i.needsSortTrianglesProgressively()&&(this._needsSortProgressively=!0)}this._frame=0,this._temporalSS.resetFrame()};he.prototype.render=function(e,t){this._doRender(e,t,this._frame),this._frame++};he.prototype.needsAccumulate=function(){return this.needsTemporalSS()||this._needsSortProgressively};he.prototype.needsTemporalSS=function(){var e=this._enableTemporalSS;return e==="auto"&&(e=this._enablePostEffect),e};he.prototype.hasDOF=function(){return this._enableDOF};he.prototype.isAccumulateFinished=function(){return this.needsTemporalSS()?this._temporalSS.isFinished():this._frame>30};he.prototype._doRender=function(e,t,r){var i=this.scene,n=this.camera;r=r||0,this._updateTransparent(e,i,n,r),t||(this._shadowMapPass.kernelPCF=this._pcfKernels[0],this._shadowMapPass.render(e,i,n,!0)),this._updateShadowPCFKernel(r);var a=e.clearColor;if(e.gl.clearColor(a[0],a[1],a[2],a[3]),this._enablePostEffect&&(this.needsTemporalSS()&&this._temporalSS.jitterProjection(e,n),this._compositor.updateNormal(e,i,n,this._temporalSS.getFrame())),this._updateSSAO(e,i,n,this._temporalSS.getFrame()),this._enablePostEffect){var o=this._compositor.getSourceFrameBuffer();o.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),e.render(i,n,!0,!0),o.unbind(e),this.needsTemporalSS()&&t?(this._compositor.composite(e,i,n,this._temporalSS.getSourceFrameBuffer(),this._temporalSS.getFrame()),e.setViewport(this.viewport),this._temporalSS.render(e)):(e.setViewport(this.viewport),this._compositor.composite(e,i,n,null,0))}else if(this.needsTemporalSS()&&t){var o=this._temporalSS.getSourceFrameBuffer();o.bind(e),e.saveClear(),e.clearBit=e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT,e.render(i,n,!0,!0),e.restoreClear(),o.unbind(e),e.setViewport(this.viewport),this._temporalSS.render(e)}else e.setViewport(this.viewport),e.render(i,n,!0,!0)};he.prototype._updateTransparent=function(e,t,r,i){for(var n=new C,a=new F,o=r.getWorldPosition(),s=t.getRenderList(r).transparent,l=0;l<s.length;l++){var h=s[l],u=h.geometry;F.invert(a,h.worldTransform),C.transformMat4(n,o,a),u.needsSortTriangles&&u.needsSortTriangles()&&u.doSortTriangles(n,i),u.needsSortVertices&&u.needsSortVertices()&&u.doSortVertices(n,i)}};he.prototype._updateSSAO=function(e,t,r){var i=this._enableSSAO&&this._enablePostEffect;i&&this._compositor.updateSSAO(e,t,r,this._temporalSS.getFrame());for(var n=t.getRenderList(r),a=0;a<n.opaque.length;a++){var o=n.opaque[a];o.renderNormal&&o.material[i?"enableTexture":"disableTexture"]("ssaoMap"),i&&o.material.set("ssaoMap",this._compositor.getSSAOTexture())}};he.prototype._updateShadowPCFKernel=function(e){for(var t=this._pcfKernels[e%this._pcfKernels.length],r=this.scene.getRenderList(this.camera),i=r.opaque,n=0;n<i.length;n++)i[n].receiveShadow&&(i[n].material.set("pcfKernel",t),i[n].material.define("fragment","PCF_KERNEL_SIZE",t.length/2))};he.prototype.dispose=function(e){this._compositor.dispose(e.gl),this._temporalSS.dispose(e.gl),this._shadowMapPass.dispose(e)};he.prototype.setPostEffect=function(e,t){var r=this._compositor;this._enablePostEffect=e.get("enable");var i=e.getModel("bloom"),n=e.getModel("edge"),a=e.getModel("DOF",e.getModel("depthOfField")),o=e.getModel("SSAO",e.getModel("screenSpaceAmbientOcclusion")),s=e.getModel("SSR",e.getModel("screenSpaceReflection")),l=e.getModel("FXAA"),h=e.getModel("colorCorrection");i.get("enable")?r.enableBloom():r.disableBloom(),a.get("enable")?r.enableDOF():r.disableDOF(),s.get("enable")?r.enableSSR():r.disableSSR(),h.get("enable")?r.enableColorCorrection():r.disableColorCorrection(),n.get("enable")?r.enableEdge():r.disableEdge(),l.get("enable")?r.enableFXAA():r.disableFXAA(),this._enableDOF=a.get("enable"),this._enableSSAO=o.get("enable"),this._enableSSAO?r.enableSSAO():r.disableSSAO(),r.setBloomIntensity(i.get("intensity")),r.setEdgeColor(n.get("color")),r.setColorLookupTexture(h.get("lookupTexture"),t),r.setExposure(h.get("exposure")),["radius","quality","intensity"].forEach(function(u){r.setSSAOParameter(u,o.get(u))}),["quality","maxRoughness","physical"].forEach(function(u){r.setSSRParameter(u,s.get(u))}),["quality","focalDistance","focalRange","blurRadius","fstop"].forEach(function(u){r.setDOFParameter(u,a.get(u))}),["brightness","contrast","saturation"].forEach(function(u){r.setColorCorrection(u,h.get(u))})};he.prototype.setDOFFocusOnPoint=function(e){if(this._enablePostEffect)return e>this.camera.far||e<this.camera.near?void 0:(this._compositor.setDOFParameter("focalDistance",e),!0)};he.prototype.setTemporalSuperSampling=function(e){this._enableTemporalSS=e.get("enable")};he.prototype.isLinearSpace=function(){return this._enablePostEffect};he.prototype.setRootNode=function(e){if(this.rootNode!==e){for(var t=this.rootNode.children(),r=0;r<t.length;r++)e.add(t[r]);e!==this.scene&&this.scene.add(e),this.rootNode=e}};he.prototype.add=function(e){this.rootNode.add(e)};he.prototype.remove=function(e){this.rootNode.remove(e)};he.prototype.removeAll=function(e){this.rootNode.removeAll(e)};Object.assign(he.prototype,na);function zf(e,t){var r=e.getBoxLayoutParams(),i=en(r,{width:t.getWidth(),height:t.getHeight()});i.y=t.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,t.getDevicePixelRatio());var n=e.get("boxWidth"),a=e.get("boxHeight"),o=e.get("boxDepth");this.getAxis("x").setExtent(-n/2,n/2),this.getAxis("y").setExtent(o/2,-o/2),this.getAxis("z").setExtent(-a/2,a/2),this.size=[n,a,o]}function Vf(e,t){var r={};function i(n,a){r[n]=r[n]||[1/0,-1/0],r[n][0]=Math.min(a[0],r[n][0]),r[n][1]=Math.max(a[1],r[n][1])}e.eachSeries(function(n){if(n.coordinateSystem===this){var a=n.getData();["x","y","z"].forEach(function(o){a.mapDimensionsAll(o,!0).forEach(function(s){i(o,a.getDataExtent(s,!0))})})}},this),["xAxis3D","yAxis3D","zAxis3D"].forEach(function(n){e.eachComponent(n,function(a){var o=n.charAt(0),s=a.getReferringComponents("grid3D").models[0],l=s.coordinateSystem;if(l===this){var h=l.getAxis(o);if(!h){var u=ta(r[o]||[1/0,-1/0],a);h=new Xi(o,u),h.type=a.get("type");var f=h.type==="category";h.onBand=f&&a.get("boundaryGap"),h.inverse=a.get("inverse"),a.axis=h,h.model=a,h.getLabelModel=function(){return a.getModel("axisLabel",s.getModel("axisLabel"))},h.getTickModel=function(){return a.getModel("axisTick",s.getModel("axisTick"))},l.addAxis(h)}}},this)},this),this.resize(this.model,t)}var Gf={dimensions:ni.prototype.dimensions,create:function(e,t){var r=[];e.eachComponent("grid3D",function(a){a.__viewGL=a.__viewGL||new he;var o=new ni;o.model=a,o.viewGL=a.__viewGL,a.coordinateSystem=o,r.push(o),o.resize=zf,o.update=Vf});var i=["xAxis3D","yAxis3D","zAxis3D"];function n(a,o){return i.map(function(s){var l=a.getReferringComponents(s).models[0];return l==null&&(l=o.getComponent(s)),l})}return e.eachSeries(function(a){if(a.get("coordinateSystem")==="cartesian3D"){var o=a.getReferringComponents("grid3D").models[0];if(o==null){var s=n(a,e),o=s[0].getCoordSysModel();s.forEach(function(u){u.getCoordSysModel()})}var l=o.coordinateSystem;a.coordinateSystem=l}}),r}};const Hf=Gf;var Os=Ir.extend({type:"cartesian3DAxis",axis:null,getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid3D",index:this.option.gridIndex,id:this.option.gridId})[0]}});xl(Os);const kf=Os;var Bs={show:!0,grid3DIndex:0,inverse:!1,name:"",nameLocation:"middle",nameTextStyle:{fontSize:16},nameGap:20,axisPointer:{},axisLine:{},axisTick:{},axisLabel:{},splitArea:{}},Wf=le({boundaryGap:!0,axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"},axisPointer:{label:{show:!1}}},Bs),va=le({boundaryGap:[0,0],splitNumber:5,axisPointer:{label:{}}},Bs),qf=kt({scale:!0,min:"dataMin",max:"dataMax"},va),Us=kt({logBase:10},va);Us.scale=!0;const Xf={categoryAxis3D:Wf,valueAxis3D:va,timeAxis3D:qf,logAxis3D:Us};var Zf=["value","category","time","log"];function Kf(e,t,r,i,n){Zf.forEach(function(a){var o=r.extend({type:t+"Axis3D."+a,__ordinalMeta:null,mergeDefaultAndTheme:function(s,l){var h=l.getTheme();le(s,h.get(a+"Axis3D")),le(s,this.getDefaultOption()),s.type=i(t,s)},optionUpdated:function(){var s=this.option;s.type==="category"&&(this.__ordinalMeta=Tl.createByAxisModel(this))},getCategories:function(){if(this.option.type==="category")return this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:le(El(Xf[a+"Axis3D"]),n||{},!0)});e.registerComponentModel(o)}),e.registerSubTypeDefaulter(t+"Axis3D",Sl(i,t))}function Qf(e,t){return t.type||(t.data?"category":"value")}function jf(e){e.registerComponentModel(rf),e.registerComponentView(sf),e.registerCoordinateSystem("grid3D",Hf),["x","y","z"].forEach(function(t){Kf(e,t,kf,Qf,{name:t.toUpperCase()});const r=e.ComponentView.extend({type:t+"Axis3D"});e.registerComponentView(r)}),e.registerAction({type:"grid3DChangeCamera",event:"grid3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"grid3D",query:t},function(i){i.setView(t)})}),e.registerAction({type:"grid3DShowAxisPointer",event:"grid3dshowaxispointer",update:"grid3D:showAxisPointer"},function(t,r){}),e.registerAction({type:"grid3DHideAxisPointer",event:"grid3dhideaxispointer",update:"grid3D:hideAxisPointer"},function(t,r){})}Ze(jf);const Fr={defaultOption:{shading:null,realisticMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},lambertMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},colorMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},hatchingMaterial:{textureTiling:1,textureOffset:0,paperColor:"#fff"}}},Fs={getFilledRegions:function(e,t){var r=(e||[]).slice(),i;if(typeof t=="string"?(t=Vn(t),i=t&&t.geoJson):t&&t.features&&(i=t),!i)return[];for(var n={},a=i.features,o=0;o<r.length;o++)n[r[o].name]=r[o];for(var o=0;o<a.length;o++){var s=a[o].properties.name;n[s]||r.push({name:s})}return r},defaultOption:{show:!0,zlevel:-10,map:"",left:0,top:0,width:"100%",height:"100%",boxWidth:100,boxHeight:10,boxDepth:"auto",regionHeight:3,environment:"auto",groundPlane:{show:!1,color:"#aaa"},shading:"lambert",light:{main:{alpha:40,beta:30}},viewControl:{alpha:40,beta:0,distance:100,orthographicSize:60,minAlpha:5,minBeta:-80,maxBeta:80},label:{show:!1,distance:2,textStyle:{fontSize:20,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:4}},itemStyle:{color:"#fff",borderWidth:0,borderColor:"#333"},emphasis:{itemStyle:{color:"#639fc0"},label:{show:!0}}}};var zr=Ir.extend({type:"geo3D",layoutMode:"box",coordinateSystem:null,optionUpdated:function(){var e=this.option;e.regions=this.getFilledRegions(e.regions,e.map);var t=di(e.data||[],{coordDimensions:["value"],encodeDefine:this.get("encode"),dimensionsDefine:this.get("dimensions")}),r=new wt(t,this);r.initData(e.regions);var i={};r.each(function(n){var a=r.getName(n),o=r.getItemModel(n);i[a]=o}),this._regionModelMap=i,this._data=r},getData:function(){return this._data},getRegionModel:function(e){var t=this.getData().getName(e);return this._regionModelMap[t]||new Ji(null,this)},getRegionPolygonCoords:function(e){var t=this.getData().getName(e),r=this.coordinateSystem.getRegion(t);return r?r.geometries:[]},getFormattedLabel:function(e,t){var r=this._data.getName(e),i=this.getRegionModel(e),n=i.get(t==="normal"?["label","formatter"]:["emphasis","label","formatter"]);n==null&&(n=i.get(["label","formatter"]));var a={name:r};if(typeof n=="function")return a.status=t,n(a);if(typeof n=="string"){var o=a.seriesName;return n.replace("{a}",o??"")}else return r},defaultOption:{regions:[]}});le(zr.prototype,Fs);le(zr.prototype,nn);le(zr.prototype,Or);le(zr.prototype,Br);le(zr.prototype,Fr);const Yf=zr;function zs(e,t,r){r=r||2;var i=t&&t.length,n=i?t[0]*r:e.length,a=Vs(e,0,n,r,!0),o=[];if(!a)return o;var s,l,h,u,f,d,c;if(i&&(a=rc(e,t,a,r)),e.length>80*r){s=h=e[0],l=u=e[1];for(var v=r;v<n;v+=r)f=e[v],d=e[v+1],f<s&&(s=f),d<l&&(l=d),f>h&&(h=f),d>u&&(u=d);c=Math.max(h-s,u-l)}return si(a,o,r,s,l,c),o}function Vs(e,t,r,i,n){var a,o;if(n===Jn(e,t,r,i)>0)for(a=t;a<r;a+=i)o=xo(a,e[a],e[a+1],o);else for(a=r-i;a>=t;a-=i)o=xo(a,e[a],e[a+1],o);return o&&ar(o,o.next)&&(hi(o),o=o.next),o}function oi(e,t){if(!e)return e;t||(t=e);var r=e,i;do if(i=!1,!r.steiner&&(ar(r,r.next)||je(r.prev,r,r.next)===0)){if(hi(r),r=t=r.prev,r===r.next)return null;i=!0}else r=r.next;while(i||r!==t);return t}function si(e,t,r,i,n,a,o){if(e){!o&&a&&oc(e,i,n,a);for(var s=e,l,h;e.prev!==e.next;){if(l=e.prev,h=e.next,a?$f(e,i,n,a):Jf(e)){t.push(l.i/r),t.push(e.i/r),t.push(h.i/r),hi(e),e=h.next,s=h.next;continue}if(e=h,e===s){o?o===1?(e=ec(e,t,r),si(e,t,r,i,n,a,2)):o===2&&tc(e,t,r,i,n,a):si(oi(e),t,r,i,n,a,1);break}}}}function Jf(e){var t=e.prev,r=e,i=e.next;if(je(t,r,i)>=0)return!1;for(var n=e.next.next;n!==e.prev;){if(Zi(t.x,t.y,r.x,r.y,i.x,i.y,n.x,n.y)&&je(n.prev,n,n.next)>=0)return!1;n=n.next}return!0}function $f(e,t,r,i){var n=e.prev,a=e,o=e.next;if(je(n,a,o)>=0)return!1;for(var s=n.x<a.x?n.x<o.x?n.x:o.x:a.x<o.x?a.x:o.x,l=n.y<a.y?n.y<o.y?n.y:o.y:a.y<o.y?a.y:o.y,h=n.x>a.x?n.x>o.x?n.x:o.x:a.x>o.x?a.x:o.x,u=n.y>a.y?n.y>o.y?n.y:o.y:a.y>o.y?a.y:o.y,f=jn(s,l,t,r,i),d=jn(h,u,t,r,i),c=e.nextZ;c&&c.z<=d;){if(c!==e.prev&&c!==e.next&&Zi(n.x,n.y,a.x,a.y,o.x,o.y,c.x,c.y)&&je(c.prev,c,c.next)>=0)return!1;c=c.nextZ}for(c=e.prevZ;c&&c.z>=f;){if(c!==e.prev&&c!==e.next&&Zi(n.x,n.y,a.x,a.y,o.x,o.y,c.x,c.y)&&je(c.prev,c,c.next)>=0)return!1;c=c.prevZ}return!0}function ec(e,t,r){var i=e;do{var n=i.prev,a=i.next.next;!ar(n,a)&&Gs(n,i,i.next,a)&&li(n,a)&&li(a,n)&&(t.push(n.i/r),t.push(i.i/r),t.push(a.i/r),hi(i),hi(i.next),i=e=a),i=i.next}while(i!==e);return i}function tc(e,t,r,i,n,a){var o=e;do{for(var s=o.next.next;s!==o.prev;){if(o.i!==s.i&&hc(o,s)){var l=Hs(o,s);o=oi(o,o.next),l=oi(l,l.next),si(o,t,r,i,n,a),si(l,t,r,i,n,a);return}s=s.next}o=o.next}while(o!==e)}function rc(e,t,r,i){var n=[],a,o,s,l,h;for(a=0,o=t.length;a<o;a++)s=t[a]*i,l=a<o-1?t[a+1]*i:e.length,h=Vs(e,s,l,i,!1),h===h.next&&(h.steiner=!0),n.push(lc(h));for(n.sort(ic),a=0;a<n.length;a++)nc(n[a],r),r=oi(r,r.next);return r}function ic(e,t){return e.x-t.x}function nc(e,t){if(t=ac(e,t),t){var r=Hs(t,e);oi(r,r.next)}}function ac(e,t){var r=t,i=e.x,n=e.y,a=-1/0,o;do{if(n<=r.y&&n>=r.next.y&&r.next.y!==r.y){var s=r.x+(n-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(s<=i&&s>a){if(a=s,s===i){if(n===r.y)return r;if(n===r.next.y)return r.next}o=r.x<r.next.x?r:r.next}}r=r.next}while(r!==t);if(!o)return null;if(i===a)return o.prev;var l=o,h=o.x,u=o.y,f=1/0,d;for(r=o.next;r!==l;)i>=r.x&&r.x>=h&&i!==r.x&&Zi(n<u?i:a,n,h,u,n<u?a:i,n,r.x,r.y)&&(d=Math.abs(n-r.y)/(i-r.x),(d<f||d===f&&r.x>o.x)&&li(r,e)&&(o=r,f=d)),r=r.next;return o}function oc(e,t,r,i){var n=e;do n.z===null&&(n.z=jn(n.x,n.y,t,r,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==e);n.prevZ.nextZ=null,n.prevZ=null,sc(n)}function sc(e){var t,r,i,n,a,o,s,l,h=1;do{for(r=e,e=null,a=null,o=0;r;){for(o++,i=r,s=0,t=0;t<h&&(s++,i=i.nextZ,!!i);t++);for(l=h;s>0||l>0&&i;)s!==0&&(l===0||!i||r.z<=i.z)?(n=r,r=r.nextZ,s--):(n=i,i=i.nextZ,l--),a?a.nextZ=n:e=n,n.prevZ=a,a=n;r=i}a.nextZ=null,h*=2}while(o>1);return e}function jn(e,t,r,i,n){return e=32767*(e-r)/n,t=32767*(t-i)/n,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function lc(e){var t=e,r=e;do t.x<r.x&&(r=t),t=t.next;while(t!==e);return r}function Zi(e,t,r,i,n,a,o,s){return(n-o)*(t-s)-(e-o)*(a-s)>=0&&(e-o)*(i-s)-(r-o)*(t-s)>=0&&(r-o)*(a-s)-(n-o)*(i-s)>=0}function hc(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!uc(e,t)&&li(e,t)&&li(t,e)&&fc(e,t)}function je(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function ar(e,t){return e.x===t.x&&e.y===t.y}function Gs(e,t,r,i){return ar(e,t)&&ar(r,i)||ar(e,i)&&ar(r,t)?!0:je(e,t,r)>0!=je(e,t,i)>0&&je(r,i,e)>0!=je(r,i,t)>0}function uc(e,t){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&Gs(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}function li(e,t){return je(e.prev,e,e.next)<0?je(e,t,e.next)>=0&&je(e,e.prev,t)>=0:je(e,t,e.prev)<0||je(e,e.next,t)<0}function fc(e,t){var r=e,i=!1,n=(e.x+t.x)/2,a=(e.y+t.y)/2;do r.y>a!=r.next.y>a&&r.next.y!==r.y&&n<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next;while(r!==e);return i}function Hs(e,t){var r=new Yn(e.i,e.x,e.y),i=new Yn(t.i,t.x,t.y),n=e.next,a=t.prev;return e.next=t,t.prev=e,r.next=n,n.prev=r,i.next=r,r.prev=i,a.next=i,i.prev=a,i}function xo(e,t,r,i){var n=new Yn(e,t,r);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function hi(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Yn(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}zs.deviation=function(e,t,r,i){var n=t&&t.length,a=n?t[0]*r:e.length,o=Math.abs(Jn(e,0,a,r));if(n)for(var s=0,l=t.length;s<l;s++){var h=t[s]*r,u=s<l-1?t[s+1]*r:e.length;o-=Math.abs(Jn(e,h,u,r))}var f=0;for(s=0;s<i.length;s+=3){var d=i[s]*r,c=i[s+1]*r,v=i[s+2]*r;f+=Math.abs((e[d]-e[v])*(e[c+1]-e[d+1])-(e[d]-e[c])*(e[v+1]-e[d+1]))}return o===0&&f===0?0:Math.abs((f-o)/o)};function Jn(e,t,r,i){for(var n=0,a=t,o=r-i;a<r;a+=i)n+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return n}function In(e,t,r){var i=e[t];e[t]=e[r],e[r]=i}function ks(e,t,r,i,n){var a=r,o=e[t];In(e,t,i);for(var s=r;s<i;s++)n(e[s],o)<0&&(In(e,s,a),a++);return In(e,i,a),a}function Ki(e,t,r,i){if(r<i){var n=Math.floor((r+i)/2),a=ks(e,n,r,i,t);Ki(e,t,r,a-1),Ki(e,t,a+1,i)}}function Rr(){this._parts=[]}Rr.prototype.step=function(e,t,r){var i=e.length;if(r===0){this._parts=[],this._sorted=!1;var n=Math.floor(i/2);this._parts.push({pivot:n,left:0,right:i-1}),this._currentSortPartIdx=0}if(!this._sorted){var a=this._parts;if(a.length===0)return this._sorted=!0,!0;if(a.length<512){for(var o=0;o<a.length;o++)a[o].pivot=ks(e,a[o].pivot,a[o].left,a[o].right,t);for(var s=[],o=0;o<a.length;o++){var l=a[o].left,h=a[o].pivot-1;h>l&&s.push({pivot:Math.floor((h+l)/2),left:l,right:h});var l=a[o].pivot+1,h=a[o].right;h>l&&s.push({pivot:Math.floor((h+l)/2),left:l,right:h})}a=this._parts=s}else for(var o=0;o<Math.floor(a.length/10);o++){var u=a.length-1-this._currentSortPartIdx;if(Ki(e,t,a[u].left,a[u].right),this._currentSortPartIdx++,this._currentSortPartIdx===a.length)return this._sorted=!0,!0}return!1}};Rr.sort=Ki;var Sr=be.vec3,To=Sr.create(),Eo=Sr.create(),So=Sr.create();const pa={needsSortTriangles:function(){return this.indices&&this.sortTriangles},needsSortTrianglesProgressively:function(){return this.needsSortTriangles()&&this.triangleCount>=2e4},doSortTriangles:function(e,t){var r=this.indices;if(t===0){var i=this.attributes.position,e=e.array;(!this._triangleZList||this._triangleZList.length!==this.triangleCount)&&(this._triangleZList=new Float32Array(this.triangleCount),this._sortedTriangleIndices=new Uint32Array(this.triangleCount),this._indicesTmp=new r.constructor(r.length),this._triangleZListTmp=new Float32Array(this.triangleCount));for(var n=0,a,o=0;o<r.length;){i.get(r[o++],To),i.get(r[o++],Eo),i.get(r[o++],So);var s=Sr.sqrDist(To,e),l=Sr.sqrDist(Eo,e),h=Sr.sqrDist(So,e),u=Math.min(s,l);u=Math.min(u,h),o===3?(a=u,u=0):u=u-a,this._triangleZList[n++]=u}}for(var f=this._sortedTriangleIndices,o=0;o<f.length;o++)f[o]=o;if(this.triangleCount<2e4)t===0&&this._simpleSort(!0);else for(var o=0;o<3;o++)this._progressiveQuickSort(t*3+o);for(var d=this._indicesTmp,c=this._triangleZListTmp,v=this._triangleZList,o=0;o<this.triangleCount;o++){var p=f[o]*3,m=o*3;d[m++]=r[p++],d[m++]=r[p++],d[m]=r[p],c[o]=v[f[o]]}var g=this._indicesTmp;this._indicesTmp=this.indices,this.indices=g;var g=this._triangleZListTmp;this._triangleZListTmp=this._triangleZList,this._triangleZList=g,this.dirtyIndices()},_simpleSort:function(e){var t=this._triangleZList,r=this._sortedTriangleIndices;function i(n,a){return t[a]-t[n]}e?Array.prototype.sort.call(r,i):Rr.sort(r,i,0,r.length-1)},_progressiveQuickSort:function(e){var t=this._triangleZList,r=this._sortedTriangleIndices;this._quickSort=this._quickSort||new Rr,this._quickSort.step(r,function(i,n){return t[n]-t[i]},e)}};function cc(e){const t=e.getVisual("style");if(t){const r=e.getVisual("drawType");return t[r]}}function dc(e){return e.getVisual("style").opacity}function Fe(e,t){const r=e.getItemVisual(t,"style");if(r){const i=e.getVisual("drawType");return r[i]}}function Ue(e,t){const r=e.getItemVisual(t,"style");return r&&r.opacity}var Ws=1,qs=2;function Dt(e,t,r){this._labelsMesh=new ua,this._labelTextureSurface=new qi({width:512,height:512,devicePixelRatio:r.getDevicePixelRatio(),onupdate:function(){r.getZr().refresh()}}),this._api=r,this._labelsMesh.material.set("textureAtlas",this._labelTextureSurface.getTexture())}Dt.prototype.getLabelPosition=function(e,t,r){return[0,0,0]};Dt.prototype.getLabelDistance=function(e,t,r){return 0};Dt.prototype.getMesh=function(){return this._labelsMesh};Dt.prototype.updateData=function(e,t,r){t==null&&(t=0),r==null&&(r=e.count()),(!this._labelsVisibilitiesBits||this._labelsVisibilitiesBits.length!==r-t)&&(this._labelsVisibilitiesBits=new Uint8Array(r-t));for(var i=["label","show"],n=["emphasis","label","show"],a=t;a<r;a++){var o=e.getItemModel(a),s=o.get(i),l=o.get(n);l==null&&(l=s);var h=(s?Ws:0)|(l?qs:0);this._labelsVisibilitiesBits[a-t]=h}this._start=t,this._end=r,this._data=e};Dt.prototype.updateLabels=function(e){if(this._data){e=e||[];for(var t=e.length>0,r={},i=0;i<e.length;i++)r[e[i]]=!0;this._labelsMesh.geometry.convertToDynamicArray(!0),this._labelTextureSurface.clear();for(var n=["label"],a=["emphasis","label"],o=this._data.hostModel,s=this._data,l=o.getModel(n),h=o.getModel(a,l),u={left:"right",right:"left",top:"center",bottom:"center"},f={left:"middle",right:"middle",top:"bottom",bottom:"top"},d=this._start;d<this._end;d++){var c=!1;t&&r[d]&&(c=!0);var v=this._labelsVisibilitiesBits[d-this._start]&(c?qs:Ws);if(v){var p=s.getItemModel(d),m=p.getModel(c?a:n,c?h:l),g=m.get("distance")||0,T=m.get("position"),x=this._api.getDevicePixelRatio(),_=o.getFormattedLabel(d,c?"emphasis":"normal");if(_==null||_==="")return;var S=new zi({style:Vi(m,{text:_,fill:m.get("color")||Fe(s,d)||"#000",align:"left",verticalAlign:"top",opacity:Y.firstNotNull(m.get("opacity"),Ue(s,d),1)})}),A=S.getBoundingRect(),b=1.2;A.height*=b;var w=this._labelTextureSurface.add(S),L=u[T]||"center",I=f[T]||"bottom";this._labelsMesh.geometry.addSprite(this.getLabelPosition(d,T,g),[A.width*x,A.height*x],w,L,I,this.getLabelDistance(d,T,g)*x)}}this._labelsMesh.material.set("uvScale",this._labelTextureSurface.getCoordsScale()),this._labelTextureSurface.getZr().refreshImmediately(),this._labelsMesh.geometry.convertToTypedArray(),this._labelsMesh.geometry.dirty()}};Dt.prototype.dispose=function(){this._labelTextureSurface.dispose()};var et=be.vec3;y.Shader.import(ln);function Pr(e){this.rootNode=new y.Node,this._triangulationResults={},this._shadersMap=y.COMMON_SHADERS.filter(function(r){return r!=="shadow"}).reduce(function(r,i){return r[i]=y.createShader("ecgl."+i),r},{}),this._linesShader=y.createShader("ecgl.meshLines3D");var t={};y.COMMON_SHADERS.forEach(function(r){t[r]=new y.Material({shader:y.createShader("ecgl."+r)})}),this._groundMaterials=t,this._groundMesh=new y.Mesh({geometry:new y.PlaneGeometry({dynamic:!0}),castShadow:!1,renderNormal:!0,$ignorePicking:!0}),this._groundMesh.rotation.rotateX(-Math.PI/2),this._labelsBuilder=new Dt(512,512,e),this._labelsBuilder.getMesh().renderOrder=100,this._labelsBuilder.getMesh().material.depthTest=!1,this.rootNode.add(this._labelsBuilder.getMesh()),this._initMeshes(),this._api=e}Pr.prototype={constructor:Pr,extrudeY:!0,update:function(e,t,r,i,n){var a=e.getData();i==null&&(i=0),n==null&&(n=a.count()),this._startIndex=i,this._endIndex=n-1,this._triangulation(e,i,n);var o=this._getShader(e.get("shading"));this._prepareMesh(e,o,r,i,n),this.rootNode.updateWorldTransform(),this._updateRegionMesh(e,r,i,n);var s=e.coordinateSystem;s.type==="geo3D"&&this._updateGroundPlane(e,s,r);var l=this;this._labelsBuilder.updateData(a,i,n),this._labelsBuilder.getLabelPosition=function(h,u,f){var d=a.getName(h),c,v=f;if(s.type==="geo3D"){var p=s.getRegion(d);if(!p)return[NaN,NaN,NaN];c=p.getCenter();var m=s.dataToPoint([c[0],c[1],v]);return m}else var g=l._triangulationResults[h-l._startIndex],c=l.extrudeY?[(g.max[0]+g.min[0])/2,g.max[1]+v,(g.max[2]+g.min[2])/2]:[(g.max[0]+g.min[0])/2,(g.max[1]+g.min[1])/2,g.max[2]+v]},this._data=a,this._labelsBuilder.updateLabels(),this._updateDebugWireframe(e),this._lastHoverDataIndex=0},_initMeshes:function(){var e=this;function t(){var n=new y.Mesh({name:"Polygon",material:new y.Material({shader:e._shadersMap.lambert}),geometry:new y.Geometry({sortTriangles:!0,dynamic:!0}),culling:!1,ignorePicking:!0,renderNormal:!0});return Object.assign(n.geometry,pa),n}var r=t(),i=new y.Mesh({material:new y.Material({shader:this._linesShader}),castShadow:!1,ignorePicking:!0,$ignorePicking:!0,geometry:new qt({useNativeLine:!1})});this.rootNode.add(r),this.rootNode.add(i),r.material.define("both","VERTEX_COLOR"),r.material.define("fragment","DOUBLE_SIDED"),this._polygonMesh=r,this._linesMesh=i,this.rootNode.add(this._groundMesh)},_getShader:function(e){var t=this._shadersMap[e];return t||(t=this._shadersMap.lambert),t.__shading=e,t},_prepareMesh:function(e,t,r,i,n){for(var a=0,o=0,s=0,l=0,h=i;h<n;h++){var u=this._getRegionPolygonInfo(h),f=this._getRegionLinesInfo(h,e,this._linesMesh.geometry);a+=u.vertexCount,o+=u.triangleCount,s+=f.vertexCount,l+=f.triangleCount}var d=this._polygonMesh,c=d.geometry;["position","normal","texcoord0","color"].forEach(function(v){c.attributes[v].init(a)}),c.indices=a>65535?new Uint32Array(o*3):new Uint16Array(o*3),d.material.shader!==t&&d.material.attachShader(t,!0),y.setMaterialFromModel(t.__shading,d.material,e,r),s>0&&(this._linesMesh.geometry.resetOffset(),this._linesMesh.geometry.setVertexCount(s),this._linesMesh.geometry.setTriangleCount(l)),this._dataIndexOfVertex=new Uint32Array(a),this._vertexRangeOfDataIndex=new Uint32Array((n-i)*2)},_updateRegionMesh:function(e,t,r,i){for(var n=e.getData(),a=0,o=0,s=!1,A=this._polygonMesh,l=this._linesMesh,h=r;h<i;h++){var u=e.getRegionModel(h),f=u.getModel("itemStyle"),d=Y.firstNotNull(Fe(n,h),f.get("color"),"#fff"),c=Y.firstNotNull(Ue(n,h),f.get("opacity"),1),v=y.parseColor(d),p=y.parseColor(f.get("borderColor"));v[3]*=c,p[3]*=c;var m=v[3]<.99;A.material.set("color",[1,1,1,1]),s=s||m;for(var g=Y.firstNotNull(u.get("height",!0),e.get("regionHeight")),T=this._updatePolygonGeometry(e,A.geometry,h,g,a,o,v),x=a;x<T.vertexOffset;x++)this._dataIndexOfVertex[x]=h;this._vertexRangeOfDataIndex[(h-r)*2]=a,this._vertexRangeOfDataIndex[(h-r)*2+1]=T.vertexOffset,a=T.vertexOffset,o=T.triangleOffset;var _=f.get("borderWidth"),S=_>0;S&&(_*=t.getDevicePixelRatio(),this._updateLinesGeometry(l.geometry,e,h,g,_,e.coordinateSystem.transform)),l.invisible=!S,l.material.set({color:p})}var A=this._polygonMesh;A.material.transparent=s,A.material.depthMask=!s,A.geometry.updateBoundingBox(),A.frontFace=this.extrudeY?y.Mesh.CCW:y.Mesh.CW,A.material.get("normalMap")&&A.geometry.generateTangents(),A.seriesIndex=e.seriesIndex,A.on("mousemove",this._onmousemove,this),A.on("mouseout",this._onmouseout,this)},_updateDebugWireframe:function(e){var t=e.getModel("debug.wireframe");if(t.get("show")){var r=y.parseColor(t.get("lineStyle.color")||"rgba(0,0,0,0.5)"),i=Y.firstNotNull(t.get("lineStyle.width"),1),n=this._polygonMesh;n.geometry.generateBarycentric(),n.material.define("both","WIREFRAME_TRIANGLE"),n.material.set("wireframeLineColor",r),n.material.set("wireframeLineWidth",i)}},_onmousemove:function(e){var t=this._dataIndexOfVertex[e.triangle[0]];t==null&&(t=-1),t!==this._lastHoverDataIndex&&(this.downplay(this._lastHoverDataIndex),this.highlight(t),this._labelsBuilder.updateLabels([t])),this._lastHoverDataIndex=t,this._polygonMesh.dataIndex=t},_onmouseout:function(e){e.target&&(this.downplay(this._lastHoverDataIndex),this._lastHoverDataIndex=-1,this._polygonMesh.dataIndex=-1),this._labelsBuilder.updateLabels([])},_updateGroundPlane:function(e,t,r){var i=e.getModel("groundPlane",e);if(this._groundMesh.invisible=!i.get("show",!0),!this._groundMesh.invisible){var n=e.get("shading"),a=this._groundMaterials[n];a||(a=this._groundMaterials.lambert),y.setMaterialFromModel(n,a,i,r),a.get("normalMap")&&this._groundMesh.geometry.generateTangents(),this._groundMesh.material=a,this._groundMesh.material.set("color",y.parseColor(i.get("color"))),this._groundMesh.scale.set(t.size[0],t.size[2],1)}},_triangulation:function(e,t,r){this._triangulationResults=[];for(var i=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0],a=e.coordinateSystem,o=t;o<r;o++){for(var s=[],l=e.getRegionPolygonCoords(o),h=0;h<l.length;h++){var u=l[h].exterior,f=l[h].interiors,d=[],c=[];if(!(u.length<3)){for(var v=0,p=0;p<u.length;p++){var m=u[p];d[v++]=m[0],d[v++]=m[1]}for(var p=0;p<f.length;p++)if(!(f[p].length<3)){for(var g=d.length/2,T=0;T<f[p].length;T++){var m=f[p][T];d.push(m[0]),d.push(m[1])}c.push(g)}for(var x=zs(d,c),_=new Float64Array(d.length/2*3),S=[],A=[1/0,1/0,1/0],b=[-1/0,-1/0,-1/0],w=0,p=0;p<d.length;)et.set(S,d[p++],0,d[p++]),a&&a.transform&&et.transformMat4(S,S,a.transform),et.min(A,A,S),et.max(b,b,S),_[w++]=S[0],_[w++]=S[1],_[w++]=S[2];et.min(i,i,A),et.max(n,n,b),s.push({points:_,indices:x,min:A,max:b})}}this._triangulationResults.push(s)}this._geoBoundingBox=[i,n]},_getRegionPolygonInfo:function(e){for(var t=this._triangulationResults[e-this._startIndex],r=0,i=0,n=0;n<t.length;n++)r+=t[n].points.length/3,i+=t[n].indices.length/3;var a=r*2+r*4,o=i*2+r*2;return{vertexCount:a,triangleCount:o}},_updatePolygonGeometry:function(e,t,r,i,n,a,o){var s=e.get("projectUVOnGround"),l=t.attributes.position,h=t.attributes.normal,u=t.attributes.texcoord0,f=t.attributes.color,d=this._triangulationResults[r-this._startIndex],c=f.value&&o,v=t.indices,p=this.extrudeY?1:2,m=this.extrudeY?2:1,g=[this.rootNode.worldTransform.x.len(),this.rootNode.worldTransform.y.len(),this.rootNode.worldTransform.z.len()],T=et.mul([],this._geoBoundingBox[0],g),x=et.mul([],this._geoBoundingBox[1],g),_=Math.max(x[0]-T[0],x[2]-T[2]);function S(Ee,We,Ve){for(var Oe=Ee.points,Gr=Oe.length,Re=[],_t=[],qe=0;qe<Gr;qe+=3)Re[0]=Oe[qe],Re[p]=We,Re[m]=Oe[qe+2],_t[0]=(Oe[qe]*g[0]-T[0])/_,_t[1]=(Oe[qe+2]*g[m]-T[2])/_,l.set(n,Re),c&&f.set(n,o),u.set(n++,_t)}function A(Ee,We,Ve){var Oe=n;S(Ee,We);for(var Gr=Ee.indices.length,Re=0;Re<Gr;Re++)v[a*3+Re]=Ee.indices[Re]+Oe;a+=Ee.indices.length/3}for(var b=this.extrudeY?[0,1,0]:[0,0,1],w=et.negate([],b),L=0;L<d.length;L++){var I=n,M=d[L];A(M,0),A(M,i);for(var N=M.points.length/3,U=0;U<N;U++)h.set(I+U,w),h.set(I+U+N,b);for(var D=[0,3,1,1,3,2],z=[[],[],[],[]],H=[],W=[],V=[],ne=[],k=0,U=0;U<N;U++){for(var ue=(U+1)%N,ae=(M.points[ue*3]-M.points[U*3])*g[0],de=(M.points[ue*3+2]-M.points[U*3+2])*g[m],ve=Math.sqrt(ae*ae+de*de),ee=0;ee<4;ee++){var Me=ee===0||ee===3,_e=(Me?U:ue)*3;z[ee][0]=M.points[_e],z[ee][p]=ee>1?i:0,z[ee][m]=M.points[_e+2],l.set(n+ee,z[ee]),s?(ne[0]=(M.points[_e]*g[0]-T[0])/_,ne[1]=(M.points[_e+2]*g[m]-T[m])/_):(ne[0]=(Me?k:k+ve)/_,ne[1]=(z[ee][p]*g[p]-T[p])/_),u.set(n+ee,ne)}et.sub(H,z[1],z[0]),et.sub(W,z[3],z[0]),et.cross(V,H,W),et.normalize(V,V);for(var ee=0;ee<4;ee++)h.set(n+ee,V),c&&f.set(n+ee,o);for(var ee=0;ee<6;ee++)v[a*3+ee]=D[ee]+n;n+=4,a+=2,k+=ve}}return t.dirty(),{vertexOffset:n,triangleOffset:a}},_getRegionLinesInfo:function(e,t,r){var i=0,n=0,a=t.getRegionModel(e),o=a.getModel("itemStyle"),s=o.get("borderWidth");if(s>0){var l=t.getRegionPolygonCoords(e);l.forEach(function(h){var u=h.exterior,f=h.interiors;i+=r.getPolylineVertexCount(u),n+=r.getPolylineTriangleCount(u);for(var d=0;d<f.length;d++)i+=r.getPolylineVertexCount(f[d]),n+=r.getPolylineTriangleCount(f[d])},this)}return{vertexCount:i,triangleCount:n}},_updateLinesGeometry:function(e,t,r,i,n,a){function o(h){for(var u=new Float64Array(h.length*3),f=0,d=[],c=0;c<h.length;c++)d[0]=h[c][0],d[1]=i+.1,d[2]=h[c][1],a&&et.transformMat4(d,d,a),u[f++]=d[0],u[f++]=d[1],u[f++]=d[2];return u}var s=[1,1,1,1],l=t.getRegionPolygonCoords(r);l.forEach(function(h){var u=h.exterior,f=h.interiors;e.addPolyline(o(u),s,n);for(var d=0;d<f.length;d++)e.addPolyline(o(f[d]),s,n)})},highlight:function(e){var t=this._data;if(t){var r=t.getItemModel(e),i=r.getModel(["emphasis","itemStyle"]),n=i.get("color"),a=Y.firstNotNull(i.get("opacity"),Ue(t,e),1);if(n==null){var o=Fe(t,e);n=ra(o,-.4)}a==null&&(a=Ue(t,e));var s=y.parseColor(n);s[3]*=a,this._setColorOfDataIndex(t,e,s)}},downplay:function(e){var t=this._data;if(t){var r=t.getItemModel(e),i=Y.firstNotNull(Fe(t,e),r.get(["itemStyle","color"]),"#fff"),n=Y.firstNotNull(Ue(t,e),r.get(["itemStyle","opacity"]),1),a=y.parseColor(i);a[3]*=n,this._setColorOfDataIndex(t,e,a)}},dispose:function(){this._labelsBuilder.dispose()},_setColorOfDataIndex:function(e,t,r){if(!(t<this._startIndex&&t>this._endIndex)){t-=this._startIndex;for(var i=this._vertexRangeOfDataIndex[t*2];i<this._vertexRangeOfDataIndex[t*2+1];i++)this._polygonMesh.geometry.attributes.color.set(i,r);this._polygonMesh.geometry.dirty(),this._api.getZr().refresh()}}};const vc=ci.extend({type:"geo3D",__ecgl__:!0,init:function(e,t){this._geo3DBuilder=new Pr(t),this.groupGL=new y.Node,this._lightRoot=new y.Node,this._sceneHelper=new Ht(this._lightRoot),this._sceneHelper.initLight(this._lightRoot),this._control=new on({zr:t.getZr()}),this._control.init()},render:function(e,t,r){this.groupGL.add(this._geo3DBuilder.rootNode);var i=e.coordinateSystem;if(!(!i||!i.viewGL)){i.viewGL.add(this._lightRoot),e.get("show")?i.viewGL.add(this.groupGL):i.viewGL.remove(this.groupGL);var n=this._control;n.setViewGL(i.viewGL);var a=e.getModel("viewControl");n.setFromViewControlModel(a,0),this._sceneHelper.setScene(i.viewGL.scene),this._sceneHelper.updateLight(e),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._geo3DBuilder.update(e,t,r,0,e.getData().count());var o=i.viewGL.isLinearSpace()?"define":"undefine";this._geo3DBuilder.rootNode.traverse(function(s){s.material&&s.material[o]("fragment","SRGB_DECODE")}),n.off("update"),n.on("update",function(){r.dispatchAction({type:"geo3DChangeCamera",alpha:n.getAlpha(),beta:n.getBeta(),distance:n.getDistance(),center:n.getCenter(),from:this.uid,geo3DId:e.id})}),n.update()}},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r)},dispose:function(){this._control.dispose(),this._geo3DBuilder.dispose()}});var pc={Russia:[100,60],"United States":[-99,38],"United States of America":[-99,38]};function mc(e,t){if(e==="world"){var r=pc[t.name];if(r){var i=[r[0],r[1]];t.setCenter(i)}}}var gc=be.vec3,Er=be.mat4,_c=[wl,mc];function Qi(e,t,r,i,n){this.name=e,this.map=t,this.regionHeight=0,this.regions=[],this._nameCoordMap={},this.loadGeoJson(r,i,n),this.transform=Er.identity(new Float64Array(16)),this.invTransform=Er.identity(new Float64Array(16)),this.extrudeY=!0,this.altitudeAxis}Qi.prototype={constructor:Qi,type:"geo3D",dimensions:["lng","lat","alt"],containPoint:function(){},loadGeoJson:function(e,t,r){var i=Sa||Sa;try{this.regions=e?i(e):[]}catch(h){throw`Invalid geoJson format
`+h}t=t||{},r=r||{};for(var n=this.regions,a={},o=0;o<n.length;o++){var s=n[o].name;s=r[s]||s,n[o].name=s,a[s]=n[o],this.addGeoCoord(s,n[o].getCenter());var l=t[s];l&&n[o].transformTo(l.left,l.top,l.width,l.height)}this._regionsMap=a,this._geoRect=null,_c.forEach(function(h){h(this)},this)},getGeoBoundingRect:function(){if(this._geoRect)return this._geoRect;for(var e,t=this.regions,r=0;r<t.length;r++){var i=t[r].getBoundingRect();e=e||i.clone(),e.union(i)}return this._geoRect=e||new Al(0,0,0,0)},addGeoCoord:function(e,t){this._nameCoordMap[e]=t},getRegion:function(e){return this._regionsMap[e]},getRegionByCoord:function(e){for(var t=this.regions,r=0;r<t.length;r++)if(t[r].contain(e))return t[r]},setSize:function(e,t,r){this.size=[e,t,r];var i=this.getGeoBoundingRect(),n=e/i.width,a=-r/i.height,o=-e/2-i.x*n,s=r/2-i.y*a,l=this.extrudeY?[o,0,s]:[o,s,0],h=this.extrudeY?[n,1,a]:[n,a,1],u=this.transform;Er.identity(u),Er.translate(u,u,l),Er.scale(u,u,h),Er.invert(this.invTransform,u)},dataToPoint:function(e,t){t=t||[];var r=this.extrudeY?1:2,i=this.extrudeY?2:1,n=e[2];return isNaN(n)&&(n=0),t[0]=e[0],t[i]=e[1],this.altitudeAxis?t[r]=this.altitudeAxis.dataToCoord(n):t[r]=0,t[r]+=this.regionHeight,gc.transformMat4(t,t,this.transform),t},pointToData:function(e,t){}};function yc(e,t){var r=e.getBoxLayoutParams(),i=en(r,{width:t.getWidth(),height:t.getHeight()});i.y=t.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,t.getDevicePixelRatio());var n=this.getGeoBoundingRect(),a=n.width/n.height*(e.get("aspectScale")||.75),o=e.get("boxWidth"),s=e.get("boxDepth"),l=e.get("boxHeight");l==null&&(l=5),isNaN(o)&&isNaN(s)&&(o=100),isNaN(s)?s=o/a:isNaN(o)&&(o=s/a),this.setSize(o,l,s),this.regionHeight=e.get("regionHeight"),this.altitudeAxis&&this.altitudeAxis.setExtent(0,Math.max(l-this.regionHeight,0))}function xc(e,t){var r=[1/0,-1/0];if(e.eachSeries(function(n){if(n.coordinateSystem===this&&n.type!=="series.map3D"){var a=n.getData(),o=n.coordDimToDataDim("alt"),s=o&&o[0];if(s){var l=a.getDataExtent(s,!0);r[0]=Math.min(r[0],l[0]),r[1]=Math.max(r[1],l[1])}}},this),r&&isFinite(r[1]-r[0])){var i=ta(r,{type:"value",min:"dataMin",max:"dataMax"});this.altitudeAxis=new $i("altitude",i),this.resize(this.model,t)}}var Ao=0,Xs={dimensions:Qi.prototype.dimensions,create:function(e,t){var r=[];if(!Vn)throw new Error("geo3D component depends on geo component");function i(n,a){var o=Xs.createGeo3D(n);n.__viewGL=n.__viewGL||new he,o.viewGL=n.__viewGL,n.coordinateSystem=o,o.model=n,r.push(o),o.resize=yc,o.resize(n,t),o.update=xc}return e.eachComponent("geo3D",function(n,a){i(n)}),e.eachSeriesByType("map3D",function(n,a){var o=n.get("coordinateSystem");o==null&&(o="geo3D"),o==="geo3D"&&i(n)}),e.eachSeries(function(n){if(n.get("coordinateSystem")==="geo3D"){if(n.type==="series.map3D")return;var a=n.getReferringComponents("geo3D").models[0];if(a||(a=e.getComponent("geo3D")),!a)throw new Error('geo "'+Y.firstNotNull(n.get("geo3DIndex"),n.get("geo3DId"),0)+'" not found');n.coordinateSystem=a.coordinateSystem}}),r},createGeo3D:function(e){var t=e.get("map"),r;return typeof t=="string"?(r=t,t=Vn(t)):t&&t.features&&(t={geoJson:t}),r==null&&(r="GEO_ANONYMOUS_"+Ao++),new Qi(r+Ao++,r,t&&t.geoJson,t&&t.specialAreas,e.get("nameMap"))}};const Zs=Xs;function Ks(e){e.registerComponentModel(Yf),e.registerComponentView(vc),e.registerAction({type:"geo3DChangeCamera",event:"geo3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"geo3D",query:t},function(i){i.setView(t)})}),e.registerCoordinateSystem("geo3D",Zs)}Ze(Ks);function wo(e,t){e.id=e.id||e.name||t+""}var lr=Ir.extend({type:"globe",layoutMode:"box",coordinateSystem:null,init:function(){lr.superApply(this,"init",arguments),At(this.option.layers,function(e,t){le(e,this.defaultLayerOption),wo(e,t)},this)},mergeOption:function(e){var t=this.option.layers;this.option.layers=null,lr.superApply(this,"mergeOption",arguments);function r(o){return bl(o,function(s,l,h){return wo(l,h),s[l.id]=l,s},{})}if(t&&t.length){var i=r(e.layers),n=r(t);for(var a in i)n[a]?le(n[a],i[a],!0):t.push(e.layers[a]);this.option.layers=t}At(this.option.layers,function(o){le(o,this.defaultLayerOption)},this)},optionUpdated:function(){this.updateDisplacementHash()},defaultLayerOption:{show:!0,type:"overlay"},defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",baseColor:"#fff",baseTexture:"",heightTexture:"",displacementTexture:"",displacementScale:0,displacementQuality:"medium",globeRadius:100,globeOuterRadius:150,shading:"lambert",light:{main:{time:""}},atmosphere:{show:!1,offset:5,color:"#ffffff",glowPower:6,innerGlowPower:2},viewControl:{autoRotate:!0,panSensitivity:0,targetCoord:null},layers:[]},setDisplacementData:function(e,t,r){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=r},getDisplacementTexture:function(){return this.get("displacementTexture")||this.get("heightTexture")},getDisplacemenScale:function(){var e=this.getDisplacementTexture(),t=this.get("displacementScale");return(!e||e==="none")&&(t=0),t},hasDisplacement:function(){return this.getDisplacemenScale()>0},_displacementChanged:!0,_displacementScale:0,updateDisplacementHash:function(){var e=this.getDisplacementTexture(),t=this.getDisplacemenScale();this._displacementChanged=this._displacementTexture!==e||this._displacementScale!==t,this._displacementTexture=e,this._displacementScale=t},isDisplacementChanged:function(){return this._displacementChanged}});le(lr.prototype,nn);le(lr.prototype,Or);le(lr.prototype,Br);le(lr.prototype,Fr);const Tc=lr;var Qs=Math.PI,ft=Math.sin,Mt=Math.cos,js=Math.tan,Ys=Math.asin,Js=Math.atan2,hr=Qs/180,Ec=1e3*60*60*24,Sc=2440588,Ac=2451545;function wc(e){return e.valueOf()/Ec-.5+Sc}function bc(e){return wc(e)-Ac}var ji=hr*23.4397;function Cc(e,t){return Js(ft(e)*Mt(ji)-js(t)*ft(ji),Mt(e))}function Lc(e,t){return Ys(ft(t)*Mt(ji)+Mt(t)*ft(ji)*ft(e))}function Mc(e,t,r){return Js(ft(e),Mt(e)*ft(t)-js(r)*Mt(t))}function Rc(e,t,r){return Ys(ft(t)*ft(r)+Mt(t)*Mt(r)*Mt(e))}function Pc(e,t){return hr*(280.16+360.9856235*e)-t}function Dc(e){return hr*(357.5291+.98560028*e)}function Ic(e){var t=hr*(1.9148*ft(e)+.02*ft(2*e)+3e-4*ft(3*e)),r=hr*102.9372;return e+t+r+Qs}function Nc(e){var t=Dc(e),r=Ic(t);return{dec:Lc(r,0),ra:Cc(r,0)}}var $s={};$s.getPosition=function(e,t,r){var i=hr*-r,n=hr*t,a=bc(e),o=Nc(a),s=Pc(a,i)-o.ra;return{azimuth:Mc(s,n,o.dec),altitude:Rc(s,n,o.dec)}};const Oc=$s,Bc=`@export ecgl.atmosphere.vertex
attribute vec3 position: POSITION;
attribute vec3 normal : NORMAL;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 normalMatrix : WORLDINVERSETRANSPOSE;

varying vec3 v_Normal;

void main() {
 v_Normal = normalize((normalMatrix * vec4(normal, 0.0)).xyz);
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end


@export ecgl.atmosphere.fragment
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform float glowPower;
uniform vec3 glowColor;

varying vec3 v_Normal;

void main() {
 float intensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor = vec4(glowColor, intensity * intensity);
}
@end`;y.Shader.import(ds);y.Shader.import(Bc);const Uc=ci.extend({type:"globe",__ecgl__:!0,_displacementScale:0,init:function(e,t){this.groupGL=new y.Node,this._sphereGeometry=new y.SphereGeometry({widthSegments:200,heightSegments:100,dynamic:!0}),this._overlayGeometry=new y.SphereGeometry({widthSegments:80,heightSegments:40}),this._planeGeometry=new y.PlaneGeometry,this._earthMesh=new y.Mesh({renderNormal:!0}),this._atmosphereMesh=new y.Mesh,this._atmosphereGeometry=new y.SphereGeometry({widthSegments:80,heightSegments:40}),this._atmosphereMaterial=new y.Material({shader:new y.Shader(y.Shader.source("ecgl.atmosphere.vertex"),y.Shader.source("ecgl.atmosphere.fragment")),transparent:!0}),this._atmosphereMesh.geometry=this._atmosphereGeometry,this._atmosphereMesh.material=this._atmosphereMaterial,this._atmosphereMesh.frontFace=y.Mesh.CW,this._lightRoot=new y.Node,this._sceneHelper=new Ht,this._sceneHelper.initLight(this._lightRoot),this.groupGL.add(this._atmosphereMesh),this.groupGL.add(this._earthMesh),this._control=new on({zr:t.getZr()}),this._control.init(),this._layerMeshes={}},render:function(e,t,r){var i=e.coordinateSystem,n=e.get("shading");i.viewGL.add(this._lightRoot),e.get("show")?i.viewGL.add(this.groupGL):i.viewGL.remove(this.groupGL),this._sceneHelper.setScene(i.viewGL.scene),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling"));var a=this._earthMesh;a.geometry=this._sphereGeometry;var o="ecgl."+n;(!a.material||a.material.shader.name!==o)&&(a.material=y.createMaterial(o)),y.setMaterialFromModel(n,a.material,e,r),["roughnessMap","metalnessMap","detailMap","normalMap"].forEach(function(f){var d=a.material.get(f);d&&(d.flipY=!1)}),a.material.set("color",y.parseColor(e.get("baseColor")));var s=i.radius*.99;if(a.scale.set(s,s,s),e.get("atmosphere.show")){a.material.define("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!1,this._atmosphereMaterial.setUniforms({glowPower:e.get("atmosphere.glowPower")||6,glowColor:e.get("atmosphere.color")||"#ffffff"}),a.material.setUniforms({glowPower:e.get("atmosphere.innerGlowPower")||2,glowColor:e.get("atmosphere.color")||"#ffffff"});var l=e.get("atmosphere.offset")||5;this._atmosphereMesh.scale.set(s+l,s+l,s+l)}else a.material.undefine("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!0;var h=a.material.setTextureImage("diffuseMap",e.get("baseTexture"),r,{flipY:!1,anisotropic:8});h&&h.surface&&h.surface.attachToMesh(a);var u=a.material.setTextureImage("bumpMap",e.get("heightTexture"),r,{flipY:!1,anisotropic:8});u&&u.surface&&u.surface.attachToMesh(a),a.material[e.get("postEffect.enable")?"define":"undefine"]("fragment","SRGB_DECODE"),this._updateLight(e,r),this._displaceVertices(e,r),this._updateViewControl(e,r),this._updateLayers(e,r)},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r)},_updateLayers:function(e,t){var r=e.coordinateSystem,i=e.get("layers"),n=r.radius,a=[],o=[],s=[],l=[];At(i,function(c){var v=new Ji(c),p=v.get("type"),m=y.loadTexture(v.get("texture"),t,{flipY:!1,anisotropic:8});if(m.surface&&m.surface.attachToMesh(this._earthMesh),p==="blend"){var g=v.get("blendTo"),T=Y.firstNotNull(v.get("intensity"),1);g==="emission"?(s.push(m),l.push(T)):(a.push(m),o.push(T))}else{var x=v.get("id"),_=this._layerMeshes[x];_||(_=this._layerMeshes[x]=new y.Mesh({geometry:this._overlayGeometry,castShadow:!1,ignorePicking:!0}));var S=v.get("shading");S==="lambert"?(_.material=_.__lambertMaterial||new y.Material({autoUpdateTextureStatus:!1,shader:y.createShader("ecgl.lambert"),transparent:!0,depthMask:!1}),_.__lambertMaterial=_.material):(_.material=_.__colorMaterial||new y.Material({autoUpdateTextureStatus:!1,shader:y.createShader("ecgl.color"),transparent:!0,depthMask:!1}),_.__colorMaterial=_.material),_.material.enableTexture("diffuseMap");var A=v.get("distance"),b=n+(A??r.radius/100);_.scale.set(b,b,b),n=b;var w=this._blankTexture||(this._blankTexture=y.createBlankTexture("rgba(255, 255, 255, 0)"));_.material.set("diffuseMap",w),y.loadTexture(v.get("texture"),t,{flipY:!1,anisotropic:8},function(L){L.surface&&L.surface.attachToMesh(_),_.material.set("diffuseMap",L),t.getZr().refresh()}),v.get("show")?this.groupGL.add(_):this.groupGL.remove(_)}},this);var h=this._earthMesh.material;h.define("fragment","LAYER_DIFFUSEMAP_COUNT",a.length),h.define("fragment","LAYER_EMISSIVEMAP_COUNT",s.length),h.set("layerDiffuseMap",a),h.set("layerDiffuseIntensity",o),h.set("layerEmissiveMap",s),h.set("layerEmissionIntensity",l);var u=e.getModel("debug.wireframe");if(u.get("show")){h.define("both","WIREFRAME_TRIANGLE");var f=y.parseColor(u.get("lineStyle.color")||"rgba(0,0,0,0.5)"),d=Y.firstNotNull(u.get("lineStyle.width"),1);h.set("wireframeLineWidth",d),h.set("wireframeLineColor",f)}else h.undefine("both","WIREFRAME_TRIANGLE")},_updateViewControl:function(e,t){var r=e.coordinateSystem,i=e.getModel("viewControl");r.viewGL.camera;var n=this;function a(){return{type:"globeChangeCamera",alpha:o.getAlpha(),beta:o.getBeta(),distance:o.getDistance()-r.radius,center:o.getCenter(),from:n.uid,globeId:e.id}}var o=this._control;o.setViewGL(r.viewGL);var s=i.get("targetCoord"),l,h;s!=null&&(h=s[0]+90,l=s[1]),o.setFromViewControlModel(i,{baseDistance:r.radius,alpha:l,beta:h}),o.off("update"),o.on("update",function(){t.dispatchAction(a())})},_displaceVertices:function(e,t){var r=e.get("displacementQuality"),i=e.get("debug.wireframe.show"),n=e.coordinateSystem;if(!(!e.isDisplacementChanged()&&r===this._displacementQuality&&i===this._showDebugWireframe)){this._displacementQuality=r,this._showDebugWireframe=i;var a=this._sphereGeometry,o={low:100,medium:200,high:400,ultra:800}[r]||200,s=o/2;(a.widthSegments!==o||i)&&(a.widthSegments=o,a.heightSegments=s,a.build()),this._doDisplaceVertices(a,n),i&&a.generateBarycentric()}},_doDisplaceVertices:function(e,t){var r=e.attributes.position.value,i=e.attributes.texcoord0.value,n=e.__originalPosition;(!n||n.length!==r.length)&&(n=new Float32Array(r.length),n.set(r),e.__originalPosition=n);for(var a=t.displacementWidth,o=t.displacementHeight,s=t.displacementData,l=0;l<e.vertexCount;l++){var h=l*3,u=l*2,f=n[h+1],d=n[h+2],c=n[h+3],v=i[u++],p=i[u++],m=Math.round(v*(a-1)),g=Math.round(p*(o-1)),T=g*a+m,x=s?s[T]:0;r[h+1]=f+f*x,r[h+2]=d+d*x,r[h+3]=c+c*x}e.generateVertexNormals(),e.dirty(),e.updateBoundingBox()},_updateLight:function(e,t){var r=this._earthMesh;this._sceneHelper.updateLight(e);var i=this._sceneHelper.mainLight,n=e.get("light.main.time")||new Date,a=Oc.getPosition(Cl(n),0,0),o=Math.cos(a.altitude);i.position.y=-o*Math.cos(a.azimuth),i.position.x=Math.sin(a.altitude),i.position.z=o*Math.sin(a.azimuth),i.lookAt(r.getWorldPosition())},dispose:function(e,t){this.groupGL.removeAll(),this._control.dispose()}});var Fc=be.vec3;function Yi(e){this.radius=e,this.viewGL=null,this.altitudeAxis,this.displacementData=null,this.displacementWidth,this.displacementHeight}Yi.prototype={constructor:Yi,dimensions:["lng","lat","alt"],type:"globe",containPoint:function(){},setDisplacementData:function(e,t,r){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=r},_getDisplacementScale:function(e,t){var r=(e+180)/360*(this.displacementWidth-1),i=(90-t)/180*(this.displacementHeight-1),n=Math.round(r)+Math.round(i)*this.displacementWidth;return this.displacementData[n]},dataToPoint:function(e,t){var r=e[0],i=e[1],n=e[2]||0,a=this.radius;this.displacementData&&(a*=1+this._getDisplacementScale(r,i)),this.altitudeAxis&&(a+=this.altitudeAxis.dataToCoord(n)),r=r*Math.PI/180,i=i*Math.PI/180;var o=Math.cos(i)*a;return t=t||[],t[0]=-o*Math.cos(r+Math.PI),t[1]=Math.sin(i)*a,t[2]=o*Math.sin(r+Math.PI),t},pointToData:function(e,t){var r=e[0],i=e[1],n=e[2],a=Fc.len(e);r/=a,i/=a,n/=a;var o=Math.asin(i),s=Math.atan2(n,-r);s<0&&(s=Math.PI*2+s);var l=o*180/Math.PI,h=s*180/Math.PI-180;return t=t||[],t[0]=h,t[1]=l,t[2]=a-this.radius,this.altitudeAxis&&(t[2]=this.altitudeAxis.coordToData(t[2])),t}};function zc(e,t){var r=document.createElement("canvas"),i=r.getContext("2d"),n=e.width,a=e.height;r.width=n,r.height=a,i.drawImage(e,0,0,n,a);for(var o=i.getImageData(0,0,n,a).data,s=new Float32Array(o.length/4),l=0;l<o.length/4;l++){var h=o[l*4];s[l]=h/255*t}return{data:s,width:n,height:a}}function Vc(e,t){var r=e.getBoxLayoutParams(),i=en(r,{width:t.getWidth(),height:t.getHeight()});i.y=t.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,t.getDevicePixelRatio()),this.radius=e.get("globeRadius");var n=e.get("globeOuterRadius");this.altitudeAxis&&this.altitudeAxis.setExtent(0,n-this.radius)}function Gc(e,t){var r=[1/0,-1/0];if(e.eachSeries(function(n){if(n.coordinateSystem===this){var a=n.getData(),o=n.coordDimToDataDim("alt"),s=o&&o[0];if(s){var l=a.getDataExtent(s,!0);r[0]=Math.min(r[0],l[0]),r[1]=Math.max(r[1],l[1])}}},this),r&&isFinite(r[1]-r[0])){var i=ta(r,{type:"value",min:"dataMin",max:"dataMax"});this.altitudeAxis=new $i("altitude",i),this.resize(this.model,t)}}var Hc={dimensions:Yi.prototype.dimensions,create:function(e,t){var r=[];return e.eachComponent("globe",function(i){i.__viewGL=i.__viewGL||new he;var n=new Yi;n.viewGL=i.__viewGL,i.coordinateSystem=n,n.model=i,r.push(n),n.resize=Vc,n.resize(i,t),n.update=Gc}),e.eachSeries(function(i){if(i.get("coordinateSystem")==="globe"){var n=i.getReferringComponents("globe").models[0];if(n||(n=e.getComponent("globe")),!n)throw new Error('globe "'+Y.firstNotNull(i.get("globe3DIndex"),i.get("globe3DId"),0)+'" not found');var a=n.coordinateSystem;i.coordinateSystem=a}}),e.eachComponent("globe",function(i,n){var a=i.coordinateSystem,o=i.getDisplacementTexture(),s=i.getDisplacemenScale();if(i.isDisplacementChanged()){if(i.hasDisplacement()){var l=!0;y.loadTexture(o,t,function(h){var u=h.image,f=zc(u,s);i.setDisplacementData(f.data,f.width,f.height),l||t.dispatchAction({type:"globeUpdateDisplacment"})}),l=!1}else a.setDisplacementData(null,0,0);a.setDisplacementData(i.displacementData,i.displacementWidth,i.displacementHeight)}}),r}};const kc=Hc;function Wc(e){e.registerComponentModel(Tc),e.registerComponentView(Uc),e.registerCoordinateSystem("globe",kc),e.registerAction({type:"globeChangeCamera",event:"globecamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"globe",query:t},function(i){i.setView(t)})}),e.registerAction({type:"globeUpdateDisplacment",event:"globedisplacementupdated",update:"update"},function(t,r){})}Ze(Wc);var bo=["zoom","center","pitch","bearing"],ma=Ir.extend({type:"mapbox3D",layoutMode:"box",coordinateSystem:null,defaultOption:{zlevel:-10,style:"mapbox://styles/mapbox/light-v9",center:[0,0],zoom:0,pitch:0,bearing:0,light:{main:{alpha:20,beta:30}},altitudeScale:1,boxHeight:"auto"},getMapboxCameraOption:function(){var e=this;return bo.reduce(function(t,r){return t[r]=e.get(r),t},{})},setMapboxCameraOption:function(e){e!=null&&bo.forEach(function(t){e[t]!=null&&(this.option[t]=e[t])},this)},getMapbox:function(){return this._mapbox},setMapbox:function(e){this._mapbox=e}});le(ma.prototype,Or);le(ma.prototype,Br);const qc=ma;function Xt(e,t){if(this.id=e,this.zr=t,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute;left:0;right:0;top:0;bottom:0;",!mapboxgl)throw new Error("Mapbox GL library must be included. See https://www.mapbox.com/mapbox-gl-js/api/");this._mapbox=new mapboxgl.Map({container:this.dom}),this._initEvents()}Xt.prototype.setUnpainted=function(){};Xt.prototype.resize=function(){this._mapbox.resize()};Xt.prototype.getMapbox=function(){return this._mapbox};Xt.prototype.clear=function(){};Xt.prototype.refresh=function(){this._mapbox.resize()};var el=["mousedown","mouseup","click","dblclick","mousemove","mousewheel","wheel","touchstart","touchend","touchmove","touchcancel"];Xt.prototype._initEvents=function(){var e=this._mapbox.getCanvasContainer();this._handlers=this._handlers||{contextmenu:function(t){return t.preventDefault(),!1}},el.forEach(function(t){this._handlers[t]=function(r){var i={};for(var n in r)i[n]=r[n];i.bubbles=!1;var a=new r.constructor(r.type,i);e.dispatchEvent(a)},this.zr.dom.addEventListener(t,this._handlers[t])},this),this.zr.dom.addEventListener("contextmenu",this._handlers.contextmenu)};Xt.prototype.dispose=function(){el.forEach(function(e){this.zr.dom.removeEventListener(e,this._handlers[e])},this)};const tl=`
@export ecgl.displayShadow.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_WorldPosition;

varying vec3 v_Normal;

void main()
{
 @import ecgl.common.uv.main
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);

 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}

@end


@export ecgl.displayShadow.fragment

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform float roughness: 0.2;

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.ssaoMap.header

@import clay.plugin.compute_shadow_map

void main()
{
 float shadow = 1.0;

 @import ecgl.common.ssaoMap.main

#if defined(DIRECTIONAL_LIGHT_COUNT) && defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
 for (int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++) {
 shadow = min(shadow, shadowContribsDir[i] * 0.5 + 0.5);
 }
#endif

 shadow *= 0.5 + ao * 0.5;
 shadow = clamp(shadow, 0.0, 1.0);

 gl_FragColor = vec4(vec3(0.0), 1.0 - shadow);
}

@end`;y.Shader.import(tl);const Xc=ci.extend({type:"mapbox3D",__ecgl__:!0,init:function(e,t){var r=t.getZr();this._zrLayer=new Xt("mapbox3D",r),r.painter.insertLayer(-1e3,this._zrLayer),this._lightRoot=new y.Node,this._sceneHelper=new Ht(this._lightRoot),this._sceneHelper.initLight(this._lightRoot);var i=this._zrLayer.getMapbox(),n=this._dispatchInteractAction.bind(this,t,i);["zoom","rotate","drag","pitch","rotate","move"].forEach(function(a){i.on(a,n)}),this._groundMesh=new y.Mesh({geometry:new y.PlaneGeometry,material:new y.Material({shader:new y.Shader({vertex:y.Shader.source("ecgl.displayShadow.vertex"),fragment:y.Shader.source("ecgl.displayShadow.fragment")}),depthMask:!1}),renderOrder:-100,culling:!1,castShadow:!1,$ignorePicking:!0,renderNormal:!0})},render:function(e,t,r){var i=this._zrLayer.getMapbox(),n=e.get("style"),a=JSON.stringify(n);a!==this._oldStyleStr&&n&&i.setStyle(n),this._oldStyleStr=a,i.setCenter(e.get("center")),i.setZoom(e.get("zoom")),i.setPitch(e.get("pitch")),i.setBearing(e.get("bearing")),e.setMapbox(i);var o=e.coordinateSystem;o.viewGL.scene.add(this._lightRoot),o.viewGL.add(this._groundMesh),this._updateGroundMesh(),this._sceneHelper.setScene(o.viewGL.scene),this._sceneHelper.updateLight(e),o.viewGL.setPostEffect(e.getModel("postEffect"),r),o.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._mapbox3DModel=e},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r),e.coordinateSystem.viewGL.scene.traverse(function(a){a.material&&(a.material.define("fragment","NORMAL_UP_AXIS",2),a.material.define("fragment","NORMAL_FRONT_AXIS",1))})},updateCamera:function(e,t,r,i){e.coordinateSystem.setCameraOption(i),this._updateGroundMesh(),r.getZr().refresh()},_dispatchInteractAction:function(e,t,r){e.dispatchAction({type:"mapbox3DChangeCamera",pitch:t.getPitch(),zoom:t.getZoom(),center:t.getCenter().toArray(),bearing:t.getBearing(),mapbox3DId:this._mapbox3DModel&&this._mapbox3DModel.id})},_updateGroundMesh:function(){if(this._mapbox3DModel){var e=this._mapbox3DModel.coordinateSystem,t=e.dataToPoint(e.center);this._groundMesh.position.set(t[0],t[1],-.001);var r=new y.Plane(new y.Vector3(0,0,1),0),i=e.viewGL.camera.castRay(new y.Vector2(-1,-1)),n=e.viewGL.camera.castRay(new y.Vector2(1,1)),a=i.intersectPlane(r),o=n.intersectPlane(r),s=a.dist(o)/e.viewGL.rootNode.scale.x;this._groundMesh.scale.set(s,s,1)}},dispose:function(e,t){this._zrLayer&&this._zrLayer.dispose(),t.getZr().painter.delLayer(-1e3)}});var Bt=be.mat4,Kr=512,Nn=.6435011087932844,tt=Math.PI,yr=1/10;function Dr(){this.width=0,this.height=0,this.altitudeScale=1,this.boxHeight="auto",this.altitudeExtent,this.bearing=0,this.pitch=0,this.center=[0,0],this._origin,this.zoom=0,this._initialZoom,this.maxPitch=60,this.zoomOffset=0}Dr.prototype={constructor:Dr,dimensions:["lng","lat","alt"],containPoint:function(){},setCameraOption:function(e){this.bearing=e.bearing,this.pitch=e.pitch,this.center=e.center,this.zoom=e.zoom,this._origin||(this._origin=this.projectOnTileWithScale(this.center,Kr)),this._initialZoom==null&&(this._initialZoom=this.zoom),this.updateTransform()},updateTransform:function(){if(this.height){var e=.5/Math.tan(Nn/2)*this.height*yr,t=Math.max(Math.min(this.pitch,this.maxPitch),0)/180*Math.PI,r=Nn/2,i=Math.PI/2+t,n=Math.sin(r)*e/Math.sin(Math.PI-i-r),a=Math.cos(Math.PI/2-t)*n+e,o=a*1.1;this.pitch>50&&(o=1e3);var s=[];Bt.perspective(s,Nn,this.width/this.height,1,o),this.viewGL.camera.projectionMatrix.setArray(s),this.viewGL.camera.decomposeProjectionMatrix();var s=Bt.identity([]),l=this.dataToPoint(this.center);Bt.scale(s,s,[1,-1,1]),Bt.translate(s,s,[0,0,-e]),Bt.rotateX(s,s,t),Bt.rotateZ(s,s,-this.bearing/180*Math.PI),Bt.translate(s,s,[-l[0]*this.getScale()*yr,-l[1]*this.getScale()*yr,0]),this.viewGL.camera.viewMatrix.array=s;var h=[];Bt.invert(h,s),this.viewGL.camera.worldTransform.array=h,this.viewGL.camera.decomposeWorldTransform();var u=Kr*this.getScale(),f;if(this.altitudeExtent&&!isNaN(this.boxHeight)){var d=this.altitudeExtent[1]-this.altitudeExtent[0];f=this.boxHeight/d*this.getScale()/Math.pow(2,this._initialZoom-this.zoomOffset)}else f=u/(2*Math.PI*6378e3*Math.abs(Math.cos(this.center[1]*(Math.PI/180))))*this.altitudeScale*yr;this.viewGL.rootNode.scale.set(this.getScale()*yr,this.getScale()*yr,f)}},getScale:function(){return Math.pow(2,this.zoom-this.zoomOffset)},projectOnTile:function(e,t){return this.projectOnTileWithScale(e,this.getScale()*Kr,t)},projectOnTileWithScale:function(e,t,r){var i=e[0],n=e[1],a=i*tt/180,o=n*tt/180,s=t*(a+tt)/(2*tt),l=t*(tt-Math.log(Math.tan(tt/4+o*.5)))/(2*tt);return r=r||[],r[0]=s,r[1]=l,r},unprojectFromTile:function(e,t){return this.unprojectOnTileWithScale(e,this.getScale()*Kr,t)},unprojectOnTileWithScale:function(e,t,r){var i=e[0],n=e[1],a=i/t*(2*tt)-tt,o=2*(Math.atan(Math.exp(tt-n/t*(2*tt)))-tt/4);return r=r||[],r[0]=a*180/tt,r[1]=o*180/tt,r},dataToPoint:function(e,t){return t=this.projectOnTileWithScale(e,Kr,t),t[0]-=this._origin[0],t[1]-=this._origin[1],t[2]=isNaN(e[2])?0:e[2],isNaN(e[2])||(t[2]=e[2],this.altitudeExtent&&(t[2]-=this.altitudeExtent[0])),t}};function ui(){Dr.apply(this,arguments)}ui.prototype=new Dr;ui.prototype.constructor=ui;ui.prototype.type="mapbox3D";function rl(e,t,r){function i(a,o){var s=o.getWidth(),l=o.getHeight(),h=o.getDevicePixelRatio();this.viewGL.setViewport(0,0,s,l,h),this.width=s,this.height=l,this.altitudeScale=a.get("altitudeScale"),this.boxHeight=a.get("boxHeight")}function n(a,o){if(this.model.get("boxHeight")!=="auto"){var s=[1/0,-1/0];a.eachSeries(function(l){if(l.coordinateSystem===this){var h=l.getData(),u=l.coordDimToDataDim("alt")[0];if(u){var f=h.getDataExtent(u,!0);s[0]=Math.min(s[0],f[0]),s[1]=Math.max(s[1],f[1])}}},this),s&&isFinite(s[1]-s[0])&&(this.altitudeExtent=s)}}return{dimensions:t.prototype.dimensions,create:function(a,o){var s=[];return a.eachComponent(e,function(l){var h=l.__viewGL;h||(h=l.__viewGL=new he,h.setRootNode(new y.Node));var u=new t;u.viewGL=l.__viewGL,u.resize=i,u.resize(l,o),s.push(u),l.coordinateSystem=u,u.model=l,u.update=n}),a.eachSeries(function(l){if(l.get("coordinateSystem")===e){var h=l.getReferringComponents(e).models[0];if(h||(h=a.getComponent(e)),!h)throw new Error(e+' "'+Y.firstNotNull(l.get(e+"Index"),l.get(e+"Id"),0)+'" not found');l.coordinateSystem=h.coordinateSystem}}),r&&r(s,a,o),s}}}var Zc=rl("mapbox3D",ui,function(e){e.forEach(function(t){t.setCameraOption(t.model.getMapboxCameraOption())})});const Kc=Zc;function Qc(e){e.registerComponentModel(qc),e.registerComponentView(Xc),e.registerCoordinateSystem("mapbox3D",Kc),e.registerAction({type:"mapbox3DChangeCamera",event:"mapbox3dcamerachanged",update:"mapbox3D:updateCamera"},function(t,r){r.eachComponent({mainType:"mapbox3D",query:t},function(i){i.setMapboxCameraOption(t)})})}Ze(Qc);var Co=["zoom","center","pitch","bearing"],ga=Ir.extend({type:"maptalks3D",layoutMode:"box",coordinateSystem:null,defaultOption:{zlevel:-10,urlTemplate:"http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',center:[0,0],zoom:0,pitch:0,bearing:0,light:{main:{alpha:20,beta:30}},altitudeScale:1,boxHeight:"auto"},getMaptalksCameraOption:function(){var e=this;return Co.reduce(function(t,r){return t[r]=e.get(r),t},{})},setMaptalksCameraOption:function(e){e!=null&&Co.forEach(function(t){e[t]!=null&&(this.option[t]=e[t])},this)},getMaptalks:function(){return this._maptalks},setMaptalks:function(e){this._maptalks=e}});le(ga.prototype,Or);le(ga.prototype,Br);const jc=ga;function Zt(e,t,r,i){if(this.id=e,this.zr=t,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute;left:0;right:0;top:0;bottom:0;",!maptalks)throw new Error("Maptalks library must be included. See https://maptalks.org");this._maptalks=new maptalks.Map(this.dom,{center:r,zoom:i,doubleClickZoom:!1,fog:!1}),this._initEvents()}Zt.prototype.setUnpainted=function(){};Zt.prototype.resize=function(){this._maptalks.checkSize()};Zt.prototype.getMaptalks=function(){return this._maptalks};Zt.prototype.clear=function(){};Zt.prototype.refresh=function(){this._maptalks.checkSize()};var il=["mousedown","mouseup","click","dblclick","mousemove","mousewheel","DOMMouseScroll","touchstart","touchend","touchmove","touchcancel"];Zt.prototype._initEvents=function(){var e=this.dom;this._handlers=this._handlers||{contextmenu:function(t){return t.preventDefault(),!1}},il.forEach(function(t){this._handlers[t]=function(r){var i={};for(var n in r)i[n]=r[n];i.bubbles=!1;var a=new r.constructor(r.type,i);t==="mousewheel"||t==="DOMMouseScroll"?e.dispatchEvent(a):e.firstElementChild.dispatchEvent(a)},this.zr.dom.addEventListener(t,this._handlers[t])},this),this.zr.dom.addEventListener("contextmenu",this._handlers.contextmenu)};Zt.prototype.dispose=function(){il.forEach(function(e){this.zr.dom.removeEventListener(e,this._handlers[e])},this),this._maptalks.remove()};y.Shader.import(tl);const Yc=ci.extend({type:"maptalks3D",__ecgl__:!0,init:function(e,t){this._groundMesh=new y.Mesh({geometry:new y.PlaneGeometry,material:new y.Material({shader:new y.Shader({vertex:y.Shader.source("ecgl.displayShadow.vertex"),fragment:y.Shader.source("ecgl.displayShadow.fragment")}),depthMask:!1}),renderOrder:-100,culling:!1,castShadow:!1,$ignorePicking:!0,renderNormal:!0})},_initMaptalksLayer:function(e,t){var r=t.getZr();this._zrLayer=new Zt("maptalks3D",r,e.get("center"),e.get("zoom")),r.painter.insertLayer(-1e3,this._zrLayer),this._lightRoot=new y.Node,this._sceneHelper=new Ht(this._lightRoot),this._sceneHelper.initLight(this._lightRoot);var i=this._zrLayer.getMaptalks(),n=this._dispatchInteractAction.bind(this,t,i);["zoomend","zooming","zoomstart","dragrotating","pitch","pitchend","movestart","moving","moveend","resize","touchstart","touchmove","touchend","animating"].forEach(function(a){i.on(a,n)})},render:function(e,t,r){this._zrLayer||this._initMaptalksLayer(e,r);var i=this._zrLayer.getMaptalks(),n=e.get("urlTemplate"),a=i.getBaseLayer();n!==this._oldUrlTemplate&&(a?a.setOptions({urlTemplate:n,attribution:e.get("attribution")}):(a=new maptalks.TileLayer("maptalks-echarts-gl-baselayer",{urlTemplate:n,subdomains:["a","b","c"],attribution:e.get("attribution")}),i.setBaseLayer(a))),this._oldUrlTemplate=n,i.setCenter(e.get("center")),i.setZoom(e.get("zoom"),{animation:!1}),i.setPitch(e.get("pitch")),i.setBearing(e.get("bearing")),e.setMaptalks(i);var o=e.coordinateSystem;o.viewGL.scene.add(this._lightRoot),o.viewGL.add(this._groundMesh),this._updateGroundMesh(),this._sceneHelper.setScene(o.viewGL.scene),this._sceneHelper.updateLight(e),o.viewGL.setPostEffect(e.getModel("postEffect"),r),o.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._maptalks3DModel=e},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r),e.coordinateSystem.viewGL.scene.traverse(function(a){a.material&&(a.material.define("fragment","NORMAL_UP_AXIS",2),a.material.define("fragment","NORMAL_FRONT_AXIS",1))})},updateCamera:function(e,t,r,i){e.coordinateSystem.setCameraOption(i),this._updateGroundMesh(),r.getZr().refresh()},_dispatchInteractAction:function(e,t,r){e.dispatchAction({type:"maptalks3DChangeCamera",pitch:t.getPitch(),zoom:$c(t.getResolution())+1,center:t.getCenter().toArray(),bearing:t.getBearing(),maptalks3DId:this._maptalks3DModel&&this._maptalks3DModel.id})},_updateGroundMesh:function(){if(this._maptalks3DModel){var e=this._maptalks3DModel.coordinateSystem,t=e.dataToPoint(e.center);this._groundMesh.position.set(t[0],t[1],-.001);var r=new y.Plane(new y.Vector3(0,0,1),0),i=e.viewGL.camera.castRay(new y.Vector2(-1,-1)),n=e.viewGL.camera.castRay(new y.Vector2(1,1)),a=i.intersectPlane(r),o=n.intersectPlane(r),s=a.dist(o)/e.viewGL.rootNode.scale.x;this._groundMesh.scale.set(s,s,1)}},dispose:function(e,t){this._zrLayer&&this._zrLayer.dispose(),t.getZr().painter.delLayer(-1e3)}}),Jc=2*6378137*Math.PI/(256*Math.pow(2,20));function $c(e){return 19-Math.log(e/Jc)/Math.LN2}function fi(){Dr.apply(this,arguments),this.maxPitch=85,this.zoomOffset=1}fi.prototype=new Dr;fi.prototype.constructor=fi;fi.prototype.type="maptalks3D";var ed=rl("maptalks3D",fi,function(e){e.forEach(function(t){t.setCameraOption(t.model.getMaptalksCameraOption())})});const td=ed;function rd(e){e.registerComponentModel(jc),e.registerComponentView(Yc),e.registerCoordinateSystem("maptalks3D",td),e.registerAction({type:"maptalks3DChangeCamera",event:"maptalks3dcamerachanged",update:"maptalks3D:updateCamera"},function(t,r){r.eachComponent({mainType:"maptalks3D",query:t},function(i){i.setMaptalksCameraOption(t)})})}Ze(rd);var id=be.vec3,nd=ia.isDimensionStacked;function ad(e){var t=e[0],r=e[1];return!(t>0&&r>0||t<0&&r<0)}function od(e,t){var r=e.getData(),i=e.get("barSize");if(i==null){var n=t.size,a,o,s=t.getAxis("x"),l=t.getAxis("y");s.type==="category"?a=s.getBandWidth()*.7:a=Math.round(n[0]/Math.sqrt(r.count()))*.6,l.type==="category"?o=l.getBandWidth()*.7:o=Math.round(n[1]/Math.sqrt(r.count()))*.6,i=[a,o]}else St(i)||(i=[i,i]);var h=t.getAxis("z").scale.getExtent(),u=ad(h),f=["x","y","z"].map(function(v){return e.coordDimToDataDim(v)[0]}),d=nd(r,f[2]),c=d?r.getCalculationInfo("stackResultDimension"):f[2];r.each(f,function(v,p,m,g){var T=r.get(c,g),x=d?T-m:u?0:h[0],_=t.dataToPoint([v,p,x]),S=t.dataToPoint([v,p,T]),A=id.dist(_,S),b=[0,S[1]<_[1]?-1:1,0];Math.abs(A)===0&&(A=.1);var w=[i[0],A,i[1]];r.setItemLayout(g,[_,b,w])}),r.setLayout("orient",[1,0,0])}function _a(e,t,r){for(var i=e.getDataExtent(t),n=e.getDataExtent(r),a=i[1]-i[0]||i[0],o=n[1]-n[0]||n[0],s=50,l=new Uint8Array(s*s),h=0;h<e.count();h++){var u=e.get(t,h),f=e.get(r,h),d=Math.floor((u-i[0])/a*(s-1)),c=Math.floor((f-n[0])/o*(s-1)),v=c*s+d;l[v]=l[v]||1}for(var p=0,h=0;h<l.length;h++)l[h]&&p++;return p/l.length}var Lo=be.vec3,sd=ia.isDimensionStacked;function ld(e,t){var r=e.getData(),i=e.get("minHeight")||0,n=e.get("barSize"),a=["lng","lat","alt"].map(function(h){return e.coordDimToDataDim(h)[0]});if(n==null){var o=t.radius*Math.PI,s=_a(r,a[0],a[1]);n=[o/Math.sqrt(r.count()/s),o/Math.sqrt(r.count()/s)]}else St(n)||(n=[n,n]);var l=ya(r,a);r.each(a,function(h,u,f,d){var c=r.get(l.dimension,d),v=l.isStacked?c-f:t.altitudeAxis.scale.getExtent()[0],p=Math.max(t.altitudeAxis.dataToCoord(f),i),m=t.dataToPoint([h,u,v]),g=t.dataToPoint([h,u,c]),T=Lo.sub([],g,m);Lo.normalize(T,T);var x=[n[0],p,n[1]];r.setItemLayout(d,[m,T,x])}),r.setLayout("orient",C.UP.array)}function hd(e,t){var r=e.getData(),i=e.get("barSize"),n=e.get("minHeight")||0,a=["lng","lat","alt"].map(function(u){return e.coordDimToDataDim(u)[0]});if(i==null){var o=Math.min(t.size[0],t.size[2]),s=_a(r,a[0],a[1]);i=[o/Math.sqrt(r.count()/s),o/Math.sqrt(r.count()/s)]}else St(i)||(i=[i,i]);var l=[0,1,0],h=ya(r,a);r.each(a,function(u,f,d,c){var v=r.get(h.dimension,c),p=h.isStacked?v-d:t.altitudeAxis.scale.getExtent()[0],m=Math.max(t.altitudeAxis.dataToCoord(d),n),g=t.dataToPoint([u,f,p]),T=[i[0],m,i[1]];r.setItemLayout(c,[g,l,T])}),r.setLayout("orient",[1,0,0])}function ud(e,t){var r=e.getData(),i=e.coordDimToDataDim("lng")[0],n=e.coordDimToDataDim("lat")[0],a=e.coordDimToDataDim("alt")[0],o=e.get("barSize"),s=e.get("minHeight")||0;if(o==null){var l=r.getDataExtent(i),h=r.getDataExtent(n),u=t.dataToPoint([l[0],h[0]]),f=t.dataToPoint([l[1],h[1]]),d=Math.min(Math.abs(u[0]-f[0]),Math.abs(u[1]-f[1]))||1,c=_a(r,i,n);o=[d/Math.sqrt(r.count()/c),d/Math.sqrt(r.count()/c)]}else St(o)||(o=[o,o]),o[0]/=t.getScale()/16,o[1]/=t.getScale()/16;var v=[0,0,1],p=[i,n,a],m=ya(r,p);r.each(p,function(g,T,x,_){var S=r.get(m.dimension,_),A=m.isStacked?S-x:0,b=t.dataToPoint([g,T,A]),w=t.dataToPoint([g,T,S]),L=Math.max(w[2]-b[2],s),I=[o[0],L,o[1]];r.setItemLayout(_,[b,v,I])}),r.setLayout("orient",[1,0,0])}function ya(e,t){var r=sd(e,t[2]);return{dimension:r?e.getCalculationInfo("stackResultDimension"):t[2],isStacked:r}}function fd(e){e.registerLayout(function(t,r){t.eachSeriesByType("bar3D",function(i){var n=i.coordinateSystem,a=n&&n.type;a==="globe"?ld(i,n):a==="cartesian3D"?od(i,n):a==="geo3D"?hd(i,n):(a==="mapbox3D"||a==="maptalks3D")&&ud(i,n)})})}var Kt={};Kt.getFormattedLabel=function(e,t,r,i,n){r=r||"normal";var a=e.getData(i),o=a.getItemModel(t),s=e.getDataParams(t,i);n!=null&&s.value instanceof Array&&(s.value=s.value[n]);var l=o.get(r==="normal"?["label","formatter"]:["emphasis","label","formatter"]);l==null&&(l=o.get(["label","formatter"]));var h;return typeof l=="function"?(s.status=r,h=l(s)):typeof l=="string"&&(h=Ll(l,s)),h};Kt.normalizeToArray=function(e){return e instanceof Array?e:e==null?[]:[e]};function cd(e,t){var r=[];return At(e.dimensions,function(i){var n=e.getDimensionInfo(i),a=n.otherDims,o=a[t];o!=null&&o!==!1&&(r[o]=n.name)}),r}function gi(e,t,r){function i(f){var d=[],c=cd(n,"tooltip");c.length?At(c,function(p){v(n.get(p,t),p)}):At(f,v);function v(p,m){var g=n.getDimensionInfo(m);if(!(!g||g.otherDims.tooltip===!1)){var T=g.type,x="- "+(g.tooltipName||g.name)+": "+(T==="ordinal"?p+"":T==="time"?r?"":Pl("yyyy/MM/dd hh:mm:ss",p):Aa(p));x&&d.push(xr(x))}}return"<br/>"+d.join("<br/>")}var n=e.getData(),a=e.getRawValue(t),o=St(a)?i(a):xr(Aa(a)),s=n.getName(t),l=Fe(n,t);Ml(l)&&l.colorStops&&(l=(l.colorStops[0]||{}).color),l=l||"transparent";var h=Rl(l),u=e.name;return u==="\0-"&&(u=""),u=u?xr(u)+(r?": ":"<br/>"):"",r?h+u+o:u+h+(s?xr(s)+": "+o:o)}function hn(e,t,r){r=r||e.getSource();var i=t||Qo(e.get("coordinateSystem"))||["x","y","z"],n=di(r,{dimensionsDefine:r.dimensionsDefine||e.get("dimensions"),encodeDefine:r.encodeDefine||e.get("encode"),coordDimensions:i.map(function(s){var l=e.getReferringComponents(s+"Axis3D").models[0];return{type:l&&l.get("type")==="category"?"ordinal":"float",name:s}})});e.get("coordinateSystem")==="cartesian3D"&&n.forEach(function(s){if(i.indexOf(s.coordDim)>=0){var l=e.getReferringComponents(s.coordDim+"Axis3D").models[0];l&&l.get("type")==="category"&&(s.ordinalMeta=l.getOrdinalMeta())}});var a=ia.enableDataStack(e,n,{byIndex:!0,stackedCoordDimension:"z"}),o=new wt(n,e);return o.setCalculationInfo(a),o.initData(r),o}var nl=mt.extend({type:"series.bar3D",dependencies:["globe"],visualStyleAccessPathvisu:"itemStyle",getInitialData:function(e,t){return hn(this)},getFormattedLabel:function(e,t,r,i){var n=Kt.getFormattedLabel(this,e,t,r,i);return n==null&&(n=this.getData().get("z",e)),n},formatTooltip:function(e){return gi(this,e)},defaultOption:{coordinateSystem:"cartesian3D",globeIndex:0,grid3DIndex:0,zlevel:-10,bevelSize:0,bevelSmoothness:2,onGridPlane:"xy",shading:"color",minHeight:0,itemStyle:{opacity:1},label:{show:!1,distance:2,textStyle:{fontSize:14,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:3}},emphasis:{label:{show:!0}},animationDurationUpdate:500}});le(nl.prototype,Fr);const dd=nl;var xe=be.vec3,vd=be.mat3,xa=J.extend(function(){return{attributes:{position:new J.Attribute("position","float",3,"POSITION"),normal:new J.Attribute("normal","float",3,"NORMAL"),color:new J.Attribute("color","float",4,"COLOR"),prevPosition:new J.Attribute("prevPosition","float",3),prevNormal:new J.Attribute("prevNormal","float",3)},dynamic:!0,enableNormal:!1,bevelSize:1,bevelSegments:0,_dataIndices:null,_vertexOffset:0,_triangleOffset:0}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0},setBarCount:function(e){var t=this.enableNormal,r=this.getBarVertexCount()*e,i=this.getBarTriangleCount()*e;this.vertexCount!==r&&(this.attributes.position.init(r),t?this.attributes.normal.init(r):this.attributes.normal.value=null,this.attributes.color.init(r)),this.triangleCount!==i&&(this.indices=r>65535?new Uint32Array(i*3):new Uint16Array(i*3),this._dataIndices=new Uint32Array(r))},getBarVertexCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarVertexCount(e):this.enableNormal?24:8},getBarTriangleCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarTriangleCount(e):12},_getBevelBarVertexCount:function(e){return(e+1)*4*(e+1)*2},_getBevelBarTriangleCount:function(e){var t=e*4+3,r=e*2+1;return(t+1)*r*2+4},setColor:function(e,t){for(var r=this.getBarVertexCount(),i=r*e,n=r*(e+1),a=i;a<n;a++)this.attributes.color.set(a,t);this.dirtyAttribute("color")},getDataIndexOfVertex:function(e){return this._dataIndices?this._dataIndices[e]:null},addBar:function(){for(var e=xe.create,t=xe.scaleAndAdd,r=e(),i=e(),n=e(),a=e(),o=e(),s=e(),l=e(),h=[],u=[],f=0;f<8;f++)h[f]=e();for(var d=[[0,1,5,4],[2,3,7,6],[4,5,6,7],[3,2,1,0],[0,4,7,3],[1,2,6,5]],c=[0,1,2,0,2,3],v=[],f=0;f<d.length;f++)for(var p=d[f],m=0;m<2;m++){for(var g=[],T=0;T<3;T++)g.push(p[c[m*3+T]]);v.push(g)}return function(x,_,S,A,b,w){var L=this._vertexOffset;if(this.bevelSize>0&&this.bevelSegments>0)this._addBevelBar(x,_,S,A,this.bevelSize,this.bevelSegments,b);else{xe.copy(n,_),xe.normalize(n,n),xe.cross(a,S,n),xe.normalize(a,a),xe.cross(i,n,a),xe.normalize(a,a),xe.negate(o,i),xe.negate(s,n),xe.negate(l,a),t(h[0],x,i,A[0]/2),t(h[0],h[0],a,A[2]/2),t(h[1],x,i,A[0]/2),t(h[1],h[1],l,A[2]/2),t(h[2],x,o,A[0]/2),t(h[2],h[2],l,A[2]/2),t(h[3],x,o,A[0]/2),t(h[3],h[3],a,A[2]/2),t(r,x,n,A[1]),t(h[4],r,i,A[0]/2),t(h[4],h[4],a,A[2]/2),t(h[5],r,i,A[0]/2),t(h[5],h[5],l,A[2]/2),t(h[6],r,o,A[0]/2),t(h[6],h[6],l,A[2]/2),t(h[7],r,o,A[0]/2),t(h[7],h[7],a,A[2]/2);var I=this.attributes;if(this.enableNormal){u[0]=i,u[1]=o,u[2]=n,u[3]=s,u[4]=a,u[5]=l;for(var M=this._vertexOffset,N=0;N<d.length;N++){for(var U=this._triangleOffset*3,D=0;D<6;D++)this.indices[U++]=M+c[D];M+=4,this._triangleOffset+=2}for(var N=0;N<d.length;N++)for(var z=u[N],D=0;D<4;D++){var H=d[N][D];I.position.set(this._vertexOffset,h[H]),I.normal.set(this._vertexOffset,z),I.color.set(this._vertexOffset++,b)}}else{for(var N=0;N<v.length;N++){for(var U=this._triangleOffset*3,D=0;D<3;D++)this.indices[U+D]=v[N][D]+this._vertexOffset;this._triangleOffset++}for(var N=0;N<h.length;N++)I.position.set(this._vertexOffset,h[N]),I.color.set(this._vertexOffset++,b)}}for(var W=this._vertexOffset,N=L;N<W;N++)this._dataIndices[N]=w}}(),_addBevelBar:function(){var e=xe.create(),t=xe.create(),r=xe.create(),i=vd.create(),n=[],a=[1,-1,-1,1],o=[1,1,-1,-1],s=[2,0];return function(l,h,u,f,d,c,v){xe.copy(t,h),xe.normalize(t,t),xe.cross(r,u,t),xe.normalize(r,r),xe.cross(e,t,r),xe.normalize(r,r),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=t[0],i[4]=t[1],i[5]=t[2],i[6]=r[0],i[7]=r[1],i[8]=r[2],d=Math.min(f[0],f[2])/2*d;for(var p=0;p<3;p++)n[p]=Math.max(f[p]-d*2,0);for(var m=(f[0]-n[0])/2,g=(f[1]-n[1])/2,T=(f[2]-n[2])/2,x=[],_=[],S=this._vertexOffset,A=[],p=0;p<2;p++){A[p]=A[p]=[];for(var b=0;b<=c;b++)for(var w=0;w<4;w++){(b===0&&p===0||p===1&&b===c)&&A[p].push(S);for(var L=0;L<=c;L++){var I=L/c*Math.PI/2+Math.PI/2*w,M=b/c*Math.PI/2+Math.PI/2*p;_[0]=m*Math.cos(I)*Math.sin(M),_[1]=g*Math.cos(M),_[2]=T*Math.sin(I)*Math.sin(M),x[0]=_[0]+a[w]*n[0]/2,x[1]=_[1]+g+s[p]*n[1]/2,x[2]=_[2]+o[w]*n[2]/2,Math.abs(m-g)<1e-6&&Math.abs(g-T)<1e-6||(_[0]/=m*m,_[1]/=g*g,_[2]/=T*T),xe.normalize(_,_),xe.transformMat3(x,x,i),xe.transformMat3(_,_,i),xe.add(x,x,l),this.attributes.position.set(S,x),this.enableNormal&&this.attributes.normal.set(S,_),this.attributes.color.set(S,v),S++}}}for(var N=c*4+3,U=c*2+1,D=N+1,w=0;w<U;w++)for(var p=0;p<=N;p++){var z=w*D+p+this._vertexOffset,H=w*D+(p+1)%D+this._vertexOffset,W=(w+1)*D+(p+1)%D+this._vertexOffset,V=(w+1)*D+p+this._vertexOffset;this.setTriangleIndices(this._triangleOffset++,[W,z,H]),this.setTriangleIndices(this._triangleOffset++,[W,V,z])}this.setTriangleIndices(this._triangleOffset++,[A[0][0],A[0][2],A[0][1]]),this.setTriangleIndices(this._triangleOffset++,[A[0][0],A[0][3],A[0][2]]),this.setTriangleIndices(this._triangleOffset++,[A[1][0],A[1][1],A[1][2]]),this.setTriangleIndices(this._triangleOffset++,[A[1][0],A[1][2],A[1][3]]),this._vertexOffset=S}}()});kt(xa.prototype,pi);kt(xa.prototype,pa);var pd=be.vec3;const md=gt.extend({type:"bar3D",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this._api=t,this._labelsBuilder=new Dt(256,256,t);var r=this;this._labelsBuilder.getLabelPosition=function(i,n,a){if(r._data){var o=r._data.getItemLayout(i),s=o[0],l=o[1],h=o[2][1];return pd.scaleAndAdd([],s,l,a+h)}else return[0,0]},this._labelsBuilder.getMesh().renderOrder=100},render:function(e,t,r){var i=this._prevBarMesh;this._prevBarMesh=this._barMesh,this._barMesh=i,this._barMesh||(this._barMesh=new y.Mesh({geometry:new xa,shadowDepthMaterial:new y.Material({shader:new y.Shader(y.Shader.source("ecgl.sm.depth.vertex"),y.Shader.source("ecgl.sm.depth.fragment"))}),culling:e.coordinateSystem.type==="cartesian3D",renderOrder:10,renderNormal:!0})),this.groupGL.remove(this._prevBarMesh),this.groupGL.add(this._barMesh),this.groupGL.add(this._labelsBuilder.getMesh());var n=e.coordinateSystem;if(this._doRender(e,r),n&&n.viewGL){n.viewGL.add(this.groupGL);var a=n.viewGL.isLinearSpace()?"define":"undefine";this._barMesh.material[a]("fragment","SRGB_DECODE")}this._data=e.getData(),this._labelsBuilder.updateData(this._data),this._labelsBuilder.updateLabels(),this._updateAnimation(e)},_updateAnimation:function(e){y.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevBarMesh,this._barMesh,e)},_doRender:function(e,t){var r=e.getData(),i=e.get("shading"),n=i!=="color",a=this,o=this._barMesh,s="ecgl."+i;(!o.material||o.material.shader.name!==s)&&(o.material=y.createMaterial(s,["VERTEX_COLOR"])),y.setMaterialFromModel(i,o.material,e,t),o.geometry.enableNormal=n,o.geometry.resetOffset();var l=e.get("bevelSize"),h=e.get("bevelSmoothness");o.geometry.bevelSegments=h,o.geometry.bevelSize=l;var u=[],f=new Float32Array(r.count()*4),d=0,m=0,c=!1;r.each(function(T){if(r.hasValue(T)){var x=Fe(r,T),_=Ue(r,T);_==null&&(_=1),y.parseColor(x,u),u[3]*=_,f[d++]=u[0],f[d++]=u[1],f[d++]=u[2],f[d++]=u[3],u[3]>0&&(m++,u[3]<.99&&(c=!0))}}),o.geometry.setBarCount(m);var v=r.getLayout("orient"),p=this._barIndexOfData=new Int32Array(r.count()),m=0;r.each(function(T){if(!r.hasValue(T)){p[T]=-1;return}var x=r.getItemLayout(T),_=x[0],S=x[1],A=x[2],b=T*4;u[0]=f[b++],u[1]=f[b++],u[2]=f[b++],u[3]=f[b++],u[3]>0&&(a._barMesh.geometry.addBar(_,S,v,A,u,T),p[T]=m++)}),o.geometry.dirty(),o.geometry.updateBoundingBox();var g=o.material;g.transparent=c,g.depthMask=!c,o.geometry.sortTriangles=c,this._initHandler(e,t)},_initHandler:function(e,t){var r=e.getData(),i=this._barMesh,n=e.coordinateSystem.type==="cartesian3D";i.seriesIndex=e.seriesIndex;var a=-1;i.off("mousemove"),i.off("mouseout"),i.on("mousemove",function(o){var s=i.geometry.getDataIndexOfVertex(o.triangle[0]);s!==a&&(this._downplay(a),this._highlight(s),this._labelsBuilder.updateLabels([s]),n&&t.dispatchAction({type:"grid3DShowAxisPointer",value:[r.get("x",s),r.get("y",s),r.get("z",s,!0)]})),a=s,i.dataIndex=s},this),i.on("mouseout",function(o){this._downplay(a),this._labelsBuilder.updateLabels(),a=-1,i.dataIndex=-1,n&&t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_highlight:function(e){var t=this._data;if(t){var r=this._barIndexOfData[e];if(!(r<0)){var i=t.getItemModel(e),n=i.getModel("emphasis.itemStyle"),a=n.get("color"),o=n.get("opacity");if(a==null){var s=Fe(t,e);a=ra(s,-.4)}o==null&&(o=Ue(t,e));var l=y.parseColor(a);l[3]*=o,this._barMesh.geometry.setColor(r,l),this._api.getZr().refresh()}}},_downplay:function(e){var t=this._data;if(t){var r=this._barIndexOfData[e];if(!(r<0)){var i=Fe(t,e),n=Ue(t,e),a=y.parseColor(i);a[3]*=n,this._barMesh.geometry.setColor(r,a),this._api.getZr().refresh()}}},highlight:function(e,t,r,i){this._toggleStatus("highlight",e,t,r,i)},downplay:function(e,t,r,i){this._toggleStatus("downplay",e,t,r,i)},_toggleStatus:function(e,t,r,i,n){var a=t.getData(),o=Y.queryDataIndex(a,n),s=this;o!=null?At(Kt.normalizeToArray(o),function(l){e==="highlight"?this._highlight(l):this._downplay(l)},this):a.each(function(l){e==="highlight"?s._highlight(l):s._downplay(l)})},remove:function(){this.groupGL.removeAll()},dispose:function(){this._labelsBuilder.dispose(),this.groupGL.removeAll()}});function gd(e){e.registerChartView(md),e.registerSeriesModel(dd),fd(e),e.registerProcessor(function(t,r){t.eachSeriesByType("bar3d",function(i){var n=i.getData();n.filterSelf(function(a){return n.hasValue(a)})})})}Ze(gd);var _d=mt.extend({type:"series.line3D",dependencies:["grid3D"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",getInitialData:function(e,t){return hn(this)},formatTooltip:function(e){return gi(this,e)},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,grid3DIndex:0,lineStyle:{width:2},animationDurationUpdate:500}});const yd=_d;var xd=be.vec3;y.Shader.import(ln);const Td=gt.extend({type:"line3D",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this._api=t},render:function(e,t,r){var i=this._prevLine3DMesh;this._prevLine3DMesh=this._line3DMesh,this._line3DMesh=i,this._line3DMesh||(this._line3DMesh=new y.Mesh({geometry:new qt({useNativeLine:!1,sortTriangles:!0}),material:new y.Material({shader:y.createShader("ecgl.meshLines3D")}),renderOrder:10}),this._line3DMesh.geometry.pick=this._pick.bind(this)),this.groupGL.remove(this._prevLine3DMesh),this.groupGL.add(this._line3DMesh);var n=e.coordinateSystem;if(n&&n.viewGL){n.viewGL.add(this.groupGL);var a=n.viewGL.isLinearSpace()?"define":"undefine";this._line3DMesh.material[a]("fragment","SRGB_DECODE")}this._doRender(e,r),this._data=e.getData(),this._camera=n.viewGL.camera,this.updateCamera(),this._updateAnimation(e)},updateCamera:function(){this._updateNDCPosition()},_doRender:function(e,t){var r=e.getData(),i=this._line3DMesh;i.geometry.resetOffset();var n=r.getLayout("points"),a=[],o=new Float32Array(n.length/3*4),s=0,l=!1;r.each(function(f){var d=Fe(r,f),c=Ue(r,f);c==null&&(c=1),y.parseColor(d,a),a[3]*=c,o[s++]=a[0],o[s++]=a[1],o[s++]=a[2],o[s++]=a[3],a[3]<.99&&(l=!0)}),i.geometry.setVertexCount(i.geometry.getPolylineVertexCount(n)),i.geometry.setTriangleCount(i.geometry.getPolylineTriangleCount(n)),i.geometry.addPolyline(n,o,Y.firstNotNull(e.get("lineStyle.width"),1)),i.geometry.dirty(),i.geometry.updateBoundingBox();var h=i.material;h.transparent=l,h.depthMask=!l;var u=e.getModel("debug.wireframe");u.get("show")?(i.geometry.createAttribute("barycentric","float",3),i.geometry.generateBarycentric(),i.material.set("both","WIREFRAME_TRIANGLE"),i.material.set("wireframeLineColor",y.parseColor(u.get("lineStyle.color")||"rgba(0,0,0,0.5)")),i.material.set("wireframeLineWidth",Y.firstNotNull(u.get("lineStyle.width"),1))):i.material.set("both","WIREFRAME_TRIANGLE"),this._points=n,this._initHandler(e,t)},_updateAnimation:function(e){y.updateVertexAnimation([["prevPosition","position"],["prevPositionPrev","positionPrev"],["prevPositionNext","positionNext"]],this._prevLine3DMesh,this._line3DMesh,e)},_initHandler:function(e,t){var r=e.getData(),i=e.coordinateSystem,n=this._line3DMesh,a=-1;n.seriesIndex=e.seriesIndex,n.off("mousemove"),n.off("mouseout"),n.on("mousemove",function(o){var s=i.pointToData(o.point.array),l=r.indicesOfNearest("x",s[0])[0];l!==a&&(t.dispatchAction({type:"grid3DShowAxisPointer",value:[r.get("x",l),r.get("y",l),r.get("z",l)]}),n.dataIndex=l),a=l},this),n.on("mouseout",function(o){a=-1,n.dataIndex=-1,t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_updateNDCPosition:function(){var e=new F,t=this._camera;F.multiply(e,t.projectionMatrix,t.viewMatrix);var r=this._positionNDC,i=this._points,n=i.length/3;(!r||r.length/2!==n)&&(r=this._positionNDC=new Float32Array(n*2));for(var a=[],o=0;o<n;o++){var s=o*3,l=o*2;a[0]=i[s],a[1]=i[s+1],a[2]=i[s+2],a[3]=1,xd.transformMat4(a,a,e.array),r[l]=a[0]/a[3],r[l+1]=a[1]/a[3]}},_pick:function(e,t,r,i,n,a){var o=this._positionNDC,s=this._data.hostModel,l=s.get("lineStyle.width"),h=-1,u=r.viewport.width,f=r.viewport.height,d=u*.5,c=f*.5;e=(e+1)*d,t=(t+1)*c;for(var v=1;v<o.length/2;v++){var p=(o[(v-1)*2]+1)*d,m=(o[(v-1)*2+1]+1)*c,g=(o[v*2]+1)*d,T=(o[v*2+1]+1)*c;if(Dl(p,m,g,T,l,e,t)){var x=(p-e)*(p-e)+(m-t)*(m-t),_=(g-e)*(g-e)+(T-t)*(T-t);h=x<_?v-1:v}}if(h>=0){var S=h*3,A=new C(this._points[S],this._points[S+1],this._points[S+2]);a.push({dataIndex:h,point:A,pointWorld:A.clone(),target:this._line3DMesh,distance:this._camera.getWorldPosition().dist(A)})}},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function Ed(e){e.registerChartView(Td),e.registerSeriesModel(yd),e.registerLayout(function(t,r){t.eachSeriesByType("line3D",function(i){var n=i.getData(),a=i.coordinateSystem;if(a){if(a.type!=="cartesian3D")return;var o=new Float32Array(n.count()*3),s=[],l=[],h=a.dimensions,u=h.map(function(f){return i.coordDimToDataDim(f)[0]});a&&n.each(u,function(f,d,c,v){s[0]=f,s[1]=d,s[2]=c,a.dataToPoint(s,l),o[v*3]=l[0],o[v*3+1]=l[1],o[v*3+2]=l[2]}),n.setLayout("points",o)}})})}Ze(Ed);const Sd=mt.extend({type:"series.scatter3D",dependencies:["globe","grid3D","geo3D"],visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,getInitialData:function(e,t){return hn(this)},getFormattedLabel:function(e,t,r,i){var n=Kt.getFormattedLabel(this,e,t,r,i);if(n==null){var a=this.getData(),o=a.dimensions[a.dimensions.length-1];n=a.get(o,e)}return n},formatTooltip:function(e){return gi(this,e)},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,progressive:1e5,progressiveThreshold:1e5,grid3DIndex:0,globeIndex:0,symbol:"circle",symbolSize:10,blendMode:"source-over",label:{show:!1,position:"right",distance:5,textStyle:{fontSize:14,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:3}},itemStyle:{opacity:.8},emphasis:{label:{show:!0}},animationDurationUpdate:500}});function On(e,i,r){var i=i||document.createElement("canvas");i.width=e,i.height=e;var n=i.getContext("2d");return r&&r(n),i}function Ad(e,t,r,i){St(t)||(t=[t,t]);var n=Ta.getMarginByStyle(r,i),a=t[0]+n.left+n.right,o=t[1]+n.top+n.bottom,s=Il(e,0,0,t[0],t[1]),l=Math.max(a,o);s.x=n.left,s.y=n.top,a>o?s.y+=(l-o)/2:s.x+=(l-a)/2;var h=s.getBoundingRect();return s.x-=h.x,s.y-=h.y,s.setStyle(r),s.update(),s.__size=l,s}function wd(e,t,r){var i=t.width,n=t.height,a=e.canvas.width,o=e.canvas.height,s=i/a,l=n/o;function h(g){return g<128?1:-1}function u(g,T){var x=1/0;g=Math.floor(g*s),T=Math.floor(T*l);for(var _=T*i+g,S=t.data[_*4],A=h(S),b=Math.max(T-r,0);b<Math.min(T+r,n);b++)for(var w=Math.max(g-r,0);w<Math.min(g+r,i);w++){var _=b*i+w,L=t.data[_*4],I=h(L),M=w-g,N=b-T;if(A!==I){var U=M*M+N*N;U<x&&(x=U)}}return A*Math.sqrt(x)}for(var f=e.createImageData(a,o),d=0;d<o;d++)for(var c=0;c<a;c++){var v=u(c,d),p=v/r*.5+.5,m=(d*a+c)*4;f.data[m++]=(1-p)*255,f.data[m++]=(1-p)*255,f.data[m++]=(1-p)*255,f.data[m++]=255}return f}var Ta={getMarginByStyle:function(e){var t=e.minMargin||0,r=0;e.stroke&&e.stroke!=="none"&&(r=e.lineWidth==null?1:e.lineWidth);var i=e.shadowBlur||0,n=e.shadowOffsetX||0,a=e.shadowOffsetY||0,o={};return o.left=Math.max(r/2,-n+i,t),o.right=Math.max(r/2,n+i,t),o.top=Math.max(r/2,-a+i,t),o.bottom=Math.max(r/2,a+i,t),o},createSymbolSprite:function(e,t,r,i){var n=Ad(e,t,r),a=Ta.getMarginByStyle(r);return{image:On(n.__size,i,function(o){qo(o,n)}),margin:a}},createSDFFromCanvas:function(e,t,r,i){return On(t,i,function(n){var a=e.getContext("2d"),o=a.getImageData(0,0,e.width,e.height);n.putImageData(wd(n,o,r),0,0)})},createSimpleSprite:function(e,t){return On(e,t,function(r){var i=e/2;r.beginPath(),r.arc(i,i,60,0,Math.PI*2,!1),r.closePath();var n=r.createRadialGradient(i,i,0,i,i,i);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.5,"rgba(255, 255, 255, 0.5)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),r.fillStyle=n,r.fill()})}};const Mo=Ta;var Ro=be.vec3;const bd={needsSortVertices:function(){return this.sortVertices},needsSortVerticesProgressively:function(){return this.needsSortVertices()&&this.vertexCount>=2e4},doSortVertices:function(e,t){var r=this.indices,i=Ro.create();if(!r){r=this.indices=this.vertexCount>65535?new Uint32Array(this.vertexCount):new Uint16Array(this.vertexCount);for(var n=0;n<r.length;n++)r[n]=n}if(t===0){var a=this.attributes.position,e=e.array,o=0;(!this._zList||this._zList.length!==this.vertexCount)&&(this._zList=new Float32Array(this.vertexCount));for(var s,n=0;n<this.vertexCount;n++){a.get(n,i);var l=Ro.sqrDist(i,e);isNaN(l)&&(l=1e7,o++),n===0?(s=l,l=0):l=l-s,this._zList[n]=l}this._noneCount=o}if(this.vertexCount<2e4)t===0&&this._simpleSort(this._noneCount/this.vertexCount>.05);else for(var n=0;n<3;n++)this._progressiveQuickSort(t*3+n);this.dirtyIndices()},_simpleSort:function(e){var t=this._zList,r=this.indices;function i(n,a){return t[a]-t[n]}e?Array.prototype.sort.call(r,i):Rr.sort(r,i,0,r.length-1)},_progressiveQuickSort:function(e){var t=this._zList,r=this.indices;this._quickSort=this._quickSort||new Rr,this._quickSort.step(r,function(i,n){return t[n]-t[i]},e)}},Cd=`@export ecgl.sdfSprite.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform float elapsedTime : 0;

attribute vec3 position : POSITION;

#ifdef VERTEX_SIZE
attribute float size;
#else
uniform float u_Size;
#endif

#ifdef VERTEX_COLOR
attribute vec4 a_FillColor: COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute float prevSize;
uniform float percent : 1.0;
#endif


#ifdef POSITIONTEXTURE_ENABLED
uniform sampler2D positionTexture;
#endif

varying float v_Size;

void main()
{

#ifdef POSITIONTEXTURE_ENABLED
 gl_Position = worldViewProjection * vec4(texture2D(positionTexture, position.xy).xy, -10.0, 1.0);
#else

 #ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 #else
 vec3 pos = position;
 #endif
 gl_Position = worldViewProjection * vec4(pos, 1.0);
#endif

#ifdef VERTEX_SIZE
#ifdef VERTEX_ANIMATION
 v_Size = mix(prevSize, size, percent);
#else
 v_Size = size;
#endif
#else
 v_Size = u_Size;
#endif

#ifdef VERTEX_COLOR
 v_Color = a_FillColor;
 #endif

 gl_PointSize = v_Size;
}

@end

@export ecgl.sdfSprite.fragment

uniform vec4 color: [1, 1, 1, 1];
uniform vec4 strokeColor: [1, 1, 1, 1];
uniform float smoothing: 0.07;

uniform float lineWidth: 0.0;

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

varying float v_Size;

uniform sampler2D sprite;

@import clay.util.srgb

void main()
{
 gl_FragColor = color;

 vec4 _strokeColor = strokeColor;

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
 #endif

#ifdef SPRITE_ENABLED
 float d = texture2D(sprite, gl_PointCoord).r;
 gl_FragColor.a *= smoothstep(0.5 - smoothing, 0.5 + smoothing, d);

 if (lineWidth > 0.0) {
 float sLineWidth = lineWidth / 2.0;

 float outlineMaxValue0 = 0.5 + sLineWidth;
 float outlineMaxValue1 = 0.5 + sLineWidth + smoothing;
 float outlineMinValue0 = 0.5 - sLineWidth - smoothing;
 float outlineMinValue1 = 0.5 - sLineWidth;

 if (d <= outlineMaxValue1 && d >= outlineMinValue0) {
 float a = _strokeColor.a;
 if (d <= outlineMinValue1) {
 a = a * smoothstep(outlineMinValue0, outlineMinValue1, d);
 }
 else {
 a = a * smoothstep(outlineMaxValue1, outlineMaxValue0, d);
 }
 gl_FragColor.rgb = mix(gl_FragColor.rgb * gl_FragColor.a, _strokeColor.rgb, a);
 gl_FragColor.a = gl_FragColor.a * (1.0 - a) + a;
 }
 }
#endif

#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(gl_FragColor);
#endif
}
@end`;var Bn=be.vec4;y.Shader.import(Cd);var Ld=y.Mesh.extend(function(){var e=new y.Geometry({dynamic:!0,attributes:{color:new y.Geometry.Attribute("color","float",4,"COLOR"),position:new y.Geometry.Attribute("position","float",3,"POSITION"),size:new y.Geometry.Attribute("size","float",1),prevPosition:new y.Geometry.Attribute("prevPosition","float",3),prevSize:new y.Geometry.Attribute("prevSize","float",1)}});Object.assign(e,bd);var t=new y.Material({shader:y.createShader("ecgl.sdfSprite"),transparent:!0,depthMask:!1});t.enableTexture("sprite"),t.define("both","VERTEX_COLOR"),t.define("both","VERTEX_SIZE");var r=new y.Texture2D({image:document.createElement("canvas"),flipY:!1});return t.set("sprite",r),e.pick=this._pick.bind(this),{geometry:e,material:t,mode:y.Mesh.POINTS,sizeScale:1}},{_pick:function(e,t,r,i,n,a){var o=this._positionNDC;if(o)for(var s=r.viewport,l=2/s.width,h=2/s.height,u=this.geometry.vertexCount-1;u>=0;u--){var f;this.geometry.indices?f=this.geometry.indices[u]:f=u;var d=o[f*2],c=o[f*2+1],v=this.geometry.attributes.size.get(f)/this.sizeScale,p=v/2;if(e>d-p*l&&e<d+p*l&&t>c-p*h&&t<c+p*h){var m=new y.Vector3,g=new y.Vector3;this.geometry.attributes.position.get(f,m.array),y.Vector3.transformMat4(g,m,this.worldTransform),a.push({vertexIndex:f,point:m,pointWorld:g,target:this,distance:g.distance(i.getWorldPosition())})}}},updateNDCPosition:function(e,t,r){var i=this._positionNDC,n=this.geometry;(!i||i.length/2!==n.vertexCount)&&(i=this._positionNDC=new Float32Array(n.vertexCount*2));for(var a=Bn.create(),o=0;o<n.vertexCount;o++)n.attributes.position.get(o,a),a[3]=1,Bn.transformMat4(a,a,e.array),Bn.scale(a,a,1/a[3]),i[o*2]=a[0],i[o*2+1]=a[1]}}),Po=20,Do=-10;function Md(e,t){return e&&t&&e[0]===t[0]&&e[1]===t[1]}function ur(e,t){this.rootNode=new y.Node,this.is2D=e,this._labelsBuilder=new Dt(256,256,t),this._labelsBuilder.getMesh().renderOrder=100,this.rootNode.add(this._labelsBuilder.getMesh()),this._api=t,this._spriteImageCanvas=document.createElement("canvas"),this._startDataIndex=0,this._endDataIndex=0,this._sizeScale=1}ur.prototype={constructor:ur,highlightOnMouseover:!0,update:function(e,t,r,i,n){var a=this._prevMesh;this._prevMesh=this._mesh,this._mesh=a;var o=e.getData();if(i==null&&(i=0),n==null&&(n=o.count()),this._startDataIndex=i,this._endDataIndex=n-1,!this._mesh){var s=this._prevMesh&&this._prevMesh.material;this._mesh=new Ld({renderOrder:10,frustumCulling:!1}),s&&(this._mesh.material=s)}var s=this._mesh.material,l=this._mesh.geometry,h=l.attributes;this.rootNode.remove(this._prevMesh),this.rootNode.add(this._mesh),this._setPositionTextureToMesh(this._mesh,this._positionTexture);var u=this._getSymbolInfo(e,i,n),f=r.getDevicePixelRatio(),d=e.getModel("itemStyle").getItemStyle(),c=e.get("large"),v=1;u.maxSize>2?(v=this._updateSymbolSprite(e,d,u,f),s.enableTexture("sprite")):s.disableTexture("sprite"),h.position.init(n-i);var p=[];if(c){s.undefine("VERTEX_SIZE"),s.undefine("VERTEX_COLOR");var m=cc(o),g=dc(o);y.parseColor(m,p),p[3]*=g,s.set({color:p,u_Size:u.maxSize*this._sizeScale})}else s.set({color:[1,1,1,1]}),s.define("VERTEX_SIZE"),s.define("VERTEX_COLOR"),h.size.init(n-i),h.color.init(n-i),this._originalOpacity=new Float32Array(n-i);for(var T=o.getLayout("points"),x=h.position.value,_=0;_<n-i;_++){var S=_*3,A=_*2;if(this.is2D?(x[S]=T[A],x[S+1]=T[A+1],x[S+2]=Do):(x[S]=T[S],x[S+1]=T[S+1],x[S+2]=T[S+2]),!c){var m=Fe(o,_),g=Ue(o,_);y.parseColor(m,p),p[3]*=g,h.color.set(_,p),p[3]<.99;var b=o.getItemVisual(_,"symbolSize");b=b instanceof Array?Math.max(b[0],b[1]):b,isNaN(b)&&(b=0),h.size.value[_]=b*v*this._sizeScale,this._originalOpacity[_]=p[3]}}this._mesh.sizeScale=v,l.updateBoundingBox(),l.dirty(),this._updateMaterial(e,d);var w=e.coordinateSystem;if(w&&w.viewGL){var L=w.viewGL.isLinearSpace()?"define":"undefine";s[L]("fragment","SRGB_DECODE")}c||this._updateLabelBuilder(e,i,n),this._updateHandler(e,t,r),this._updateAnimation(e),this._api=r},getPointsMesh:function(){return this._mesh},updateLabels:function(e){this._labelsBuilder.updateLabels(e)},hideLabels:function(){this.rootNode.remove(this._labelsBuilder.getMesh())},showLabels:function(){this.rootNode.add(this._labelsBuilder.getMesh())},dispose:function(){this._labelsBuilder.dispose()},_updateSymbolSprite:function(e,t,r,i){r.maxSize=Math.min(r.maxSize*2,200);var n=[];return r.aspect>1?(n[0]=r.maxSize,n[1]=r.maxSize/r.aspect):(n[1]=r.maxSize,n[0]=r.maxSize*r.aspect),n[0]=n[0]||1,n[1]=n[1]||1,(this._symbolType!==r.type||!Md(this._symbolSize,n)||this._lineWidth!==t.lineWidth)&&(Mo.createSymbolSprite(r.type,n,{fill:"#fff",lineWidth:t.lineWidth,stroke:"transparent",shadowColor:"transparent",minMargin:Math.min(n[0]/2,10)},this._spriteImageCanvas),Mo.createSDFFromCanvas(this._spriteImageCanvas,Math.min(this._spriteImageCanvas.width,32),Po,this._mesh.material.get("sprite").image),this._symbolType=r.type,this._symbolSize=n,this._lineWidth=t.lineWidth),this._spriteImageCanvas.width/r.maxSize*i},_updateMaterial:function(e,t){var r=e.get("blendMode")==="lighter"?y.additiveBlend:null,i=this._mesh.material;i.blend=r,i.set("lineWidth",t.lineWidth/Po);var n=y.parseColor(t.stroke);i.set("strokeColor",n),i.transparent=!0,i.depthMask=!1,i.depthTest=!this.is2D,i.sortVertices=!this.is2D},_updateLabelBuilder:function(e,o,r){var i=e.getData(),n=this._mesh.geometry,a=n.attributes.position.value,o=this._startDataIndex,s=this._mesh.sizeScale;this._labelsBuilder.updateData(i,o,r),this._labelsBuilder.getLabelPosition=function(l,h,u){var f=(l-o)*3;return[a[f],a[f+1],a[f+2]]},this._labelsBuilder.getLabelDistance=function(l,h,u){var f=n.attributes.size.get(l-o)/s;return f/2+u},this._labelsBuilder.updateLabels()},_updateAnimation:function(e){y.updateVertexAnimation([["prevPosition","position"],["prevSize","size"]],this._prevMesh,this._mesh,e)},_updateHandler:function(e,t,r){var i=e.getData(),n=this._mesh,a=this,o=-1,s=e.coordinateSystem&&e.coordinateSystem.type==="cartesian3D",l;s&&(l=e.coordinateSystem.model),n.seriesIndex=e.seriesIndex,n.off("mousemove"),n.off("mouseout"),n.on("mousemove",function(h){var u=h.vertexIndex+a._startDataIndex;u!==o&&(this.highlightOnMouseover&&(this.downplay(i,o),this.highlight(i,u),this._labelsBuilder.updateLabels([u])),s&&r.dispatchAction({type:"grid3DShowAxisPointer",value:[i.get(e.coordDimToDataDim("x")[0],u),i.get(e.coordDimToDataDim("y")[0],u),i.get(e.coordDimToDataDim("z")[0],u)],grid3DIndex:l.componentIndex})),n.dataIndex=u,o=u},this),n.on("mouseout",function(h){var u=h.vertexIndex+a._startDataIndex;this.highlightOnMouseover&&(this.downplay(i,u),this._labelsBuilder.updateLabels()),o=-1,n.dataIndex=-1,s&&r.dispatchAction({type:"grid3DHideAxisPointer",grid3DIndex:l.componentIndex})},this)},updateLayout:function(e,t,r){var i=e.getData();if(this._mesh){var n=this._mesh.geometry.attributes.position.value,a=i.getLayout("points");if(this.is2D)for(var o=0;o<a.length/2;o++){var s=o*3,l=o*2;n[s]=a[l],n[s+1]=a[l+1],n[s+2]=Do}else for(var o=0;o<a.length;o++)n[o]=a[o];this._mesh.geometry.dirty(),r.getZr().refresh()}},updateView:function(e){if(this._mesh){var t=new F;F.mul(t,e.viewMatrix,this._mesh.worldTransform),F.mul(t,e.projectionMatrix,t),this._mesh.updateNDCPosition(t,this.is2D,this._api)}},highlight:function(e,t){if(!(t>this._endDataIndex||t<this._startDataIndex)){var r=e.getItemModel(t),i=r.getModel("emphasis.itemStyle"),n=i.get("color"),a=i.get("opacity");if(n==null){var o=Fe(e,t);n=ra(o,-.4)}a==null&&(a=Ue(e,t));var s=y.parseColor(n);s[3]*=a,this._mesh.geometry.attributes.color.set(t-this._startDataIndex,s),this._mesh.geometry.dirtyAttribute("color"),this._api.getZr().refresh()}},downplay:function(e,t){if(!(t>this._endDataIndex||t<this._startDataIndex)){var r=Fe(e,t),i=Ue(e,t),n=y.parseColor(r);n[3]*=i,this._mesh.geometry.attributes.color.set(t-this._startDataIndex,n),this._mesh.geometry.dirtyAttribute("color"),this._api.getZr().refresh()}},fadeOutAll:function(e){if(this._originalOpacity){for(var t=this._mesh.geometry,r=0;r<t.vertexCount;r++){var i=this._originalOpacity[r]*e;t.attributes.color.value[r*4+3]=i}t.dirtyAttribute("color"),this._api.getZr().refresh()}},fadeInAll:function(){this.fadeOutAll(1)},setPositionTexture:function(e){this._mesh&&this._setPositionTextureToMesh(this._mesh,e),this._positionTexture=e},removePositionTexture:function(){this._positionTexture=null,this._mesh&&this._setPositionTextureToMesh(this._mesh,null)},setSizeScale:function(e){if(e!==this._sizeScale){if(this._mesh){var t=this._mesh.material.get("u_Size");this._mesh.material.set("u_Size",t/this._sizeScale*e);var r=this._mesh.geometry.attributes;if(r.size.value)for(var i=0;i<r.size.value.length;i++)r.size.value[i]=r.size.value[i]/this._sizeScale*e}this._sizeScale=e}},_setPositionTextureToMesh:function(e,t){t&&e.material.set("positionTexture",t),e.material[t?"enableTexture":"disableTexture"]("positionTexture")},_getSymbolInfo:function(e,t,r){if(e.get("large")){var i=Y.firstNotNull(e.get("symbolSize"),1),s,a;return i instanceof Array?(s=Math.max(i[0],i[1]),a=i[0]/i[1]):(s=i,a=1),{maxSize:i,type:e.get("symbol"),aspect:a}}for(var n=e.getData(),a,o=n.getItemVisual(0,"symbol")||"circle",s=0,l=t;l<r;l++){var i=n.getItemVisual(l,"symbolSize"),h=n.getItemVisual(l,"symbol"),u;if(i instanceof Array)u=i[0]/i[1],s=Math.max(Math.max(i[0],i[1]),s);else{if(isNaN(i))continue;u=1,s=Math.max(i,s)}o=h,a=u}return{maxSize:s,type:o,aspect:a}}};const Rd=gt.extend({type:"scatter3D",hasSymbolVisual:!0,__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this._pointsBuilderList=[],this._currentStep=0},render:function(e,t,r){if(this.groupGL.removeAll(),!!e.getData().count()){var i=e.coordinateSystem;if(i&&i.viewGL){i.viewGL.add(this.groupGL),this._camera=i.viewGL.camera;var n=this._pointsBuilderList[0];n||(n=this._pointsBuilderList[0]=new ur(!1,r)),this._pointsBuilderList.length=1,this.groupGL.add(n.rootNode),n.update(e,t,r),n.updateView(i.viewGL.camera)}}},incrementalPrepareRender:function(e,t,r){var i=e.coordinateSystem;i&&i.viewGL&&(i.viewGL.add(this.groupGL),this._camera=i.viewGL.camera),this.groupGL.removeAll(),this._currentStep=0},incrementalRender:function(e,t,r,i){if(!(e.end<=e.start)){var n=this._pointsBuilderList[this._currentStep];n||(n=new ur(!1,i),this._pointsBuilderList[this._currentStep]=n),this.groupGL.add(n.rootNode),n.update(t,r,i,e.start,e.end),n.updateView(t.coordinateSystem.viewGL.camera),this._currentStep++}},updateCamera:function(){this._pointsBuilderList.forEach(function(e){e.updateView(this._camera)},this)},highlight:function(e,t,r,i){this._toggleStatus("highlight",e,t,r,i)},downplay:function(e,t,r,i){this._toggleStatus("downplay",e,t,r,i)},_toggleStatus:function(e,t,r,i,n){var a=t.getData(),o=Y.queryDataIndex(a,n),s=e==="highlight";o!=null?At(Kt.normalizeToArray(o),function(l){for(var h=0;h<this._pointsBuilderList.length;h++){var u=this._pointsBuilderList[h];s?u.highlight(a,l):u.downplay(a,l)}},this):a.each(function(l){for(var h=0;h<this._pointsBuilderList.length;h++){var u=this._pointsBuilderList[h];s?u.highlight(a,l):u.downplay(a,l)}})},dispose:function(){this._pointsBuilderList.forEach(function(e){e.dispose()}),this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function Pd(e){e.registerChartView(Rd),e.registerSeriesModel(Sd),e.registerLayout({seriesType:"scatter3D",reset:function(t){var r=t.coordinateSystem;if(r){var i=r.dimensions;if(i.length<3)return;var n=i.map(function(s){return t.coordDimToDataDim(s)[0]}),a=[],o=[];return{progress:function(s,l){for(var h=new Float32Array((s.end-s.start)*3),u=s.start;u<s.end;u++){var f=(u-s.start)*3;a[0]=l.get(n[0],u),a[1]=l.get(n[1],u),a[2]=l.get(n[2],u),r.dataToPoint(a,o),h[f]=o[0],h[f+1]=o[1],h[f+2]=o[2]}l.setLayout("points",h)}}}}})}Ze(Pd);var De=be.vec3,Io=be.vec2,Ct=De.normalize,Ri=De.cross,No=De.sub,Un=De.add,Vt=De.create,Ut=Vt(),st=Vt(),Ft=Vt(),Qr=Vt(),Oo=[],Bo=[];function Dd(e,t){Io.copy(Oo,e[0]),Io.copy(Bo,e[1]);var r=[],i=r[0]=Vt(),n=r[1]=Vt(),a=r[2]=Vt(),o=r[3]=Vt();t.dataToPoint(Oo,i),t.dataToPoint(Bo,o),Ct(Ut,i),No(st,o,i),Ct(st,st),Ri(Ft,st,Ut),Ct(Ft,Ft),Ri(st,Ut,Ft),Un(n,Ut,st),Ct(n,n),Ct(Ut,o),No(st,i,o),Ct(st,st),Ri(Ft,st,Ut),Ct(Ft,Ft),Ri(st,Ut,Ft),Un(a,Ut,st),Ct(a,a),Un(Qr,i,o),Ct(Qr,Qr);var s=De.dot(i,Qr),l=De.dot(Qr,n),h=(Math.max(De.len(i),De.len(o))-s)/l*2;return De.scaleAndAdd(n,i,n,h),De.scaleAndAdd(a,o,a,h),r}function Id(e,t,r){var i=[],n=i[0]=De.create(),a=i[1]=De.create(),o=i[2]=De.create(),s=i[3]=De.create();t.dataToPoint(e[0],n),t.dataToPoint(e[1],s);var l=De.dist(n,s);return De.lerp(a,n,s,.3),De.lerp(o,n,s,.3),De.scaleAndAdd(a,a,r,Math.min(l*.1,10)),De.scaleAndAdd(o,o,r,Math.min(l*.1,10)),i}function al(e,t){for(var r=new Float32Array(e.length*3),i=0,n=[],a=0;a<e.length;a++)t.dataToPoint(e[a],n),r[i++]=n[0],r[i++]=n[1],r[i++]=n[2];return r}function ol(e){var t=[];return e.each(function(r){var i=e.getItemModel(r),n=i.option instanceof Array?i.option:i.getShallow("coords",!0);t.push(n)}),{coordsList:t}}function Nd(e,t){var r=e.getData(),i=e.get("polyline");r.setLayout("lineType",i?"polyline":"cubicBezier");var n=ol(r);r.each(function(a){var o=n.coordsList[a],s=i?al:Dd;r.setItemLayout(a,s(o,t))})}function Uo(e,t,r){var i=e.getData(),n=e.get("polyline"),a=ol(i);i.setLayout("lineType",n?"polyline":"cubicBezier"),i.each(function(o){var s=a.coordsList[o],l=n?al(s,t):Id(s,t,r);i.setItemLayout(o,l)})}function Od(e,t){e.eachSeriesByType("lines3D",function(r){var i=r.coordinateSystem;i.type==="globe"?Nd(r,i):i.type==="geo3D"?Uo(r,i,[0,1,0]):(i.type==="mapbox3D"||i.type==="maptalks3D")&&Uo(r,i,[0,0,1])})}const Bd=mt.extend({type:"series.lines3D",dependencies:["globe"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",getInitialData:function(e,t){var r=new wt(["value"],this);return r.hasItemOption=!1,r.initData(e.data,[],function(i,n,a,o){if(i instanceof Array)return NaN;r.hasItemOption=!0;var s=i.value;if(s!=null)return s instanceof Array?s[o]:s}),r},defaultOption:{coordinateSystem:"globe",globeIndex:0,geo3DIndex:0,zlevel:-10,polyline:!1,effect:{show:!1,period:4,trailWidth:4,trailLength:.2,spotIntensity:6},silent:!0,blendMode:"source-over",lineStyle:{width:1,opacity:.5}}}),Ud=`@export ecgl.trail2.vertex
attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute float dist;
attribute float distAll;
attribute float start;

attribute vec4 a_Color : COLOR;

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

uniform float speed : 0;
uniform float trailLength: 0.3;
uniform float time;
uniform float period: 1000;

uniform float spotSize: 1;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain

#ifdef CONSTANT_SPEED
 float t = mod((speed * time + start) / distAll, 1. + trailLength) - trailLength;
#else
 float t = mod((time + start) / period, 1. + trailLength) - trailLength;
#endif

 float trailLen = distAll * trailLength;

 v_Percent = (dist - t * distAll) / trailLen;

 v_SpotPercent = spotSize / distAll;

 }
@end


@export ecgl.trail2.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform float spotIntensity: 5;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
 if (v_Percent > 1.0 || v_Percent < 0.0) {
 discard;
 }

 float fade = v_Percent;

#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain

 if (v_Percent > (1.0 - v_SpotPercent)) {
 gl_FragColor.rgb *= spotIntensity;
 }

 gl_FragColor.a *= fade;
}

@end`;var Fo=be.vec3;function Fd(e){return e>0?1:-1}y.Shader.import(Ud);const zd=y.Mesh.extend(function(){var e=new y.Material({shader:new y.Shader(y.Shader.source("ecgl.trail2.vertex"),y.Shader.source("ecgl.trail2.fragment")),transparent:!0,depthMask:!1}),t=new qt({dynamic:!0});return t.createAttribute("dist","float",1),t.createAttribute("distAll","float",1),t.createAttribute("start","float",1),{geometry:t,material:e,culling:!1,$ignorePicking:!0}},{updateData:function(e,t,r){var i=e.hostModel,n=this.geometry,a=i.getModel("effect"),o=a.get("trailWidth")*t.getDevicePixelRatio(),s=a.get("trailLength"),l=i.get("effect.constantSpeed"),h=i.get("effect.period")*1e3,u=l!=null;u?this.material.set("speed",l/1e3):this.material.set("period",h),this.material[u?"define":"undefine"]("vertex","CONSTANT_SPEED");var f=i.get("polyline");n.trailLength=s,this.material.set("trailLength",s),n.resetOffset(),["position","positionPrev","positionNext"].forEach(function(b){n.attributes[b].value=r.attributes[b].value});var d=["dist","distAll","start","offset","color"];d.forEach(function(b){n.attributes[b].init(n.vertexCount)}),n.indices=r.indices;var c=[],v=a.get("trailColor"),p=a.get("trailOpacity"),m=v!=null,g=p!=null;this.updateWorldTransform();var T=this.worldTransform.x.len(),x=this.worldTransform.y.len(),_=this.worldTransform.z.len(),S=0,A=0;e.each(function(b){var w=e.getItemLayout(b),L=g?p:Ue(e,b),I=Fe(e,b);L==null&&(L=1),c=y.parseColor(m?v:I,c),c[3]*=L;for(var M=f?r.getPolylineVertexCount(w):r.getCubicCurveVertexCount(w[0],w[1],w[2],w[3]),N=0,U=[],D=[],z=S;z<S+M;z++)n.attributes.position.get(z,U),U[0]*=T,U[1]*=x,U[2]*=_,z>S&&(N+=Fo.dist(U,D)),n.attributes.dist.set(z,N),Fo.copy(D,U);A=Math.max(A,N);for(var H=Math.random()*(u?N:h),z=S;z<S+M;z++)n.attributes.distAll.set(z,N),n.attributes.start.set(z,H),n.attributes.offset.set(z,Fd(r.attributes.offset.get(z))*o/2),n.attributes.color.set(z,c);S+=M}),this.material.set("spotSize",A*.1*s),this.material.set("spotIntensity",a.get("spotIntensity")),n.dirty()},setAnimationTime:function(e){this.material.set("time",e)}});y.Shader.import(ln);function Vd(e){return e.radius!=null?e.radius:e.size!=null?Math.max(e.size[0],e.size[1],e.size[2]):100}const Gd=gt.extend({type:"lines3D",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this._meshLinesMaterial=new y.Material({shader:y.createShader("ecgl.meshLines3D"),transparent:!0,depthMask:!1}),this._linesMesh=new y.Mesh({geometry:new qt,material:this._meshLinesMaterial,$ignorePicking:!0}),this._trailMesh=new zd},render:function(e,t,r){this.groupGL.add(this._linesMesh);var i=e.coordinateSystem,n=e.getData();if(i&&i.viewGL){var a=i.viewGL;a.add(this.groupGL),this._updateLines(e,t,r);var o=i.viewGL.isLinearSpace()?"define":"undefine";this._linesMesh.material[o]("fragment","SRGB_DECODE"),this._trailMesh.material[o]("fragment","SRGB_DECODE")}var s=this._trailMesh;if(s.stopAnimation(),e.get("effect.show")){this.groupGL.add(s),s.updateData(n,r,this._linesMesh.geometry),s.__time=s.__time||0;var l=3600*1e3;this._curveEffectsAnimator=s.animate("",{loop:!0}).when(l,{__time:l}).during(function(){s.setAnimationTime(s.__time)}).start()}else this.groupGL.remove(s),this._curveEffectsAnimator=null;this._linesMesh.material.blend=this._trailMesh.material.blend=e.get("blendMode")==="lighter"?y.additiveBlend:null},pauseEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.pause()},resumeEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.resume()},toggleEffect:function(){var e=this._curveEffectsAnimator;e&&(e.isPaused()?e.resume():e.pause())},_updateLines:function(e,t,r){var i=e.getData(),n=e.coordinateSystem,a=this._linesMesh.geometry,o=e.get("polyline");a.expandLine=!0;var s=Vd(n);a.segmentScale=s/20;var l="lineStyle.width".split("."),h=r.getDevicePixelRatio();i.each(function(c){var v=i.getItemModel(c),p=v.get(l);p==null&&(p=1),i.setItemVisual(c,"lineWidth",p)}),a.useNativeLine=!1;var u=0,f=0;i.each(function(c){var v=i.getItemLayout(c);o?(u+=a.getPolylineVertexCount(v),f+=a.getPolylineTriangleCount(v)):(u+=a.getCubicCurveVertexCount(v[0],v[1],v[2],v[3]),f+=a.getCubicCurveTriangleCount(v[0],v[1],v[2],v[3]))}),a.setVertexCount(u),a.setTriangleCount(f),a.resetOffset();var d=[];i.each(function(c){var v=i.getItemLayout(c),p=Fe(i,c),m=Ue(i,c),g=i.getItemVisual(c,"lineWidth")*h;m==null&&(m=1),d=y.parseColor(p,d),d[3]*=m,o?a.addPolyline(v,d,g):a.addCubicCurve(v[0],v[1],v[2],v[3],d,g)}),a.dirty()},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function Hd(e){e.registerChartView(Gd),e.registerSeriesModel(Bd),e.registerLayout(Od),e.registerAction({type:"lines3DPauseEffect",event:"lines3deffectpaused",update:"series.lines3D:pauseEffect"},function(){}),e.registerAction({type:"lines3DResumeEffect",event:"lines3deffectresumed",update:"series.lines3D:resumeEffect"},function(){}),e.registerAction({type:"lines3DToggleEffect",event:"lines3deffectchanged",update:"series.lines3D:toggleEffect"},function(){})}Ze(Hd);function zo(e,t){for(var r=[],i=0;i<t.length;i++)r.push(e.dataToPoint(t[i]));return r}var sl=mt.extend({type:"series.polygons3D",getRegionModel:function(e){return this.getData().getItemModel(e)},getRegionPolygonCoords:function(e){var t=this.coordinateSystem,r=this.getData().getItemModel(e),i=r.option instanceof Array?r.option:r.getShallow("coords");r.get("multiPolygon")||(i=[i]);for(var n=[],a=0;a<i.length;a++){for(var o=[],s=1;s<i[a].length;s++)o.push(zo(t,i[a][s]));n.push({exterior:zo(t,i[a][0]),interiors:o})}return n},getInitialData:function(e){var t=new wt(["value"],this);return t.hasItemOption=!1,t.initData(e.data,[],function(r,i,n,a){if(r instanceof Array)return NaN;t.hasItemOption=!0;var o=r.value;if(o!=null)return o instanceof Array?o[a]:o}),t},defaultOption:{show:!0,data:null,multiPolygon:!1,progressiveThreshold:1e3,progressive:1e3,zlevel:-10,label:{show:!1,distance:2,textStyle:{fontSize:20,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:4}},itemStyle:{color:"#fff",borderWidth:0,borderColor:"#333"},emphasis:{itemStyle:{color:"#639fc0"},label:{show:!0}}}});le(sl.prototype,Fr);const kd=sl,Wd=gt.extend({type:"polygons3D",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this._geo3DBuilderList=[],this._currentStep=0},render:function(e,t,r){this.groupGL.removeAll();var i=e.coordinateSystem;i&&i.viewGL&&i.viewGL.add(this.groupGL);var n=this._geo3DBuilderList[0];n||(n=new Pr(r),n.extrudeY=i.type!=="mapbox3D"&&i.type!=="maptalks3D",this._geo3DBuilderList[0]=n),this._updateShaderDefines(i,n),n.update(e,t,r),this._geo3DBuilderList.length=1,this.groupGL.add(n.rootNode)},incrementalPrepareRender:function(e,t,r){this.groupGL.removeAll();var i=e.coordinateSystem;i&&i.viewGL&&i.viewGL.add(this.groupGL),this._currentStep=0},incrementalRender:function(e,t,r,i){var n=this._geo3DBuilderList[this._currentStep],a=t.coordinateSystem;n||(n=new Pr(i),n.extrudeY=a.type!=="mapbox3D"&&a.type!=="maptalks3D",this._geo3DBuilderList[this._currentStep]=n),n.update(t,r,i,e.start,e.end),this.groupGL.add(n.rootNode),this._updateShaderDefines(a,n),this._currentStep++},_updateShaderDefines:function(e,t){var r=e.viewGL.isLinearSpace()?"define":"undefine";t.rootNode.traverse(function(i){i.material&&(i.material[r]("fragment","SRGB_DECODE"),(e.type==="mapbox3D"||e.type==="maptalks3D")&&(i.material.define("fragment","NORMAL_UP_AXIS",2),i.material.define("fragment","NORMAL_FRONT_AXIS",1)))})},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll(),this._geo3DBuilderList.forEach(function(e){e.dispose()})}});function qd(e){e.registerChartView(Wd),e.registerSeriesModel(kd)}Ze(qd);var ll=mt.extend({type:"series.surface",dependencies:["globe","grid3D","geo3D"],visualStyleAccessPath:"itemStyle",formatTooltip:function(e){return gi(this,e)},getInitialData:function(e,t){var r=e.data;function i(W){return!(isNaN(W.min)||isNaN(W.max)||isNaN(W.step))}function n(W){var V=Xo;return Math.max(V(W.min),V(W.max),V(W.step))+1}if(!r)if(e.parametric){var _=e.parametricEquation||{},S=_.u||{},A=_.v||{};["u","v"].forEach(function(V){i(_[V])}),["x","y","z"].forEach(function(V){_[V]});var b=Math.floor((S.max+S.step-S.min)/S.step),w=Math.floor((A.max+A.step-A.min)/A.step);r=new Float32Array(b*w*5);for(var L=n(S),I=n(A),d=0,c=0;c<w;c++)for(var v=0;v<b;v++){var M=v*S.step+S.min,N=c*A.step+A.min,U=_i(Math.min(M,S.max),L),D=_i(Math.min(N,A.max),I),p=_.x(U,D),m=_.y(U,D),x=_.z(U,D);r[d++]=p,r[d++]=m,r[d++]=x,r[d++]=U,r[d++]=D}}else{var a=e.equation||{},o=a.x||{},s=a.y||{};if(["x","y"].forEach(function(W){i(a[W])}),typeof a.z!="function")return;var l=Math.floor((o.max+o.step-o.min)/o.step),h=Math.floor((s.max+s.step-s.min)/s.step);r=new Float32Array(l*h*3);for(var u=n(o),f=n(s),d=0,c=0;c<h;c++)for(var v=0;v<l;v++){var p=v*o.step+o.min,m=c*s.step+s.min,g=_i(Math.min(p,o.max),u),T=_i(Math.min(m,s.max),f),x=a.z(g,T);r[d++]=g,r[d++]=T,r[d++]=x}}var z=["x","y","z"];e.parametric&&z.push("u","v");var H=hn(this,z,r);return H},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,grid3DIndex:0,shading:"lambert",parametric:!1,wireframe:{show:!0,lineStyle:{color:"rgba(0,0,0,0.5)",width:1}},equation:{x:{min:-1,max:1,step:.1},y:{min:-1,max:1,step:.1},z:null},parametricEquation:{u:{min:-1,max:1,step:.1},v:{min:-1,max:1,step:.1},x:null,y:null,z:null},dataShape:null,itemStyle:{},animationDurationUpdate:500}});le(ll.prototype,Fr);const Xd=ll;var tr=be.vec3;function Zd(e){return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])}const Kd=gt.extend({type:"surface",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node},render:function(e,t,r){var i=this._prevSurfaceMesh;this._prevSurfaceMesh=this._surfaceMesh,this._surfaceMesh=i,this._surfaceMesh||(this._surfaceMesh=this._createSurfaceMesh()),this.groupGL.remove(this._prevSurfaceMesh),this.groupGL.add(this._surfaceMesh);var n=e.coordinateSystem,a=e.get("shading"),o=e.getData(),s="ecgl."+a;if((!this._surfaceMesh.material||this._surfaceMesh.material.shader.name!==s)&&(this._surfaceMesh.material=y.createMaterial(s,["VERTEX_COLOR","DOUBLE_SIDED"])),y.setMaterialFromModel(a,this._surfaceMesh.material,e,r),n&&n.viewGL){n.viewGL.add(this.groupGL);var l=n.viewGL.isLinearSpace()?"define":"undefine";this._surfaceMesh.material[l]("fragment","SRGB_DECODE")}var h=e.get("parametric"),u=e.get("dataShape");u||(u=this._getDataShape(o,h));var f=e.getModel("wireframe"),d=f.get("lineStyle.width"),c=f.get("show")&&d>0;this._updateSurfaceMesh(this._surfaceMesh,e,u,c);var v=this._surfaceMesh.material;c?(v.define("WIREFRAME_QUAD"),v.set("wireframeLineWidth",d),v.set("wireframeLineColor",y.parseColor(f.get("lineStyle.color")))):v.undefine("WIREFRAME_QUAD"),this._initHandler(e,r),this._updateAnimation(e)},_updateAnimation:function(e){y.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevSurfaceMesh,this._surfaceMesh,e)},_createSurfaceMesh:function(){var e=new y.Mesh({geometry:new y.Geometry({dynamic:!0,sortTriangles:!0}),shadowDepthMaterial:new y.Material({shader:new y.Shader(y.Shader.source("ecgl.sm.depth.vertex"),y.Shader.source("ecgl.sm.depth.fragment"))}),culling:!1,renderOrder:10,renderNormal:!0});return e.geometry.createAttribute("barycentric","float",4),e.geometry.createAttribute("prevPosition","float",3),e.geometry.createAttribute("prevNormal","float",3),Object.assign(e.geometry,pa),e},_initHandler:function(e,t){var r=e.getData(),i=this._surfaceMesh,n=e.coordinateSystem;function a(s,l){for(var h=1/0,u=-1,f=[],d=0;d<s.length;d++){i.geometry.attributes.position.get(s[d],f);var c=tr.dist(l.array,f);c<h&&(h=c,u=s[d])}return u}i.seriesIndex=e.seriesIndex;var o=-1;i.off("mousemove"),i.off("mouseout"),i.on("mousemove",function(s){var l=a(s.triangle,s.point);if(l>=0){var h=[];i.geometry.attributes.position.get(l,h);for(var u=n.pointToData(h),f=1/0,d=-1,c=[],v=0;v<r.count();v++){c[0]=r.get("x",v),c[1]=r.get("y",v),c[2]=r.get("z",v);var p=tr.squaredDistance(c,u);p<f&&(d=v,f=p)}d!==o&&t.dispatchAction({type:"grid3DShowAxisPointer",value:u}),o=d,i.dataIndex=d}else i.dataIndex=-1},this),i.on("mouseout",function(s){o=-1,i.dataIndex=-1,t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_updateSurfaceMesh:function(e,t,r,i){var n=e.geometry,a=t.getData(),o=a.getLayout("points"),s=0;a.each(function(Re){a.hasValue(Re)||s++});var l=s||i,h=n.attributes.position,u=n.attributes.normal,f=n.attributes.texcoord0,d=n.attributes.barycentric,c=n.attributes.color,v=r[0],p=r[1],m=t.get("shading"),g=m!=="color";if(l){var T=(v-1)*(p-1)*4;h.init(T),i&&d.init(T)}else h.value=new Float32Array(o);c.init(n.vertexCount),f.init(n.vertexCount);var x=[0,3,1,1,3,2],_=[[1,1,0,0],[0,1,0,1],[1,0,0,1],[1,0,1,0]],S=n.indices=new(n.vertexCount>65535?Uint32Array:Uint16Array)((v-1)*(p-1)*6),A=function(Re,_t,qe){qe[1]=Re*p+_t,qe[0]=Re*p+_t+1,qe[3]=(Re+1)*p+_t+1,qe[2]=(Re+1)*p+_t},b=!1;if(l){var w=[],L=[],I=0;g?u.init(n.vertexCount):u.value=null;for(var M=[[],[],[]],N=[],U=[],D=tr.create(),z=function(Re,_t,qe){var un=_t*3;return qe[0]=Re[un],qe[1]=Re[un+1],qe[2]=Re[un+2],qe},H=new Float32Array(o.length),W=new Float32Array(o.length/3*4),V=0;V<a.count();V++)if(a.hasValue(V)){var Ve=y.parseColor(Fe(a,V)),ne=Ue(a,V);ne!=null&&(Ve[3]*=ne),Ve[3]<.99&&(b=!0);for(var k=0;k<4;k++)W[V*4+k]=Ve[k]}for(var ue=[1e7,1e7,1e7],V=0;V<v-1;V++)for(var ae=0;ae<p-1;ae++){var de=V*(p-1)+ae,ve=de*4;A(V,ae,w);for(var ee=!1,k=0;k<4;k++)z(o,w[k],L),Zd(L)&&(ee=!0);for(var k=0;k<4;k++)ee?h.set(ve+k,ue):(z(o,w[k],L),h.set(ve+k,L)),i&&d.set(ve+k,_[k]);for(var k=0;k<6;k++)S[I++]=x[k]+ve;if(g&&!ee)for(var k=0;k<2;k++){for(var Me=k*3,_e=0;_e<3;_e++){var Ee=w[x[Me]+_e];z(o,Ee,M[_e])}tr.sub(N,M[0],M[1]),tr.sub(U,M[1],M[2]),tr.cross(D,N,U);for(var _e=0;_e<3;_e++){var We=w[x[Me]+_e]*3;H[We]=H[We]+D[0],H[We+1]=H[We+1]+D[1],H[We+2]=H[We+2]+D[2]}}}if(g)for(var V=0;V<H.length/3;V++)z(H,V,D),tr.normalize(D,D),H[V*3]=D[0],H[V*3+1]=D[1],H[V*3+2]=D[2];for(var Ve=[],Oe=[],V=0;V<v-1;V++)for(var ae=0;ae<p-1;ae++){var de=V*(p-1)+ae,ve=de*4;A(V,ae,w);for(var k=0;k<4;k++){for(var _e=0;_e<4;_e++)Ve[_e]=W[w[k]*4+_e];c.set(ve+k,Ve),g&&(z(H,w[k],D),u.set(ve+k,D));var Ee=w[k];Oe[0]=Ee%p/(p-1),Oe[1]=Math.floor(Ee/p)/(v-1),f.set(ve+k,Oe)}de++}}else{for(var Oe=[],V=0;V<a.count();V++){Oe[0]=V%p/(p-1),Oe[1]=Math.floor(V/p)/(v-1);var Ve=y.parseColor(Fe(a,V)),ne=Ue(a,V);ne!=null&&(Ve[3]*=ne),Ve[3]<.99&&(b=!0),c.set(V,Ve),f.set(V,Oe)}for(var w=[],Gr=0,V=0;V<v-1;V++)for(var ae=0;ae<p-1;ae++){A(V,ae,w);for(var k=0;k<6;k++)S[Gr++]=w[x[k]]}g?n.generateVertexNormals():u.value=null}e.material.get("normalMap")&&n.generateTangents(),n.updateBoundingBox(),n.dirty(),e.material.transparent=b,e.material.depthMask=!b},_getDataShape:function(e,t){for(var r=-1/0,i=0,n=0,a=!1,o=t?"u":"x",s=e.count(),l=0;l<s;l++){var h=e.get(o,l);h<r&&(n=0,i++),r=h,n++}if((!i||n===1)&&(a=!0),!a)return[i+1,n];for(var u=Math.floor(Math.sqrt(s));u>0;){if(Math.floor(s/u)===s/u)return[u,s/u];u--}return u=Math.floor(Math.sqrt(s)),[u,u]},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function Qd(e){e.registerChartView(Kd),e.registerSeriesModel(Xd),e.registerLayout(function(t,r){t.eachSeriesByType("surface",function(i){var n=i.coordinateSystem;!n||n.type;var a=i.getData(),o=new Float32Array(3*a.count()),s=[NaN,NaN,NaN];if(n&&n.type==="cartesian3D"){var l=n.dimensions,h=l.map(function(u){return i.coordDimToDataDim(u)[0]});a.each(h,function(u,f,d,c){var v;a.hasValue(c)?v=n.dataToPoint([u,f,d]):v=s,o[c*3]=v[0],o[c*3+1]=v[1],o[c*3+2]=v[2]})}a.setLayout("points",o)})})}Ze(Qd);function Vo(e,t){for(var r=[],i=0;i<t.length;i++)r.push(e.dataToPoint(t[i]));return r}var Vr=mt.extend({type:"series.map3D",layoutMode:"box",coordinateSystem:null,visualStyleAccessPath:"itemStyle",optionUpdated:function(e){var t=this.get("coordinateSystem");t==null||t==="geo3D"||(this.get("groundPlane.show")&&(this.option.groundPlane.show=!1),this._geo=null)},getInitialData:function(e){e.data=this.getFilledRegions(e.data,e.map);var t=di(e.data,{coordDimensions:["value"]}),r=new wt(t,this);r.initData(e.data);var i={};return r.each(function(n){var a=r.getName(n),o=r.getItemModel(n);i[a]=o}),this._regionModelMap=i,r},formatTooltip:function(e){return gi(this,e)},getRegionModel:function(e){var t=this.getData().getName(e);return this._regionModelMap[t]||new Ji(null,this)},getRegionPolygonCoords:function(e){var t=this.coordinateSystem,r=this.getData().getName(e);if(t.transform){var i=t.getRegion(r);return i?i.geometries:[]}else{this._geo||(this._geo=Zs.createGeo3D(this));for(var i=this._geo.getRegion(r),n=[],a=0;a<i.geometries.length;a++){var o=i.geometries[a],s=[],l=Vo(t,o.exterior);if(s&&s.length)for(var h=0;h<o.interiors.length;h++)s.push(Vo(t,s[h]));n.push({interiors:s,exterior:l})}return n}},getFormattedLabel:function(e,t){var r=Kt.getFormattedLabel(this,e,t);return r==null&&(r=this.getData().getName(e)),r},defaultOption:{coordinateSystem:"geo3D",data:null}});le(Vr.prototype,Fs);le(Vr.prototype,nn);le(Vr.prototype,Or);le(Vr.prototype,Br);le(Vr.prototype,Fr);const jd=Vr,Yd=gt.extend({type:"map3D",__ecgl__:!0,init:function(e,t){this._geo3DBuilder=new Pr(t),this.groupGL=new y.Node},render:function(e,t,r){var i=e.coordinateSystem;if(!(!i||!i.viewGL)){if(this.groupGL.add(this._geo3DBuilder.rootNode),i.viewGL.add(this.groupGL),i.type==="geo3D"){this._sceneHelper||(this._sceneHelper=new Ht,this._sceneHelper.initLight(this.groupGL)),this._sceneHelper.setScene(i.viewGL.scene),this._sceneHelper.updateLight(e),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling"));var n=this._control;n||(n=this._control=new on({zr:r.getZr()}),this._control.init());var a=e.getModel("viewControl");n.setViewGL(i.viewGL),n.setFromViewControlModel(a,0),n.off("update"),n.on("update",function(){r.dispatchAction({type:"map3DChangeCamera",alpha:n.getAlpha(),beta:n.getBeta(),distance:n.getDistance(),from:this.uid,map3DId:e.id})}),this._geo3DBuilder.extrudeY=!0}else this._control&&(this._control.dispose(),this._control=null),this._sceneHelper&&(this._sceneHelper.dispose(),this._sceneHelper=null),e.getData().getLayout("geo3D"),this._geo3DBuilder.extrudeY=!1;this._geo3DBuilder.update(e,t,r,0,e.getData().count());var o=i.viewGL.isLinearSpace()?"define":"undefine";this._geo3DBuilder.rootNode.traverse(function(s){s.material&&s.material[o]("fragment","SRGB_DECODE")})}},afterRender:function(e,t,r,i){var n=i.renderer,a=e.coordinateSystem;a&&a.type==="geo3D"&&(this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r))},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._geo3DBuilder.dispose()}});function Jd(e){Ks(e),e.registerChartView(Yd),e.registerSeriesModel(jd),e.registerAction({type:"map3DChangeCamera",event:"map3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"series",subType:"map3D",query:t},function(i){i.setView(t)})})}Ze(Jd);const $d=mt.extend({type:"series.scatterGL",dependencies:["grid","polar","geo","singleAxis"],visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,getInitialData:function(){return Nl(this)},defaultOption:{coordinateSystem:"cartesian2d",zlevel:10,progressive:1e5,progressiveThreshold:1e5,large:!1,symbol:"circle",symbolSize:10,zoomScale:0,blendMode:"source-over",itemStyle:{opacity:.8},postEffect:{enable:!1,colorCorrection:{exposure:0,brightness:0,contrast:1,saturation:1,enable:!0}}}});function It(e){this.viewGL=e}It.prototype.reset=function(e,t){this._updateCamera(t.getWidth(),t.getHeight(),t.getDevicePixelRatio()),this._viewTransform=Ol(),this.updateTransform(e,t)};It.prototype.updateTransform=function(e,t){var r=e.coordinateSystem;r.getRoamTransform&&(Bl(this._viewTransform,r.getRoamTransform()),this._setCameraTransform(this._viewTransform),t.getZr().refresh())};It.prototype.dataToPoint=function(e,t,r){r=e.dataToPoint(t,null,r);var i=this._viewTransform;i&&jo(r,r,i)};It.prototype.removeTransformInPoint=function(e){return this._viewTransform&&jo(e,e,this._viewTransform),e};It.prototype.getZoom=function(){if(this._viewTransform){var e=this._viewTransform;return 1/Math.max(Math.sqrt(e[0]*e[0]+e[1]*e[1]),Math.sqrt(e[2]*e[2]+e[3]*e[3]))}return 1};It.prototype._setCameraTransform=function(e){var t=this.viewGL.camera;t.position.set(e[4],e[5],0),t.scale.set(Math.sqrt(e[0]*e[0]+e[1]*e[1]),Math.sqrt(e[2]*e[2]+e[3]*e[3]),1)};It.prototype._updateCamera=function(e,t,r){this.viewGL.setViewport(0,0,e,t,r);var i=this.viewGL.camera;i.left=i.top=0,i.bottom=t,i.right=e,i.near=0,i.far=100};const ev=gt.extend({type:"scatterGL",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this.viewGL=new he("orthographic"),this.viewGL.add(this.groupGL),this._pointsBuilderList=[],this._currentStep=0,this._sizeScale=1,this._glViewHelper=new It(this.viewGL)},render:function(e,t,r){if(this.groupGL.removeAll(),this._glViewHelper.reset(e,r),!!e.getData().count()){var i=this._pointsBuilderList[0];i||(i=this._pointsBuilderList[0]=new ur(!0,r)),this._pointsBuilderList.length=1,this.groupGL.add(i.rootNode),this._removeTransformInPoints(e.getData().getLayout("points")),i.update(e,t,r),this.viewGL.setPostEffect(e.getModel("postEffect"),r)}},incrementalPrepareRender:function(e,t,r){this.groupGL.removeAll(),this._glViewHelper.reset(e,r),this._currentStep=0,this.viewGL.setPostEffect(e.getModel("postEffect"),r)},incrementalRender:function(e,t,r,i){if(!(e.end<=e.start)){var n=this._pointsBuilderList[this._currentStep];n||(n=new ur(!0,i),this._pointsBuilderList[this._currentStep]=n),this.groupGL.add(n.rootNode),this._removeTransformInPoints(t.getData().getLayout("points")),n.setSizeScale(this._sizeScale),n.update(t,r,i,e.start,e.end),i.getZr().refresh(),this._currentStep++}},updateTransform:function(e,t,r){if(e.coordinateSystem.getRoamTransform){this._glViewHelper.updateTransform(e,r);var i=this._glViewHelper.getZoom(),n=Math.max((e.get("zoomScale")||0)*(i-1)+1,0);this._sizeScale=n,this._pointsBuilderList.forEach(function(a){a.setSizeScale(n)})}},_removeTransformInPoints:function(e){if(e)for(var t=[],r=0;r<e.length;r+=2)t[0]=e[r],t[1]=e[r+1],this._glViewHelper.removeTransformInPoint(t),e[r]=t[0],e[r+1]=t[1]},dispose:function(){this.groupGL.removeAll(),this._pointsBuilderList.forEach(function(e){e.dispose()})},remove:function(){this.groupGL.removeAll()}});function tv(e){e.registerChartView(ev),e.registerSeriesModel($d),e.registerLayout({seriesType:"scatterGL",reset:function(t){var r=t.coordinateSystem,i=t.getData(),n;if(r){var a=r.dimensions.map(function(s){return i.mapDimension(s)}).slice(0,2),o=[];a.length===1?n=function(s){for(var l=new Float32Array((s.end-s.start)*2),h=s.start;h<s.end;h++){var u=(h-s.start)*2,f=i.get(a[0],h),d=r.dataToPoint(f);l[u]=d[0],l[u+1]=d[1]}i.setLayout("points",l)}:a.length===2&&(n=function(s){for(var l=new Float32Array((s.end-s.start)*2),h=s.start;h<s.end;h++){var u=(h-s.start)*2,f=i.get(a[0],h),d=i.get(a[1],h);o[0]=f,o[1]=d,o=r.dataToPoint(o),l[u]=o[0],l[u+1]=o[1]}i.setLayout("points",l)})}return{progress:n}}})}Ze(tv);function rv(e,t,r,i,n){for(var a=new Fl(i),o=0;o<e.length;o++)a.addNode(Y.firstNotNull(e[o].id,e[o].name,o),o);for(var s=[],l=[],h=0,o=0;o<t.length;o++){var u=t[o],f=u.source,d=u.target;a.addEdge(f,d,h)&&(l.push(u),s.push(Y.firstNotNull(u.id,f+" > "+d)),h++)}var c,v=di(e,{coordDimensions:["value"]});c=new wt(v,r),c.initData(e);var p=new wt(["value"],r);return p.initData(l,s),n&&n(c,p),Ul({mainData:c,struct:a,structAttr:"graph",datas:{node:c,edge:p},datasAttr:{node:"data",edge:"edgeData"}}),a.update(),a}var Jr=mt.extend({type:"series.graphGL",visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,init:function(e){Jr.superApply(this,"init",arguments),this.legendDataProvider=function(){return this._categoriesData},this._updateCategoriesData()},mergeOption:function(e){Jr.superApply(this,"mergeOption",arguments),this._updateCategoriesData()},getFormattedLabel:function(e,t,r,i){var n=Kt.getFormattedLabel(this,e,t,r,i);if(n==null){var a=this.getData(),o=a.dimensions[a.dimensions.length-1];n=a.get(o,e)}return n},getInitialData:function(e,t){var r=e.edges||e.links||[],i=e.data||e.nodes||[],n=this;if(i&&r)return rv(i,r,this,!0,a).data;function a(o,s){o.wrapMethod("getItemModel",function(f){const d=n._categoriesModels,c=f.getShallow("category"),v=d[c];return v&&(v.parentModel=f.parentModel,f.parentModel=v),f});const l=t.getModel([]).getModel;function h(f,d){const c=l.call(this,f,d);return c.resolveParentPath=u,c}s.wrapMethod("getItemModel",function(f){return f.resolveParentPath=u,f.getModel=h,f});function u(f){if(f&&(f[0]==="label"||f[1]==="label")){const d=f.slice();return f[0]==="label"?d[0]="edgeLabel":f[1]==="label"&&(d[1]="edgeLabel"),d}return f}}},getGraph:function(){return this.getData().graph},getEdgeData:function(){return this.getGraph().edgeData},getCategoriesData:function(){return this._categoriesData},formatTooltip:function(e,t,r){if(r==="edge"){var i=this.getData(),n=this.getDataParams(e,r),a=i.graph.getEdgeByIndex(e),o=i.getName(a.node1.dataIndex),s=i.getName(a.node2.dataIndex),l=[];return o!=null&&l.push(o),s!=null&&l.push(s),l=xr(l.join(" > ")),n.value&&(l+=" : "+xr(n.value)),l}else return Jr.superApply(this,"formatTooltip",arguments)},_updateCategoriesData:function(){var e=(this.option.categories||[]).map(function(r){return r.value!=null?r:Object.assign({value:0},r)}),t=new wt(["value"],this);t.initData(e),this._categoriesData=t,this._categoriesModels=t.mapArray(function(r){return t.getItemModel(r,!0)})},setView:function(e){e.zoom!=null&&(this.option.zoom=e.zoom),e.offset!=null&&(this.option.offset=e.offset)},setNodePosition:function(e){for(var t=0;t<e.length/2;t++){var r=e[t*2],i=e[t*2+1],n=this.getData().getRawDataItem(t);n.x=r,n.y=i}},isAnimationEnabled:function(){return Jr.superCall(this,"isAnimationEnabled")&&!(this.get("layout")==="force"&&this.get("force.layoutAnimation"))},defaultOption:{zlevel:10,z:2,legendHoverLink:!0,layout:"forceAtlas2",forceAtlas2:{initLayout:null,GPU:!0,steps:1,maxSteps:1e3,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,edgeWeightInfluence:1,edgeWeight:[1,4],nodeWeight:[1,4],preventOverlap:!1,gravityCenter:null},focusNodeAdjacency:!0,focusNodeAdjacencyOn:"mouseover",left:"center",top:"center",symbol:"circle",symbolSize:5,roam:!1,center:null,zoom:1,label:{show:!1,formatter:"{b}",position:"right",distance:5,textStyle:{fontSize:14}},itemStyle:{},lineStyle:{color:"#aaa",width:1,opacity:.5},emphasis:{label:{show:!0}},animation:!1}});const iv=Jr;var Pe=be.vec2,Go=[[0,0],[1,1]],hl=J.extend(function(){return{segmentScale:4,dynamic:!0,useNativeLine:!0,attributes:{position:new J.Attribute("position","float",2,"POSITION"),normal:new J.Attribute("normal","float",2),offset:new J.Attribute("offset","float",1),color:new J.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.offset.init(e),t.normal.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,r,i){var n=Pe.dist(e,t)+Pe.dist(r,t)+Pe.dist(i,r),a=1/(n+1)*this.segmentScale;return a},getCubicCurveVertexCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?a*2:a*2+2},getCubicCurveTriangleCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?0:a*2},getLineVertexCount:function(){return this.getPolylineVertexCount(Go)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(Go)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/2}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/2}return this.useNativeLine?0:(t-1)*2},addCubicCurve:function(e,t,r,i,n,a){a==null&&(a=1);for(var o=e[0],s=e[1],l=t[0],h=t[1],u=r[0],f=r[1],d=i[0],c=i[1],v=this._getCubicCurveApproxStep(e,t,r,i),p=v*v,m=p*v,g=3*v,T=3*p,x=6*p,_=6*m,S=o-l*2+u,A=s-h*2+f,b=(l-u)*3-o+d,w=(h-f)*3-s+c,L=o,I=s,M=(l-o)*g+S*T+b*m,N=(h-s)*g+A*T+w*m,U=S*x+b*_,D=A*x+w*_,z=b*_,H=w*_,W=0,V=0,ne=Math.ceil(1/v),k=new Float32Array((ne+1)*3),k=[],ue=0,V=0;V<ne+1;V++)k[ue++]=L,k[ue++]=I,L+=M,I+=N,M+=U,N+=D,U+=z,D+=H,W+=v,W>1&&(L=M>0?Math.min(L,d):Math.max(L,d),I=N>0?Math.min(I,c):Math.max(I,c));this.addPolyline(k,n,a)},addLine:function(e,t,r,i){this.addPolyline([e,t],r,i)},addPolyline:function(){var e=Pe.create(),t=Pe.create(),r=Pe.create(),i=Pe.create(),n=[],a=[],o=[];return function(s,l,h,u,f){if(s.length){var d=typeof s[0]!="number";if(f==null&&(f=d?s.length:s.length/2),!(f<2)){u==null&&(u=0),h==null&&(h=1),this._itemVertexOffsets.push(this._vertexOffset);for(var c=d?typeof l[0]!="number":l.length/4===f,v=this.attributes.position,p=this.attributes.color,m=this.attributes.offset,g=this.attributes.normal,T=this.indices,x=this._vertexOffset,_,S=0;S<f;S++){if(d)n=s[S+u],c?_=l[S+u]:_=l;else{var A=S*2+u;if(n=n||[],n[0]=s[A],n[1]=s[A+1],c){var b=S*4+u;_=_||[],_[0]=l[b],_[1]=l[b+1],_[2]=l[b+2],_[3]=l[b+3]}else _=l}if(this.useNativeLine)S>1&&(v.copy(x,x-1),p.copy(x,x-1),x++);else{var w;if(S<f-1){if(d)Pe.copy(a,s[S+1]);else{var A=(S+1)*2+u;a=a||[],a[0]=s[A],a[1]=s[A+1]}if(S>0){Pe.sub(e,n,o),Pe.sub(t,a,n),Pe.normalize(e,e),Pe.normalize(t,t),Pe.add(i,e,t),Pe.normalize(i,i);var L=h/2*Math.min(1/Pe.dot(e,i),2);r[0]=-i[1],r[1]=i[0],w=L}else Pe.sub(e,a,n),Pe.normalize(e,e),r[0]=-e[1],r[1]=e[0],w=h/2}else Pe.sub(e,n,o),Pe.normalize(e,e),r[0]=-e[1],r[1]=e[0],w=h/2;g.set(x,r),g.set(x+1,r),m.set(x,w),m.set(x+1,-w),Pe.copy(o,n),v.set(x,n),v.set(x+1,n),p.set(x,_),p.set(x+1,_),x+=2}if(this.useNativeLine)p.set(x,_),v.set(x,n),x++;else if(S>0){var I=this._faceOffset*3,T=this.indices;T[I]=x-4,T[I+1]=x-3,T[I+2]=x-2,T[I+3]=x-3,T[I+4]=x-1,T[I+5]=x-2,this._faceOffset+=2}}this._vertexOffset=x}}}}(),setItemColor:function(e,t){for(var r=this._itemVertexOffsets[e],i=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,n=r;n<i;n++)this.attributes.color.set(n,t);this.dirty("color")}});kt(hl.prototype,pi);const ul=hl,nv=`@export ecgl.forceAtlas2.updateNodeRepulsion

#define NODE_COUNT 0

uniform sampler2D positionTex;

uniform vec2 textureSize;
uniform float gravity;
uniform float scaling;
uniform vec2 gravityCenter;

uniform bool strongGravityMode;
uniform bool preventOverlap;

varying vec2 v_Texcoord;

void main() {

 vec4 n0 = texture2D(positionTex, v_Texcoord);

 vec2 force = vec2(0.0);
 for (int i = 0; i < NODE_COUNT; i++) {
 vec2 uv = vec2(
 mod(float(i), textureSize.x) / (textureSize.x - 1.0),
 floor(float(i) / textureSize.x) / (textureSize.y - 1.0)
 );
 vec4 n1 = texture2D(positionTex, uv);

 vec2 dir = n0.xy - n1.xy;
 float d2 = dot(dir, dir);

 if (d2 > 0.0) {
 float factor = 0.0;
 if (preventOverlap) {
 float d = sqrt(d2);
 d = d - n0.w - n1.w;
 if (d > 0.0) {
 factor = scaling * n0.z * n1.z / (d * d);
 }
 else if (d < 0.0) {
 factor = scaling * 100.0 * n0.z * n1.z;
 }
 }
 else {
 factor = scaling * n0.z * n1.z / d2;
 }
 force += dir * factor;
 }
 }

 vec2 dir = gravityCenter - n0.xy;
 float d = 1.0;
 if (!strongGravityMode) {
 d = length(dir);
 }

 force += dir * n0.z * gravity / (d + 1.0);

 gl_FragColor = vec4(force, 0.0, 1.0);
}
@end

@export ecgl.forceAtlas2.updateEdgeAttraction.vertex

attribute vec2 node1;
attribute vec2 node2;
attribute float weight;

uniform sampler2D positionTex;
uniform float edgeWeightInfluence;
uniform bool preventOverlap;
uniform bool linLogMode;

uniform vec2 windowSize: WINDOW_SIZE;

varying vec2 v_Force;

void main() {

 vec4 n0 = texture2D(positionTex, node1);
 vec4 n1 = texture2D(positionTex, node2);

 vec2 dir = n1.xy - n0.xy;
 float d = length(dir);
 float w;
 if (edgeWeightInfluence == 0.0) {
 w = 1.0;
 }
 else if (edgeWeightInfluence == 1.0) {
 w = weight;
 }
 else {
 w = pow(weight, edgeWeightInfluence);
 }
 vec2 offset = vec2(1.0 / windowSize.x, 1.0 / windowSize.y);
 vec2 scale = vec2((windowSize.x - 1.0) / windowSize.x, (windowSize.y - 1.0) / windowSize.y);
 vec2 pos = node1 * scale * 2.0 - 1.0;
 gl_Position = vec4(pos + offset, 0.0, 1.0);
 gl_PointSize = 1.0;

 float factor;
 if (preventOverlap) {
 d = d - n1.w - n0.w;
 }
 if (d <= 0.0) {
 v_Force = vec2(0.0);
 return;
 }

 if (linLogMode) {
 factor = w * log(d) / d;
 }
 else {
 factor = w;
 }
 v_Force = dir * factor;
}
@end

@export ecgl.forceAtlas2.updateEdgeAttraction.fragment

varying vec2 v_Force;

void main() {
 gl_FragColor = vec4(v_Force, 0.0, 0.0);
}
@end

@export ecgl.forceAtlas2.calcWeightedSum.vertex

attribute vec2 node;

varying vec2 v_NodeUv;

void main() {

 v_NodeUv = node;
 gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
 gl_PointSize = 1.0;
}
@end

@export ecgl.forceAtlas2.calcWeightedSum.fragment

varying vec2 v_NodeUv;

uniform sampler2D positionTex;
uniform sampler2D forceTex;
uniform sampler2D forcePrevTex;

void main() {
 vec2 force = texture2D(forceTex, v_NodeUv).rg;
 vec2 forcePrev = texture2D(forcePrevTex, v_NodeUv).rg;

 float mass = texture2D(positionTex, v_NodeUv).z;
 float swing = length(force - forcePrev) * mass;
 float traction = length(force + forcePrev) * 0.5 * mass;

 gl_FragColor = vec4(swing, traction, 0.0, 0.0);
}
@end

@export ecgl.forceAtlas2.calcGlobalSpeed

uniform sampler2D globalSpeedPrevTex;
uniform sampler2D weightedSumTex;
uniform float jitterTolerence;

void main() {
 vec2 weightedSum = texture2D(weightedSumTex, vec2(0.5)).xy;
 float prevGlobalSpeed = texture2D(globalSpeedPrevTex, vec2(0.5)).x;
 float globalSpeed = jitterTolerence * jitterTolerence
 * weightedSum.y / weightedSum.x;
 if (prevGlobalSpeed > 0.0) {
 globalSpeed = min(globalSpeed / prevGlobalSpeed, 1.5) * prevGlobalSpeed;
 }
 gl_FragColor = vec4(globalSpeed, 0.0, 0.0, 1.0);
}
@end

@export ecgl.forceAtlas2.updatePosition

uniform sampler2D forceTex;
uniform sampler2D forcePrevTex;
uniform sampler2D positionTex;
uniform sampler2D globalSpeedTex;

varying vec2 v_Texcoord;

void main() {
 vec2 force = texture2D(forceTex, v_Texcoord).xy;
 vec2 forcePrev = texture2D(forcePrevTex, v_Texcoord).xy;
 vec4 node = texture2D(positionTex, v_Texcoord);

 float globalSpeed = texture2D(globalSpeedTex, vec2(0.5)).r;
 float swing = length(force - forcePrev);
 float speed = 0.1 * globalSpeed / (0.1 + globalSpeed * sqrt(swing));

 float df = length(force);
 if (df > 0.0) {
 speed = min(df * speed, 10.0) / df;

 gl_FragColor = vec4(node.xy + speed * force, node.zw);
 }
 else {
 gl_FragColor = node;
 }
}
@end

@export ecgl.forceAtlas2.edges.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec2 node;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

uniform sampler2D positionTex;

void main()
{
 gl_Position = worldViewProjection * vec4(
 texture2D(positionTex, node).xy, -10.0, 1.0
 );
 v_Color = a_Color;
}
@end

@export ecgl.forceAtlas2.edges.fragment
uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
varying vec4 v_Color;
void main() {
 gl_FragColor = color * v_Color;
}
@end`;y.Shader.import(nv);var Fn={repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null};function Ne(e){var t={type:y.Texture.FLOAT,minFilter:y.Texture.NEAREST,magFilter:y.Texture.NEAREST};this._positionSourceTex=new y.Texture2D(t),this._positionSourceTex.flipY=!1,this._positionTex=new y.Texture2D(t),this._positionPrevTex=new y.Texture2D(t),this._forceTex=new y.Texture2D(t),this._forcePrevTex=new y.Texture2D(t),this._weightedSumTex=new y.Texture2D(t),this._weightedSumTex.width=this._weightedSumTex.height=1,this._globalSpeedTex=new y.Texture2D(t),this._globalSpeedPrevTex=new y.Texture2D(t),this._globalSpeedTex.width=this._globalSpeedTex.height=1,this._globalSpeedPrevTex.width=this._globalSpeedPrevTex.height=1,this._nodeRepulsionPass=new Le({fragment:y.Shader.source("ecgl.forceAtlas2.updateNodeRepulsion")}),this._positionPass=new Le({fragment:y.Shader.source("ecgl.forceAtlas2.updatePosition")}),this._globalSpeedPass=new Le({fragment:y.Shader.source("ecgl.forceAtlas2.calcGlobalSpeed")}),this._copyPass=new Le({fragment:y.Shader.source("clay.compositor.output")});var r=function(i){i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ONE)};this._edgeForceMesh=new y.Mesh({geometry:new y.Geometry({attributes:{node1:new y.Geometry.Attribute("node1","float",2),node2:new y.Geometry.Attribute("node2","float",2),weight:new y.Geometry.Attribute("weight","float",1)},dynamic:!0,mainAttribute:"node1"}),material:new y.Material({transparent:!0,shader:y.createShader("ecgl.forceAtlas2.updateEdgeAttraction"),blend:r,depthMask:!1,depthText:!1}),mode:y.Mesh.POINTS}),this._weightedSumMesh=new y.Mesh({geometry:new y.Geometry({attributes:{node:new y.Geometry.Attribute("node","float",2)},dynamic:!0,mainAttribute:"node"}),material:new y.Material({transparent:!0,shader:y.createShader("ecgl.forceAtlas2.calcWeightedSum"),blend:r,depthMask:!1,depthText:!1}),mode:y.Mesh.POINTS}),this._framebuffer=new we({depthBuffer:!1}),this._dummyCamera=new y.OrthographicCamera({left:-1,right:1,top:1,bottom:-1,near:0,far:100}),this._globalSpeed=0}Ne.prototype.updateOption=function(e){for(var t in Fn)this[t]=Fn[t];var r=this._nodes.length;if(r>5e4?this.jitterTolerence=10:r>5e3?this.jitterTolerence=1:this.jitterTolerence=.1,r>100?this.scaling=2:this.scaling=10,e)for(var t in Fn)e[t]!=null&&(this[t]=e[t]);if(this.repulsionByDegree)for(var i=this._positionSourceTex.pixels,n=0;n<this._nodes.length;n++)i[n*4+2]=(this._nodes[n].degree||0)+1};Ne.prototype._updateGravityCenter=function(e){var t=this._nodes,r=this._edges;if(this.gravityCenter)this._gravityCenter=this.gravityCenter;else{for(var i=[1/0,1/0],n=[-1/0,-1/0],a=0;a<t.length;a++)i[0]=Math.min(t[a].x,i[0]),i[1]=Math.min(t[a].y,i[1]),n[0]=Math.max(t[a].x,n[0]),n[1]=Math.max(t[a].y,n[1]);this._gravityCenter=[(i[0]+n[0])*.5,(i[1]+n[1])*.5]}for(var a=0;a<r.length;a++){var o=r[a].node1,s=r[a].node2;t[o].degree=(t[o].degree||0)+1,t[s].degree=(t[s].degree||0)+1}};Ne.prototype.initData=function(e,t){this._nodes=e,this._edges=t,this._updateGravityCenter();var r=Math.ceil(Math.sqrt(e.length)),i=r,n=new Float32Array(r*i*4);this._resize(r,i);for(var a=0,o=0;o<e.length;o++){var s=e[o];n[a++]=s.x||0,n[a++]=s.y||0,n[a++]=s.mass||1,n[a++]=s.size||1}this._positionSourceTex.pixels=n;var l=this._edgeForceMesh.geometry,h=t.length;l.attributes.node1.init(h*2),l.attributes.node2.init(h*2),l.attributes.weight.init(h*2);for(var u=[],o=0;o<t.length;o++){var f=l.attributes,d=t[o].weight;d==null&&(d=1),f.node1.set(o,this.getNodeUV(t[o].node1,u)),f.node2.set(o,this.getNodeUV(t[o].node2,u)),f.weight.set(o,d),f.node1.set(o+h,this.getNodeUV(t[o].node2,u)),f.node2.set(o+h,this.getNodeUV(t[o].node1,u)),f.weight.set(o+h,d)}var c=this._weightedSumMesh.geometry;c.attributes.node.init(e.length);for(var o=0;o<e.length;o++)c.attributes.node.set(o,this.getNodeUV(o,u));l.dirty(),c.dirty(),this._nodeRepulsionPass.material.define("fragment","NODE_COUNT",e.length),this._nodeRepulsionPass.material.setUniform("textureSize",[r,i]),this._inited=!1,this._frame=0};Ne.prototype.getNodes=function(){return this._nodes};Ne.prototype.getEdges=function(){return this._edges};Ne.prototype.step=function(e){this._inited||(this._initFromSource(e),this._inited=!0),this._frame++,this._framebuffer.attach(this._forceTex),this._framebuffer.bind(e);var t=this._nodeRepulsionPass;t.setUniform("strongGravityMode",this.strongGravityMode),t.setUniform("gravity",this.gravity),t.setUniform("gravityCenter",this._gravityCenter),t.setUniform("scaling",this.scaling),t.setUniform("preventOverlap",this.preventOverlap),t.setUniform("positionTex",this._positionPrevTex),t.render(e);var r=this._edgeForceMesh;r.material.set("linLogMode",this.linLogMode),r.material.set("edgeWeightInfluence",this.edgeWeightInfluence),r.material.set("preventOverlap",this.preventOverlap),r.material.set("positionTex",this._positionPrevTex),e.gl.enable(e.gl.BLEND),e.renderPass([r],this._dummyCamera),this._framebuffer.attach(this._weightedSumTex),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT),e.gl.enable(e.gl.BLEND);var i=this._weightedSumMesh;i.material.set("positionTex",this._positionPrevTex),i.material.set("forceTex",this._forceTex),i.material.set("forcePrevTex",this._forcePrevTex),e.renderPass([i],this._dummyCamera),this._framebuffer.attach(this._globalSpeedTex);var n=this._globalSpeedPass;n.setUniform("globalSpeedPrevTex",this._globalSpeedPrevTex),n.setUniform("weightedSumTex",this._weightedSumTex),n.setUniform("jitterTolerence",this.jitterTolerence),e.gl.disable(e.gl.BLEND),n.render(e);var a=this._positionPass;this._framebuffer.attach(this._positionTex),a.setUniform("globalSpeedTex",this._globalSpeedTex),a.setUniform("positionTex",this._positionPrevTex),a.setUniform("forceTex",this._forceTex),a.setUniform("forcePrevTex",this._forcePrevTex),a.render(e),this._framebuffer.unbind(e),this._swapTexture()};Ne.prototype.update=function(e,t,r){t==null&&(t=1),t=Math.max(t,1);for(var i=0;i<t;i++)this.step(e);r&&r()};Ne.prototype.getNodePositionTexture=function(){return this._inited?this._positionPrevTex:this._positionSourceTex};Ne.prototype.getNodeUV=function(e,t){t=t||[];var r=this._positionTex.width,i=this._positionTex.height;return t[0]=e%r/(r-1),t[1]=Math.floor(e/r)/(i-1)||0,t};Ne.prototype.getNodePosition=function(e,t){var r=this._positionArr,i=this._positionTex.width,n=this._positionTex.height,a=i*n;(!r||r.length!==a*4)&&(r=this._positionArr=new Float32Array(a*4)),this._framebuffer.bind(e),this._framebuffer.attach(this._positionPrevTex),e.gl.readPixels(0,0,i,n,e.gl.RGBA,e.gl.FLOAT,r),this._framebuffer.unbind(e),t||(t=new Float32Array(this._nodes.length*2));for(var o=0;o<this._nodes.length;o++)t[o*2]=r[o*4],t[o*2+1]=r[o*4+1];return t};Ne.prototype.getTextureData=function(e,t){var r=this["_"+t+"Tex"],i=r.width,n=r.height;this._framebuffer.bind(e),this._framebuffer.attach(r);var a=new Float32Array(i*n*4);return e.gl.readPixels(0,0,i,n,e.gl.RGBA,e.gl.FLOAT,a),this._framebuffer.unbind(e),a};Ne.prototype.getTextureSize=function(){return{width:this._positionTex.width,height:this._positionTex.height}};Ne.prototype.isFinished=function(e){return this._frame>e};Ne.prototype._swapTexture=function(){var e=this._positionPrevTex;this._positionPrevTex=this._positionTex,this._positionTex=e;var e=this._forcePrevTex;this._forcePrevTex=this._forceTex,this._forceTex=e;var e=this._globalSpeedPrevTex;this._globalSpeedPrevTex=this._globalSpeedTex,this._globalSpeedTex=e};Ne.prototype._initFromSource=function(e){this._framebuffer.attach(this._positionPrevTex),this._framebuffer.bind(e),this._copyPass.setUniform("texture",this._positionSourceTex),this._copyPass.render(e),e.gl.clearColor(0,0,0,0),this._framebuffer.attach(this._forcePrevTex),e.gl.clear(e.gl.COLOR_BUFFER_BIT),this._framebuffer.attach(this._globalSpeedPrevTex),e.gl.clear(e.gl.COLOR_BUFFER_BIT),this._framebuffer.unbind(e)};Ne.prototype._resize=function(e,t){["_positionSourceTex","_positionTex","_positionPrevTex","_forceTex","_forcePrevTex"].forEach(function(r){this[r].width=e,this[r].height=t,this[r].dirty()},this)};Ne.prototype.dispose=function(e){this._framebuffer.dispose(e),this._copyPass.dispose(e),this._nodeRepulsionPass.dispose(e),this._positionPass.dispose(e),this._globalSpeedPass.dispose(e),this._edgeForceMesh.geometry.dispose(e),this._weightedSumMesh.geometry.dispose(e),this._positionSourceTex.dispose(e),this._positionTex.dispose(e),this._positionPrevTex.dispose(e),this._forceTex.dispose(e),this._forcePrevTex.dispose(e),this._weightedSumTex.dispose(e),this._globalSpeedTex.dispose(e),this._globalSpeedPrevTex.dispose(e)};function av(){var e={create:function(){return new Float32Array(2)},dist:function(l,h){var u=h[0]-l[0],f=h[1]-l[1];return Math.sqrt(u*u+f*f)},len:function(l){var h=l[0],u=l[1];return Math.sqrt(h*h+u*u)},scaleAndAdd:function(l,h,u,f){return l[0]=h[0]+u[0]*f,l[1]=h[1]+u[1]*f,l},scale:function(l,h,u){return l[0]=h[0]*u,l[1]=h[1]*u,l},add:function(l,h,u){return l[0]=h[0]+u[0],l[1]=h[1]+u[1],l},sub:function(l,h,u){return l[0]=h[0]-u[0],l[1]=h[1]-u[1],l},normalize:function(l,h){var u=h[0],f=h[1],d=u*u+f*f;return d>0&&(d=1/Math.sqrt(d),l[0]=h[0]*d,l[1]=h[1]*d),l},negate:function(l,h){return l[0]=-h[0],l[1]=-h[1],l},copy:function(l,h){return l[0]=h[0],l[1]=h[1],l},set:function(l,h,u){return l[0]=h,l[1]=u,l}};function t(){this.subRegions=[],this.nSubRegions=0,this.node=null,this.mass=0,this.centerOfMass=null,this.bbox=new Float32Array(4),this.size=0}var r=t.prototype;r.beforeUpdate=function(){for(var l=0;l<this.nSubRegions;l++)this.subRegions[l].beforeUpdate();this.mass=0,this.centerOfMass&&(this.centerOfMass[0]=0,this.centerOfMass[1]=0),this.nSubRegions=0,this.node=null},r.afterUpdate=function(){this.subRegions.length=this.nSubRegions;for(var l=0;l<this.nSubRegions;l++)this.subRegions[l].afterUpdate()},r.addNode=function(l){if(this.nSubRegions===0)if(this.node==null){this.node=l;return}else this._addNodeToSubRegion(this.node),this.node=null;this._addNodeToSubRegion(l),this._updateCenterOfMass(l)},r.findSubRegion=function(l,h){for(var u=0;u<this.nSubRegions;u++){var f=this.subRegions[u];if(f.contain(l,h))return f}},r.contain=function(l,h){return this.bbox[0]<=l&&this.bbox[2]>=l&&this.bbox[1]<=h&&this.bbox[3]>=h},r.setBBox=function(l,h,u,f){this.bbox[0]=l,this.bbox[1]=h,this.bbox[2]=u,this.bbox[3]=f,this.size=(u-l+f-h)/2},r._newSubRegion=function(){var l=this.subRegions[this.nSubRegions];return l||(l=new t,this.subRegions[this.nSubRegions]=l),this.nSubRegions++,l},r._addNodeToSubRegion=function(l){var h=this.findSubRegion(l.position[0],l.position[1]),u=this.bbox;if(!h){var f=(u[0]+u[2])/2,d=(u[1]+u[3])/2,c=(u[2]-u[0])/2,v=(u[3]-u[1])/2,p=l.position[0]>=f?1:0,m=l.position[1]>=d?1:0,h=this._newSubRegion();h.setBBox(p*c+u[0],m*v+u[1],(p+1)*c+u[0],(m+1)*v+u[1])}h.addNode(l)},r._updateCenterOfMass=function(l){this.centerOfMass==null&&(this.centerOfMass=new Float32Array(2));var h=this.centerOfMass[0]*this.mass,u=this.centerOfMass[1]*this.mass;h+=l.position[0]*l.mass,u+=l.position[1]*l.mass,this.mass+=l.mass,this.centerOfMass[0]=h/this.mass,this.centerOfMass[1]=u/this.mass};function i(){this.position=new Float32Array(2),this.force=e.create(),this.forcePrev=e.create(),this.mass=1,this.inDegree=0,this.outDegree=0}function n(l,h){this.source=l,this.target=h,this.weight=1}function a(){this.autoSettings=!0,this.barnesHutOptimize=!0,this.barnesHutTheta=1.5,this.repulsionByDegree=!0,this.linLogMode=!1,this.strongGravityMode=!1,this.gravity=1,this.scaling=1,this.edgeWeightInfluence=1,this.jitterTolerence=.1,this.preventOverlap=!1,this.dissuadeHubs=!1,this.rootRegion=new t,this.rootRegion.centerOfMass=e.create(),this.nodes=[],this.edges=[],this.bbox=new Float32Array(4),this.gravityCenter=null,this._massArr=null,this._swingingArr=null,this._sizeArr=null,this._globalSpeed=0}var o=a.prototype;o.initNodes=function(l,h,u){var f=h.length;this.nodes.length=0;for(var d=typeof u<"u",c=0;c<f;c++){var v=new i;v.position[0]=l[c*2],v.position[1]=l[c*2+1],v.mass=h[c],d&&(v.size=u[c]),this.nodes.push(v)}this._massArr=h,this._swingingArr=new Float32Array(f),d&&(this._sizeArr=u)},o.initEdges=function(l,h){var u=l.length/2;this.edges.length=0;for(var f=0;f<u;f++){var d=l[f*2],c=l[f*2+1],v=this.nodes[d],p=this.nodes[c];if(!v||!p){console.error("Node not exists, try initNodes before initEdges");return}v.outDegree++,p.inDegree++;var m=new n(v,p);h&&(m.weight=h[f]),this.edges.push(m)}},o.updateSettings=function(){if(this.repulsionByDegree)for(var l=0;l<this.nodes.length;l++){var h=this.nodes[l];h.mass=h.inDegree+h.outDegree+1}else for(var l=0;l<this.nodes.length;l++){var h=this.nodes[l];h.mass=this._massArr[l]}},o.update=function(){var l=this.nodes.length;if(this.updateSettings(),this.updateBBox(),this.barnesHutOptimize){this.rootRegion.setBBox(this.bbox[0],this.bbox[1],this.bbox[2],this.bbox[3]),this.rootRegion.beforeUpdate();for(var h=0;h<l;h++)this.rootRegion.addNode(this.nodes[h]);this.rootRegion.afterUpdate()}for(var h=0;h<l;h++){var u=this.nodes[h];e.copy(u.forcePrev,u.force),e.set(u.force,0,0)}for(var h=0;h<l;h++){var f=this.nodes[h];if(this.barnesHutOptimize)this.applyRegionToNodeRepulsion(this.rootRegion,f);else for(var d=h+1;d<l;d++){var c=this.nodes[d];this.applyNodeToNodeRepulsion(f,c,!1)}this.gravity>0&&(this.strongGravityMode?this.applyNodeStrongGravity(f):this.applyNodeGravity(f))}for(var h=0;h<this.edges.length;h++)this.applyEdgeAttraction(this.edges[h]);for(var v=0,p=0,m=e.create(),h=0;h<l;h++){var u=this.nodes[h],g=e.dist(u.force,u.forcePrev);v+=g*u.mass,e.add(m,u.force,u.forcePrev);var T=e.len(m)*.5;p+=T*u.mass,this._swingingArr[h]=g}var x=this.jitterTolerence*this.jitterTolerence*p/v;this._globalSpeed>0&&(x=Math.min(x/this._globalSpeed,1.5)*this._globalSpeed),this._globalSpeed=x;for(var h=0;h<l;h++){var u=this.nodes[h],g=this._swingingArr[h],_=.1*x/(1+x*Math.sqrt(g)),S=e.len(u.force);S>0&&(_=Math.min(S*_,10)/S,e.scaleAndAdd(u.position,u.position,u.force,_))}},o.applyRegionToNodeRepulsion=function(){var l=e.create();return function(u,f){if(u.node)this.applyNodeToNodeRepulsion(u.node,f,!0);else{e.sub(l,f.position,u.centerOfMass);var d=l[0]*l[0]+l[1]*l[1];if(d>this.barnesHutTheta*u.size*u.size){var c=this.scaling*f.mass*u.mass/d;e.scaleAndAdd(f.force,f.force,l,c)}else for(var v=0;v<u.nSubRegions;v++)this.applyRegionToNodeRepulsion(u.subRegions[v],f)}}}(),o.applyNodeToNodeRepulsion=function(){var l=e.create();return function(u,f,d){if(u!=f){e.sub(l,u.position,f.position);var c=l[0]*l[0]+l[1]*l[1];if(c!==0){var v;if(this.preventOverlap){var p=Math.sqrt(c);if(p=p-u.size-f.size,p>0)v=this.scaling*u.mass*f.mass/(p*p);else if(p<0)v=this.scaling*100*u.mass*f.mass;else return}else v=this.scaling*u.mass*f.mass/c;e.scaleAndAdd(u.force,u.force,l,v),e.scaleAndAdd(f.force,f.force,l,-v)}}}}(),o.applyEdgeAttraction=function(){var l=e.create();return function(u){var f=u.source,d=u.target;e.sub(l,f.position,d.position);var c=e.len(l),v;this.edgeWeightInfluence===0?v=1:this.edgeWeightInfluence===1?v=u.weight:v=Math.pow(u.weight,this.edgeWeightInfluence);var p;this.preventOverlap&&(c=c-f.size-d.size,c<=0)||(this.linLogMode?p=-v*Math.log(c+1)/(c+1):p=-v,e.scaleAndAdd(f.force,f.force,l,p),e.scaleAndAdd(d.force,d.force,l,-p))}}(),o.applyNodeGravity=function(){var l=e.create();return function(h){e.sub(l,this.gravityCenter,h.position);var u=e.len(l);e.scaleAndAdd(h.force,h.force,l,this.gravity*h.mass/(u+1))}}(),o.applyNodeStrongGravity=function(){var l=e.create();return function(h){e.sub(l,this.gravityCenter,h.position),e.scaleAndAdd(h.force,h.force,l,this.gravity*h.mass)}}(),o.updateBBox=function(){for(var l=1/0,h=1/0,u=-1/0,f=-1/0,d=0;d<this.nodes.length;d++){var c=this.nodes[d].position;l=Math.min(l,c[0]),h=Math.min(h,c[1]),u=Math.max(u,c[0]),f=Math.max(f,c[1])}this.bbox[0]=l,this.bbox[1]=h,this.bbox[2]=u,this.bbox[3]=f},o.getGlobalSpeed=function(){return this._globalSpeed};var s=null;self.onmessage=function(l){switch(l.data.cmd){case"init":s=new a,s.initNodes(l.data.nodesPosition,l.data.nodesMass,l.data.nodesSize),s.initEdges(l.data.edges,l.data.edgesWeight);break;case"updateConfig":if(s)for(var h in l.data.config)s[h]=l.data.config[h];break;case"update":var u=l.data.steps;if(s){for(var f=0;f<u;f++)s.update();for(var d=s.nodes.length,c=new Float32Array(d*2),f=0;f<d;f++){var v=s.nodes[f];c[f*2]=v.position[0],c[f*2+1]=v.position[1]}self.postMessage({buffer:c.buffer,globalSpeed:s.getGlobalSpeed()},[c.buffer])}else{var p=new Float32Array;self.postMessage({buffer:p.buffer,globalSpeed:s.getGlobalSpeed()},[p.buffer])}break}}}var $r=av.toString();$r=$r.slice($r.indexOf("{")+1,$r.lastIndexOf("}"));var ti={barnesHutOptimize:!0,barnesHutTheta:1.5,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null},ot=function(e){for(var t in ti)this[t]=ti[t];if(e)for(var t in e)this[t]=e[t];this._nodes=[],this._edges=[],this._disposed=!1,this._positionTex=new Q({type:O.FLOAT,flipY:!1,minFilter:O.NEAREST,magFilter:O.NEAREST})};ot.prototype.initData=function(e,t){var r=new Blob([$r]),i=window.URL.createObjectURL(r);this._worker=new Worker(i),this._worker.onmessage=this._$onupdate.bind(this),this._nodes=e,this._edges=t,this._frame=0;for(var n=e.length,a=t.length,o=new Float32Array(n*2),s=new Float32Array(n),l=new Float32Array(n),h=new Float32Array(a*2),u=new Float32Array(a),f=0;f<e.length;f++){var d=e[f];o[f*2]=d.x,o[f*2+1]=d.y,s[f]=d.mass==null?1:d.mass,l[f]=d.size==null?1:d.size}for(var f=0;f<t.length;f++){var c=t[f],v=c.node1,p=c.node2;h[f*2]=v,h[f*2+1]=p,u[f]=c.weight==null?1:c.weight}var m=Math.ceil(Math.sqrt(e.length)),g=m,T=new Float32Array(m*g*4),x=this._positionTex;x.width=m,x.height=g,x.pixels=T,this._worker.postMessage({cmd:"init",nodesPosition:o,nodesMass:s,nodesSize:l,edges:h,edgesWeight:u}),this._globalSpeed=1/0};ot.prototype.updateOption=function(e){var t={};for(var r in ti)t[r]=ti[r];var i=this._nodes,n=this._edges,a=i.length;if(a>5e4?t.jitterTolerence=10:a>5e3?t.jitterTolerence=1:t.jitterTolerence=.1,a>100?t.scaling=2:t.scaling=10,a>1e3?t.barnesHutOptimize=!0:t.barnesHutOptimize=!1,e)for(var r in ti)e[r]!=null&&(t[r]=e[r]);if(!t.gravityCenter){for(var o=[1/0,1/0],s=[-1/0,-1/0],l=0;l<i.length;l++)o[0]=Math.min(i[l].x,o[0]),o[1]=Math.min(i[l].y,o[1]),s[0]=Math.max(i[l].x,s[0]),s[1]=Math.max(i[l].y,s[1]);t.gravityCenter=[(o[0]+s[0])*.5,(o[1]+s[1])*.5]}for(var l=0;l<n.length;l++){var h=n[l].node1,u=n[l].node2;i[h].degree=(i[h].degree||0)+1,i[u].degree=(i[u].degree||0)+1}this._worker&&this._worker.postMessage({cmd:"updateConfig",config:t})};ot.prototype.update=function(e,t,r){t==null&&(t=1),t=Math.max(t,1),this._frame+=t,this._onupdate=r,this._worker&&this._worker.postMessage({cmd:"update",steps:Math.round(t)})};ot.prototype._$onupdate=function(e){if(!this._disposed){var t=new Float32Array(e.data.buffer);this._globalSpeed=e.data.globalSpeed,this._positionArr=t,this._updateTexture(t),this._onupdate&&this._onupdate()}};ot.prototype.getNodePositionTexture=function(){return this._positionTex};ot.prototype.getNodeUV=function(e,t){t=t||[];var r=this._positionTex.width,i=this._positionTex.height;return t[0]=e%r/(r-1),t[1]=Math.floor(e/r)/(i-1),t};ot.prototype.getNodes=function(){return this._nodes};ot.prototype.getEdges=function(){return this._edges};ot.prototype.isFinished=function(e){return this._frame>e};ot.prototype.getNodePosition=function(e,t){if(t||(t=new Float32Array(this._nodes.length*2)),this._positionArr)for(var r=0;r<this._positionArr.length;r++)t[r]=this._positionArr[r];return t};ot.prototype._updateTexture=function(e){for(var t=this._positionTex.pixels,r=0,i=0;i<e.length;)t[r++]=e[i++],t[r++]=e[i++],t[r++]=1,t[r++]=1;this._positionTex.dirty()};ot.prototype.dispose=function(e){this._disposed=!0,this._worker=null};const Ho=ot;var ov=He.extend(function(){return{zr:null,viewGL:null,minZoom:.2,maxZoom:5,_needsUpdate:!1,_dx:0,_dy:0,_zoom:1}},function(){this._mouseDownHandler=this._mouseDownHandler.bind(this),this._mouseWheelHandler=this._mouseWheelHandler.bind(this),this._mouseMoveHandler=this._mouseMoveHandler.bind(this),this._mouseUpHandler=this._mouseUpHandler.bind(this),this._update=this._update.bind(this)},{init:function(){var e=this.zr;e.on("mousedown",this._mouseDownHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("globalout",this._mouseUpHandler),e.animation.on("frame",this._update)},setTarget:function(e){this._target=e},setZoom:function(e){this._zoom=Math.max(Math.min(e,this.maxZoom),this.minZoom),this._needsUpdate=!0},setOffset:function(e){this._dx=e[0],this._dy=e[1],this._needsUpdate=!0},getZoom:function(){return this._zoom},getOffset:function(){return[this._dx,this._dy]},_update:function(){if(this._target&&this._needsUpdate){var e=this._target,t=this._zoom;e.position.x=this._dx,e.position.y=this._dy,e.scale.set(t,t,t),this.zr.refresh(),this._needsUpdate=!1,this.trigger("update")}},_mouseDownHandler:function(e){if(!e.target){var t=e.offsetX,r=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(t,r))){this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler);var i=this._convertPos(t,r);this._x=i.x,this._y=i.y}}},_convertPos:function(e,t){var r=this.viewGL.camera,i=this.viewGL.viewport;return{x:(e-i.x)/i.width*(r.right-r.left)+r.left,y:(t-i.y)/i.height*(r.bottom-r.top)+r.top}},_mouseMoveHandler:function(e){var t=this._convertPos(e.offsetX,e.offsetY);this._dx+=t.x-this._x,this._dy+=t.y-this._y,this._x=t.x,this._y=t.y,this._needsUpdate=!0},_mouseUpHandler:function(e){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_mouseWheelHandler:function(e){e=e.event;var t=e.wheelDelta||-e.detail;if(t!==0){var r=e.offsetX,i=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(r,i))){var n=t>0?1.1:.9,a=Math.max(Math.min(this._zoom*n,this.maxZoom),this.minZoom);n=a/this._zoom;var o=this._convertPos(r,i),s=(o.x-this._dx)*(n-1),l=(o.y-this._dy)*(n-1);this._dx-=s,this._dy-=l,this._zoom=a,this._needsUpdate=!0}}},dispose:function(){var e=this.zr;e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("globalout",this._mouseUpHandler),e.animation.off("frame",this._update)}});const sv=ov,lv=`@export ecgl.lines2D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec2 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

#ifdef POSITIONTEXTURE_ENABLED
uniform sampler2D positionTexture;
#endif

void main()
{
 gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);

 v_Color = a_Color;
}

@end

@export ecgl.lines2D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

void main()
{
 gl_FragColor = color * v_Color;
}
@end


@export ecgl.meshLines2D.vertex

attribute vec2 position: POSITION;
attribute vec2 normal;
attribute float offset;
attribute vec4 a_Color : COLOR;

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec4 v_Color;
varying float v_Miter;

void main()
{
 vec4 p2 = worldViewProjection * vec4(position + normal, -10.0, 1.0);
 gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);

 p2.xy /= p2.w;
 gl_Position.xy /= gl_Position.w;

 vec2 N = normalize(p2.xy - gl_Position.xy);
 gl_Position.xy += N * offset / viewport.zw * 2.0;

 gl_Position.xy *= gl_Position.w;

 v_Color = a_Color;
}
@end


@export ecgl.meshLines2D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;
varying float v_Miter;

void main()
{
 gl_FragColor = color * v_Color;
}

@end`;var Pi=be.vec2;y.Shader.import(lv);var hv=1;const uv=gt.extend({type:"graphGL",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this.viewGL=new he("orthographic"),this.viewGL.camera.left=this.viewGL.camera.right=0,this.viewGL.add(this.groupGL),this._pointsBuilder=new ur(!0,t),this._forceEdgesMesh=new y.Mesh({material:new y.Material({shader:y.createShader("ecgl.forceAtlas2.edges"),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new y.Geometry({attributes:{node:new y.Geometry.Attribute("node","float",2),color:new y.Geometry.Attribute("color","float",4,"COLOR")},dynamic:!0,mainAttribute:"node"}),renderOrder:-1,mode:y.Mesh.LINES}),this._edgesMesh=new y.Mesh({material:new y.Material({shader:y.createShader("ecgl.meshLines2D"),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new ul({useNativeLine:!1,dynamic:!0}),renderOrder:-1,culling:!1}),this._layoutId=0,this._control=new sv({zr:t.getZr(),viewGL:this.viewGL}),this._control.setTarget(this.groupGL),this._control.init(),this._clickHandler=this._clickHandler.bind(this)},render:function(e,t,r){this.groupGL.add(this._pointsBuilder.rootNode),this._model=e,this._api=r,this._initLayout(e,t,r),this._pointsBuilder.update(e,t,r),this._forceLayoutInstance instanceof Ne||this.groupGL.remove(this._forceEdgesMesh),this._updateCamera(e,r),this._control.off("update"),this._control.on("update",function(){r.dispatchAction({type:"graphGLRoam",seriesId:e.id,zoom:this._control.getZoom(),offset:this._control.getOffset()}),this._pointsBuilder.updateView(this.viewGL.camera)},this),this._control.setZoom(Y.firstNotNull(e.get("zoom"),1)),this._control.setOffset(e.get("offset")||[0,0]);var i=this._pointsBuilder.getPointsMesh();if(i.off("mousemove",this._mousemoveHandler),i.off("mouseout",this._mouseOutHandler,this),r.getZr().off("click",this._clickHandler),this._pointsBuilder.highlightOnMouseover=!0,e.get("focusNodeAdjacency")){var n=e.get("focusNodeAdjacencyOn");n==="click"?r.getZr().on("click",this._clickHandler):n==="mouseover"&&(i.on("mousemove",this._mousemoveHandler,this),i.on("mouseout",this._mouseOutHandler,this),this._pointsBuilder.highlightOnMouseover=!1)}this._lastMouseOverDataIndex=-1},_clickHandler:function(e){if(!this._layouting){var t=this._pointsBuilder.getPointsMesh().dataIndex;t>=0?this._api.dispatchAction({type:"graphGLFocusNodeAdjacency",seriesId:this._model.id,dataIndex:t}):this._api.dispatchAction({type:"graphGLUnfocusNodeAdjacency",seriesId:this._model.id})}},_mousemoveHandler:function(e){if(!this._layouting){var t=this._pointsBuilder.getPointsMesh().dataIndex;t>=0?t!==this._lastMouseOverDataIndex&&this._api.dispatchAction({type:"graphGLFocusNodeAdjacency",seriesId:this._model.id,dataIndex:t}):this._mouseOutHandler(e),this._lastMouseOverDataIndex=t}},_mouseOutHandler:function(e){this._layouting||(this._api.dispatchAction({type:"graphGLUnfocusNodeAdjacency",seriesId:this._model.id}),this._lastMouseOverDataIndex=-1)},_updateForceEdgesGeometry:function(e,t){var r=this._forceEdgesMesh.geometry,i=t.getEdgeData(),n=0,a=this._forceLayoutInstance,o=i.count()*2;r.attributes.node.init(o),r.attributes.color.init(o),i.each(function(s){var l=e[s];r.attributes.node.set(n,a.getNodeUV(l.node1)),r.attributes.node.set(n+1,a.getNodeUV(l.node2));var h=Fe(i,l.dataIndex),u=y.parseColor(h);u[3]*=Y.firstNotNull(Ue(i,l.dataIndex),1),r.attributes.color.set(n,u),r.attributes.color.set(n+1,u),n+=2}),r.dirty()},_updateMeshLinesGeometry:function(){var t=this._model.getEdgeData(),e=this._edgesMesh.geometry,t=this._model.getEdgeData(),r=this._model.getData().getLayout("points");e.resetOffset(),e.setVertexCount(t.count()*e.getLineVertexCount()),e.setTriangleCount(t.count()*e.getLineTriangleCount());var i=[],n=[],a=["lineStyle","width"];this._originalEdgeColors=new Float32Array(t.count()*4),this._edgeIndicesMap=new Float32Array(t.count()),t.each(function(o){var s=t.graph.getEdgeByIndex(o),l=s.node1.dataIndex*2,h=s.node2.dataIndex*2;i[0]=r[l],i[1]=r[l+1],n[0]=r[h],n[1]=r[h+1];var u=Fe(t,s.dataIndex),f=y.parseColor(u);f[3]*=Y.firstNotNull(Ue(t,s.dataIndex),1);var d=t.getItemModel(s.dataIndex),c=Y.firstNotNull(d.get(a),1)*this._api.getDevicePixelRatio();e.addLine(i,n,f,c);for(var v=0;v<4;v++)this._originalEdgeColors[s.dataIndex*4+v]=f[v];this._edgeIndicesMap[s.dataIndex]=o},this),e.dirty()},_updateForceNodesGeometry:function(e){for(var t=this._pointsBuilder.getPointsMesh(),r=[],i=0;i<e.count();i++)this._forceLayoutInstance.getNodeUV(i,r),t.geometry.attributes.position.set(i,r);t.geometry.dirty("position")},_initLayout:function(e,t,r){var i=e.get("layout"),n=e.getGraph(),a=e.getBoxLayoutParams(),o=en(a,{width:r.getWidth(),height:r.getHeight()});i==="force"&&(i="forceAtlas2"),this.stopLayout(e,t,r,{beforeLayout:!0});var s=e.getData(),l=e.getData();if(i==="forceAtlas2"){var h=e.getModel("forceAtlas2"),u=this._forceLayoutInstance,f=[],d=[],c=s.getDataExtent("value"),v=l.getDataExtent("value"),p=Y.firstNotNull(h.get("edgeWeight"),1),m=Y.firstNotNull(h.get("nodeWeight"),1);typeof p=="number"&&(p=[p,p]),typeof m=="number"&&(m=[m,m]);var g=0,T={},x=new Float32Array(s.count()*2);if(n.eachNode(function(S){var A=S.dataIndex,b=s.get("value",A),w,L;if(s.hasItemOption){var I=s.getItemModel(A);w=I.get("x"),L=I.get("y")}w==null&&(w=o.x+Math.random()*o.width,L=o.y+Math.random()*o.height),x[g*2]=w,x[g*2+1]=L,T[S.id]=g++;var M=wa(b,c,m);isNaN(M)&&(isNaN(m[0])?M=1:M=m[0]),f.push({x:w,y:L,mass:M,size:s.getItemVisual(A,"symbolSize")})}),s.setLayout("points",x),n.eachEdge(function(S){var A=S.dataIndex,b=s.get("value",A),w=wa(b,v,p);isNaN(w)&&(isNaN(p[0])?w=1:w=p[0]),d.push({node1:T[S.node1.id],node2:T[S.node2.id],weight:w,dataIndex:A})}),!u){var _=h.get("GPU");this._forceLayoutInstance&&(_&&!(this._forceLayoutInstance instanceof Ne)||!_&&!(this._forceLayoutInstance instanceof Ho))&&(this._forceLayoutInstanceToDispose=this._forceLayoutInstance),u=this._forceLayoutInstance=_?new Ne:new Ho}u.initData(f,d),u.updateOption(h.option),this._updateForceEdgesGeometry(u.getEdges(),e),this._updatePositionTexture(),r.dispatchAction({type:"graphGLStartLayout",from:this.uid})}else{var x=new Float32Array(s.count()*2),g=0;n.eachNode(function(b){var w=b.dataIndex,L,I;if(s.hasItemOption){var M=s.getItemModel(w);L=M.get("x"),I=M.get("y")}x[g++]=L,x[g++]=I}),s.setLayout("points",x),this._updateAfterLayout(e,t,r)}},_updatePositionTexture:function(){var e=this._forceLayoutInstance.getNodePositionTexture();this._pointsBuilder.setPositionTexture(e),this._forceEdgesMesh.material.set("positionTex",e)},startLayout:function(e,t,a,i){if(!(i&&i.from!=null&&i.from!==this.uid)){var n=this.viewGL,a=this._api,o=this._forceLayoutInstance,s=this._model.getData(),l=this._model.getModel("forceAtlas2");if(o&&(this.groupGL.remove(this._edgesMesh),this.groupGL.add(this._forceEdgesMesh),!!this._forceLayoutInstance)){this._updateForceNodesGeometry(e.getData()),this._pointsBuilder.hideLabels();var h=this,u=this._layoutId=hv++,f=l.getShallow("maxSteps"),d=l.getShallow("steps"),c=0,v=Math.max(d*2,20),p=function(m){if(m===h._layoutId){if(o.isFinished(f)){a.dispatchAction({type:"graphGLStopLayout",from:h.uid}),a.dispatchAction({type:"graphGLFinishLayout",points:s.getLayout("points"),from:h.uid});return}o.update(n.layer.renderer,d,function(){h._updatePositionTexture(),c+=d,c>=v&&(h._syncNodePosition(e),c=0),a.getZr().refresh(),zn(function(){p(m)})})}};zn(function(){h._forceLayoutInstanceToDispose&&(h._forceLayoutInstanceToDispose.dispose(n.layer.renderer),h._forceLayoutInstanceToDispose=null),p(u)}),this._layouting=!0}}},stopLayout:function(e,t,r,i){i&&i.from!=null&&i.from!==this.uid||(this._layoutId=0,this.groupGL.remove(this._forceEdgesMesh),this.groupGL.add(this._edgesMesh),this._forceLayoutInstance&&this.viewGL.layer&&(i&&i.beforeLayout||(this._syncNodePosition(e),this._updateAfterLayout(e,t,r)),this._api.getZr().refresh(),this._layouting=!1))},_syncNodePosition:function(e){var t=this._forceLayoutInstance.getNodePosition(this.viewGL.layer.renderer);e.getData().setLayout("points",t),e.setNodePosition(t)},_updateAfterLayout:function(e,t,r){this._updateMeshLinesGeometry(),this._pointsBuilder.removePositionTexture(),this._pointsBuilder.updateLayout(e,t,r),this._pointsBuilder.updateView(this.viewGL.camera),this._pointsBuilder.updateLabels(),this._pointsBuilder.showLabels()},focusNodeAdjacency:function(e,t,r,i){var n=this._model.getData();this._downplayAll();var a=i.dataIndex,o=n.graph,s=[],l=o.getNodeByIndex(a);s.push(l),l.edges.forEach(function(u){u.dataIndex<0||(u.node1!==l&&s.push(u.node1),u.node2!==l&&s.push(u.node2))},this),this._pointsBuilder.fadeOutAll(.05),this._fadeOutEdgesAll(.05),s.forEach(function(u){this._pointsBuilder.highlight(n,u.dataIndex)},this),this._pointsBuilder.updateLabels(s.map(function(u){return u.dataIndex}));var h=[];l.edges.forEach(function(u){u.dataIndex>=0&&(this._highlightEdge(u.dataIndex),h.push(u))},this),this._focusNodes=s,this._focusEdges=h},unfocusNodeAdjacency:function(e,t,r,i){this._downplayAll(),this._pointsBuilder.fadeInAll(),this._fadeInEdgesAll(),this._pointsBuilder.updateLabels()},_highlightEdge:function(e){var t=this._model.getEdgeData().getItemModel(e),r=y.parseColor(t.get("emphasis.lineStyle.color")||t.get("lineStyle.color")),i=Y.firstNotNull(t.get("emphasis.lineStyle.opacity"),t.get("lineStyle.opacity"),1);r[3]*=i,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],r)},_downplayAll:function(){this._focusNodes&&this._focusNodes.forEach(function(e){this._pointsBuilder.downplay(this._model.getData(),e.dataIndex)},this),this._focusEdges&&this._focusEdges.forEach(function(e){this._downplayEdge(e.dataIndex)},this)},_downplayEdge:function(e){var t=this._getColor(e,[]);this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],t)},_setEdgeFade:function(){var e=[];return function(t,r){this._getColor(t,e),e[3]*=r,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[t],e)}}(),_getColor:function(e,t){for(var r=0;r<4;r++)t[r]=this._originalEdgeColors[e*4+r];return t},_fadeOutEdgesAll:function(e){var t=this._model.getData().graph;t.eachEdge(function(r){this._setEdgeFade(r.dataIndex,e)},this)},_fadeInEdgesAll:function(){this._fadeOutEdgesAll(1)},_updateCamera:function(e,t){this.viewGL.setViewport(0,0,t.getWidth(),t.getHeight(),t.getDevicePixelRatio());for(var r=this.viewGL.camera,i=e.getData(),n=i.getLayout("points"),a=Pi.create(1/0,1/0),o=Pi.create(-1/0,-1/0),s=[],l=0;l<n.length;)s[0]=n[l++],s[1]=n[l++],Pi.min(a,a,s),Pi.max(o,o,s);var h=(o[1]+a[1])/2,u=(o[0]+a[0])/2;if(!(u>r.left&&u<r.right&&h<r.bottom&&h>r.top)){var f=Math.max(o[0]-a[0],10),d=f/t.getWidth()*t.getHeight();f*=1.4,d*=1.4,a[0]-=f*.2,r.left=a[0],r.top=h-d/2,r.bottom=h+d/2,r.right=f+a[0],r.near=0,r.far=100}},dispose:function(){var e=this.viewGL.layer.renderer;this._forceLayoutInstance&&this._forceLayoutInstance.dispose(e),this.groupGL.removeAll(),this._layoutId=-1,this._pointsBuilder.dispose()},remove:function(){this.groupGL.removeAll(),this._control.dispose()}});function Di(e){return e instanceof Array||(e=[e,e]),e}function fv(e){e.registerChartView(uv),e.registerSeriesModel(iv),e.registerVisual(function(r){const i={};r.eachSeriesByType("graphGL",function(n){var a=n.getCategoriesData(),o=n.getData(),s={};a.each(function(l){var h=a.getName(l);s["ec-"+h]=l;var u=a.getItemModel(l),f=u.getModel("itemStyle").getItemStyle();f.fill||(f.fill=n.getColorFromPalette(h,i)),a.setItemVisual(l,"style",f);var d=["symbol","symbolSize","symbolKeepAspect"];for(let v=0;v<d.length;v++){var c=u.getShallow(d[v],!0);c!=null&&a.setItemVisual(l,d[v],c)}}),a.count()&&o.each(function(l){var h=o.getItemModel(l);let u=h.getShallow("category");if(u!=null){typeof u=="string"&&(u=s["ec-"+u]);var f=a.getItemVisual(u,"style"),d=o.ensureUniqueItemVisual(l,"style");ba(d,f);var c=["symbol","symbolSize","symbolKeepAspect"];for(let v=0;v<c.length;v++)o.setItemVisual(l,c[v],a.getItemVisual(u,c[v]))}})})}),e.registerVisual(function(r){r.eachSeriesByType("graphGL",function(i){var n=i.getGraph(),a=i.getEdgeData(),o=Di(i.get("edgeSymbol")),s=Di(i.get("edgeSymbolSize"));a.setVisual("drawType","stroke"),a.setVisual("fromSymbol",o&&o[0]),a.setVisual("toSymbol",o&&o[1]),a.setVisual("fromSymbolSize",s&&s[0]),a.setVisual("toSymbolSize",s&&s[1]),a.setVisual("style",i.getModel("lineStyle").getLineStyle()),a.each(function(l){var h=a.getItemModel(l),u=n.getEdgeByIndex(l),f=Di(h.getShallow("symbol",!0)),d=Di(h.getShallow("symbolSize",!0)),c=h.getModel("lineStyle").getLineStyle(),v=a.ensureUniqueItemVisual(l,"style");switch(ba(v,c),v.stroke){case"source":{var p=u.node1.getVisual("style");v.stroke=p&&p.fill;break}case"target":{var p=u.node2.getVisual("style");v.stroke=p&&p.fill;break}}f[0]&&u.setVisual("fromSymbol",f[0]),f[1]&&u.setVisual("toSymbol",f[1]),d[0]&&u.setVisual("fromSymbolSize",d[0]),d[1]&&u.setVisual("toSymbolSize",d[1])})})}),e.registerAction({type:"graphGLRoam",event:"graphglroam",update:"series.graphGL:roam"},function(r,i){i.eachComponent({mainType:"series",query:r},function(n){n.setView(r)})});function t(){}e.registerAction({type:"graphGLStartLayout",event:"graphgllayoutstarted",update:"series.graphGL:startLayout"},t),e.registerAction({type:"graphGLStopLayout",event:"graphgllayoutstopped",update:"series.graphGL:stopLayout"},t),e.registerAction({type:"graphGLFocusNodeAdjacency",event:"graphGLFocusNodeAdjacency",update:"series.graphGL:focusNodeAdjacency"},t),e.registerAction({type:"graphGLUnfocusNodeAdjacency",event:"graphGLUnfocusNodeAdjacency",update:"series.graphGL:unfocusNodeAdjacency"},t)}Ze(fv);const cv=mt.extend({type:"series.flowGL",dependencies:["geo","grid","bmap"],visualStyleAccessPath:"itemStyle",getInitialData:function(e,t){var r=this.get("coordinateSystem"),i=r==="geo"?["lng","lat"]:Qo(r)||["x","y"];i.push("vx","vy");var n=di(this.getSource(),{coordDimensions:i,encodeDefine:this.get("encode"),dimensionsDefine:this.get("dimensions")}),a=new wt(n,this);return a.initData(this.getSource()),a},defaultOption:{coordinateSystem:"cartesian2d",zlevel:10,supersampling:1,particleType:"point",particleDensity:128,particleSize:1,particleSpeed:1,particleTrail:2,colorTexture:null,gridWidth:"auto",gridHeight:"auto",itemStyle:{color:"#fff",opacity:.8}}});var dv=J.extend(function(){return{dynamic:!0,attributes:{position:new J.Attribute("position","float",3,"POSITION")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setLineCount:function(e){var t=this.attributes,r=4*e,i=2*e;this.vertexCount!==r&&t.position.init(r),this.triangleCount!==i&&(i===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(i*3):new Uint16Array(i*3))},addLine:function(e){var t=this._vertexOffset;this.attributes.position.set(t,[e[0],e[1],1]),this.attributes.position.set(t+1,[e[0],e[1],-1]),this.attributes.position.set(t+2,[e[0],e[1],2]),this.attributes.position.set(t+3,[e[0],e[1],-2]),this.setTriangleIndices(this._faceOffset++,[t,t+1,t+2]),this.setTriangleIndices(this._faceOffset++,[t+1,t+2,t+3]),this._vertexOffset+=4}});const vv=dv,pv=`@export ecgl.vfParticle.particle.fragment

uniform sampler2D particleTexture;
uniform sampler2D spawnTexture;
uniform sampler2D velocityTexture;

uniform float deltaTime;
uniform float elapsedTime;

uniform float speedScaling : 1.0;

uniform vec2 textureSize;
uniform vec4 region : [0, 0, 1, 1];
uniform float firstFrameTime;

varying vec2 v_Texcoord;


void main()
{
 vec4 p = texture2D(particleTexture, v_Texcoord);
 bool spawn = false;
 if (p.w <= 0.0) {
 p = texture2D(spawnTexture, fract(v_Texcoord + elapsedTime / 10.0));
 p.w -= firstFrameTime;
 spawn = true;
 }
 vec2 v = texture2D(velocityTexture, fract(p.xy * region.zw + region.xy)).xy;
 v = (v - 0.5) * 2.0;
 p.z = length(v);
 p.xy += v * deltaTime / 10.0 * speedScaling;
 p.w -= deltaTime;

 if (spawn || p.xy != fract(p.xy)) {
 p.z = 0.0;
 }
 p.xy = fract(p.xy);

 gl_FragColor = p;
}
@end

@export ecgl.vfParticle.renderPoints.vertex

#define PI 3.1415926

attribute vec2 texcoord : TEXCOORD_0;

uniform sampler2D particleTexture;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

uniform float size : 1.0;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 vec4 p = texture2D(particleTexture, texcoord);

 if (p.w > 0.0 && p.z > 1e-5) {
 gl_Position = worldViewProjection * vec4(p.xy * 2.0 - 1.0, 0.0, 1.0);
 }
 else {
 gl_Position = vec4(100000.0, 100000.0, 100000.0, 1.0);
 }

 v_Mag = p.z;
 v_Uv = p.xy;

 gl_PointSize = size;
}

@end

@export ecgl.vfParticle.renderPoints.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform sampler2D gradientTexture;
uniform sampler2D colorTexture;
uniform sampler2D spriteTexture;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 gl_FragColor = color;
#ifdef SPRITETEXTURE_ENABLED
 gl_FragColor *= texture2D(spriteTexture, gl_PointCoord);
 if (color.a == 0.0) {
 discard;
 }
#endif
#ifdef GRADIENTTEXTURE_ENABLED
 gl_FragColor *= texture2D(gradientTexture, vec2(v_Mag, 0.5));
#endif
#ifdef COLORTEXTURE_ENABLED
 gl_FragColor *= texture2D(colorTexture, v_Uv);
#endif
}

@end

@export ecgl.vfParticle.renderLines.vertex

#define PI 3.1415926

attribute vec3 position : POSITION;

uniform sampler2D particleTexture;
uniform sampler2D prevParticleTexture;

uniform float size : 1.0;
uniform vec4 vp: VIEWPORT;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

varying float v_Mag;
varying vec2 v_Uv;

@import clay.util.rand

void main()
{
 vec4 p = texture2D(particleTexture, position.xy);
 vec4 p2 = texture2D(prevParticleTexture, position.xy);

 p.xy = p.xy * 2.0 - 1.0;
 p2.xy = p2.xy * 2.0 - 1.0;

 if (p.w > 0.0 && p.z > 1e-5) {
 vec2 dir = normalize(p.xy - p2.xy);
 vec2 norm = vec2(dir.y / vp.z, -dir.x / vp.w) * sign(position.z) * size;
 if (abs(position.z) == 2.0) {
 gl_Position = vec4(p.xy + norm, 0.0, 1.0);
 v_Uv = p.xy;
 v_Mag = p.z;
 }
 else {
 gl_Position = vec4(p2.xy + norm, 0.0, 1.0);
 v_Mag = p2.z;
 v_Uv = p2.xy;
 }
 gl_Position = worldViewProjection * gl_Position;
 }
 else {
 gl_Position = vec4(100000.0, 100000.0, 100000.0, 1.0);
 }
}

@end

@export ecgl.vfParticle.renderLines.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform sampler2D gradientTexture;
uniform sampler2D colorTexture;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 gl_FragColor = color;
 #ifdef GRADIENTTEXTURE_ENABLED
 gl_FragColor *= texture2D(gradientTexture, vec2(v_Mag, 0.5));
#endif
#ifdef COLORTEXTURE_ENABLED
 gl_FragColor *= texture2D(colorTexture, v_Uv);
#endif
}

@end
`;B.import(pv);function mv(e){var t=document.createElement("canvas");t.width=t.height=e;var r=t.getContext("2d");return r.fillStyle="#fff",r.arc(e/2,e/2,e/2,0,Math.PI*2),r.fill(),t}var $n=function(){this.motionBlurFactor=.99,this.vectorFieldTexture=new Q({type:O.FLOAT,flipY:!1}),this.particleLife=[5,20],this._particleType="point",this._particleSize=1,this.particleColor=[1,1,1,1],this.particleSpeedScaling=1,this._thisFrameTexture=null,this._particlePass=null,this._spawnTexture=null,this._particleTexture0=null,this._particleTexture1=null,this._particlePointsMesh=null,this._surfaceFrameBuffer=null,this._elapsedTime=0,this._scene=null,this._camera=null,this._lastFrameTexture=null,this._supersampling=1,this._downsampleTextures=[],this._width=512,this._height=512,this.init()};$n.prototype={constructor:$n,init:function(){var e={type:O.FLOAT,minFilter:O.NEAREST,magFilter:O.NEAREST,useMipmap:!1};this._spawnTexture=new Q(e),this._particleTexture0=new Q(e),this._particleTexture1=new Q(e),this._frameBuffer=new we({depthBuffer:!1}),this._particlePass=new Le({fragment:B.source("ecgl.vfParticle.particle.fragment")}),this._particlePass.setUniform("velocityTexture",this.vectorFieldTexture),this._particlePass.setUniform("spawnTexture",this._spawnTexture),this._downsamplePass=new Le({fragment:B.source("clay.compositor.downsample")});var t=new ir({renderOrder:10,material:new ut({shader:new B(B.source("ecgl.vfParticle.renderPoints.vertex"),B.source("ecgl.vfParticle.renderPoints.fragment"))}),mode:ir.POINTS,geometry:new J({dynamic:!0,mainAttribute:"texcoord0"})}),r=new ir({renderOrder:10,material:new ut({shader:new B(B.source("ecgl.vfParticle.renderLines.vertex"),B.source("ecgl.vfParticle.renderLines.fragment"))}),geometry:new vv,culling:!1}),i=new ir({material:new ut({shader:new B(B.source("ecgl.color.vertex"),B.source("ecgl.color.fragment"))}),geometry:new rn});i.material.enableTexture("diffuseMap"),this._particlePointsMesh=t,this._particleLinesMesh=r,this._lastFrameFullQuadMesh=i,this._camera=new Lr,this._thisFrameTexture=new Q,this._lastFrameTexture=new Q},setParticleDensity:function(e,t){for(var r=e*t,i=new Float32Array(r*4),n=0,a=this.particleLife,o=0;o<e;o++)for(var s=0;s<t;s++,n++){i[n*4]=Math.random(),i[n*4+1]=Math.random(),i[n*4+2]=Math.random();var l=(a[1]-a[0])*Math.random()+a[0];i[n*4+3]=l}this._particleType==="line"?this._setLineGeometry(e,t):this._setPointsGeometry(e,t),this._spawnTexture.width=e,this._spawnTexture.height=t,this._spawnTexture.pixels=i,this._particleTexture0.width=this._particleTexture1.width=e,this._particleTexture0.height=this._particleTexture1.height=t,this._particlePass.setUniform("textureSize",[e,t])},_setPointsGeometry:function(e,t){var r=e*t,i=this._particlePointsMesh.geometry,n=i.attributes;n.texcoord0.init(r);for(var a=0,o=0;o<e;o++)for(var s=0;s<t;s++,a++)n.texcoord0.value[a*2]=o/e,n.texcoord0.value[a*2+1]=s/t;i.dirty()},_setLineGeometry:function(e,t){var r=e*t,i=this._getParticleMesh().geometry;i.setLineCount(r),i.resetOffset();for(var n=0;n<e;n++)for(var a=0;a<t;a++)i.addLine([n/e,a/t]);i.dirty()},_getParticleMesh:function(){return this._particleType==="line"?this._particleLinesMesh:this._particlePointsMesh},update:function(e,t,r,i){var n=this._getParticleMesh(),a=this._frameBuffer,o=this._particlePass;i&&this._updateDownsampleTextures(e,t),n.material.set("size",this._particleSize*this._supersampling),n.material.set("color",this.particleColor),o.setUniform("speedScaling",this.particleSpeedScaling),a.attach(this._particleTexture1),o.setUniform("firstFrameTime",i?(this.particleLife[1]+this.particleLife[0])/2:0),o.setUniform("particleTexture",this._particleTexture0),o.setUniform("deltaTime",r),o.setUniform("elapsedTime",this._elapsedTime),o.render(e,a),n.material.set("particleTexture",this._particleTexture1),n.material.set("prevParticleTexture",this._particleTexture0),a.attach(this._thisFrameTexture),a.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT);var s=this._lastFrameFullQuadMesh;s.material.set("diffuseMap",this._lastFrameTexture),s.material.set("color",[1,1,1,this.motionBlurFactor]),this._camera.update(!0),e.renderPass([s,n],this._camera),a.unbind(e),this._downsample(e),this._swapTexture(),this._elapsedTime+=r},_downsample:function(e){var t=this._downsampleTextures;if(t.length!==0)for(var r=0,i=this._thisFrameTexture,n=t[r];n;)this._frameBuffer.attach(n),this._downsamplePass.setUniform("texture",i),this._downsamplePass.setUniform("textureSize",[i.width,i.height]),this._downsamplePass.render(e,this._frameBuffer),i=n,n=t[++r]},getSurfaceTexture:function(){var e=this._downsampleTextures;return e.length>0?e[e.length-1]:this._lastFrameTexture},setRegion:function(e){this._particlePass.setUniform("region",e)},resize:function(e,t){this._lastFrameTexture.width=e*this._supersampling,this._lastFrameTexture.height=t*this._supersampling,this._thisFrameTexture.width=e*this._supersampling,this._thisFrameTexture.height=t*this._supersampling,this._width=e,this._height=t},setParticleSize:function(e){var t=this._getParticleMesh();if(e<=2){t.material.disableTexture("spriteTexture"),t.material.transparent=!1;return}this._spriteTexture||(this._spriteTexture=new Q),(!this._spriteTexture.image||this._spriteTexture.image.width!==e)&&(this._spriteTexture.image=mv(e),this._spriteTexture.dirty()),t.material.transparent=!0,t.material.enableTexture("spriteTexture"),t.material.set("spriteTexture",this._spriteTexture),this._particleSize=e},setGradientTexture:function(e){var t=this._getParticleMesh().material;t[e?"enableTexture":"disableTexture"]("gradientTexture"),t.setUniform("gradientTexture",e)},setColorTextureImage:function(e,t){var r=this._getParticleMesh().material;r.setTextureImage("colorTexture",e,t,{flipY:!0})},setParticleType:function(e){this._particleType=e},clearFrame:function(e){var t=this._frameBuffer;t.attach(this._lastFrameTexture),t.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),t.unbind(e)},setSupersampling:function(e){this._supersampling=e,this.resize(this._width,this._height)},_updateDownsampleTextures:function(e,t){for(var r=this._downsampleTextures,i=Math.max(Math.floor(Math.log(this._supersampling/t.getDevicePixelRatio())/Math.log(2)),0),n=2,a=this._width*this._supersampling,o=this._height*this._supersampling,s=0;s<i;s++)r[s]=r[s]||new Q,r[s].width=a/n,r[s].height=o/n,n*=2;for(;s<r.length;s++)r[s].dispose(e);r.length=i},_swapTexture:function(){var e=this._particleTexture0;this._particleTexture0=this._particleTexture1,this._particleTexture1=e;var e=this._thisFrameTexture;this._thisFrameTexture=this._lastFrameTexture,this._lastFrameTexture=e},dispose:function(e){e.disposeFrameBuffer(this._frameBuffer),e.disposeTexture(this.vectorFieldTexture),e.disposeTexture(this._spawnTexture),e.disposeTexture(this._particleTexture0),e.disposeTexture(this._particleTexture1),e.disposeTexture(this._thisFrameTexture),e.disposeTexture(this._lastFrameTexture),e.disposeGeometry(this._particleLinesMesh.geometry),e.disposeGeometry(this._particlePointsMesh.geometry),e.disposeGeometry(this._lastFrameFullQuadMesh.geometry),this._spriteTexture&&e.disposeTexture(this._spriteTexture),this._particlePass.dispose(e),this._downsamplePass.dispose(e),this._downsampleTextures.forEach(function(t){t.dispose(e)})}};const gv=gt.extend({type:"flowGL",__ecgl__:!0,init:function(e,t){this.viewGL=new he("orthographic"),this.groupGL=new y.Node,this.viewGL.add(this.groupGL),this._particleSurface=new $n;var r=new y.Mesh({geometry:new y.PlaneGeometry,material:new y.Material({shader:new y.Shader({vertex:y.Shader.source("ecgl.color.vertex"),fragment:y.Shader.source("ecgl.color.fragment")}),transparent:!0})});r.material.enableTexture("diffuseMap"),this.groupGL.add(r),this._planeMesh=r},render:function(e,t,r){var i=this._particleSurface;i.setParticleType(e.get("particleType")),i.setSupersampling(e.get("supersampling")),this._updateData(e,r),this._updateCamera(r.getWidth(),r.getHeight(),r.getDevicePixelRatio());var n=Y.firstNotNull(e.get("particleDensity"),128);i.setParticleDensity(n,n);var a=this._planeMesh,o=+new Date,s=this,l=!0;a.__percent=0,a.stopAnimation(),a.animate("",{loop:!0}).when(1e5,{__percent:1}).during(function(){var f=+new Date,d=Math.min(f-o,20);o=o+d,s._renderer&&(i.update(s._renderer,r,d/1e3,l),a.material.set("diffuseMap",i.getSurfaceTexture())),l=!1}).start();var h=e.getModel("itemStyle"),u=y.parseColor(h.get("color"));u[3]*=Y.firstNotNull(h.get("opacity"),1),a.material.set("color",u),i.setColorTextureImage(e.get("colorTexture"),r),i.setParticleSize(e.get("particleSize")),i.particleSpeedScaling=e.get("particleSpeed"),i.motionBlurFactor=1-Math.pow(.1,e.get("particleTrail"))},updateTransform:function(e,t,r){this._updateData(e,r)},afterRender:function(e,t,r,i){var n=i.renderer;this._renderer=n},_updateData:function(e,t){var r=e.coordinateSystem,i=r.dimensions.map(function(T){return e.coordDimToDataDim(T)[0]}),n=e.getData(),a=n.getDataExtent(i[0]),o=n.getDataExtent(i[1]),s=e.get("gridWidth"),l=e.get("gridHeight");if(s==null||s==="auto"){var h=(a[1]-a[0])/(o[1]-o[0]);s=Math.round(Math.sqrt(h*n.count()))}(l==null||l==="auto")&&(l=Math.ceil(n.count()/s));var u=this._particleSurface.vectorFieldTexture,f=u.pixels;if(!f||f.length!==l*s*4)f=u.pixels=new Float32Array(s*l*4);else for(var d=0;d<f.length;d++)f[d]=0;var c=0,v=1/0,p=new Float32Array(n.count()*2),m=0,g=[[1/0,1/0],[-1/0,-1/0]];n.each([i[0],i[1],"vx","vy"],function(T,x,_,S){var A=r.dataToPoint([T,x]);p[m++]=A[0],p[m++]=A[1],g[0][0]=Math.min(A[0],g[0][0]),g[0][1]=Math.min(A[1],g[0][1]),g[1][0]=Math.max(A[0],g[1][0]),g[1][1]=Math.max(A[1],g[1][1]);var b=Math.sqrt(_*_+S*S);c=Math.max(c,b),v=Math.min(v,b)}),n.each(["vx","vy"],function(T,x,_){var S=Math.round((p[_*2]-g[0][0])/(g[1][0]-g[0][0])*(s-1)),A=l-1-Math.round((p[_*2+1]-g[0][1])/(g[1][1]-g[0][1])*(l-1)),b=(A*s+S)*4;f[b]=T/c*.5+.5,f[b+1]=x/c*.5+.5,f[b+3]=1}),u.width=s,u.height=l,e.get("coordinateSystem")==="bmap"&&this._fillEmptyPixels(u),u.dirty(),this._updatePlanePosition(g[0],g[1],e,t),this._updateGradientTexture(n.getVisual("visualMeta"),[v,c])},_fillEmptyPixels:function(e){var t=e.pixels,r=e.width,i=e.height;function n(p,m,g){p=Math.max(Math.min(p,r-1),0),m=Math.max(Math.min(m,i-1),0);var T=(m*(r-1)+p)*4;return t[T+3]===0?!1:(g[0]=t[T],g[1]=t[T+1],!0)}function a(p,m,g){g[0]=p[0]+m[0],g[1]=p[1]+m[1]}for(var o=[],s=[],l=[],h=[],u=[],f=0,d=0;d<i;d++)for(var c=0;c<r;c++){var v=(d*(r-1)+c)*4;t[v+3]===0&&(f=o[0]=o[1]=0,n(c-1,d,s)&&(f++,a(s,o,o)),n(c+1,d,l)&&(f++,a(l,o,o)),n(c,d-1,h)&&(f++,a(h,o,o)),n(c,d+1,u)&&(f++,a(u,o,o)),o[0]/=f,o[1]/=f,t[v]=o[0],t[v+1]=o[1]),t[v+3]=1}},_updateGradientTexture:function(e,t){if(!e||!e.length){this._particleSurface.setGradientTexture(null);return}this._gradientTexture=this._gradientTexture||new y.Texture2D({image:document.createElement("canvas")});var r=this._gradientTexture,i=r.image;i.width=200,i.height=1;var n=i.getContext("2d"),a=n.createLinearGradient(0,.5,i.width,.5);e[0].stops.forEach(function(o){var s;t[1]===t[0]?s=0:(s=o.value/t[1],s=Math.min(Math.max(s,0),1)),a.addColorStop(s,o.color)}),n.fillStyle=a,n.fillRect(0,0,i.width,i.height),r.dirty(),this._particleSurface.setGradientTexture(this._gradientTexture)},_updatePlanePosition:function(e,t,r,i){var n=this._limitInViewportAndFullFill(e,t,r,i);e=n.leftTop,t=n.rightBottom,this._particleSurface.setRegion(n.region),this._planeMesh.position.set((e[0]+t[0])/2,i.getHeight()-(e[1]+t[1])/2,0);var a=t[0]-e[0],o=t[1]-e[1];this._planeMesh.scale.set(a/2,o/2,1),this._particleSurface.resize(Math.max(Math.min(a,2048),1),Math.max(Math.min(o,2048),1)),this._renderer&&this._particleSurface.clearFrame(this._renderer)},_limitInViewportAndFullFill:function(e,t,r,i){var n=[Math.max(e[0],0),Math.max(e[1],0)],a=[Math.min(t[0],i.getWidth()),Math.min(t[1],i.getHeight())];if(r.get("coordinateSystem")==="bmap"){var o=r.getData().getDataExtent(r.coordDimToDataDim("lng")[0]),s=Math.floor(o[1]-o[0])>=359;s&&(n[0]>0&&(n[0]=0),a[0]<i.getWidth()&&(a[0]=i.getWidth()))}var l=t[0]-e[0],h=t[1]-e[1],u=a[0]-n[0],f=a[1]-n[1],d=[(n[0]-e[0])/l,1-f/h-(n[1]-e[1])/h,u/l,f/h];return{leftTop:n,rightBottom:a,region:d}},_updateCamera:function(e,t,r){this.viewGL.setViewport(0,0,e,t,r);var i=this.viewGL.camera;i.left=i.bottom=0,i.top=t,i.right=e,i.near=0,i.far=100,i.position.z=10},remove:function(){this._planeMesh.stopAnimation(),this.groupGL.removeAll()},dispose:function(){this._renderer&&this._particleSurface.dispose(this._renderer),this.groupGL.removeAll()}});function _v(e){e.registerChartView(gv),e.registerSeriesModel(cv)}Ze(_v);var ea=mt.extend({type:"series.linesGL",dependencies:["grid","geo"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",streamEnabled:!0,init:function(e){var t=this._processFlatCoordsArray(e.data);this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset,t.flatCoords&&(e.data=new Float32Array(t.count)),ea.superApply(this,"init",arguments)},mergeOption:function(e){var t=this._processFlatCoordsArray(e.data);this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset,t.flatCoords&&(e.data=new Float32Array(t.count)),ea.superApply(this,"mergeOption",arguments)},appendData:function(e){var t=this._processFlatCoordsArray(e.data);t.flatCoords&&(this._flatCoords?(this._flatCoords=Ca(this._flatCoords,t.flatCoords),this._flatCoordsOffset=Ca(this._flatCoordsOffset,t.flatCoordsOffset)):(this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset),e.data=new Float32Array(t.count)),this.getRawData().appendData(e.data)},_getCoordsFromItemModel:function(e){var t=this.getData().getItemModel(e),r=t.option instanceof Array?t.option:t.getShallow("coords");return r},getLineCoordsCount:function(e){return this._flatCoordsOffset?this._flatCoordsOffset[e*2+1]:this._getCoordsFromItemModel(e).length},getLineCoords:function(e,t){if(this._flatCoordsOffset){for(var r=this._flatCoordsOffset[e*2],i=this._flatCoordsOffset[e*2+1],n=0;n<i;n++)t[n]=t[n]||[],t[n][0]=this._flatCoords[r+n*2],t[n][1]=this._flatCoords[r+n*2+1];return i}else{for(var a=this._getCoordsFromItemModel(e),n=0;n<a.length;n++)t[n]=t[n]||[],t[n][0]=a[n][0],t[n][1]=a[n][1];return a.length}},_processFlatCoordsArray:function(e){var t=0;if(this._flatCoords&&(t=this._flatCoords.length),typeof e[0]=="number"){for(var r=e.length,i=new Uint32Array(r),n=new Float64Array(r),a=0,o=0,s=0,l=0;l<r;){s++;var h=e[l++];i[o++]=a+t,i[o++]=h;for(var u=0;u<h;u++){var f=e[l++],d=e[l++];n[a++]=f,n[a++]=d}}return{flatCoordsOffset:new Uint32Array(i.buffer,0,o),flatCoords:n,count:s}}return{flatCoordsOffset:null,flatCoords:null,count:e.length}},getInitialData:function(e,t){var r=new wt(["value"],this);return r.hasItemOption=!1,r.initData(e.data,[],function(i,n,a,o){if(i instanceof Array)return NaN;r.hasItemOption=!0;var s=i.value;if(s!=null)return s instanceof Array?s[o]:s}),r},defaultOption:{coordinateSystem:"geo",zlevel:10,progressive:1e4,progressiveThreshold:5e4,blendMode:"source-over",lineStyle:{opacity:.8},postEffect:{enable:!1,colorCorrection:{exposure:0,brightness:0,contrast:1,saturation:1,enable:!0}}}});const yv=ea,xv=gt.extend({type:"linesGL",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this.viewGL=new he("orthographic"),this.viewGL.add(this.groupGL),this._glViewHelper=new It(this.viewGL),this._nativeLinesShader=y.createShader("ecgl.lines3D"),this._meshLinesShader=y.createShader("ecgl.meshLines3D"),this._linesMeshes=[],this._currentStep=0},render:function(e,t,r){this.groupGL.removeAll(),this._glViewHelper.reset(e,r);var i=this._linesMeshes[0];i||(i=this._linesMeshes[0]=this._createLinesMesh(e)),this._linesMeshes.length=1,this.groupGL.add(i),this._updateLinesMesh(e,i,0,e.getData().count()),this.viewGL.setPostEffect(e.getModel("postEffect"),r)},incrementalPrepareRender:function(e,t,r){this.groupGL.removeAll(),this._glViewHelper.reset(e,r),this._currentStep=0,this.viewGL.setPostEffect(e.getModel("postEffect"),r)},incrementalRender:function(e,t,r,i){var n=this._linesMeshes[this._currentStep];n||(n=this._createLinesMesh(t),this._linesMeshes[this._currentStep]=n),this._updateLinesMesh(t,n,e.start,e.end),this.groupGL.add(n),i.getZr().refresh(),this._currentStep++},updateTransform:function(e,t,r){e.coordinateSystem.getRoamTransform&&this._glViewHelper.updateTransform(e,r)},_createLinesMesh:function(e){var t=new y.Mesh({$ignorePicking:!0,material:new y.Material({shader:y.createShader("ecgl.lines3D"),transparent:!0,depthMask:!1,depthTest:!1}),geometry:new ul({segmentScale:10,useNativeLine:!0,dynamic:!1}),mode:y.Mesh.LINES,culling:!1});return t},_updateLinesMesh:function(e,t,r,i){var n=e.getData();t.material.blend=e.get("blendMode")==="lighter"?y.additiveBlend:null;var a=e.get("lineStyle.curveness")||0,o=e.get("polyline"),s=t.geometry,l=e.coordinateSystem,h=Y.firstNotNull(e.get("lineStyle.width"),1);h>1?(t.material.shader!==this._meshLinesShader&&t.material.attachShader(this._meshLinesShader),t.mode=y.Mesh.TRIANGLES):(t.material.shader!==this._nativeLinesShader&&t.material.attachShader(this._nativeLinesShader),t.mode=y.Mesh.LINES),r=r||0,i=i||n.count(),s.resetOffset();var u=0,f=0,d=[],c=[],v=[],p=[],m=[],g=.3,T=.7;function x(){c[0]=d[0]*T+p[0]*g-(d[1]-p[1])*a,c[1]=d[1]*T+p[1]*g-(p[0]-d[0])*a,v[0]=d[0]*g+p[0]*T-(d[1]-p[1])*a,v[1]=d[1]*g+p[1]*T-(p[0]-d[0])*a}if(o||a!==0)for(var _=r;_<i;_++)if(o){var S=e.getLineCoordsCount(_);u+=s.getPolylineVertexCount(S),f+=s.getPolylineTriangleCount(S)}else e.getLineCoords(_,m),this._glViewHelper.dataToPoint(l,m[0],d),this._glViewHelper.dataToPoint(l,m[1],p),x(),u+=s.getCubicCurveVertexCount(d,c,v,p),f+=s.getCubicCurveTriangleCount(d,c,v,p);else{var A=i-r;u+=A*s.getLineVertexCount(),f+=A*s.getLineVertexCount()}s.setVertexCount(u),s.setTriangleCount(f);for(var b=r,w=[],_=r;_<i;_++){y.parseColor(Fe(n,b),w);var L=Y.firstNotNull(Ue(n,b),1);w[3]*=L;for(var S=e.getLineCoords(_,m),I=0;I<S;I++)this._glViewHelper.dataToPoint(l,m[I],m[I]);o?s.addPolyline(m,w,h,0,S):a!==0?(d=m[0],p=m[1],x(),s.addCubicCurve(d,c,v,p,w,h)):s.addPolyline(m,w,h,0,2),b++}},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function Tv(e){e.registerChartView(xv),e.registerSeriesModel(yv)}Ze(Tv);const Ev={class:"full"},Av={__name:"SpatialDataCollection",setup(e){let t={},r=[];function i(n){for(let a=0;a<n;a++){let o=Math.random()*250,s=Math.random()*250,l=Math.random()*512;r.push([o,s,l])}return r}return zl(()=>{let n=new Image,a=Vl("3d"),o=document.createElement("canvas"),s=o.getContext("2d");n.onload=function(){let l=o.width=n.width/2,h=o.height=n.height/2;s.drawImage(n,0,0,l,h);let u=s.getImageData(0,0,l,h),f=[];for(let v=0;v<u.data.length/4;v++)u.data[v*4],u.data[v*4+1],u.data[v*4+2],f.push([v%l,h-Math.floor(v/l),0]);let c=i(100);t={visualMap:{show:!1,min:2,max:6,inRange:{symbolSize:[.5,15],colorAlpha:[.2,10]}},tooltip:{},xAxis3D:{type:"value"},yAxis3D:{type:"value"},zAxis3D:{type:"value"},grid3D:{viewControl:{alpha:20,beta:-30},postEffect:{enable:!0,SSAO:{enable:!0}},boxDepth:120,light:{main:{shadow:!1,intensity:2}}},series:[{type:"surface",shading:"realistic",barSize:1,wireframe:{show:!1},itemStyle:{color:function(v){let p=v.dataIndex,m=u.data[p*4],g=u.data[p*4+1],T=u.data[p*4+2];return"rgb("+[m,g,T].join(",")+")"}},data:f},{type:"scatter3D",symbolSize:[.5,15],data:c}]},a.setOption(t)},n.src="data:image/jpeg;base64,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"}),(n,a)=>{const o=ql,s=kl;return Wl(),Gl("div",Ev,[La(s,{class:"full"},{default:Hl(()=>[La(o,{span:24,class:"full",id:"3d"})]),_:1})])}}};export{Av as default};
