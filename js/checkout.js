// para recuperar, utilizados a mesma chave 'meus_dados'
// lembrem-se de utilizar JSON.parse() para transformar a string em objeto JavaScript!
let dados = JSON.parse(sessionStorage.getItem('pedidos'));
let pessoa = dados[0].destinatario;
let compra = dados[0].dados; 


let html = "";
let valor = 0;

html += '<h3>Parabéns, ' + pessoa.nome + ' você finalizou sua compra, ela será entregue na:</h3>' +
            '<span>' + pessoa.rua + ', </span>' +
            '<span>' + pessoa.numero + ' </span>' +
            '<span>' + pessoa.complemento + '</span>' +
            '<span> - ' + pessoa.bairro + '</span>' +
            '<h3> Detalhes da Compra: </h3>' +
            '<table>' +
                '<tr>' +
                    '<th>Produto</th>' +
                    '<th>Valor</th>' +
                '</tr>';

for(var i = 0; i < compra.length; i++){
    valor += compra[i].preco;
    html += '<tr> <td>'+ compra[i].nome + '</td> <td> R$ ' + compra[i].preco + ',00 </td> </tr>'
    //html += '<span>' + compra[i].nome + ' - valor und: ' + compra[i].preco + ',00 <br> </span>'
};

html += '<tr> <td> Valor Total </td> <td> R$ ' + valor +',00</td> </tr> </table>'

//html += '<h3>Valor total R$ ' + valor + ',00 </h3>'
html += '<h3>Seu pedido chegará em ' + Math.floor(Math.random() * (5 + 1) + 3) + ' dias.</h3>'

$("#detalhes").append(html);