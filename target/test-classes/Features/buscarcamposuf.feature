#language: pt
 
Funcionalidade: Buscar com os campos tipo uf e bot√£o buscar todos
 
Como um usuario
Gostaria de pesquisar CNES Ativas 
a partir dos filtros disponiveis

 
Contexto:
         Dado que estou no Firefox
 
Cenario: Deve filtrar busca a partir do campo uf
Dado que estou na tela principal
E que busco por "BA" no campo uf
Quando cliquei no botao buscaruf
Entao busca realizada com sucesso

Cenario: Deve filtrar busca a partir do campo uf e n„o encontrar nenhum registro
Dado que estou na tela principal
E que busco por "#############" no campo uf
Quando cliquei no botao buscaruf
Entao nenhum registro encontrado