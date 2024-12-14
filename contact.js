function validateForm() {
    // Get the form elements
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
  
    // Check if the name field is empty
    if (name == "") {
      alert("Please enter your name.");
      return false;
    }
  
    // Check if the email field is empty
    if (email == "") {
      alert("Please enter your email address.");
      return false;
    }
  
    // Check if the email is valid
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // If all validations pass, return true
    return true;
  }
  
  function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }