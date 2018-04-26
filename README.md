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
|:------------ |:---------------------------------------------------------- |
| table-target | Es el ID de la tabla en la que se realizara la busqueda    |
| table-col    | Es la columna sobre la cual realizara la busqueda          |

> El numero de las columnas comienza desde 0

## changeTableSearchCol(this)

Esto es ubicado de preferencia en un DOM Select, recibe el numero de la opcion seleccionada y en base a eso realiza un cambio en el atributo `table-col` asignando la nueva columna sobre la que se realizara la busqueda.

| Atributos    | Function                                |
|:------------ |:--------------------------------------- |
| input-target | Id del input al que se aplica el cambio |

```html
<input type="text" id="filtro" table-col="0" onkeyup="searchInTable(this)">
<select onchange="changeTableSearchCol(this)" input-target="filtro">
    <option value="1">Columna 2</option>
    <option value="2">Columna 3</option>
</select>
```