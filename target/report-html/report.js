$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buscarcampostipo.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Buscar com os campos tipo uf e botão buscar todos",
  "description": "\r\nComo um usuario\r\nGostaria de pesquisar CNES Ativas \r\na partir dos filtros disponiveis",
  "id": "buscar-com-os-campos-tipo-uf-e-botão-buscar-todos",
  "keyword": "Funcionalidade"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que estou no Firefox",
  "keyword": "Dado "
});
formatter.match({
  "location": "CamposBuscaSteps.queEstouNoFirefox()"
});
formatter.result({
  "duration": 4522849400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Deve filtrar busca a partir do campo tipo",
  "description": "",
  "id": "buscar-com-os-campos-tipo-uf-e-botão-buscar-todos;deve-filtrar-busca-a-partir-do-campo-tipo",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 14,
  "name": "que estou na tela principal",
  "keyword": "Dado "
});
formatter.step({
  "line": 15,
  "name": "que busco por \"CENTRAL DE GESTAO EM SAUDE\" no campo tipo",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "cliquei no botão buscartipo",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "busca realizada com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "CamposBuscaSteps.queEstouNaTelaPrincipal()"
});
formatter.result({
  "duration": 387458900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CENTRAL DE GESTAO EM SAUDE",
      "offset": 15
    }
  ],
  "location": "CamposBuscaSteps.queBuscoPorNoCampoTipo(String)"
});
formatter.result({
  "duration": 85247200,
  "status": "passed"
});
formatter.match({
  "location": "CamposBuscaSteps.cliqueiNoBotãoBuscartipo()"
});
formatter.result({
  "duration": 27239300,
  "status": "passed"
});
formatter.match({
  "location": "CamposBuscaSteps.buscaRealizadaComSucesso()"
});
formatter.result({
  "duration": 8121300,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que estou no Firefox",
  "keyword": "Dado "
});
formatter.match({
  "location": "CamposBuscaSteps.queEstouNoFirefox()"
});
formatter.result({
  "duration": 3717945400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Deve filtrar busca a partir do campo tipo e n�o encontrar nenhum registro",
  "description": "",
  "id": "buscar-com-os-campos-tipo-uf-e-botão-buscar-todos;deve-filtrar-busca-a-partir-do-campo-tipo-e-n�o-encontrar-nenhum-registro",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 20,
  "name": "que estou na tela principal",
  "keyword": "Dado "
});
formatter.step({
  "line": 21,
  "name": "que busco por \"##############\" no campo tipo",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "cliquei no botão buscartipo",
  "keyword": "Quando "
});
formatter.step({
  "line": 23,
  "name": "nenhum registro encontrado",
  "keyword": "Entao "
});
formatter.match({
  "location": "CamposBuscaSteps.queEstouNaTelaPrincipal()"
});
formatter.result({
  "duration": 357506600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "##############",
      "offset": 15
    }
  ],
  "location": "CamposBuscaSteps.queBuscoPorNoCampoTipo(String)"
});
formatter.result({
  "duration": 61980000,
  "status": "passed"
});
formatter.match({
  "location": "CamposBuscaSteps.cliqueiNoBotãoBuscartipo()"
});
formatter.result({
  "duration": 32459800,
  "status": "passed"
});
formatter.match({
  "location": "CamposBuscaSteps.nenhumRegistroEncontrado()"
});
formatter.result({
  "duration": 10992100,
  "status": "passed"
});
formatter.uri("buscarcampostodos.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Buscar com os campos tipo uf e botão buscar todos",
  "description": "\r\nComo um usuario\r\nGostaria de pesquisar CNES Ativas \r\na partir dos filtros disponiveis",
  "id": "buscar-com-os-campos-tipo-uf-e-botão-buscar-todos",
  "keyword": "Funcionalidade"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que estou no Firefox",
  "keyword": "Dado "
});
formatter.match({
  "location": "CamposBuscaSteps.queEstouNoFirefox()"
});
formatter.result({
  "duration": 4246089200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Deve filtrar busca a partir do bot�o buscartodos",
  "description": "",
  "id": "buscar-com-os-campos-tipo-uf-e-botão-buscar-todos;deve-filtrar-busca-a-partir-do-bot�o-buscartodos",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 14,
  "name": "que estou na tela principal",
  "keyword": "Dado "
});
formatter.step({
  "line": 15,
  "name": "cliquei no botão buscartodos",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "busca realizada com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "CamposBuscaSteps.queEstouNaTelaPrincipal()"
});
formatter.result({
  "duration": 338694800,
  "status": "passed"
});
formatter.match({
  "location": "CamposBuscaSteps.cliqueiNoBotãoBuscartodos()"
});
formatter.result({
  "duration": 60253900,
  "status": "passed"
});
formatter.match({
  "location": "CamposBuscaSteps.buscaRealizadaComSucesso()"
});
formatter.result({
  "duration": 10229300,
  "status": "passed"
});
formatter.uri("buscarcamposuf.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Buscar com os campos tipo uf e botão buscar todos",
  "description": "\r\nComo um usuario\r\nGostaria de pesquisar CNES Ativas \r\na partir dos filtros disponiveis",
  "id": "buscar-com-os-campos-tipo-uf-e-botão-buscar-todos",
  "keyword": "Funcionalidade"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que estou no Firefox",
  "keyword": "Dado "
});
formatter.match({
  "location": "CamposBuscaSteps.queEstouNoFirefox()"
});
formatter.result({
  "duration": 3219190300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Deve filtrar busca a partir do campo uf",
  "description": "",
  "id": "buscar-com-os-campos-tipo-uf-e-botão-buscar-todos;deve-filtrar-busca-a-partir-do-campo-uf",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 14,
  "name": "que estou na tela principal",
  "keyword": "Dado "
});
formatter.step({
  "line": 15,
  "name": "que busco por \"BA\" no campo uf",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "cliquei no botao buscaruf",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "busca realizada com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "CamposBuscaSteps.queEstouNaTelaPrincipal()"
});
formatter.result({
  "duration": 389886700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BA",
      "offset": 15
    }
  ],
  "location": "CamposBuscaSteps.queBuscoPorNoCampoUf(String)"
});
formatter.result({
  "duration": 73493300,
  "status": "passed"
});
formatter.match({
  "location": "CamposBuscaSteps.cliqueiNoBotaoBuscaruf()"
});
formatter.result({
  "duration": 23069200,
  "status": "passed"
});
formatter.match({
  "location": "CamposBuscaSteps.buscaRealizadaComSucesso()"
});
formatter.result({
  "duration": 15961000,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que estou no Firefox",
  "keyword": "Dado "
});
formatter.match({
  "location": "CamposBuscaSteps.queEstouNoFirefox()"
});
formatter.result({
  "duration": 4358019900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Deve filtrar busca a partir do campo uf e n�o encontrar nenhum registro",
  "description": "",
  "id": "buscar-com-os-campos-tipo-uf-e-botão-buscar-todos;deve-filtrar-busca-a-partir-do-campo-uf-e-n�o-encontrar-nenhum-registro",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 20,
  "name": "que estou na tela principal",
  "keyword": "Dado "
});
formatter.step({
  "line": 21,
  "name": "que busco por \"#############\" no campo uf",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "cliquei no botao buscaruf",
  "keyword": "Quando "
});
formatter.step({
  "line": 23,
  "name": "nenhum registro encontrado",
  "keyword": "Entao "
});
formatter.match({
  "location": "CamposBuscaSteps.queEstouNaTelaPrincipal()"
});
formatter.result({
  "duration": 373936300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#############",
      "offset": 15
    }
  ],
  "location": "CamposBuscaSteps.queBuscoPorNoCampoUf(String)"
});
formatter.result({
  "duration": 67497400,
  "status": "passed"
});
formatter.match({
  "location": "CamposBuscaSteps.cliqueiNoBotaoBuscaruf()"
});
formatter.result({
  "duration": 26551200,
  "status": "passed"
});
formatter.match({
  "location": "CamposBuscaSteps.nenhumRegistroEncontrado()"
});
formatter.result({
  "duration": 8637700,
  "status": "passed"
});
});