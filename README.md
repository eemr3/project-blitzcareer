# ToDo List

Aplicação pra controlar tarefas do dia, onde podera adicionar, editar e remover as tarefas.

## Requisitos

Requisitos minimo para rodar o back-end da aplicação:

- NodeJs v14 ou superior
- MySQL v5.7 ou superior
- Docoker (opcional)

Observação: Se tiver o docker instalado e não tiver o mysql, basta cria um container com o mysql.

Exemplro de um container myslq na versão 8

Use esse comando no termina
```bash
docker run -p 3306:3306 --name mysql_80 -e MYSQL_ROOT_PASSWORD=seupassword -d mysql:8 mysqld --default-authentication-plugin=mysql_native_password

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

`MYSQL_USERNAME`=root

`MYSQL_PWD`=123456

`MYSQL_HOST`=localhost

`API_PORT`=3003

## Crie o banco de dados

Dentro da pasta `back-end` rode o comando:

```bash
npm run database
``` 
O banco de dados é criado com as tabelas `Users` e `ToDos` e é populado com algumas informaçoes iniciais.

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
