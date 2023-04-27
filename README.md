# Grafo em JavaScript
Este é um exemplo simples de como criar e manipular um grafo em JavaScript.

## Como usar
Para usar o grafo, basta criar uma instância da classe Graph e adicionar nós e conexões usando as funções addNode e addEdge. Em seguida, é possível obter os nós e conexões usando as funções getNodes e getEdges.

Exemplo:
```javascript
const graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");

graph.addEdge("A", "B");
graph.addEdge("A", "C");

console.log("Nós: ", graph.getNodes());
console.log("Conexões do nó A: ", graph.getEdges("A"));
console.log("Conexões do nó B: ", graph.getEdges("B"));
console.log("Conexões do nó C: ", graph.getEdges("C"));
```


A saída do prompt seria a seguinte:

```
Nós:  [ 'A', 'B', 'C' ]
Conexões do nó A:  [ false, true, true ]
Conexões do nó B:  [ true, false, false ]
Conexões do nó C:  [ true, false, false ]
```

Também é possível imprimir o grafo na forma de um desenho no prompt, usando o seguinte código:

```
console.log("  A---B");
console.log(" /    |");
console.log("C     |");
console.log(" \\    |");
console.log("  `---´");
A saída seria a seguinte:
```

```
  A---B
 /    |
C     |
 \    |
  `---´
  
 ```
## Contribuição
Este é um exemplo simples, mas você pode contribuir para melhorá-lo ou implementar recursos adicionais. Basta fazer um fork do repositório, implementar as mudanças e enviar um pull request.

## Licença
Este projeto está licenciado sob a licença MIT. 
