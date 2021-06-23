# NLW - Node

## Primeira aula

### Comandos básicos
|Comando | Função  |
|---|---|
|`yarn init -y`   |  cria nosso package.json com informações pré-prontas sobre nosso projeto |
| `yarn add typescript -D`  | instala a biblioteca para utilizarmos o TypeScript. **A flag `-D` significa que aquilo é uma dependência de desenvolvimento**  |
| `yarn tsc --init`  | cria um tsconfig.json com novas configurações pré-prontas para nossa aplicação  |
| `yarn tsc`  |  cria um arquivo .js mantendo a tipagem oferecida pelo TypeScript para que possamos rodar, utilizando `node nome_do_arquivo.js` |
| `yarn add ts-node-dev -D`  | instala uma biblioteca que é responsável por pegar nosso código TypeScript e converter de uma forma que o Node consiga entender  |

### Principais métodos do express

| Método  | Função |
|---|--|
| `GET`  | Buscar informação |
| `POST` | Inserir informação |
| `PUT`  | Alterar informação existente |
| `DELETE`  | Remover informação  |
|  `PATCH` | Alterar informação específica  |

### Como fazer um `GET`?
```ts
import express from "express";

app = express();
app.get("/testes/get", (request, response) => {

    response.send("hello world, this is get method")

})
```

### Como fazer um `POST`?
```ts
import express from "express";

app = express();
app.post("/testes/post", (request, response) => {
    response.send("hello world, this is a post method")
})
```

## Segunda aula

### Tipos de parâmetros

| Tipos  |  O que são  | Exemplos
|---|---|---|
| Route params  | O número passado no fim da rota produtos e separado por uma `/` pode ser um ID para identificar o produto.  | `http://localhost:3000/produtos/12321873` |
| Query params  |  Parâmetros que fazem parte de um filtro. O primeiro deles é separado da rota por `?` e outros parâmetros podem ser separados com o `&`. Não são necessários para a URL como um todo.  |   `http://localhost:3000/produtos?name=teclado&id=123456`   |
| Body params  | Utilizados para métodos `POST`, `PUT` ou `PATCH`. Eles são inseridos no corpo da requisição  | `BodyParams = {"name":"teclado", "id":123456}`   |

### CreateConnection()

Método responsável por incializar a criar nosso banco de dados sqlite

### Métodos up() e down()
Ao digitar o comando anterior, percebe-se que é criado um arquivo nomeaddo com o horário em que a tabela foi criada e o nome da table, seguido da extensão `.ts`. Dentro deste arquivo, encontram-se os métodos `up()` e `down()`
| Método  | Função  |
|---|---|
| `up()`  | Quando queremos montar uma tabela  |
| `down()`  | Quanto, porventura, queremos desfazer uma tabela  |

### Entidades
Uma entidade pode ser referenciada como uma tabela. <br>
Quando a aplicação fizer uma requisição dentro da entidade, o ORM vê qual tabela está sendo referenciada e passa a "saber" que tudo que está sendo referenciado, está sendo referenciado àquela tabela.


### uuid - v4
Gera números aleatórios que, nesta aplicação, vão ser usados para definir o ID

### constructor
Funciona como um `__init__` do Python: quando a classe é instanciada (por exemplo: `const variable = new Classe()`), este método é executado.

### Repositórios
Camada responsável por conectar nossas entidades com o banco de dados.
Para fazermos um, utilizaremos `EntityRepository` e `Repository` de `typeorm`. Iniciando uma classe e aplicando um decorador com o método `EntityRepository`, extendo a mesma com `Repository` com o tipo da nossa entidade, desta maneira:
```ts
import { EntityRepository, Repository } from "typeorm";
import { MyEntity } from "./entities/Entidade"

@EntityRepository()
class MyRepository extends Repository<MyEntity> {

}

export { MyRepository }

```


### Services
Faz praticamente todos os serviços da nossa aplicação, até agora os serviços são utilizados para cadastrar e/ou verificar a existência de um usuário por *e-mail*.

### Controller
Funciona com um *request, response*. Dentro dele, nós teremos acesso ao request que está sendo feito e a resposta atribuída ao mesmo, semelhante ao formato de como fizemos na primeira aula (`app.get(), app.post()`)
