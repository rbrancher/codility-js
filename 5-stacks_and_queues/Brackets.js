function solution(S) {
    var arr = S.split(''),
        n = arr.length,
        i = 0,
        openStack = [],
        isValid = 1;

    for (; i < n; i++) {
        if (arr[i].match(/\[|\{|\(/)) {
            openStack.push(arr[i]);
        } else {
            if (matchingNesters(openStack.pop(), arr[i]) !== true) {
                isValid = 0;
                break;
            }
        }
    }
    
    return isValid;
}

function matchingNesters(open, close) {
    switch(open) {
        case '(':
            return close === ')';
        case '[':
            return close === ']';
        case '{':
            return close === '}';
    }
}

// 33/80 - https://codility.com/demo/results/demo2ZW2P4-T8J/