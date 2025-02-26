'use strict';

const sectionIds = ['#home', '#about', '#skills', '#work', '#testimonial', '#contact'];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) => document.querySelector(`[href="${id}"]`));
const visibleSecitons = sectionIds.map(() => false);

const options = {};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
  let selectLastOne;
  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSecitons[index] = entry.isIntersecting;
    selectLastOne = index === sectionIds.length - 1 && entry.isIntersecting && entry.intersectionRatio >= 0.99;
  });
  console.log(visibleSecitons);
  console.log('무조건 라스트 섹션!!', selectLastOne);
  
  const navIndex = selectLastOne ? sectionIds.length - 1 : findFirstIntersecting(visibleSecitons);
  console.log(sectionIds[navIndex]);
}

function findFirstIntersecting(intersections) {
  const index = intersections.indexOf(true);
  return index >= 0 ? index : 0;
}