window.addEventListener("load", function(){
    const navMenu = document.getElementById("nav-menu");
    const dropDown = document.getElementById("drop-down");

    document.body.classList.remove("no-js");
    navMenu.classList.remove("no-js");
    dropDown.classList.remove("no-js");
});

(function () {
    let active = false;

    document.getElementById("navMenu").addEventListener("click", function(){
        const navMenu = document.getElementById("nav-menu");
        const dropDown = document.getElementById("drop-down");
        const dropDownChildren = dropDown.childNodes;
        const menuBars = document.getElementsByClassName("menu-bar");

        active = !active;

        if(active === true){
            openNav(navMenu, dropDown, dropDownChildren);
            changeMenuBarsOpen(menuBars);
        }

        if(active === false){
            closeNav(navMenu, dropDown, dropDownChildren);
            changeMenuBarsClose(menuBars);
        }
    });
})();

function openNav(navMenu, dropDown, dropDownChildren){
    dropDown.style.visibility = "visible";
    dropDown.style.height = "100vh";
    dropDown.style.transitionProperty = "all";
    dropDown.style.transitionDuration = "0.5s";
    dropDown.style.transitionTimingFunction = "cubic-bezier(0, 1, 0.5, 1)";

    document.body.classList.add("preventScroll");

    for(let i = 0; i < dropDownChildren.length; i++){
        if(dropDownChildren[i].innerHTML !== undefined){
            dropDownChildren[i].style.opacity = "1";
            dropDownChildren[i].style.transition = "opacity 0.1s linear";
            dropDownChildren[i].style.display = "block";
        }
    }
}

function closeNav(navMenu, dropDown, dropDownChildren){
    dropDown.style.height = "0";
    dropDown.style.visibility = "none";
    dropDown.style.transitionProperty = "all";
    dropDown.styletransitionDuration = "0.5s";
    dropDown.styletransitionTimingFunction = "cubic-bezier(0, 1, 0.5, 1)";

    document.body.classList.remove("preventScroll");

    for(let i = 0; i < dropDownChildren.length; i++){
        if(dropDownChildren[i].innerHTML !== undefined){
            dropDownChildren[i].style.opacity = "0";
            dropDownChildren[i].style.transition = "opacity 0.1s linear";
            dropDownChildren[i].style.display = "none";
        }
    }
}

function changeMenuBarsOpen(menuBars){
    const menuBar0 = menuBars[0];
    const menuBar1 = menuBars[1];
    const menuBar2 = menuBars[2];

    menuBar0.id = "menuBar0Open" ;

    menuBar1.id = "menuBar1Open";

    menuBar2.id = "menuBar2Open";
}

function changeMenuBarsClose(menuBars){
    const menuBar0 = menuBars[0];
    const menuBar1 = menuBars[1];
    const menuBar2 = menuBars[2];

    menuBar0.id = "menuBar0Closed";

    menuBar1.id = "menuBar1Closed";

    menuBar2.id = "menuBar2Closed";
}