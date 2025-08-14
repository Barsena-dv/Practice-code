#include <stdio.h>

// Function to perform Booth's algorithm for multiplication
int boothMultiplication(int multiplicand, int multiplier) {
    int product = 0;
    int accumulator = 0;
    int Q0; // Variable to store the least significant bit (LSB) of the multiplier

    // Loop through each bit of the multiplier
    while (multiplier != 0) {
        // Get the least significant bit of multiplier
        Q0 = multiplier & 1;

        // Check if the current bit and the previous bit are different
        if (Q0 != 0 && (Q0 ^ (multiplier & 2))) {
            accumulator -= multiplicand;
        } else if (Q0 != 0 && !(Q0 ^ (multiplier & 2))) {
            accumulator += multiplicand;
        }

        // Right shift the accumulator and multiplier
        accumulator >>= 1;
        multiplier >>= 1;
    }

    // Result is stored in the accumulator
    return accumulator;
}

int main() {
    int multiplicand, multiplier;

    // Input multiplicand and multiplier from user
    printf("Enter multiplicand: ");
    scanf("%d", &multiplicand);
    printf("Enter multiplier: ");
    scanf("%d", &multiplier);

    // Perform multiplication using Booth's algorithm
    int result = boothMultiplication(multiplicand, multiplier);

    // Output the result
    printf("Product: %d\n", result);

    return 0;
}

