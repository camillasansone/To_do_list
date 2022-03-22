var newtask;
var toDo;
var listaUL;
var seltask;
var tasksList = JSON.parse(localStorage.getItem("Lista"))
  ? JSON.parse(localStorage.getItem("Lista"))
  : [];
// dichiara le variabili
window.addEventListener("load", init);
// al caricamento della pagina chiama la funzione init
function init() {
  newtask = document.querySelector("#aggiungi");
  toDo = document.querySelector("#toDo");
  listaUL = document.querySelector("#lista");
  // aggancia alle variabili gli oggetti html
  newtask.addEventListener("click", addTask);
  // si mette in ascolto in attesa di un evento click sul bottone
  // quando avviene il click chiama addtask
  buildList();
}

function addTask() {
  tasksList.push(toDo.value);
  // inserisce nell'array tasklist il valore scritto nell'input
  // chiama le 2 funzioni sotto
  buildList();
  clearForms();
}

function buildList() {
  var list = "";
  // pulisce la stringa
  for (var i = 0; i < tasksList.length; i++) {
    // fa il ciclo sull'array ottenuto sopra
    list +=
      '<li class="list-group-item">' +
      tasksList[i] +
      '<span class="btn-close float-end" onclick="seltask = this.parentNode.textContent; elimina();"></span></li>';
  }
  // inserisce l'html nella pagina
  listaUL.innerHTML = list;
  localStorage.setItem("Lista", JSON.stringify(tasksList));
}

function elimina() {
    for(let n = 0; n < tasksList.length; n++) {
        if (tasksList[n] === seltask) {
            tasksList.splice(n, 1);
            break;
        };       
    }
  buildList();
}

function clearForms() {
    toDo.value = ""; // pulisce al caricamento
}