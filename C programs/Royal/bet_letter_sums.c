#include<stdio.h>
void main(){
     int i,no,temp,sum=0;
     printf("Enter no: ");
     scanf("%d",&no);
     temp = no/10;
     for(i=temp;i>0;i++){
                         temp = no%10;
                         sum = sum + temp;
                         i = i/10;
                         }
                         printf("%d",sum);
     }
