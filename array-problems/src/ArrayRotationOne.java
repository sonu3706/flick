public class ArrayRotationOne {
    public void rotateArray(int[] array, int index, int size) {
        // if (index + 1 >= 0) System.arraycopy(array, 0, tempArray, 0, index + 1);

        int[] tempArrayOne = new int[index];
        int[] tempArrayTwo = new int[size-index];
        for (int i = 0; i < index; i++) {
            tempArrayOne[i] = array[i];
        }
        for (int i = index; i <= size - 1; i++) {
            array[i - 2] = array[i];
        }

        for (int i = 0; i < size - index; i++) {
            tempArrayTwo[i] = array[i];
        }
        printArray(tempArrayTwo, tempArrayOne);
    }

    public void printArray(int[] arrOne, int[] arrTwo) {
        int[] tempArray = new int[arrOne.length + arrTwo.length];
        for (int i = 0; i < arrOne.length; i++) {
            tempArray[i] = arrOne[i];
        }
        for (int i = 0; i < arrTwo.length; i++) {
            tempArray[arrOne.length + i] = arrTwo[i];
        }
        for (int i = 0; i < tempArray.length; i++) {
            System.out.println(tempArray[i]);
        }
    }

    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5, 6, 7};
        ArrayRotationOne arrayRotationOne = new ArrayRotationOne();
        arrayRotationOne.rotateArray(array, 2, array.length);
    }
}
