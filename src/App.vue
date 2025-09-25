<template>
  <h2>Mi primera app en Vue</h2>
  <hr />
  <MyCounter :value="2" />
  <MyCounterScript :value="5" />
  <MyCounterScript2 :value="10" />
</template>

// El atributo setup permite usar la sintaxis de Composition API sin necesidad
de exportar un objeto
<script lang="ts" setup>
import MyCounter from "./components/MyCounter.vue";
import MyCounterScript from "./components/MyCounterScript.vue";
import MyCounterScript2 from "./components/my-counter-script/MyCounterScript2.vue";
</script>

// scoped se usa para que los estilos solo apliquen a este componente
<style scoped></style>
