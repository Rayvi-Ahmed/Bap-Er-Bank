document.getElementById('btn-submit').addEventListener('click', function () {


    const emailFeilds = document.getElementById('user-email');
    const email = emailFeilds.value;

    const passFeilds = document.getElementById('user-pass');
    const pass = passFeilds.value;

    // console.log(email, pass);

    if (email === 'rayvi@gmail.com' && pass === 'rayvikhan') {
        window.location.href = 'deposite.html';

    }
    else {
        alert('tui ekta vua user!')
    }
});