import{bb as t,y as a,b1 as o}from"./index-hmidjSS1.js";const g=t("equipment",()=>{let e=a({});return{sensorData:e,getSensorsData:async s=>{try{const r=await o.get("api/"+s);Object.assign(e,r.data)}catch(r){console.error(r)}return e}}});t("slave1",()=>({sensorData:a({}),getSensorsData:async s=>{try{const r=await o.get(url);Object.assign(equipmentData,r.data)}catch(r){console.error(r)}}}));t("slave2",()=>{let e=a({});return{sensorData:e,getSensorsData:async s=>{try{e=(await o.get("api/"+s)).data}catch(r){console.error(r)}return e}}});t("slave3",()=>{let e=a({});return{sensorData:e,getSensorsData:async s=>{try{e=(await o.get("api/"+s)).data}catch(r){console.error(r)}return e}}});t("slave4",()=>{let e=a({});return{sensorData:e,getSensorsData:async s=>{try{e=(await o.get("api/"+s)).data}catch(r){console.error(r)}return e}}});t("slave5",()=>{let e=a({});return{sensorData:e,getSensorsData:async s=>{try{e=(await o.get("api/"+s)).data}catch(r){console.error(r)}return e}}});t("slave6",()=>{let e=a({});return{sensorData:e,getSensorsData:async s=>{try{e=(await o.get("api/"+s)).data}catch(r){console.error(r)}return e}}});t("slave7",()=>{let e=a({});return{sensorData:e,getSensorsData:async s=>{try{e=(await o.get("api/"+s)).data}catch(r){console.error(r)}return e}}});t("slave8",()=>{let e=a({});return{sensorData:e,getSensorsData:async s=>{try{e=(await o.get("api/"+s)).data}catch(r){console.error(r)}return e}}});t("slave9",()=>{let e=a({});return{sensorData:e,getSensorsData:async s=>{try{e=(await o.get("api/"+s)).data}catch(r){console.error(r)}return e}}});t("slave10",()=>{let e=a({});return{sensorData:e,getSensorsData:async s=>{try{e=(await o.get("api/"+s)).data}catch(r){console.error(r)}return e}}});export{g as u};
