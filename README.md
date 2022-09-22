# OfficeTracker


// VER SI UN USER ESTA LOGEADO PARA ACCEDER A RUTAS Y TAL
esto lo tendrias que controlar en cada ruta, por ejemplo en tu AppointmentsRoute tendrias que tener 
un metodo   beforeModel(transition: Transition): any {} que te compruebe si estas logeado y si no lo estás que te haga un transition a la ruta del login. Miratelo en la docu



