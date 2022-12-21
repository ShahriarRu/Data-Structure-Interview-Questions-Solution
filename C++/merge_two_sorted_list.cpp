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
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode* result = new ListNode();
        ListNode* temp = result;
        int val1, val2;
        while(list1 != nullptr || list2 != nullptr){
            val1 = 200;
            val2 = 200;
            if(list1 != nullptr){
                val1 = list1->val;
            }
            if(list2 != nullptr){
                val2 = list2->val;
            }
            ListNode* newNode = new ListNode(min(val1,val2));
            temp->next = newNode;
            temp = temp->next;

            if(val1 < val2){
                list1 = list1->next;
            }else{
                list2 = list2->next;
            }


        }
        return result->next;
    }
};