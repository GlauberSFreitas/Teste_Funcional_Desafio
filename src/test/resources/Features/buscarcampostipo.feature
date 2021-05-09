#language: pt
 
Funcionalidade: Buscar com o campo tipo
 
Como um usuario
Gostaria de pesquisar CNES Ativas 
a partir do filtro tipo

 
Contexto:
         Dado que estou no Firefox
 
Cenario: Deve filtrar busca a partir do campo tipo
Dado que estou na tela principal
E que busco por "CENTRAL DE GESTAO EM SAUDE" no campo tipo
Quando cliquei no botão buscartipo
Entao busca realizada com sucesso

Cenario: Deve filtrar busca a partir do campo tipo e n�o encontrar nenhum registro
Dado que estou na tela principal
E que busco por "##############" no campo tipo
Quando cliquei no botão buscartipo
Entao nenhum registro encontrado