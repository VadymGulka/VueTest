import"./dynamic-import-polyfill.b3685604.js";/* empty css             */import{p as e,a as t,o as s,c as l,b as a,t as o,w as n,v as i,d as c,l as d,F as r,e as u,f as p,r as h,g as m,h as b,i as v,j as g,k as y,m as f,n as k,q as w,s as x}from"./vendor.dbbc5e8a.js";const T={data:()=>({userInput:"Testing"}),computed:{},methods:{copy(){let e=this.$refs.input;e.setAttribute("type","text"),e.focus(),e.select(),document.execCommand("copy"),e.setAttribute("type","hidden")}}},S=c();e("data-v-04e3f4f4");const C={class:"col"},I=a("br",null,null,-1),R=a("br",null,null,-1),U=a("br",null,null,-1),V=a("br",null,null,-1),A=a("br",null,null,-1),z={class:"test"},P=a("br",null,null,-1);t();const O=S(((e,t,c,d,r,u)=>(s(),l("div",C,[I,R,U,V,A,a("span",z,o(r.userInput),1),P,n(a("input",{ref:"input",type:"hidden","onUpdate:modelValue":t[1]||(t[1]=e=>r.userInput=e)},null,512),[[i,r.userInput]]),a("button",{onClick:t[2]||(t[2]=(...e)=>u.copy&&u.copy(...e))},"Copy input")]))));T.render=O,T.__scopeId="data-v-04e3f4f4";const $={data:()=>({size:null,style:null,product:{nombre:"Ocean banner",desc:"400 pixels ocean banner",discount:40,sizes:[{name:"S",size:"30*20"},{name:"M",size:"50*40"},{name:"XL",size:"60*75"}],styles:[{id:152,color:"Dark",image:"../../ocean1.jpg",price:60,onSale:!0,inventory:100},{id:64,color:"White",image:"../../ocean2.jpg",price:80,onSale:!1,inventory:30},{id:91,color:"Red",image:null,price:96,onSale:!1,inventory:0}]},curProducts:[]}),computed:{descPrice:function(){return this.product.price-this.product.price*this.product.discount/100},sizesCount:function(){return Object.keys(this.product.sizes).length}},created(){this.style=this.product.styles[0],this.size=this.product.sizes[0],this.debounceCart=d.debounce(this.addCart,500)},methods:{addCart(){this.curProducts.push({variantID:this.style.id,size:this.style.name})}}},E=c();e("data-v-0d0888e9");const L={class:"p-2 row border"},M={style:{position:"relative"},class:"col"},j={class:"h1 imagetext text-white"},_={key:1},D=a("img",{alt:"Image placeholser",class:"img-fluid border border-5",src:"http://placekitten.com/g/320/220"},null,-1),N=a("figcaption",null,"Out of stock",-1),F={class:"col"},J={class:"display: inline-block"},q={class:"h1"},B={type:"button",class:"btn m-2 btn-success float-end"},H=a("i",{class:"bi bi-cart"},null,-1),W={class:"table"},G=a("th",null,"Inventory",-1),X={key:0,class:"bi bi-check-circle"},Y={key:1,class:"bi bi-exclamation-circle"},K=a("th",null,"On sale",-1),Q={key:0,class:"bi bi-check-circle"},Z={key:1,class:"bi bi-exclamation-circle"},ee=a("th",null,"Descuento",-1),te=a("th",null,"Tamaños",-1),se=a("th",null,"Estilos",-1),le={class:"h3"};t();const ae=E(((e,t,i,c,d,m)=>(s(),l("div",L,[a("div",M,[d.style.image?(s(),l(r,{key:0},[a("span",j,o(d.size.size),1),a("img",{alt:"Image placeholser",class:"img-fluid border border-5",src:d.style.image},null,8,["src"])],64)):(s(),l("figure",_,[D,N]))]),a("div",F,[a("div",J,[a("span",q,o(d.product.nombre),1),a("button",B,[H,u(" Card ("+o(d.curProducts.length)+") ",1)])]),a("p",null,o(d.product.desc),1),a("table",W,[a("tr",null,[G,a("td",null,o(d.style.inventory),1),a("td",null,[d.style.inventory>=100?(s(),l("i",X)):(s(),l("i",Y))])]),a("tr",null,[K,a("td",null,o(d.style.onSale),1),a("td",null,[d.style.onSale?(s(),l("i",Q)):(s(),l("i",Z))])]),a("tr",null,[ee,a("td",null,o(d.product.discount+"%"),1),a("td",null,o("-"+d.style.price*d.product.discount/100+"$"),1)]),a("tr",null,[te,a("td",null,o(m.sizesCount),1),a("td",null,[n(a("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>d.size=e)},[(s(!0),l(r,null,h(d.product.sizes,(e=>(s(),l("option",{value:e,key:e},o(e.size),9,["value"])))),128))],512),[[p,d.size]])])]),a("tr",null,[se,a("td",null,o(d.product.styles.length),1),a("td",null,[n(a("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>d.style=e)},[(s(!0),l(r,null,h(d.product.styles,(e=>(s(),l("option",{value:e,key:e},o(e.color),9,["value"])))),128))],512),[[p,d.style]])])])]),a("div",null,[a("span",le,o(d.style.price+"$"),1),a("button",{class:"btn btn-success btn-lg float-end",onClick:t[3]||(t[3]=(...t)=>e.debounceCart&&e.debounceCart(...t))}," Añadir a las cesta ")])])]))));$.render=ae,$.__scopeId="data-v-0d0888e9";const oe={emits:["submitReview"],data:()=>({name:"",review:"",rating:null,rec:null}),methods:{onSubmit(){if(""===this.name||""===this.review||null===this.rating)return void alert("Review is incomplete. Please fill out every field.");let e={name:this.name,review:this.review,rating:this.rating,rec:this.rec};this.$emit("submitReview",e)}}},ne=a("p",null,"Leave a review",-1),ie=u(" Name: "),ce=u(" Review:"),de=u(" Rating:"),re=a("option",null,"5",-1),ue=a("option",null,"4",-1),pe=a("option",null,"3",-1),he=a("option",null,"2",-1),me=a("option",null,"1",-1),be=u(" Recomended?"),ve=a("button",{type:"submit"},"Submit",-1);oe.render=function(e,t,o,c,d,r){return s(),l("form",{onSubmit:t[5]||(t[5]=b(((...e)=>r.onSubmit&&r.onSubmit(...e)),["prevent"]))},[ne,ie,n(a("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>d.name=e),class:"form-control",type:"text"},null,512),[[i,d.name]]),a("p",null,[ce,n(a("textarea",{"onUpdate:modelValue":t[2]||(t[2]=e=>d.review=e),class:"form-control"},null,512),[[i,d.review]])]),a("p",null,[de,n(a("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>d.rating=e),class:"form-select"},[re,ue,pe,he,me],512),[[p,d.rating,void 0,{number:!0}]])]),a("p",null,[be,n(a("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>d.rec=e),class:"form-checkbox",type:"checkbox"},null,512),[[m,d.rec,void 0,{number:!0}]])]),ve],32)};const ge={components:{ReviewForm:oe},data:()=>({listReviews:[]}),methods:{addReview(e){this.listReviews.push(e)}}},ye={class:"row"},fe={class:"col-2"},ke={class:"col"},we=a("span",{class:"h1"},"Reviews",-1);ge.render=function(e,t,i,c,d,p){const m=v("ReviewForm");return s(),l("div",ye,[a("div",fe,[a(m,{onSubmitReview:p.addReview},null,8,["onSubmitReview"])]),a("div",ke,[we,(s(!0),l(r,null,h(d.listReviews,((e,t)=>(s(),l("ul",{key:t},[a("li",null,[u(o(e.name+" gave this "+e.rating+" stars")+" ",1),a("p",null,o(e.review),1),n(a("p",null,"Recomended!",512),[[g,e.rec]])])])))),128))])])};function xe(e,t){this.checked=!1,this.id=Math.random().toString(36).substr(2,9),this.data=e,this.date=(new Date).toLocaleString(),this.tags=t}const Te={data:()=>({searchString:null,checkmarkAll:null,todos:[],savedTodos:[],input:null,tags:[{name:"Javascript",checked:!1},{name:"Vue",checked:!1},{name:"HTML",checked:!1}]}),computed:{completed(){let e=0;return this.todos.forEach((t=>{t.checked&&e++})),e},width(){let e=Math.round(this.completed/this.todos.length*100);return isNaN(e)?0:e+"%"},enabledTags(){let e=[];return this.tags.forEach((t=>{t.checked&&e.push(t.name)})),e}},watch:{completed(e){e==this.todos.length?this.checkmarkAll=!0:this.checkmarkAll=!1}},created(){this.savedTodos=JSON.parse(localStorage.savedTodos),this.showOrderedTodos()},methods:{saveToLocal(){localStorage.savedTodos=JSON.stringify(this.savedTodos)},search(){if(""==this.searchString)return this.showOrderedTodos(),null;this.todos=[];for(var e=this.savedTodos.length-1;e>=0;e--)this.savedTodos[e].data.toLowerCase().search(this.searchString.toLowerCase())||this.todos.push(this.savedTodos[e])},checkAll(){this.checkmarkAll&&this.todos.forEach((e=>e.checked=!0)),this.checkmarkAll||this.todos.forEach((e=>e.checked=!1))},copy(e){let t=this.$refs[e];t.setAttribute("type","text"),t.focus(),t.select(),document.execCommand("copy"),t.setAttribute("type","hidden")},showOrderedTodos(){this.todos=this.savedTodos.slice().reverse()},removeTodo(e){this.savedTodos=this.savedTodos.filter((t=>t.id!=e)),this.saveToLocal(),this.showOrderedTodos()},addTodo(){let e=new xe(this.input,this.enabledTags);null!=e.data&&(this.savedTodos.push(e),this.input=null),this.saveToLocal(),this.showOrderedTodos()},purge(){this.savedTodos=[],localStorage.savedTodos="[]",this.showOrderedTodos()}}},Se=c();e("data-v-2b26a953");const Ce={class:"container"},Ie=a("h1",null,"Todo list",-1),Re={class:"row"},Ue={class:"col-md-5"},Ve={class:"col-md-6"},Ae={class:"h1"},ze={class:"progress"},Pe={class:"table table-striped"},Oe=u("#"),$e=a("th",null,"ID",-1),Ee=a("th",null,"Text",-1),Le=a("th",null,"Date",-1),Me=a("th",{colspan:"2"},"Tags",-1);t();const je=Se(((e,t,c,d,p,b)=>(s(),l("div",Ce,[Ie,a("div",Re,[a("div",Ue,[a("div",null,[n(a("input",{onInput:t[1]||(t[1]=(...e)=>b.search&&b.search(...e)),class:"form-control",type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>p.searchString=e),placeholder:"Search..."},null,544),[[i,p.searchString]]),n(a("input",{class:"form-control",type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>p.input=e),placeholder:"Add todo..."},null,512),[[i,p.input]]),(s(!0),l(r,null,h(p.tags,((e,t)=>(s(),l(r,{key:e},[n(a("input",{"onUpdate:modelValue":e=>p.tags[t].checked=e,type:"checkbox"},null,8,["onUpdate:modelValue"]),[[m,p.tags[t].checked]]),u(o(e.name),1)],64)))),128))]),a("button",{class:"btn btn-success",onClick:t[4]||(t[4]=e=>b.addTodo())},"Add todo"),a("button",{class:"btn btn-danger",onClick:t[5]||(t[5]=e=>b.purge())},"Clear todos")]),a("div",Ve,[a("span",Ae,"Stats: "+o(b.completed+"/"+p.todos.length),1),a("div",ze,[a("div",{class:"progress-bar",role:"progressbar",style:{width:b.width}},o(b.width),5)])])]),a("table",Pe,[a("thead",null,[a("tr",null,[a("th",null,[Oe,n(a("input",{onChange:t[6]||(t[6]=(...e)=>b.checkAll&&b.checkAll(...e)),"onUpdate:modelValue":t[7]||(t[7]=e=>p.checkmarkAll=e),type:"checkbox"},null,544),[[m,p.checkmarkAll]])]),$e,Ee,Le,Me])]),a("tbody",null,[(s(!0),l(r,null,h(p.todos,(e=>(s(),l("tr",{key:e},[a("td",null,[n(a("input",{type:"checkbox","onUpdate:modelValue":t=>e.checked=t},null,8,["onUpdate:modelValue"]),[[m,e.checked]])]),a("td",{onClick:t=>b.copy(e.id)},[u(o(e.id)+" ",1),a("input",{ref:e.id,type:"hidden",value:e.id},null,8,["value"])],8,["onClick"]),a("td",null,o(e.data),1),a("td",null,o(e.date),1),a("td",null,o(e.tags),1),a("td",null,[a("button",{onClick:t=>b.removeTodo(e.id),class:"btn btn-danger"},"Remove",8,["onClick"])])])))),128))])])]))));Te.render=je,Te.__scopeId="data-v-2b26a953";const _e={data:()=>({price:250,yearly:null}),computed:{curPrice(){return this.yearly?Math.round(.75*this.price):Math.round(this.price)},pageviews(){return 1e3*this.price}}},De=c();e("data-v-0c9d63d4");const Ne={class:"container text-center py-5"},Fe=a("div",{id:"divcircles",class:"row py-2"},[a("h1",null,"Simple, traffic-based pricing"),a("p",{class:"text-muted"},"Sign-up for our 30-day trial."),a("p",{class:"text-muted"},"No credit card required."),a("svg",{id:"circles",width:"146",height:"145"},[a("g",{fill:"none","fill-rule":"evenodd",stroke:"#CFD8EF"},[a("circle",{cx:"63",cy:"82",r:"62.5"}),a("circle",{cx:"105",cy:"41",r:"40.5"})])])],-1),Je={class:"bg-white"},qe={class:"row mx-3 border-bottom border-light"},Be={class:"text-muted fs-5 p-4"},He={class:"p-4"},We={class:"text-align-center"},Ge={class:"align-middle fs-1"},Xe=a("span",{class:"text-muted"},"/month",-1),Ye={class:"mt-5"},Ke=a("span",{class:"align-bottom text-muted px-1 fs-4"},"Monthly Billing ",-1),Qe={class:"switch"},Ze=a("span",{class:"slider"},null,-1),et=a("span",{class:"align-bottom text-muted px-1 fs-4"},"Yearly Billing",-1),tt=a("span",{class:"align-middle discount mx-1 px-2 fs-5"},"-25%",-1),st=a("div",{class:"row pt-5"},[a("ul",null,[a("li",null,"Unlimited websites"),a("li",null,"100% data ownership"),a("li",null,"Email report"),a("button",{class:"mt-4 btn btn-lg btn-dark btn-outline-light"},"Start my trial")])],-1);t();const lt=De(((e,t,c,d,r,u)=>(s(),l("div",Ne,[Fe,a("div",Je,[a("div",qe,[a("p",Be,o(u.pageviews)+" PAGEVIEWS",1),n(a("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.price=e),type:"range",min:"0",max:"500",class:"form-range px-5"},null,512),[[i,r.price]]),a("div",He,[a("p",We,[a("span",Ge,"$ "+o(u.curPrice),1),Xe]),a("div",Ye,[Ke,a("label",Qe,[n(a("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>r.yearly=e),type:"checkbox"},null,512),[[m,r.yearly]]),Ze]),et,tt])])]),st])]))));_e.render=lt,_e.__scopeId="data-v-0c9d63d4";const at={components:{Producto:$,Reviews:ge,Todo:Te,Pricing:_e,Info:T},computed:{infoStatus(){return this.$store.state.info}}},ot=u(" d ");at.render=function(e,t,o,n,i,c){const d=v("Info");return s(),l(r,null,[c.infoStatus?(s(),l(r,{key:0},[ot,a(d)],64)):y("",!0),(s(),l(f(e.$store.state.tab)))],64)};const nt={data:()=>({tabs:["Pricing","Producto","Reviews","Todo"],input:!1}),mounted(){this.$refs.input.value=localStorage.savedTab},methods:{clic(e){this.$store.commit("savedTab",e),localStorage.savedTab=e},changeInfo(){localStorage.savedInfo=this.input,this.$store.commit("savedInfo",this.input)}}},it={class:"mb-3 navbar navbar-expand navbar-dark bg-success"},ct={class:"navbar-nav container-fluid"},dt=a("a",{class:"navbar-brand px-2",href:"#"},"Navbar",-1),rt=u("Test "),ut=a("a",{class:"nav-link",href:"#"},"Home",-1),pt=a("a",{class:"nav-link",href:"#"},"Todo",-1),ht={class:"dropdown"},mt={ref:"input",class:"form-select",valu:""},bt=a("option",{selected:"",disabled:""},"Modulos",-1),vt=a("form",{class:"d-flex"},[a("input",{class:"form-control me-2",type:"search",placeholder:"Search"}),a("button",{class:"btn btn-outline-dark",type:"submit"},"Search")],-1);nt.render=function(e,t,i,c,d,u){return s(),l("header",null,[a("nav",it,[a("div",ct,[dt,n(a("input",{onChange:t[1]||(t[1]=(...e)=>u.changeInfo&&u.changeInfo(...e)),"onUpdate:modelValue":t[2]||(t[2]=e=>d.input=e),type:"checkbox"},null,544),[[m,d.input]]),rt,ut,pt,a("div",ht,[a("select",mt,[bt,(s(!0),l(r,null,h(d.tabs,(e=>(s(),l("option",{onClick:t=>u.clic(e),key:e},o(e),9,["onClick"])))),128))],512)]),vt])])])};const gt={},yt=k('<div style="padding-top:1000px;"></div><footer class="text-centerbg-light text-muted"><div class="container text-center"><div class="me-5 d-flex justify-content-center p-1 border-bottom"><span class="me-4">Social networks:</span><div><i class="me-4 bi bi-facebook"></i><i class="me-4 bi bi-twitter"></i><i class="me-4 bi bi-google"></i><i class="me-4 bi bi-instagram"></i><i class="me-4 bi bi-linkedin"></i><i class="me-4 bi bi-github"></i></div></div><div class="row"><div class="col"><h6 class="text-uppercase fw-bold">Company</h6></div><div class="col"><h6 class="text-uppercase fw-bold">Products</h6></div><div class="col"><h6 class="text-uppercase fw-bold">Useful links</h6></div><div class="col"><h6 class="text-uppercase fw-bold">Contact</h6></div></div></div><div class="text-center text-light p-2 bg-success"> © 2021 Copyright: <a class="text-reset fw-bold" href="#">testvue</a></div></footer>',2);gt.render=function(e,t){return yt};const ft=w({state:()=>({tab:localStorage.savedTab,info:!1}),mutations:{savedTab(e,t){e.tab=t},savedInfo(e,t){e.info=t}},onMounted(){this.state.tab="Producto"}});x(nt).use(ft).mount("#header"),x(at).use(ft).mount("#app"),x(gt).mount("#footer");