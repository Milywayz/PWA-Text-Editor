// const butInstall = document.getElementById('buttonInstall');

// // Logic for installing the PWA
// // TODO: Add an event handler to the `beforeinstallprompt` event
// window.addEventListener('beforeinstallprompt', (event) => {
//     event.preventDefault();
//     butInstall.removeAttribute('hidden')
// });

// // TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener('click', async () => {
//     if (!installPrompt) {
//         return;
//       }
//       const result = await installPrompt.prompt();
//       console.log(`Install prompt was: ${result.outcome}`);
//       installPrompt = null;
//       butInstall.setAttribute("hidden", "");
// });

// // TODO: Add an handler for the `appinstalled` event
// window.addEventListener('appinstalled', (event) => {
//     textHeader.textContent = 'Successfully installed!';
//     console.log('👍', 'appinstalled', event);
//   });
  
  const butInstall = document.getElementById("buttonInstall");

  window.addEventListener('beforeinstallprompt', (event) => {
      window.deferredPrompt = event;
      butInstall.classList.toggle('hidden', false);
    });
  
  butInstall.addEventListener('click', async () => {
    
    const promptEvent = window.deferredPrompt;
  
    if (!promptEvent) {
     return;
    }
  
    promptEvent.prompt();
    
    window.deferredPrompt = null;
    
    butInstall.classList.toggle('hidden', true);
  });
  
  window.addEventListener('appinstalled', (event) => {
    
    window.deferredPrompt = null;
  }); 
  