import React from "react";
import {
  IonApp,
  IonTitle,
  setupIonicReact,
  IonHeader,
  IonContent,
  IonItem,
  IonToolbar,
} from "@ionic/react";
import "./components/styles.css"
import {BsPen } from "react-icons/bs"
import InputField from "./components/InputField";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "./components/variables.css";

setupIonicReact();
const App: React.FC = () => {
  /* type is functional component */
  const [todo, setTodo] = React.useState<string>("");
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <IonApp >
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle size="large" color="light">     
          <BsPen className="icon"/>  Taskify
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="container">
        <IonItem >
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        </IonItem>

        <TodoList todos={todos} setTodos={setTodos} />
      </IonContent>
    </IonApp>
  );
};
export default App;
