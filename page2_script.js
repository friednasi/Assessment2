document.getElementById('continueButton').addEventListener('click', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    var email = document.getElementById('email').value;
    var noEmail = document.getElementById('noEmail').checked;

    if (!name || (!day || !month || !year) || (!email && !noEmail)) {
        alert('Please fill in all required fields.');
        return;
    }

    var birthday = `${year}-${month}-${day}`;
    localStorage.setItem('name', name);
    localStorage.setItem('birthday', birthday);
    localStorage.setItem('email', email);

    window.location.href = 'page3.html';
});
