## BUG-001 - senha inválida

TÍTULO
Mensagem de erro do login revela informação sensível do usuário

SEVERIDADE
Alta — impacto de segurança

AMBIENTE
https://practicetestautomation.com/practice-test-login/

PRÉ-CONDIÇÃO
Ter um usuário válido cadastrado no sistema

PASSOS PARA REPRODUZIR

1. Acessar a página de login
2. Repetir com usuário válido + senha errada
3. Clicar em Submit
4. Observar mensagem de erro

RESULTADO ATUAL

- Senha inválida → exibe "Your password is invalid!"

RESULTADO ESPERADO
Devem exibir mensagem genérica:
"Your username or password is invalid!"

EVIDÊNCIA
![Bug 001 - senha inválido](../cypress/screenshots/login.cy.js/Login -- Segurança -- CT-003 - Deve exibir mensagem de erro padronizada, ao mandar senha incorreta (failed).png)

---

## BUG-002 - username inválida

TÍTULO
Mensagem de erro do login revela informação sensível do usuário

SEVERIDADE
Alta — impacto de segurança

AMBIENTE
https://practicetestautomation.com/practice-test-login/

PRÉ-CONDIÇÃO
Ter um usuário válido cadastrado no sistema

PASSOS PARA REPRODUZIR

1. Acessar a página de login
2. Inserir usuário inexistente + senha qualquer
3. Clicar em Submit
4. Observar mensagem de erro

RESULTADO ATUAL

- Usuário inválido → exibe "Your username is invalid!"

RESULTADO ESPERADO
Devem exibir mensagem genérica:
"Your username or password is invalid!"

EVIDÊNCIA
![Bug 002 - username inválida](../cypress/screenshots/login.cy.js/Login -- Segurança -- CT-004 - Deve exibir mensagem de erro padronizada, ao mandar username incorreto (failed).png)
