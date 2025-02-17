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