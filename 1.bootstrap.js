(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,function(e,t,n){"use strict";n.r(t);const o=new Promise((e,t)=>{const n=indexedDB.open("handle",1);n.onupgradeneeded=e=>{e.target.result.createObjectStore("handles",{keyPath:"id"})},n.onsuccess=t=>{e(t.target.result)},n.onerror=e=>{console.error(e),t(e.target.error)}}),l=async(e,t=e.name)=>{const n=[],o=[];for await(const r of e.values()){const a=`${t}/${r.name}`;"file"===r.kind?o.push(r.getFile().then(t=>(t.directoryHandle=e,t.handle=r,Object.defineProperty(t,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>a})))):"directory"===r.kind&&n.push(l(r,a))}return[...(await Promise.all(n)).flat(),...await Promise.all(o)]};var r=function(e,t){!function(e){var t="container",n="all",o="token",l="className",r="sensitiveSearch",a=e["tokens"],s=e[n][l],d=e[n][r];function i(e,t,n,a){var s,d,i,c,u,w,m,g,y,h,f,v,p,E,k=e.nodeValue,I=e.parentNode;for(s=0,d=t.length;s<d;s++)for(c=(i=t[s])[o],u=i[l],w=i[r],m=n?u+" "+n:u,g=void 0!==a?a:w,E=!0;;){if((y=g?k.indexOf(c):k.toLowerCase().indexOf(c.toLowerCase()))<0){if(E)break;k&&(v=document.createTextNode(k),I.insertBefore(v,e)),I.removeChild(e);break}E=!1,h=k.substring(0,y),f=k.substring(y,y+c.length),h&&(v=document.createTextNode(h),I.insertBefore(v,e)),(p=document.createElement("span")).className+=m,p.appendChild(document.createTextNode(f)),I.insertBefore(p,e),k=k.substring(y+c.length)}}!function e(t){if(null!==t){var n,o,l=Array.prototype.slice.call(t.childNodes);if(l.length)for(n=0;n<l.length;n++)3===(o=l[n]).nodeType?i(o,a,s,d):1===o.nodeType&&e(o)}}(e[t])}({container:e,all:{className:"highlighter"},tokens:[{token:t,className:"highlight",sensitiveSearch:!1}]})};window.loremaster={},window.loremaster.currentState="IDLE";const a=e=>{switch(e){case"IDLE":document.getElementById("loading").style.display="none",document.getElementById("searching").style.display="none",document.body.style.cursor="auto";break;case"WAIT_WASM":case"SETUP":document.getElementById("loading").style.display="block",document.body.style.cursor="wait";break;case"GET_CONTEXT":break;case"SEARCHING":document.getElementById("searching").style.display="block",document.body.style.cursor="wait"}window.loremaster.currentState=e},s=async(e,t)=>{a("SETUP"),e.postMessage({type:"setup",file_index1:t.find(e=>"0a0000.win32.index"===e.name),file_index2:t.find(e=>"0a0000.win32.index2"===e.name),file_dat:t.find(e=>"0a0000.win32.dat0"===e.name),file_ver:t.find(e=>"ffxivgame.ver"===e.name)})};a("WAIT_WASM");const d=async(e,t)=>{a("GET_CONTEXT"),window.loremaster.fullviewCurrentRow=t.row,document.getElementById("fullview_container").style.display="block",e.postMessage({type:"context",sheet:t.sheet,row:t.row,context_len:15,field_idx:t.field}),document.getElementById("floating_search").style.display="none"},i=()=>{let e=window.loremaster.fullviewLastRow;void 0!==e&&d(window.loremaster.worker,e)};window.loremaster.scrollFullviewUp=i;const c=()=>{let e=window.loremaster.fullviewNextRow;void 0!==e&&d(window.loremaster.worker,e)};window.loremaster.scrollFullviewDown=c;const u=()=>{document.getElementById("fullview_container").style.display="none",window.loremaster.fullviewCurrentRow=void 0,window.loremaster.fullviewLastRow=void 0,window.loremaster.fullviewNextRow=void 0,window.loremaster.fullviewCurrentResultContext=void 0};function w(){let e=document.getElementById("floating_search");var t=getSelection(),n=t.rangeCount&&t.getRangeAt(0);if(n&&t.toString().length>3){let t=n.getBoundingClientRect();e.style.display="block",e.style.top=t.bottom+"px",e.style.left=t.right+"px"}else e.style.display="none"}document.body.addEventListener("keydown",(function(e){"Escape"==e.key&&u()})),document.body.addEventListener("keypress",(function(e){"u"===e.key&&i(),"d"===e.key&&c(),"q"===e.key&&u()})),document.getElementById("fullviewbody").addEventListener("wheel",(function(e){e.deltaY<0?i():c()})),window.loremaster.closeFullview=u,document.addEventListener("mouseup",w),document.addEventListener("mousedown",w),document.addEventListener("keyup",w),document.getElementById("floating_search").addEventListener("mousedown",e=>{e.preventDefault(),function(){let e=getSelection().toString();e.length<3||(document.getElementById("search").value=e,g(e,!1))}(),u()});const m=async function(e){const t=document.getElementById("search").value;t.length<3?alert("Search string must be at least 3 characters long."):g(t,e)},g=async function(e,t){"IDLE"===window.loremaster.currentState&&(a("SEARCHING"),window.loremaster.wantLuckySearch=t,window.loremaster.worker.postMessage({type:"dosearch",search:e,language:document.getElementById("language").value}))};document.getElementById("search_act").addEventListener("click",()=>m(!1),!1),document.getElementById("lucky_act").addEventListener("click",()=>m(!0),!1),document.getElementById("search").addEventListener("keypress",(function(e){"Enter"===e.key&&m(!1)})),null!==localStorage.getItem("language")&&(document.getElementById("language").value=localStorage.getItem("language")),document.getElementById("language").addEventListener("change",(function(e){localStorage.setItem("language",e.target.value)})),async function(){var e=new Worker("./worker.js");window.loremaster.worker=e,e.onmessage=async function(t){switch(t.data.type){case"setup":{a("IDLE"),document.getElementById("open_folder").style.display="none",document.getElementById("search_act").disabled=!1,document.getElementById("lucky_act").disabled=!1,document.getElementById("guide").style.display="none";let e=document.getElementById("logo");e.style.height="35px",e.style.width="35px",document.getElementById("titletext").style.fontSize="1.8em",window.loremaster.numSheets=t.data.numSheets,console.log("setup done, numSheets: "+t.data.numSheets)}break;case"loaded":{let t=!1;try{let n=await new Promise((e,t)=>{o.then(n=>{const o=n.transaction(["handles"],"readonly").objectStore("handles").get("lastFolder");o.onsuccess=t=>e(t.target.result?t.target.result.handle:void 0),o.onerror=()=>t(o.error)})});if(void 0!==n){let o=await l(n,void 0);console.log("init with persisted dir"),await s(e,o),t=!0}}catch(e){console.error(e)}t||a("IDLE")}break;case"search":{const n=document.getElementById("no_results");n.style.display="none";const o=document.getElementById("results_box");o.innerHTML="",o.appendChild(n),window.loremaster.searchResults=t.data.results,t.data.results.forEach((t,n)=>{let l=document.createElement("div");l.className="result",l.dataset.resultIdx=n;let r=document.createElement("p");r.className="result_context",r.innerHTML=`${t.sheet} (${t.row})`,""!==t.context&&(r.innerHTML+=" - "+t.context),l.appendChild(r);let a=document.createElement("p");a.className="result_text",a.innerHTML=t.value,l.appendChild(a),l.addEventListener("click",(async function(n){window.loremaster.fullviewCurrentResultContext=t.context,d(e,t)})),o.appendChild(l)}),r(o,t.data.search),window.loremaster.currentSearch=t.data.search;let l=document.getElementById("searchcontext");l.className="duration",l.innerHTML=`Found ${t.data.results.length} results in ${t.data.duration}ms searching in ${window.loremaster.numSheets} sheets.`,0===t.data.results.length&&(n.style.display="block"),a("IDLE"),window.loremaster.wantLuckySearch&&t.data.results.length>0&&d(e,t.data.results[0])}break;case"context":{const n=document.getElementById("fullviewbody");n.innerHTML="";const o=document.getElementById("fullview_title");o.innerHTML=t.data.sheet,void 0!==window.loremaster.fullviewCurrentResultContext&&""!==window.loremaster.fullviewCurrentResultContext&&(o.innerHTML+=" - "+window.loremaster.fullviewCurrentResultContext);const l=window.loremaster.fullviewCurrentRow;let s=void 0,i=!1;window.loremaster.fullviewLastRow=void 0,window.loremaster.fullviewNextRow=void 0;for(let o=0;o<t.data.context.length;o++){let r=t.data.context[o];r.row===l&&(i=!0,window.loremaster.fullviewLastRow=s);let a=document.createElement("div");a.className="fullview_row",r.row===l&&(a.className+=" fullview_highlight");let c=document.createElement("p");c.className="fullview_row_text",r.row===l&&(c.className+=" fullview_row_text_highlight"),c.innerHTML=r.value,a.appendChild(c);let u=document.createElement("p");u.className="fullview_row_id",u.innerHTML=r.row,a.appendChild(u),r.row!==l&&a.addEventListener("click",(async function(t){d(e,r)})),n.appendChild(a),i?r.row!==l&&void 0===window.loremaster.fullviewNextRow&&(window.loremaster.fullviewNextRow=r):s=r}let c=document.createElement("div");c.className="fullview_padding",c.innerHTML="&nbsp;",n.appendChild(c),n.prepend(c.cloneNode(!0)),document.getElementById("scroll_up").disabled=void 0===window.loremaster.fullviewLastRow,document.getElementById("scroll_down").disabled=void 0===window.loremaster.fullviewNextRow,r(n,window.loremaster.currentSearch);let u=document.querySelector(".fullview_highlight");null!==u&&u.scrollIntoView({block:"center"}),a("IDLE")}}},document.getElementById("open_folder").addEventListener("click",(async function(){if("showDirectoryPicker"in window&&(()=>{try{return window.self===window.top}catch{return!1}})()){let n=void 0;try{const r="read",a=await showDirectoryPicker({mode:r});t=a,new Promise((e,n)=>{o.then(o=>{const l=o.transaction(["handles"],"readwrite").objectStore("handles").put({id:"lastFolder",handle:t});l.onsuccess=()=>e(),l.onerror=()=>n(l.error)})}),n=await l(a,void 0),s(e,n)}catch(e){"AbortError"!==e.name&&console.error(e.name,e.message)}}else alert("Filesystem access not supported on your browser. Use Chrome instead.");var t}),!1);let t=document.getElementById("fullview_container");t.addEventListener("click",(function(e){e.target===t&&u()}))}()}]]);