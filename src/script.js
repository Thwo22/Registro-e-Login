
let email = document.getElementById(`gmail`).value;
let password = document.getElementById(`senha`).value;

function cadastrar() {
    alert(`Sucesso!`);
    location.href = `login.html`;
}

function logar() {
    let gmail = document.getElementById(`gmail2`).value;
    let senha = document.getElementById(`senha2`).value;

    if (gmail2 === email && senha2 === password)  {
        alert(`Bem-vindo ao Site!`);
    } else {
        alert(`usuario ou senha estão incorretos!`)
    }
}
