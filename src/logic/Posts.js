export function elementTimestampCompareTo(element1, element2) {
    console.log("POST1 " + element1.timestamp);
    console.log("POST2 " + element2.timestamp);
    if (element1.timestamp > element2.timestamp) return 1;
    if (element1.timestamp < element2.timestamp) return -1;
    return 0;
}