
struct ListNode {
      int val;
      ListNode *next;
      ListNode() : val(0), next(nullptr) {}
      ListNode(int x) : val(x), next(nullptr) {}
      ListNode(int x, ListNode *next) : val(x), next(next) {}
};
 
class Solution {
public:

    ListNode* partition(ListNode* head, int x) {
        if(head == nullptr || head->next == nullptr){
            return head;
        }

        ListNode* sentinel = new ListNode(-200, head); 
        ListNode* temp = head;
        ListNode* prev = sentinel;
        ListNode* pos = sentinel;
        ListNode* hold = nullptr;


        while(temp != nullptr){

            if(temp->val < x){
                hold = temp;
                prev->next = hold->next; 
                //hold->next = NULL;
                

                hold->next = pos->next;
                pos->next = hold;
                pos = pos->next;                
            }
            prev = temp;
            temp = temp->next;
        }

        return sentinel->next;
    }
};