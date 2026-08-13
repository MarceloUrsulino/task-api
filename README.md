# Task API

Projeto desenvolvido para estudar e praticar relacionamentos **1:N** entre tabelas com Sequelize, aplicado a usuários e tarefas.

Foi o primeiro projeto onde pratiquei o conceito de associação entre models (`hasMany` / `belongsTo`) e chave estrangeira, servindo de base para replicar o mesmo raciocínio de forma independente em outros projetos (como o `inventory-api`).

## Tecnologias

Node.js · Express · Sequelize · MySQL

## Modelagem

```
User (1) → hasMany → Task (N)
```

Um usuário tem várias tarefas; cada tarefa pertence a um usuário, via chave estrangeira `userId`.

## Funcionalidades

- Cadastrar usuário
- Listar usuários
- Cadastrar tarefa (vinculada a um usuário existente)
- Listar tarefas

## Rotas da API

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/users` | Cadastra um novo usuário |
| GET | `/users` | Lista todos os usuários |
| POST | `/tasks` | Cadastra uma nova tarefa, vinculada a um usuário |
| GET | `/tasks` | Lista todas as tarefas |

## Exemplo de requisição — Cadastrar usuário

```
POST /users
{
  "name": "Marcelo",
  "email": "marcelo@teste.com"
}
```

## Exemplo de requisição — Cadastrar tarefa

```
POST /tasks
{
  "title": "Estudar Sequelize",
  "userId": 1
}
```

## Respostas de erro

| Status | Situação | Mensagem |
|--------|----------|----------|
| 422 | Campo obrigatório não preenchido | "O campo precisa ser preenchido." |
| 422 | Usuário não encontrado ao criar tarefa | "Usuário não encontrado." |



Marcelo Ursulino
