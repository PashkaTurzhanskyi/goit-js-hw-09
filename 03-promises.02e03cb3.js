const e=document.querySelector("form.form"),o=document.querySelector('input[name="delay"]'),t=document.querySelector('input[name="step"]'),n=document.querySelector('input[name="amount"]');function u(e,o){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}e.addEventListener("submit",(function(e){e.preventDefault();let i=Number(o.value),l=Number(t.value),r=Number(n.value),m=0;i-=l;for(let e=0;e<r;e+=1)m=e+1,i+=l,u(m,i).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}));
//# sourceMappingURL=03-promises.02e03cb3.js.map
