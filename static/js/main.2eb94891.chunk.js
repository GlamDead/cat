(this.webpackJsonpcat=this.webpackJsonpcat||[]).push([[0],{200:function(n,e,t){n.exports=t(445)},445:function(n,e,t){"use strict";t.r(e);var r=t(8),a=(t(201),t(147),t(249),t(2)),i=t.n(a),c=t(194),o=t.n(c),u=t(5);function l(){var n=Object(r.a)(["\n  max-width: 1200px;\n  display: block;\n  width: 100%;\n"]);return l=function(){return n},n}function f(){var n=Object(r.a)(['\n  background-repeat: repeat;\n  content: "";\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: -1;\n  background: url("','/img/background-texture.png");\n']);return f=function(){return n},n}function b(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  position: relative;\n"]);return b=function(){return n},n}function d(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return d=function(){return n},n}var p=u.c.div(d()),s=u.c.div(b()),v=u.c.div(f(),"/cat"),g=u.c.div(l()),m=function(n){var e=n.children;return i.a.createElement(p,null,i.a.createElement(s,null,i.a.createElement(v,null),i.a.createElement(g,null,e)))},x=t(125),h=t(61),j=t(198),O=t(123),E=t.n(O);E.a.initializeApp({apiKey:"AIzaSyDVB6FMDQjqYCI1o5_pCOiBqh9XkvF8OCI",authDomain:"funbox-test-b0399.firebaseapp.com",databaseURL:"https://funbox-test-b0399.firebaseio.com",projectId:"funbox-test-b0399",storageBucket:"funbox-test-b0399.appspot.com",messagingSenderId:"215536702188",appId:"1:215536702188:web:77304959ed603b85fc4bc9"});var y=E.a.firestore(),k=function(){var n=Object(a.useState)([]),e=Object(h.a)(n,2),t=e[0],r=e[1],i=Object(j.a)(y.collection("cards").orderBy("id")),c=Object(h.a)(i,3),o=c[0],u=c[1],l=c[2];return Object(a.useEffect)((function(){u||l||!o||r(o),l&&console.error(l)}),[o,u,l]),{cards:t,setCards:r,loading:u}};function w(){var n=Object(r.a)(["\n  animation: "," 3s infinite;\n  width: 50px;\n  height: 50px;\n  border: 6px solid #e5e5e5;\n  border-top-color: #51d;\n  border-radius: 50%;\n"]);return w=function(){return n},n}function S(){var n=Object(r.a)(["\n from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);return S=function(){return n},n}var z=Object(u.d)(S()),H=u.c.div(w(),z),B=function(n,e){return e[n%100>4&&n%100<20?2:[2,0,1,1,1,2][n%10<5?n%10:5]]},M=["\u043f\u043e\u0440\u0446\u0438\u044f","\u043f\u043e\u0440\u0446\u0438\u0438","\u043f\u043e\u0440\u0446\u0438\u0439"],C=["\u043c\u044b\u0448\u044c","\u043c\u044b\u0448\u0438","\u043c\u044b\u0448\u0435\u0439"];function T(){var n=Object(r.a)(["\n      opacity: 0.5;\n    "]);return T=function(){return n},n}function I(){var n=Object(r.a)(["\n      font-weight: ",";\n    "]);return I=function(){return n},n}function A(){var n=Object(r.a)(["\n      margin-bottom: ",";\n    "]);return A=function(){return n},n}function D(){var n=Object(r.a)(["\n  color: ",";\n  font-size: ",';\n  font-family: "Trebuchet MS", sans-serif;\n  line-height: ',";\n  ","\n  ","\n  ","\n"]);return D=function(){return n},n}var W=u.c.p(D(),(function(n){return n.color}),(function(n){return n.fontSize}),(function(n){return n.lineHeight}),(function(n){return n.marginBottom&&Object(u.b)(A(),n.marginBottom)}),(function(n){return n.fontWeight&&Object(u.b)(I(),n.fontWeight)}),(function(n){return n.hasTransparancy&&Object(u.b)(T())}));function q(){var n=Object(r.a)(["\n  font-weight: 700;\n"]);return q=function(){return n},n}function F(){var n=Object(r.a)(["\n  width: 100%;\n"]);return F=function(){return n},n}var J=u.c.div(F()),L=u.c.span(q()),K=function(n){var e=n.brand,t=n.tagline,r=n.taste,c=n.countPortions,o=n.countMouse,u=n.additionally,l=n.availability,f=n.hover,b=Object(a.useMemo)((function(){return B(c,M)}),[c]),d=Object(a.useMemo)((function(){return B(o,C)}),[o]);return i.a.createElement(J,null,i.a.createElement(W,{color:l?f?"#e62e7a":"#666666":"#b3b3b3",fontSize:"16px",lineHeight:"19px",marginBottom:"5px",hasTransparancy:!l},f?"\u041a\u043e\u0442\u044d \u043d\u0435 \u043e\u0434\u043e\u0431\u0440\u044f\u0435\u0442?":t),i.a.createElement(W,{color:l?"#000000":"#b3b3b3",fontSize:"48px",lineHeight:"56px",fontWeight:"700",hasTransparancy:!l},e),i.a.createElement(W,{color:l?"#000000":"#b3b3b3",fontSize:"24px",lineHeight:"26px",fontWeight:"700",marginBottom:"15px",hasTransparancy:!l},r),i.a.createElement(W,{color:l?"#666666":"#b3b3b3",fontSize:"14px",lineHeight:"16px",hasTransparancy:!l},i.a.createElement(L,null,c)," ",b,i.a.createElement("br",null),o>1&&i.a.createElement(L,null,o)," ",d," \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",i.a.createElement("br",null),u&&u))};function P(){var n=Object(r.a)(["\n      background-color: #b3b3b3;\n    "]);return P=function(){return n},n}function Q(){var n=Object(r.a)(["\n  width: 80px;\n  height: 80px;\n  background-color: ",";\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  ","\n"]);return Q=function(){return n},n}var R=u.c.div(Q(),(function(n){return n.active?"#d91667":"#1698d9"}),(function(n){return!n.availability&&Object(u.b)(P())})),U=function(n){var e=n.availability,t=n.weight,r=n.active;return i.a.createElement(R,{availability:e,active:r,weight:""},i.a.createElement(W,{color:"#ffffff",fontSize:"42px",lineHeight:"38px"},t),i.a.createElement(W,{color:"#ffffff",fontSize:"21px",lineHeight:"22px"},"\u043a\u0433"))};function V(){var n=Object(r.a)(['\n      background: linear-gradient(\n          135deg,\n          transparent 29px,\n          rgba(255, 255, 255, 0.5) 0\n        ),\n        url("','/img/cat.png") bottom left no-repeat,\n        linear-gradient(135deg, transparent 29px, #f2f2f2 0);\n    ']);return V=function(){return n},n}function X(){var n=Object(r.a)(['\n  width: 312px;\n  height: 472px;\n  border-radius: 10px;\n  background: url("','/img/cat.png") bottom left no-repeat,\n    linear-gradient(135deg, transparent 29px, #f2f2f2 0);\n  padding: 17px 12px 12px 47px;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: flex-end;\n  ',"\n"]);return X=function(){return n},n}function Y(){var n=Object(r.a)(["\n      &:hover {\n        background: linear-gradient(135deg, transparent 31px, #e52e7a 0);\n        "," {\n          background-color: #e52e7a;\n        }\n      }\n    "]);return Y=function(){return n},n}function _(){var n=Object(r.a)(["\n      &:hover {\n        background: linear-gradient(135deg, transparent 31px, #2ea8e6 0);\n      }\n    "]);return _=function(){return n},n}function G(){var n=Object(r.a)(["\n      background: linear-gradient(135deg, transparent 31px, #b3b3b3 0);\n      cursor: default;\n    "]);return G=function(){return n},n}function N(){var n=Object(r.a)(["\n  width: 320px;\n  height: 480px;\n  border-radius: 10px;\n  background: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  ","\n  ","\n  ","\n"]);return N=function(){return n},n}var Z=u.c.div(N(),(function(n){return n.active?"linear-gradient(135deg, transparent 31px, #d91667 0)":"linear-gradient(135deg, transparent 31px, #1698d9 0)"}),(function(n){return!n.availability&&Object(u.b)(G())}),(function(n){return!n.active&&n.availability&&Object(u.b)(_())}),(function(n){return n.hover&&n.active&&Object(u.b)(Y(),R)})),$=u.c.div(X(),"/cat",(function(n){return!n.availability&&Object(u.b)(V(),"/cat")})),nn=function(n){var e=n.card,t=n.setActive,r=e.availability,c=e.active,o=Object(a.useState)(!1),u=Object(h.a)(o,2),l=u[0],f=u[1],b=Object(a.useState)(!1),d=Object(h.a)(b,2),p=d[0],s=d[1];return Object(a.useEffect)((function(){e.active||(f(!1),s(!1))}),[e]),i.a.createElement(Z,{availability:r,active:c,onClick:function(){return r&&t(e.id)},onMouseLeave:function(){c&&s(!0),l&&f(!1)},onMouseEnter:function(){c&&p&&f(!0)},hover:l},i.a.createElement($,{availability:r},i.a.createElement(K,Object.assign({},e,{hover:l})),i.a.createElement(U,e)))};function en(){var n=Object(r.a)(["\n  color: #1698d9;\n  font-weight: 700;\n  border-bottom: 1px dashed #1698d9;\n  text-decoration: none;\n"]);return en=function(){return n},n}function tn(){var n=Object(r.a)(["\n  margin-top: 14px;\n"]);return tn=function(){return n},n}var rn=u.c.div(tn()),an=u.c.a(en()),cn=function(n){var e=n.card,t=n.setActive,r=e.active,a=e.availability,c=e.taste,o=e.description,u=e.id;return i.a.createElement(rn,null,!a&&i.a.createElement(W,{color:"#ffff66",fontSize:"13px",lineHeight:"15px"},"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, ",c," \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f."),r&&i.a.createElement(W,{color:"#ffffff",fontSize:"13px",lineHeight:"15px"},o),!r&&a&&i.a.createElement(W,{color:"#ffffff",fontSize:"13px",lineHeight:"15px"},"\u0427\u0435\u0433\u043e \u0441\u0438\u0434\u0438\u0448\u044c? \u041f\u043e\u0440\u0430\u0434\u0443\u0439 \u043a\u043e\u0442\u044d,"," ",i.a.createElement(an,{href:"#",onClick:function(n){n.preventDefault(),t(u)}},"\u043a\u0443\u043f\u0438")))};function on(){var n=Object(r.a)(["\n      &:hover {\n        "," {\n          background: linear-gradient(135deg, transparent 31px, #2ea8e6 0);\n        }\n        "," {\n          color: #22a7e9;\n          border-bottom: 1px dashed #2ea8e6;\n        }\n        "," {\n          background-color: #2ea8e6;\n        }\n      }\n    "]);return on=function(){return n},n}function un(){var n=Object(r.a)(["\n  margin: 26px 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  ","\n"]);return un=function(){return n},n}var ln=u.c.article(un(),(function(n){return!n.active&&n.availability&&Object(u.b)(on(),Z,an,R)})),fn=i.a.memo((function(n){var e=n.card,t=e.active,r=e.availability;return i.a.createElement(ln,{active:t,availability:r},i.a.createElement(nn,n),i.a.createElement(cn,n))}));function bn(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  min-height: 561px;\n"]);return bn=function(){return n},n}function dn(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return dn=function(){return n},n}var pn=u.c.div(dn()),sn=u.c.div(bn()),vn=function(){var n=k(),e=n.cards,t=n.setCards,r=n.loading,a=function(n){t(e.map((function(e){return e.id===n?Object(x.a)(Object(x.a)({},e),{},{active:!e.active}):e})))};return i.a.createElement(pn,null,i.a.createElement(sn,null,r&&i.a.createElement(H,null),e&&e.map((function(n,e){return i.a.createElement(fn,{key:e,card:n,setActive:a})}))))};function gn(){var n=Object(r.a)(["\n  text-align: center;\n  color: #fff;\n  font-size: 36px;\n  text-shadow: 0px 1px 1px #000000;\n  line-height: 42px;\n  font-family: Exo2, sans-serif;\n  font-weight: 100;\n  margin-top: 50px;\n"]);return gn=function(){return n},n}var mn=u.c.h1(gn()),xn=function(n){var e=n.title;return i.a.createElement(mn,null,e)},hn=function(){return i.a.createElement(m,null,i.a.createElement(xn,{title:"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u043e\u043a\u043e\u0440\u043c\u0438\u043b \u043a\u043e\u0442\u0430?"}),i.a.createElement(vn,null))},jn=t(199);function On(){var n=Object(r.a)(["\n  ",'\n\n  @font-face {\n    font-family: Exo2;\n    font-style: normal;\n    font-weight: 100;\n    src: url("','/fonts/Exo2.0-Thin.otf") format("otf");\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n']);return On=function(){return n},n}var En=Object(u.a)(On(),jn.a,"/cat");o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(En,null),i.a.createElement(hn,null)),document.querySelector("#root"))}},[[200,1,2]]]);
//# sourceMappingURL=main.2eb94891.chunk.js.map