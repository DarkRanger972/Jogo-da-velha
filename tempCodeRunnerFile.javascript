const prompt = require('prompt-sync')(); // Certifique-se de ter instalado o prompt-sync

let tabuleiro = [
  '1', '2', '3',
  '4', '5', '6',
  '7', '8', '9'
];

let jogador = 'X'; // Jogador X começa
let vencedor = null;

function imprimirTabuleiro() {
  console.log(`
    ${tabuleiro[0]} | ${tabuleiro[1]} | ${tabuleiro[2]}
   -----------
    ${tabuleiro[3]} | ${tabuleiro[4]} | ${tabuleiro[5]}
   -----------
    ${tabuleiro[6]} | ${tabuleiro[7]} | ${tabuleiro[8]}
  `);
}

function verificarVencedor() {
  let combinacoesVencedoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let combinacao of combinacoesVencedoras) {
    let [a, b, c] = combinacao;
    if (tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
      vencedor = tabuleiro[a];
      return;
    }
  }
}

function jogar() {
  while (vencedor === null) {
    imprimirTabuleiro();
    let escolha = parseInt(prompt(`Jogador ${jogador}, escolha uma posição (1-9): `)) - 1;

    if (isNaN(escolha) || escolha < 0 || escolha > 8 || tabuleiro[escolha] === 'X' || tabuleiro[escolha] === 'O') {
      console.log('Escolha inválida! Tente novamente.');
      continue;
    }

    tabuleiro[escolha] = jogador;
    verificarVencedor();

    if (vencedor === null) {
      jogador = jogador === 'X' ? 'O' : 'X';
    } else {
      imprimirTabuleiro();
      console.log(`Jogador ${vencedor} venceu!`);
    }
  }
}

jogar();
