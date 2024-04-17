document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Get form data
      var formData = new FormData(form);
  
      // Log form data to the console
      for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }
  
      // You can further process the form data here, such as validation or sending it to a server
    });
  });
  