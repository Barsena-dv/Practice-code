#include<stdio.h>
void list(float);
void main()
{
	float per;
	printf("Enter the percentage : ");
	scanf("%f",&per);
	list(per);
}
    void list(float per)
{
	if(per>=90 && per<=100)
	{
		printf("Grade A+");
	}
	else if(per>=80 && per<90)
	{
		printf("Grade A");
	}
	else if(per>=70 && per<80)
	{
		printf("Grade B+");
	}
	else if(per>=60 && per<70)
	{
		printf("Grade B");
	}
	else if(per>=50 && per<60)
	{
		printf("Grade C+");
	}
	else if(per>=40 && per<50)
	{
		printf("Grade C");
	}
	else
	{
		printf("Fail");
	}
}
