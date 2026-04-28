const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");
const clearButton = document.querySelector("#clearButton");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

addButton.addEventListener("click", adicionarTarefa);

taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    adicionarTarefa();
  }
});

clearButton.addEventListener("click", function() {
  const confirmar = confirm("Tem certeza que deseja limpar toda a lista?");

  if (confirmar) {
    const itens = document.querySelectorAll("#taskList li");

    itens.forEach(function(item) {
      item.classList.add("fade-out");
    });

    setTimeout(function() {
      tarefas = [];
      salvarTarefas();
      mostrarTarefas();
    }, 300);
  }
});

function salvarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function adicionarTarefa() {
  const texto = taskInput.value.trim();

  if (texto === "") {
    alert("Digite uma tarefa antes de adicionar.");
    return;
  }

  const novaTarefa = {
    texto: texto,
    concluida: false
  };

  tarefas.push(novaTarefa);
  salvarTarefas();
  mostrarTarefas();

  taskInput.value = "";
  taskInput.focus();
}

function mostrarTarefas() {
  taskList.innerHTML = "";

  tarefas.forEach(function(tarefa, index) {
    const li = document.createElement("li");

    if (tarefa.concluida) {
      li.classList.add("completed");
    }

    const span = document.createElement("span");
    span.textContent = tarefa.texto;
    span.classList.add("task-text");

    const buttonsArea = document.createElement("div");
    buttonsArea.classList.add("buttons-area");

    const completeButton = document.createElement("button");
    completeButton.classList.add("icon-button");

    const checkIcon = document.createElement("img");
    checkIcon.src = "check.png";
    checkIcon.alt = "Concluir";

    completeButton.appendChild(checkIcon);

    completeButton.addEventListener("click", function() {
      tarefas[index].concluida = !tarefas[index].concluida;
      salvarTarefas();
      mostrarTarefas();
    });

    const removeButton = document.createElement("button");
    removeButton.classList.add("icon-button");

    const trashIcon = document.createElement("img");
    trashIcon.src = "trash.png";
    trashIcon.alt = "Remover";

    removeButton.appendChild(trashIcon);

    removeButton.addEventListener("click", function() {
      li.classList.add("fade-out");

      setTimeout(function() {
        tarefas.splice(index, 1);
        salvarTarefas();
        mostrarTarefas();
      }, 300);
    });

    buttonsArea.appendChild(completeButton);
    buttonsArea.appendChild(removeButton);

    li.appendChild(span);
    li.appendChild(buttonsArea);

    taskList.appendChild(li);
  });

  if (tarefas.length > 0) {
    clearButton.style.display = "block";
  } else {
    clearButton.style.display = "none";
  }
}

mostrarTarefas();