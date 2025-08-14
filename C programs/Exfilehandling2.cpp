/*writing simultaneously int two files*/
#include<iostream>
#include<fstream>
using namespace std;
int main()
{
	ofstram fout;
	fout.open("Country");
	fout<<"India\n";
	fout<<"United State of America\n";
	fout<<"United kingdom\n";
	fout<<"south Korea\n";
	fout.close();
	
	fout.open("Capital");
	fout<<"new delhi\n";
	fout<<"Washington\n";
	fout<<"London\n";
	fout<<"Seoul\n";
	fout.close();
	
	char line[100];
	ifstream fin;
	
	fin.open("Country");
	cout<<"\n Contents of country file\n";
	while(fin)
	{
		fin.getline(line,100);
		cout<<line<<"\n";
	} 
	fin.close();
	fin.open("Capital");
	cout<<"\n Contents of Capital file\n ";
	while(fin)
	{
		fin.getline(line,100);
		cout<<line<<"\n";
	}
	fin.close();
	return 0;
}
