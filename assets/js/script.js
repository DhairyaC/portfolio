function sendEmail() {
    // Define parameters
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    // Initiate EmailJS
    emailjs.send("service_1rd1tfj", "template_nnuvaxt", params).then(alert("Your message has been sent. Thank you!"))

}