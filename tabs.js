const tabs = document.querySelectorAll('.tab');

for(let tab of tabs){
  tab.addEventListener('click', setTabActive);
};

function setTabActive(){
  for(let tab of tabs){
    tab.classList.remove('active');
  };
  this.classList.add('active');
};