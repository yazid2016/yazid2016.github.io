(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213338"],{ac55:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-container",[a("el-header",{staticClass:"content-header",attrs:{height:"auto"}},[a("div",{staticClass:"content-header-left"},[a("el-button-group",[a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreated}},[e._v("新增")])],1)],1),e._v(" "),a("div",{staticClass:"content-header-right"},[a("div",[a("el-select",{staticStyle:{width:"100px","margin-right":"10px"},attrs:{placeholder:"请选择"},on:{change:e.handleStateChange},model:{value:e.requestParams.state,callback:function(t){e.$set(e.requestParams,"state",t)},expression:"requestParams.state"}},e._l(e.stateOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("div",[a("el-input",{attrs:{clearable:"",placeholder:"请输入关键字"},on:{change:e.handleSearch},model:{value:e.requestParams.searchKey,callback:function(t){e.$set(e.requestParams,"searchKey",t)},expression:"requestParams.searchKey"}},[a("i",{staticClass:"el-icon-search el-input__icon content-header-search",attrs:{slot:"suffix"},on:{click:e.handleSearch},slot:"suffix"})])],1)])]),e._v(" "),a("el-main",{staticClass:"content-main"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableParams.tableLoading,expression:"tableParams.tableLoading"}],attrs:{"row-key":"rowIdx",height:e.tableParams.tableHeight,data:e.tableParams.tableData,border:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"rowIdx","column-key":"rowIdx",label:"序号",width:"50",align:"center",fixed:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"rolename","column-key":"rolename",label:"编码名称",align:"left","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"nickname","column-key":"nickname",label:"编码标识",width:"160",align:"left","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"ModuleAction","column-key":"ModuleAction",label:"前缀",width:"160",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"value","column-key":"value",label:"当前值",width:"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"length","column-key":"length",label:"长度",width:"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"state","column-key":"state",label:"状态",width:"90",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":0,"inactive-value":1},on:{change:function(t){return e.handleSwitchChange(n)}},model:{value:n.state,callback:function(t){e.$set(n,"state",t)},expression:"row.state"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"updatedtime","column-key":"updatedtime",label:"更新时间",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("i",{staticClass:"el-icon-time"}),e._v(" "),a("span",[e._v(e._s(n.updatedtime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"createdtime","column-key":"createdtime",label:"创建时间",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("i",{staticClass:"el-icon-time"}),e._v(" "),a("span",[e._v(e._s(n.createdtime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{"column-key":"key",label:"操作",width:"100",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{padding:"0px","margin-left":"2px"},attrs:{icon:"el-icon-edit",type:"text"},on:{click:function(a){return e.handleModify(t.row)}}}),e._v(" "),a("el-button",{staticStyle:{padding:"0px","margin-left":"2px"},attrs:{icon:"el-icon-delete",type:"text"},on:{click:function(a){return e.handleDeleted(t.row)}}})]}}])})],1)],1),e._v(" "),a("el-footer",{staticClass:"content-footer",attrs:{height:"auto"}},[a("el-pagination",{attrs:{"current-page":e.requestParams.pageIndex,"page-size":e.requestParams.pageSize,total:e.tableParams.total,"page-sizes":e.tableParams.pageSizeOptions,layout:e.tableParams.layoutOptions},on:{"update:currentPage":function(t){return e.$set(e.requestParams,"pageIndex",t)},"update:current-page":function(t){return e.$set(e.requestParams,"pageIndex",t)},"update:pageSize":function(t){return e.$set(e.requestParams,"pageSize",t)},"update:page-size":function(t){return e.$set(e.requestParams,"pageSize",t)},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"prev-click":e.handleCurrentChange,"next-click":e.handleCurrentChange}})],1)],1)],1)},l=[],r=(a("ac6a"),a("8593")),i={name:"UserRole",filters:{},components:{},props:{},data:function(){return{screenHeight:0,requestParams:{pageIndex:1,pageSize:10,orderby:"",sort:0,searchKey:"",state:-1},tableParams:{tableLoading:!1,tableHeight:0,tableColumns:[],tableData:[],total:0,layoutOptions:"total, sizes, prev, pager, next, jumper",pageSizeOptions:["10","20","30","50","100","200"],multipleSelection:[]}}},computed:{},watch:{},created:function(){},mounted:function(){var e=this;this.$nextTick((function(t){return e.initPage()}));var t=null;window.onresize=function(a){return function(a){t&&(clearTimeout(t),t=null),t=setTimeout((function(t){return e.setPageHeight()}),500)}()}},methods:{initPage:function(){this.setPageHeight(),this.getTableData()},setPageHeight:function(){this.screenHeight=document.body.clientHeight,this.tableParams.tableHeight=this.screenHeight-182},getTableColumns:function(){var e=this;this.tableParams.tableColumns=[{columnName:"rowIdx",columnLabel:"序号",columnWidth:58,align:"center",headerAlign:"center",sortable:!1,fixed:!0,show:!0},{columnName:"state",columnLabel:"状态",columnWidth:80,align:"center",headerAlign:"center",sortable:!1,fixed:!1,show:!0,formatter:function(t,a,n){var l=e.$createElement;return l("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":0,"inactive-value":1,value:n,rowid:t.id}})}}]},getSearchParam:function(){var e={};for(var t in this.requestParams)if(this.requestParams.hasOwnProperty(t)){var a=this.requestParams[t];a instanceof Array?!a.length||1===a.length&&-1===a[0]||(e[t]=a):0!==a&&!a||-1===a||""!==a&&(e[t]=a)}return e},getTableData:function(){var e=this;this.tableParams.tableLoading=!0,Object(r["o"])(this.getSearchParam()).then((function(t){var a=[],n=(e.requestParams.pageIndex-1)*e.requestParams.pageSize;t.data.PageData.forEach((function(t,l){t["rowIdx"]=n+ ++l,t["createdtime"]=e.$moment(t["createdtime"]).format("YYYY-MM-DD HH:mm:ss"),a.push(t)})),e.tableParams.tableData=a,e.tableParams.total=t.data.TotalItems,e.tableParams.tableLoading=!1})).catch((function(t){e.$message.error({message:t.message||"请求出错"}),e.tableParams.tableLoading=!1}))},handleSizeChange:function(e){this.requestParams.pageIndex=1,this.requestParams.pageSize=e,this.getTableData()},handleCurrentChange:function(e){this.requestParams.pageIndex=e,this.getTableData()},handleCreated:function(){},handleModify:function(e){},handleDeleted:function(e){},handleSwitchChange:function(e){console.log(e)},handleSwitchClick:function(e){alert(e)}}},s=i,o=a("2877"),c=Object(o["a"])(s,n,l,!1,null,"627a4d36",null);t["default"]=c.exports}}]);