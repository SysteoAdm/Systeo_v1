"use strict";(self.webpackChunkIgrejaRecreio=self.webpackChunkIgrejaRecreio||[]).push([[76],{5806:(g,c,o)=>{o.d(c,{u:()=>u});var a=o(540),d=o(1626);let u=(()=>{class i{constructor(t){this.http=t}register(t){return this.http.post("http://localhost:8000/user/register",t)}login(t,n){return this.http.post("http://localhost:8000/user/login",{email:t,password:n})}setToken(t){localStorage.setItem("auth_token",t)}getToken(){return localStorage.getItem("auth_token")}logout(){localStorage.removeItem("auth_token")}isAuthenticated(){return null!==this.getToken()}static{this.\u0275fac=function(n){return new(n||i)(a.KVO(d.Qq))}}static{this.\u0275prov=a.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})()},6677:(g,c,o)=>{o.d(c,{v:()=>p});var e=o(540),a=o(5085),d=o(177);function u(t,n){if(1&t){const r=e.RV6();e.j41(0,"img",11),e.bIt("click",function(){const m=e.eBV(r).$implicit,b=e.XpG();return e.Njj(b.onImageClick(m.videoUrl,m.title))}),e.k0s()}2&t&&e.Y8G("src",n.$implicit.img,e.B4B)}const i=function(){return["/Lancamentos"]};let p=(()=>{class t{constructor(r){this.router=r,this.returnRoute="/",this.images=[{img:"assets/mini_cover1.webp",videoUrl:"https://www.youtube.com/embed/umjSQ7IuYhM",title:"Aula 1 - Qual \xe9 o 10500 Seu Prop\xf3sito | Pr. Wander Gomes?"},{img:"assets/mini_cover2.webp",videoUrl:"https://www.youtube.com/embed/5rSApVoLPZ8",title:"Aula 2 - As Ben\xe7\xe3os que o Deserto Produz | Pr. Wander Gomes"},{img:"assets/mini_cover3.webp",videoUrl:"https://www.youtube.com/embed/ApKp3lRN3jM",title:"Aula 3 - Servir, mais do que fazer | Pr. Ricardo Pinudo"},{img:"assets/mini_cover4.webp",videoUrl:"https://www.youtube.com/embed/7mdGcgDxSLU",title:"Aula 4 - B\xedblia: um tesouro eterno | Pr. Rog\xe9rio Luiz"},{img:"assets/mini_cover5.webp",videoUrl:"https://www.youtube.com/embed/jznxutuXzuI",title:"Aula 5 - O Fruto do Esp\xedrito | Pr. Humberto Chagas"},{img:"assets/mini_cover6.webp",videoUrl:"https://www.youtube.com/embed/hfXla-ZunvE",title:"Aula 6 - A Nossa Parte | Pr. Douglas Branco"},{img:"assets/mini_cover7.webp",videoUrl:"https://www.youtube.com/embed/nHzh6H56X6s",title:"Aula 7 - Perd\xe3o Total | Maur\xedcio Z\xe1gari"},{img:"assets/mini_cover8.webp",videoUrl:"https://www.youtube.com/embed/X5jmL74VLsA",title:"Aula 8 - Era Uma Vez | Pr. Ronald Batista"},{img:"assets/mini_cover9.webp",videoUrl:"https://www.youtube.com/embed/VV8s0k8HBP4",title:"Aula 9 - Teologia do Esporte | Pr. Ricardo Pinudo"},{img:"assets/mini_cover1.webp",videoUrl:"https://www.youtube.com/embed/umjSQ7IuYhM",title:"Aula 1 - Qual \xe9 o Seu Prop\xf3sito | Pr. Wander Gomes?"},{img:"assets/mini_cover2.webp",videoUrl:"https://www.youtube.com/embed/5rSApVoLPZ8",title:"Aula 2 - As Ben\xe7\xe3os que o Deserto Produz | Pr. Wander Gomes"},{img:"assets/mini_cover3.webp",videoUrl:"https://www.youtube.com/embed/ApKp3lRN3jM",title:"Aula 3 - Servir, mais do que fazer | Pr. Ricardo Pinudo"},{img:"assets/mini_cover4.webp",videoUrl:"https://www.youtube.com/embed/7mdGcgDxSLU",title:"Aula 4 - B\xedblia: um tesouro eterno | Pr. Rog\xe9rio Luiz"},{img:"assets/mini_cover5.webp",videoUrl:"https://www.youtube.com/embed/jznxutuXzuI",title:"Aula 5 - O Fruto do Esp\xedrito | Pr. Humberto Chagas"},{img:"assets/mini_cover6.webp",videoUrl:"https://www.youtube.com/embed/hfXla-ZunvE",title:"Aula 6 - A Nossa Parte | Pr. Douglas Branco"},{img:"assets/mini_cover7.webp",videoUrl:"https://www.youtube.com/embed/nHzh6H56X6s",title:"Aula 7 - Perd\xe3o Total | Maur\xedcio Z\xe1gari"},{img:"assets/mini_cover8.webp",videoUrl:"https://www.youtube.com/embed/X5jmL74VLsA",title:"Aula 8 - Era Uma Vez | Pr. Ronald Batista"},{img:"assets/mini_cover9.webp",videoUrl:"https://www.youtube.com/embed/VV8s0k8HBP4",title:"Aula 9 - Teologia do Esporte | Pr. Ricardo Pinudo"}],this.startIndex=0,this.imagesPerView=5}get visibleImages(){return this.images.slice(this.startIndex,this.startIndex+this.imagesPerView)}next(){this.startIndex+this.imagesPerView<this.images.length&&this.startIndex++}prev(){this.startIndex>0&&this.startIndex--}onImageClick(r,l){const s=this.router.url.split("?")[0];this.router.navigate(["/video-player"],{queryParams:{videoUrl:r,title:l,returnTo:s}})}static{this.\u0275fac=function(l){return new(l||t)(e.rXU(a.Ix))}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["app-slide-curso-adolescentes"]],inputs:{videoTitle:"videoTitle",videoUrl:"videoUrl",returnRoute:"returnRoute"},decls:12,vars:5,consts:[[1,"container-fluid","pb-3"],[1,"container","position-relative"],[1,"link-title","text-start","fs-4","fw-bold",3,"routerLink"],[1,"d-flex","align-items-center"],[1,"btn","btn-dark","me-2",3,"disabled","click"],[1,"bi","bi-chevron-left"],[1,"slider-wrapper","flex-grow-1","overflow-hidden","mt-3"],[1,"d-flex","flex-nowrap","gap-2"],["class","img-fluid clickable-image",3,"src","click",4,"ngFor","ngForOf"],[1,"btn","btn-dark","ms-2",3,"disabled","click"],[1,"bi","bi-chevron-right"],[1,"img-fluid","clickable-image",3,"src","click"]],template:function(l,s){1&l&&(e.j41(0,"div",0)(1,"div",1)(2,"a",2),e.EFF(3,"Assita as aulas do Curso Adoloscentes aqui:"),e.k0s(),e.j41(4,"div",3)(5,"button",4),e.bIt("click",function(){return s.prev()}),e.nrm(6,"i",5),e.k0s(),e.j41(7,"div",6)(8,"div",7),e.DNE(9,u,1,1,"img",8),e.k0s()(),e.j41(10,"button",9),e.bIt("click",function(){return s.next()}),e.nrm(11,"i",10),e.k0s()()()()),2&l&&(e.R7$(2),e.Y8G("routerLink",e.lJ4(4,i)),e.R7$(3),e.Y8G("disabled",0===s.startIndex),e.R7$(4),e.Y8G("ngForOf",s.visibleImages),e.R7$(1),e.Y8G("disabled",s.startIndex+s.imagesPerView>=s.images.length))},dependencies:[d.Sq,a.Wk],styles:[".slider-wrapper[_ngcontent-%COMP%]{width:100%;overflow:hidden}.clickable-image[_ngcontent-%COMP%]{width:341px;height:192px;object-fit:cover;cursor:pointer;transition:transform .3s ease}.clickable-image[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.btn[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.container-fluid[_ngcontent-%COMP%]   .cont-initial[_ngcontent-%COMP%]{background:linear-gradient(to left,#EDEDED,white 50%,#EDEDED)}.link-title[_ngcontent-%COMP%]{color:#57c1eb;text-decoration:none}.link-title[_ngcontent-%COMP%]:hover{cursor:pointer;color:var(--azul-intenso)}"]})}}return t})()},8837:(g,c,o)=>{o.d(c,{i:()=>u});var e=o(540),a=o(5085);const d=function(){return["/Lancamentos"]};let u=(()=>{class i{constructor(){this.startIndex=0,this.imagesPerView=5}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275cmp=e.VBU({type:i,selectors:[["app-slider-cursos-img01"]],decls:12,vars:2,consts:[[1,"container-fluid","pb-3"],[1,"container","position-relative"],[1,"link-title","text-start","fs-4","fw-bold",3,"routerLink"],[1,"d-flex","align-items-center"],["id","videoModal","tabindex","-1","aria-labelledby","videoModalLabel","aria-hidden","true","data-bs-backdrop","static",1,"modal","fade"],[1,"modal-dialog","modal-lg"],[1,"modal-content"],[1,"modal-header"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn","btn-link","ms-auto"],[1,"bi","bi-x"],[1,"modal-body"]],template:function(n,r){1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"a",2),e.EFF(3,"Lan\xe7ados Recentemente"),e.k0s(),e.nrm(4,"div",3),e.k0s()(),e.j41(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"button",8),e.nrm(10,"i",9),e.k0s()(),e.nrm(11,"div",10),e.k0s()()()),2&n&&(e.R7$(2),e.Y8G("routerLink",e.lJ4(1,d)))},dependencies:[a.Wk],styles:[".slider-wrapper[_ngcontent-%COMP%]{width:100%;overflow:hidden}.clickable-image[_ngcontent-%COMP%]{width:341px;height:192px;object-fit:cover;cursor:pointer;transition:transform .3s ease}.clickable-image[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.btn[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.container-fluid[_ngcontent-%COMP%]   .cont-initial[_ngcontent-%COMP%]{background:linear-gradient(to left,#EDEDED,white 50%,#EDEDED)}.link-title[_ngcontent-%COMP%]{color:#3c3c3c;text-decoration:none}.link-title[_ngcontent-%COMP%]:hover{cursor:pointer;color:var(--azul-intenso)}.modal-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;background-color:#343a40;color:#fff;padding:1rem}.modal-dialog[_ngcontent-%COMP%]{max-width:100%;width:100%;height:100vh;margin:0}.modal-backdrop[_ngcontent-%COMP%]{z-index:1000!important;background-color:#000000e6}.modal[_ngcontent-%COMP%]{z-index:1060!important}.modal-content[_ngcontent-%COMP%]{background-color:#343a40;height:100%;display:flex;flex-direction:column}.modal-title[_ngcontent-%COMP%]{font-size:1.5rem}.modal-footer[_ngcontent-%COMP%]{padding-top:10px}.modal-body[_ngcontent-%COMP%]{padding:0;flex-grow:1}iframe[_ngcontent-%COMP%]{width:100%;height:100%;border:none}.bi-x[_ngcontent-%COMP%]{color:#fff;font-size:30px}@media (max-width: 768px){.modal-dialog[_ngcontent-%COMP%]{max-width:95%}iframe[_ngcontent-%COMP%]{height:60vh}.modal-header[_ngcontent-%COMP%]{padding:.5rem}}"]})}}return i})()}}]);