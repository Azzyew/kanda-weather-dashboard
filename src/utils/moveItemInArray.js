export function moveItemInArray(array, oldIndex, newIndex) {
    const newArray = array

    if (newIndex >= newArray.length) {
        var k = newIndex - newArray.length + 1
        while (k--) {
          newArray.push(undefined)
        }
    }

    newArray.splice(newIndex, 0, newArray.splice(oldIndex, 1)[0])
    return newArray
}