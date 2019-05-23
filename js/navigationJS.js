checkViewportSize = () =>{
    window.addEventListener('resize', function(){
        const vw = window.innerWidth;
        if(vw >= 1000){
            changeNavHeight();
        }
    });
};

changeNavHeight = () => {
  const nav = document.getElementsByTagName("nav");
  var navHeight = nav.height;
  var scroll = pageYOffset;

  if(scroll > 0){
      navHeight = "2em";
  }

};

checkViewportSize();