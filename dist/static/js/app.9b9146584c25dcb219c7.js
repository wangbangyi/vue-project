webpackJsonp([12],{Fb3S:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={};n.d(a,"post",function(){return ct}),n.d(a,"like",function(){return ut}),n.d(a,"comment",function(){return dt});var s={};n.d(s,"computedArticles",function(){return mt}),n.d(s,"getArticlesByUid",function(){return pt}),n.d(s,"getArticlesByFilter",function(){return ht});var r=n("Gu7T"),i=n.n(r),o=n("7+uW"),l=n("Dd8w"),c=n.n(l),u=n("NYxO"),d={name:"TheEntry",computed:c()({},Object(u.b)(["auth","user"])),methods:{logout:function(){var t=this;this.$swal({text:"你确定要退出吗?",confirmButtonText:"退出"}).then(function(e){e.value&&t.$store.dispatch("logout")})}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-right"},[t.auth?n("ul",{staticClass:"nav navbar-nav github-login"},[n("li",[n("a",{directives:[{name:"dropdown",rawName:"v-dropdown"}],attrs:{href:"javascript:;"}},[n("i",{staticClass:"fa fa-plus text-md"})]),t._v(" "),n("ul",{staticClass:"dropdown-menu"},[n("li",[n("router-link",{attrs:{to:"/articles/create"}},[n("i",{staticClass:"fa fa-paint-brush text-md"}),t._v("\n            创作文章\n          ")])],1)])]),t._v(" "),n("li",[n("a",{directives:[{name:"dropdown",rawName:"v-dropdown"}],attrs:{href:"javascript:;"}},[t.user?n("span",[t.user.avatar?n("img",{staticClass:"avatar-topnav",attrs:{src:t.user.avatar}}):t._e(),t._v(" "),t.user.name?n("span",[t._v(t._s(t.user.name))]):t._e()]):n("span",[t._v("佚名")]),t._v(" "),n("span",{staticClass:"caret"})]),t._v(" "),n("ul",{staticClass:"dropdown-menu"},[t.user?n("li",[n("router-link",{attrs:{to:"/"+t.user.name}},[n("i",{staticClass:"fa fa-list-ul text-md i-middle"}),t._v("\n            个人专栏\n          ")])],1):t._e(),t._v(" "),n("li",[n("router-link",{attrs:{to:"/users/1/edit"}},[n("i",{staticClass:"fa fa-cog text-md i-middle"}),t._v("\n            编辑资料\n          ")])],1),t._v(" "),n("li",[n("a",{attrs:{href:"#"},on:{click:t.logout}},[n("i",{staticClass:"fa fa-sign-out text-md"}),t._v("退出")])])])])]):n("div",{staticClass:"nav navbar-nav github-login"},[n("router-link",{staticClass:"btn btn-default login-btn",attrs:{to:"/auth/login"}},[n("i",{staticClass:"fa fa-user"}),t._v(" 登 录\n    ")]),t._v(" "),n("router-link",{staticClass:"btn btn-default login-btn",attrs:{to:"/auth/register"}},[n("i",{staticClass:"fa fa-user-plus"}),t._v(" 注 册\n    ")])],1)])},staticRenderFns:[]};var f={name:"TheHeader",components:{TheEntry:n("VU/8")(d,v,!1,function(t){n("PT1g")},"data-v-702a2328",null).exports},data:function(){return{logo:{src:this.uploadsUrl+"sites/ByvFbNlQYVwhvTyBgLdqitchoacDNznN.jpg",title:"VuejsCaff"},navList:["社区","头条","问答","教程"],activeNavIndex:0,showCollapsedNav:!1}},beforeCreate:function(){this.uploadsUrl="https://vuejscaffcdn.phphub.org/uploads/"},methods:{changeNavIndex:function(t){this.activeNavIndex=t},toggleNav:function(){this.showCollapsedNav=!this.showCollapsedNav}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar navbar-default topnav"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-header"},[n("button",{staticClass:"navbar-toggle",attrs:{type:"button"},on:{click:t.toggleNav}},[n("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"})]),t._v(" "),n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("span",{staticClass:"title"},[t._v(t._s(t.logo.title))]),t._v(" "),n("img",{attrs:{src:t.logo.src,alt:t.logo.title}})])],1),t._v(" "),n("div",{class:["collapse","navbar-collapse",{in:t.showCollapsedNav}],attrs:{id:"top-navbar-collapse"}},[n("ul",{staticClass:"nav navbar-nav"},t._l(t.navList,function(e,a){return n("li",{class:{active:a===t.activeNavIndex}},[n("a",{attrs:{href:"#"},on:{click:function(e){t.changeNavIndex(a)}}},[t._v(t._s(e))])])})),t._v(" "),n("div",{staticClass:"navbar-right"},[n("TheEntry")],1)])])])},staticRenderFns:[]};function p(t,e){var n=function(){var t=document.querySelector(".title-popover");if(!t){var e=document.createRange().createContextualFragment('\n      <div class="popover title-popover top fade in" style="position:fixed;">\n        <div class="arrow"></div>\n        <div class="popover-content"></div>\n      </div>\n    ');document.body.appendChild(e),t=document.querySelector(".title-popover")}return t}(),a=n.style;if(void 0===e)a.display="none";else{var s=t.getBoundingClientRect(),r=window.getComputedStyle(t,null),i=parseInt(r.getPropertyValue("padding-right"))||0,o=parseInt(r.getPropertyValue("padding-top"))||0;a.visibility="hidden",a.display="block",n.querySelector(".popover-content").textContent=e,a.left=s.left-n.offsetWidth/2+(t.offsetWidth-i)/2+"px",a.top=s.top-n.offsetHeight+o+"px",a.display="block",a.visibility="visible"}}var h={bind:function(t,e,n){var a=["mouseenter","mouseleave","click"],s=function(n){"mouseenter"===n.type?p(t,e.value):p()};a.forEach(function(e){t.addEventListener(e,s,!1)}),t.destroy=function(){a.forEach(function(e){t.removeEventListener(e,s,!1)}),t.destroy=null}},unbind:function(t){t.destroy()}},y={name:"TheFooter",directives:{title:h},data:function(){return{description:"VuejsCaff 是一个 Vue.js 的知识社区",contacts:[{icon:"envelope",title:"反馈问题",link:"mailto:summer@yousails.com"},{icon:"weibo",title:"站长微博",link:"https://weibo.com/1837553744/profile?topnav=1&wvr=6"},{icon:"weixin",title:"加我微信",link:"https://vuejscaff.com/contact"}],contactStyle:{paddingRight:"8px"},designer:'\n        <span style="font-size:0.9em">Designed by\n          <span style="color: #e27575;font-size: 14px;">❤</span>\n          <a href="https://github.com/summerblue"target="_blank"style="color:inherit">Summer</a>\n        </span>\n      ',sponsor:{title:"赞助商",list:[{logo:"https://lccdn.phphub.org/uploads/banners/bQawWl3vT5dc2lYx5JZ7.png",title:"本站服务器由 UCloud 赞助",link:"http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=phphub&utm_medium=display&utm_content=yejiao&ytag=phphubyejiao"},{logo:"https://lccdn.phphub.org/uploads/banners/yGLIR0idW7zsInjsNmzr.png",title:"本站 CDN 服务由七牛赞助",link:"http://www.qiniu.com/?utm_source=phphub"},{logo:"https://lccdn.phphub.org/uploads/banners/XPtLlZmIN1cQbLuDFEON.png",title:"Composer 镜像赞助商",link:"https://www.upyun.com/"},{logo:"https://lccdn.phphub.org/uploads/banners/JpTCK6OKYBIrBIWdtob8.png",title:"订阅邮件赞助商：SendCloud",link:"http://www.sendcloud.net/"}]},statistics:{title:"统计信息",list:[{title:"社区会员",description:"22889"},{title:"话题数",description:"7397"},{title:"评论数",description:"39375"}]},other:{title:"其他信息",list:[{icon:"thumbs-up",title:"软件外包服务",link:"https://vuejscaff.com/contact"},{icon:"globe",title:"推荐网站",link:"https://vuejscaff.com/sites"}]}}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row footer-top"},[n("div",{staticClass:"col-sm-5 col-lg-5"},[n("p",{staticClass:"padding-top-xsm"},[t._v(t._s(t.description))]),t._v(" "),n("div",{staticClass:"text-md"},t._l(t.contacts,function(e){return n("a",{directives:[{name:"title",rawName:"v-title",value:e.title,expression:"item.title"}],style:t.contactStyle,attrs:{href:e.link,target:"_blank"}},[n("i",{class:"fa fa-"+e.icon})])})),t._v(" "),n("br"),t._v(" "),n("span",{domProps:{innerHTML:t._s(t.designer)}})]),t._v(" "),n("div",{staticClass:"col-sm-6 col-lg-6 col-lg-offset-1"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.sponsor.title))]),t._v(" "),n("ul",{staticClass:"list-unstyled"},t._l(t.sponsor.list,function(t){return n("li",[n("a",{attrs:{href:t.link,target:"_blank"}},[n("img",{directives:[{name:"title",rawName:"v-title",value:t.title,expression:"item.title"}],staticClass:"footer-sponsor-link",attrs:{src:t.logo,alt:t.title,width:"98"}})])])}))]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.statistics.title))]),t._v(" "),n("ul",{staticClass:"list-unstyled"},t._l(t.statistics.list,function(e){return n("li",[t._v(t._s(e.title)+": "+t._s(e.description))])}))]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.other.title))]),t._v(" "),n("ul",{staticClass:"list-unstyled"},t._l(t.other.list,function(e){return n("li",[n("a",{directives:[{name:"title",rawName:"v-title",value:e.title,expression:"item.title"}],attrs:{href:e.link,target:"_blank"}},[n("i",{class:"fa fa-"+e.icon}),t._v(" "+t._s(e.title)+"\n                ")])])}))])])])])])])},staticRenderFns:[]};var b={name:"App",components:{TheHeader:n("VU/8")(f,m,!1,function(t){n("v0PV")},"data-v-489f6186",null).exports,TheFooter:n("VU/8")(y,g,!1,function(t){n("bBsY")},"data-v-0ac16eee",null).exports}},j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"wrap"}},[e("TheHeader"),this._v(" "),e("div",{staticClass:"container main-container",attrs:{id:"main-container"}},[e("router-view")],1),this._v(" "),e("TheFooter")],1)},staticRenderFns:[]};var w=n("VU/8")(b,j,!1,function(t){n("deH7")},null,null).exports,k=n("/ocq"),_=[{path:"/auth/register",name:"Register",component:function(){return n.e(7).then(n.bind(null,"0jH9"))}},{path:"/",name:"Home",alias:"/topics",component:function(){return n.e(5).then(n.bind(null,"j7e0"))}},{path:"*",redirect:"/"},{path:"/auth/login",name:"Login",component:function(){return n.e(6).then(n.bind(null,"3Jfp"))}},{path:"/users/1/edit",component:function(){return n.e(4).then(n.bind(null,"56Zq"))},children:[{path:"",name:"EditProfile",component:function(){return n.e(2).then(n.bind(null,"Plmk"))},meta:{auth:!0}},{path:"/users/1/edit_avatar",name:"EditAvatar",component:function(){return n.e(9).then(n.bind(null,"o8vE"))},meta:{auth:!0}},{path:"/users/1/edit_password",name:"EditPassword",component:function(){return n.e(8).then(n.bind(null,"6m7U"))},meta:{auth:!0}}]},{path:"/articles/create",name:"Create",component:function(){return n.e(0).then(n.bind(null,"wPjO"))},meta:{auth:!0}},{path:"/articles/:articleId/edit",name:"Edit",component:function(){return n.e(0).then(n.bind(null,"wPjO"))},meta:{auth:!0}},{path:"/:user",component:function(){return n.e(3).then(n.bind(null,"4jfe"))},children:[{path:"",name:"Column",component:function(){return n.e(10).then(n.bind(null,"zln+"))}},{path:"/articles/:articleId/content",name:"Content",component:function(){return n.e(1).then(n.bind(null,"nYJE"))}}]}];o.a.use(k.a);var C=new k.a({mode:"history",linkExactActiveClass:"active",scrollBehavior:function(t,e,n){return t.hash?{selector:t.hash}:n||{x:0,y:0}},routes:_});C.beforeEach(function(t,e,n){var a=C.app,s=a.$options.store,r=s.state.auth,i=t.params.articleId,o=s.state.user&&s.state.user.name,l=t.params.user;a.$message.hide(),r&&-1!==t.path.indexOf("/auth/")||!r&&t.meta.auth||i&&!s.getters.getArticleById(i)||l&&l!==o&&!s.getters.getArticlesByUid(null,l).length?n("/"):n()}),C.afterEach(function(t,e){var n=C.app,a=(n.$options.store,t.params.showMsg);a&&("string"==typeof a?n.$message.show(a):n.$message.show("操作成功"))});var I=C,x=n("W3Iv"),A=n.n(x),E=n("BO1k"),U=n.n(E),T=n("d7EF"),S=n.n(T),z=n("pFYg"),N=n.n(z);function L(t,e,n){n=n&&"object"===(void 0===n?"undefined":N()(n))?n:{};var a="string"==typeof t.value?t.value.trim():"",s=n,r=s.title,i=void 0===r?"该项":r,o=s.error,l="";if(e.required&&""===a)l=i+"不能为空";else if(n.target){var c=document.querySelector(n.target);(c?c.value:null)!==a&&(l="输入的"+i+"不匹配")}else if(n.regex)try{n.regex.test(a)||(l=i+"格式不正确")}catch(t){}l?P(t,void 0===o?l:o):P(t)}function P(t,e){var n=t.parentElement,a=function(t){var e=t.parentElement,n=e.querySelector(".help-block");if(!n){var a=document.createRange().createContextualFragment('<span class="help-block"></span>');e.appendChild(a),n=e.querySelector(".help-block")}return n}(t);void 0===e?(a.style.display="none",n.classList.remove("has-error")):(a.textContent=e,a.style.display="block",n.classList.add("has-error"))}var F={validator:{bind:function(t,e,n){var a=e.value,s=e.arg,r=e.modifiers,i=-1!==["change","blur","input"].indexOf(s)?s:"change",o=function(){P(t)},l=function(){L(t,r,a)};t.addEventListener("input",o,!1),t.addEventListener(i,l,!1),t.destroy=function(){t.removeEventListener("input",o,!1),t.removeEventListener(i,l,!1),t.destroy=null}},inserted:function(t,e,n){var a=e.value,s=e.modifiers,r=t.closest("[data-validator-form]"),i=r?r.querySelector("[type=submit]"):null;if(i){var o=function(){L(t,s,a),r.querySelectorAll(".has-error").length?i.canSubmit=!1:i.canSubmit=!0};i.addEventListener("click",o,!1),t.destroySubmitBtn=function(){i.removeEventListener("click",o,!1),t.destroySubmitBtn=null}}},unbind:function(t){t.destroy(),t.destroySubmitBtn&&t.destroySubmitBtn()}},dropdown:{bind:function(t,e,n){var a=function(){t.parentElement.classList.toggle("open")},s=function(e){var n=e.target;n.isSameNode(t)||t.contains(n)||t.parentElement.classList.remove("open")};t.addEventListener("click",a,!1),document.addEventListener("click",s,!1),t.destroy=function(){t.removeEventListener("click",a,!1),document.removeEventListener("click",s,!1),t.destroy=null}},unbind:function(t){t.destroy()}},title:h},B=!0,O=!1,q=void 0;try{for(var R,H=U()(A()(F));!(B=(R=H.next()).done);B=!0){var D=R.value,V=S()(D,2),M=V[0],$=V[1];o.a.directive(M,$)}}catch(t){O=!0,q=t}finally{try{!B&&H.return&&H.return()}finally{if(O)throw q}}var W={name:"Message",props:{show:{type:Boolean,default:!1},type:{type:String,default:"success"},msg:{type:String,default:""}},watch:{show:function(t){var e=this;t&&this.$nextTick(function(){e.$el.scrollIntoView(!0)})}},methods:{close:function(){this.$emit("update:show",!1)}}},X={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],class:"alert alert-"+this.type+" alert-dismissible"},[e("button",{staticClass:"close",attrs:{type:"button"},on:{click:this.close}},[e("span",[this._v("×")])]),this._v("\n  "+this._s(this.msg)+"\n")])},staticRenderFns:[]};var J=n("VU/8")(W,X,!1,function(t){n("qXLS")},"data-v-34015d2d",null).exports,Y={name:"Modal",props:{show:{type:Boolean,default:!1}},methods:{close:function(){this.$emit("update:show",!1)}},watch:{show:function(t){var e=document.body.classList;t?e.add("modal-open"):e.remove("modal-open")}}},Q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"modal",staticStyle:{display:"block"},on:{click:function(e){return e.target!==e.currentTarget?null:t.close(e)}}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("button",{staticClass:"close",on:{click:t.close}},[t._v("×")]),t._v(" "),n("h4",{staticClass:"modal-title"},[t._t("title")],2)]),t._v(" "),n("div",{staticClass:"modal-body"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])])]),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"modal-backdrop fade in",on:{click:t.close}})])],1)},staticRenderFns:[]};var G=n("VU/8")(Y,Q,!1,function(t){n("Fb3S")},"data-v-60b93078",null).exports,K={Message:J,Modal:G},Z=!0,tt=!1,et=void 0;try{for(var nt,at=U()(A()(K));!(Z=(nt=at.next()).done);Z=!0){var st=nt.value,rt=S()(st,2),it=rt[0],ot=rt[1];o.a.component(it,ot)}}catch(t){tt=!0,et=t}finally{try{!Z&&at.return&&at.return()}finally{if(tt)throw et}}var lt=n("ssT3"),ct=function(t,e){var n=t.commit,a=t.state,s=e.article,r=e.articleId,i=a.articles;if(Array.isArray(i)||(i=[]),s){var o=s.title,l=s.content,c=new Date;if(void 0===r){var u=i[i.length-1];r=u?parseInt(u.articleId)+1:i.length+1,i.push({uid:1,articleId:r,title:o,content:l,date:c})}else{var d=!0,v=!1,f=void 0;try{for(var m,p=U()(i);!(d=(m=p.next()).done);d=!0){var h=m.value;if(parseInt(h.articleId)===parseInt(r)){h.title=o,h.content=l;break}}}catch(t){v=!0,f=t}finally{try{!d&&p.return&&p.return()}finally{if(v)throw f}}}n("UPDATE_ARTICLES",i),I.push({name:"Content",params:{articleId:r,showMsg:!0}})}else{var y=!0,g=!1,b=void 0;try{for(var j,w=U()(i);!(y=(j=w.next()).done);y=!0){var k=j.value;if(parseInt(k.articleId)===parseInt(r)){i.splice(i.indexOf(k),1);break}}}catch(t){g=!0,b=t}finally{try{!y&&w.return&&w.return()}finally{if(g)throw b}}n("UPDATE_ARTICLES",i),I.push({name:"Home",params:{showMsg:!0}})}},ut=function(t,e){var n=t.commit,a=t.state,s=e.articleId,r=e.isAdd,i=a.articles,o=[];Array.isArray(i)||(i=[]);var l=!0,c=!1,u=void 0;try{for(var d,v=U()(i);!(l=(d=v.next()).done);l=!0){var f=d.value;if(parseInt(f.articleId)===parseInt(s)){if(o=Array.isArray(f.likeUsers)?f.likeUsers:o,r){o.some(function(t){return 1===parseInt(t.uid)})||o.push({uid:1})}else{var m=!0,p=!1,h=void 0;try{for(var y,g=U()(o);!(m=(y=g.next()).done);m=!0){var b=y.value;if(1===parseInt(b.uid)){o.splice(o.indexOf(b),1);break}}}catch(t){p=!0,h=t}finally{try{!m&&g.return&&g.return()}finally{if(p)throw h}}}f.likeUsers=o;break}}}catch(t){c=!0,u=t}finally{try{!l&&v.return&&v.return()}finally{if(c)throw u}}return n("UPDATE_ARTICLES",i),o},dt=function(t,e){var n=t.commit,a=t.state,s=e.articleId,r=e.comment,i=e.commentId,o=a.articles,l=[];Array.isArray(o)||(o=[]);var c=!0,u=!1,d=void 0;try{for(var v,f=U()(o);!(c=(v=f.next()).done);c=!0){var m=v.value;if(parseInt(m.articleId)===parseInt(s)){if(l=Array.isArray(m.comments)?m.comments:l,r){var p=r.uid,h=void 0===p?1:p,y=r.content,g=new Date;if(void 0===i){var b=l[l.length-1];i=b?parseInt(b.commentId)+1:l.length+1,l.push({uid:h,commentId:i,content:y,date:g})}else{var j=!0,w=!1,k=void 0;try{for(var _,C=U()(l);!(j=(_=C.next()).done);j=!0){var I=_.value;if(parseInt(I.commentId)===parseInt(i)){I.content=y;break}}}catch(t){w=!0,k=t}finally{try{!j&&C.return&&C.return()}finally{if(w)throw k}}}}else{var x=!0,A=!1,E=void 0;try{for(var T,S=U()(l);!(x=(T=S.next()).done);x=!0){var z=T.value;if(parseInt(z.commentId)===parseInt(i)){l.splice(l.indexOf(z),1);break}}}catch(t){A=!0,E=t}finally{try{!x&&S.return&&S.return()}finally{if(A)throw E}}}m.comments=l;break}}}catch(t){u=!0,d=t}finally{try{!c&&f.return&&f.return()}finally{if(u)throw d}}return n("UPDATE_ARTICLES",o),l},vt=n("mvHQ"),ft=n.n(vt),mt=function(t){var e=t.articles,n=[],a=function(e){var n=t.user&&t.user.name,a=t.user&&t.user.avatar;e?(this.uname=n,this.uavatar=a):this.uavatar="https://api.adorable.io/avatars/200/"+this.uname};return Array.isArray(e)&&(n=JSON.parse(ft()(e))).forEach(function(t){var e=t.comments,n=t.likeUsers;1===t.uid?a.call(t,!0):a.call(t),Array.isArray(e)&&e.forEach(function(t){1===t.uid?a.call(t,!0):a.call(t)}),Array.isArray(n)&&n.forEach(function(t){1===t.uid?a.call(t,!0):a.call(t)})}),n},pt=function(t,e){return function(t,n){var a=e.computedArticles;if(Array.isArray(a)){if(n){var s=!0,r=!1,i=void 0;try{for(var o,l=U()(a);!(s=(o=l.next()).done);s=!0){var c=o.value;if(c.uname===n){t=c.uid;break}}}catch(t){r=!0,i=t}finally{try{!s&&l.return&&l.return()}finally{if(r)throw i}}}a=a.filter(function(e){return parseInt(t)===parseInt(e.uid)})}else a=[];return a}},ht=function(t,e){return function(t){var n=e.computedArticles,a=[];if(Array.isArray(n))switch(a=n.map(function(t){return c()({},t)}),t){case"excellent":a=e.getArticlesByUid(1);break;case"vote":a.sort(function(t,e){var n=Array.isArray(t.likeUsers)?t.likeUsers:[];return(Array.isArray(e.likeUsers)?e.likeUsers:[]).length-n.length});break;case"recent":a.reverse();break;case"noreply":a.sort(function(t,e){var n=Array.isArray(t.comments)?t.comments:[],a=Array.isArray(e.comments)?e.comments:[];return n.length-a.length});break;default:a.sort(function(t,e){var n=Array.isArray(t.comments)?t.comments:[],a=Array.isArray(e.comments)?e.comments:[],s=n.length,r=a.length;return s>0?r>0?new Date(a[r-1].date)-new Date(n[s-1].date):-1:1})}return a}};o.a.use(u.a);var yt={user:lt.a.getItem("user"),auth:lt.a.getItem("auth"),articles:lt.a.getItem("articles")},gt={UPDATE_USER:function(t,e){t.user=e,lt.a.setItem("user",e)},UPDATE_AUTH:function(t,e){t.auth=e,lt.a.setItem("auth",e)},UPDATE_ARTICLES:function(t,e){t.articles=e,lt.a.setItem("articles",e)}},bt=c()({login:function(t,e){var n=t.commit;e&&n("UPDATE_USER",e),n("UPDATE_AUTH",!0),I.push("/")},logout:function(t){(0,t.commit)("UPDATE_AUTH",!1),I.push({name:"Home",params:{logout:!0}})},updateUser:function(t,e){var n=t.state,a=t.commit,s=n.user;s&&"object"===(void 0===s?"undefined":N()(s))&&(e=c()({},s,e)),a("UPDATE_USER",e)}},a),jt=c()({getArticleById:function(t,e){return function(t){var n=e.computedArticles;return Array.isArray(n)&&(n=n.filter(function(e){return parseInt(t)===parseInt(e.articleId)})).length?n[0]:null}}},s),wt=new u.a.Store({state:yt,getters:jt,mutations:gt,actions:bt}),kt=n("e7x4"),_t=n.n(kt),Ct={install:function(t){_t.a.setDefaults({type:"warning",showCancelButton:!0,confirmButtonColor:"rgb(140,212,245)",cancelButtonColor:"rgb(193,193,193)"}),t.swal=_t.a,t.prototype.$swal=_t.a}},It={install:function(t){var e=new(t.extend(J)),n=e.$mount().$el;t.nextTick(function(){document.querySelector("#main-container").prepend(n)}),e.$on("update:show",function(t){e.show=t});var a={show:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";e.msg=n,e.type=a,e.show=!1,t.nextTick(function(){e.show=!0})},hide:function(){t.nextTick(function(){e.show=!1})}};t.prototype.$message=a}},xt=n("PJh5"),At=n.n(xt);At.a.locale("zh-cn");o.a.filter("moment",function(t){var e=t;if(At()(e).isValid()){for(var n=arguments.length,a=Array(n>1?n-1:0),s=1;s<n;s++)a[s-1]=arguments[s];var r=a.shift();if("string"==typeof r)switch(r){case"from":t=At()(e).from();var i=a.shift();i&&"object"===(void 0===i?"undefined":N()(i))&&(t=At()(e).startOf(i.startOf).from());break;default:t=At()(e).format(r)}}return t});var Et=n("lHA8"),Ut=n.n(Et),Tt=n("zNUS"),St=n.n(Tt).a.Random,zt=lt.a.getItem("articles"),Nt=lt.a.getItem("user"),Lt=Nt?Nt.name:void 0,Pt=1;Array.isArray(zt)&&zt.length&&(Pt=parseInt(zt[zt.length-1].articleId)+1);function Ft(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=Math.floor(Math.random()*e+1),a=[].concat(i()(Array(n))).map(function(){return t[Math.floor(Math.random()*t.length)]});return[].concat(i()(new Ut.a(a)))}o.a.use(Ct),o.a.use(It),o.a.config.productionTip=!1;var Bt;Bt=lt.a.getItem("articles"),Bt=Array.isArray(Bt)?Bt.filter(function(t){return 1===parseInt(t.uid)}):[],wt.commit("UPDATE_ARTICLES",[].concat(i()(Bt),i()(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=[Lt,"topics"],n=[],a=[];return t=t>60?60:t,[].concat(i()(Array(t))).forEach(function(t,s){for(var r=St.first();-1!==a.indexOf(r)||-1!==e.indexOf(r);)r=St.first();a.push(r),n.push({uid:s+2,articleId:Pt+s,title:St.ctitle(10,20),content:St.cparagraph(3,5),date:new Date,likeUsers:[],comments:[],uname:r})}),n.forEach(function(t,e){var a=[],s=[],r=Ft(n);r.forEach(function(t,e){a.push({uid:t.uid,uname:t.uname})}),(r=Ft(n)).forEach(function(t,e){s.push({uid:t.uid,commentId:e+1,content:St.csentence(5,10),date:t.date,uname:t.uname})}),t.likeUsers=a,t.comments=s}),n}(10))));new o.a({el:"#app",router:I,store:wt,components:{App:w},template:"<App/>"})},PT1g:function(t,e){},bBsY:function(t,e){},deH7:function(t,e){},qXLS:function(t,e){},ssT3:function(t,e,n){"use strict";var a=n("mvHQ"),s=n.n(a),r=localStorage;e.a={setItem:function(t,e){r.setItem(t,s()(e))},getItem:function(t){try{return JSON.parse(r.getItem(t))}catch(t){return null}},removeItem:function(t){r.removeItem(t)}}},uslO:function(t,e,n){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function s(t){return n(r(t))}function r(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}s.keys=function(){return Object.keys(a)},s.resolve=r,t.exports=s,s.id="uslO"},v0PV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9b9146584c25dcb219c7.js.map