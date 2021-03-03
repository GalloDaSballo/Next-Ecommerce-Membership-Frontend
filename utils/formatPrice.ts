/**
 * FormatPrice
 * @param number
 */
const formatPrice = (number: number): string =>
    `$${(Math.round(number * 100) / 100).toFixed(2)}`;
export default formatPrice;
