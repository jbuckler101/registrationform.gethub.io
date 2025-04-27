// used to confirm that users email matches
function confirmEmail() {
    var email = document.getElementById("email").value
    var confemail = document.getElementById("confemail").value
    if(email != confemail) {
        alert('Email Not Matching!');
    }
};

//used to make sure a radio button is checked
document.getElementById('registrationForm').addEventListener('submit', 
function(event) {
    var radio = document.querySelectorAll('input[type=radio]');
    var checkedCount = 0;
    
    radio.forEach(function(radio) {
      if (radio.checked) {
        checkedCount--;
      }
    });
    
     if (checkedCount == 0) {
      alert('Please select a meal.');
      event.preventDefault(); // Prevent form submission for missing radio button selection
    }
  });
//used to make sure user chooses more than one check boxes
document.getElementById('registrationForm').addEventListener('submit', 
function(event) {
    var checkboxes = document.querySelectorAll('input[type=checkbox]');
    var checkedCount = 0;
    
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        checkedCount++;
      }
    });
    
    if (checkedCount < 2) {
      alert('Please select at least two Contact Methods.');
      event.preventDefault(); // Prevent form submission for missing checkboxes
    }
  });
  //used to remove placeholder once user clicks in box
  function removePlaceholder(){
    document.getElementById("fname").removeAttribute("placeholder");
  };

  //Submit form function
  function validateForm() {
    alert("This form was submitted");
  }

  //Onreset function for reset button
  function resetForm() {
    alert("The form was reset");
  }

