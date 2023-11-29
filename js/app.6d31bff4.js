(function(){"use strict";var e={2633:function(e,l,t){var n=t(9242),i=t(6672),a=t(3396);const u={class:"bg-red text-white"};function o(e,l,t,n,i,o){return(0,a.wg)(),(0,a.iD)("p",u,"--- EXERCISE --- EXERCISE --- EXERCISE --- ")}var r={name:"ExcerciseHeader"},s=t(89);const c=(0,s.Z)(r,[["render",o]]);var d=c,m=t.p+"img/header_image.6a70bf43.jpg",p=t.p+"img/logo.9af9118a.png";const f={class:"bg-white flex flex-col align-center"},g=(0,a._)("img",{src:m,class:"w-full"},null,-1),v={class:"flex items-end ml-56 max-h-24 mb-6"},w=(0,a._)("img",{src:p,class:"rounded-full w-1/6"},null,-1),b={class:"text-2xl font-bold ml-5"},k={key:0,class:"text-red"};var h={__name:"FinexHeader",props:{isAdmin:Boolean},setup(e){const l=e;return(e,t)=>((0,a.wg)(),(0,a.iD)("header",f,[g,(0,a._)("div",v,[w,(0,a._)("h1",b,[(0,a.Uk)("KLULESS "),l.isAdmin?((0,a.wg)(),(0,a.iD)("span",k,"ADMIN MODE")):(0,a.kq)("",!0)])])]))}};const x=h;var y=x,_=t(4870),D=t(7139),A=t(9504);const C={key:0,class:"bg-white w-2/3 flex flex-col items-start p-6 shadow-md"},I={key:0},V={key:1},E={class:"flex justify-between items-start w-full"},U={class:"flex items-center font-bold mb-6"},j=["src"],q={key:0,class:"fixed left-0 top-0 z-10 flex flex-col items-center justify-center w-full h-full bg-popup"},O=(0,a._)("h1",null,"set profile image with url:",-1),z=["src"],S={class:"flex flex-col justify-start items-start"},H={key:1,class:"text-lg"},L={key:3,class:"text-light-blue"},J={key:0},F={key:1},P={key:2,class:"text-dark-gray text-left"},B={class:"flex justify-evenly items-center w-full my-3"},Y=["src"],K={key:4,class:"fixed left-0 top-0 z-10 flex flex-col items-center justify-center w-full h-full bg-popup"},M=(0,a._)("h1",null,"set image with url:",-1),R=["src"],T={key:5},W=["src"],X={key:6,class:"fixed left-0 top-0 z-10 flex flex-col items-center justify-center w-full h-full bg-popup"},Z=(0,a._)("h1",null,"set video with url:",-1),N={width:"320",height:"240",controls:""},G=["src"],Q=(0,a._)("br",null,null,-1),$={class:"flex mx-2"},ee={class:"mr-6"},le={key:1},te={key:1};var ne={__name:"FinexArticle",props:{article:Object,isAdmin:Boolean},setup(e){const l=e,t=(0,_.iH)(!1),u=(0,_.iH)(!1),o=(0,_.iH)(!1),r=(0,_.iH)(!1),s=(0,_.iH)({Author:l.article.Author??"",AuthorImage:l.article.AuthorImage??"",Content:l.article.Content??"",Date:l.article.Date??"",Image:l.article.Image??"",Video:l.article.Video??"",Likes:l.article.Likes??0,Views:l.article.Views??0,Enabled:l.article.Enabled??!1});function c(){return!!(l.article&&l.article.Author&&l.article.Content&&l.article.Date)}function d(){return l.isAdmin&&t.value}function m(){return t.value?""==s.value.Image?"/finex/":s.value.Image:s.value.Image??"/finex/assets/images/default_user.jpg"}function p(){return""==s.value.AuthorImage?"/finex/assets/images/default_user.jpg":s.value.AuthorImage??"/finex/assets/images/default_user.jpg"}function f(){return l.article.Likes??0}function g(){return l.article.Views??0}function v(){s.value={Author:l.article.Author,AuthorImage:l.article.AuthorImage,Content:l.article.Content,Date:l.article.Date,Image:l.article.Image,Video:l.article.Video,Likes:l.article.Likes,Views:l.article.Views,Enabled:l.article.Enabled},t.value=!1}async function w(){t.value=!1;const e=(0,A.JU)((0,A.hJ)((0,i.CU)(),"Articles"),l.article.id);await(0,A.r7)(e,{Author:s.value.Author,AuthorImage:s.value.AuthorImage,Content:s.value.Content,Image:s.value.Image,Video:s.value.Video,Date:s.value.Date,Likes:s.value.Likes,Views:s.value.Views,Enabled:s.value.Enabled})}function b(){d()&&(u.value=!u.value)}function k(){d()&&(o.value=!o.value)}function h(){d()&&(r.value=!r.value)}function x(){d()&&(s.value.Enabled=!s.value.Enabled)}function y(){return s.value.Image&&""!=s.value.Image}function ne(){return!y&&s.value.Video&&""!=s.value.Video}function ie(){(0,A.oe)((0,A.JU)((0,i.CU)(),"Articles",l.article.id))}return(l,i)=>c()&&s.value.Enabled||e.isAdmin?((0,a.wg)(),(0,a.iD)("div",C,[e.isAdmin?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,D.C_)(["text-white px-3 rounded-md",{"bg-klu-blue":s.value.Enabled,"bg-red":!s.value.Enabled}]),onClick:i[0]||(i[0]=e=>x())},[(0,a._)("p",null,[s.value.Enabled?((0,a.wg)(),(0,a.iD)("span",I,"en")):((0,a.wg)(),(0,a.iD)("span",V,"dis")),(0,a.Uk)("abled")])],2)):(0,a.kq)("",!0),(0,a._)("div",E,[(0,a._)("div",U,[(0,a._)("img",{src:p(),class:"rounded-full w-1/12",onClick:i[1]||(i[1]=e=>b())},null,8,j),d()&&u.value?((0,a.wg)(),(0,a.iD)("div",q,[O,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":i[2]||(i[2]=e=>s.value.AuthorImage=e),placeholder:"image-src"},null,512),[[n.nr,s.value.AuthorImage]]),(0,a._)("img",{src:p()},null,8,z),(0,a._)("button",{class:"m-6 bg-klu-blue text-white rounded-sm p-3",onClick:i[3]||(i[3]=e=>u.value=!u.value)},"submit")])):(0,a.kq)("",!0),(0,a._)("div",S,[d()?(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{key:0,"onUpdate:modelValue":i[4]||(i[4]=e=>s.value.Author=e),class:"border-2 border-klu-blue",placeholder:"author"},null,512)),[[n.nr,s.value.Author]]):((0,a.wg)(),(0,a.iD)("p",H,(0,D.zw)(e.article.Author),1)),d()?(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{key:2,"onUpdate:modelValue":i[5]||(i[5]=e=>s.value.Date=e),placeholder:"date",class:"border-2 border-klu-orange"},null,512)),[[n.nr,s.value.Date]]):((0,a.wg)(),(0,a.iD)("p",L,(0,D.zw)(s.value.Date),1))])]),t.value&&e.isAdmin?((0,a.wg)(),(0,a.iD)("div",J,[(0,a._)("button",{class:"bg-klu-blue px-3 py-1 rounded-md text-white mx-3",onClick:i[6]||(i[6]=e=>w())}," save "),(0,a._)("button",{class:"bg-red px-3 py-1 rounded-md text-white",onClick:i[7]||(i[7]=e=>v())}," cancel ")])):(0,a.kq)("",!0),!t.value&&e.isAdmin?((0,a.wg)(),(0,a.iD)("div",F,[(0,a._)("button",{class:"bg-klu-orange px-3 py-1 rounded-md text-white",onClick:i[8]||(i[8]=e=>t.value=!0)}," edit "),(0,a._)("button",{class:"bg-red text-white rounded-md px-3 py-1 mx-3",onClick:i[9]||(i[9]=e=>ie())},"delete")])):(0,a.kq)("",!0)]),d()?(0,a.wy)(((0,a.wg)(),(0,a.iD)("textarea",{key:1,class:"border-2 border-klu-blue w-full h-64","onUpdate:modelValue":i[10]||(i[10]=e=>s.value.Content=e)},null,512)),[[n.nr,s.value.Content]]):((0,a.wg)(),(0,a.iD)("p",P,(0,D.zw)(e.article.Content),1)),(0,a._)("div",B,[d()?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"bg-klu-blue text-white rounded-md px-3 py-1",onClick:i[11]||(i[11]=e=>k())},"set media: image")):(0,a.kq)("",!0),d()?((0,a.wg)(),(0,a.iD)("button",{key:1,class:"bg-klu-blue text-white rounded-md px-3 py-1",onClick:i[12]||(i[12]=e=>h())},"set media: video")):(0,a.kq)("",!0)]),y||d()?((0,a.wg)(),(0,a.iD)("img",{key:3,src:s.value.Image},null,8,Y)):(0,a.kq)("",!0),d()&&o.value?((0,a.wg)(),(0,a.iD)("div",K,[M,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":i[13]||(i[13]=e=>s.value.Image=e),placeholder:"image-src"},null,512),[[n.nr,s.value.Image]]),(0,a._)("img",{src:m(),class:"max-h-28"},null,8,R),(0,a._)("button",{class:"m-6 bg-klu-blue text-white rounded-sm p-3",onClick:i[14]||(i[14]=e=>o.value=!o.value)},"submit")])):(0,a.kq)("",!0),ne?((0,a.wg)(),(0,a.iD)("video",T,[(0,a._)("source",{src:s.value.Video},null,8,W)])):(0,a.kq)("",!0),d()&&r.value?((0,a.wg)(),(0,a.iD)("div",X,[Z,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":i[15]||(i[15]=e=>s.value.Video=e),placeholder:"video-src"},null,512),[[n.nr,s.value.Video]]),(0,a._)("video",N,[(0,a._)("source",{src:s.value.Video},null,8,G)]),(0,a._)("button",{class:"m-6 bg-klu-blue text-white rounded-sm p-3",onClick:i[16]||(i[16]=e=>h())},"submit")])):(0,a.kq)("",!0),Q,(0,a._)("div",$,[(0,a._)("p",ee,[d()?(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{key:0,type:"number",class:"border-2 border-klu-blue w-1/4","onUpdate:modelValue":i[17]||(i[17]=e=>s.value.Likes=e)},null,512)),[[n.nr,s.value.Likes]]):((0,a.wg)(),(0,a.iD)("span",le,(0,D.zw)(f()),1)),(0,a.Uk)(" likes ")]),(0,a._)("p",null,[d()?(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{key:0,type:"number",class:"border-2 border-klu-blue w-1/4","onUpdate:modelValue":i[18]||(i[18]=e=>s.value.Views=e)},null,512)),[[n.nr,s.value.Views]]):((0,a.wg)(),(0,a.iD)("span",te,(0,D.zw)(g()),1)),(0,a.Uk)(" views ")])])])):(0,a.kq)("",!0)}};const ie=ne;var ae=ie,ue=t(9232);const oe={class:"flex flex-col items-center m-6"};var re={__name:"FinexNews",props:{isAdmin:Boolean,Date:(new Date).toLocaleDateString()},setup(e){const l=(0,i.CU)(),t=e,n=(0,i.Kx)((0,ue.hJ)(l,"Articles"));function u(){(0,ue.ET)((0,ue.hJ)((0,i.CU)(),"Articles"),{Enabled:!1})}return(l,i)=>((0,a.wg)(),(0,a.iD)("main",oe,[e.isAdmin?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"bg-klu-blue text-white rounded-md px-3",onClick:u},"Add new article")):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,_.SU)(n),(e=>((0,a.wg)(),(0,a.j4)(ae,{key:e.id,article:e,isAdmin:t.isAdmin,class:"my-12"},null,8,["article","isAdmin"])))),128))]))}};const se=re;var ce=se;function de(e,l){return(0,a.wg)(),(0,a.iD)("main")}const me={},pe=(0,s.Z)(me,[["render",de]]);var fe=pe,ge=t(2689);const ve={class:"fixed z-10 flex items-center justify-center w-full h-full"},we={class:"bg-white px-6 py-3 flex flex-col border-klu-orange border-2"},be={class:"flex justify-between mb-6"},ke=(0,a._)("h1",{class:"text-lg bold"},"Sign in",-1),he={class:"flex flex-col"};var xe={__name:"SignIn",emits:["codeUpdate","closePopup"],setup(e,{emit:l}){const t=(0,_.iH)(""),i=(0,_.iH)(""),u=l,o=(0,ge.v0)();function r(){(0,ge.e5)(o,t.value,i.value).then((()=>{console.log("logged in!"),u("codeUpdate",!0),u("closePopup")})).catch((()=>{console.log("couldn't log in..."),u("codeUpdate",!1)}))}return(e,l)=>((0,a.wg)(),(0,a.iD)("div",ve,[(0,a._)("div",we,[(0,a._)("div",be,[ke,(0,a._)("button",{class:"text-red",onClick:l[0]||(l[0]=e=>u("closePopup"))},"x")]),(0,a._)("form",he,[(0,a.wy)((0,a._)("input",{placeholder:"email","onUpdate:modelValue":l[1]||(l[1]=e=>t.value=e),class:"my-3"},null,512),[[n.nr,t.value]]),(0,a.wy)((0,a._)("input",{placeholder:"password",type:"password","onUpdate:modelValue":l[2]||(l[2]=e=>i.value=e),class:"my-3"},null,512),[[n.nr,i.value]])]),(0,a._)("button",{onClick:l[3]||(l[3]=e=>r()),class:"bg-klu-blue text-white my-3 rounded-lg"},"log in")])]))}};const ye=xe;var _e=ye;const De={class:"bg-gray"};var Ae={__name:"App",setup(e){const l=(0,ge.v0)(),t=(0,_.iH)(null!=l.currentUser),n=(0,_.iH)(!1);function i(e){t.value=e}function u(){(0,ge.w7)(l).then((()=>{t.value=!1})).catch((e=>{console.log("tried to logout but failed..."),console.log(e)}))}return(e,l)=>((0,a.wg)(),(0,a.iD)("div",De,[t.value?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"bg-red text-white fixed right-0 z-10 p-3 m-3 rounded-md hover:text-klu-blue",onClick:u}," Sign out ")):((0,a.wg)(),(0,a.iD)("button",{key:1,class:"bg-klu-blue text-white fixed right-0 z-10 p-3 m-3 rounded-md hover:text-klu-orange",onClick:l[0]||(l[0]=e=>n.value=!0)}," Sign in ")),n.value?((0,a.wg)(),(0,a.j4)(_e,{key:2,onCodeUpdate:i,onClosePopup:l[1]||(l[1]=e=>n.value=!1)})):(0,a.kq)("",!0),(0,a.Wm)(d,{class:"fixed text-center w-full top-0 p-6"}),(0,a.Wm)(y,{isAdmin:t.value},null,8,["isAdmin"]),t.value?((0,a.wg)(),(0,a.j4)(fe,{key:3})):(0,a.kq)("",!0),(0,a.Wm)(ce,{isAdmin:t.value},null,8,["isAdmin"])]))}};const Ce=Ae;var Ie=Ce,Ve=t(7795);const Ee={apiKey:"AIzaSyB3kUVhsC2Csb-A8_ztxcYY8J5OECImYE8",authDomain:"finex-e99ac.firebaseapp.com",projectId:"finex-e99ac",storageBucket:"finex-e99ac.appspot.com",messagingSenderId:"1064566145141",appId:"1:1064566145141:web:85f0bb3f92d2c87d14783c"},Ue=(0,Ve.ZF)(Ee),je=(0,ue.ad)(Ue),qe=((0,ue.hJ)(je,"Articles"),(0,n.ri)(Ie));qe.use(i.Yo,{firebaseApp:Ue,modules:[(0,i.Fl)()]}),qe.mount("#app")}},l={};function t(n){var i=l[n];if(void 0!==i)return i.exports;var a=l[n]={exports:{}};return e[n].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(l,n,i,a){if(!n){var u=1/0;for(c=0;c<e.length;c++){n=e[c][0],i=e[c][1],a=e[c][2];for(var o=!0,r=0;r<n.length;r++)(!1&a||u>=a)&&Object.keys(t.O).every((function(e){return t.O[e](n[r])}))?n.splice(r--,1):(o=!1,a<u&&(u=a));if(o){e.splice(c--,1);var s=i();void 0!==s&&(l=s)}}return l}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,i,a]}}(),function(){t.n=function(e){var l=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(l,{a:l}),l}}(),function(){t.d=function(e,l){for(var n in l)t.o(l,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:l[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)}}(),function(){t.p="/finex/"}(),function(){var e={143:0};t.O.j=function(l){return 0===e[l]};var l=function(l,n){var i,a,u=n[0],o=n[1],r=n[2],s=0;if(u.some((function(l){return 0!==e[l]}))){for(i in o)t.o(o,i)&&(t.m[i]=o[i]);if(r)var c=r(t)}for(l&&l(n);s<u.length;s++)a=u[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(c)},n=self["webpackChunkfinex_application"]=self["webpackChunkfinex_application"]||[];n.forEach(l.bind(null,0)),n.push=l.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(2633)}));n=t.O(n)})();
//# sourceMappingURL=app.6d31bff4.js.map