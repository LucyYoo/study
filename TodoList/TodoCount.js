export default function TodoCount({ $target, initialState }) {
  //initialState의 총개수 가져오기
  //isCompleted인 개수 세기
  // 완료한 갯수 / 전체 갯수 표시

  const $todoCount = document.createElement("div");
  $target.appendChild($todoCount);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    let count = 0;
    this.state.forEach((todo) => {
      if (todo.isCompleted) {
        count++;
      }
    });

    $todoCount.innerHTML = `
    <h3>${count} / ${this.state.length} </h3>
    `;
  };

  this.render();
}

/**App.js에서 this.state 만들기
 *this.state에서 isCompleted 개수 세기
 *initialState로 받아서 화면에 표시하기
 */
