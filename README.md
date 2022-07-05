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

Crie o banco de dados
O banco de dados é criado com as tabelas `Users` e `ToDos` e é populado com algumas informaçoes iniciais.

```bash
npm database
``` 

## Documentação

- Diretório do Front-end
```bash
  cd front-end
```
### Informção do Front-end da aplicação

[Front-End](https://github.com/eemr3/project-blitzcareer/tree/main/front-end) - Front-end da aplicação

- Diretório do Back-end
```bash
  cd back-end
```
### Informção do Back-end da aplicação
- [Back-End](https://github.com/eemr3/project-blitzcareer/tree/main/back-end)
