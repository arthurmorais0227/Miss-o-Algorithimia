// Dados iniciais 
let vida = 60;
let energia = 40;
let xp = 800;
let ouro = 200;
let nivel = 3;

// Parte 1 - Estado de Saúde de Ayla

if(vida >= 80) {
    console.log("Ayla está em ótima forma!");
} else if (vida >= 40) {
    console.log("Ayla está ferida, mas ainda pode lutar.");
} else { 
    console.log("Ayla está em estado crítico, recue!");
}

// Parte 2 - Missão

if (vida >= 50 && energia >= 50) {
    console.log("Ayla entra no calabouço.");
} else { 
    console.log("Ayla não pode seguir para calabouço");
}

// PArte 3 - Sobre de nível

if (xp >= 1000) {
    nivel++
    console.log("Ayla subiu de nível.");
} else {
    console.log("Aaquirra mais xp apra subir de nível");
}

// Parte 4 - Nova armadura

if (ouro >= 300) {
    console.log("Ayla comprou a armadura mágica.");
} else {
    console.log("Ayla não tem ouro suficiente.")
}