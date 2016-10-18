const givenArray = [1,2,3,4,5,6,7];
const reverse = function(arr)
{
  const reversedArray = [];
  for (let i=arr.length-1; i>=0; i=i-1)
    reversedArray.push(arr[i]);
  return reversedArray;
}
console.log(reverse(givenArray));