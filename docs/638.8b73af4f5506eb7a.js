"use strict";(self.webpackChunkIgrejaRecreio=self.webpackChunkIgrejaRecreio||[]).push([[638],{8837:(b,m,i)=>{i.d(m,{i:()=>u});var e=i(540),d=i(5085),a=i(177);function c(r,g){if(1&r){const o=e.RV6();e.j41(0,"img",20),e.bIt("click",function(){const l=e.eBV(o).$implicit,s=e.XpG();return e.Njj(s.onImageClick(l.videoUrl,l.title))}),e.k0s()}2&r&&e.Y8G("src",g.$implicit.img,e.B4B)}const p=function(){return["/Lancamentos"]};let u=(()=>{class r{constructor(o){this.router=o,this.images=[{img:"assets/mini_cover1.webp",videoUrl:"https://www.youtube.com/embed/umjSQ7IuYhM",title:"Aula 1 - Qual \xe9 o Seu Prop\xf3sito | Pr. Wander Gomes?"},{img:"assets/mini_cover2.webp",videoUrl:"https://www.youtube.com/embed/5rSApVoLPZ8",title:"Aula 2 - As Ben\xe7\xe3os que o Deserto Produz | Pr. Wander Gomes"},{img:"assets/mini_cover3.webp",videoUrl:"https://www.youtube.com/embed/ApKp3lRN3jM",title:"Aula 3 - Servir, mais do que fazer | Pr. Ricardo Pinudo"},{img:"assets/mini_cover4.webp",videoUrl:"https://www.youtube.com/embed/7mdGcgDxSLU",title:"Aula 4 - B\xedblia: um tesouro eterno | Pr. Rog\xe9rio Luiz"},{img:"assets/mini_cover5.webp",videoUrl:"https://www.youtube.com/embed/jznxutuXzuI",title:"Aula 5 - O Fruto do Esp\xedrito | Pr. Humberto Chagas"},{img:"assets/mini_cover6.webp",videoUrl:"https://www.youtube.com/embed/hfXla-ZunvE",title:"Aula 6 - A Nossa Parte | Pr. Douglas Branco"},{img:"assets/mini_cover7.webp",videoUrl:"https://www.youtube.com/embed/nHzh6H56X6s",title:"Aula 7 - Perd\xe3o Total | Maur\xedcio Z\xe1gari"},{img:"assets/mini_cover8.webp",videoUrl:"https://www.youtube.com/embed/X5jmL74VLsA",title:"Aula 8 - Era Uma Vez | Pr. Ronald Batista"},{img:"assets/mini_cover9.webp",videoUrl:"https://www.youtube.com/embed/VV8s0k8HBP4",title:"Aula 9 - Teologia do Esporte | Pr. Ricardo Pinudo"},{img:"assets/mini_cover1.webp",videoUrl:"https://www.youtube.com/embed/umjSQ7IuYhM",title:"Aula 1 - Qual \xe9 o Seu Prop\xf3sito | Pr. Wander Gomes?"},{img:"assets/mini_cover2.webp",videoUrl:"https://www.youtube.com/embed/5rSApVoLPZ8",title:"Aula 2 - As Ben\xe7\xe3os que o Deserto Produz | Pr. Wander Gomes"},{img:"assets/mini_cover3.webp",videoUrl:"https://www.youtube.com/embed/ApKp3lRN3jM",title:"Aula 3 - Servir, mais do que fazer | Pr. Ricardo Pinudo"},{img:"assets/mini_cover4.webp",videoUrl:"https://www.youtube.com/embed/7mdGcgDxSLU",title:"Aula 4 - B\xedblia: um tesouro eterno | Pr. Rog\xe9rio Luiz"},{img:"assets/mini_cover5.webp",videoUrl:"https://www.youtube.com/embed/jznxutuXzuI",title:"Aula 5 - O Fruto do Esp\xedrito | Pr. Humberto Chagas"},{img:"assets/mini_cover6.webp",videoUrl:"https://www.youtube.com/embed/hfXla-ZunvE",title:"Aula 6 - A Nossa Parte | Pr. Douglas Branco"},{img:"assets/mini_cover7.webp",videoUrl:"https://www.youtube.com/embed/nHzh6H56X6s",title:"Aula 7 - Perd\xe3o Total | Maur\xedcio Z\xe1gari"},{img:"assets/mini_cover8.webp",videoUrl:"https://www.youtube.com/embed/X5jmL74VLsA",title:"Aula 8 - Era Uma Vez | Pr. Ronald Batista"},{img:"assets/mini_cover9.webp",videoUrl:"https://www.youtube.com/embed/VV8s0k8HBP4",title:"Aula 9 - Teologia do Esporte | Pr. Ricardo Pinudo"}],this.startIndex=0,this.imagesPerView=5}get visibleImages(){return this.images.slice(this.startIndex,this.startIndex+this.imagesPerView)}next(){this.startIndex+this.imagesPerView<this.images.length&&this.startIndex++}prev(){this.startIndex>0&&this.startIndex--}onImageClick(o,t){this.router.navigate(["/video-player"],{queryParams:{videoUrl:o,title:t}})}static{this.\u0275fac=function(t){return new(t||r)(e.rXU(d.Ix))}}static{this.\u0275cmp=e.VBU({type:r,selectors:[["app-slider-cursos-img01"]],inputs:{videoTitle:"videoTitle",videoUrl:"videoUrl"},decls:22,vars:7,consts:[[1,"container-fluid","pb-3"],[1,"container","position-relative"],[1,"link-title","text-start","fs-4","fw-bold",3,"routerLink"],[1,"d-flex","align-items-center"],[1,"btn","btn-dark","me-2",3,"disabled","click"],[1,"bi","bi-chevron-left"],[1,"slider-wrapper","flex-grow-1","overflow-hidden","mt-3"],[1,"d-flex","flex-nowrap","gap-2"],["class","img-fluid clickable-image",3,"src","click",4,"ngFor","ngForOf"],[1,"btn","btn-dark","ms-2",3,"disabled","click"],[1,"bi","bi-chevron-right"],["id","videoModal","tabindex","-1","aria-labelledby","videoModalLabel","aria-hidden","true","data-bs-backdrop","static",1,"modal","fade"],[1,"modal-dialog","modal-lg"],[1,"modal-content"],[1,"modal-header"],["id","videoModalLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn","btn-link","ms-auto"],[1,"bi","bi-x"],[1,"modal-body"],["title","Video","allowfullscreen","",1,"w-100",2,"height","85vh","border","none",3,"src"],[1,"img-fluid","clickable-image",3,"src","click"]],template:function(t,n){1&t&&(e.j41(0,"div",0)(1,"div",1)(2,"a",2),e.EFF(3,"Lan\xe7ados Recentemente"),e.k0s(),e.j41(4,"div",3)(5,"button",4),e.bIt("click",function(){return n.prev()}),e.nrm(6,"i",5),e.k0s(),e.j41(7,"div",6)(8,"div",7),e.DNE(9,c,1,1,"img",8),e.k0s()(),e.j41(10,"button",9),e.bIt("click",function(){return n.next()}),e.nrm(11,"i",10),e.k0s()()()(),e.j41(12,"div",11)(13,"div",12)(14,"div",13)(15,"div",14)(16,"h5",15),e.EFF(17),e.k0s(),e.j41(18,"button",16),e.nrm(19,"i",17),e.k0s()(),e.j41(20,"div",18),e.nrm(21,"iframe",19),e.k0s()()()()),2&t&&(e.R7$(2),e.Y8G("routerLink",e.lJ4(6,p)),e.R7$(3),e.Y8G("disabled",0===n.startIndex),e.R7$(4),e.Y8G("ngForOf",n.visibleImages),e.R7$(1),e.Y8G("disabled",n.startIndex+n.imagesPerView>=n.images.length),e.R7$(7),e.JRh(n.videoTitle),e.R7$(4),e.Y8G("src",n.videoUrl,e.f$h))},dependencies:[a.Sq,d.Wk],styles:[".slider-wrapper[_ngcontent-%COMP%]{width:100%;overflow:hidden}.clickable-image[_ngcontent-%COMP%]{width:341px;height:192px;object-fit:cover;cursor:pointer;transition:transform .3s ease}.clickable-image[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.btn[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.container-fluid[_ngcontent-%COMP%]   .cont-initial[_ngcontent-%COMP%]{background:linear-gradient(to left,#EDEDED,white 50%,#EDEDED)}.link-title[_ngcontent-%COMP%]{color:#3c3c3c;text-decoration:none}.link-title[_ngcontent-%COMP%]:hover{cursor:pointer;color:var(--azul-intenso)}.modal-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;background-color:#343a40;color:#fff;padding:1rem}.modal-dialog[_ngcontent-%COMP%]{max-width:100%;width:100%;height:100vh;margin:0}.modal-backdrop[_ngcontent-%COMP%]{z-index:1000!important;background-color:#000000e6}.modal[_ngcontent-%COMP%]{z-index:1060!important}.modal-content[_ngcontent-%COMP%]{background-color:#343a40;height:100%;display:flex;flex-direction:column}.modal-title[_ngcontent-%COMP%]{font-size:1.5rem}.modal-footer[_ngcontent-%COMP%]{padding-top:10px}.modal-body[_ngcontent-%COMP%]{padding:0;flex-grow:1}iframe[_ngcontent-%COMP%]{width:100%;height:100%;border:none}.bi-x[_ngcontent-%COMP%]{color:#fff;font-size:30px}@media (max-width: 768px){.modal-dialog[_ngcontent-%COMP%]{max-width:95%}iframe[_ngcontent-%COMP%]{height:60vh}.modal-header[_ngcontent-%COMP%]{padding:.5rem}}"]})}}return r})()},8638:(b,m,i)=>{i.r(m),i.d(m,{TestPageModule:()=>o});var e=i(177),d=i(5085),a=i(540),c=i(8837);const u=[{path:"",component:(()=>{class t{static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275cmp=a.VBU({type:t,selectors:[["app-test-page"]],decls:1,vars:0,template:function(s,h){1&s&&a.nrm(0,"app-slider-cursos-img01")},dependencies:[c.i]})}}return t})()}];let r=(()=>{class t{static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275mod=a.$C({type:t})}static{this.\u0275inj=a.G2t({imports:[d.iI.forChild(u),d.iI]})}}return t})();var g=i(8408);let o=(()=>{class t{static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275mod=a.$C({type:t})}static{this.\u0275inj=a.G2t({imports:[e.MD,r,g.SharedModule]})}}return t})()}}]);