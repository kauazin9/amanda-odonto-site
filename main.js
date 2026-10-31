const WA="https://wa.me/5585991010000",AGENDA_URL=""; // AGENDA_URL: endereço do sistema de agendamento atual da clínica
const $=s=>document.querySelector(s);
const S=[
["Ortodontia","Alinhamento dos dentes e da mordida, com plano definido após avaliação individual.",["Avaliação antes de qualquer decisão","Plano pensado para cada paciente","Acompanhamento durante o tratamento"],"M4 24c4-12 12-12 16 0s12 12 16 0M4 30h32"],
["Endodontia","Tratamento do interior do dente, com foco em conforto e em preservar o que for possível.",["Diagnóstico cuidadoso","Explicação clara de cada etapa","Orientação para o pós-tratamento"],"M12 4c-6 0-8 8-6 16s3 16 8 16c3 0 2-10 6-10s3 10 6 10c5 0 6-8 8-16s0-16-6-16c-4 0-6 3-8 3s-4-3-8-3Z"],
["Odontopediatria","Atendimento pensado para crianças, com paciência, linguagem simples e acolhimento.",["Cuidado desde cedo","Ambiente tranquilo","Orientação também para os pais"],"M20 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12ZM8 36c0-8 5-12 12-12s12 4 12 12"],
["Implantes dentários","Reposição de dentes ausentes, devolvendo função e aparência natural.",["Avaliação prévia individual","Planejamento antes do procedimento","Acompanhamento após a instalação"],"M14 4h12M16 4v8h8V4M17 14l1 22M23 14l-1 22M15 20h10M16 28h8"],
["Próteses dentárias","Soluções para recuperar mastigação, estética e segurança ao sorrir.",["Opções conforme cada caso","Atenção ao conforto","Ajustes e acompanhamento"],"M5 14c0-6 6-8 15-8s15 2 15 8c0 8-3 18-6 18s-3-10-9-10-6 10-9 10-6-10-6-18Z"],
["Clareamento dental","Um sorriso mais luminoso, com indicação e acompanhamento profissional.",["Avaliação da saúde dos dentes","Indicação conforme cada caso","Orientações de cuidado"],"M20 5l3 9 9 3-9 3-3 9-3-9-9-3 9-3ZM31 28l1 3 3 1-3 1-1 3-1-3-3-1 3-1Z"],
["Restaurações","Recuperação da forma e da função do dente, com acabamento cuidadoso.",["Cuidado com o detalhe","Foco em conforto","Orientação de manutenção"],"M12 4c-6 0-8 8-6 16s3 16 8 16c3 0 2-10 6-10s3 10 6 10c5 0 6-8 8-16s0-16-6-16c-4 0-6 3-8 3s-4-3-8-3ZM14 14h12"],
["Limpeza e prevenção","Consultas regulares para manter a saúde bucal em dia e evitar problemas maiores.",["Rotina de cuidado","Orientação de higiene","Atenção à prevenção"],"M20 4l12 5v9c0 9-5 15-12 18C13 33 8 27 8 18V9ZM14 20l4 4 8-9"]];
const R=[["Recepção","Onde o atendimento começa: balcão, assentos e a marca Ama Odonto em destaque.","assets/img/recepcao-balcao.jpg","center 40%"],["Ambiente de espera","Um canto acolhedor com balanço, cafeteira e o letreiro “A gente ama”.","assets/img/espera-balanco.jpg","center"],["Consultórios","Ambiente claro, com bancada, iluminação em LED e painel ripado.","assets/img/consultorio.jpg","center"],["Corredor","Circulação iluminada, com acabamentos em tons claros.","assets/img/corredor.jpg","center"]];
const F=[["Como faço para agendar?","Escolha o assunto na seção de agendamento e envie a mensagem pelo WhatsApp. Nossa equipe combina data e horário com você."],["Quais são os horários de atendimento?","Segunda a sexta, das 08h às 12h e das 13h às 17h."],["A clínica atende crianças?","Sim. A Ama Odonto cuida de adultos e crianças."],["Onde fica a clínica?","Rua Castro Meireles, 848, Maraponga, Fortaleza - CE. Use o botão da seção de contato para abrir o mapa."]];
const wa=t=>WA+"?text="+encodeURIComponent(t);
/* hero */
$("#h1").innerHTML=$("#h1").textContent.split(" ").map((w,i)=>`<span style="animation-delay:${.15+i*.09}s">${w}</span>`).join(" ");
const hero=$("#inicio"),fine=matchMedia("(pointer:fine)").matches&&!document.documentElement.classList.contains("rm");
if(fine)hero.addEventListener("mousemove",e=>{const r=hero.getBoundingClientRect();hero.style.setProperty("--mx",(e.clientX-r.left)/r.width-.5);hero.style.setProperty("--my",(e.clientY-r.top)/r.height-.5)});
/* header, progress, menu */
const hd=$("#hd"),pg=$("#pg"),hb=$("#hb"),rmq=document.documentElement.classList.contains("rm");
function sc(){hd.classList.toggle("s",scrollY>40);if(!rmq)hd.style.setProperty("--r",scrollY*.45);{const u=hd.querySelector(".logo use"),h=scrollY>40?"#h":"#hl";if(u.getAttribute("href")!==h)u.setAttribute("href",h)}const m=document.documentElement.scrollHeight-innerHeight;pg.style.transform="scaleX("+(m>0?scrollY/m:0)+")"}
sc();addEventListener("scroll",sc,{passive:true});
function menu(o){document.body.classList.toggle("mo",o);hd.classList.toggle("mo",o);hb.setAttribute("aria-expanded",o);document.body.style.overflow=o?"hidden":""}
hb.onclick=()=>menu(!hd.classList.contains("mo"));$("#mn").onclick=e=>{if(e.target.closest("a"))menu(false)};addEventListener("keydown",e=>{if(e.key==="Escape")menu(false)});
const links=[...document.querySelectorAll("nav a[data-s]")];
new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.dataset.s===x.target.id))}),{rootMargin:"-45% 0px -50% 0px"}).observe&&document.querySelectorAll("main section[id]").forEach(s=>window._o=(window._o||new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.dataset.s===x.target.id))}),{rootMargin:"-45% 0px -50% 0px"})).observe(s));
/* reveal */
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});document.querySelectorAll(".rv").forEach(el=>io.observe(el));
/* especialidades */
const tabs=$("#tabs"),pn=$("#pn");
tabs.innerHTML=S.map((s,i)=>`<button role="tab" id="t${i}" aria-selected="${i==0}" data-i="${i}">${s[0]}</button>`).join("");
function sp(i){tabs.querySelectorAll("button").forEach((b,k)=>b.setAttribute("aria-selected",k==i));const s=S[i];
pn.innerHTML=`<div class="in"><div class="vs"><svg viewBox="0 0 40 40"><path d="${s[3]}"/></svg></div><h3>${s[0]}</h3><p>${s[1]}</p><ul>${s[2].map(b=>`<li>${b}</li>`).join("")}</ul><a class="btn" target="_blank" rel="noopener" href="${wa("Olá! Gostaria de consultar a disponibilidade para "+s[0]+".")}">Consultar disponibilidade</a></div>`}
tabs.onclick=e=>{const b=e.target.closest("button");if(b)sp(+b.dataset.i)};
tabs.onkeydown=e=>{const k={ArrowDown:1,ArrowRight:1,ArrowUp:-1,ArrowLeft:-1}[e.key];if(k){e.preventDefault();const i=(+document.activeElement.dataset.i+k+S.length)%S.length;sp(i);$("#t"+i).focus()}};sp(0);
/* ambientes */
const rm=$("#rm"),stg=$("#stage");
rm.innerHTML=R.map((r,i)=>`<button role="tab" aria-selected="${i==0}" data-i="${i}"><b>${r[0]}</b></button>`).join("");
function rs(i){rm.querySelectorAll("button").forEach((b,k)=>b.setAttribute("aria-selected",k==i));const r=R[i];stg.innerHTML=`<figure class="fg"><img src="${r[2]}" alt="${r[0]} da Ama Odonto" style="object-position:${r[3]}" width="768" height="1024"></figure><div class="ds"><small>${i+1} / ${R.length}</small><h3>${r[0]}</h3><p>${r[1]}</p></div>`}
rm.onclick=e=>{const b=e.target.closest("button");if(b)rs(+b.dataset.i)};rs(0);
/* agendamento */
const subj=["Primeira consulta",...S.map(s=>s[0]),"Outro assunto"];let cur=0;
const ch=$("#ch");ch.innerHTML=subj.map((s,i)=>`<button aria-pressed="${i==0}" data-i="${i}">${s}</button>`).join("");
function bk(i){cur=i;ch.querySelectorAll("button").forEach((b,k)=>b.setAttribute("aria-pressed",k==i));const t=i==0?"Olá! Gostaria de agendar uma primeira consulta.":i==subj.length-1?"Olá! Gostaria de falar com a equipe sobre outro assunto.":"Olá! Gostaria de agendar uma consulta sobre "+subj[i]+".";$("#bub").textContent=t;$("#go").href=wa(t)}
ch.onclick=e=>{const b=e.target.closest("button");if(b)bk(+b.dataset.i)};bk(0);
if(AGENDA_URL){const a=$("#ag");a.href=AGENDA_URL;a.style.display="inline-flex"}
/* faq */
$("#fq").innerHTML=F.map((f,i)=>`<div class="q"><button aria-expanded="false" aria-controls="a${i}" id="b${i}">${f[0]}<i></i></button><div class="a" id="a${i}" role="region" aria-labelledby="b${i}"><div><p>${f[1]}</p></div></div></div>`).join("");
$("#fq").onclick=e=>{const b=e.target.closest("button");if(b)b.setAttribute("aria-expanded",b.getAttribute("aria-expanded")!=="true")};

