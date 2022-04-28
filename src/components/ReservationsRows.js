import React from 'react'
import ReservationRow from './ReservationRow'

const ReservationsRows = ({ reservations, handleRemoveReservation }) => {
  return (
    <>
      {
        reservations.map(reservation => (
          <ReservationRow
            key={reservation.id}
            reservation={reservation}
            handleRemoveReservation={handleRemoveReservation}
          />
        ))
      }
    </>
  )
}

export default ReservationsRows