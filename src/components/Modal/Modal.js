import useModal from './useModal';
import styles from './Modal.module.css';

const Modal = ({ modalMessage, modalAction }) => {

  const {
    mhandleModalDismiss,
    handleModalAction,
    isModalShowing,
  } = useModal();

  if (!isModalShowing)
    return <></>

  return (
    <section className={styles.modal}>
      <p className={styles.modal__message}>{modalMessage}</p>
      <section className={styles.modal__buttons}>
        <button className={styles.modal__button} onClick={mhandleModalDismiss}>Cancelar</button>
        <button className={styles.modal__button} onClick={() => handleModalAction(modalAction)}>Aceptar</button>
      </section>
    </section>
  )
}

export default Modal