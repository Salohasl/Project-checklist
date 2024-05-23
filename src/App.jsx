import { useState } from 'react'
import style from './App.module.css'

function App() {
  const [value, setValue] = useState('');
  const [notes, setNotes] = useState([]);

  function onChangeValue(event){
    setValue(event.target.value);
  }

  const result = notes.map((note, index)=>{
    return <input key={index} class={style.input} value={value} onChange={onChangeValue}/>
  })

  function onClickButton(){
    setNotes([...notes, value]);
    setValue('');
  }
  
  return (
    <div class={style.wrapper}>
      <h2 class={style.title}>WebDevMax</h2>
      <button class={style.button} onClick={onClickButton}>Добавить список дел</button>
      {result}
    </div>
  )
}

export default App
