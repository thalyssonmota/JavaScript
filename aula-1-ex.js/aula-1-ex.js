// Cálculo da média diária de consumo de combustível
const consumoMensal = 670;
const distanciaMensal = 1000;
const diasNoMes = 31;

const mediaDiaria = consumoMensal / diasNoMes;

console.log(`A média diária de consumo de combustível é: ${mediaDiaria.toFixed(2)} litros.`);

// Algoritmo para calcular a area de uma parede retangular

// const altura = 2.5;
// const largura = 3;

// const areaParede = altura * largura;

// console.log(`A área da parede é: ${areaParede.toFixed(2)} metros quadrados.`);

// criar um algoritmo que calcule a área de uma parede e me diga quantos litros de tinta são necessários para pintar essa parede, sabendo que 1 litro de tinta pinta 3 metros quadrados.


// const altura = 5.4;
// const largura = 8.5;

// const areaParede = altura * largura;
// const litrosPorMetro = 3;

// const litros = areaParede / litrosPorMetro;

// console.log(`A quantidade de tinta necessária é: ${litros.toFixed(2)} litros.`);

const idade = 30;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

// Crie um algoritmo que calcule a area de uma parede e faça o orçamento de um pintor, sabendo que o pintor cobra R$ 10 reais por metro quadrado pintado. Se a area for maior que 10 metros quadrados, o pintor cobrara uma taxa adicional de 20% sobre o valor da area.

const altura = 4.70;
const largura = 10.78;

// const taxa adicional deve ser de 20% sobre o valor da pintura se a area for maior que 10 metros quadrados

const areaParede = altura * largura;
const precoPorMetro = 10;
const taxaAdicional = 1.20;

const valorPintura = areaParede * precoPorMetro;

// const taxa vai ter um valor de 20% sobre o valor da pintura se a area for maior que 10 metros quadrados

if (areaParede > 10) {
  const taxa = valorPintura * taxaAdicional;
  console.log(`O valor total da pintura é: R$ ${taxa.toFixed(2)} reais.`);
} else {
console.log(`O valor total da pintura é: R$ ${valorPintura.toFixed(2)} reais.`);
}