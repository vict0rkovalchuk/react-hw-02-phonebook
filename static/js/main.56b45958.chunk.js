(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,function(t,e,n){t.exports={ContactList:"ContactList_ContactList__1eCsf",ContactListItem:"ContactList_ContactListItem__yD5_W",Text:"ContactList_Text__hVy_g",ContactListText:"ContactList_ContactListText__1p2AI",ContactListActions:"ContactList_ContactListActions__3sN0w",ContactListButton:"ContactList_ContactListButton__9bg7h"}},function(t,e,n){t.exports={box:"ContactForm_box__2XCUA",input:"ContactForm_input__2oEoD",input2:"ContactForm_input2__26Nvt",btn:"ContactForm_btn__2jeAL",button:"ContactForm_button__3YNFK"}},,,,,,function(t,e,n){t.exports={label:"Filter_label__3zpjp",input:"Filter_input__3p4vj"}},,function(t,e,n){t.exports={Layout:"Layout_Layout__1DYck"}},,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(10),s=n.n(c),r=n(12),o=n(4),i=n(5),u=n(7),l=n(6),b=n(11),h=n.n(b),j=n(0),m=function(t){var e=t.children;return Object(j.jsx)("div",{className:h.a.Layout,children:e})},d=n(2),p=n.n(d);var x=function(t){var e=t.contacts,n=t.onRemoveTask;return Object(j.jsx)("ul",{className:p.a.ContactList,children:e.map((function(t){var e=t.id,a=t.text,c=t.number;return Object(j.jsxs)("li",{className:p.a.ContactListItem,children:[Object(j.jsxs)("div",{className:p.a.Text,children:[Object(j.jsxs)("p",{className:p.a.ContactListText,children:[a," "]}),Object(j.jsx)("p",{className:p.a.ContactListText,children:c})]}),Object(j.jsx)("section",{className:p.a.ContactListActions,children:Object(j.jsx)("button",{className:p.a.ContactListButton,onClick:function(){return n(e)},children:"DELETE"})})]},e)}))})},f=n(3),C=n.n(f),_=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={text:"",number:""},t.handleChange=function(e){t.setState({text:e.target.value})},t.handleChangeNumber=function(e){t.setState({number:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddTask(t.state.text,t.state.number),t.setState({text:""}),t.setState({number:""})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:C.a.form,children:[Object(j.jsxs)("div",{className:C.a.box,children:[Object(j.jsx)("input",{className:C.a.input,type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",name:"name",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",placeholder:"Enter the name",autocomplete:"off",required:!0,value:this.state.text,onChange:this.handleChange}),Object(j.jsx)("input",{className:C.a.input,type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",placeholder:"Enter the number",autocomplete:"off",required:!0,value:this.state.number,onChange:this.handleChangeNumber})]}),Object(j.jsx)("div",{className:C.a.btn,children:Object(j.jsx)("button",{type:"submit",className:C.a.button,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443"})})]})}}]),n}(a.Component),v=n(9),O=n.n(v);var L=function(t){var e=t.value,n=t.onChangeFilter;return Object(j.jsx)("form",{children:Object(j.jsxs)("label",{className:O.a.label,children:["Filter tasks:"," ",Object(j.jsx)("input",{className:O.a.input,type:"text",value:e,onChange:function(t){return n(t.target.value)}})]})})},g=n(21),N=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addTask=function(e,n){var a={id:Object(g.a)(),text:e,number:n};t.state.contacts.find((function(t){return t.text===e}))?alert("Such name already exists"):t.setState((function(t){return{contacts:[].concat(Object(r.a)(t.contacts),[a])}}))},t.removeTask=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e})},t.getVisibleTasks=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.text.includes(a)}))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getVisibleTasks();return Object(j.jsxs)(m,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(_,{onAddTask:this.addTask}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(L,{value:n,onChangeFilter:this.changeFilter}),e.length>0&&Object(j.jsx)(x,{contacts:a,onRemoveTask:this.removeTask})]})}}]),n}(a.Component);n(18);s.a.render(Object(j.jsx)(N,{}),document.querySelector("#root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.56b45958.chunk.js.map