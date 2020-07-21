(this.webpackJsonpotter=this.webpackJsonpotter||[]).push([[0],{32:function(e,n,t){e.exports=t(67)},37:function(e,n,t){},38:function(e,n,t){},67:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(9),i=t.n(o),c=(t(37),t(1)),l=(t(38),"#fffbfa"),u="#FC5130",m={brightBackground:"#5cd9d5ff",darkBackground:"#0d5c63ff",headerFontColour:u,headerFontWeight:"300",bodyFont:"#303036",buttonPrimaryBackground:u,buttonSecondaryBackground:l,buttonBorderRadius:"25px",buttonFontColour:l,footerFontColour:l,formBackgroundColour:l},s=t(2);function d(){var e=Object(c.a)(["\n    @media (min-width: ","em) {\n      ",";\n    }\n  "]);return d=function(){return e},e}var f={small:376,smallmed:415,medium:801,large:1025,medlarge:1366,xlarge:1440,xxlarge:1680},h=Object.keys(f).reduce((function(e,n){var t=e,a=f[n]/16;return t[n]=function(){return Object(s.b)(d(),a,s.b.apply(void 0,arguments))},t}),{});function b(){var e=Object(c.a)(["\n  background:",";\n  color: ",";\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  position: fixed;  // for IE\n  position: sticky;\n  top: 0;\n\n  h1 {\n    font-size: 3em;\n    margin: 0.5em;\n  }\n"]);return b=function(){return e},e}var p=s.c.header(b(),(function(e){return e.theme.brightBackground}),(function(e){return e.theme.headerFontColour})),g=function(e){var n=e.props;return console.log(n),r.a.createElement(p,null,r.a.createElement("h1",null,"Otter"))},E=t(4),v=t(11),y=t.n(v),O=t(31),j=t.n(O),k=t(6),x=t(12),w=function(e,n){var t=Object(a.useState)({}),r=Object(E.a)(t,2),o=r[0],i=r[1],c=Object(a.useState)({}),l=Object(E.a)(c,2),u=l[0],m=l[1],s=Object(a.useState)(!1),d=Object(E.a)(s,2),f=d[0],h=d[1];Object(a.useEffect)((function(){0===Object.keys(u).length&&f&&e()}),[u]);return{handleChange:function(e){e.persist(),i((function(n){return Object(x.a)(Object(x.a)({},n),{},Object(k.a)({},e.target.name,e.target.value))}))},handleSubmit:function(e){e&&e.preventDefault(),m(n(o)),h(!0)},values:o,errors:u}};function C(e){var n={};return e.name||(n.name="Please enter your name"),e.name&&e.name.length<3&&(n.name="Name must be 3 or more characters"),e.email?/\S+@\S+\.\S+/.test(e.email)||(n.email="Email address is invalid"):n.email="Please enter your email address",e.confirmEmail&&e.email?e.confirmEmail!==e.email?n.confirmEmail="Email addresses must match":/\S+@\S+\.\S+/.test(e.confirmEmail)||(n.confirmEmail="Email address is invalid"):e.confirmEmail||(n.confirmEmail="Please enter your email address"),n}function N(){var e=Object(c.a)(["\n\n  background: ",";\n\n  color: ",";\n  font-family: 'Oldenburg', serif;\n  font-size: 1.15em;\n  font-weight: bold;\n  padding: 0.7em 1em;\n  border-radius: ",";\n\n  &:hover {\n    transform: scale(1.05);\n  }\n\n  &.modal-form {\n    margin-top: 1em;\n  }\n"]);return N=function(){return e},e}var S=s.c.button(N(),(function(e){return"secondary"===e.buttonType?e.theme.buttonSecondaryBackground:e.theme.buttonPrimaryBackground}),(function(e){return"secondary"===e.buttonType?e.theme.bodyFont:e.theme.buttonFontColour}),(function(e){return e.theme.buttonBorderRadius})),B=function(e){var n=e.buttonType,t=e.onClick,a=e.text;return r.a.createElement(S,{buttonType:n,onClick:t,text:a},a)};B.defaultProps={buttonType:"primary"};var F=B,T=t(7),z=t.n(T);function q(){var e=Object(c.a)(["\n    flex-direction: row;\n  "]);return q=function(){return e},e}function P(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  ",";\n"]);return P=function(){return e},e}function A(){var e=Object(c.a)(["\n  input {\n    height: 2em;\n    border-radius: 25px;\n    width: 80%;\n    font-size: 1.2em;\n    padding: 0 0.5em;\n  }\n"]);return A=function(){return e},e}var R=s.c.form(A()),W=s.c.h1(P(),h.medium(q())),I=function(){var e=w((function(){j.a.post("https://yo7dm2sa2i.execute-api.eu-west-2.amazonaws.com/prod/signup",{name:n.name,email:n.email}).then((function(e){m(!0),console.log(e.status,"Subscriber added: request status")})).catch((function(e){console.log(e,"Subscriber not added")}))}),C),n=e.values,t=e.errors,o=e.handleChange,i=e.handleSubmit,c=Object(a.useState)(!1),l=Object(E.a)(c,2),u=l[0],m=l[1];return r.a.createElement("div",null,!u&&r.a.createElement(R,{onSubmit:i,noValidate:!0},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Name"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{autoComplete:"off",className:"input ".concat(t.name&&"is-danger"),type:"text",name:"name",onChange:o,value:n.name||"",required:!0}),t.name&&r.a.createElement("p",{className:"help is-danger"},t.name))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Email Address"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{autoComplete:"off",className:"input ".concat(t.email&&"is-danger"),type:"email",name:"email",onChange:o,value:n.email||"",required:!0}),t.email&&r.a.createElement("p",{className:"help is-danger"},t.email))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Confirm Email Address"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input ".concat(t.confirmEmail&&"is-danger"),type:"email",name:"confirmEmail",onChange:o,value:n.confirmEmail||"",required:!0})),t.confirmEmail&&r.a.createElement("p",{className:"help is-danger"},t.confirmEmail)),r.a.createElement(F,{type:"submit",className:"button is-block is-info is-fullwidth",text:"Sign me up!"})),u&&r.a.createElement(W,null,"Thanks for joining us! We'll be in touch soon.",r.a.createElement("img",{src:z.a,alt:"printed otter in sea",width:"200"})))};function H(){var e=Object(c.a)(["\n    width: 60%;\n  "]);return H=function(){return e},e}function J(){var e=Object(c.a)(["\n  background: ",";\n  margin: 5em auto;\n  padding: 1em;\n  ",";\n\n  div.field {\n    margin 1em 0;\n  }\n\n  p.help.is-danger {\n    color: ","; \n    margin-top: 0.3em;\n    font-size: 0.9em;\n    font-weight: 600;\n  }\n"]);return J=function(){return e},e}function M(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n\n"]);return M=function(){return e},e}var _=s.c.div(M()),D=Object(s.c)(y.a)(J(),(function(e){return e.theme.formBackgroundColour}),h.medium(H()),(function(e){return e.theme.headerFontColour}));y.a.setAppElement("#root");var V=function(){var e,n=r.a.useState(!1),t=Object(E.a)(n,2),a=t[0],o=t[1];function i(){o(!1)}return r.a.createElement(_,{className:"signup-modal"},r.a.createElement(F,{buttonType:"primary",className:"modal-form",onClick:function(){o(!0)},text:"I'm on board!"}),r.a.createElement(D,{isOpen:a,onAfterOpen:function(){e.style.color="#f00"},onRequestClose:i},r.a.createElement(F,{buttonType:"secondary",onClick:i,text:"X"}),r.a.createElement("h2",{ref:function(n){return e=n}},"Request an invite"),r.a.createElement(I,null)))};function X(){var e=Object(c.a)(["\n  height: calc(100vh - 100px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  height: 65vh;\n  border-bottom-left-radius: 93%;\n  background: ",";\n\n  padding: 0 10%;\n  h2 {\n    font-size: 1.8em;\n    margin: 0.4em auto;\n  }\n  h3 {\n    font-size: 2.1em;\n    margin: 0.4em auto;\n    span {\n      color: ",";\n    }\n  }\n  img {\n    border-radius: 5%;\n    width: 200px;\n  }\n\n"]);return X=function(){return e},e}function $(){var e=Object(c.a)(["\n  background:",";\n  height: calc(100vh - 100px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return $=function(){return e},e}var G=s.c.section($(),(function(e){return e.theme.brightBackground})),K=s.c.div(X(),(function(e){return e.theme.brightBackground}),(function(e){return e.theme.headerFontColour})),L=function(){return r.a.createElement(G,null,r.a.createElement(K,null,r.a.createElement("img",{src:z.a,alt:"printed otter in sea"}),r.a.createElement("h2",null,"The new way to Happiness? "),r.a.createElement("h3",null,"Be more... ",r.a.createElement("span",null,"Otter")),r.a.createElement("p",null,"Be the first to know when we launch")),r.a.createElement(V,null))};function Q(){var e=Object(c.a)(["\n  color: ",";\n  display: flex;\n  justify-content: center;\n  height: 100px;\n  background: darkslategrey;\n  div {\n    text-align: center;\n  }\n"]);return Q=function(){return e},e}var U=s.c.footer(Q(),(function(e){return e.theme.footerFontColour})),Y=function(){return r.a.createElement(U,{className:"sticky-footer"},r.a.createElement("div",null,r.a.createElement("h4",null,"Made with Heart"),r.a.createElement("p",null,"Copyright 2020 Otter.co")))};function Z(){var e=Object(c.a)(["\n    margin: auto 15%;\n  "]);return Z=function(){return e},e}function ee(){var e=Object(c.a)(["\n  height: calc(100vh);\n\n  ",";\n"]);return ee=function(){return e},e}var ne=s.c.div(ee(),h.large(Z())),te=function(){return r.a.createElement(s.a,{theme:m},r.a.createElement(ne,null,r.a.createElement(g,null),r.a.createElement(L,null),r.a.createElement(Y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,n,t){e.exports=t.p+"static/media/happy_otter_transparent.e225856b.png"}},[[32,1,2]]]);
//# sourceMappingURL=main.ba864cbb.chunk.js.map