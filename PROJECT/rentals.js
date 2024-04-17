function navigateToPropertiesPage() {
    window.location.href = "properties.html"; // Replace "properties.html" with the actual URL of the properties page
}

// JavaScript code for handling the media button click
document.addEventListener('DOMContentLoaded', function() {
    var mediaButtons = document.querySelectorAll('.media-button');
    mediaButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var fileInput = button.nextElementSibling;
            fileInput.click();
        });
    });
});
