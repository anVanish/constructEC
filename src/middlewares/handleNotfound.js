
function handleNotfound(req, res, next){
    res.render('error', {
        errorCode: "404",
        error: "Oops! Trang hiện không tồn tại",
        message: "Trang bạn đang tìm kiếm không tồn tại, bị xóa hoặc thông tin đã bị thay đổi."
    })
}

module.exports = handleNotfound