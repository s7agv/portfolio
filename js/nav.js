// componente de navegacao reutilizado em todas as paginas
const LINKS = [
  { href: 'index.html', pt: 'Sobre Mim', en: 'About' },
  { href: 'projects.html', pt: 'Projetos', en: 'Projects' },
  { href: 'experience.html', pt: 'Experiências', en: 'Experience' },
  { href: 'contact.html', pt: 'Contato', en: 'Contact' },
];

class SiteNav extends HTMLElement {
  connectedCallback() {
    const here = location.pathname.split('/').pop() || 'index.html';
    const links = LINKS.map(l =>
      `<a class="navlink" href="${l.href}" ${(l.href === here + '.html' || l.href === here)? 'aria-current="page"' : ''}>
         <span data-pt>${l.pt}</span><span data-en>${l.en}</span>
       </a>`).join('');
    this.innerHTML = `
      <button class="nav-toggle" aria-label="menu">☰ menu</button>
      <a class="brand" href="index.html">gustavo starling // portfolio</a>
      <nav class="links">${links}</nav>
      <span data-pt><button class="lang-toggle" style="display:block;margin-top:1rem">EN</button></span>
      <span data-en><button class="lang-toggle" style="display:block;margin-top:1rem">PT-BR</button></span>`;
    this.querySelector('.nav-toggle').onclick = () => this.classList.toggle('open');
    const langTogs = document.querySelectorAll('.lang-toggle');
    langTogs.forEach(btn => {
      btn.onclick = () => {
        const html = document.documentElement;
        html.dataset.lang = html.dataset.lang === 'en' ? 'pt' : 'en';
        localStorage.setItem('lang', html.dataset.lang);
      };
    });
  }
}
customElements.define('site-nav', SiteNav);
document.documentElement.dataset.lang = localStorage.getItem('lang') || 'pt';
