// Bài 4
//- Lấy ra chính xác tất cả gmail trong đoạn text sau
// Yêu cầu dùng regex

const textEmail = "mynamebvh@gmail.comdfklgjfdkjgkfdjgkldtranduong@gmail.com";

let result = textEmail.match(/[a-z0-9](\.?[a-z0-9]){8}@g(oogle)?mail\.com/g);
console.log(result);
// - Lấy ra tất cả sdt trong đoạn text sau
// - Yêu cầu dùng regex
const textPhone = "dfkdsklfjlksdjfklsd0979150921dfjhdsjfhds0979120734";
let phone = textPhone.match(/[0-9]{10}/g)
console.log(phone);