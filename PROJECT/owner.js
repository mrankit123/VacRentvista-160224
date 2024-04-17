document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Form submitted!");
      // You can add more logic here to handle form submission, such as sending data to a server
    });
  });
  