const $steps = document.querySelector('#steps');
const $display = document.querySelector('#display');
const $area_btn = document.querySelector('#area-btn');

const data = {
    prev : '',
    curr : '',
    operator: undefined,
    pressedResult : false

}

// 숫자 버튼을 누르는 경우
function on_num(operator, target) {
    const val = target.dataset.val;
    let prevOrcurr = operator ? 'curr' : 'prev';

    if(val === "-1") {
        data[prevOrcurr] = Number(data[prevOrcurr])*-1 ;
    } else {
        data[prevOrcurr] += val;
    } 

    $steps.innerHTML = data[prevOrcurr];

}

function on_ops(target){
    $display.classList.remove('off');
    on_result();
    const dataOp = target.dataset.val;
    data.operator = dataOp;

    if(data.prev === undefined) return;
    
    show_middleStep();
    data.curr='';
    data.pressedResult = false;

    console.log(data);
}

function on_result(){
    if(data.prev === undefined || data.curr === undefined || data.operator === undefined) return;
    data.pressedResult = true;

    show_final();
    data.prev = cal_sum();
    $display.innerHTML = data.prev;
}

function cal_sum(){
    const {prev,curr,operator} = data;
    switch(operator){
        case "+":
            return Number(prev) + Number(curr);
        case "-":
            return Number(prev) - Number(curr);
        case "*":
            return Number(prev) * Number(curr);
        case "/":
            return Number(prev) / Number(curr);
    }
}

function operator_to_String(){
    const {operator} = data;
    switch (operator){
        case "+" :
            return "+";
        case "-" :
            return "-";
        case "*" :
            return "×";
        case "/" :
            return "÷";
    }
}

function show_final(){
    const final = `${data.prev} ${operator_to_String()} ${data.curr}`;
    $display.innerHTML = `${final} = `;
}

function show_middleStep(){
    const middleSteps = `${data.prev} ${operator_to_String()}`;
    $steps.innerHTML = middleSteps;
}

function on_reset(){
    data.prev = '';
    data.curr = '';
    $display.innerHTML = '0';
    $display.classList.add('off');
    $steps.innerHTML = '0';
    data.operator = undefined;
    data.pressedResult = false;
}

$area_btn.addEventListener('click', (e) => {
    const target = e.target;
    if(target.tagName !== 'BUTTON') return;

    if(target.id === 'reset') {
        on_reset();
        return;
    } 

    if(target.className === 'num') {
        on_num(data.operator, target);
    }

    if(target.className === 'op') {
        on_ops(target);
    }

    if(target.id === 'btn_result') {
        on_result();
    }

    
});
