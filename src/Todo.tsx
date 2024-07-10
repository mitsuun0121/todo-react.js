import { useState } from 'react';
import './App.css';

export const Todo = () => {
  const [incompleteTodos, setincompleteTodos] = useState(["TODOです1", "TODOです2"]);
  const [completeTodos, setCompleteTodos] = useState(["TODOでした1", "TODOでした2"]);
  return (
    <>
    <div>
      <input placeholder="TODOを入力" />
      <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => (
            <li key={todo}>
              <div>
                <p>{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => (
            <li key={todo}>
              <div>
                <p>{todo}</p>
                <button>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
  

