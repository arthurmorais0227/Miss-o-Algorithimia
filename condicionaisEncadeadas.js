let ouro = 10;
let valorEspada = 50;
console.log("Saldo inicial", ouro);
let xp = 10;

if (ouro >= valorEspada && xp >= 80) {
    console.log("Obaaaa! Espada comprada com sucesso.");
    ouro -= valorEspada;
    console.log("Saldo final", ouro);
} else if (ouro >= valorEspada && xp <= 50) {
    console.log("Você pode ter o dinheiro, mas não tem xp suficiente para essa compra!");
} else {
    let diferenca = valorEspada - ouro;
    console.log(`Oie, pobrinho. Faltam ${diferenca} moedas de ouro para você comprar sua espada.`);
}