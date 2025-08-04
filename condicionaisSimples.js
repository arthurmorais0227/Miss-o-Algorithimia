let ouro = 150;
let valorEspada = 50;
console.log("Saldo inicial", ouro);

// Quero que Ayla compre uma espada (que custa 75), e para isso preciso verificar se ela tem ouro suficiente. Ao comprar, vou atualizar o valor de ouro.

if (ouro >= valorEspada) {
    console.log("Obaaaa! Espada comprada com sucesso.");
    ouro -= valorEspada;
}
console.log("Saldo final", ouro);