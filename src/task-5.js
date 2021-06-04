
export default function trim(text, maxLength) {
    if (maxLength <= 0) throw new RangeError()
    return (text.length > maxLength) ? text.slice(0, maxLength - 1) + '\u2026' : text;
}
