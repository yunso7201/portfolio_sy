'use strict';

// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
let header = document.querySelector('.header');
let headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if(window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
})

// Home 섹션을 아래로 스크롤시 투명하게 처리함
let home = document.querySelector('.home__container');
let homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
})

// arrow up버튼을 아래로 스크롤시 투명하게 처리함
let arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('arrow-up--show');
  } else {
    arrowUp.classList.remove('arrow-up--show');
  }
})

// Navbar 토글버튼 클릭 처리
let navbarMenu = document.querySelector('.header__menu');
let navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
})

//  Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
})
