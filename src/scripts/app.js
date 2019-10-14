// PWA
// ------------------------------------------
const registerServiceWorker = () => {
  navigator.serviceWorker.register('service-worker.js')
    .then(reg => {
      console.log('[ServiceWorker] Registered');
    }).catch(err => {
      console.log('[ServiceWorker] Registration error', err);
    });
};

const addBeforeInstallPromtEvent = () => {
  window.addEventListener('beforeinstallprompt', e => {
        
    setTimeout(() => {
      e.prompt();
    }, 20000);
    
    e.userChoice.then(outcome => { 
      console.log(outcome);
    }, err => {
      console.log('Error: ', err);
    }); 
  });
};

('serviceWorker' in navigator && registerServiceWorker());
('beforeinstallprompt' in window && addBeforeInstallPromtEvent());

// Auto select main nav link on scroll
// ------------------------------------------
document.querySelector('#page-body').addEventListener('scroll', e => {
  const getTopOffset = id => {
    return document.querySelector(id).offsetTop - 60;
  };

  const resetNavLinks = () => {
    [].forEach.call(
      document.querySelector('#main-nav').querySelectorAll('a'), 
      (link) => { link.classList.remove('is-active') }
    );
  };
  
  const setSelected = hash => {
    const element = document.querySelector('#main-nav > li > [href="' + hash + '"]');
    
    if (hash !== '#home') {
      resetNavLinks();
      element.classList.add('is-active');
    } else {
      resetNavLinks();
    }
  };

  const scrollY = e.target.scrollTop;
  const aboutTopOffset = getTopOffset('#about');
  const featuredTopOffset = getTopOffset('#featured');
  const resumeTopOffset = getTopOffset('#resume');
  const contactTopOffset = getTopOffset('#contact');

  let selectedNavItem = '#home';

  if (scrollY < aboutTopOffset) {
    selectedNavItem = '#home';
  }

  if (scrollY >= aboutTopOffset) {
    selectedNavItem = '#about';
  } 
  
  if (scrollY >= featuredTopOffset) {
    selectedNavItem = '#featured';
  } 

  if (scrollY >= resumeTopOffset) {
    selectedNavItem = '#resume';
  } 

  if (scrollY >= contactTopOffset) {
    selectedNavItem = '#contact';
  } 

  setSelected(selectedNavItem);
});

// Main Nav
// ------------------------------------------
const mainNav = document.querySelector('#main-nav');
let links = [];

[].forEach.call(document.querySelectorAll('a'), link => {
  links = [...links, link];
  link.addEventListener('click', e => {
    links.forEach(l => l.classList.remove('is-active'));
    link.classList.add('is-active');
  })
});