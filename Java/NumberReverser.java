/*. Write a test program that prompts the user to enter ten numbers, invoke a method to reverse the 
numbers, display the numbers.*/
import java.util.Scanner;

public class NumberReverser {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter ten numbers:");

        int[] numbers = new int[10];

        for (int i = 0; i < 10; i++)
        {
            System.out.print("Enter number " + (i + 1) + ": ");
            numbers[i] = sc.nextInt();
        }

        reverseNumbers(numbers);

        System.out.println("\nReversed numbers:");
        for (int i = 0; i < 10; i++)
        {
            System.out.println(numbers[i]);
        }

        sc.close();
    }

    public static void reverseNumbers(int[] numbers)
    {
        int left = 0;
        int right = numbers.length - 1;

        while (left < right)
        {
            int temp = numbers[left];
            numbers[left] = numbers[right];
            numbers[right] = temp;

            left++;
            right--;
        }
    }
}
