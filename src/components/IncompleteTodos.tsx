import { FC } from "react";

type TodoType = {
  todos: string[];
  onClickComplete: (index: number) => void;
  onClickDelete: (index: number) => void;
}

export const IncompleteTodos: FC<TodoType> = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div>
      <p>未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div>
              <p>{todo}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}