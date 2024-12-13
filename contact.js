let inputs = document.querySelectorAll("input");

for (let i = 0; i < inputs.length; i++) {
   let input = inputs[i];
   input.style.border = "5px solid red";
   input.addEventListener("focus", function() {
      this.style.border = "5px solid green";
   });
   input.addEventListener("blur", function() {
      this.style.border = "5px solid blue";
   });
}

let names = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let err = "";

if (names.length<=0 || email.length<=0 || message.length<=0){
    alert("Invalid");
}

$("#submit").click(function() {
    if(confirm("Are you sure you would like to proceed?")) {
        this.submit();
    } else {
        return false;
    }
});

