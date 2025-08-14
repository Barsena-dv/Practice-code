#include<stdio.h>
void main()
{
	int i=1,sum=0,n;
	printf("enter the limit : \n");
	scanf("%d",&n);
	do
	{
		if(i%2!=0)
		{
			printf("%d",i);
			sum=sum+i;
		}
		else if(i<n-2)
		{
			printf("+");
		}
		else{
		}
		i++;
	}
	while(i<=n);
	printf(" = %d",sum);
}
