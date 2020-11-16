
 // Definition for singly-linked list.
  // function ListNode(val, next) {
  //     this.val = (val===undefined ? 0 : val)
  //     this.next = (next===undefined ? null : next)
  // }
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */


const  addTwoNumbers = (l1, l2) => {
    
   let ans = new ListNode(0) // initializing it as zero
   let p1 = l1;
   let p2 = l2;
   let currentPointer = ans
   let carry = 0;
       
   while(p1 || p2){
       // if theres a val, if not it will be 0, to handle lists of diff sizes
       let x = (p1!== null) ? p1.val : 0;
       let y = (p2 !== null) ? p2.val : 0;
       let sum = x + y +carry // plus previous carry
       
       // leaves num in the hundreth place, if it exist it will be carryed over in the next iteration
       carry = Math.floor(sum / 10) 
       currentPointer.next = new ListNode(sum % 10); // val in tenth place
       currentPointer = currentPointer.next  // for the next loop
       
       //if the node currently isnt null, set it to the next node
       if(p1){
           p1 = p1.next
       }
       if(p2){
           p2 = p2.next
       }
   }
   if(carry > 0){
       currentPointer.next = new ListNode(1)
   }
   
   return ans.next; // exclude the 0 that it was initialized with
};