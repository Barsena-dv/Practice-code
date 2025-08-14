/*write date into file & read data from file*/
#include<iostream>
#include<fstream>
using namespace std;
int main()
{
	ofstream outf("ITEM"); //open file in wrete mode
	cout<<"Enter Item Name : ";
	char name[30];
	cin>>name; //take data from user
	outf<<name; //inserts data into file
	
	cout<<"\n Enter Item cost : ";
	float cost;
	cin>>cost;
	outf<<cost;
	outf.close(); //close the file
	
	ifstream inf("ITEM"); //opem file in read mode
	inf>>name;
	inf>>cost;
	
	cout<<"\n";
	cout<<"Item Name : "<<name;
	cout<<"\n Item cost : "<<cout;
	inf.close();
	return 0;
}
