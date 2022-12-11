#include<bits/stdc++.h>
using namespace std;

bool checkPermutation(string s1, string s2){
	if(s1.length() != s2.length()){
		return false;
	}

	int sum1 = 0, sum2 = 0;  

	for(int i = 0; i<s1.length(); i++){
		sum1+= s1[i];
		sum2+= s2[i];
	}

	cout << sum1 << " " << sum2 << endl;

	if(sum1 == sum2){
		return true;
	}else{
		return false;
	}
}

bool checkPermutationBit(string s1, string s2){
	if(s1.length() != s2.length()){
		return false;
	}
	int check1 = 0, check2 = 0;

	for(int i = 0; i<s1.length(); i++){
		check1 ^= s1[i]; // check1 |= s1[i];
		check2 ^= s2[i]; // check2 |= s2[i];
	}

	cout << check1 << " " << check2 << endl;

	if(check1 == check2){
		return true;
	}else{
		return false;
	}

}

int main(){
	string s1, s2;

	cin >> s1 >> s2;

	if(checkPermutationBit(s1, s2)){
		cout << "YES" << endl;
	}else{
		cout << "NO" << endl;
	}
}