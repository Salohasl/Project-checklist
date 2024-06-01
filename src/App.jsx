import { useState } from 'react';
import style from './App.module.css';
import Modal  from './Modal';

function App() {
  const [value, setValue] = useState('');
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  function onChangeValue(event) {
    setValue(event.target.value);
  }

  function onClickButton() {
    if(value.length > 1){
      setNotes([...notes, value]);
      setValue('');
    }else{
      alert('Заполните поле')
    }
  }

  function showModalWindow(index) {
    setSelectedIndex(index);
    setIsModalOpen(true);
  }
  
  function handleDelete() {
    if (selectedIndex!== null) {
      closeClickText(selectedIndex);
      setSelectedIndex(null); // Сброс индекса после удаления
    }
  }

  function closeClickText(indexToDelete) {
    setNotes(notes.filter((_, index) => index !== indexToDelete));
    setIsModalOpen(false);
  }


  
  function closeModal() {
    setIsModalOpen(false);
  }

  const result = notes.map((note, index) => {
    return (
      <p onClick={() => showModalWindow(index)} key={index} className={style.text}>
        {(index + 1) + ')' + ' ' + note}
      </p>
    );
  });


  return (
    <div className={style.wrapper}>
      <Modal isOpen={isModalOpen} onDelete={handleDelete} onClose={closeModal}/>
      <h2 className={style.title}>WebDevMax</h2>
      <input className={style.input} placeholder={`Введите задачу`} value={value} onChange={onChangeValue} />
      <button className={style.button} onClick={onClickButton}>Добавить список дел</button>
      {result}
    </div>
  );
}

export default App;

