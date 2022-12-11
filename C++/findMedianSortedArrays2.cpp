#include<bits/stdc++.h>
using namespace std;



double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
	int size1 = nums1.size(), size2 = nums2.size();
	if(size1<size2){
		return findMedianSortedArrays(nums2, nums1);
	}
	int target = (size1 + size2)/2, val;
	bool even = false;

	if((size1 + size2)%2 == 0){
		even = true;
	}

	int index1 = target-1, index2 = target;

	int count = 0;

	cout << "target index = " << target << endl;

	int i1 = 0, i2 = 0;
	while(count < target){

		if(nums1[i1] < nums2[i2]){
			if(count == index1){
				if(even) {
					if(i1 != size1-1){
						return (nums1[i1] + min(nums1[i1+1] , nums2[i2]))/2.0;
					}
					else{
						return (nums1[i1] + nums2[i2])/2.0;
					}
					
				}
				else{
					cout << "odd1" << endl;
					return nums1[i1+1];
				}
			}

			i1++;

		} 

		else{
			if(count == index1){
				if(even) {
					if(i2 != size2-1){
						return (nums2[i2] + min(nums1[i1] , nums2[i2+1]))/2.0;
					}
					else{
						return (nums1[i1] + nums2[i2])/2.0;
					}
					
				}
				else{
					cout << "odd" << endl;
					return nums1[i1+1];
				}
			}
			i2++;
		}

		count++;

	}
	return 0.0;
}

int main(){
	vector<int> nums1{1,2,3};
	vector<int> nums2{1,1};

	cout << findMedianSortedArrays(nums1, nums2);
}