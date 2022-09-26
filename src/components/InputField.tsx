import React, { useRef } from 'react'
import "./styles.css"
import {IonButton, IonInput} from "@ionic/react"

interface Props{
    todo:string;
    setTodo:any;
    handleAdd:(e:React.FormEvent)=>void
}
const InputField:React.FC<Props> = ({todo,setTodo,handleAdd}) => {
  
    return (
    <form onSubmit={(e)=>{handleAdd(e)}} className="input">
        <IonInput ref={useRef<HTMLIonInputElement>(null)} type="text" value={todo} onIonChange={(e)=>setTodo(e.target.value)} placeholder="enter your task" className='input__box'>
          </IonInput>
    <IonButton size="default" color="success" type="submit">GO</IonButton>
    </form>
  )
}

export default InputField