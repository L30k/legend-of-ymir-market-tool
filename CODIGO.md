# Documentação do Código - Calculadora de Lucro

Este documento explica a estrutura e funcionamento do código da calculadora.

## Arquitetura Geral

A aplicação segue o padrão de separação de responsabilidades:
- **HTML**: Estrutura e semântica
- **CSS**: Apresentação e estilos
- **JavaScript**: Lógica e interatividade

## Detalhamento dos Arquivos

### 1. `index.html` - Estrutura da Página

#### Seções Principais

**Header:**
- Título da aplicação com emoji para identificação visual
- Subtítulo explicativo

**Configurações:**
- Campos para definir taxas e valores de conversão
- Labels associados aos inputs via atributo `for` para acessibilidade
- Valores padrão pré-definidos

**Valores de Venda:**
- Campos para inserir valores a serem vendidos
- Validação via atributos HTML (`min`, `step`)

**Resultados:**
- Cards visuais para Diamantes e WEMIX
- Métricas exibidas em tempo real
- Comparação destacada com cores diferentes

**Rodapé:**
- Botão para abrir modal de explicação do cálculo
- Link para o perfil do GitHub do desenvolvedor
- Design consistente com o restante da aplicação

**Modal de Explicação:**
- Exibe fórmulas e explicações detalhadas dos cálculos
- Pode ser fechado clicando no X, fora do modal ou pressionando ESC
- Animações suaves de abertura e fechamento

#### Boas Práticas Aplicadas
- HTML semântico (`<header>`, `<main>`, `<section>`, `<footer>`, `<aside>`)
- Acessibilidade (labels associados, estrutura semântica)
- Meta tags para SEO e responsividade
- Links externos com `target="_blank"` e `rel="noopener noreferrer"` para segurança

---

### 2. `assets/css/styles.css` - Estilos

#### Organização

**Reset e Base:**
```css
* { box-sizing: border-box; }
```
- Garante que padding e border não aumentem o tamanho total

**Layout:**
- `body`: Gradiente de fundo e centralização flexível
- `container`: Card branco com sombra e bordas arredondadas
- `main`: Flexbox para organização vertical

**Componentes:**

1. **Formulários:**
   - Inputs com transição suave no foco
   - Box-shadow sutil no foco para feedback visual

2. **Resultados:**
   - Cards com borda colorida à esquerda
   - Cores diferentes para Diamantes (azul) e WEMIX (verde)

3. **Comparação:**
   - Gradientes diferentes baseados na melhor opção
   - Classes CSS para cada estado (blue, green, orange)

4. **Rodapé:**
   - Layout flexível centralizado
   - Botões com hover effect
   - Design consistente com o restante da aplicação

5. **Modal:**
   - Overlay com backdrop blur
   - Animações de fade in e slide up
   - Design responsivo para mobile
   - Fórmulas destacadas com background e borda colorida

**Responsividade:**
- Media query para telas menores que 768px
- Ajuste de tamanhos de fonte e padding

---

### 3. `assets/js/calculadora.js` - Lógica de Negócio

#### Classe `CalculadoraLucro`

**Propósito:** Encapsular toda a lógica de cálculo, seguindo o princípio de responsabilidade única.

**Propriedades:**
```javascript
this.configuracoes = {
    taxaDiamante: 23.49,
    valorRealPor1000Diamantes: 70.0,
    taxaWemix: 18.49,
    valorRealPorWemix: 0.0
}
```
- Armazena configurações em um objeto centralizado
- Facilita manutenção e extensão

**Métodos:**

1. **`atualizarConfiguracoes()`**
   - Atualiza as configurações com novos valores
   - Validação implícita (usa `|| 0` para valores inválidos)

2. **`calcularLucroDiamantes(valorVenda)`**
   - Calcula lucro líquido após aplicar taxa
   - Converte diamantes para reais
   - Retorna objeto estruturado com todos os dados

3. **`calcularLucroWemix(valorVenda)`**
   - Mesma lógica para WEMIX
   - Mantém consistência na estrutura de retorno

4. **`compararLucros(valorVendaDiamantes, valorVendaWemix)`**
   - Orquestra os cálculos de ambas as opções
   - Determina qual é mais vantajosa
   - Calcula diferença entre as opções

**Vantagens desta Abordagem:**
- Código reutilizável
- Fácil de testar
- Separação clara entre lógica e interface

---

### 4. `assets/js/main.js` - Interface e Eventos

### 5. `assets/js/footer.js` - Controle do Rodapé e Modal

### 6. `assets/js/i18n.js` - Sistema de Internacionalização

#### Classe `I18n`

**Propósito:** Gerenciar traduções e atualização dinâmica da interface.

**Propriedades:**
- `currentLang`: Idioma atual (pt-BR ou en)
- `translations`: Objeto com todas as traduções do idioma atual

