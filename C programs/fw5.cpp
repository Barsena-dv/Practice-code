#include<iostream>
using namespace std;
int main()
{
	int i,no,flag=0;
	cout<<"Enter any number :";
	cin>>no;
	for(i=2;i<=no/2;i++)
	{
		if(no%i==0)
		{
		flag=1;
		cout<<"not prime";
		break;
		}
	}
	if(flag==0)
	{
	 	cout<<"prime";
	}
	return 0;
}
