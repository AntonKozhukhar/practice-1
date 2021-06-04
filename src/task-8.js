
export default function getTopLetter(str) {
    
    const map = new Map()
    
    str.split('').forEach(el => map.set(el, str.split(el).length-1))
    
    const maxEl = [...map.entries()].reduce((acc, curr) => curr[1] > acc[1] ? curr : acc)

    return maxEl[0]
}
