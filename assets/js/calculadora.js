class CalculadoraLucro {
    constructor() {
        this.configuracoes = {
            taxaDiamante: 23.49,
            valorRealPor1000Diamantes: 70.0,
            taxaWemix: 18.49,
            valorRealPorWemix: 0.0
        };
    }

    atualizarConfiguracoes(taxaDiamante, valorDiamante, taxaWemix, valorWemix) {
        this.configuracoes.taxaDiamante = taxaDiamante || 0;
        this.configuracoes.valorRealPor1000Diamantes = valorDiamante || 0;
        this.configuracoes.taxaWemix = taxaWemix || 0;
        this.configuracoes.valorRealPorWemix = valorWemix || 0;
    }

    calcularLucroDiamantes(valorVenda) {
        if (valorVenda <= 0) {
            return {
                diamantesLiquidos: 0,
                valorReal: 0,
                taxaAplicada: this.configuracoes.taxaDiamante
            };
        }

        const taxaDecimal = this.configuracoes.taxaDiamante / 100;
        const diamantesLiquidos = valorVenda * (1 - taxaDecimal);
        const valorReal = (diamantesLiquidos / 1000) * this.configuracoes.valorRealPor1000Diamantes;

        return {
            diamantesLiquidos: diamantesLiquidos,
            valorReal: valorReal,
            taxaAplicada: this.configuracoes.taxaDiamante
        };
    }

    calcularLucroWemix(valorVenda) {
        if (valorVenda <= 0) {
            return {
                wemixLiquidos: 0,
                valorReal: 0,
                taxaAplicada: this.configuracoes.taxaWemix
            };
        }

        const taxaDecimal = this.configuracoes.taxaWemix / 100;
        const wemixLiquidos = valorVenda * (1 - taxaDecimal);
        const valorReal = wemixLiquidos * this.configuracoes.valorRealPorWemix;

        return {
            wemixLiquidos: wemixLiquidos,
            valorReal: valorReal,
            taxaAplicada: this.configuracoes.taxaWemix
        };
    }

    compararLucros(valorVendaDiamantes, valorVendaWemix) {
        const resultadoDiamantes = this.calcularLucroDiamantes(valorVendaDiamantes);
        const resultadoWemix = this.calcularLucroWemix(valorVendaWemix);

        let melhorOpcao = 'empate';
        let diferenca = 0;

        if (resultadoDiamantes.valorReal > resultadoWemix.valorReal) {
            melhorOpcao = 'diamantes';
            diferenca = resultadoDiamantes.valorReal - resultadoWemix.valorReal;
        } else if (resultadoWemix.valorReal > resultadoDiamantes.valorReal) {
            melhorOpcao = 'wemix';
            diferenca = resultadoWemix.valorReal - resultadoDiamantes.valorReal;
        }

        return {
            diamantes: resultadoDiamantes,
            wemix: resultadoWemix,
            melhorOpcao: melhorOpcao,
            diferenca: diferenca
        };
    }
}
