function solution(A) {
    var n = A.length,
        going_west = A.reduce(function (sum, el) { return el + sum; }, 0),
        going_east = n - going_west,
        passing_count = 0;

    for (var i = 0; i < n - 1; i++) {
        if (A[i] === 0) { // going east
            passing_count += going_west;
            if (passing_count > 1000000000) {
                passing_count = -1;
                break;
            }
        } else { // going west
            going_west--;
        }
    }
    
    return passing_count;
}
