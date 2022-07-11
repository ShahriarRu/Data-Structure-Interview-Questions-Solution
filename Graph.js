class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjecentList = {};
  }

  addVertex(node) {
    this.adjecentList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    this.adjecentList[node1].push(node2);
    this.adjecentList[node2].push(node1);
  }

  showConnectons() {}
}

const myGraph = new Graph();
