import{d as _}from"./vendor-2ac6fe9f.js";import{n as h,L as g,p as n,s as o,h as u}from"./index-8798f8d2.js";const f={name:"ArchiveCard",props:{cover:{type:String,default:""},title:{type:String,default:""},createdAt:{type:String,default:""}},computed:{create(){return this.createdAt.slice(5,10)}}};var m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"archive-card"},[e("figure",{staticClass:"archive-cover"},[e("img",{attrs:{src:t.cover||t.$config.defaultCover,alt:"cover"}})]),e("div",{staticClass:"archive-text"},[e("h3",[t._v(t._s(t.create))]),e("p",[t._v(t._s(t.title))])])])},p=[],C=h(f,m,p,!1,null,"cb711796",null,null);const A=C.exports;const $={name:"Archives",components:{ArchiveCard:A,Loading:g},data(){return{totalCount:0,archives:[],archiveMap:{},tags:[],isFilter:!1,filterCount:0,timer:null,loading:!0}},computed:{editLink(){let s="https://github.com/";return s+=`${this.$config.username}/${this.$config.repository}/issues`,s},filterText(){return this.filterCount===0?this.$t("no_articles"):`${this.$t("tag_articles")} ${this.filterCount} ${this.$t("under_this_label")}`}},created(){this.getArchiveCountFn(),this.getArchivesFn(),this.getTagsFn()},beforeUnmount(){clearTimeout(this.timer)},methods:{..._({getPostsCountAction:"github/getPostsCountAction",getPostsAction:"github/getPostsAction",getTagsAction:"github/getTagsAction"}),async getArchiveCountFn(){this.totalCount=await this.getPostsCountAction().catch(s=>{throw this.$message({content:"获取文章总数失败",type:"error"}),new Error(s)})},async getArchivesFn(){this.archives=this.archives.concat(await this.getPostsAction({page:1,pageSize:100}).catch(t=>{throw this.$message({content:"获取文章列表失败",type:"error"}),new Error(t)}).finally(()=>{this.loading=!1}));const s=n(this.archives);this.archiveMap=o(s)},async getTagsFn(){this.tags=await this.getTagsAction().catch(s=>{throw this.$message({content:"获取标签列表失败",type:"error"}),new Error(s)}),this.tags.forEach((s,t)=>{s.index=t,s.hslColor=u(`#${s.color}}`)})},filterArchives(s){const t=s.target,e=this.tags||[];if(t.classList.contains("tag")){this.loading=!0;const i=Number(t.getAttribute("data-tag")),a=Math.random()*(1300-300)+300,l=e.find(r=>r.id===i);if(l){const r=this.archives.filter(c=>c.tags.find(d=>d.id===l.id));t.parentNode.querySelectorAll(".tag").forEach(c=>{c.classList.remove("active")}),t.classList.add("active");const v=n(r);this.archiveMap=o(v),this.filterCount=r.length,this.isFilter=!0,this.timer=setTimeout(()=>{clearTimeout(this.timer),this.loading=!1},a)}}},clearAll(){this.$refs.tagList.querySelectorAll(".tag").forEach(t=>{t.classList.remove("active")});const s=n(this.archives);this.archiveMap=o(s),this.isFilter=!1}}};var y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"archives-wrap"},[e("div",{staticClass:"archives"},[e("div",{staticClass:"tags"},[e("div",{staticClass:"tags-header"},[e("h2",[e("SvgIcon",{attrs:{name:"biaoqian"}}),t._v(" "+t._s(t.$t("tags")))],1),t.isFilter?e("div",{staticClass:"clear-all",on:{click:t.clearAll}},[t._v(" "+t._s(t.$t("clear_selection"))+" ")]):t._e()]),e("div",{staticClass:"tags-body"},[e("ul",{ref:"tagList",staticClass:"tag-list",on:{click:t.filterArchives}},t._l(t.tags,function(i){return e("li",{key:i.id,staticClass:"tag",style:{"--color":`#${i.color}`,"--tag-hsl":i.hslColor,"--delay":`${i.index}`},attrs:{"data-tag":i.id}},[t._v(" "+t._s(i.name||"")+" ")])}),0)])]),e("div",{staticClass:"archives-list"},[e("div",{staticClass:"archives-header"},[t.isFilter?e("h2",[e("SvgIcon",{attrs:{name:"danju"}}),t._v(" "+t._s(t.filterText)+" ")],1):e("h2",[e("SvgIcon",{attrs:{name:"danju"}}),t._v(" "+t._s(t.$t("you_have_written"))+" "+t._s(t.totalCount)+" "+t._s(t.$t("keep_writing"))+" "),e("a",{staticClass:"edit",attrs:{href:t.editLink,target:"_blank"}},[e("SvgIcon",{attrs:{name:"shuru"}})],1)],1)]),e("div",{staticClass:"archives-body"},[t.loading?e("Loading"):t._e(),e("transition",{attrs:{name:"from-bottom"}},[t.loading?t._e():e("div",t._l(Object.keys(t.archiveMap).reverse(),function(i){return e("div",{key:i,staticClass:"archive-items"},[e("div",{staticClass:"archive-year"},[t._v(" "+t._s(i)+" ")]),e("div",{staticClass:"archive-item-list"},t._l(t.archiveMap[i],function(a){return e("router-link",{key:a.id,attrs:{to:{name:"Post",params:{number:a.number}}}},[e("ArchiveCard",{attrs:{cover:a.cover,title:a.title,"created-at":a.created_at}})],1)}),1)])}),0)])],1)])])])},b=[],x=h($,y,b,!1,null,"58733698",null,null);const w=x.exports;export{w as default};
