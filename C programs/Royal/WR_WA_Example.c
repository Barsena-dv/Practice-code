#include<stdio.h>

int addFun(int no1,int no2){
	
	int ans;
	
	ans = no1 + no2;
	
	return ans;
}

void main(){
	
	int ans;
	
	ans = addFun(200,100);
	printf("\n In main Funtion : %d",ans);
}

