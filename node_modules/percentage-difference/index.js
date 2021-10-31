/**
 * Percentage Difference between two numbers
 * @param  {int} base First and original number
 * @param  {int} peak Second new number to differentiate
 * @param  {boolean} round	 Round return value to nearest whole numer?
 * @return {int} Percentage difference between lowest and highest number
 */
const percentDiff = (base, peak, round = false) => {
	const diff = (peak - base) / base * 100;
	return round ? Math.round(diff) : diff;
};

module.exports = percentDiff;
