document.addEventListener("DOMContentLoaded", function() {
    Submit.addEventListener("click", handleRegistration);
    function handleRegistration(event) {
        event.preventDefault(); // Prevent default form submission

        // Validate all fields before proceeding
        if (validateForm()) {
            submitToGoogleSheets(); // Call Razorpay payment function
            //alert('"working"');
        } else {
            alert('Please fill in all fields before registering and type 10 digit phone number only.');
        }
    } 

    function validateForm() {
        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let Email = document.getElementById("Email").value;
        let Purpose = document.getElementById("Purpose").value;
        
        // Check if any field is empty
        if (name === "" || phone === "" || Email === "" || Purpose ==="") {
        return false;
        }
        
        // Check if phone number contains only numeric values
        if (!/^\d{10}$/.test(phone)) {
        return false;
        }
        
        return true;
        }

function submitToGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwOMkKyzAfZdyXzTltyPcnj3pmEtyqXlURVp6ecS-a5k0ePjergWSXFCTcZZIvjQX9N/exec';
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let Email = document.getElementById("Email").value;
    let Purpose = document.getElementById("Purpose").value;
    const form = new FormData();

    // Append to form data
    form.append('name', name);
    form.append('phone', phone);
    form.append('Email', Email);
    form.append('Purpose', Purpose);

    console.log('Submitting form data to Google Sheets:', form);

    alert('Form has been submitted successfully!');
    
    localStorage.clear();

    fetch(scriptURL, { method: 'POST', body: form })
      .then(response => {
        console.log('Google Sheets response:', response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Google Sheets submission successful. Response:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

});