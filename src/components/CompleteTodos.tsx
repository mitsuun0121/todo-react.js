import { FC } from "react";

type TodoType = {
  todos: string[];
  onClickBack: (index: number) => void;
}

export const CompleteTodos: FC<TodoType> = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div>
      <p>完了のTODO</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div>
              <p>{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}