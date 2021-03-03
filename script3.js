const questions = document.getElementById('questions');
console.log(questions);


var array = [['1) How do you initialize an array in C?','a) int arr[3] = (1,2,3);','b) int arr(3) = {1,2,3};','c) int arr[3] = {1,2,3};','d) int arr(3) = (1,2,3);'],
 ['2) Which of the following concepts make extensive use of arrays?','a) Binary trees','b) Scheduling of processes','c) Caching','d) Spatial locality'],
 ['3) When does the ArrayIndexOutOfBoundsException occur?','a) Compile-time','b) Run-time','c) Not an error','d) Not an exception at all'],
 ['4) Assuming int is of 4bytes, what is the size of int arr[15];?','a) 15','b) 19','c) 11','d) 60'],
['5) Elements in an array are accessed _____________','a) randomly','b) sequentially','c) exponentially','d) logarithmically'],
['6) Pushing an element into stack already having five elements and stack size of 5, then stack becomes ___________','a) Overflow','b) Crash','c) Underflow','d) User flow'],
['7) Which of the following is not the application of stack?','a) A parentheses balancing program','b) Tracking of local variables at run time','c) Compiler Syntax Analyzer','d) Data Transfer between two asynchronous process'],
['8) What data structure would you mostly likely see in non recursive implementation of a recursive algorithm?','a) Linked List','b) Stack','c) Queue','d) Tree'],
['9) The data structure required for Breadth First Traversal on a graph is?','a) Stack','b) Array','c) Queue','d) Tree'],
['10) Circular Queue is also known as ________','a) Ring Buffer','b) Square Buffer','c) Rectangle Buffer','d) Curve Buffer'],
['11) A data structure in which elements can be inserted or deleted at/from both ends but not in the middle is?','a) Queue','b) Circular queue','c) Dequeue','d) Priority queue'],
['12) In linked list each node contains a minimum of two fields. One field is data field to store the data second field is?','a) Pointer to character','b) Pointer to integer','c) Pointer to node','d) Node'],
['13) What would be the asymptotic time complexity to insert an element at the front of the linked list (head is known)?','a) O(1)','b) O(n)','c) O(n2)','d) O(n3)'],
['14) Linked lists are not suitable for the implementation of ___________','a) Insertion sort','b) Radix sort','c) Polynomial manipulation','d) Binary search'],
['15) In the worst case, the number of comparisons needed to search a singly linked list of length n for a given element is?','a) log 2 n','b) n⁄2','c) log 2 n – 1','d) n'],
['16) Which of the following application makes use of a circular linked list?','a) Undo operation in a text editor','b) Recursive function calls','c) Allocating CPU to resources','d) Implement Hash Tables'],
['17) What is the time complexity of pop() operation when the stack is implemented using an array?','a) O(1)','b) O(n)','c) O(logn)','d) O(nlogn)'],
['18) Minimum number of queues to implement stack is ___________','a) 3','b) 4','c) 1','d) 2'],
['19) With what data structure can a priority queue be implemented?','a) Array','b) List','c) Heap','d) Tree'],
['20) Which of the following is not an application of priority queue?','a) Huffman codes','b) Interrupt handling in operating system','c) Undo operation in text editors','d) Bayesian spam filter'],
['21) What is the time complexity to insert a node based on key in a priority queue?','a) O(nlogn)','b) O(logn)','c) O(n)','d) O(n2)'],
['22) Which of the following is not an advantage of a priority queue?','a) Easy to implement','b) Processes with different priority can be efficiently handled','c) Applications with differing requirements','d) Easy to delete elements in any case'],
['23) The optimal data structure used to solve Tower of Hanoi is _________','a) Tree','b) Heap','c) Priority queue','d) Stack'],
['24) What is the number of moves required to solve Tower of Hanoi problem for k disks?','a) 2k – 1','b) 2k + 1','c) 2^k + 1','d) 2^k – 1'],
['25) Which of the following bitwise operations will you use to set a particular bit to 1?','a) OR','b) AND','c) XOR','d) NOR'],
['26) Which of the following bitwise operator will you use to invert all the bits in a bit array?','a) OR','b) NOT','c) XOR','d) NAND'],
['27) The number of items used by the dynamic array contents is its __________','a) Physical size','b) Capacity','c) Logical size','d) Random size'],
['28) Which of the following is not the properties of XOR lists?','a) X⊕X = 0','b) X⊕0 = X','c) (X⊕Y)⊕Z = X⊕(Y⊕Z)','d) X⊕0 = 1'],
['29) What must be the ideal size of array if the height of tree is ‘l’?','a) 2^l-1','b) l-1','c) l','d) 2l'],
['30) Which of the following traversing algorithm is not used to traverse in a tree?','a) Post order','b) Pre order','c) Post order','d) Randomized'],
['31) Level order traversal of a tree is formed with the help of','a) breadth first search','b) depth first search','c) dijkstra’s algorithm','d) prims algorithm'],
['32) What will be the height of a balanced full binary tree with 8 leaves?','a) 8','b) 5','c) 6','d) 4'],
['33) In a max-heap, element with the greatest key is always in the which node?','a) Leaf node','b) First node of left sub tree','c) root node','d) First node of right sub tree'],
['34) Heap can be used as ________________','a) Priority queue','b) Stack','c) A decreasing order array','d) Normal Array'],
['35) If several elements are competing for the same bucket in the hash table, what is it called?','a) Diffusion','b) Replication','c) Collision','d) Duplication'],
['36) What is the number of edges present in a complete graph having n vertices?','a) (n*(n+1))/2','b) (n*(n-1))/2','c) n','d) Information given is insufficient'],
['37) In a simple graph, the number of edges is equal to twice the sum of the degrees of the vertices.','a) True','b) False'],
['38) A graph with all vertices having equal degree is known as a __________','a) Multi Graph','b) Regular Graph','c) Simple Graph','d) Complete Graph'],
['39) Which of the following that determines the need for the Circular Queue?','a) Avoid wastage of memory','b) Access the Queue using priority','c) Follows the FIFO principle','d) None of the above'],
['40) Minimum number of queues required for priority queue implementation?','A - 5','B - 4','C - 3','D – 2'],
['41) Which of the following is not possible with an array in C programming langauge −','A - Declaration','B - Definition','C - Dynamic Allocation','D - Array of strings'],
['42) Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?','(A) Insertion Sort','(B) Quick Sort','(C) Heap Sort','(D) Merge Sort'],
['43) In the worst case, the number of comparisons needed to search a singly linked list of length n for a given element is','(A) log 2 n','(B) n/2','(C) log 2 n – 1','(D) n'],
['44) The maximum number of binary trees that can be formed with three unlabeled nodes is:','(A) 1','(B) 5','(C) 4','(D) 3'], 
['45) Which of the following operations is not O(1) for an array of sorted data. You may assume that array elements are distinct.','(A) Find the ith largest element','(B) Delete an element','(C) Find the ith smallest element','(D) All of the above'],
['46) Which one of the following is not the type of the Queue?','a) Linear Queue','b) Circular Queue','c) Double ended Queue','d) Single ended Queue'],
['47) How many distinct binary search trees can be created out of 4 distinct keys?','(A) 4','(B) 14','(C) 24','(D) 42'],
['48) In linked list implementation of a queue, where does a new element be inserted?','a) At the head of link list','b) At the centre position in the link list','c) At the tail of the link list','d) At any position in the linked list'],
['49) An error is reported when the stack is not empty at the end.','a) True','b) False'],
['50) Which is the most appropriate data structure for reversing a word?','a) queue','b) stack','c) tree','d) graph']]


function AddQuestion() {
  
  var question = '';

  for (let i = 0; i < array.length; i++){
    question+=`<div class="col-lg-1 col-sm-1 col-md-1 m-2">
    <button type="button" class="btn btn-primary questionNo" data-bs-toggle="modal" data-bs-target="#exampleModal" >${i+1}</button>
  </div>`
  }
  questions.innerHTML = question;
}

var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {

  var button = event.relatedTarget;
  
  
  var modalTitle = exampleModal.querySelector('.modal-title');
  var modalBodyInput = exampleModal.querySelector('.modal-question');

  modalTitle.textContent = 'Question ' + button.innerText;
  var index = parseInt(button.innerText);
  var textContent = "";
  
  for (let i = 0; i < array[index - 1].length; i++){
    textContent+=`<br>${array[index-1][i]}`
  }

  modalBodyInput.innerHTML = textContent;

  
})





var shuffler = document.getElementById('shuffle');

shuffler.addEventListener('click', () => {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
})
AddQuestion();