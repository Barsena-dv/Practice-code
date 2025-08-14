/*Read from two files simultaneously*/
#include<iostream>
#include<fstream>
#include<stdlib.h>
using namespace std;
int main()
{
	char line[100];
	ifstream fin1,fin2;
	fin1.open("Country");
	fin2.open("Capital");
	
	for(int i=1;i<=10;i++)
	{
		if(fin1.eof()!=0)
		{
			cout<<"Exit from country\n";
			exit(1);
		}
		fin1.getline(line,100);
		cout<<"\nCapital of"<<line<<endl;
		if(fin2.eof()!=0)
		{
			cout<<"Exit from Capital\n";
			exit(1);
		}
		fin2.getline(line,100);
		cout<<line<<"\n";
	}
	return 0;
}
