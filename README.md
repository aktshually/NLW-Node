# Deixando tudo pronto

## Preparando ambiente para o TypeScript


|Comando | Função  |
|---|---|
|`yarn init -y`   |  cria nosso package.json com informações pré-prontas sobre nosso projeto |
| `yarn add typescript -D`  | instala a biblioteca para utilizarmos o TypeScript. **A flag `-D` significa que aquilo é uma dependência de desenvolvimento**  |
| `yarn tsc --init`  | cria um tsconfig.json com novas configurações pré-prontas para nossa aplicação  |
| `yarn tsc`  |  cria um arquivo .js mantendo a tipagem oferecida pelo TypeScript para que possamos rodar, utilizando `node nome_do_arquivo.js` |
| `yarn add ts-node-dev -D`  | instala uma biblioteca que é responsável por pegar nosso código TypeScript e converter de uma forma que o Node consiga entender  |
