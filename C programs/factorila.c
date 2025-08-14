#include<stdio.h>
void main()
{
	int i,n,m=1;
	printf("enter the number : \n");
	scanf("%d",&n);
	i=1;
	while(i<=n)
	{
		m=m*i;
		i++;
	}
	printf("your factorial is %d",m);
}
