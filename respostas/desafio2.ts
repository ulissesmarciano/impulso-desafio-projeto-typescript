// São dois exemplos 

//Exemplo1
let funcionario01: {nome: string, idade: number, profissao: string} = {
    nome: 'maria',
    idade: 29,
    profissao: 'Corretora'
}

let funcionario02: {nome: string, idade: number, profissao:string} = {
    nome: 'roberto',
    idade: 19,
    profissao: 'padeiro'
}

enum Profissao {
    Atriz,
    Padeiro
}

type Pessoa = {
    nome: string,
    idade:number,
    profissao: Profissao
}

let pessoa1: Pessoa = {
    nome: 'maria',
    idade: 29,
    profissao: Profissao.Atriz
}

let pessoa2: Pessoa = {
    nome: 'roberto',
    idade: 19,
    profissao: Profissao.Padeiro
}

let pessoa3 = {
    nome: 'laura',
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4: Pessoa = {
    nome: 'carlos',
    idade: 19,
    profissao: Profissao.Padeiro
}
