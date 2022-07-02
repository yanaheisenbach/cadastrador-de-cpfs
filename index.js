// 1: Capturar o CPF digitado pelo usuário
let cpfDigitado = process.argv[2];

// 2: Verificar se o CPF capturado é válido ou não 

// Biblioteca instalada para validar CPF 
const CPF = require('cpf-check');

// Requerendo função appendFile que escreve no .txt 
const fs  = require('node:fs/promises');

// Constantes usados no appendFile
const content = process.argv[2]+'\n'
const fileNamePath = './cpfsalvos.txt'

// 3a: Se for válido, salvar e mnadar mensagem de sucesso
if (CPF.validate(cpfDigitado)){

    fs.appendFile (fileNamePath, content) 
    console.log(`Seu CPF : ${cpfDigitado} é válido`)
    console.log(`Salvando no arquivo...`)
}

// 3b: Se não for válido, mandar msg de falha  
 else { console.log(`CPF : ${cpfDigitado} inválido`)}

 //Usar crase permite inserir dados usando ${}

