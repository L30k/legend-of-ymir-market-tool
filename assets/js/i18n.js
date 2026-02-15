const translationsData = {
    'pt-BR': {
        'app.title': 'Calculadora de Lucro - yMir',
        'app.subtitle': 'Compare lucros entre vendas em Diamantes e WEMIX',
        'config.title': 'Configurações',
        'config.taxaDiamante': 'Taxa Diamantes',
        'config.valorDiamante': 'Valor por 1000 Diamantes',
        'config.taxaWemix': 'Taxa WEMIX',
        'config.valorWemix': 'Valor por WEMIX',
        'venda.title': 'Valores de Venda',
        'venda.diamante': 'Venda em Diamantes',
        'venda.wemix': 'Venda em WEMIX',
        'result.diamantes': 'Diamantes',
        'result.diamantesLiquidos': 'Diamantes Líquidos',
        'result.valorReal': 'Valor em Real',
        'result.taxaAplicada': 'Taxa Aplicada',
        'result.wemix': 'WEMIX',
        'result.wemixLiquidos': 'WEMIX Líquidos',
        'comparison.empty': 'Insira valores de venda para ver a comparação',
        'comparison.melhorDiamantes': 'Melhor opção: DIAMANTES',
        'comparison.melhorWemix': 'Melhor opção: WEMIX',
        'comparison.empate': 'Empate: Ambas as opções têm o mesmo lucro',
        'comparison.diferenca': 'Diferença: R$ {valor} a mais',
        'footer.comoFunciona': 'Como funciona o cálculo',
        'footer.github': 'GitHub',
        'modal.title': 'Como funciona o cálculo',
        'modal.diamantes.title': 'Cálculo para Diamantes',
        'modal.diamantes.passo1': 'Primeiro, aplicamos a taxa de desconto:',
        'modal.diamantes.formula1': 'Diamantes Líquidos = Valor de Venda × (1 - Taxa ÷ 100)',
        'modal.diamantes.passo2': 'Depois, convertemos para reais:',
        'modal.diamantes.formula2': 'Valor em R$ = (Diamantes Líquidos ÷ 1000) × Valor por 1000 Diamantes',
        'modal.wemix.title': 'Cálculo para WEMIX',
        'modal.wemix.passo1': 'Primeiro, aplicamos a taxa de desconto:',
        'modal.wemix.formula1': 'WEMIX Líquidos = Valor de Venda × (1 - Taxa ÷ 100)',
        'modal.wemix.passo2': 'Depois, convertemos para reais:',
        'modal.wemix.formula2': 'Valor em R$ = WEMIX Líquidos × Valor por WEMIX',
        'modal.comparacao.title': 'Comparação',
        'modal.comparacao.texto': 'A calculadora compara os valores em reais de ambas as opções e mostra qual é mais vantajosa, exibindo também a diferença entre elas.'
    },
    'en': {
        'app.title': 'Profit Calculator - yMir',
        'app.subtitle': 'Compare profits between Diamond and WEMIX sales',
        'config.title': 'Settings',
        'config.taxaDiamante': 'Diamond Rate',
        'config.valorDiamante': 'Value per 1000 Diamonds',
        'config.taxaWemix': 'WEMIX Rate',
        'config.valorWemix': 'Value per WEMIX',
        'venda.title': 'Sale Values',
        'venda.diamante': 'Sale in Diamonds',
        'venda.wemix': 'Sale in WEMIX',
        'result.diamantes': 'Diamonds',
        'result.diamantesLiquidos': 'Net Diamonds',
        'result.valorReal': 'Value in Real',
        'result.taxaAplicada': 'Applied Rate',
        'result.wemix': 'WEMIX',
        'result.wemixLiquidos': 'Net WEMIX',
        'comparison.empty': 'Enter sale values to see the comparison',
        'comparison.melhorDiamantes': 'Best option: DIAMONDS',
        'comparison.melhorWemix': 'Best option: WEMIX',
        'comparison.empate': 'Tie: Both options have the same profit',
        'comparison.diferenca': 'Difference: R$ {valor} more',
        'footer.comoFunciona': 'How the calculation works',
        'footer.github': 'GitHub',
        'modal.title': 'How the calculation works',
        'modal.diamantes.title': 'Diamond Calculation',
        'modal.diamantes.passo1': 'First, we apply the discount rate:',
        'modal.diamantes.formula1': 'Net Diamonds = Sale Value × (1 - Rate ÷ 100)',
        'modal.diamantes.passo2': 'Then, we convert to reais:',
        'modal.diamantes.formula2': 'Value in R$ = (Net Diamonds ÷ 1000) × Value per 1000 Diamonds',
        'modal.wemix.title': 'WEMIX Calculation',
        'modal.wemix.passo1': 'First, we apply the discount rate:',
        'modal.wemix.formula1': 'Net WEMIX = Sale Value × (1 - Rate ÷ 100)',
        'modal.wemix.passo2': 'Then, we convert to reais:',
        'modal.wemix.formula2': 'Value in R$ = Net WEMIX × Value per WEMIX',
        'modal.comparacao.title': 'Comparison',
        'modal.comparacao.texto': 'The calculator compares the values in reais of both options and shows which is more advantageous, also displaying the difference between them.'
    }
};

class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('lang') || 'pt-BR';
        this.translations = translationsData[this.currentLang] || translationsData['pt-BR'];
    }

    loadTranslations(lang) {
        this.translations = translationsData[lang] || translationsData['pt-BR'];
        this.currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
    }

    t(key, params = {}) {
        let translation = this.translations[key] || key;
        
        if (Object.keys(params).length > 0) {
            Object.keys(params).forEach(param => {
                translation = translation.replace(`{${param}}`, params[param]);
            });
        }
        
        return translation;
    }

    setLanguage(lang) {
        this.loadTranslations(lang);
        this.updatePage();
    }

    updatePage() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            if (element.tagName === 'INPUT' && element.type !== 'submit' && element.type !== 'button') {
                element.placeholder = translation;
            } else if (element.hasAttribute('data-i18n-html')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        });

        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            element.title = this.t(key);
        });

        document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
            const key = element.getAttribute('data-i18n-aria-label');
            element.setAttribute('aria-label', this.t(key));
        });
    }

    getCurrentLang() {
        return this.currentLang;
    }
}

const i18n = new I18n();
window.i18n = i18n;
