"use strict";(self.webpackChunkIgrejaRecreio=self.webpackChunkIgrejaRecreio||[]).push([[41],{4041:(v,a,r)=>{r.r(a),r.d(a,{VideoPlayerModule:()=>f});var l=r(177),s=r(5085),t=r(540),u=r(345),d=r(6677);const h=[{path:"",component:(()=>{class e{constructor(n,o,i,c){this.route=n,this.sanitizer=o,this.location=i,this.router=c,this.videoUrl="",this.videoTitle="",this.returnTo="/"}ngOnInit(){this.route.queryParams.subscribe(n=>{this.videoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(n.videoUrl),this.videoTitle=n.title,this.returnTo=n.returnTo||"/"})}closePlayer(){this.router.navigate([this.returnTo])}static{this.\u0275fac=function(o){return new(o||e)(t.rXU(s.nX),t.rXU(u.up),t.rXU(l.aZ),t.rXU(s.Ix))}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-video-player"]],decls:12,vars:2,consts:[[1,"pb-5",2,"background-color","black"],[1,"container-fluid","cont-header","position-relative","d-flex","align-items-center","justify-content-center"],[1,"d-flex","align-items-center","gap-2"],[1,"text-white","m-0"],[1,"btn","btn-primary"],["aria-label","Fechar",1,"btn","custom-close-btn","position-absolute","end-0","me-3",3,"click"],[1,"container","text-center","pb-5"],["allowfullscreen","",1,"w-100",2,"height","85vh","border","none",3,"src"]],template:function(o,i){1&o&&(t.j41(0,"body",0)(1,"div",1)(2,"div",2)(3,"h2",3),t.EFF(4),t.k0s(),t.j41(5,"button",4),t.EFF(6,"Alguma A\xe7\xe3o"),t.k0s()(),t.j41(7,"button",5),t.bIt("click",function(){return i.closePlayer()}),t.EFF(8,"\xd7 "),t.k0s()(),t.j41(9,"div",6),t.nrm(10,"iframe",7),t.k0s(),t.nrm(11,"app-slide-curso-adolescentes"),t.k0s()),2&o&&(t.R7$(4),t.JRh(i.videoTitle),t.R7$(6),t.Y8G("src",i.videoUrl,t.f$h))},dependencies:[d.v],styles:[".cont-header[_ngcontent-%COMP%]{background:linear-gradient(90deg,#1a1a2e,#16213e);height:80px;position:relative}.custom-close-btn[_ngcontent-%COMP%]{background:none;border:none;font-size:2.5rem;font-weight:100;color:#f0f0f0;cursor:pointer;transition:color .3s ease;position:absolute;top:50%;transform:translateY(-50%)}"]})}}return e})()}];let m=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=t.$C({type:e})}static{this.\u0275inj=t.G2t({imports:[s.iI.forChild(h),s.iI]})}}return e})();var p=r(8408);let f=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=t.$C({type:e})}static{this.\u0275inj=t.G2t({imports:[l.MD,m,p.SharedModule]})}}return e})()}}]);