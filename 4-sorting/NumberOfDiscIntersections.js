function solution(A) {
    var n = A.length,
        i = 0,
        left_limit = [],
        right_limit = [],
        intersections = 0,
        LIMIT = 10000000;

    for (; i < n; i++) {
        left_limit[i] = i - A[i] <= 0 ? 0 : i - A[i];
        right_limit[i] = i + A[i] >= n ? n : i + A[i];
    }

    for (i = 0; i < n; i++) {
        for (var k = i + 1; k <= n ; k++) {
            if (right_limit[i] >= left_limit[k]) {
                intersections++;
                if (intersections >= LIMIT) {
                    return -1;
                }
            }
        }
    }

    return intersections;
}

// solve with 100/37 - https://codility.com/demo/results/demo568B7X-93W/
