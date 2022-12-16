class Solution {
public:

    int findRow(vector<vector<int>>& matrix, int target){
        int m = matrix.size();
        int n = matrix[0].size();

        for(int i = 0; i<m; i++){
            if(target <= matrix[i][n-1]){
                return i;
            }
        }

        return -1;
    }

    bool binSearch(vector<int>& matrix, int target, int start, int end){

        while(start<=end){
            int mid = (start+end)/2;

            if(matrix[mid] == target){
                return true;
            }
            else if(matrix[mid] < target){
                start = mid+1;
                
            }else{
                end = mid-1;
            }
        }

        return false;
    }

    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int row = findRow(matrix, target);
        cout << row << endl;
        if(row == -1){
            return false;
        }
        else{
            return binSearch(matrix[row], target, 0, matrix[row].size()-1);

        }
    }
};