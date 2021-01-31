# Servidor REST

Es un servidor REST que permite hacer consultas a cajas por ejemplo de un banco donde se registrar que caja se atendio a que hora y fecha, agregandose a una base de datos NoSQL
, estos datos se pueden filtrar por fecha y caja, ademas de la opcion de borrar y editar un registro, tambien viene integrado con seguridad por tokens de JWT.

## Comenzando 🚀

Se puede ejecutar con:
#### node server.js

Se tiene que realizar un login antes con la siguiente consulta que te brindara un token para cada peticion

https://rest-server-revelo.herokuapp.com/login

Este es un usuario admin que podra realizar todas las consultas sin problema.
Body
#### {
#### email: 	 c@mail.com
#### password: 12345678
#### }


### Pre-requisitos 📋

Se debe instalar los siguientes modulos con:
#### npm install (modulo) --save
- express
- mongoose
- body-parser
- http
- path
- underscore
- jsonwebtoken
- bcrypt

### Instalación 🔧

Se debe descargar los prerrequisitos y ya esta listo para produccion.


## Ejecutando las pruebas ⚙️
### POST
Formato
https://rest-server-revelo.herokuapp.com/registro

Body
KEY	    VALUE
n_caja	(Valor a ingresar)
En el caso de VALUE solo se podra ingresar un numero del 1 al 3 ya que solo existen 3 cajas de atencion

### GET
Realiza una consulta de todas las cajas que tengas el numero que se pide en la consulta

Numero de caja: Se ingresa como parametro en nuestra ULR
Formato
https://rest-server-revelo.herokuapp.com/registro/caja/(El numero de caja a elejir)

En el caso solo se podra ingresar un numero del 1 al 3 ya que solo existen 3 cajas de atencion

Realiza una consulta de todas las cajas que entre las fechas indicadas en la consulta

Desde: Se ingresa como parametro en nuestra ULR la fecha desde cuando comienza a buscar
Hasta: Se ingresa como parametro en nuestra ULR la fecha cuando termina de buscar
Formato
https://rest-server-revelo.herokuapp.com/registro/fecha/(Desde cuando)/(Hasta cuando)

El formato de la fecha ingresada debe ser en yyyy-mm-dd

### DELETE

Eliminamos cualquier dato por medio del siguiente parametro :

Id: Estas se ingresan como parametro en la URL
Formato
https://rest-server-revelo.herokuapp.com/registro/(Id del registro)

El id es unico y retornara el registro eliminado

## Despliegue 📦

Se puede realizar el deploy tal cual como ya esta en heroku o firebase sin necesidad de ninguna configuracion adicional que las que se especifica en sus plataformas

## Construido con 🛠️

NodeJS
MongoDB

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://rest-server-revelo.herokuapp.com/)

## Autor ✒️

Carlos Revelo (Desarrollador)

## Expresiones de Gratitud 🎁

* Rodrigo Tufiño (Profesor)
