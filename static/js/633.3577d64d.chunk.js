"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[633],{633:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r=t(413),a=t(685),i=t(825),u={name:{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,label:"name",placeholder:"name"},number:{type:"tel",name:"number",pattern:"+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,label:"number",placeholder:"number"}},c={name:"",number:""},o=t(158),s=t(329),l=function(n){var e=n.onSubmit,t=(0,o.Z)({initialState:c,onSubmit:e}),l=t.state,d=t.handleChange,m=t.handleSubmit,f=l.name,h=l.number;return(0,s.jsxs)("form",{onSubmit:m,children:[(0,s.jsx)(a.Z,(0,r.Z)({value:f,handleChange:d},u.name)),(0,s.jsx)(a.Z,(0,r.Z)({value:h,handleChange:d},u.number)),(0,s.jsx)(i.Z,{type:"submit",children:"Add contact"})]})},d="Filter_filterLabel__+pnW-",m="Filter_filterInput__1Cysk",f=t(434),h=function(n){return n.filter},b=t(518),p=function(){var n=(0,f.I0)(),e=(0,f.v9)(h);return(0,s.jsx)("div",{className:d,children:(0,s.jsxs)("label",{children:["Find contact by name",(0,s.jsx)("input",{className:m,type:"text",value:e,onChange:function(e){var t=e.target,r=(0,b.T)(t.value);n(r)}})]})})},v={},x=t(0),j=function(n){var e=n.id,t=n.name,r=n.number,a=(0,f.I0)();return(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{children:[t,": ",r]}),(0,s.jsx)(i.Z,{onClick:function(){return function(n){var e=(0,x.GK)(n);a(e)}(e)},children:"Delete contact"})]})},g=function(n){var e=n.contacts.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,s.jsx)("li",{className:v.contactListItem,children:(0,s.jsx)(j,{id:e,name:t,number:r})},e)}));return(0,s.jsx)("ul",{className:v.contactList,children:e})},y=t(791),Z=function(n){return n.contacts.items},C=function(n){if(!n.filter)return n.contacts.items;var e=n.filter.toLowerCase();return n.contacts.items.filter((function(n){return n.name.toLowerCase().includes(e)}))},S=function(n){return n.contacts.isLoading},_=function(n){return n.contacts.error},k="ContactsPage_container__BnqXB",w=function(){var n=(0,f.I0)(),e=(0,f.v9)(S),t=(0,f.v9)(_),r=(0,f.v9)(Z),a=(0,f.v9)(C);(0,y.useEffect)((function(){n((0,x.yF)())}),[n]);return(0,s.jsxs)("div",{className:k,children:[(0,s.jsx)(l,{onSubmit:function(e){var t=e.name,a=e.number;if(!function(n){if(r.find((function(e){return e.name===n})))return alert("".concat(n," is already in contact list")),!0}(t)){var i=(0,x.uK)({name:t,number:a});n(i)}}}),(0,s.jsx)(p,{}),e&&!t&&(0,s.jsx)("b",{children:"Request in progress..."}),a.length>0&&(0,s.jsx)(g,{contacts:a}),a.length<=0&&(0,s.jsx)("p",{children:"sorry... something bad happens"})]})}},825:function(n,e,t){var r=t(329);e.Z=function(n){var e=n.type,t=void 0===e?"button":e,a=n.onClick,i=n.children;return(0,r.jsx)("button",{onClick:a,type:t,children:i})}},685:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(413);function a(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var i=t(791),u=t(329),c=["label","handleChange"],o=function(n){var e=n.label,t=n.handleChange,o=a(n,c),s=(0,i.useMemo)((function(){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_")}),"")}()}),[]);return(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{htmlFor:s,children:e}),(0,u.jsx)("input",(0,r.Z)({id:s,onChange:t},o))]})}},158:function(n,e,t){var r=t(942),a=t(413),i=t(439),u=t(791);e.Z=function(n){var e=n.initialState,t=n.onSubmit,c=(0,u.useState)((0,a.Z)({},e)),o=(0,i.Z)(c,2),s=o[0],l=o[1];return{state:s,setState:l,handleChange:function(n){var e=n.target,t=e.name,i=e.value;l((function(n){return(0,a.Z)((0,a.Z)({},n),{},(0,r.Z)({},t,i))}))},handleSubmit:function(n){n.preventDefault(),t((0,a.Z)({},s)),l((0,a.Z)({},e))}}}}}]);
//# sourceMappingURL=633.3577d64d.chunk.js.map