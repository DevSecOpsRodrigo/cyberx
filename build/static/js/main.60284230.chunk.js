(this.webpackJsonpletmeask=this.webpackJsonpletmeask||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},43:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),c=n(27),s=n.n(c),i=n(14),o=n(6),u=n(5),l=n.n(u),d=n(8),j=n(9),h=n.p+"static/media/logo.af788c3a.svg",b=n.p+"static/media/google-icon.df15d8e5.svg",p=n(18);n(37),n(39);p.a.initializeApp({apiKey:"AIzaSyB8s760YcuM7_H1orjfoDASmH31FOrPwCY",authDomain:"letmeask-projeto-a2916.firebaseapp.com",databaseURL:"https://letmeask-projeto-a2916-default-rtdb.firebaseio.com",projectId:"letmeask-projeto-a2916",storageBucket:"letmeask-projeto-a2916.appspot.com",messagingSenderId:"230011109510",appId:"1:230011109510:web:68f979985c181dc15bd107"});var f=p.a.auth(),m=p.a.database(),x=n(30),O=n(31),v=(n(43),n(1)),g=["isOutlined"];function k(e){var t=e.isOutlined,n=void 0!==t&&t,r=Object(O.a)(e,g);return Object(v.jsx)("button",Object(x.a)({className:"button ".concat(n?"outlined":"")},r))}var w=Object(r.createContext)({});function y(e){var t=Object(r.useState)(),n=Object(j.a)(t,2),a=n[0],c=n[1];function s(){return(s=Object(d.a)(l.a.mark((function e(){var t,n,r,a,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new p.a.auth.GoogleAuthProvider,e.next=3,f.signInWithPopup(t);case 3:if(!(n=e.sent).user){e.next=9;break}if(r=n.user,a=r.displayName,s=r.photoURL,i=r.uid,a&&s){e.next=8;break}throw new Error("Missing information from Google Account.");case 8:c({id:i,name:a,avatar:s});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){var e=f.onAuthStateChanged((function(e){if(e){var t=e.displayName,n=e.photoURL,r=e.uid;if(!t||!n)throw new Error("Missing information from Google Account.");c({id:r,name:t,avatar:n})}}));return function(){e()}}),[]),Object(v.jsx)(w.Provider,{value:{user:a,signInWithGoogle:function(){return s.apply(this,arguments)}},children:e.children})}function C(){return Object(r.useContext)(w)}n(24);function A(){var e=Object(o.f)(),t=C(),n=t.user,a=t.signInWithGoogle,c=Object(r.useState)(""),s=Object(j.a)(c,2),i=s[0],u=s[1];function p(){return(p=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=3;break}return t.next=3,a();case 3:e.push("/rooms/new");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return(f=Object(d.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==i.trim()){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,m.ref("rooms/".concat(i)).get();case 5:if((r=t.sent).exists()){t.next=9;break}return alert("Room does not exists."),t.abrupt("return");case 9:if(!r.val().endedAt){t.next=12;break}return alert("Room already closed."),t.abrupt("return");case 12:e.push("/rooms/".concat(i));case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(v.jsx)("div",{id:"page-auth",children:Object(v.jsx)("main",{children:Object(v.jsxs)("div",{className:"main-content",children:[Object(v.jsx)("img",{src:h,alt:"Letmeask"}),Object(v.jsxs)("button",{onClick:function(){return p.apply(this,arguments)},className:"create-room",children:[Object(v.jsx)("img",{src:b,alt:"Logo do Google"}),"Crie sua sala com o Google"]}),Object(v.jsx)("div",{className:"separator",children:"ou entre em uma sala"}),Object(v.jsxs)("form",{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(v.jsx)("input",{type:"text",placeholder:"Digite o c\xf3digo da sala",onChange:function(e){return u(e.target.value)},value:i}),Object(v.jsx)(k,{type:"submit",children:"Entrar na sala"})]})]})})})}function N(){var e=C().user,t=Object(o.f)(),n=Object(r.useState)(""),a=Object(j.a)(n,2),c=a[0],s=a[1];function u(){return(u=Object(d.a)(l.a.mark((function n(r){var a,s;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),""!==c.trim()){n.next=3;break}return n.abrupt("return");case 3:return a=m.ref("rooms"),n.next=6,a.push({title:c,authorId:null===e||void 0===e?void 0:e.id});case 6:s=n.sent,t.push("/rooms/".concat(s.key));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(v.jsx)("div",{id:"page-auth",children:Object(v.jsx)("main",{children:Object(v.jsxs)("div",{className:"main-content",children:[Object(v.jsx)("img",{src:h,alt:"Letmeask"}),Object(v.jsx)("h2",{children:"Criar uma nova sala"}),Object(v.jsxs)("form",{onSubmit:function(e){return u.apply(this,arguments)},children:[Object(v.jsx)("input",{type:"text",placeholder:"Nome da sala",onChange:function(e){return s(e.target.value)},value:c}),Object(v.jsx)(k,{type:"submit",children:"Criar sala"})]}),Object(v.jsxs)("p",{children:["Quer entrar em uma sala existente? ",Object(v.jsx)(i.c,{to:"/",children:"clique aqui"})]})]})})})}var q=n(29),S=n.n(q);n(49);function H(e){var t=e.content,n=e.author,r=e.isAnswered,a=void 0!==r&&r,c=e.isHighlighted,s=void 0!==c&&c,i=e.children;return Object(v.jsxs)("div",{className:S()("question",{answered:a},{highlighted:s&&!a}),children:[Object(v.jsx)("p",{children:t}),Object(v.jsxs)("footer",{children:[Object(v.jsxs)("div",{className:"user-info",children:[Object(v.jsx)("img",{src:n.avatar,alt:n.name}),Object(v.jsx)("span",{children:n.name})]}),Object(v.jsx)("div",{children:i})]})]})}var I=n.p+"static/media/copy.2f36f99e.svg";n(50);function L(e){return Object(v.jsxs)("button",{className:"room-code",onClick:function(){navigator.clipboard.writeText(e.code)},children:[Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:I,alt:"Copy room code"})}),Object(v.jsxs)("span",{children:["Sala #",e.code]})]})}function E(e){var t=C().user,n=Object(r.useState)([]),a=Object(j.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(""),o=Object(j.a)(i,2),u=o[0],l=o[1];return Object(r.useEffect)((function(){var n=m.ref("rooms/".concat(e));return n.on("value",(function(e){var n,r=e.val(),a=null!==(n=r.questions)&&void 0!==n?n:{},c=Object.entries(a).map((function(e){var n,r,a,c=Object(j.a)(e,2),s=c[0],i=c[1];return{id:s,content:i.content,author:i.author,isHighlighted:i.isHighlighted,isAnswered:i.isAnswered,likeCount:Object.values(null!==(n=i.likes)&&void 0!==n?n:{}).length,likeId:null===(r=Object.entries(null!==(a=i.likes)&&void 0!==a?a:{}).find((function(e){var n=Object(j.a)(e,2);n[0];return n[1].authorId===(null===t||void 0===t?void 0:t.id)})))||void 0===r?void 0:r[0]}}));l(r.title),s(c)})),function(){n.off("value")}}),[e,null===t||void 0===t?void 0:t.id]),{questions:c,title:u}}n(26);function D(){var e=C().user,t=Object(o.g)(),n=Object(r.useState)(""),a=Object(j.a)(n,2),c=a[0],s=a[1],i=t.id,u=E(i),b=u.title,p=u.questions;function f(){return(f=Object(d.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==c.trim()){t.next=3;break}return t.abrupt("return");case 3:if(e){t.next=5;break}throw new Error("You must be logged in");case 5:return r={content:c,author:{name:e.name,avatar:e.avatar},isHighlighted:!1,isAnswered:!1},t.next=8,m.ref("rooms/".concat(i,"/questions")).push(r);case 8:s("");case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(){return(x=Object(d.a)(l.a.mark((function t(n,r){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=5;break}return t.next=3,m.ref("rooms/".concat(i,"/questions/").concat(n,"/likes/").concat(r)).remove();case 3:t.next=7;break;case 5:return t.next=7,m.ref("rooms/".concat(i,"/questions/").concat(n,"/likes")).push({authorId:null===e||void 0===e?void 0:e.id});case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(v.jsxs)("div",{id:"page-room",children:[Object(v.jsx)("header",{children:Object(v.jsxs)("div",{className:"content",children:[Object(v.jsx)("img",{src:h,alt:"Letmeask"}),Object(v.jsx)(L,{code:i})]})}),Object(v.jsxs)("main",{children:[Object(v.jsxs)("div",{className:"room-title",children:[Object(v.jsxs)("h1",{children:["Sala ",b]}),p.length>0&&Object(v.jsxs)("span",{children:[p.length," pergunta(s)"]})]}),Object(v.jsxs)("form",{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(v.jsx)("textarea",{placeholder:"O que voc\xea quer perguntar?",onChange:function(e){return s(e.target.value)},value:c}),Object(v.jsxs)("div",{className:"form-footer",children:[e?Object(v.jsxs)("div",{className:"user-info",children:[Object(v.jsx)("img",{src:e.avatar,alt:e.name}),Object(v.jsx)("span",{children:e.name})]}):Object(v.jsxs)("span",{children:["Para enviar uma pergunta, ",Object(v.jsx)("button",{children:"fa\xe7a seu login"}),"."]}),Object(v.jsx)(k,{type:"submit",disabled:!e,children:"Enviar pergunta"})]})]}),Object(v.jsx)("div",{className:"question-list",children:p.map((function(e){return Object(v.jsx)(H,{content:e.content,author:e.author,isAnswered:e.isAnswered,isHighlighted:e.isHighlighted,children:!e.isAnswered&&Object(v.jsxs)("button",{className:"like-button ".concat(e.likeId?"liked":""),type:"button","aria-label":"Marcar como gostei",onClick:function(){return function(e,t){return x.apply(this,arguments)}(e.id,e.likeId)},children:[e.likeCount>0&&Object(v.jsx)("span",{children:e.likeCount}),Object(v.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{d:"M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z",stroke:"#737380",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})},e.id)}))})]})]})}var M=n.p+"static/media/delete.22ba6e00.svg",G=n.p+"static/media/check.5dfa6ed6.svg",R=n.p+"static/media/answer.4502a8d5.svg";function P(){var e=Object(o.f)(),t=Object(o.g)().id,n=E(t),r=n.title,a=n.questions;function c(){return(c=Object(d.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.ref("rooms/".concat(t)).update({endedAt:new Date});case 2:e.push("/");case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(){return(s=Object(d.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Tem certeza que voc\xea deseja excluir esta pergunta?")){e.next=3;break}return e.next=3,m.ref("rooms/".concat(t,"/questions/").concat(n)).remove();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(){return(i=Object(d.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.ref("rooms/".concat(t,"/questions/").concat(n)).update({isAnswered:!0});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=Object(d.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.ref("rooms/".concat(t,"/questions/").concat(n)).update({isHighlighted:!0});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(v.jsxs)("div",{id:"page-room",children:[Object(v.jsx)("header",{children:Object(v.jsxs)("div",{className:"content",children:[Object(v.jsx)("img",{src:h,alt:"Letmeask"}),Object(v.jsxs)("div",{children:[Object(v.jsx)(L,{code:t}),Object(v.jsx)(k,{isOutlined:!0,onClick:function(){return c.apply(this,arguments)},children:"Encerrar sala"})]})]})}),Object(v.jsxs)("main",{children:[Object(v.jsxs)("div",{className:"room-title",children:[Object(v.jsxs)("h1",{children:["Sala ",r]}),a.length>0&&Object(v.jsxs)("span",{children:[a.length," pergunta(s)"]})]}),Object(v.jsx)("div",{className:"question-list",children:a.map((function(e){return Object(v.jsxs)(H,{content:e.content,author:e.author,isAnswered:e.isAnswered,isHighlighted:e.isHighlighted,children:[!e.isAnswered&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("button",{type:"button",onClick:function(){return function(e){return i.apply(this,arguments)}(e.id)},children:Object(v.jsx)("img",{src:G,alt:"Marcar pergunta como respondida"})}),Object(v.jsx)("button",{type:"button",onClick:function(){return function(e){return u.apply(this,arguments)}(e.id)},children:Object(v.jsx)("img",{src:R,alt:"Dar destaque \xe0 pergunta"})})]}),Object(v.jsx)("button",{type:"button",onClick:function(){return function(e){return s.apply(this,arguments)}(e.id)},children:Object(v.jsx)("img",{src:M,alt:"Remover pergunta"})})]},e.id)}))})]})]})}var B=function(){return Object(v.jsx)(i.b,{children:Object(v.jsx)(i.a,{children:Object(v.jsx)(y,{children:Object(v.jsxs)(o.c,{children:[Object(v.jsx)(o.a,{path:"/",exact:!0,component:A}),Object(v.jsx)(o.a,{path:"/rooms/new",component:N}),Object(v.jsx)(o.a,{path:"/rooms/:id",component:D}),Object(v.jsx)(o.a,{path:"/admin/rooms/:id",component:P})]})})})})};n(51);s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(B,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.60284230.chunk.js.map