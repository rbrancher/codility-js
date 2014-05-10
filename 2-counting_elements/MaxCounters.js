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
