// Atributos do nível 1 mais alguns atributos novos
let nome = "Legolas Aragorn";
let classe = "Arqueiro";
let nivel = 10;
let vidaAtual = 100;
let vidaMaxima = 100;
let ouro = 9700;
let xp = 300;

const NOME_ARMA = "Arco e flecha celestial";
const DANO_BASE = 80;
let danoFinal = 30;
const RARIDADE = "Gloriosa";
const NOME_ARMADURA = "Armadura póstuma";
let protecaoArmadura = 0;
const DEFESA_BASE = 70;
const ELEMENTO = "Almas";

// Atributos novos para batalha

let forca = 20;
let defesa = 0;
let agilidade = 70;
let combatesVencidos = 3;

// Estado atual da história
let localAtual = "Reino dos Elfos Arqueiros";
let missaoAtual = "Reconstruir o Reino dos Elfos Arqueiros";

//Prólogo
console.log(
  `Ao fim da batalha entre Oberon e ${nome}, o personagem principal da história conseguiu recuperar seu ${localAtual} e sua nova missão é reformá-lo e protege-lo de novas ameaças.`
);
console.log("                       ");
console.log("                       ");

//Capítulo 1
console.log("CAPÍTULO 1");
console.log("                       ");

// Primeira condição simples
let reformaCasas = 6000;
console.log(
  ` 1- ${nome} precisa comprar novas casas para os habitantes de seu reino, e para isso precisa gastar ${reformaCasas} moedas de ouro. `
);
console.log("                       ");

if (ouro >= reformaCasas) {
  console.log(
    `${nome} conseguiu comprar novas casas para seus habitantes no reino. Ganhando mais 50 de xp e alegrando seu reino.`
  );
  ouro -= 6000;
  xp += 50;
  console.log(`XP atual: ${xp}. Ouro atual: ${ouro}.`);
  console.log("                       ");
}

// Segunda condição simples
let madeirasExportadas = 300;
let demandaMadeira = 275;
let recompensa = 5000;

console.log(
  ` 2- O ${localAtual} é um grande exportador de madeira para outros reinos. Se conseguirem suprir a demanda de madeira, ganham ${recompensa} moedas de ouro.`
);
console.log("                       ");

if (madeirasExportadas >= demandaMadeira) {
  console.log(
    `${nome} e o ${localAtual} conseguiram exportar ${demandaMadeira} pedaços de madeira e ganharam ${recompensa} moedas de ouro. ${nome} ganhou mais 50 de XP.`
  );
  xp += 50;
  ouro += recompensa;
}
console.log("                       ");

// Terceira condição simples
let xpNecessario = 400;
console.log(
  ` 3- Depois de alguns upgrades no ${localAtual}, ${nome} merece ganhar um upgrade de nível se tiver pelo menos ${xpNecessario} de XP.`
);
console.log("                       ");

if (xp >= xpNecessario) {
  nivel++;
  xp *= 0;
  console.log(`${nome} subiu de nível! Parabéns!`);
  console.log(`XP Atual = ${xp}. Nível Atual: ${nivel}.`);
}
console.log("                       ");

// Capítulo 2
console.log("Capítulo 2");
console.log("                       ");

//Primeira condição composta
let reinoInimigo = "Anderletch Scream";
let custoReparacao = 1000;

console.log(
  ` 1- O reino ${localAtual} estava reconstituído novamente e trabalhando a todo vapor para exportar madeiras. O reino ${reinoInimigo}, por inveja, tentará invadir o ${localAtual}.`
);
console.log("                       ");
console.log(
  `Sabendo da ameaça, ${nome} vai atrás da curandeira de seu reino e busca restaurar sua ${NOME_ARMADURA}. Entretanto, essa restauração custará ${custoReparacao} moedas de ouro.`
);
console.log("                       ");

if (ouro >= custoReparacao) {
  console.log(
    `${nome} conseguiu melhorar sua armadura e conseguirá defender seu reino com excelência!`
  );
  protecaoArmadura += 80;
} else {
  console.log(
    `${nome} não conseguiu restaurar sua armadura e está a mercê do ataque do reino ${reinoInimigo}!`
  );
}
console.log("                       ");

//Segunda condição composta
let nomeLiderinimigo = "Tounis";
let vidaTounis = 120;

console.log(
  `${nome} decide então enfrentar ${nomeLiderinimigo} em uma batalha!`
);
console.log("                       ");

if (danoFinal >= vidaTounis) {
  console.log(
    `${nome} conseguiu matar ${nomeLiderinimigo} com um golpe e proteger o ${localAtual} do reino ${reinoInimigo}!!`
  );
} else {
  console.log(
    `GAME OVER - ${nome} não conseguiu defender o ${localAtual} de ${nomeLiderinimigo} e seu reino ${reinoInimigo}.`
  );

  let nivel = 0;
  let vidaAtual = 0;
  let vidaMaxima = 0;
  let ouro = 0;
  let xp = 0;
  let danoFinal = 0;
  let protecaoArmadura = 0;

}
