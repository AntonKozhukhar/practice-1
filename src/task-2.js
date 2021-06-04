
export default function getNthItem(a, n) {
    // const S = [0]
    // for (let i = 0; i <= n; i++) {
    //     S[i + 1] = (a - 2 * S[i])
    // }
    // return S[n]

    return n < 1 ? n : (a - 2 * getNthItem(a, n-1))
}
