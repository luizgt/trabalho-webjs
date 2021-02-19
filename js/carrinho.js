// para recuperar, utilizados a mesma chave 'meus_dados'
// lembrem-se de utilizar JSON.parse() para transformar a string em objeto JavaScript!
let dados = JSON.parse(sessionStorage.getItem('meus_dados'));
let pedido = [];

let html = "";

for(var i = 0; i < dados.length; i++){
    html += '<div class="card">' +
                '<i class="fas fa-times"></i>'+
                '<img src=" ' + dados[i].foto + '" alt="Avatar" style="width:100%">' +
                '<div class="descricao">' +
                    '<h4 id="nome" ><b>'+ dados[i].nome + '</b></h4>' +
                    '<p> '+ dados[i].categoria +'</p>' +
                    '<p> R$ '+ dados[i].preco +'</p>' +
                '</div>' +
            '</div>'
}

$("#produtos").append(html);


function handleAccepted(){
    let nome = document.getElementById("nome").value;
    let nome_rua = document.getElementById("nome_rua").value;
    let numero = document.getElementById("numero").value;
    let complemento = document.getElementById("complemento").value;
    let bairro = document.getElementById("bairro").value;

    let pedido = [{
        destinatario: {
            "nome": nome,
            "rua": nome_rua,
            "numero": numero,
            "complemento": complemento,
            "bairro": bairro,
        },
        dados,
    }];

    let para_enviar = JSON.stringify(pedido);

    sessionStorage.setItem('pedidos', para_enviar);
}