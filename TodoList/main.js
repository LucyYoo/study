//main 에서는 데이터를 전달
import App from "./App.js";
import { getItem } from "./storage.js";

const todoList = getItem("todos", []);

const $app = document.querySelector(".app");

new App({
  $target: $app,
  initialState: todoList,
});
