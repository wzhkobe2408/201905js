function rSum(num) {
	if (num >= 100) {
		return 0
	} 
	if (num % 15 === 0) {
		return num + rSum(num + 1)
	} else {
		return rSum(num + 1)
	}
}
console.log(rSum(1))