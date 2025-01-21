
let email, senha;

function cadastrar() {
    email = document.getElementById(`gmail`).value.trim();
    senha = document.getElementById(`senha`).value.trim();

    if (email && senha) {
        alert(`Cadastro realizado com sucesso!`)
        location.href = `login.html?email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}` 
    }else {
        alert(`por favor, preencha os campos corretamente!`)
    }
}

function logar() {
    let params = new URLSearchParams(window.location.search);
    let email = params.get(`gmail`);
    let senha = params.get(`senha`);

    let gmail2 = document.getElementById(`gmail2`).value.trim()
    let senha2 = document.getElementById(`senha2`).value.trim()

    if (!gmail2 || !senha2) {
        alert(`preencha os campos`);
        return
    }

    if (gmail2 === email && senha2 === senha)  {
        alert(`Sucesso! Redirecionando...`)
        location.href = `home.html`;
    } else {
        alert(`usuario ou senha estão incorretos!`)
    }
}
