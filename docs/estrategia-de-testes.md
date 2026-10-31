1. Objetivo

    Definir a abordagem técnica, escopo, critérios de priorização e diretrizes de automação Front Web para a plataforma PlayLab, assegurando alta estabilidade, manutenibilidade e cobertura eficiente dos fluxos críticos de negócio.

2. Escopo
    
    Incluso:

        - Testes funcionais automatizados de tabelas (listagem, busca, estados vazios/negativos).

        - Testes de formulários (validações de campos obrigatórios e submissão bem-sucedida).

        - Tratamento de componentes assíncronos e dropdowns dinâmicos baseados em eventos de rede/DOM.

        - Validações automatizadas de acessibilidade com injeção de axe-core.

        - Execução em viewport mobile e desktop (Chromium e WebKit/Firefox).

        - Integração contínua via GitHub Actions com geração de relatórios HTML, traces e screenshots em caso de falha.

    Fora de Escopo:

        - Testes de carga, estresse e segurança (DAST/SAST).

        - Testes exploratórios manuais profundos em dispositivos físicos reais (foco em emulação estável via Cypress).

3. Riscos Identificados e Mitigação

    - Flakiness por Sincronização Assíncrona: Mitigado através do uso da mecânica nativa de retry-ability e asserções encadeadas do Cypress (cy.get().should('be.visible')) e pela interceptação de eventos de rede com cy.intercept() e cy.wait('@alias'), eliminando o uso de esperas fixas por tempo (cy.wait(ms)).

    - Fragilidade de Seletores: Mitigado priorizando atributos orientados a testes (data-testid), textos visíveis (cy.contains()) e papéis acessíveis, banindo completamente XPath absoluto e seletores puramente posicionais.

    - Acoplamento de Dados: Uso de geradores dinâmicos de dados (faker-br / utilitários customizados) para evitar dependência de registros estáticos que possam ser alterados ou apagados por outros testes.

4. Navegadores, Dispositivos e Resoluções

    Navegadores: 
        
        - Chromium (padrão principal)
        - WebKit (Safari mobile simulation).

    Resoluções:

        - Desktop: 1920x1080 (Full HD).

        - Mobile: Viewport simulado 390x844 (iPhone 13 / Dispositivo móvel padrão).