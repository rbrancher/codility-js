function solution(A) {
    var n = A.length,
        i = 0,
        discs = [],
        intersections = 0,
        LIMIT = 10000000;

    for (; i < n; i++) {
        discs[i] = {
            left: i - A[i] <= 0 ? 0 : i - A[i],
            right: i + A[i] >= n ? n : i + A[i]
        };
    }

    discs.sort(function (a, b) {
        return a.left - b.left;
    });

    for (i = 0; i < n; i++) {
        for (var k = i + 1; k < n ; k++) {
            if (discs[i].right >= discs[k].left) {
                intersections++;
                if (intersections >= LIMIT) {
                    return -1;
                }
            } else {
                break;
            }
        }
    }

    return intersections;
}

// solve with 100/37 - https://codility.com/demo/results/demo568B7X-93W/
// solve with 100/87 - https://codility.com/demo/results/demo93WJZK-HDE/
// solver with 100/100 - https://codility.com/demo/results/demoM7TDGV-RG4/