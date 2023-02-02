#include<bits/stdc++.h>

using namespace std;

 vector<int> BFS(int start, vector<int> &vec, vector<vector<int>>& graph){
        vector<bool> visited(graph.size(), false);
        queue<int> q;
        q.push(start);
       
        visited[start] = true;
        while(!q.empty()){
            int current = q.front();
            q.pop();
            vec.push_back(current);
            for(auto node: graph[current]){
                if(!visited[node]){
                    visited[node] = true;
                    q.push(node);
                }
            }
        }
        return vec;
    }

    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {
        vector<vector<int>> graph(numCourses);

        int top = prerequisites[0][1];
        graph[top].push_back(prerequisites[0][0]);
        for(int i=1; i<prerequisites.size(); i++){
            if(prerequisites[i][0] == top){
                top = prerequisites[i][0];
            }
            graph[prerequisites[i][1]].push_back(prerequisites[i][0]);
        }
        vector<int> vec;
        return BFS(top, vec, graph);
    }

int main(){
	
}