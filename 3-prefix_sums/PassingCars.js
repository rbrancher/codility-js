function solution(A) {
    var n = A.length,
        passing_count = 0;

    for (var i = 0; i < n; i++) {
        if (A[i] === 0) { // going east
            for (var j = i; j < n; j++) {
                if (A[j] === 1) { // cross with going west
                    passing_count++;
                    if (passing_count > 1000000000) {
                        passing_count = -1;
                        break;
                    }
                }       
            }
        }
    }
    
    return passing_count;
}
