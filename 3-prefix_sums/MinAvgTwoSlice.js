function solution(A) {
    var n = A.length,
        min_average = (A[0] + A[1]) / 2,
        min_average_pos = 0;

    for (var i = 0; i < n; i++) {
        if ((A[i] + A[i+1]) / 2 < min_average) { // next 2 elements make an average smaller then min_average
            min_average = (A[i] + A[i+1]) / 2;
            min_average_pos = i;
        }

        if ((A[i] + A[i+1] + A[i+3]) / 3 < min_average) { // next 3 elements make an average smaller then min_average
            min_average = (A[i] + A[i+1] + A[i+3]) / 3;
            min_average_pos = i;
        }
    }

    return min_average_pos;
}

// 1st try 40/0 - https://codility.com/demo/results/demoH9F5BV-EDZ/
