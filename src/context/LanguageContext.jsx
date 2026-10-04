import { createContext, useContext, useState, useEffect } from 'react';
import { language } from '../data/changeLanguage';


const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(() => {
        return localStorage.getItem('language') || 'EN';
    });

    const t = (key) => {
        return language[lang]?.[key] || key;
    };

    const changeLanguage = (newLang) => {
        setLang(newLang);
    };

    useEffect(() => {
        localStorage.setItem('language', lang);
        
        if (lang === 'FA' || lang === 'AR') {
            document.body.dir = 'rtl';
        } else {
            document.body.dir = 'ltr';
        }
    }, [lang]);

    return (
        <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}