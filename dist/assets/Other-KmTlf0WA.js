import{r as o,c as i,b as l,w as c,aT as u,aZ as f,i as m,a_ as p,o as x,f as _,t as h}from"./index-xypQAK7t.js";const g={class:"full",id:"text"},D={__name:"Other",setup(v){const r=o([]);o([]);const n=o([]),d=async()=>{const t=await u([["master01","11","it"],["master01","11","et"]],["2024-04-09 08:49:33","2024-04-09 11:49:33"]);n.value=t.data.data;for(let a of t.data.index_name_list)r.value.push(a[0].COLUMN_NAME);for(let a=0;a<t.data.data.length;a++)for(let e=0;e<t.data.data[0].length;e++){let s=f.defaults(t.data[a][e],t.data[a+1][e]);console.log(s)}};return(t,a)=>{const e=m,s=p;return x(),i("div",g,[l(e,{onClick:d},{default:c(()=>[_(" 数组测试 ")]),_:1}),l(s,null,{default:c(()=>[_(h(n.value),1)]),_:1})])}}};export{D as default};
