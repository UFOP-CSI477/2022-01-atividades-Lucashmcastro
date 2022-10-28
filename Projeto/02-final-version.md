# **CSI606-2021-02 - Remoto - Trabalho Final - Resultados**

## *Aluna(o): Lucas Horta Monteiro de Castro*

--------------

<!-- Este documento tem como objetivo apresentar o projeto desenvolvido, considerando o que foi definido na proposta e o produto final. -->

### Resumo

  A Valhalla Savings tem como objetivo gerenciar várias carteiras de investimento de acordo com o mercado voltado para finanças. Dessa forma, foi trabalhado a modelagem em cima de uma real carteira de investimento, trazendo entidades que sõa notórias e necessárias para a implementação. Dessa forma, o usuário pode realizar o CRUD de todas as sete entidades voltadas a carteira de investimento, de acordo com os relacionamentos presentes na modelagem.   
  
  Como principais funcionalidades, temos :

  - Gerenciamento das Bolsas de Valores.
  - Gerenciamento das Empresas relacionadas a Bolsa de Valores.
  - Gerenciamento dos principais Indicadores relacionados a Bolsa de Valores.
  - Gerenciamento das principais Ações relacionadas aos Ativos presentes no mercado.
  - Gerenciamento das principais Cotações relacionadas as Empresas e Bolsa presentes no mercado.
  - Gerenciamento de N Carteiras de Investimento. 
### 1. Funcionalidades implementadas
<!-- Descrever as funcionalidades que eram previstas e foram implementas. -->
  
Como funcionalidades previstas para implementação, destaca-se:

- Gerenciamento de Ativos

### 2. Funcionalidades previstas e não implementadas
<!-- Descrever as funcionalidades que eram previstas e não foram implementas, apresentando uma breve justificativa do porquê elas não foram incluídas -->

Como funcionalidades previstas e não implementada, destaca-se:

- Gerenciamento de Dados Intradiários
- Cotação em tempo real
- Visualização de Notícias
### 3. Outras funcionalidades implementadas
<!-- Descrever as funcionalidades implementas além daquelas que foram previstas, caso se aplique.  -->

  - Gerenciamento das Bolsas de Valores.
  - Gerenciamento das Empresas relacionadas a Bolsa de Valores.
  - Gerenciamento dos principais Indicadores relacionados a Bolsa de Valores.
  - Gerenciamento das principais Ações relacionadas aos Ativos presentes no mercado.
  - Gerenciamento das principais Cotações relacionadas as Empresas e Bolsa presentes no mercado.
  - Gerenciamento de N Carteiras de Investimento.

### 4. Principais desafios e dificuldades
<!-- Descrever os principais desafios encontrados no desenvolvimento do trabalho, quais foram as dificuldades e como elas foram superadas e resolvidas. -->

Foi escolhido um tema com certo nível de complexidade, devido ao fato de não entender sobre o assunto. Foi necessário se inteirar do tema para realizar a devida modealgem dos dados. A linguagem escolhida também foi um desafio, pelo fato de escolher algo diferente do acostumado para realizar o desenvolvimento de aplicaçoes ( costumo usar #C ). 

### 5. Instruções para instalação e execução
<!-- Descrever o que deve ser feito para instalar (ou baixar) a aplicação, o que precisa ser configurando (parâmetros, banco de dados e afins) e como executá-la. -->

1. Clonar o repositório do GitHub. 

2. Para a visualização da modelagem dos dados, pode-se usar a plataforma https://dbdiagram.io/home . A modelagem encontra-se em /Projeto/backend/database/database.dbml. 

3. Iniciar o projeto em TypeScript (npm install typescript ts-node @types/node --save-dev).

4. Necessário realizar a instação e configuração do Prisma. O Prisma se divide em Client , Migrate e Studio.

  4.1 - Necessário instalar o Prisma (npm install prisma --save-dev) 
  4.2 - Necessário rodar a Migrate. (npx prisma migrate dev --name init) 
  4.3 - Pode-se visualizar o ORM (npx prisma studio).  

Segue documentação : https://www.prisma.io/docs/getting-started/quickstart

5. Foi usado o SQLite como Banco de Dados. Pode-se criar o banco utilizando o arquivo presente na pasta Projeto/backend/prisma/app-carteiraInvestimento.sqlite. 

6. Necessário instalar os pacotes do ReactTS. 

Segue documentação: https://create-react-app.dev/docs/adding-typescript/

7. Acesse a raiz do backend e rode o comando: npm start. 

É possível acessar a aplicação backend via Browser usando o comando: http://localhost:4002/ 
Obs: Porta configurada para a aplicação. 

8. Acesse a raiz do frontend e rode o comando: npm start. 

É possível acessar a aplicação frontend via Browser usando o comando: http://localhost:3000/ 
Obs: Porta configurada para a aplicação. 

### 6. Referências
<!-- Referências podem ser incluídas, caso necessário. Utilize o padrão ABNT. -->
Bootstrap : https://getbootstrap.com/docs/5.2/getting-started/introduction/

Menu do Template: file:///C:/Users/LucasCastro/Documents/UpConstruction/index.html