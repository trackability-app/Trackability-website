
document.addEventListener('DOMContentLoaded',()=>{
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
 document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
 document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
 const menu=document.querySelector('.menu'),links=document.querySelector('.links');
 if(menu&&links) menu.onclick=()=>{links.style.display=links.style.display==='flex'?'none':'flex';links.style.position='absolute';links.style.top='66px';links.style.left='0';links.style.right='0';links.style.padding='15px';links.style.background='rgba(6,16,24,.97)';links.style.flexDirection='column';links.style.borderBottom='1px solid rgba(157,232,255,.14)'};
});
