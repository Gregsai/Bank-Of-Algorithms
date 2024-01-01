#include <stdio.h>

int* bubble_sort(int array[], int size){
    int i, j, temp;
    for(i = 0; i < size - 1; i++){
        for(j = 0; j < size - i - 1; j++){
            if(array[j] > array[j + 1]){
                temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

void main(){
    int array[] = {5, 1, 4, 2, 8};
    int size = sizeof(array) / sizeof(array[0]); 
    
    bubble_sort(array, size);
    
    printf("Sorted array:\n");
    for(int i = 0; i < size; i++){
        printf(" %d", array[i]);
    }
    printf("\n");
}
