# OfficeTracker

Acabo de intentar (otra vez) hacerme el proyecto desde 0. El problema es el mismo que tenía con el sass y es en cuanto a la petición a esta página donde se almacenan los artifacts "https://artifacts.copyright.com". 
¿Qué es lo que está pasando? Pues voy a decirte exactamente lo que hago aqui.

... Como quiero crearme esto desde 0 sigo los pasos de **siempre** que he hecho para crearme un proyecto en ember.

1. Opción (desde 0)

``npm install -g ember-cli``

=> Me salta un 404, parece ser que en los artifacts no encuentra la última versión. No pasa nada, busco en la página de esa api y miro qué versión puedo buscar para que el GET si me funcione, lo coloco como vimos con SASS, en este caso la versión que se encuentra en los artifacts es la 3.22.0, pues le pido que me la traiga 

``npm i ember-cli@3.22.0 ``

==> Err 403 FORBIDDEN. No tengo los permisos para poder hacer esa petición.


2. Opción (desde un proyecto antiguo del super-rentals el más básico, elimino los 2 componentes que había y me vuelvo a instalar SASS, redefinir rutas y todo lo anterior) ¿Por qué utilizar esta opción? Porque no puedo solucionar el problema este de la API, no puedo crearme un proyecto desde 0 con ember si no puedo traerme esto con npm.


