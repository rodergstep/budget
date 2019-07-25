(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{320:function(e,t,a){e.exports=a(715)},442:function(e,t,a){},452:function(e,t,a){},454:function(e,t,a){},456:function(e,t,a){},704:function(e,t,a){},706:function(e,t,a){},708:function(e,t,a){},710:function(e,t,a){},715:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(6),o=a.n(c),l=a(29),i=a(727),u=a(728),s=a(729),m=a(726),d=a(38),E=a(39),p=a(59),y=a(58),g=a(60),f=a(68),h=a(716),v=a(57),b=r.a.createContext(),O=b.Provider,C=b.Consumer,T=function(){return function(e){return function(t){return r.a.createElement(C,null,function(a){return r.a.createElement(e,Object.assign({},t,{budgetService:a}))})}}},j=a(275),I=a.n(j),_=a(722),k=a(724),F=function(e){return{type:"CATEGORY_CHOOSED",payload:e}},A=function(e){return console.log(e),{type:"CATEGORY_REMOVED_FROM_BUDGET",payload:e}},R=function(e){return function(){return function(t){t({type:"FETCH_CATEGORIES_REQUEST"}),e.getBooks().then(function(e){return t({type:"FETCH_CATEGORIES_SUCCESS",payload:e})}).catch(function(e){return t({type:"FETCH_CATEGORIES_FAILURE",payload:e})})}}};var D=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){if(!e){var n=Object.assign({},t,{id:I()(7)});a.props.onAdd(n),a.props.form.resetFields()}})},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.form.validateFields()}},{key:"render",value:function(){var e,t=this.props.form,a=t.getFieldDecorator,n=t.getFieldsError,c=t.getFieldError,o=(0,t.isFieldTouched)("title")&&c("title");return r.a.createElement(_.a,{layout:"inline",className:"create-category",onSubmit:this.handleSubmit},r.a.createElement(_.a.Item,{validateStatus:o?"error":"",help:o||""},a("title",{rules:[{min:1,required:!0}]})(r.a.createElement(k.a,{placeholder:"Type a name"}))),r.a.createElement(_.a.Item,null,r.a.createElement(h.a,{type:"primary",htmlType:"submit",icon:"plus",disabled:(e=n(),Object.keys(e).some(function(t){return e[t]}))})))}}]),t}(r.a.Component),S=_.a.create({name:"create_category_form"})(D),N={onAdd:function(e){return{type:"CATEGORY_ADDED_TO_BUDGET",payload:e}}},w=Object(l.b)(function(){return{}},N)(S),M=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},z=a(718),G=(a(442),function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement(z.a,{size:"large"}))}),B=(a(452),function(){return r.a.createElement("div",null,"Error!")}),L=(a(454),function(e){var t=e.categories,a=e.categoryChoosed,n=e.\u0441hooseCategory,c=e.categoryRemovedFromBudget;return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement("ul",{className:"categories-list"},t?t.map(function(e){return r.a.createElement("li",{key:e.id,onClick:function(){return n(e.id)}},r.a.createElement("div",{className:"categories-list-item ".concat(a===e.id?"is-active":null)},r.a.createElement("h3",{className:"category-title"},e.title,r.a.createElement("span",{className:"category-total"},"$",e.categoryTotal)),r.a.createElement("div",{className:"category-actions"},r.a.createElement(h.a,{size:"small",className:"btn-transparent",onClick:function(t){return t.stopPropagation(),c(e)}},r.a.createElement(v.a,{type:"delete"})))))}):null))}),x=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var e=this.props,t=e.categories,a=e.loading,n=e.error,c=e.categoryChoosed,o=e.\u0441hooseCategory,l=e.categoryRemovedFromBudget;return a?r.a.createElement(G,null):n?r.a.createElement(B,null):r.a.createElement(L,{categories:t,"\u0441hooseCategory":o,categoryChoosed:c,categoryRemovedFromBudget:l})}}]),t}(n.Component),Y=M(T(),Object(l.b)(function(e){var t=e.categoriesList;return{categories:t.categories,loading:t.loading,error:t.error,categoryChoosed:t.categoryChoosed}},function(e,t){var a=t.budgetService;return Object(f.b)({fetchBooks:R(a),"\u0441hooseCategory":F,categoryRemovedFromBudget:A},e)}))(x),U=a(723),H=a(725),K=(a(456),U.a.Option);var V,$=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){if(!e){var n=Object.assign(t,{categoryId:a.props.categoryChoosed});a.props.onAdd(n),a.props.form.resetFields()}})},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.form.validateFields()}},{key:"render",value:function(){var e,t=this.props.form,a=t.getFieldDecorator,n=t.getFieldsError,c=t.getFieldError,o=(0,t.isFieldTouched)("title")&&c("title");return r.a.createElement(_.a,{layout:"inline",className:"create-item",onSubmit:this.handleSubmit},r.a.createElement(_.a.Item,{validateStatus:o?"error":"",help:o||""},a("title",{rules:[{min:1,required:!0}]})(r.a.createElement(k.a,{placeholder:"Type a name"}))),r.a.createElement(_.a.Item,null,a("amount",{initialValue:0,rules:[{type:"number",message:"Please, fill only with numbers"}]})(r.a.createElement(H.a,{formatter:function(e){return"$ ".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},min:0}))),r.a.createElement(_.a.Item,null,a("type",{initialValue:"inc"})(r.a.createElement(U.a,{width:60},r.a.createElement(K,{value:"inc"},"incomes"),r.a.createElement(K,{value:"dec"},"expenses")))),r.a.createElement(_.a.Item,null,r.a.createElement(h.a,{type:"primary",htmlType:"submit",style:{width:85},disabled:(e=n(),Object.keys(e).some(function(t){return e[t]}))},"Add")))}}]),t}(r.a.Component),P=_.a.create({name:"create_item_form"})($),q={onAdd:function(e){return{type:"ITEM_ADD_TO_CATEGORY",payload:e}}},J=Object(l.b)(function(e){return{categoryChoosed:e.categoriesList.categoryChoosed}},q)(P),Q=a(719),W=a(720),X=a(22),Z=(a(704),Object(l.b)(function(e){var t=e.categoriesList;return{categories:t.categories,categoryChoosed:t.categoryChoosed}})(function(e){var t=e.categories,a=e.categoryChoosed,n=[];t.forEach(function(e){var t=e.title,a=e.categoryTotal;n.push({title:t,categoryTotal:a})});var c=[],o=[];t.forEach(function(e){for(var t=0;t<e.items.length;t++)"inc"===e.items[t].type?c.push({name:e.title,value:e.categoryTotal}):o.push({name:e.title,value:e.categoryTotal})});var l=["#0088FE","#00C49F","#FFBB28","#FF8042"],i=function(e){return r.a.createElement(X.h,{width:300,height:300},r.a.createElement(X.g,{data:e,cx:150,cy:150,fill:"#8884d8",dataKey:"value"},c.map(function(e,t){return r.a.createElement(X.f,{key:"cell-".concat(t),fill:l[t%l.length]})})))},u=r.a.createElement(X.d,{width:600,height:300,data:n},r.a.createElement(X.j,{dataKey:"title",stroke:"#8884d8"}),r.a.createElement(X.k,null),r.a.createElement(X.i,{wrapperStyle:{width:100,backgroundColor:"#ccc"}}),r.a.createElement(X.e,{stroke:"#ccc",strokeDasharray:"5 5"}),r.a.createElement(X.c,{type:"monotone",dataKey:"categoryTotal",fill:"#8884d8",barSize:30})),s=[];t.forEach(function(e){e.id===a&&e.items.forEach(function(e){s.push({name:e.title,uv:e.amount,pv:e.amount+1e3,amt:e.amount-700})})});var m=r.a.createElement(X.b,{width:600,height:400,data:s,margin:{top:10,right:30,left:0,bottom:0}},r.a.createElement(X.e,{strokeDasharray:"3 3"}),r.a.createElement(X.j,{dataKey:"name"}),r.a.createElement(X.k,null),r.a.createElement(X.i,null),r.a.createElement(X.a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),r.a.createElement(X.a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),r.a.createElement(X.a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}));return r.a.createElement("div",{className:"categories-info-table"},t?r.a.createElement("div",null,r.a.createElement("div",{className:"chart-item"},r.a.createElement("h4",{className:"chart-title"},"Single category"),m),r.a.createElement("div",{className:"chart-item"},r.a.createElement(Q.a,null,r.a.createElement(W.a,{span:12},r.a.createElement("h4",{className:"chart-title"},"Incomes"),i(c)),r.a.createElement(W.a,{span:12},r.a.createElement("h4",{className:"chart-title"},"Expenses"),i(o)))),r.a.createElement("div",{className:"chart-item"},r.a.createElement("h4",{className:"chart-title"},"All categories"),u)):r.a.createElement(G,null))})),ee=(a(706),{onDelete:function(e){return console.log(e),{type:"ITEM_REMOVE_FROM_CATEGORY",payload:e}}}),te=Object(l.b)(function(e){var t=e.categoriesList,a=t.categories,n=t.categoryChoosed;return{category:a.filter(function(e){return e.id===n})[0]}},ee)(function(e){var t=e.category,a=e.onDelete;return r.a.createElement("div",{className:"categories-info-table"},t?r.a.createElement("div",null,r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,t?t.items.map(function(e,t){var n=e.id,c=e.title,o=e.amount,l=e.type;return r.a.createElement("tr",{key:n},r.a.createElement("td",null,t+1),r.a.createElement("td",null,c),r.a.createElement("td",null,"$ ","dec"===l?"-":null,o),r.a.createElement("td",null,r.a.createElement(h.a,{size:"small",className:"btn-transparent",onClick:function(){return a(e)}},r.a.createElement(v.a,{type:"delete"}))))}):null)),r.a.createElement("div",{className:"total"},"Total: $",t&&t.categoryTotal)):r.a.createElement(G,null))}),ae=m.a.Content,ne=m.a.Sider,re=function(){return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(ne,{width:360},r.a.createElement(Y,null)),r.a.createElement(m.a,{style:{padding:"0 0 0 24px"}},r.a.createElement(ae,null,r.a.createElement(J,null),r.a.createElement(te,null),r.a.createElement(Z,null)))))},ce=(a(708),a(721)),oe=Object(l.b)(function(e){return{categories:e.categoriesList.categories}})(function(e){var t=e.categories,a=t.length||0,n=t.reduce(function(e,t){return e+t.categoryTotal},0);return r.a.createElement("header",{className:"budget-header row"},r.a.createElement(ce.a,{to:"/"},r.a.createElement("div",{className:"logo text-dark"},r.a.createElement("svg",{width:"141.53",height:"30.03",viewBox:"0 0 849.2 180.2"},r.a.createElement("g",null,r.a.createElement("path",{fill:"#f57d14",fillRule:"nonzero",id:"path22",d:"m108.89626,132.185l87.74625,0l0,-130.0875l-87.74625,130.0875"}),r.a.createElement("path",{fill:"#ed451e",fillRule:"nonzero",id:"path24",d:"m0,0.00125l0,132.18375l196.64251,-132.18375l-196.64251,0"}),r.a.createElement("path",{fill:"#202d59",fillRule:"nonzero",id:"path26",d:"m270.685,54.30999c3.98499,0 10.43124,-0.23752 14.21875,-2.05627c5.73001,-3.14124 7.55624,-8.0625 7.55624,-15.53375c0,-8.03626 -4.8425,-12.79248 -8.91125,-14.69873c-3.10748,-1.57001 -7.1225,-2.23499 -13.38748,-2.23499l-18.34,0l0,34.52374l18.86374,0zm3.58499,58.05749c5.70251,0 10.14127,-0.67377 13.61377,-2.06876c7.11624,-3.19501 11.36499,-9.01251 11.51624,-17.51126c0,-8.11124 -4.55624,-14.32623 -11.5275,-17.31125c-5.02875,-2.09375 -9.14749,-2.245 -15.35126,-2.245l-20.69998,0l0,39.13626l22.44873,0zm-44.52499,19.81623l0,-132.18247l45.87,0c17.85001,0 39.41501,9.40372 39.41501,34.25373c0,14.84378 -6.95126,24.37125 -13.20377,27.92126c16.81876,6.45874 20.10876,22.44 20.10876,31.85873c0,21.125 -17.42001,38.14875 -45.125,38.14875l-47.065,0zm192.72504,-48.90376l0,-50.7225l-21.71503,0l0,50.7225c0,18.035 -9.22876,29.67627 -23.68124,29.67627c-14.41251,0 -23.64127,-11.64124 -23.64127,-29.67627l0,-50.7225l-21.7525,0l0,50.7225c0,30.26877 20.17627,49.62251 45.39377,49.62251c25.26126,0 45.39627,-19.35374 45.39627,-49.62251zm60.3537,-32.83749c-15.625,0 -27.84497,13.80001 -27.84497,31.45626c0,17.13248 12.45001,31.03372 27.84497,31.03372c15.26251,0 28.16504,-14.19626 28.16504,-31.03372c0,-17.34375 -12.64624,-31.45626 -28.16504,-31.45626zm0,82.46c-27.78375,0 -49.6087,-22.18623 -49.6087,-51.18998c0,-29.10751 21.82495,-51.39252 49.6087,-51.39252c10.13,0 20.34753,3.67374 28.16504,10.74124l0,-41.06125l21.69501,0l0,130.86875l-21.15625,0l0,-9.16376c-7.76752,7.36378 -18.17255,11.19752 -28.7038,11.19752l0,0zm111.48254,-20.00001c-15.6225,0 -27.84375,-13.91998 -27.84375,-31.5625c0,-17.14374 12.45624,-31.04748 27.84375,-31.04748c15.26123,0 28.1637,14.19622 28.1637,31.04748c0,17.32877 -12.64746,31.5625 -28.1637,31.5625zm28.70123,-80.345l0,8.96375c-7.76501,-7.36249 -18.17126,-11.20249 -28.70123,-11.20249c-27.78375,0 -49.5675,22.185 -49.5675,51.20502c0,29.09875 21.78375,51.38374 49.5675,51.38374c10.1275,0 20.34747,-3.67874 28.1637,-10.7425c0,0 4.39001,37.52488 -28.69873,37.52488c-13.95123,0 -23.79749,-10.021 -28.21997,-17.57225c0.00623,0 -17.34875,12.19 -17.34875,12.19c8.52625,15.92625 26.57751,25.69238 45.56873,25.69238c12.77625,0 25.34253,-3.625 34.27625,-11.4575c10.48999,-9.25638 16.24377,-22.13239 16.24377,-39.49127l0,-96.49375l-21.28375,0zm55.6825,39.88501c0.78625,-5.88251 7.91876,-22.29373 25.65002,-22.29373c17.19873,0 24.73499,15.90371 25.40869,22.29373l-51.05872,0zm59.83252,-28.20626c-9.05505,-9.49622 -21.35626,-13.91248 -34.2088,-13.91248c-27.46625,0 -48.6225,22.81751 -48.6225,51.47998c0,28.94 20.69379,51.09876 49.1413,51.09876c14.97247,0 30.11249,-7.76499 39.39624,-19.63374l-16.94128,-11.875c-5.57123,7.65997 -15.03748,11.67874 -22.45496,11.67874c-11.60626,0 -23.41876,-8.28876 -26.3175,-22.54126l72.78125,0c0,0 6.64624,-25.91498 -12.77374,-46.29501zm62.4425,68.81378c-11.03253,0 -16.16254,-5.38 -16.16254,-16.97003l0,-44.32998l21.20374,0l0,-19.1925l-21.20374,0l0,-27.46124l-21.69751,0l0,90.98373c0,23.02875 13.19501,36.82252 34.44629,36.82252c4.42999,0 8.81622,-0.63873 8.81622,-0.63873l0,-19.48252c-2.72498,0.23251 -4.26752,0.26877 -5.40247,0.26877zm33.82874,-95.10126c1.59375,0 3.435,-0.43127 3.435,-2.33875c0,-1.71753 -1.64752,-2.15002 -3.13251,-2.15002l-2.58502,0l0,4.48877l2.28253,0zm-5.10376,-6.88501l5.53375,0c2.94623,0 5.84247,1.23126 5.84247,4.60999c0,2.27502 -1.41498,3.7525 -3.6275,4.24252l4.23254,6.88123l-3.4425,0l-3.67999,-6.57623l-2.03754,0l0,6.57623l-2.82123,0l0,-15.73373zm5.46997,19.73627c6.51129,0 11.79626,-5.35376 11.79626,-11.8075c0,-6.51376 -5.28497,-11.80002 -11.79626,-11.80002c-6.50873,0 -11.80621,5.28625 -11.80621,11.80002c0,6.45374 5.29749,11.8075 11.80621,11.8075zm0,-25.75876c7.74005,0 14.01379,6.20874 14.01379,13.95126c0,7.74371 -6.27374,13.82999 -14.01379,13.82999c-7.74249,0 -14.01624,-6.08628 -14.01624,-13.82999c0,-7.74252 6.27374,-13.95126 14.01624,-13.95126"}))))),r.a.createElement("div",{className:"categories-info"},a," categories ($",n,")"))}),le=(a(710),m.a.Header),ie=function(){return r.a.createElement("div",null,r.a.createElement(le,{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement(oe,null))),r.a.createElement("div",{className:"container"},r.a.createElement(u.a,null,r.a.createElement(s.a,{path:"/",component:re,exact:!0}))))},ue=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(B,null):this.props.children}}]),t}(n.Component),se=function(){function e(){Object(d.a)(this,e),this.data=[{id:1,title:"Travelling",categoryTotal:4e3,items:[{id:"option 1 travel",categoryId:1,title:"option 1 travel",amount:3e3,type:"inc"},{id:"option 2 travel",categoryId:1,title:"option 2 travel",amount:8e3,type:"dec"},{id:"option 3 travel",categoryId:1,title:"option 3 travel",amount:9e3,type:"inc"}]},{id:2,title:"Family",categoryTotal:-2e3,items:[{id:"option 1 family",categoryId:2,title:"option 1 family",amount:800,type:"inc"},{id:"option 2 family",categoryId:2,title:"option 2 family",amount:5e3,type:"dec"},{id:"option 3 family",categoryId:2,title:"option 3 family",amount:2200,type:"inc"}]},{id:3,title:"Car",categoryTotal:4500,items:[{id:"option 1 car",categoryId:3,title:"option 1 car",amount:3500,type:"inc"},{id:"option 2 car",categoryId:3,title:"option 2 car",amount:6e3,type:"dec"},{id:"option 3 car",categoryId:3,title:"option 3 car",amount:7e3,type:"inc"}]},{id:4,title:"Moovies",categoryTotal:6e3,items:[{id:"option 1 Moovies",categoryId:4,title:"option 1 Moovies",amount:5e3,type:"inc"},{id:"option 2 Moovies",categoryId:4,title:"option 2 Moovies",amount:1e4,type:"dec"},{id:"option 3 Moovies",categoryId:4,title:"option 3 Moovies",amount:11e3,type:"inc"}]}]}return Object(E.a)(e,[{key:"getBooks",value:function(){var e=this;return new Promise(function(t,a){setTimeout(function(){t(e.data)},700)})}}]),e}(),me=(a(713),a(299)),de=a(84),Ee=function(e,t,a,n){return n?[].concat(Object(de.a)(e.slice(0,a)),Object(de.a)(e.slice(a+1))):-1===a?[].concat(Object(de.a)(e),[t]):[].concat(Object(de.a)(e.slice(0,a)),[t],Object(de.a)(e.slice(a+1)))},pe=function(e,t,a){var n,r=e.categoriesList.categories,c=r.find(function(e){return e.id===t.categoryId}),o=r.findIndex(function(e){return e.id===t.categoryId}),l=c.categoryTotal,i=c.items.findIndex(function(e){return e.id===t.title}),u=a?t:function(e){var t=e.categoryId,a=e.title;return{id:a,categoryId:t,title:a,amount:e.amount,type:e.type}}(t);n=a?"dec"===u.type?l+u.amount:l-u.amount:"dec"===u.type?l-u.amount:l+u.amount;var s=Object.assign({},c,{categoryTotal:n},{items:Ee(c.items,u,i,a)});return Ee(r,s,o)},ye=function(e,t,a){var n,r,c=e.categoriesList.categories;return a?(r={id:t.id,title:t.title,items:[],categoryTotal:0},n=c.findIndex(function(e){return e.id===t.id})):(n=-1,r={id:t.id,title:t.title,items:[],categoryTotal:0}),Ee(c,r,n,a)},ge=function(e,t){if(void 0===e)return{categories:[],loading:!0,error:null,categoryChoosed:1};switch(t.type){case"FETCH_CATEGORIES_REQUEST":return{categories:[],loading:!0,error:null,categoryChoosed:1};case"FETCH_CATEGORIES_SUCCESS":return{categories:t.payload,loading:!1,error:null,categoryChoosed:1};case"FETCH_CATEGORIES_FAILURE":return{categories:[],loading:!1,error:t.payload,categoryChoosed:1};case"CATEGORY_CHOOSED":return Object.assign({},e.categoriesList,{categoryChoosed:t.payload});case"CATEGORY_ADDED_TO_BUDGET":return Object.assign({},e.categoriesList,{categories:ye(e,t.payload)});case"CATEGORY_REMOVED_FROM_BUDGET":return Object.assign({},e.categoriesList,{categories:ye(e,t.payload,"del")});case"ITEM_ADD_TO_CATEGORY":return Object.assign({},e.categoriesList,{categories:pe(e,t.payload)});case"ITEM_REMOVE_FROM_CATEGORY":return Object.assign({},e.categoriesList,{categories:pe(e,t.payload,"del")});default:return e.categoriesList}},fe=function(e,t){return{categoriesList:ge(e,t)}},he=Object(f.c)(fe,Object(f.a)(me.a,function(){return function(e){return function(t){return e("string"===typeof t?{type:t}:t)}}},function(e){var t=e.getState;return function(e){return function(a){return console.log(a.type,t()),e(a)}}}));he.dispatch((V=3e3,function(e){setTimeout(function(){return e({type:"DELAYED_ACTION"})},V)}));var ve=he,be=new se;o.a.render(r.a.createElement(l.a,{store:ve},r.a.createElement(ue,null,r.a.createElement(O,{value:be},r.a.createElement(i.a,null,r.a.createElement(ie,null))))),document.getElementById("root"))}},[[320,2,1]]]);
//# sourceMappingURL=main.7ade2c86.chunk.js.map