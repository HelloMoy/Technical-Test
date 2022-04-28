import { useEffect, useReducer } from 'react';
import { initialState, reducer } from './assetsUseReservationTable';

const useReservationTable = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const onRowInputChange = (event) => {
    dispatch({ type: 'rowInputChange', payload: event })
  }

  const handleAddNewReservation = () => {
    dispatch({ type: 'addReservation' })
  }

  const handleRemoveReservation = (reservationId) => {
    dispatch({ type: 'removeReservation', payload: reservationId })
  }

  useEffect(() => {

    console.log({ reservations: state.reservations })

  }, [state.reservations]);

  return (
    {
      reservations: state.reservations,
      reservationFormValues: state.reservationFormValues,
      onRowInputChange,
      handleAddNewReservation,
      handleRemoveReservation,
    }
  )
}

export default useReservationTable