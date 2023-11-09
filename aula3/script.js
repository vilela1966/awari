document.querySelector('.button button').addEventListener('click', function enviar() {
    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let msg = document.getElementById('msg');
    alert(`Nome: ${nome.value} \n E-mail: ${email.value} \n Mensagem: ${msg.value}`);
})
