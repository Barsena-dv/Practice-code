#include<iostream>
using namespace std;
class student
{
	protected:
		int roll_number;
		public:
			void get_number(int);
			void put_number();
};
void student::get_number(int a)
{
	roll_number=a;
}
void student::put_number() 
{
	cout<<"Roll Number:"<<roll_number<<"\n";
}
class test:public student//first level derivation
{
	protected:
		float sub1;
		float sub2;
		public:
			void get_marks(float,float);
			void put_marks(void);
};
void test::get_marks(float a,float b)
{
	sub1=a;
	sub2=b;
}
void result::public test //Second level derivation
{
	float total;
	public:
		void display();
}
void result::display()
{
	total=sub1+sub2;
	put_number();
	put_marks();
	cout<<"Total ="<<total<<"\n";
}
int main()
{
	result student;
	student1.get_numbers(111);
	student1.get_marks(75.0,59.5);
	student1.display();
	return 0;
}


