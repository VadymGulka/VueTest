import{p as e,a as t,o as s,c as l,b as o,t as a,w as n,v as i,d as c,l as d,F as r,e as u,f as h,r as p,g as m,h as b,i as v,j as g,k as y,m as k,n as f,q as w,s as x}from"./vendor.dbbc5e8a.js";const T={data:()=>({userInput:"Testing"}),computed:{},methods:{copy(){let e=this.$refs.input;e.setAttribute("type","text"),e.focus(),e.select(),document.execCommand("copy"),e.setAttribute("type","hidden")}}},S=c();e("data-v-04e3f4f4");const C={class:"col"},I=o("br",null,null,-1),A=o("br",null,null,-1),R=o("br",null,null,-1),U=o("br",null,null,-1),z=o("br",null,null,-1),V={class:"test"},$=o("br",null,null,-1);t();const P=S(((e,t,c,d,r,u)=>(s(),l("div",C,[I,A,R,U,z,o("span",V,a(r.userInput),1),$,n(o("input",{ref:"input",type:"hidden","onUpdate:modelValue":t[1]||(t[1]=e=>r.userInput=e)},null,512),[[i,r.userInput]]),o("button",{onClick:t[2]||(t[2]=(...e)=>u.copy&&u.copy(...e))},"Copy input")]))));T.render=P,T.__scopeId="data-v-04e3f4f4";const J={data:()=>({size:null,style:null,product:{nombre:"Ocean banner",desc:"400 pixels ocean banner",discount:40,sizes:[{name:"S",size:"30*20"},{name:"M",size:"50*40"},{name:"XL",size:"60*75"}],styles:[{id:152,color:"Dark",image:"../../ocean1.jpg",price:60,onSale:!0,inventory:100},{id:64,color:"White",image:"../../ocean2.jpg",price:80,onSale:!1,inventory:30},{id:91,color:"Red",image:null,price:96,onSale:!1,inventory:0}]},curProducts:[]}),computed:{descPrice:function(){return this.product.price-this.product.price*this.product.discount/100},sizesCount:function(){return Object.keys(this.product.sizes).length}},created(){this.style=this.product.styles[0],this.size=this.product.sizes[0],this.debounceCart=d.debounce(this.addCart,500)},methods:{addCart(){this.curProducts.push({variantID:this.style.id,size:this.style.name})}}},B=c();e("data-v-0d0888e9");const E={class:"p-2 row border"},O={style:{position:"relative"},class:"col"},j={class:"h1 imagetext text-white"},D={key:1},M=o("img",{alt:"Image placeholser",class:"img-fluid border border-5",src:"http://placekitten.com/g/320/220"},null,-1),N=o("figcaption",null,"Out of stock",-1),G={class:"col"},L={class:"display: inline-block"},F={class:"h1"},_={type:"button",class:"btn m-2 btn-success float-end"},X=o("i",{class:"bi bi-cart"},null,-1),q={class:"table"},H=o("th",null,"Inventory",-1),W={key:0,class:"bi bi-check-circle"},K={key:1,class:"bi bi-exclamation-circle"},Q=o("th",null,"On sale",-1),Z={key:0,class:"bi bi-check-circle"},Y={key:1,class:"bi bi-exclamation-circle"},ee=o("th",null,"Descuento",-1),te=o("th",null,"Tamaños",-1),se=o("th",null,"Estilos",-1),le={class:"h3"};t();const oe=B(((e,t,i,c,d,m)=>(s(),l("div",E,[o("div",O,[d.style.image?(s(),l(r,{key:0},[o("span",j,a(d.size.size),1),o("img",{alt:"Image placeholser",class:"img-fluid border border-5",src:d.style.image},null,8,["src"])],64)):(s(),l("figure",D,[M,N]))]),o("div",G,[o("div",L,[o("span",F,a(d.product.nombre),1),o("button",_,[X,u(" Card ("+a(d.curProducts.length)+") ",1)])]),o("p",null,a(d.product.desc),1),o("table",q,[o("tr",null,[H,o("td",null,a(d.style.inventory),1),o("td",null,[d.style.inventory>=100?(s(),l("i",W)):(s(),l("i",K))])]),o("tr",null,[Q,o("td",null,a(d.style.onSale),1),o("td",null,[d.style.onSale?(s(),l("i",Z)):(s(),l("i",Y))])]),o("tr",null,[ee,o("td",null,a(d.product.discount+"%"),1),o("td",null,a("-"+d.style.price*d.product.discount/100+"$"),1)]),o("tr",null,[te,o("td",null,a(m.sizesCount),1),o("td",null,[n(o("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>d.size=e)},[(s(!0),l(r,null,p(d.product.sizes,(e=>(s(),l("option",{value:e,key:e},a(e.size),9,["value"])))),128))],512),[[h,d.size]])])]),o("tr",null,[se,o("td",null,a(d.product.styles.length),1),o("td",null,[n(o("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>d.style=e)},[(s(!0),l(r,null,p(d.product.styles,(e=>(s(),l("option",{value:e,key:e},a(e.color),9,["value"])))),128))],512),[[h,d.style]])])])]),o("div",null,[o("span",le,a(d.style.price+"$"),1),o("button",{class:"btn btn-success btn-lg float-end",onClick:t[3]||(t[3]=(...t)=>e.debounceCart&&e.debounceCart(...t))}," Añadir a las cesta ")])])]))));J.render=oe,J.__scopeId="data-v-0d0888e9";const ae={emits:["submitReview"],data:()=>({name:"",review:"",rating:null,rec:null}),methods:{onSubmit(){if(""===this.name||""===this.review||null===this.rating)return void alert("Review is incomplete. Please fill out every field.");let e={name:this.name,review:this.review,rating:this.rating,rec:this.rec};this.$emit("submitReview",e)}}},ne=o("p",null,"Leave a review",-1),ie=u(" Name: "),ce=u(" Review:"),de=u(" Rating:"),re=o("option",null,"5",-1),ue=o("option",null,"4",-1),he=o("option",null,"3",-1),pe=o("option",null,"2",-1),me=o("option",null,"1",-1),be=u(" Recomended?"),ve=o("button",{type:"submit"},"Submit",-1);ae.render=function(e,t,a,c,d,r){return s(),l("form",{onSubmit:t[5]||(t[5]=b(((...e)=>r.onSubmit&&r.onSubmit(...e)),["prevent"]))},[ne,ie,n(o("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>d.name=e),class:"form-control",type:"text"},null,512),[[i,d.name]]),o("p",null,[ce,n(o("textarea",{"onUpdate:modelValue":t[2]||(t[2]=e=>d.review=e),class:"form-control"},null,512),[[i,d.review]])]),o("p",null,[de,n(o("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>d.rating=e),class:"form-select"},[re,ue,he,pe,me],512),[[h,d.rating,void 0,{number:!0}]])]),o("p",null,[be,n(o("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>d.rec=e),class:"form-checkbox",type:"checkbox"},null,512),[[m,d.rec,void 0,{number:!0}]])]),ve],32)};const ge={components:{ReviewForm:ae},data:()=>({listReviews:[]}),methods:{addReview(e){this.listReviews.push(e)}}},ye={class:"row"},ke={class:"col-2"},fe={class:"col"},we=o("span",{class:"h1"},"Reviews",-1);ge.render=function(e,t,i,c,d,h){const m=v("ReviewForm");return s(),l("div",ye,[o("div",ke,[o(m,{onSubmitReview:h.addReview},null,8,["onSubmitReview"])]),o("div",fe,[we,(s(!0),l(r,null,p(d.listReviews,((e,t)=>(s(),l("ul",{key:t},[o("li",null,[u(a(e.name+" gave this "+e.rating+" stars")+" ",1),o("p",null,a(e.review),1),n(o("p",null,"Recomended!",512),[[g,e.rec]])])])))),128))])])};function xe(e,t){this.checked=!1,this.id=Math.random().toString(36).substr(2,9),this.data=e,this.date=(new Date).toLocaleString(),this.tags=t}const Te={data:()=>({searchString:null,checkmarkAll:null,todos:[],savedTodos:[],input:null,tags:[{name:"Javascript",checked:!1},{name:"Vue",checked:!1},{name:"HTML",checked:!1}]}),computed:{completed(){let e=0;return this.todos.forEach((t=>{t.checked&&e++})),e},width(){let e=Math.round(this.completed/this.todos.length*100);return isNaN(e)?0:e+"%"},enabledTags(){let e=[];return this.tags.forEach((t=>{t.checked&&e.push(t.name)})),e}},watch:{completed(e){e==this.todos.length?this.checkmarkAll=!0:this.checkmarkAll=!1}},created(){this.savedTodos=JSON.parse(localStorage.savedTodos),this.showOrderedTodos()},methods:{saveToLocal(){localStorage.savedTodos=JSON.stringify(this.savedTodos)},search(){if(""==this.searchString)return this.showOrderedTodos(),null;this.todos=[];for(var e=this.savedTodos.length-1;e>=0;e--)this.savedTodos[e].data.toLowerCase().search(this.searchString.toLowerCase())||this.todos.push(this.savedTodos[e])},checkAll(){this.checkmarkAll&&this.todos.forEach((e=>e.checked=!0)),this.checkmarkAll||this.todos.forEach((e=>e.checked=!1))},copy(e){let t=this.$refs[e];t.setAttribute("type","text"),t.focus(),t.select(),document.execCommand("copy"),t.setAttribute("type","hidden")},showOrderedTodos(){this.todos=this.savedTodos.slice().reverse()},removeTodo(e){this.savedTodos=this.savedTodos.filter((t=>t.id!=e)),this.saveToLocal(),this.showOrderedTodos()},addTodo(){let e=new xe(this.input,this.enabledTags);null!=e.data&&(this.savedTodos.push(e),this.input=null),this.saveToLocal(),this.showOrderedTodos()},purge(){this.savedTodos=[],localStorage.savedTodos="[]",this.showOrderedTodos()}}},Se=c();e("data-v-2b26a953");const Ce={class:"container"},Ie=o("h1",null,"Todo list",-1),Ae={class:"row"},Re={class:"col-md-5"},Ue={class:"col-md-6"},ze={class:"h1"},Ve={class:"progress"},$e={class:"table table-striped"},Pe=u("#"),Je=o("th",null,"ID",-1),Be=o("th",null,"Text",-1),Ee=o("th",null,"Date",-1),Oe=o("th",{colspan:"2"},"Tags",-1);t();const je=Se(((e,t,c,d,h,b)=>(s(),l("div",Ce,[Ie,o("div",Ae,[o("div",Re,[o("div",null,[n(o("input",{onInput:t[1]||(t[1]=(...e)=>b.search&&b.search(...e)),class:"form-control",type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>h.searchString=e),placeholder:"Search..."},null,544),[[i,h.searchString]]),n(o("input",{class:"form-control",type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>h.input=e),placeholder:"Add todo..."},null,512),[[i,h.input]]),(s(!0),l(r,null,p(h.tags,((e,t)=>(s(),l(r,{key:e},[n(o("input",{"onUpdate:modelValue":e=>h.tags[t].checked=e,type:"checkbox"},null,8,["onUpdate:modelValue"]),[[m,h.tags[t].checked]]),u(a(e.name),1)],64)))),128))]),o("button",{class:"btn btn-success",onClick:t[4]||(t[4]=e=>b.addTodo())},"Add todo"),o("button",{class:"btn btn-danger",onClick:t[5]||(t[5]=e=>b.purge())},"Clear todos")]),o("div",Ue,[o("span",ze,"Stats: "+a(b.completed+"/"+h.todos.length),1),o("div",Ve,[o("div",{class:"progress-bar",role:"progressbar",style:{width:b.width}},a(b.width),5)])])]),o("table",$e,[o("thead",null,[o("tr",null,[o("th",null,[Pe,n(o("input",{onChange:t[6]||(t[6]=(...e)=>b.checkAll&&b.checkAll(...e)),"onUpdate:modelValue":t[7]||(t[7]=e=>h.checkmarkAll=e),type:"checkbox"},null,544),[[m,h.checkmarkAll]])]),Je,Be,Ee,Oe])]),o("tbody",null,[(s(!0),l(r,null,p(h.todos,(e=>(s(),l("tr",{key:e},[o("td",null,[n(o("input",{type:"checkbox","onUpdate:modelValue":t=>e.checked=t},null,8,["onUpdate:modelValue"]),[[m,e.checked]])]),o("td",{onClick:t=>b.copy(e.id)},[u(a(e.id)+" ",1),o("input",{ref:e.id,type:"hidden",value:e.id},null,8,["value"])],8,["onClick"]),o("td",null,a(e.data),1),o("td",null,a(e.date),1),o("td",null,a(e.tags),1),o("td",null,[o("button",{onClick:t=>b.removeTodo(e.id),class:"btn btn-danger"},"Remove",8,["onClick"])])])))),128))])])]))));Te.render=je,Te.__scopeId="data-v-2b26a953";const De={data:()=>({price:250,yearly:null}),computed:{curPrice(){return this.yearly?Math.round(.75*this.price):Math.round(this.price)},pageviews(){return 1e3*this.price}}},Me=c();e("data-v-0c9d63d4");const Ne={class:"container text-center py-5"},Ge=o("div",{id:"divcircles",class:"row py-2"},[o("h1",null,"Simple, traffic-based pricing"),o("p",{class:"text-muted"},"Sign-up for our 30-day trial."),o("p",{class:"text-muted"},"No credit card required."),o("svg",{id:"circles",width:"146",height:"145"},[o("g",{fill:"none","fill-rule":"evenodd",stroke:"#CFD8EF"},[o("circle",{cx:"63",cy:"82",r:"62.5"}),o("circle",{cx:"105",cy:"41",r:"40.5"})])])],-1),Le={class:"bg-white"},Fe={class:"row mx-3 border-bottom border-light"},_e={class:"text-muted fs-5 p-4"},Xe={class:"p-4"},qe={class:"text-align-center"},He={class:"align-middle fs-1"},We=o("span",{class:"text-muted"},"/month",-1),Ke={class:"mt-5"},Qe=o("span",{class:"align-bottom text-muted px-1 fs-4"},"Monthly Billing ",-1),Ze={class:"switch"},Ye=o("span",{class:"slider"},null,-1),et=o("span",{class:"align-bottom text-muted px-1 fs-4"},"Yearly Billing",-1),tt=o("span",{class:"align-middle discount mx-1 px-2 fs-5"},"-25%",-1),st=o("div",{class:"row pt-5"},[o("ul",null,[o("li",null,"Unlimited websites"),o("li",null,"100% data ownership"),o("li",null,"Email report"),o("button",{class:"mt-4 btn btn-lg btn-dark btn-outline-light"},"Start my trial")])],-1);t();const lt=Me(((e,t,c,d,r,u)=>(s(),l("div",Ne,[Ge,o("div",Le,[o("div",Fe,[o("p",_e,a(u.pageviews)+" PAGEVIEWS",1),n(o("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.price=e),type:"range",min:"0",max:"500",class:"form-range px-5"},null,512),[[i,r.price]]),o("div",Xe,[o("p",qe,[o("span",He,"$ "+a(u.curPrice),1),We]),o("div",Ke,[Qe,o("label",Ze,[n(o("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>r.yearly=e),type:"checkbox"},null,512),[[m,r.yearly]]),Ye]),et,tt])])]),st])]))));De.render=lt,De.__scopeId="data-v-0c9d63d4";const ot={components:{Producto:J,Reviews:ge,Todo:Te,Pricing:De,Info:T},computed:{infoStatus(){return this.$store.state.info}}},at=u(" d ");ot.render=function(e,t,a,n,i,c){const d=v("Info");return s(),l(r,null,[c.infoStatus?(s(),l(r,{key:0},[at,o(d)],64)):y("",!0),(s(),l(k(e.$store.state.tab)))],64)};const nt={data:()=>({tabs:["Pricing","Producto","Reviews","Todo"],input:!1}),mounted(){this.$refs.input.value=localStorage.savedTab},methods:{clic(e){this.$store.commit("savedTab",e),localStorage.savedTab=e},changeInfo(){localStorage.savedInfo=this.input,this.$store.commit("savedInfo",this.input)}}},it={class:"mb-3 navbar navbar-expand navbar-dark bg-success"},ct={class:"navbar-nav container-fluid"},dt=o("a",{class:"navbar-brand px-2",href:"#"},"Navbar",-1),rt=u("Test "),ut=o("a",{class:"nav-link",href:"#"},"Home",-1),ht=o("a",{class:"nav-link",href:"#"},"Todo",-1),pt={class:"dropdown"},mt={ref:"input",class:"form-select",valu:""},bt=o("option",{selected:"",disabled:""},"Modulos",-1),vt=o("form",{class:"d-flex"},[o("input",{class:"form-control me-2",type:"search",placeholder:"Search"}),o("button",{class:"btn btn-outline-dark",type:"submit"},"Search")],-1);nt.render=function(e,t,i,c,d,u){return s(),l("header",null,[o("nav",it,[o("div",ct,[dt,n(o("input",{onChange:t[1]||(t[1]=(...e)=>u.changeInfo&&u.changeInfo(...e)),"onUpdate:modelValue":t[2]||(t[2]=e=>d.input=e),type:"checkbox"},null,544),[[m,d.input]]),rt,ut,ht,o("div",pt,[o("select",mt,[bt,(s(!0),l(r,null,p(d.tabs,(e=>(s(),l("option",{onClick:t=>u.clic(e),key:e},a(e),9,["onClick"])))),128))],512)]),vt])])])};const gt={},yt=f('<div style="padding-top:1000px;"></div><footer class="text-centerbg-light text-muted"><div class="container text-center"><div class="me-5 d-flex justify-content-center p-1 border-bottom"><span class="me-4">Social networks:</span><div><i class="me-4 bi bi-facebook"></i><i class="me-4 bi bi-twitter"></i><i class="me-4 bi bi-google"></i><i class="me-4 bi bi-instagram"></i><i class="me-4 bi bi-linkedin"></i><i class="me-4 bi bi-github"></i></div></div><div class="row"><div class="col"><h6 class="text-uppercase fw-bold">Company</h6></div><div class="col"><h6 class="text-uppercase fw-bold">Products</h6></div><div class="col"><h6 class="text-uppercase fw-bold">Useful links</h6></div><div class="col"><h6 class="text-uppercase fw-bold">Contact</h6></div></div></div><div class="text-center text-light p-2 bg-success"> © 2021 Copyright: <a class="text-reset fw-bold" href="#">testvue</a></div></footer>',2);gt.render=function(e,t){return yt};const kt={data:()=>({books:[],Xkey:"$2b$10$3aiaGzTJFQJ.9Xq1HB98luhpa0k0ymDBDcK9/yZG3xTEaNoW7geJy"}),computed:{CountBooks(){return this.books.length}},mounted(){(async function(){console.log("GET books");return(await fetch("https://api.jsonbin.io/v3/b/60c316a4b274176a77e50bce/latest",{method:"GET",headers:{"Content-Type":"application/json","X-Master-key":"$2b$10$3aiaGzTJFQJ.9Xq1HB98luhpa0k0ymDBDcK9/yZG3xTEaNoW7geJy"}})).json()})().then((e=>{e.record.forEach((e=>{this.books.push(e)}))}))},methods:{async AddBookJson(){console.log("POST book"),await fetch("https://api.jsonbin.io/v3/b/60c316a4b274176a77e50bce",{method:"PUT",headers:{"Content-Type":"application/json","X-Master-Key":this.Xkey},body:JSON.stringify(this.books)})}}};const ft={class:"row"},wt=f('<img src="https://via.placeholder.com/50" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">Components</h5><p class="card-text">Some quick example text to build on the card title</p><a href="src/pages/vue.html" class="btn btn-primary">Go somewhere</a></div>',2),xt={class:"row"},Tt={class:"col"},St=o("br",null,null,-1),Ct=o("br",null,null,-1);kt.render=function(e,t,n,i,c,d){return s(),l(r,null,[o("div",ft,[(s(),l(r,null,p(0,(e=>o("div",{key:e,class:"card m-4",style:{width:"10rem"}},[wt]))),64))]),o("div",xt,[o("div",Tt,[o("button",{class:"btn btn-success",onClick:t[1]||(t[1]=(...e)=>d.AddBookJson&&d.AddBookJson(...e))},"Add Books"),St,o("button",{class:"btn btn-info",onClick:t[2]||(t[2]=(...t)=>e.GetBooksJson&&e.GetBooksJson(...t))},"Test Fetch"),Ct,(s(!0),l(r,null,p(c.books,(e=>(s(),l("table",{key:e.id},[o("td",null,a(e.id),1),o("td",null,a(e.name),1)])))),128)),o("h1",null,"Number of books: "+a(d.CountBooks),1)])])],64)};const It=w({state:()=>({tab:localStorage.savedTab,info:!1}),mutations:{savedTab(e,t){e.tab=t},savedInfo(e,t){e.info=t}},onMounted(){this.state.tab="Producto"}});try{x(nt).use(It).mount("#header"),x(ot).use(It).mount("#app"),x(gt).mount("#footer"),x(kt).use(It).mount("#books")}catch(At){throw!1}