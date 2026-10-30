const revelar = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) entrada.target.classList.add('visible');
  });
}, { threshold: .12 });

document.querySelectorAll('section > *, .card').forEach((el) => {
  if (!el.classList.contains('hero-scene')) el.classList.add('reveal');
  revelar.observe(el);
});

window.addEventListener('load', () => document.querySelector('.hero-copy')?.classList.add('visible'));

const cena = document.querySelector('.hero-scene');
if (cena && matchMedia('(pointer:fine)').matches) {
  cena.addEventListener('mousemove', (e) => {
    const r = cena.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    cena.querySelectorAll('.cabinet,.counter,.vase').forEach((el, i) => {
      const intensidade = (i + 1) * 2.2;
      el.style.translate = `${x * intensidade}px ${y * intensidade}px`;
    });
  });
  cena.addEventListener('mouseleave', () => cena.querySelectorAll('.cabinet,.counter,.vase').forEach(el => el.style.translate = '0 0'));
}

document.querySelector('.menu')?.addEventListener('click', () => {
  document.querySelector('.topo nav')?.classList.toggle('aberto');
});