#include<bits/stdc++.h>
using namespace std;

double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
	int size1 = nums1.size(), size2 = nums2.size();

	vector<int> nums3(size1+size2);

	merge(nums1.begin(), nums1.end(), nums2.begin(),  
                    nums2.end(), nums3.begin());

	for(auto it:nums3){
		cout << it << " ";
	}
	cout << endl;

	int target = nums3.size()/2 -1;
	cout << target << endl;

	if( (size1 + size2) % 2 == 0){
		return (nums3[target] + nums3[target+1])/2.0;
	}
	else{
		return nums3[target+1];
	}
}

int main(){
	vector<int> nums1{1,2};
	vector<int> nums2{3,4};

	cout << findMedianSortedArrays(nums1, nums2);
}