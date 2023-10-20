document.addEventListener("DOMContentLoaded", function () {
  let revealButton = document.getElementById("revealButton");
  let hiddenInfo = document.getElementById("hiddenInfo");
  let contactForm = document.getElementById("contactForm");

  revealButton.addEventListener("click", function () {
    hiddenInfo.style.display = "block";
  });

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    console.log("Name:", name);
    console.log("Email:", email);

    alert("Thank you for submitting the form!");
    contactForm.reset();
  });
});
