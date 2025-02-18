'use strict';

// 프로젝트 필터링 관련 로직 처리
let categories = document.querySelector('.categories');
let projects = document.querySelectorAll('.project');
let projectsContainer = document.querySelector('.projects')
categories.addEventListener('click', (event) => {
  let filter = event.target.dataset.category;
  if (filter == null) {
    return;
  }
  handleActiveSelection(event.target);
  filterProjects(filter);
})

function handleActiveSelection(target) {
  let active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  target.classList.add('category--selected');
}

function filterProjects(filter) {
  projects.forEach((project) => {
    if(filter === 'all' || filter === project.dataset.type) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  })
  projectsContainer.classList.add('anim-out');
  setTimeout(() => {
    projectsContainer.classList.remove('anim-out');
  }, 250)
}