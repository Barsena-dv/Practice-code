#include<stdio.h>
#define.max_size 100;
int stack[max_size];
int top=-1;
void push(int item){
	if(top==max_size -1)
	{
		printf("stack overflow\n");
		return ;
	}
	stack[++top]=item;
	printf("%d pushed to stack\n",item);
}
int pop(){
	if(top==-1)
	{
		printf("Stack underflow\n");
		return -1;
	}
	int item=stack[top--];
	return item;
}
void display(){
	if(top==-1)
	{
		printf("stack is empty\n");
		return;
	}
	printf("stack elements are:\n");
	for(int i=top;i>=0;i--)
	{
		printf("%d\n",stack[i]);
	}
}
int main()
{
	int choice,item;
	while (1)
	{
		printf("\n stack operations:\n");
		printf("1. Push\n");
		printf("2. Pop\n");
		printf("3. Display\n");
		printf("4. Exit\n");
		printf("Enter your choice:");
		scanf("%d",&choice);
		switch (choice)
		{
			case 1:
				printf("Enter the element to push:");
				scanf("%d",&item);
				Push(item);
				break;
			case 2:
				item=Pop();
				if(item !=-1){
					Printf("Popped item: %d\n",item);
				}
				break;
			case 4:
				printf("Exiting...\n");
				return 0;
				printf("Invalid choice\n");		
		}
	}
	return 0;
}
