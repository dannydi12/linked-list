const LinkedList = require('./LinkedList');
const { display,
  size,
  isEmpty,
  findPrevious,
  findLast } = require('./supplemental');
const { reverseLinkedList } = require('./drills')

function main() {
  const SLL = new LinkedList();

  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');

  SLL.insertLast('Tauhida');

  SLL.remove('Husker');

  SLL.insertBefore('Athena', 'Boomer');

  SLL.insertAfter('Hotdog', 'Helo');

  SLL.insertAt('Kat', 2);

  SLL.remove('Tauhida');

  // console.log(JSON.stringify(SLL));

  // Supplemental Exercises

  console.log(isEmpty(SLL))
  console.log(size(SLL))
  // display(SLL)
  console.log('findPrevious: ', findPrevious(SLL, 'Kat'))
  console.log('findLast: ', findLast(SLL))

  reverseLinkedList(SLL)
  display(SLL)
}

main();