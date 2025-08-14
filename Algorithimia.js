let nome = "Legolas Aragorn";
let classe = "Arqueiro";
let nivel = 10;
let vida = 60;
let ouro = 10000;
let xp = 50;

const NOME_ARMA = "Arco e flecha celestial";
const DANO_BASE = 80;
const RARIDADE = "Gloriosa";
const NOME_ARMADURA = "Armadura póstuma";
const DEFESA_BASE = 70;
const ELEMENTO = "Almas";

console.log("Dados do personagem:");
console.log("                       ");
console.log(`🌟 Nome: ${nome}`);
console.log(`🔥 Classe: ${classe}`);
console.log(`📈 Nível: ${nivel}`);
console.log(`❤️ Vida: ${vida}`);
console.log(`🪙 Ouro: ${ouro}`);
console.log(`🏅 XP: ${xp}`);
console.log(`⚔️ Arma: ${NOME_ARMA}`);
console.log(`💥 Dano Base: ${DANO_BASE}`);
console.log(`💥 Nome da armadura: ${NOME_ARMADURA}`);
console.log(`🛡 Defesa Base: ${DEFESA_BASE}`);
console.log(`✨ Raridade: ${RARIDADE}`);
console.log(`💀 Elemento: ${ELEMENTO}`);
console.log(`                       `);

console.log(
  `"𝓛𝓮𝓰𝓸𝓵𝓪𝓼 𝓐𝓻𝓪𝓰𝓸𝓻𝓷 𝓽𝓻𝓮𝓲𝓷𝓸𝓾 𝓲𝓷𝓬𝓪𝓷𝓼𝓪𝓿𝓮𝓵𝓶𝓮𝓷𝓽𝓮 𝓮𝓶 𝓫𝓾𝓼𝓬𝓪 𝓭𝓮 𝓻𝓮𝓬𝓾𝓹𝓮𝓻𝓪𝓻 𝓼𝓮𝓾 𝓻𝓮𝓲𝓷𝓸 𝓹𝓮𝓻𝓭𝓲𝓭𝓸 𝓮 𝓰𝓪𝓷𝓱𝓸𝓾 150 𝓹𝓸𝓷𝓽𝓸𝓼 𝓭𝓮 𝓧𝓟."`
);
console.log(`XP atual: ${(xp += 150)}.`);
console.log(`                       `);
let vidaAtual = vida + 40;
let ouroAtual = ouro - 300;
console.log(
  `"𝓔𝓶 𝓫𝓾𝓼𝓬𝓪 𝓭𝓮 𝓶𝓮𝓵𝓱𝓸𝓻𝓪𝓻 𝓼𝓾𝓪 𝓼𝓪𝓾𝓭𝓮 𝓹𝓪𝓻𝓪 𝓲𝓻 𝓮𝓶 𝓭𝓲𝓻𝓮𝓬𝓪𝓸 𝓪𝓸 𝓼𝓮𝓾 𝓻𝓮𝓲𝓷𝓸 𝓹𝓮𝓻𝓭𝓲𝓭𝓸, 𝓸 𝓻𝓮𝓲 𝓭𝓮𝓼𝓽𝓻𝓸𝓷𝓪𝓭𝓸 𝓬𝓸𝓶𝓹𝓻𝓪 𝓾𝓶𝓪 𝓹𝓸𝓬𝓪𝓸 𝓭𝓮 𝓿𝓲𝓭𝓪 𝓹𝓸𝓻 300 𝓶𝓸𝓮𝓭𝓪𝓼 𝓭𝓮 𝓸𝓾𝓻𝓸."`
);
console.log(`Moedas atuais: ${ouroAtual}`);
console.log(`Vida atual: ${vidaAtual}`);
console.log(`                       `);
let danoTotal = DANO_BASE * 2;
console.log(
  `"𝓓𝓾𝓻𝓪𝓷𝓽𝓮 𝓼𝓾𝓪 𝓳𝓸𝓻𝓷𝓪𝓭𝓪 𝓪𝓽𝓮 𝓼𝓾𝓪 𝓽𝓮𝓻𝓻𝓪 𝓷𝓪𝓽𝓪𝓵, 𝓐𝓻𝓪𝓰𝓸𝓻𝓷 𝓮𝓷𝓬𝓸𝓷𝓽𝓻𝓸𝓾 𝓾𝓶 𝓶𝓪𝓰𝓸 𝓺𝓾𝓮 𝓮𝓷𝓬𝓪𝓷𝓽𝓸𝓾 𝓼𝓮𝓾 𝓐𝓻𝓬𝓸 𝓮 𝓯𝓵𝓮𝓬𝓱𝓪 𝓬𝓮𝓵𝓮𝓼𝓽𝓲𝓪𝓵, 𝓭𝓸𝓫𝓻𝓪𝓷𝓭𝓸 𝓸 𝓭𝓪𝓷𝓸 𝓭𝓮 𝓼𝓾𝓪 𝓪𝓻𝓶𝓪."`
);
console.log(`Dano total do Arco e flecha celestial: ${danoTotal}`);
console.log(`                       `);

ataqueTotal = nivel + danoTotal;
defesaTotal = DEFESA_BASE + nivel / 2;

