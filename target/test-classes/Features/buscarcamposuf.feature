#language: pt
 
Funcionalidade: Buscar com o campo estado 
 
Como um usuario
Gostaria de pesquisar CNES Ativas 
a partir do filtro uf

 
Contexto:
         Dado que estou no Firefox
 
Cenario: Deve filtrar busca a partir do campo uf
Dado que estou na tela principal
E que busco por "BA" no campo uf
Quando cliquei no botao buscaruf
Entao busca realizada com sucesso

Cenario: Deve filtrar busca a partir do campo uf e não encontrar nenhum registro
Dado que estou na tela principal
E que busco por "#############" no campo uf
Quando cliquei no botao buscaruf
Entao nenhum registro encontrado