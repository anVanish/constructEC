const { default: mongoose } = require("mongoose")

const ObjectId = mongoose.Types.ObjectId

exports.products = [{
    name: 'Cửa nhôm xingfa cao cấp 4 cánh',
    img: ['https://cokhinguyenhungdalat.com/thumbs/540x540x1/upload/product/cua-nhom-xingfa-cao-cap-4353.jpg'],
    categoryId: new ObjectId('655bfbf70cf05ce4376929ce')
}, {
    name: 'Cửa nhôm xingfa cao cấp 6 cánh',
    img: ['https://cokhinguyenhungdalat.com/thumbs/540x540x1/upload/product/cua-nhom-xingfa-5380.jpg'],
    categoryId: new ObjectId('655bfbf70cf05ce4376929ce')
}, {
    name: 'Cửa kính nhôm xingfa cao cấp',
    img: ['https://cokhinguyenhungdalat.com/thumbs/540x540x1/upload/product/cua-kinh-nhom-xingfa-cao-cap-6629.jpg'],
    categoryId: new ObjectId('655bfbf70cf05ce4376929ce')
}, {
    name: 'Tủ inox hâm nóng thức ăn',
    img: ['https://cokhinguyenhungdalat.com/thumbs/540x540x1/upload/product/tu-inox-ham-nong-thuc-an-5761.jpg', 'https://cokhinguyenhungdalat.com/thumbs/540x540x1/upload/product/tu-inox-ham-nong-thuc-an-da-lat-1215.jpg'],
    categoryId: new ObjectId('655bfbf70cf05ce4376929d1')
}, {
    name: 'Tủ inox hâm nóng thức ăn',
    img: ['https://cokhinguyenhungdalat.com/thumbs/540x540x1/upload/product/tu-inox-ham-nong-thuc-an-5761.jpg', 'https://cokhinguyenhungdalat.com/thumbs/540x540x1/upload/product/tu-inox-ham-nong-thuc-an-da-lat-1215.jpg'],
    categoryId: new ObjectId('655bfbf70cf05ce4376929d1')
}, {
    name: 'Nồi điện cao cấp inox 304 thép không rỉ',
    img: ['https://cokhinguyenhungdalat.com/thumbs/540x540x1/upload/product/noi-dien-cao-cap-inox-304-khong-ri-set-3147.jpg', 'https://cokhinguyenhungdalat.com/thumbs/540x540x1/upload/product/noi-dien-cao-cap-nguyen-hung-3956.jpg'],
    categoryId: new ObjectId('655bfbf70cf05ce4376929d1')
}, 

{
    name: 'Bàn bếp inox có tủ',
    img: ['https://cokhinguyenhungdalat.com/thumbs/540x540x1/upload/product/ban-bep-inox-co-tu-8007.jpg'],
    categoryId: new ObjectId('655bfbf70cf05ce4376929d3')
}, {
    name: 'Kệ bếp và chậu rửa inox không rỉ',
    img: ['https://cokhinguyenhungdalat.com/thumbs/540x540x1/upload/product/ke-bep-gas-va-chau-rua-2064.jpg'],
    categoryId: new ObjectId('655bfbf70cf05ce4376929d3')
}, {
    name: 'Kệ tủ bếp inox công nghiệp',
    img: ['https://cokhinguyenhungdalat.com/thumbs/540x540x1/upload/product/thiet-bi-bep-cong-nghiep-9427.jpg'],
    categoryId: new ObjectId('655bfbf70cf05ce4376929d3')
}, 

{
    name: 'Cầu thang kính inox',
    img: ['https://cokhinguyenhungdalat.com/thumbs/540x540x1/upload/product/cau-thang-kinh-inox-8345.jpg'],
    categoryId: new ObjectId('655bfbf70cf05ce4376929d7')
},{
    name: 'Lan can inox kính ban công',
    img: ['https://cokhinguyenhungdalat.com/thumbs/540x540x1/upload/product/lan-can-inox-kinh-7742.jpg'],
    categoryId: new ObjectId('655bfbf70cf05ce4376929d7')
},{
    name: 'Inox lan can thiết kế đẹp',
    img: ['https://cokhinguyenhungdalat.com/thumbs/540x540x1/upload/product/lan-can-inox-cao-cap-8527.jpg'],
    categoryId: new ObjectId('655bfbf70cf05ce4376929d7')
},

{
    name: 'Tủ Nguyên Hùng Đà Lạt',
    img: ['https://cokhinguyenhungdalat.com/thumbs/540x540x1/upload/product/tu-inox-nguyen-hung-2577.jpg'],
    categoryId: new ObjectId('655bfbf70cf05ce4376929d9')
},{
    name: 'Mẫu xích đu inox 304 cao cấp',
    img: ['https://cokhinguyenhungdalat.com/thumbs/540x540x1/upload/product/xich-du-inox-dep-3379.jpg'],
    categoryId: new ObjectId('655bfbf70cf05ce4376929d9')
},{
    name: 'Xích đu inox cao cấp, đẹp',
    img: ['https://cokhinguyenhungdalat.com/thumbs/540x540x1/upload/product/xich-du-inox-cao-cap-5507.JPG'],
    categoryId: new ObjectId('655bfbf70cf05ce4376929d9')
},


{
    name: 'Thi công nhà xưởng tiền chế tại Đà Lạt',
    img: ['https://cokhinguyenhungdalat.com/thumbs/540x540x1/upload/product/thi-cong-nha-tien-che-nguyen-hung-da-lat-7146.jpg'],
    categoryId: new ObjectId('655bfbf70cf05ce4376929db')
},{
    name: 'Mẫu nhà tiền chế đẹp tại Đà Lạt',
    img: ['https://cokhinguyenhungdalat.com/thumbs/540x540x1/upload/product/nha-tien-che-nguyen-hung-da-lat-2981.jpg'],
    categoryId: new ObjectId('655bfbf70cf05ce4376929db')
},
]

