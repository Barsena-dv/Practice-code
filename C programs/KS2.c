#include<stdio.h>
#include<conio.h>
void linear_search();
int a[50],item,n,i;
char ch;

void main()  
{ 
      //clrscr();
      printf("/n/n erter size of array:");
      scanf("%d",&n);
      printf("\n\n enter element of an array: ");
      for(i=1;i<=n;i++)
      {
    
      	 scanf("%d",&a[i]);
      }
   	  do
   		{
   			linear_search();
   			printf("\n search again!press(y/n)");
   			scanf("%c",& ch);
   			//ch=getchr();
   		}
   		while(ch=='y'||ch=='y');
   		//getch();
}
void linear_search()
     { 
	   printf("/n enter item to search:");
	   scanf("%d",&item);
	   for(i=0;i<5;i++)
	   {
	   	 if(item==a[i])
	   	 {
	   	 	printf("/n item found at  cation  %d",i);
	   	 	return ;
	   	 }
		}		 
if(i==n)
   {
   	printf("/n item does not exist");
  
	} 		
}		