console.log(
  `𝓛𝓮𝓰𝓸𝓵𝓪𝓼 𝓐𝓻𝓪𝓰𝓸𝓻𝓷 𝓮𝓼𝓽𝓪𝓿𝓪 𝓼𝓮 𝓼𝓮𝓷𝓽𝓲𝓷𝓭𝓸 𝓹𝓻𝓮𝓹𝓪𝓻𝓪𝓭𝓸 𝓷𝓸𝓿𝓪𝓶𝓮𝓷𝓽𝓮 𝓹𝓪𝓻𝓪 𝓽𝓮𝓷𝓽𝓪𝓻 𝓻𝓮𝓬𝓾𝓹𝓮𝓻𝓪𝓻 𝓼𝓮𝓾 𝓡𝓮𝓲𝓷𝓸 𝓟𝓮𝓻𝓭𝓲𝓭𝓸 𝓭𝓸𝓼 𝓔𝓵𝓯𝓸𝓼 𝓐𝓻𝓺𝓾𝓮𝓲𝓻𝓸𝓼. 𝓜𝓪𝓼 𝓹𝓻𝓮𝓬𝓲𝓼𝓪𝓿𝓪 𝓬𝓱𝓮𝓬𝓪𝓻 𝓼𝓮 𝓽𝓸𝓭𝓸𝓼 𝓼𝓮𝓾𝓼 𝓪𝓽𝓻𝓲𝓫𝓾𝓽𝓸𝓼 𝓮𝓼𝓽𝓪𝓿𝓪𝓶 𝓭𝓮 𝓪𝓬𝓸𝓻𝓭𝓸 𝓹𝓪𝓻𝓪 𝓮𝓼𝓽𝓪 𝓽𝓮𝓷𝓽𝓪𝓽𝓲𝓿𝓪.`
);
console.log(`                       `);

let vidaSuficiente = vidaAtual > 70;
let ataqueForte = ataqueTotal > 60;
let nivelAvancado = nivel >= 10;
let podeEnfrentarOberon = vidaSuficiente && (ataqueForte || nivelAvancado);

console.log(
  `❤️ A vida de Aragorn é suficiente para enfrentar Oberon, o novo imperador dos elfos? ${vidaSuficiente}.`
);
console.log(
  `---------------------------------------------------------------------------------------------------------------------------------------------`
);
console.log(
  `⚔️ O ataque de Aragorn é suficiente para enfrentar Oberon e seus guardiões? ${ataqueForte}.`
);
console.log(
  `---------------------------------------------------------------------------------------------------------------------------------------------`
);
console.log(
  `📈 O nível de Aragorn é suficiente para superar as bruxas de Oberon e libertar seu povo? ${nivelAvancado}.`
);
console.log(
  `---------------------------------------------------------------------------------------------------------------------------------------------`
);
console.log(
  `💀 Aragorn tem poder de enfrentamento suficiente para enfrentar Oberon em uma batalha até a morte pelo Reino dos Elfos Arqueiros? ${podeEnfrentarOberon}.`
);

let vidaGuardiao = 50;
let vidaBruxa = 40;
let quantidadeGuardioes = 10;
let quantidadeBruxas = 15;
let vidaOberon = 300;
let golpeAncestral = 200;

