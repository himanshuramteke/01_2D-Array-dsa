//Problem 2: Find distinct integers not present in the other array

function findDistinctIntegers(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
  
    const result = [
      Array.from(set1).filter((num) => !set2.has(num)),
      Array.from(set2).filter((num) => !set1.has(num))
    ];
  
    return result;
  }
  
  const nums1 = [1, 2, 3];
  const nums2 = [2, 4, 6];
  
  const distinctIntegers = findDistinctIntegers(nums1, nums2);
  console.log(distinctIntegers); // Output: [[1, 3], [4, 6]]
  