// layout.js
// Assumes header.js and footer.js are loaded first on the page.

const addrMap = {
  'index.html':  'indyclub.utoronto.ca/home',
  'about.html':  'indyclub.utoronto.ca/about',
  'resources.html': 'indyclub.utoronto.ca/resources',
  'events.html': 'indyclub.utoronto.ca/events',
  'merch.html':  'indyclub.utoronto.ca/merch',
  'team.html':   'indyclub.utoronto.ca/team',
  'contact.html':'indyclub.utoronto.ca/contact'
};

const labelMap = {
  'index.html':  'HOME',
  'about.html':  'ABOUT',
  'resources.html': 'RESOURCES',
  'events.html': 'EVENTS',
  'merch.html':  'MERCH',
  'team.html':   'TEAM',
  'contact.html':'CONTACT'
};

(function initLayout() {
  const headerMount = document.getElementById('site-header');
  const footerMount = document.getElementById('site-footer');

  if (headerMount && window.INDY_HEADER) headerMount.innerHTML = window.INDY_HEADER;
  if (footerMount && window.INDY_FOOTER) footerMount.innerHTML = window.INDY_FOOTER;

  const path = location.pathname.split('/').pop() || 'index.html';
  const tabLabel = document.getElementById('tab-label');
  const addrInput = document.getElementById('addr');
  if (tabLabel) tabLabel.textContent = labelMap[path] || path.toUpperCase();
  if (addrInput) addrInput.value = addrMap[path] || ('indyclub.utoronto.ca/' + path.replace('.html',''));

  // Simple history buttons (browser history)
  const backBtn = document.getElementById('btn-back');
  const fwdBtn  = document.getElementById('btn-forward');
  if (backBtn) backBtn.addEventListener('click', () => history.back());
  if (fwdBtn)  fwdBtn.addEventListener('click', () => history.forward());

  // Hamburger / nav dropdown
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', e => {
      e.stopPropagation();
      hamburger.classList.toggle('open');
      navMenu.classList.toggle('open');
    });
    document.addEventListener('click', e => {
      if (!e.target.closest('.titlebar')) {
        navMenu.classList.remove('open');
        hamburger.classList.remove('open');
      }
    });
  }
})();
