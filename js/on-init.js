window.onload = onInit;

function onInit() {
    const lsThemeKey = localStorage.getItem("theme")
    if(lsThemeKey){
        const link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        if(window.location.toString().includes("index")){
            lsThemeKey === "0" ? link.href =  "css/dark-theme.css" : link.href =  "css/light-theme.css";
        } else {
            lsThemeKey === "0" ? link.href =  "/css/dark-theme.css" : link.href =  "/css/light-theme.css";
        }
    } else {
        localStorage.setItem('theme', "0");
    }
}