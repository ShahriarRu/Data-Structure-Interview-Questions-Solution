
struct ListNode {
      int val;
      ListNode *next;
      ListNode() : val(0), next(nullptr) {}
      ListNode(int x) : val(x), next(nullptr) {}
      ListNode(int x, ListNode *next) : val(x), next(next) {}
};
 

class Solution {
public:
    ListNode* reverseKGroup(ListNode* head, int k)
    {
        vector<ListNode*> v;
        
        while (head)
        {
            v.push_back(head);
            head = head->next;
        }
        
        for (auto it = v.begin(); it+k <= v.end(); it += k)
            reverse(it, it+k);
        
        for (int i = 0; i < v.size()-1; i++)
            v[i]->next = v[i+1];
        v.back()->next = nullptr;
        return v[0];
    }
};

class Solution {
public:
        ListNode* reverseKGroup(ListNode* head, int k) {
        if(!head) return NULL;
        ListNode* dummy = new ListNode(0);
        ListNode* cur = head;
        ListNode* pre = NULL;
        ListNode* last_tail = dummy;
        int num = 0;
        while(cur){
            cur = cur->next;
            num++;
        }
        cur = head;
        while(num >= k){
            ListNode* tail = cur;
            for(int i = 0; i < k; i++){
                ListNode* temp = cur->next;
                cur->next = pre;
                pre = cur;
                cur = temp;
            }
            last_tail->next = pre;
            last_tail = tail;
            num -= k;
        }
        last_tail->next = cur;
        return dummy->next;
    }
    
};