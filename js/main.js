// Operador lógico que retorna com dados salvos, ou string vazia, utilizando localStorage.getItem, modificando o valor de `string` com JSON.parse()

const form = document.getElementById("novoitem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []


console.log(itens)
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

  if (existe) {

    quantidade.value += quantidade.value;

  }


  const itemAtual = {
    "nome": nome.value,
    "quantidade": quantidade.value

}

  criaElemento(itemAtual);

  

itens.push(itemAtual)

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

    novoItem.appendChild(quantidadeItem);
    novoItem.innerHTML += item.nome;

    lista.appendChild(novoItem)

   

    





}