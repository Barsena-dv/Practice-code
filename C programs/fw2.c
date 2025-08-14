#include<stdio.h>
void main()
{
	int a[50],i,n,sum=0,avg=0;
	printf("Enter total number of elements :");
	scanf("%d",&n);
	printf("Enter array elements :");
	for(i=0;i<n;i++)
	{
		scanf("%d",&a[i]);
		sum=sum+a[i];
	}
	avg=sum/n;
	printf("\n sum of all array elements:%d\n",sum);
	printf("\n average of all array elements:%d\n",avg);
}
