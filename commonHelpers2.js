import"./assets/modulepreload-polyfill-ec808ebb.js";const e=document.querySelector(".feedback-form"),l=()=>{const t=e.elements.email.value.trim(),s=e.elements.message.value.trim(),a={email:t,message:s};localStorage.setItem("feedback-form-state",JSON.stringify(a))},o=localStorage.getItem("feedback-form-state");if(o){const t=JSON.parse(o);e.elements.email.value=t.email,e.elements.message.value=t.message}const r=t=>{const s=e.elements.email.value.trim(),a=e.elements.message.value.trim(),m={email:s,message:a};t.preventDefault(),m.email!==""&&m.message!==""&&(console.log(m),localStorage.removeItem("feedback-form-state"),e.reset())};e.addEventListener("input",l);e.addEventListener("submit",r);
//# sourceMappingURL=commonHelpers2.js.map
