const questions = document.getElementById('questions');
console.log(questions);


var array = [['1) The format identifier ‘%i’ is also used for _____ data type.','a) char','b) int','c) float','d) double'],
 ['2) Which data type is most suitable for storing a number 65000 in a 32-bit system?','a) signed short','b) unsigned short','c) long','d) int'],
 ['3)  What is short int in C programming?','a) The basic data type of C','b) Qualifier','c) Short is the qualifier and int is the basic data type','d) All of the mentioned'],
 ['4) Which of the following declaration is not supported by C?','a) String str;','b) char *str;','c) float str = 3e2;','d) Both String str; & float str = 3e2; '],
['5) What is the precedence of arithmetic operators (from highest to lowest)?','a) %, *, /, +, –','b) %, +, /, *, –','c)  +, -, %, *, /','d) %, +, -, *, /'],
['6) Which of the following is not an arithmetic operation?','a) a * = 10;','b) a / = 10;','c) a ! = 10;','d) a % = 10;'],
['7) Which among the following are the fundamental arithmetic operators, i.e, performing the desired operation can be done using that operator only?','a) +, –','b)+, -, %','c) +, -, *, /','d)+, -, *, /, %'],
['8) Are logical operator sequence points?','a) True','b) False','c) Depends on the compiler','d) Depends on the standard'],
['9) What is the result of logical or relational expression in C?','a) True or False','b) 0 or 1','c) 0 if an expression is false and any positive number if an expression is true','d) None of the mentioned'],
['10) Which among the following is NOT a logical or relational operator?','a)!=','b) ==','c) ||','d) ='],
['11) Relational operators cannot be used on ____________','a) structure','b) long','c) strings','d) float'],
['12) function tolower(c) defined in library <ctype.h> works for ___________','a) Ascii character set','b) Unicode character set','c) Ascii and utf-8 but not EBCDIC character set','d) Any character set'],
['13) Which type of conversion is NOT accepted?','a) From char to int','b) From float to char pointer','c) From negative int to char','d)From double to char'],
['14) Which of the following type-casting have chances for wrap around?','a) From int to float','b) From int to char','c) From char to short','d) From char to int'],
['15) When do you need to use type-conversions?','a) The value to be stored is beyond the max limit','b) The value to be stored is in a form not supported by that data type','c) To reduce the memory in use, relevant to the value','d) All of the mentioned'],
['16) For which of the following, “PI++;” code will fail?','a) #define PI 3.14','b) char *PI = “A”;','c) float PI = 3.14;','d)none of the Mentioned'],
['17) What is the type of the following assignment expression if x is of type float and y is of type int?','y = x + y;','a) int','b) float','c) there is no type for an assignment expression','d) double'],
['18) What will be the final value of c in the following C statement? (Initial value: c = 2)','c <<= 1;','a) c = 1;','b) c = 2;','c) c = 3;','d) c = 4;'],
['19) Which of the following is an invalid assignment operator?','a) a %= 10;','b) a /= 10;','c) a |= 10;','d) a =& 10;'],
['20) What will be the data type of the following expression? (Initial data type: a = int, var1 = double, var2 = float)','expression (a < 50)? var1 : var2;','a) int','b) float','c) double','d) Cannot be determined'],
['21) In expression i = g() + f(), first function called depends on __________','a) Compiler','b) Associativiy of () operator','c) Precedence of () and + operator','d) Left to write of the expression'],
['22) What is the return-type of the function sqrt()?','a) int','b) float','c) double','d) depends on the data type of the parameter'],
['23) Functions in C are always _________','a) Internal','b) External','c) Both Internal and External','d) External and Internal are not valid terms for functions'],
['24) What is the scope of an external variable?','a) Whole source file in which it is defined','b) From the point of declaration to the end of the file in which it is defined','c) Any source file in a program','d) From the point of declaration to the end of the file being compiled'],
['25) Which of following is not accepted in C?','a) static a = 10; ','b) static int func (int);','c) static static int a;','d) all of the mentioned'],
['26) Functions have static qualifier for its declaration by default.','a) True','b) False','c) Depends on the compiler','d) Depends on the standard'],
['27) Is initialisation mandatory for local static variables?','a) Yes','b) No','c) Depends on the compiler','d) Depends on the standard'],
['28) Which data type can be stored in register?','a) int','b) long','c) float','d) all of the mentioned'],
['29) Which among the following is the correct syntax to declare a static variable register?','a) static register a;','b) register static a;','c) Both static register a; and register static a;','d) We cannot use static and register together'],
['30) Register variables reside in ________','a) stack','b) registers','c) heap','d) main memory'],
['31) Which of the following is a storage specifier?','a) enum','b) union','c) auto','d) volatile'],
['32) An array of similar data types which themselves are a collection of dissimilar data type are','a) Linked Lists','b) Trees','c) Array of Structure','d) All of the mentioned'],
['33) Which operator connects the structure name to its member name?','a) –','b) <-','c) .','d) Both <- and .'],
['34) Which function will you choose to join two words?','a) strcpy()','b) strcat()','c) strncon()','d) memcon()'],
['35) What will strcmp() function do?','a) compares the first n characters of the object','b) compares the string','c) undefined function','d) copies the string']]

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