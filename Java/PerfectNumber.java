/*Write a program to check whether a given number is perfect or not*/
import java.util.Scanner;
public class PerfectNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number");
        int n =sc.nextInt(),i,sum=0;
        for(i=1;i<n;i++)
        {
            if(n%i==0)
            {
                sum=sum+i;
            }
        }
        if(sum==n)
        {
            System.out.println("Perfect number");
        }
        else
        {
            System.out.println("Not Perfect");
        }
    }    
}
