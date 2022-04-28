import './App.css';
import ReservationTable from './components/ReservationTable';
import useReservationTable from './hooks/useReservationTable/useReservationTable';

function App() {
  const {
    reservations,
    reservationFormValues,
    handleAddNewReservation,
    onRowInputChange,
    handleRemoveReservation
  } = useReservationTable();

  return (
    <div className="App">

      <button onClick={handleAddNewReservation}>
        Agregar
      </button>

      <ReservationTable
        reservations={reservations}
        reservationFormValues={reservationFormValues}
        onRowInputChange={onRowInputChange}
        handleRemoveReservation={handleRemoveReservation}
      />
    </div>
  );
}

export default App;
