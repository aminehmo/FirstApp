(this.webpackJsonpuiexample=this.webpackJsonpuiexample||[]).push([[0],{66:function(e,a,t){e.exports=t(79)},71:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),c=t.n(l),i=(t(71),t(15)),s=t(16),m=t(19),o=t(17),u=t(20),p=t(59),h=t.n(p),d=t(28),E=t.n(d),g=t(51),y=t.n(g),f=t(117),b=t(124),v=t(119),x=t(122),I=t(82),k=t(58),O=t.n(k),j=t(108),S=t(114),w=t(120),C=t(116),D=t(57),M=t.n(D),P=t(118),R=t(41),A=t(35),N=t.n(A),L=t(112),T=t(111),H=t(29),W=t.n(H),B=t(123),J=t(110),G=t(113),$=t(40),q=t.n($),z=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).state={},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(j.a,null,this.props.data.map(function(a,t){return"Inbox"===a.status?r.a.createElement(B.a,{expanded:a.expand},r.a.createElement(J.a,{expandIcon:r.a.createElement(q.a,{onClick:function(){return e.props.expand(t)}}),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(T.a,{alt:"Remy Sharp",src:"./images/".concat(a.Image)}),r.a.createElement(R.a,null," ",a.SenderName," "),r.a.createElement(L.a,{onClick:function(){return e.props.deleteEmail(t)}},r.a.createElement(W.a,null)),r.a.createElement("div",null,r.a.createElement(L.a,{style:{marginRight:990},onClick:function(){return e.props.importants(t)}}," ",r.a.createElement(N.a,null)))),r.a.createElement(G.a,null,r.a.createElement(R.a,{style:{marginLeft:80},component:"span",variant:"body2",color:"textPrimary"},a.Mesg))):null}))}}]),a}(r.a.Component),F=t(115),K=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).state={},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(j.a,null,this.props.data.map(function(a,t){if("Important"===a.status)return r.a.createElement("div",{style:{textAlign:"center",background:"lightgray"}},r.a.createElement(S.a,{alignItems:"flex-start",key:t},r.a.createElement(F.a,null,r.a.createElement(T.a,{alt:"Remy Sharp",src:"./images/".concat(a.Image)})),r.a.createElement(C.a,{primary:"".concat(a.SenderName," "),secondary:r.a.createElement(R.a,{style:{marginLeft:80},component:"span",color:"textPrimary"},"".concat(a.Mesg))})," ",r.a.createElement("hr",null),r.a.createElement(L.a,{style:{marginRight:990},onClick:function(){return e.props.deleteEmail(t)}},r.a.createElement(W.a,null))),r.a.createElement("hr",null))})))}}]),a}(r.a.Component),Q=t(50),U=t.n(Q),V=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).state={},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(j.a,null,this.props.data.map(function(a,t){if("Trash"===a.status)return r.a.createElement("div",{style:{background:"lightgray"}},r.a.createElement(S.a,{alignItems:"flex-start",key:t},r.a.createElement(F.a,null,r.a.createElement(T.a,{alt:"Remy Sharp",src:"./images/".concat(a.Image)})),r.a.createElement(C.a,{primary:"".concat(a.SenderName," "),secondary:r.a.createElement(R.a,{style:{marginLeft:80},component:"span",color:"textPrimary"},"".concat(a.Mesg))}),r.a.createElement("hr",null),r.a.createElement(L.a,{style:{marginRight:990},onClick:function(){return e.props.restoreEmail(t)}},r.a.createElement(U.a,null))),r.a.createElement("hr",null))})))}}]),a}(r.a.Component),X=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).state={},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(j.a,null,this.props.data.map(function(a,t){return"Inbox"===a.status?r.a.createElement(B.a,null,r.a.createElement(J.a,{expandIcon:r.a.createElement(q.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(T.a,{alt:"Remy Sharp",src:"./images/".concat(a.Image)}),r.a.createElement(R.a,null," ",a.SenderName," ")),r.a.createElement(G.a,null,r.a.createElement(R.a,{style:{marginLeft:80},component:"span",variant:"body2",color:"textPrimary"},a.Mesg),r.a.createElement(L.a,{onClick:function(){return e.props.deleteEmail(t)}},r.a.createElement(W.a,null)),r.a.createElement(L.a,{style:{marginRight:990},onClick:function(){return e.props.importants(t)}},r.a.createElement(N.a,null)))):null}))}}]),a}(r.a.Component),Y=(t(78),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).state={selectedPage:"Inbox",status:!0,styleA:{height:60,marginLeft:100,display:"flex"},emailData:[{SenderName:"Henry",Mesg:"This is an important msg",Image:"ahmed.png",status:"Inbox",expand:!1},{SenderName:"Mohammad",Mesg:"meet me at landmark at 8pm tonight ",Image:"george.png",status:"Inbox",expand:!1},{SenderName:"Gillian",Mesg:"i will not attend today ",Image:"gillian.png",status:"Inbox",expand:!1},{SenderName:"Hania",Mesg:"hello how are you today?",Image:"hania.png",status:"Inbox",expand:!1},{SenderName:"Mariam",Mesg:"can you send me my files",Image:"mariam.png",status:"Inbox",expand:!1},{SenderName:"Robert",Mesg:"how is everything ?",Image:"robert.png",status:"Inbox",expand:!1}],open:!1},t.handleDelete=function(e){var a=t.state.emailData;a[e].status="Trash",t.setState({emailData:a})},t.handleImportant=function(e){t.state.emailData[e].status="Important"},t.handleExpand=function(e){var a=t.state.emailData;a[e].expand=!a[e].expand,t.setState({emailData:a})},t.handleRestore=function(e){var a=t.state.emailData;a[e].status="Inbox",t.setState({emailData:a})},t.handleChanges=function(e){t.setState({selectedPage:e})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"HELLO"),r.a.createElement(b.a,null),r.a.createElement(f.a,null,r.a.createElement("div",{style:this.state.styleA},r.a.createElement(P.a,null,r.a.createElement(I.a,{color:"inherit","aria-label":"open drawer",onClick:this.handleDrawer,edge:"start"},r.a.createElement(M.a,null)),r.a.createElement(R.a,{variant:"h6",noWrap:!0},"Persistent drawer")))),r.a.createElement("nav",{style:{marginLeft:300},"aria-label":"mailbox folders"},r.a.createElement("div",null,r.a.createElement(x.a,{variant:"persistent",anchor:"left",open:this.state.status},r.a.createElement("div",null),r.a.createElement("div",{style:{textAlign:"center",color:"black"}},r.a.createElement(I.a,null,r.a.createElement(R.a,{style:{textAlign:"center",color:"black"}},r.a.createElement("strong",null,"CP3170")))),r.a.createElement(v.a,null),r.a.createElement(j.a,{style:{height:150,background:"gray"}},["Inbox","Trash","Important","Spam"].map(function(a){return r.a.createElement(S.a,{style:{background:"gray"},button:!0,key:a,onClick:function(){return e.handleChanges(a)}},r.a.createElement(w.a,null,"Inbox"===a?r.a.createElement(O.a,null):"Trash"===a?r.a.createElement(E.a,null):"Important"===a?r.a.createElement(h.a,null):r.a.createElement(y.a,null)),r.a.createElement(C.a,{primary:a}))})))),r.a.createElement(v.a,null)),r.a.createElement("main",{style:{marginLeft:160}},r.a.createElement("div",{style:{marginTop:80}}),"Inbox"===this.state.selectedPage?r.a.createElement(z,{data:this.state.emailData,deleteEmail:this.handleDelete,importants:this.handleImportant,expand:this.handleExpand}):"Trash"===this.state.selectedPage?r.a.createElement(V,{data:this.state.emailData,restoreEmail:this.handleRestore}):"Important"===this.state.selectedPage?r.a.createElement(K,{data:this.state.emailData,deleteEmail:this.handleDelete}):"Spam"===this.state.selectedPage?r.a.createElement(X,{data:this.state.emailData}):null))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[66,1,2]]]);
//# sourceMappingURL=main.66034d05.chunk.js.map