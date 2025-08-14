#include<iostream>
using namespace std;
class B{
	int a;
	public:
		int b;
		void getab()
		{
			a=5;
			b=10;
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
class D:public B
{
	int c;
	public:
		void mul()
		{
			c=b*get_a();
		}
		void display()
		{
			cout<<"a ="<<get_a()<<endl;//accessing private data of base class
			cout<<"b ="<<b<<endl;
			cout<<"c ="<<c<<endl;
		}
};
int main()
{
	D d;
	d.getab();
	d.mul();
	d.show_a();
	d.display();
	
	d.b=23;
	d.mul();
	d.display();
	return 0;
}
