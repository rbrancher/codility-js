function solution(S, P, Q) {
    var impact_factors = {"A": 1, "C": 2, "G": 3, "T": 4},
        A_arr = [],
        C_arr = [],
        G_arr = [],
        T_arr = [],
        last_A_index = -1,
        last_C_index = -1,
        last_G_index = -1,
        last_T_index = -1,
        result = [];

    S = S.split("");

    for (var i = S.length - 1; i >= 0; i--) {
        if (S[i] === "A") {
            last_A_index = i;
        }
        if (S[i] === "C") {
            last_C_index = i;
        }
        if (S[i] === "G") {
            last_G_index = i;
        }
        if (S[i] === "T") {
            last_T_index = i;
        }

        A_arr[i] = last_A_index;
        C_arr[i] = last_C_index;
        G_arr[i] = last_G_index;
        T_arr[i] = last_T_index;
    }

    var query_start,
        query_end;
    for (var j = 0, m = P.length; j < m; j++) {
        query_start = P[j];
        query_end = Q[j];

        if (A_arr[query_start] !== -1 && A_arr[A_arr[query_start]] <= query_end) { // got an A
            result.push(impact_factors.A);
        } else if (C_arr[query_start] !== -1 && C_arr[C_arr[query_start]] <= query_end) { // got a C
            result.push(impact_factors.C);
        } else if (G_arr[query_start] !== -1 && G_arr[G_arr[query_start]] <= query_end) { // got a G
            result.push(impact_factors.G);
        } else { // got a T
            result.push(impact_factors.T);
        }
    }

    return result;  
}


// 1st try 100/0 - https://codility.com/demo/results/demo4AUFUE-GUF/
// 2nd try 100/100 - https://codility.com/demo/results/demo6SU7YH-B48/
