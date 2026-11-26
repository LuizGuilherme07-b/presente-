// ===== Abas =====
const abas = document.querySelectorAll('.tab');
const secoes = document.querySelectorAll('.content');
function showTab(id){
  secoes.forEach(s => s.classList.toggle('ativo', s.id === id));
  abas.forEach(a => a.classList.toggle('ativo', a.dataset.tab === id));
}
abas.forEach(a => a.addEventListener('click', () => showTab(a.dataset.tab)));

// ===== Contador desde 29/08/2022 =====
const INICIO = new Date(2022, 7, 29, 0, 0, 0); // mês 7 = agosto
const pad = n => String(n).padStart(2, '0');

function atualizar(){
  const agora = new Date();
  let anos = agora.getFullYear() - INICIO.getFullYear();
  let meses = agora.getMonth() - INICIO.getMonth();
  let dias = agora.getDate() - INICIO.getDate();
  let horas = agora.getHours();
  let min = agora.getMinutes();
  let seg = agora.getSeconds();

  if (dias < 0){
    meses--;
    dias += new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
  }
  if (meses < 0){ anos--; meses += 12; }

  document.getElementById('t-anos').textContent = anos;
  document.getElementById('t-meses').textContent = meses;
  document.getElementById('t-dias').textContent = dias;
  document.getElementById('t-horas').textContent = pad(horas);
  document.getElementById('t-min').textContent = pad(min);
  document.getElementById('t-seg').textContent = pad(seg);

  const totalDias = Math.floor((agora - INICIO) / 86400000);
  document.getElementById('total').textContent =
    'Isso dá ' + totalDias.toLocaleString('pt-BR') + ' dias de amor ❤️';
}
atualizar();
setInterval(atualizar, 1000);

// ===== Corações caindo =====
const caixa = document.getElementById('petalas');
if (!matchMedia('(prefers-reduced-motion: reduce)').matches){
  setInterval(() => {
    const c = document.createElement('i');
    c.textContent = ['❤','💗','🌸'][Math.floor(Math.random()*3)];
    c.style.left = Math.random()*100 + 'vw';
    c.style.fontSize = (12 + Math.random()*16) + 'px';
    c.style.animationDuration = (7 + Math.random()*6) + 's';
    caixa.appendChild(c);
    setTimeout(() => c.remove(), 14000);
  }, 900);
}

// ===== Foto em tela cheia =====
document.querySelectorAll('.grade img').forEach(img => {
  img.addEventListener('click', () => {
    const z = document.createElement('div');
    z.className = 'zoom';
    z.innerHTML = '<img src="' + img.src + '" alt="' + img.alt + '">';
    z.onclick = () => z.remove();
    document.body.appendChild(z);
  });
});
