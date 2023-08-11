# ToDo List

Aplicação para controlar tarefas do dia, onde poderá adicionar, editar e remover as tarefas. Projeto realizado para um desafio técnico proposto pela equipe de carreira da Trybe, durante o tempo em que realizei o curso de desenvolvimento web.

- A aplicação foi toda refeita utilizando typescript tando no front-end quanto no back-end (NextJs e NodeJs)

- Para ver a antiga versão em javascript acesse a branch `feature/old-code` no repositório `local` ou no `github`

## Requisitos

Requisitos minimo para rodar o back-end da aplicação:

- NodeJs v14 ou superior
- MySQL
- Docoker (opcional)

Observação: Se tiver o docker instalado e não tiver o mysql, basta cria um container com o mysql.

Exemplro de um container myslq na versão 8

Use esse comando no terminal

```bash
docker run --name mysql-80 -e MYSQL_ROOT_PASSWORD=12345678 -d -p 3306:3306 mysql:8

```

## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:eemr3/project-blitzcareer.git
```

Entre no diretório do projeto

```bash
  cd project-blitzcareer
```

Instale as dependências

```bash
  npm install
```

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

Entre napasta `back-end` e crie um arquivo `.env`, adicione as variavei de ambiente listadas abaixo
(Os valor que está após o variável é um exemplo, você terá que por os valore correspondente as suas configuraçãoes)

`DATABASE_URL`="mysql://root:12345678@localhost:3306/todo_db?schema=public"

`API_PORT`=3001

`JWT_SECRET`="uma string para ser usada como chave secreta para o JWT"

`JWT_EXPIRES_IN`=3600

## Crie o banco de dados

Dentro da pasta `back-end` rode o comando:

```bash
npm run database
```

```bash
npm run dev:seed
```

O banco de dados é criado com as tabelas `users` e `todos` e é populado com algumas informaçoes iniciais.
Existe um usuário:

- nome: John Doe
- email: `john.doe@email.com`
- senha: `Abc12@34`

## Documentação

### Informção do Front-end da aplicação

- Diretório do Front-end

```bash
  cd front-end
```

- [Front-End](https://github.com/eemr3/project-blitzcareer/tree/main/front-end)

### Informção do Back-end da aplicação

- Diretório do Back-end

```bash
  cd back-end
```

- [Back-End](https://github.com/eemr3/project-blitzcareer/tree/main/back-end)
