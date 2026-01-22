#include <stdio.h>

#define SIZE 10

void main()
{
    int a[SIZE], b[SIZE], c[SIZE];
    int choice, choice1, key;
    int i, j, k, temp;
    int count = 0;
    int exch = 1;
    int flag = -1;
    int low, high, mid;

    /* Input array A */
    for (i = 0; i < SIZE; i++)
    {
        printf("\nEnter the value of a[%d]: ", i);
        scanf("%d", &a[i]);
    }

    /* Input array B */
    for (i = 0; i < SIZE; i++)
    {
        printf("\nEnter the value of b[%d]: ", i);
        scanf("%d", &b[i]);
    }

    while (1)
    {
        printf("\n1----add");
        printf("\n2----sub");
        printf("\n3----multiply");
        printf("\n4----divide");
        printf("\n5----sorting");
        printf("\n6----search");
        printf("\n7----exit");
        printf("\nEnter the choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
            case 1: /* Addition */
                for (i = 0; i < SIZE; i++)
                    c[i] = a[i] + b[i];

                for (i = 0; i < SIZE; i++)
                    printf("\n%d + %d = %d", a[i], b[i], c[i]);
                break;
			
			case 2: /* Subtraction */
			    for (i = 0; i < SIZE; i++)
        			c[i] = a[i] - b[i];

    			for (i = 0; i < SIZE; i++)
        			printf("\n%d - %d = %d", a[i], b[i], c[i]);
    			break;
			
			case 3: /* Multiplication */
    			for (i = 0; i < SIZE; i++)
        			c[i] = a[i] * b[i];

    			for (i = 0; i < SIZE; i++)
        			printf("\n%d * %d = %d", a[i], b[i], c[i]);
    			break;

			case 4: /* Division */
    			for (i = 0; i < SIZE; i++){
        			if (b[i] != 0){
            				c[i] = a[i] / b[i];
            			}
        			else
        				{
            				printf("\nDivision by zero at index %d", i);
            				c[i] = 0;
        				}
    				}

    			for (i = 0; i < SIZE; i++)
        			printf("\n%d / %d = %d", a[i], b[i], c[i]);
   					 break;

            case 5: /* Sorting (Bubble Sort) */
                printf("\nThe unsorted array is:\n");
                for (i = 0; i < SIZE; i++)
                    printf("%d\t", a[i]);

                for (i = 0; i < SIZE && exch == 1; i++)
                {
                    exch = 0;
                    for (j = 0; j < SIZE - 1; j++)
                    {
                        count++;
                        if (a[j] > a[j + 1])
                        {
                            exch = 1;
                            temp = a[j];
                            a[j] = a[j + 1];
                            a[j + 1] = temp;
                        }
                    }
                }

                printf("\nThe sorted array is:\n");
                for (i = 0; i < SIZE; i++)
                    printf("%d\t", a[i]);

                printf("\nThe number of iteration of this sort: %d", count);
                break;

            case 6: /* Search */
                printf("\n1----linear search");
                printf("\n2----binary");
                printf("\nEnter the choice: ");
                scanf("%d", &choice1);

                switch (choice1)
                {
                    case 1: /* Linear Search */
                        flag = -1;
                        printf("\nEnter the key you want to search: ");
                        scanf("%d", &key);

                        for (i = 0; i < SIZE; i++)
                        {
                            if (key == a[i])
                            {
                                flag = i;
                                break;
                            }
                        }

                        if (flag >= 0)
                            printf("%d key found at %d index", key, flag);
                        else
                            printf("\nThe key %d not found", key);
                        break;

                    case 2: /* Binary Search */
                        low = 0;
                        high = SIZE - 1;
                        flag = -1;

                        printf("\nEnter the key: ");
                        scanf("%d", &key);

                        while (low <= high)
                        {
                            mid = (low + high) / 2;

                            if (a[mid] == key)
                            {
                                flag = mid;
                                break;
                            }
                            else if (key > a[mid])
                                low = mid + 1;
                            else
                                high = mid - 1;
                        }

                        if (flag >= 0)
                            printf("%d key found at %d index", key, flag);
                        else
                            printf("\nThe key %d not found", key);
                        break;
                }
                break;

            case 7:
                exit(0);
        }
    }
}

