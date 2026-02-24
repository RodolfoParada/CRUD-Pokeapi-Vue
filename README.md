# 🚀 CRUD Pokeapi - Vue.js

Este proyecto es una aplicación web interactiva que consume la **PokeAPI** para listar, visualizar detalles y gestionar una lista de favoritos de Pokémon. Se ha desarrollado enfocándose en una arquitectura limpia, eliminando el código innecesario y optimizando el rendimiento.

## 🛠️ Tecnologías Utilizadas

* [cite_start]**Vue.js 3**: Framework progresivo para construir la interfaz de usuario[cite: 1, 20].
* [cite_start]**Pinia**: Gestión de estado global para manejar los favoritos y el almacenamiento persistente[cite: 261, 524].
* [cite_start]**Vue Router**: Navegación entre vistas (Home, Pokémons, Detalles, Favoritos)[cite: 222, 523].
* [cite_start]**Axios**: Cliente HTTP para realizar peticiones a la API[cite: 196].
* [cite_start]**Bootstrap 5**: Framework de CSS para un diseño responsivo y moderno[cite: 337, 434].
* [cite_start]**LocalStorage**: Persistencia de datos para que no pierdas tus favoritos al recargar[cite: 290, 295].

## 📂 Arquitectura del Proyecto

El proyecto sigue una estructura organizada por responsabilidades:

* [cite_start]**`src/composable/`**: Lógica reutilizable para peticiones fetch (`useGetData.js`) [cite: 194-197].
* [cite_start]**`src/store/`**: Gestión de favoritos y persistencia con Pinia (`favoritos.js`) [cite: 285-288].
* [cite_start]**`src/views/`**: Páginas principales como `PokemonsView`, `PokeView` y `FavoritosView`[cite: 309, 366, 402].
* [cite_start]**`src/router/`**: Configuración de rutas y navegación dinámica [cite: 220-221].

## 🚀 Características Principales

1.  **Exploración**: Listado dinámico de Pokémon con paginación de 12 elementos por página.
2.  **Fichas de Detalle**: Información específica (ID, peso, altura, habilidades e imagen) de cada criatura.
3.  **Sistema de Favoritos**: CRUD en memoria con persistencia local que permite agregar y eliminar Pokémon.
4.  **Diseño Responsivo**: Adaptado para dispositivos móviles y escritorio.

## 📦 Instalación y Uso


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

### Compile and Minify for Production

```sh
npm run build
```
