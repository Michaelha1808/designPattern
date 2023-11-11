function getPrice(originalPrice, typePromotion = 'default') {
    //Giảm giá khi người dùng đặt trước một sản phẩm của vinfast
    if (typePromotion === 'preOrder') {
        return originalPrice * 0.8 // giảm 20%
        // ở giai đoạn này nếu như biết solid thì nó sẽ phá vỡ nguyên tắc đầu tiên . Nguyên tắc trách nhiệm duy nhất.
    }
    // tiếp tục thêm tính năng khuyến mãi thông thường, ví dụ nết giá gốc < 200 thì giảm giá 10% , còn > thì tối đa 30%
    if (typePromotion == 'promotion') {
        return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30
    }
    if (typePromotion === "blackFriday") {
        return origialPrice <= 200 ? origialPrice * 0.2 : originalPrice - 50;
    }

    if (typePromotion === 'default') {
        return originalPrice
    }
}
console.log(`---->Price::`, getPrice(200, 'preOrder'));