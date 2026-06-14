# 🎮 PlayStation Retro Store - Angular 21+

Este é um projeto desenvolvido como parte da formação em **Angular**, com o objetivo de criar uma loja virtual temática de jogos clássicos retrô (estilo PlayStation Store) com interface moderna e design **Retro Dark**. 

O foco principal do projeto é a **aprendizagem prática de componentização modular**, **fluxo de dados unidirecional** e **reatividade** com o Angular moderno.

---

## 📹 Demonstração do Projeto em Ação

Veja abaixo a demonstração em GIF mostrando o funcionamento do site, a estilização Retro Dark e a navegação dinâmica dos cards em ação:

![Demonstração do Projeto](./public/public_screen-capture.gif)

---

## 🎯 Objetivos de Aprendizado e Arquitetura

### 1. Componentização Avançada
O projeto divide a interface em componentes especializados e independentes, organizados na seguinte hierarquia:

* **`MenuBar`** ([menu-bar.ts](src/app/components/menu-bar/menu-bar.ts)): Menu fixo no topo com estilização *glassmorphism* escura e links pixelados 8-bit com efeito neon ciano no hover.
* **`Home`** ([home.ts](src/app/pages/home/home.ts)): Página principal responsável pelo estado e a lista de jogos cadastrados (armazenados reativamente com `signal`).
* **`Card`** ([card.ts](src/app/components/card/card.ts)): Componente intermediário que recebe todos os dados de um jogo e distribui para seus subcomponentes. O card funciona como um link direto para a ROM do jogo.
* **`CardLabel`** ([card-label.ts](src/app/components/card/card-label/card-label.ts)): Tarja promocional com gradiente moderno que destaca a versão ou edição do game.
* **`CardPricing`** ([card-pricing.ts](src/app/components/card/card-pricing/card-pricing.ts)): Exibe de forma organizada a plataforma do game retrô (ex: `SNES`) e o valor ou link de download da ROM em destaque verde neon.

### 2. Fluxo de Dados e Reatividade (Signals)
* **Property Binding (`[]`):** Passagem dinâmica de dados do componente pai (`Home`) para o filho (`Card`) e netos (`CardLabel`/`CardPricing`) usando `@Input()`.
* **Angular Signals:** Utilização de `signal()` para armazenar o array de dados dos jogos, garantindo que o Angular reaja apenas a mudanças pontuais no estado de maneira altamente performática.
* **Modern Control Flow (`@for` e `@if`):** Utilização das estruturas nativas do Angular 17+ para listagem dinâmica de cards (`@for` com otimização `track`) e exibição condicional das tarjas promocionais (`@if`).

---

## 🚀 Como Rodar o Projeto Localmente

1. **Instalar Dependências:**
   ```bash
   npm install
   ```

2. **Iniciar Servidor de Desenvolvimento:**
   ```bash
   npm run start
   ```
   Acesse a aplicação em `http://localhost:4200/`.

3. **Compilar para Produção (Build):**
   ```bash
   npm run build
   ```
