# Desafio Técnico Frontend – MOB4AI

Este projeto é uma aplicação React desenvolvida como parte do desafio técnico da equipe de Inteligência Artificial Avançada para Sistemas Móveis Neuromórficos - MOB4AI

O objetivo principal foi criar um dashboard interativo com visualização de dados da bateria e da temperatura de dispositivos, utilizando gráficos dinâmicos e uma barra lateral informativa.

---

## Tecnologias Utilizadas

- React.js
- Recharts (para gráficos)
- Axios (para chamadas à API)
- Docker (para rodar o backend fornecido)

---

## Funcionalidades Implementadas

- [x] Gráfico de Linha da Corrente Instantânea;
- [x] Gráfico de Área do Nível da Bateria;
- [x] Gráfico de Linha da Temperatura da Bateria;
- [x] Gráfico de Linha da Temperatura da CPU;
- [x] Tooltip completo com os seguintes dados:
  - Data e Hora (DD/MM/AA - HH:MM:SS)
  - Corrente Instantânea
  - Capacidade da Bateria
  - Temperatura da Bateria
  - Temperatura da CPU
- [x] Barra lateral sincronizada com os gráficos, exibindo:
  - Plug Type / Status
  - Tensão (Voltage)
  - Corrente (Instant Current)
  - Temperatura da Bateria

---

## Como Executar

1. Clone este repositório (https://github.com/kassia-ramos/MOB4AI.git);
2. Acesse a Pasta do Frontend (Dashboard);
3. Instale as depêndencias;
4. Rode o backend com Docker através do docker-compose up;
5. Execute o frontend com npm start;
6. Acesse o navegador;

## Observações Técnicas

- Os dados foram unificados com base na proximidade do valor do campo "Timestamp", (com uma margem de 10 segundos) para exibição conjunto de informações na barra lateral e no Tooltip;
- As temperaturas foram convertidas de milicelsius para celsius;
- Os gráficos estão organizados em 2 linhas para auxiliar em uma boa visualização;
- O layout final é simples,funcional e coerente com a proposta do desafio.

## Observação

- O backend foi fornecido pela equipe da MOB4AI para fins de avaliação.
- Esta entrega contempla exclusivamente a parte do **Frontend**, que inclui as funcionalidades implementadas descritas anteriormente.
