import { useState } from 'react'
import style from './App.module.css'

function App() {
  const [value, setValue] = useState('');
  
  function onChangeValue(event){
    setValue(event.target.value);
  }
  
  

  return (
    <div class={style.wrapper}>
      <h2 class={style.title}>WebDevMax</h2>
      <button>Добавить список дел</button>
      <input class={style.input} value={value} onChange={onChangeValue}/>
    </div>
  )
}

export default App
