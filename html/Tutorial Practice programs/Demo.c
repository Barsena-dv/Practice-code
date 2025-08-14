#include<stdio.h>
int linear_search(int arr[], int size,int target){
    for (int i=0;i<size;i++)
    {
        if(arr[i]==x){
            return i;
        }
    }
    return -1;
}
int main() {
    int array[]={20,40,50,10,90};
    int size=sizeof(arr)/sizeof(array[0]);
    int target;
    printf("Entetr the value to search for:");
    scanf("%d",&target);
    int result = linearSearch(arr,size,target);
    if(result != -1){
        printf("Element %d found at index %d,\n",target,result);
    }else{
        printf("Element %d not found in the array,\n",target);
    }
    return 0;
}