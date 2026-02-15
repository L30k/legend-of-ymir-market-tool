function inicializarI18n() {
    const lang = localStorage.getItem('lang') || 'pt-BR';
    i18n.loadTranslations(lang);
    i18n.updatePage();
    
    const langToggle = document.getElementById('langToggle');
    
    if (langToggle) {
        langToggle.checked = lang === 'en';
        
        langToggle.addEventListener('change', () => {
            const newLang = langToggle.checked ? 'en' : 'pt-BR';
            i18n.setLanguage(newLang);
            if (typeof calcular === 'function') {
                calcular();
            }
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarI18n);
} else {
    inicializarI18n();
}

window.i18n = i18n;
