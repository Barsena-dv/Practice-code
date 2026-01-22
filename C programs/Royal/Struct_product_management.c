#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <windows.h>

#define SIZE 1000

struct Product {
    int id;
    char name[50];
    char category[30];
    int quantity;
    float price;
    int active;
};

struct Product records[SIZE];

int count = 0;
int nextId = 1;


int login();
void addProduct();
void displayProducts();
void searchProductById();
void sortProductsByPrice();
void updateProductById();
void deleteProductById();
void printProduct(struct Product p);


int login() {
    char username[20], password[20];
    int attempts = 3;

    while (attempts--) {
        printf("\nUsername: ");
        scanf("%s", username);

        printf("Password: ");
        scanf("%s", password);

        if (strcmp(username, "admin") == 0 && strcmp(password, "1234") == 0) {
            printf("\nLogin Successful!\n");
            Sleep(1000);
            return 1;
        } else {
            printf("\nInvalid credentials. Attempts left: %d\n", attempts);
        }//end of else
    }//end of while

    printf("\nAccess Denied. Exiting program...\n");
    Sleep(1500);
    return 0;
}//end of login

void addProduct() {
    struct Product p;
    int c;

    if (count == SIZE) {
        printf("\nProduct list is full.");
        return;
    }//end of if

    p.id = nextId++;

    while ((c = getchar()) != '\n' && c != EOF);

    printf("\nEnter Product Name: ");
    fgets(p.name, 50, stdin);
    p.name[strcspn(p.name, "\n")] = '\0';

    printf("Enter Category: ");
    fgets(p.category, 30, stdin);
    p.category[strcspn(p.category, "\n")] = '\0';

    printf("Enter Quantity: ");
    scanf("%d", &p.quantity);

    printf("Enter Price: ");
    scanf("%f", &p.price);

    p.active = 1;

    records[count++] = p;

    printf("\nProduct added successfully!");
}// end of addProduct

void displayProducts() {
    int i;
    if (count == 0) {
        printf("\nNo products available.");
        return;
    }//end of if

    for (i = 0; i < count; i++) {
        if (records[i].active == 1) {
            printProduct(records[i]);
        }//end if
    }//end of for
}//end of displayProducts

void searchProductById() {
    int id, i, found = 0;

    printf("\nEnter Product ID to search: ");
    scanf("%d", &id);

    for (i = 0; i < count; i++) {
        if (records[i].id == id && records[i].active == 1) {
            printProduct(records[i]);
            found = 1;
            break;
        }//end of if
    }//end of for

    if (!found) {
        printf("\nProduct not found.");
    }//end of if
}//end of searchProducById

void sortProductsByPrice() {
    int i, j;
    struct Product temp;

    for (i = 0; i < count; i++) {
        for (j = i + 1; j < count; j++) {
            if (records[i].price > records[j].price) {
                temp = records[i];
                records[i] = records[j];
                records[j] = temp;
            }//end of if
        }//end of inner for
    }//end of outer for

    printf("\nProducts sorted by price (ascending).");
    displayProducts();
}//end of sortProductByPrice

void updateProductById() {
    int id, i, found = 0;
    int c;

    printf("\nEnter Product ID to update: ");
    scanf("%d", &id);

    for (i = 0; i < count; i++) {
        if (records[i].id == id && records[i].active == 1) {

            while ((c = getchar()) != "\n" && c != EOF);

            printf("Enter New Name: ");
            fgets(records[i].name, 50, stdin);
            records[i].name[strcspn(records[i].name, "\n")] = "\0";

            printf("Enter New Category: ");
            fgets(records[i].category, 30, stdin);
            records[i].category[strcspn(records[i].category, "\n")] = "\0";

            printf("Enter New Quantity: ");
            scanf("%d", &records[i].quantity);

            printf("Enter New Price: ");
            scanf("%f", &records[i].price);

            printf("\nProduct updated successfully!");
            found = 1;
            break;
        }//end of if
    }//end of for

    if (!found) {
        printf("\nProduct not found.");
    }//end of if
}//end of updateProductById

void deleteProductById() {
    int id, i, found = 0;

    printf("\nEnter Product ID to delete: ");
    scanf("%d", &id);

    for (i = 0; i < count; i++) {
        if (records[i].id == id && records[i].active == 1) {
            records[i].active = 0;
            printf("\nProduct deleted successfully.");
            found = 1;
            break;
        }//end of if
    }//end of for

    if (!found) {
        printf("\nProduct not found.");
    }//end of if
}//end of deleteProductById

void printProduct(struct Product p) {
    printf("\nID:%d  Name:%s  Category:%s  Qty:%d  Price:%.2f",
           p.id, p.name, p.category, p.quantity, p.price);
}//end of printProduct

int main() {
    int choice;

    if (!login()) {
        return 0;
    }//end of if

    do {
        printf("\n\n===== PRODUCT INVENTORY MANAGEMENT =====");
        printf("\n1. Add Product");
        printf("\n2. Display All Products");
        printf("\n3. Search Product by ID");
        printf("\n4. Sort Products by Price");
        printf("\n5. Update Product By ID");
        printf("\n6. Delete Product By ID");
        printf("\n7. Exit");
        printf("\nEnter choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1: addProduct(); 
					break;
            case 2: displayProducts(); 
					break;
            case 3: searchProductById(); 
					break;
            case 4: sortProductsByPrice(); 
					break;
            case 5: updateProductById(); 
					break;
            case 6: deleteProductById(); 
					break;
            case 7:
                printf("\nExiting program...");
                Sleep(1000);
                return 0;
            default:
                printf("\nInvalid choice.");
        }//end of switch
    } while (choice != 0);

    return 0;
}//end of main

