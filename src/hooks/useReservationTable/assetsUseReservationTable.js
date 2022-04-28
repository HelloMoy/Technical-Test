
import { reservationFormValuesInitialState, reservationsData } from '../../services/reservationsData';
import { v4 as uuidv4 } from 'uuid';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'rowInputChange':
      return {
        ...state,
        reservationFormValues: {
          ...state.reservationFormValues,
          [action.payload.target.name]: action.payload.target.value
        }
      };
    case 'removeReservation':
      const newReservations = state.reservations.filter((reservation) => reservation.id !== action.payload);
      return { ...state, reservations: newReservations };
    case 'addReservation':
      return { reservations: [...state.reservations, { id: uuidv4(), ...state.reservationFormValues }], reservationFormValues: reservationFormValuesInitialState }
    default:
      throw new Error(`dispatch method ${action.type} is undefined`);
  }
}

export const initialState = {
  reservations: reservationsData,
  reservationFormValues: reservationFormValuesInitialState
};