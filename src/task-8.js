
export default function getTopLetter(str) {
    
    let map = new Map()

    str.split('').forEach(el => {
        map.set(el, str.split(el).length-1)
    })

    let maxEl = ['', 0]

    for (const el of map) {
        if(maxEl[1] < el[1]) {
            maxEl = el
        }
    }

    return maxEl[0]
}
