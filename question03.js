// Problem3: Transpose Matrix

function transpose(A){
    const R = A.length;
    const C = A[0].length;
    const ans = new Array(C).fill(0).map(() => new Array(R));
    for (let r = 0; r < R; ++r) {
        for (let c = 0; c < C; ++c){
            ans[c][r] = A[r][c];
        }
    }
    return ans;
};