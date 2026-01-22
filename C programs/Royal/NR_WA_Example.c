#include<stdio.h>

//(NR-WA)Function Declaration
void addFun(int no1,int no2);

void main(){
	int no1,no2;
	
	printf("Enter number1:");
	scanf("%d",&no1);
	printf("Enter number2:");
	scanf("%d",&no2);
	addFun(no1,no2);
	
}

//(NR-WA)Funtion Defination
void addFun(int no1,int no2){
	int ans;
	
	//Operation
	ans = no1 + no2;
	
	printf("\nAddition :%d",ans);
}
