function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,l){for(var e=0;e<l.length;e++){var u=l[e];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(n,u.key,u)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{UWRd:function(n,l,e){"use strict";e.r(l);var u=e("8Y7J"),t=e("mrSG"),o=e("AL3R"),r=e("ZZ/e"),a=e("OlR4"),i=function(){function n(l,e,u){_classCallCheck(this,n),this.router=l,this.toastController=e,this.commonService=u,this.user={username:"",phone_number:"",email:"",password:"",confirmPassword:""},this.isBothPswrdSame=!0}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"create_user",value:function(){this.signUp()}},{key:"signUp",value:function(){return t.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l,e,u,t,r,a,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(this.isBothPswrdSame=!0,console.log(this.UserForm),console.log(this.UserForm.form.value.password),console.log(this.UserForm.form.value.confirmPassword),this.UserForm.form.value.password==this.UserForm.form.value.confirmPassword){n.next=2;break}return n.abrupt("return",void(this.isBothPswrdSame=!1));case 2:return this.commonService.showLoader("Creating Account..."),l=this.user,e=l.username,u=l.password,t=l.email,r=""===this.user.phone_number.toString()?this.user.phone_number.toString():"+91"+this.user.phone_number.toString(),n.prev=4,n.next=7,o.a.signUp({username:e,password:u,attributes:{email:t,phone_number:r}});case 7:a=n.sent,i=a.user,console.log(i),this.commonService.dismiss(),this.presentToastWithOptions(),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(4),this.commonService.dismiss(),this.commonService.presentToast(n.t0.message,"danger"),console.log("error signing up:",n.t0);case 15:case"end":return n.stop()}}),n,this,[[4,12]])})))}},{key:"presentToastWithOptions",value:function(){return t.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.toastController.create({header:"WELCOME!!",message:"You have successfully registered a new account.We have sent you an email. Please click on the confirmation link to verfiy your account",position:"top",keyboardClose:!0,duration:5e3,color:"success"});case 2:n.sent.present(),this.router.navigateByUrl("/login");case 4:case"end":return n.stop()}}),n,this)})))}}]),n}(),d=function n(){_classCallCheck(this,n)},s=e("pMnS"),g=e("oBZk"),c=e("SVse"),m=e("s7LF"),p=e("iInd"),f=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function v(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Please enter Username"]))],null,null)}function C(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Please enter valid Username"]))],null,null)}function h(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,5,"ion-text",[["color","danger"]],null,null,null,g.N,g.s)),u["\u0275did"](1,49152,null,0,r.wb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{color:[0,"color"]},null),(n()(),u["\u0275and"](16777216,null,0,1,null,v)),u["\u0275did"](3,16384,null,0,c.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["\u0275and"](16777216,null,0,1,null,C)),u["\u0275did"](5,16384,null,0,c.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,1,0,"danger"),n(l,3,0,u["\u0275nov"](l.parent,24).errors.required),n(l,5,0,u["\u0275nov"](l.parent,24).errors.pattern)}),null)}function R(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Enter valid 10 digit mobile no."]))],null,null)}function N(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,3,"ion-text",[["color","danger"]],null,null,null,g.N,g.s)),u["\u0275did"](1,49152,null,0,r.wb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{color:[0,"color"]},null),(n()(),u["\u0275and"](16777216,null,0,1,null,R)),u["\u0275did"](3,16384,null,0,c.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,1,0,"danger"),n(l,3,0,u["\u0275nov"](l.parent,41).errors.pattern)}),null)}function _(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Please enter Email address"]))],null,null)}function I(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Please enter valid email address"]))],null,null)}function E(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,5,"ion-text",[["color","danger"]],null,null,null,g.N,g.s)),u["\u0275did"](1,49152,null,0,r.wb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{color:[0,"color"]},null),(n()(),u["\u0275and"](16777216,null,0,1,null,_)),u["\u0275did"](3,16384,null,0,c.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["\u0275and"](16777216,null,0,1,null,I)),u["\u0275did"](5,16384,null,0,c.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,1,0,"danger"),n(l,3,0,u["\u0275nov"](l.parent,59).errors.required),n(l,5,0,u["\u0275nov"](l.parent,59).errors.pattern)}),null)}function w(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Please enter Password"]))],null,null)}function b(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Password must be at least 6 characters"]))],null,null)}function y(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,5,"ion-text",[["color","danger"]],null,null,null,g.N,g.s)),u["\u0275did"](1,49152,null,0,r.wb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{color:[0,"color"]},null),(n()(),u["\u0275and"](16777216,null,0,1,null,w)),u["\u0275did"](3,16384,null,0,c.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["\u0275and"](16777216,null,0,1,null,b)),u["\u0275did"](5,16384,null,0,c.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,1,0,"danger"),n(l,3,0,u["\u0275nov"](l.parent,77).errors.required),n(l,5,0,u["\u0275nov"](l.parent,77).errors.minlength)}),null)}function S(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Please enter Confirm Password"]))],null,null)}function V(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,3,"ion-text",[["color","danger"]],null,null,null,g.N,g.s)),u["\u0275did"](1,49152,null,0,r.wb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{color:[0,"color"]},null),(n()(),u["\u0275and"](16777216,null,0,1,null,S)),u["\u0275did"](3,16384,null,0,c.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,1,0,"danger"),n(l,3,0,u["\u0275nov"](l.parent,94).errors.required)}),null)}function P(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,["Confirm Password & Password must be same"]))],null,null)}function A(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,3,"ion-text",[["color","danger"]],null,null,null,g.N,g.s)),u["\u0275did"](1,49152,null,0,r.wb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{color:[0,"color"]},null),(n()(),u["\u0275and"](16777216,null,0,1,null,P)),u["\u0275did"](3,16384,null,0,c.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,1,0,"danger"),n(l,3,0,!e.isBothPswrdSame)}),null)}function k(n){return u["\u0275vid"](0,[u["\u0275qud"](402653184,1,{UserForm:0}),(n()(),u["\u0275eld"](1,0,null,null,119,"ion-content",[],null,null,null,g.B,g.g)),u["\u0275did"](2,49152,null,0,r.t,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["\u0275eld"](3,0,null,0,117,"ion-card",[],null,null,null,g.z,g.d)),u["\u0275did"](4,49152,null,0,r.l,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["\u0275eld"](5,0,null,0,115,"ion-card-header",[],null,null,null,g.y,g.e)),u["\u0275did"](6,49152,null,0,r.n,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["\u0275eld"](7,0,null,0,1,"div",[["class","create-acc-header"]],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,[" CREATE ACCOUNT "])),(n()(),u["\u0275eld"](9,0,null,0,111,"form",[["name","form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,e){var t=!0,o=n.component;return"submit"===l&&(t=!1!==u["\u0275nov"](n,11).onSubmit(e)&&t),"reset"===l&&(t=!1!==u["\u0275nov"](n,11).onReset()&&t),"submit"===l&&(t=!1!==(u["\u0275nov"](n,11).form.valid&&o.signUp())&&t),t}),null,null)),u["\u0275did"](10,16384,null,0,m["\u0275angular_packages_forms_forms_z"],[],null,null),u["\u0275did"](11,4210688,[[1,4],["f",4]],0,m.NgForm,[[8,null],[8,null]],null,null),u["\u0275prd"](2048,null,m.ControlContainer,null,[m.NgForm]),u["\u0275did"](13,16384,null,0,m.NgControlStatusGroup,[[4,m.ControlContainer]],null,null),(n()(),u["\u0275eld"](14,0,null,null,17,"div",[["class","input-items"]],null,null,null,null,null)),(n()(),u["\u0275eld"](15,0,null,null,2,"ion-label",[["position","stacked"]],null,null,null,g.H,g.m)),u["\u0275did"](16,49152,null,0,r.M,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{position:[0,"position"]},null),(n()(),u["\u0275ted"](-1,0,["User Name"])),(n()(),u["\u0275eld"](18,0,null,null,11,"ion-input",[["class","form-control"],["id","username"],["name","username"],["pattern","[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$"],["required",""],["type","text"]],[[1,"required",0],[1,"pattern",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==u["\u0275nov"](n,22)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==u["\u0275nov"](n,22)._handleInputEvent(e.target)&&t),"ngModelChange"===l&&(t=!1!==(o.user.username=e)&&t),t}),g.F,g.k)),u["\u0275did"](19,16384,null,0,m.RequiredValidator,[],{required:[0,"required"]},null),u["\u0275did"](20,540672,null,0,m.PatternValidator,[],{pattern:[0,"pattern"]},null),u["\u0275prd"](1024,null,m.NG_VALIDATORS,(function(n,l){return[n,l]}),[m.RequiredValidator,m.PatternValidator]),u["\u0275did"](22,16384,null,0,r.Ob,[u.ElementRef],null,null),u["\u0275prd"](1024,null,m.NG_VALUE_ACCESSOR,(function(n){return[n]}),[r.Ob]),u["\u0275did"](24,671744,[["username",4]],0,m.NgModel,[[2,m.ControlContainer],[6,m.NG_VALIDATORS],[8,null],[6,m.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,m.NgControl,null,[m.NgModel]),u["\u0275did"](26,16384,null,0,m.NgControlStatus,[[4,m.NgControl]],null,null),u["\u0275did"](27,49152,null,0,r.F,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{name:[0,"name"],pattern:[1,"pattern"],required:[2,"required"],type:[3,"type"]},null),(n()(),u["\u0275eld"](28,0,null,0,1,"ion-icon",[["name","person"]],null,null,null,g.E,g.j)),u["\u0275did"](29,49152,null,0,r.B,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{name:[0,"name"]},null),(n()(),u["\u0275and"](16777216,null,null,1,null,h)),u["\u0275did"](31,16384,null,0,c.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["\u0275eld"](32,0,null,null,16,"div",[["class","input-items"]],null,null,null,null,null)),(n()(),u["\u0275eld"](33,0,null,null,2,"ion-label",[["position","stacked"]],null,null,null,g.H,g.m)),u["\u0275did"](34,49152,null,0,r.M,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{position:[0,"position"]},null),(n()(),u["\u0275ted"](-1,0,["Mobile"])),(n()(),u["\u0275eld"](36,0,null,null,10,"ion-input",[["class","form-control"],["clearInput",""],["id","phone_number"],["name","phone_number"],["pattern","^((\\\\+91-?)|0)?[0-9]{10}$"],["placeholder","Enter Mobile No."],["type","text"]],[[1,"pattern",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==u["\u0275nov"](n,39)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==u["\u0275nov"](n,39)._handleInputEvent(e.target)&&t),"ngModelChange"===l&&(t=!1!==(o.user.phone_number=e)&&t),t}),g.F,g.k)),u["\u0275did"](37,540672,null,0,m.PatternValidator,[],{pattern:[0,"pattern"]},null),u["\u0275prd"](1024,null,m.NG_VALIDATORS,(function(n){return[n]}),[m.PatternValidator]),u["\u0275did"](39,16384,null,0,r.Ob,[u.ElementRef],null,null),u["\u0275prd"](1024,null,m.NG_VALUE_ACCESSOR,(function(n){return[n]}),[r.Ob]),u["\u0275did"](41,671744,[["phone_number",4]],0,m.NgModel,[[2,m.ControlContainer],[6,m.NG_VALIDATORS],[8,null],[6,m.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,m.NgControl,null,[m.NgModel]),u["\u0275did"](43,16384,null,0,m.NgControlStatus,[[4,m.NgControl]],null,null),u["\u0275did"](44,49152,null,0,r.F,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{clearInput:[0,"clearInput"],name:[1,"name"],pattern:[2,"pattern"],placeholder:[3,"placeholder"],type:[4,"type"]},null),(n()(),u["\u0275eld"](45,0,null,0,1,"ion-icon",[["name","call"]],null,null,null,g.E,g.j)),u["\u0275did"](46,49152,null,0,r.B,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{name:[0,"name"]},null),(n()(),u["\u0275and"](16777216,null,null,1,null,N)),u["\u0275did"](48,16384,null,0,c.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["\u0275eld"](49,0,null,null,17,"div",[["class","input-items"]],null,null,null,null,null)),(n()(),u["\u0275eld"](50,0,null,null,2,"ion-label",[["position","stacked"]],null,null,null,g.H,g.m)),u["\u0275did"](51,49152,null,0,r.M,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{position:[0,"position"]},null),(n()(),u["\u0275ted"](-1,0,["Email ID"])),(n()(),u["\u0275eld"](53,0,null,null,11,"ion-input",[["class","form-control"],["clearInput",""],["id","email"],["name","email"],["pattern","[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"],["placeholder","Enter Email address"],["required",""],["type","mail"]],[[1,"required",0],[1,"pattern",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==u["\u0275nov"](n,57)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==u["\u0275nov"](n,57)._handleInputEvent(e.target)&&t),"ngModelChange"===l&&(t=!1!==(o.user.email=e)&&t),t}),g.F,g.k)),u["\u0275did"](54,16384,null,0,m.RequiredValidator,[],{required:[0,"required"]},null),u["\u0275did"](55,540672,null,0,m.PatternValidator,[],{pattern:[0,"pattern"]},null),u["\u0275prd"](1024,null,m.NG_VALIDATORS,(function(n,l){return[n,l]}),[m.RequiredValidator,m.PatternValidator]),u["\u0275did"](57,16384,null,0,r.Ob,[u.ElementRef],null,null),u["\u0275prd"](1024,null,m.NG_VALUE_ACCESSOR,(function(n){return[n]}),[r.Ob]),u["\u0275did"](59,671744,[["email",4]],0,m.NgModel,[[2,m.ControlContainer],[6,m.NG_VALIDATORS],[8,null],[6,m.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,m.NgControl,null,[m.NgModel]),u["\u0275did"](61,16384,null,0,m.NgControlStatus,[[4,m.NgControl]],null,null),u["\u0275did"](62,49152,null,0,r.F,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{clearInput:[0,"clearInput"],name:[1,"name"],pattern:[2,"pattern"],placeholder:[3,"placeholder"],required:[4,"required"],type:[5,"type"]},null),(n()(),u["\u0275eld"](63,0,null,0,1,"ion-icon",[["name","mail"]],null,null,null,g.E,g.j)),u["\u0275did"](64,49152,null,0,r.B,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{name:[0,"name"]},null),(n()(),u["\u0275and"](16777216,null,null,1,null,E)),u["\u0275did"](66,16384,null,0,c.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["\u0275eld"](67,0,null,null,17,"div",[["class","input-items"]],null,null,null,null,null)),(n()(),u["\u0275eld"](68,0,null,null,2,"ion-label",[["position","stacked"]],null,null,null,g.H,g.m)),u["\u0275did"](69,49152,null,0,r.M,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{position:[0,"position"]},null),(n()(),u["\u0275ted"](-1,0,["Password"])),(n()(),u["\u0275eld"](71,0,null,null,11,"ion-input",[["class","form-control"],["clearInput",""],["id","password"],["minlength","6"],["name","password"],["placeholder","Enter Password"],["required",""],["type","password"]],[[1,"required",0],[1,"minlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==u["\u0275nov"](n,75)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==u["\u0275nov"](n,75)._handleInputEvent(e.target)&&t),"ngModelChange"===l&&(t=!1!==(o.user.password=e)&&t),t}),g.F,g.k)),u["\u0275did"](72,16384,null,0,m.RequiredValidator,[],{required:[0,"required"]},null),u["\u0275did"](73,540672,null,0,m.MinLengthValidator,[],{minlength:[0,"minlength"]},null),u["\u0275prd"](1024,null,m.NG_VALIDATORS,(function(n,l){return[n,l]}),[m.RequiredValidator,m.MinLengthValidator]),u["\u0275did"](75,16384,null,0,r.Ob,[u.ElementRef],null,null),u["\u0275prd"](1024,null,m.NG_VALUE_ACCESSOR,(function(n){return[n]}),[r.Ob]),u["\u0275did"](77,671744,[["password",4]],0,m.NgModel,[[2,m.ControlContainer],[6,m.NG_VALIDATORS],[8,null],[6,m.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,m.NgControl,null,[m.NgModel]),u["\u0275did"](79,16384,null,0,m.NgControlStatus,[[4,m.NgControl]],null,null),u["\u0275did"](80,49152,null,0,r.F,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{clearInput:[0,"clearInput"],minlength:[1,"minlength"],name:[2,"name"],placeholder:[3,"placeholder"],required:[4,"required"],type:[5,"type"]},null),(n()(),u["\u0275eld"](81,0,null,0,1,"ion-icon",[["name","lock"]],null,null,null,g.E,g.j)),u["\u0275did"](82,49152,null,0,r.B,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{name:[0,"name"]},null),(n()(),u["\u0275and"](16777216,null,null,1,null,y)),u["\u0275did"](84,16384,null,0,c.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["\u0275eld"](85,0,null,null,18,"div",[["class","input-items"]],null,null,null,null,null)),(n()(),u["\u0275eld"](86,0,null,null,2,"ion-label",[["position","stacked"]],null,null,null,g.H,g.m)),u["\u0275did"](87,49152,null,0,r.M,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{position:[0,"position"]},null),(n()(),u["\u0275ted"](-1,0,["Confirm Password"])),(n()(),u["\u0275eld"](89,0,null,null,10,"ion-input",[["class","form-control"],["clearInput",""],["id","confirmPassword"],["name","confirmPassword"],["placeholder","Enter Confirm Password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==u["\u0275nov"](n,92)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==u["\u0275nov"](n,92)._handleInputEvent(e.target)&&t),"ngModelChange"===l&&(t=!1!==(o.user.confirmPassword=e)&&t),t}),g.F,g.k)),u["\u0275did"](90,16384,null,0,m.RequiredValidator,[],{required:[0,"required"]},null),u["\u0275prd"](1024,null,m.NG_VALIDATORS,(function(n){return[n]}),[m.RequiredValidator]),u["\u0275did"](92,16384,null,0,r.Ob,[u.ElementRef],null,null),u["\u0275prd"](1024,null,m.NG_VALUE_ACCESSOR,(function(n){return[n]}),[r.Ob]),u["\u0275did"](94,671744,[["confirmPassword",4]],0,m.NgModel,[[2,m.ControlContainer],[6,m.NG_VALIDATORS],[8,null],[6,m.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,m.NgControl,null,[m.NgModel]),u["\u0275did"](96,16384,null,0,m.NgControlStatus,[[4,m.NgControl]],null,null),u["\u0275did"](97,49152,null,0,r.F,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{clearInput:[0,"clearInput"],name:[1,"name"],placeholder:[2,"placeholder"],required:[3,"required"],type:[4,"type"]},null),(n()(),u["\u0275eld"](98,0,null,0,1,"ion-icon",[["name","lock"]],null,null,null,g.E,g.j)),u["\u0275did"](99,49152,null,0,r.B,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{name:[0,"name"]},null),(n()(),u["\u0275and"](16777216,null,null,1,null,V)),u["\u0275did"](101,16384,null,0,c.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["\u0275and"](16777216,null,null,1,null,A)),u["\u0275did"](103,16384,null,0,c.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["\u0275eld"](104,0,null,null,0,"div",[],null,null,null,null,null)),(n()(),u["\u0275eld"](105,0,null,null,5,"div",[],null,null,null,null,null)),u["\u0275prd"](512,null,c["\u0275NgStyleImpl"],c["\u0275NgStyleR2Impl"],[u.ElementRef,u.KeyValueDiffers,u.Renderer2]),u["\u0275did"](107,278528,null,0,c.NgStyle,[c["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),u["\u0275pod"](108,{"text-align":0}),(n()(),u["\u0275eld"](109,0,null,null,1,"button",[["class","submit-btn"]],null,null,null,null,null)),(n()(),u["\u0275ted"](-1,null,[" SIGN UP "])),(n()(),u["\u0275eld"](111,0,null,null,9,"div",[],null,null,null,null,null)),u["\u0275prd"](512,null,c["\u0275NgStyleImpl"],c["\u0275NgStyleR2Impl"],[u.ElementRef,u.KeyValueDiffers,u.Renderer2]),u["\u0275did"](113,278528,null,0,c.NgStyle,[c["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),u["\u0275pod"](114,{"font-size":0,"text-align":1,"font-family":2}),(n()(),u["\u0275ted"](-1,null,[" Already have an account?"])),(n()(),u["\u0275eld"](116,0,null,null,4,"span",[["class","hightlight-txt"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==u["\u0275nov"](n,117).onClick()&&t),"click"===l&&(t=!1!==u["\u0275nov"](n,119).onClick(e)&&t),t}),null,null)),u["\u0275did"](117,16384,null,0,p.n,[p.m,p.a,[8,null],u.Renderer2,u.ElementRef],{routerLink:[0,"routerLink"]},null),u["\u0275pad"](118,1),u["\u0275did"](119,737280,null,0,r.Mb,[c.LocationStrategy,r.Ib,u.ElementRef,p.m,[2,p.n]],null,null),(n()(),u["\u0275ted"](-1,null,[" LOGIN"]))],(function(n,l){var e=l.component;n(l,16,0,"stacked"),n(l,19,0,""),n(l,20,0,"[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$"),n(l,24,0,"username",e.user.username),n(l,27,0,"username","[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$","","text"),n(l,29,0,"person"),n(l,31,0,u["\u0275nov"](l,11).submitted&&u["\u0275nov"](l,24).invalid),n(l,34,0,"stacked"),n(l,37,0,"^((\\\\+91-?)|0)?[0-9]{10}$"),n(l,41,0,"phone_number",e.user.phone_number),n(l,44,0,"","phone_number","^((\\\\+91-?)|0)?[0-9]{10}$","Enter Mobile No.","text"),n(l,46,0,"call"),n(l,48,0,u["\u0275nov"](l,11).submitted&&u["\u0275nov"](l,41).errors),n(l,51,0,"stacked"),n(l,54,0,""),n(l,55,0,"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),n(l,59,0,"email",e.user.email),n(l,62,0,"","email","[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$","Enter Email address","","mail"),n(l,64,0,"mail"),n(l,66,0,u["\u0275nov"](l,11).submitted&&u["\u0275nov"](l,59).invalid),n(l,69,0,"stacked"),n(l,72,0,""),n(l,73,0,"6"),n(l,77,0,"password",e.user.password),n(l,80,0,"","6","password","Enter Password","","password"),n(l,82,0,"lock"),n(l,84,0,u["\u0275nov"](l,11).submitted&&u["\u0275nov"](l,77).invalid),n(l,87,0,"stacked"),n(l,90,0,""),n(l,94,0,"confirmPassword",e.user.confirmPassword),n(l,97,0,"","confirmPassword","Enter Confirm Password","","password"),n(l,99,0,"lock"),n(l,101,0,u["\u0275nov"](l,11).submitted&&u["\u0275nov"](l,94).invalid),n(l,103,0,u["\u0275nov"](l,11).submitted&&u["\u0275nov"](l,94).valid);var t=n(l,108,0,"center");n(l,107,0,t);var o=n(l,114,0,"14px","center","system-ui");n(l,113,0,o);var r=n(l,118,0,"/login");n(l,117,0,r),n(l,119,0)}),(function(n,l){n(l,9,0,u["\u0275nov"](l,13).ngClassUntouched,u["\u0275nov"](l,13).ngClassTouched,u["\u0275nov"](l,13).ngClassPristine,u["\u0275nov"](l,13).ngClassDirty,u["\u0275nov"](l,13).ngClassValid,u["\u0275nov"](l,13).ngClassInvalid,u["\u0275nov"](l,13).ngClassPending),n(l,18,0,u["\u0275nov"](l,19).required?"":null,u["\u0275nov"](l,20).pattern?u["\u0275nov"](l,20).pattern:null,u["\u0275nov"](l,26).ngClassUntouched,u["\u0275nov"](l,26).ngClassTouched,u["\u0275nov"](l,26).ngClassPristine,u["\u0275nov"](l,26).ngClassDirty,u["\u0275nov"](l,26).ngClassValid,u["\u0275nov"](l,26).ngClassInvalid,u["\u0275nov"](l,26).ngClassPending),n(l,36,0,u["\u0275nov"](l,37).pattern?u["\u0275nov"](l,37).pattern:null,u["\u0275nov"](l,43).ngClassUntouched,u["\u0275nov"](l,43).ngClassTouched,u["\u0275nov"](l,43).ngClassPristine,u["\u0275nov"](l,43).ngClassDirty,u["\u0275nov"](l,43).ngClassValid,u["\u0275nov"](l,43).ngClassInvalid,u["\u0275nov"](l,43).ngClassPending),n(l,53,0,u["\u0275nov"](l,54).required?"":null,u["\u0275nov"](l,55).pattern?u["\u0275nov"](l,55).pattern:null,u["\u0275nov"](l,61).ngClassUntouched,u["\u0275nov"](l,61).ngClassTouched,u["\u0275nov"](l,61).ngClassPristine,u["\u0275nov"](l,61).ngClassDirty,u["\u0275nov"](l,61).ngClassValid,u["\u0275nov"](l,61).ngClassInvalid,u["\u0275nov"](l,61).ngClassPending),n(l,71,0,u["\u0275nov"](l,72).required?"":null,u["\u0275nov"](l,73).minlength?u["\u0275nov"](l,73).minlength:null,u["\u0275nov"](l,79).ngClassUntouched,u["\u0275nov"](l,79).ngClassTouched,u["\u0275nov"](l,79).ngClassPristine,u["\u0275nov"](l,79).ngClassDirty,u["\u0275nov"](l,79).ngClassValid,u["\u0275nov"](l,79).ngClassInvalid,u["\u0275nov"](l,79).ngClassPending),n(l,89,0,u["\u0275nov"](l,90).required?"":null,u["\u0275nov"](l,96).ngClassUntouched,u["\u0275nov"](l,96).ngClassTouched,u["\u0275nov"](l,96).ngClassPristine,u["\u0275nov"](l,96).ngClassDirty,u["\u0275nov"](l,96).ngClassValid,u["\u0275nov"](l,96).ngClassInvalid,u["\u0275nov"](l,96).ngClassPending)}))}var D=u["\u0275ccf"]("app-create-account",i,(function(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"app-create-account",[],null,null,null,k,f)),u["\u0275did"](1,114688,null,0,i,[p.m,r.Pb,a.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]);e.d(l,"CreateAccountPageModuleNgFactory",(function(){return M}));var M=u["\u0275cmf"](d,[],(function(n){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[s.a,D]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,c.NgLocalization,c.NgLocaleLocalization,[u.LOCALE_ID,[2,c["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,m["\u0275angular_packages_forms_forms_o"],m["\u0275angular_packages_forms_forms_o"],[]),u["\u0275mpd"](4608,r.a,r.a,[u.NgZone,u.ApplicationRef]),u["\u0275mpd"](4608,r.Hb,r.Hb,[r.a,u.ComponentFactoryResolver,u.Injector]),u["\u0275mpd"](4608,r.Lb,r.Lb,[r.a,u.ComponentFactoryResolver,u.Injector]),u["\u0275mpd"](4608,m.FormBuilder,m.FormBuilder,[]),u["\u0275mpd"](1073742336,c.CommonModule,c.CommonModule,[]),u["\u0275mpd"](1073742336,m["\u0275angular_packages_forms_forms_d"],m["\u0275angular_packages_forms_forms_d"],[]),u["\u0275mpd"](1073742336,m.FormsModule,m.FormsModule,[]),u["\u0275mpd"](1073742336,r.Db,r.Db,[]),u["\u0275mpd"](1073742336,m.ReactiveFormsModule,m.ReactiveFormsModule,[]),u["\u0275mpd"](1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),u["\u0275mpd"](1073742336,d,d,[]),u["\u0275mpd"](1024,p.k,(function(){return[[{path:"",component:i}]]}),[])])}))}}]);