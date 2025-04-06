// ...existing code...

// Handle "Contact Us" form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent. We'll get back to you at ${email}.`);
        this.reset();
    } else {
        alert('Please fill in all the fields.');
    }
});
