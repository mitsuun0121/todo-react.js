import { FC, ChangeEvent, MouseEventHandler } from "react";

type TodoType = {
  todoText: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: MouseEventHandler;
  disabled: boolean;
}

export const InputTodo: FC<TodoType> = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div>
      <input disabled={disabled} placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button disabled={disabled} onClick={onClick}>追加</button>
    </div>
  );
};