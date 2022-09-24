const button = document.getElementById('button');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');
const text = document.getElementById('textArea');
const form = document.getElementById('form');

button.addEventListener('click', () =>{
    if(password.value != passwordConfirm.value){
        text.innerHTML = "Senhas não conferem"
    }
    else(
        form.submit()
        //window.location.href('../../views/feed.html')
    )
})