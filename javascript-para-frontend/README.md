# JavaScript para Frontend

## Objetivo do projeto

Este projeto tem como objetivo praticar conceitos fundamentais de JavaScript no frontend, com foco na manipulação do DOM e na criação de interações dinâmicas na página.

A atividade reúne cinco exercícios que exploram diferentes formas de interação com o usuário, utilizando apenas HTML, CSS e JavaScript puro.

---

## Tecnologias utilizadas

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)

---

## Estrutura do projeto

O projeto está organizado da seguinte forma:

/index.html  
/style.css  
/script.js  
/README.md  

---

## Descrição dos exercícios

### Manipulação básica do DOM

Neste exercício, foi feita a alteração do conteúdo de um título e de um parágrafo ao clicar em um botão.

Foram utilizados:
- `querySelector` para selecionar os elementos  
- `textContent` para atualizar o conteúdo  
- `addEventListener` para capturar o clique  

---

### Alternar classe CSS

Foi implementada a alternância de uma classe em um elemento ao clicar em um botão.

Foram utilizados:
- `classList.toggle` para adicionar e remover a classe  
- Estilização condicional no CSS  

---

### Lista dinâmica

Neste exercício, foi criada uma lista onde novos itens são adicionados a partir de um campo de texto.

Foram utilizados:
- `document.createElement` para criar novos elementos  
- `appendChild` para inserir na lista  
- Validação para evitar entradas vazias  

---

### Contador interativo

Foi desenvolvido um contador que pode ser incrementado e decrementado por meio de botões.

Foram utilizados:
- Variável para armazenar o valor do contador  
- Atualização do DOM a cada interação  
- Eventos de clique com `addEventListener`  

---

### Interação com múltiplos elementos

Neste exercício, foi implementado um sistema de seleção entre múltiplos cards.

Ao clicar em um card:
- Ele recebe uma classe de destaque  
- Os demais perdem essa classe  
- É possível clicar novamente para remover o destaque  

Foram utilizados:
- `querySelectorAll` para selecionar todos os cards  
- Iteração sobre os elementos  
- Manipulação dinâmica de classes  

---

## Boas práticas aplicadas

- Separação de arquivos (HTML, CSS e JavaScript)  
- Uso de `box-sizing: border-box`  
- Reset básico de CSS  
- Classes com nomes claros e semânticos  
- Código organizado e bem indentado  
- Uso de JavaScript puro, sem bibliotecas externas  

---

## Considerações finais

O projeto atende aos requisitos propostos e demonstra, na prática, o uso de JavaScript para manipulação do DOM e criação de interações na interface.

A implementação buscou manter o código simples, organizado e fácil de entender, servindo como base para estudos futuros em desenvolvimento frontend.