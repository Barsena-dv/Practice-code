/*Write a program to create a simple arithmatic calculator in java*/
import java.util.Scanner;
public class SimpleArithmaticCalculator {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        double num1,num2,result=0;
        char operator;
        System.out.println("Enter Number 1 : ");
        num1=sc.nextDouble();
        System.out.println("Enter Number 2 : ");
        num2=sc.nextDouble();
        System.out.println("Enter the operation(+,-,*,/) : ");
        operator=sc.next().charAt(0);
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;    
            case '/':
            if(num2 != 0){
                result = num1 / num2;
            }
            else{
                System.out.println("Error:non calculable");
            }
                break;    
            default:
                System.out.println("Enter Valid operator");
                break;
            //result=sc.nextDouble();
        }
       // result=sc.nextDouble();
        System.out.println("result=" + result);
    }    
}
