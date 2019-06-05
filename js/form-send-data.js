function getData(){
  const input = document.getElementsByTagName("input");
  const textArea = document.getElementById("message");
  let form = document.getElementById("contactForm");
  let formData = {};

  form.addEventListener("submit", function(e){
      e.preventDefault();
      formData["Message"] = textArea.value;

      for(let i = 0; i<input.length; i++){

          if(input[i].type === "text" || input[i].type === "email" || input[i].type === "number"){
              formData[this[i].name] = this[i].value;
          }

          if(input[i].type === "radio" && input[i].checked){
              formData[this[i].name] = this[i].value;
          }

          input[i].value = "";
      }
      textArea.value = "";

      sendData(formData);
      showThankYouNotice();
  });
}

function sendData(formData){
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8080/?getstring=true", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState === 4 && xhttp.status === 200){
            const string = xhttp.responseText;
            console.log("Data sent to "+string);
        }
    };

    xhttp.send(JSON.stringify(formData));
}

function showThankYouNotice(){
    document.getElementById("popUpContainer")
        .classList.remove("hidePopUpDisplay");

    document.body.classList.add("preventScroll");
}

function hideThankYouNotice(){
    const popUp = document.getElementById("popUpContainer");
    const popUpBtn = document.getElementById("closeBtn");

    popUpBtn.addEventListener("click", function(){
        popUp.classList.add("hidePopUpDisplay");
        document.body.classList.remove("preventScroll");
    });
}

getData();
hideThankYouNotice();