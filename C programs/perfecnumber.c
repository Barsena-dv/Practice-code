#include<stdio.h>
void main()
{
	int num,i,sum=0;
	printf("Enter a number : ");
	scanf("%d",&num);
	for(i=1;i<num;i++)
	{
		if(num%i==0)
		{
			sum=i+sum;
		}
	}
	if(sum==num)
	{
		printf("number is perfect");
	}
	else
	{
		printf("not perfect");
	}
}
