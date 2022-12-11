#include <bits/stdc++.h>
using namespace std;

bool check1(string s1, string s2){
	int count = 0;
	for(int i=0, j=0; i<s1.length(); i++){
		if(s1[i]==s2[j]){
			j++;
		}else{
			count++;
		}

		if(count > 1){
			return false;
		}
	}
	return true;
}

bool check2(string s1, string s2){
	int count = 0;
	for(int i=0; i<s1.length(); i++){
		if(s1[i]!=s2[i]){
			count++;
		}

		if(count > 1){
			return false;
		}
	}
	return true;
}

bool oneEditAway(string s1, string s2){
	int l1 = s1.length();
	int l2 = s2.length();

	if(l1>l2){
		return check1(s1, s2);
	} 
	else if(l1<l2){
		return check1(s2, s1);
	}
	else{
		return check2(s1, s2);
	}
}



int main(){
	string s1, s2;
	cin >> s1 >> s2;

	if(oneEditAway(s1, s2)){
		cout << "YES" << endl;
	}else{
		cout << "NO" << endl;
	}
}