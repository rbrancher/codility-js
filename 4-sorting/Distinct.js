function solution(A) {
  var distinct_numbers = [],
      counter = 0;

  for (var i = 0, n = A.length; i < n; i++) {
    if (distinct_numbers[A[i]] === undefined) {
      distinct_numbers[A[i]] = i;
      counter++;
    }
  }

  return counter;   
}

// 100/100 - https://codility.com/demo/results/demoPNNK4F-2XM/
