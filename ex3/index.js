/*
Nossa loja cresceu e estamos faturando muito dinheiro e tendo lucro, por isso 
resolvemos fazer uma promoção bombástica, para os nossos consumidores. 
Faça um programa que pergunte a pessoa usuária desde quando ela é nossa 
cliente. 

Além disso, solicite o id , nome do Produto , preço do Produto, quantidade 
do Estoque . Você deve perguntar para a pessoa deseja continuar cadastrando, se 
ela confirmar que deseja, continue perguntando os dados do produto. Se a pessoa 
não confirmar, deve imprimir "Você finalizou os cadastros ". 

Além disso, devemos considerar os seguintes itens:

Se a pessoa é nossa cliente a mais de 1 ano, todos os produtos devem ter um 
desconto de 10% . "Você tem 10% de desconto nos nossos produtos";

Se a pessoa é nossa cliente a mais de 2 anos, todos os produtos devem ter um 
desconto de 20% . Imprima essa mensagem para a pessoa : "Você tem 20% de 
desconto nos nossos produtos";

Se a pessoa é nossa cliente a mais de 3 anos, todos os produtos devem ter um 
desconto de 30% . "Você tem 30% de desconto nos nossos produtos";

Além disso, devemos ter as mesmas confirmações das características do 
produtos.
*/

let tempoCliente = parseInt(prompt("Desde quando você é nosso cliente (em anos)?"));
let continuar = true;

while (continuar) {
    let id = prompt("Digite o ID do produto:");
    let nome = prompt("Digite o nome do produto:");
    let preco = parseFloat(prompt("Digite o preço do produto:"));
    let quantidade = parseInt(prompt("Digite a quantidade em estoque:"));

    let desconto = 0;

    if (tempoCliente > 3) {
        desconto = 0.3; 
        document.write("Você tem 30% de desconto nos nossos produtos.");
    } else if (tempoCliente > 2) {
        desconto = 0.2; 
        document.write("Você tem 20% de desconto nos nossos produtos.");
    } else if (tempoCliente > 1) {
        desconto = 0.1;
        document.write("Você tem 10% de desconto nos nossos produtos.");
    } else {
        document.write("Você não possui desconto neste momento.");
    }

    document.write(`Produto cadastrado: ${nome}`);

    let resposta = prompt("Deseja continuar cadastrando produtos? (s/n)").toLowerCase();
    if (resposta !== 's') {
        continuar = false;
        document.write("Você finalizou os cadastros.");
    }
}
