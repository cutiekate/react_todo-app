(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(2),c=a.n(o),r=(a(14),a(15),a(7)),s=a(6),i=a(3),m=a(4),d=a(8),u=a(5),p=function(e){var t=e.todos,a=e.onComplete;return n.a.createElement("ul",{className:"todo-list"},t.map((function(e){return n.a.createElement("li",{key:e.id},n.a.createElement("div",{className:"view"},n.a.createElement("input",{type:"checkbox",className:"toggle",id:e.id,onChange:a}),n.a.createElement("label",{htmlFor:"todo-1"},e.title),n.a.createElement("button",{type:"button",className:"destroy"})),n.a.createElement("input",{type:"text",className:"edit"}))})))},h=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var l=arguments.length,n=new Array(l),o=0;o<l;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={todos:[],title:"",currentId:1},e.handleSubmit=function(t){t.preventDefault();var a=e.state,l=a.title,n=a.currentId;if(""!==l){var o={title:l,id:n,completed:!1};e.setState((function(e){return{currentId:n+1,todos:[].concat(Object(s.a)(e.todos),[o]),title:""}}))}},e.handleTitleChange=function(t){e.setState({title:t.target.value})},e.handleCompleteChange=function(t){var a=t.target,l=a.id,n=a.checked,o=e.state.todos;e.setState({todos:o.map((function(e){if(e.id===+l){var t=Object(r.a)({},e);return t.completed=n,t}return e}))})},e}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("section",{className:"todoapp"},n.a.createElement("header",{className:"header"},n.a.createElement("h1",null,"todos"),n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",onChange:this.handleTitleChange,value:this.state.title}))),n.a.createElement("section",{className:"main"},n.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all"}),n.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),n.a.createElement(p,{todos:this.state.todos,onComplete:this.handleCompleteChange})),n.a.createElement("footer",{className:"footer"},n.a.createElement("span",{className:"todo-count"},this.state.todos.filter((function(e){return!e.completed})).length,"items left"),n.a.createElement("ul",{className:"filters"},n.a.createElement("li",null,n.a.createElement("a",{href:"#/",className:"selected"},"All")),n.a.createElement("li",null,n.a.createElement("a",{href:"#/active"},"Active")),n.a.createElement("li",null,n.a.createElement("a",{href:"#/completed"},"Completed"))),n.a.createElement("button",{type:"button",className:"clear-completed"},"Clear completed")))}}]),a}(n.a.PureComponent);c.a.render(n.a.createElement(h,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.5069f1f3.chunk.js.map