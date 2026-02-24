# CRUD Pokeapi - Vue.js

Este proyecto es una aplicación web interactiva que consume la **PokeAPI** para listar, visualizar detalles y gestionar una lista de favoritos de Pokémon. Se ha desarrollado enfocándose en una arquitectura limpia, eliminando el código innecesario y optimizando el rendimiento.

## Tecnologías Utilizadas

* **Vue.js 3**: Framework progresivo para construir la interfaz de usuario.
* **Pinia**: Gestión de estado global para manejar los favoritos y el almacenamiento persistente.
* **Vue Router**: Navegación entre vistas (Home, Pokémons, Detalles, Favoritos).
* **Axios**: Cliente HTTP para realizar peticiones a la API[cite: 196].
* **Bootstrap 5**: Framework de CSS para un diseño responsivo y moderno.
* **LocalStorage**: Persistencia de datos para que no pierdas tus favoritos al recargar.

## Arquitectura del Proyecto

El proyecto sigue una estructura organizada por responsabilidades:

* **`src/composable/`**: Lógica reutilizable para peticiones fetch (`useGetData.js`).
* **`src/store/`**: Gestión de favoritos y persistencia con Pinia (`favoritos.js`).
* **`src/views/`**: Páginas principales como `PokemonsView`, `PokeView` y `FavoritosView`.
* **`src/router/`**: Configuración de rutas y navegación dinámica.

## Características Principales

1.  **Exploración**: Listado dinámico de Pokémon con paginación de 12 elementos por página.
2.  **Fichas de Detalle**: Información específica (ID, peso, altura, habilidades e imagen) de cada criatura.
3.  **Sistema de Favoritos**: CRUD en memoria con persistencia local que permite agregar y eliminar Pokémon.
4.  **Diseño Responsivo**: Adaptado para dispositivos móviles y escritorio.

## Instalación y Uso


1.  Instala las dependencias:
    ```bash
    npm install
    ```
2.  Ejecuta el proyecto en modo desarrollo:
    ```bash
    npm run dev
    ```

---

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Convierte el proyecto a Javascript, html, CSS

```sh
npm run build
```
### luego se debe subir los cambios
