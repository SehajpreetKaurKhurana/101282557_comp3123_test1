//Sehajpreet Kaur Khurana , 101282557 , Question1

function lowerCaseWords(arr){
    return new Promise(function(resolve,reject){ 

     if(!arr || arr.length === 0 || !Array.isArray(arr)){
         reject("Invalid Array")
     }
     else{
         resolve(
            arr.filter(e => typeof e === 'string' && e !== '').map((word) => word.toLowerCase())
         )
     }



    });
}
const mixedArray=['PIZZA', 10, true, 25, false,'Wings'];
lowerCaseWords(mixedArray)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));




  