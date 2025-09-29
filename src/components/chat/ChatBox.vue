<script setup lang="ts">
import { SendHorizontal } from "lucide-vue-next";
import Button from "../ui/button/Button.vue";
import Input from "../ui/input/Input.vue";
import { ref } from "vue";
import { toast } from "vue-sonner";
import { Card } from "../ui/card";

const message = ref("");

const emits = defineEmits<{
  sendMessage: [text: string];
}>();

const sendMessage = () => {
  if (!message.value) {
    toast.error("El mensaje no puede estar vacio");
    return;
  }
  toast.success("Mensaje enviado satisfactoriamente");
  emits("sendMessage", message.value);
  message.value = "";
};
</script>

<template>
  <Card class="p-4 flex flex-row items-center justify-between">
    <Input
      autofocus
      v-model="message"
      type="text"
      placeholder="Type your message..."
      @keypress.enter="sendMessage"
    />
    <Button
      @click="sendMessage"
      variant="default"
      size="icon"
      class="cursor-pointer"
    >
      <SendHorizontal />
    </Button>
  </Card>
</template>
