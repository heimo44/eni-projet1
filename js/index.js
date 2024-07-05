import { toggleBurger, setRadioWithLocalStorageData, fetchData } from "../common/service.js";

const lsValue = localStorage.getItem("listType") // Localstorage: liste ou carte
const radioForm = document.querySelectorAll("#radio-container input[type='radio']")
const burger = document.querySelector(".burger"); //burger
const tableContainer = document.getElementById("table")
const gridContainer = document.getElementById("grid")
const data = await fetchData()
radioForm.forEach((radio) => {
  radio.addEventListener('click', () => {
    initListType(radio.value);
    if(radio.value === "table"){
      radioForm[0].checked = true;
      localStorage.setItem("listType", "table")
    } else {
      radioForm[1].checked = true
      localStorage.setItem("listType", "grid")
    }
  })
})

//init
toggleBurger(burger);
setRadioWithLocalStorageData(radioForm, lsValue);
getApprenants()
initListType(lsValue)

function getApprenants() {
  const apprenants = data.apprenants;
  createTable(apprenants);
  openModalOnDetail(apprenants);
}

if(gridRadio.checked){
  toggleTypeOfList(gridRadio.value)
} else {
  toggleTypeOfList(tableRadio.value)
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
    for (const td of [tdNom, tdPrenom, tdVille, tdDetail]) {
      trElement.appendChild(td);
    }
    tbody.appendChild(trElement);
  });
}

function createGrid(apprenants){

}

function toggleTypeOfList(radioValue){
  console.log(radioValue)
}

function initListType(listValue){
  if(listValue === "table"){
    gridContainer.classList.remove("grid")
    tableContainer.classList.add("table")
  } else {
    tableContainer.classList.remove("table")
    gridContainer.classList.add("grid")
  }
}

function openModalOnDetail(apprenants) {
  for (let i = 1; i <= apprenants.length; i++) {
    document.getElementById(`detail-${i}`).style.cssText =
      "text-decoration: underline; cursor: pointer";
  }
}
