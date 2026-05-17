---

## 🧪 Casos de Teste

| ID | Cenário | Resultado |
|---|---|---|
| CT-001 | Login com credenciais válidas | ✅ |
| CT-002 | Campos vazios | ✅ |
| CT-003 | Senha inválida | ✅ |
| CT-004 | Username inválido | ✅ |
| CT-005 | Username com espaço antes | ✅ |

---

## 🐛 Bugs Encontrados

| ID      | Título                                                 | Severidade |
| ------- | ------------------------------------------------------ | ---------- |
| BUG-001 | Login com senha inválida revela informação sensível    | 🔴 Alta    |
| BUG-002 | Login com username inválido revela informação sensível | 🔴 Alta    |

> Detalhes completos em [docs/bugs.md](docs/bugs.md)

---

## ⚙️ Como Rodar o Projeto

**Pré-requisitos:** Node.js e Yarn instalados.

```bash
# Clonar o repositório
git clone https://github.com/brendosilva/cypress-login-automation.git

# Entrar na pasta
cd cypress-login-automation

# Instalar dependências
yarn install

# Abrir o Cypress
yarn cypress open

# Rodar em modo headless
yarn cypress run
```

---

## 👨‍💻 Autor

**Brendo Silva**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin)](https://linkedin.com/in/brendo-silva)
[![GitHub](https://img.shields.io/badge/GitHub-black?style=flat&logo=github)](https://github.com/brendosilva)
