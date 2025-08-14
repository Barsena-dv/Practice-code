#include<stdio.h>
#include<conio.h>
void selection_sort();
int a[50],n;
void main()
{
	int i;
	//clrscr();
	printf("\n Enter the size of array : ");
	scanf("%d",&n);
	printf("\n Enter the element : \n");
	for(i=1;i<=n;i++)
	{
		printf("\n Enter Elments [%d] :",i);
		scanf("%d",&a[i]);
	}
	selection_sort();
	printf("\n SORTED DATA : ");
	for(i=1;i<=n;i++)
	{
		
		printf("",a[i]);	
		printf("\%d",a[i]);	
	}
	//getch();
}
void selection_sort()
{
	int i,j,min,temp;
	for(i=1;i<=n;i++)
	{
		min=i;
		for(j=i+1;j<n;j++)
		{
			if(a[i]<a[min])
			{
				min=j;
			}
		}
		if(min!=i)
		{
			temp=a[i];
			a[i]=a[min];
			a[min]=temp;
		}
	}
}
