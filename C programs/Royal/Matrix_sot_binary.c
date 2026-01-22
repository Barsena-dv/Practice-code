#include<stdio.h>
#define ROW 30
#define COL 30

int a[ROW][COL], b[ROW][COL],c[ROW][COL]=0;
int r1,c1,r2,c2;
void add();
void sub();
void mult();
void div();
void sort();
void scanArray();
void displayArray();
void menu();

void main(){
	int i,j,k;
	int choice;
	//c[ROW][COL]={0}
	
	scanArray();
	displayArray();
	
	while(1){
		menu();
		printf("\nEnter the choice");
		scanf("%d",&choice);
		switch(choice){
			case 1:add();
				break;
				
			case 2:sub();
				break;
				
			case 3:mult();
				break;
				
			case 7:exit(0);
		}//end of switch
	}//end of while
}

void menu(){
	printf("\n1---------add");
	printf("\n2---------subtract");
	printf("\n3---------multiply");
	printf("\n4---------divide");
	printf("\n5---------sort the array");
	printf("\n6---------search in the array");
	printf("\n7---------exit");
}//end of the menu

void scanArray(){
	int i,j;
	printf("\nEnter the number of row and col you nedd of the first array");
	scanf("%d%d",&r1,&c1);
	printf("\nEnter the number of row and col you nedd of the 2nd array");
	scanf("%d%d",&r2,&c2);
	if(r1>30 || c1>30 || r2>30 || c2>30){
		printf("\nThe size can not go above 30");
	}
	else{
		printf("\nEnter %d vlaues for first matrix",r1*c1);
		for(i=0;i<r1;i++){
			for(j=0;j<c1;j++){
				printf("\nEnter the value of a[%d][%d]",i,j);
				scanf("%d",&a[i][j]);
			}//end of inner for
		}//end of outer for
		
		printf("\nEnter %d values for 2nd matrix",r2*c2);
		
		for(i=0;i<r1;i++){
			for(j=0;j<c1;j++){
				printf("\nEnter the value of a[%d][%d]",i,j);
				scanf("%d",&b[i][j]);
			}//end of inner for
		}//end of outer for
	}//end of else
}//end of scanArray funtion

void displayArray(){
	int i,j;
	printf("\nThe first matrix is as follow\n");
	for(i=0;i<r1;i++){
		for(j=0;j<c1;j++){
			printf("%d",a[i][j]);
		}//end of inner for
		printf("\n");
	}//end of outer for
	printf("\n");
	printf("\nThe 2nd matrix is as follows\n");
	for(i=0;i<r1;i++){
		for(j=0;j<c1;j++){
			printf("%d",b[i][j]);
		}//end of inner for
		printf("\n");
	}//end of outer for
}

void add(){
	int i,j;
	if((r1==r2) && (c1==c2)){
		for(i=0;i<r1;i++){
			for(j=0;j<c1;j++){
				c[i][j] = a[i][j] + b[i][j];
			}//end of inner for
		}//end of outer for
		
		printf("\nThe addition is as follows\n");
		for(i=0;i<r1;i++){
			for(j=0;j<c1;j++){
				printf("%d",c[i][j]);
			}//end of inner for
			printf("\n");
		}//end of outer for
	}else{
		printf("\nThe matrix are not conformible");
	}//end of else
}//end of add

void sub(){
	int i,j;
	if((r1==r2) && (c1==c2)){
		for(i=0;i<r1;i++){
			for(j=0;j<c1;j++){
				c[i][j] = a[i][j] - b[i][j];
			}//end of inner for
		}//end of outer for
	}
	
	printf("\nThe subtraction is as follows\n");
		for(i=0;i<r1;i++){
			for(j=0;j<c1;j++){
				printf("%d",c[i][j]);
			}//end of inner for
			printf("\n");
		}//end of outer for
	}else{
		printf("\nThe matrix are not conformible");
	}//end of else
}//end of sub

void mult(){
	int i,j,k;
	if(c1==r2){
		for(i=0;i<3;i++){
			for(j=0;j<3;j++){
				for(k=0;k<3;k++){
					c[i][j] = c[i][j] + (a[i][k]*b[k][j]);
				}//end of inner most for
			}//end of inner for
		}//end outer for
		printf("\nThe resultant matrix is\n");
		for(i=0;i<3;i++){
			for(j=0;j<3;j++){
					printf("%d", c[i][j]);
				
			}//end of inner for
			printf("\n")
		}//end outer for
	}else{
		printf("\nIt is not possible to multi ply matrix");
	}
}

void sort(){
	int arr[9];
	int exch=1;
	int k=0,i,j,temp;
	int sortedArray[3][3];
	for(i=0;i<3;i++){
		for(j=0;j<3;j++){
			arr[k]=a[i][j];
			k++;
		}//end for inner for
	}//end of outer for
	for(i=0;j<9 && exch==1;i++){
		exch=0;
		for(j=0;j<0;j++){
			if(arr[j]>arr[j+1]){
				exch=1;
				temp=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]==temp;
			}//end of if
		}//end of inner for
	}//end of outer for
	k=0;
	for(i=0;i<3;i++){
		for(j=0;j<3;j++){
			sortedArray[i][j] = arr[k];
			k++;
		}//end of inner for
	}//end of outer for
	printf("\nThe sorted array is\n");
	
	for(i=0;i<3;i++){
		for(j=0;j<3;j++){
			printf("%d",sortedArray[i][j]);
		}
		printf("\n")
	}
}//end of sort

