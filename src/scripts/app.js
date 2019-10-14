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

const mainNav = document.querySelector('#main-nav');
let links = [];

[].forEach.call(document.querySelectorAll('a'), link => {
  links = [...links, link];
  link.addEventListener('click', e => {
    links.forEach(l => l.classList.remove('is-active'));
    link.classList.add('is-active');
  })
});