console.log(`                       `);
console.log(
  `𝓒𝓸𝓶𝓸 𝓿𝓲𝓼𝓽𝓸 𝓷𝓸 ú𝓵𝓽𝓲𝓶𝓸 𝓬𝓪𝓹í𝓽𝓾𝓵𝓸, 𝓛𝓮𝓰𝓸𝓵𝓪𝓼 𝓐𝓻𝓪𝓰𝓸𝓻𝓷 𝓹𝓸𝓼𝓼𝓾𝓲𝓪 𝓣𝓞𝓓𝓞𝓢 𝓸𝓼 𝓪𝓽𝓻𝓲𝓫𝓾𝓽𝓸𝓼 𝓹𝓪𝓻𝓪 𝓲𝓻 𝓮𝓶𝓫𝓾𝓼𝓬𝓪 𝓭𝓮 𝓭𝓸 𝓼𝓮𝓾 𝓻𝓮𝓲𝓷𝓸 𝓹𝓮𝓻𝓭𝓲𝓭𝓸 𝓷𝓸𝓿𝓪𝓶𝓮𝓷𝓽𝓮.`
);
console.log(
  `𝓐𝓻𝓪𝓰𝓸𝓻𝓷 𝓱𝓪𝓿𝓲𝓪 𝓹𝓮𝓻𝓭𝓲𝓭𝓸 𝓼𝓮𝓾 𝓡𝓮𝓲𝓷𝓸 𝓭𝓸𝓼 𝓔𝓵𝓯𝓸𝓼 𝓐𝓻𝓺𝓾𝓮𝓲𝓻𝓸𝓼 𝓹𝓪𝓻𝓪 𝓞𝓫𝓮𝓻𝓸𝓷, 𝓾𝓶 𝓰𝓻𝓪𝓷𝓭𝓮 𝓰𝓸𝓫𝓵𝓲𝓷 𝓭𝓪 𝓻𝓮𝓰𝓲ã𝓸.`
);
console.log(
  `𝓓𝓾𝓻𝓪𝓷𝓽𝓮 𝓼𝓾𝓪 𝓳𝓸𝓻𝓷𝓪𝓭𝓪, 𝓐𝓻𝓪𝓰𝓸𝓻𝓷 𝓭𝓮𝓾 𝓾𝓶 𝓾𝓹𝓰𝓻𝓪𝓭𝓮 𝓰𝓻𝓪𝓷𝓭𝓲𝓸𝓼𝓸 𝓷𝓸 𝓭𝓪𝓷𝓸 𝓭𝓮 𝓼𝓮𝓾 𝓐𝓻𝓬𝓸 𝓮 𝓯𝓵𝓮𝓬𝓱𝓪 𝓬𝓮𝓵𝓮𝓼𝓽𝓲𝓪𝓵, 𝓼𝓪𝓲𝓷𝓭𝓸 𝓭𝓸 𝓭𝓪𝓷𝓸 𝓫𝓪𝓼𝓮 𝓭𝓮 ${DANO_BASE} 𝓹𝓪𝓻𝓪 ${ataqueTotal} 𝓭𝓮 𝓭𝓪𝓷𝓸 𝓯𝓲𝓷𝓪𝓵 𝓮 𝓶𝓮𝓵𝓱𝓸𝓻𝓪𝓷𝓭𝓸 𝓼𝓮𝓾𝓼 𝓹𝓸𝓷𝓽𝓸𝓼 𝓭𝓮 𝔁𝓹 𝓮𝓶 𝓶𝓪𝓲𝓼 𝓭𝓮 300%.`
);
console.log(
  `𝓐𝓻𝓪𝓰𝓸𝓻𝓷 𝓼𝓮 𝓿𝓲𝓾 𝓹𝓻𝓸𝓷𝓽𝓸, 𝓮 𝓼𝓮𝓾 𝓭𝓮𝓼𝓽𝓲𝓷𝓸 𝓮𝓼𝓽𝓪𝓿𝓪 𝓹𝓻𝓸𝓽𝓮𝓰𝓲𝓭𝓸 𝓹𝓸𝓻 𝓼𝓾𝓪 𝓐𝓻𝓶𝓪𝓭𝓾𝓻𝓪 𝓟ó𝓼𝓽𝓾𝓶𝓪, 𝓺𝓾𝓮 𝓰𝓪𝓷𝓱𝓪 35% 𝓭𝓪 𝓿𝓲𝓭𝓪 𝓭𝓮 𝓰𝓾𝓮𝓻𝓻𝓮𝓲𝓻𝓸𝓼 𝓶𝓸𝓻𝓽𝓸𝓼 𝓹𝓮𝓵𝓸 𝓭𝓸𝓷𝓸 𝓺𝓾𝓮 𝓪 𝓾𝓽𝓲𝓵𝓲𝔃𝓪 𝓮 𝓽𝓮𝓶 𝓾𝓶𝓪 𝓭𝓮𝓯𝓮𝓼𝓪 𝓯𝓲𝓷𝓪𝓵 𝓭𝓮 ${defesaTotal}.`
);
console.log(
  `𝓐𝓸 𝓬𝓱𝓮𝓰𝓪𝓻 𝓹𝓮𝓻𝓽𝓸 𝓭𝓮 𝓼𝓮𝓾 𝓪𝓷𝓽𝓲𝓰𝓸 𝓻𝓮𝓲𝓷𝓸, 𝓐𝓻𝓪𝓰𝓸𝓻𝓷 𝓼𝓮 𝓭𝓮𝓹𝓪𝓻𝓪 𝓬𝓸𝓶 𝓶𝓪𝓲𝓼 𝓭𝓮 10 𝓰𝓾𝓪𝓻𝓭𝓲õ𝓮𝓼 𝓮 𝓾𝓽𝓲𝓵𝓲𝔃𝓪 𝓼𝓮𝓾 𝓐𝓻𝓬𝓸 𝓮 𝓯𝓵𝓮𝓬𝓱𝓪 𝓬𝓮𝓵𝓮𝓼𝓽𝓲𝓪𝓵 𝓹𝓪𝓻𝓪 𝓶𝓪𝓽á-𝓵𝓸𝓼 𝓬𝓸𝓶 ${Math.ceil(
    (vidaGuardiao * quantidadeGuardioes) / ataqueTotal
  )} 𝓰𝓸𝓵𝓹𝓮𝓼.`
);
console.log(
  `𝓐𝓭𝓮𝓷𝓽𝓻𝓪𝓷𝓭𝓸 𝓶𝓪𝓲𝓼 𝓪𝓼 𝓷𝓸𝓿𝓪𝓼 𝓽𝓮𝓻𝓻𝓪𝓼 𝓼𝓸𝓶𝓫𝓻𝓲𝓪𝓼 𝓭𝓮 𝓼𝓮𝓾 𝓻𝓮𝓲𝓷𝓸 𝓹𝓮𝓻𝓭𝓲𝓭𝓸, 𝓐𝓻𝓪𝓰𝓸𝓻𝓷 𝓮𝓷𝓬𝓸𝓷𝓽𝓻𝓪 𝓶𝓪𝓲𝓼 𝓭𝓮 15 𝓫𝓻𝓾𝔁𝓪𝓼 𝓺𝓾𝓮 𝓲𝓻𝓲𝓪𝓶 𝓯𝓪𝔃𝓮𝓻 𝓭𝓮 𝓽𝓾𝓭𝓸 𝓹𝓪𝓻𝓪 𝓹𝓪𝓻á-𝓵𝓸.`
);
console.log(
  `𝓟𝓪𝓻𝓪 𝓭𝓮𝓻𝓻𝓸𝓽á-𝓵𝓪𝓼, 𝓐𝓻𝓪𝓰𝓸𝓻𝓷 𝓾𝓽𝓲𝓵𝓲𝔃𝓪 𝓪 𝓱𝓪𝓫𝓲𝓵𝓲𝓭𝓪𝓭𝓮 𝓭𝓮 𝓼𝓾𝓪 𝓪𝓻𝓶𝓪𝓭𝓾𝓻𝓪 𝓮 𝓻𝓮𝓬𝓾𝓹𝓮𝓻𝓪 𝓼𝓾𝓪 𝓿𝓲𝓭𝓪, 𝓰𝓪𝓷𝓱𝓪𝓷𝓭𝓸 𝓾𝓶 𝓫𝓸𝓸𝓼𝓽 𝓭𝓮 𝓮𝓷𝓮𝓻𝓰𝓲𝓪, 𝓯𝓲𝓬𝓪𝓷𝓭𝓸 𝓬𝓸𝓶 ${
    (vidaGuardiao * quantidadeGuardioes * 0, 35) + vidaAtual
  } 𝓹𝓸𝓷𝓽𝓸𝓼 𝓭𝓮 𝓿𝓲𝓭𝓪, 𝓯𝓲𝓬𝓪𝓷𝓭𝓸 𝓬𝓸𝓶 𝓪 𝓪𝓻𝓶𝓪𝓭𝓾𝓻𝓪 𝔃𝓮𝓻𝓪𝓭𝓪. 𝓣𝓸𝓭𝓪𝓼 𝓯𝓸𝓻𝓪𝓶 𝓶𝓸𝓻𝓽𝓪𝓼 𝓹𝓸𝓻 ${Math.ceil(
    (vidaBruxa * quantidadeBruxas) / ataqueTotal
  )} 𝓰𝓸𝓵𝓹𝓮𝓼.`
);
vidaAtual = vidaAtual + (quantidadeGuardioes * 0, 35);
defesaTotal = DEFESA_BASE * 0;
console.log(
  `𝓢𝓾𝓫𝓲𝓷𝓭𝓸 𝓸𝓼 𝓪𝓵𝓹𝓮𝓼 𝓭𝓪𝓺𝓾𝓮𝓵𝓪𝓼 𝓽𝓮𝓻𝓻𝓪𝓼, 𝓐𝓻𝓪𝓰𝓸𝓻𝓷 𝓮𝓷𝓬𝓸𝓷𝓽𝓻𝓸𝓾 𝓼𝓮𝓾 𝓶𝓪𝓲𝓸𝓻 𝓲𝓷𝓲𝓶𝓲𝓰𝓸: 𝓞𝓫𝓮𝓻𝓸𝓷. 𝓢𝓮𝓻á 𝓺𝓾𝓮 𝓸 𝓻𝓮𝓲 𝓛𝓮𝓰𝓸𝓵𝓪𝓼 𝓐𝓻𝓪𝓰𝓸𝓻𝓷 𝓻𝓮𝓬𝓾𝓹𝓮𝓻𝓪𝓻á 𝓼𝓮𝓾 𝓽𝓻𝓸𝓷𝓸 𝓼𝓮𝓶 𝓪𝓻𝓶𝓪𝓭𝓾𝓻𝓪𝓼 𝓭𝓮 𝓹𝓻𝓸𝓽𝓮çã𝓸?`
);
console.log(
  `𝓐𝓸 𝓼𝓾𝓫𝓲𝓻 𝓪𝓺𝓾𝓮𝓵𝓪𝓼 𝓶𝓸𝓷𝓽𝓪𝓷𝓱𝓪𝓼, 𝓛𝓮𝓰𝓸𝓵𝓪𝓼 𝓐𝓻𝓪𝓰𝓸𝓻𝓷 𝓭𝓮𝓬𝓲𝓭𝓮 𝓪𝓽𝓲𝓿𝓪𝓻 𝓸 𝓼𝓾𝓹𝓮𝓻, 𝓶𝓮𝓰𝓪, 𝓫𝓵𝓪𝓼𝓽𝓮𝓻, 𝓱𝓲𝓹𝓮𝓻 𝓹𝓸𝓭𝓮𝓻 𝓬𝓮𝓵𝓮𝓼𝓽𝓲𝓪𝓵 𝓭𝓮 𝓼𝓮𝓾 𝓐𝓻𝓬𝓸 𝓮 𝓯𝓵𝓮𝓬𝓱𝓪 𝓬𝓮𝓵𝓮𝓼𝓽𝓲𝓪𝓵.`
);
console.log(
  `𝓔𝓵𝓮 𝓾𝓼𝓸𝓾 𝓽𝓸𝓭𝓸 𝓸 𝓹𝓸𝓭𝓮𝓻 𝓰𝓾𝓪𝓻𝓭𝓪𝓭𝓸 𝓭𝓮 𝓪𝓷𝓸𝓼 𝓭𝓮 𝓵𝓮𝓰𝓪𝓭𝓸 𝓭𝓮 𝓹𝓸𝓭𝓮𝓻 𝓭𝓮 𝓼𝓮𝓾𝓼 𝓪𝓷𝓽𝓮𝓹𝓪𝓼𝓼𝓪𝓭𝓸𝓼 𝓳á 𝓶𝓸𝓻𝓽𝓸𝓼, 𝓰𝓮𝓻𝓪𝓷𝓭𝓸 𝓾𝓶 𝓻𝓪𝓲𝓸 𝓮𝓷𝓸𝓻𝓶𝓮 𝓮𝓶 𝓞𝓫𝓮𝓻𝓸𝓷 𝓭𝓮 ${golpeAncestral} 𝓭𝓮 𝓭𝓪𝓷𝓸.`
);
console.log(
  `𝓞𝓫𝓮𝓻𝓸𝓷 𝓹𝓮𝓻𝓭𝓮𝓾 ${Math.floor(
    (golpeAncestral * 100) / vidaOberon
  )}% 𝓭𝓮 𝓼𝓾𝓪 𝓿𝓲𝓭𝓪 𝓼𝓮𝓶 𝓷𝓮𝓶 𝓼𝓮 𝓺𝓾𝓮𝓻 𝓮𝓷𝓬𝓸𝓼𝓽𝓪𝓻 𝓮𝓶 𝓐𝓻𝓪𝓰𝓸𝓻𝓷. 𝓛𝓮𝓰𝓸𝓵𝓪𝓼 𝓼𝓮𝓷𝓽𝓲𝓾 𝓾𝓶𝓪 𝓼𝓮𝓷𝓼𝓪çã𝓸 𝓭𝓮 𝓹𝓸𝓭𝓮𝓻 𝓪𝓫𝓼𝓾𝓻𝓭𝓪, 𝓮 𝓹𝓪𝓻𝓪 𝓯𝓲𝓷𝓪𝓵𝓲𝔃𝓪𝓻 𝓼𝓾𝓪 𝓫𝓪𝓽𝓪𝓵𝓱𝓪 𝓯𝓲𝓷𝓪𝓵, 𝓭𝓮𝓾 𝓾𝓶 ú𝓵𝓽𝓲𝓶𝓸 𝓰𝓸𝓵𝓹𝓮 𝓭𝓮 𝓯𝓵𝓮𝓬𝓱𝓪 𝓷𝓪𝓺𝓾𝓮𝓵𝓮 𝓖𝓸𝓫𝓵𝓲𝓷 𝓶𝓪𝓵𝓭𝓲𝓽𝓸.`
);
console.log(
  `FIM ----- Legolas Aragorn recupera o Reino dos Elfos Arqueiros e liberta seu povo da escravidão. Ganhou 100 pontos de xp pela vitória nas batalhas.`
);

