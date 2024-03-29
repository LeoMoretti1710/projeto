let urlCandidatos = 'http://localhost:3000/candidatos';

const botao = $('#carregar');
const lista = $('#lista');

botao.on('click', function (){
    // Comunicação assícrona! => Ajax para ler os dados da API
    $.ajax({
        url: urlCandidatos,
        dataType: 'json',
        method:'GET',
        success: function(resposta){ // método
            /* Loop $.each 
            Para cada resposta, acessa o índice
            (valor numérico) e o item (conteúdo) */
            $.each(resposta, function(indice, item){

                lista.append(
                    `<li class="list-group-item">
                    ${item.nome} - ${item.vaga} - ${item.telefone}
                    </li>`
                );

            });
        }
    });
});