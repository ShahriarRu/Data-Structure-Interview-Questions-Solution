#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> graph;

void addEdge(int u, int v) {
    graph[u].push_back(v);
    graph[v].push_back(u);
}

void DFSUtil(int start, vector<bool>&visited){
    visited[start] = true;
    cout << start << " ";
    for(auto child : graph[start]){
        if(!visited[child]){
            DFSUtil(child, visited);
        }
    }
}



void DFS(int start) {
    cout << "Following is Depth First Traversal (starting from vertex "<< start << ") \n";
    vector<bool> visited(graph.size(), false);
    DFSUtil(start, visited);
}



int main() {
    int n = 4; // Number of vertices
    graph.resize(n);
    addEdge(0, 1);
    addEdge(0, 2);
    addEdge(1, 2);
    addEdge(2, 0);
    addEdge(2, 3);
    addEdge(3, 3);


    DFS(1);

    return 0;
}
