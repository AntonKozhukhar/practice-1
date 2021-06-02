
export default function trim(text, maxLength) {
    if (maxLength <= 0) {
        throw new RangeError()
    }

    if (text.split('').length > maxLength) {
        let arr = text.split('').splice(0, maxLength - 1)
        return arr.concat('\u2026').join('')
    } else return text
}
