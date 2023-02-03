class Solution {
public:

    void dfs(vector<vector<char>>& grid,  vector<vector<bool>> &visited, int x, int y, int rows, int cols){
        int dx[4] = {-1, 0, 1, 0};
        int dy[4] = {0, 1, 0, -1};

        visited[x][y] = true;
        for(int i=0; i<4; i++){
            int newX = x + dx[i];
            int newY = y+ dy[i];

            if(newX >= 0 && newX < rows && newY >= 0 && newY < cols && !visited[newX][newY] && grid[newX][newY] == '1'){
                dfs(grid, visited, newX, newY, rows, cols);
            }
        }
    }
    int numIslands(vector<vector<char>>& grid) {
        int rows = grid.size();
        int cols = grid[0].size();

        vector<vector<bool>> visited(rows,vector<bool>(cols, false));
        int island = 0;
        for(int i = 0; i<rows; i++){
            for(int j=0; j<cols; j++){
                if(grid[i][j] == '1' && !visited[i][j]){
                    dfs(grid, visited, i, j, rows, cols);
                    island++;
                }
            }
        }
        return island;
    }
};