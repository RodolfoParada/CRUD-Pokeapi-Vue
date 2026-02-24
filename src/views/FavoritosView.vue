<script setup>
import { useFavoritosStore } from "@/store/favoritos";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";

const useFavoritos = useFavoritosStore();
const { favoritos } = storeToRefs(useFavoritos);
const { remove } = useFavoritos;
</script>

<template>
  <div class="container py-4">
    <h1 class="display-5 mb-4 text-primary text-center">Mis Favoritos ⭐</h1>

    <div v-if="favoritos.length === 0" class="alert alert-info text-center shadow-sm">
      Aún no has agregado ningún Pokémon a tu lista.
    </div>

    <div v-else class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
      <div v-for="poke in favoritos" :key="poke.id" class="col">
        <div class="card h-100 shadow-sm border-0 transition-hover">
          
          <div class="text-center bg-light p-3">
            <img 
              :src="poke.sprites?.front_default" 
              :alt="poke.name"
              class="img-fluid pokemon-img"
            >
          </div>

          <div class="card-body text-center ">
            <div class="mb-2">
              <span class="badge rounded-pill bg-dark text-white">
                #{{ poke.id }}
              </span>
            </div>
            <h5 class="card-title text-capitalize fw-bold">{{ poke.name }}</h5>
            
            <div class="d-grid gap-2 mt-3  ">
              <router-link 
                :to="`/pokemons/${poke.name}`" 
                class="btn btn-outline-primary btn-sm"
              >
                Detalles
              </router-link>
              <button 
                class="btn btn-danger ml-3 btn-sm" 
                @click="remove(poke.id)"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
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
</style>