document.getElementById('checkPoints').addEventListener('click', function() {
    var countryCode = document.getElementById('countryCode').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var fullNumber = countryCode + phoneNumber;

    if (fullNumber === '+60173527250') {
        // Redirect to Page 2
        window.location.href = 'page2.html';
    } else {
        alert('Invalid phone number. Please enter the correct number.');
    }
});
