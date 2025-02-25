

function eventoclick(){
    alert('Acionou um evento click')
    document.body.style.backgroundColor = "yellow"
}


function dblclick(){
    alert ('Evento de click duplo')
}

function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red"
}
function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue"
}


function limpaTexto(){
    document.getElementById("campoTesto").value = "";
}