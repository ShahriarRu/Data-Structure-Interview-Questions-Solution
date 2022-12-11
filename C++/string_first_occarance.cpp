#include <bits/stdc++.h>
using namespace std;

int strStr(string haystack, string needle) {
    for(int i = 0, j = needle.length()-1; i < haystack.length()-j; i++){
    	if(haystack[i] == needle[0] && haystack[i+j] == needle[j]){
    		int k;
    		for(k = 0; k <= j; k++){
    			if(haystack[i+k] != needle[k]){
    				break;
    			}
    		}
    		if(k == j+1){
    			return i;
    		}
    	}
    }
    return -1;
}

int main(){
	string haystack, needle;
	cin >> haystack >> needle;
	cout << haystack << " " << needle << endl;
	cout << strStr(haystack, needle) << endl;
}