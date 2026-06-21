let myArray = [ "Thala", "Thalapathy", "Thalapathy Vijay", "Vijay", "Ilayathalapathy", "Ilayathalapathy Vijay", "Thalapathy 66", "Thalapathy 67", "Thalapathy 68", "Thalapathy 69"]

while (myArray.length > 0) {
    let removedElement = myArray.pop();
    console.log(`Removed element: ${removedElement}`);
    console.log(`Remaining elements in the array: ${myArray.length}`);
}