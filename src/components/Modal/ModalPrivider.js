import React, { useState } from 'react'
import ModalContext from './ModalContext';

const ModalPrivider = ({ children }) => {

  const [isModalShowing, setIsModalShowing] = useState(false);
  const [reservationId, setReservationId] = useState(undefined);

  const toggleIsModalShowing = () => {
    setIsModalShowing(previousState => !previousState);
  }

  const onClickRemoveReservation = (reservationId) => {
    toggleIsModalShowing();
    setReservationId(reservationId);
  }

  return (
    <ModalContext.Provider value={{ isModalShowing, reservationId, toggleIsModalShowing, onClickRemoveReservation }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalPrivider