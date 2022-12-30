// Operador lógico que retorna com dados salvos, ou string vazia, utilizando localStorage.getItem, modificando o valor de `string` com JSON.parse()

const form = document.getElementById("novoitem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []



// Uso do forEach para que todos os itens já escritos na lista sejam mantidos ao atualizar a página 
 itens.forEach(elemento => {
  criaElemento(elemento)
  
 });

// Refatoração do addEventListener para receber as funções extras da função criaElemento
form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nome =evento.target.elements['nome'];
  const quantidade =evento.target.elements['quantidade'];

  const existe = itens.find(elemento => elemento.nome === nome.value)

  const itemAtual = {
    "nome": nome.value,
    "quantidade": quantidade.value

}

  if (existe) {
      itemAtual.id = existe.id

      atualizaElemento(itemAtual);

      itens[intens.findIndex(elemento => elemento.id === existe.id)] = itemAtual

  }
  else {
itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id +1 : 0;

criaElemento(itemAtual);

  

itens.push(itemAtual)

  }


  

  

localStorage.setItem("itens", JSON.stringify(itens))

 nome.value = "";
  quantidade.value = "";






})
 // Refatoração da função `criaElemento` para que possua apenas a função que faça sentido ao nome.
function criaElemento (item) {

    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const quantidadeItem = document.createElement('strong');

    quantidadeItem.innerHTML = item.quantidade;
    quantidadeItem.dataset.id = item.id

    novoItem.appendChild(quantidadeItem);
    novoItem.innerHTML += item.nome;

    novoItem.appendChild(botaoDeleta(item.id));

    lista.appendChild(novoItem)

   

  
}

function atualizaElemento (item) {

  document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade


}

function botaoDeleta ( id) {
const elementoBotao = document.createElement("button")
  elementoBotao.innerText = "X"

  elementoBotao.addEventListener("click", function () {
      deletaElemento(this.parentNode, id)

  })

  return elementoBotao
}

function deletaElemento(tag, id) {
tag.remove();

itens.splice(itens.findIndex(elemento => elemento.id === id),1)

localStorage.setItem("itens", JSON.stringify(itens))
}