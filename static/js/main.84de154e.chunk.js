(this["webpackJsonpreact-chat"]=this["webpackJsonpreact-chat"]||[]).push([[0],{116:function(e,t,n){},117:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),i=n(52),l=n.n(i),o=(n(61),n(7)),r=(n(62),n(55)),j=n(53),u=n.n(j)()("https://46.0.110.125:8090",{transports:["WebSocket","io","polling","flashsocket"],verify:!1}),d=(n(92),n(54)),b=n.n(d),h=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)([]),l=Object(o.a)(i,2),j=l[0],d=l[1];Object(a.useEffect)((function(){u.once("allData",(function(e){d(e),console.log(e)})),u.on("data_chat_back_one",(function(e){d((function(t){return[].concat(Object(r.a)(t),[e])}))}))}),[]);var h=function(){if(n){var e=Date.now();u.emit("msg_from_front",{name:f,message:n,date:e}),s("")}},f=localStorage.getItem("name");return Object(c.jsxs)("div",{className:"Chat",children:[Object(c.jsx)(b.a,{debug:!1,className:"chatWindow",children:j.map((function(e,t){var n=e.name,a=e.message,s=e.date,i=new Date(s),l=i.getMinutes()>=10?String(i.getHours())+":"+String(i.getMinutes()):String(i.getHours())+":0"+String(i.getMinutes());return Object(c.jsxs)("div",{className:n===f?"chatItem myMsg":"chatItem",children:[Object(c.jsxs)("div",{className:"dateName",children:[Object(c.jsx)("span",{children:n===f?"\u0412\u044b":n}),Object(c.jsx)("p",{children:l})]}),Object(c.jsx)("p",{children:a})]},t)}))}),Object(c.jsxs)("div",{className:"msgBar",children:[Object(c.jsx)("input",{className:"msgInput",placeholder:"\u0412\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 ...",value:n,onChange:function(e){s(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&h()}}),Object(c.jsxs)("svg",{className:"msgButton",width:"61",height:"61",viewBox:"0 0 61 61",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:h,children:[Object(c.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M30.9236 60.1274C47.4922 60.1274 60.9236 46.696 60.9236 30.1274C60.9236 13.5589 47.4922 0.127441 30.9236 0.127441C14.3551 0.127441 0.923645 13.5589 0.923645 30.1274C0.923645 46.696 14.3551 60.1274 30.9236 60.1274Z",fill:"#DBE6FA"}),Object(c.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M38.9236 22.1274L27.9236 33.1274L38.9236 22.1274Z",fill:"black","fill-opacity":"0.01"}),Object(c.jsx)("path",{d:"M38.9236 22.1274L27.9236 33.1274",stroke:"#343C4B"}),Object(c.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M38.9236 22.1274L31.9236 41.1274L27.9236 33.1274L19.9236 29.1274L38.9236 22.1274Z",fill:"black","fill-opacity":"0.01"}),Object(c.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M38.9236 22.1274L31.9236 41.1274L27.9236 33.1274L19.9236 29.1274L38.9236 22.1274Z",stroke:"#343C4B","stroke-linecap":"square"})]})]})]})},f=(n(116),function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),s=n[0],i=n[1];return Object(c.jsxs)("div",{className:"LoginBar",children:[Object(c.jsx)("h1",{children:"Friends Chat"}),Object(c.jsxs)("div",{className:"loginGroup",children:[Object(c.jsx)("input",{placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",onChange:function(e){i(e.target.value)},value:s}),Object(c.jsx)("button",{onClick:function(){console.log(s),s?(localStorage.setItem("name",s),u.emit("new_user_connected",s),e.hasUser(!0)):alert("\u0412\u044b \u043d\u0435 \u0432\u0432\u0435\u043b\u0438 \u0438\u043c\u044f.")},children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}),g=(n(117),function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){u.on("online_users",(function(e){s(e),console.log(e)}))}),[]),Object(c.jsxs)("div",{className:"Users",children:[Object(c.jsx)("h1",{children:"Friends Chat"}),Object(c.jsx)("div",{className:"userList",children:n.map((function(e,t){return Object(c.jsx)("div",{className:"userItem",children:e.name},t)}))})]})});var m=function(){Object(a.useEffect)((function(){localStorage.getItem("name")&&u.emit("new_user_connected",localStorage.getItem("name"))}),[]);var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=(t[0],t[1]);return Object(c.jsx)("div",{className:"App",children:localStorage.getItem("name")?Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)(g,{}),Object(c.jsx)(h,{})]}):Object(c.jsx)(f,{hasUser:n})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,120)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};l.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),O()},61:function(e,t,n){},62:function(e,t,n){},92:function(e,t,n){}},[[119,1,2]]]);
//# sourceMappingURL=main.84de154e.chunk.js.map