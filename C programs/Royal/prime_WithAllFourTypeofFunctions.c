#include<stdio.h>

//NR-NA
/*void isPrime(){
	int num,flag=0,i;
	 
	printf("\n Enter a number :");
	scanf("%d",&num);
	
	for(i=2;i <= num/2;i++){
		if(num%i == 0){
			flag++;
		}
	}
	
	if(flag == 0){
		printf("%d is prime",num);
	}
	else{
		printf("not prime");
	}
}

void main(){
	isPrime();
}*/



//NR-WA
/*void isPrime(int num);

void main(){
	int num;
	
	printf("Enter number:");
	scanf("%d",&num);
	
	isPrime(num);
}

void isPrime(int num){
	int flag=0,i;
	
	for(i=2;i<=num/2;i++){
		if(num%i == 0){
			flag++;
			break;
		}
	}
	
	(flag==0 && num>1) ? printf("%d is prime",num) : printf("%d is not prime",num);
}*/



//WR-NA
/*int isPrime();

void main(){
	int result;
	
	result = isPrime();
	
	(result==1) ? printf("Num is prime") : printf("Num is not prime");
}

int isPrime(){
	int num,i;
	
	printf("Enter number:");
	scanf("%d",&num);
	
	if(num<=1){
		return 0;
	}
	for(i=2;i<=num/2;i++){
		if(num%i==0){
			return 0;
		}
	}
	return 1;
}*/



//WR-WA
int isPrime(int num);

void main(){
	int num,result;
	
	printf("Enter number:");
	scanf("%d",&num);
	
	isPrime(num);
	
	result=isPrime(num);
	
	(result==1) ? printf("%d is prime",num) : printf("%d is not prime",num);
}

int isPrime(int num){
	int i;
	
	if(num<=1){
		return 0;
	}
	for(i=2;i<=num/2;i++){
		if(num%i==0){
			return 0;
		}
	}
	return 1;
}

