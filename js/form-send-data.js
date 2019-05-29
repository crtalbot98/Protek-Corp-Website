getData = () =>{
  const input = document.getElementsByTagName("input");
  const form = document.getElementById("contactForm");
  const textArea = document.getElementsByTagName("textarea");

  form.addEventListener("submit", function(e){
      e.preventDefault();

      for(var i = 0; i<input.length; i++){
          if(input[i].type === "radio" && input[i].checked){
              console.log(this[i].value);
          }
          else if(input[i].type !== "radio"){
              console.log(this[i].value);
          }
      }
  });
};

getData();