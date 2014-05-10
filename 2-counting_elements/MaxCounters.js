function solution(N, A) {
    var counters = new Array(N); // 0 is max

    function max_counter() {
        return counters[0];
    }

    for (var j = 0; j <= N; j++) {
        counters[j] = 0;
    }

    for (var i = 0, n = A.length; i < n; i++) {
        if (A[i] > N) { // max_counters
            counters = counters.map(max_counter);
        } else { // increase counter
            counters[A[i]]++;
            if (counters[A[i]] > counters[0]) {
                counters[0] = counters[A[i]];
            }
        }
    }

    return counters.slice(1);    
}
