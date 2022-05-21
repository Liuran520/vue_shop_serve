"use strict";(self["webpackChunkvue_shop"]=self["webpackChunkvue_shop"]||[]).push([[223],{6146:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),s("el-breadcrumb-item",[e._v("用户管理")]),s("el-breadcrumb-item",[e._v("用户列表")])],1),s("el-card",[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[s("el-input",{attrs:{clearable:"",placeholder:"请输入内容"},on:{clear:e.getUserList},model:{value:e.queryInfo.query,callback:function(t){e.$set(e.queryInfo,"query",t)},expression:"queryInfo.query"}},[s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getUserList},slot:"append"})],1)],1),s("el-col",{attrs:{span:6}},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("添加用户")])],1)],1),s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.userlist,border:"",stripe:""}},[s("el-table-column",{attrs:{label:"#",type:"index"}}),s("el-table-column",{attrs:{label:"姓名",prop:"username"}}),s("el-table-column",{attrs:{label:"邮箱",prop:"email"}}),s("el-table-column",{attrs:{label:"电话",prop:"mobile"}}),s("el-table-column",{attrs:{label:"角色",prop:"role_name"}}),s("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-switch",{on:{change:function(s){return e.userStateChanged(t.row)}},model:{value:t.row.mg_state,callback:function(s){e.$set(t.row,"mg_state",s)},expression:"scope.row.mg_state"}})]}}])}),s("el-table-column",{attrs:{label:"操作",width:"180px"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(s){return e.showEditDialog(t.row.id)}}}),s("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(s){return e.removeUserById(t.row.id)}}}),s("el-tooltip",{attrs:{effect:"dark",content:"分配角色",placement:"top",enterable:!1}},[s("el-button",{attrs:{type:"warning",icon:"el-icon-setting",size:"mini"},on:{click:function(s){return e.setRole(t.row)}}})],1)]}}])})],1),s("el-pagination",{attrs:{"current-page":e.queryInfo.pagenum,"page-sizes":[1,2,5,10],"page-size":e.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),s("el-dialog",{attrs:{title:"添加用户",visible:e.addDialogVisible,width:"50%"},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.addDialogClosed}},[s("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"70px"}},[s("el-form-item",{attrs:{label:"用户名",prop:"username"}},[s("el-input",{model:{value:e.addForm.username,callback:function(t){e.$set(e.addForm,"username",t)},expression:"addForm.username"}})],1),s("el-form-item",{attrs:{label:"密码",prop:"password"}},[s("el-input",{model:{value:e.addForm.password,callback:function(t){e.$set(e.addForm,"password",t)},expression:"addForm.password"}})],1),s("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[s("el-input",{model:{value:e.addForm.email,callback:function(t){e.$set(e.addForm,"email",t)},expression:"addForm.email"}})],1),s("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[s("el-input",{model:{value:e.addForm.mobile,callback:function(t){e.$set(e.addForm,"mobile",t)},expression:"addForm.mobile"}})],1)],1),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("确 定")])],1)],1),s("el-dialog",{attrs:{title:"修改用户",visible:e.editDialogVisible,width:"50%"},on:{"update:visible":function(t){e.editDialogVisible=t},close:e.editDialogClosed}},[s("el-form",{ref:"editFormRef",attrs:{model:e.editForm,rules:e.editFormRules,"label-width":"70px"}},[s("el-form-item",{attrs:{label:"用户名",prop:"username"}},[s("el-input",{attrs:{disabled:""},model:{value:e.editForm.username,callback:function(t){e.$set(e.editForm,"username",t)},expression:"editForm.username"}})],1),s("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[s("el-input",{model:{value:e.editForm.email,callback:function(t){e.$set(e.editForm,"email",t)},expression:"editForm.email"}})],1),s("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[s("el-input",{model:{value:e.editForm.mobile,callback:function(t){e.$set(e.editForm,"mobile",t)},expression:"editForm.mobile"}})],1)],1),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:e.editUserInfo}},[e._v("确 定")])],1)],1),s("el-dialog",{attrs:{title:"提示",visible:e.setRoleDialogVisible,width:"50%"},on:{"update:visible":function(t){e.setRoleDialogVisible=t},close:e.setRoleDialogClosed}},[s("div",[s("p",[e._v("当前的用户："+e._s(e.userInfo.username))]),s("p",[e._v("当前的角色:"+e._s(e.userInfo.role_name))]),s("p",[e._v("分配新角色： "),s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.selectedRoleId,callback:function(t){e.selectedRoleId=t},expression:"selectedRoleId"}},e._l(e.rolesList,(function(e){return s("el-option",{key:e.id,attrs:{label:e.roleName,value:e.id}})})),1)],1)]),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.setRoleDialogVisible=!1}}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:e.saveRoleInfo}},[e._v("确 定")])],1)])],1)},a=[],i=(s(1703),{data(){var e=(e,t,s)=>{const r=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;if(r.test(t))return s();s(new Error("请输入合法的邮箱"))},t=(e,t,s)=>{const r=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;if(r.test(t))return s();s(new Error("请输入合法的手机号"))};return{queryInfo:{query:"",pagenum:1,pagesize:2},userlist:[],total:0,addDialogVisible:!1,addForm:{username:"",password:"",email:"",mobile:""},addFormRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:10,message:"长度在 3 到 10 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:15,message:"长度在 6 到 15 个字符",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:t,trigger:"blur"}]},editDialogVisible:!1,editForm:{},editFormRules:{email:[{required:!0,message:"请输入用户邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"请输入用户手机",trigger:"blur"},{validator:t,trigger:"blur"}]},setRoleDialogVisible:!1,userInfo:{},rolesList:[],selectedRoleId:""}},created(){this.getUserList()},methods:{async getUserList(){const{data:e}=await this.$http.get("users",{params:this.queryInfo});this.userlist=e.data.users,this.total=e.data.total},handleSizeChange(e){this.queryInfo.pagesize=e,this.getUserList()},handleCurrentChange(e){this.queryInfo.pagenum=e,this.getUserList()},async userStateChanged(e){const{data:t}=await this.$http.put(`users/${e.id}/state/${e.mg_state}`);if(200!==t.meta.status)return e.mg_state=!e.mg_state,this.$message.error("更新用户状态失败！");this.$message.success("更新用户状态成功！")},addDialogClosed(){this.$refs.addFormRef.resetFields()},addUser(){this.$refs.addFormRef.validate((async e=>{if(!e)return;const{data:t}=await this.$http.post("users",this.addForm);201!==t.meta.status&&this.$message.error("添加用户失败"),this.$message.success("添加用户成功！"),this.addDialogVisible=!1,this.getUserList()}))},async showEditDialog(e){const{data:t}=await this.$http.get("users/"+e);if(200!==t.meta.status)return this.$message.error("查询用户信息失败！");this.editForm=t.data,this.editDialogVisible=!0},editDialogClosed(){this.$refs.editFormRef.resetFields()},editUserInfo(){this.$refs.editFormRef.validate((async e=>{if(!e)return;const{data:t}=await this.$http.put("users/"+this.editForm.id,{email:this.editForm.email,mobile:this.editForm.mobile});if(200!==t.meta.status)return this.$message.error("更新用户信息失败！");this.editDialogVisible=!1,this.getUserList(),this.$message.success("更新用户信息成功！")}))},async removeUserById(e){const t=await this.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((e=>e));if("confirm"!==t)return this.$message.info("已取消删除");const{data:s}=await this.$http.delete("users/"+e);if(200!==s.meta.status)return this.$message.error("删除用户失败！");this.$message.success("删除用户成功！"),this.getUserList()},async setRole(e){this.userInfo=e;const{data:t}=await this.$http.get("roles");if(200!==t.meta.status)return this.$message.error("获取角色列表失败！");this.rolesList=t.data,this.setRoleDialogVisible=!0},setRoleDialogClosed(){this.selectedRoleId="",this.userInfo={}},async saveRoleInfo(){if(!this.selectedRoleId)return this.$message.error("请选择要分配的角色！");const{data:e}=await this.$http.put(`users/${this.userInfo.id}/role`,{rid:this.selectedRoleId});if(200!==e.meta.status)return this.$message.error("更新角色失败！");this.$message.success("更新角色成功！"),this.getUserList(),this.setRoleDialogVisible=!1}}}),l=i,o=s(1001),n=(0,o.Z)(l,r,a,!1,null,"7e1080a3",null),d=n.exports},3759:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),s("el-breadcrumb-item",[e._v("权限管理")]),s("el-breadcrumb-item",[e._v("权限列表")])],1),s("el-card",[s("el-table",{attrs:{data:e.rightsList,border:"",stripe:""}},[s("el-table-column",{attrs:{label:"#",type:"index"}}),s("el-table-column",{attrs:{label:"权限名称",prop:"authName"}}),s("el-table-column",{attrs:{label:"路径",prop:"path"}}),s("el-table-column",{attrs:{label:"权限等级",prop:"level"},scopedSlots:e._u([{key:"default",fn:function(t){return["0"===t.row.level?s("el-tag",[e._v("一级")]):"1"===t.row.level?s("el-tag",{attrs:{type:"success"}},[e._v("二级")]):s("el-tag",{attrs:{type:"warning"}},[e._v("三级")])]}}])})],1)],1)],1)},a=[],i={data(){return{rightsList:[]}},created(){this.getRightsList()},methods:{async getRightsList(){const{data:e}=await this.$http.get("rights/list");if(200!==e.meta.status)return this.$message.error("获取权限列表失败！");this.rightsList=e.data}}},l=i,o=s(1001),n=(0,o.Z)(l,r,a,!1,null,"094ac39a",null),d=n.exports},9625:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),s("el-breadcrumb-item",[e._v("权限管理")]),s("el-breadcrumb-item",[e._v("角色列表")])],1),s("el-card",[s("el-row",[s("el-col",[s("el-button",{attrs:{type:"primary"}},[e._v("添加角色")])],1)],1),s("el-table",{attrs:{data:e.rolelist,border:"",stripe:"","row-key":"id"}},[s("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.children,(function(r,a){return s("el-row",{key:r.id,class:["bdbottom",0===a?"bdtop":"","vcenter"]},[s("el-col",{attrs:{span:5}},[s("el-tag",{attrs:{closable:""},on:{close:function(s){return e.removeRightById(t.row,r.id)}}},[e._v(e._s(r.authName))]),s("i",{staticClass:"el-icon-caret-right"})],1),s("el-col",{attrs:{span:19}},e._l(r.children,(function(r,a){return s("el-row",{key:r.id,class:[0===a?"":"bdtop","vcenter"]},[s("el-col",{attrs:{span:6}},[s("el-tag",{attrs:{type:"success",closable:""},on:{close:function(s){return e.removeRightById(t.row,r.id)}}},[e._v(e._s(r.authName))]),s("i",{staticClass:"el-icon-caret-right"})],1),s("el-col",{attrs:{span:18}},e._l(r.children,(function(r){return s("el-tag",{key:r.id,attrs:{type:"warning",closable:""},on:{close:function(s){return e.removeRightById(t.row,r.id)}}},[e._v(e._s(r.authName))])})),1)],1)})),1)],1)}))}}])}),s("el-table-column",{attrs:{type:"index",label:"#"}}),s("el-table-column",{attrs:{label:"角色名称",prop:"roleName"}}),s("el-table-column",{attrs:{label:"角色描述",prop:"roleDesc"}}),s("el-table-column",{attrs:{label:"操作",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit"}},[e._v("编辑")]),s("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"}},[e._v("删除")]),s("el-button",{attrs:{size:"mini",type:"warning",icon:"el-icon-setting"},on:{click:function(s){return e.showSetRightDialog(t.row)}}},[e._v("分配权限")])]}}])})],1)],1),s("el-dialog",{attrs:{title:"分配权限",visible:e.setRightDialogVisible,width:"50%"},on:{"update:visible":function(t){e.setRightDialogVisible=t},close:e.setRightDialogClosed}},[s("el-tree",{ref:"treeRef",attrs:{data:e.rightslist,"show-checkbox":"","node-key":"id","default-expand-all":"","default-checked-keys":e.defKeys,props:e.treeProps}}),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.setRightDialogVisible=!1}}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:e.allotRights}},[e._v("确 定")])],1)],1)],1)},a=[],i={data(){return{rolelist:[],setRightDialogVisible:!1,rightslist:[],treeProps:{label:"authName",children:"children"},defKeys:[],roleId:""}},created(){this.getRolesList()},methods:{async getRolesList(){const{data:e}=await this.$http.get("roles");if(200!==e.meta.status)return this.$message.error("获取角色列表失败！");this.rolelist=e.data},async removeRightById(e,t){const s=await this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((e=>e));if("confirm"!==s)return this.$message.info("取消了删除！");const{data:r}=await this.$http.delete(`roles/${e.id}/rights/${t}`);if(200!==r.meta.status)return this.$message.error("删除权限失败！");e.children=r.data},async showSetRightDialog(e){this.roleId=e.id;const{data:t}=await this.$http.get("rights/tree");if(200!==t.meta.status)return this.$message.error("获取权限数据失败！");this.rightslist=t.data,this.getLeafKeys(e,this.defKeys),this.setRightDialogVisible=!0},getLeafKeys(e,t){if(!e.children)return t.push(e.id);e.children.forEach((e=>this.getLeafKeys(e,t)))},setRightDialogClosed(){this.defKeys=[]},async allotRights(){const e=[...this.$refs.treeRef.getCheckedKeys(),...this.$refs.treeRef.getHalfCheckedKeys()],t=e.join(","),{data:s}=await this.$http.post(`roles/${this.roleId}/rights`,{rids:t});if(200!==s.meta.status)return this.$message.error("分配权限失败！");this.$message.success("分配权限成功！"),this.getRolesList(),this.setRightDialogVisible=!1}}},l=i,o=s(1001),n=(0,o.Z)(l,r,a,!1,null,"0f55aaab",null),d=n.exports}}]);
//# sourceMappingURL=Users_Rights_Roles.413ad9c4.js.map