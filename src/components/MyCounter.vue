<template>
  <section>
    <h2 @click="resetCounter">Counter:{{ counter }}</h2>
    <h3>Square: {{ squareCounter }}</h3>
    <div>
      <button
        class="p-3 bg-blue-500 text-2xl ml-5 w-sm rounded-full cursor-pointer text-white"
        @click="incrementCounter"
      >
        +1
      </button>
      <button
        class="p-3 bg-blue-500 text-2xl ml-5 w-sm rounded-full cursor-pointer text-white"
        @click="decrementCounter"
      >
        -1
      </button>
    </div>
  </section>
</template>

// El atributo setup permite usar la sintaxis de Composition API sin necesidad
de exportar un objeto

<script lang="ts" setup>
import { useCounter } from "@/composables/useCounter";
const { value = 0 } = defineProps<{ value?: number }>();

const {
  counter,
  decrementCounter,
  incrementCounter,
  resetCounter,
  squareCounter,
} = useCounter(value);
</script>

// scoped se usa para que los estilos solo apliquen a este componente
<style scoped>
h2:hover {
  color: red;
  cursor: pointer;
}
</style>
