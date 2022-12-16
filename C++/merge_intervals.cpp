#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> merge(vector<vector<int>>& intervals) {

	vector<vector<int>> merged;

	for(int i =0; i<intervals.size(); i++){
		int first = intervals[i][0];
		int last = -1;
		if(i != intervals.size()-1){
			while(intervals[i][1] >= intervals[i+1][0]){
				first = min(intervals[i][0], intervals[i+1][0]);
				last = max(last, intervals[i+1][0]);
				i++;
				if(i == intervals.size()-1){
					break;
				}
			}
		}

		merged.push_back({first, max(last, intervals[i][1])});
	}
	return merged;
}

int main(){
	vector<vector<int>> intervals 
	{
		{1,3},
		{3,6},
		{0,10},
		{10,18},
		{19, 20}
	};

	vector<vector<int>> merged = merge(intervals);
	for(auto span : merged){
		cout << span[0] << " " << span[1];
		cout << endl;
	}

	
}