import{d as b,r as l,a1 as m,b as a,c as s,F as v,W as g,e as u,f as x,N as y,n as I,t as k,p as T,j as S,a5 as C,l as $}from"./entry.c65bf5a1.js";const N=t=>(T("data-v-11acbdc3"),t=t(),S(),t),w={class:"tabs-header"},B=["onClick"],H=N(()=>u("span",{class:"tab"},null,-1)),U=[H],q=b({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:_}){const p=t,n=l(),r=l(),c=e=>{e&&(r.value.style.insetInlineStart=`${e.offsetLeft}px`,r.value.style.width=`${e.clientWidth}px`)},h=(e,i)=>{_("update:activeTabIndex",i),C(()=>c(e.target))};return m(n,e=>{e&&setTimeout(()=>{c(n.value.children[p.activeTabIndex])},50)},{immediate:!0}),(e,i)=>(a(),s("div",w,[t.tabs?(a(),s("div",{key:0,ref_key:"tabsRef",ref:n,class:"tabs"},[(a(!0),s(v,null,g(t.tabs,({label:d},o)=>(a(),s("button",{key:`${o}${d}`,class:I([t.activeTabIndex===o?"active":"not-active"]),onClick:f=>h(f,o)},k(d),11,B))),128)),u("span",{ref_key:"highlightUnderline",ref:r,class:"highlight-underline"},U,512)],512)):x("",!0),y(e.$slots,"footer",{},void 0,!0)]))}});const L=$(q,[["__scopeId","data-v-11acbdc3"]]);export{L as default};
