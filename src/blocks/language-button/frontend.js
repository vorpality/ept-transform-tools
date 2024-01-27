import {useState} from '@wordpress/element'
import { createRoot } from "react-dom/client";

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.wp-block-ept-transform-language-button li.lang')
    const langCookieIndex =(document.cookie.indexOf("wp_lang="));
    let langCookie;
    if (langCookieIndex == -1)
    {
        const browser_locale = navigator.language || navigator.userLanguage;
        langCookie = browser_locale;
    }
    else {
        langCookie = document.cookie.substring(langCookieIndex + 8, langCookieIndex + 13);
        langCookie = (langCookie.slice(2, 3) == ';') ? langCookie.slice(0,2) : langCookie

    }
    const languages = [];
    let activeLanguage;


    buttons.forEach(button =>{
        if (langCookie!=button.getAttribute("slang")){
            languages.push({"name":button.getAttribute("name"), "slang":button.getAttribute("slang")});
        }
        else {
            activeLanguage={"name":button.getAttribute("name"), "slang":button.getAttribute("slang")}
        }
        
    })
    const rootEl = document.querySelector('.wp-block-ept-transform-language-button');
    const root = createRoot(rootEl)
    root.render(
        <LanguageButtons 
            langs={languages}
            activeLang={activeLanguage}
        />
    )
})



  
  

    
function LanguageButtons({langs, activeLang}){
const [allButActive, setAll] = useState(langs);
const [active, setActive] = useState(activeLang);


    const rest = [];
    allButActive.forEach(lang => {
        rest.push(
            <li key = {lang.name}>
                <form method="post"
                >
                <input type="hidden" name="locale" value = {lang.slang}></input>
                <input type="hidden" name="form-id" value ="021"></input>
                <input
                type="submit"
                className='button-element'
                value={lang.name} 
                onClick = {() =>{
                    
                    const temp = [...allButActive, active];
                    temp.splice(temp.indexOf(lang),1);
                    setActive(lang)
                    setAll(temp)
                    var expires = new Date();
                    expires.setMonth(expires.getMonth() + 12);
                    document.cookie = 'wp_lang='+lang.slang+';expires='+expires+';path=/'
                    location.reload();
                }}
                ></input>
                </form>
            </li>
        )
    
    })
    return (
        <>
        <i className="bi bi-globe globe"></i>
        <div className="language-dropdown">
            <div className = "dropbtn">
                
                <button>  {active.name} </button>
            </div>
            <div className = "dropdown-content">
                <ul className="elements">
                {rest}
                </ul> 
            </div>
        </div>
    </>
    )
    
}

function home_url(s){
    return ('//petkarellas.local'+s);
}