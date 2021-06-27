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

### Middleware
São interceptadores dentro de uma requisição. Eles podem ser usados para fazer uma tratativa de erro e exibir uma mensagem a partir disso, por exemplo.
Sempre que have a utilização de `express().use()`, você estará fazendo um middleware.
Um middleware também fica entre nossa requisição (request) e nossa resposta (response), assim permitindo fazer checagens de possíveis incongruências durante a navegação do usuário na nossa aplicação (por exemplo, falta de permissões para acessar determinada rota)

### findOne()

Pode ser traduzido em SQL como:
```sql
SELECT * FROM tabela WHERE something = 'something'
``` 
O parâmetro que o método recebe é um objeto o qual, se contém apenas um valor, este valor será validado para pegar todos os valores nomeados com o nome daquele valor e com o respectivo valor. Ou seja, como no projeto, nós usamos apenas um valor dentro do nosso objeto:
```ts
const tagAlreardyExists = await tagsRepositories.findOne({
    name
})
```
Poderia ser traduzido como, por exemplo:
```sql
SELECT * FROM tags WHERE name = 'valor da variável name'
```


## Terceira aula
~~nenhum conteúdo adicional ao express, essencialmente~~

## Quarta aula

### JWT
É um padrão de token que permite fazer comunicações entre requisições usando esse token.
É basicamente um token que é passado entre as requisições para as rotas, com o objetivo de fazer uma verificação. Ele contem 3 partes:

- **Header:** responsável por armazenar o tipo de token utilizado e o algorítimo.
- **Payload**: contém os dados que seriam compartilhados. Não é recomendado armazenar informações sensíveis (senha, informações pessoais, etc) no payload pois este pode ser descriptografado e usado contra o usuário.
- **Verify signature**: concatena o **header** e **payload**, além disso precisa de uma chave secreta para validar o token. Geralmente é gerada uma chave única para a aplicação.

### Comandos para typeorm

Os comandos já foram abordados em outra aula porém esqueci de fazer as devidas anotações, então constam aqui os comandos.

| Comando  | Função  |
|---|---|
| `yarn typeorm migration:create -n MigrationName`  | Cria uma migration com o nome inserido   |
| `yarn typeorm migration:run`  | Roda a migration e cria o(s) campo(s) especificado(s)  |