xp += 100;

console.log("                       ");

console.log("Dados finais do personagem:");
console.log("                       ");
console.log(`🌟 Nome: ${nome}`);
console.log(`🔥 Classe: ${classe}`);
console.log(`📈 Nível: ${nivel}`);
console.log(`❤️ Vida: ${vidaAtual}`);
console.log(`🪙 Ouro: ${ouroAtual}`);
console.log(`🏅 XP: ${xp}`);
console.log(`⚔️ Arma: ${NOME_ARMA}`);
console.log(`💥 Dano Final: ${ataqueTotal}`);
console.log(`⚔️ Defesa final: ${defesaTotal}`);
console.log(`✨ Raridade: ${RARIDADE}`);
console.log(`💀 Elemento: ${ELEMENTO}`);
console.log("                       ");
console.log("-----------------------");
console.log("                       ");
console.log("-----------------------");
// Atributos do nível 1 mais alguns atributos novos

let vidaMaxima = 100;
ouro = 9700;
xp = 300;
let danoFinal = 170;
let protecaoArmadura = 0;

// Atributos novos para batalha

let forca = 80;
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
console.log(
  `Infelizmente, a escrivã do ${localAtual} não conseguiu sobreviver... A partir desse ponto a história não seguirá mais com letras enfeitadas`
);
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

