# Desafio Técnico Descomplica - Andrey Fontoura

Projeto de interface de consulta de alunos utilizando NextJS + Typescript, consumindo uma API em GarphQL.

## Instruções para uso

### Docker

Caso faça uso do Docker, é possível rodar a aplicação utilizando o comando `docker-compose up` na pasta raiz do projeto. Sua aplicação será executada e servida através da porta `3000`.

### Local

Se preferir rodar a aplicação localmente, é possível utilizar o comando `yarn dev` para executar a versão de desenvolvimento, ou `yarn build` e `yarn start` para construir o bundle de produção e servir através dele.

## Variáveis de ambiente

#### API_URL

É recomendado que se configure essa variável num arquivo `.env` com o endereço da API GraphQL. Com a [API](https://github.com/andrey-rf/student-search-api) em execução, este endereço é `http://localhost:4000`.
