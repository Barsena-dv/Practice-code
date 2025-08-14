#include<stdio.h>
void main()
{
	int rollno;
	char name[20];
	float per;
	char gender;
	printf("\n Enter student details: \n");
	printf("Roll NUmber: ");
	scanf("%d",&rollno);
	printf("Student's Name :");
	scanf("%s",name);
	printf("Gender: ");
	scanf(" %c",&gender);
	printf("Percentage: ");
	scanf(" %f",&per);
	printf("Student details: \n");
	printf("Roll no: %d\n",rollno);
	printf("Student Name: %s\n",name);
	printf("Gender: %c\n",gender);
	printf("Perecentage: %.2f\n",per);
}
