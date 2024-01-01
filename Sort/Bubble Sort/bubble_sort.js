function bubbleSort(array) {
    var _a;
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length - (i + 1); j++) {
            if (array[j] > array[j + 1]) {
                _a = [array[j + 1], array[j]], array[j] = _a[0], array[j + 1] = _a[1];
            }
        }
    }
    return array;
}
function main() {
    var array = [5, 1, 4, 2, 8];
    console.log("Sorted array:\n", bubbleSort(array));
    return 0;
}
main();
