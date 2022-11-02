export default function TodoCount({ $target, initialState }) {
  //initialState의 총개수 가져오기
  //isCompleted인 개수 세기
  // 완료한 갯수 / 전체 갯수 표시

  const $todoCount = document.createElement("div");
  $target.appendChild($todoCount);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = initialState;
    this.render();
  };

  this.render = () => {
    console.log(initialState.length);
  };
  this.render();
}

//App.js에서 this.state 만들기
//
