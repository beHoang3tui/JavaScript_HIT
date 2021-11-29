const users = [
  { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
  { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
  { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
  { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
];

function ShowUsers(){
  users.forEach(element => console.log(element))
}
//console.log(ShowUsers());
function AddUsers(Id, Name, Age, Gender, Money){
  users.push({id : Id, name : Name, age : Age, gender : Gender, money : Money})
}
// AddUsers(5,'Lã Huy Hoàng', 19, "male",1000);
// console.log(ShowUsers());
function DeleteUser(Id){
  for(var i in users){
    if(users[i].id == Id){
      delete users[i];
    }
  }
}
// DeleteUser(3);
// console.log(ShowUsers());
function UpdateUsers(Id){
  for(var i in users){
    if(users[i].id == Id){
      users[i].name = "Hải Dương";
      users[i].age = 19;
      users[i].gender = "male";
      users[i].money = 0;
    }
  }
}
// UpdateUsers(1);
// console.log(ShowUsers());
AddUsers(5,'Lã Huy Hoàng', 19, "male",5000);
AddUsers(6,'Nguyễn Hải Dương', 19, "bê đê",0);
function CountMale(){
  let d = 0;
  for(var i in users){
    if(users[i].gender == 'male'){
      d += 1;
    }
  }
  return d ;
}
// console.log(CountMale());
function CountAge(){
  let d = 0;
  for(var i in users){
    if(users[i].age > 15 ){
      d += 1;
    }
  }
  return d ;
}
// console.log(ShowUsers());
// console.log(CountAge());
function SumMoney(){
  let d = 0;
  for(var i in users){
    if(users[i].id %2 == 0 ){
      d += users[i].money;
    }
  }
  return d ;
}
// console.log(ShowUsers());
// console.log(SumMoney());
function RichPoor(){
  let max = users[0].money;
  let min = users[0].money;
  for(var i in users){
    if(users[i].money > max ){
      max = users[i].money;
    }
    if(users[i].money < min ){
      min = users[i].money;
    }
  }
  for(var i in users){
    if(users[i].money == max ){
      console.log("Người Giàu Nhất : ");
      console.log(users[i]);
    }
  }
  for(var i in users){
    if(users[i].money == min ){
      console.log("Người Nghèo Nhất : ");
      console.log(users[i]);
    }
  }
}
// console.log(RichPoor());
function Transgender(){
  for(var i in users){
    if(users[i].gender == 'male' ){
      users[i].gender = 'bede'
    }
  }
}
// console.log(Transgender());
// console.log(ShowUsers());