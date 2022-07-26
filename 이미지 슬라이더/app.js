const $prev = document.querySelector('.prev');
const $next = document.querySelector('.next');
const $slide = document.querySelectorAll('.slide');
const $dots = document.querySelectorAll('.dot');
const $dot = document.querySelector('.dots');

let slideIndex = 0;

//window 로드시 실행되도록 하기
window.onload = function(){
    showSlides(slideIndex);

    let sec = 5000;
    setInterval(function(){
        slideIndex++;
        showSlides(slideIndex);
    }, sec);
}

//이전 버튼을 누르면 이전으로, 다음버튼을 누르면 다음으로 이동
function moveSlides(n){
    slideIndex = slideIndex + n
    showSlides(slideIndex);
}

$prev.addEventListener('click', () => moveSlides(-1))
$next.addEventListener('click', () => moveSlides(1))


//하단 동그라미를 누르면 해당하는 이미지로 이동
function currentSlide(e){
    const val = e.target.dataset.val
    if(val !== undefined) {
        slideIndex = +val;
        showSlides(slideIndex);
    }
}

$dot.addEventListener('click', currentSlide)


//슬라이드쇼 실행
function showSlides(n){
    let size = $slide.length;

    //슬라이드쇼의 길이보다 slideIndex가 커지면 다시 처음으로 돌아가도록
    if((n+1) > size){
        slideIndex = 0; 
        n = 0;
    } else if(n < 0) {  //slideIndex가 0보다 작아지면 마지막으로 가도록
        slideIndex = (size - 1);
        n = (size - 1);
    }
    
    //슬라이드쇼를 전부 안보이게 한다.
    for(let i=0; i<size; i++){
        $slide[i].style.display = 'none';
    }

    //하단 동그라미 부분을 모두 진하게 표시되지 않도록 한다.
    for(let i=0; i<$dots.length; i++){
        $dots[i].className = $dots[i].className.replace("active", "");
    }

    //해당하는 슬라이드만 보이도록 한다.
    $slide[n].style.display = "block";

    //해당하는 동그라미만 진하게 표시되도록 한다.
    $dots[n].classList.toggle("active");
}

