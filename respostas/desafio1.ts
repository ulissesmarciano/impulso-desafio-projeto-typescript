// Como podemos rodar isso em um arquivo .ts sem causar erros? 

/*let employee = {};
employee.code = 10;
employee.name = "John";*/

//Exemplo1
let funcionario: {nome: string, codigo: number} = {
    nome: 'Ulisses',
    codigo: 10
}


//Exemplo2
let funcionario2 = {
    nome: 'Aline',
    codigo: 15
}


//Exemplo3
enum Profissao{
    Vendedor,
    Estoquista
}

interface Funcionario {
    name: string,
    code: number,
    profissao?: Profissao //Preparando para que o exemplo 4 não receba profissão
}

let employee3: Funcionario = {
    name: 'Arthur',
    code: 12,
    profissao: Profissao.Vendedor
}


//Exemplo4 sem profissão
let employee4: Funcionario = {
    name: 'Joaquim',
    code: 13,
}

