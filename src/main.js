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