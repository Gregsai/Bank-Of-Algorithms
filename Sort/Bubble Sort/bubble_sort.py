def bubble_sort(array):
    for i in range(len(array)):
        for j in range(len(array)-(i+1)):
            if array[j] > array[j+1]:
                array[j], array[j+1] = array[j+1], array[j]
    return array

def main():
    array = [5, 1, 4, 2, 8]
    print("Sorted array:\n", bubble_sort(array))
    return 0

if __name__ == '__main__':
    main()