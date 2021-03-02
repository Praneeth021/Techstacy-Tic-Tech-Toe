const questions = document.getElementsByClassName('questions');
console.log(questions);


var arr = ['The output of the Java compiler is known as -----------------.'];

var exampleModal = document.getElementById('exampleModal')
console.log(exampleModal)
exampleModal.addEventListener('show.bs.modal', function (event) {

  console.log("hello world")
  var button = event.relatedTarget
  var recipient = button.getAttribute('data-bs-whatever')
  
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-question')

    modalTitle.textContent = 'Question' + button.innerText;
    console.log(button.innerText);
    console.log(arr[0]);
    modalBodyInput.textContent = arr[0];
    
  
})