export function setRadioWithLocalStorageData(radioForm, localStorageListValue) {
    
        //set checked sur radio en fonction de la valeur du localstorage
        if(localStorage.getItem('listType')){
            radioForm.forEach((radio) => {
                if (localStorageListValue === radio.value) {
                    radio.checked = true;
                  }
            });
        }
}
export function toggleBurger(documentSelector){
    documentSelector.addEventListener("click", function(){
        documentSelector.classList.toggle("open");
    })
}

export async function fetchData(){
    return fetch("apprenants.json")
  .then((response) => response.json())
  .then((data) => {
    return data
  })
  .catch((error) => {
    console.error(
      "Une erreur est survenue lors de la recuperation du fichier JSON",
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
