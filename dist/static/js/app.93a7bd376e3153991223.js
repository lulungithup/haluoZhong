webpackJsonp([1],{"+MXL":function(e,t,a){"use strict";function s(e){a("z/+U")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("Ymj8"),l=a.n(n),o=a("wclf"),i=a("VU/8"),r=s,c=i(l.a,o.a,r,"data-v-6cad5777",null);t.default=c.exports},0:function(e,t){},1:function(e,t){},2:function(e,t){},"2M6f":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{orders:"",input3:"",value1:"",value2:"",value3:"",value4:"",contract:"",val1:"",val2:"",val3:"",val4:"",val5:"",val6:"",val7:"",val8:"",val9:"",val10:"",texta:"",tableDatas:[],tableParts:[]}},methods:{handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},getListData:function(){this.$api.relogin(),this.getOrderList()},getOrderList:function(){var e=this;sessionStorage.removeItem("relogin_flag");var t=sessionStorage.getItem("login_time"),a=sessionStorage.getItem("refresh_token"),s=sessionStorage.getItem("expires_in"),n=Date.parse(new Date),l=""+n,o=l.substring(0,10);parseFloat(o)-parseFloat(t)>parseFloat(s)-60?(sessionStorage.setItem("relogin_flag","timeout"),httpService("POST","/passport/relogin",this.$qs.stringify(a),function(t){if(200==t.data.code){sessionStorage.setItem("access_token",data.access_token),sessionStorage.setItem("expires_in",data.expires_in),sessionStorage.setItem("refresh_token",data.refresh_token),sessionStorage.setItem("token_type",data.token_type),sessionStorage.setItem("user_id",data.user_id);var a=Date.parse(new Date),s=""+a,n=s.substring(0,10);sessionStorage.setItem("login_time",n),e.getOrderListpre()}},function(e){})):this.getOrderListpre()},getOrderListpre:function(){var e=this,t=sessionStorage.getItem("orderId");this.$api.get("u8/order-detail?id="+t,null,function(t){if(200==t.data.code){var a=t.data.data;e.orders=a.id,e.value1=a.create_time;var s=JSON.parse(a.extension);e.value3=s.agent_user_information.user_name,e.value4=a.customer,e.input3=s.customer_order_number,e.val2=a.discount+"%",e.val1=s.goods_total,e.val3=s.discount_rest_amount,e.texta=s.remark,e.value2=s.receipt_date,e.val4=a.traffic_fee,e.val5=a.colour_fee,e.val6=a.install_fee,e.val7=a.attachment_fee,e.val8=a.payment_type,e.contract=s.project_number;var n=parseInt(e.val3)+parseInt(e.val4)+parseInt(e.val5)+parseInt(e.val6)+parseInt(e.val7);e.val10=n,e.val9=a.gathering_type,e.tableDatas=a.orders,e.tableParts=""}},function(t){"Error: Request failed with status code 401"==t&&(alert("您的账号可能在其他设备上登录，请重新登录！"),sessionStorage.clear(),e.$router.push("/login"))})}},mounted:function(){this.getListData()}}},"9aph":function(e,t){},D9m3:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"content_main"}},[a("p",{staticClass:"title_login name dis_b"},[e._v("HOLO哈啰通用中台")]),e._v(" "),a("p",{staticClass:"title_login version dis_b"},[e._v("v1.0.0")]),e._v(" "),a("el-form",{staticClass:"login-container demo-ruleForm"},[a("el-form-item",[a("el-input",{staticClass:"account",attrs:{type:"text","auto-complete":"off",placeholder:"请输入账号"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),e._v(" "),a("el-form-item",[a("el-input",{staticClass:"passWord",attrs:{type:"password","auto-complete":"off",placeholder:"请输入密码"},model:{value:e.passWord,callback:function(t){e.passWord=t},expression:"passWord"}})],1),e._v(" "),a("el-checkbox",{staticStyle:{margin:"0px 50% 20px 0px"},attrs:{checked:""},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("记住密码")]),e._v(" "),a("el-form-item",{staticStyle:{width:"100%"}},[a("el-button",{staticStyle:{width:"70%","background-color":"#6CAAF0"},attrs:{type:"primary",loading:e.logining},nativeOn:{click:function(t){t.preventDefault(),e.login(t)}}},[e._v("登录")])],1)],1),e._v(" "),e._m(0)],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{display:"none"},attrs:{id:"error"}},[a("span",{attrs:{id:"errmsg"}})])}],l={render:s,staticRenderFns:n};t.a=l},DO6O:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("div",[a("span",{staticClass:"spp",on:{click:e.getListData}},[e._v("订单信息")]),e._v(" "),a("div",{staticClass:"order-box order-pages he-order"},[a("ul",{staticClass:"order-ul or-ull"},[a("li",[a("span",{staticClass:"or-spp2"},[e._v("订单号:")]),a("span",{staticClass:"kh-name"},[e._v(e._s(e.orders))])]),e._v(" "),a("li",[a("span",{staticClass:"or-spp2"},[e._v("订单日期:")]),a("span",{staticClass:"kh-name"},[e._v(e._s(e.value1))])]),e._v(" "),a("li",[a("span",{staticClass:"or-spp2"},[e._v("收货日期:")]),a("span",{staticClass:"kh-name"},[e._v(e._s(e.value2))])]),e._v(" "),a("li",[a("span",{staticClass:"or-spp2"},[e._v("业务员:")]),a("span",{staticClass:"kh-name"},[e._v(e._s(e.value3))])]),e._v(" "),a("li",[a("span",{staticClass:"or-spp2"},[e._v("客户名称:")]),a("span",{staticClass:"kh-name"},[e._v(e._s(e.value4))])]),e._v(" "),a("li",[a("span",{staticClass:"or-spp2"},[e._v("客户订单号:")]),a("span",{staticClass:"kh-name"},[e._v(e._s(e.input3))])]),e._v(" "),a("li",[a("span",{staticClass:"or-spp2"},[e._v("项目合同号:")]),a("span",{staticClass:"kh-name"},[e._v(e._s(e.contract))])])]),e._v(" "),a("div",{staticClass:"top-bzBox"},[a("span",{staticClass:"top-rr"},[e._v("备注:")]),e._v(" "),a("span",{staticClass:"top-span"},[e._v(e._s(e.texta))])])])]),e._v(" "),a("div",[a("span",{staticClass:"spp"},[e._v("金额信息")]),e._v(" "),a("div",{staticClass:"order-box orderl"},[a("ul",{staticClass:"mon-ul"},[a("li",[a("span",{staticClass:"fred sum"},[e._v("总金额:")]),a("span",{staticClass:"fred f9"},[e._v(e._s(e.val10))])])]),e._v(" "),a("ul",{staticClass:"order-lefp"},[a("li",[a("span",{staticClass:"or-spp2"},[e._v("商品总价:")]),a("span",{staticClass:"f9"},[e._v(e._s(e.val1))])]),e._v(" "),a("li",[a("span",{staticClass:"or-spp2"},[e._v("折扣率:")]),a("span",{staticClass:"f9"},[e._v(e._s(e.val2))])]),e._v(" "),a("li",[a("span",{staticClass:"or-spp2"},[e._v("折后总价:")]),a("span",{staticClass:"f9"},[e._v(e._s(e.val3))])]),e._v(" "),a("li",[a("span",{staticClass:"or-spp2"},[e._v("运费:")]),a("span",{staticClass:"f9"},[e._v(e._s(e.val4))])]),e._v(" "),a("li",[a("span",{staticClass:"or-spp2"},[e._v("喷色费:")]),a("span",{staticClass:"f9"},[e._v(e._s(e.val5))])]),e._v(" "),a("li",[a("span",{staticClass:"or-spp2"},[e._v("安装费:")]),a("span",{staticClass:"f9"},[e._v(e._s(e.val6))])]),e._v(" "),a("li",[a("span",{staticClass:"or-spp2"},[e._v("配件费:")]),a("span",{staticClass:"f9"},[e._v(e._s(e.val7))])]),e._v(" "),a("li",[a("span",{staticClass:"or-spp2"},[e._v("付款协议:")]),a("span",{staticClass:"f9"},[e._v(e._s(e.val8))])]),e._v(" "),a("li",[a("span",{staticClass:"or-spp2"},[e._v("收款协议:")]),a("span",{staticClass:"f9"},[e._v(e._s(e.val9))])])])])]),e._v(" "),a("div",[a("span",{staticClass:"spp"},[e._v("商品信息")]),e._v(" "),a("div",{staticClass:"order-box "},[a("div",{staticClass:"o-div"},[a("el-table",{attrs:{data:e.tableDatas,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"存货编码"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"存货名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"price",label:"单价"}}),e._v(" "),a("el-table-column",{attrs:{prop:"count",label:"数量"}}),e._v(" "),a("el-table-column",{attrs:{prop:"amount",label:"金额"}})],1)],1)])]),e._v(" "),a("div",{staticClass:"partsBox"},[a("span",{staticClass:"spp"},[e._v("配件信息")]),e._v(" "),a("div",{staticClass:"order-box "},[a("div",{staticClass:"parts-div"},[a("el-table",{attrs:{data:e.tableParts,border:""}},[a("el-table-column",{attrs:{prop:"price",label:"价格"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"配件编码"}}),e._v(" "),a("el-table-column",{attrs:{prop:"count",label:"数量"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"配件名称"}})],1)],1)])])])},n=[],l={render:s,staticRenderFns:n};t.a=l},F0gf:function(e,t){},G9Cc:function(e,t){},KIdN:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var s=a("uXZL"),n=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default={name:"order-page",data:function(){return{logining:!1,nn:"",orders:"",input3:"",value1:"",value2:"",value3:"",value4:"",contract:"",val1:"",val2:"",val3:"",val4:"",val5:"",val6:"",val7:"",val8:"",val9:"",val10:"",texta:"",wb:"",tableHeader:[],tableTbody:[],options:[{value:"demo",label:"demo"}],options1:[{value:"demo",label:"demo"}],options2:[{value:"普通销售",label:"普通销售"},{value:"分期付款",label:"分期付款"}],options3:[{value:"款到发货",label:"款到发货"},{value:"发货30天回款",label:"发货30天回款"},{value:"发货60天回款",label:"发货60天回款"},{value:"发货月结30天回款",label:"发货月结30天回款"},{value:"货到付款",label:"货到付款"},{value:"票到90天回款",label:"票到90天回款"}],tableDatas:[],fileList:[{name:"",url:""}],cols:[{label:"配件名称",prop:"配件名称",type:"normal"},{label:"价格",prop:"价格",type:"normal"},{label:"配件编码",prop:"配件编码",type:"normal"},{label:"数量",prop:"数量",type:"normal"}]}},methods:{submit:function(){var e=this;sessionStorage.removeItem("relogin_flag");var t=sessionStorage.getItem("login_time"),a=sessionStorage.getItem("refresh_token"),s=sessionStorage.getItem("expires_in"),n=Date.parse(new Date),l=""+n,o=l.substring(0,10);parseFloat(o)-parseFloat(t)>parseFloat(s)-60?(sessionStorage.setItem("relogin_flag","timeout"),httpService("POST","/passport/relogin",this.$qs.stringify(a),function(t){if(200==t.data.code){sessionStorage.setItem("access_token",data.access_token),sessionStorage.setItem("expires_in",data.expires_in),sessionStorage.setItem("refresh_token",data.refresh_token),sessionStorage.setItem("token_type",data.token_type),sessionStorage.setItem("user_id",data.user_id);var a=Date.parse(new Date),s=""+a,n=s.substring(0,10);sessionStorage.setItem("login_time",n),e.submitpre()}},function(e){})):this.submitpre()},submitpre:function(){var e=this,t=this.tableTbody;for(var a in t)t[a].name=t[a]["配件名称"],t[a].code=t[a]["配件编码"],t[a].price=t[a]["价格"],t[a].number=t[a]["数量"],delete t[a]["配件名称"],delete t[a]["配件编码"],delete t[a]["价格"],delete t[a]["数量"];var s=JSON.stringify(t);sessionStorage.setItem("formData",s);var n=sessionStorage.getItem("orderId"),l=(sessionStorage.getItem("App_SomainStatu"),{id:n,excel:s,create_time:this.nn,user_name:this.value3,customer:this.value4,customer_order_number:this.input3,amount:this.val10,discount:this.val2,goods_total:this.val1,discount_rest_amount:this.val3,remark:this.texta,order_data:this.value2,traffic_fee:this.val4,color_fee:this.val5,install_fee:this.val6,attachment_fee:this.val7,payment_type:this.val8,gatherting_type:this.val9,project_number:this.contract});this.logining=!0,console.log(s),this.$api.post("/u8/deal-order",this.$qs.stringify(l),function(t){200==t.data.code&&(e.logining=!1,e.$router.push("/home-order"))})},request:function(){getListData(0)},handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},importExcel:function(e){var t=this;if(e.files){var a=e.files[0],s=a.name.split(".")[1];if(!["xlsx","xlc","xlm","xls","xlt","xlw","csv"].some(function(e){return e===s}))return void alert("格式错误！请重新选择");this.file2Xce(a).then(function(e){if(e&&e.length>0){t.tableHeader=Object.keys(e[0]),t.tableTbody=e;for(var a=0;a<e.length;a++){var s=e[a]["价格"];void 0==e[a]["价格"]?e[a]["价格"]="":e[a]["价格"]=parseFloat(s)}}})}},file2Xce:function(e){return new Promise(function(t,a){var s=new FileReader;s.onload=function(e){var a=e.target.result;this.wb=n.default.read(a,{type:"binary"}),t(n.default.utils.sheet_to_json(this.wb.Sheets[this.wb.SheetNames[0]]))},s.readAsBinaryString(e)})},delExcel:function(){this.tableTbody="",e("#file1").val("")},getListData:function(){this.getOrderList()},getOrderList:function(){var e=this;sessionStorage.removeItem("relogin_flag");var t=sessionStorage.getItem("login_time"),a=sessionStorage.getItem("refresh_token"),s=sessionStorage.getItem("expires_in"),n=Date.parse(new Date),l=""+n,o=l.substring(0,10);parseFloat(o)-parseFloat(t)>parseFloat(s)-60?(sessionStorage.setItem("relogin_flag","timeout"),httpService("POST","/passport/relogin",this.$qs.stringify(a),function(t){if(200==t.data.code){sessionStorage.setItem("access_token",data.access_token),sessionStorage.setItem("expires_in",data.expires_in),sessionStorage.setItem("refresh_token",data.refresh_token),sessionStorage.setItem("token_type",data.token_type),sessionStorage.setItem("user_id",data.user_id);var a=Date.parse(new Date),s=""+a,n=s.substring(0,10);sessionStorage.setItem("login_time",n),e.getOrderListpre()}},function(e){})):this.getOrderListpre()},getOrderListpre:function(){var e=this,t=sessionStorage.getItem("orderId");this.$api.get("u8/order-detail?id="+t,null,function(t){if(200==t.data.code){var a=t.data.data;e.orders=a.id,e.nn=a.create_time;var s=JSON.parse(a.extension);e.value3=s.agent_user_information.user_name,e.value4=a.customer,e.input3=s.customer_order_number,e.val2=a.discount+"%",e.val1=s.goods_total,e.val3=s.discount_rest_amount,e.texta=s.remark,e.value2=s.receipt_date,e.val4=a.traffic_fee,e.val5=a.colour_fee,e.val6=a.install_fee,e.val7=a.attachment_fee,e.val8=a.payment_type,e.contract=s.project_number;var n=parseInt(e.val3)+parseInt(e.val4)+parseInt(e.val5)+parseInt(e.val6)+parseInt(e.val7);e.val10=n,e.val9=a.gathering_type,e.tableDatas=a.orders}},function(t){"Error: Request failed with status code 401"==t&&(alert("您的账号可能在其他设备上登录，请重新登录！"),e.$router.push("/login"))})}},mounted:function(){this.getListData(0)}}}).call(t,a("7t+N"))},M93x:function(e,t,a){"use strict";function s(e){a("9aph"),a("dI9y")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("xJD8"),l=a.n(n),o=a("YZYr"),i=a("VU/8"),r=s,c=i(l.a,o.a,r,null,null);t.default=c.exports},NHnr:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var n=a("7+uW"),l=s(n),o=a("mw3O"),i=s(o),r=a("M93x"),c=s(r),u=a("YaEn"),p=s(u),v=a("YpVX"),d=s(v),f=a("zL8q"),_=s(f);a("q8zI"),l.default.use(_.default),l.default.prototype.$ajax="axios",l.default.prototype.$qs=i.default,l.default.prototype.$api=d.default,l.default.config.productionTip=!1,p.default.beforeEach(function(e,t,a){"/login"==e.path&&sessionStorage.removeItem("name"),sessionStorage.getItem("name")||"/login"==e.path?a():a({path:"/login"})}),new l.default({el:"#app",router:p.default,template:"<App/>",components:{App:c.default}})},Ntyz:function(e,t,a){"use strict";function s(e){a("qfM4"),a("fKCt")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("OYY2"),l=a.n(n),o=a("D9m3"),i=a("VU/8"),r=s,c=i(l.a,o.a,r,"data-v-57109a22",null);t.default=c.exports},"OW/F":function(e,t){},OYY2:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function n(){setTimeout(function(){(0,i.default)("#error").hide()},2e3)}Object.defineProperty(t,"__esModule",{value:!0});var l=a("+MXL"),o=(s(l),a("7t+N")),i=s(o),r=a("mtWM");s(r),a("YpVX");t.default={name:"login",data:function(){return{logining:!1,url:"/home",username:"",passWord:"",checked:!0}},methods:{login:function(){this.loginpre()},loginpre:function(){var e=this;if(""==this.username||""==this.passWord)(0,i.default)("#error").show(),(0,i.default)("#errmsg").html("用户名或密码不能为空"),n();else{this.logining=!0;var t={username:this.username,password:this.passWord},a=JSON.parse(sessionStorage.getItem("user"));this.$api.post("/passport/login",this.$qs.stringify(t),function(t){if(200==t.data.code){sessionStorage.setItem("user",JSON.stringify(a));var s=t.data.data;sessionStorage.setItem("access_token",s.access_token),sessionStorage.setItem("expires_in",s.expires_in),sessionStorage.setItem("refresh_token",s.refresh_token),sessionStorage.setItem("token_type",s.token_type),sessionStorage.setItem("user_id",s.user_id);var l=Date.parse(new Date),o=""+l,r=o.substring(0,10);sessionStorage.setItem("login_time",r),e.$api.get("/users/me",null,function(t){if(console.log(t),200==t.data.code){var a=t.data.data;sessionStorage.setItem("name",a.name),e.$router.push({path:"/home-order"})}},function(e){}),e.logining=!1}else 610==t.data.code?(e.logining=!1,(0,i.default)("#error").show(),(0,i.default)("#errmsg").html("用户名或密码错误"),n()):(e.logining=!1,(0,i.default)("#error").show(),(0,i.default)("#errmsg").html("登录失败"),n())},function(e){})}}}}},QV2m:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple title dis_in"},[e._v("\n  \t\t\t"+e._s(e.SysNanme)+"\n  \t\t\t")]),e._v(" "),a("div",{staticClass:"grid-content bg-purple right dis_in"},[a("span",{staticClass:"telPhone",model:{value:e.telephoneNum,callback:function(t){e.telephoneNum=t},expression:"telephoneNum"}},[e._v(e._s(e.telephoneNum))]),e._v(" "),a("button",{staticClass:"quiteBtn",on:{click:e.quite}},[e._v("退出")])]),e._v(" "),a("div",{staticClass:"lineTop"})])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:3}},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2",theme:"light"},on:{open:e.handleOpen,close:e.handleClose,select:e.handleSelect}},[a("el-submenu",{attrs:{index:"1"}},[a("template",{attrs:{slot:"title"},slot:"title"},[e._v("商品管理")]),e._v(" "),a("el-menu-item-group",{attrs:{title:"分组一"}},[a("el-menu-item",{attrs:{index:"1-1"}},[e._v("选项1")]),e._v(" "),a("el-menu-item",{attrs:{index:"1-2"}},[e._v("选项2")])],1),e._v(" "),a("el-menu-item-group",{attrs:{title:"分组二"}},[a("el-menu-item",{attrs:{index:"1-3"}},[e._v("图片上传")])],1),e._v(" "),a("el-submenu",{attrs:{index:"1-4"}},[a("template",{attrs:{slot:"title"},slot:"title"},[e._v("选项4")]),e._v(" "),a("el-menu-item",{attrs:{index:"1-4-1"}},[e._v("选项1")])],2)],2),e._v(" "),a("el-menu-item",{attrs:{index:"2"}},[e._v("订单管理")]),e._v(" "),a("el-menu-item",{attrs:{index:"3"}},[e._v("奖金管理")])],1),e._v(" "),a("div",{staticClass:"lineLeft"})],1),e._v(" "),a("el-col",{attrs:{span:21}},[a("section",{staticClass:"content-container"},[a("router-view")],1)])],1)],1)},n=[],l={render:s,staticRenderFns:n};t.a=l},WAyV:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{token:"",imageUrl:""}},methods:{PreviewImage:function(t){var a=this,s=t.target.files[0],n=new FormData;console.log("filePath====="+s),console.log("上传token======"+this.token),n.append("file",s),n.append("token",this.token),e.ajax({url:"http://upload.qiniu.com/",type:"POST",dataType:"json",cache:!1,data:n,processData:!1,contentType:!1}).done(function(e){alert("jjjjjjjj"),a.imageUrl="http://ozebhig78.bkt.clouddn.com/"+e.key,console.log(a.imageUrl)}).fail(function(e){console.log("error")})},shuaxin:function(){}},mounted:function(){var e=this;this.$api.get("/users/H0000159ca2ea7adc1c853395/upload_token",null,function(t){200==t.data.code&&(console.log("token"+t.data.data.token),e.token=t.data.data.token,console.log("data里面的token"+e.token))}),this.shuaxin()}}}).call(t,a("7t+N"))},Xim3:function(e,t){},YZYr:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container",attrs:{id:"app"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)},n=[],l={render:s,staticRenderFns:n};t.a=l},YaEn:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),l=s(n),o=a("/ocq"),i=s(o),r=a("Ntyz"),c=(s(r),a("lyB/")),u=s(c),p=a("+MXL"),v=(s(p),a("m1Og")),d=(s(v),a("p4bm")),f=(s(d),a("w6Rr"));s(f);l.default.use(i.default),t.default=new i.default({routes:[{path:"/login",component:function(e){return new Promise(function(e){e()}).then(function(){var t=[a("Ntyz")];e.apply(null,t)}.bind(this)).catch(a.oe)}},{path:"/",component:u.default,children:[{path:"/home-order",component:function(e){return new Promise(function(e){e()}).then(function(){var t=[a("+MXL")];e.apply(null,t)}.bind(this)).catch(a.oe)}},{path:"/order-page",component:function(e){return new Promise(function(e){e()}).then(function(){var t=[a("m1Og")];e.apply(null,t)}.bind(this)).catch(a.oe)}},{path:"/order-pages",component:function(e){return new Promise(function(e){e()}).then(function(){var t=[a("p4bm")];e.apply(null,t)}.bind(this)).catch(a.oe)}},{path:"/uploadImages",component:function(e){return new Promise(function(e){e()}).then(function(){var t=[a("w6Rr")];e.apply(null,t)}.bind(this)).catch(a.oe)}}]}]})},Ymj8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{input1:"",input2:"",input3:"",value1:"",value2:"",value3:"",total:0,page:1,listLoading:!1,tableDatas:[],options:[{value:"选项1",label:"所有"},{value:"选项2",label:"已生成"},{value:"选项3",label:"未生成"}],multipleSelection:[]}},methods:{handleSizeChange:function(e){console.log("每页 ${val} 条")},handleCurrentChange:function(e){console.log("当前页: ${val}"),this.page=e,this.getListData(this.page),sessionStorage.setItem("page",e)},toggleSelection:function(e){var t=this;e?e.forEach(function(e){t.$refs.multipleTable.toggleRowSelection(e)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){this.multipleSelection=e},handleClick:function(e,t){sessionStorage.setItem("orderId",this.tableDatas[t].id);sessionStorage.getItem("orderId");"已生成"==e?this.$router.push("/order-pages"):this.$router.push("/order-page")},getListData:function(e){this.getOrderInfoList(e)},getOrderInfoList:function(e){var t=this;sessionStorage.removeItem("relogin_flag");var a=sessionStorage.getItem("login_time"),s=sessionStorage.getItem("refresh_token"),n=sessionStorage.getItem("expires_in"),l=Date.parse(new Date),o=""+l,i=o.substring(0,10);parseFloat(i)-parseFloat(a)>parseFloat(n)-60?(sessionStorage.setItem("relogin_flag","timeout"),httpService("POST","/passport/relogin",this.$qs.stringify(s),function(a){if(200==a.data.code){sessionStorage.setItem("access_token",data.access_token),sessionStorage.setItem("expires_in",data.expires_in),sessionStorage.setItem("refresh_token",data.refresh_token),sessionStorage.setItem("token_type",data.token_type),sessionStorage.setItem("user_id",data.user_id);var s=Date.parse(new Date),n=""+s,l=n.substring(0,10);sessionStorage.setItem("login_time",l),t.getOrderInfoListpre(e)}},function(e){})):this.getOrderInfoListpre(e)},getOrderInfoListpre:function(e){var t=this;1==this.page&&(console.log(this.page),sessionStorage.setItem("page",1));var a={pageNum:e,pageSize:10};this.$api.post("/u8/get-order",this.$qs.stringify(a),function(e){if(console.log(e),200==e.data.code){t.total=parseInt(e.data.data.count),t.tableDatas=e.data.data.result;for(var a=0;a<t.tableDatas.length;a++){var s=t.tableDatas[a].extension,n=JSON.parse(s);2==t.tableDatas[a].status?t.tableDatas[a].status="已生成":t.tableDatas[a].status="未生成",t.tableDatas[a].sale_person=n.sale_person,console.log(t.tableDatas[a].sale_person)}t.listLoading=!1}},function(e){"Error: Request failed with status code 401"==e&&(alert("您的账号可能在其他设备上登录，请重新登录！"),sessionStorage.clear(),t.$router.push("/login"))})}},mounted:function(){this.getListData(this.page)},created:function(){this.getListData(this.page)},watch:{$route:"getListData"}}},YpVX:function(e,t,a){"use strict";function s(e,t,a,s,i){var r,c=Date.parse(new Date),u=""+c,p=u.substring(0,10);!function(){for(var e="",t=0;t<6;t++)e+=Math.floor(10*Math.random());r=e}();var v=r+p,d=l.MD5(v),f=""+d,_=f.toLocaleUpperCase(),m=""+_,g="b3c7e662782266fddd6f950059d3b812"+m,h=l.MD5(g),b=""+h,C=b.toLocaleLowerCase(),S=""+C,k="",x=sessionStorage.getItem("token_type"),I=sessionStorage.getItem("access_token");k=null==x||null==I?"":x+" "+I,n({method:e,url:t,baseURL:o,headers:{"App-Key":"Holo_WeiXin",Timestamp:p,Nonce:r,Authorization:k,Signature:S,"Content-Type":"application/x-www-form-urlencoded;charset=utf-8;multipart/form-data;application/json;text/xml"},params:"GET"===e||"DELETE"===e?a:null,data:"POST"===e||"PUT"===e?a:null,cache:!1,withCredentials:!1,responseType:"json"}).then(function(e){console.log(e),s(e)}).catch(function(e){console.log(e),i(e)})}Object.defineProperty(t,"__esModule",{value:!0});var n=a("mtWM"),l=a("02Hb"),o=(a("gykg"),"/v1");a("mw3O");t.default={get:function(e,t,a,n){return s("GET",e,t,a,n)},post:function(e,t,a,n){return s("POST",e,t,a,n)},put:function(e,t,a,n){return s("PUT",e,t,a,n)},delete:function(e,t,a,n){return s("DELETE",e,t,a,n)},relogin:function(){sessionStorage.removeItem("relogin_flag");var e=sessionStorage.getItem("login_time"),t=sessionStorage.getItem("refresh_token"),a=sessionStorage.getItem("expires_in"),n=Date.parse(new Date),l=""+n,o=l.substring(0,10);parseFloat(o)-parseFloat(e)>parseFloat(a)-60?(sessionStorage.setItem("relogin_flag","timeout"),s("POST","/passport/relogin",this.$qs.stringify(t),function(e){if(200==e.data.code){sessionStorage.setItem("access_token",data.access_token),sessionStorage.setItem("expires_in",data.expires_in),sessionStorage.setItem("refresh_token",data.refresh_token),sessionStorage.setItem("token_type",data.token_type),sessionStorage.setItem("user_id",data.user_id);var t=Date.parse(new Date),a=""+t,s=a.substring(0,10);sessionStorage.setItem("login_time",s)}},function(e){})):(sessionStorage.setItem("relogin_flag","timeout_no"),console.log("链接未超时"))}}},ZKf1:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"logo"},[a("div",{staticClass:"upload-container"},[a("div",{staticClass:"imgBox"},[a("input",{staticClass:"inputstyle",attrs:{type:"file",name:"file"},on:{change:e.PreviewImage}}),e._v(" "),a("img",{staticClass:"fileImg",attrs:{src:e.imageUrl,alt:""}})])])])},n=[],l={render:s,staticRenderFns:n};t.a=l},dI9y:function(e,t){},fKCt:function(e,t){},fgar:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a("+MXL"),l=(s(n),a("Ntyz")),o=(s(l),a("w6Rr"));s(o);t.default={data:function(){return{SysNanme:"HOLO哈啰通用中台",activeIndex:"2",activeIndex2:"1",telephoneNum:sessionStorage.getItem("name")}},methods:{handleSelect:function(e,t){console.log(e,t),2==e&&this.$router.push("/home-order"),"1-3"==e&&this.$router.push("/uploadImages")},handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)},quiteWithInterface:function(){var e=this;sessionStorage.removeItem("relogin_flag");var t=sessionStorage.getItem("login_time"),a=sessionStorage.getItem("refresh_token"),s=sessionStorage.getItem("expires_in"),n=Date.parse(new Date),l=""+n,o=l.substring(0,10);parseFloat(o)-parseFloat(t)>parseFloat(s)-60?(sessionStorage.setItem("relogin_flag","timeout"),httpService("POST","/passport/relogin",this.$qs.stringify(a),function(t){if(200==t.data.code){sessionStorage.setItem("access_token",data.access_token),sessionStorage.setItem("expires_in",data.expires_in),sessionStorage.setItem("refresh_token",data.refresh_token),sessionStorage.setItem("token_type",data.token_type),sessionStorage.setItem("user_id",data.user_id);var a=Date.parse(new Date),s=""+a,n=s.substring(0,10);sessionStorage.setItem("login_time",n),e.quiteWithInterfacepre()}},function(e){})):this.quiteWithInterfacepre()},quiteWithInterfacepre:function(){var e=this;this.$api.get("/passport/logout",null,function(t){200==t.data.code&&(sessionStorage.clear(),e.$router.push("/login"))},function(t){"Error: Request failed with status code 401"==t&&(alert("您的账号可能在其他设备上登录，请重新登录！"),sessionStorage.clear(),e.$router.push("/login"))})},quite:function(){var e=this;this.$confirm("确认退出吗?","提示",{}).then(function(){e.quiteWithInterface()}).catch(function(){alert("错了2")})}}}},"lyB/":function(e,t,a){"use strict";function s(e){a("Xim3")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("fgar"),l=a.n(n),o=a("QV2m"),i=a("VU/8"),r=s,c=i(l.a,o.a,r,"data-v-4c2ab336",null);t.default=c.exports},m1Og:function(e,t,a){"use strict";function s(e){a("F0gf")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("KIdN"),l=a.n(n),o=a("oq2q"),i=a("VU/8"),r=s,c=i(l.a,o.a,r,null,null);t.default=c.exports},oq2q:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper-box"},[a("form",[a("div",[a("span",{staticClass:"spp",on:{click:e.getListData}},[e._v("订单信息")]),e._v(" "),a("div",{staticClass:"order-box1 or-b"},[a("ul",{staticClass:"order-ul1 or-u"},[a("li",[a("span",{staticClass:"or-spp1"},[e._v("订单号")]),a("span",{staticClass:"f9"},[e._v(e._s(e.orders))])]),e._v(" "),a("li",[a("span",{staticClass:"or-spp1"},[e._v("订单日期")]),a("div",{staticClass:"div-el"},[a("el-date-picker",{attrs:{type:"date"},model:{value:e.nn,callback:function(t){e.nn=t},expression:"nn"}})],1)]),e._v(" "),a("li",[a("span",{staticClass:"or-spp1"},[e._v("收货日期")]),a("div",{staticClass:"div-el"},[a("el-date-picker",{attrs:{type:"date"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)]),e._v(" "),a("li",[a("span",{staticClass:"or-spp1"},[e._v("业务员")]),a("el-select",{model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("li",[a("span",{staticClass:"or-spp1"},[e._v("客户名称")]),a("el-select",{model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}},e._l(e.options1,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("li",[a("span",{staticClass:"or-spp1"},[e._v("客户订单号")]),a("div",{staticClass:"div-el"},[a("el-input",{model:{value:e.input3,callback:function(t){e.input3=t},expression:"input3"}})],1)]),e._v(" "),a("li",[a("span",{staticClass:"or-spp1"},[e._v("项目合同号")]),a("div",{staticClass:"div-el"},[a("el-input",{model:{value:e.contract,callback:function(t){e.contract=t},expression:"contract"}})],1)])]),e._v(" "),a("div",{staticClass:"top-bBox"},[a("span",{staticClass:"top-rl"},[e._v("备注")]),e._v(" "),a("el-input",{staticClass:"texa",attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:e.texta,callback:function(t){e.texta=t},expression:"texta"}})],1)])]),e._v(" "),a("div",[a("span",{staticClass:"spp"},[e._v("金额信息")]),e._v(" "),a("div",{staticClass:"order-box1 order-page"},[a("ul",{staticClass:"mon-ul"},[a("li",[a("span",{staticClass:"fred summ"},[e._v("总金额")]),a("div",{staticClass:"div-elp"},[a("el-input",{staticClass:"fred",model:{value:e.val10,callback:function(t){e.val10=t},expression:"val10"}})],1)])]),e._v(" "),a("ul",{staticClass:"order-ul1"},[a("li",[a("span",{staticClass:"or-spp1"},[e._v("商品总价")]),a("div",{staticClass:"div-el"},[a("el-input",{model:{value:e.val1,callback:function(t){e.val1=t},expression:"val1"}})],1)]),e._v(" "),a("li",[a("span",{staticClass:"or-spp1"},[e._v("折扣率")]),a("div",{staticClass:"div-el"},[a("el-input",{model:{value:e.val2,callback:function(t){e.val2=t},expression:"val2"}})],1)]),e._v(" "),a("li",[a("span",{staticClass:"or-spp1"},[e._v("折后总价")]),a("div",{staticClass:"div-el"},[a("el-input",{model:{value:e.val3,callback:function(t){e.val3=t},expression:"val3"}})],1)]),e._v(" "),a("li",[a("span",{staticClass:"or-spp1"},[e._v("运费")]),a("div",{staticClass:"div-el"},[a("el-input",{model:{value:e.val4,callback:function(t){e.val4=t},expression:"val4"}})],1)]),e._v(" "),a("li",[a("span",{staticClass:"or-spp1"},[e._v("喷色费")]),a("div",{staticClass:"div-el"},[a("el-input",{model:{value:e.val5,callback:function(t){e.val5=t},expression:"val5"}})],1)]),e._v(" "),a("li",[a("span",{staticClass:"or-spp1"},[e._v("安装费")]),a("div",{staticClass:"div-el"},[a("el-input",{model:{value:e.val6,callback:function(t){e.val6=t},expression:"val6"}})],1)]),e._v(" "),a("li",[a("span",{staticClass:"or-spp1"},[e._v("配件费")]),a("div",{staticClass:"div-el"},[a("el-input",{model:{value:e.val7,callback:function(t){e.val7=t},expression:"val7"}})],1)]),e._v(" "),a("li",[a("span",{staticClass:"or-spp1"},[e._v("付款协议")]),a("el-select",{attrs:{placeholder:"普通销售"},model:{value:e.val8,callback:function(t){e.val8=t},expression:"val8"}},e._l(e.options2,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("li",[a("span",{staticClass:"or-spp1"},[e._v("收款协议")]),a("el-select",{attrs:{placeholder:"发货30天回款"},model:{value:e.val9,callback:function(t){e.val9=t},expression:"val9"}},e._l(e.options3,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)])])]),e._v(" "),a("div",[a("span",{staticClass:"spp"},[e._v("商品信息")]),e._v(" "),a("div",{staticClass:"order-box "},[a("div",{staticClass:"o-div"},[a("el-table",{attrs:{data:e.tableDatas,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"存货编码"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"存货名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"price",label:"单价"}}),e._v(" "),a("el-table-column",{attrs:{prop:"count",label:"数量"}}),e._v(" "),a("el-table-column",{attrs:{prop:"amount",label:"金额"}})],1)],1)])]),e._v(" "),a("div",[a("span",{staticClass:"spp"},[e._v("配件信息")]),e._v(" "),a("div",{staticClass:"order-box1 "},[a("div",{attrs:{id:"app"}},[e.tableTbody&&e.tableTbody.length>0?a("div",{staticStyle:{overflow:"auto"}}):e._e()]),e._v(" "),a("div",{staticClass:"accessories"},[a("div",{staticClass:"add-content"},[a("div",{staticClass:"file-box"},[a("label",{staticClass:"file-inp",attrs:{for:"file1"}},[e._v("添加Excel文件")]),e._v(" "),a("input",{attrs:{id:"file1",type:"file"},on:{change:function(t){e.importExcel(t.target)}}})])]),e._v(" "),a("span",{staticClass:"clear mg-le",on:{click:function(t){e.delExcel()}}},[e._v("清空已导入配件")]),e._v(" "),a("div",{staticClass:"e-div"},[e.tableTbody&&e.tableTbody.length>0?a("el-table",{attrs:{data:e.tableTbody,border:""}},e._l(e.cols,function(e){return a("tr",[a("el-table-column",{attrs:{prop:e.prop,label:e.label}})],1)})):e._e()],1)])])]),e._v(" "),a("el-button",{staticClass:"success",attrs:{type:"button",loading:e.logining},on:{click:e.submit}},[e._v("生成订单")])],1)])},n=[],l={render:s,staticRenderFns:n};t.a=l},p4bm:function(e,t,a){"use strict";function s(e){a("OW/F")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("2M6f"),l=a.n(n),o=a("DO6O"),i=a("VU/8"),r=s,c=i(l.a,o.a,r,"data-v-02654f04",null);t.default=c.exports},q8zI:function(e,t){},qfM4:function(e,t){},w6Rr:function(e,t,a){"use strict";function s(e){a("G9Cc")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("WAyV"),l=a.n(n),o=a("ZKf1"),i=a("VU/8"),r=s,c=i(l.a,o.a,r,"data-v-25718ba0",null);t.default=c.exports},wclf:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"selected-box"},[a("ul",{staticClass:"sel-ul"},[a("li",[a("el-input",{attrs:{placeholder:"请输入订单号"},model:{value:e.input1,callback:function(t){e.input1=t},expression:"input1"}})],1),e._v(" "),a("li",[a("el-input",{attrs:{placeholder:"请输入业务员"},model:{value:e.input2,callback:function(t){e.input2=t},expression:"input2"}})],1),e._v(" "),a("li",[a("el-input",{attrs:{placeholder:"请输入客户名称"},model:{value:e.input3,callback:function(t){e.input3=t},expression:"input3"}})],1),e._v(" "),a("li",[a("el-date-picker",{attrs:{type:"date",placeholder:"选择起始日期"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),a("li",[a("el-date-picker",{attrs:{type:"date",placeholder:"选择结束日期"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1),e._v(" "),a("li",[a("el-select",{attrs:{placeholder:"请选择订单状态"},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)]),e._v(" "),a("div",{staticClass:"top-r"},[a("el-button",{attrs:{type:"primary",icon:"search"}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{type:"text"}},[e._v("重置")])],1)]),e._v(" "),a("div",{staticClass:"tableView"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",attrs:{data:e.tableDatas,"highlight-current-row":"",border:"","tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"订单号",width:"220"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sale_person",label:"业务员",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"customer",label:"客户名称","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"amount",label:"订单总价",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"订单日期",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"订单状态",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{label:"订单操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleClick(t.row.status,t.$index)}}},[e._v("\n          查看\n        ")])]}}])})],1),e._v(" "),a("div",{staticClass:"deleteBtn",staticStyle:{"margin-top":"16px"}},[a("el-button",[e._v("批量删除")])],1)],1),e._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.page,"page-size":10,layout:"prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.page=t}}})],1)])},n=[],l={render:s,staticRenderFns:n};t.a=l},xJD8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app",components:{}}},"z/+U":function(e,t){}},["NHnr"]);