/* v4 — símbolo, carrossel, divisores */
const LOGO_URL="assets/img/simbolo-ama.png",SYM_L="assets/img/simbolo-ama-claro.png",FULL_L="assets/img/logo-completo-claro.png";document.documentElement.style.setProperty("--hm","url("+new URL(LOGO_URL,document.baseURI).href+")");document.querySelector("#h").parentNode.insertAdjacentHTML("beforeend",'<symbol id="hl" viewBox="0 0 64 58"><image href="'+SYM_L+'" width="64" height="58"/></symbol>');
if(LOGO_URL)$("#h").innerHTML=`<image href="${LOGO_URL}" width="64" height="58"/>`;
(function(){
const NEW=["assets/img/recepcao-ampla.jpg","assets/img/retrato-fachada.jpg","assets/img/recepcao-marca.jpg","assets/img/fachada-frontal.jpg"];
const L=[[NEW[3],"Fachada da Ama Odonto Multiclínica","58% 50%"],[NEW[0],"Recepção da clínica, com o balanço e o letreiro “A gente ama”","45% 50%"],[$(".pt img").src,"Dra. Lorena Dias","50% 18%"],[NEW[2],"Detalhe da recepção com a marca Ama Odonto","40% 50%"],[NEW[1],"Retrato em frente à fachada da clínica","62% 50%"],[R[2][2],"Consultório da clínica","50% 50%"]];
let rm=rmq,i=0,sp=false,iv=0;
const cr=document.createElement("div");cr.className="cr"+(rm?" na":"");cr.setAttribute("role","region");cr.setAttribute("aria-roledescription","carrossel");cr.setAttribute("aria-label","Fotografias da clínica");
const hs='<svg aria-hidden="true"><use href="#hl"/></svg>';
const face=c=>`<div class="fc ${c}"${c=="bk"?' aria-hidden="true"':""}>${L.map(l=>`<img class="sl" src="${l[0]}" alt="${c=="bk"?"":l[1]}" style="object-position:${l[2]}">`).join("")}<span class="gl"></span></div>`;
cr.innerHTML='<div class="fh" aria-hidden="true"></div>'+hs.replace("<svg",'<svg class="hf hf1"')+hs.replace("<svg",'<svg class="hf hf2"')+`<div class="stg"><div class="crf">${face("fa")}${face("bk")}</div><div class="sh"></div></div>`;
hero.insertBefore(cr,hero.querySelector(".w"));
/* corações caindo */
const fh=cr.querySelector(".fh"),cols=["#F6D5DF","#E4789B","#F3A9BF","#FFF3F1"],rnd=(a,b)=>a+Math.random()*(b-a),sg=()=>Math.random()<.5?-1:1;
const place=e=>e.style.setProperty("--x",(Math.random()<.5?rnd(-2,20):rnd(78,98)).toFixed(1)+"%");
for(let k=0;k<12;k++){const e=document.createElement("i"),sz=rnd(12,30),calm=k%2;
e.style.cssText=`--s:${sz|0}px;--t:${(rnd(9,15)+sz*.12).toFixed(1)}s;--dl:-${rnd(0,16).toFixed(1)}s;--o:${rnd(.3,.75).toFixed(2)};--r:${sg()*(calm?rnd(8,20):rnd(80,200))|0}deg;--sw:${sg()*rnd(8,24)|0}px;--c:${cols[k%4]}`;
place(e);e.addEventListener("animationiteration",()=>place(e));fh.appendChild(e)}
/* rotação 3D */
let tm=0;const sl=cr.querySelectorAll(".sl"),crf=cr.querySelector(".crf"),gls=cr.querySelectorAll(".gl"),sh=cr.querySelector(".sh");
function go(n){i=(n+L.length)%L.length;sl.forEach((s,k)=>{s.classList.toggle("on",k%L.length==i);k<L.length&&(k==i?s.removeAttribute("aria-hidden"):s.setAttribute("aria-hidden","true"))});sched()}
function sched(){clearTimeout(tm);if(rm)return;tm=setTimeout(function t(){if(cr.classList.contains("pz")||cr.classList.contains("off")||document.hidden){tm=setTimeout(t,500);return}nav(i+1,1,2400)},4200)}
function spin(n,dir,dur){if(sp)return;sp=true;cr.classList.add("rot");const e="cubic-bezier(.6,.04,.25,1)",
a=crf.animate([{transform:"translateZ(0) rotateX(0deg) rotateY(0deg)"},{transform:"translateZ(-120px) rotateX(-5deg) rotateY("+180*dir+"deg)",offset:.5},{transform:"translateZ(0) rotateX(0deg) rotateY("+360*dir+"deg)"}],{duration:dur,easing:e});
gls.forEach(g=>g.animate([{backgroundPosition:"130% 0"},{backgroundPosition:"-30% 0"}],{duration:dur,easing:e}));
sh.animate([{transform:"scaleX(1)",opacity:.55},{transform:"scaleX(.55)",opacity:.3,offset:.5},{transform:"scaleX(1)",opacity:.55}],{duration:dur,easing:e});
a.onfinish=()=>{sp=false;cr.classList.remove("rot");go(n)}}
function nav(n,dir,dur){n=(n+L.length)%L.length;if(n==i||sp)return;rm?go(n):spin(n,dir,dur)}
cr.addEventListener("click",e=>{const b=e.target.closest("button");if(!b||b.classList.contains("mt3d"))return;if(b.dataset.d){const d=+b.dataset.d;nav(i+d,d,1500)}else{const t=+b.dataset.i;nav(t,t>i?1:-1,1500)}});

["mouseenter","focusin"].forEach(t=>cr.addEventListener(t,()=>cr.classList.add("pz")));["mouseleave","focusout"].forEach(t=>cr.addEventListener(t,()=>cr.classList.remove("pz")));
cr.addEventListener("keydown",e=>{if(e.key==="ArrowLeft")nav(i-1,-1,1500);if(e.key==="ArrowRight")nav(i+1,1,1500)});
let tx=0;cr.addEventListener("touchstart",e=>{tx=e.touches[0].clientX},{passive:true});cr.addEventListener("touchend",e=>{const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>40)nav(i+(d<0?1:-1),d<0?1:-1,1500)},{passive:true});
new IntersectionObserver(e=>cr.classList.toggle("off",!e[0].isIntersecting)).observe(cr);
if(rm)setInterval(()=>{if(!cr.classList.contains("pz")&&!cr.classList.contains("off"))go(i+1)},6500);
go(0);
})();
["especialidades","equipe","faq"].forEach(id=>{const d=document.createElement("div");d.className="dv rv";d.setAttribute("aria-hidden","true");d.innerHTML='<i><svg><use href="#h"/></svg></i>';document.getElementById(id).before(d);io.observe(d)});
document.querySelectorAll(".cta .btn:first-child,#go").forEach(b=>b.classList.add("hr"));
(function(){const f=document.createElement("img");f.className="fl";f.src=FULL_L;f.alt="Ama Odonto Multiclínica Odontológica";f.width=260;f.height=159;document.querySelector(".ct .lg").before(f)})();
(function(){const lg=document.querySelector(".ct .lg"),b=document.createElement("button"),off=document.documentElement.classList.contains("rm");b.className="am";b.type="button";b.setAttribute("aria-pressed",off);b.textContent=off?"Animações desligadas — ligar":"Animações ligadas — desligar";b.onclick=()=>{try{off?localStorage.removeItem("amaAnim"):localStorage.setItem("amaAnim","off")}catch(e){}location.reload()};lg.appendChild(b)})();
