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

// function toggleTheme() {
//       var element = ducument.body;
//       element.classList.toggle("dark-mode")
// }

const themeSwitch = document.querySelector('input[type="checkbox"]');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
  document.getElementById('logo-img').src = ('Media/Light-logo(new).png');
  document.getElementById('logo-img-mobile').src = ('Media/Light-logo(new).png');
  document.getElementById('logo-img-footer').src = ('Media/Light-logo(new).png');
  if (document.body.classList.contains('dark-theme')) {
    document.getElementById('logo-img').src = ('Media/Dark-logo(new).png');
    document.getElementById('logo-img-mobile').src = ('Media/Dark-logo(new).png');
    document.getElementById('logo-img-footer').src = ('Media/Dark-logo(new).png');
  }
});