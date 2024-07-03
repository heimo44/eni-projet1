fetch("apprenants.json")
  .then((response) => response.json())
  .then((data) => getApprenants(data))
  .catch((error) => {
    console.error(
      "Une erreur est survenue lors de la recuperation du fichier JSON",
      error
    );
  });

function getApprenants(data) {
  const apprenants = data.apprenants;
  createRowForEachApprenant(apprenants);
  openModalOnDetail(apprenants);
}

function createRowForEachApprenant(apprenants) {
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
function openModalOnDetail(apprenants) {
  for (let i = 1; i <= apprenants.length; i++) {
    document.getElementById(`detail-${i}`).style.cssText =
      "text-decoration: underline; cursor: pointer";
  }
}
