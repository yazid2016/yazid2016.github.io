(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a5d120c"],{"02f4":function(e,t,a){var i=a("4588"),r=a("be13");e.exports=function(e){return function(t,a){var n,s,o=String(r(t)),l=i(a),c=o.length;return l<0||l>=c?e?"":void 0:(n=o.charCodeAt(l),n<55296||n>56319||l+1===c||(s=o.charCodeAt(l+1))<56320||s>57343?e?o.charAt(l):n:e?o.slice(l,l+2):s-56320+(n-55296<<10)+65536)}}},"0390":function(e,t,a){"use strict";var i=a("02f4")(!0);e.exports=function(e,t,a){return t+(a?i(e,t).length:1)}},"214f":function(e,t,a){"use strict";a("b0c5");var i=a("2aba"),r=a("32e9"),n=a("79e5"),s=a("be13"),o=a("2b4c"),l=a("520a"),c=o("species"),d=!n((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();e.exports=function(e,t,a){var m=o(e),f=!n((function(){var t={};return t[m]=function(){return 7},7!=""[e](t)})),g=f?!n((function(){var t=!1,a=/a/;return a.exec=function(){return t=!0,null},"split"===e&&(a.constructor={},a.constructor[c]=function(){return a}),a[m](""),!t})):void 0;if(!f||!g||"replace"===e&&!d||"split"===e&&!u){var h=/./[m],p=a(s,m,""[e],(function(e,t,a,i,r){return t.exec===l?f&&!r?{done:!0,value:h.call(t,a,i)}:{done:!0,value:e.call(a,t,i)}:{done:!1}})),v=p[0],b=p[1];i(String.prototype,e,v),r(RegExp.prototype,m,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}}},"520a":function(e,t,a){"use strict";var i=a("0bfb"),r=RegExp.prototype.exec,n=String.prototype.replace,s=r,o="lastIndex",l=function(){var e=/a/,t=/b*/g;return r.call(e,"a"),r.call(t,"a"),0!==e[o]||0!==t[o]}(),c=void 0!==/()??/.exec("")[1],d=l||c;d&&(s=function(e){var t,a,s,d,u=this;return c&&(a=new RegExp("^"+u.source+"$(?!\\s)",i.call(u))),l&&(t=u[o]),s=r.call(u,e),l&&s&&(u[o]=u.global?s.index+s[0].length:t),c&&s&&s.length>1&&n.call(s[0],a,(function(){for(d=1;d<arguments.length-2;d++)void 0===arguments[d]&&(s[d]=void 0)})),s}),e.exports=s},"5f1b":function(e,t,a){"use strict";var i=a("23c6"),r=RegExp.prototype.exec;e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var n=a.call(e,t);if("object"!==typeof n)throw new TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==i(e))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},a481:function(e,t,a){"use strict";var i=a("cb7c"),r=a("4bf8"),n=a("9def"),s=a("4588"),o=a("0390"),l=a("5f1b"),c=Math.max,d=Math.min,u=Math.floor,m=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,g=function(e){return void 0===e?e:String(e)};a("214f")("replace",2,(function(e,t,a,h){return[function(i,r){var n=e(this),s=void 0==i?void 0:i[t];return void 0!==s?s.call(i,n,r):a.call(String(n),i,r)},function(e,t){var r=h(a,e,this,t);if(r.done)return r.value;var u=i(e),m=String(this),f="function"===typeof t;f||(t=String(t));var v=u.global;if(v){var b=u.unicode;u.lastIndex=0}var P=[];while(1){var y=l(u,m);if(null===y)break;if(P.push(y),!v)break;var x=String(y[0]);""===x&&(u.lastIndex=o(m,n(u.lastIndex),b))}for(var w="",S=0,k=0;k<P.length;k++){y=P[k];for(var _=String(y[0]),L=c(d(s(y.index),m.length),0),$=[],C=1;C<y.length;C++)$.push(g(y[C]));var T=y.groups;if(f){var D=[_].concat($,L,m);void 0!==T&&D.push(T);var q=String(t.apply(void 0,D))}else q=p(_,m,L,$,T,t);L>=S&&(w+=m.slice(S,L)+q,S=L+_.length)}return w+m.slice(S)}];function p(e,t,i,n,s,o){var l=i+e.length,c=n.length,d=f;return void 0!==s&&(s=r(s),d=m),a.call(o,d,(function(a,r){var o;switch(r.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,i);case"'":return t.slice(l);case"<":o=s[r.slice(1,-1)];break;default:var d=+r;if(0===d)return a;if(d>c){var m=u(d/10);return 0===m?a:m<=c?void 0===n[m-1]?r.charAt(1):n[m-1]+r.charAt(1):a}o=n[d-1]}return void 0===o?"":o}))}}))},a888:function(e,t,a){"use strict";a("a481"),a("6762"),a("2fdb");var i={bind:function(e,t,a){var i=e.querySelector(".el-dialog__header"),r=e.querySelector(".el-dialog");i.style.cssText+=";cursor:move;",r.style.cssText+=";top:0px;";var n=function(){return window.document.currentStyle?function(e,t){return e.currentStyle[t]}:function(e,t){return getComputedStyle(e,!1)[t]}}();i.onmousedown=function(e){var t=e.clientX-i.offsetLeft,s=e.clientY-i.offsetTop,o=r.offsetWidth,l=r.offsetHeight,c=document.body.clientWidth,d=document.body.clientHeight,u=r.offsetLeft,m=c-r.offsetLeft-o,f=r.offsetTop,g=d-r.offsetTop-l,h=n(r,"left"),p=n(r,"top");h.includes("%")?(h=+document.body.clientWidth*(+h.replace(/\%/g,"")/100),p=+document.body.clientHeight*(+p.replace(/\%/g,"")/100)):(h=+h.replace(/\px/g,""),p=+p.replace(/\px/g,"")),document.onmousemove=function(e){var i=e.clientX-t,n=e.clientY-s;-i>u?i=-u:i>m&&(i=m),-n>f?n=-f:n>g&&(n=g),r.style.cssText+=";left:".concat(i+h,"px;top:").concat(n+p,"px;"),a.child.$emit("dragDialog")},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}}},r=function(e){e.directive("el-drag-dialog",i)};window.Vue&&(window["el-drag-dialog"]=i,Vue.use(r)),i.install=r;t["a"]=i},ac55:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-container",[a("el-header",{staticClass:"content-header",attrs:{height:"auto"}},[a("div",{staticClass:"content-header-left"},[a("el-button-group",[a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreated}},[e._v("新增")])],1)],1),e._v(" "),a("div",{staticClass:"content-header-right"},[a("div",[a("el-select",{staticStyle:{width:"100px","margin-right":"10px"},attrs:{placeholder:"请选择"},on:{change:e.handleStateChange},model:{value:e.requestParams.state,callback:function(t){e.$set(e.requestParams,"state",t)},expression:"requestParams.state"}},e._l(e.stateOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("div",[a("el-input",{attrs:{clearable:"",placeholder:"请输入关键字"},on:{change:e.handleSearch},model:{value:e.requestParams.searchKey,callback:function(t){e.$set(e.requestParams,"searchKey",t)},expression:"requestParams.searchKey"}},[a("i",{staticClass:"el-icon-search el-input__icon content-header-search",attrs:{slot:"suffix"},on:{click:e.handleSearch},slot:"suffix"})])],1)])]),e._v(" "),a("el-main",{staticClass:"content-main"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableParams.tableLoading,expression:"tableParams.tableLoading"}],attrs:{"row-key":"rowIdx",height:e.tableParams.tableHeight,data:e.tableParams.tableData,border:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"rowIdx","column-key":"rowIdx",label:"序号",width:"50",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"rolename","column-key":"rolename",label:"角色名称",width:"180",align:"left","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"remark","column-key":"remark",label:"角色说明","min-width":"180",align:"left","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"state","column-key":"state",label:"状态",width:"90",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":0,"inactive-value":1},on:{change:function(t){return e.handleSwitchChange(i)}},model:{value:i.state,callback:function(t){e.$set(i,"state",t)},expression:"row.state"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"createdtime","column-key":"createdtime",label:"创建时间",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("i",{staticClass:"el-icon-time"}),e._v(" "),a("span",[e._v(e._s(i.createdtime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{"column-key":"key",label:"操作",width:"100",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{padding:"0px","margin-left":"2px"},attrs:{icon:"el-icon-edit",type:"text"},on:{click:function(a){return e.handleModify(t.row)}}}),e._v(" "),a("el-button",{staticStyle:{padding:"0px","margin-left":"2px"},attrs:{icon:"el-icon-key",type:"text"},on:{click:function(a){return e.handleModifyPolicies(t.row)}}}),e._v(" "),a("el-button",{staticStyle:{padding:"0px","margin-left":"2px"},attrs:{icon:"el-icon-delete",type:"text"},on:{click:function(a){return e.handleDeleted(t.row)}}})]}}])})],1)],1),e._v(" "),a("el-footer",{staticClass:"content-footer",attrs:{height:"auto"}},[a("el-pagination",{attrs:{"current-page":e.requestParams.pageIndex,"page-size":e.requestParams.pageSize,total:e.tableParams.total,"page-sizes":e.tableParams.pageSizeOptions,layout:e.tableParams.layoutOptions},on:{"update:currentPage":function(t){return e.$set(e.requestParams,"pageIndex",t)},"update:current-page":function(t){return e.$set(e.requestParams,"pageIndex",t)},"update:pageSize":function(t){return e.$set(e.requestParams,"pageSize",t)},"update:page-size":function(t){return e.$set(e.requestParams,"pageSize",t)},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"prev-click":e.handleCurrentChange,"next-click":e.handleCurrentChange}})],1)],1),e._v(" "),a("el-drawer",{attrs:{size:"320px","custom-class":"el-drawer-custom-class","destroy-on-close":"",title:e.editParams.drawerTitle,visible:e.editParams.drawerVisible},on:{"update:visible":function(t){return e.$set(e.editParams,"drawerVisible",t)}}},[a("div",{staticStyle:{display:"flex","flex-direction":"column",height:"100%",padding:"0px 20px"}},[a("div",{staticStyle:{flex:"1"}},[a("el-form",{ref:"roleForm",attrs:{model:e.editParams.form,rules:e.editParams.rules}},[a("el-form-item",{attrs:{label:"角色名称：",prop:"rolename","label-width":e.editParams.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入角色名称",autocomplete:"off"},model:{value:e.editParams.form.rolename,callback:function(t){e.$set(e.editParams.form,"rolename",t)},expression:"editParams.form.rolename"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"角色描述：",prop:"remark","label-width":e.editParams.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入角色描述",autocomplete:"off"},model:{value:e.editParams.form.remark,callback:function(t){e.$set(e.editParams.form,"remark",t)},expression:"editParams.form.remark"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态：",prop:"state","label-width":e.editParams.formLabelWidth}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":0,"inactive-value":1},model:{value:e.editParams.form.state,callback:function(t){e.$set(e.editParams.form,"state",t)},expression:"editParams.form.state"}})],1)],1)],1),e._v(" "),a("div",{staticStyle:{display:"flex",padding:"10px 0"}},[a("el-button",{staticStyle:{flex:"1"},on:{click:function(t){e.editParams.drawerVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{staticStyle:{flex:"1"},attrs:{type:"primary",loading:e.editParams.submitLoading},on:{click:e.handleSave}},[e._v(e._s(e.editParams.submitLoading?"提交中...":"确 定"))])],1)])]),e._v(" "),a("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],attrs:{width:"620px","custom-class":"el-dialog-custom-class","destroy-on-close":"",title:e.modifyPoliciesParams.dialogTitle,visible:e.modifyPoliciesParams.dialogVisible},on:{"update:visible":function(t){return e.$set(e.modifyPoliciesParams,"dialogVisible",t)}}},[a("div",{staticStyle:{display:"flex","flex-direction":"column",height:"100%"}},[a("div",{staticStyle:{flex:"1"}},[a("el-transfer",{directives:[{name:"loading",rawName:"v-loading",value:e.modifyPoliciesParams.initLoading,expression:"modifyPoliciesParams.initLoading"}],attrs:{titles:["前台用户列表","角色用户列表"],props:e.modifyPoliciesParams.transferProps,data:e.modifyPoliciesParams.transferData},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.option;return a("span",{},[e._v(e._s(i.nickname)+" - "+e._s(i.username))])}}]),model:{value:e.modifyPoliciesParams.selectedData,callback:function(t){e.$set(e.modifyPoliciesParams,"selectedData",t)},expression:"modifyPoliciesParams.selectedData"}},[e._v(" "),a("el-button",{staticClass:"transfer-footer",staticStyle:{flex:"1",margin:"3px 0 3px 5px",padding:"8px"},attrs:{slot:"right-footer",type:"primary",loading:e.modifyPoliciesParams.submitLoading},on:{click:e.handleSavePolicies},slot:"right-footer"},[e._v(e._s(e.modifyPoliciesParams.submitLoading?"提交中...":"确 定"))])],1)],1)])])],1)},r=[],n=(a("ac6a"),a("8593")),s=a("a888"),o={name:"UserRole",filters:{},components:{},directives:{"el-drag-dialog":s["a"]},props:{},data:function(){return{screenHeight:0,stateOptions:[{value:-1,label:"全部"},{value:0,label:"启用"},{value:1,label:"禁用"}],requestParams:{pageIndex:1,pageSize:10,orderby:"",sort:0,searchKey:"",state:-1},tableParams:{tableLoading:!1,tableHeight:0,tableColumns:[],tableData:[],total:0,layoutOptions:"total, sizes, prev, pager, next, jumper",pageSizeOptions:["10","20","30","50","100","200"],multipleSelection:[]},editParams:{isModify:!1,drawerVisible:!1,drawerTitle:"提示",submitLoading:!1,formLabelWidth:"100px",form:{id:"",rolename:"",remark:"",state:0},rules:{rolename:[{required:!0,message:"角色名称不为空",trigger:"blur"}],remark:[{required:!0,message:"角色描述不为空",trigger:"blur"}],state:[{type:"number",message:"状态不合法",trigger:"blur"}]}},modifyPoliciesParams:{dialogVisible:!1,dialogTitle:"分配用户",submitLoading:!1,initLoading:!1,transferProps:{key:"id",label:"nickname"},transferData:[],selectedData:[],roleid:""}}},computed:{},watch:{},created:function(){},mounted:function(){var e=this;this.$nextTick((function(t){return e.initPage()}));var t=null;window.onresize=function(a){return function(a){t&&(clearTimeout(t),t=null),t=setTimeout((function(t){return e.setPageHeight()}),500)}()}},methods:{initPage:function(){this.setPageHeight(),this.getTableData()},setPageHeight:function(){this.screenHeight=document.body.clientHeight,this.tableParams.tableHeight=this.screenHeight-182},getTableColumns:function(){var e=this;this.tableParams.tableColumns=[{columnName:"rowIdx",columnLabel:"序号",columnWidth:58,align:"center",headerAlign:"center",sortable:!1,fixed:!0,show:!0},{columnName:"state",columnLabel:"状态",columnWidth:80,align:"center",headerAlign:"center",sortable:!1,fixed:!1,show:!0,formatter:function(t,a,i){var r=e.$createElement;return r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":0,"inactive-value":1,value:i,rowid:t.id}})}}]},getSearchParam:function(){var e={};for(var t in this.requestParams)if(this.requestParams.hasOwnProperty(t)){var a=this.requestParams[t];a instanceof Array?!a.length||1===a.length&&-1===a[0]||(e[t]=a):0!==a&&!a||-1===a||""!==a&&(e[t]=a)}return e},getTableData:function(){var e=this;this.tableParams.tableLoading=!0,Object(n["s"])(this.getSearchParam()).then((function(t){var a=[],i=(e.requestParams.pageIndex-1)*e.requestParams.pageSize;t.data.PageData.forEach((function(t,r){t["rowIdx"]=i+ ++r,t["createdtime"]=e.$moment(t["createdtime"]).format("YYYY-MM-DD HH:mm:ss"),a.push(t)})),e.tableParams.tableData=a,e.tableParams.total=t.data.TotalItems,e.tableParams.tableLoading=!1})).catch((function(t){e.$message.error({message:t.message||"请求出错"}),e.tableParams.tableLoading=!1}))},handleSizeChange:function(e){this.requestParams.pageIndex=1,this.requestParams.pageSize=e,this.getTableData()},handleCurrentChange:function(e){this.requestParams.pageIndex=e,this.getTableData()},handleStateChange:function(e){this.requestParams.pageIndex=1,this.getTableData()},handleSearch:function(e){this.requestParams.pageIndex=1,this.getTableData()},handleSwitchChange:function(e){var t=this;Object(n["U"])(e.id,0===e.state).catch((function(e){t.$message.error({message:e.message||"请求出错"}),t.getTableData()}))},handleCreated:function(){this.editParams.isModify=!1,this.editParams.drawerTitle="新增角色",this.editParams.drawerVisible=!0,this.editParams.form={id:"",rolename:"",remark:"",state:0}},handleModify:function(e){this.editParams.isModify=!0,this.editParams.drawerTitle="修改角色",this.editParams.drawerVisible=!0,this.editParams.form=JSON.parse(JSON.stringify(e))},handleSave:function(){var e=this;this.editParams.submitLoading=!0,this.$refs.roleForm.validate((function(t){if(!t)return e.editParams.submitLoading=!1,!1;Object(n["G"])(e.editParams.form,e.editParams.isModify).then((function(t){e.editParams.drawerVisible=!1,e.editParams.submitLoading=!1,e.getTableData()})).catch((function(t){e.$message.error({message:t.message||"请求出错"}),e.editParams.submitLoading=!1}))}))},handleModifyPolicies:function(e){var t=this;this.modifyPoliciesParams.dialogVisible=!0,this.modifyPoliciesParams.submitLoading=!1,this.modifyPoliciesParams.roleid=e.id,this.modifyPoliciesParams.initLoading=!0,Object(n["p"])(this.modifyPoliciesParams.roleid).then((function(e){t.modifyPoliciesParams.transferData=e.data;var a=[];t.modifyPoliciesParams.transferData.forEach((function(e){!0===e["isexist"]&&a.push(e.id)})),t.modifyPoliciesParams.selectedData=a,t.modifyPoliciesParams.initLoading=!1})).catch((function(e){t.$message.error({message:e.message||"请求出错"}),t.modifyPoliciesParams.initLoading=!1,t.modifyPoliciesParams.dialogVisible=!1}))},handleSavePolicies:function(){var e=this;this.modifyPoliciesParams.selectedData.length<1?this.$message.error({message:"请选择用户"}):(this.modifyPoliciesParams.submitLoading=!0,Object(n["H"])({roleid:this.modifyPoliciesParams.roleid,userids:this.modifyPoliciesParams.selectedData}).then((function(t){e.modifyPoliciesParams.dialogVisible=!1,e.modifyPoliciesParams.submitLoading=!1})).catch((function(t){e.$message.error({message:t.message||"请求出错"}),e.modifyPoliciesParams.submitLoading=!1})))},handleDeleted:function(e){var t=this;this.$confirm("此操作将永久删除角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(n["P"])([e.id]).then((function(e){return t.getTableData()})).catch((function(e){t.$message.error({message:e.message||"请求出错"})}))})).catch((function(){}))}}},l=o,c=a("2877"),d=Object(c["a"])(l,i,r,!1,null,"fced851e",null);t["default"]=d.exports},b0c5:function(e,t,a){"use strict";var i=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})}}]);