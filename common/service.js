export function setRadioWithLocalStorageData(radioForm, localStorageListValue) {
  if (localStorage.getItem("listType")) {
    radioForm.forEach((radio) => {
      if (localStorageListValue === radio.value) {
        radio.checked = true;
      }
    });
  }
}
export function toggleBurger(documentSelector) {
  documentSelector.addEventListener("click", function () {
    documentSelector.classList.toggle("open");
  });
}

export async function fetchData() {
  let url = window.location.href.includes("index")
    ? "apprenants.json"
    : "../../apprenants.json";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(
        "Une erreur est survenue lors de la recuperation du fichier apprenants",
        error
      );
    });
}

export function initTheme() {
  const lsThemeKey = localStorage.getItem("theme");
  if (lsThemeKey) {
    if (lsThemeKey === "0") document.body.classList.add("dark");
  }
}

export function activeNav(url) {
  if (url.includes("index")) {
    document.getElementById("accueil").classList.add("active-nav");
    document.getElementById("sm-accueil").classList.add("active-nav");
  } else if (url.includes("preference")) {
    document.getElementById("preference").classList.add("active-nav");
    document.getElementById("sm-preference").classList.add("active-nav");
  } else if (url.includes("carte")) {
    document.getElementById("carte").classList.add("active-nav");
    document.getElementById("sm-carte").classList.add("active-nav");
  } else if (url.includes("information")) {
    document.getElementById("information").classList.add("active-nav");
    document.getElementById("sm-information").classList.add("active-nav");
  }
}

export async function navPromo() {
  const navPromoName = document.getElementById("promo-name");
  try {
    const data = await fetchData();
    navPromoName.textContent = data.promo.nom;
    return data;
  } catch (error) {
    throw new Error(
      `Une erreur est survenu lors de la récuperation des données des apprenants, navPromo,${error}`
    );
  }
}

export async function informationPromo() {
  const data = await navPromo();
  const dateDeDebut = new Date(data.promo.dateDeDebut);
  const dateDeFin = new Date(data.promo.dateDeFin);
  document.getElementById("date-de-debut").textContent =
    dateDeDebut.toLocaleDateString("fr");
  document.getElementById("date-de-fin").textContent =
    dateDeFin.toLocaleDateString("fr");
  document.getElementById("nb-apprenants").textContent =
    data.promo.nbApprenants;
}
