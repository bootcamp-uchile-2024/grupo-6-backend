## Proyecto Paginas Selectas - Backend
-  Este proyecto es un API RESTful desarrollada con NestJS
, la cual esta diseñada para proveer información necesaria para una página de E-Commerce de libros llamada "Paginas Selectas", donde el objetivo es ofrecer la venta de libros, mediante una experiencia de recomendaciones personalizada basada en los gustos del usuario. Además, a futuro se agregara el intercambio de libros y la venta de mystery boxes.
- La API consta actualmente de multiples metodos HTTP que generan las llamadas al servidor, proveyendo informacion al frontend como por ejemplo:
    - Registro y log in del usuario, entre otros.
    - Añadir y eliminar productos del carrito de compra, entre otros.
    - Busqueda de los libros por múltiples filtros (Ej: Género, idioma, autor, titulo, etc), eliminar un libro, entre otros.

 ## Contenidos
 1. [Requisitos Previos](#requisitos-previos)
 2. [Instalación](#instalacion)
 3. [Configuración](#configuracion)
 4. [Ejecucion ambiente Desarrollo](#ejecucion-ambiente-desarrollo)
 5. [Ejecucion ambiente Produccion](#ejecucion-ambiente-produccion)
 6. [Estructura del Proyecto](#estructura-del-proyecto)
 7. [Documentación de la API](#documentacion-de-la-api)
 8. [Flujo de Trabajo](#flujo-de-trabajo)
 9. [Contacto](#contacto)

 ## Requisitos Previos
 Antes de ejecutar el proyecto, asegúrate de tener
 instalados los siguientes componentes:
- **Node.js**: >= v10.3.2
- **NestJS CLI**: 
    ```bash
    npm install -g @nestjs/cli
    ```
- **Módulo Config (Para cargar los archivos .env):**
    ```bash
    npm install @nestjs/config
    ```
- **Dependencia de Swagger (Para poder documentar la api):**
    ```bash
    npm install --save @nestjs/swagger
    ```
- **Typescript:**
    ```bash
    npm install -g typescript
    ```
- **Otras Aplicaciones**: 
    - [Docker:](https://www.docker.com/products/docker-desktop/) Para desplegar aplicaciones dentro de contenedores virtuales.
    - [Docker Compose:](https://docs.docker.com/compose/install/) Para definir y gestionar aplicaciones multi-contenedor.



 ## Instalacion
 1. Clona el repositorio:
 ```bash
 git clone https://github.com/bootcamp-uchile-2024/grupo-6-backend.git
 ```
 2. Entra en el directorio del proyecto:
 ```bash
 cd nombre-del-proyecto
 ```
 3. Instala las dependencias:
 ```bash
 npm install
 ```



 ## Configuracion
 1. Se deben completar las siguientes variables de
 entorno:
- ENVIRONMENT: Ambiente en donde se ejecuta la app.
- PORT: Numero del puerto.

 2. Completar el archivo .env en la raíz del proyecto,
 configurando las siguientes variables de entorno:
 ```bash
ENVIROMENT=DEVELOPMENT
PORT=4000 
```
 3. En caso que se ejecute en ambiente productivo,
 se deben modificar ambas variables:
  ```bash
ENVIROMENT=PRODUCTION
PORT=5000
```


 ## Ejecucion ambiente Desarrollo
 Para ejecutar el proyecto en modo desarrollo, usa los siguientes comandos:

 ### Realizar Pull a imagen:
 ```bash
 docker pull ncarvajalg/grupo-6-backend-dev:v1.0.0
 ```

 ### Correr contenedor:
 ```bash
 docker compose up
 ```

 ## Ejecucion ambiente Produccion
 Para ejecutar el proyecto en modo producción, usa los siguientes comandos:

### Entrar a directorio de producción:
  ```bash
 cd Production
 ```

 ### Realizar Pull a imagen:
 ```bash
 docker pull ncarvajalg/grupo-6-backend:v1.0.0
 ```

 ### Correr contenedor:
 ```bash
 docker compose up
 ```


## Estructura del Proyecto
 ```bash
 src/
├───app.module.ts 
├───main.ts 
├───books/ # books contiene Componentes de Nestjs (Interceptors, middleware y filtros de excepcion)
│   ├───books.filter.ts # Permite gestionar excepciones y errores lanzado durante el procesamiento de solicitudes. 
│   ├───books.interceptor.ts # Permite transformar las respuestas y gestionar excepciones.
│   └───books.middleware.ts # Permite modificar el request o el response.
├───products/ # Modulo de productos
│   ├───dto/ # Clase que permite encapsular en una capa adicional la informacion necesaria del libro a enviar entre el cliente y servidor.
│   ├───entities/ #  Clase que contiene toda la estructura del libro.
│   ├───images #Imagenes de los libros para poder ser utilizadas del lado del frontend y finalmente mostrarlas en la pagina web.
│   ├── products.controller.ts # Maneja los metodos HTTP del producto, tales como ver informacion de un libro, buscar varios libros y mostrarlos, agregar un libro, etc.
│   ├── products.service.ts # Este servicio gestiona la informacion de los productos (libros)
│   └── products.module.ts
├───shoppingcart/ # Modulo de carrito de compras
│    ├───dto/ # Clase que permite encapsular en una capa adicional la informacion necesaria del carrito de compra a enviar entre el cliente y servidor.
│    ├───entities/ #  Clase que contiene toda la estructura del carrito de compra.
│    ├── shoppingcart.controller.ts # Maneja los metodos HTTP del carrito de compra, tales como ver carrito, agregar producto en el carrito, eliminar producto del carrito, etc.
│    ├── shoppingcart.service.ts # Este servicio gestiona la informacion del carrito de compra.
│    └── shoppingcart.module.ts
├───users/ # Modulo de Usuarios
│    ├───dto/ # Clase que permite encapsular en una capa adicional la informacion necesaria del usuario a enviar entre el cliente y servidor.
│    ├───entities/ #  Clase que contiene toda la estructura del usuario.
│    ├── users.controller.ts # Maneja los metodos HTTP del usuario, tales como ver informacion del usuario, agregar direccion, registrar usuario, etc.
│    ├── users.service.ts # Este servicio gestiona la informacion de los usuarios.
│    └── users.module.ts
 ```



## Documentacion de la API
 Swagger está habilitado en este proyecto. Puedes acceder
 a la documentación de la API después de iniciar el
 servidor.
 1. Inicia el proyecto (siguiendo el punto 4 o 5 dependiendo del ambiente):
 ```bash
 docker-compose up 
 ```
 2. Accede a Swagger en tu navegador usando la siguiente URL:
- http://localhost:3000/api#/
- Modificar el puerto dependiendo de la configuracion establecida.


## Flujo de Trabajo
 En este proyecto, seguimos un flujo de trabajo basado en
 ramas para el desarrollo de nuevas características y
 corrección de errores. A continuación, se detalla cómo crear
 nuevas ramas, integrarlas y desplegar a producción.
 ### Branch Principal
 La rama principal de este proyecto es main. Esta rama
 contiene la última versión estable del proyecto y no debe
 modificarse directamente.
 ### Creación de Branches para Desarrollo
 Cuando se desarrolla una nueva funcionalidad, se corrige un
 error, o agregar/modificar archivos es necesario crear una rama específica para ello,
 derivada de main.
 #### Nomenclatura de las Ramas
- Ramas para nuevas funcionalidades:
 Deben comenzar con el prefijo `modulo/nombre-funcionalidad`.
    - Ejemplo: `modulo/autenticacion-usuarios`
- Ramas para corrección de errores:
 Prefijo: `fix/nombre-del-error`
    - Ejemplo: `fix/error-en-login`
- Ramas para agregar archivos:
 Prefijo: `add/nombre-archivo`
    - Ejemplo: `add/readme`
- Ramas para modificar archivos:
 Prefijo: `change/nombre-archivo`
    - Ejemplo: `change/users.service.ts`
 ### Integración a Producción
 Una vez completados los cambios en tu rama, crea un Pull
 Request (PR) hacia la rama main para revisión. El PR debe
 contener una descripción clara de los cambios y cualquier
 instrucción necesaria para probarlos.


## Contacto
 Si tienes alguna pregunta, puedes contactarnos a través
 de:
- Nicole Carvajal
    - GitHub: [NicoleCG](https://github.com/NicoleCG)
- José Martínez
    - GitHub: [Snoxdev](https://github.com/Snoxdev)
- Sebastian Flores
    - GitHub: [x2n1](https://github.com/x2n1)