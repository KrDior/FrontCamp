(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{LcBl:function(t,a,l){"use strict";l.r(a);var n=l("8Y7J");class e{}var i=l("pMnS");class r{}class o{}class s{}class c{constructor(){this.align="start"}}class d{}class u{}class m{constructor(t){this._animationMode=t}}class h{}class p{}var b=l("SVse");class g{}var f=l("cUpR");const x=new n.N("8.2.3");let w;l("XNiG"),l("HDdC");try{w="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(P){w=!1}l("JX91"),l("quSY"),l("LRne"),l("vkgz"),l("7o/Q"),l("D0XW"),l("pLZG"),l("lJxs"),l("IzEk");const _=new n.N("8.2.3"),k=new n.p("mat-sanity-checks",{providedIn:"root",factory:function(){return!0}});class y{constructor(t,a){this._sanityChecksEnabled=t,this._hammerLoader=a,this._hasDoneGlobalChecks=!1,this._hasCheckedHammer=!1,this._document="object"==typeof document&&document?document:null,this._window="object"==typeof window&&window?window:null,this._areChecksEnabled()&&!this._hasDoneGlobalChecks&&(this._checkDoctypeIsDefined(),this._checkThemeIsPresent(),this._checkCdkVersionMatch(),this._hasDoneGlobalChecks=!0)}_areChecksEnabled(){return this._sanityChecksEnabled&&Object(n.W)()&&!this._isTestEnv()}_isTestEnv(){const t=this._window;return t&&(t.__karma__||t.jasmine)}_checkDoctypeIsDefined(){this._document&&!this._document.doctype&&console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.")}_checkThemeIsPresent(){if(!this._document||!this._document.body||"function"!=typeof getComputedStyle)return;const t=this._document.createElement("div");t.classList.add("mat-theme-loaded-marker"),this._document.body.appendChild(t);const a=getComputedStyle(t);a&&"none"!==a.display&&console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"),this._document.body.removeChild(t)}_checkCdkVersionMatch(){_.full!==x.full&&console.warn("The Angular Material version ("+_.full+") does not match the Angular CDK version ("+x.full+").\nPlease ensure the versions of these two packages exactly match.")}_checkHammerIsAvailable(){!this._hasCheckedHammer&&this._window&&(!this._areChecksEnabled()||this._window.Hammer||this._hammerLoader||console.warn("Could not find HammerJS. Certain Angular Material components may not work correctly."),this._hasCheckedHammer=!0)}}let v;try{v="undefined"!=typeof Intl}catch(P){v=!1}var C=l("omvX"),M=n.qb({encapsulation:2,styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],data:{}});function I(t){return n.Ob(2,[n.Db(null,0),n.Db(null,1)],null,null)}var D=n.qb({encapsulation:2,styles:[],data:{}});function E(t){return n.Ob(2,[n.Db(null,0),(t()(),n.sb(1,0,null,null,1,"div",[["class","mat-card-header-text"]],null,null,null,null,null)),n.Db(null,1),n.Db(null,2)],null,null)}class j{constructor(){}ngOnInit(){}}var S=n.qb({encapsulation:0,styles:[[".example-card[_ngcontent-%COMP%]{max-width:400px}.example-header-image[_ngcontent-%COMP%]{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}"]],data:{}});function z(t){return n.Ob(0,[(t()(),n.sb(0,0,null,null,23,"mat-card",[["class","example-card mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,I,M)),n.rb(1,49152,null,0,m,[[2,C.a]],null,null),(t()(),n.sb(2,0,null,0,9,"mat-card-header",[["class","mat-card-header"]],null,null,null,E,D)),n.rb(3,49152,null,0,h,[],null,null),(t()(),n.sb(4,0,null,0,1,"div",[["class","example-header-image mat-card-avatar"],["mat-card-avatar",""]],null,null,null,null,null)),n.rb(5,16384,null,0,u,[],null,null),(t()(),n.sb(6,0,null,1,2,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),n.rb(7,16384,null,0,o,[],null,null),(t()(),n.Mb(-1,null,["Shiba Inu"])),(t()(),n.sb(9,0,null,1,2,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),n.rb(10,16384,null,0,s,[],null,null),(t()(),n.Mb(-1,null,["Dog Breed"])),(t()(),n.sb(12,0,null,0,1,"img",[["alt","Photo of a Shiba Inu"],["class","mat-card-image"],["mat-card-image",""],["src","https://material.angular.io/assets/img/examples/shiba2.jpg"]],null,null,null,null,null)),n.rb(13,16384,null,0,d,[],null,null),(t()(),n.sb(14,0,null,0,3,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),n.rb(15,16384,null,0,r,[],null,null),(t()(),n.sb(16,0,null,null,1,"p",[],null,null,null,null,null)),(t()(),n.Mb(-1,null,[" The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. "])),(t()(),n.sb(18,0,null,0,5,"mat-card-actions",[["class","mat-card-actions"]],[[2,"mat-card-actions-align-end",null]],null,null,null,null)),n.rb(19,16384,null,0,c,[],null,null),(t()(),n.sb(20,0,null,null,1,"button",[["mat-button",""]],null,null,null,null,null)),(t()(),n.Mb(-1,null,["LIKE"])),(t()(),n.sb(22,0,null,null,1,"button",[["mat-button",""]],null,null,null,null,null)),(t()(),n.Mb(-1,null,["SHARE"]))],null,(function(t,a){t(a,0,0,"NoopAnimations"===n.Eb(a,1)._animationMode),t(a,18,0,"end"===n.Eb(a,19).align)}))}function A(t){return n.Ob(0,[(t()(),n.sb(0,0,null,null,1,"app-blank-page",[],null,null,null,z,S)),n.rb(1,114688,null,0,j,[],null,null)],(function(t,a){t(a,1,0)}),null)}var H=n.ob("app-blank-page",j,A,{},{},[]),O=l("iInd");class J{}l.d(a,"BlankPageModuleNgFactory",(function(){return L}));var L=n.pb(e,[],(function(t){return n.Bb([n.Cb(512,n.j,n.ab,[[8,[i.a,H]],[3,n.j],n.w]),n.Cb(4608,b.o,b.n,[n.t,[2,b.E]]),n.Cb(1073742336,b.c,b.c,[]),n.Cb(1073742336,O.p,O.p,[[2,O.u],[2,O.l]]),n.Cb(1073742336,J,J,[]),n.Cb(1073742336,g,g,[]),n.Cb(1073742336,y,y,[[2,k],[2,f.f]]),n.Cb(1073742336,p,p,[]),n.Cb(1073742336,e,e,[]),n.Cb(1024,O.j,(function(){return[[{path:"",component:j}]]}),[])])}))}}]);