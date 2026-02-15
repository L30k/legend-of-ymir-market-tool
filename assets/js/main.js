const calculadora = new CalculadoraLucro();

const elementos = {
    inputs: {
        taxaDiamante: document.getElementById('taxaDiamante'),
        valorDiamante: document.getElementById('valorDiamante'),
        taxaWemix: document.getElementById('taxaWemix'),
        valorWemix: document.getElementById('valorWemix'),
        vendaDiamante: document.getElementById('vendaDiamante'),
        vendaWemix: document.getElementById('vendaWemix')
    },
    resultados: {
        container: document.getElementById('results'),
        diamantesLiquidos: document.getElementById('diamantesLiquidos'),
        diamantesReal: document.getElementById('diamantesReal'),
        diamantesTaxa: document.getElementById('diamantesTaxa'),
        wemixLiquidos: document.getElementById('wemixLiquidos'),
        wemixReal: document.getElementById('wemixReal'),
        wemixTaxa: document.getElementById('wemixTaxa'),
        comparacao: document.getElementById('comparison')
    }
};

function obterValoresDosInputs() {
    return {
        taxaDiamante: parseFloat(elementos.inputs.taxaDiamante.value) || 0,
        valorDiamante: parseFloat(elementos.inputs.valorDiamante.value) || 0,
        taxaWemix: parseFloat(elementos.inputs.taxaWemix.value) || 0,
        valorWemix: parseFloat(elementos.inputs.valorWemix.value) || 0,
        vendaDiamante: parseFloat(elementos.inputs.vendaDiamante.value) || 0,
        vendaWemix: parseFloat(elementos.inputs.vendaWemix.value) || 0
    };
}

function atualizarConfiguracoes() {
    const valores = obterValoresDosInputs();
    calculadora.atualizarConfiguracoes(
        valores.taxaDiamante,
        valores.valorDiamante,
        valores.taxaWemix,
        valores.valorWemix
    );
}

function atualizarResultadosNaTela(resultado) {
    elementos.resultados.diamantesLiquidos.textContent = 
        resultado.diamantes.diamantesLiquidos.toFixed(2);
    
    elementos.resultados.diamantesReal.textContent = 
        resultado.diamantes.valorReal.toFixed(2);
    
    elementos.resultados.diamantesTaxa.textContent = 
        resultado.diamantes.taxaAplicada.toFixed(2);

    elementos.resultados.wemixLiquidos.textContent = 
        resultado.wemix.wemixLiquidos.toFixed(2);
    
    elementos.resultados.wemixReal.textContent = 
        resultado.wemix.valorReal.toFixed(2);
    
    elementos.resultados.wemixTaxa.textContent = 
        resultado.wemix.taxaAplicada.toFixed(2);
}

function atualizarComparacao(resultado) {
    const valores = obterValoresDosInputs();
    const temResultados = resultado.diamantes.valorReal > 0 || resultado.wemix.valorReal > 0;

    const comparacaoCard = elementos.resultados.comparacao;
    const comparacaoContent = comparacaoCard.querySelector('.comparison-content');
    
    if (!temResultados) {
        elementos.resultados.container.style.display = 'none';
        comparacaoCard.className = 'comparison-card';
        const emptyText = window.i18n ? window.i18n.t('comparison.empty') : 'Insira valores de venda para ver a comparação';
        comparacaoContent.innerHTML = `
            <div class="comparison-icon">📊</div>
            <div class="comparison-text">${emptyText}</div>
        `;
        return;
    }

    elementos.resultados.container.style.display = 'grid';
    comparacaoCard.classList.add('comparison-active');

    let textoComparacao = '';
    let classeCss = '';
    let icon = '';

    const t = window.i18n ? window.i18n.t.bind(window.i18n) : (key) => key;

    if (resultado.melhorOpcao === 'diamantes') {
        const diferenca = t('comparison.diferenca', { valor: resultado.diferenca.toFixed(2) });
        textoComparacao = `${t('comparison.melhorDiamantes')}<br><small>${diferenca}</small>`;
        classeCss = '';
        icon = '💎';
    } else if (resultado.melhorOpcao === 'wemix') {
        const diferenca = t('comparison.diferenca', { valor: resultado.diferenca.toFixed(2) });
        textoComparacao = `${t('comparison.melhorWemix')}<br><small>${diferenca}</small>`;
        classeCss = 'comparison-green';
        icon = '🪙';
    } else {
        textoComparacao = t('comparison.empate');
        classeCss = 'comparison-orange';
        icon = '⚖️';
    }

    comparacaoCard.className = 'comparison-card comparison-active ' + classeCss;
    comparacaoContent.innerHTML = `
        <div class="comparison-icon">${icon}</div>
        <div class="comparison-text">${textoComparacao}</div>
    `;
}

function calcular() {
    atualizarConfiguracoes();
    
    const valores = obterValoresDosInputs();
    const resultado = calculadora.compararLucros(
        valores.vendaDiamante,
        valores.vendaWemix
    );

    atualizarResultadosNaTela(resultado);
    atualizarComparacao(resultado);
}

function inicializarEventListeners() {
    Object.values(elementos.inputs).forEach(input => {
        input.addEventListener('input', calcular);
    });
}

function inicializar() {
    inicializarEventListeners();
    calcular();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar);
} else {
    inicializar();
}

