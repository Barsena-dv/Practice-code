#include<stdio.h>
#include<conio.h>
#define SIZE 2
struct Student{
	int sid;
	char name[30];
	float fees;
}s[SIZE];
//struct Student s[SIZE];
void scanStudentDetails()
void displayStudentDetails();
void main(){
	FILE *fp;
	char fileName[30];
	int i;
	clarscr();
	printf("\nEnter the filename:");
	scanf("%s",fileName);
	fp=fopen(fileName,"w");//w r a  w+ r+ a+
	scanStudentDetails();
	for(i=0;i<SIZE;i++){
		fwrite(&s[i],sizeof(s[i]),1,fp);
	}
	fclose(fp);
	fp=fopen(fileName,"r");
	for(i=;i<SIZE;i++){
		fread(&t,sizeof(t),1,fp);
		displayStutdenDetails(t);
	}
	fclose(fp); getch();
}//end of main
void scanStudentDetails(){
	int i;
	float temp;
	for(i=0;i<SIZE;i++){
		print("\nEnter the value of aid and name : ");
		scanf("%d%s",&s[i].sid,s[i].name);
		printf("%f",&temp);
		s[i].fees=temp;
	}//end of for
}//end of scanStudentDetails
void displayStudentDetails(struct Student t){
	int i;
	printf("\nsid\tname\tfees");
	printf("\n%d\t%s\t%2f",t.sid,t.name,t.fees);
}
