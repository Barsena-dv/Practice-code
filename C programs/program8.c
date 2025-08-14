#include<stdio.h>
void main()
{
	int a,b;
	printf("Enter two numbers: ");
	scanf("%d %d",&a,&b);
	printf("\n a=%d & b=%d",a,b);
	a=a+b;
	b=a-b;
	a=a-b;
	printf("\n a=%d & b=%d",a,b);
}
