## RFs (Requisitos Funcionais)
- [x] Deve ser possível se cadastrar
- [ ] Deve ser possível se autenticar
- [ ] Deve ser possível alterar sua senha
- [ ] Deve ser possível obter o perfil de um usuário logado
- [ ] Deve ser possível cadastrar os seus investimentos
- [ ] Deve ser possível realizar uma assinatura de até (12 meses)
- [ ] Deve ser possível realizar um filtro por cota
- [ ] Deve ser possível realizar um filtro por mês
- [ ] Deve ser possível que o investidor confira o total de seus investimentos

## RNs (Regras de negócio)
- [x] O usuário não deve poder se cadastrar com um e-mail duplicado

## RNFs (Requisitos não-funcionais)
- [x] A senha do usuário precisa estar criptografada
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL
- [ ] O usuário deve ser identificado por um JWT (JSON WEB TOKEN)