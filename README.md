## Sobre o R7.com
R7.com, é um portal mantido pela Rádio e Televisão Record S/A, com quase
5 anos de vida possui 50 milhões de visitantes únicos, e 1 bilhão e meio
de pageviews mensalmente e conta coma uma equipe de quase 500 pessoas.


## Teste FrontEnd para o R7.com!
Essa prova consiste em testar seus conhecimentos com HTML, CSS,
JavaScript, Linha de Comando entre outras coisas.
Você basicamente irá desenvolver uma pequena aplicação baseada em uma
requisição HTTP, nesse teste será necessário conhecimentos em ordenação
de dados e matemática.



Primeiramente, faça um fork e clone deste projeto, crie uma branch (pode ser com seu nome mesmo), depois instale as
dependências:

    npm install

Após isso, rode a aplicação:

    npm start

Depois do seu setup você precisará seguir as seguintes instruções, para
construir a aplicação:

1. Desenvolver a página, que tem o seu layout em **a-fazenda.psd**.(A
   única fonte usada foi a Montserrat, disponível no Google Fonts,
use-a!)
2. Criar um script em JavaScript que faça uma requisição para **/fazenda.json**
  * Apresentar os dados requisitados pelo layout.
  * Calcular a porcentagem de "positives" e "negatives".
  * Ordernar os items do json a partir da porcentagem calculada.
3.  **NÃO** alterar o arquivo **fazenda.json**. Em hipótese nenhuma!
4. Seguir estritamente o .psd.
5. Suporte para IE8+.
6. Não usar geradores como yeoman, procure se manter na estrutura do nosso projeto.
7. Se for preciso modificar a estrutura e workflow, atualizar o README.
8. Submeta o Pull Request! :D

<br>
**Pontos Extras**:

1. Se possível, escreva o código com BackboneJS, se não, use VanillaJS que nós iremos avaliar do mesmo jeito! ;)
2. Utilizar algum pré-processador CSS. (SASS FTW!)
3. Testes, testes, testes!
4. Automatizar as coisas. (Gulp? Grunt? :D)
5. Template Engines (underscore, mustache, ou outras de sua preferência)



<br><br><sub>Os dados presentes neste teste são totalmente fictícios.</sub>

---
# Notas de Leandrw

## Dependências
Adicionei o bower como gerenciador de dependências então, por favor, inclua o comando abaixo no setup, após o `npm install`:
```
bower install
```

## Sobre o Core
Foi minha primeira experiência com BackboneJS, então tenha paciência. Me supreendi como coisas simples feitas por frameoworks como Angular.js ou libs como Vue.js simplesmente não existem ou são burocráticas demais em BackboneJS. Mas gostei do mapeamento da Model com o servidor.

## Automação DAS COISAS
Não esqueça do Gulp na sua máquina!
Incluí alguns procedimentos no app:
* Usando o Sass como pré-processador, para facilitar o lidar com CSS
* Adicionado o Autoprefixer, que coloca os prefixos browser-vendor para suporte de propriedades CSS3 em browser não plenamente suportados
* Inserido o JSHint como linter, para evitar o build de scripts com erros graves
* Adicionada uma task watch, rodando em background, observando alterações em scripts e styles para reprocessa-los e realizar tarefas pertinentes
* Uma tarefa chamada `serve`, que serve a aplicação
* Se apenas rodar `gulp` ou `gulp default`, todas as tasks anteriormente citadas já serão realizadas