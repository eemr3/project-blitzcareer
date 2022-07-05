
# Back-end da Api

Back end responsável por gerência os end-points da api.


## Funcionalidades

- Criar usúario
- Realizer login
- Gerar token de autenticação
- Cadastrar tarefas
- Editar tarefas
- Apagar tarefas
- Ordenar as tarefas por: Titulo / Data de criação / Status


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env
(Os valor que está após o variável é um exemplo, você terá que por os valore correspondente as suas configuraçãoes)

`MYSQL_USERNAME`=root

`MYSQL_PWD`=123456

`MYSQL_HOST`=localhost

`API_PORT`=3003

## Requisitos

Requisitos minimo para rodar o back-end da aplicação:

- NodeJs v14 ou superior
- Docoker 
- MySQL v5.7 ou superior

Observação: Se tiver o docker instalado e não tiver o mysql, basta cria um container com o mysql.

Exemplro de um container myslq na versão 8

Use esse comando no termina
```bash
docker run -p 3306:3306 --name mysql_80 -e MYSQL_ROOT_PASSWORD=seupassword -d mysql:8 mysqld --default-authentication-plugin=mysql_native_password

```
Esse contnaier rodar com o user `root`

Link da documentação para inslar ao docker caso não saiba: [docker](https://docs.docker.com/engine/install/)

Apos instalar e criar o contanier ele esta rodando para verificar basta digitar no termina
o seguinte comando:
```bash
docker container ls
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

Entre na pasta do servidor

```bash
  cd back-end
```

Inicie o servidor

```bash
  npm run dev
```


## Rodando os testes

Na pasta `back-end` rode o seguinte comando:

Test da api

```bash
  npm run test
```

Test de cobertura da api

```bash
  npm run test-coverage  
```


## Documentação da API

Link para documentação da [API](https://documenter.getpostman.com/view/9196209/UzJFxKXC)


## Autor

- [@eemr3](https://www.github.com/eemr3)

