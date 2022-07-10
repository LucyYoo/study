const moreBtn = document.querySelector('.infoandnext .metadata .info .title .tittleandbtn .angle');
const title = document.querySelector('.infoandnext .metadata .info .title .tittleandbtn .text');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});

const toggleBtn = document.querySelector('.search .menulist');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click',() => {
    menu.classList.toggle('active');
});
