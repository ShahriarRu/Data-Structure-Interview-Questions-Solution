/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* left;
    Node* right;
    Node* next;

    Node() : val(0), left(NULL), right(NULL), next(NULL) {}

    Node(int _val) : val(_val), left(NULL), right(NULL), next(NULL) {}

    Node(int _val, Node* _left, Node* _right, Node* _next)
        : val(_val), left(_left), right(_right), next(_next) {}
};
*/

class Solution {
public:
    Node* connect(Node* root) {
        if(!root){
            return root;
        }

        queue<Node*> q;
        q.push(root);

        while(!q.empty()){
            stack<Node*>level;
            int size = q.size();
            while(size--){
                Node* current = q.front();

                if(level.empty()){
                    current->next = NULL;
                }else{
                    current->next = level.top();
                }

                level.push(current);
                q.pop();

                if(current->right){
                    q.push(current->right);
                }
                if(current->left){
                    q.push(current->left);
                }
               
            }

        }
        return root;
    }
};