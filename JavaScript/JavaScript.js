function submitform() {
    const surname = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const textarea = document.getElementById('message').value;

    const dataTwo = email && textarea ? true: false ;

    if (surname && dataTwo) {
          alert("Sent successfully");
    } else {
          alert("Please fill out all of the feild");
    }
}

function toggleTheme() {
      var element = ducument.body;
      element.classList.toggle("dark-mode")
}