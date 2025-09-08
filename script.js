const { createApp, ref, onMounted } = Vue

createApp({
  setup() {
    const datos = ref([]) // Usar ref para reactividad
    onMounted(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => { // Corregir la sintaxis de la función flecha
          datos.value = json
          console.log(datos.value)
        });
    })

    return {
      datos // Retornar datos para usar en el template
    }
  }
}).mount('#app')