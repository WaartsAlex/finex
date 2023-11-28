(function(){"use strict";var e={2633:function(e,l,t){var n=t(9242),a=t(6672),i=t(3396);const u={class:"bg-red text-white"};function r(e,l,t,n,a,r){return(0,i.wg)(),(0,i.iD)("p",u,"--- EXERCISE --- EXERCISE --- EXERCISE --- ")}var o={name:"ExcerciseHeader"},s=t(89);const c=(0,s.Z)(o,[["render",r]]);var d=c,g=t.p+"img/header_image.6a70bf43.jpg",p=t.p+"img/logo.9af9118a.png";const f={class:"bg-white flex flex-col align-center"},m=(0,i._)("img",{src:g,class:"w-full"},null,-1),v={class:"flex items-end ml-56 max-h-24 mb-6"},w=(0,i._)("img",{src:p,class:"rounded-full w-1/6"},null,-1),b={class:"text-2xl font-bold ml-5"},h={key:0,class:"text-red"};var k={__name:"FinexHeader",props:{isAdmin:Boolean},setup(e){const l=e;return(e,t)=>((0,i.wg)(),(0,i.iD)("header",f,[m,(0,i._)("div",v,[w,(0,i._)("h1",b,[(0,i.Uk)("KLULESS "),l.isAdmin?((0,i.wg)(),(0,i.iD)("span",h,"ADMIN MODE")):(0,i.kq)("",!0)])])]))}};const x=k;var y=x,_=t(4870),A=t(7139),D=t(9504);const C={key:0,class:"bg-white w-2/3 flex flex-col items-start p-6 shadow-md"},I={key:0},E={key:1},U={class:"flex justify-between items-start w-full"},V={class:"flex items-center font-bold mb-6"},j=["src"],O={key:0,class:"fixed left-0 top-0 z-10 flex flex-col items-center justify-center w-full h-full bg-popup"},z=(0,i._)("h1",null,"set profile image with url:",-1),S=["src"],H={class:"flex flex-col justify-start items-start"},L={key:1,class:"text-lg"},q={key:3,class:"text-light-blue"},F={key:0},P={key:2,class:"text-dark-gray text-left"},B=["src"],J={key:4,class:"fixed left-0 top-0 z-10 flex flex-col items-center justify-center w-full h-full bg-popup"},Y=(0,i._)("h1",null,"set image with url:",-1),K=["src"],M={key:5},R=(0,i._)("br",null,null,-1),W={class:"flex mx-2"},X={class:"mr-6"},Z={key:1},N={key:1};var T={__name:"FinexArticle",props:{article:Object,isAdmin:Boolean},setup(e){const l=e,t=(0,_.iH)(!1),u=(0,_.iH)(!1),r=(0,_.iH)(!1),o=(0,_.iH)({Author:l.article.Author??"",AuthorImage:l.article.AuthorImage??"",Content:l.article.Content??"",Date:l.article.Date??"",Image:l.article.Image??"/",Video:l.article.Video??"",Likes:l.article.Likes??0,Views:l.article.Views??0,Enabled:l.article.Enabled??!1});function s(){return!!(l.article&&l.article.Author&&l.article.Content&&l.article.Date)}function c(){return l.isAdmin&&t.value}function d(){return t.value?""==o.value.Image?"/finex/":o.value.Image:o.value.Image??"/finex/assets/images/default_user.jpg"}function g(){return t.value?""==o.value.AuthorImage?"/finex/assets/images/default_user.jpg":o.value.AuthorImage:o.value.AuthorImage??"/finex/assets/images/default_user.jpg"}function p(){return l.article.Likes??0}function f(){return l.article.Views??0}function m(){o.value={Author:l.article.Author,AuthorImage:l.article.AuthorImage,Content:l.article.Content,Date:l.article.Date,Image:l.article.Image,Likes:l.article.Likes,Views:l.article.Views,Enabled:l.article.Enabled},t.value=!1}async function v(){t.value=!1;const e=(0,D.JU)((0,D.hJ)((0,a.CU)(),"Articles"),l.article.id);await(0,D.r7)(e,{Author:o.value.Author,AuthorImage:o.value.AuthorImage,Content:o.value.Content,Image:o.value.Image,Date:o.value.Date,Likes:o.value.Likes,Views:o.value.Views,Enabled:o.value.Enabled})}function w(){c()&&(u.value=!u.value)}function b(){c()&&(r.value=!r.value)}function h(){c()&&(o.value.Enabled=!o.value.Enabled)}return(l,a)=>s()&&o.value.Enabled||e.isAdmin?((0,i.wg)(),(0,i.iD)("div",C,[e.isAdmin?((0,i.wg)(),(0,i.iD)("div",{key:0,class:(0,A.C_)(["text-white px-3 rounded-md",{"bg-klu-blue":o.value.Enabled,"bg-red":!o.value.Enabled}]),onClick:a[0]||(a[0]=e=>h())},[(0,i._)("p",null,[o.value.Enabled?((0,i.wg)(),(0,i.iD)("span",I,"en")):((0,i.wg)(),(0,i.iD)("span",E,"dis")),(0,i.Uk)("abled")])],2)):(0,i.kq)("",!0),(0,i._)("div",U,[(0,i._)("div",V,[(0,i._)("img",{src:g(),class:"rounded-full w-1/12",onClick:a[1]||(a[1]=e=>w())},null,8,j),c()&&u.value?((0,i.wg)(),(0,i.iD)("div",O,[z,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":a[2]||(a[2]=e=>o.value.AuthorImage=e),placeholder:"image-src"},null,512),[[n.nr,o.value.AuthorImage]]),(0,i._)("img",{src:g()},null,8,S),(0,i._)("button",{class:"m-6 bg-klu-blue text-white rounded-sm p-3",onClick:a[3]||(a[3]=e=>u.value=!u.value)},"submit")])):(0,i.kq)("",!0),(0,i._)("div",H,[c()?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:0,"onUpdate:modelValue":a[4]||(a[4]=e=>o.value.Author=e),class:"border-2 border-klu-blue",placeholder:"author"},null,512)),[[n.nr,o.value.Author]]):((0,i.wg)(),(0,i.iD)("p",L,(0,A.zw)(e.article.Author),1)),c()?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:2,"onUpdate:modelValue":a[5]||(a[5]=e=>o.value.Date=e),placeholder:"date",class:"border-2 border-klu-orange"},null,512)),[[n.nr,o.value.Date]]):((0,i.wg)(),(0,i.iD)("p",q,(0,A.zw)(o.value.Date),1))])]),t.value&&e.isAdmin?((0,i.wg)(),(0,i.iD)("div",F,[(0,i._)("button",{class:"bg-klu-blue px-3 py-1 rounded-md text-white",onClick:a[6]||(a[6]=e=>v())}," save "),(0,i._)("button",{class:"bg-red px-3 py-1 rounded-md text-white",onClick:a[7]||(a[7]=e=>m())}," cancel ")])):e.isAdmin?((0,i.wg)(),(0,i.iD)("button",{key:1,class:"bg-klu-orange px-3 py-1 rounded-md text-white",onClick:a[8]||(a[8]=e=>t.value=!0)}," edit ")):(0,i.kq)("",!0)]),c()?(0,i.wy)(((0,i.wg)(),(0,i.iD)("textarea",{key:1,class:"border-2 border-klu-blue w-full h-64","onUpdate:modelValue":a[9]||(a[9]=e=>o.value.Content=e)},null,512)),[[n.nr,o.value.Content]]):((0,i.wg)(),(0,i.iD)("p",P,(0,A.zw)(e.article.Content),1)),e.article.Image||c()?((0,i.wg)(),(0,i.iD)("img",{key:3,src:d(),onClick:a[10]||(a[10]=e=>b())},null,8,B)):(0,i.kq)("",!0),c()&&r.value?((0,i.wg)(),(0,i.iD)("div",J,[Y,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":a[11]||(a[11]=e=>o.value.Image=e),placeholder:"image-src"},null,512),[[n.nr,o.value.Image]]),(0,i._)("img",{src:d()},null,8,K),(0,i._)("button",{class:"m-6 bg-klu-blue text-white rounded-sm p-3",onClick:a[12]||(a[12]=e=>r.value=!r.value)},"submit")])):e.article.Video?((0,i.wg)(),(0,i.iD)("video",M)):(0,i.kq)("",!0),R,(0,i._)("div",W,[(0,i._)("p",X,[c()?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:0,type:"number",class:"border-2 border-klu-blue w-1/4","onUpdate:modelValue":a[13]||(a[13]=e=>o.value.Likes=e)},null,512)),[[n.nr,o.value.Likes]]):((0,i.wg)(),(0,i.iD)("span",Z,(0,A.zw)(p()),1)),(0,i.Uk)(" likes ")]),(0,i._)("p",null,[c()?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:0,type:"number",class:"border-2 border-klu-blue w-1/4","onUpdate:modelValue":a[14]||(a[14]=e=>o.value.Views=e)},null,512)),[[n.nr,o.value.Views]]):((0,i.wg)(),(0,i.iD)("span",N,(0,A.zw)(f()),1)),(0,i.Uk)(" views ")])])])):(0,i.kq)("",!0)}};const G=T;var Q=G,$=t(9232);const ee={class:"flex flex-col items-center m-6"};var le={__name:"FinexNews",props:{isAdmin:Boolean},setup(e){const l=(0,a.CU)(),t=e,n=(0,a.Kx)((0,$.hJ)(l,"Articles"));return(e,l)=>((0,i.wg)(),(0,i.iD)("main",ee,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,_.SU)(n),(e=>((0,i.wg)(),(0,i.j4)(Q,{key:e.id,article:e,isAdmin:t.isAdmin,class:"my-12"},null,8,["article","isAdmin"])))),128))]))}};const te=le;var ne=te;function ae(e,l){return(0,i.wg)(),(0,i.iD)("main")}const ie={},ue=(0,s.Z)(ie,[["render",ae]]);var re=ue,oe=t(2689);const se={class:"fixed z-10 flex items-center justify-center w-full h-full"},ce={class:"bg-white px-6 py-3 flex flex-col border-klu-orange border-2"},de={class:"flex justify-between mb-6"},ge=(0,i._)("h1",{class:"text-lg bold"},"Sign in",-1),pe={class:"flex flex-col"};var fe={__name:"SignIn",emits:["codeUpdate","closePopup"],setup(e,{emit:l}){const t=(0,_.iH)(""),a=(0,_.iH)(""),u=l,r=(0,oe.v0)();function o(){(0,oe.e5)(r,t.value,a.value).then((()=>{console.log("logged in!"),u("codeUpdate",!0),u("closePopup")})).catch((()=>{console.log("couldn't log in..."),u("codeUpdate",!1)}))}return(e,l)=>((0,i.wg)(),(0,i.iD)("div",se,[(0,i._)("div",ce,[(0,i._)("div",de,[ge,(0,i._)("button",{class:"text-red",onClick:l[0]||(l[0]=e=>u("closePopup"))},"x")]),(0,i._)("form",pe,[(0,i.wy)((0,i._)("input",{placeholder:"email","onUpdate:modelValue":l[1]||(l[1]=e=>t.value=e),class:"my-3"},null,512),[[n.nr,t.value]]),(0,i.wy)((0,i._)("input",{placeholder:"password",type:"password","onUpdate:modelValue":l[2]||(l[2]=e=>a.value=e),class:"my-3"},null,512),[[n.nr,a.value]])]),(0,i._)("button",{onClick:l[3]||(l[3]=e=>o()),class:"bg-klu-blue text-white my-3 rounded-lg"},"log in")])]))}};const me=fe;var ve=me;const we={class:"bg-gray"};var be={__name:"App",setup(e){const l=(0,oe.v0)(),t=(0,_.iH)(null!=l.currentUser),n=(0,_.iH)(!1);function a(e){t.value=e}function u(){(0,oe.w7)(l).then((()=>{t.value=!1})).catch((e=>{console.log("tried to logout but failed..."),console.log(e)}))}return(e,l)=>((0,i.wg)(),(0,i.iD)("div",we,[t.value?((0,i.wg)(),(0,i.iD)("button",{key:0,class:"bg-red text-white fixed right-0 z-10 p-3 m-3 rounded-md hover:text-klu-blue",onClick:u}," Sign out ")):((0,i.wg)(),(0,i.iD)("button",{key:1,class:"bg-klu-blue text-white fixed right-0 z-10 p-3 m-3 rounded-md hover:text-klu-orange",onClick:l[0]||(l[0]=e=>n.value=!0)}," Sign in ")),n.value?((0,i.wg)(),(0,i.j4)(ve,{key:2,onCodeUpdate:a,onClosePopup:l[1]||(l[1]=e=>n.value=!1)})):(0,i.kq)("",!0),(0,i.Wm)(d,{class:"fixed text-center w-full top-0 p-6"}),(0,i.Wm)(y,{isAdmin:t.value},null,8,["isAdmin"]),t.value?((0,i.wg)(),(0,i.j4)(re,{key:3})):(0,i.kq)("",!0),(0,i.Wm)(ne,{isAdmin:t.value},null,8,["isAdmin"])]))}};const he=be;var ke=he,xe=t(7795);const ye={apiKey:"AIzaSyB3kUVhsC2Csb-A8_ztxcYY8J5OECImYE8",authDomain:"finex-e99ac.firebaseapp.com",projectId:"finex-e99ac",storageBucket:"finex-e99ac.appspot.com",messagingSenderId:"1064566145141",appId:"1:1064566145141:web:85f0bb3f92d2c87d14783c"},_e=(0,xe.ZF)(ye),Ae=(0,$.ad)(_e),De=((0,$.hJ)(Ae,"Articles"),(0,n.ri)(ke));De.use(a.Yo,{firebaseApp:_e,modules:[(0,a.Fl)()]}),De.mount("#app")}},l={};function t(n){var a=l[n];if(void 0!==a)return a.exports;var i=l[n]={exports:{}};return e[n].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(l,n,a,i){if(!n){var u=1/0;for(c=0;c<e.length;c++){n=e[c][0],a=e[c][1],i=e[c][2];for(var r=!0,o=0;o<n.length;o++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[o])}))?n.splice(o--,1):(r=!1,i<u&&(u=i));if(r){e.splice(c--,1);var s=a();void 0!==s&&(l=s)}}return l}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,a,i]}}(),function(){t.n=function(e){var l=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(l,{a:l}),l}}(),function(){t.d=function(e,l){for(var n in l)t.o(l,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:l[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)}}(),function(){t.p="/finex/"}(),function(){var e={143:0};t.O.j=function(l){return 0===e[l]};var l=function(l,n){var a,i,u=n[0],r=n[1],o=n[2],s=0;if(u.some((function(l){return 0!==e[l]}))){for(a in r)t.o(r,a)&&(t.m[a]=r[a]);if(o)var c=o(t)}for(l&&l(n);s<u.length;s++)i=u[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(c)},n=self["webpackChunkfinex_application"]=self["webpackChunkfinex_application"]||[];n.forEach(l.bind(null,0)),n.push=l.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(2633)}));n=t.O(n)})();
//# sourceMappingURL=app.42567c59.js.map