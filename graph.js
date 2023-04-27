class Graph {
  constructor() {
    this.nodes = [];
    this.edges = [];
  }

  addNode(node) {
    this.nodes.push(node);
    const index = this.nodes.length - 1;
    this.edges[index] = [];
  }

  addEdge(node1, node2) {
    const index1 = this.nodes.indexOf(node1);
    const index2 = this.nodes.indexOf(node2);
    this.edges[index1][index2] = true;
    this.edges[index2][index1] = true;
  }

  getNodes() {
    return this.nodes;
  }

  getEdges(node) {
    const index = this.nodes.indexOf(node);
    return this.edges[index];
  }
}

const graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");
graph.addNode("F");
graph.addNode("G");
graph.addNode("H");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
graph.addEdge("E", "G");
graph.addEdge("F", "H");
graph.addEdge("G", "H");

// Imprime o grafo na forma de um desenho
console.log("         A---B");
console.log("        /     \\");
console.log("       C       D");
console.log("        \\     /");
console.log("         E---F");
console.log("         |   |");
console.log("         G---H");

console.log("Nós: ", graph.getNodes());
console.log("Conexões do nó A: ", graph.getEdges("A"));
console.log("Conexões do nó B: ", graph.getEdges("B"));
console.log("Conexões do nó C: ", graph.getEdges("C"));
console.log("Conexões do nó D: ", graph.getEdges("D"));
console.log("Conexões do nó E: ", graph.getEdges("E"));
console.log("Conexões do nó F: ", graph.getEdges("F"));
console.log("Conexões do nó G: ", graph.getEdges("G"));
console.log("Conexões do nó H: ", graph.getEdges("H"));
