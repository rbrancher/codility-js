function solution(A) {
    var n = A.length + 1;
    return (n * (n + 1) / 2) - A.reduce(function (sum, el) { return el + sum; }, 0);
}

// https://codility.com/demo/results/demo59BRGD-F7E/
