import './App.css';
import Modal from './components/Modal/Modal';
import ModalPrivider from './components/Modal/ModalPrivider';
import ReservationTable from './components/ReservationTable/ReservationTable';
import useReservationTable from './hooks/useReservationTable/useReservationTable';

function App() {
  const {
    reservations,
    reservationFormValues,
    handleAddNewReservation,
    onRowInputChange,
    handleRemoveReservation,
  } = useReservationTable();


  return (
    <div className="app">
      <button className="app-addButton" onClick={handleAddNewReservation}>
        Agregar
      </button>
      <ModalPrivider>
        <ReservationTable
          reservations={reservations}
          reservationFormValues={reservationFormValues}
          onRowInputChange={onRowInputChange}
          handleRemoveReservation={handleRemoveReservation}
        />
        <Modal modalMessage="¿Está seguro que desea eliminar la reservación" modalAction={handleRemoveReservation} />

      </ModalPrivider>
    </div>
  );
}

export default App;
