function solution(A) {
    var n = A.length,
        left = A[0],
        right = A.slice(1).reduce(function (sum, v) { return sum + v; }, 0),
        min = Math.abs(left - right);

    for (var i = 1; i < n - 1; i++) {
        left += A[i];
        right -= A[i];

        min = Math.min(min, Math.abs(left - right));
    }

    return min;
}

// 1st try 50/33 - https://codility.com/demo/results/demo56MY77-3PH/
// 2nd try 66/100 - https://codility.com/demo/results/demoDWZRPH-8D2/
// 3rd try 100/100 - https://codility.com/demo/results/demo9WRH7G-Q2R/
