// Problem - 1

// var removeDuplicates = function(nums) {
//     nums.forEach((item, index) => {
//         if (nums.includes(item) && index != nums.indexOf(item)) nums[index] = null;
//     });
//     nums =nums.filter((item) => item !== null)
//     return nums
// };

// Problem - 2

// console.log(removeDuplicates([1, 1, 2]))

// var removeDuplicates = function(nums) {
//     for(let i=0;i<nums.length;i++){
//         if(i+1<nums.length){
//             if(nums[i]===nums[i+1]){
//                 nums.splice(i,1)
//                 i--;
//             }
//         }
//     }
//     return nums
// };

// Problem - 3


// var removeDuplicates = function(nums) {
//     nums.forEach((item, index) => {
//         if (nums.includes(item) && index != nums.indexOf(item)) nums[index] = null;
//     });
//     console.log(nums)
//     for(let i = 0; i < nums.length; i++){
//         console.log(nums, i)
//         if (nums[i] == null){
//             nums.splice(i, 1)
//             i--;
//         }
//     }
//     return [nums.length, nums]
// };

// Problem - 4


// var removeElement = function (nums, val) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == val) {
//             nums.splice(i, 1)
//             i--;
//         }
//     }
//     return nums.length
// };

// Problem - 5


// var searchInsert = function(nums, target) {
//     for(let i = 0; i < nums.length; i++) {
//         if ( nums[i] >= target){
//             return i;
//         }
//     }
//     return nums.length;
// };

// Problem - 6


// var maxSubArray = function (nums) {
    
//     let sum = Number.MIN_SAFE_INTEGER;
//     let temp = 0;

//     for (let i = 0; i < nums.length; i++) {

//         temp = Math.max(nums[i], nums[i] + temp)
        
//         if (temp > sum) {
//             sum = temp;
//         }
//     }
//     return sum;
// };

// Problem - 7


// var plusOne = function(digits) {
//     let strDigit = digits.reduce((acc, item) => acc + item, '');
//     let numsBig = BigInt(strDigit)
//     strDigit = numsBig + BigInt('1') + '';
//     return strDigit.split('')
// };

// plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])


const slash = (n) => {
    let MyStr = '';
    for(let i = 1; i < n+1; i++){
        for(let j = 1; j < n-i + 1; j++){
            MyStr += ' ';
        }
        for(let k = n-i; k < n + 1; k++){
            MyStr += "#";
        }
    }
    console.log(MyStr)
}

slash(3)