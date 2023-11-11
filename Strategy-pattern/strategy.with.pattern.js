/**
 * Giảm giá khi người dùng đặt trước một sản phẩm của VINFAST 
 * @param {*} originalPrice
 * @returns
 */
function preOrderPrice(origialPrice) {
    return origialPrice * 0.8
}
/**
 * Tiếp tục thêm tính năng khuyễn mãi thông thường, ví dụ Nếu giá gốc < 200 thì giảm 10%, còn > thì giảm tối đa 30
 * @param {*} originalPrice
 * @returns
 */
function promotionPrice(origialPrice) {
    return origialPrice <= 200 ? origialPrice * 0.9 : origialPrice - 30
}
/**
 * Giá mắc định
 * @param {*} originalPrice
 * @returns
 */
function defaultPrice(origialPrice) {
    return origialPrice
}
/**
 * Đến ngày blackFriday promotion
 * @param {*} originalPrice
 * @returns
 */
function blackFridayPrice(originalPrice) {
    return originalPrice <= 200 ? originalPrice * 0.2 : originalPrice - 50;
}

function dayPrice11(origialPrice) {
    return origialPrice * 0.6
}

const getPriceStrategies = {
    preOder: preOrderPrice,
    promotion: promotionPrice,
    blackFriday: blackFridayPrice,
    default: defaultPrice,
    dayPrice11: dayPrice11
}
function getPrice(origialPrice, typePromotion) {
    return getPriceStrategies[typePromotion](origialPrice)
}
console.log('--->', getPrice(200, 'dayPrice11'));