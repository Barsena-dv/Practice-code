#include <stdio.h>
#include <conio.h>

// Function prototypes
int AND(int a, int b);
int OR(int a, int b);
int NOT(int a);
void displayTruthTable(char gateName[], int (*gateFunction)(int, int));

int main() {
    int choice;
    //clrscr();
    
    do {
        printf("\nMenu:\n");
        printf("1. AND Gate\n");
        printf("2. OR Gate\n");
        printf("3. NOT Gate\n");
        printf("4. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                displayTruthTable("AND", AND);
                break;
            case 2:
                displayTruthTable("OR", OR);
                break;
            case 3:
                printf("\nNOT gate only requires one input.");
                printf("\nEnter the input (0 or 1): ");
                int input;
                scanf("%d", &input);
                printf("\nTruth table for NOT gate:\n");
                printf("Input | Output\n");
                printf("------------\n");
                printf("%5d | %6d\n", input, NOT(input));
                break;
            case 4:
                printf("Exiting...\n");
                break;
            default:
                printf("Invalid choice! Please enter a number between 1 and 4.\n");
        }
    } while (choice != 4);

    //getch(); // To hold the output screen before exiting
    return 0;
}

// AND gate implementation
int AND(int a, int b) {
    return a && b;
}

// OR gate implementation
int OR(int a, int b) {
    return a || b;
}

// NOT gate implementation
int NOT(int a) {
    return !a;
}

// Display truth table of the gate
void displayTruthTable(char gateName[], int (*gateFunction)(int, int)) {
    printf("\nTruth table for %s gate:\n", gateName);
    printf("Input1 | Input2 | Output\n");
    printf("-------------------------\n");

    for(int i = 0; i <= 1; i++) {
        for (int j = 0; j <= 1; j++) {
            printf("%6d | %6d | %6d\n", i, j, gateFunction(i, j));
        }
    }
}

