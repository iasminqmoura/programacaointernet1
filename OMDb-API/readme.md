# Classificação de Episódios de Episódios

## Descrição

Esta aplicação web foi desenvolvida utilizando HTML, CSS e JavaScript puro, com o objetivo de consumir a API do OMDb e exibir a classificação (rating) dos episódios de uma série de TV.

Os dados são organizados em formato matricial, onde cada linha representa uma temporada e cada coluna representa um episódio, permitindo uma visualização estruturada e intuitiva das avaliações.

---

## Funcionalidades

- Busca de séries por nome
- Execução da busca por botão ou tecla Enter
- Exibição de informações da série:
  - Nome
  - Poster
  - Ano de lançamento
  - Número de temporadas
  - Nota geral do IMDb
- Exibição dos episódios organizados por temporada
- Classificação dos episódios por cores:
  - Verde para notas altas
  - Amarelo para notas médias
  - Vermelho para notas baixas
- Exibição do título do episódio ao passar o mouse
- Efeito visual interativo nos episódios (hover)
- Layout responsivo com quebra automática de linha para temporadas extensas

---

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Fetch API
- OMDb API

---

## Funcionamento

A aplicação realiza requisições à API do OMDb em duas etapas:

1. Uma requisição inicial para obter os dados gerais da série
2. Requisições adicionais para cada temporada, retornando a lista de episódios e seus respectivos ratings

Os dados são recebidos no formato JSON e utilizados para gerar dinamicamente os elementos da interface por meio da manipulação do DOM.

---

## Como executar o projeto

1. Baixe ou clone os arquivos do projeto
2. Certifique-se de que todos os arquivos estejam na mesma pasta:
   - index.html
   - style.css
   - script.js
   - cinema.svg
3. Abra o arquivo `index.html` em um navegador

Não é necessário instalar dependências ou utilizar servidor local.

---

## API Key

Para o funcionamento da aplicação, é necessário utilizar uma chave da OMDb API.

A chave pode ser obtida gratuitamente em:
https://www.omdbapi.com/apikey.aspx

Após gerar a chave, ela deve ser inserida no arquivo `script.js`:

```javascript
const API_KEY = "SUA_CHAVE_AQUI";
```

---

## Estrutura do projeto

```
projeto/
│
├── index.html
├── style.css
├── script.js
└── cinema.svg
```

---

## Objetivo

Este projeto foi desenvolvido com o objetivo de aplicar conceitos fundamentais de desenvolvimento web, incluindo:

- Consumo de APIs REST
- Manipulação do DOM com JavaScript puro
- Estruturação e exibição de dados em formato matricial
- Organização e separação de responsabilidades entre HTML, CSS e JavaScript