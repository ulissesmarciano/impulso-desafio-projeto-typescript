"use strict";
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
/*let employee = {};
employee.code = 10;
employee.name = "John";*/
//Exemplo1
let funcionario = {
    nome: 'Ulisses',
    codigo: 10
};
//Exemplo2
let funcionario2 = {
    nome: 'Aline',
    codigo: 15
};
//Exemplo3
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atendente"] = 0] = "Atendente";
    Profissao[Profissao["Corretor"] = 1] = "Corretor";
    Profissao[Profissao["Vendedor"] = 2] = "Vendedor";
    Profissao[Profissao["Repositor"] = 3] = "Repositor";
})(Profissao || (Profissao = {}));
let employee3 = {
    name: 'Arthur',
    code: 12,
    profissao: Profissao.Vendedor
};
//Exemplo4 sem profissão
let employee4 = {
    name: 'Joaquim',
    code: 13,
};
