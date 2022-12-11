#include <bits/stdc++.h>
#include <unordered_map>
using namespace std;

bool isUniqueString(string str){
	unordered_map <char, int> map;

	for(int i =0; i<str.length(); i++){
		if(!map[str[i]]){
			map[str[i]] = 1;
		}else{
			map[str[i]]++;
			if(map[str[i]] > 1){
				return false;
			}
		}
	}

	return true;
}

int main(){

	string str;
	cin >> str;
	cout << str << endl;

	if(isUniqueString(str)){
		cout << "This string is unique" << endl;
	}else{
		cout << "This string is not unique" << endl;
	}
}