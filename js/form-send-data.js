function getData(){
  const input = document.getElementsByTagName("input");
  const textArea = document.getElementById("message");
  let form = document.getElementById("contactForm");
  let xhttp = new XMLHttpRequest();
  let formData = {};

  form.addEventListener("submit", function(e){
      e.preventDefault();
      for(let i = 0; i<input.length; i++){
          if(input[i].type === "radio" && input[i].checked || input[i].type !== ""){
              formData[this[i].name] = this[i].value;
              formData["Message"] = textArea.value;
          }
      }

      xhttp.open("POST", "http://localhost:80/?getstring=true", true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.onreadystatechange=function(){
          if (xhttp.readyState === 4 && xhttp.status === 200){
              const string = xhttp.responseText;
              console.log("Data sent to "+string);
          }
      };
      xhttp.send(JSON.stringify(formData));

      console.log(JSON.stringify(formData));
  });
}

getData();