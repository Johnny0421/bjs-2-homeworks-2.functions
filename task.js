// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max){
      max = arr[i];
    } 
    if(arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  
  avg = Number((sum/arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for(let i = 0; i < arr.length; i++) sum += arr[i];

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  let sum1 = worker2(arrOfArr[0]);
  let sum2 = worker2(arrOfArr[1]);

  if (sum1 > sum2) {
    max = sum1;
  } else {
    max = sum2;
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let min, max, dif;
  min = Infinity;
  max = -Infinity;
  dif = 0;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max){
      max = arr[i];
    } 
    if(arr[i] < min) {
      min = arr[i];
    }
  }

  dif = Math.abs(max - min);

  return dif;
}
