import React from 'react'

const ReservationRow = ({ reservation, handleRemoveReservation }) => {
  return (
    <tr key={reservation.id}>
      <td>{reservation.name}</td>
      <td>{reservation.date}</td>
      <td>{reservation.time}</td>
      <td>{reservation.airline}</td>
      <td>{reservation.paymentMethod}</td>
      <td>{reservation.comments}</td>
      <td>
        <button onClick={() => handleRemoveReservation(reservation.id)}>
          Eliminar
        </button>
      </td>
    </tr>
  )
}

export default ReservationRow