#include<bits/stdc++.h>
using namespace std;

int main(){
	deque<int>dq(5,0);

	dq.push_back(5);
	dq.push_front(2);

	for(auto itr : dq){
		cout << itr << " ";
	}

	cout << dq[0] << endl;
}