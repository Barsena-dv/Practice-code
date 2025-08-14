#include<stdio.h>
void main()
{
	int a[50],i,n;
	printf("Enter the number of elements you want to store :");
	scanf("%d",&n);
	printf("Enter %d number :",n);
	for(i=0;i<n;i++)
	{
		scanf("%d",&a[i]);
	}
	for(i=0;i<n;i++)
	{
		printf("\n a(%d=%d)",i,a[i]);
		
	}
}
