import React from "react";
import { Todo } from "./model";
import SingleTodo from "./SingleTodo";
import { IonCard, IonGrid } from "@ionic/react";
import "./styles.css"
interface Props {
  todos: Todo[];
  setTodos: any
}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <IonGrid >
      {todos.map((todo) => (
        <IonCard>
          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        </IonCard>
      ))}
    </IonGrid>
  );
};

export default TodoList;
