import { v4 as uuidv4 } from 'uuid';

export const reservationsData = [
  {
    id: uuidv4(),
    name: 'Juan Pérez',
    date: '15-04-2022',
    time: '06:00',
    airline: 'Aeroméxico',
    paymentMethod: 'Efectivo',
    comments: 'sdfsd',
  },
  {
    id: uuidv4(),
    name: 'Luis Santos',
    date: '17-04-2022',
    time: '10:00',
    airline: 'Viva',
    paymentMethod: 'Tarjeta',
    comments: 'Sin comentarios',
  },
  {
    id: uuidv4(),
    name: 'Angeles López',
    date: '20-04-2022',
    time: '16:00',
    airline: 'Interjet',
    paymentMethod: 'Tarjeta',
    comments: '',
  },
  {
    id: uuidv4(),
    name: 'Miguel Ponce',
    date: '25-05-2022',
    time: '8:00',
    airline: 'Delta',
    paymentMethod: 'Efectivo',
    comments: 'Todo correcto',
  }
];

export const reservationTableColumns = [
  { key: 'name', columnName: 'Nombre' },
  { key: 'date', columnName: 'Fecha' },
  { key: 'time', columnName: 'Hora' },
  { key: 'airline', columnName: 'Aerolinea' },
  { key: 'paymentMethod', columnName: 'Forma de pago' },
  { key: 'comments', columnName: 'Comentarios' },
  { key: 'action', columnName: 'Acción' },
];



export const reservationFormValuesInitialState = {
  name: '',
  date: '',
  time: '',
  airline: '',
  paymentMethod: '',
  comments: '',
}