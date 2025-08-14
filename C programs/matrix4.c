#include<stdio.h>
void main()
{
	int i,j,n,temp;
	printf("enter the number of matrix : \n");
	scanf("%d",&n);
	temp=n;
	for(i=1;i<=temp;i++)
	{
		for(j=1;j<=n;j++)
		{
			printf("%d",j);
		}
		
		n--;
		printf("\n");
	}
}
/*output*/
/*  12345
	1234
	123
	12
	1 */
