import { mergeSortedArrays } from "../src/mergeArrays";

test("Merge 2 arrays with no repeat number", () => {
  expect(mergeSortedArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});

test("Merge 2 arrays with repeat number", () => {
  expect(mergeSortedArrays([1, 2, 4], [2, 4, 6])).toEqual([1, 2, 2, 4, 4, 6]);
})

test("Merge 2 arrays with one empty array", () => {
  expect(mergeSortedArrays([0, 3, 6], [])).toEqual([0, 3, 6]);
})