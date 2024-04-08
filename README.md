<!DOCTYPE html>
<html lang="pt-br">
<head></head>
<body>

  <h1> Projeto de Controle Financeiro </h1>

  <div>
    <h2> Para dar o Start no Projeto certificasse dê: </h2>
    <p>
     1 - Rodar o "NPM INSTALL" (para instalar todas as dependências) <br>
     2 - Clonar o .env.example para .env e configurar as variáveis: JWT_SECRET e DATABASE_URL <br>
     3 - Para configurar o DATABASE_URL é preciso pegar os dados do arquivo docker-compose.yml e informar em cada campo <br>
     4 - Com o Docker instalado na máquina utilize do comando: "docker compose up -d" <br>
     5 - Rode o comando "npx prisma migrate reset" e responda como "Y" <br>
     6 - Para o servidor funcionar utilize do comando npm run dev <br>
     7 - Para visualizar os dados da tabela utilize do comando "npx prisma studio" <br>
    </p>
  </div>


  <div>
    <h2>Utilizando as Rotas da API</h2>
    <h3>Rotas do Usuário</h3>
    <p>
      - Method: POST http://localhost:9393/create <br>
        Header: Content-type = application/json <br>
        Body:
        
      {
        "name" = string 
        "email" = string 
        "password" = string 
        "signature" = boolean (Campo opcional)
      }      
              
  </p>
  <hr>
    <p>
      - Method: POST http://localhost:9393/session <br>
        Header: Content-type = application/json <br>
        Body:

      {
        "email" = string 
        "password" = string 
      }
      
  </p>
  <hr>
    <p>
      - Method: GET http://localhost:9393/profile <br>
        Header: Authorization = Bearer (Token da autorização)
    </p>
    <hr>
    <p>
      - Method: PATCH http://localhost:9393/token/refresh <br>
        Header: Authorization = Bearer (Token da autorização)
    </p>
    <hr>
    <p>
      - Method: PATCH http://localhost:9393/password <br>
        Header: Content-type = application/json <br>
        Body:

      {
        "email" = string 
        "password" = string (Nova senha)
      }
  </p>
  <hr>
    <p>
      - Method: PATCH http://localhost:9393/signature <br>
        Header: Authorization = Bearer (Token da autorização)
    </p>
  </div>
  <hr>
  <br>
  <div>
    <h3>Rotas dos investimentos</h3>
    <p>
      - Method: POST http://localhost:9393/create/investimento <br>
        Header: Content-type = application/json <br>
        Header: Authorization = Bearer (Token da autorização) <br>
        Body:
        
      {
        "sigla" = string
        "amount" = string
        "price" = number
      }      
              
  </p>
  <hr>
    <p>
      - Method: GET http://localhost:9393/find <br>
        Header: Authorization = Bearer (Token da autorização) <br>
        Header: Content-type = application/json <br>
        Query Params:

      "singla" = string
      
  </p>
  <hr>
    <p>
      - Method: GET http://localhost:9393/count <br>
        Header: Authorization = Bearer (Token da autorização) <br>
    </p>
    <hr>
    <p>
      - Method: GET http://localhost:9393/cotas <br>
        Header: Authorization = Bearer (Token da autorização)
    </p>
    <hr>
    <p>
      - Method: GET http://localhost:9393/filter <br>
        Header: Authorization = Bearer (Token da autorização) <br>
        Header: Content-type = application/json <br>
        Query Params:

      {
        "dateIni" = string (Ex: 2024-04-02)
        "dateFim" = string (Ex: 2024-04-07)
      }
  </p>
  <hr>
    <p>
      - Method: DELETE http://localhost:9393/delete/{idCota} <br>
        Header: Authorization = Bearer (Token da autorização) <br>
        Params: ID do Investimento
    </p>
  </div>
</body>
</html>

<hr>

## RFs (Requisitos Funcionais)

- [x] Deve ser possível se cadastrar
- [x] Deve ser possível se autenticar
- [x] Deve ser possível alterar sua senha
- [x] Deve ser possível obter o perfil de um usuário logado
- [x] Deve ser possível cadastrar os seus investimentos
- [x] Deve ser possível excluir um registro de investimento
- [x] Deve ser possível o investidor filtrar todos os seus investimentos
- [x] Deve ser possível realizar uma assinatura vitalicia
- [x] Deve ser possível realizar um filtro por cota
- [x] Deve ser possível realizar um filtro por mês
- [x] Deve ser possível que o investidor confira o total de seus investimentos

## RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado

## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL
- [x] O usuário deve ser identificado por um JWT (JSON WEB TOKEN)
