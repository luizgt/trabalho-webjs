window.onload = aplicarFiltro(produtos);
let produtosFiltrados = produtos;
let produtosEscolhidos = [];
var numberPattern = /\d+/g;

var html = "";

function aplicarFiltro(produtosFiltrados) {
  let html = "";

  $("#produtos").empty();

  for(var i = 0; i < produtosFiltrados.length; i++){
        html += '<div class="card">' +
                    '<img src=" ' + produtosFiltrados[i].foto + '" alt="Avatar" style="width:100%">' +
                    '<div class="descricao">' +
                        '<h4 id="nome" ><b>'+ i + " " + produtosFiltrados[i].nome + '</b></h4>' +
                        '<p> '+ produtosFiltrados[i].categoria +'</p>' +
                        '<p> R$ '+ produtosFiltrados[i].preco +'</p>' +
                    '</div>' +
                '</div>'
    }

  $("#produtos").append(html);

  $(".card").click(function (e) {
    var text = $(this).text().split('');
    var id = text[0];
    if(text[1].match(numberPattern)){
        id = id + text[1];
    }
    var elementoClicado = produtosFiltrados[id];
    produtosEscolhidos.push(elementoClicado);

    let para_enviar = JSON.stringify(produtosEscolhidos);
	  sessionStorage.setItem('meus_dados', para_enviar);

    alert("Produto: " + elementoClicado.nome + " adicionado ao seu carrinho :D " )
  });
}

// filtros

$(".item-filtro").click(function () {
    filtrarSexo();
    filtrarValor();
});

$("#valor").mouseup(function (){
    filtrarSexo();
    filtrarValor();
    $("#valor-filtro-tela").text(`R$ ${$("#valor").val()},00`);
})

function filtrarValor(){
    let valorFiltro = $("#valor").val();
    
    produtosFiltrados = produtosFiltrados.filter((produto) => produto.preco < valorFiltro);

    aplicarFiltro(produtosFiltrados);
}

function filtrarSexo(){
    let selecaoMasc = $("#mas").is(":checked");
    let selecaoFem = $("#fem").is(":checked");
    let selecaoInf = $("#inf").is(":checked");
  
    if (selecaoFem === true && selecaoMasc === true && selecaoInf === true) {
      produtosFiltrados = produtos;
    } else if (selecaoFem === true && selecaoMasc === true) {
      produtosFiltrados = produtos.filter((produto) => produto.categoria != "Infantil");
    } else if (selecaoMasc === true && selecaoInf === true) {
      produtosFiltrados = produtos.filter((produto) => produto.categoria != "Feminina");
    } else if (selecaoFem === true && selecaoInf === true) {
      produtosFiltrados = produtos.filter((produto) => produto.categoria != "Masculina");
    } else if (selecaoFem === true){
      produtosFiltrados = produtos.filter((produto) => produto.categoria === "Feminina");
    } else if (selecaoInf === true){
      produtosFiltrados = produtos.filter((produto) => produto.categoria === "Infantil");
    } else if (selecaoMasc === true){
      produtosFiltrados = produtos.filter((produto) => produto.categoria === "Masculina");
    } 
  
    aplicarFiltro(produtosFiltrados);
}