const $prev = document.querySelector('.prev');
const $next = document.querySelector('.next');
const $slide = document.querySelectorAll('.slide');
const $dots = document.querySelectorAll('.dot');
const $dot = document.querySelector('.dots');

let slideIndex = 0;

window.onload = function(){
    showSlides(slideIndex);

    let sec = 5000;
    setInterval(function(){
        slideIndex++;
        showSlides(slideIndex);
    }, sec);
}

$prev.addEventListener('click', () => moveSlides(-1))
$next.addEventListener('click', () => moveSlides(1))

function moveSlides(n){
    slideIndex = slideIndex + n
    showSlides(slideIndex);
}

$dot.addEventListener('click', currentSlide)

function currentSlide(e){
    const val = e.target.dataset.val
    if(val !== undefined) {
        slideIndex = +val;
        showSlides(slideIndex);
    }
}

function showSlides(n){
    let size = $slide.length;

    if((n+1) > size){
        slideIndex = 0; n = 0;
    } else if(n < 0) {
        slideIndex = (size - 1);
        n = (size - 1);
    }
    
    for(let i=0; i<size; i++){
        $slide[i].style.display = 'none';
    }

    for(let i=0; i<$dots.length; i++){
        $dots[i].className = $dots[i].className.replace("active", "");
    }

    $slide[n].style.display = "block";
    $dots[n].classList.toggle("active");
}

