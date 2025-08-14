#include<iostream>
using namespace std;
int main()
{
	int no,i;
	cout<<"Enter any number :";
	cin>>no;
	cout<<"factors of"<<no<<"are"<<endl;
	for(i=1;i<=no;i++)
	{
		if(no%i==0)
		{
			cout<<" "<<i;
		}
	}
	return 0;
}
