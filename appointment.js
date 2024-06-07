document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var formData = new FormData(this); // Create a FormData object

    fetch(this.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Hide the form and show the thank-you message
        document.getElementById('form-container').style.display = 'none';
        document.getElementById('thank-you-container').style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
