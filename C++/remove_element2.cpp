#include<bits/stdc++.h>
using namespace std;

void swapElement(vector<int>& nums, int index1, int index2){
	int temp;
	temp = nums[index1];
	nums[index1] = nums[index2];
	nums[index2] = temp;
}

int removeElement(vector<int>& nums, int val) {
	int swapIndex = nums.size()-1;
	int count = nums.size();

    for(int i = nums.size()-1; i >= 0; i--){
		if(nums[i] == val){
			swapElement(nums, i, swapIndex);
			swapIndex--;
			count--;
		}
	}
    return count;
 }

int main(){
	int val, rmv = 1;
	vector<int> nums;

	while(cin>>val){
		nums.push_back(val);
	}
	cout << removeElement(nums, 1) << endl;

	for(auto it : nums){
		cout << it << " ";
	}
}