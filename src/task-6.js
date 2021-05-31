
export default function getStats(data) {
    let obj = {
        min: null,
        max: null,
        avg: null,
    }
    if (data.length === 0) {
        return obj;
    }
    if (data.length === 1) {
        obj.min = data[0]
        obj.max = data[0]
        obj.avg = data[0]
    }
    let sum = data.reduce((acc, cur) => (acc += cur))
    obj.avg = sum / data.length

    data.forEach(el => {
        if (el < obj.min) obj.min = el
        if (el > obj.max) obj.max = el
    });
    
    return obj
}
