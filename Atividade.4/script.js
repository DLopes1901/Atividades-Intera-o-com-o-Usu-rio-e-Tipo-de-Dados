let nome = prompt("Digite seu nome:");
let idade = parseInt(prompt("Digite sua idade:"));
let anoAtual = 2025;
let anoNascimento = anoAtual - idade;
document.write("Olá, " + nome + "! Você nasceu em " + anoNascimento);