// Caso o personagem tenha ouro maior ou igual ao preço para realizar a reforma no reino, ele poderá realizá-la, perdendo 6000 de ouro e ganhando 50 de xp.
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

// Caso o Reino consiga exportar a quantidade de madeira suficiente para suprir a demanda de reinos vizinhos, ganhará 5000 de ouro.
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

// Caso o personagem alcance 400 de xp, subirá um nível, e por consequência, irá zerar seu XP.
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

// Caso o dinheiro do personagem seja suficiente para reparar seu escudo, ganha 80 pontos de proteção em sua armadura. Se não, o reino inimigo conseguirá atacar o Reino dos Elfos Arqueiros com muitas facilidade.
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
  `${nome} decide então enfrentar ${nomeLiderinimigo} (líder do reino ${reinoInimigo}) em uma batalha pelo reino!`
);
console.log("                       ");

// Caso o dano do personagem seja maior do que a vida de Tounis, ele ganha a batalha. Se não, seu reino irá perder a batalha e personagem será expulso de seu reino.
if (danoFinal >= vidaTounis) {
  console.log(
    `${nome} conseguiu matar ${nomeLiderinimigo} com um golpe e proteger o ${localAtual} do reino ${reinoInimigo}!!`
  );
  combatesVencidos++;
} else {
  console.log(
    `${nome} não conseguiu defender o ${localAtual} de ${nomeLiderinimigo} e seu reino ${reinoInimigo} e foi expulso de seu reino.`
  );
}
console.log("                       ");

// Capítulo 3
console.log("Capítulo 3");
console.log("                       ");

console.log(
  ` 1- Agora, ${nome} deseja fazer uma reforma gigantesca no ${localAtual}, instalando muralhas, deixando as redondezas mais seguras!`
);
console.log(
  `Para isso, ${nome} precisa tomar algumas decisões de upgrades do reino baseadas nos seus atributos!`
);
console.log("                       ");

let muralhas = 3000;

// Caso seu ouro seja maior do que o preço das muralhas e o personagem tiver mais de 10 de nível, poderá comprar as muralhas para proteger o reino.
// Se o personagem possuir o ouro necessário, mas não tiver mais de 10 de nível, não poderá instalar novas muralhase precisará treinar mais para subir seu nível.
// Se o personagem tiver mais de 10 de nível mas não possuir o ouro suficiente, não conseguirá instalar as novas muralhas e precisará exportar mais madeiras para ganhar mais ouro.
// Se o personagem não tiver nem ouro suficiente e nem nível para instalar as novas muralhas, precisará treinar mais e exportar mais madeira, para respectivamente, subir seu nível e ganhar mais ouro.
if (nivel > 10 && ouro > muralhas) {
  console.log(
    "Todas as reformas foram feitas com sucesso e o reino está mais protegido!"
  );
  ouro -= muralhas;
} else if (nivel <= 10 && ouro > muralhas) {
  console.log(
    `${nome} possui o dinheiro necessário para comprar muralhas, mas não possui o nível necessário! Treine mais!`
  );
} else if (nivel > 10 && ouro < muralhas) {
  console.log(
    `${nome} possui o nível necessário, mas não tem ouro suficiente!`
  );
} else {
  console.log(`Treine mais e ganhe mais ouro!!`);
}
console.log("                       ");

