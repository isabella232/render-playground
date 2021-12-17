(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[181],{646:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/points",function(){return t(1379)}])},7277:function(e,n,t){"use strict";function r(e,n,t){e.enable(e.DEPTH_TEST),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA);var r=e.createShader(e.VERTEX_SHADER);e.shaderSource(r,n),e.compileShader(r);var i=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(i,t),e.compileShader(i);var a=e.createProgram();return e.attachShader(a,i),e.attachShader(a,r),e.linkProgram(a),e.useProgram(a),a}function i(e,n,t,r,i){var a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array(i),e.STATIC_DRAW);var o=e.getAttribLocation(n,t);e.vertexAttribPointer(o,r,e.FLOAT,!1,0,0),e.enableVertexAttribArray(o)}function a(e,n){var t=e.createBuffer();e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array(n),e.STATIC_DRAW)}function o(e){e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT)}function A(e,n,t){e.viewport(0,0,n.width,n.height),e.drawElements(e.TRIANGLES,t,e.UNSIGNED_SHORT,0)}t.d(n,{ZH:function(){return o},HO:function(){return r},ii:function(){return A},M5:function(){return a},zc:function(){return i}})},1379:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=t(5893),i=t(7294),a=t(6417),o=t.n(a),A=t(7277),E=t(5975),u=t(7160),c=17e6;var f=function(){var e=(0,i.useRef)(null);(0,i.useEffect)((function(){e.current&&function(e,n,t){var r=void 0===n?c:n,i=void 0===t?document.getElementById("icon"):t,a=e.getContext("webgl");if(a){e.width=800,e.height=640;for(var o=new Array(51e6),f=0,d=0;f<c;f++,d=0)o[f+d++]=8*(Math.random()-.5)+2*Math.random(),o[f+d++]=8*(Math.random()-.5),o[f+d++]=8*(Math.random()-.5);var s=(0,A.HO)(a,"precision highp float;\n#define GLSLIFY 1\nuniform mat4 u_camera;\n\nattribute vec3 a_position;\n\nvoid main(void) {\n  gl_Position = u_camera * vec4(a_position, 1.0);\n\n  if (gl_Position.w > 0.0) {\n    gl_PointSize = 4.0 / gl_Position.w;\n  } else {\n    gl_PointSize = 0.0;\n  }\n}","precision highp float;\n#define GLSLIFY 1\nuniform sampler2D u_sprite;  // texture we are drawing\n\nvoid main(void) {\n  gl_FragColor = texture2D(u_sprite, gl_PointCoord);;\n}"),g=a.getUniformLocation(s,"u_camera"),h=a.createTexture();a.bindTexture(a.TEXTURE_2D,h),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,i),a.generateMipmap(a.TEXTURE_2D),(0,A.zc)(a,s,"a_position",3,o);var l=E.Ue(),w=E.Ue(),v=E.Ue(),m=E.Ue(),p=E.Ue(),S=E.Ue(),_=u.Ue();E.G3(l,.35*Math.PI,e.width/e.height,.01,1e5),u.t8(_,0,0,0);var R=0;a.clear(a.COLOR_BUFFER_BIT),a.enable(a.BLEND),a.blendFunc(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA),window.requestAnimationFrame((function n(){a.viewport(0,0,e.width,e.height),E.G3(l,.35*Math.PI,e.width/e.height,.01,1e3),R+=5e-4,_[2]=Math.sin(performance.now()/5e4),E.yR(w),E.Iu(w,w,_),E.lM(w,w,R),E.uD(w,w,R),E.jI(w,w,R),E.U_(v,w),E.Jp(p,v,m),E.Jp(S,l,p),a.uniformMatrix4fv(g,!1,S),a.drawArrays(a.POINTS,0,r),window.requestAnimationFrame(n)}))}}(e.current)}),[]);var n=c.toLocaleString();return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("h2",{className:o().title,children:[n," Points - single draw call"]}),(0,r.jsx)("img",{src:"DATA:image/png;base64,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",hidden:!0,id:"icon"}),(0,r.jsx)("canvas",{ref:e,className:o().canvas})]})})}},6417:function(e){e.exports={title:"points_page_style_title__hi1jJ",canvas:"points_page_style_canvas__1REo_"}}},function(e){e.O(0,[279,774,888,179],(function(){return n=646,e(e.s=n);var n}));var n=e.O();_N_E=n}]);