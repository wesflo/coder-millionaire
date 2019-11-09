
export default function getSiblingInArr(item, arr, direction = 1) {
    const index = arr.indexOf(item) + direction;

    return arr[index];
}
