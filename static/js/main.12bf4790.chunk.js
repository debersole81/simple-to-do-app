(this["webpackJsonpsimple-todo-app"]=this["webpackJsonpsimple-todo-app"]||[]).push([[0],{43:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n(2),s=n.n(a),c=n(19),i=n.n(c),r=n(20),d=n(10),l=n(3),u=n(4),p=n(6),h=n(5),j=function(t){Object(p.a)(n,t);var e=Object(h.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentWillUnmount",value:function(){alert("Item about to be deleted!")}},{key:"render",value:function(){var t=this,e=this.props.todo,n=e.completed,a=e.id,s=e.title;return Object(o.jsxs)("li",{className:"todo-item",children:[Object(o.jsx)("input",{type:"checkbox",checked:n,onChange:function(){return t.props.handleChange(a)}}),Object(o.jsx)("button",{onClick:function(){return t.props.deleteTodoProps(a)},children:"Delete"}),Object(o.jsx)("span",{style:n?{fontStyle:"italic",color:"#d35e0f",opacity:.4,textDecoration:"line-through"}:null,children:s})]})}}]),n}(s.a.Component),b=function(t){Object(p.a)(n,t);var e=Object(h.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(o.jsx)("div",{children:this.props.todos.map((function(e){return Object(o.jsx)(j,{todo:e,handleChange:t.props.handleChange,deleteTodoProps:t.props.deleteTodoProps},e.id)}))})}}]),n}(s.a.Component),m=function(t){Object(p.a)(n,t);var e=Object(h.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("header",{style:{padding:"20px 0",lineHeight:"2em"},children:[Object(o.jsxs)("h1",{style:{fontSize:"25px",marginBottom:"15px"},children:["Simple Todo App ",Object(o.jsx)("span",{id:"inH1"})]}),Object(o.jsx)("p",{style:{fontSize:"19px"},children:"Please add to-dos item(s) through the input field"})]})}}]),n}(a.Component),f=n(7),O=function(t){Object(p.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.onChange=function(e){t.setState(Object(f.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.addTodoItem(t.state.title),t.setState({title:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("form",{onSubmit:this.handleSubmit,className:"form-container",children:[Object(o.jsx)("input",{type:"text",className:"input-text",placeholder:"Add Todo...",value:this.state.title,name:"title",onChange:this.onChange}),Object(o.jsx)("input",{type:"submit",className:"input-submit",value:"Submit"})]})}}]),n}(s.a.Component),v=n(8),y=n.n(v),x=function(t){Object(p.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={todos:[],show:!1},t.handleChange=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t})),show:!t.state.show})},t.delTodo=function(e){y.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(n){return t.setState({todos:Object(d.a)(t.state.todos.filter((function(t){return t.id!==e})))})}))},t.addTodoItem=function(e){y.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){return t.setState({todos:[].concat(Object(d.a)(t.state.todos),[e.data])})}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;y.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){console.log(this.state.todos);var t={todos:this.state.todos,handleChange:this.handleChange,deleteTodoProps:this.delTodo};return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(m,{headerSpan:this.state.show}),Object(o.jsx)(O,{addTodoItem:this.addTodoItem}),Object(o.jsx)(b,Object(r.a)({},t))]})}}]),n}(s.a.Component);n(43);i.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.12bf4790.chunk.js.map