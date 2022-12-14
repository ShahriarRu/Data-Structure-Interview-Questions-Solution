#include<bits/stdc++.h>
using namespace std;



double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
	int size1 = nums1.size(), size2 = nums2.size();

	if(size1<size2){
		return findMedianSortedArrays(nums2, nums1);
	}
	if(size2 == 0){
		if(size1%2 == 0){
			return (nums1[size1/2] + nums1[size1/2 - 1])/2.0;
		}else{
			return nums1[size1/2];
		}
	}

	vector<float> nums3;

	int target = (size1 + size2)/2, val;
	int index1 = target-1, index2 = target,count = 0;

	int i1 = 0, i2 = 0;
	while(count <= target){
		if(i1 == size1){
			for(int i = i2; count!=target+1; i++){
				nums3.push_back(nums2[i]);
				count++;
			}
			break;
		}
		if(i2 == size2){
			for(int i = i1; count!=target+1; i++){
				nums3.push_back(nums1[i]);
				count++;
			}
			break;
		}

		if(nums1[i1] <= nums2[i2] ){
			nums3.push_back(nums1[i1]);
			i1++;
		} 

		else{
			nums3.push_back(nums2[i2]);
			i2++;
		}
		count++;
	}

	for(auto it: nums3){
		cout << it << " ";
	}
	
	if((size1 + size2)%2 == 0){
		cout << index1 << " " << index2  << " " << (nums3[index1] + nums3[index2]) / 2.0 << endl;
		return (double((nums3[index1] + nums3[index2]))/2.0);
	}else{
		return nums3[index2];
	}
	
	return 0.0;
}

int main(){
	vector<int> nums1{100001};
	vector<int> nums2{100000};

	cout << findMedianSortedArrays(nums1, nums2);
}