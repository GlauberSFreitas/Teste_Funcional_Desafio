$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buscarcampostipo.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Buscar com o campo tipo",
  "description": "\r\nComo um usuario\r\nGostaria de pesquisar CNES Ativas \r\na partir do filtro tipo",
  "id": "buscar-com-o-campo-tipo",
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
  "duration": 4359555700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Deve filtrar busca a partir do campo tipo",
  "description": "",
  "id": "buscar-com-o-campo-tipo;deve-filtrar-busca-a-partir-do-campo-tipo",
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
  "duration": 402395700,
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
  "duration": 90098700,
  "status": "passed"
});
formatter.match({
  "location": "CamposBuscaSteps.cliqueiNoBotãoBuscartipo()"
});
formatter.result({
  "duration": 27904900,
  "status": "passed"
});
formatter.match({
  "location": "CamposBuscaSteps.buscaRealizadaComSucesso()"
});
formatter.result({
  "duration": 3033351300,
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
  "duration": 3178887100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Deve filtrar busca a partir do campo tipo e n�o encontrar nenhum registro",
  "description": "",
  "id": "buscar-com-o-campo-tipo;deve-filtrar-busca-a-partir-do-campo-tipo-e-n�o-encontrar-nenhum-registro",
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
  "duration": 822317000,
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
  "duration": 65476900,
  "status": "passed"
});
formatter.match({
  "location": "CamposBuscaSteps.cliqueiNoBotãoBuscartipo()"
});
formatter.result({
  "duration": 23579100,
  "status": "passed"
});
formatter.match({
  "location": "CamposBuscaSteps.nenhumRegistroEncontrado()"
});
formatter.result({
  "duration": 3021470600,
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
  "name": "Buscar com o bot�o todos",
  "description": "\r\nComo um usuario\r\nGostaria de pesquisar CNES Ativas \r\na partir do bot�o todos",
  "id": "buscar-com-o-bot�o-todos",
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
  "duration": 3181535900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Deve filtrar busca a partir do bot�o buscartodos",
  "description": "",
  "id": "buscar-com-o-bot�o-todos;deve-filtrar-busca-a-partir-do-bot�o-buscartodos",
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
  "duration": 352975100,
  "status": "passed"
});
formatter.match({
  "location": "CamposBuscaSteps.cliqueiNoBotãoBuscartodos()"
});
formatter.result({
  "duration": 68211200,
  "status": "passed"
});
formatter.match({
  "location": "CamposBuscaSteps.buscaRealizadaComSucesso()"
});
formatter.result({
  "duration": 3014691900,
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
  "name": "Buscar com o campo estado",
  "description": "\r\nComo um usuario\r\nGostaria de pesquisar CNES Ativas \r\na partir do filtro uf",
  "id": "buscar-com-o-campo-estado",
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
  "duration": 4248117700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Deve filtrar busca a partir do campo uf",
  "description": "",
  "id": "buscar-com-o-campo-estado;deve-filtrar-busca-a-partir-do-campo-uf",
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
  "duration": 362158300,
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
  "duration": 70758500,
  "status": "passed"
});
formatter.match({
  "location": "CamposBuscaSteps.cliqueiNoBotaoBuscaruf()"
});
formatter.result({
  "duration": 19826800,
  "status": "passed"
});
formatter.match({
  "location": "CamposBuscaSteps.buscaRealizadaComSucesso()"
});
formatter.result({
  "duration": 3028449100,
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
  "duration": 3202050900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Deve filtrar busca a partir do campo uf e n�o encontrar nenhum registro",
  "description": "",
  "id": "buscar-com-o-campo-estado;deve-filtrar-busca-a-partir-do-campo-uf-e-n�o-encontrar-nenhum-registro",
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
  "duration": 375334100,
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
  "duration": 71013700,
  "status": "passed"
});
formatter.match({
  "location": "CamposBuscaSteps.cliqueiNoBotaoBuscaruf()"
});
formatter.result({
  "duration": 21056000,
  "status": "passed"
});
formatter.match({
  "location": "CamposBuscaSteps.nenhumRegistroEncontrado()"
});
formatter.result({
  "duration": 3018591100,
  "status": "passed"
});
});