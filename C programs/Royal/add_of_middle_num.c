#include<stdio.h>
#include<conio.h>

/*void main(){
	int no,i,sum=0,temp;
	printf("Enter no:");
	scanf("%d",&no);
	for(i=no/10;i>=10;i = i/10){
		temp = i%10;
		sum = sum + temp;
	}
	printf("%d",sum);
}*/

/*void main(){
	int no,sum=0,temp;
	printf("Enter no:");
	scanf("%d",&no);
	no = no/10;
	while(no>=10){
		temp = no%10;
		sum = sum + temp;
		no = no/10;
		no++;
	}
	printf("%d",sum);
}*/

void main(){
	int no,temp,sum=0;
	printf("Enter no:");
	scanf("%d",&no);
	no /= 10;
	do{
		temp = no % 10;
		sum = sum + temp;
		no /= 10;
	}while(no>=10);
	printf("%d",sum);
}
