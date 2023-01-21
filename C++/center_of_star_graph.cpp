class Solution {
public:
    int findCenter(vector<vector<int>>& edges) {
        int size = edges.size();
        vector<vector<int>> graph(size+2);
        for(auto edge: edges){
            graph[edge[0]].push_back(edge[1]);
            graph[edge[1]].push_back(edge[0]);
        }
        cout << graph.size();
        for(int i=0; i<graph.size(); i++){
            if(graph[i].size() == edges.size()){
                cout << "it's " << i+1;
                return i;
            }
        }
        return 1;
    }
};