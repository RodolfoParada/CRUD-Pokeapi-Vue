<script setup>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useGetData } from '../composable/getData';
import { useFavoritosStore } from '../store/favoritos'; // Ruta relativa obligatoria

const route = useRoute();
const router = useRouter();
const storeFavoritos = useFavoritosStore();

const { add, findPoke } = storeFavoritos;
const { getData, data, loading, error } = useGetData();

const back = () => {
  router.push('/');
};

onMounted(() => {
  // Disparamos la petición al montar el componente
  if (route.params.name) {
    getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
  }
});
</script>

<template>
  <div class="container py-5">
    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-primary" role="status"></div>
      <p class="mt-2 text-muted">Buscando datos del Pokémon...</p>
    </div>

    <div v-else-if="error" class="alert alert-danger text-center shadow-sm">
      <h4 class="fw-bold">¡Error de conexión!</h4>
      <p>No se pudo encontrar información de: <strong>{{ route.params.name }}</strong></p>
      <button @click="back" class="btn btn-danger btn-sm">Volver al listado</button>
    </div>

    <div v-else-if="data" class="row justify-content-center">
      <div class="col-md-6 col-lg-5">
        <div class="card shadow-lg border-0 overflow-hidden">
          
          <div class="card-header bg-primary text-white text-center py-4">
            <img 
              :src="data.sprites?.other?.['official-artwork']?.front_default || data.sprites?.front_default" 
              :alt="data.name" 
              class="img-fluid pokemon-detail-img"
            >
            <h2 class="text-capitalize mt-3 mb-0 fw-bold">{{ data.name }}</h2>
          </div>

          <div class="card-body p-4">
            <div class="row text-center mb-4">
              <div class="col border-end">
                <small class="text-muted d-block text-uppercase">Altura</small>
                <span class="h6 fw-bold">{{ data.height / 10 }} m</span>
              </div>
              <div class="col border-end">
                <small class="text-muted d-block text-uppercase">Peso</small>
                <span class="h6 fw-bold">{{ data.weight / 10 }} kg</span>
              </div>
              <div class="col">
                <small class="text-muted d-block text-uppercase">ID</small>
                <span class="h6 fw-bold">#{{ data.id }}</span>
              </div>
            </div>

            <h6 class="fw-bold mb-3">Habilidades principales:</h6>
            <div class="mb-4 d-flex flex-wrap gap-2">
              <span 
                v-for="skill in data.abilities" 
                :key="skill.ability.name"
                class="badge bg-info text-dark border-0 py-2 px-3 mr-3 text-capitalize"
              >
                {{ skill.ability.name }}
              </span>
            </div>

            <div class="d-grid gap-3">
              <button 
                :disabled="findPoke(data.name)" 
                class="btn btn-success  shadow-sm" 
                @click="add(data)"
              >
                {{ findPoke(data.name) ? '⭐ Ya es favorito' : '⭐ Agregar a Favoritos' }}
              </button>
              
              <button @click="back" class="btn float-right btn-outline-secondary">
                <i class="bi bi-arrow-left"></i> Volver al listado
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
  width: 180px;
  height: 180px;
  filter: drop-shadow(0 8px 12px rgba(0,0,0,0.3));
  transition: transform 0.3s ease;
}
.pokemon-detail-img:hover {
  transform: scale(1.1);
}
.card {
  border-radius: 1.5rem;
}
.badge {
  font-size: 0.9rem;
}
</style>