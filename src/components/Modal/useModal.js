import { useContext } from 'react'
import ModalContext from './ModalContext';

const useModal = () => {

  const { toggleIsModalShowing, reservationId, isModalShowing } = useContext(ModalContext);

  const mhandleModalDismiss = () => {
    toggleIsModalShowing();
  }

  const handleModalAction = (modalAction) => {
    toggleIsModalShowing();
    modalAction(reservationId);
  }

  return (
    {
      mhandleModalDismiss,
      handleModalAction,
      isModalShowing,
    }
  )
}

export default useModal