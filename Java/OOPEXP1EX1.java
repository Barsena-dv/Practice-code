/*Write a program that solves the following equation and displays the value x and y:
1) 3.4x+50.2y=44.5 2) 2.1x+.55y=5.9 (Assume Cramer‟s rule to solve equation
ax+by=e x=ed-bf/ad-bc
cx+dy=f y=af-ec/ad-bc )*/
public class OOPEXP1EX1 {

    public static void main(String[] args) {
        double a1 = 3.4, b1 = 50.2, e1 = 44.5;
        double a2 = 2.1, b2 = 0.55, e2 = 5.9;

        double[] solution = solveEquation(a1, b1, a2, b2, e1, e2);

        System.out.println("Solution:");
        System.out.println("x = " + solution[0]);
        System.out.println("y = " + solution[1]);
    }

    public static double[] solveEquation(double a1, double b1, double a2, double b2, double e1, double e2) {
        double determinant = a1 * b2 - a2 * b1;

        if (determinant == 0) {
            System.out.println("No unique solution exists as the determinant is zero.");
            return null;
        }

        double x = (e1 * b2 - b1 * e2) / determinant;
        double y = (a1 * e2 - e1 * a2) / determinant;

        return new double[]{x, y};
    }
}
