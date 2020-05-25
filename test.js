const rainWaterHarvesting = require('./rainWaterHarvesting.js');

let wh = new rainWaterHarvesting();

console.log(wh.calculateCollectedWater([10, 2, 1, 16, 5, 7, 2, 11]) === 0);
console.log(wh.calculateCollectedWater([10, 2, 1, 16, 5, 7, 2, 11]) === 74);
console.log(wh.calculateCollectedWater([1, 1000, 2000, 1]) === 1002);
console.log(wh.calculateCollectedWater([1]) === 0);
console.log(wh.calculateCollectedWater([1, 1]) === 1);
console.log(wh.calculateCollectedWater([1, 1, 1]) === 2);
console.log(wh.calculateCollectedWater([1, 2, 1]) === 2);
