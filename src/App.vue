// El atributo setup permite usar la sintaxis de Composition API sin necesidad
de exportar un objeto
<script lang="ts" setup>
import { Toaster } from "vue-sonner";
import IndecisionView from "./views/IndecisionView.vue";
import "vue-sonner/style.css";
</script>

// scoped se usa para que los estilos solo apliquen a este componente
<style scoped></style>

<template>
  <Toaster :rich-colors="true" />
  <IndecisionView />
</template>
