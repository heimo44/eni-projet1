import { toggleBurger, initTheme, informationPromo,activeNav  } from "../../common/service.js";

//menu burger
const burger = document.querySelector(".burger");
initTheme()
informationPromo()
toggleBurger(burger);
activeNav(window.location.href)
