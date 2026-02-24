<script setup>
import { useGetData } from '../composable/getData'; // [cite: 416]
import { useRoute, useRouter } from 'vue-router'; // 
import { useFavoritosStore } from '../store/favoritos'; // 

// Inicialización de herramientas de navegación
const route = useRoute(); // [cite: 420]
const router = useRouter(); // 
const useFavoritos = useFavoritosStore(); // [cite: 421]

// Desestructuración de funciones del store y composable
const { add, findPoke } = useFavoritos; // [cite: 422]
const { getData, data, loading, error } = useGetData(); // [cite: 423]

/**
 * Función corregida para volver. 
 * Redirige al usuario a la ruta principal ('/') definida en el router.
 */
const back = () => {
  router.push('/'); // [cite: 425]
};

// Petición de datos basada en el nombre del Pokémon de la URL
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`); // [cite: 427]
</script>

<template>
  <div class="container py-5">
    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-primary" role="status"></div>
      <p class="mt-2 text-muted">Cargando información del Pokémon...</p>
    </div>

    <div v-if="error" class="alert alert-danger shadow-sm text-center">
      <h4 class="alert-heading">¡Error!</h4>
      <p>No se pudo encontrar información de: <strong>{{ $route.params.name }}</strong></p>
      <button @click="back" class="btn btn-outline-danger btn-sm">Volver al listado</button>
    </div>

    <div v-if="data" class="row justify-content-center">
      <div class="col-md-6 col-lg-5">
        <div class="card shadow-lg border-0 overflow-hidden">
          
          <div class="card-header bg-primary text-white text-center py-4">
            <img 
              :src="data.sprites?.front_default" 
              :alt="data.name" 
              class="img-fluid pokemon-detail-img"
            >
            <h2 class="text-capitalize mt-2 mb-0">{{ data.name }}</h2>
          </div>

          <div class="card-body p-4 text-center">
            <div class="d-flex justify-content-around mb-4">
              <div class="text-center">
                <small class="text-muted d-block">Altura</small>
                <strong>{{ data.height / 10 }} m</strong>
              </div>
              <div class="text-center border-start border-end px-4">
                <small class="text-muted d-block">Peso</small>
                <strong>{{ data.weight / 10 }} kg</strong>
              </div>
              <div class="text-center">
                <small class="text-muted d-block">ID</small>
                <strong>#{{ data.id }}</strong>
              </div>
            </div>

            <div class="d-grid gap-2">
              <button 
                :disabled="findPoke(data.name)" 
                class="btn btn-success py-2 shadow-sm" 
                @click="add(data)"
              >
                {{ findPoke(data.name) ? '⭐ En favoritos' : '⭐ Agregar a Favoritos' }}
              </button>
              
              <button @click="back" class="btn btn-outline-secondary mt-2">
                Volver al listado
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pokemon-detail-img {
  width: 150px;
  height: 150px;
  filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.2));
}

.card {
  border-radius: 1.5rem;
}

.text-capitalize {
  text-transform: capitalize;
}
</style>