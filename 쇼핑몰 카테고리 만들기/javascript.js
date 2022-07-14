'use strict';

//Fetch the items from the JSON file
function loadItems(){
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}


//Update the list with the given items
function displayItems(items){
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item =>createHTMLString(item)).join('');
}

//Create HTML list item from the given data item
function createHTMLString(item) {
    return`
    <li class="item">
            <img src="${item.image}" alt="${item.type}" class="item__thumbmail">
            <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

function onButtonClick(event, items) {
    const detaset = event.target.dataset;
    const key = detaset.key;
    const value = detaset.value;

    if(key == null || value == null) {
        return;
    }
    //왜냐하면 이벤트위임으로 각 버튼마다 이벤트를 실행하는 것이 아니라 버튼이 포함되어 있는 컨테이너에 이벤트를 부여
    //따라서 버튼이 아닌곳을 누르면 undefined이 뜬다. 이것을 없애기 위함.
    const filter = items.filter(item => item[key] === value);
    displayItems(filter);
}

    //이렇게 불러올 경우 버튼이 클릭될 때마다 새로운 컨테이너가 계속 없데이트되어야 함.
    //따라서 이런 문제를 없애기 위해 버튼을 클릭할 때마다 해당하는 데이터를 다시 보여주기 보다
    //전체적으로 리스트를 유지하면서 버튼이 클릭되었을 때 해당하는 요소만 class visible 해서 diplay 하고 
    //해당하지 않는 것은 display none 할 수 있도록 하는 방법이 있음 >직접 해보기
    
    /*
    //Handle button click
    function onButtonClick(event, items) {
        const target = event.target;
        const key = target.dataset.key;
        const value = target.dataset.value;

        if(key == null || value == null){
            return;
        }
        updateItems(items, key, value);
    }

    //Make the items matching {key: value} invisible.
    function updateItems(items, key, value) {
        items.forEach(item => {
            if(item.dataset[key] === value) {
                item.classList.remove('invisible');
            } else {
                item.classList.add('invisible');
            }
        });
    }
    */

    //console.log(event.target.dataset.key);
    //console.log(event.target.dataset.value);

//이벤트를 처리하는 함수는 on~ 으로 이름을 정하면 아 이 이벤트는 어떤 이벤트를 하는 함수이구나! 라고 알 수 있음.
function setEventListeners(items){
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.Buttons'); //이벤트 위임(찾아보기)
    logo.addEventListener('click',() => displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items));

}

//main
loadItems()
.then(items =>{
    displayItems(items);
    setEventListeners(items);
})
.catch(console.log);
