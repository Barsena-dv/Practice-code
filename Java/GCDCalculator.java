/*Write a method with following method header.
public static int gcd(int num1, int num2)
Write a program that prompts the user to enter two integers and compute the gcd of two integers*/
import java.util.Scanner;

public class GCDCalculator {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the first integer: ");
        int num1 = sc.nextInt();
        System.out.print("Enter the second integer: ");
        int num2 = sc.nextInt();

        int gcdResult = gcd(num1, num2);
        System.out.println("The GCD of " + num1 + " and " + num2 + " is: " + gcdResult);

        sc.close();
    }


    public static int gcd(int num1, int num2) {
        if (num2 == 0) {
            return num1;
        }
        return gcd(num2, num1 % num2);
    }
}
