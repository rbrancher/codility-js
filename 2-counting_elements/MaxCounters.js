function solution(N, A) {
    var counters = new Array(N); // 0 is max

    for (var j = 0; j <= N; j++) {
        counters[j] = 0;
    }

    for (var i = 0, n = A.length; i < n; i++) {
        if (A[i] > N) { // max_counters
            for (var k = 1; k <= N; k++) {
                counters[k] = counters[0];
            }
        } else { // increase counter
            counters[A[i]]++;
            if (counters[A[i]] > counters[0]) {
                counters[0] = counters[A[i]];
            }
        }
    }

    return counters.slice(1);    
}

// 1st try 100/60 - https://codility.com/demo/results/demo3TVEUC-P3V/
// 2nd try 100/80 - https://codility.com/demo/results/demoKWVCP3-5MM/
