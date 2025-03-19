// 1. Confirmation message on contact form submission
document.getElementById('mySubmit').addEventListener('click', function(event) {
    // Prevent form submission for demonstration purposes
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Simple validation
    if (name === "" || email === "") {
        alert("Please fill out both the name and email fields before submitting.");
    } else {
        alert("Thank you for reaching out, " + name + "! We will respond to your email at " + email + ".");
    }
});

// 2. Toggle visibility of schedule tables on the schedule page
document.addEventListener('DOMContentLoaded', function() {
    const scheduleTables = document.querySelectorAll('table.center');
    scheduleTables.forEach(function(table) {
        // Add a click event to toggle visibility
        const caption = table.querySelector('caption');
        caption.addEventListener('click', function() {
            if (table.style.display === 'none') {
                table.style.display = 'table';
            } else {
                table.style.display = 'none';
            }
        });
    });
});
