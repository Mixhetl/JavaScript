//!OBJETO DATE
console.log(Date);
console.log(Date());

let fecha = new Date();
console.log(fecha);

//*Día del mes
console.log(fecha.getDate());

//*Día de la semana
console.log(fecha.getDay());

//* Numero de mes
console.log(fecha.getMonth());

//* Horas
console.log(fecha.getHours());

//* Minutos
console.log(fecha.getMinutes());

//* Segundos
console.log(fecha.getSeconds());

//* Milisegundos
console.log(fecha.getMilliseconds());


//? Metodos para obetener información humanamente entendible.
console.log(fecha.toString);

//* Solamente DATE
console.log(fecha.toDateString());

//* Solamente Hora Local
console.log(fecha.toLocaleString());

//* Solamente la fecha local
console.log(fecha.toLocaleDateString());

//* Solamente la hora local
console.log(fecha.toLocaleTimeString());

//? Obtener el uso horario
console.log(fecha.getTimezoneOffset());

//? Obtener UTC
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());

//? Fecha Timestamp
console.log(Date.now());


//* Logica calculo de fechas
let cumple = new Date(1994,8,16);
console.log(cumple);