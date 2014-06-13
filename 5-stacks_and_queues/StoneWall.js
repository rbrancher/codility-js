function solution(H) {
    var N = H.length,
        open_blocks_height = [H[0]],
        blocks_count = 1;

    meter_height:
    for (var i = 1; i < N; i++) {
        if (H[i] > H[i-1]) { // height is bigger, need a new block
            open_blocks_height.push(H[i]);
            blocks_count++;
        } else { // height is lower or equal, maybe can re-use existing block
            if (H[i] === H[i-1]) {
                continue;
            } else {
                check_block:
                while(open_blocks_height[open_blocks_height.length - 1] > H[i]) {
                    open_blocks_height.pop();
                }
                if (open_blocks_height[open_blocks_height.length - 1] !== H[i]) {
                    open_blocks_height.push(H[i]);
                    blocks_count++;
                }
            }
        }
    }

    return blocks_count;
}

// solve with 100/100 - https://codility.com/demo/results/demo5FZMP9-EK7/
