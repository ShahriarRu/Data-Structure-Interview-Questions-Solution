/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<vector<int>> levelOrderBottom(TreeNode* root) {
        if(root==nullptr){
            return {};
        }
        vector<vector<int>> results;
        queue<TreeNode*> q;
        q.push(root);

        while(!q.empty()){
            int size = q.size();
            vector<int> level;
            while(size--){
                TreeNode* current = q.front();
                level.push_back(current->val);
                q.pop();
                if(current->left){
                    q.push(current->left);
                }
                if(current->right){
                    q.push(current->right);
                }
            }
            results.push_back(level);
        }
        reverse(results.begin(), results.end());
        return results;
    }
    
};