document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    console.log('login button clicked')
    const mobileNumber = document.getElementById('mobile-no').value;
    const pinNumber = document.getElementById('pin-no').value;
    console.log(mobileNumber, pinNumber);
    if (mobileNumber === '01787837580' && pinNumber === '4545') {
        console.log('you are logged in')
        window.location.href = 'home.html'
    } else {
        alert ('wrong mobile number or pin')
    }
})