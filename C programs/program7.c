#include<stdio.h>
void main()
{
	int a,b,c;
	printf("Enter two numbers:");
	scanf("%d %d",&a,&b);
	printf("\n a=%d and b=%d",a,b);
	c=a;
	a=b;
	b=c;
	printf("\n a=%d and b=%d",a,b);
}
