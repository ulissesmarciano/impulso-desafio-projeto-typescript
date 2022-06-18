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
