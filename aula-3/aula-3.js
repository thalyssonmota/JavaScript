// const email ="thalysson@example.com";
// const senha = "senha123";

const usuarios =[
  {
    nome: "Thalysson",
    idade: 20,  
    email: "thalysson@example.com",
    senha: "senha123"
  },
  {
    nome: "Maria",
    idade: 25,
    email: "maria@example.com",
    senha: "senha456" 
  }
]

// const user = usuarios.find(
//   (usuario) => usuario.email === email);

// if (!user) {
//   console.log("Usuário não encontrado.");
// }  else if (user.senha === senha) {
//   console.log("Login bem-sucedido!");
// } else {
//   console.log("Senha incorreta.");
// }

function login(email, senha) {
  if (!email || !senha) {
    console.log("Email e senha são obrigatórios.");
    return;
  }
  const user = usuarios.find(
    (usuario) => usuario.email === email
  )
  if (!user) {
    console.log("Usuário não encontrado.");
    return;
  }
  if(user.senha !== senha){
    console.log("Senha ou email incorretos.");
    return;
  }
  console.log("Login bem-sucedido!");
}

login("thalysson@example.com", "senha123");
login("")


