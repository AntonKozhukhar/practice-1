
export default function getNthItem(a, n) {
    let S = [0]
    for (let i = 0; i <= n; i++) {
        S[i+1] = (a - 2 * S[i])
    }

    return S[n]
}
