#include<stdio.h>
void main()
{
	double num1,num2,result;
	char operator;
	printf("Enter two number : ");
	scanf("%lf %lf",&num1,&num2);
	printf("Select the Operation(+,-,*,/):");
	scanf(" %c", &operator);
	switch (operator)
	{
		case '+':
			result = num1 + num2;
			break;
		case '-':
			result = num1 - num2;
			break;
		case '*':
			result = num1 * num2;
			break;
		case '/':
			if(num2 != 0)
			{
				result = num1/num2;
			}
			else
			{
				printf("non calculable");
			}
			//return 1;
			break;
		default:
			printf("Error:Invalid Operator");
	}
	printf("result %.2lf",result);
}
