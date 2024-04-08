import{r as h,bg as v,l as y,I as g,o as f,c as _,b1 as b,x as A,bh as I}from"./index-hmidjSS1.js";const w={title:{text:"气压数据",subtext:"12小时历史",left:"center"},tooltip:{trigger:"axis",axisPointer:{animation:!1}},legend:{top:"7%",data:["正气压","负气压"]},toolbox:{feature:{restore:{}}},axisPointer:{link:[{xAxisIndex:"all"}]},dataZoom:[{show:!0,start:30,end:70,xAxisIndex:[0,1]},{type:"inside",start:30,end:70,xAxisIndex:[0,1]}],grid:[{left:60,right:50,height:"35%",containLabel:!0},{left:60,right:50,top:"55%",height:"35%",containLabel:!0}],xAxis:[{type:"category",show:!0,boundaryGap:!1,axisLine:{onZero:!0},data:[]},{gridIndex:1,type:"category",boundaryGap:!1,axisLine:{onZero:!0},data:[],position:"top"}],yAxis:[{type:"value"},{gridIndex:1,type:"value",inverse:!0}],series:[{name:"正气压",type:"line",symbolSize:8,data:[],areaStyle:{}},{name:"负气压",type:"line",data:[],xAxisIndex:1,yAxisIndex:1,symbolSize:8,areaStyle:{}}]},H={class:"full",id:"ap-history"},z={__name:"APHistoryChart",setup(L){let l=w,d=h([]);const p=v(),s=(e,a)=>{try{b.post("school/range_query",{masterNum:"master01",sensorNum:["qy11"],time:p}).then(t=>{d.value=t.data,u(e,d.value,a)})}catch(t){console.error(t)}};function u(e,a,t){let i=a[0],o=[],c=[],r=[];for(let n of i)o.push(Math.abs(n.UAP)),c.push(Math.abs(n.DAP)),r.push(A(n.timest));t.xAxis[0].data=r,t.xAxis[1].data=r,t.series[0].data=o,t.series[1].data=c,e.setOption(t),e.hideLoading()}return y(()=>{let e=g("ap-history");e.showLoading(),s(e,l),window.addEventListener("resize",function(){e.resize()})}),(e,a)=>(f(),_("div",H))}},O={tooltip:{trigger:"axis"},title:{left:"center",text:"二氧化碳",subtext:"12小时历史"},legend:{data:[],top:"10%"},grad:{containLabel:!0},toolbox:{feature:{}},xAxis:{type:"category",boundaryGap:!1,data:[]},yAxis:{type:"value",boundaryGap:[0,"100%"]},dataZoom:[{type:"inside",start:30,end:70},{start:30,end:70}],series:[]},C={class:"full",id:"co2-dom"},P={__name:"CO2HistoryChart",props:{co2Data:Array},setup(L){let l=h([]);const d=I(),p=async e=>{try{let a=["co211","co212","co213","co214","co215","co216","co217","co218"];b.post("school/range_query",{masterNum:"master01",sensorNum:a,time:d}).then(t=>{l.value=t.data,u(e,l.value)})}catch(a){console.error(a)}};let s=O;function u(e,a){s.series=[],s.xAxis.data=[];let t=[];for(let i=0;i<a.length;i++){let o={name:"",type:"line",symbol:"none",data:[]},c=a[i],r=[],n=[];for(let m of c)r.push(m.CO2),n.push(A(m.timest));o.data=r;let x="从站 0"+(i+1)+" CO2";t.push(x),o.name=x,o.data=r,s.xAxis.data=n,s.series.push(o)}s.legend.data=t,e.setOption(s),e.hideLoading()}return y(()=>{let e=g("co2-dom");e.showLoading(),p(e),window.addEventListener("resize",function(){e.resize()})}),(e,a)=>(f(),_("div",C))}};export{P as _,z as a};
