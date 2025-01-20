const form = document.getElementById("form")
const nome = document.getElementById("nome")
const sobrenome = document.getElementById("sobrenome")
const apelido = document.getElementById("nome-user")
const email = document.getElementById("gmail")
const senha = document.getElementById("senha")

form.addEventListener(`submit`, (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {
    const nomeValue = nome.value.trim()
    const sobrenomeValue = nome.value.trim()
    const apelidoValue = nome.value.trim()
    const emailValue = nome.value.trim()
    const senhaValue = nome.value.trim()

    if (nomeValue === ``) {
        //Mostrar o erro 
        //adicionar a classe error
        errorValidation(nome, `Preencha esse campo!`)
    } else {
        //adicionar a classe sucess
        
    }
    
}

errorValidation( Input, message ) {
    const formControl = input.parentElement;
    form.className
} 
