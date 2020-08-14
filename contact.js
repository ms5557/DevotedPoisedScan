var p = document.querySelector("p");
var button = document.querySelector("#contactButton");
var input = document.querySelector("input");
var textArea = document.querySelector("textArea");

button.addEventListener("click", party);

function party(){
  p.textContent = "Thank you for submiting the form!";
  var email = input.value;
  input.value = "";
  var response = textArea.value;
  textArea.value = "";

 if(email === ""){
  p.textContent = "Invalid email, try again!!!"
  }
  else if(response === "") {
    p.textContent = "You left an empty response, try again!!!"
  }
  else {
    p.textContent = "Thank you for submitting the form!";
  }
}