var q=Object.defineProperty;var A=(l,e,t)=>e in l?q(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var h=(l,e,t)=>(A(l,typeof e!="symbol"?e+"":e,t),t),C=(l,e,t)=>{if(!e.has(l))throw TypeError("Cannot "+t)};var d=(l,e,t)=>(C(l,e,"read from private field"),t?t.call(l):e.get(l)),I=(l,e,t)=>{if(e.has(l))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(l):e.set(l,t)},y=(l,e,t,n)=>(C(l,e,"write to private field"),n?n.call(l,t):e.set(l,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var M,w,v,N,L,b;class ${constructor({dishID:e=null,name:t,position:n,typeID:s=null,type:i,menuID:o=null}){I(this,M,"");I(this,w,"");I(this,v,-1);I(this,N,"");I(this,L,null);I(this,b,null);y(this,M,e||crypto.randomUUID()),y(this,w,t),y(this,v,n),y(this,L,s),y(this,N,i),y(this,b,o)}get dishID(){return d(this,M)}get dishName(){return d(this,w)}get dishType(){return d(this,L)}set dishName(e){typeof e=="string"&&y(this,w,e)}set menuID(e){y(this,b,e)}get menuID(){return d(this,b)}get dishPosition(){return d(this,v)}set dishPosition(e){typeof e=="number"&&e>=0&&y(this,v,e)}render(){const e=document.createElement("li");e.classList.add("menu__dishes-list-item","dish"),e.setAttribute("id",d(this,M)),e.setAttribute("draggable",!0),e.addEventListener("dragstart",o=>{o.target.classList.add("dish_selected"),localStorage.setItem("movedDishID",d(this,M))}),e.addEventListener("dragend",o=>o.target.classList.remove("dish_selected"));const t=document.createElement("span");t.classList.add("dish__text"),t.innerHTML=d(this,w),e.appendChild(t);const n=document.createElement("div");n.classList.add("dish__controls");const s=document.createElement("div");s.classList.add("dish__controls-row");const i=document.createElement("button");return i.setAttribute("type","button"),i.classList.add("dish__contol-btn","delete-icon"),i.addEventListener("click",()=>{localStorage.setItem("deleteDishID",d(this,M)),localStorage.setItem("deleteDishFromMenuID",d(this,b));const o=document.getElementById("modal-delete-dish");o.querySelector(".app-modal__question").innerHTML=`Задача '${d(this,w)}' будет удалена. Прододлжить?`,o.showModal()}),s.appendChild(i),n.appendChild(s),e.appendChild(n),e}}M=new WeakMap,w=new WeakMap,v=new WeakMap,N=new WeakMap,L=new WeakMap,b=new WeakMap;class u{static async getMenu(){try{const e=await fetch("http://localhost:4321/menu"),t=await e.json();return e.status!==200?Promise.reject(t):t.menu}catch(e){return Promise.reject({timestamp:new Date().toISOString(),statusCode:0,message:e.message})}}static async getDishes(){try{const e=await fetch("http://localhost:4321/dishes"),t=await e.json();return e.status!==200?Promise.reject(t):t.dishes}catch(e){return Promise.reject({timestamp:new Date().toISOString(),statusCode:0,message:e.message})}}static async getTypes(){try{const e=await fetch("http://localhost:4321/types"),t=await e.json();return e.status!==200?Promise.reject(t):t.types}catch(e){return Promise.reject({timestamp:new Date().toISOString(),statusCode:0,message:e.message})}}static async addMenu({menuID:e,variant:t=-1,day:n}={menuID:null,variant:-1,day:""}){try{const s=await fetch("http://localhost:4321/menu",{method:"POST",body:JSON.stringify({menuID:e,variant:t,day:n}),headers:{"Content-Type":"application/json"}});if(s.status!==200){const i=await s.json();return Promise.reject(i)}return{timestamp:new Date().toISOString(),message:`Menu '${t}' was successfully added to list of dish lists`}}catch(s){return Promise.reject({timestamp:new Date().toISOString(),statusCode:0,message:s.message})}}static async addDish({dishID:e,name:t,typeID:n}={dishID:null,name:"",typeID:null}){try{const s=await fetch("http://localhost:4321/dishes",{method:"POST",body:JSON.stringify({dishID:e,name:t,typeID:n}),headers:{"Content-Type":"application/json"}});if(s.status!==200){const i=await s.json();return Promise.reject(i)}return{timestamp:new Date().toISOString(),message:`Dish '${t}' was successfully added to list of dishs`}}catch(s){return Promise.reject({timestamp:new Date().toISOString(),statusCode:0,message:s.message})}}static async addDishToMenu({dishID:e,menuID:t}={dishID:null,menuID:null}){try{const n=await fetch(`http://localhost:4321/dishes/${e}`,{method:"POST",body:JSON.stringify({menuID:t}),headers:{"Content-Type":"application/json"}});if(n.status!==200){const s=await n.json();return Promise.reject(s)}return{timestamp:new Date().toISOString(),message:`Dish '${e}' was successfully added to menu '${t}'`}}catch(n){return Promise.reject({timestamp:new Date().toISOString(),statusCode:0,message:n.message})}}static async updateDish({dishID:e,name:t,typeID:n}={dishID:null,name:"",typeID:null}){try{const s=await fetch(`http://localhost:4321/dishes/${e}`,{method:"PATCH",body:JSON.stringify({name:t,typeID:n}),headers:{"Content-Type":"application/json"}});if(s.status!==200){const i=await s.json();return Promise.reject(i)}return{timestamp:new Date().toISOString(),message:`Dish '${t}' was successfully update`}}catch(s){return Promise.reject({timestamp:new Date().toISOString(),statusCode:0,message:s.message})}}static async updateDishes({reordereddishes:e=[]}={reordereddishes:[]}){try{const t=await fetch("http://localhost:4321/dishes",{method:"PATCH",body:JSON.stringify({reordereddishes:e}),headers:{"Content-Type":"application/json"}});if(t.status!==200){const n=await t.json();return Promise.reject(n)}return{timestamp:new Date().toISOString(),message:"Dish was successfully changed"}}catch(t){return Promise.reject({timestamp:new Date().toISOString(),statusCode:0,message:t.message})}}static async deleteDish({dishID:e}={dishID:null}){try{const t=await fetch(`http://localhost:4321/dishes/${e}`,{method:"DELETE"});if(t.status!==200){const n=await t.json();return Promise.reject(n)}return{timestamp:new Date().toISOString(),message:`Dish (ID = '${e}') was successfully delete from dish list`}}catch(t){return Promise.reject({timestamp:new Date().toISOString(),statusCode:0,message:t.message})}}static async deleteMenu({menuID:e}={menuID:null}){try{const t=await fetch(`http://localhost:4321/menu/${e}`,{method:"DELETE"});if(t.status!==200){const n=await t.json();return Promise.reject(n)}return{timestamp:new Date().toISOString(),message:`Menu (ID = '${e}') was successfully delete from menu list`}}catch(t){return Promise.reject({timestamp:new Date().toISOString(),statusCode:0,message:t.message})}}static async editMenu({menuID:e,day:t,variant:n}={menuID:null,day:"",variant:-1}){try{const s=await fetch(`http://localhost:4321/menu/${e}`,{method:"PATCH",body:JSON.stringify({day:t,variant:n}),headers:{"Content-Type":"application/json"}});if(s.status!==200){const i=await s.json();return Promise.reject(i)}return{timestamp:new Date().toISOString(),message:`Menu (ID = '${e}') was successfully changed from menu list`}}catch(s){return Promise.reject({timestamp:new Date().toISOString(),statusCode:0,message:s.message})}}static async deleteDishFromMenu({dishID:e,menuID:t}={dishID:null,menuID:null}){try{const n=await fetch("http://localhost:4321/dishes",{method:"DELETE",body:JSON.stringify({dishID:e,menuID:t}),headers:{"Content-Type":"application/json"}});if(n.status!==200){const s=await n.json();return Promise.reject(s)}return{timestamp:new Date().toISOString(),message:`Dish (ID = '${e}', menuID=${t}) was successfully delete from dish list`}}catch(n){return Promise.reject({timestamp:new Date().toISOString(),statusCode:0,message:n.message})}}static async moveDish({dishID:e,srcmenuID:t,destmenuID:n}={dishID:null,srcmenuID:null,destmenuID:null}){try{const s=await fetch("http://localhost:4321/menu",{method:"PATCH",body:JSON.stringify({dishID:e,srcmenuID:t,destmenuID:n}),headers:{"Content-Type":"application/json"}});if(s.status!==200){const i=await s.json();return Promise.reject(i)}return{timestamp:new Date().toISOString(),message:`Dish '${e}}' was successfully moved from ${t} to ${n} `}}catch(s){return Promise.reject({timestamp:new Date().toISOString(),statusCode:0,message:s.message})}}}var f,E,g,S;class T{constructor({menuID:e=null,variant:t,day:n,onDropDishInMenu:s,addNotification:i}){I(this,f,[]);I(this,E,"");I(this,g,null);I(this,S,-1);h(this,"pushDish",({dish:e})=>d(this,f).push(e));h(this,"getDishById",({dishID:e})=>d(this,f).find(t=>t.dishID===e));h(this,"deleteDish",async({dishID:e})=>{const t=d(this,f).findIndex(s=>s.dishID===e);if(t===-1)return;const[n]=d(this,f).splice(t,1);return n});h(this,"reorderDishes",async()=>{const e=Array.from(document.querySelector(`[id="${d(this,g)}"] .menu__dishes-list`).children,n=>n.getAttribute("id")),t=[];if(e.forEach((n,s)=>{const i=d(this,f).find(o=>o.dishID===n);i.dishPosition!==s&&(i.dishPosition=s,t.push({dishID:n,position:s}))}),t.length>0)try{await u.updateDishes({reordereddishes:t})}catch(n){this.addNotification({name:n.message,type:"error"}),console.error(n)}});h(this,"appendNewDish",async({name:e})=>{try{const t=crypto.randomUUID(),n=await u.addDish({dishID:t,name:e,position:d(this,f).length,menuID:d(this,g)});this.addNewDishLocal({dishID:t,name:e,position:d(this,f).length}),this.addNotification({name:n.message,type:"success"})}catch(t){this.addNotification({name:t.message,type:"error"}),console.error(t)}});h(this,"appendNewDishToMenu",async({dishID:e})=>{try{const t=await u.addDishToMenu({dishID:e,menuID:d(this,g)}),n=await u.getMenu();for(const s of n)if(d(this,g)===s.menuID)for(const i of s.dishes)i.dishID===e&&this.addNewDishLocal({dishID:i.dishID,name:i.name,typeID:i.type_id,position:i.position,type:i.type,menuID:s.menuID});this.addNotification({name:t.message,type:"success"})}catch(t){this.addNotification({name:t.message,type:"error"}),console.error(t)}});h(this,"addNewDishLocal",({dishID:e=null,name:t,position:n,typeID:s=null,type:i,menuID:o=null})=>{const c=new $({dishID:e,name:t,position:n,typeID:s,type:i,menuID:o});d(this,f).push(c);const a=c.render();document.querySelector(`[id="${d(this,g)}"] .menu__dishes-list`).appendChild(a)});h(this,"editMenu",({day:e,variant:t})=>{y(this,E,e),y(this,S,t);for(let n of d(this,f))n.render()});y(this,E,n),y(this,g,e||crypto.randomUUID()),y(this,S,t),this.onDropDishInMenu=s,this.addNotification=i}get menuID(){return d(this,g)}get menuVariant(){return d(this,S)}get menuDay(){return d(this,E)}set editMenu({variant:e,day:t}){y(this,E,t),y(this,S,e),document.querySelector(`[id="${d(this,g)}"] span.menu__name`).innerHTML=newDishName}get dishes(){return d(this,f)}render(){const e=document.createElement("li");e.classList.add("menus-list__item","menu"),e.setAttribute("id",d(this,g)),e.addEventListener("dragstart",()=>localStorage.setItem("srcmenuID",d(this,g))),e.addEventListener("drop",this.onDropDishInMenu);const t=document.createElement("li");t.classList.add("menu__header");const n=document.createElement("h2");n.classList.add("menu__name"),n.innerHTML=d(this,E)+" Вариант №"+d(this,S);const s=document.createElement("div");s.classList.add("menu__controls");const i=document.createElement("div");i.classList.add("menu__controls-row");const o=document.createElement("button");o.setAttribute("type","button"),o.classList.add("menu__contol-btn","edit-icon"),o.addEventListener("click",()=>{localStorage.setItem("edit_Menu",d(this,g)),document.getElementById("modal-edit-menu").showModal()}),i.appendChild(o);const c=document.createElement("button");c.setAttribute("type","button"),c.classList.add("menu__contol-btn","delete-icon"),c.addEventListener("click",()=>{localStorage.setItem("delete_Menu",d(this,g));const m=document.getElementById("modal-delete-menu");m.querySelector(".app-modal__question").innerHTML=`Menu '${d(this,E)}' ${d(this,S)} будет удалено. Прододлжить?`,m.showModal()}),i.appendChild(c),s.appendChild(i),t.appendChild(s),e.appendChild(t),e.appendChild(n);const a=document.createElement("ul");a.classList.add("menu__dishes-list"),e.appendChild(a);const r=document.createElement("button");r.setAttribute("type","button"),r.classList.add("menu__add-dish-btn"),r.innerHTML="&#10010; Добавить карточку",r.addEventListener("click",()=>{localStorage.setItem("addDishMenuID",d(this,g)),document.getElementById("modal-add-dish").showModal()}),e.appendChild(r);const D=document.querySelector(".menu-adder");D.parentElement.insertBefore(e,D)}}f=new WeakMap,E=new WeakMap,g=new WeakMap,S=new WeakMap;var p;class H{constructor(){I(this,p,[]);h(this,"onEscapeKeydown",e=>{e.key==="Escape"&&document.querySelector(".menu-adder__input")});h(this,"onInputKeydown",async e=>{if(e.key==="Enter"){if(e.target.value){const t=crypto.randomUUID();try{const n=await u.addMenu({menuID:t,name:e.target.value,variant:d(this,p).length}),s=new T({menuID:t,name:e.target.value,variant:d(this,p).length,onDropDishInMenu:this.onDropDishInMenu,addNotification:this.addNotification});d(this,p).push(s),s.render(),this.addNotification({name:n.message,type:"success"})}catch(n){this.addNotification({name:n.message,type:"error"}),console.error(n)}}e.target.style.display="none",e.target.value=""}});h(this,"onDropDishInMenu",async e=>{e.stopPropagation();const t=e.currentTarget;t.classList.remove("menu_droppable");const n=localStorage.getItem("movedDishID"),s=localStorage.getItem("srcmenuID"),i=t.getAttribute("id");if(localStorage.setItem("movedDishID",""),localStorage.setItem("srcmenuID",""),!t.querySelector(`[id="${n}"]`))return;const o=d(this,p).find(a=>a.menuID===s),c=d(this,p).find(a=>a.menuID===i);try{const a=await u.getDishes();let r="",D=!0;for(let m of a)m.dishID===n&&(r=m.type_id);for(let m of c.dishes)if(m.dishType===r){this.addNotification({name:"To many same types",type:"error"}),D=!1,location.reload();return}if(s!==i&&D){await u.moveDish({dishID:n,srcmenuID:s,destmenuID:i});const m=o.deleteDish({dishID:n});c.pushDish({dish:m})}this.addNotification({name:`Dish (ID: ${n}) move between menus`,type:"success"})}catch(a){this.addNotification({name:a.message,type:"error"}),console.error(a)}});h(this,"editDish",async({dishID:e,newDishName:t,typeID:n})=>{let s=null;for(let i of d(this,p)){s=i.getDishById({dishID:e});for(let o of i.dishes)if(o.dishID!=e&&o.dishType===n){this.addNotification({name:`Error: This type is already busy in menu ${i.menuDay} №${i.menuVariant}`,type:"error"});return}if(s)break}if(t)try{const i=await u.updateDish({dishID:e,name:t,typeID:n});s&&(s.dishName=t,document.querySelector(`[id="${e}"] span.dish__text`).innerHTML=t),this.addNotification({name:i.message,type:"success"})}catch(i){this.addNotification({name:i.message,type:"error"}),console.error(i)}});h(this,"deleteMenu",async({menuID:e})=>{document.getElementById(e)&&document.getElementById(e).remove();const t=d(this,p).findIndex(n=>n.menuID===e);t!==-1&&(d(this,p).splice(t,1),console.log(document.getElementById(e)),u.deleteMenu({menuID:e}))});h(this,"deleteDish",async({dishID:e})=>{let t=null,n=null;for(let s of d(this,p))if(n=s,t=s.getDishById({dishID:e}),t)break;try{const s=await u.deleteDish({dishID:e});n.deleteDish({dishID:e}),document.getElementById(e)&&document.getElementById(e).remove(),this.addNotification({name:s.message,type:"success"})}catch(s){this.addNotification({name:s.message,type:"error"}),console.error(s)}});h(this,"addDishToMenu",async({menuID:e,dishID:t})=>{let n=null;if(e){n=d(this,p).find(s=>s.menuID===e);try{const s=await u.getDishes();let i="";for(let o of s)o.dishID===t&&(i=o.type_id);for(let o of n.dishes)if(o.dishType===i){this.addNotification({name:"To many same types",type:"error"});return}n.appendNewDishToMenu({dishID:t}),this.addNotification({name:"success",type:"success"})}catch(s){this.addNotification({name:s.message,type:"error"}),console.error(s)}}});h(this,"addMenu",async({variant:e,day:t})=>{try{for(let o of d(this,p))if(o.menuDay===t&&String(o.menuVariant)===e){this.addNotification({name:"This menu was alredy created",type:"error"});return}const n=crypto.randomUUID(),s=await u.addMenu({menuID:n,variant:e,day:t}),i=new T({menuID:n,day:t,variant:e,onDropDishInMenu:this.onDropDishInMenu,addNotification:this.addNotification});d(this,p).push(i),i.render(),this.addNotification({name:s.message,type:"success"})}catch(n){this.addNotification({name:n.message,type:"error"}),console.error(n)}});h(this,"editMenu",async({menuID:e,variant:t,day:n})=>{try{let s=null;for(let o of d(this,p)){if(o.menuDay===n&&String(o.menuVariant)===t&&o.menuID!=e){this.addNotification({name:"This menu was alredy created",type:"error"});return}o.menuID===e&&(s=o)}const i=await u.editMenu({menuID:e,variant:t,day:n});document.getElementById(e)&&document.getElementById(e).remove(),location.reload(),this.addNotification({name:i.message,type:"success"})}catch(s){this.addNotification({name:s.message,type:"error"}),console.error(s)}});h(this,"deleteDishFromMenu",async({dishID:e})=>{const t=localStorage.getItem("deleteDishFromMenuID");let n=null,s=null;for(let i of d(this,p))if(i.menuID===t&&(s=i,n=i.getDishById({dishID:e})),n)break;try{const i=await u.deleteDishFromMenu({dishID:e,menuID:t});s.deleteDish({dishID:e}),document.getElementById(t).getElementsByClassName("menu__dishes-list")[0].children[e].remove(),this.addNotification({name:i.message,type:"success"}),this.addNotification({name:i.message,type:"success"})}catch(i){this.addNotification({name:i.message,type:"error"}),console.error(i)}});h(this,"addNotification",({name:e,type:t})=>{const n=document.getElementById("app-notifications"),s=crypto.randomUUID(),i=document.createElement("div");i.classList.add("notification",t==="success"?"notification-success":"notification-error"),i.setAttribute("id",s),i.innerHTML=e,n.appendChild(i),setTimeout(()=>{document.getElementById(s).remove()},5e3)})}async initAddDishToMenuModal(){const e=document.getElementById("modal-add-dish"),t=await u.getDishes(),n=document.getElementById("label_add_element_to_menu"),s=document.createElement("select"),i=crypto.randomUUID();localStorage.setItem("selected_add_to_menu",i),s.setAttribute("id",i),s.setAttribute("class","app-modal__select");for(let a of t){const r=document.createElement("option");r.innerHTML=`${a.name} [${a.type}]`,r.setAttribute("value",a.dishID),s.appendChild(r)}n.after(s);const o=()=>{e.close(),localStorage.setItem("addDishMenuID",""),localStorage.setItem("selected_add_dish",""),e.querySelector(".app-modal__select").value=""},c=()=>{const a=localStorage.getItem("addDishMenuID"),r=localStorage.getItem("selected_add_to_menu"),D=document.getElementById(r),m=String(D.options[D.selectedIndex].value);this.addDishToMenu({menuID:a,dishID:m}),o()};e.querySelector(".modal-ok-btn").addEventListener("click",c),e.querySelector(".modal-cancel-btn").addEventListener("click",o),e.addEventListener("close",o)}async initAddDishModal(){const e=document.getElementById("modal-add-dish-to-base"),t=await u.getTypes(),n=document.getElementById("buttoms_module_add"),s=document.createElement("select"),i="selected_add_dish";localStorage.setItem("selected_add_dish",i),s.setAttribute("id",i),s.setAttribute("class","app-modal__select");for(let a of t){const r=document.createElement("option");r.innerHTML=a.type,r.setAttribute("value",a.typeID),s.appendChild(r)}n.before(s);const o=()=>{e.close(),localStorage.setItem("addDishMenuID",""),e.querySelector(".app-modal__select").value="";const a=localStorage.getItem("selected_add_dish");document.getElementById(a),localStorage.setItem("selected_add_dish","")},c=async()=>{const a=e.querySelector(".app-modal__input"),r="selected_add_dish",D=document.getElementById(r),m=String(D.options[D.selectedIndex].value),_=a.value,B=crypto.randomUUID();await u.addDish({dishID:B,name:_,typeID:m}),location.reload(),o()};e.querySelector(".modal-ok-btn").addEventListener("click",c),e.querySelector(".modal-cancel-btn").addEventListener("click",o),e.addEventListener("close",o)}async initAddMenuModal(){const e=document.getElementById("modal-add-menu"),t=()=>{e.close(),localStorage.setItem("addDishMenuID",""),localStorage.setItem("selected_add_menu","");const s=localStorage.getItem("selected_add_menu");document.getElementById(s),localStorage.setItem("selected_add_dish","")},n=async()=>{const s=document.getElementById("number-input-add-menu"),i=document.getElementById("week_select_add"),o=s.value,c=String(i.options[i.selectedIndex].value);this.addMenu({variant:o,day:c}),t()};e.querySelector(".modal-ok-btn").addEventListener("click",n),e.querySelector(".modal-cancel-btn").addEventListener("click",t),e.addEventListener("close",t)}async initEditDishModal(){const e=document.getElementById("modal-edit-dish"),t=await u.getTypes(),n=document.getElementById("modal-edit-dish-input"),s=document.createElement("select"),i="selected_edit_dish";localStorage.setItem("selected_edit_dish",i),s.setAttribute("id",i),s.setAttribute("class","app-modal__select");for(let m of t){const _=document.createElement("option");_.innerHTML=m.type,_.setAttribute("value",m.typeID),s.appendChild(_)}n.after(s);const o=await u.getDishes(),c=document.createElement("select"),a="selected_dish_update";crypto.randomUUID(),localStorage.setItem("selected_dish_update",a),c.setAttribute("id",a),c.setAttribute("class","app-modal__select");for(let m of o){const _=document.createElement("option");_.innerHTML=`${m.name} [${m.type}]`,_.setAttribute("value","_"+m.dishID),c.appendChild(_)}n.before(c);const r=()=>{e.close(),localStorage.setItem("editDishID",""),e.querySelector(".app-modal__input").value="",location.reload()},D=()=>{const m=e.querySelector(".app-modal__input"),_="selected_edit_dish",B=document.getElementById(_),P=String(B.options[B.selectedIndex].value),O="selected_dish_update",j=document.getElementById(O),k=String(j.options[j.selectedIndex].value).replace("_","");k&&m.value&&this.editDish({dishID:k,newDishName:m.value,typeID:P}),r()};e.querySelector(".modal-ok-btn").addEventListener("click",D),e.querySelector(".modal-cancel-btn").addEventListener("click",r),e.addEventListener("close",r)}async initDeleteDishModal(){const e=document.getElementById("modal-delete-dish-from-base"),t=await u.getDishes(),n=document.getElementById("buttoms_module_delete_from_base"),s=document.createElement("select"),i="deleteDishID";localStorage.setItem("deleteDishID",i),s.setAttribute("id",i),s.setAttribute("class","app-modal__select");for(let a of t){const r=document.createElement("option");r.innerHTML=`${a.name} [${a.type}]
 ${a.dishID}`,r.setAttribute("value","_"+a.dishID),s.appendChild(r)}n.before(s);const o=()=>{e.close(),localStorage.setItem("deleteDishID",""),location.reload()},c=()=>{const a="deleteDishID",r=document.getElementById(a),D=String(r.options[r.selectedIndex].value).replace("_","");D&&this.deleteDish({dishID:D}),o()};e.querySelector(".modal-ok-btn").addEventListener("click",c),e.querySelector(".modal-cancel-btn").addEventListener("click",o),e.addEventListener("close",o)}initDeleteDishFromMenuModal(){const e=document.getElementById("modal-delete-dish"),t=()=>{e.close(),localStorage.setItem("deleteDishID","")},n=()=>{const s=localStorage.getItem("deleteDishID");this.deleteDishFromMenu({dishID:s}),t()};e.querySelector(".modal-ok-btn").addEventListener("click",n),e.querySelector(".modal-cancel-btn").addEventListener("click",t),e.addEventListener("close",t)}initNotifications(){document.getElementById("app-notifications").show()}async initDeleteMenuModal(){const e=document.getElementById("modal-delete-menu"),t=()=>{e.close(),localStorage.setItem("deleteDishID","")},n=()=>{const s=localStorage.getItem("delete_Menu");this.deleteMenu({menuID:s}),t()};e.querySelector(".modal-ok-btn").addEventListener("click",n),e.querySelector(".modal-cancel-btn").addEventListener("click",t),e.addEventListener("close",t)}async initEditMenuModal(){const e=document.getElementById("modal-edit-menu"),t=()=>{e.close(),localStorage.setItem("addDishMenuID",""),localStorage.setItem("selected_edit_menu","");const s=localStorage.getItem("selected_edit_menu");document.getElementById(s),localStorage.setItem("selected_add_dish","")},n=async()=>{const s=document.getElementById("number-input-edit-menu"),i=document.getElementById("week_select_edit"),o=s.value,c=String(i.options[i.selectedIndex].value),a=localStorage.getItem("edit_Menu");this.editMenu({menuID:a,variant:o,day:c}),t()};e.querySelector(".modal-ok-btn").addEventListener("click",n),e.querySelector(".modal-cancel-btn").addEventListener("click",t),e.addEventListener("close",t)}async init(){document.querySelector(".menu-adder__btn").addEventListener("click",t=>{document.querySelector(".menu-adder__input")}),document.addEventListener("keydown",this.onEscapeKeydown),document.getElementById("theme-switch").addEventListener("change",t=>{t.target.checked?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme")}),this.initAddDishToMenuModal(),this.initEditDishModal(),this.initNotifications(),this.initDeleteDishFromMenuModal(),this.initAddDishModal(),this.initDeleteDishModal(),this.initAddMenuModal(),this.initDeleteMenuModal(),this.initEditMenuModal(),document.getElementById("menu-adder__btn").addEventListener("click",async()=>{document.getElementById("modal-add-menu").showModal()}),document.getElementById("append-btn").addEventListener("click",()=>{document.getElementById("modal-add-dish-to-base").showModal()}),document.getElementById("change-btn").addEventListener("click",()=>{document.getElementById("modal-edit-dish").showModal()}),document.getElementById("delete-btn").addEventListener("click",()=>{document.getElementById("modal-delete-dish-from-base").showModal()}),document.addEventListener("dragover",t=>{t.preventDefault();const n=document.querySelector(".dish.dish_selected"),s=n.closest(".menu"),i=t.target,o=document.querySelector(".menu_droppable");let c=t.target;for(;!c.matches(".menu")&&c!==document.body;)c=c.parentElement;if(c!==o&&(o&&o.classList.remove("menu_droppable"),c.matches(".menu")&&c.classList.add("menu_droppable")),!(!c.matches(".menu")||n===i)){if(c===s){if(!i.matches(".dish"))return;const a=i===n.nextElementSibling?i.nextElementSibling:i;c.querySelector(".menu__dishes-list").insertBefore(n,a);return}if(i.matches(".dish")){c.querySelector(".menu__dishes-list").insertBefore(n,i);return}c.querySelector(".menu__dishes-list").children.length||c.querySelector(".menu__dishes-list").appendChild(n)}});try{const t=await u.getMenu();for(const n of t){const s=new T({menuID:n.menuID,day:n.day,variant:n.variant,onDropDishInMenu:this.onDropDishInMenu,addNotification:this.addNotification});d(this,p).push(s),s.render();for(const i of n.dishes)s.addNewDishLocal({dishID:i.dishID,name:i.name,typeID:i.type_id,position:i.position,type:i.type,menuID:n.menuID})}}catch(t){this.addNotification({name:t.message,type:"error"}),console.error(t)}}}p=new WeakMap;document.addEventListener("DOMContentLoaded",()=>{new H().init()});