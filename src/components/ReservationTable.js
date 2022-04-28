import React from 'react'
import { reservationTableColumns } from '../services/reservationsData';
import ReservationsRows from './ReservationsRows';

const ReservationTable = ({ reservations, reservationFormValues, onRowInputChange, handleRemoveReservation }) => {

  return (
    <table>
      <thead>
        <tr>
          {
            reservationTableColumns.map(reservationColumn => (
              <th key={reservationColumn.key}>{reservationColumn.columnName}</th>
            ))
          }
        </tr>
      </thead>
      <tfoot>
        <tr>
          {
            reservationTableColumns.map(reservationColumn => {
              if (reservationColumn.key === 'action')
                return <td key={reservationColumn.key} ></td>
              return (
                <td key={reservationColumn.key} >
                  <input
                    type="text"
                    onChange={onRowInputChange}
                    name={reservationColumn.key}
                    value={reservationFormValues[reservationColumn.key]}
                  />
                </td>
              )
            })
          }
        </tr>
      </tfoot>
      <tbody>
        <ReservationsRows
          reservations={reservations}
          handleRemoveReservation={handleRemoveReservation}
        />
      </tbody>
    </table>
  )
}

export default ReservationTable