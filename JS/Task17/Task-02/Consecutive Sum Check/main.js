function consecutiveSum(n){
    for (let k = 2; k * (k - 1) / 2 < n; k++) {
        if ((n - (k * (k - 1) / 2)) % k === 0) {
            return true;
        }
    }
    return false;
}