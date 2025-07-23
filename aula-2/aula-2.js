const nome = 'Thalysson';
const corPreferida = 'azul';
const marcaPreferida = 'Adidas';

// Mostra os produtos preferidos

if (corPreferida === 'azul' || marcaPreferida === 'Adidas') {
  console.log('Produtos preferidos:');
} else {
  console.log('Nenhum produto preferido encontrado.');
}

// crie um algoritmo que calcule a area de uma parede e calcule a quantidade de tinta necessária para pintar essa parede sabendo que o valor da tinta por litro é 15 reais sabendo tambem que o pintor cobra 10 reais por metro quadrado pintado, se a quantida de tinta for maior que 100 reais ou a parede for maior que 5 metros quadrados adicona 50% do valor total

const altura = 3; // em metros
const largura = 4; // em metros
const valorTinta = 15; // reais por litro
const valorPintor = 10; // reais por metro quadrado
const areaParede = altura * largura; // em metros quadrados
const quantidadeTinta = areaParede * valorTinta; // em reais
const valorTotal = quantidadeTinta + (valorPintor * areaParede); // em reais

if (quantidadeTinta > 100 || altura > 5) {
  const valorComAdicional = valorTotal * 1.5; // adiciona 50% ao valor total
  const valorFinal = valorTotal + valorComAdicional;
  console.log(areaParede);
  console.log(`Valor total com adicional: R$ ${valorFinal.toFixed(2)}`);
} else {
  console.log(`o valor final é R$ ${valorTotal.toFixed(2)}`);
}



const compras = ["arroz", "feijão", "carne", "ovos"];
console.log(compras);

