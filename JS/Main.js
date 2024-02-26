document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Submit the form data
    fetch(this.action, {
        method: this.method,
        body: new FormData(this)
    })
        .then(response => {
            if (response.ok) {
                // Clear the form and display success message on successful submission
                clearForm();
                document.getElementById("successMessage").style.display = "block";
                setTimeout(function() {
                    document.getElementById("successMessage").style.display = "none";
                }, 3000); // Hide success message after 3 seconds
            } else {
                alert("Failed to send message. Please try again later.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
});

function clearForm() {
    document.getElementById("contactForm").reset();
}

// Show main content after 4 seconds