console.log(produtos)

var html = '';

for(var i = 0; i < produtos.length; i++){
    html += '<div class="card">' +
                '<img src=" ' + produtos[i].foto + '" alt="Avatar" style="width:100%">' +
                '<div class="descricao">' +
                    '<h4><b>' + produtos[i].nome + '</b></h4>' +
                    '<p>Categoria: '+ produtos[i].categoria +'</p>' +
                    '<p>'+ produtos[i].preco +'</p>' +
                '</div>' +
            '</div>'
}

$('#produtos').append(html)

$('.card').click(function(event) {
    console.log("clicou no elemento: " + event )
})