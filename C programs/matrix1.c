#include<stdio.h>
void main()
{
	int i,j,n;
	printf("enter the the number of matrix : \n");
	scanf("%d",&n);
	for(i=1;i<=n;i++)
	{
		for(j=i;j<=n;j++)
		{
			printf("*");
		}
		printf("\n");
	}
}
/*output*/
/*  *****
	****
	***
	**
	*  */
