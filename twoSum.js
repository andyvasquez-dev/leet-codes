//// quick solution, need to redo for much better time complexity


var twoSum = function(nums, target) {
   const indices = []
   if(indices.length !== 2){
       nums.forEach((num, index, arr)=>{
           //innerloop,  to test
           arr.forEach((innerNum, innerIndex)=>{

               if((num + innerNum === target) &&(index!==innerIndex) &&                             indices.length<2) {

                   indices.push(index, innerIndex)
               }
           })
       })
       //end of if
   }
   return indices
};

console.log( twoSum( [3,2,4], 6 ))
console.log( twoSum( [3,3], 6 ))
