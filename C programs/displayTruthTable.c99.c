#include <stdio.h>
#include <stdbool.h>

// Function prototypes
bool AND(bool a, bool b);
bool OR(bool a, bool b);
bool NOT(bool a);
void displayTruthTable(const char *gateName, bool (*gateFunction)(bool, bool));

int main() {
    int choice;

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
                displayTruthTable("NOT", NOT);
                break;
            case 4:
                printf("Exiting...\n");
                break;
            default:
                printf("Invalid choice! Please enter a number between 1 and 4.\n");
        }
    } while (choice != 4);

    return 0;
}

// AND gate implementation
bool AND(bool a, bool b) {
    return a && b;
}

// OR gate implementation
bool OR(bool a, bool b) {
    return a || b;
}

// NOT gate implementation
bool NOT(bool a) {
    return !a;
}

// Display truth table of the gate
void displayTruthTable(const char *gateName, bool (*gateFunction)(bool, bool)) {
    printf("\nTruth table for %s gate:\n", gateName);
    printf("Input1 | Input2 | Output\n");
    printf("-------------------------\n");

    for (int i = 0; i <= 1; i++) {
        for (int j = 0; j <= 1; j++) {
            printf("%6d | %6d | %6d\n", i, j, gateFunction(i, j));
        }
    }
}

