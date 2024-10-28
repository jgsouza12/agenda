const formAgenda = document.getElementById("formAgenda");
const contato = [];
const telefone = [];
let linhas = '';

formAgenda.addEventListener("submit", function(e) {
    e.preventDefault();

    addLinhas();
    attTabela();
});

function addLinhas(){
    const nomeContato = document.getElementById("nomeContato");
    const telefoneContato = document.getElementById("telefoneContato");

    if(telefone.includes(telefoneContato.value)){
        alert(`O telefone ${telefoneContato.value} já existe!`);
    }
    else{
        contato.push(nomeContato.value);
        telefone.push(telefoneContato.value);
        
        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${telefoneContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    
    nomeContato.value = '';
    telefoneContato.value = '';
}

function attTabela(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

