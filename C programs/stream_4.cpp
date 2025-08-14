#include<iostream>
#include<math.h>
using namespace std;
int main()
{
	cout<<"Precision set to 3 digits \n";
	cout.precision(3);
	cout.width(10);
	cout<<"value";
	cout.width(15);
	cout<<"Sqrt of value \n";
	for(int i=1;i<=5;i++)
	{
		cout.width(8);
		cout<<i;
		cout.width(13);
		cout<<sqrt(i)<<"\n";
		
	}
	cout<<"\n Precisiomn set to 5 digits \n";
	cout.precision(5);
	cout<<"\nsqrt(10) = "<<sqrt(10);
	cout.precision(0);
	cout<<"\nsqrt(10) = "<<sqrt(10);
	
	return 0;
}