let nomeEsposa = "Ellina Luthien";

console.log(
  ` 2- Depois de algumas batalhas lendárias contra inimigos fortíssimos, ${nome} se viu PRECISANDO de uma namorada pra continuar sua jornada.`
);
console.log(
  `Entretanto, a mulher que ele tanto almejava era um taaaaanto quanto exigente...`
);
console.log(
  `Para conquistá-la, ${nome}, precisará conter alguns requisitos mínimos em seus novos atributos do nível 2.`
);
console.log(
  `A princesa das estrelas precisa de um namorado que tenha: Pelo menos 75 de força / Tenha pelo menos 60 de agilidade / E que tenha vencido pelo menos 2 combates épicos!`
);
console.log("                       ");
console.log(
  `Estes são os atributos de ${nome}: força = ${forca} / agilidade = ${agilidade} / combates vencidos = ${combatesVencidos}`
);
console.log("                       ");

let nomeFilho = "Frodo Sauron";

// Verificação para saber se Legolas Aragorn possui os atributos necessários para conquistar sua nova donzela!
if (forca >= 75 && agilidade >= 60 && combatesVencidos >= 2) {
  console.log(
    `${nome} e ${nomeEsposa} se casaram e tiveram um filho nove meses depois da lua de mel.`
  );
} else {
  console.log(`${nomeEsposa} recusou o pedido de namoro!`);
}
nomeIrmaoOberon = "Odegorn";

console.log("                       ");
console.log(
  `Durante uma noite sombria no ${localAtual}, um Goblin maldoso entrou no reino por de baixo das muralhas...`
);
console.log(
  `Esse Goblin sorrateiro foi adentrando o ${localAtual} e roubou o filho recém nascido de ${nome}!`
);
console.log(
  `Ao sair da casa de ${nome}, o Goblin maléfico deixou um bilhete para ${nome}, dizendo:  `
);
console.log(`"EU VIM VINGAR MEU IRMÃO! ME CHAMO ODEGORN, IRMÃO DE OBERON!`);
console.log(`VENHA ME ENFRENTAR NO REINO PERDIDO DE ASKAAEK!"`);
console.log(
  `Ao amanhacer, ${nome}, logo notou falta de algo... Seu único e amado filho!`
);
console.log(
  `Durante todo o dia, ${nome} proucurou incasavelmente por seu filho no ${localAtual}. Mas não obteve resultados.`
);
console.log(
  `Foi então que decidiu voltar para onde tudo começou... O quarto de ${nomeFilho}!`
);
console.log(
  `Chegando lá, achou o bilhete deixado por ${nomeIrmaoOberon}, pegou seu mapa e decidiu sair em busca de seu filho primogênito.`
);
console.log("                       ");
console.log("                       ");
console.log(
  `Acompanhe a próxima jornada de ${nome} no próximo nível (Avançado!)`
);

console.log("                       ");
console.log("                       ");
console.log("-----------------------");
console.log("                       ");
console.log("                       ");

console.log(`CONTINUAÇÃÃÃÃÃÃÃO DA HISTÓRIA!!!`);
console.log("                       ");
console.log("Dados iniciais da parte fina do personagem:");
console.log("                       ");
console.log(`🌟 Nome: ${nome}`);
console.log(`🔥 Classe: ${classe}`);
console.log(`📈 Nível: ${nivel}`);
console.log(`❤️ Vida: ${vidaAtual}`);
console.log(`🪙 Ouro: ${ouroAtual}`);
console.log(`🏅 XP: ${xp}`);
console.log(`⚔️ Arma: ${NOME_ARMA}`);
console.log(`💥 Dano Final: ${ataqueTotal}`);
console.log(`⚔️ Defesa final: ${defesaTotal}`);
console.log(`✨ Raridade: ${RARIDADE}`);
console.log(`💀 Elemento: ${ELEMENTO}`);
console.log("                       ");
console.log(`Recapitulando...`);
console.log("                       ");
// Capítulo 1
console.log(`Capítulo 1`);
console.log("                       ");

console.log(
  `O filho de ${nome} foi sequestrado! Antes de sair em busca de seu filho, ${nome} checa alguns itens que estava levando para a batalha e escolheu alguns Elfos para acompanhá-lo nessa nova jornada!`
);
console.log("                       ");

// Itens do personagem organizados em arrays
let inventario = [
  "Maçã de ouro",
  " Morango do Amor",
  " Sorvete de pistache",
  " Mapa",
  "Poção Boobie Goods",
  " Poção Labubu",
];
let aliados = [
  "Elfo Akurou Nyerd",
  " Mago Viiktor Kriry",
  " Soldado Fieulype Diev",
];
let novosInimigos = [
  "Odegorn",
  " Magos possuídos de Odegorn",
  " Bruxas de Odegorn",
  " Soldados de Odegorn",
];
let rastrosFrodo = [];

