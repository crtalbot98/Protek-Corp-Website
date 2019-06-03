onLoad = () => {
    const navMenu = document.getElementById("navMenu");
    const dropDown = document.getElementById("dropDown");

    window.addEventListener("load", function(){
        document.body.classList.remove("no-js");
        navMenu.classList.remove("no-js");
        dropDown.classList.remove("no-js");
    });
};

navigation = () =>{
   const navMenu = document.getElementById("navMenu");
   const dropDown = document.getElementById("dropDown");
   const dropDownChildren = dropDown.childNodes;
   const menuBars = document.getElementsByClassName("menuBar");
   let active = false;

   navMenu.addEventListener("click", function(){
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
};

openNav = (navMenu, dropDown, dropDownChildren) => {
    dropDown.style.visibility = "visible";
    dropDown.style.height = "100vh";
    dropDown.style.transitionProperty = "all";
    dropDown.style.transitionDuration = "0.5s";
    dropDown.style.transitionTimingFunction = "cubic-bezier(0, 1, 0.5, 1)";
    dropDown.style.padding = "0 0 4em 0";

    for(let i = 0; i < dropDownChildren.length; i++){
        if(dropDownChildren[i].innerHTML !== undefined){
            dropDownChildren[i].style.opacity = "1";
            dropDownChildren[i].style.transition = "opacity 0.1s linear";
            dropDownChildren[i].style.display = "block";
        }
    }
};

closeNav = (navMenu, dropDown, dropDownChildren) =>{
    dropDown.style.height = "0";
    dropDown.style.visibility = "none";
    dropDown.style.transitionProperty = "all";
    dropDown.styletransitionDuration = "0.5s";
    dropDown.styletransitionTimingFunction = "cubic-bezier(0, 1, 0.5, 1)";
    dropDown.style.padding = "0";

    for(let i = 0; i < dropDownChildren.length; i++){
        if(dropDownChildren[i].innerHTML !== undefined){
            dropDownChildren[i].style.opacity = "0";
            dropDownChildren[i].style.transition = "opacity 0.1s linear";
            dropDownChildren[i].style.display = "none";
        }
    }
};

changeMenuBarsOpen = (menuBars) =>{
    const menuBar0 = menuBars[0];
    const menuBar1 = menuBars[1];
    const menuBar2 = menuBars[2];

    menuBar0.id = "menuBar0Open" ;

    menuBar1.id = "menuBar1Open";

    menuBar2.id = "menuBar2Open";
};

changeMenuBarsClose = (menuBars) =>{
    const menuBar0 = menuBars[0];
    const menuBar1 = menuBars[1];
    const menuBar2 = menuBars[2];

    menuBar0.id = "menuBar0Closed";

    menuBar1.id = "menuBar1Closed";

    menuBar2.id = "menuBar2Closed";
};

onLoad();
navigation();