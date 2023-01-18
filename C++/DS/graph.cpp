#include<bits/stdc++.h>
using namespace std;

typedef vector <list<int>> Graph;

Graph addEdge(Graph g, int v1, int v2){
    g[v1].push_back(v2);
    g[v2].push_back(v1);
    return g;
}

void DFSUtil(Graph g, int v, vector<bool> &visited) {
    visited[v] = true;
    cout << v << " ";
    for (auto i : g[v])
        if (!visited[i])
            DFSUtil(g, i, visited);
}


void DFS(Graph g, int s) {
    vector<bool> visited(g.size(), false);
    DFSUtil(g, s, visited);
}


int main(){
    Graph g(6);
    g = addEdge(g, 1, 3);
    g = addEdge(g, 1, 4);
    g = addEdge(g, 2, 4);
    g = addEdge(g, 2, 5);
    g = addEdge(g, 3, 4);
    g = addEdge(g, 4, 5);

    cout << "Following is Depth First Traversal (starting from vertex 1) \n";
    DFS(g, 2);

    return 0;
}