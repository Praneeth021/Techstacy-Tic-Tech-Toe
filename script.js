const questions = document.getElementById('questions');
console.log(questions);


var array = ['The output of the Java compiler is known as -----------------.', 'hello','World'];


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
console.log(exampleModal)
exampleModal.addEventListener('show.bs.modal', function (event) {

  var button = event.relatedTarget;
  
  var modalTitle = exampleModal.querySelector('.modal-title');
  var modalBodyInput = exampleModal.querySelector('.modal-question');

  modalTitle.textContent = 'Question ' + button.innerText;
  var index = parseInt(button.innerText);
  modalBodyInput.textContent = array[index-1];
    
  
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