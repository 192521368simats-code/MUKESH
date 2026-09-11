const body=document.body, theme=document.getElementById("themeToggle"), menu=document.getElementById("menuToggle"), nav=document.getElementById("navLinks");
const saved=localStorage.getItem("mm-theme"); if(saved==="light"){body.classList.add("light");theme.textContent="☀";}
theme.addEventListener("click",()=>{body.classList.toggle("light");const light=body.classList.contains("light");localStorage.setItem("mm-theme",light?"light":"dark");theme.textContent=light?"☀":"◐";});
menu.addEventListener("click",()=>nav.classList.toggle("open")); document.querySelectorAll(".nav-links a").forEach(a=>a.onclick=()=>nav.classList.remove("open"));

const roles=["IT Student","Python Developer","Network Explorer","Security Learner","Future Software Engineer"];let ri=0,ci=0,deleting=false;
function typeLoop(){const el=document.getElementById("typeTarget"), word=roles[ri];
 if(!deleting){el.textContent=word.slice(0,++ci);if(ci===word.length){deleting=true;setTimeout(typeLoop,1100);return}}
 else{el.textContent=word.slice(0,--ci);if(ci===0){deleting=false;ri=(ri+1)%roles.length;}}
 setTimeout(typeLoop,deleting?55:90)} typeLoop();

const canvas=document.getElementById("particleCanvas"),ctx=canvas.getContext("2d");let pts=[],mx=-999,my=-999;
function resize(){canvas.width=innerWidth;canvas.height=innerHeight;pts=Array.from({length:Math.min(90,Math.floor(innerWidth/14))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.32,vy:(Math.random()-.5)*.32,r:Math.random()*1.6+.5}));}
resize();addEventListener("resize",resize);addEventListener("pointermove",e=>{mx=e.clientX;my=e.clientY});
function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);pts.forEach((p,i)=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>canvas.width)p.vx*=-1;if(p.y<0||p.y>canvas.height)p.vy*=-1;const d=Math.hypot(p.x-mx,p.y-my);ctx.fillStyle=d<130?"rgba(100,246,226,.85)":"rgba(145,170,210,.28)";ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();for(let j=i+1;j<pts.length;j++){const q=pts[j],dd=Math.hypot(p.x-q.x,p.y-q.y);if(dd<105){ctx.strokeStyle=`rgba(100,246,226,${(1-dd/105)*.07})`;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke()}}});requestAnimationFrame(draw)}draw();

const scene=document.getElementById("scene");scene.addEventListener("pointermove",e=>{const r=scene.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;scene.style.transform=`perspective(1100px) rotateX(${y*-5}deg) rotateY(${x*7}deg)`});scene.addEventListener("pointerleave",()=>scene.style.transform="");
document.querySelectorAll(".tilt").forEach(card=>{card.addEventListener("pointermove",e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(800px) rotateX(${y*-5}deg) rotateY(${x*6}deg) translateY(-3px)`});card.addEventListener("pointerleave",()=>card.style.transform="")});

document.getElementById("contactForm").addEventListener("submit",e=>{e.preventDefault();const n=document.getElementById("name").value.trim(),em=document.getElementById("email").value.trim(),m=document.getElementById("message").value.trim(),note=document.getElementById("formNote");if(!n||!em||!m){note.textContent="Please complete every field.";return}const subject=encodeURIComponent(`Portfolio message from ${n}`),bodyTxt=encodeURIComponent(`Name: ${n}\nEmail: ${em}\n\n${m}`);window.location.href=`mailto:?subject=${subject}&body=${bodyTxt}`;note.textContent="Opening email…";});
