const questions = document.getElementById('questions');
console.log(questions);


var array = [['1) C++ does not supports the following', 'A) Multilevel inheritance', 'B)  Hierarchical inheritance','C) Hybrid inheritance','D) None of the above.'],
 ['2) The ______Operators sizeof and ?:', 'A) Both can be overloaded', 'B) Both cannot be overloaded', 'C) Only sizeof can be overloaded', 'D - Only ?: can be overloaded'],
 ['3) An array can be passed to the function with call by value mechanism.(True/False'],
 ['4) Compiler generates ___ file', 'A) Executable code', 'B) Object code', 'C) Assembly code', 'D) None of the above.'],
['5) Special symbol permitted with in the identifier name.', 'A) $', 'B) @', 'C) _', 'D) .'],
['6)Pick the odd one out.', 'a) array type', 'b) character type', 'c) boolean type', 'd) integer type'],
['7)What does ‘\a’ escape code represent?', 'a) alert', 'b) backslash', 'c) tab', 'd) form feed'],
['8) Identify the user-defined types from the following?' ,'a) enumeration', 'b) classes', 'c) both enumeration and classes', 'd) int'],
['9) Which operator is having the highest precedence?.', 'a) postfix', 'b) unary', 'c) shift', 'd) equality'],
['10) 10)which of the following is used to terminate the function declaration?', 'a) :', 'b) )', 'c) ;', 'd) ]'],
['11) Which is more effective while calling the functions?', 'a) call by value', 'b) call by reference', 'c) call by pointer', 'd) call by object'],
['12) How many can max number of arguments present in function in the c99 compiler?', 'a) 99', 'b) 90', 'c) 102','d) 127'],
['13) What are mandatory parts in the function declaration?', 'a) return type, function name', 'b) return type, function name, parameters', 'c) parameters, function name', 'd) parameters, variables'],
['14) Which of the following permits function overloading on c++?', 'a) type', 'b) number of arguments', 'c) type & number of arguments', 'd) number of objects'],
['15) In which of the following we cannot overload the function?', 'a) return function', 'b) caller', 'c) called function', 'd) main function'],
['16) What will happen while using pass by reference?', 'a) The values of those variables are passed to the function so that it can manipulate them', ' The location of variable in memory is passed to the function so that it can use the same memory area for its processing', 'c) The function declaration should contain ampersand (& in its type declaration)','d) The function declaration should contain $'],
['17) What should be passed in parameters when function does not require any parameters?', 'a) void', 'b) blank space', 'c) both void & blank space', 'd) tab space'],
['18) What is the meaning of the following declaration?', 'int(*p[5])();', 'a) p is pointer to function', 'b) p is array of pointer to function', 'c) p is pointer to such function which return type is the array', 'd) p is pointer to array of function'],
['19) What is size of generic pointer in C++ (in 32-bit platform)?', 'a) 2', 'b) 4', 'c) 8', 'd) 0'],
['20) The declaration of the structure is also called as?', 'a) structure creator', 'b) structure signifier', 'c) structure specifier', 'd) structure creator & signifier'],
['21) Which of the following is a properly defined structure?', 'a) struct {int a;}', 'b) struct a_struct {int a;}', 'c) struct a_struct int a;', 'd) struct a_struct {int a;};'],
['22) Which of the following accesses a variable in structure *b?', 'a) b->var;', 'b) b.var;', 'c) b-var;', 'd) b>var;'],
['23) How are many sequences of statements present in c++?', 'a) 4', 'b) 3', 'c) 5', 'd) 6'],
['24) The destination statement for the goto label is identified by what label?', 'a) $', 'b) @', 'c) *', 'd) :'],
['25) How many types of loops are there in C++?', 'a) 4', 'b) 2', 'c) 3', 'd) 1'],
['26) How many characters are specified in the ASCII scheme?', 'a) 64', 'b) 128', 'c) 256', 'd) 24'],
['27) Which of the following belongs to the set of character types?', 'a) char', 'b) wchar_t','c) only a', 'd) both wchar_t and char'],
['28) How do we represent a wide character of the form wchar_t?', 'a) L’a’', 'b) l’a’', 'c) L[a]', 'd) la'],
['29) In C++, what is the sign of character data type by default?', 'a) Signed','b) Unsigned','c) Implementation dependent','d) Unsigned Implementation'],
['30) Is the size of character literals different in C and C++?', 'a) Implementation defined' ,'b) Can’t say', 'c) Yes, they are different', 'd) No, they are not different'],
['31) When does the void pointer can be dereferenced?', 'a) when it doesn’t point to any value' ,'b) when it cast to another type of object', 'c) using delete keyword', 'd) using shift keyword'],
['32) What we can’t do on a void pointer?', 'a) pointer arithmetic', 'b) pointer functions','c) pointer objects', 'd) pointer functions & objects'],
['33)  Which of the following is the address operator', 'a) @', 'b) #', 'c) &','d) %'],
['34) Which of the following is the original creator of the C++ language?', 'a) Dennis Ritchie', 'b) Ken Thompson', 'c) Bjarne Stroustrup','d) Brian Kernighan'],
['35) The C++ language is ______ object-oriented language.','a) Pure Object oriented' ,'b) Not Object oriented' ,'c) Semi Object-oriented or Partial Object-oriented', 'd) None of the above' ],
['36) How can one implement the run-time Polymorphism in the C++ programming language?', 'a) By using the Template', 'b) By using the concepts of inheritance', 'c) By using both the virtual functions and inheritance', 'd) By using only the virtual functions'],
['37) Among the following, which shows the Multiple inheritances?', 'a) X,Y->Z', 'b) X->Y->Z','c) X->Y;X->Z','d) None of the above'],
['38) Which one of the following cannot be used with the virtual keyword?', 'a) Constructor', 'b) Destructor', 'c) Member function', 'd) None of the above'],
['39) Which of the following can be considered as the object of an array?', 'A) Index of an array', 'B) Elements of the Array' ,'C) Functions of the Array' ,'All of the above'],
['40) A member function can always access the data in __________ , ', '(A) the class of which it is member','(B) the object of which it is a member','(C) the public part of its class','(D) the private part of its class'],
['41) Which of the following cannot be passed to a function in C++ ?', '(A) Constant','(B) Structure','(C) Array','(D) Header file'],
['42) Can destuctors be private in C++?(Yes/No)'],
['43) Which is used to create a pure virtual function?','a) $', 'b) =0', 'c) &','d) !'],
['44) Which part of the try-catch block is always fully executed?', 'a) try part','b) catch part','c) finally part','d) throw part'], 
['45) What id the syntax for catching any type of exceptions?', 'a) catch(Exception e)' ,'b) catch(…)','c) catch(Exception ALL)','d) catch(ALL)'],
['46) Which is optional in the declaration of vector?', 'a) Type', 'b) Name', 'c) Vector','d) Number_of_elements']]


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