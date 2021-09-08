(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(4),r=c.n(s),l=(c(9),c(2));c(10);function o(e){var t=e.genre,c=e.platform;return fetch("http://localhost:8080/games/select_top_by_playtime?genre=".concat(t,"&&platform=").concat(c)).then((function(e){return e.json()}))}function i(e){var t=e.genre,c=e.platform;return fetch("http://localhost:8080/games/select_top_by_player?genre=".concat(t,"&&platform=").concat(c)).then((function(e){return e.json()}))}var j=c(0);var b=function(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(l.a)(s,2),b=r[0],u=r[1],m=Object(a.useState)(""),d=Object(l.a)(m,2),p=d[0],h=d[1],x=Object(a.useState)({}),f=Object(l.a)(x,2),O=f[0],g=f[1],y=Object(a.useState)(""),N=Object(l.a)(y,2),v=N[0],w=N[1],S=Object(a.useState)(""),_=Object(l.a)(S,2),k=_[0],C=_[1];return Object(a.useEffect)((function(){var e=!0;return o({genre:b,platform:p}).then((function(t){e&&n(t)})),function(){return e=!1}}),[]),Object(a.useEffect)((function(){var e=!0;return i({genre:b,platform:p}).then((function(t){e&&g(t)})),function(){return e=!1}}),[]),Object(j.jsxs)("div",{className:"App container",children:[Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),o({genre:b,platform:p}).then((function(e){n(e)}))},id:"search-form",children:Object(j.jsxs)("div",{className:"row mt-5",children:[Object(j.jsx)("div",{className:"col-6",children:Object(j.jsx)("p",{className:"text24 blue fowe900",children:"Top games by playtime"})}),Object(j.jsx)("div",{className:"col-2",children:Object(j.jsx)("input",{value:b,onChange:function(e){return u(e.target.value)},type:"text",placeholder:"Search by genre..",id:"genre",name:"genre",className:"my_input"})}),Object(j.jsx)("div",{className:"col-2",children:Object(j.jsx)("input",{value:p,onChange:function(e){return h(e.target.value)},id:"platform",type:"text",placeholder:"Search by platform..",name:"platform",className:"my_input"})}),Object(j.jsx)("div",{className:"col-2",children:Object(j.jsx)("button",{type:"submit",className:"btn btn_primary_blue",children:"Filter"})})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("table",{class:"table table-bordered",children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",className:"text14 black fowe700 text-uppercase",children:"Game"}),Object(j.jsx)("th",{scope:"col",className:"text14 black fowe700 text-uppercase",children:"Platforms"}),Object(j.jsx)("th",{scope:"col",className:"text14 black fowe700 text-uppercase",children:"Genre"}),Object(j.jsx)("th",{scope:"col",className:"text14 black fowe700 text-uppercase",children:"Total play time"})]}),Object(j.jsx)("tbody",{children:c&&(c.data||[]).map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"text14 black fowe700",children:e.game})," ",Object(j.jsx)("td",{className:"text12 gray fowe400",children:e.platforms.join(",")}),Object(j.jsx)("td",{className:"text12 gray fowe400",children:e.genre})," ",Object(j.jsx)("td",{className:"text12 gray fowe400",children:e.totalPlaytime})]})}))})]})}),Object(j.jsxs)("section",{children:[Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),i({genre:v,platform:k}).then((function(e){g(e)}))},id:"search-form",children:Object(j.jsxs)("div",{className:"row mt-5",children:[Object(j.jsx)("div",{className:"col-6",children:Object(j.jsx)("p",{className:"text24 blue fowe900",children:"Top games by number of players"})}),Object(j.jsx)("div",{className:"col-2",children:Object(j.jsx)("input",{value:v,onChange:function(e){return w(e.target.value)},type:"text",placeholder:"Search by genre..",id:"genre",name:"genre",className:"my_input"})}),Object(j.jsx)("div",{className:"col-2",children:Object(j.jsx)("input",{value:k,onChange:function(e){return C(e.target.value)},id:"platform",type:"text",placeholder:"Search by platform..",name:"platform",className:"my_input"})}),Object(j.jsx)("div",{className:"col-2",children:Object(j.jsx)("button",{type:"submit",className:"btn btn_primary_blue",children:"Filter"})})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("table",{class:"table table-bordered",children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",className:"text14 black fowe700 text-uppercase",children:"Game"}),Object(j.jsx)("th",{scope:"col",className:"text14 black fowe700 text-uppercase",children:"Platforms"}),Object(j.jsx)("th",{scope:"col",className:"text14 black fowe700 text-uppercase",children:"Genre"}),Object(j.jsx)("th",{scope:"col",className:"text14 black fowe700 text-uppercase",children:"Number of players"})]}),Object(j.jsx)("tbody",{children:O&&(O.data||[]).map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"text14 black fowe700",children:e.game})," ",Object(j.jsx)("td",{className:"text12 gray fowe400",children:e.platforms.join(",")}),Object(j.jsx)("td",{className:"text12 gray fowe400",children:e.genre})," ",Object(j.jsx)("td",{className:"text12 gray fowe400",children:e.totalPlayers})]})}))})]})})]})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),u()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.d592092a.chunk.js.map