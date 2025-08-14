#include<iostream>
using namespace std;
class B
{
	int a;
	public:
		int b;
		void getab()
		{
			cout<<"Enter values of a & b";
			cin>>a>>b;
		}
		int get_a()
		{
			return a;
		}
		void show_a()
		{
			cout<<"a ="<<a<<"\n";
		}
};
class D:private B
{
	int c;
	public:
		void mul()
		{
			getab();
			c=b*get_a();
		}
		void display()
		{
			show_a();
			cout<<"b ="<<b<<endl;
			cout<<"c="<<c<<endl;
		}
};
int main()
{
	D d;//derived class object name;
	d.mul();//d.getab();//won't work as it became private data
	d.display();
	d.mul();
	d.display();
	return 0;
}
