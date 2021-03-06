document.getElementById("contactForm").addEventListener("submit", function(e){
      const input = document.getElementsByTagName("input");
      const textArea = document.getElementById("message");
      let formData = {};

      e.preventDefault();
      formData["Message"] = textArea.value;

      for(let i = 0; i<input.length; i++){

          if(input[i].type !== "radio"){
              formData[this[i].name] = this[i].value;
          }
          else if(input[i].type === "radio" && input[i].checked){
              formData[this[i].name] = this[i].value;
          }

          if(input[i].type !== "radio"){
              input[i].value = "";
          }

          input[i].checked = false;
      }

      textArea.value = "";
      sendData(formData);
});

function sendData(formData){
    let xhttp = new XMLHttpRequest();
    let h2Text = '';
    let pText ='';

    xhttp.open("POST", "https://www.protek-corp-server.tk/email", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState === 4 && xhttp.status === 200){
            h2Text = 'We will get back to you soon';
            pText = 'If you have any additional questions feel free to call us at: (765) 966-3473';
            showThankYouNotice(h2Text, pText);
        }
        else{
            h2Text = 'There seems to be a problem';
            pText = 'Try again in a few minutes or call us at (765) 966-3427';
            showThankYouNotice(h2Text, pText);
        }
    };

    xhttp.send(JSON.stringify(formData));
    xhttp.timeout = 20000;
}

function showThankYouNotice(h2Text, pText){
    const popUp = document.getElementById("pop-up");

    document.getElementById("pop-up-container")
        .classList.remove("hide-pop-up-display");

    popUp.childNodes[1].textContent = h2Text;
    popUp.childNodes[2].textContent = pText;

    document.body.classList.add("preventScroll");
}

document.getElementById("close-btn").addEventListener("click", function(){
        document.getElementById("pop-up-container").classList.add("hide-pop-up-display");
        document.body.classList.remove("preventScroll");
});