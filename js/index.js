elForm = document.querySelector(".form")
elInput = document.querySelector(".js-input");
elList = document.querySelector(".js-list");
elSendBtn = document.querySelector(".js-Btn");
elRecordBtn = document.querySelector(".js-recBtn");


var project = [];

var record = new webkitSpeechRecognition();

record.lang = "uz-UZ";

elRecordBtn.addEventListener("click", function() {
    record.start();

    
})

elForm.addEventListener("submit", function(e){
  e.preventDefault();
  var inputV = elInput.value;
  elList.innerHTML = "";
  elInput.value = "";

  
    project.push(inputV);
    record.onresult = function (event) {
    project.push(event.results[0][0].transcript);

    }
    
    for (let inputV of project){
        
      var newLi = document.createElement("li");


      newLi.textContent = inputV;
      elList.appendChild(newLi);
    }
  
})