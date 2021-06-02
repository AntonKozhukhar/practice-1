
export default function getStats(data) {
    let obj = {
        min: null,
        max: null,
        avg: null,
    }

    if (data.length === 0) return obj
    
    obj.avg = data.reduce((acc, curr) => (acc += curr)) / data.length

    obj.min = Math.min(...data)
    obj.max = Math.max(...data)

    return obj
}
