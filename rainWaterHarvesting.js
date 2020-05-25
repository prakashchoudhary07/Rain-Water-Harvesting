"use strict";

class RainWaterHarvesting {

 calculateCollectedWater(arr) {
  if (!arr) return;
  let result = 0;
  let rmax = false;
  let flag = false;
  let left = 0, right = arr.length;

  while (left < right) {

   for (let j = left; j < arr.length; j++) {
    if (arr[left] < arr[j]) {
     result = result + (arr[left]) * (j - left);
     left = j - 1;
     rmax = true;
     flag = true;
     break;
    }
    rmax = false;
   }

   if (!rmax) {
    for (let j = right - 1; j >= left; j--) {
     for (let k = j; k >= left; k--) {
      if (arr[k] > arr[j]) {
       result += (j - k) * arr[j];
       j = k + 1;
       right = j;
       break
      }
     }
     right--;
    }
   }

   if (!flag) {
    if (arr[0] === arr[arr.length - 1]) {
     result = result + (arr[left] * arr.length - 1);
     left = arr.length
    }
   }
   left++
  }

  return result;

 }
}

module.exports = RainWaterHarvesting;