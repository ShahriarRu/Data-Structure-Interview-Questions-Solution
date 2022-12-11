#include<bits/stdc++.h>
using namespace std;


int removeElement(vector<int>& nums, int val) {
        for(auto it = nums.begin(); it != nums.end(); ){
		    if(*it == val){
			    nums.erase(it);
			    continue;
		    }
		    it++;
	    }
        return nums.size();
 }

int main(){
	int val, rmv = 1;
	vector<int> nums;

	while(cin>>val){
		nums.push_back(val);
	}
	removeElement(nums, 3);

	for(auto it : nums){
		cout << it << " ";
	}
}