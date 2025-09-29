<template>
  <section>
    <h2 @click="resetCounter">Counter:{{ counter }}</h2>
    <h3>Square: {{ squareCounter }}</h3>
    <div>
      <button @click="incrementCounter">+1</button>
      <button @click="decrementCounter">-1</button>
    </div>
  </section>
</template>

// El atributo setup permite usar la sintaxis de Composition API sin necesidad
de exportar un objeto
<script lang="ts">
import { useCounter } from "@/composables/useCounter";
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  props: {
    value: Number,
  },
  setup({ value }) {
    const {
      counter,
      decrementCounter,
      incrementCounter,
      resetCounter,
      squareCounter,
    } = useCounter(value);

    return {
      // propiedades
      counter,
      squareCounter,
      //metodos
      decrementCounter,
      resetCounter,
      incrementCounter,
    };
  },
});
</script>

// scoped se usa para que los estilos solo apliquen a este componente
<style scoped>
h2:hover {
  color: red;
  cursor: pointer;
}
</style>
