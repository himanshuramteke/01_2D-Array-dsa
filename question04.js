//Array pair sum

function arrayPairSum(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    let sum = 0;
    
    for (let i = 0; i < nums.length; i += 2) {
      sum += nums[i]; // Add the minimum value of each pair to the sum
    }
    
    return sum;
  }
  
  const nums = [1, 4, 3, 2];
  const maxSum = arrayPairSum(nums);
  console.log(maxSum); // Output: 4
  