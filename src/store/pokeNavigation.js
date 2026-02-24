import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePokeNavigationStore = defineStore('pokeNavigation', () => {

  const currentUrl = ref('https://pokeapi.co/api/v2/pokemon?limit=12')

  const setUrl = (url) => {
    currentUrl.value = url
  }

  return {
    currentUrl,
    setUrl
  }

}, {
  persist: true
})