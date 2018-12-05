(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(35)},31:function(e,t){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),c=a(3),l=a(5),s=a(7),u=a(6),p=a(8),b=a(2),h=a(20),v=a.n(h),f=a(16);function d(){var e=Object(f.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Lato');\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  min-width: 100vw;\n  min-height: 100vh;\n\n  margin: 0;\n\n  font-family: 'Lato', sans-serif;\n\n  h1 {\n    font-weight: normal;\n  }\n\n  .preview-image {\n    width: calc(100% - 72px);\n    max-width: 960px;\n\n    margin: 36px 0;\n    padding: 0;\n  }\n"]);return d=function(){return e},e}var g,m,O,j,w,y,C,x,S,T=a(21).a.div(d()),z=a(15),E=a.n(z),k=a(17),I=a(18),P=a(12),F=a(9),R=a(4),D=(a(33),a(1)),A=(g=function(){function e(t){Object(c.a)(this,e),Object(F.a)(this,"tileSize",m,this),Object(F.a)(this,"gapSize",O,this),Object(F.a)(this,"overlayText",j,this),Object(F.a)(this,"inputImageData",w,this),Object(F.a)(this,"baseCanvas",y,this),Object(F.a)(this,"setBaseCanvas",C,this),Object(F.a)(this,"addFile",x,this),Object(F.a)(this,"setOverlayText",S,this),this.imageProcessor=t}return Object(l.a)(e,[{key:"width",get:function(){return 3*this.tileSize+2*this.gapSize}},{key:"height",get:function(){return this.tileSize}},{key:"previewCanvas",get:function(){return this.imageProcessor.addTextToCanvas(this.baseCanvas,this.overlayText)}},{key:"downloadImages",get:function(){var e=this;return function(){return e.imageProcessor.downloadImages(e.previewCanvas,e.tileSize,e.gapSize)}}}]),e}(),m=Object(R.a)(g.prototype,"tileSize",[D.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1080}}),O=Object(R.a)(g.prototype,"gapSize",[D.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),j=Object(R.a)(g.prototype,"overlayText",[D.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Object(R.a)(g.prototype,"width",[D.computed],Object.getOwnPropertyDescriptor(g.prototype,"width"),g.prototype),Object(R.a)(g.prototype,"height",[D.computed],Object.getOwnPropertyDescriptor(g.prototype,"height"),g.prototype),w=Object(R.a)(g.prototype,"inputImageData",[D.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),y=Object(R.a)(g.prototype,"baseCanvas",[D.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.imageProcessor.getPlaceholderCanvas(this.width,this.height,this.tileSize,this.gapSize)}}),C=Object(R.a)(g.prototype,"setBaseCanvas",[D.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.baseCanvas=t}}}),Object(R.a)(g.prototype,"previewCanvas",[D.computed],Object.getOwnPropertyDescriptor(g.prototype,"previewCanvas"),g.prototype),x=Object(R.a)(g.prototype,"addFile",[D.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.imageProcessor.getCanvasFromFile(t,e.width,e.height,e.tileSize,e.gapSize).then(function(t){return e.setBaseCanvas(t)})}}}),S=Object(R.a)(g.prototype,"setOverlayText",[D.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.overlayText=t}}}),Object(R.a)(g.prototype,"downloadImages",[D.computed],Object.getOwnPropertyDescriptor(g.prototype,"downloadImages"),g.prototype),g),B=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.addFile;return r.a.createElement("input",{className:"file-upload",type:"file",onChange:function(t){return e(t.target.files[0])}})}}]),t}(n.Component),L=Object(b.inject)(function(e){return{addFile:e.appState.addFile}})(Object(b.observer)(B)),N=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("img",{alt:"Preview",className:"preview-image",src:this.props.previewCanvas&&this.props.previewCanvas.toDataURL("image/png")})}}]),t}(n.Component);N.defaultProps={previewCanvas:null};var U=Object(b.inject)(function(e){return{previewCanvas:e.appState.previewCanvas}})(Object(b.observer)(N)),W=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{className:"download-button",onClick:this.props.downloadImages},"Download images")}}]),t}(n.Component),J=Object(b.inject)(function(e){return{downloadImages:e.appState.downloadImages}})(Object(b.observer)(W)),H=a(19),$=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){var t=e.target.value;a.setState({overlayText:t}),a.setOverlayText(t)},a.setOverlayText=Object(H.throttle)(a.props.setOverlayText,500),a.state={overlayText:""},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Text: ",r.a.createElement("input",{type:"text",value:this.state.overlayText,onChange:this.onChange}))}}]),t}(n.Component);$.defaultProps={overlayText:""},$.initialState={overlayText:""};var q=Object(b.inject)(function(e){var t=e.appState;return{overlayText:t.overlayText,setOverlayText:t.setOverlayText}})(Object(b.observer)($)),G=new A(new function e(){var t=this;Object(c.a)(this,e),this.getPlaceholderCanvas=function(e,t,a,n){var r=Object(P.createCanvas)(e,t),i=r.getContext("2d");return i.fillStyle="lightgray",i.fillRect(0,0,e,t),i.fillStyle="white",i.fillRect(a+n,0,n,a),i.fillRect(2*a+2*n,0,n,a),r},this.getCanvasFromFile=function(){var e=Object(k.a)(E.a.mark(function e(t,a,n,r,i){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new I.a(function(e){var o=new FileReader;o.onload=function(t){var o=t.target.result,c=new Image;c.onload=function(t){var o,c,l,s,u=t.target,p=Object(P.createCanvas)(a,n),b=p.getContext("2d");b.fillStyle="white",b.fillRect(0,0,a,n);var h=u.width/u.height;h>a/n?(o=a,l=0,s=(n-(c=a/h))/2):(c=n,l=(a-(o=n*h))/2,s=0),b.drawImage(u,l,s,o,c),b.fillRect(r,0,i,r),b.fillRect(2*r+i,0,i,r),e(p)},c.src=o},o.readAsDataURL(t)}));case 1:case"end":return e.stop()}},e,this)}));return function(t,a,n,r,i){return e.apply(this,arguments)}}(),this.addTextToCanvas=function(e,t){var a=e.width,n=e.height,r=Object(P.createCanvas)(a,n),i=r.getContext("2d");return i.drawImage(e,0,0,a,n),i.fillStyle="white",i.font="600px Helvetica, Arial, sans",i.textAlign="center",i.fillText(t,a/2,n/2+220),r},this.saveBlobAsFile=function(e,t){var a=document.createElement("a");a.setAttribute("download",t),a.setAttribute("href",window.URL.createObjectURL(e)),a.click()},this.downloadImages=function(e,a,n){var r=[],i=3;[0,a+n,2*a+2*n].forEach(function(n,o){var c=Object(P.createCanvas)(a,a);c.getContext("2d").drawImage(e,n,0,a,a,0,0,a,a),c.toBlob(function(e){r[2-o]=e,--i||r.forEach(function(e,a){t.saveBlobAsFile(e,"grid-image-".concat(3-a,".png"))})})})}}),K=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(b.Provider,{appState:G},r.a.createElement(T,{className:"App"},r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Wizard emoji"},"\ud83e\uddd9\ud83c\udffb\u200d\u2640\ufe0f")," ","Layout your image on 3x1 grid for Instagram"),r.a.createElement(U,null),r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement(J,null)),r.a.createElement(q,null),r.a.createElement(v.a,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.7155b4b2.chunk.js.map