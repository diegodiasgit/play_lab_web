# PlayLab — Web

Projeto de automação de testes Front Web desenvolvido para a aplicação **PlayLab (Playwright Practice Arena)** utilizando **Cypress** com **TypeScript**. 

A solução adota o padrão de projeto **Page Object Model (POM)**, prioriza seletores resilientes baseados em acessibilidade/atributos (`data-testid`), trata concorrência e assincronismo via *retry-ability* nativa do Cypress, realiza análises automatizadas de acessibilidade (WCAG) e executa de forma automatizada via **GitHub Actions**.

---

## 🎯 Escopo da Automação

A suíte cobre os cenários críticos selecionados a partir da matriz de riscos:

* **Gerenciamento de Usuários (Jornada Principal):**
  * `USR-01`: Validar carregamento inicial da tabela de usuários.
  * `USR-03`: Pesquisar e localizar um usuário existente.
  * `USR-04` *(Negativo)*: Validar o comportamento e mensagem visual para usuário inexistente.
* **Formulários:**
  * `FRM-01`: Submeter formulário com dados válidos.
  * `FRM-02` *(Negativo)*: Validar o bloqueio e mensagens de erro ao submeter campos obrigatórios vazios.
* **Componentes Dinâmicos & Assíncronos:**
  * `DYN-01`: Sincronizar e aguardar o carregamento de dropdown assíncrono sem o uso de esperas fixas (`cy.wait`).
* **Acessibilidade:**
  * `A11Y-06`: Executar auditoria automatizada de acessibilidade com `cypress-axe`.
* **Responsividade:**
  * `RSP-02`: Executar jornada crítica em viewport de dispositivo móvel (`cy.viewport(390, 844)`).

---

## 🛠️ Tech Stack & Ferramentas

* **Framework de Testes:** Cypress (v13+)
* **Linguagem:** TypeScript
* **Acessibilidade:** `cypress-axe` + `axe-core`
* **CI/CD Pipeline:** GitHub Actions
* **Node.js:** v18+

---

## 📂 Arquitetura do Projeto

```text
front-web-qa-challenge/
├── .github/
│   └── workflows/
│       └── tests.yml              # Pipeline CI/CD no GitHub Actions
├── docs/
│   ├── estrategia-de-testes.md    # Estratégia global e gerenciamento de riscos
│   └── matriz-de-cenarios.md      # Priorização dos cenários de teste
├── cypress/
│   ├── e2e/                       # Suítes de testes divididas por módulo
│   │   ├── accessibility.cy.ts
│   │   ├── dynamic.cy.ts
│   │   ├── form.cy.ts
│   │   ├── responsive.cy.ts
│   │   └── users.cy.ts
│   ├── fixtures/                  # Massa de dados de teste estática e mocks
│   │   └── user-data.json
│   ├── pages/                     # Page Object Model (POM)
│   │   ├── base.page.ts
│   │   ├── form.page.ts
│   │   └── users.page.ts
│   └── support/                   # Importação de comandos globais e plugins
│       ├── commands.ts
│       └── e2e.ts
├── cypress.config.ts              # Configuração global do Cypress
├── package.json                   # Scripts e dependências do projeto
├── tsconfig.json                  # Configuração do compilador TypeScript
└── README.md                      # Documentação principal