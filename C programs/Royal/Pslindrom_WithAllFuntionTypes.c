#include<stdio.h>

//NR-NA
/*
void isPalindrome();

void main(){
	isPalindrome();
}

void isPalindrome(){
	
	int i,no,temp,samp,sum=0;
	
	printf("Enter a number : ");
	scanf("%d",&no);
	
	samp = no;
	
	//for(;no>0;no=no/10){
	//	temp = no%10;
	//	sum = sum*10 + temp;
	//}
	while(no > 0){
		temp = no%10;
		sum = sum*10 + temp;
		no = no/10;
	}
	
	(samp == sum) ? printf("\n %d is a Palindrom number",samp) : printf("\n %d is not a Palindrom number",samp);
}
*/



//NR-WA
/*
void isPalindrome(int no);

void main(){
	int no;
	
	printf("Enter a Number : ");
	scanf("%d",&no);
	
	isPalindrome(no);
}

void isPalindrome(int no){
	int temp,samp,sum=0;
	
	samp = no;
	
	//for(;no>0;no=no/10){
	//	temp = no%10;
	//	sum = sum*10 + temp;
	//}
	while(no > 0){
		temp = no%10;
		sum = sum*10 + temp;
		no = no/10;
	}
	
	(samp == sum) ? printf("\n %d is a Palindrom number",samp) : printf("\n %d is not a Palindrom number",samp);
}
*/



//WR-NA
/*
int isPalindrome();

void main(){
	int result;
	
	result = isPalindrome();
	
	if(result){
		printf("\n Number is a Palindrom number");
	}
	else{
		printf("\n Number is not a Palindrom number");
	}
}

int isPalindrome(){
	int no,temp,samp,sum=0;
	
	printf("Enter a number : ");
	scanf("%d",&no);
	
	samp = no;
	//for(;no>0;no=no/10){
	//	temp = no%10;
	//	sum = sum*10 + temp;
	//}
	while(no > 0){
		temp = no%10;
		sum = sum*10 + temp;
		no = no/10;
	}
	
	if(samp == sum){
		return 1;
	}
	else{
		return 0;
	}
}
*/


//WR-WA
int isPalindrome(int no);
void main(){
	int no,flag;
	
	printf("Enter a number : ");
	scanf("%d",&no);
	
	flag = isPalindrome(no);
	
	if(flag){
		printf("\n %d is a Palindrom number",no);
	}
	else{
		printf("\n %d is not a Palindrom number",no);
	}
}

int isPalindrome(int no){
	int i,temp,samp,sum=0;
	samp = no;
	
	//for(;no>0;no=no/10){
	//	temp = no%10;
	//	sum = sum*10 + temp;
	//}
	
	while(no > 0){
		temp = no%10;
		sum = sum*10 + temp;
		no = no/10;
	}
	
	if(samp == sum){
		return 1;
	}
	else{
		return 0;
	}
}


