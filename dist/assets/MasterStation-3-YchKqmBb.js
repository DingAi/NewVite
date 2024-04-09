import{_ as O,y as B,r as I,C as n,w as s,F as M,o as t,b as o,a as e,d as y,ac as q,c as l,G as b,H as S,af as z,ag as D,an as N,ah as T,M as F,f as i,t as f,p as R,k as U,Y as j,i as A}from"./index-2UecMW1Z.js";import{_ as G,a as H}from"./CO2HistoryChart-hZPIYudP.js";const c=m=>(R("data-v-ae1b0495"),m=m(),U(),m),L={class:"base-div items"},Y={class:"item"},$={class:"item"},J={class:"item"},K={class:"item"},P={class:"base-div items"},Q={class:"item"},W={class:"item"},X={class:"base-div items"},Z={class:"item"},ee={class:"item"},te=c(()=>e("p",null,"采样时间设置",-1)),se={class:"base-div"},oe={class:"switch-group-container"},ae={class:"switch_group re-text"},le={class:"station-name text-center p-2"},ie={class:"switchs"},ne={class:"switch text-center"},ce=c(()=>e("p",null,"风扇",-1)),de={key:0,class:"badge rounded-pill open-color-auto"},_e={key:1,class:"badge rounded-pill close-color-auto"},re={class:"switch text-center"},pe=c(()=>e("p",null,"盖子",-1)),ue={key:0,class:"badge rounded-pill open-color-auto"},he={key:1,class:"badge rounded-pill close-color-auto"},me={class:"switch text-center"},ve=c(()=>e("p",null,"电磁阀",-1)),ye={key:0,class:"badge rounded-pill open-color-auto"},fe={key:1,class:"badge rounded-pill close-color-auto"},we={class:"switch text-center"},ke=c(()=>e("p",null,"Other",-1)),xe={key:0,class:"badge rounded-pill open-color-auto"},ge={key:1,class:"badge rounded-pill close-color-auto"},be={class:"switch_group re-text"},Se={class:"station-name text-center p-2"},Ee={class:"switchs text-center"},Ce={class:"switch"},Ve=c(()=>e("p",null,"风扇",-1)),Oe={class:"switch"},Be=c(()=>e("p",null,"盖子",-1)),Ie={class:"switch"},Me=c(()=>e("p",null,"电磁阀",-1)),qe={class:"switch"},ze=c(()=>e("p",null,"Other",-1)),De={__name:"MasterStation-3",setup(m){function E(){let r=[];for(let _=0;_<10;_++){let v=[];for(let p=0;p<4;p++){let u=Math.random()<.5;v.push(u)}r.push(v)}return r}let k=B(E()),h=I(!0);return(r,_)=>{const v=z,p=D,u=M,C=N,V=T,x=F,g=j,d=A;return t(),n(u,{class:"full"},{default:s(()=>[o(x,{span:18,xs:24,class:"data-div"},{default:s(()=>[o(u,{class:"equipment-page-h-20 p-2",id:"master-div-1"},{default:s(()=>[e("div",L,[e("div",Y,[o(v,{modelValue:y(h),"onUpdate:modelValue":_[0]||(_[0]=a=>q(h)?h.value=a:h=a),class:"ml-2","inline-prompt":"",size:"large",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#3ef3e7"},"active-text":"自动模式","inactive-text":"手动模式"},null,8,["modelValue"])]),e("div",$,[o(p,{title:"正在运行的子站",value:268500})]),e("div",J,[o(p,{title:"运行步骤",value:268500})]),e("div",K,[o(p,{title:"气泵状态",value:268500})])])]),_:1}),o(u,{class:"equipment-page-h-60 p-2",id:"master-div-2 "},{default:s(()=>[e("div",P,[e("div",Q,[o(G)]),e("div",W,[o(H)])])]),_:1}),o(u,{class:"equipment-page-h-20 p-2",id:"master-div-3"},{default:s(()=>[e("div",X,[e("div",Z,[o(C,{title:"总运行时间",value:r.value},null,8,["value"])]),e("div",ee,[e("div",null,[te,o(V,{modelValue:r.value,"onUpdate:modelValue":_[1]||(_[1]=a=>r.value=a),style:{width:"240px"},start:"00:00",step:"00:10",end:"10:00",placeholder:"Select time"},null,8,["modelValue"])])])])]),_:1})]),_:1}),o(x,{span:6,xs:24,class:"p-2",id:"switch"},{default:s(()=>[e("div",se,[e("div",oe,[y(h)?(t(!0),l(S,{key:0},b(y(k),(a,w)=>(t(),l("div",ae,[e("div",le,[o(g,{class:"mx-1 text-primary",type:"primary",size:"large"},{default:s(()=>[i(f("Slave Station : ")+f(w+1),1)]),_:2},1024)]),e("div",ie,[e("div",ne,[ce,a[0]?(t(),l("span",de,"Opening")):(t(),l("span",_e,"Closed"))]),e("div",re,[pe,a[1]?(t(),l("span",ue,"Opening")):(t(),l("span",he,"Closed"))]),e("div",me,[ve,a[2]?(t(),l("span",ye,"Opening")):(t(),l("span",fe,"Closed"))]),e("div",we,[ke,a[3]?(t(),l("span",xe,"Opening")):(t(),l("span",ge,"Closed"))])])]))),256)):(t(!0),l(S,{key:1},b(y(k),(a,w)=>(t(),l("div",be,[e("div",Se,[o(g,{class:"mx-1 text-primary",type:"primary",size:"large"},{default:s(()=>[i(f("Slave Station : ")+f(w+1),1)]),_:2},1024)]),e("div",Ee,[e("div",Ce,[Ve,a[0]?(t(),n(d,{key:0,type:"default",round:""},{default:s(()=>[i(" Close ")]),_:1})):(t(),n(d,{key:1,type:"primary",round:""},{default:s(()=>[i(" Enter ")]),_:1}))]),e("div",Oe,[Be,a[1]?(t(),n(d,{key:0,type:"default",round:""},{default:s(()=>[i(" Close ")]),_:1})):(t(),n(d,{key:1,type:"primary",round:""},{default:s(()=>[i(" Enter ")]),_:1}))]),e("div",Ie,[Me,a[2]?(t(),n(d,{key:0,type:"default",round:""},{default:s(()=>[i(" Close ")]),_:1})):(t(),n(d,{key:1,type:"primary",round:""},{default:s(()=>[i(" Enter ")]),_:1}))]),e("div",qe,[ze,a[4]?(t(),n(d,{key:0,type:"default",round:""},{default:s(()=>[i(" Close ")]),_:1})):(t(),n(d,{key:1,type:"primary",round:""},{default:s(()=>[i(" Enter ")]),_:1}))])])]))),256))])])]),_:1})]),_:1})}}},Fe=O(De,[["__scopeId","data-v-ae1b0495"]]);export{Fe as default};
