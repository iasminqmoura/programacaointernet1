# Layout Web Responsivo

## Objetivo do projeto

Este projeto tem como objetivo desenvolver uma página web totalmente responsiva, aplicando os conceitos de viewport, media queries, breakpoints, CSS Flexbox e CSS Grid.

A proposta consiste na criação de uma página institucional capaz de se adaptar a diferentes tamanhos de tela (desktop, tablet e mobile), mantendo organização, legibilidade e boas práticas de desenvolvimento.

---

## Tecnologias utilizadas

- HTML5  
- CSS3 (Flexbox e Grid)

---

## Estrutura do projeto

O projeto é composto pelos seguintes arquivos:

/index.html  
/style.css  
/README.md  

---

## Estrutura da página

A página foi organizada com os seguintes elementos:

- Header  
  Contém a logo do IFTM posicionada à esquerda e o menu de navegação à direita.

- Seção principal  
  Inclui uma área de apresentação (hero), uma seção informativa e uma seção com cards.

- Cards informativos  
  Foram criados seis cards com conteúdos relacionados aos conceitos utilizados no projeto.

- Footer  
  Contém um texto simples de rodapé.

---

## Estratégia de responsividade adotada

Foi adotada uma abordagem responsiva baseada na adaptação progressiva do layout conforme a redução da largura da tela.

No layout desktop:
- Utilização de CSS Grid para estrutura principal  
- Cards organizados em múltiplas colunas  
- Menu de navegação em formato horizontal  

No layout tablet:
- Redução do número de colunas dos cards  
- Ajustes de espaçamento e alinhamento  
- Centralização de elementos no header  

No layout mobile:
- Menu de navegação disposto em coluna  
- Cards empilhados verticalmente  
- Conteúdo centralizado e com melhor legibilidade  

---

## Breakpoints utilizados

Foram definidos dois breakpoints principais:

@media (max-width: 900px)  
Utilizado para tablets, reduzindo o número de colunas e ajustando a organização geral da página.

@media (max-width: 600px)  
Utilizado para dispositivos móveis, reorganizando completamente o layout para uma única coluna e adaptando o menu de navegação.

---

## Uso de Flexbox e Grid

- CSS Grid foi utilizado na estrutura principal da página e na organização dos cards.  
- Flexbox foi aplicado no menu de navegação e no alinhamento interno dos elementos, como nos cards.

---

## Boas práticas aplicadas

- Utilização de CSS externo  
- Aplicação de reset de CSS  
- Uso de box-sizing: border-box  
- Classes com nomes semânticos  
- Código bem indentado e organizado  
- Evita o uso excessivo de valores fixos  

---

## Considerações finais

O projeto atende aos requisitos propostos, demonstrando a aplicação correta de técnicas modernas de layout com HTML e CSS, com foco em responsividade, organização e clareza visual.