(()=>{"use strict";var n={56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},71:(n,e,t)=>{t.d(e,{A:()=>i});var r=t(601),o=t.n(r),a=t(314),d=t.n(a)()(o());d.push([n.id,'dialog{\n    display: flex;\n    height: 40vh;\n    justify-content: flex-end;\n\n}\n\ndialog input[type="text"]{\n    margin-left: auto;\n}',""]);const i=d},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},d=[],i=0;i<n.length;i++){var c=n[i],l=r.base?c[0]+r.base:c[0],s=a[l]||0,p="".concat(l," ").concat(s);a[l]=s+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var b=o(m,r);r.byIndex=i,e.splice(i,0,{identifier:p,updater:b,references:1})}d.push(p)}return d}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var d=0;d<a.length;d++){var i=t(a[d]);e[i].references--}for(var c=r(n,o),l=0;l<a.length;l++){var s=t(a[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=c}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var d={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(d[c]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);r&&d[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},365:(n,e,t)=>{t.d(e,{A:()=>i});var r=t(601),o=t.n(r),a=t(314),d=t.n(a)()(o());d.push([n.id,"html, body{\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    font-family: 'Open Sans', sans-serif;\n}\n\n\na{\n    text-decoration: none;\n    color: inherit;\n}\n\n.container{\n\n    display: grid;\n    grid-template-columns: 1fr 6fr;\n    font-weight: bold;\n    min-height: 100vh;\n}\n\n/*-----------sidebar------------------*/\n\n.sidebar{\n    color: white;\n    background-color: rgb(44, 141, 64);\n    padding: 20px;\n    grid-row: 1 / 10;\n    display: grid;\n    grid-template-rows: 1fr 3fr 3fr 2fr;\n    font-size: 1.1rem;\n\n}\n\n#myhub{\n    text-align: center;\n    font-size: 2.5rem;\n    margin: 0;\n}\n\n.logo h2{\n    margin-top: 0;\n}\n\n.sidebar .logo{\n    place-self: center;\n    font-size: 1.1rem;\n    font-family: 'Bungee', sans-serif;\n}\n\n.sidebar ul{\n    list-style: none;\n    gap: 20px;\n    display: grid;\n    grid-template-rows: repeat(4, 2fr);\n    padding-inline-start: 10px;\n}\n\n.menu a{\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.menu2 a{\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.icon {\n    width: 20px; \n    height: 20px;\n    fill: white; \n    transition: fill 0.3s ease;\n}\n\n.menu a:hover .icon {\n    fill: lightgray; \n}\n\n/*-----------topbar------------------*/\n\n.topbar{\n    padding: 5px;\n    display: grid;\n    grid-template-columns: 10fr 1fr;\n    height: 50px;\n}\n\n\ninput[type=\"text\"].sbar{\n    padding: 5px;\n    border-radius: 10px;\n    border: 1px solid rgba(197, 233, 203, 0.5);\n    width: 70%;\n    background-color: rgba(197, 233, 203, 0.5);\n}\n\ninput[type=\"text\"].sbar:focus{\n    outline: none;\n    border: 1px solid rgb(44, 141, 64);\n}\n\n.icon2 {\n    width: 30px; \n    height: 30px;\n    fill: rgb(44, 141, 64);\n}\n\n.topbar .usericon {\n    width: 50px; \n    height: 50px;\n    border-radius: 50%; \n    background-color: #ccc; \n    align-items: center;\n    justify-content: center;\n    overflow: hidden; \n    border: 3px solid #5cc06b; \n    margin-left: auto;\n}\n\n.topbar .usericon:hover{\n    cursor: pointer;\n}\n\n.welcome{\n    display: grid;\n    padding: 10px;\n    grid-template-columns: 1fr 6fr 2fr;\n    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.5);\n}\n.welcome .usericon {\n    width: 100px; \n    height: 100px;\n    border-radius: 50%; \n    background-color: #ccc; \n    align-items: center;\n    justify-content: center;\n    overflow: hidden; \n    border: 3px solid #5cc06b; \n}\n\n\n.welcome .userbuttons{\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 10px;\n    place-items: center;\n    \n}\n\n.welcome .userbuttons button{\n    padding: 10px;\n    border-radius: 20px;\n    border: 1px solid rgb(44, 141, 64);\n    background-color: rgb(44, 141, 64);\n    font-weight: bold;\n    cursor: pointer;\n    color: white;\n    width: 100px;\n    margin-top:auto\n}\n\n.content{\n    background-color: rgba(225, 225, 225, 0.678);\n    /*grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));*/\n    padding: 10px;\n    min-height: 100vh;\n}\n\n.content.grid-layout {\n    background-color: rgba(225, 225, 225, 0.678);\n    display: grid;\n    grid-template-columns: minmax(250px, 4fr) 1fr;\n    gap: 20px;\n\n    \n  }\n\n.content .util{\n    display: grid;\n    grid-template-rows: 1fr;\n}\n\n.todo{\n    padding: 20px;\n}\n.project-container {\n    width: 100%;\n    padding: 20px;\n    box-sizing: border-box;\n  }\n\n.card-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: 10px;\n    width: 100%;\n    max-width: 100%; \n    box-sizing: border-box;\n  }\n\n.project-cards{\n    background-color: white;\n    height: 70px;\n    width: 200px;\n    padding: 40px 25px;\n    border-left: rgb(44, 141, 64) 9px solid;\n    border-radius: 5px;\n    box-shadow: 0 5px 4px rgba(0, 0, 0, 0.5);\n    display: grid;\n    grid-template-rows: min-content min-content 1fr;\n}\n\n.add-project-cards{\n    background-color: white;\n    height: 70px;\n    width: 200px;\n    padding: 40px 25px;\n    border-left: rgb(44, 141, 64) 9px solid;\n    border-radius: 5px;\n    box-shadow: 0 5px 4px rgba(0, 0, 0, 0.5);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.add-project-cards h1 {\n    font-size: 5rem;\n    color: rgb(44, 141, 64);\n    opacity: 70%;\n  }\n\n.add-project-cards:hover{\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);\n    transition: box-shadow 0.3s ease;\n    cursor: pointer;\n}\n\n.project-cards:hover{\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);\n    transition: box-shadow 0.3s ease;\n    cursor: pointer;\n}\n\n.addbutton{\n    padding: 10px;\n    border-radius: 5px;\n    border: 1px solid rgb(58, 145, 75);\n    background-color: rgb(58, 145, 75);\n    font-weight: bold;\n    cursor: pointer;\n    color: white;\n    width: 100%;\n    margin-top:auto\n}\n\n.addbutton:hover{\n    background-color: rgb(86, 139, 96);\n}\n\n.addbutton:active{\n    background-color: rgb(21, 136, 42);\n}",""]);const i=d},528:(n,e,t)=>{t.d(e,{A:()=>i});var r=t(601),o=t.n(r),a=t(314),d=t.n(a)()(o());d.push([n.id,".subhead h4 {\n    font-weight: bold;\n}\n\n.schedule-container {\n    padding: 20px;\n    background: white;\n    border-radius: 10px;\n    box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n    margin: 20px;\n}\n\n.schedule-table {\n    width: 100%;\n    border-collapse: collapse;\n    margin-top: 20px;\n}\n\n.schedule-table th, .schedule-table td {\n    border: 1px solid rgb(44, 141, 64);\n    padding: 12px;\n    text-align: center;\n}\n\n.schedule-table th {\n    color: white;\n    background-color: rgb(44, 141, 64);\n    font-weight: bold;\n}\n\n.schedule-table tr:hover {\n    background-color: #f1f1f1;\n}\n\n.taken {\n    background-color: #f0f0f0; \n}\n\n.taken.active {\n    background-color: rgb(48, 100, 55);\n    color: white;\n    \n}\n\n.taken.active:hover {\n    background-color: rgba(48, 97, 55, 0.836);\n    \n}\n\n.periodcell{\n    background-color: rgb(44, 141, 64);\n    color: white;\n}\n\n.taken.lab{\n    background-color: rgb(107, 144, 72);\n    color: white;\n}\n\n.taken.lab:hover{\n    background-color: rgba(99, 146, 55, 0.758);\n    color: white;\n}",""]);const i=d},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},601:n=>{n.exports=function(n){return n[1]}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),d=t.n(a),i=t(659),c=t.n(i),l=t(56),s=t.n(l),p=t(540),u=t.n(p),m=t(113),b=t.n(m),g=t(365),h={};h.styleTagTransform=b(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=d(),h.insertStyleElement=u(),o()(g.A,h),g.A&&g.A.locals&&g.A.locals;var f=t(528),x={};x.styleTagTransform=b(),x.setAttributes=s(),x.insert=c().bind(null,"head"),x.domAPI=d(),x.insertStyleElement=u(),o()(f.A,x),f.A&&f.A.locals&&f.A.locals;var v=t(71),y={};y.styleTagTransform=b(),y.setAttributes=s(),y.insert=c().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=u(),o()(v.A,y),v.A&&v.A.locals&&v.A.locals;const w=document.querySelector(".content");function E(){w.classList.add("grid-layout")}const k=()=>{const n=document.querySelector(".content");let e=document.createElement("div");e.classList.add("project-container");let t=document.createElement("div");t.classList.add("subhead");let r=document.createElement("h4");r.textContent="My Projects",n.appendChild(e),e.appendChild(t),t.appendChild(r);const o=document.createElement("div");o.classList.add("card-container"),t.insertAdjacentElement("afterend",o);let a=document.createElement("div");a.classList.add("add-project-cards");const d=document.createElement("h1");d.textContent="+",o.appendChild(a),a.appendChild(d);const i=document.createElement("div");i.classList.add("util");const c=document.createElement("div");c.classList.add("todo");let l=document.createElement("div");l.classList.add("subhead");let s=document.createElement("h4");s.textContent="To-Do-List";const p=document.createElement("div");p.classList.add("list");let u=document.createElement("div");u.classList.add("add-list");const m=document.createElement("button");return m.classList.add("addbutton"),m.textContent="Add To-Do",e.insertAdjacentElement("afterend",i),i.appendChild(c),c.appendChild(l),l.appendChild(s),l.insertAdjacentElement("afterend",p),p.appendChild(u),u.appendChild(m),function(){let n=document.querySelector(".add-project-cards");n.addEventListener("click",(()=>{const e=document.createElement("dialog"),t=document.createElement("form");t.innerHTML='\n    <div>\n    <label for="projectName">Project Name:</label>\n    <input type="text" id="projectName" name="projectName" required>\n    </div>\n\n    <div>\n    <label for=""type>Project Type</label>\n    <select id="projectType" name="projectType" required>\n      <option value="web">Web Development</option>\n      <option value="mobile">Mobile Development</option>\n      <option value="data">Data Science</option>\n    </select>\n    </div>\n\n    <div>\n    <label for="ProjectDesc">Project Description:</label>\n    <input type="text" id="ProjectDesc" name="ProjectDesc" required>\n    </div>\n\n    <div>\n    <label for="githubLink">GitHub Link:</label>\n    <input type="url" id="githubLink" name="githubLink" required>\n\n    <button type="submit">Submit</button>\n    <button type="button" id="closeDialog">Cancel</button>\n    </div>\n  ',document.body.appendChild(e),e.appendChild(t),e.showModal(),t.querySelector("#closeDialog").addEventListener("click",(()=>{e.close(),e.remove()})),t.addEventListener("submit",(r=>{r.preventDefault();const o=t.querySelector("#projectName").value,a=document.createElement("div");a.classList.add("project-cards"),a.textContent=o,n.parentElement.insertBefore(a,n),e.close(),e.remove()}))}))}(),function(){let n=document.querySelector(".addbutton");n.addEventListener("click",(()=>{const e=document.createElement("dialog"),t=document.createElement("form");t.innerHTML='\n    <label for="todoName">To-Do Name:</label>\n    <input type="text" id="todoName" name="todoName" required>\n    <button type="submit">Submit</button>\n    <button type="button" id="closeDialog">Cancel</button>',document.body.appendChild(e),e.appendChild(t),e.showModal(),t.querySelector("#closeDialog").addEventListener("click",(()=>{e.close(),e.remove()})),t.addEventListener("submit",(r=>{r.preventDefault();const o=t.querySelector("#todoName").value,a=document.createElement("div"),d=document.createElement("input");d.type="checkbox",a.classList.add("todo-cards"),a.textContent=o,n.parentElement.insertBefore(a,n),a.appendChild(d),e.close(),e.remove()}))}))}(),e};E(),k(),document.querySelectorAll(".tab").forEach((n=>{n.addEventListener("click",(()=>{"tab1"===n.id?E():w.classList.remove("grid-layout")}))})),document.querySelector("#tab1").addEventListener("click",(()=>{document.querySelector(".content").innerHTML="",k()})),document.querySelector("#tab2").addEventListener("click",(()=>{document.querySelector(".content").innerHTML="",(()=>{const n=document.querySelector(".content"),e={Monday:["","lab","","","",""],Tuesday:["Distrubuted Systems","Systems Ergonomics","","","",""],Wednesday:[""," Image Processing","","Applied Informatics","PBL 5",""],Thursday:["","History of Computing","","lab","",""],Friday:["","lab","","lab","PBL5",""]},t=document.createElement("div");t.classList.add("schedule-container");let r=document.createElement("div");r.classList.add("subhead");let o=document.createElement("h4");o.textContent="My Schedule";const a=document.createElement("table");a.className="schedule-table";const d=document.createElement("tr");d.innerHTML="<th>Time</th>"+Object.keys(e).map((n=>`<th>${n}</th>`)).join(""),a.appendChild(d);const i=["1","2","Break","3","4","5"];for(let n=0;n<6;n++){const t=document.createElement("tr");t.innerHTML=`<td class = "periodcell">${i[n]}</td>`+Object.values(e).map((e=>{const t=e[n];let r=""===t?"taken":"taken active";return"lab"===t&&(r="taken lab"),`<td class="${r}">${t}</td>`})).join(""),a.appendChild(t)}n.appendChild(t),t.appendChild(r),r.appendChild(o),r.appendChild(a)})()}))})();