export function mergeSortedArrays (collection_1: number[], collection_2: number[]): number[] {
  let mergedArray: number[] = []
  let i = 0
  let j = 0
  
  // Check for an empty array
  if (collection_1.length === 0) {
    return collection_2
  }
  if (collection_2.length === 0) {
    return collection_1
  }

  // Check for any index still left in two arrays
  while (collection_1[i] || collection_2[j]) {
    // Check for value in 'collection_2' if there still left
    // For the second condition, we use comparison because if 'collection_1' is already be 'undefined' and 'collection_2 still have some value left it will be false for automatically, so both condition will be false and go to else condition instead' 
    if (collection_2[j] === undefined || collection_1[i] < collection_2[j]) {
      mergedArray.push(collection_1[i])
      i++
    } else {
      mergedArray.push(collection_2[j])
      j++
    }
  }

  return mergedArray
}