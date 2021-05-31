
export default function sumDigits(n) {
    
    return n.toString().split('').map(e => +e).reduce((a,b) => a + b)
}
