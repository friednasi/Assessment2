document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('displayPhoneNumber').textContent = localStorage.getItem('phoneNumber') || 'Not Provided';
    document.getElementById('displayName').textContent = localStorage.getItem('name') || 'Not Provided';
    document.getElementById('displayEmail').textContent = localStorage.getItem('email') || 'Not Provided';
    document.getElementById('displayBirthday').textContent = localStorage.getItem('birthday') || 'Not Provided';
});
