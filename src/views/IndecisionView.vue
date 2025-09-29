<script setup lang="ts">
import ChatBox from "@/components/chat/ChatBox.vue";
import ChatMessages from "@/components/chat/ChatMessages.vue";
import { useChat } from "@/composables/useChat";
import { MessageCircleMore } from "lucide-vue-next";

const { addMessage, messages, isLoading, isFetching } = useChat();
</script>

<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Yo mismo</span>
    </div>
    <div
      v-if="messages.length === 0"
      class="flex-1 flex flex-col items-center justify-center p-8 text-center"
    >
      <MessageCircleMore
        class="text-gray-400 mb-2"
        :size="80"
        :stroke-width="1.25"
      />
      <h3 class="text-lg font-medium text-gray-600 mb-2">
        No hay mensajes aún
      </h3>
      <p class="text-gray-500 text-sm">
        Comienza una conversación escribiendo tu primer mensaje
      </p>
    </div>

    <ChatMessages :messages="messages" />

    <ChatBox @send-message="addMessage" />
  </div>
</template>