// Exibição dos itens iniciais dos arrays
console.log(
  `🎒 Esses foram os itens que foram levados no inventario: ${inventario}.`
);
console.log(
  `👨‍👨‍👦‍👦 Esses foram os personagens que foram em busca de ${nomeFilho}: ${aliados}.`
);
console.log(
  `🔰 Esses são os inimigos que o quarteto de ${localAtual} espera enfrentar: ${novosInimigos}.`
);
console.log(
  `👣 Esses foram os rastros encontrados de ${nomeFilho} até o momento: ${rastrosFrodo}.`
);
console.log("                       ");

// Capítulo 2
console.log(`Capítulo 2`);
console.log("                       ");

let novoReinoInimigo = "Reino de Askaaek";
let localDesejado = "Castelo dos Arrays";

console.log(
  `Ao saírem do ${localAtual}, começaram sua jornada até o ${localDesejado} no ${novoReinoInimigo}!`
);
console.log(
  `Durante 2 dias de caminhada, não acharam nenhuma pista interessante...`
);
console.log(
  `Entretanto, ao chegarem mais perto do ${novoReinoInimigo}, encontraram algumas pegadas de ${nome}!`
);

// Nova atualização nos rastros de Frodo!
rastrosFrodo.push(`Pegadas`);

console.log(
  `👣 Esses foram os rastros encontrados de ${nomeFilho} até o momento: ${rastrosFrodo}.`
);
console.log("                       ");
console.log(
  `Chegando mais perto do ${novoReinoInimigo}, encontraram um grande problema para atravessar uma ponte!`
);
console.log(`Então, decidiram usar o item: ${inventario[5]}.`);
console.log(
  `Esse item tem o poder de gerar levitação! Eles jogam a poção no chão perto dos 4 aventureiros e começaram a flutuar! Assim, atravessando a ponte!`
);
xp += 100;

// Remoção do item já utilizado
inventario.pop(inventario);
console.log(`🎒 Esses foram os itens restantes no iventário: ${inventario}.`);
console.log("                       ");
console.log(`Enfim haviam chegado ao ${novoReinoInimigo}!`);

console.log(
  `Entretanto, para adentrarem ${localDesejado}, precisariam passar por uma checagem de pessoas!`
);
console.log(`O portão do castelo diz: Apenas 3 pessoas do mesmo reino!`);

console.log(
  `Então, o último escolhido para a jornada deveria ficar para fora e esperar a volta de seus companheiros.`
);
console.log(`Esse aliado era: ${aliados[aliados.length - 1]}.`);
aliados.pop(aliados);
console.log(`👨‍👨‍👦‍👦 Aliados restantes: ${aliados}.`);
console.log("                       ");
// Capitulo 3
console.log(`Capítulo 3`);
console.log("                       ");

console.log(
  `Ao chegarem nas portas do castelo, teriam de enfrentar 10 ${novosInimigos[1]}!`
);

let quantidadeSoldados = 10;
let vidaSoldado = 100;
let danoViiktor = 50;
let danoAkurou = 70;
let somaAtaques = 0;
let contador = 0;
let limiteGolpes = 5;

console.log(
  `${nome}, ${aliados} foram para a batalha! Cada soldado Possuía ${vidaSoldado} de vida. ${aliados[0]} dá ${danoAkurou} de dano e ${aliados[1]} dá ${danoViiktor} de dano!`
);
console.log(`Mas para isso, poderiam dar no máximo ${limiteGolpes} golpes.`);
console.log("                       ");

// Loop que vê quantos golpes os personagens precisam dar juntos para vencer os soldados! Se for maior que 5 golpes, perderam a batalha!
for (
  let i = danoAkurou + danoViiktor + danoFinal;
  i < quantidadeSoldados * vidaSoldado;
  i += danoAkurou + danoFinal + danoViiktor
) {
  somaAtaques = somaAtaques + i;
  contador++;
}

// If que checa se conseguiram derrotar os vilões em menos das rodadsa necessárias!
if (contador <= 5) {
  console.log(
    `${nome}, ${aliados} conseguiram derrotar os ${novosInimigos[1]}!`
  );
  console.log(
    `Precisaram dar ${contador} ataques juntos para conquistar a vitória!`
  );
  combatesVencidos++;
  novosInimigos.pop(novosInimigos);
} else {
  console.log(
    `${nome}, ${aliados} NÃO conseguiram derrotar os ${novosInimigos[1]}!`
  );
  console.log(`${nome} como líder da missão perde 50 pontos de vida!`);
  vidaAtual -= 50;
  console.log(`Vida atual: ${vidaAtual}.`);
}

console.log("                       ");
console.log(
  `Continuaram para as entranhas do castelo! Mas antes de entrar, teriam de se apresentar!`
);
console.log("                       ");

// For que chama apresenta os aliados de Legolas para a batalha final!
for (let i = 0; i < aliados.length; i++) {
  if (i === 0) {
    console.log(
      `Esse é ${aliados[0]}. Tem poderes mágicos e poções secretas! 😵‍💫`
    );
  } else {
    console.log(
      `Esse é ${aliados[1]}. Tem poderes de força, geração de feitiços e manas secretas 😎`
    );
  }
}

console.log("                       ");
console.log(`Aliados apresentados! Rumo a batalha final!`);
console.log("                       ");

let vidaOdegorn = 250;
danoAkurou = Math.floor(Math.random() * (40 - 5 + 1) + 5);
let vidaViiktor = 80;
danoViiktor = Math.floor(Math.random() * (70 - 20 + 1) + 20);
let vidaBruxas = 500;
let vidaMagos = 300;

