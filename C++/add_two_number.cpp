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
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* temp1 = l1;
        ListNode* temp2 = l2;
        ListNode* result;
        ListNode* temp;
        int carry = 0;
        result = new ListNode();
        temp = result;

        while(temp1 != NULL && temp2 != NULL){
            ListNode* newNode = new ListNode((temp1->val + temp2->val + carry)%10);
            temp->next = newNode;
            cout << temp->val << endl;
            temp = temp->next;
            carry = (temp1->val + temp2->val + carry)/10;
            temp1 = temp1->next;
            temp2 = temp2->next;
        }

        if(temp1 == NULL && temp2 != NULL){
            while(temp2 != NULL){
                ListNode* newNode = new ListNode((temp2->val + carry)%10);
                temp->next = newNode;

                carry = (temp2->val + carry)/10;
                temp = temp->next;
                temp2 = temp2->next;
            }
        }

         if(temp2 == NULL && temp1 != NULL){
            while(temp1 != NULL){
                ListNode* newNode = new ListNode((temp1->val + carry)%10);
                temp->next = newNode;
                carry = (temp1->val + carry)/10;
                temp = temp->next;
                temp1 = temp1->next;
            }
        }

        if(carry){
            ListNode* newNode = new ListNode(carry);
            temp->next = newNode;
        }

        return result->next;
    }

};