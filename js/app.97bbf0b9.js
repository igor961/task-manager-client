(function(t){function e(e){for(var n,r,o=e[0],c=e[1],d=e[2],l=0,p=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,d||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,o=1;o<i.length;o++){var c=i[o];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},a=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/task-manager-client/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var u=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("85ec"),s=i.n(n);s.a},"0b8e":function(t,e,i){"use strict";var n=i("80b7"),s=i.n(n);s.a},"0fae":function(t,e,i){"use strict";var n=i("d6ca"),s=i.n(n);s.a},"0fb7":function(t,e,i){"use strict";var n=i("e146"),s=i.n(n);s.a},"12b5":function(t,e,i){t.exports=i.p+"img/ch_p.3f0a4ff0.svg"},1771:function(t,e,i){var n={"./ch_p.svg":"12b5","./ch_p_h.svg":"8ed1","./delete.svg":"d739","./delete_h.svg":"c48b","./edit.svg":"6582","./edit_h.svg":"4f61","./edit_stripe.svg":"bc5c","./plus.svg":"8a37","./plus_btn.svg":"b73d","./tasks.svg":"7933"};function s(t){var e=a(t);return i(e)}function a(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=a,t.exports=s,s.id="1771"},"4f61":function(t,e,i){t.exports=i.p+"img/edit_h.c711e502.svg"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=i("1dce"),a=i.n(s),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("main",{staticClass:"container"},[t._m(0),i("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),i("edit-task-modal",{attrs:{editing:t.editingTaskObj},on:{"update:editing":function(e){t.editingTaskObj=e},"update:task":t.updateTask}}),t.projects&&!t.addingList?i("section",{staticClass:"todo_lists"},t._l(t.projectsArr,(function(e,n){return i("todo-list",t._b({key:e.id,on:{"edit:todo":function(e){t.editingTaskObj={status:!0,task:e}},"send:batch":t.sendBatch,"update:priority":t.updatePriority,delete:t.deleteList,"delete:todo":t.deleteItem}},"todo-list",{todosProp:e.tasks,title:e.name,id:e.id,pos:n,projects:t.projectsArr},!1))})),1):t._e(),i("add-list-sec",{attrs:{addingList:t.addingList},on:{"update:addingList":function(e){t.addingList=e},"update:adding-list":function(e){t.addingList=e},"create:list":t.createList}}),i("button",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading&&!t.addingList,expression:"!isLoading && !addingList"}],staticClass:"stripe blue_elem",on:{click:function(e){t.addingList=!0}}},[i("img",{staticClass:"ico",attrs:{src:t.btnIco,alt:""}}),i("div",{staticClass:"text"},[t._v("Add TODO List")])]),i("footer",[t._v(" © Ruby Garage ")])],1)])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("h1",[t._v("SIMPLE TODO LISTS")]),i("h3",[t._v("FROM RUBY GARAGE")])])}],c=(i("b0c0"),i("07ac"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"window todo_list"},[i("header",{staticClass:"stripe blue_elem"},[i("img",{staticClass:"ico",attrs:{src:t.ico,alt:""}}),i("div",{staticClass:"s10px"}),i("div",{ref:"title",staticClass:"text",staticStyle:{padding:"0"},attrs:{contenteditable:t.editingTitle},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.setNewTitle(e.target.innerText))},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateTitle(e)}}},[t._v(" "+t._s(t.title)+" ")]),t.editingTitle&&t.$v.newTitle.$invalid?i("span",{staticClass:"cap"},[t._v("(New title must not be empty or larger than 64 symbols)")]):t._e(),i("Actions",{attrs:{actions:t.actions},on:{edit:t.editTitle,delete:function(e){return t.$emit("delete",t.id)}}})],1),i("article",[i("AddSec",{on:{create:t.createItem}}),i("div",{staticClass:"view_sec"},t._l(t.projects[t.pos].tasks,(function(e,n){return i("TodoListItem",{key:e.id,attrs:{todo:e,pos:parseInt(n)},on:{"edit:todo":function(e){return t.$emit("edit:todo",e)},"delete:todo":function(e){return t.$emit("delete:todo",e)},"update:priority":function(e){t.$emit("update:priority",e)&&(t.batchReady=!0)}},scopedSlots:t._u([{key:"content",fn:function(){return[t._v(" "+t._s(e.name)+" ")]},proxy:!0}],null,!0)})})),1)],1),i("button",{directives:[{name:"show",rawName:"v-show",value:t.batchReady,expression:"batchReady"}],staticClass:"send_batch_button",on:{click:function(e){t.$emit("send:batch",t.id)&&(t.batchReady=!1)}}},[t._v(" Finish ")])])}),d=[],u=(i("a9e3"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"stripe add_sec"},[i("img",{staticClass:"ico",attrs:{src:t.img,alt:""}}),i("div",{staticClass:"s10px"}),i("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.newTaskContent,expression:"newTaskContent"}],attrs:{type:"text",placeholder:"Start typing here to create a task"},domProps:{value:t.newTaskContent},on:{focus:function(e){t.editingState=!0},blur:function(e){t.editingState=!1},input:function(e){e.target.composing||(t.newTaskContent=e.target.value)}}}),i("button",{attrs:{type:"submit"}},[t._v("Add Task")])]),i("span",{directives:[{name:"show",rawName:"v-show",value:t.editingState&&t.$v.newTaskContent.$invalid,expression:"editingState && $v.newTaskContent.$invalid"}],staticClass:"cap"},[t._v("(New content must not be empty or larger than 256 symbols)")])])}),l=[],p=i("8a37"),f=i.n(p),m=i("b5ae"),h={data:function(){return{editingState:!1,img:f.a,newTaskContent:""}},validations:{newTaskContent:{required:m["required"],maxLength:Object(m["maxLength"])(256)}},methods:{submit:function(){this.$v.newTaskContent.$invalid||this.$emit("create",this.newTaskContent)}}},v=h,g=(i("fa01"),i("2877")),b=Object(g["a"])(v,u,l,!1,null,"2da1700e",null),y=b.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"stripe bgchangeable list_item"},[i("input",{attrs:{type:"checkbox"},domProps:{checked:t.todo.status},on:{change:t.markDone}}),i("div",{staticClass:"s5px bordered"}),i("div",{staticClass:"text"},[t._t("content")],2),i("div",{staticClass:"s1px"}),i("term-and-actions",{attrs:{actions:t.actions,handlers:{delete:this.deleteItem,changePriority:this.changePriority,edit:this.editItem},term:t.todo.term}})],1)},k=[],w=i("5530"),x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"actions_container"},[i("actions",t._g({attrs:{actions:t.actions}},t.handlers)),t.term?i("span",{staticClass:"badge"},[t._v(t._s(t.termStr))]):t._e()],1)},$=[],j=i("1315"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"actions"},[t._l(t.actions,(function(e,s){return[n("div",{key:"a"+s,staticClass:"action"},[n("img",{attrs:{src:i("1771")("./"+e.src),alt:""},on:{click:function(i){return t.$emit(e.name)}}})]),e.last?t._e():n("div",{key:"b"+s,staticClass:"s1px"})]}))],2)},T=[],O={props:{actions:Array}},I=O,S=(i("0fb7"),Object(g["a"])(I,C,T,!1,null,"1c4ddf61",null)),L=S.exports,N={name:"term-and-actions",props:["actions","handlers","term"],components:{Actions:L},computed:{termStr:function(){return j["DateTime"].fromISO(this.term).toFormat("dd/MM/yyyy HH:mm")}}},P=N,A=(i("6736"),Object(g["a"])(P,x,$,!1,null,"7855cf82",null)),D=A.exports,q={props:{todo:Object,pos:Number},data:function(){return{newText:"",newDate:null,editingState:!1,actions:[{name:"changePriority",src:"ch_p.svg"},{name:"edit",src:"edit.svg"},{name:"delete",src:"delete.svg",last:!0}]}},validations:{newText:{required:m["required"],maxLength:Object(m["maxLength"])(256)}},methods:{markDone:function(){var t=!this.todo.status;console.log("change status (done)",t);var e=Object(w["a"])({},this.todo);e.status=t,this.$emit("update:todo",e),this.$wsClient.publish({destination:"/app/task/update",body:JSON.stringify(e)})},editItem:function(){console.log("edit Todo"),this.$emit("edit:todo",this.todo)},deleteItem:function(){console.log("delete Todo",this.pos),this.$wsClient.publish({destination:"/app/task/delete/"+this.todo.id}),this.$emit("delete:todo",this.todo)},changePriority:function(){console.log("change priority"),this.$emit("update:priority",this.todo)}},components:{TermAndActions:D}},E=q,J=(i("0b8e"),Object(g["a"])(E,_,k,!1,null,null,null)),M=J.exports,R=i("7933"),U=i.n(R),F={props:{projects:Array,todosProp:Object,title:String,id:Number,pos:Number},validations:{newTitle:{required:m["required"],maxLength:Object(m["maxLength"])(64)}},methods:{setNewTitle:function(t){this.newTitle=t,this.$v.newTitle.$touch()},createItem:function(t){console.log("create Todo",t),this.$wsClient.publish({destination:"/app/task/create",body:JSON.stringify({projectId:this.id,name:t})})},updateTitle:function(){this.$v.newTitle.$invalid||(this.editingTitle=!1,this.$wsClient.publish({destination:"/app/project/update",body:JSON.stringify({name:this.newTitle,id:this.id})}))},editTitle:function(){var t=this;this.newTitle=this.title,this.editingTitle=!0,this.$nextTick((function(){return t.$refs.title.focus()}))}},data:function(){return{batchReady:!1,newTitle:"",editingTitle:!1,ico:U.a,actions:[{name:"edit",src:"edit_h.svg"},{name:"delete",src:"delete_h.svg",last:!0}]}},components:{AddSec:y,TodoListItem:M,Actions:L}},B=F,G=(i("0fae"),Object(g["a"])(B,c,d,!1,null,null,null)),H=G.exports,W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{directives:[{name:"show",rawName:"v-show",value:t.addingList,expression:"addingList"}],staticClass:"adding_list_form",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[i("label",[t._v(" Project's name "),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.name.$model,expression:"$v.name.$model",modifiers:{trim:!0}}],attrs:{type:"text"},domProps:{value:t.$v.name.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.name,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.$v.name.$invalid&&t.$v.$anyDirty?[t._v("(Field must not be empty or larger than 64 symbols)")]:t._e()],2),i("label",[t._v(" Task's name "),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.firstTaskName.$model,expression:"$v.firstTaskName.$model",modifiers:{trim:!0}}],attrs:{type:"text"},domProps:{value:t.$v.firstTaskName.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.firstTaskName,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.$v.firstTaskName.$invalid&&t.$v.$anyDirty?[t._v("(Field must not be empty or larger than 256 symbols)")]:t._e()],2),i("div",{staticClass:"form-group"},[i("button",{staticClass:"blue_elem",attrs:{type:"submit"}},[t._v("Create")]),i("button",{staticClass:"blue_elem",attrs:{type:"button"},on:{click:t.cancel}},[t._v("Cancel")])])])},Y=[],z={name:"add-list-sec",props:{addingList:Boolean},methods:{submit:function(){this.$v.$invalid||this.$emit("create:list",{name:this.name,firstTaskName:this.firstTaskName})},cancel:function(){this.$emit("update:addingList",!1)}},data:function(){return{name:"",firstTaskName:""}},validations:{name:{required:m["required"],maxLength:Object(m["maxLength"])(64)},firstTaskName:{required:m["required"],maxLength:Object(m["maxLength"])(256)}}},K=z,Q=(i("b845"),Object(g["a"])(K,W,Y,!1,null,"5dd66b81",null)),V=Q.exports,X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.editing.status,expression:"editing.status"}],staticClass:"window modal"},[i("header",{staticClass:"stripe blue_elem"},[i("img",{staticClass:"ico",attrs:{src:t.ico,alt:""}}),i("div",{staticClass:"text"},[t._v(t._s(t.title||"Edit task"))])]),i("article",[i("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[i("div",{staticClass:"form-row"},[i("h6",[t._v("A new name for this task")]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.newTask.name.$model,expression:"$v.newTask.name.$model",modifiers:{trim:!0}}],attrs:{type:"text"},domProps:{value:t.$v.newTask.name.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.newTask.name,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),i("div",{staticClass:"form-row"},[i("h6",[t._v("A new term for this task")]),i("div",[i("datetime",{attrs:{type:"datetime","min-datetime":(new Date).toISOString()},model:{value:t.$v.newTask.term.$model,callback:function(e){t.$set(t.$v.newTask.term,"$model",e)},expression:"$v.newTask.term.$model"}}),i("button",{staticStyle:{position:"absolute"},attrs:{type:"button"},on:{click:function(e){t.newTask.term&&(t.$v.newTask.term=null)}}},[t._v("Clear")])],1)]),i("div",{staticClass:"form-row"},[i("h6",{directives:[{name:"show",rawName:"v-show",value:t.errorSubmitting,expression:"errorSubmitting"}],staticStyle:{color:"red"}},[t._v("Please, fill in the form correctly!")])]),i("div",{staticClass:"form-row footer-row"},[i("button",{attrs:{type:"submit",disabled:!t.$v.$anyDirty}},[t._v("Submit")]),i("button",{staticClass:"cancel-btn",attrs:{type:"button"},on:{click:t.cancel}},[t._v("Cancel")])])])])])},Z=[],tt=i("bc5c"),et=i.n(tt),it=i("859b"),nt=(i("d355"),{props:["title","editing"],watch:{editing:function(t){this.newTask=Object(w["a"])({},t.task),this.$v.$reset()}},validations:{newTask:{name:{required:m["required"],maxLength:Object(m["maxLength"])(256)},id:{required:m["required"]},term:{}}},data:function(){return{ico:et.a,errorSubmitting:!1,newTask:Object(w["a"])({},this.editing.task)}},methods:{submit:function(){var t=this;this.$v.$touch(),this.$v.$invalid?(this.errorSubmitting=!0,setTimeout((function(){return t.errorSubmitting=!1}),5e3)):this.$emit("update:task",this.newTask)},cancel:function(){this.$emit("update:editing",Object(w["a"])(Object(w["a"])({},this.editing),{},{status:!1}))}},components:{Datetime:it["Datetime"]}}),st=nt,at=(i("c3ea"),Object(g["a"])(st,X,Z,!1,null,null,null)),rt=at.exports,ot=i("b73d"),ct=i.n(ot),dt=(i("13d5"),i("ac1f"),i("5319"),i("d4ec")),ut=i("bee2"),lt=i("ade3"),pt=function(t,e){var i={};return t.reduce((function(t,i){return Object(w["a"])(Object(w["a"])({},t),{},Object(lt["a"])({},i[e],i))}),i)},ft=function(){function t(e,i){Object(dt["a"])(this,t),this._projects=pt(e,"id"),this._notifyCb=i}return Object(ut["a"])(t,[{key:"getAll",value:function(){return Object.values(this._projects)}},{key:"get",value:function(t){return this._projects[t]}},{key:"create",value:function(t){this._projects[t.id]||(this._projects[t.id]=t),this._notifyCb()}},{key:"createTask",value:function(t){var e=this._projects[t.projectId];e.tasks?e.tasks.length&&(t.auxId=this._generateNewAuxId(t,e.tasks[0].auxId)):e.tasks={},e.tasks[t.auxId]=t;var i=Object.values(e.tasks);if(i.length>0){var n=this._binarySearch(i,"auxId",t.auxId);if(!n)return;var s=i[n[1]+1],a=i[n[1]-1];t.nextId=s?s.auxId:null,a&&(a.nextId=t.auxId)}this._notifyCb()}},{key:"update",value:function(t){this._projects[t.id]&&(this._projects[t.id]=t),this._notifyCb()}},{key:"updateTask",value:function(t){var e=t.auxId,i=t.projectId;this._projects[i].tasks||(this._projects[i].tasks={}),this._projects[i].tasks[e]=t,this._notifyCb()}},{key:"delete",value:function(t){delete this._projects[t],this._notifyCb()}},{key:"deleteTask",value:function(t){var e=t.auxId;delete this._projects[t.projectId].tasks[e],this._notifyCb()}},{key:"_replaceAuxIds",value:function(t,e){t.auxId=String(t.auxId).replace(t.priority,e.priority),e.auxId=String(e.auxId).replace(e.priority,t.priority);for(var i=0,n=[t,e];i<n.length;i++){var s=n[i];s.auxId=this._generateNewAuxId(s)}}},{key:"_swapPriorities",value:function(t,e){t.priority+=e.priority,e.priority=t.priority-e.priority,t.priority-=e.priority}},{key:"_updatePrevNextId",value:function(t,e,i){console.log("Binary search, searching id="+e+" and replacing it with "+i);var n="nextId",s=this._binarySearch(Object.values(t),n,e);s&&(s[0][n]=i)}},{key:"_binarySearch",value:function(t,e,i){for(var n=t.length,s=0,a=parseInt(n/2);n>=s;a=s+parseInt((n-s)/2))if(t[a][e]>i)n-=a+1;else if(t[a][e]<i)s+=a+1;else if(t[a][e]===i)return[t[a],a]}},{key:"changePriority",value:function(t){var e=[t.projectId,t.auxId,t.nextId],i=e[0],n=e[1],s=e[2];if(console.log(t,s),s){var a=this._projects[i].tasks,r=a[n],o=a[s];if(r&&o){var c=r.auxId,d=this._fixSamePriorities(a);d&&(n=this._renewAuxIds(a,t),r=a[n],s=r.nextId,o=a[s]),r&&o&&(this._swapPriorities(r,o),this._replaceAuxIds(r,o),delete a[n],delete a[s],a[r.auxId]=r,a[o.auxId]=o,r.nextId=o.nextId,o.nextId=r.auxId,//!!!
this._updatePrevNextId(a,c,o.auxId),this._notifyCb())}}}},{key:"_fixSamePriorities",value:function(t){for(var e=Object.values(t),i=!1,n=1;n<e.length;++n)e[n].priority!=e[n-1].priority+1&&(i=!0),e[n].priority=e[n-1].priority+1;return i}},{key:"_renewAuxIds",value:function(t,e){for(var i=Object.values(t),n=e.auxId,s=1;s<i.length;++s){var a=i[s],r=a.auxId,o=this._generateNewAuxId(a);r!=o&&(a.auxId=o,a.nextId=null,i[s-1].nextId=o,delete t[r],t[o]=a,r==n&&(n=o))}return n}},{key:"_generateNewAuxId",value:function(t,e){for(var i=String(t.priority),n=String(e||t.auxId).length-i.length-String(t.id).length,s=0;s<(n||1);++s)i+="0";return i+=t.id,i}}]),t}(),mt=i("9062"),ht=i.n(mt),vt={methods:{onConnect:function(){var t=this;this.isLoading=!1,this.$wsClient.subscribe("/user/queue/projects-with-tasks",(function(e){console.log(e.body),t.projects=new ft(JSON.parse(e.body),t.notifyProjects)})),this.$wsClient.publish({destination:"/app/all"}),this.$wsClient.subscribe("/user/queue/task",(function(e){var i=JSON.parse(e.body);t.projects.createTask(i)})),this.$wsClient.subscribe("/user/queue/project",(function(e){var i=JSON.parse(e.body),n={name:t.newProject.firstTaskName,projectId:i.id};t.projects.create(i),t.$wsClient.publish({destination:"/app/task/create",body:JSON.stringify(n)})}))},deleteList:function(t){this.projects.delete(t),this.$wsClient.publish({destination:"/app/project/delete/"+t})},updateTask:function(t){console.log("Update task",t),this.$wsClient.publish({destination:"/app/task/update",body:JSON.stringify(t)}),this.editingTaskObj.status=!1,this.projects.updateTask(t)},deleteItem:function(t){this.projects.deleteTask(t)},createList:function(t){console.log("create TodoList"),this.newProject=t;var e={name:this.newProject.name};this.$wsClient.publish({destination:"/app/project/create",body:JSON.stringify(e)}),this.addingList=!1},notifyProjects:function(){this.$set(this,"projectsArr",this.projects.getAll())},updatePriority:function(t){this.projects.changePriority(t)},sendBatch:function(t){console.log(t);var e=this.projects.get(t);this.$wsClient.publish({destination:"/app/task/batch",body:JSON.stringify(Object.values(e.tasks))})}},watch:{projects:function(){console.log("Watching projects"),this.projectsArr=this.projects.getAll()}},data:function(){return{projects:null,projectsArr:null,addingList:!1,newProject:null,btnIco:ct.a,isLoading:!0,editingTaskObj:{status:!1,task:{name:null,term:null}}}},components:{TodoList:H,AddListSec:V,Loading:ht.a,EditTaskModal:rt}},gt=vt,bt=(i("034f"),Object(g["a"])(gt,r,o,!1,null,null,null)),yt=bt.exports,_t=(i("d81d"),i("4572"));function kt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=new _t["Client"]({brokerURL:t,connectHeaders:e}),n={arr:[],register:function(t){this.arr.push(t)},onConnect:function(){this.arr.map((function(t){console.log(t.$wsClient.connected),t.onConnect()})),console.log("Connected")}};i.onConnect=n.onConnect.bind(n);var s={install:function(t){console.log("Connecting..."),t.mixin({created:function(){this.$wsClient.connected?this.onConnect():n.register(this)},methods:{onConnect:function(){}}}),t.prototype.$wsClient=i,i.activate()}};return s}n["a"].config.productionTip=!1,n["a"].use(a.a),n["a"].use(kt("wss://taskmanagerws.herokuapp.com/api")),new n["a"]({render:function(t){return t(yt)}}).$mount("#app")},6582:function(t,e,i){t.exports=i.p+"img/edit.33b14505.svg"},6736:function(t,e,i){"use strict";var n=i("fe62"),s=i.n(n);s.a},7933:function(t,e,i){t.exports=i.p+"img/tasks.db3ff083.svg"},"80b7":function(t,e,i){},"80d1":function(t,e,i){},"85ec":function(t,e,i){},"8a37":function(t,e,i){t.exports=i.p+"img/plus.6bffc914.svg"},"8ed1":function(t,e,i){t.exports=i.p+"img/ch_p_h.9334f8f5.svg"},"9ddd":function(t,e,i){},b73d:function(t,e,i){t.exports=i.p+"img/plus_btn.a9bc0dc9.svg"},b845:function(t,e,i){"use strict";var n=i("ffd4"),s=i.n(n);s.a},bc5c:function(t,e,i){t.exports=i.p+"img/edit_stripe.e2ff35b4.svg"},c3ea:function(t,e,i){"use strict";var n=i("9ddd"),s=i.n(n);s.a},c48b:function(t,e,i){t.exports=i.p+"img/delete_h.70cf97d0.svg"},d6ca:function(t,e,i){},d739:function(t,e,i){t.exports=i.p+"img/delete.92478c7b.svg"},e146:function(t,e,i){},fa01:function(t,e,i){"use strict";var n=i("80d1"),s=i.n(n);s.a},fe62:function(t,e,i){},ffd4:function(t,e,i){}});
//# sourceMappingURL=app.97bbf0b9.js.map