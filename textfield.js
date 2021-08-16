const textfields = document.querySelectorAll('.textfield');

for(let textfield of textfields){
  textfield.addEventListener('click', focusOnTextField);
};

function focusOnTextField(){
  this.classList.toggle('focused');
  if(this.classList.contains('focused')){
    this.children[1].focus();
  };
};

const textfieldInput = document.querySelectorAll('.textfield__input');

for(let input of textfieldInput){
  input.addEventListener('blur', defocusTextField);
};

function defocusTextField(){
  this.parentElement.classList.remove('focused');
};