document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Simple validation (you can expand this)
    if (name && email && message) {
        document.getElementById("formMessage").innerText = "Thank you for your message, " + name + "!";
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("formMessage").innerText = "Please fill out all fields.";
    }
});