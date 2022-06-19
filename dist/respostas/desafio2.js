"use strict";
// São dois exemplos 
//Exemplo1
let funcionario01 = {
    nome: 'maria',
    idade: 29,
    profissao: 'Corretora'
};
let funcionario02 = {
    nome: 'roberto',
    idade: 19,
    profissao: 'padeiro'
};
//Exemplo 2
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
})(Profissao || (Profissao = {}));
let pessoa1 = {
    nome: 'maria',
    idade: 29,
    profissao: Profissao.Atriz
};
let pessoa2 = {
    nome: 'roberto',
    idade: 19,
    profissao: Profissao.Padeiro
};
let pessoa3 = {
    nome: 'laura',
    idade: 32,
    profissao: Profissao.Atriz
};
let pessoa4 = {
    nome: 'carlos',
    idade: 19,
    profissao: Profissao.Padeiro
};
