function solution(A) {
    var n = A.length;
    A.sort(function (a, b) {
        return a - b;
    });

    return Math.max(A[0] * A[1] * A[n-1] , A[n-3] * A[n-2] * A[n-1]);
}

// solves with 100/100 - https://codility.com/demo/results/demoSREZSQ-42M/
