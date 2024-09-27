## Proyecto 13Design - Backend
-  Este proyecto es un API RESTful desarrollada con NestJS
, la cual esta diseñada para proveer información necesaria para una página de E-Commerce de libros llamada "Paginas Selectas".
- El proyecto consta de multiples metodos HTTP que generan las llamadas al servidor, proveyendo informacion al frontend como por ejemplo:
    - Registro y log in del usuario.
    - Carrito de compra de los libros.
    - Busqueda de los libros por múltiples filtros (Ej: Género, idioma, autor, titulo, etc)

 ## Contenidos
 1. [Requisitos Previos](#1.-Requisitos-Previos)
 2. [Instalación](#Instalación)
 3. [Configuración](#configuracion)
 4. [Ejecución- Desarrollo](#ejecucion-desarrollo)
 5. [Ejecución- Producción](#ejecucion-produccion)
 6. [Estructura del Proyecto](#estructura-del-proyecto)
 7. [Documentación de la API](#documentacion-api)
 8. [Flujo de Trabajo](#Flujo-de-Trabajo)
 9. [Contacto](#contacto)

 ## 1. Requisitos Previos
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



 ## 2. Instalación
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



 ## 3. Configuración
 1. Se deben completar las siguientes variables de
 entorno:- EJEMPLO: Colocar alguno de estos valores 1 o 2.- EJEMPLO2: Indicar el nombre.
 2. Completar el archivo .env en la raíz del proyecto,
 configurando las siguientes variables de entorno:- EJEMPLO3: Ruta del xxxxxxx.- EJEMPLO4: Valor para yyyyyyyyyyyyyyyyy.
 3. En caso que se ejecute en ambiente productivo,
 adicionalmente se debe modificar WWWWW.

 ## 4. Ejecución- Desarrollo
 Para ejecutar el proyecto en modo desarrollo, usa los siguientes comandos:

 ### Realizar Pull a imagen:
 ```bash
 docker pull ncarvajalg/grupo-6-backend-dev:v1.0.1
 ```

 ### Correr contenedor:
 ```bash
 docker compose up
 ```

 ## 5. Ejecución- Producción
 Para ejecutar el proyecto en modo producción, usa los siguientes comandos:
 ### Realizar Pull a imagen:
 ```bash
 docker pull ncarvajalg/grupo-6-backend:v1.0.1
 ```

 ### Correr contenedor:
 ```bash
 docker compose up
 ```


## 6. Estructura del Proyecto
 ```bash
 src/
# books contiene Componentes de Nestjs (Interceptors, middleware y filtros de excepcion)
├───books
├───equipo
│   ├───dto
│   └───entities
├───home
│   ├───dto
│   └───entities
├───parse-enum-array-pipe
# Modulo de productos
├───products
│   ├───dto
│   ├───entities
│   ├───images
│   ├── products.controller.ts
│   ├── products.service.ts
│   └── products.module.ts
# Modulo de carrito de compras
├───shoppingcart
│    ├───dto
│    ├───entities
│    ├── shoppingcart.controller.ts
│    ├── shoppingcart.service.ts
│    └── shoppingcart.module.ts
# Modulo de Usuarios
└───users
    ├───dto
    ├───entities
    ├── users.controller.ts
    ├── users.service.ts
    └── users.module.ts
 ```



## 7. Documentación de la API (Swagger)
 Swagger está habilitado en este proyecto. Puedes acceder
 a la documentación de la API después de iniciar el
 servidor.
 1. Inicia el proyecto:
 ```bash
 npm run start
 ```
 2. Accede a Swagger en tu navegador usando la siguiente URL:
- http://localhost:3000/api#/
- Modificar el puerto dependiendo de la configuracion establecida.


## 8. Flujo de Trabajo
 En este proyecto, seguimos un flujo de trabajo basado en
 ramas para el desarrollo de nuevas características y
 corrección de errores. A continuación, se detalla cómo crear
 nuevas ramas, integrarlas y desplegar a producción.
 ### Branch Principal
 La rama principal de este proyecto es main. Esta rama
 contiene la última versión estable del proyecto y no debe
 modificarse directamente.
 ### Creación de Branches para Desarrollo
 Cuando se desarrolla una nueva funcionalidad o se corrige un
 error, es necesario crear una rama específica para ello,
 derivada de main.
 #### Nomenclatura de las Ramas- Ramas para nuevas funcionalidades:
 Deben comenzar con el prefijo xxxx/nombre-funcionalidad.
 Ejemplo: xxxx/autenticacion-usuarios- Ramas para corrección de errores:
 Prefijo: yyyy/nombre-del-error
 Ejemplo: fix/error-en-login
 ### Integración a Producción
 Una vez completados los cambios en tu rama, crea un Pull
 Request (PR) hacia la rama main para revisión. El PR debe
 contener una descripción clara de los cambios y cualquier
 instrucción necesaria para probarlos.


## 9. Contacto
 Si tienes alguna pregunta, puedes contactarnos a través
 de:
- Nicole Carvajal
    - Email: nicole.carvajalg@gmail.com
    - GitHub: [NicoleCG](https://github.com/NicoleCG)
- José Martínez
    - Email: jsmoing@gmail.com
    - GitHub: [Snoxdev](https://github.com/Snoxdev)
- Sebastian Flores
    - Email: sebastian.floresram@gmail.com
    - GitHub: [x2n1](https://github.com/x2n1)