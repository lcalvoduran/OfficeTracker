# OfficeTracker


// Communication between components

1. Crear array en bookings
2. Pasarle el array a los hijos como un input
3. Pasarle a los hijos un evento
4. Cuando se le pase al appointments el evento => cuando haga click en mis botones llamara a ese evento

arguments= inputs
actions = events

1- lo que tienes que hacer es que el componente appointments reciba un array de dias seleccionados y un evento de su padre la ruta bookings. El array lo vas a usar para saber que dias estan marcados y el evento para decirle al padre cuando has clickado en alguno. El padre se encargará de añadir o quitar cosas del array
isMarked deberia ser un metodo que te mire si el array que te dio el padre contiene ese dia

2- lo de pintar los dias y su calculo son 2 cosas diferentes, para pintar un dia pues hazte un get y lo usas en la template. Para calcular el dia y darle formato puedes usar el Date.format o el toString, que te devolverán una cadena con el formato que le digas



DOCS 29/09/2022 ---> Item indexes

https://guides.emberjs.com/release/components/looping-through-lists/




/////////////////////////////////////////////////////////////

1. Generar un día y que a partir de ese día me de los demás días de esa semana --> Done
2. Generar la siguiente semana cambiando con el date.format 
3. Generar la anterior semana cambiando con el date.format

//////////////////////////////////////////////////////////

Reminder: 

Nos encontramos en app > components > bookings 

Tenemos que hacer la función refreshingWithMarkeds() que me recoge los días que se encuentran en el localStorage y tiene que pushearlos al this.selectedDays.
Una vez estén pusheados se marcarán en el appointments con la casilla de color.
