(function(){"use strict";var e={8947:function(e,n,t){var r=t(5130),a=t(6768);function i(e,n,t,r,i,o){const u=(0,a.g2)("SideBar"),c=(0,a.g2)("PageViewer");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(u,{pages:i.pages,activePage:i.activePage,onChangePage:n[0]||(n[0]=e=>o.changePage(e))},null,8,["pages","activePage"]),(0,a.bF)(c,{page:i.pages[i.activePage]},null,8,["page"]),n[1]||(n[1]=(0,a.Lk)("a",null,"Hallo",-1))],64)}var o=t(4232);const u={class:"sidebar"},c=["href","title","onClick"];function l(e,n,t,r,i,l){return(0,a.uX)(),(0,a.CE)("div",u,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t.pages,((e,n)=>((0,a.uX)(),(0,a.CE)("div",{key:n},[(0,a.Lk)("a",{href:e.link.url,title:`This link goes to ${e.link.text} page`,class:(0,o.C4)({active:t.activePage==n}),onClick:e=>l.changePage(n)},(0,o.v_)(e.link.text),11,c)])))),128))])}var s={props:["pages","activePage"],methods:{changePage(e){this.$emit("change-page",e)}},data(){return{}}},g=t(1241);const f=(0,g.A)(s,[["render",l]]);var p=f;const v={class:"container"};function h(e,n,t,r,i,u){return(0,a.uX)(),(0,a.CE)("div",v,[(0,a.Lk)("h1",null,(0,o.v_)(t.page.pageTitle),1),(0,a.Lk)("a",null,(0,o.v_)(t.page.content),1)])}var d={props:["page"]};const k=(0,g.A)(d,[["render",h]]);var b=k,P={components:{SideBar:p,PageViewer:b},methods:{changePage(e){this.activePage=e}},data(){return{activePage:0,pages:[{link:{text:"Dashboard",url:"#"},pageTitle:"Dashboard",content:"Content"},{link:{text:"timer",url:"#"},pageTitle:"Set time",content:"Content - 2"},{link:{text:"Settings",url:"#"},pageTitle:"settings",content:"Content - 3"}]}}};const C=(0,g.A)(P,[["render",i]]);var m=C;(0,r.Ef)(m).mount("#app")}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,a,i){if(!r){var o=1/0;for(s=0;s<e.length;s++){r=e[s][0],a=e[s][1],i=e[s][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||o>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<o&&(o=i));if(u){e.splice(s--,1);var l=a();void 0!==l&&(n=l)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,a,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var a,i,o=r[0],u=r[1],c=r[2],l=0;if(o.some((function(n){return 0!==e[n]}))){for(a in u)t.o(u,a)&&(t.m[a]=u[a]);if(c)var s=c(t)}for(n&&n(r);l<o.length;l++)i=o[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},r=self["webpackChunktest"]=self["webpackChunktest"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(8947)}));r=t.O(r)})();
//# sourceMappingURL=app.6239b7d9.js.map