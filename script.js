const $=(s,c=document)=>c.querySelector(s);
const $$=(s,c=document)=>[...c.querySelectorAll(s)];

const header=$("#siteHeader"), menuBtn=$("#menuBtn"), mobileMenu=$("#mobileMenu");
function closeMenu(){
  mobileMenu.classList.remove("open");
  menuBtn.setAttribute("aria-expanded","false");
  menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';
  document.body.classList.remove("lock");
}
menuBtn.addEventListener("click",()=>{
  const open=!mobileMenu.classList.contains("open");
  mobileMenu.classList.toggle("open",open);
  menuBtn.setAttribute("aria-expanded",String(open));
  menuBtn.innerHTML=open?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>';
  document.body.classList.toggle("lock",open);
});
$$(".mobile-menu a").forEach(a=>a.addEventListener("click",closeMenu));

window.addEventListener("scroll",()=>{
  header.classList.toggle("scrolled",window.scrollY>20);
},{passive:true});

const sections=$$("main section[id]");
const navLinks=$$(".desktop-nav a");
const setActive=()=>{
  let current="home";
  sections.forEach(s=>{
    if(window.scrollY>=s.offsetTop-130) current=s.id;
  });
  navLinks.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current));
};
window.addEventListener("scroll",setActive,{passive:true}); setActive();

$$('a[href^="#"]').forEach(a=>{
  a.addEventListener("click",e=>{
    const target=$(a.getAttribute("href"));
    if(!target)return;
    e.preventDefault();
    target.scrollIntoView({behavior:"smooth",block:"start"});
    closeMenu();
  });
});

const lightbox=$("#lightbox"), lightImg=$("#lightboxImage"), close=$("#lightboxClose");
$$(".gallery-item").forEach(item=>{
  item.addEventListener("click",()=>{
    lightImg.src=item.dataset.full;
    lightImg.alt=item.querySelector("img").alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden","false");
    document.body.classList.add("lock");
  });
});
function closeLightbox(){
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden","true");
  document.body.classList.remove("lock");
  lightImg.src="";
}
close.addEventListener("click",closeLightbox);
lightbox.addEventListener("click",e=>{if(e.target===lightbox)closeLightbox()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeLightbox();closeMenu()}});

$("#year").textContent=new Date().getFullYear();

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add("visible");revealObserver.unobserve(entry.target)}
  });
},{threshold:.08});
$$(".movie-card,.coming-card,.experience-copy,.gallery-item,.visit-copy,.map-wrap").forEach(el=>{
  el.classList.add("reveal");
  revealObserver.observe(el);
});
