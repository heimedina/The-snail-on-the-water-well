# The snail on the water well

- Un caracol atrapado en el fondo de un pozo de 5 metros de profundida recorre durante el día 3 metros y como está cansado por la noche baja 2 metros. Cuanto tardará el caracol en salir del pozo?

### Installation 🔧

- No requiere ninguna instalación en particular, solo abrir el archivo index.html en el navegador (Se recomienda el uso de la extensión Live Server [https://marketplace.visualstudio.com/items/?itemName=ritwickdey.LiveServer])

## Built with 🛠️

- Html
- CSS
- JS

## Workshop Timeline ⌚

- 15 min  : Presentaciones
- 50 min  : Clase de Javascript
- 2h30 min: Trabajo individual pero en salas con 3 o 4 coders
- 20 min  : Retrospectiva
- 5 min   : Cierre taller (Preguntas)

## Lesson Roadmap 📑

1. Enlazar JS con página HTML
2. Recuperar elementos del DOM
    - getElementById()
    - querySelector()
3. Variables y tipos de datos
    - let
    - const (opcional)
    - string
    - number
    - boolean
4. Concatenación
5. Funciones
6. DOM Events
    - EventListener
7. JS Operadores

## Requirement ⚡

Actualmente, el caracol está quieto en el fondo del pozo y no puede moverse. Tu tarea será la de dar funcionalidad a los botones (Acción de día, Acción de noche), utilizando el lenguaje de programación Javascript, para que el caracol pueda escapar del pozo.

Para que puedas realizar está tarea a continuación encontrarás unas historias de usuario que te ayudarán a priorizar las tareas con sus criterios de aceptación.

## User Stories 😄

COMO usuario <br>
QUIERO que el caracol realize la acción de día <br>
PARA escapar del pozo
<blockquote>
<strong>Criterios de acceptación:</strong><br>
DADO el caracol en el fondo del pozo <br>
CUANDO el usuario hace click en el botón 'Acción de día' <br>
ENTONCES el caracol sube 3 metros Y <br>
TAMBIEN el contador de días se debe incrementar Y<br>
TAMBIEN el contador de metros se debe incrementar Y<br>
TAMBIEN indicar si el caracol a salido del pozo
</blockquote><br>

---

COMO usuario <br>
QUIERO que el caracol realize la acción de noche <br>
PARA para poder descansar
<blockquote>
<strong>Criterios de acceptación:</strong><br>
DADO el caracol a cierta altura del pozo <br>
CUANDO el usuario hace click en el botón 'Acción de noche' <br>
ENTONCES el caracol baja 2 metros Y <br>
TAMBIEN el contador de días se debe decrementar Y<br>
TAMBIEN el contador de metros se debe decrementar Y<br>
TAMBIEN indicar si el caracol a salido del pozo
</blockquote><br>

---

COMO usuario <br>
QUIERO saber cuando el caracol ha salido del pozo <br>
PARA descubir cuantos días a tardado en escapar
<blockquote>
<strong>Criterios de acceptación:</strong><br>
DADO el caracol a 2 metros de altura dentro del pozo <br>
CUANDO el usuario hace click en el botón 'Acción de día' <br>
ENTONCES el caracol ha realizado los 5 metros de escalada y ha salido del pozo Y <br>
TAMBIEN el caracol a desaparecido Y<br>
TAMBIEN el contador de días debe indicar el resultado final de días Y<br>
TAMBIEN el contador de metros debe indicar el resultado final Y<br>
TAMBIEN indicar si el caracol a salido del pozo
</blockquote><br>

---

COMO Sistema <br>
QUIERO que la aplicación solo permita la acción de día al inicio <br>
PARA impedir que el usuario haga la acción de noche ya que el caracol se encuentra en el fondo del pozo
<blockquote>
<strong>Criterios de acceptación:</strong><br>
DADO la acción de día habilitada y la acción de noche deshabilitada <br>
CUANDO el usuario hace click en el botón 'Acción de día' <br>
ENTONCES el botón de acción de día se debe deshabilitar Y<br>
TAMBIEN el botón de acción de noche se debe habilitar
</blockquote><br>

---

COMO Sistema <br>
QUIERO que si el botón de acción de noche está habilitado solo se pueda realizar está acción <br>
PARA impedir que el usuario haga la acción de día
<blockquote>
<strong>Criterios de acceptación:</strong><br>
DADO la acción de noche habilitada <br>
CUANDO el usuario hace click en el botón 'Acción de noche' <br>
ENTONCES el botón de acción de noche se debe deshabilitar Y<br>
TAMBIEN el botón de acción de día se debe habilitar
</blockquote>

## Additional Information 📄

- La posición de objetos en el navegador utiliza la unidad de pixeles (px)
- La posición (0,0) corresponde al borde superior izquierdo de la pagina html
- La posición inicial del caracol es (170,550) ver clase '.snail' en el archivo css
- 3 metros = 270px
- 2 metros = 180px

## Resources 📚

- [Recuperar elementos del DOM](https://www.w3schools.com/js/js_htmldom_elements.asp)
- [Variables](https://www.w3schools.com/js/js_variables.asp)
- [Tipos de datos](https://www.w3schools.com/js/js_datatypes.asp)
- [Concatenación](https://www.w3schools.com/js/js_string_methods.asp#mark_concat)
- [Funciones](https://www.w3schools.com/js/js_functions.asp)
- [DOM Events](https://www.w3schools.com/jsref/dom_obj_event.asp)
- [JS Operadores](https://www.w3schools.com/js/js_operators.asp)
- [Cambiar propiedades CSS](https://www.w3schools.com/js/js_htmldom_css.asp)

## Extra Challenges ⭐

1. Después de haber realizado la acción de día, si el usuario hace click en la acción de noche la imagen de fondo debe cambiar.<br>
Imagen de día: [https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg]<br>
Imagen de noche: [https://viajes.nationalgeographic.com.es/medio/2020/04/01/6-via-lactea_57769b72_1254x836.jpg]
2. Si el caracol ha escapado habilita un botón para resetear la aplicación ha su estado inicial.
3. En vez de hacer desaparecer el caracol cuando sale, reubicalo fuera del pozo y en el suelo


## Autores ✒️

* **Nombre**