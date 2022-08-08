var rotate = function(nums, k) {
	let newnum = []
	for(i=0; i<nums.length-k; i++){
		newnum[i+k] = nums[i];
	}

	for(i=0; i<k; i++){
		newnum[k-i-1] = nums[nums.length-1-i];
	}
	nums = newnum.slice();
	//console.log(nums)
};