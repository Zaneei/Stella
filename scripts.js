document.getElementById('applyForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert(`Thank you, ${name}! We will contact you at ${email}.`);
        // You can add form submission logic here
    } else {
        alert('Please fill in all the fields.');
    }
});
