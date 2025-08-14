#include<stdio.h>
void armstg(int);
void main()
{
	int no;
	printf("Enter the the number : ");
	scanf("%d",&no);
	armstg(no);
}
    void armstg(int no)
{
	int temp,sum=0,dig;
	temp=no;
	while(no>0)
	{
		dig=no%10;
			sum=sum+dig*dig*dig;
			no=no/10;
	}
	if(sum==temp)
	{
		printf("armstrong");
	}
	else
	{
		printf("non armstrong");
	}
}
