import{_ as P,r as n,C as N,w as l,F as R,o as B,b as s,a as e,d as c,O as D,f as w,t as _,P as H,Q as I,R as O,L as T,S as A,T as $,i as j,M as F,U as Q,V as W,W as q,p as G,k as J}from"./index-2UecMW1Z.js";/* empty css                   */const d=i=>(G("data-v-b67c8871"),i=i(),J(),i),K={class:"base-div"},X=d(()=>e("h3",null,"气体箱传感器选择",-1)),Z={class:"data-div p-5"},ee={class:"data-div p-5"},ae=d(()=>e("p",null,"时间选择",-1)),te={class:"data-div p-5"},se=d(()=>e("h3",null,"气象站数据选择",-1)),oe={class:"data-div p-5"},le={class:"data-div p-5"},ne=d(()=>e("p",null,"时间选择",-1)),de={class:"data-div p-5"},ie={class:"base-div"},pe={class:"demo-pagination-block"},ue=d(()=>e("div",{class:"demonstration"},"All combined",-1)),ce={__name:"DataList",setup(i){const z=H,k=I,m={multiple:!0},p=n([]),v=n([]),u=n([]),g=n([]),h=n([]),r=n([]),E=async()=>{const a=await O(p.value,u.value);r.value=[],h.value=a.data.data[0];for(let t of a.data.index_name_list)r.value.push(t[0].COLUMN_NAME)},S=a=>{console.log(`${a} items per page`)},x=a=>{console.log(`current page: ${a}`)};return(a,t)=>{const f=T,b=A,V=$,y=j,C=F,U=Q,Y=W,M=q,L=R;return B(),N(L,{class:"full",gutter:20},{default:l(()=>[s(C,{span:6,xs:24,class:"p-2"},{default:l(()=>[e("div",K,[s(f,{"content-position":"left"},{default:l(()=>[X]),_:1}),e("div",Z,[s(b,{style:{width:"325px"},modelValue:p.value,"onUpdate:modelValue":t[0]||(t[0]=o=>p.value=o),options:c(z),props:m,"collapse-tags":"",clearable:""},null,8,["modelValue","options"])]),e("div",ee,[ae,s(V,{style:{width:"325px"},modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=o=>u.value=o),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":"开始时间","end-placeholder":"结束时间",shortcuts:c(D)},null,8,["modelValue","shortcuts"])]),e("div",te,[s(y,{type:"primary",plain:"",size:"large",onClick:E},{default:l(()=>[w("站点数据查询")]),_:1})]),s(f,{"content-position":"left"},{default:l(()=>[se]),_:1}),e("div",oe,[s(b,{style:{width:"325px"},modelValue:v.value,"onUpdate:modelValue":t[2]||(t[2]=o=>v.value=o),options:c(k),props:m,"collapse-tags":"",clearable:""},null,8,["modelValue","options"])]),e("div",le,[ne,s(V,{style:{width:"325px"},modelValue:g.value,"onUpdate:modelValue":t[3]||(t[3]=o=>g.value=o),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":"开始时间","end-placeholder":"结束时间",shortcuts:c(D)},null,8,["modelValue","shortcuts"])]),e("div",de,[s(y,{size:"large",type:"primary",plain:""},{default:l(()=>[w("气象站数据查询")]),_:1})])])]),_:1}),s(C,{span:18,xs:24,class:"p-2"},{default:l(()=>[e("div",ie,[e("div",pe,[ue,s(U,{"current-page":a.currentPage4,"onUpdate:currentPage":t[4]||(t[4]=o=>a.currentPage4=o),"page-size":a.pageSize4,"onUpdate:pageSize":t[5]||(t[5]=o=>a.pageSize4=o),"page-sizes":[100,200,325,400],small:a.small,disabled:a.disabled,background:a.background,layout:"total, sizes, prev, pager, next, jumper",total:400,onSizeChange:S,onCurrentChange:x},null,8,["current-page","page-size","small","disabled","background"])]),s(M,{data:h.value.value,style:{width:"100%"},height:"250"},{default:l(()=>[s(Y,{fixed:"",prop:"id",label:"Date",width:"150"})]),_:1},8,["data"]),e("h2",null,_(u.value),1),e("h2",null,_(p.value),1),e("h2",null,_(r.value),1)])]),_:1})]),_:1})}}},me=P(ce,[["__scopeId","data-v-b67c8871"]]);export{me as default};
