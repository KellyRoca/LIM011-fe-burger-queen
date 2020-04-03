# Burger Queen

## Preámbulo

[React](https://reactjs.org/), [Vue](https://es.vuejs.org/index.html) y [Angular](https://angular.io/)
son algunos de los _frameworks_ y _librerías_ de JavaScript más utilizados por
lxs desarrolladorxs alrededor del mundo, y hay una razón para eso.
En el contexto del navegador, [_mantener la interfaz sincronizada con el estado
es difícil_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Al elegir un _framework_ o _librería_ para nuestra interfaz, nos apoyamos en una
serie de convenciones e implementaciones _probadas_ y _documentadas_ para
resolver un problema común a toda interfaz web. Esto nos permite concentrarnos
mejor (dedicar más tiempo) en las características _específicas_ de
nuestra aplicación.

Cuando elegimos una de estas tecnologías no solo importamos un pedacito de
código para reusarlo (lo cuál es un gran valor per se), si no que adoptamos una
**arquitectura**, una serie de **principios de diseño**, un **paradigma**, unas
**abstracciones**, un **vocabulario**, una **comunidad**, etc...

Como desarrolladora Front-end, estos kits de desarrollo pueden resultarte
de gran ayuda para implementar rápidamente características de los proyectos en
los que trabajes.

## Resumen del proyecto

Esta vez tenemos un proyecto 100% por encargo. Si bien siempre puedes (y debes)
hacer sugerencias de mejoras y/o cambios, muchas veces trabajarás en proyectos
en los que primero hay que asegurarse de cumplir con lo requerido.

Un pequeño restaurante de hamburguesas, que está creciendo, necesita una
interfaz en la que puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente (a través de un
  _backend_ del que nos darán detalles más adelante).

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

Esta es la información que tenemos del cliente:

> Somos **Burguer Queen**, una cadena de comida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida y, para
> seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de
> nuestros clientes.
>
> Tenemos 2 menús: uno muy sencillo para el desayuno:
>
> | Ítem                      |Precio $|
> |---------------------------|------|
> | Café americano            |    5 |
> | Café con leche            |    7 |
> | Sandwich de jamón y queso |   10 |
> | Jugo de frutas natural    |    7 |
>
> Y otro menú para el resto del día:
>
> | Ítem                      |Precio|
> |---------------------------|------|
> |**Hamburguesas**           |   **$**   |
> |Hamburguesa simple         |    10|
> |Hamburguesa doble          |    15|
> |**Acompañamientos**        |   **$**   |
> |Papas fritas               |     5|
> |Aros de cebolla            |     5|
> |**Para tomar**             |   **$**   |
> |Agua 500ml                 |     5|
> |Agua 750ml                 |     7|
> |Bebida/gaseosa 500ml       |     7|
> |Bebida/gaseosa 750ml       |     10|
>
> **Importante:** Lxs clientes pueden escoger entre hamburguesas de res,
> de pollo, o vegetariana. Además, por $ 1 adicional, pueden agregarle queso
> o huevo.
>
> Nuestros clientes son bastante indecisos, por lo que es muy común que cambien
> el pedido varias veces antes de finalizarlo.

La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. El usuario debe poder ir eligiendo qué _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el
costo total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)

## Objetivos de aprendizaje

### HTML y CSS

- [x] HTML semántico
- [x] CSS flexbox
- [x] Sass
- [x] Maquetación

### Frontend Development

- [x] Componentes
- [ ] Manejo del estado

### PWA

- [x] Concepto
- [x] Utilidad
- [ ] Que es [Workbox](https://developers.google.com/web/tools/workbox)
- [ ] Qué es un `serviceWorker`

### Angular

- [x] [Uso de Components | Templates](https://angular.io/guide/architecture-components#introduction-to-components)
- [x] [Directivas estructurales (ngIf / ngFor)](https://angular.io/guide/template-syntax#built-in-structural-directives)
- [x] [@Input | @Ouput](https://angular.io/guide/component-interaction#component-interaction)
- [x] [Creación y uso de servicios](https://angular.io/guide/architecture-services#providing-services)
- [ ] [Manejos de rutas](https://angular.io/guide/router)
- [ ] [Uso de Observables](https://angular.io/guide/observables-in-angular)
- [ ] [Uso de HttpClient](https://angular.io/guide/http)
- [x] [Estilos de componentes (ngStyle / ngClass)](https://angular.io/guide/template-syntax#built-in-directives)


### Firebase

- [x] Firestore
- [ ] Firebase security rules
- [x] Observables

### Testing
- [x] Testeo de tus interfaces
- [x] Testeo de componentes
- [ ] Testeo asíncrono
- [x] Mocking

### Colaboración en Github

- [x] Branches
- [x] Pull Requests
- [ ] Tags

### Organización en Github

- [x] Projects
- [x] Issues
- [x] Labels
- [x] Milestones

### Buenas prácticas de desarrollo

- [x] Modularización
- [x] Nomenclatura / Semántica
- [x] Linting

***
## Criterios de aceptación del proyecto

### Definición del producto

El [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s) nos presenta este _backlog_ que es el resultado de su trabajo con el cliente hasta hoy.

---------------------
#### [Historia de usuario 1] Mesero/a debe poder tomar pedido de cliente
Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación
Lo que debe ocurrir para que se satisfagan las necesidades del usuario)
  * Anotar nombre de cliente.
  * Agregar productos al pedido.
  * Eliminar productos.
  * Ver resumen y el total de la compra.
  * Enviar pedido a cocina (guardar en alguna base de datos).
  * Se ve y funciona bien en una _tablet_

##### Definición de terminado
Lo acordado que debe ocurrir para decir que la historia está terminada.
  * Debes haber recibido _code review_ de al menos una compañera.
  * Haces _test_ unitarios y, además, has testeado tu producto manualmente.
  * Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
  * Desplegaste tu aplicación y has etiquetado tu versión (git tag).


---------------------

### PROTOTIPOS

#### 1ER PROTOTIPO
![1erPrototipo](https://firebasestorage.googleapis.com/v0/b/burgerqueen-ee96d.appspot.com/o/WhatsApp%20Image%202020-04-03%20at%2012.04.11%20AM.jpeg?alt=media&token=00f71db9-de32-4610-a52a-ff32cfb96df1)
#### 2DO PROTOTIPO
![2doPrototipo](https://firebasestorage.googleapis.com/v0/b/burgerqueen-ee96d.appspot.com/o/WhatsApp%20Image%202020-04-03%20at%2012.04.33%20AM.jpeg?alt=media&token=5019b2e9-7a5c-4168-9af4-0b48d9c613c6)
#### BURGER QUEEN
![BurgerQueen](https://firebasestorage.googleapis.com/v0/b/burgerqueen-ee96d.appspot.com/o/Screenshot%20from%202020-04-02%2023-50-46.png?alt=media&token=ebc7bc3b-fbe3-4a57-9667-52cbfacbd98b)
