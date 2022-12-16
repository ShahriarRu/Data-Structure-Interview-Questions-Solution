class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        int m = matrix.size();
        int n = matrix[0].size();

        set <int> row;
        set <int> col;

        for(int i = 0; i < m; i++){
            for(int j =0; j<n; j++){
                if(matrix[i][j] == 0){
                    row.insert(i);
                    col.insert(j);
                }
            }
        }

        for(auto item : row){
            for(int i=0; i<n; i++){
                matrix[item][i] = 0;
            }
        }
        for(auto itm : col){
            for(int i=0; i<m; i++){
                matrix[i][itm] = 0;
            }
        }

        //  for(int i = 0; i < m; i++){
        //     for(int j =0; j < n; j++){
        //         if(row.find(i) != row.end() || col.find(j) != col.end()){
        //             matrix[i][j] = 0;
        //         }
        //     }
        //  }
    }
};