**Métodos:**

1. **`loadTranslations(lang)`**
   - Carrega traduções do idioma especificado
   - Atualiza localStorage e atributo lang do HTML

2. **`t(key, params)`**
   - Retorna tradução da chave especificada
   - Suporta substituição de parâmetros (ex: `{valor}`)

3. **`setLanguage(lang)`**
   - Troca o idioma e atualiza toda a página

4. **`updatePage()`**
   - Atualiza todos os elementos com atributo `data-i18n`
   - Suporta texto, HTML e placeholders

### 7. `assets/js/init.js` - Inicialização

**Funções:**

1. **`inicializarI18n()`**
   - Carrega idioma salvo no localStorage
   - Configura eventos do switch de idioma
   - Atualiza interface com traduções

#### Organização

**Objeto `elementos`:**
```javascript
const elementos = {
    inputs: { ... },
    resultados: { ... }
}
```
- Centraliza referências ao DOM
- Facilita manutenção e evita repetição de `getElementById`

**Funções Principais:**

1. **`obterValoresDosInputs()`**
   - Lê todos os valores dos inputs
   - Converte para números (com fallback para 0)
   - Retorna objeto estruturado

2. **`atualizarConfiguracoes()`**
   - Ponte entre interface e lógica
   - Atualiza a calculadora com valores atuais

3. **`atualizarResultadosNaTela(resultado)`**
   - Renderiza resultados de diamantes e WEMIX
   - Formata números com 2 casas decimais
   - Atualiza apenas elementos necessários

4. **`atualizarComparacao(resultado)`**
   - Mostra/oculta seção de resultados
   - Determina texto e cor da comparação
   - Feedback visual claro para o usuário

5. **`calcular()`**
   - Função principal orquestradora
   - Chamada a cada mudança nos inputs
   - Atualiza tudo de forma síncrona

**Inicialização:**
```javascript
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar);
} else {
    inicializar();
}
```
- Garante que o código execute após o DOM estar pronto
- Funciona mesmo se o script carregar após o DOM

---

#### Controle do Modal

**Funções Principais:**

1. **`abrirModal()`**
   - Adiciona classe `active` ao overlay do modal
   - Bloqueia scroll do body quando modal está aberto

2. **`fecharModal()`**
   - Remove classe `active` do overlay
   - Restaura scroll do body

3. **Event Listeners:**
   - Botão "Como funciona" abre o modal
   - Botão de fechar (X) fecha o modal
   - Clicar fora do modal fecha o modal
   - Tecla ESC fecha o modal

**Vantagens:**
- Código separado e organizado
- Fácil manutenção
- Acessibilidade (suporte a teclado)

---

## Fluxo de Execução

1. **Carregamento da Página:**
   - HTML é carregado
   - CSS aplica estilos
   - JavaScript aguarda DOM pronto

2. **Inicialização:**
   - `inicializar()` é chamada
   - Event listeners são anexados aos inputs
   - Primeiro cálculo é executado

3. **Interação do Usuário:**
   - Usuário altera qualquer input
   - Evento `input` dispara
   - `calcular()` é executada

4. **Processamento:**
   - Valores são lidos dos inputs
   - Configurações são atualizadas
   - Cálculos são realizados
   - Resultados são renderizados

5. **Atualização Visual:**
   - Números são formatados
   - Seção de resultados é mostrada/ocultada
   - Comparação é atualizada com cores apropriadas

---

## Padrões de Código Aplicados

### Clean Code

1. **Nomes Descritivos:**
   - `calcularLucroDiamantes` ao invés de `calc1`
   - `atualizarResultadosNaTela` ao invés de `update`

2. **Funções Pequenas:**
   - Cada função tem uma responsabilidade única
   - Fácil de entender e testar

3. **Sem Comentários Desnecessários:**
   - Código auto-explicativo
   - Comentários apenas quando necessário

4. **Estrutura Consistente:**
   - Mesmo padrão em todos os arquivos
   - Fácil navegação

### Separação de Responsabilidades

- **HTML**: Apenas estrutura
- **CSS**: Apenas apresentação
- **JavaScript**: Apenas comportamento
- **Classe Calculadora**: Apenas lógica de negócio
- **main.js**: Apenas orquestração da interface

---

## Melhorias Futuras Possíveis

1. **Validação de Entrada:**
   - Mensagens de erro para valores inválidos
   - Validação em tempo real

2. **Persistência:**
   - Salvar configurações no localStorage
   - Restaurar valores ao recarregar

3. **Testes:**
   - Unit tests para a classe Calculadora
   - Testes de integração para a interface

4. **Performance:**
   - Debounce nos eventos de input
   - Lazy loading se necessário

5. **Acessibilidade:**
   - Suporte completo a teclado
   - Melhorias para leitores de tela

