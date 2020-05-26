"use strict";

class RainWaterHarvesting {

 calculateCollectedWater(arr) {
  if (!arr) return undefined
  const leftMax = [], rightMax = [];
  const arrayLength = arr.length;
  let max = 0;
  let area = 0;
  arr.forEach((element, index) => {

   max = 0;

   for (let i = index; i < arrayLength; i++) {
    max = Math.max(max, arr[i]);
   }
   leftMax.push(max);

   max = 0;

   for (let i = index - 1; i > -1; i--) {
    max = Math.max(max, arr[i]);
   }
   rightMax.push(max);

  });

  for (let i = 0; i < arrayLength; i++) {
   area += Math.min(leftMax[i], rightMax[i]);
  }
  return area;

 }

}

module.exports = RainWaterHarvesting;