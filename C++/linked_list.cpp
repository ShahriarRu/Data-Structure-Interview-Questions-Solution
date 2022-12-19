#include<bits/stdc++.h>
using namespace std;

struct Node
{
	int data;
	Node* link;
};

Node* head = NULL;

void InsertAtEnd(int data){

	Node* newNode = new Node();
	newNode->data = data;
	newNode->link = NULL;

	if(head == NULL){
		head = newNode;
	}else{
		Node* temp = head;
		while(temp->link != NULL){
			temp = temp->link;
		}

		temp->link = newNode;
	}
}


void InsertAtBegin(int data){

	Node* newNode = new Node();
	newNode->data = data;
	newNode->link = head;

	head = newNode;
}

void InsertAtMiddle(int data, int position){
	Node* temp = head;
	position--;
	if(position <= 0){
		InsertAtBegin(data);
		return;
	}

	while(--position && temp->link != NULL){
		temp = temp->link;
	}

	Node* newNode = new Node();
	newNode->data = data;

	if(position != 0){
		
		temp->link = newNode;
		newNode->link = NULL;
	}else{
		newNode->link = temp->link;
		temp->link = newNode;
	}
}



void DeleteFromEnd(){
	
	if(head == NULL){
		return;
	}

	if(head->link == NULL){
		head = NULL;
		return;
	}

	Node* temp = head;

	while(temp->link->link != NULL){
		temp = temp->link;
	}
	temp->link = NULL;
}



void DeleteFromBegin(){
	head = head->link;
}



void DeleteFromMiddle(int position){
	position--;

	if(head == NULL){
		return;
	}

	if(position <= 0){
		DeleteFromBegin();
		return;
	}

	Node* temp = head;

	while(--position && temp->link != NULL){
		temp = temp->link;
	}
	cout << temp->data << " " << position << endl;

	if(position != 0){
		cout << "Limit Overflow" << endl;
		return;
	}else{
		temp->link = temp->link->link;
	}
}

void Print(){
	Node* temp = head;
	while(temp->link != NULL){
		cout << temp->data << " ---> ";
		temp = temp->link;
	}
	cout << temp->data << endl;
}

int main(){
	InsertAtBegin(10);
	InsertAtEnd(2);
	InsertAtEnd(5);
	InsertAtEnd(7);
	InsertAtEnd(6);
	InsertAtBegin(7);
	InsertAtBegin(9);
	InsertAtMiddle(1,1);

	cout << "Before Delete: " << endl;
	Print();

	DeleteFromEnd();
	cout << "After Delete: " << endl;
	Print();
	
	DeleteFromMiddle(9);
	cout << "After Delete: " << endl;
	Print();
}