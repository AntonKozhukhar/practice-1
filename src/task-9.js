
export default function merge(data) {
    
    let obj = {}
    for (let i = 0; i < data.length; i++) {
        for (const key of Object.keys(data[i])) {
            if(!obj[key]) {
                obj[key] = []
            }
            let currentVal = obj[key]
            currentVal.push(data[i][key])
        }
    }
    return obj
}
