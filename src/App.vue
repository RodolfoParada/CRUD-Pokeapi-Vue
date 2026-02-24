<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-dark bg-dark shadow-sm py-2">
    <div class="container d-flex justify-content-between align-items-center">
      
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <img 
          src="@/assets/pokeapi.png" 
          alt="Logo" 
          width="70" 
          height="30" 
          class="d-inline-block align-text-top me-2"
        >
        <span class="fw-bold">PokeApp</span>
      </router-link>

      <div class="nav-buttons">
        <router-link 
          class="btn btn-outline-primary btn-sm me-2" 
          to="/"
          exact-active-class="active"
        >
          Pokemons
        </router-link>
        <router-link 
          class="btn btn-outline-primary btn-sm" 
          to="/favoritos"
          exact-active-class="active"
        >
          Favoritos
        </router-link>
      </div>

    </div>
  </nav>

  <div class="container mt-4">
    <RouterView />
  </div>
</template>

<style scoped>
/* Estilos para que los botones no ocupen todo el ancho y se vean profesionales */
.nav-buttons {
  display: flex;
  gap: 5px; /* Espacio pequeño entre botones */
}

/* Ajuste opcional: si quieres que el nav sea aún más angosto que el resto del contenido */
.navbar .container {
  max-width: 900px; /* Limita el ancho máximo del menú */
}

.navbar-brand {
  font-size: 1.1rem;
}

/* Estilo para el botón activo */
.active {
  background-color: #0d6efd !important;
  color: white !important;
}
</style>