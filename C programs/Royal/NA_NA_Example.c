#include<stdio.h>

//BUit-In finction declaration----> Header Files
//                 defination-----> lib
//Declaration Part
void addFun();

void main(){
	
	addFun();
	
}

//(NR-NA) Function Defination Part
void addFun(){
	int no1,no2,ans;
	printf("Enter no1:");
	scanf("%d",&no1);
	printf("Enter no2:");
	scanf("%d",&no2);
	
	ans = no1 + no2;
	printf("\nddition :%d",ans);
}
