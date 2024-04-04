/*
Estamos desenvolvendo o maior E-commerce da América Latina. Para isso, 
estamos desenvolvendo um sistema que cadastra nossos produtos e serviços , 
onde devemos solicitar a pessoa que está cadastrando os produtos , as seguintes 
informações : 
 - Id (identificador único) - Número inteiro;
- Nome do Produto ; 
- Preço do Produto (não pode ser negativo e nem menor que 20 reais) ; 
- Quantidade em Estoque (deve ser maior que 10 e par) ; 
Crie um programa que solicite a pessoa usuária cada uma das informações 
individualmente.
Caso a pessoa usuária não passe as informações, retorne as seguintes 
mensagens em tela : 
- ID => " Identificador não encontrado, passe um número válido " 
- Nome do Produto => "Insira um nome de produto válido "
- Preço do Produto => "Insira um preço de produto válido "
- Quantidade em Estoque => "Insira uma quantidade de produto válida para o 
estoque 
Após verificar cada um dos itens e ter certeza que todos foram preenchidos, 
precisamos verificar o valor do produto para conseguir determinar em qual 
categoria vai.
Se o valor do produto for par, devemos encaminhar o produto para a lista de 
promoção especial e mostrar na tela a seguinte informação : 
" O produto NOME_DO_PRODUTO foi cadastrado com sucesso! Produto adicionado 
na nossa lista de promoções especiais
 */
let id, nome, preco, quantidade;
id = prompt("Digite o Id do produto (número inteiro):");
if (!id || isNaN(id)) {
  alert("Identificador não encontrado, passe um número válido.");
} else {
  nome = prompt("Digite o nome do produto:");
  if (!nome) {
    alert("Insira um nome de produto válido.");
  } else {
    preco = parseFloat(
      prompt(
        "Digite o preço do produto (valor não pode ser negativo nem menor que R$20):"
      )
    );
    if (isNaN(preco) || preco < 0 || preco < 20) {
      alert("Insira um preço de produto válido.");
    } else {
      quantidade = parseInt(
        prompt("Digite a quantidade em estoque (deve ser maior que 10 e par):")
      );
      if (isNaN(quantidade) || quantidade <= 10 || quantidade % 2 !== 0) {
        alert("Insira uma quantidade de produto válida para o estoque.");
      } else {
        let mensagem = `Produto cadastrado com sucesso! Id: ${id}, Nome: ${nome}, Preço: R$${preco}, Quantidade: ${quantidade}`;
        if (preco % 2 === 0) {
          mensagem += `\nO produto ${nome} foi cadastrado com sucesso! Produto adicionado na nossa lista de promoções especiais.`;
        }
        document.write(mensagem);
      }
    }
  }
}
