(() => {
 const ids=['people','hours','rate','recovery','investment','monthly'];const $=id=>document.getElementById(id);
 const money=n=>new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN',maximumFractionDigits:0}).format(Number.isFinite(n)?n:0);
 function update(){const p=Math.max(0,+$('people').value||0),h=Math.max(0,+$('hours').value||0),r=Math.max(0,+$('rate').value||0),pct=Math.min(100,Math.max(0,+$('recovery').value||0))/100,inv=Math.max(0,+$('investment').value||0),m=Math.max(0,+$('monthly').value||0);
 const hrs=p*h*4.33*pct,monthly=hrs*r,annual=monthly*12,cost=m*12,net=annual-cost-inv;
 $('capacity').textContent=money(monthly);$('savedHours').textContent=hrs.toFixed(1)+' h';$('annualGross').textContent=money(annual);$('annualCost').textContent=money(cost);$('netBenefit').textContent=money(net);
 const roi=inv>0?(net/inv)*100:NaN;const payback=monthly>m?(inv/(monthly-m)):Infinity;
 $('verdict').textContent=inv===0?'Define una inversión para calcular ROI y recuperación.':(net>0?'ROI simplificado: '+roi.toFixed(1)+'% · Recuperación aproximada: '+(Number.isFinite(payback)?payback.toFixed(1)+' meses':'no se recupera con estos supuestos')+'.':'Con estos supuestos, el valor de capacidad recuperada no cubre operación e inversión durante el primer año.');
 }
 ids.forEach(id=>$(id).addEventListener('input',update));
 $('resetCalc').addEventListener('click',()=>{const vals={people:8,hours:5,rate:180,recovery:45,investment:600000,monthly:12000};Object.entries(vals).forEach(([k,v])=>$(k).value=v);update()});update();
})();