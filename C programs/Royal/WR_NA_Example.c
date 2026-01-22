#include<stdio.h>

//(WR-NA)Function Declaration
int addFun();

void main(){
	
	int result;
	
	result = addFun();	
	printf("Result is %d",result);
}

//(WR-NA)Funtion Defination

int addFun(){
	int no1,no2,ans;
	
	printf("Enter number1:");
	scanf("%d",&no1);
	printf("Enter number2:");
	scanf("%d",&no2);
	
	//Operation
	ans = no1 + no2;
	
	return ans;
}

