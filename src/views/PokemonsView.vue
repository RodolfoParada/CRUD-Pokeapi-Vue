<script setup>
import { useGetData } from '../composable/getData'; 
import { RouterLink, useRouter } from 'vue-router';  
import { useFavoritosStore } from '../store/favoritos'; 

// Inicialización de herramientas
const router = useRouter(); 
const useFavoritos = useFavoritosStore(); 
const { data, loading, getData, error } = useGetData(); 

/**
 * Navega programáticamente a la ruta de inicio.
 * Se asegura de usar el router correctamente para evitar errores 404.
 */
const back = () => {
  router.push('/'); // [cite: 425]
};

// Carga inicial de datos limitada a 12 pokémons por página
getData('https://pokeapi.co/api/v2/pokemon?limit=12');
</script>

<template>
  <div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="display-5 text-primary mb-0">Explora los Pokémons</h1>
      <button @click="back" class="btn btn-outline-secondary btn-sm">
        Volver al Inicio
      </button>
    </div>

    <div v-if="loading" class="d-flex justify-content-center my-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>

    <div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>

    <div v-if="data">
      <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        <div v-for="poke in data.results" :key="poke.name" class="col">
          <div class="card h-100 shadow-sm border-0 transition-hover">
            
            <div class="text-center bg-light p-3">
              <img 
                :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.url.split('/')[6]}.png`" 
                :alt="poke.name"
                class="img-fluid pokemon-img"
                loading="lazy"
              >
            </div>

            <div class="card-body text-center">
              <div class="mb-3">
                <span class="badge rounded-pill bg-light text-dark p-2 px-3 border">
                  #{{ poke.url.split('/')[6] }}
                </span>
              </div>
              
              <h5 class="card-title text-capitalize fw-bold">{{ poke.name }}</h5>
              
              <router-link 
                :to="`/pokemons/${poke.name}`" 
                class="btn btn-outline-primary btn-sm mt-2 w-100"
              >
                Ver detalles
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-between align-items-center mt-5">
        <button
          :disabled="!data.previous"
          class="btn btn-warning px-4 shadow-sm"
          @click="getData(data.previous)" 
        >
          Anterior
        </button>

        <span class="text-muted small">Mostrando 12 por página</span>

        <button
          :disabled="!data.next"
          class="btn btn-primary px-4 shadow-sm"
          @click="getData(data.next)"
        >
          Siguiente
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pokemon-img {
  width: 96px;
  height: 96px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}

.transition-hover {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.transition-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
}

.card-title {
  color: #2c3e50;
}
</style>