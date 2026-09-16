# Calculadora de Partidas Rankeadas

Projeto desenvolvido como parte do desafio prático de lógica de programação da Digital Innovation One (DIO).

## Visão Geral

O objetivo da aplicação é processar a pontuação de um jogador de partidas ranqueadas. O sistema calcula o saldo líquido a partir do número de vitórias e derrotas e, com base no total de vitórias, classifica o jogador no respectivo nível de ranqueamento.

## Tecnologias e Conceitos

- **Linguagem:** JavaScript (Node.js)
- **Estruturas e Conceitos:**
  - Declaração e escopo de variáveis
  - Operadores aritméticos e relacionais
  - Funções puras com retorno estruturado
  - Estruturas condicionais (`if` / `else if` / `else`)
  - Estruturas de repetição (`for`) para testes de dados em lote

## Regras de Classificação

O saldo de partidas é determinado pela fórmula:

$$Saldo = Vitórias - Derrotas$$

A classificação de nível obedece à quantidade de vitórias conforme a tabela abaixo:

| Vitórias | Nível |
| :--- | :--- |
| Menor que 10 | Ferro |
| 11 a 20 | Bronze |
| 21 a 50 | Prata |
| 51 a 80 | Ouro |
| 81 a 90 | Diamante |
| 91 a 100 | Lendário |
| Maior ou igual a 101 | Imortal |

## Instalação e Execução

### Pré-requisitos
- Node.js instalado no ambiente.
- Git para clonagem do repositório.

### Execução

1. Clone o repositório:
   ```bash
   git clone [https://github.com/UalaceAraujo/calculadora-partidas-rankeadas.git](https://github.com/UalaceAraujo/calculadora-partidas-rankeadas.git)
