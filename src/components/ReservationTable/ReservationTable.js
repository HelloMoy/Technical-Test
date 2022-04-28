import styles from './ReservationTable.module.css'
import { reservationTableColumns } from '../../services/reservationsData';
import ReservationsRows from './ReservationsRows';

const ReservationTable = ({ reservations, reservationFormValues, onRowInputChange, handleRemoveReservation }) => {

  return (
    <table className={styles.reservationTable}>
      <thead className={styles.reservationTable__header}>
        <tr className={styles.reservationTable__headRow}>
          {
            reservationTableColumns.map(reservationColumn => (
              <th key={reservationColumn.key} className={styles.reservationTable__tableHead}>{reservationColumn.columnName}</th>
            ))
          }
        </tr>
      </thead>
      <tfoot className={styles.reservationTable__footer}>
        <tr>
          {
            reservationTableColumns.map(reservationColumn => {
              if (reservationColumn.key === 'action')
                return <td key={reservationColumn.key} ></td>
              return (
                <td key={reservationColumn.key} >
                  <input
                    className={styles.reservationTable__footerInput}
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