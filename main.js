const form = document.getElementById('contact-form')
let linhas = ''
const contato = []
const telefone = []

form.addEventListener('submit', event => {
    event.preventDefault()
    adicionaLinha() 
    atualizaTabela()
})


function adicionaLinha() {
    const nomeContato = document.getElementById('contact-name')
    const telefoneContato = document.getElementById('contact-phone')

    if (telefone.includes(telefoneContato.value)) {
        alert("Já existe um contato com o telefone informado!")

    } else {

        contato.push(nomeContato.value)
        telefone.push(telefoneContato.value)

        let linha = '<tr>'
        linha += `<td>${nomeContato.value}</td>`
        linha += `<td>${telefoneContato.value}</td>`
        linha += '</tr>'
    
        linhas += linha
    }

    nomeContato.value = ''
    telefoneContato.value = ''
}

function atualizaTabela() {
    
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}