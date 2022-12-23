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
    ListNode* rotateRight(ListNode* head, int k) {
        ListNode* temp = head;
        ListNode* newHead;

        int length = 0;

        if(head == NULL){
            return head;
        }

        while(temp != NULL){
            temp = temp->next;
            length++;
        }

        if(k%length == 0){
            return head;
        }

        length = length-(k %length);


        temp = head;
        while(temp != NULL){
            length--;
            if(length == 0){
                newHead = temp->next;
                temp->next = NULL;
                temp = newHead;
            }
            if(temp->next == nullptr){
                break;
            }
            temp = temp->next;
        }

        temp->next = head;
        return newHead;

    }
};