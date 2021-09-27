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

const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector('#to-top');

window.addEventListener("scroll", _.throttle( function(){
  console.log(window.scrollY);
 if(window.scrollY > 500) {
   //배지숨기기 
    // gsap.to(요소,지속시간,옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기
    gsap.to(toTopEl, .2, {
      x:0
    });

  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl, .2, {
      x:100
    });
  } 
},300));
//_.throttle(함수, 시간) 




toTopEl.addEventListener('click', function(){ 
    gsap.to(window, .7, {
      scrollTo: 0
    });
});



const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1)* .7,  //0.7 , 1.4, 2.1, 2.8 ...
    opacity: 1
  });
});

// new Swiper(선택자,옵션{})

new Swiper('.inner__left .swiper', { 
    direction: 'vertical',
    autoplay: true,
    loop: true
 });

new Swiper('.promotion .swiper', {
  direction: 'horizontal',
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el:'.promotion .swiper-pagination', //페이지번호요소 선택자
    type: 'bullets',
    clickable: true //페이지 번호 요소 제어 가능
  },
  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }

});

new Swiper('.awards .swiper', {
  // direction: 'horizontal'
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl:  '.awards .swiper-next'
  }
});


const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion //! 뒤에 반대가 되게 하는 것 false를 true로 바꿈
  if (isHidePromotion) {
      //true
      promotionEl.classList.add('hide');
  } else {
      //false 
      promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingobject(selector, delay, size) {
    gsap.to(
      selector, //선택자
      random(1.5, 2.5), //애니메이션의 동작시간
      { //옵션
      y: size,
      repeat: -1, //무한반복
      yoyo: true, 
      ease: Power1.easeInOut,
      delay: random(0, delay)

    }
    );
}

floatingobject('.floating1', 1, 15);
floatingobject('.floating2', .5, 15);
floatingobject('.floating3', 1.5, 20);

// ScrollMagic

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){

  new ScrollMagic
   .Scene({
     triggerElement: spyEl, //보여짐 여부를 감시할 요소를 추가
     triggerHook: .8
   })
   .setClassToggle(spyEl, 'show')
   .addTo(new ScrollMagic.Controller());

});
