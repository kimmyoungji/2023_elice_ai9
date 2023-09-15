// todo list 함수 객체 정의하기
const TodoList = () => {
  // 할일을 담을 객체 배열
  const todoArr = [
    { title: "아침먹기", status: true },
    { title: "점심먹기", status: true },
    { title: "저녁러닝", status: false },
  ];

  // deleteTodo
  function deleteTodo(str) {
    const todo = todoArr.find((todo) => {
      if (todo.title === str) return true;
    });
    todoArr.slice(indexof(todo), 1);
  }

  // addTodo
  function addTodo(str) {
    const todo = {
      title: str,
      isDone: false,
    };
    todoArr.push(todo);
  }

  // complishTodo
  function complishTodo(str) {
    const todo = todoArr.find((todo) => {
      if (todo.title === str) {
        todo.status = true;
        return true;
      }
    });
  }

  // render
  function renderTodos() {
    console.log(todoArr);
    return todoArr.reduce((acc, cur, idx, arr) => {
      return (
        acc +
        `<li>
          <span>${cur.title}</span>
          <span>${cur.status}</span>
           <button type="button" class="completed">완료</button>
            <button type="button" class="remove">삭제</button>
          </li>`
      );
    }, "");
  }

  return { addTodo, deleteTodo, complishTodo, renderTodos };
};

// 내보내기
export default TodoList;

// console.log(TodoList().renderTodos());
