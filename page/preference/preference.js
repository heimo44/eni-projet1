let getThemeLS = localStorage.getItem('theme')
let getListType = localStorage.getItem('listType')
let selectValue = document.getElementById("select")
const grid = document.getElementById('grid')
const table = document.getElementById('table')

getStorage(getThemeLS, getListType)
document.getElementById('enregistrer').addEventListener('click', savePreference)

function getStorage(lsTheme, lsListType){
    if(!lsTheme){
        selectValue.selectedIndex = 1
        localStorage.setItem('theme', selectValue.selectedIndex)
    } else {
        selectValue.selectedIndex = Number(localStorage.getItem('theme'))
    }
    if(!lsListType){
        localStorage.setItem('listType', grid.value)
    } else {
        getListType === "table" ? table.checked = true : grid.checked = true
    }
}

function savePreference(){
    const listType = grid.checked ? grid.value : table.value;
    if(Number(getThemeLS) !== selectValue.selectedIndex || getListType !== listType){
        localStorage.setItem('theme', selectValue.selectedIndex)
        localStorage.setItem('listType', listType)
        alert("Préférence sauvegardée")
        getThemeLS = localStorage.getItem('theme')
        getListType = localStorage.getItem('listType')    
    }
}