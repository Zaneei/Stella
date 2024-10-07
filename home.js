// Function to show the selected form
function showForm(formId) {
    // Hide all forms
    const forms = document.querySelectorAll('.reservation-form');
    forms.forEach(form => {
      form.style.display = 'none';
    });
  
    // Show the selected form
    const selectedForm = document.getElementById(formId);
    selectedForm.style.display = 'block';
  }
  
  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Hide the form and show confirmation message
    const form = event.target;
    form.style.display = 'none';
  
    // Show confirmation message
    const confirmationMessage = document.createElement('div');
    confirmationMessage.className = 'confirmation';
    confirmationMessage.innerHTML = `<h2>Booking Confirmed!</h2><p>Thank you for your reservation. We will get back to you soon.</p>`;
    
    form.parentElement.appendChild(confirmationMessage);
  }
  
  // Attach the handleSubmit function to each form
  document.querySelectorAll('.reservation-form').forEach(form => {
    form.addEventListener('submit', handleSubmit);
  });
  