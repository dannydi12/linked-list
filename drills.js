/* Mystery program
 * Analyze the following function (without running it in an IDE) to determine what problem it is 
 * trying to solve. What is the time complexity of this algorithm?
 * It is deleting duplicate data from a linked list. It has an Exponential Complexity O(n^2).
*/

// function WhatDoesThisProgramDo(lst) {
//     let current = lst.head;
//     while (current !== null) {
//         let newNode = current;
//         while (newNode.next !== null) {
//             if (newNode.next.value === current.value) {
//                 newNode.next = newNode.next.next;
//             }
//             else {
//                 newNode = newNode.next;
//             }
//         }
//         current = current.next;
//     }
// }

/*
 * Reverse a list
 * Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear 
 * (O(n)). For this exercise, notice we are not asking you just to print the linked list in reverse or 
 * use another linked list to store the value in reverse order. Your program should reverse the direction 
 * of a given singly linked list. In other words, all pointers should point backward. 
 * BONUS: Solve this problem using both recursive and iterative algorithms.
*/

function reverseLinkedList(list) {
  if (list.head === null) {
    return 'Empty list';
  }
  if (list.head.next === null) {
    return list;
  }
  let currentNode = list.head;
  let previousNodeNext = null;
  let previousNode;
  while (currentNode.next !== null) {
    previousNode = currentNode;
    currentNode = currentNode.next;
    previousNode.next = previousNodeNext;
    previousNodeNext = previousNode;
  }
  list.head = currentNode;
  list.head.next = previousNode;
  return list;
}

/*
 * 3rd from the end
 * Write an algorithm to find the 3rd element from the end of a linked list. Note You may be tempted to 
 * add a length property to your linked list class. The length property is not a typical property of 
 * linked list, therefore don't make any modification to the linked list class that is provided to you.
*/

function thirdFromEnd(list) {

}

/*
 * Middle of a list
 * Write an algorithm to find the middle element of a linked list. Note You may be tempted to add a 
 * length property to your linked list class. The length property is not a typical property of linked 
 * list, therefore don't make any modification to the linked list class that is provided to you. Also, 
 * finding the size of the linked list using the size() function and dividing it by half will not find 
 * the correct middle of the linked list. So, don't use either of these approaches.
*/

function middleOfList(list) {

}

/*
 * Cycle in a list
 * Write an algorithm to find whether a linked list has a cycle (i.e., whether a node in the list has its 
 * next value pointing to an earlier node in the list). For this exercise, create a linked list with the 
 * name CycleList. Be sure to insert nodes in the list so that it has a cycle. Then test your program with 
 * a cycleList function.
*/

function cycleList(list) {

}

/*
 * Sorting a list
 * Write an algorithm that will sort a given linked list. For example given a list such as 3->2->5->7->1, 
 * your program will output the sorted version of this list which will be 1->2->3->5->7. You may not 
 * use another list or any other data structure such as an array to store the data.
*/

function sortLinkedList(list) {

}


module.exports = {
  reverseLinkedList,
  thirdFromEnd,
  middleOfList,
  cycleList,
  sortLinkedList
};