/*3. Write a program that generate 6*6 two-dimensional matrix, filled with 0‟s and 1‟s , display the matrix, check 
every raw and column have an odd number‟s of 1‟s*/
import java.util.Random;

public class MatrixChecker {

    public static void main(String[] args)
    {
        int[][] matrix = generateMatrix(6, 6);
        displayMatrix(matrix);

        boolean oddOnes = checkOddOnes(matrix);
        if (oddOnes)
        {
            System.out.println("\nEvery row and column has an odd number of 1s.");
        }
        else
        {
            System.out.println("\nAt least one row or column does not have an odd number of 1s.");
        }
    }

    public static int[][] generateMatrix(int rows, int cols)
    {
        int[][] matrix = new int[rows][cols];
        Random rand = new Random();

        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < cols; j++)
            {
                matrix[i][j] = rand.nextInt(2);
            }
        }

        return matrix;
    }

    public static void displayMatrix(int[][] matrix)
    {
        System.out.println("Generated Matrix:");
        for (int[] row : matrix)
        {
            for (int num : row)
            {
                System.out.print(num + " ");
            }
            System.out.println();
        }
    }

    public static boolean checkOddOnes(int[][] matrix)
    {
        int rows = matrix.length;
        int cols = matrix[0].length;

        for (int i = 0; i < rows; i++)
        {
            int countOnes = 0;
            for (int j = 0; j < cols; j++)
            {
                if (matrix[i][j] == 1)
                {
                    countOnes++;
                }
            }
            if (countOnes % 2 == 0)
            {
                return false;
            }
        }

        for (int j = 0; j < cols; j++)
        {
            int countOnes = 0;
            for (int i = 0; i < rows; i++)
            {
                if (matrix[i][j] == 1)
                {
                    countOnes++;
                }
            }
            if (countOnes % 2 == 0)
            {
                return false;
            }
        }

        return true;
    }
}
