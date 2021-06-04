
export default function sumDigits(n) {
    return n.toString().split('').reduce((acc, curr) => +acc + +curr)
}
