<script setup lang="ts">
interface Props {
  message: string;
  itsMine?: boolean;
  image?: string;
}

const { image, itsMine = false, message } = defineProps<Props>();
</script>

<template>
  <div v-if="itsMine" class="flex justify-end">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-xs">
      {{ message }}
    </div>
  </div>

  <div v-else class="flex">
    <div class="bg-gray-300 text-black p-2 rounded-lg max-xs">
      {{ message }}
      <img
        v-if="image"
        :src="image"
        alt="Imagen"
        class="w-52 h-52 object-cover rounded-md"
      />
    </div>
  </div>
</template>
