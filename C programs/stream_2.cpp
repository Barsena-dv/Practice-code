#include<iostream>
using namespace std;
int main()
{
	int size=20;
	char city[20];
	cout<<"\n Enter city name :\n ";
	cin.getline(city,size);
	cout<<"\nCity Name now : "<<city;
	cout<<"\nEnter another city name again :\n";
	cin.getline(city,size);
	cout<<"\nNew City Name now :";
	cout.write(city,size);
	return 0;
}
