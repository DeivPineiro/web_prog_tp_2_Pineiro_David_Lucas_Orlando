if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('../sw.js').then((message)=>{
        console.log('Service worker ready campeón ;-)');
    })
} else { 
    alert('No soporto Service Worker  :-(');
}