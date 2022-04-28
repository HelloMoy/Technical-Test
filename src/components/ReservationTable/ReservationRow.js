import styles from './ReservationTable.module.css'
import { useContext } from 'react'
import ModalContext from '../Modal/ModalContext';

const ReservationRow = ({ reservation }) => {

  const { onClickRemoveReservation } = useContext(ModalContext);

  return (
    <tr className={styles.reservationRow} key={reservation.id}>
      <td className={styles.reservationRow__tableData} >{reservation.name}</td>
      <td className={styles.reservationRow__tableData} >{reservation.date}</td>
      <td className={styles.reservationRow__tableData} >{reservation.time}</td>
      <td className={styles.reservationRow__tableData} >{reservation.airline}</td>
      <td className={styles.reservationRow__tableData} >{reservation.paymentMethod}</td>
      <td className={styles.reservationRow__tableData} >{reservation.comments}</td>
      <td className={`${styles.reservationRow__tableData} ${styles.reservationRow__tableData__deleteButton} `}>
        <button className={styles.reservationRow__deleteButton} onClick={() => onClickRemoveReservation(reservation.id)}>
          Eliminar
        </button>
      </td>
    </tr>
  )
}

export default ReservationRow