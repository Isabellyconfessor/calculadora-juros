import entradaDados from 'readline-sync';

console.log("Aplicação de juros:\n");

let taxa_juros;

let valor_devido = entradaDados.question("Informe o valor devido: R$");

if (valor_devido > 0) {
    let dias_atrasado = entradaDados.question("\nInforme quantos dias se passaram desde o vencimento do boleto: ");

    if (dias_atrasado > 0) {

        if (dias_atrasado > 15) {
            taxa_juros = 10;
        }
        else {
            taxa_juros = 5;
        }

        valor_devido = Number(valor_devido);
        dias_atrasado = Number(dias_atrasado);

        let total_juros = (valor_devido / 100) * taxa_juros;
        let valor_total = valor_devido + total_juros;

        console.log("\nValor original da dívida: R$ "+valor_devido);
        console.log("Dias atrasados: "+dias_atrasado);
        console.log("Taxa de juros: "+taxa_juros+"%");
        console.log("Valor total com juros: R$ "+valor_total);
    }
    else {
        console.log("Você está em dia!");
    }
}
else {
    console.log("O valor da dívida deve ser maior que zero!");
}