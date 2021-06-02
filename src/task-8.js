
export default function getTopLetter(str) {
    
    let map = new Map()
    
    str.split('').forEach(el => {
        map.set(el, str.split(el).length-1)
    })
    
    let maxEl = [...map.entries()].reduce((acc, curr) => curr[1] > acc[1] ? curr : acc)

    return maxEl[0]
}
