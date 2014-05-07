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
