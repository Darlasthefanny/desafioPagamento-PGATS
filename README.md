# Desafio Pagamento - Pipeline de Integração Contínua

## Descrição

Este projeto foi desenvolvido como atividade da pós-graduação com o objetivo de implementar uma pipeline de Integração Contínua (CI) utilizando GitHub Actions.

A aplicação consiste em um serviço simples de pagamento que classifica pagamentos em duas categorias:

- Padrão: valores até R$ 100,00
- Cara: valores acima de R$ 100,00

Além disso, o sistema permite consultar o último pagamento realizado.

---

## Tecnologias Utilizadas

- JavaScript (Node.js)
- Git
- GitHub
- GitHub Actions
- ESLint
- Node Test Runner

---

## Estrutura do Projeto

```text
├── .github
│   └── workflows
│       └── ci.yml
├── reports
│   └── test-results.xml
├── src
│   └── desafioPagamento.js
├── test
│   └── desafioPagamento.test.js
├── eslint.config.js
├── package.json
└── README.md
```

---

## Testes Automatizados

Os testes validam:

- Classificação de pagamento como "cara"
- Classificação de pagamento como "padrão"
- Retorno correto do último pagamento realizado

Para executar os testes localmente:

```bash
npm test
```

---

## Pipeline de Integração Contínua

A pipeline foi implementada utilizando GitHub Actions.

### Disparadores configurados

#### Push

A execução ocorre automaticamente quando há envio de código para a branch principal.

```yaml
push:
  branches: [ main ]
```

#### Execução Manual

Permite executar a pipeline diretamente pela interface do GitHub.

```yaml
workflow_dispatch:
```

#### Execução Agendada

A pipeline também é executada diariamente por agendamento.

```yaml
schedule:
  - cron: '0 8 * * *'
```

---

## Etapas da Pipeline

1. Checkout do código
2. Configuração do Node.js
3. Instalação das dependências
4. Execução do ESLint
5. Execução dos testes automatizados
6. Geração do relatório XML
7. Upload do relatório como Artifact

---

## Relatório de Testes

Os resultados dos testes são gerados automaticamente no formato XML:

```text
reports/test-results.xml
```

O relatório é armazenado como Artifact no GitHub Actions, permitindo consulta posterior das execuções.

---

## Como Executar o Projeto

Instalar dependências:

```bash
npm install
```

Executar lint:

```bash
npm run lint
```

Executar testes:

```bash
npm test
```

---

## Evidências

A execução da pipeline pode ser visualizada na aba:

Actions → CI - Testes e Lint

Os relatórios podem ser encontrados em:

Actions → Workflow Executado → Artifacts

---

## Autor

Darla Sthefanny

Pós-Graduação em Automação de Testes e Qualidade de Software