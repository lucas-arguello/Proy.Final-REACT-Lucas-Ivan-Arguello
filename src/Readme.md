# Proy.Final-REACT-Lucas-Ivan-Arguello

### Demo: https://mi-vivero-virtual.netlify.app/


<h1>Proyecto Final - Curso React-Js - Comision 39660- </h1>
<br>
Con el Prof:Federico Odalson- En la Escuela Digital: CoderHouse
<br>

En el desarrollo de este proyecto se aplicaron las siguientes herramientas:

✔️ React <br>
✔️ React-Bootstrap <br>
✔️ Css <br>

y las siguientes plataformas:

✔️ GitHube <br>
✔️ Firebase - Firestore <br>
✔️ Netfily <br>

<h2> Con React, Js y Vite se realizo: </h2>

➖ La instalación y configuración del entorno <br>
➖ El uso de JSX y transpiling <br>
➖ La Modularización por Componentes <br>
➖ El uso de Promises, asincronía y MAP <br>
➖ El Consumo API's (modelo cliente - servidor) <br>
➖ El uso de Hooks, Estados, Props, Children y Patrones <br>
➖ El Montaje - Actualizacion - Desmontaje <br>
➖ El Routing y navegación <br>
➖ El uso de Eventos (intercambiabilidad - abstraccion) <br>
➖ El Context (Contex Provaider - Custom Provider) <br>
➖ El uso de distintas Técnicas de rendering <br>
➖ El uso de Base de datos de Firebase <br>
➖ La Optimizacion de codigo <br>
➖ La Documentacion del Proyecto <br>

<h2> Descripcion de Mi Vivero Virtual</h2>

➕ El proyecto consiste en un ecommerce un Vivero Online para la venta de distintas variedades de plantas de interior y de 
exterior a las cuales se puede acceder desde los botones que se encuentran en la seccion del encabezado , luego en el inicio se pueden ver las tarjetas de todos los productos del sitio con: la imagen, categoria, nombre del producto, precio, cantidad en stock, una breve descripcion y un "boton de detalle" que deriva a otra vista individual del producto seleccionado.

<img src='/public/img-readme/1-Portada-Mi-Vivero-Virtual.jpg'>
<br>
<br>

➕ Y todas las imagenes provinienen de la base de datos de Firebase.

<img src='/public/img-readme/Firebase-Mi-Vivero-Virtual.jpg'>
<br>
<br>

<h2>Seccion detalle del producto </h2>
➕ En esta seccion podemos ver mas informacion del producto, y encontramos que podemos incrementar o decrementar la 
   cantidad a comprar y luego agregar el producto a neustro carrito de compras, Luego de que agregamos el producto, cambian los botones de la tarjeta elejida, y nos aparacen los 2 botones de "Seguir compra" y "terminar compra".
   La eleccion del boton "Seguir compra" nos lleva nuevamente al panel de todos los productos, para seguir eligiendo algun otro, y el boton "terminar compra" nos lleva al "carrito" con una nueva vista y otras opciones.

<img src='/public/img-readme/2-Secc-detalle-Mi-Vivero-Virtual.jpeg'>
<br>
<br>

➕ Botones "Seguir compra" y "terminar compra".

<img src='/public/img-readme/3-Secc-detalle-Mi-Vivero-Virtual.jpeg'>
<br>
<br>

<h2>Seccion Ir al Carrito Seguir Comprando </h2>

➕ En esta seccion visualizamos informacion sobre: el precio y las cantidades de cada producto seleccionado, la cantidad total de productos, el precio total de los productos, un boton "vaciar el carrito" , un boton "eliminar producto", un formulario con la soliciyud de datos personales del comprardor, y un boton "generar orden".

<img src='/public/img-readme/4-Secc-Carrito-Mi-Vivero-Virtual.jpeg'>
<br>
<br>

➕ Si sleccionamos "vaciar el carrito" nos muestra un cartel informando al comprador "no hay productos en el carrito", seguido de un link con la posibilidad de "volver al panel de productos" y poder volver a tener la posibilidad de elegir otros productos.

<img src='/public/img-readme/5-Secc-Carrito-Mi-Vivero-Virtual.jpeg'>
<br>
<br>

➕ Si el cliente ya esta decidido a comprar, debe llenar el formulario, donde este formulario esta sometido a las validaciones necesarias para poder concretar la compra, y si los datos son correctos y pasan la validacion, podemos generar la orden de compra atraves del boton "generar orden", donde luego nos aparecera un cartel de alerta mostrandonos que la orden de compra fue confirmada y el codigo de identificacion de la orden, con un boton de "aceptar". 

<img src='/public/img-readme/6-Secc-Carrito-Mi-Vivero-Virtual.jpeg'>
<br>
<br>

➕ Luego de aceptada la compra, se vacia nuevamente el carrito, pudiendo volver al panel de productos. 

<img src='/public/img-readme/5-Secc-Carrito-Mi-Vivero-Virtual.jpeg'>
<br>
<br>

➕ Por ultimo, la compra aceptada es enviada a la base de datos de firebase con los datos del cliente y los productos que agrego al carrito.

<img src='/public/img-readme/6-Firebase-Mi-Vivero-Virtual.jpg'>