"use strict";(self.webpackChunkIgrejaRecreio=self.webpackChunkIgrejaRecreio||[]).push([[866],{5866:(y,l,r)=>{r.r(l),r.d(l,{LoginPageModule:()=>x});var u=r(177),s=r(5085),t=r(540),p=r(1413),m=r(6977),h=r(1626);let f=(()=>{class o{constructor(n){this.http=n}register(n,e){return this.http.post("http://localhost:5261/api/Auth/register",{email:n,password:e})}login(n,e){return this.http.post("http://localhost:3000/user/login",{email:n,password:e})}setToken(n){localStorage.setItem("auth_token",n)}getToken(){return localStorage.getItem("auth_token")}logout(){localStorage.removeItem("auth_token")}isAuthenticated(){return null!==this.getToken()}static{this.\u0275fac=function(e){return new(e||o)(t.KVO(h.Qq))}}static{this.\u0275prov=t.jDH({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();var i=r(4341);const d=function(){return{standalone:!0}},b=function(){return["/Criar-Novo-Usuario"]};let C=(()=>{class o{constructor(n,e){this.authService=n,this.router=e,this.user={email:"",password:""},this.valCheck=["remember"],this.destroy$=new p.B}ngOnInit(){console.log("Teste passou aqui")}onLogin(){this.authService.login(this.user.email,this.user.password).pipe((0,m.Q)(this.destroy$)).subscribe({next:n=>{this.authService.setToken(n.token),console.log("login realizado"),this.router.navigate(["/home"])},error:n=>console.log("deu ruim")})}static{this.\u0275fac=function(e){return new(e||o)(t.rXU(f),t.rXU(s.Ix))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-login-form"]],decls:21,vars:8,consts:[[1,"container","d-flex","justify-content-center","align-items-center","cont-form"],[1,"row","w-100"],[1,"col-12","col-md-6","col-lg-4","mx-auto"],[1,"card","shadow-lg","p-4",2,"background","linear-gradient(135deg, #001F70, #0038a8, #0052cc)"],[1,"text-center","text-white","mb-4"],[1,"mb-3"],["for","email",1,"form-label","text-white"],["type","email","id","email","placeholder","Digite seu e-mail","required","",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["for","password",1,"form-label","text-white"],["type","password","id","password","placeholder","Digite sua senha","required","",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["type","submit",1,"btn","btn-primary","w-100","btn-entrar",3,"click"],[1,"text-center","text-white","mt-3"],["href","#",1,"text-primary",3,"routerLink"]],template:function(e,a){1&e&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4),t.EFF(5,"Entrar"),t.k0s(),t.j41(6,"form")(7,"div",5)(8,"label",6),t.EFF(9,"Email"),t.k0s(),t.j41(10,"input",7),t.bIt("ngModelChange",function(c){return a.user.email=c}),t.k0s()(),t.j41(11,"div",5)(12,"label",8),t.EFF(13,"Senha"),t.k0s(),t.j41(14,"input",9),t.bIt("ngModelChange",function(c){return a.user.password=c}),t.k0s()(),t.j41(15,"button",10),t.bIt("click",function(){return a.onLogin()}),t.EFF(16,"Entrar"),t.k0s()(),t.j41(17,"p",11),t.EFF(18,"N\xe3o tem uma conta? "),t.j41(19,"a",12),t.EFF(20,"Criar uma conta"),t.k0s()()()()()()),2&e&&(t.R7$(10),t.Y8G("ngModel",a.user.email)("ngModelOptions",t.lJ4(5,d)),t.R7$(4),t.Y8G("ngModel",a.user.password)("ngModelOptions",t.lJ4(6,d)),t.R7$(5),t.Y8G("routerLink",t.lJ4(7,b)))},dependencies:[s.Wk,i.qT,i.me,i.BC,i.cb,i.YS,i.vS,i.cV],styles:["body[_ngcontent-%COMP%]{background-color:#333}.cont-form[_ngcontent-%COMP%]{margin-top:5px;height:500px}.card[_ngcontent-%COMP%]{border-radius:8px}h2[_ngcontent-%COMP%]{font-size:2rem;font-weight:700}.btn-primary[_ngcontent-%COMP%]{background-color:#007bff;border-color:#007bff}.text-primary[_ngcontent-%COMP%]{color:#007bff}.text-primary[_ngcontent-%COMP%]:hover{color:#0056b3}.btn-entrar[_ngcontent-%COMP%]:hover{font-weight:500;background-color:#0056b3}"]})}}return o})();const M=[{path:"",component:(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-login-page"]],decls:6,vars:0,consts:[[2,"height","100vh"],[1,"col-12","d-flex","justify-content-center","pt-5"],["src","assets/Logo_only.webp","alt","Logo",1,"img-fluid",2,"max-width","250px"],[1,"text-center","fs-1","fw-bold","pt-3",2,"color","#ffffff"]],template:function(e,a){1&e&&(t.j41(0,"body",0)(1,"div",1),t.nrm(2,"img",2),t.k0s(),t.j41(3,"h2",3),t.EFF(4,"Fa\xe7a Login para come\xe7ar seus estudos"),t.k0s(),t.nrm(5,"app-login-form"),t.k0s())},dependencies:[C],styles:["body[_ngcontent-%COMP%]{background:linear-gradient(90deg,#1a1a2e,#16213e)}.profile-card[_ngcontent-%COMP%]{max-width:1200px;background:linear-gradient(135deg,#001F70,#0038a8,#0052cc);border-radius:0;border:none;padding:20px}.profile-img[_ngcontent-%COMP%]{border:3px solid #002FA6;padding:3px}.profile-upload[_ngcontent-%COMP%]{background-color:#f8f9fa;border-radius:6px;border:1px solid #ced4da}.form-control[_ngcontent-%COMP%]{border-radius:6px;border:1px solid #fefeff;transition:.3s}.form-control[_ngcontent-%COMP%]:focus{border-color:#f2f6f8;border:3px solid #00bfff;box-shadow:0 0 5px #f6f8f9}.save-btn[_ngcontent-%COMP%]{background-color:#00bfff;border:none;max-width:550px}.save-btn[_ngcontent-%COMP%]:hover{background-color:#04477e}.password-btn[_ngcontent-%COMP%]{background-color:#a60000;border:none}.password-btn[_ngcontent-%COMP%]:hover{background-color:#700000}"]})}}return o})()}];let v=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275mod=t.$C({type:o})}static{this.\u0275inj=t.G2t({imports:[s.iI.forChild(M),s.iI]})}}return o})();var k=r(8408);let x=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275mod=t.$C({type:o})}static{this.\u0275inj=t.G2t({imports:[u.MD,v,k.SharedModule]})}}return o})()}}]);