console.log(
  `Adentrando mais um pouco o ${localDesejado}, encontraram os seguintes inimigos: ${novosInimigos}! e mais uma pista de ${nomeFilho}! Um tucho de cabelo!`
);
rastrosFrodo.push(`Tucho de cabelo`);
console.log(
  `👣 Esses foram os rastros encontrados de ${nomeFilho} até o momento: ${rastrosFrodo}.`
);

console.log("                       ");
console.log(
  `OOOPSS, antes da batalha começar, um feitiço das bruxas foi jogado! Esse feitiço gera um dano aleatório nas armas de nossos guerreiros!`
);
console.log(
  `${nomeIrmaoOberon} aparece em uma das escadas do ${localDesejado} e revela que ${nomeFilho} está com ele!`
);

let rodadasFinais = Math.floor(Math.random() * (10 - 1 + 1) + 1);
console.log(
  `Entretanto, para conseguirem resgatar ${nomeFilho}, teriam de derrotar ${novosInimigos} com no máximo ${rodadasFinais} rodadas!`
);
console.log();
console.log(`Que comece a batalha lendária!`);
console.log("                       ");

let contador2 = 0;
let vidaInimigos = vidaBruxas + vidaMagos + vidaOdegorn;

let danoAcumulado = 0;

for (
  let danoTurno = danoAkurou + danoFinal + danoViiktor;
  danoAcumulado < vidaInimigos;
  danoAcumulado += danoTurno
) {
  contador2++;
  let vidaRestante = vidaInimigos - (danoAcumulado + danoTurno);
  if (vidaRestante < 0);
  console.log(
    `Rodada ${contador2}: causaram ${danoTurno} de dano. Dano total: ${
      danoAcumulado + danoTurno
    }. Vida restante dos inimigos: ${vidaRestante}`
  );
}
console.log("                       ");

if (contador2 > rodadasFinais) {
  console.log(
    `Os guerreiros perderam! Como punição, ficam sem ${nomeFilho} e ${nome} perde 50 de vida!`
  );
  vidaAtual -= 50;
} else {
  console.log(`Os guerreiros ganharam com ${contador2} golpes!`);
  console.log(`Ficaram a ${rodadasFinais - contador2} rodadas de perder!`);
  combatesVencidos++;
  novosInimigos.pop();
  novosInimigos.pop();
  novosInimigos.pop();
  console.log(`Inimigos restantes: ${novosInimigos}`);
}
console.log("                       ");

console.log(
  `Ao saírem do ${localDesejado}, precisaram usar uma poção para abrir os portões que estavam trancados. Essa poção era: "${inventario[3]}" e causava uma explosão!`
);
inventario.pop();
console.log(`🎒 Esses foram os itens restantes no iventário: ${inventario}.`);
console.log("                       ");
console.log(
  `Ao saírem do ${localDesejado}, reencontraram um antigo aliado: Fieulype Diev!`
);
aliados.push(` Fieulype Diev`);
console.log(`👨‍👨‍👦‍👦 Aliados restantes: ${aliados}.`);
console.log("                       ");

console.log(`Epílogo`);
console.log("                       ");
console.log(
  `Saindo do ${localDesejado}, seguiram em direção ao ${localAtual}!`
);
console.log(
  `Durante o caminho, encontraram alguns desafios, como fome, frio e calor`
);
console.log(
  `Para resolverem esses problemas, usaram os itens restantes do inventario: ${inventario}`
);
inventario.pop();
inventario.pop();
inventario.pop();
inventario.pop();
console.log(`🎒 Esses foram os itens restantes no iventário: ${inventario}`);
console.log(
  `A experiência daquele local amaldiçoado havia os deixado mais forte para voltarem para casa.`
);
console.log(`Ao chegaram em casa, muitos perguntaram se o objetivo havia sido concluído...`);
console.log(`E sim, eles haviam conseguido resgatar ${nomeFilho}!`);
console.log(`A mulher de ${nome}, ${nomeEsposa}, ficou muito feliz!`);
console.log(`Entretanto, algo em ${nome} estava diferente...`);
console.log(`Ele parecia estar traumatizado, até um tanto quanto eufórico...`);
console.log(`${nome} estava mais poderoso... Um poder do bem? já não se sabe...`);
console.log(`Mas algo estava completamente diferente...`);
console.log("                       ");
console.log(`DADOS FINAIS DO PERSONAGEM`);
console.log("                       ");
console.log(
  `🎒 Esses foram os itens que foram levados no inventario: ${inventario}.`
);
console.log(
  `👨‍👨‍👦‍👦 Esses foram os personagens que foram em busca de ${nomeFilho}: ${aliados}.`
);
console.log(
  `🔰 Esses são os inimigos que o quarteto de ${localAtual} espera enfrentar: ${novosInimigos}.`
);
console.log(
  `👣 Esses foram os rastros encontrados de ${nomeFilho} até o momento: ${rastrosFrodo}.`
);
console.log(`🌟 Nome: ${nome}`);
console.log(`🔥 Classe: ${classe}`);
console.log(`📈 Nível: ${nivel}`);
console.log(`❤️ Vida: ${vida}`);
console.log(`🪙 Ouro: ${ouro}`);
console.log(`🏅 XP: ${xp}`);
console.log(`⚔️ Arma: ${NOME_ARMA}`);
console.log(`💥 Dano Base: ${DANO_BASE}`);
console.log(`💥 Nome da armadura: ${NOME_ARMADURA}`);
console.log(`🛡 Defesa Base: ${DEFESA_BASE}`);
console.log(`✨ Raridade: ${RARIDADE}`);
console.log(`💀 Elemento: ${ELEMENTO}`);
console.log(`                       `);