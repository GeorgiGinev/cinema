"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9091],{9091:(S,u,r)=>{r.r(u),r.d(u,{AuthPageModule:()=>T});var l=r(7022),t=r(4719),e=r(5062),d=r(9737),m=r(7427),i=r(4153),g=r(9485),C=r(2010),v=r(8488);const Z=["*"];let h=(()=>{class o{constructor(n){this.pageContainerService=n}ngOnInit(){this.headerTitle=this.pageContainerService.headerTitle}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(m.a))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ci-page"]],ngContentSelectors:Z,decls:4,vars:1,template:function(n,a){1&n&&(e.F$t(),e.TgZ(0,"ci-header"),e._uU(1),e.qZA(),e.TgZ(2,"ci-content"),e.Hsn(3),e.qZA()),2&n&&(e.xp6(1),e.hij(" ",a.headerTitle,"\n"))},dependencies:[C.G,v.S],styles:["[_nghost-%COMP%]{display:block;height:100%;width:100%;background-color:#fff}"],changeDetection:0}),o})(),f=(()=>{class o{constructor(n,a,p,c){this.formBuilder=n,this.userService=a,this.pageContainerService=p,this.router=c}ngOnInit(){this.pageContainerService.headerTitle="Sign In",this.createForm()}signIn(){this.formGroup.valid&&(this.promise=this.userService.login(this.formGroup.value).then(n=>{this.router.navigate(["/panel/dashboard"])},()=>{}))}createForm(){this.formGroup=this.formBuilder.group({email:[null,t.kI.required],password:[null,[t.kI.required]]})}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(t.qu),e.Y36(d.K),e.Y36(m.a),e.Y36(l.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],decls:17,vars:2,consts:[["size","12","size-md","4","offset-md","4"],[3,"formGroup"],["position","stacked"],["placeholder","Enter email","type","email","formControlName","email"],["placeholder","Enter password","type","password","formControlName","password"],[1,"ion-text-center","ion-margin-top"],["color","primary",3,"promise","click"]],template:function(n,a){1&n&&(e.TgZ(0,"ci-page")(1,"ion-grid")(2,"ion-row")(3,"ion-col",0)(4,"form",1)(5,"ion-list")(6,"ion-item")(7,"ion-label",2),e._uU(8,"Enter email"),e.qZA(),e._UZ(9,"ion-input",3),e.qZA(),e.TgZ(10,"ion-item")(11,"ion-label",2),e._uU(12,"Enter password"),e.qZA(),e._UZ(13,"ion-input",4),e.qZA()(),e.TgZ(14,"div",5)(15,"ci-button",6),e.NdJ("click",function(){return a.signIn()}),e._uU(16," Login "),e.qZA()()()()()()()),2&n&&(e.xp6(4),e.Q6J("formGroup",a.formGroup),e.xp6(11),e.Q6J("promise",a.promise))},dependencies:[t._Y,t.JJ,t.JL,i.wI,i.jY,i.pK,i.Ie,i.Q$,i.q_,i.Nd,i.j9,t.sg,t.u,g.r,h]}),o})();var A=r(6256);const U=[{path:"",component:f},{path:"login",component:f},{path:"register",component:(()=>{class o{constructor(n,a,p,c){this.formBuilder=n,this.authService=a,this.userService=p,this.pageContainerService=c}ngOnInit(){this.pageContainerService.headerTitle="Sign Up",this.createForm()}signUp(){this.formGroup.valid&&(this.signUpButton=this.userService.create(this.formGroup.value).then(()=>{},()=>{}))}createForm(){this.formGroup=this.formBuilder.group({email:[null,[t.kI.required,t.kI.email]],name:[null,[t.kI.required,t.kI.minLength(2)]],password:[null,[t.kI.required,t.kI.minLength(8)]],password_confirmation:[null,[t.kI.required,t.kI.minLength(8)]]})}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(t.qu),e.Y36(A.e),e.Y36(d.K),e.Y36(m.a))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-register"]],decls:25,vars:2,consts:[["size","12","size-md","4","offset-md","4"],[3,"formGroup"],["position","stacked"],["placeholder","Enter email","type","email","formControlName","email"],["placeholder","Enter name","type","test","formControlName","name"],["placeholder","Enter password","type","password","formControlName","password"],["placeholder","Confirm password","type","password","formControlName","password_confirmation"],[1,"ion-text-center","ion-margin-top"],["color","primary",3,"promise","click"]],template:function(n,a){1&n&&(e.TgZ(0,"ci-page")(1,"ion-grid")(2,"ion-row")(3,"ion-col",0)(4,"form",1)(5,"ion-list")(6,"ion-item")(7,"ion-label",2),e._uU(8,"Enter email"),e.qZA(),e._UZ(9,"ion-input",3),e.qZA(),e.TgZ(10,"ion-item")(11,"ion-label",2),e._uU(12,"Name"),e.qZA(),e._UZ(13,"ion-input",4),e.qZA(),e.TgZ(14,"ion-item")(15,"ion-label",2),e._uU(16,"Password"),e.qZA(),e._UZ(17,"ion-input",5),e.qZA(),e.TgZ(18,"ion-item")(19,"ion-label",2),e._uU(20,"Confirm password"),e.qZA(),e._UZ(21,"ion-input",6),e.qZA()(),e.TgZ(22,"div",7)(23,"ci-button",8),e.NdJ("click",function(){return a.signUp()}),e._uU(24," Sign Up "),e.qZA()()()()()()()),2&n&&(e.xp6(4),e.Q6J("formGroup",a.formGroup),e.xp6(19),e.Q6J("promise",a.signUpButton))},dependencies:[t._Y,t.JJ,t.JL,i.wI,i.jY,i.pK,i.Ie,i.Q$,i.q_,i.Nd,i.j9,t.sg,t.u,g.r,h]}),o})()}];let y=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[l.Bz.forChild(U),l.Bz]}),o})();var I=r(6808);let T=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[I.m,y]}),o})()}}]);