import{d as i}from"./vendor-7fe3a1dd.js";import{C as o}from"./index-58e6d2a7.js";import{c as a,M as c,g as l,n as d}from"./index-c94c97be.js";const g=a.friendsRepo===""||a.friendsRepo===void 0,h={name:"Friend",components:{Comment:o,Markdown:c},data(){return{filterFriends:[],loseContact:[],notAdded:[],loading:!0}},computed:{friendInfo(){return`\`\`\`js
name: ${this.$config.name}
url: ${this.$config.url}
avatar: ${this.$config.avatar}
desc: ${this.$config.desc}
\`\`\``},friendLink(){let n="https://github.com/";return n+=`${this.$config.username}/${this.$config.friendsRepo}/issues`,n},showLoseContact(){return this.loseContact.length>0},showNotAdded(){return this.notAdded.length>0}},created(){this.getFriendsFn()},methods:{...i({getFriendsCountAction:"github/getFriendsCountAction",getFriendsAction:"github/getFriendsAction",getBlogFriendsAction:"github/getBlogFriendsAction"}),parseFriends(n){n.forEach(e=>{const s=e.labels.map(r=>r.name);s.includes("未添加")?this.notAdded.push(e):s.includes("失联")?this.loseContact.push(e):this.filterFriends.push(e)})},parseBlogFriends(n){n.forEach(e=>{const t=e.tag;t.name==="未添加"?this.notAdded.push(e):t.name==="失联"?this.loseContact.push(e):this.filterFriends.push(e)})},async getFriendsCountFn(){return await this.getFriendsCountAction().catch(n=>{throw this.$message({content:"获取友链总数失败",type:"error"}),new Error(n)})},async getFriendsFn(){if(g){const{url:n,pageSize:e}=await l().catch(s=>{throw this.$message({content:"获取友链失败",type:"error"}),new Error(s)}),t=await this.getBlogFriendsAction({url:n,page:1,pageSize:e}).catch(s=>{throw this.$message({content:"获取友链失败",type:"error"}),new Error(s)}).finally(()=>{this.loading=!1});this.parseBlogFriends(t)}else{const n=await this.getFriendsCountFn().catch(t=>{throw this.$message({content:"获取友链总数失败",type:"error"}),new Error(t)}),e=await this.getFriendsAction({page:1,pageSize:n}).catch(t=>{throw this.$message({content:"获取友链失败",type:"error"}),new Error(t)}).finally(()=>{this.loading=!1});this.parseFriends(e)}}}};var u=function(){var e=this,t=e._self._c;return t("div",{staticClass:"friend-wrap"},[t("div",{staticClass:"friend"},[t("section",[t("h2",[t("SvgIcon",{attrs:{name:"lianjie"}}),e._v(" 我的友链信息")],1),t("div",{staticClass:"info-wrap"},[t("p",[e._v("欢迎各位大佬交换友链 (づ￣ 3￣)づ")]),t("p",[e._v("以下是我的友链信息，各位大佬可以在页面下按照这个格式留言，或者前往 "),t("a",{attrs:{href:e.friendLink}},[e._v("Friend")]),e._v(" 自行创建")]),t("Markdown",{attrs:{content:e.friendInfo,"need-parsed":!0}})],1)]),t("section",[t("h2",[t("SvgIcon",{attrs:{name:"zhinan"}}),e._v(" 小伙伴们")],1),t("p",[e._v("※ 以下友链友链随机排序，博主将不定期更新排序并过滤阵亡名单")]),t("p",[e._v("※ 为了页面视觉体验，头像将保存到博主自己的存储空间，如果有更新请即时联系博主修改")]),t("ul",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"content"},e._l(e.filterFriends,function(s){return t("li",{key:s.number},[t("a",{staticClass:"info",attrs:{href:s.url,rel:"noopener noreferrer",target:"_blank"}},[t("figure",{staticClass:"avatar"},[t("img",{attrs:{src:s.avatar,alt:"avatar",loading:"lazy"}})]),t("div",{staticClass:"text"},[t("h3",{staticClass:"name"},[e._v(e._s(s.name))]),t("p",{staticClass:"desc"},[e._v(e._s(s.desc))])])])])}),0)]),e.showLoseContact?t("section",[t("p",{staticClass:"strong"},[e._v(" 失联的小伙伴们 ")]),t("ul",{staticClass:"content"},e._l(e.loseContact,function(s){return t("li",{key:s.number},[t("a",{staticClass:"info",attrs:{href:s.url,rel:"noopener noreferrer",target:"_blank"}},[t("figure",{staticClass:"avatar"},[t("img",{attrs:{src:s.avatar,alt:"avatar",loading:"lazy"}})]),t("div",{staticClass:"text"},[t("h3",{staticClass:"name"},[e._v(e._s(s.name))]),t("p",{staticClass:"desc"},[e._v(e._s(s.desc))])])])])}),0),t("p",[e._v("请以上失联的小伙伴尽快恢复网站的正常访问，并且通知博主")])]):e._e(),e.showNotAdded?t("section",[t("p",{staticClass:"strong"},[e._v(" 未添加本站的小伙伴们 ")]),t("ul",{staticClass:"not-added"},e._l(e.notAdded,function(s){return t("li",{key:s.number},[t("h3",{staticClass:"name"},[e._v(" "+e._s(s.name)+" ")])])}),0),t("p",[e._v("如果需要本博客继续收录您的站点，请于您的站点添加本站后联系博主")])]):e._e()]),t("Comment")],1)},p=[],_=d(h,u,p,!1,null,"f09ea4b8",null,null);const C=_.exports;export{C as default};