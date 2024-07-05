import { toggleBurger, setRadioWithLocalStorageData } from "../../common/service.js";

//menu burger
const burger = document.querySelector(".burger");
toggleBurger(burger);

//localstorgae data
let getThemeLS = localStorage.getItem('theme') // string : 1 ===light or 0 === dark
let getListType = localStorage.getItem('listType') // string : grid or table en string

//document data
let selectValue = document.getElementById("select")
const listType = document.querySelectorAll("#radio-container input[type='radio']")
const grid = document.getElementById('grid')
const table = document.getElementById('table')

//Bouton enregistrer
document.getElementById('enregistrer').addEventListener('click', savePreference)

//lancement de la fonction
setRadioWithLocalStorageData(listType, getListType)
getStorage(getThemeLS)

//recuperer les données du localstorage et set les valeurs default dans le localstorage
function getStorage(lsTheme){
    if(!lsTheme){ // null||undefined
        selectValue.selectedIndex = 1 //set default
        localStorage.setItem('theme', selectValue.selectedIndex)
    } else {
        selectValue.selectedIndex = Number(localStorage.getItem('theme'))
    }
}

function savePreference(){
    const listType = grid.checked ? grid.value : table.value;
    if(Number(getThemeLS) !== selectValue.selectedIndex || getListType !== listType){
        localStorage.setItem('theme', selectValue.selectedIndex)
        localStorage.setItem('listType', listType)
        alert("Préférence sauvegardée")
        //reassign new value to getThemeLs and getListType
        getThemeLS = localStorage.getItem('theme')
        getListType = localStorage.getItem('listType')
        if(getThemeLS === "0") {
            document.body.classList.add("dark")
        } else {
            document.body.classList.remove("dark")
        }
    }
}