document.getElementById("otpForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var otpInput = document.getElementById("otpInput").value;
    // Here you would perform the OTP verification process, for demonstration purposes, I'll just check if it's a predefined OTP.
    var otp = "123456"; // This is a predefined OTP, replace it with your actual verification logic.
    if (otpInput === otp) {
        document.getElementById("message").innerHTML = "OTP Verified!";
        document.getElementById("message").style.color = "#007bff";
    } else {
        document.getElementById("message").innerHTML = "Incorrect OTP, please try again.";
        document.getElementById("message").style.color = "#ff0000";
    }
});

document.getElementById("resetButton").addEventListener("click", function() {
    document.getElementById("otpInput").value = ""; // Clear the OTP input field
    document.getElementById("message").innerHTML = ""; // Clear any previous messages
});
