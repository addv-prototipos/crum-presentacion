(() => {
 const slides=[...document.querySelectorAll('.slide')], progress=document.getElementById('progress'),
 num=document.getElementById('slideNumber'), title=document.getElementById('slideTitle'),
 prev=document.getElementById('prevBtn'), next=document.getElementById('nextBtn');
 let current=0,touchX=0,touchY=0;
 const panel=document.getElementById('indexPanel'), list=document.getElementById('indexList');
 slides.forEach((s,i)=>{const b=document.createElement('button');b.className='index-link';b.textContent=String(i+1).padStart(2,'0')+'  '+s.dataset.title;b.addEventListener('click',()=>{go(i);panel.classList.remove('open')});list.appendChild(b)});
 function go(i){current=Math.max(0,Math.min(slides.length-1,i));slides.forEach((s,j)=>s.classList.toggle('active',j===current));progress.style.width=((current+1)/slides.length*100)+'%';num.textContent=String(current+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');title.textContent=slides[current].dataset.title;prev.disabled=current===0;next.disabled=current===slides.length-1;[...list.children].forEach((b,j)=>b.classList.toggle('current',j===current));}
 prev.addEventListener('click',()=>go(current-1));next.addEventListener('click',()=>go(current+1));
 document.addEventListener('keydown',e=>{if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();go(current+1)}if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();go(current-1)}if(e.key.toLowerCase()==='f')toggleFull();if(e.key==='Escape')panel.classList.remove('open')});
 document.getElementById('overviewBtn').addEventListener('click',()=>panel.classList.toggle('open'));document.getElementById('closeIndex').addEventListener('click',()=>panel.classList.remove('open'));
 function toggleFull(){if(!document.fullscreenElement){document.documentElement.requestFullscreen?.()}else{document.exitFullscreen?.()}}
 document.getElementById('fullBtn').addEventListener('click',toggleFull);
 const deck=document.getElementById('deck');
 deck.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].screenX;touchY=e.changedTouches[0].screenY},{passive:true});
 deck.addEventListener('touchend',e=>{const dx=e.changedTouches[0].screenX-touchX,dy=e.changedTouches[0].screenY-touchY;if(Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy)*1.25){go(current+(dx<0?1:-1))}},{passive:true});
 go(0);
})();