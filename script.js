const questions = document.getElementById('questions');
console.log(questions);


var array = [['1) The output of the Java compiler is known as _________.'],
 ['2) The _______ statement is used to include another Java package in a Java source file.'],
 ['3) A subclass can call a constructor method defined by its super class by use of the _______ keyword.'],
 ['4)In Java, the AWT classes are contained  in the_______ package'],
['5) __________ command is used as the Java interpreter.'],
['6)It is possible to throw an exception explicitly using the ______ statement.'],
['7)The _______ package provides classes for networking in Java.'],
[' 8)The output of the Java compiler is executed by the _______'],
['9) _____________ is the java compiler.'],
['10) Java uses ______________ to represent characters.'],
['11) ____________Qualifier declares a class variable that is to be shared among all instances.'],
['12)___________ is a reference to the current object on which the method was invoked.'],
['13) ________ refers to the standard input.'],
['14) In java, all user interface elements are subclasses of _________'],
['15) The mechanism of binding data with the code that manipulates it is known as __________'],
['16) A method declared with _______ cannot be overridden.'],
['17)Java byte code output from the JDK compiler will be placed into a file with ______ extension.'],
['18) The user interface classes such as Button, Checkbox and Label are subclasses of _________ class.'],
['19) A ________ is a collection of classes and interfaces.'],
['20) An ----------------- is an object that is generated when a run time error occurs.'],
['21) ----------_ specifies location to search for JDK tools and classes.'],
['22)Java compiler produces an object file that contains ----------_.'],
['23) -------------------_ is not supported by java.','a) Multiple inheritance', 'b) Multi level inheritance', 'c) Hierarchical','d) None'],
['24) ----------------- declares a class variable that is to be shared among all instances.'],
['25) Methods defined in an interface must be -------------------.', 'a) Public', 'b)Static', 'c)Public and Static', 'd) Public and abstract'],
['26) What is the output of the following code',  'String s1 = new String("Tic Tech Toe");', 'String s2 = new String("Tic Tech Toe");', 'if (s1 == s2) ', '{', 'System.out.println("Equal");', '}', 'else', '{', 'System.out.println("Not equal");', '}', 'a) Equal', 'b) Not equal', 'c) Compile Error', 'd) None'],
['27) Java supports Pass by value mechanism ( True/False)'],
['28) Static methods in Java can be overloaded (True/False)'],
['29) Static methods in Java can be overridden (True/False)'],
['30) Will the finally block be executed if the try or catch blocks contains a return statement?'],
['31) _____ is used to find and fix bugs in the Java programs.', 'a) JVM', 'b) JRE', 'c) JDK', 'd) JDB'],
['32) The fields in an interface are implicitly specified as,', '(a) static only ', '(b) protected ', '(c) private', 'd) both static and final', '(e) none of the above.'],
['33) Which package contains the Random class?', 'a) java.util package', 'b)  java.lang package', 'c) java.awt package', 'd) java.io package'],
['34) Which of the following is not true?', '(a) An interface can extend another interface.', '(b) A class which is implementing an interface must implement all the methods of the interface.', '(c) An interface can implement another interface.', '(d) An interface is a solution for multiple inheritance in java.'],
['35) Among these expressions, which is(are) of type String?', '(a) “0” ',  ' (b) “ab” + “cd”', '(c) ‘0’ ', '(d) Both (A) and (B) above ', '(e) (A), (B) and (C) above.' ],
['36) A constructor',  '(a) Must have the same name as the class it is declared within.', '(b) Is used to create objects.', '(c) May be declared private', '(d) Both (A) and (B) above', '(e) (a), (b) and (c) above. '],
['37) The java run time system automatically calls this method while garbage collection.', '(a) finalizer() ', '(b) finalize()', '(c) finally()', '(d) finalized()'],
['38) All exception types are subclasses of the built-in class', '(a) Exception ', '(b) RuntimeException ', '(c) Error', '(d) Throwable'],
['39) When an overridden method is called from within a subclass, it will always refer to the version of that method defined by the', '(a) Super class', '(b) Subclass ', '(c) Compiler will choose randomly', '(c) Compiler will choose randomly'],
['40) How many threads can be executed at a time?', 'a) Only one thread', 'b) Multiple threads', 'c) Only main (main() method) thread', 'd)Two threads'],
['41) Identify, from among the following, the incorrect variable name(s).', '(a) _theButton', '(b) $reallyBigNumber', '(c) 2ndName', '(d) CurrentWeatherStateofplanet', '(e) my2ndFont.'],
['42) Re-implementing an inherited method in a sub class to perform a different task from the parent class is called', '(a) Binding' ,'(b) Transferring' ,'(c) Hiding', '(d) Coupling', '(e) extending.'],
['43) Which of the following statements about Java Threads is correct?', '(a) Java threads don’t allow parts of a program to be executed in parallel', '(b) Java is a single-threaded language',
'(c) Java’s garbage collector runs as a high priority thread',
'(d) Ready, running and sleeping are three states that a thread can be in during its life cycle', 
'(e) Every java application is not multithreaded.'],
['44) Which of these is an incorrect statement?', 'a) String objects are immutable, they cannot be changed', 'b) String object can point to some other reference of String variable', 'c) StringBuffer class is used to store string in a buffer for later use', 'd) None of the mentioned'], 
['45) All classes in Java are inherited from which class?', 'a) java.lang.class', 'b) java.class.inherited', 'c) java.class.object', 'd) java.lang.Object'],
['46) What would be the result if a class extends two interfaces and both have a method with same name and signature? Lets assume that the class is not implementing that method.', 'a) Runtime error', 'b) Compile time error', 'c) Code runs successfully', 'd) First called method is executed successfully'],
['47) Which of the following variable declaration would NOT compile in a java program?', '(a) int var;', '(b) int VAR;', '(c) int var1;','(d) int var_1;' ,'(e) int 1_var;.'],
['48)  In object-oriented programming, new classes can be defined by extending existing classes. This is an example of:', '(a) Encapsulation', ' (b) Interface', '(c)Composition ', '(d) Inheritance']]


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