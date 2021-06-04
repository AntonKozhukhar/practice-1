
export default function merge(data) {
    
    const obj = {}
    data.forEach((el, index) => {
        for (const key in el) {
            if (!obj[key]) {
                obj[key] = []
            }
            obj[key].push(data[index][key])
        }
    })

    return obj
}
