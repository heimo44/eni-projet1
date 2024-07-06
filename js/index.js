import {
  toggleBurger,
  setRadioWithLocalStorageData,
  fetchData,
  initTheme,
  navPromo,
  activeNav
} from "../common/service.js";

const lsValue = localStorage.getItem("listType"); // Localstorage: liste ou carte ou undefined
const radioForm = document.querySelectorAll(
  "#radio-container input[type='radio']"
);
const burger = document.querySelector(".burger"); //burger
const tableContainer = document.getElementById("table");
const gridContainer = document.getElementById("grid");
const closeBtn = document.getElementById("close");
const modalLayer = document.querySelector(".modal-layer");
const modalContent = document.querySelector('.modal')
const data = await fetchData();

radioForm.forEach((radio) => {
  radio.addEventListener("click", () => {
    initListType(radio.value);
    if (radio.value === "table") {
      radioForm[0].checked = true;
    } else {
      radioForm[1].checked = true;
    }
  });
});

window.init = onInit();
//user event
const details = document.querySelectorAll(".detail");
details.forEach((detail) => {
  detail.addEventListener("click", () => {
    const index = Number(detail.id.replace('detail-','')) -1
    modalData(data.apprenants[index])
    modalLayer.classList.toggle("active");
    modalContent.classList.toggle("active");
  });
});

closeBtn.addEventListener("click", () => {
  modalLayer.classList.remove("active");
  modalContent.classList.remove("active")
});

modalLayer.addEventListener('click', () => {
  modalLayer.classList.remove('active')
  modalContent.classList.remove("active")
})


//init
function onInit() {
  const apprenants = data.apprenants;
  initTheme()
  toggleBurger(burger);
  navPromo()
  setRadioWithLocalStorageData(radioForm, lsValue);
  initListType(lsValue);
  createTable(apprenants);
  createGrid(apprenants);
  activeNav(window.location.href)
}


function createTable(apprenants) {
  apprenants.forEach((apprenant) => {
    const tbody = document.getElementById("tbody-apprenants");
    const trElement = document.createElement("tr");
    const tdNom = document.createElement("td");
    const tdPrenom = document.createElement("td");
    const tdVille = document.createElement("td");
    const tdDetail = document.createElement("td");
    const aDetail = document.createElement("a");

    tdNom.textContent = apprenant.nom;
    tdPrenom.textContent = apprenant.prenom;
    tdVille.textContent = apprenant.ville;
    tdDetail.appendChild(aDetail).innerHTML = "Detail";
    aDetail.setAttribute("id", `detail-${apprenant.id}`);
    aDetail.classList.add("detail");
    for (const td of [tdNom, tdPrenom, tdVille, tdDetail]) {
      trElement.appendChild(td);
    }
    tbody.appendChild(trElement);
  });
}

function modalData(apprenant){
  const avatar = document.getElementById('avatar');
  const modalNom = document.getElementById('modal-nom');
  const modalPrenom = document.getElementById('modal-prenom');
  const modalVille = document.getElementById('modal-ville')
  const modalAnecdote = document.getElementById('modal-anecdote')
  avatar.setAttribute('src', `/assets/${apprenant.avatar}.png`)
  modalNom.textContent = apprenant.nom
  modalPrenom.textContent = apprenant.prenom
  modalVille.textContent = apprenant.ville
  if(apprenant.anecdote){
    modalAnecdote.textContent = apprenant.anecdote
  } else {
    modalAnecdote.textContent = "Aucune donnée"
  }


}

function createGrid(apprenants) {
  apprenants.forEach((apprenant) => {
    const aDetail = document.createElement("a");
    const pNom = document.createElement("p");
    const pPrenom = document.createElement("p");
    const pVille = document.createElement("p");
    const div = document.createElement("div");
    const divName = document.createElement("div")
    const card = gridContainer.appendChild(div);
    const nameContainer = card.appendChild(divName)
    div.classList.add(['flex-column'], ['card']);
    nameContainer.appendChild(pNom)
    nameContainer.appendChild(pPrenom)
    card.appendChild(pVille);
    card.appendChild(aDetail);

    pPrenom.textContent = apprenant.prenom;
    pNom.textContent = apprenant.nom;
    pVille.textContent = apprenant.ville;
    aDetail.innerHTML = "Detail";
    aDetail.setAttribute("id", `detail-${apprenant.id}`);
    aDetail.classList.add("detail");
  });
}

function initListType(listValue) {
  if (listValue === "grid") {
    tableContainer.classList.remove("table");
    gridContainer.classList.add("grid");
  } else {
    gridContainer.classList.remove("grid");
    tableContainer.classList.add("table");
  }
}

