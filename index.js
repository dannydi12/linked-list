const LinkedList = require("./LinkedList");
const {
  display,
  size,
  isEmpty,
  findPrevious,
  findLast,
} = require("./supplemental");
const {
  reverseLinkedList,
  thirdFromEnd,
  middleOfList,
  isCycleList,
  sortLinkedList,
} = require("./drills");

function main() {
  const SLL = new LinkedList();

  SLL.insertLast("Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Starbuck");

  // SLL.insertLast("Tauhida");

  // SLL.remove("Husker");

  // SLL.insertBefore("Athena", "Boomer");

  // SLL.insertAfter("Hotdog", "Helo");

  // SLL.insertAt("Kat", 2);

  // SLL.remove("Tauhida");

  // console.log(JSON.stringify(SLL));

  // Supplemental Exercises

  // console.log(isEmpty(SLL))
  // console.log(size(SLL))
  // display(SLL)
  // console.log('findPrevious: ', findPrevious(SLL, 'Kat'))
  // console.log('findLast: ', findLast(SLL))

  // reverseLinkedList(SLL)
  display(SLL);

  console.log("thirdFromEnd: ", thirdFromEnd(SLL).value);
  console.log("Middle of list: ", middleOfList(SLL).value);

  console.log('Before cycled', isCycleList(SLL))

  SLL.find("Starbuck").next = SLL.head;
  console.log('After circle list, isCycleList: ', isCycleList(SLL))
}

main();
