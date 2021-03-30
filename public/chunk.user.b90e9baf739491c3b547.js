(self.webpackChunktest=self.webpackChunktest||[]).push([[378],{47:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var n=r(900);const s=(0,n.Z)({},(function(){var e=this;e.$createElement;return e._self._c,e._m(0)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"loader"},[r("div",{staticClass:"bounce1"}),e._v(" "),r("div",{staticClass:"bounce2"}),e._v(" "),r("div",{staticClass:"bounce3"})])}],!1,null,null,null).exports,o={props:{show:{type:Boolean,default:!1}},watch:{show:function(e){}},methods:{closeEventListener:function(e){27===e.which&&this.$emit("close")}},mounted:function(){document.querySelector("html").classList.add("no-scroll"),document.querySelector("body").insertBefore(this.$el,document.querySelector("body").firstChild),document.addEventListener("keydown",this.closeEventListener)},beforeDestroy:function(){document.removeEventListener("keydown",this.closeEventListener),document.querySelector("html").classList.remove("no-scroll"),this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}},l=(0,n.Z)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"modal"},[r("div",{staticClass:"modal-overlay",on:{mousedown:function(t){return t.target!==t.currentTarget?null:(t.stopPropagation(),e.$emit("close"))}}},[r("div",{staticClass:"modal-window"},[r("button",{staticClass:"modal-close",on:{click:function(t){return e.$emit("close")}}}),e._v(" "),r("div",{staticClass:"modal-body"},[r("div",{staticClass:"modal-title"},[e._t("title")],2),e._v(" "),e._t("content")],2)])])])])}),[],!1,null,null,null).exports;var i=r(629);function a(){return{userDescriptionConfig:[{title:"Имя",key:"name"},{title:"Тип пользователя",key:"type"},{title:"Email",key:"email"},{title:"Id",key:"id"},{title:"Компания",key:"company"},{title:"Местоположение",key:"location"},{title:"Публичные репозитории",key:"public_repos"}]}}var c=r(1);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const p={name:"User",components:{modal:l,loader:s},data:function(){return{content:a.call(this)}},computed:d(d({},(0,i.Se)(["getUser"])),{},{isLoading:function(){return 0===Object.keys(this.getUser).length}}),methods:d(d({},(0,i.nv)(["searchUserByLogin","clearUser"])),{},{closeModal:function(){this.$router.push({name:"search",params:{query:this.$route.params.query},query:{page:this.$route.query.page}})}}),beforeRouteEnter:function(e,t,r){c.Z.dispatch("searchUserByLogin",e.params.login),r()},beforeRouteLeave:function(e,t,r){c.Z.dispatch("clearUser"),r()}},f=(0,n.Z)(p,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("modal",{attrs:{show:!0},on:{close:e.closeModal},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n        "+e._s(e.$route.params.login)+"\n    ")]},proxy:!0},{key:"content",fn:function(){return[e.isLoading?r("loader"):e._e(),e._v(" "),e.isLoading?e._e():r("div",{staticClass:"user-modal"},[r("img",{staticClass:"user-modal__img mb-5",attrs:{src:e.getUser.avatar_url,alt:"",width:"200px",height:"200px"}}),e._v(" "),e._l(e.content.userDescriptionConfig,(function(t){return r("p",{staticClass:"user-modal__text"},[r("span",{staticClass:"text-bold"},[e._v(e._s(t.title)+":")]),e._v(" "+e._s(e.getUser[t.key]||"-")+"\n        ")])})),e._v(" "),r("p",{staticClass:"user-modal__text"},[r("span",{staticClass:"text-bold"},[e._v("Ссылка на GitHub:")]),e._v(" "),r("a",{staticClass:"user-modal__link",attrs:{href:e.getUser.html_url,rel:"noopener noreferrer nofollow",target:"_blank"}},[e._v("\n            "+e._s(e.getUser.html_url)+"\n          ")])])],2)]},proxy:!0}])})}),[],!1,null,"5679aa74",null).exports}}]);