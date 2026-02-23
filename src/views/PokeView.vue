<template>
  <div class="container mt-5">
    <div v-if="loading" class="text-center py-5">
      <div class="spinner-grow text-success" role="status"></div>
    </div>

    <div v-if="error" class="alert alert-danger shadow-sm text-center">
       <h4 class="alert-heading">¡Ups!</h4>
       <p>No pudimos encontrar ese Pokémon.</p>
    </div>

    <div v-if="data" class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow-lg border-0 overflow-hidden">
          <div class="bg-primary p-4 text-center text-white">
            <img 
              :src="data.sprites?.front_default" 
              :alt="data.name" 
              class="img-fluid pokemon-img"
            >
            <h1 class="text-capitalize mt-2 mb-0">{{ data.name }}</h1>
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
                <i class="bi bi-star-fill me-2"></i> 
                {{ findPoke(data.name) ? 'Ya en favoritos' : 'Agregar a Favoritos' }}
              </button>
              
              <button @click="back" class="btn btn-link text-muted mt-2">
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
.pokemon-img {
  width: 150px;
  filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.2));
}
.card {
  border-radius: 1.5rem;
}
</style>