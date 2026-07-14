const video = document.querySelector('#heroVideo');
const hero = document.querySelector('.hero-scroll');
const header = document.querySelector('.topbar');
let duration = 10;
let targetTime = 0;
let displayedTime = 0;

video.addEventListener('loadedmetadata', () => {
  duration = Math.max(0.1, video.duration - 0.08);
  video.currentTime = 0.01;
});

function readScroll() {
  const rect = hero.getBoundingClientRect();
  const available = hero.offsetHeight - window.innerHeight;
  const progress = Math.min(1, Math.max(0, -rect.top / available));
  targetTime = progress * duration;
  header.classList.toggle('scrolled', window.scrollY > 40);
}

function renderVideo() {
  displayedTime += (targetTime - displayedTime) * 0.085;
  if (video.readyState >= 2 && Math.abs(video.currentTime - displayedTime) > 0.012) {
    video.currentTime = displayedTime;
  }
  requestAnimationFrame(renderVideo);
}

window.addEventListener('scroll', readScroll, { passive: true });
window.addEventListener('resize', readScroll, { passive: true });
readScroll();
renderVideo();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const modelTrack = document.querySelector('#modelTrack');
document.querySelector('#modelsPrev')?.addEventListener('click', () => modelTrack.scrollBy({ left: -410, behavior: 'smooth' }));
document.querySelector('#modelsNext')?.addEventListener('click', () => modelTrack.scrollBy({ left: 410, behavior: 'smooth' }));

const openDialog = id => {
  const dialog = document.querySelector(`#${id}`);
  if (!dialog) return;
  dialog.classList.add('open');
  dialog.setAttribute('aria-hidden', 'false');
  document.body.classList.add('dialog-open');
  const video = dialog.querySelector('video');
  video.currentTime = 0;
  video.play().catch(() => {});
  dialog.querySelector('.dialog-close')?.focus();
};

const closeDialog = dialog => {
  dialog.classList.remove('open');
  dialog.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('dialog-open');
  dialog.querySelector('video')?.pause();
};

document.querySelectorAll('[data-dialog]').forEach(trigger => {
  const activate = () => openDialog(trigger.dataset.dialog);
  trigger.addEventListener('click', activate);
  trigger.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); activate(); }
  });
});

document.querySelectorAll('.video-dialog').forEach(dialog => {
  dialog.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => closeDialog(dialog)));
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    const open = document.querySelector('.video-dialog.open');
    if (open) closeDialog(open);
  }
});

const form = document.querySelector('#leadForm');
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(`Solicitação de orçamento — ${data.get('nome')}`);
  const body = encodeURIComponent(`Nome: ${data.get('nome')}\nWhatsApp: ${data.get('telefone')}\nE-mail: ${data.get('email')}\nCultura: ${data.get('cultura')}\nEstado: ${data.get('estado')}\n\nOperação:\n${data.get('mensagem') || 'Não informado'}`);
  window.location.href = `mailto:faleconosco@jxo.ind.br?subject=${subject}&body=${body}`;
});
