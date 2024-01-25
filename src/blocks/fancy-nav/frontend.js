
import { __ } from '@wordpress/i18n';

document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.querySelector('.wp-block-ept-transform-fancy-nav .mobile-button')
    const modalEl = document.querySelector('.wp-block-ept-transform-fancy-nav .nav-content')
    const modalCloseEl = document.querySelectorAll(
        '.modal-btn-close'
    )
   
  
    openModalBtn.addEventListener('click', event => {
        if (window.innerWidth<1025){
                modalEl.classList.add('modal-show')
                document.body.style.overflow="hidden"
        }
    })
    
  
    modalCloseEl.forEach( el => {
        el.addEventListener('click', event => {
            if (window.innerWidth<1025){
                    modalEl.classList.remove('modal-show')
                    document.body.style.overflow=null
            }
        })
    }) 
    //oof
    const headers = document.querySelectorAll('.wp-block-ept-transform-fancy-nav .wp-block-ept-transform-fancy-header >a>h2')
    headers.forEach((header) => {
        if (header.innerHTML == "Home"){
            header.parentElement.href = window.location.origin;
        }
        if (document.cookie.indexOf("lang=") >= 0) {
            const langStr = document.cookie.indexOf("wp_lang=");
            if(document.cookie.substring(langStr + 8, langStr + 10)=='el'){
                //console.log(header.parentElement.href);
                console.log("x " + window.location.origin);
                switch(header.innerHTML){
                    case "Home" : 
                        header.innerHTML = 'Αρχική';
                        break;
                    case "Products" : 
                        header.innerHTML = `${(__('Προϊόντα', 'e-potis'))}`;
                        break;
                    case "Dogs" : 
                        header.innerHTML = `${(__('Σκύλος', 'e-potis'))}`;
                        break;
                    case "Cats" : 
                        header.innerHTML = `${(__('Γάτα', 'e-potis'))}`;
                        break;
                    case "About" : 
                        header.innerHTML = `${(__('Σχετικά', 'e-potis'))}`;
                        break;
                    case "Contact" : 
                        header.innerHTML = `${(__('Επικοινωνία', 'e-potis'))}`;
                        break;
                    case "Events" : 
                        header.innerHTML = `${(__('Events', 'e-potis'))}`;
                        break;
                    case "Places" : 
                        header.innerHTML = `${(__('Μαγαζιά', 'e-potis'))}`;
                        break;
                    case "Bars" : 
                        header.innerHTML = `${(__('Bars', 'e-potis'))}`;
                        break;
                    case "Clubs" : 
                        header.innerHTML = `${(__('Clubs', 'e-potis'))}`;
                        break;
                }
            }
        }
    })


})

    
