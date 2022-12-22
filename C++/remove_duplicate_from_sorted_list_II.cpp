/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        ListNode* temp = head;

        if(head == NULL || head->next == NULL){
            return head;
        }
        int prev = -200;
        ListNode* prevNode = NULL;

        bool flag = false;
        while(temp->next != NULL){

            if(temp->val == temp->next->val){

                while(temp->val == temp->next->val){
                    if(temp->next->next != NULL){
                        temp = temp->next;
                    }else{
                        temp = temp->next;
                        flag = true;
                        break;
                    }
                }

                if(prevNode == NULL){
                    head = temp->next;
                    temp = head;
                }else{
                    prevNode->next = temp->next;
                    temp = prevNode->next; 
                }

            }else{
                prevNode = temp;
                temp = temp->next;
            }

            if(flag){
                break;
            }
        }
        return head;
    }
};