#include<bits/stdc++.h>
using namespace std;

int maxSubArray(vector<int>& nums) {
        int ans = nums[0], sum = 0;
        for(int i = 0; i<nums.size(); i++){
            sum+=nums[i];
            ans = max(sum, ans);
            sum = max(sum, 0);
        }

        return ans;
}

int main(){
    vector<int> nums{1,2,-1,2,-3,4,2,-1,-2,4};

    cout << maxSubArray(nums);
}

