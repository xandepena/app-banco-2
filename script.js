let saldo = 1000;

function atualizarSaldo() {
    document.getElementById("saldo").innerText = "R$ " + saldo.toFixed(2);
}

function retirada() {
    let valor = parseFloat(prompt("Digite o valor da retirada:"));
    if (!isNaN(valor) && valor > 0 && valor <= saldo) {
        saldo -= valor;
        atualizarSaldo();
    } else {
        alert("Valor inválido ou saldo insuficiente!");
    }
}

function deposito() {
    let valor = parseFloat(prompt("Digite o valor do depósito:"));
    if (!isNaN(valor) && valor > 0) {
        saldo += valor;
        atualizarSaldo();
    } else {
        alert("Valor inválido!");
    }
}