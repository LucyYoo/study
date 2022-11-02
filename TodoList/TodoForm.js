export default function TodoForm({ $target, onSubmit }) {
  const $form = document.createElement("form");

  $target.appendChild($form);
  let isInit = false;

  this.render = () => {
    $form.innerHTML = `
      <input type="text" name="todo" required placeholder="할 일을 입력하세요."/>
      <button>Add</button>
      `;

    if (!isInit) {
      $form.addEventListener("submit", (e) => {
        e.preventDefault();

        const $todo = $form.querySelector("input[name=todo]");
        const text = $todo.value;
        console.log({ text });
        $todo.value = "";

        onSubmit(text);

        //TodoForm 입장에서는 onSubmit이 어떻게 구현되는지 알 필요 없음.
        //데이터만 넘겨주면 되는 것.
        //그러면 실제로 onSubmit의 구현은 TodoForm 밖에 main에서 일어남.
      });

      isInit = true;
    }
  };

  this.render();
}
