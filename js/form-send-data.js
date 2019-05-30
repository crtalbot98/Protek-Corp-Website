getData = () =>{
  const input = document.getElementsByTagName("input");
  const form = document.getElementById("contactForm");
  const textArea = document.getElementById("message");
  let formData = {};

  form.addEventListener("submit", function(e){
      e.preventDefault();

      for(let i = 0; i<input.length; i++){
          if(input[i].type === "radio" && input[i].checked){
              formData = JSON.stringify(this[i].value);
          }
          else if(input[i].type !== "radio" && this[i].value !== ""){
              formData = JSON.stringify(this[i].value);
          }
      }
      console.log(formData);

  });
};

getData();