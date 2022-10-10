Segue os comandos necessários para configurar o node.modules e o PRISMA

//Criando e instancionado prisma
1. npm add prisma typescript ts-node @types/node --save-dev

//Iniciando repositório prisma
2. npx prisma init

//Criação de migrate após a configuração do schema.prisma
3. npx prisma migrate dev --name init

//Rodando o projeto
4. npx ts-node src/app.ts

//Visualizando ORM no localhost
5. npx prisma studio