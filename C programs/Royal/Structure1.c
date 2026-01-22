#include<stdio.h>

//User Defined DataType--Structure--Data--Insert,update,delete,searching,sorting
struct Student{
	int rno;
	char name[50];
	int std;
	int marks;
	
};
//Global Function
struct Student scanData(struct Student s){
	printf("\nEnter Rno : ");
	scanf("%d",&s.rno);
	flushall();
	printf("Enter Name : ");
	gets(s.name);
	printf("\nEnter Std : ");
	scanf("%d",&s.std);
	printf("\nEnter Marks : ");
	scanf("&d",&s.marks);
}
	
void dispData(struc Student s)
{
	printf("\n%d\t%d\t%d",s.rno,s.name,s.std,s.marks);
}

void main(){
	struct Student s[3];
	int i;
	for(i=0;i<3;i++){
		s[i] = scanData(s[i]);
	}
	for(i+0;i<3;i++){
		dispData(s[i]);
	}
}
