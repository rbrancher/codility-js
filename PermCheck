function solution(A) {
    var n = A.length,
        counter = {},
        sum = 0,
        uniq = true;

    for (var i = 0; i < n; i++) {
        sum += A[i];
        counter[A[i]] = counter[A[i]] ? counter[A[i]] + 1 : 1;
    }

    for (var key in counter) {
        if (counter[key] > 1) {
            uniq = false;
            break;
        }
    }

    return uniq && (n * (n + 1) / 2) === sum ? 1 : 0;
}
