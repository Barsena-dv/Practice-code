#include<iostream>
using namespace std;
class student
{
	protected:
		int roll_no;
		public:
			void get_no(int a)
			{
				roll_no=a;
			}
			void put_no()
			{
				cout<<"\n Roll Number: "<<roll_no;
			}
};
class test:public student
{
	protected:
		float sub1,sub2;
		public:
			void get_marks(float m1, float m2)
			{
				sub1=m1;
				sub2=m2;
			}
			void put_marks()
			{
				cout<<"\n Marks Obtained:";
				cout<<"\n Sub 1 :"<<sub1;
				cout<<"\n Sub 2 :"<<sub2;
			}			
};
class Sports
{
	protected:
		float score;
		public:
			void get_score(float s)
			{
				score=s;
			}
};
class result:public test,public Sports
{
	float total;
	public:
		void display()
		{
			total=sub1+sub2+score;
			put_no();
			put_marks();
			put_score();
			cout<<"\n Total :"<<total;	
		}
};
int main()
{
	result s1;
	s1.get_no(34);
	s1.get_marks(67,89);
	s1.get_score(52);
	s1.display();
	return 0;	
}
