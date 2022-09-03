var navList = document.getElementById("navList");
navList.style.maxHeight = "0px";

function toggleMenu() {
    if (navList.style.maxHeight == "0px") {
        navList.style.maxHeight = "162.5px";
    } else {
        navList.style.maxHeight = "0px";   
    }
}
