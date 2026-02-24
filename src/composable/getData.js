import { ref } from 'vue'
import axios from 'axios'

export const useGetData = () => {
    const data = ref(null)
    const error = ref(null)
    const loading = ref(true)

    const getData = async (url) => {
        loading.value = true
        error.value = null
        try {
            const res = await axios.get(url)
            data.value = res.data
        } catch (e) {
            console.error(e)
            error.value = "Error de servidor al cargar los datos"
        } finally {
            loading.value = false // Esto quita el skeleton pase lo que pase
        }
    }

    return {
        getData,
        data,
        loading,
        error
    }
}