
export default function isTriangle(a, b, c) {
    return (a < b + c && b < a + c && c < a + b) || false
}
