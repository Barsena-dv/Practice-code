#include<stdio.h>
#include<stdlib.h>
#include<windows.h>

struct Student{
	int rno;
	char name[50];
	int std;
	int marks;
	int active;
};//end of struct

#define SIZE 1000


struct Student srecords[SIZE];

int index = 0 , rnos=1;

void printStudent(struct Student s);
void addStudent();
void displayStudents();
void deleteStudentById();
void searchStudentById();
void updateStudentById();
void sortStudentByMarks();

void addStudent(){
	struct Student s;
	if(index==SIZE){
		printf("\nStudent List are full.");
		return;
	}
	
	s.rno = rnos;
	int c;
	while ((c = getchar()) != '\n' && c != EOF);
	
	printf("\nEnter Name: ");
	fgets(s.name, 50, stdin);
	s.name[strcspn(s.name, "\n")] = '\0';
	printf("\nEnter Std : ");
	scanf("%d",&s.std);
	printf("\nEnter Marks : ");
	scanf("%d",&s.marks);
	
	s.active = 1;
	
	//s-- data---ready
	srecords[index] = s;
	
	index++;
	rnos++;
	printf("\nStudent record are successfully Inserted ...!");
}//end of addStudent

void displayStudents(){
	int i;
	if(index == 0){
		printf("\nList of Student records are empty");
		return;
	}
	for(i=0;i<index;i++){
		if(srecords[i].active == 1){
			printStudent(srecords[i]);
		}//end of if
	}//end of for
}//end of displayStudents

void deleteStudentById(){
	int i,rno,flag=1;
	printf("\nEnter Rno Which you want to Delete Student record: ");
	scanf("%d",&rno);
	
	for(i=0;i<index;i++){
		if(srecords[i].rno == rno && srecords[i].active == 1){
			srecords[i].active = 0;
			printf("\nStudent Rno : %d is deleted from list.", srecords[i].rno);
			flag=0;
			break;
		}//end of if
	}//end of for
	if(flag){
		printf("\nStudent Rno: %d is not found in Student",srecords[i].rno);
	}//end of if
}//end of deleteStudentById

void searchStudentById(){
	int i,rno,flag=1;
	printf("\nEnter Rno Which you want to Search Student record: ");
	scanf("%d",&rno);
	
	for(i=0;i<index;i++){
		if(srecords[i].rno == rno && srecords[i].active == 1){
			printStudent(srecords[i]);
			flag=0;
			break;
		}//end of if
	}//end of for
	if(flag){
		printf("\nStudent Rno : %d is not found in Student records.", rno);
	}//end of if
}//end of searchStudentById

void updateStudentById(){
	int i,rno,flag=1;
	int c;
	printf("\nEnter Rno Which you want to Update Student record: ");
	scanf("%d",&rno);

	for(i=0;i<index;i++){
		if(srecords[i].rno == rno && srecords[i].active == 1){
			//update-->name std marks
			while ((c = getchar()) != '\n' && c != EOF);

			printf("\nEnter Name: ");
			fgets(srecords[i].name, 50, stdin);
			srecords[i].name[strcspn(srecords[i].name, "\n")] = '\0';
			printf("\nEnter Std : ");
			scanf("%d",&srecords[i].std);
			printf("\nEnter Marks : ");
			scanf("%d",&srecords[i].marks);
			flag=0;
			printf("\nStudent Rno : %d is Updated from list",srecords[i].rno);
			break;
		}//end of if
	}//end of for
	if(flag){
		printf("\nStudent Rno : %d is not found in Student records.",rno);
	}//end of if
}//end of updateStudentById

void sortStudentByMarks(){
	struct Student temp;
	int i,j;
	if(index == 0){
		printf("\nList of Student records are empty");
		return;
	}//end of if
	for(i=0;i<index;i++){
		for(j=(i+1);j<index;j++){
			//sorting By Marks wise
			if(srecords[i].marks < srecords[j].marks){
				temp = srecords[i];
				srecords[i] = srecords[j];
				srecords[j] = temp;
			}//end of if
		}//end of outer for
	}//end of for
	printf("\nStudent records are succesfully sorted by Marks wise.");
	displayStudents();
}//end of sortStudentByMarks

void printStudent(struct Student s){
	printf("\n%d\t%s\t%d\t%d",s.rno,s.name,s.std,s.marks);
}//end of printStudent

int main(){
	int choice;
	
	do{
		printf("\nEnter below Choice: ");
		printf("\n1) Add Student");
		printf("\n2) Update Stuident By Id");
		printf("\n3) Delete Student By Id");
		printf("\n4) Display All Student Information");
		printf("\n5) Searching by Student Id");
		printf("\n6) Sorting By Student Marks");
		printf("\n7) Exit Stiudent Application");
		scanf("%d",&choice);
		
		switch(choice){
			case 1: addStudent();
					break;
			case 2: updateStudentById();
					break;
			case 3: deleteStudentById();
					break;
			case 4: displayStudents();
					break;
			case 5: searchStudentById();
					break;
			case 6: sortStudentByMarks();
					break;
			case 7:
				    printf("\nStudent Application Exit");
				    Sleep(1000);
				    return 0;

				}//end of switch
	}while(choice!=7);
	return 0;
}//end of main
