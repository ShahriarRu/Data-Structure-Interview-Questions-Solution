class Solution {
public:

    void DFS(int start, vector<bool> &visited, vector<vector<int>> &isConnected){
        visited[start] = true;
        cout << start << " ";
        for(int i=0; i<isConnected.size(); i++){
            if(isConnected[start][i] && !visited[i] && start!=i){
                DFS(i, visited, isConnected);
            }    
        }
    }
    int findCircleNum(vector<vector<int>>& isConnected) {
        vector<bool>visited(isConnected.size(), false);
        int count = 0;
        for(int i = 0; i<isConnected.size(); i++){
            if(!visited[i]){
                DFS(i, visited, isConnected);
                count++;
            }
        }
        return count;
    }
};