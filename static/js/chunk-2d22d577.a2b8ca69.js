(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d577"],{f6a2:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-container",[a("el-header",{staticClass:"content-header",attrs:{height:"auto"}},[a("div",{staticClass:"content-header-left"},[a("el-button-group",[a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreated}},[e._v("新增")])],1)],1),e._v(" "),a("div",{staticClass:"content-header-right"},[a("div",[a("el-select",{staticStyle:{width:"100px","margin-right":"10px"},attrs:{placeholder:"请选择"},on:{change:e.handleStateChange},model:{value:e.requestParams.state,callback:function(t){e.$set(e.requestParams,"state",t)},expression:"requestParams.state"}},e._l(e.stateOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("div",[a("el-input",{attrs:{clearable:"",placeholder:"请输入关键字"},on:{change:e.handleSearch},model:{value:e.requestParams.searchKey,callback:function(t){e.$set(e.requestParams,"searchKey",t)},expression:"requestParams.searchKey"}},[a("i",{staticClass:"el-icon-search el-input__icon content-header-search",attrs:{slot:"suffix"},on:{click:e.handleSearch},slot:"suffix"})])],1)])]),e._v(" "),a("el-main",{staticClass:"content-main"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableParams.tableLoading,expression:"tableParams.tableLoading"}],attrs:{"row-key":"rowIdx",height:e.tableParams.tableHeight,data:e.tableParams.tableData,border:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"rowIdx","column-key":"rowIdx",label:"序号",width:"50",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"remark","column-key":"remark",label:"编码名称","min-width":"160",align:"left","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"codetag","column-key":"codetag",label:"编码标识",width:"160",align:"left","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"prefix","column-key":"prefix",label:"前缀",width:"160",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"value","column-key":"value",label:"当前值",width:"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"length","column-key":"length",label:"长度",width:"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"state","column-key":"state",label:"状态",width:"90",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":0,"inactive-value":1},on:{change:function(t){return e.handleSwitchChange(r)}},model:{value:r.state,callback:function(t){e.$set(r,"state",t)},expression:"row.state"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"updatedtime","column-key":"updatedtime",label:"更新时间",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("i",{staticClass:"el-icon-time"}),e._v(" "),a("span",[e._v(e._s(r.updatedtime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"createdtime","column-key":"createdtime",label:"创建时间",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("i",{staticClass:"el-icon-time"}),e._v(" "),a("span",[e._v(e._s(r.createdtime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{"column-key":"key",label:"操作",width:"72",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{padding:"0px","margin-left":"2px"},attrs:{icon:"el-icon-edit",type:"text"},on:{click:function(a){return e.handleModify(t.row)}}}),e._v(" "),a("el-button",{staticStyle:{padding:"0px","margin-left":"2px"},attrs:{icon:"el-icon-delete",type:"text"},on:{click:function(a){return e.handleDeleted(t.row)}}})]}}])})],1)],1),e._v(" "),a("el-footer",{staticClass:"content-footer",attrs:{height:"auto"}},[a("el-pagination",{attrs:{"current-page":e.requestParams.pageIndex,"page-size":e.requestParams.pageSize,total:e.tableParams.total,"page-sizes":e.tableParams.pageSizeOptions,layout:e.tableParams.layoutOptions},on:{"update:currentPage":function(t){return e.$set(e.requestParams,"pageIndex",t)},"update:current-page":function(t){return e.$set(e.requestParams,"pageIndex",t)},"update:pageSize":function(t){return e.$set(e.requestParams,"pageSize",t)},"update:page-size":function(t){return e.$set(e.requestParams,"pageSize",t)},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"prev-click":e.handleCurrentChange,"next-click":e.handleCurrentChange}})],1)],1),e._v(" "),a("el-drawer",{ref:"drawer",attrs:{size:"320px","custom-class":"el-drawer-custom-class","destroy-on-close":"",title:e.editParams.drawerTitle,visible:e.editParams.drawerVisible},on:{"update:visible":function(t){return e.$set(e.editParams,"drawerVisible",t)}}},[a("div",{staticStyle:{display:"flex","flex-direction":"column",height:"100%",padding:"0px 20px"}},[a("div",{staticStyle:{flex:"1"}},[a("el-form",{ref:"syscodeForm",attrs:{model:e.editParams.form,rules:e.editParams.rules}},[a("el-form-item",{attrs:{label:"编码名称：",prop:"remark","label-width":e.editParams.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入编码名称",autocomplete:"off"},model:{value:e.editParams.form.remark,callback:function(t){e.$set(e.editParams.form,"remark",t)},expression:"editParams.form.remark"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"编码标识：",prop:"codetag","label-width":e.editParams.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入编码标识",autocomplete:"off"},model:{value:e.editParams.form.codetag,callback:function(t){e.$set(e.editParams.form,"codetag",t)},expression:"editParams.form.codetag"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"前缀：",prop:"prefix","label-width":e.editParams.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入前缀",maxlength:"8","show-word-limit":"",autocomplete:"off"},model:{value:e.editParams.form.prefix,callback:function(t){e.$set(e.editParams.form,"prefix",t)},expression:"editParams.form.prefix"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"当前值：",prop:"value","label-width":e.editParams.formLabelWidth}},[a("el-input-number",{staticStyle:{width:"100%"},attrs:{"controls-position":"right",min:1},model:{value:e.editParams.form.value,callback:function(t){e.$set(e.editParams.form,"value",t)},expression:"editParams.form.value"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"长度：",prop:"length","label-width":e.editParams.formLabelWidth}},[a("el-input-number",{staticStyle:{width:"100%"},attrs:{"controls-position":"right",min:1,max:32},model:{value:e.editParams.form.length,callback:function(t){e.$set(e.editParams.form,"length",t)},expression:"editParams.form.length"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态：",prop:"state","label-width":e.editParams.formLabelWidth}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":0,"inactive-value":1},model:{value:e.editParams.form.state,callback:function(t){e.$set(e.editParams.form,"state",t)},expression:"editParams.form.state"}})],1)],1)],1),e._v(" "),a("div",{staticStyle:{display:"flex",padding:"10px 0"}},[a("el-button",{staticStyle:{flex:"1"},on:{click:function(t){e.editParams.drawerVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{staticStyle:{flex:"1"},attrs:{type:"primary",loading:e.editParams.submitLoading},on:{click:e.handleSave}},[e._v(e._s(e.editParams.submitLoading?"提交中...":"确 定"))])],1)])])],1)},i=[],l=(a("ac6a"),a("8593")),n={name:"SysCode",filters:{},components:{},props:{},data:function(){return{screenHeight:0,stateOptions:[{value:-1,label:"全部"},{value:0,label:"启用"},{value:1,label:"禁用"}],requestParams:{pageIndex:1,pageSize:10,orderby:"",sort:0,searchKey:"",state:-1},tableParams:{tableLoading:!1,tableHeight:0,tableColumns:[],tableData:[],total:0,layoutOptions:"total, sizes, prev, pager, next, jumper",pageSizeOptions:["10","20","30","50","100","200"],multipleSelection:[]},editParams:{isModify:!1,drawerVisible:!1,drawerTitle:"提示",submitLoading:!1,formLabelWidth:"100px",form:{id:"",remark:"",codetag:"",prefix:"",value:1,length:0,state:0},rules:{remark:[{required:!0,message:"请输入编码名称",trigger:"blur"}],codetag:[{required:!0,message:"请输入编码标识",trigger:"blur"}],prefix:[{required:!0,message:"请输入前缀",trigger:"blur"}],value:[{type:"number",message:"当前值不合法",trigger:"blur"}],length:[{type:"number",message:"长度不合法",trigger:"blur"}],state:[{type:"number",message:"状态不合法",trigger:"blur"}]}}}},computed:{},watch:{},created:function(){},mounted:function(){var e=this;this.$nextTick((function(t){return e.initPage()}));var t=null;window.onresize=function(a){return function(a){t&&(clearTimeout(t),t=null),t=setTimeout((function(t){return e.setPageHeight()}),500)}()}},methods:{initPage:function(){this.setPageHeight(),this.getTableData()},setPageHeight:function(){this.screenHeight=document.body.clientHeight,this.tableParams.tableHeight=this.screenHeight-182},getTableColumns:function(){var e=this;this.tableParams.tableColumns=[{columnName:"rowIdx",columnLabel:"序号",columnWidth:58,align:"center",headerAlign:"center",sortable:!1,fixed:!0,show:!0},{columnName:"remark",columnLabel:"编码名称",align:"left",headerAlign:"left",sortable:!1,fixed:!1,show:!0},{columnName:"codetag",columnLabel:"编码标识",columnWidth:160,align:"left",headerAlign:"left",sortable:!1,fixed:!1,show:!0},{columnName:"prefix",columnLabel:"前缀",columnWidth:160,align:"center",headerAlign:"center",sortable:!1,fixed:!1,show:!0},{columnName:"value",columnLabel:"当前值",columnWidth:80,align:"center",headerAlign:"center",sortable:!1,fixed:!1,show:!0},{columnName:"length",columnLabel:"长度",columnWidth:80,align:"center",headerAlign:"center",sortable:!1,fixed:!1,show:!0},{columnName:"state",columnLabel:"状态",columnWidth:80,align:"center",headerAlign:"center",sortable:!1,fixed:!1,show:!0,formatter:function(t,a,r){var i=e.$createElement;return i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":0,"inactive-value":1,value:r,rowid:t.id}})}},{columnName:"updatedtime",columnLabel:"更新时间",columnWidth:160,align:"center",headerAlign:"center",sortable:!1,fixed:!1,show:!0,fit:!0},{columnName:"createdtime",columnLabel:"创建时间",columnWidth:160,align:"center",headerAlign:"center",sortable:!1,fixed:!1,show:!0}]},getSearchParam:function(){var e={};for(var t in this.requestParams)if(this.requestParams.hasOwnProperty(t)){var a=this.requestParams[t];a instanceof Array?!a.length||1===a.length&&-1===a[0]||(e[t]=a):0!==a&&!a||-1===a||""!==a&&(e[t]=a)}return e},getTableData:function(){var e=this;this.tableParams.tableLoading=!0,Object(l["h"])(this.getSearchParam()).then((function(t){var a=[],r=(e.requestParams.pageIndex-1)*e.requestParams.pageSize;t.data.PageData.forEach((function(t,i){t["rowIdx"]=r+ ++i,t["updatedtime"]=e.$moment(t["updatedtime"]).format("YYYY-MM-DD HH:mm:ss"),t["createdtime"]=e.$moment(t["createdtime"]).format("YYYY-MM-DD HH:mm:ss"),a.push(t)})),e.tableParams.tableData=a,e.tableParams.total=t.data.TotalItems,e.tableParams.tableLoading=!1})).catch((function(t){e.$message.error({message:t.message||"请求出错"}),e.tableParams.tableLoading=!1}))},handleSizeChange:function(e){this.requestParams.pageIndex=1,this.requestParams.pageSize=e,this.getTableData()},handleCurrentChange:function(e){this.requestParams.pageIndex=e,this.getTableData()},handleStateChange:function(e){this.requestParams.pageIndex=1,this.getTableData()},handleSearch:function(e){this.requestParams.pageIndex=1,this.getTableData()},handleSwitchChange:function(e){var t=this,a=e.state;Object(l["I"])(e.id,0===a).catch((function(e){t.$message.error({message:e.message||"请求出错"}),t.getTableData()}))},handleCreated:function(){this.editParams.isModify=!1,this.editParams.drawerTitle="新增编码",this.editParams.drawerVisible=!0,this.editParams.submitLoading=!1,this.editParams.form={id:"",remark:"",codetag:"",prefix:"",value:1,length:0,state:0}},handleModify:function(e){this.editParams.isModify=!0,this.editParams.drawerTitle="修改编码",this.editParams.drawerVisible=!0,this.editParams.submitLoading=!1,this.editParams.form=JSON.parse(JSON.stringify(e))},handleSave:function(){var e=this;this.editParams.submitLoading=!0,this.$refs.syscodeForm.validate((function(t){if(!t)return e.editParams.submitLoading=!1,!1;Object(l["y"])(e.editParams.form,e.editParams.isModify).then((function(t){e.editParams.drawerVisible=!1,e.editParams.submitLoading=!1,e.getTableData()})).catch((function(t){e.$message.error({message:t.message||"请求出错"}),e.editParams.submitLoading=!1}))}))},handleDrawerClose:function(){this.getTableData()},resetForm:function(e){this.$refs[e].resetFields()},handleDeleted:function(e){var t=this;this.$confirm("此操作将永久删除编码, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(l["E"])([e.id]).then((function(e){return t.getTableData()})).catch((function(e){t.$message.error({message:e.message||"请求出错"})}))})).catch((function(){}))}}},s=n,o=a("2877"),c=Object(o["a"])(s,r,i,!1,null,"5915ed03",null);t["default"]=c.exports}}]);