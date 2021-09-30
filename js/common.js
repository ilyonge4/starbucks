const searchEl = document.querySelector('.search');
const searchInpuyEl = searchEl.querySelector('input');


searchEl.addEventListener('click' , function(){
    searchInpuyEl.focus();
});

searchInpuyEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInpuyEl.setAttribute('placeholder','통합검색'); //attribute html요소를 부르는 이름
});

searchInpuyEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInpuyEl.setAttribute('placeholder',''); 
});