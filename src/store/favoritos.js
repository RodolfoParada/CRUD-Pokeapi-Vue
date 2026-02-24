import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoritosStore = defineStore('favoritos', () => {
    const favoritos = ref([])

    const add = (poke) => {
        // Evitamos duplicados
        if (!findPoke(poke.name)) {
            favoritos.value.push(poke)
        }
    }

    const remove = (id) => {
        favoritos.value = favoritos.value.filter(item => item.id !== id)
    }

    const findPoke = (name) => {
        return favoritos.value.find(item => item.name === name)
    }

    return {
        favoritos,
        add,
        remove,
        findPoke
    }
}, {
    persist: true // El plugin maneja el localStorage automáticamente
})