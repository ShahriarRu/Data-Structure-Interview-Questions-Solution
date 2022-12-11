#include <bits/stdc++.h>
using namespace std;


bool isUniqueString(string str){
	if(str.length() > 128){
		return false;
	}

	bool arr[128] = {false};

	for(int i = 0; i < str.length(); i++){

		int ch = str[i];
		
		if(arr[ch]){
			return false;
		}else{
			arr[ch] = true;
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

