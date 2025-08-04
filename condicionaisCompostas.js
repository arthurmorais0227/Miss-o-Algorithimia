let ouro = 10;
let valorEspada = 50;
console.log("Saldo inicial", ouro);

if (ouro >= valorEspada) {
    console.log("Obaaaa! Espada comprada com sucesso.");
    ouro -= valorEspada;
    console.log("Saldo final", ouro);
} else {
    let diferenca = valorEspada - ouro;
    console.log(`Oie, pobrinho. Faltam ${diferenca} moedas de ouro para você comprar sua espada.`);
}
