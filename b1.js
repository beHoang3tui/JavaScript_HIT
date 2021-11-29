const nums = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];
const nums1 = [1, 1, 1, 10, 23, 2, 26, 26];
const nums2 = [1000, 2000, 1000, 2000, 10000, 22222];
function Count(arr) {
  const a = [], b = [];
  let prev;

  arr.sort();
  for ( var i = 0; i < arr.length; i++ ) {
      if ( arr[i] !== prev ) {
          a.push(arr[i]);
          b.push(1);
      } else {
          b[b.length-1]++;
      }
      prev = arr[i];
  }
  for(var i =0; i<a.length; i++ ){
    console.log('Số '+ a[i] + ' xuất hiện ' +b[i]+ ' lần');
  }
  
}
console.log(Count(nums));
console.log(Count(nums1));
console.log(Count(nums2));