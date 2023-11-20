
function handleError(err, req, res, next){
    console.log(err)
    res.render('error', {
        errorCode: "500",
        error: "Oops! Lỗi trên server",
        message: "Server xuất hiện lỗi quay lại tính năng khác hoặc báo cáo cho nhà quản trị"
    })
}

module.exports = handleError