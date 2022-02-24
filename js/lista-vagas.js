// Rota ou Endpoint da Api de Vagas
let urlVagas = "http://localhost:3000/vagas";

const selectVagas = document.querySelector("#vaga");

// Consumo de dados assíncrono a partir da API
fetch(urlVagas)
    .then(resposta => resposta.json())
    .then(dados => {
        selectVagas.innerHTML = "<option></option>";

        for( let vaga of dados ){
            let opcao = document.createElement("option");
            opcao.textContent = vaga.titulo;
            opcao.value = vaga.id;
            selectVagas.appendChild(opcao)
        }
    });
