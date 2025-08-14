#include<stdio.h>
void main()
{
	int no;
	int a,b,c;
	printf("Enter 3 digit number: ");
	scanf("%d",&no);
	a=(no/100)%10;
	b=(no/100)%10;
	c=(no/100)%10;
	printf("a=%d b=%d c=%d",a,b,c);
}
