function solution(A) {
  var n = A.length,
      P = 0,
      Q = function () { return P + 1; },
      R = function () { return P + 2; };
   
  A.sort(function (a, b) { return a - b; });
  for (; P < n; P++) {
    if ((A[P] + A[Q()]) > A[R()] && (A[Q()] + A[R()]) > A[P] && (A[R()] + A[P]) > A[Q()]) {
      return 1;       
    }
  }
  
  return 0;   
}

// solve with 100/100 - https://codility.com/demo/results/demoM8X84C-966/
