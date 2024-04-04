
let tamanhoPizza = prompt("Qual tamanho de pizza você deseja? (pequena, média, grande)").toLowerCase();
if (!(tamanhoPizza === 'pequena' || tamanhoPizza === 'média' || tamanhoPizza === 'grande')) {
    alert('Tamanho de pizza inválido!');
} else {
    let querRefrigerante = prompt("Você deseja adicionar refrigerante ao seu pedido? (sim ou não)").toLowerCase();
    if (!(querRefrigerante === 'sim' || querRefrigerante === 'não')) {
        alert('Resposta inválida!');
    } else { 
        let valorPizza = tamanhoPizza === 'pequena' ? 20 : (tamanhoPizza === 'média' ? 30 : 40);
        if (querRefrigerante === 'sim') {
            valorPizza += 5; 
        }
        alert('Total a ser pago pelo cliente: R$' + valorPizza.toFixed(2));
    }
}
