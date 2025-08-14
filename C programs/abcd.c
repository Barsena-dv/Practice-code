#include<stdio.h>
void main()
{
	char ch;
	printf("enter the character : \n");
	scanf("%c",&ch);
	if(ch>='a' && ch<='z')
	{
		printf("enetered character is small letter");
	}
	else
	{
		printf("enetered character is Large letter");
	}
}
