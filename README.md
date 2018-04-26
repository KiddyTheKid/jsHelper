# jsHelper

Ayudante javascript para paginas HTML
Depende de jQuery

* Puede realizar busquedas en tablas cargadas.
* Mensajes de alerta Bootstrap
* Validador de cedula: Cedula Ecuatoria
* Revision de campos (En desarrollo)
* Receptor y emisor de json

***

## searchInTable(this)

Realiza una busqueda sobre una tabla HTML, se inserta los siguientes atributos al DOM que obtiene los datos de la busqueda.

| Atributos    | Funcion                                                    |
| ------------ |:---------------------------------------------------------- |
| table-target | Es el ID de la tabla en la que se realizara la busqueda    |
| table-col    | Es la columna sobre la cual realizara la busqueda          |

> El numero de las columnas comienza desde 0