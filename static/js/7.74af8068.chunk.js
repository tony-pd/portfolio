(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[7],{457:function(e,t,n){"use strict";var a=n(460),r=n(132),c=n(133),i=n(135),o=n(134),u=n(0),s=n.n(u),l=n(458),f=n.n(l),p=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={active:!0},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state.active,n=this.props,r=n.once,c=n.children,i=Object(a.a)(n,["once","children"]);return s.a.createElement(f.a,Object.assign({active:t,onChange:function(t){return r&&t&&e.setState({active:!1},(function(){}))}},i),(function(e){var t=e.isVisible;return c({isVisible:t})}))}}]),n}(u.Component);p.defaultProps={once:!1},t.a=p},492:function(e,t,n){"use strict";n.r(t);var a=n(77),r=n(97),c=n(0),i=n.n(c),o=n(98),u=n(459),s=n(457);function l(){var e=Object(r.a)(["    \n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    //height: 100vh;\n    min-height: 100vh;\n    //justify-content: center;\n    align-items: center;     \n    background-color: #282c34;\n    background: #000000 url('./images/bg/about.jpg') no-repeat top center;\n    //background-size: 100% auto;\n    h1{\n        margin-top: 35vh;\n    }\n    p{\n        text-align: center;\n        width: 70%;\n    }\n"]);return l=function(){return e},e}var f=o.a.div(l());t.default=function(e){return e.data.map((function(e){var t=e.about;return i.a.createElement(f,{key:"about"},i.a.createElement(s.a,{once:!0},(function(e){var n=e.isVisible;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.Spring,{delay:300,from:{transform:"scale(2)"},to:{opacity:n?1:0,transform:"scale(1)"}},(function(e){return i.a.createElement("h1",{style:Object(a.a)({},e)},t.title)})),i.a.createElement(u.Spring,{delay:800,to:{opacity:n?1:0,transform:n?"scale(1)":"scale(0.5)"}},(function(e){return i.a.createElement("p",{style:Object(a.a)({},e)},t.desc)})))})))}))}}}]);
//# sourceMappingURL=7.74af8068.chunk.js.map