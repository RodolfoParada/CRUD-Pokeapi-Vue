<script setup>
import { useGetData } from '../composable/getData'; // [cite: 416]
import { useRoute, useRouter } from 'vue-router'; // [cite: 417]
import { useFavoritosStore } from '@/store/favoritos'; // [cite: 418]

const route = useRoute(); // [cite: 420]
const router = useRouter(); // [cite: 419]
const useFavoritos = useFavoritosStore(); // [cite: 421]

const { add, findPoke } = useFavoritos; // [cite: 422]
const { getData, data, loading, error } = useGetData(); // [cite: 423]

// Función para volver atrás [cite: 424]
const back = () => {
  router.push('/pokemons'); // 
};

// Petición de datos usando el nombre que viene en la URL 
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>

<template>
  <div class="container py-5">
    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-primary" role="status"></div>
      <p class="mt-2 text-muted">Buscando datos del Pokémon...</p>
    </div>

    <div v-else-if="error" class="alert alert-danger text-center">
      <h4>¡Error!</h4>
      <p>No se pudo encontrar información de: <strong>{{ $route.params.name }}</strong></p>
      <button @click="back" class="btn btn-outline-danger btn-sm">Volver al listado</button>
    </div>

    <div v-else-if="data" class="row justify-content-center">
      <div class="col-md-6 col-lg-5">
        <div class="card shadow-lg border-0">
          
          <div class="card-header bg-primary text-white text-center py-4">
            <img 
              :src="data.sprites?.front_default" 
              :alt="data.name" 
              class="img-fluid pokemon-detail-img"
            >
            <h2 class="text-capitalize mt-2 mb-0">{{ data.name }}</h2>
          </div>

          <div class="card-body">
            <div class="row text-center mb-4">
              <div class="col border-end">
                <small class="text-muted d-block">Altura</small>
                <strong>{{ data.height / 10 }} m</strong>
              </div>
              <div class="col border-end">
                <small class="text-muted d-block">Peso</small>
                <strong>{{ data.weight / 10 }} kg</strong>
              </div>
              <div class="col">
                <small class="text-muted d-block">ID</small>
                <strong>#{{ data.id }}</strong>
              </div>
            </div>

            <h6 class="fw-bold">Habilidades:</h6>
            <div class="mb-4">
              <span 
                v-for="skill in data.abilities" 
                :key="skill.ability.name"
                class="badge bg-light text-dark border me-1 text-capitalize"
              >
                {{ skill.ability.name }}
              </span>
            </div>

            <div class="d-grid gap-2">
              <button 
                :disabled="findPoke(data.name)" 
                class="btn btn-success shadow-sm" 
                @click="add(data)"
              >
                {{ findPoke(data.name) ? '⭐ En tus favoritos' : '⭐ Agregar a Favoritos' }}
              </button>
              
              <button @click="back" class="btn btn-outline-secondary">
                Volver
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
  width: 160px;
  height: 160px;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
}
.card {
  border-radius: 1rem;
  overflow: hidden;
}
</style>