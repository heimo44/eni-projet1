import { toggleBurger, initTheme, fetchData, navPromo, activeNav } from "../../common/service.js";

const data = await fetchData()
let mapLatitude = 47
let mapLongitude = 1.8
window.init = onInit()
//menu burger
const burger = document.querySelector(".burger");

function onInit(){
initTheme()
}
navPromo()
activeNav(window.location.href)
toggleBurger(burger);


let map = L.map('map').setView([mapLatitude, mapLongitude], 5.5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

data.apprenants.forEach((apprenant) => {
    const marker = L.marker([apprenant.coordonnees.latitude, apprenant.coordonnees.longitude]).addTo(map);
    marker.addEventListener('click', () => {
        L.tooltip()
        .setLatLng([apprenant.coordonnees.latitude, apprenant.coordonnees.longitude])
        .setContent(`<div class="flex"><img class="avatar" alt='avatar-de-${apprenant.prenom}' src='../../assets/${apprenant.avatar}.png'> ${apprenant.nom.toUpperCase()} </br>${apprenant.prenom}</div>`)
        .addTo(map);
    })

})