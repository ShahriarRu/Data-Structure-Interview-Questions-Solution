#include <stdio.h>

#define ROWS 3
#define COLUMNS 3

int main() {
    int A[ROWS][COLUMNS], B[ROWS][COLUMNS], C[ROWS][COLUMNS];
    int i, j;

    printf("Enter elements of matrix A:\n");
    for (i = 0; i < ROWS; i++) {
        for (j = 0; j < COLUMNS; j++) {
            scanf("%d", &A[i][j]);
        }
    }

    printf("Enter elements of matrix B:\n");
    for (i = 0; i < ROWS; i++) {
        for (j = 0; j < COLUMNS; j++) {
            scanf("%d", &B[i][j]);
        }
    }

    // Add matrices A and B and store the result in matrix C
    for (i = 0; i < ROWS; i++) {
        for (j = 0; j < COLUMNS; j++) {
            C[i][j] = A[i][j] + B[i][j];
            printf("%d\t", C[i][j]);
        }
        printf("\n");
    }



    return 0;
}