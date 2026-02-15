# Calculadora de Lucro - Versão Web

Versão web da calculadora de lucro para comparar vendas em Diamantes e WEMIX.

## Estrutura do Projeto

```
src/
├── index.html                 # Página principal HTML
├── assets/
│   ├── css/
│   │   └── styles.css        # Estilos CSS da aplicação
│   └── js/
│       ├── calculadora.js    # Classe de lógica de cálculo
│       ├── main.js           # Lógica de interface e eventos
│       ├── footer.js         # Controle do rodapé e modal de explicação
│       ├── i18n.js           # Sistema de internacionalização
│       └── init.js           # Inicialização do i18n e seletor de idioma
└── README.md                  # Este arquivo
```

## Arquitetura

### HTML (`index.html`)
- Estrutura semântica da página
- Separação clara de seções (configurações, vendas, resultados)
- Acessibilidade com atributos ARIA

### CSS (`assets/css/styles.css`)
- Estilos organizados por componentes
- Design responsivo para mobile
- Variáveis de cores para fácil manutenção

### JavaScript

#### `calculadora.js`
Classe `CalculadoraLucro` responsável por:
- Armazenar configurações (taxas e valores de conversão)
- Calcular lucro líquido em diamantes
- Calcular lucro líquido em WEMIX
- Comparar ambas as opções e determinar a melhor

#### `main.js`
Lógica de interface responsável por:
- Gerenciar eventos dos inputs
- Atualizar a calculadora com novos valores
- Renderizar resultados na tela
- Exibir comparação entre opções

#### `footer.js`
Controle do rodapé e modal responsável por:
- Gerenciar abertura e fechamento do modal de explicação
- Controlar eventos do rodapé (botão de explicação e link do GitHub)
- Fechar modal ao pressionar ESC ou clicar fora

#### `i18n.js`
Sistema de internacionalização responsável por:
- Gerenciar traduções em português e inglês
- Atualizar textos da interface dinamicamente
- Persistir preferência de idioma no localStorage

#### `init.js`
Inicialização do sistema responsável por:
- Carregar traduções do idioma salvo
- Configurar seletor de idioma (switch)
- Atualizar interface ao trocar idioma

## Como Funciona

1. **Configurações**: Usuário define taxas e valores de conversão
2. **Valores de Venda**: Usuário insere valores a serem vendidos
3. **Cálculo Automático**: A cada mudança, os cálculos são atualizados
4. **Resultados**: Exibe lucros líquidos e valores em real
5. **Comparação**: Mostra qual opção é mais vantajosa

## Funcionalidades

- **Cálculo Automático**: Atualização em tempo real conforme os valores são inseridos
- **Comparação Visual**: Destaque da melhor opção com cores diferentes
- **Modal de Explicação**: Botão no rodapé que explica como funciona o cálculo
- **Link para GitHub**: Acesso direto ao perfil do desenvolvedor
- **Internacionalização (i18n)**: Suporte a português e inglês com switch de idioma
- **Design Responsivo**: Funciona perfeitamente em dispositivos móveis

## Publicação no GitHub Pages

1. Faça commit dos arquivos na pasta `src/`
2. Configure GitHub Pages para apontar para a pasta `src/`
3. Ou mova os arquivos para a raiz do repositório

