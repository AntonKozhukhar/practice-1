
export default function convertToRoman(n) {
    const roman = { 
        M: 1000, 
        CM: 900, 
        D: 500,
        CD: 400, 
        C: 100, 
        XC: 90, 
        L: 50, 
        XL: 40, 
        X: 10, 
        IX: 9, 
        V: 5, 
        IV: 4, 
        I: 1 
    }
	let str = ''

	for (const key in roman) {
		while (n >= roman[key]) {
			str += key
			n -= roman[key]
		}
	}
	return str
}
