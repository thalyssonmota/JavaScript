// function calc(n1, n2) {
//   const soma = n1 + n2;
//   const media = soma / 2;
//   console.log(`A soma é: ${soma}`);
// }

function calcularMedia(n1, n2, n3) {
  if (typeof n1 !== "number" || typeof n2 !== "number" || typeof n3 !== "number") {
    console.log("Todos os parâmetros devem ser números.");
    return;
  }
  const media = (n1 + n2 + n3) / 3;
  console.log(`A média é: ${media}`);
}

calcularMedia(10, 8, 9);
calcularMedia(10, "8", 9); // Teste com tipo inválido

// Crie uma função que receba as notas  de um aluno e retorne a média
// Informe se o aluno foi aprovado ou reprovado
// a media de aprovação é 7

// function mediaAluno(nota1, nota2, nota3) {
//   if (typeof nota1 !== "number" || typeof nota2 !== "number" || typeof nota3 !== "number") {
//     console.log("Todas as notas devem ser números.");
//     return;
//   }
//   const media = (nota1 + nota2 + nota3) / 3;
//   if(media >=7){
//     console.log("Aluno aprovado");
//     return;
//   }
//   console.log("Aluno reprovado");
// }

// mediaAluno(8, 6, 7);

// function calcMedia(notas) {
//   if (notas.length === 0 || !notas) {
//     console.log("Nenhuma nota informada.");
//     return;
//   }
//   let soma = 0;

//   for (let i = 0; i < notas.length; i++) {
//     soma += notas[i];
//   }

//   const media = soma / notas.length;
//   if (media >= 7) {
//     console.log(`Média: ${media}. Aluno aprovado.`);
//     return;
//   } 
//   console.log(`Média: ${media}. Aluno reprovado.`);
// }

// calcMedia([8, 6, 7, 9, 10]);

const carros = [
  {
    nome: "Tracker",
    diaria: 150,
    categoria: "Premium"
  },
  {
    nome: "Onix",
    diaria: 100,
    categoria: "Economico"
  },
  {
    nome: "Hb20",
    diaria: 120,
    categoria: "Intermediario"
  }
]

// creie uma função que receba a qauntidade de dias alugados e o nome do carro retorne o valor total do aluguel e adicione a taxa de seguro 
// Se o carro for da categoria Premium, a taxa de seguro é 20% do valor total
// Se o carro for da categoria Intermediário, a taxa de seguro é 15%  
// Se o carro for da categoria Econômico, a taxa de seguro é 10% do valor total

function valorAluguel(dias,nomeCarro) {
  const carro = carros.find(carros => carros.nome.toLowerCase() === nomeCarro.toLowerCase());
  if (!dias || typeof dias !== "number" || dias <= 0) {
    console.log("Quantidade de dias inválida.");
    return;
  }
  if (!carro) {
    console.log("O carro não existe.");
    return;
  }
  const valorTotal = dias * carro.diaria;
  if(carro.categoria === "Premium"){
    console.log(`Valor do aluguel é: R$${valorTotal + (valorTotal * 0.2)}`);
    return;
  }
  if (carro.categoria === "Intermediario") {
    console.log(`Valor do aluguel é: R$${valorTotal + (valorTotal * 0.15)}`);
    return;
  }
  if (carro.categoria === "Economico") {
    console.log(`Valor do aluguel é: R$${valorTotal + (valorTotal * 0.1)}`);
    return;
  }
}

valorAluguel(7, "Tracker");
valorAluguel(3, "Onix");
