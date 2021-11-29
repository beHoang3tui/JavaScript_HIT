// Bài 3: Chuẩn hoá các chuỗi sau
// - Không có khoảng trắng thừa ở đầu và cuối
// - Giữa các từ chỉ có 1 khoảng trắng
// - Chữ đầu của các từ viết hoa
// - Không có bất kì kí tự nào là số

const case1 = "    hOang Bui   ";
// -> Hoang Bui

const case2 = " hOANG      BUI   hOang     ";

const case3 = "23traN    dUOng23     ";
function ChuanHoa(str){
  str = str.toLowerCase();
  str = str.trim();
  while (str.indexOf("  ") != -1) str = str.replaceAll("  "," ");
  for(let i in str)
    while(str.charAt(i).match(/[0-9]/g))
        str = str.replace(str.charAt(i),"");
            
  let a = str.split(" ");
  let str1 = "";
  for(let i in a){
    str1 += (a[i].charAt(0)).toUpperCase() + a[i].substring(1);
    if (i < a.length - 1)
      str1 += " ";
  }
  return str1;
}
console.log(ChuanHoa(case1));
console.log(ChuanHoa(case2));
console.log(ChuanHoa(case3));