(this["webpackJsonphooks-app"]=this["webpackJsonphooks-app"]||[]).push([[0],{16:function(e,t,n){},25:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(18),s=n.n(r),o=n(11),i=(n(25),n(3)),l=n(2),j=n(0),m=a.a.memo((function(e){var t=e.numero,n=e.incrementar;return console.log("  Me volv\xed a generar :(  "),Object(j.jsx)("button",{className:"btn btn-primary mb-2",onClick:function(){return n(t)},children:t})})),u=function(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useCallback)((function(e){a((function(t){return t+e}))}),[a]);return Object(j.jsxs)("div",{className:"animate__animated animate__backInDown",children:[Object(j.jsx)("h1",{children:"Padre"}),Object(j.jsxs)("p",{children:[" Total: ",n," "]}),Object(j.jsx)("hr",{}),[2,4,6,8,10].map((function(e){return Object(j.jsx)(m,{numero:e,incrementar:r},e)}))]})},b=a.a.memo((function(e){var t=e.increment;return console.log("Me estrese y me volv\xed a generar"),Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){t(5)},children:"Increment"})})),d=function(){var e=Object(c.useState)(10),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useCallback)((function(e){a((function(t){return t+e}))}),[a]);return Object(j.jsxs)("div",{className:"animate__animated animate__backInDown",children:[Object(j.jsx)("h1",{children:"useCallback Hook"}),Object(j.jsxs)("h3",{children:[" Counter: ",n," "]}),Object(j.jsx)("hr",{}),Object(j.jsx)(b,{increment:r})]})},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=Object(c.useState)(e),n=Object(l.a)(t,2),a=n[0],r=n[1],s=function(){return r(a+1)},o=function(){return r(a-1)},i=function(){return e!==a&&r(e)};return{state:a,increment:s,decrement:o,reset:i}},h=function(){var e=O(5e3),t=e.state,n=e.increment,a=Object(c.useState)(!0),r=Object(l.a)(a,2),s=r[0],o=r[1],i=Object(c.useMemo)((function(){return function(e){for(var t=0;t<e;t++)console.log("Let\xb4s Go...");return"".concat(e," iteraciones realizadas.")}(t)}),[t]);return Object(j.jsxs)("div",{className:"animate__animated animate__backInDown",children:[Object(j.jsx)("h1",{children:"Memo Hook"}),Object(j.jsxs)("h3",{children:["Counter: ",Object(j.jsx)("small",{children:t})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("p",{children:[" ",i," "]}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:n,children:"+ 1"}),Object(j.jsxs)("button",{className:"btn btn-primary mt-2",onClick:function(){o(!s)},children:["Show/Hide ",JSON.stringify(s)]})]})},x=Object(c.memo)((function(e){var t=e.value;return console.log("Me renderice de nuevo, me va dar ansiedad!!"),Object(j.jsx)("small",{children:t})})),f=function(){var e=O(10),t=e.state,n=e.increment,a=Object(c.useState)(!0),r=Object(l.a)(a,2),s=r[0],o=r[1];return Object(j.jsxs)("div",{className:"animate__animated animate__backInDown",children:[Object(j.jsxs)("h1",{children:["Counter: ",Object(j.jsx)(x,{value:t})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:n,children:"+ 1"}),Object(j.jsxs)("button",{className:"btn btn-primary mt-2",onClick:function(){o(!s)},children:["Show/Hide ",JSON.stringify(s)]})]})},p=function(e){var t=Object(c.useRef)(!0),n=Object(c.useState)({data:null,loading:!0,error:null}),a=Object(l.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){return function(){t.current=!1}}),[]),Object(c.useEffect)((function(){s({data:null,loading:!0,error:null}),fetch(e).then((function(e){return e.json()})).then((function(e){setTimeout((function(){t.current&&s({data:e,loading:!1,error:null})}),4e3)}))}),[e]),r},v=function(){var e=O(1),t=e.state,n=e.increment,a=e.decrement,r=p("https://www.breakingbadapi.com/api/characters/".concat(t)).data,s=(!!r&&r[0]).img,o=Object(c.useRef)(),i=Object(c.useState)({}),m=Object(l.a)(i,2),u=m[0],b=m[1];return Object(c.useLayoutEffect)((function(){b(o.current.getBoundingClientRect())}),[s]),Object(j.jsxs)("div",{className:"animate__animated animate__backInDown",children:[Object(j.jsx)("h1",{style:{display:"flex",justifyContent:"center"},children:" Layout Effect "}),Object(j.jsxs)("div",{className:"card",style:{width:"100%"},children:[Object(j.jsx)("img",{src:s,className:"card-img-top",alt:"...",ref:o}),Object(j.jsx)("code",{children:Object(j.jsx)("pre",{children:JSON.stringify(u,null,3)})}),Object(j.jsxs)("div",{className:"stats ",children:[t>1&&Object(j.jsx)("button",{className:"btn btn-primary m-2",onClick:a,children:"Prev"}),Object(j.jsx)("button",{className:"btn btn-primary m-2",onClick:n,children:"Next"})]})]})]})},N=function(){var e=Object(c.useRef)();return Object(j.jsxs)("div",{className:"animate__animated animate__backInDown",children:[Object(j.jsx)("h1",{children:"Focus Screen"}),Object(j.jsx)("hr",{}),Object(j.jsx)("input",{ref:e,className:"form-control",placeholder:"Your name"}),Object(j.jsx)("button",{className:"btn btn-outline-primary mt-2",onClick:function(){e.current.select()},children:"Focus"})]})},k=function(){var e=O(1),t=e.state,n=e.increment,c=e.decrement,a=p("https://www.breakingbadapi.com/api/characters/".concat(t)),r=a.loading,s=a.data,o=!!s&&s[0],i=o.name,l=o.occupation,m=o.img,u=o.status,b=o.nickname;return Object(j.jsxs)("div",{className:"animate__animated animate__backInDown",children:[Object(j.jsx)("h1",{children:"Breaking Bad API"}),Object(j.jsxs)("div",{className:"card",style:{width:"100%"},children:[r?Object(j.jsx)("div",{className:"alert alert-info text-center",children:"Loading..."}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("img",{src:m,className:"card-img-top",alt:"..."}),Object(j.jsxs)("div",{className:"card-body",style:{color:"#000"},children:[Object(j.jsx)("div",{className:"card-title",children:Object(j.jsx)("h4",{children:i})}),Object(j.jsx)("p",{className:"card-text",children:"Nickname: ".concat(b)}),Object(j.jsxs)("p",{className:"card-text",children:["Status: ",Object(j.jsx)("span",{className:"badge rounded-pill bg-".concat("Alive"===u?"primary":"danger"),children:u})]})]}),Object(j.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(j.jsx)("li",{className:"list-group-item",children:"Occupation"}),l.map((function(e,t){return Object(j.jsx)("li",{className:"list-group-item",children:e},"item-"+t)}))]})]}),Object(j.jsxs)("div",{className:"stats",children:[t>1&&Object(j.jsx)("button",{className:"btn btn-primary",onClick:c,children:"Prev"}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:n,children:"Next"})]})]})]})},g=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)("div",{className:"animate__animated animate__backInDown",children:[Object(j.jsx)("h1",{children:"Ref Example"}),Object(j.jsx)("hr",{}),n&&Object(j.jsx)(k,{}),Object(j.jsx)("button",{className:"btn btn-primary mt-2",onClick:function(){a(!n)},children:"Show/Hide"})]})},_=(n(16),n(10)),y=n(8),C=function(){var e=Object(c.useState)({x:0,y:0}),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=function(e){var t={x:e.x,y:e.y};a(t)};return window.addEventListener("mousemove",e),function(){window.removeEventListener("mousemove",e)}}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Eres genial!"}),Object(j.jsx)("p",{children:Object(j.jsx)("code",{children:JSON.stringify(n)})})]})},w=[{to:"/father",text:"Father",component:u},{to:"/callback-hook",text:"Callback Hook",component:d},{to:"/memo-hook",text:"Memo Hook",component:h},{to:"/memorize",text:"Memorize",component:f},{to:"/layout",text:"Layout",component:v},{to:"/focus-screen",text:"Focus Screen",component:N},{to:"/ref-example",text:"Ref Example",component:g},{to:"/form-with-custom-hook",text:"Form With Custom Hook",component:function(){var e=function(e){var t=Object(c.useState)(e),n=Object(l.a)(t,2),a=n[0],r=n[1];return[a,function(e){var t=e.target;r(Object(y.a)(Object(y.a)({},a),{},Object(_.a)({},t.name,t.value)))}]}({name:"",email:"",password:""}),t=Object(l.a)(e,2),n=t[0],a=t[1],r=n.name,s=n.email,o=n.password;Object(c.useEffect)((function(){console.log("email change")}),[s]);return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(n)},className:"animate__animated animate__backInDown",children:[Object(j.jsx)("h1",{children:"Form with custom hook "}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"text",name:"name",className:"form-control",placeholder:"Your name",autoComplete:"off",value:r,onChange:a})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"email",name:"email",className:"form-control",placeholder:"example@example.com",autoComplete:"off",value:s,onChange:a})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"password",name:"password",className:"form-control",placeholder:"Password",autoComplete:"off",value:o,onChange:a})}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Guardar"})]})}},{to:"/multiple-custom-hooks",text:"Multiple Custom Hooks",component:k},{to:"/counter-app",text:"Counter App",component:function(){var e=Object(c.useState)({counter1:10,counter2:20,counter3:30}),t=Object(l.a)(e,2),n=t[0],a=t[1],r=n.counter1,s=n.counter2;return Object(j.jsxs)("div",{className:"animate__animated animate__backInDown",children:[Object(j.jsxs)("h1",{children:["Counter1: ",r]}),Object(j.jsxs)("h1",{children:["Counter2: ",s]}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{className:"stats",children:Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){a((function(e){return Object(y.a)(Object(y.a)({},e),{},{counter1:r+1})}))},children:"+ 1"})}),Object(j.jsx)("code",{children:JSON.stringify(n)})]})}},{to:"/counter-with-custom-hook",text:"Counter With Custom Hook",component:function(){var e=O(100),t=e.state,n=e.increment,c=e.decrement,a=e.reset;return Object(j.jsxs)("div",{className:"animate__animated animate__backInDown",children:[Object(j.jsx)("h1",{children:"Counter with custom hook"}),Object(j.jsxs)("h1",{children:["Counter ",t]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"stats",children:[Object(j.jsx)("button",{className:"btn btn-primary",onClick:n,children:"+ 1"}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:a,children:"Reset"}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:c,children:"- 1"})]})]})}},{to:"/simple-form",text:"Simple Form",component:function(){var e=Object(c.useState)({name:"",email:""}),t=Object(l.a)(e,2),n=t[0],a=t[1],r=n.name,s=n.email,o=function(e){var t=e.target;a(Object(y.a)(Object(y.a)({},n),{},Object(_.a)({},t.name,t.value)))};return Object(c.useEffect)((function(){}),[]),Object(c.useEffect)((function(){}),[n]),Object(c.useEffect)((function(){}),[r]),Object(c.useEffect)((function(){}),[s]),Object(j.jsxs)("div",{className:"animate__animated animate__backInDown",children:[Object(j.jsx)("h1",{children:"Effects Hook"}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"text",name:"name",className:"form-control",placeholder:"Your name",autoComplete:"off",value:r,onChange:o})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"email",name:"email",className:"form-control",placeholder:"example@example.com",autoComplete:"off",value:s,onChange:o})}),"Diana"===r&&Object(j.jsx)(C,{})]})}}],S=function(){return Object(j.jsx)("header",{children:w.map((function(e,t){return Object(j.jsx)(o.b,{to:e.to,className:"btn btn-outline-primary mb-2",children:e.text},"link-".concat(t))}))})},E=function(){return Object(j.jsxs)("div",{className:"container-div",children:[Object(j.jsx)(S,{}),Object(j.jsx)("main",{children:Object(j.jsx)(i.c,{children:w.map((function(e,t){return Object(j.jsx)(i.a,{exact:!0,path:e.to,component:e.component},"route-".concat(t))}))})})]})};s.a.render(Object(j.jsx)(o.a,{children:Object(j.jsx)(E,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.f09d5249.chunk.js.map