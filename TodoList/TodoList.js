export default function TodoList({
  $target,
  initialState,
  onToggle,
  onRemove,
}) {
  const $todoList = document.createElement("div");
  $target.appendChild($todoList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render = () => {
    console.log(this.state);
    if (this.state.length === 0) {
      $todoList.innerHTML = `Todo가 없습니다.`;
      return;
    }

    $todoList.innerHTML = `
        <ul>
        ${this.state
          .map(
            ({ id, content, isCompleted }) => `
        <li data-id=${id} class='todo-item'>
        ${isCompleted ? `<s>${content}</s>` : content}
        <button class="remove"> x </button>
        </li>`
          )
          .join("")}
        </ul>
        `;
  };

  $todoList.addEventListener("click", (e) => {
    const $li = e.target.closest(".todo-item");
    if ($li) {
      const { id } = $li.dataset;
      const { className } = e.target;

      if (className === "remove") {
        onRemove(e, id);
      } else {
        onToggle(id);
      }
    }
  });

  this.render();
}
