"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[724],{4724:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(9434),a=t(7689),i=t(1260),o=t(9869),u=t(1413),l=t(8685),s=t(158),c={email:"",password:""},d={email:{type:"email",name:"email",required:!0,label:"Email",placeholder:"email"},password:{type:"password",name:"password",required:!0,label:"Password",placeholder:"password"}},h=t(2329),f=t(184),m=function(e){var n=e.onSubmit,t=(0,s.Z)({initialState:c,onSubmit:n}),r=t.state,a=t.handleChange,i=t.handleSubmit,o=r.email,m=r.password;return(0,f.jsxs)("form",{onSubmit:i,children:[(0,f.jsx)(l.Z,(0,u.Z)({value:o,handleChange:a},d.email)),(0,f.jsx)(l.Z,(0,u.Z)({value:m,handleChange:a},d.password)),(0,f.jsx)(h.Z,{type:"submit",children:"Login"})]})},p=function(){var e=(0,r.v9)(o.y),n=(0,r.I0)();return e?(0,f.jsx)(a.Fg,{to:"/contacts"}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{children:"Login page"}),(0,f.jsx)(m,{onSubmit:function(e){n((0,i.x)(e))}})]})}},2329:function(e,n,t){var r=t(184);n.Z=function(e){var n=e.type,t=void 0===n?"button":n,a=e.children;return(0,r.jsx)("button",{type:t,children:a})}},8685:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(1413);function a(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=t(2791),o=t(184),u=["label","handleChange"],l=function(e){var n=e.label,t=e.handleChange,l=a(e,u),s=(0,i.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+((n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_")}),"")}()}),[]);return(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:s,children:n}),(0,o.jsx)("input",(0,r.Z)({id:s,onChange:t},l))]})}},158:function(e,n,t){var r=t(4942),a=t(1413),i=t(9439),o=t(2791);n.Z=function(e){var n=e.initialState,t=e.onSubmit,u=(0,o.useState)((0,a.Z)({},n)),l=(0,i.Z)(u,2),s=l[0],c=l[1];return{state:s,setState:c,handleChange:function(e){var n=e.target,t=n.name,i=n.value;c((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},t,i))}))},handleSubmit:function(e){e.preventDefault(),t((0,a.Z)({},s)),c((0,a.Z)({},n))}}}}}]);
//# sourceMappingURL=724.06ebd623.chunk.js.map