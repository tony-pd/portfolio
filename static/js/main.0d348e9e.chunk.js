(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[1],{227:function(e,n,a){e.exports=a(452)},232:function(e,n,a){},233:function(e,n,a){},452:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),i=a(47),l=a.n(i),o=(a(232),a(132)),c=a(133),u=a(135),d=a(134),s=a(97),m=(a(233),a(95)),f=a(218),E=a.n(f),p=function(){return{type:"FETCH_BEGIN"}},v=a(98),h=a(219),g=a.n(h),b=a(456),y=a(455);a(254);function k(){var e=Object(s.a)(["\n  min-width: 100%;\n"]);return k=function(){return e},e}function _(){var e=Object(s.a)(["\n  font-size: calc(10px + 2vmin);\n  color: white;\n  overflow-x: hidden;\n  animation: fadein 2s;\n  \n  div[data-nav] ul {\n      display: flex;\n      flex-direction: row;\n      list-style-type: none;\n      justify-content: center;\n      margin: 0;\n      padding: 0;\n  }\n  div[data-nav] a {\n    font-size: 0.6em; \n    padding: 9px 20px 10px !important;\n  }\n  .is-active{\n    background: #1e1e1e;\n    color: white !important;\n    pointer-events: none;\n  }\n  .bg-black{\n    background-color: black;\n    padding: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    div[data-nav] ul {\n      flex-direction: column;\n      text-align: center;\n    }\n    div[data-nav] a {\n      font-size: 1.5em;\n    }\n  }\n"]);return _=function(){return e},e}var w=r.a.lazy((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,492))})),j=r.a.lazy((function(){return Promise.all([a.e(0),a.e(10)]).then(a.bind(null,496))})),x=r.a.lazy((function(){return Promise.all([a.e(0),a.e(4),a.e(6)]).then(a.bind(null,497))})),C=r.a.lazy((function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,493))})),L=r.a.lazy((function(){return Promise.all([a.e(0),a.e(5),a.e(9)]).then(a.bind(null,494))})),O=v.a.div(_()),F=v.a.div(k()),z=function(e){Object(u.a)(a,e);var n=Object(d.a)(a);function a(){return Object(o.a)(this,a),n.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.getData)()}},{key:"render",value:function(){var e=this.props,n=e.data,a=e.isLoading,i=e.err;return r.a.createElement(O,null,i?r.a.createElement("p",null,i.message):null,a?r.a.createElement("p",null,"loading.."):r.a.createElement(t.Fragment,null,r.a.createElement(b.a,{collapseOnSelect:!0,expand:"md",bg:"black",variant:"dark",fixed:"top"},r.a.createElement(b.a.Brand,{href:"#home"}),r.a.createElement(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(b.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(y.a,{className:"mr-auto",style:{margin:"auto"}},r.a.createElement(g.a,{scrollTargetIds:["section_1","section_2","section_3","section_4"],offset:0,activeNavClass:"is-active",scrollDuration:"1000",headerBackground:"false"},n.map((function(e,n){var a=e.menu;return r.a.createElement("ul",{key:n},r.a.createElement("li",null,r.a.createElement(y.a.Link,{href:"/"},a[0])),r.a.createElement("li",null,r.a.createElement(y.a.Link,{href:"#section_1"},a[1])),r.a.createElement("li",null,r.a.createElement(y.a.Link,{href:"#section_2"},a[2])),r.a.createElement("li",null,r.a.createElement(y.a.Link,{href:"#section_3"},a[3])),r.a.createElement("li",null,r.a.createElement(y.a.Link,{href:"#section_4"},a[4])))})))))),r.a.createElement(t.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(F,{key:"1"},r.a.createElement(w,{data:n}),r.a.createElement("div",{id:"section_1"},r.a.createElement(j,{data:n})),r.a.createElement("div",{id:"section_2"},r.a.createElement(x,{data:n})),r.a.createElement("div",{id:"section_3"},r.a.createElement(C,{data:n})),r.a.createElement("div",{id:"section_4"},r.a.createElement(L,{data:n}))))))}}]),a}(t.Component),S=Object(m.b)((function(e){return{data:e.data,isLoading:e.isLoading,err:e.err}}),(function(e){return{getData:function(){return e((function(e){e(p),E.a.get("./db.json").then((function(n){e(function(e){return{type:"FETCH_SUCCESS",payload:e}}(n.data))})).catch((function(n){console.log(n),e(function(e){return{type:"FETCH_FAILURE",payload:e}}(n))}))}))}}}))(z);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(258),a(267);var T=a(76),B=a(226),H=a(77),I={isLoading:!0,data:{},err:""},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_BEGIN":return Object(H.a)({},e);case"FETCH_SUCCESS":return Object(H.a)({},e,{data:n.payload,isLoading:!1});case"FETCH_FAILURE":return Object(H.a)({},e,{err:n.payload});default:return e}};l.a.render(r.a.createElement(m.a,{store:Object(T.c)(P,Object(T.a)(B.a))},r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[227,2,3]]]);
//# sourceMappingURL=main.0d348e9e.chunk.js.map