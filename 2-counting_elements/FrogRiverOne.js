function solution(X, A) {
    var n = A.length,
        steps = {},
        step_count = 0,
        leaves_count = 0;

    for (var i = 0; i < n; i++) {
        if (A[i] <= X && steps[A[i]] === undefined) { // leaf will be usefull
            leaves_count++;
            steps[A[i]] = i;
        }
    }
    
    if (leaves_count < X) { // frog has no leaves path available
        step_count = -1;
    } else {
        for (var j = 1; j <= X; j++) { // time of fall for last needed leaf
            step_count = Math.max(step_count, steps[j]);
        }
    }

    return step_count;
}
