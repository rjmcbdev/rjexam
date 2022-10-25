(function(){"use strict";var e={3597:function(e,n,t){var i=t(9242),r=t(3396);function a(e,n){const t=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(t)}var o=t(89);const s={},l=(0,o.Z)(s,[["render",a]]);var c=l,u=t(2483);const d={class:"home"};function _(e,n,t,i,a,o){const s=(0,r.up)("HelloWorld");return(0,r.wg)(),(0,r.iD)("div",d,[(0,r.Wm)(s,{msg:"Welcome to Your Vue.js App"})])}var w=t(7139);const f=(0,r._)("meta",{charset:"utf-8"},null,-1),m=(0,r._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"},null,-1),v={class:"container"},g=(0,r.uE)('<div class="mt-2"> </div><div id="header" class="mt-5 row"><div class="col-5"><div id="page-title" class="header"><h1>Oracle Test</h1></div><hr><p>The task is to display the data below that includes the filter feature working and user search function.</p></div><div class="col-4"></div><div class="col-3"><div id="page-visits" class="card"><div class="text-center card-body"><h2>6</h2><span>Number of time users visit this page</span></div></div></div></div>',2),p={id:"filter",class:"mt-3 row"},h={class:"col"},y={class:"card"},b={id:"filter-header",class:"card-header"},j={class:"row"},k=(0,r._)("div",{class:"col-2"},[(0,r._)("select",{id:"quarter",title:"quarter",name:"quarter",class:""},[(0,r._)("option",{value:""},"All Quarters")])],-1),O=(0,r._)("div",{class:"col-3"},null,-1),C={class:"col-7"},S={class:"row"},x={class:"col"},A={class:"text-right"},D=(0,r._)("label",{id:"filter-by-text",class:"mt-2 align-middle"},"Filter By :",-1),T={id:"categories",title:"categories",name:"categories",class:""},M=(0,r._)("option",{value:""},"All Categories",-1),q={id:"region",title:"region",name:"region",class:""},H=(0,r._)("option",{value:""},"All Region",-1),E=(0,r._)("input",{type:"text",class:"d-inline",id:"search",placeholder:"Search by name..."},null,-1),P={id:"filter-card-container",class:"card-body"},z={class:"row"},R={class:"card mb-4"},B={class:"card-body"},F={id:"item-cat-title"},N=(0,r._)("i",null,"for",-1),W={id:"item-cat-sub-title"},G={class:"mt-3"},J={id:"item-winner-country"},K={id:"item-name"},L={id:"item-title"};function Y(e,n,t,i,a,o){return(0,r.wg)(),(0,r.iD)(r.HY,null,[f,m,(0,r._)("div",v,[g,(0,r._)("div",p,[(0,r._)("div",h,[(0,r._)("div",y,[(0,r._)("div",b,[(0,r._)("div",j,[k,O,(0,r._)("div",C,[(0,r._)("div",S,[(0,r._)("div",x,[(0,r._)("div",A,[D,(0,r._)("select",T,[M,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.categories,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e,value:""},(0,w.zw)(e),1)))),128))]),(0,r._)("select",q,[H,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.regions,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e,value:"{{ reg }}"},(0,w.zw)(e),1)))),128))]),E])])])])])]),(0,r._)("div",P,[(0,r._)("div",z,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.items,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"region col-4",key:e.id},[(0,r._)("div",R,[(0,r._)("div",B,[(0,r._)("div",null,[(0,r._)("strong",F,(0,w.zw)(e.award_cat_title),1)]),N,(0,r.Uk)(),(0,r._)("span",W,(0,w.zw)(e.award_cat_sub_title),1),(0,r._)("div",G,[(0,r._)("small",null,[(0,r._)("strong",J,(0,w.zw)(e.winner_country),1)]),(0,r._)("div",null,[(0,r._)("span",K,(0,w.zw)(e.winner_first_name)+" "+(0,w.zw)(e.winner_last_name),1)]),(0,r._)("div",null,[(0,r._)("small",null,[(0,r._)("strong",L,(0,w.zw)(e.winner_discretionary_title),1)])])])])])])))),128))])])])])])])],64)}var Z=JSON.parse('{"wc":[{"id":583,"winner_first_name":"Olson","winner_last_name":"Hunt","winner_email":"olsonhunt@email.com","winner_region":"India","winner_country":"India","winner_country_code":"in","winner_discretionary_title":"Principal Internet Sales Consultant","award_cat_id":564,"award_cat_title":"Business Growth","award_cat_sub_id":285,"award_cat_sub_title":"Largest Renewal Deal","running_fy":22,"running_q":4},{"id":904,"winner_first_name":"Lina","winner_last_name":"Beasley","winner_email":"linabeasley@email.com","winner_region":"HKTW","winner_country":"Macau","winner_country_code":"mo","winner_discretionary_title":"Business Development Consultant","award_cat_id":564,"award_cat_title":"Business Growth","award_cat_sub_id":645,"award_cat_sub_title":"Top Performer License","running_fy":22,"running_q":3},{"id":902,"winner_first_name":"Jessie","winner_last_name":"Webster","winner_email":"jessiewebster@email.com","winner_region":"ASEAN & SAGE","winner_country":"Singapore","winner_country_code":"sg","winner_discretionary_title":"Senior Analytst, Global Marketing Demand Center","award_cat_id":826,"award_cat_title":"Customer First","award_cat_sub_id":235,"award_cat_sub_title":"Top FLM","running_fy":22,"running_q":4},{"id":676,"winner_first_name":"Garrett","winner_last_name":"Mooney","winner_email":"garrettmooney@email.com","winner_region":"Japan","winner_country":"Japan","winner_country_code":"jp","winner_discretionary_title":"Senior Analytst, Global Marketing Demand Center","award_cat_id":826,"award_cat_title":"Customer First","award_cat_sub_id":666,"award_cat_sub_title":"Top Renewal Rep","running_fy":22,"running_q":4},{"id":849,"winner_first_name":"Jodi","winner_last_name":"Roth","winner_email":"jodiroth@email.com","winner_region":"Korea","winner_country":"Korea","winner_country_code":"kr","winner_discretionary_title":"Sales Director","award_cat_id":826,"award_cat_title":"Customer First","award_cat_sub_id":172,"award_cat_sub_title":"Top CSM Rep","running_fy":21,"running_q":4},{"id":248,"winner_first_name":"Jody","winner_last_name":"Sears","winner_email":"jodysears@email.com","winner_region":"ANZ","winner_country":"Australia","winner_country_code":"au","winner_discretionary_title":"ODA Sales Manager","award_cat_id":736,"award_cat_title":"Success Culture","award_cat_sub_id":827,"award_cat_sub_title":"Best Collaboration Deal","running_fy":22,"running_q":4}]}'),I=(t(7658),t(7387)),V=t.n(I),Q={getRegions:function(e){var n=[],t=[];return V()(e).each((function(){t.push(this.winner_region)})),n=t.filter((function(e,n){return t.indexOf(e)==n})),n},getCategories:function(e){var n=[],t=[];return V()(e).each((function(){t.push(this.award_cat_title)})),console.log(t),n=t.filter((function(e,n){return t.indexOf(e)==n})),n}},U={name:"HelloWorld",props:{msg:String},data(){return{items:Z.wc,categories:Q.getCategories(Z.wc),regions:Q.getRegions(Z.wc)}}};const X=(0,o.Z)(U,[["render",Y]]);var $=X,ee={name:"HomeView",components:{HelloWorld:$}};const ne=(0,o.Z)(ee,[["render",_]]);var te=ne;const ie=[{path:"/",name:"home",component:te},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,7381))}],re=(0,u.p7)({history:(0,u.PO)("/rjexam/"),routes:ie});var ae=re,oe=t(65),se=(0,oe.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});t(3455);(0,i.ri)(c).use(se).use(ae).mount("#app")}},n={};function t(i){var r=n[i];if(void 0!==r)return r.exports;var a=n[i]={exports:{}};return e[i].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,i,r,a){if(!i){var o=1/0;for(u=0;u<e.length;u++){i=e[u][0],r=e[u][1],a=e[u][2];for(var s=!0,l=0;l<i.length;l++)(!1&a||o>=a)&&Object.keys(t.O).every((function(e){return t.O[e](i[l])}))?i.splice(l--,1):(s=!1,a<o&&(o=a));if(s){e.splice(u--,1);var c=r();void 0!==c&&(n=c)}}return n}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[i,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,i){return t.f[i](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/about.a5aaba22.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="rjexam:";t.l=function(i,r,a,o){if(e[i])e[i].push(r);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==n+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+a),s.src=i),e[i]=[r];var _=function(n,t){s.onerror=s.onload=null,clearTimeout(w);var r=e[i];if(delete e[i],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(t)})),n)return n(t)},w=setTimeout(_.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=_.bind(null,s.onerror),s.onload=_.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/rjexam/"}(),function(){var e={143:0};t.f.j=function(n,i){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)i.push(r[2]);else{var a=new Promise((function(t,i){r=e[n]=[t,i]}));i.push(r[2]=a);var o=t.p+t.u(n),s=new Error,l=function(i){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;s.message="Loading chunk "+n+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,r[1](s)}};t.l(o,l,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,i){var r,a,o=i[0],s=i[1],l=i[2],c=0;if(o.some((function(n){return 0!==e[n]}))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(l)var u=l(t)}for(n&&n(i);c<o.length;c++)a=o[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(u)},i=self["webpackChunkrjexam"]=self["webpackChunkrjexam"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(3597)}));i=t.O(i)})();
//# sourceMappingURL=app.c07ae5c1.js.map