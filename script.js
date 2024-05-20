 document.getElementById('sendButton').addEventListener('click', function(event) {
    event.preventDefault();
    
    let isValid = true;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const message = document.getElementById('message').value;

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const contactError = document.getElementById('contactError');
    const messageError = document.getElementById('messageError');

    
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    contactError.style.display = 'none';
    messageError.style.display = 'none';

    if (name === '') {
      nameError.textContent = 'Name is required';
      nameError.style.display = 'block';
      isValid = false;
    }
    if (email === '') {
      emailError.textContent = 'Email is required';
      emailError.style.display = 'block';
      isValid = false;
    }
    if (contact === '') {
      contactError.textContent = 'Contact number is required';
      contactError.style.display = 'block';
      isValid = false;
    }
    if (message === '') {
      messageError.textContent = 'Message is required';
      messageError.style.display = 'block';
      isValid = false;
    }

    
    if (isValid) {
      emailjs.send('service_0xqlvtu', 'template_k5q75he', {
        from_name: name,
        to_name: "niranjan",
        email: email,
        contact: contact,
        message: message
      })
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        // alert('Message sent successfully!');
        Swal.fire({
          title: "Thankyou for believing us!",
          text: " We'll get back to you soon!",
          icon: "success"
        });

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('contact').value = '';
        document.getElementById('message').value = '';
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send message, please try again.');
      });
    }
  });

   document.getElementById("cancelButton").addEventListener("click", function() {
    Swal.fire("OOPS! don't change your mind, feel free to contact us");
    console.log('error')
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("message").value = "";
  });


