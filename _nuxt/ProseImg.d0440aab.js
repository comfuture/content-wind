import{d as a,S as n,Z as i,m as o,b as c,c as d,af as u,H as h,l}from"./entry.c65bf5a1.js";const m=["src","alt","width","height"],_=a({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(t){const e=t,r=n(()=>{var s;return(s=e.src)!=null&&s.startsWith("/")&&!e.src.startsWith("//")?i(e.src,o().app.baseURL):e.src});return(s,f)=>(c(),d("img",u(s.$attrs,{src:h(r),alt:t.alt,width:t.width,height:t.height}),null,16,m))}});const p=l(_,[["__scopeId","data-v-e5a4106d"]]);export{p as default};