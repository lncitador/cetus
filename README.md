# cetus-erp: Blue Whale

this project is an MVP for an enterprise purchasing system.

## User

### Entitie

| User       | type      |
|------------|-----------|
| id         | uuid      |
| first_name | varchar   |
| last_name  | varchar   |
| email      | varchar   |
| password   | varchar   |
| role       | varchar   |
| avatar     | varchar   |
| created_at | timestamp |
| updated_at | timestamp |

```javascript
type role = "customer" | "provider" | "supplier" | "master";
```

**Functional Requirement** 🚥

- [ ] it shold be able create user
- [ ] it sholdn't be able to create user if already email exist
- [ ] it shold be able possible to give a role to a user.
- [ ] it shold be able update photo user user

**Non-Functional Requirement** 🏗

- [ ] an email provider has to be implemented!
- [ ] an storage provider has to be implemented!

**Business Rules** 💼

- the user has to confirm the registration by email

## Customer

### Entitie

| Customer   | type      |
|------------|-----------|
| id         | uuid      |
| name       | varchar   |
| cnpj       | varchar   |
| isProvider | boolean   |
| email      | varchar   |
| address    | varchar   |
| phone      | varchar   |
| created_at | timestamp |
| updated_at | timestamp |

**Functional Requirement** 🚥

- [ ] it shold be able create customer
- [ ] it sholdn't be able to create customer if already email exist
- [ ] it sholdn't be able to create customer if already cnpj exist

**Non-Functional Requirement** 🏗

- [ ] an email provider has to be implemented!

**Business Rules** 💼

- the customer owner of the platform is created dares of a seed.
- having created a seed from a customer, all the others will become a provider.
- only the client who owns the platform can create a user.
  - when created a user the password can be exchanged by the same.
- the provider client registers and authenticates by email to access the plataform.

#### views

- cadastro de usuarios
  - cadrastro de novos clientes
  - cadastro de funcionarios
  - cadastro de fornecedores
  
- requisiçoes.
  - compra pontual
  - compra recorente

- cadastro de item
  - pre-cadastro pelo cliente
  - confirmação de cadastro de item
 
#### macro
