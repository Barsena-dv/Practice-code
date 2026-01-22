/*
		Author: Barsena Dhruv Rajesh
		Date: 20th January 2026
		Title: Function Home Task
*/
#include<stdio.h>

int oddSum(int no);
int evenSum(int no);
int sum(int num);

void main(){
	int no,result1,result2;
	
	printf("Enter a Number : ");
	scanf("%d",&no);
	
	result1 = oddSum(no);
	result2 = evenSum(no);
	
	printf("\nOdd Number digits sum : %d",result1);
	printf("\nEven Number digits sum : %d",result2);
}

int oddSum(int no){
	
	int temp,num=0,ans;
	
	while(no>0){
		temp = no%10;
		
		if(temp%2 != 0){
			num = num*10 + temp;
		}
		no = no/10;
	}
	
	ans = sum(num);
	printf("\nOdd Numbers : %d",num);
	return ans;
}

int evenSum(int no){
	
	int temp,num=0,ans;
	
	while(no>0){
		temp = no%10;
		
		if(temp%2 == 0){
			num = num*10 + temp;
		}
		no = no/10;
	}
	
	ans = sum(num);
	printf("\nOdd Numbers : %d",num);
	return ans;
}

int sum(int num){
	int temp,add=0;
	
	while(num>0){
		temp = num%10;
		add += temp;
		num = num/10;
	}
	return add;
}
