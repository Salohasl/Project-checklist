import style from './Modal.module.css';

function Modal({ isOpen, onDelete ,onClose }) {
    function clickCloseModal() {
        onClose(); // Вызов функции для закрытия модального окна
    }
    
    return (
        isOpen && // Условное отображение модального окна
        <div className={style.modal}>
            <div className={style.modalBlock}>
                <p>Вы уверены?</p>
                <div>
                    <button onClick={onDelete}>Да</button>
                    <button onClick={clickCloseModal}>Нет</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;