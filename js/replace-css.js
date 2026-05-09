var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.runtime.getURL('css/night-mode.css');

(document.head || document.documentElement).appendChild(style);

setTimeout(() => {
    // Elementos Tela Outfits
    var elements_td_Outfits = document.querySelectorAll('td[style*="background-color: #E8F2F8"]');

    elements_td_Outfits.forEach(element => {
        element.style.setProperty('background-color', '#4a4a4a', 'important');
    })


    // Elementos Tela Pagina Promoted Tibia Fansites
    var elements_td_Promoted = document.querySelectorAll('td[style*="background:#cedff2"]');

    elements_td_Promoted.forEach(element => {
        element.style.setProperty('background', '#2d2d2d', 'important');
    })

    var elements_span_Promoted = document.querySelectorAll('span[style*="background:#CEDFF2"]');

    elements_span_Promoted.forEach(element => {
        element.style.setProperty('background', '#2d2d2d', 'important');
    })

}, 100);


// document.getElementsByClassName('scroll-to-top')[0].children[0].remove();
// var image = document.createElement('img');
// image.src = chrome.runtime.getURL('images/up_dark.png');
// document.getElementsByClassName('scroll-to-top')[0].appendChild(image);