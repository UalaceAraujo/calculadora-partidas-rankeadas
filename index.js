function calcularRanqueada(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = vitorias === 10 ? "Ferro" : "Imortal";
    }

    return { saldo, nivel };
}

const partidas = [
    { vitorias: 8, derrotas: 3 },
    { vitorias: 15, derrotas: 5 },
    { vitorias: 45, derrotas: 20 },
    { vitorias: 75, derrotas: 30 },
    { vitorias: 88, derrotas: 12 },
    { vitorias: 95, derrotas: 10 },
    { vitorias: 120, derrotas: 15 }
];

for (let i = 0; i < partidas.length; i++) {
    const { vitorias, derrotas } = partidas[i];
    const resultado = calcularRanqueada(vitorias, derrotas);
    console.log(`O Herói tem de saldo de ${resultado.saldo} está no nível de ${resultado.nivel}`);
}
