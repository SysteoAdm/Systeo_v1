"use strict";(self.webpackChunkIgrejaRecreio=self.webpackChunkIgrejaRecreio||[]).push([[771],{3771:(u,e,n)=>{n.r(e),n.d(e,{CriarNovoUsuarioModule:()=>m});var s=n(177),a=n(5085),o=n(540);const d=[{path:"",component:(()=>{class t{static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=o.VBU({type:t,selectors:[["app-criar-novo-usuario"]],decls:110,vars:0,consts:[[1,"container","d-flex","justify-content-center","my-5"],[1,"card","p-4","shadow-lg","w-100","profile-card"],[1,"text-center"],[1,"text-center","mb-3"],["src","https://via.placeholder.com/120","alt","Foto do usu\xe1rio",1,"rounded-circle","img-thumbnail","profile-img"],["type","file","accept","image/*",1,"form-control","mt-2","profile-upload"],[1,"fw-bold","mt-3"],[1,"row"],[1,"col-md-6"],[1,"form-label"],["type","text",1,"form-control"],[1,"row","mt-2"],["type","email",1,"form-control"],["type","date",1,"form-control"],[1,"form-control"],[1,"fw-bold","mt-4"],[1,"mb-2"],["type","password",1,"form-control"],[1,"text-center","mt-4"],["type","button",1,"btn","btn-primary","w-100","save-btn"]],template:function(r,F){1&r&&(o.j41(0,"div",0)(1,"div",1)(2,"h3",2),o.EFF(3,"Criar Novo Usu\xe1rio"),o.k0s(),o.j41(4,"form")(5,"div",3),o.nrm(6,"img",4)(7,"input",5),o.k0s(),o.j41(8,"h5",6),o.EFF(9,"Dados Pessoais"),o.k0s(),o.j41(10,"div",7)(11,"div",8)(12,"label",9),o.EFF(13,"CPF:"),o.k0s(),o.nrm(14,"input",10),o.k0s(),o.j41(15,"div",8)(16,"label",9),o.EFF(17,"Nome:"),o.k0s(),o.nrm(18,"input",10),o.k0s()(),o.j41(19,"div",11)(20,"div",8)(21,"label",9),o.EFF(22,"E-mail:"),o.k0s(),o.nrm(23,"input",12),o.k0s(),o.j41(24,"div",8)(25,"label",9),o.EFF(26,"Celular:"),o.k0s(),o.nrm(27,"input",10),o.k0s()(),o.j41(28,"div",11)(29,"div",8)(30,"label",9),o.EFF(31,"Profiss\xe3o:"),o.k0s(),o.nrm(32,"input",10),o.k0s(),o.j41(33,"div",8)(34,"label",9),o.EFF(35,"Data de Nascimento:"),o.k0s(),o.nrm(36,"input",13),o.k0s()(),o.j41(37,"div",11)(38,"div",8)(39,"label",9),o.EFF(40,"Sexo:"),o.k0s(),o.j41(41,"select",14)(42,"option"),o.EFF(43,"Masculino"),o.k0s(),o.j41(44,"option"),o.EFF(45,"Feminino"),o.k0s()()(),o.j41(46,"div",8)(47,"label",9),o.EFF(48,"CEP:"),o.k0s(),o.nrm(49,"input",10),o.k0s()(),o.j41(50,"div",11)(51,"div",8)(52,"label",9),o.EFF(53,"Estado:"),o.k0s(),o.nrm(54,"input",10),o.k0s(),o.j41(55,"div",8)(56,"label",9),o.EFF(57,"Cidade:"),o.k0s(),o.nrm(58,"input",10),o.k0s()(),o.j41(59,"div",11)(60,"div",8)(61,"label",9),o.EFF(62,"Bairro:"),o.k0s(),o.nrm(63,"input",10),o.k0s(),o.j41(64,"div",8)(65,"label",9),o.EFF(66,"Rua:"),o.k0s(),o.nrm(67,"input",10),o.k0s()(),o.j41(68,"div",11)(69,"div",8)(70,"label",9),o.EFF(71,"N\xfamero:"),o.k0s(),o.nrm(72,"input",10),o.k0s(),o.j41(73,"div",8)(74,"label",9),o.EFF(75,"Complemento:"),o.k0s(),o.nrm(76,"input",10),o.k0s()(),o.j41(77,"h5",15),o.EFF(78,"Dados de Batismo"),o.k0s(),o.j41(79,"div",7)(80,"div",8)(81,"label",9),o.EFF(82,"Data de Batismo:"),o.k0s(),o.nrm(83,"input",13),o.k0s(),o.j41(84,"div",8)(85,"label",9),o.EFF(86,"Cidade de Batismo:"),o.k0s(),o.nrm(87,"input",10),o.k0s()(),o.j41(88,"div",11)(89,"div",8)(90,"label",9),o.EFF(91,"Igreja de Batismo:"),o.k0s(),o.nrm(92,"input",10),o.k0s(),o.j41(93,"div",8)(94,"label",9),o.EFF(95,"Pastor de Batismo:"),o.k0s(),o.nrm(96,"input",10),o.k0s()(),o.j41(97,"h5",15),o.EFF(98,"Criar Senha"),o.k0s(),o.j41(99,"div",16)(100,"label",9),o.EFF(101,"Nova Senha:"),o.k0s(),o.nrm(102,"input",17),o.k0s(),o.j41(103,"div",16)(104,"label",9),o.EFF(105,"Confirmar Nova Senha:"),o.k0s(),o.nrm(106,"input",17),o.k0s(),o.j41(107,"div",18)(108,"button",19),o.EFF(109,"Criar"),o.k0s()()()()())},styles:[".profile-card[_ngcontent-%COMP%]{max-width:600px;background-color:#ededed;border-radius:12px;border:none;padding:20px}.profile-img[_ngcontent-%COMP%]{border:3px solid #002FA6;padding:3px}.profile-upload[_ngcontent-%COMP%]{background-color:#f8f9fa;border-radius:6px;border:1px solid #ced4da}.form-control[_ngcontent-%COMP%]{border-radius:6px;border:1px solid #ced4da;transition:.3s}.form-control[_ngcontent-%COMP%]:focus{border-color:#002fa6;box-shadow:0 0 5px #002fa680}.save-btn[_ngcontent-%COMP%]{background-color:#002fa6;border:none}.save-btn[_ngcontent-%COMP%]:hover{background-color:#001f70}.password-btn[_ngcontent-%COMP%]{background-color:#a60000;border:none}.password-btn[_ngcontent-%COMP%]:hover{background-color:#700000}"]})}}return t})()}];let l=(()=>{class t{static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275mod=o.$C({type:t})}static{this.\u0275inj=o.G2t({imports:[a.iI.forChild(d),a.iI]})}}return t})();var c=n(8408);let m=(()=>{class t{static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275mod=o.$C({type:t})}static{this.\u0275inj=o.G2t({imports:[s.MD,l,c.SharedModule]})}}return t})()}}]);