(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{104:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(12),i=t.n(c),o=(t(76),t(52)),l=t(53),u=t(69),s=t(68),m=t(6),d=(t(77),t(31)),f=t(55),g=t.n(f),p=function(){return{type:"FETCH_BEGIN"}},E=t(7);function v(){var e=Object(m.a)(["    \n    display: flex;\n    flex-direction: column;\n    min-width: 100%;\n    min-height: 100vh;\n    justify-content: center;\n    align-items: center; \n    background-color: #282c34;\n    background: #000000 url('./images/bg/about.jpg') no-repeat;\n    //background-size: 100% auto;\n    p{\n        text-align: center;\n        width: 70%;\n    }\n"]);return v=function(){return e},e}var b=E.a.div(v()),h=function(e){return e.data.map((function(e){var n=e.about;return r.a.createElement(b,{key:"about"},r.a.createElement("h1",null,n.title),r.a.createElement("p",null,n.desc))}))},k=t(109);function j(){var e=Object(m.a)(["    \n    display: flex;\n    flex-direction: column;\n    min-width: 100%;\n    min-height: 100vh;\n    justify-content: center;\n    align-items: center; \n    background-color: #292928;\n    background: #000000 url('./images/bg/skills.jpg') no-repeat;\n    //background-size: 100% auto;\n    ul{\n        list-style-type:none;\n    }\n    li{\n        margin-bottom:20px;\n    }\n"]);return j=function(){return e},e}var y=E.a.div(j()),x=function(e){var n=e.data,t={width:"60%",margin:0,padding:0};return n.map((function(e,n){var a=e.skills,c=["info","warning","","success","danger"];return r.a.createElement(y,{key:"skills"},r.a.createElement("h1",null,"Skills"),r.a.createElement("ul",{style:t},a.map((function(e,n){return r.a.createElement("li",{key:n},r.a.createElement("em",null,e.skill),r.a.createElement(k.a,{variant:c[n],now:e.rating}))}))))}))},w=t(26),O=t(106);function _(){var e=Object(m.a)(["\n  margin-top: 10px;\n"]);return _=function(){return e},e}function C(){var e=Object(m.a)(["\n  max-width: 100%;\n  height: auto;\n"]);return C=function(){return e},e}var L=E.a.img(C()),S=E.a.p(_()),B=function(e){var n=e.title,t=e.desc,a=e.img;return r.a.createElement(O.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(O.a.Header,{closeButton:!0},r.a.createElement(O.a.Title,{id:"contained-modal-title-vcenter"},n)),r.a.createElement(O.a.Body,{closeButton:!0},r.a.createElement(L,{src:a,alt:n}),r.a.createElement(S,null,t)))};function F(){var e=Object(m.a)(["\n    margin: 20px;\n    border: 0;  \n    background: none;\n    &:hover {              \n        filter: brightness(125%);   \n        cursor: pointer;    \n    }\n    img {\n        box-shadow: 5px 5px 8px #000000;\n    }\n"]);return F=function(){return e},e}function H(){var e=Object(m.a)(["\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-around;    \n"]);return H=function(){return e},e}function T(){var e=Object(m.a)(["    \n    display: flex;\n    flex-direction: column;\n    min-width: 100%;\n    min-height: 100vh;\n    justify-content: center;\n    align-items: center; \n    background-color: #1f1f1e;\n    background: #000000 url('./images/bg/projects.jpg') no-repeat;\n    //background-size: 100% auto;\n"]);return T=function(){return e},e}var z=E.a.div(T()),I=E.a.div(H()),N=E.a.div(F()),D=function(e){var n=e.data,t=r.a.useState(!1),a=Object(w.a)(t,2),c=a[0],i=a[1],o=r.a.useState(""),l=Object(w.a)(o,2),u=l[0],s=l[1],m=r.a.useState(""),d=Object(w.a)(m,2),f=d[0],g=d[1],p=r.a.useState(""),E=Object(w.a)(p,2),v=E[0],b=E[1];return n.map((function(e,n){var t=e.projects;return r.a.createElement(z,{key:"projects"},r.a.createElement("h1",null,"Projects"),r.a.createElement(I,null,t.map((function(e,n){return r.a.createElement(N,{key:n},r.a.createElement("img",{src:e.thumb,alt:e.title,onClick:function(){return function(e,n,t){i(!0),s(e),g(n),b(t)}(e.title,e.desc,e.img)}}))}))),r.a.createElement(B,{title:u,desc:f,img:v,show:c,onHide:function(){return i(!1)}}))}))};function U(){var e=Object(m.a)(["\n    margin: 20px;\n    box-shadow: 5px 5px 8px #000000;\n"]);return U=function(){return e},e}function A(){var e=Object(m.a)(["\n    display: flex;   \n    flex-flow: row wrap;    \n    justify-content: space-around;    \n"]);return A=function(){return e},e}function G(){var e=Object(m.a)(["    \n    display: flex;\n    flex-direction: column;\n    min-width: 100%;\n    min-height: 100vh;\n    justify-content: center;\n    align-items: center; \n    background-color: #1a1a1a;\n    background: #000000 url('./images/bg/clients.jpg') no-repeat;\n    //background-size: 100% auto;\n"]);return G=function(){return e},e}var J=E.a.div(G()),R=E.a.div(A()),W=E.a.div(U()),M=function(e){return e.data.map((function(e){var n=e.clients;return r.a.createElement(J,{key:"clients"},r.a.createElement("h1",null,"Clients"),r.a.createElement(R,null,n.map((function(e,n){return r.a.createElement(W,{key:n},r.a.createElement("img",{src:e,alt:""}))}))))}))},P=t(33),$=t(63),q=t(40);function K(){var e=Object(m.a)(["\n    display: flex;\n    flex-direction: row;\n    a{\n        margin:20px;\n        color: white;\n        &:hover {              \n            filter: brightness(50%);   \n            cursor: pointer;    \n        }\n    }\n"]);return K=function(){return e},e}function Q(){var e=Object(m.a)(["    \n    display: flex;\n    flex-direction: column;\n    min-width: 100%;\n    min-height: 100vh;\n    justify-content: center;\n    align-items: center; \n    background-color: #000000;\n    background: #000000 url('./images/bg/contact.jpg') no-repeat;\n    //background-size: 100% auto;\n"]);return Q=function(){return e},e}var V=E.a.div(Q()),X=E.a.div(K()),Y=function(e){return e.data.map((function(e){var n=e.contact;return r.a.createElement(V,{key:"contact"},r.a.createElement("h1",null,n.title),r.a.createElement("p",null,n.desc),r.a.createElement(X,null,r.a.createElement("a",{href:n.email,title:"email"},r.a.createElement(P.a,{icon:$.a})),r.a.createElement("a",{href:n.linkedin,title:"Linkedin",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(P.a,{icon:q.b})),r.a.createElement("a",{href:n.github,title:"GitHub",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(P.a,{icon:q.a}))))}))},Z=t(64),ee=t.n(Z),ne=t(108),te=t(107);t(100);function ae(){var e=Object(m.a)(["\n  min-width: 100%;\n"]);return ae=function(){return e},e}var re=E.a.div(ae()),ce=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getData)()}},{key:"render",value:function(){var e=this.props,n=e.data,t=e.isLoading,c=e.err;return r.a.createElement("div",{className:"App"},c?r.a.createElement("p",null,c.message):null,t?r.a.createElement("p",null,"loading.."):r.a.createElement(a.Fragment,null,r.a.createElement(ne.a,{collapseOnSelect:!0,expand:"lg",bg:"black",variant:"dark",fixed:"top"},r.a.createElement(ne.a.Brand,{href:"#home"}),r.a.createElement(ne.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(ne.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(te.a,{className:"mr-auto",style:{margin:"auto"}},r.a.createElement(ee.a,{scrollTargetIds:["section_1","section_2","section_3","section_4"],offset:0,activeNavClass:"is-active",scrollDuration:"1000",headerBackground:"false"},n.map((function(e,n){var t=e.menu;return r.a.createElement("ul",{key:n},r.a.createElement("li",null,r.a.createElement(te.a.Link,{href:"/"},t[0])),r.a.createElement("li",null,r.a.createElement(te.a.Link,{href:"#section_1"},t[1])),r.a.createElement("li",null,r.a.createElement(te.a.Link,{href:"#section_2"},t[2])),r.a.createElement("li",null,r.a.createElement(te.a.Link,{href:"#section_3"},t[3])),r.a.createElement("li",null,r.a.createElement(te.a.Link,{href:"#section_4"},t[4])))})))))),r.a.createElement(re,{key:"1"},r.a.createElement(h,{data:n}),r.a.createElement("div",{id:"section_1"},r.a.createElement(x,{data:n})),r.a.createElement("div",{id:"section_2"},r.a.createElement(D,{data:n})),r.a.createElement("div",{id:"section_3"},r.a.createElement(M,{data:n})),r.a.createElement("div",{id:"section_4"},r.a.createElement(Y,{data:n})))))}}]),t}(a.Component),ie=Object(d.b)((function(e){return{data:e.data,isLoading:e.isLoading,err:e.err}}),(function(e){return{getData:function(){return e((function(e){e(p),g.a.get("./db.json").then((function(n){console.log("response",n.data),e(function(e){return{type:"FETCH_SUCCESS",payload:e}}(n.data))})).catch((function(n){console.log(n),e(function(e){return{type:"FETCH_FAILURE",payload:e}}(n))}))}))}}}))(ce);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=t(24),le=t(67),ue=t(34),se={isLoading:!0,data:{},err:""},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_BEGIN":return Object(ue.a)({},e);case"FETCH_SUCCESS":return Object(ue.a)({},e,{data:n.payload,isLoading:!1});case"FETCH_FAILURE":return Object(ue.a)({},e,{err:n.payload});default:return e}};i.a.render(r.a.createElement(d.a,{store:Object(oe.c)(me,Object(oe.a)(le.a))},r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,n,t){e.exports=t(104)},76:function(e,n,t){},77:function(e,n,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.b7f65f99.chunk.js.map