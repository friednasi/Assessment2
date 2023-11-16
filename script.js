document.getElementById('checkPoints').addEventListener('click', function() {
    var phoneNumber = document.getElementById('phoneNumber').value;
    if (phoneNumber === '+60173527250') {
        // Redirect to Page 2
        window.location.href = 'page2.html';
    } else {
        alert('Invalid phone number. Please enter the correct number.');
    }
});
