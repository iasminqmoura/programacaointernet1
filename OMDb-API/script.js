const API_KEY = "3399b77d";

const seriesInput = document.getElementById("seriesInput");
const searchButton = document.getElementById("searchButton");
const seriesHeader = document.getElementById("seriesHeader");
const episodesMatrix = document.getElementById("episodesMatrix");

searchButton.addEventListener("click", buscarSerie);

/* 🔥 ENTER funcionando */
seriesInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    buscarSerie();
  }
});

async function buscarSerie() {
  const seriesName = seriesInput.value.trim();

  if (!seriesName) {
    alert("Digite o nome da série.");
    return;
  }

  seriesHeader.innerHTML = "";
  episodesMatrix.innerHTML = "Carregando...";

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&t=${seriesName}&type=series`
    );

    const data = await response.json();

    if (data.Response === "False") {
      episodesMatrix.innerHTML = `<p class="error">Série não encontrada.</p>`;
      return;
    }

    mostrarCabecalho(data);
    await criarMatriz(data.Title, Number(data.totalSeasons));

  } catch (erro) {
    episodesMatrix.innerHTML = `<p class="error">Erro na API.</p>`;
    console.error(erro);
  }
}

function mostrarCabecalho(data) {
  seriesHeader.innerHTML = `
    <img src="${data.Poster}" alt="Poster">
    <div class="series-info">
      <h2>${data.Title}</h2>
      <p>Ano: ${data.Year}</p>
      <p>Temporadas: ${data.totalSeasons}</p>
      <p>IMDb: ${data.imdbRating}</p>
    </div>
  `;
}

async function criarMatriz(title, totalSeasons) {
  episodesMatrix.innerHTML = "";

  for (let season = 1; season <= totalSeasons; season++) {

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&t=${title}&Season=${season}`
    );

    const seasonData = await response.json();

    if (!seasonData.Episodes) continue;

    const row = document.createElement("div");
    row.classList.add("season-row");

    const label = document.createElement("div");
    label.classList.add("season-label");
    label.textContent = `Temp ${season}`;

    row.appendChild(label);

    /* 🔥 container que quebra linha */
    const episodesList = document.createElement("div");
    episodesList.classList.add("episodes-list");

    seasonData.Episodes.forEach(ep => {
      const cell = document.createElement("div");
      cell.classList.add("episode-cell");

      const rating = ep.imdbRating;

      cell.textContent = rating !== "N/A" ? rating : "-";
      cell.title = ep.Title;

      colorir(cell, rating);

      episodesList.appendChild(cell);
    });

    row.appendChild(episodesList);
    episodesMatrix.appendChild(row);
  }
}

function colorir(cell, rating) {
  const r = Number(rating);

  if (isNaN(r)) return;

  if (r >= 8) cell.classList.add("rating-high");
  else if (r >= 6) cell.classList.add("rating-medium");
  else cell.classList.add("rating-low");
}