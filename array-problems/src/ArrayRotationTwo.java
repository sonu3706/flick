public class ArrayRotationTwo {
    public void leftRotate(int[] arr, int index, int size) {
        for (int i = 0; i < index; i++)
            rotateArrayByOne(arr, size);
    }

    public void rotateArrayByOne(int[] arr, int size) {
        int tempValue = arr[0];
        int i;
        for (i = 0; i < size - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr[i] = tempValue;

    }

    public void printArray(int[] arr, int size) {
        for (int num : arr) {
            System.out.println(num);
        }
    }

    public static void main(String[] args) {
        ArrayRotationTwo rotate = new ArrayRotationTwo();
        int arr[] = {1, 2, 3, 4, 5, 6, 7};
        rotate.leftRotate(arr, 2, 7);
        rotate.printArray(arr, 7);
    }
}
