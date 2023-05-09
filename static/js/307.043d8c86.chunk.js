"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[307],{307:function(e,r,i){i.r(r),i.d(r,{default:function(){return Z}});var t=i(9434),o=i(4554),a=i(9164),n=i(8724),s=i(1413),l=i(9439),u=i(2791),c=i(7318),d={email:{isEmpty:!0,isEmail:!0},password:{isEmpty:!0,minLength:8}},m={email:{type:"email",name:"email",required:!0,label:"Email",placeholder:"email"},password:{type:"password",name:"password",required:!0,label:"Password",placeholder:"password",autoComplete:"current-password"}},p=i(561),b=i(200),h=i(3329),f=function(e){var r=e.onSubmit,i=(0,c.Z)("",d.email),t=(0,c.Z)("",d.password),a=(0,u.useState)({email:"",password:""}),n=(0,l.Z)(a,2),f=n[0],Z=n[1];(0,u.useEffect)((function(){Z((function(e){return(0,s.Z)((0,s.Z)({},e),{},{email:i.value,password:t.value})}))}),[i.value,t.value]);return(0,h.jsxs)(o.Z,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"100%"}},noValidate:!0,autoComplete:"on",onSubmit:function(e){e.preventDefault(),r((0,s.Z)({},f)),Z({email:"",password:""})},children:[(0,h.jsx)(b.Z,(0,s.Z)({error:i.isDirty&&i.isEmpty||i.isDirty&&i.emailError,value:i.value,onChange:i.onChange,onBlur:i.onBlur,helperText:i.isDirty&&i.isEmpty?"Email address field shouldn't be empty":i.isDirty&&i.emailError&&"Email address should be at correct format"},m.email)),(0,h.jsx)(b.Z,(0,s.Z)({error:t.isDirty&&t.isEmpty||t.isDirty&&t.minLengthError,value:t.value,onChange:t.onChange,onBlur:t.onBlur,helperText:t.isDirty&&t.isEmpty?"Password field shouldn't be empty":t.isDirty&&t.minLengthError&&"Password should have at least 8 characters"},m.password)),(0,h.jsx)(p.Z,{disabled:!i.inputValid||!t.inputValid,type:"submit",children:"Login"})]})},Z=function(){var e=(0,t.I0)();return(0,h.jsx)(o.Z,{sx:{backgroundColor:"#edebe6"},children:(0,h.jsx)(a.Z,{sx:{backgroundColor:"#5b9fff",maxWidth:"600px",height:"100vh",paddingTop:"20px"},children:(0,h.jsx)(f,{onSubmit:function(r){e((0,n.x4)(r))}})})})}},561:function(e,r,i){var t=i(6934),o=i(6151),a=i(3329);r.Z=function(e){var r=e.type,i=void 0===r?"button":r,n=e.onClick,s=e.disabled,l=e.children,u=(0,t.ZP)(o.Z)({display:"inline-flex",marginLeft:"20px",backgroundColor:"#edb51a",color:"#000000",textTransform:"uppercase",padding:"5px 15px",border:"1px solid #000000",borderRadius:"4px",justifyContent:"center",alignItems:"center",cursor:"pointer",textDecoration:"none",transition:"background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;","&:hover":{backgroundColor:"transparent",transition:"background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;"}});return(0,a.jsx)(u,{disabled:s,onClick:n,type:i,children:l})}},7318:function(e,r,i){i.d(r,{Z:function(){return c}});var t=i(1413),o=i(9439),a=i(2791),n=i(2791),s=n.useState,l=n.useEffect,u=function(e,r){var i=s(!0),t=(0,o.Z)(i,2),a=t[0],n=t[1],u=s(!1),c=(0,o.Z)(u,2),d=c[0],m=c[1],p=s(!1),b=(0,o.Z)(p,2),h=b[0],f=b[1],Z=s(!1),x=(0,o.Z)(Z,2),w=x[0],y=x[1],g=s(!1),v=(0,o.Z)(g,2),E=v[0],k=v[1];return l((function(){for(var i in r)switch(i){case"isEmpty":n(!e);break;case"isEmail":/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,5}$/.test(e)?f(!1):f(!0);break;case"minLength":e.length<r[i]?m(!0):m(!1);break;case"isPassword":/^[a-zA-Z]\w{6,}$/.test(e)?y(!1):y(!0)}}),[e,r]),l((function(){k(!(a||d||h||w))}),[a,d,h,w,r]),{isEmpty:a,minLengthError:d,emailError:h,passwordError:w,inputValid:E}},c=function(e,r){var i=(0,a.useState)(e),n=(0,o.Z)(i,2),s=n[0],l=n[1],c=(0,a.useState)(!1),d=(0,o.Z)(c,2),m=d[0],p=d[1],b=u(s,r);return(0,t.Z)({value:s,onChange:function(e){l(e.target.value)},onBlur:function(){p(!0)},isDirty:m},b)}}}]);
//# sourceMappingURL=307.043d8c86.chunk.js.map