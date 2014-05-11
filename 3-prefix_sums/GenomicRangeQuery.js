function solution(S, P, Q) {
    var n = P.length,
        queries = new Array(n),
        impact_factor = {"A": 1, "C": 2, "G": 3, "T": 4};

    function smallestImpactFactor(smallest_factor, nucleotide) {
        return Math.min(smallest_factor, impact_factor[nucleotide]);
    }

    for (var i = 0; i < n; i++) {
        queries[i] = S.substring(P[i], Q[i] + 1).split("").reduce(smallestImpactFactor, Infinity);
    }

    return queries;
}

// https://codility.com/demo/results/demo4AUFUE-GUF/
