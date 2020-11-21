export function isSelected(array, item) {
    return array.filter(e => e === item).length > 0;
}