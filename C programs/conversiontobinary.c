#include <stdio.h>

int main() {
    int decimalNumber, remainder, binaryNumber = 0, place = 1;

    // Input decimal number from user
    printf("Enter a decimal number: ");
    scanf("%d", &decimalNumber);

    // Convert decimal to binary
    while (decimalNumber > 0) {
        remainder = decimalNumber % 2;  // Get the remainder when dividing by 2
        binaryNumber += remainder * place;  // Multiply the remainder with the current place value and add it to binaryNumber
        decimalNumber /= 2;  // Divide the decimal number by 2 for next iteration
        place *= 10;  // Increment place value (1, 10, 100, ...)
    }

    // Output binary number
    printf("Binary equivalent: %d\n", binaryNumber);

    return 0;
}

