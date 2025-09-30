<script setup lang="ts">
import ChatBox from "@/components/chat/ChatBox.vue";
import ChatMessages from "@/components/chat/ChatMessages.vue";
import HeaderChat from "@/components/chat/HeaderChat.vue";
import { Button } from "@/components/ui/button";
import { useChat } from "@/composables/useChat";
import { Ellipsis, MessageCircleMore, Phone, Video } from "lucide-vue-next";

const { addMessage, messages } = useChat();
</script>

<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div
      class="bg-white m-2 rounded-xl shadow-sm border-b p-4 flex justify-between items-center"
    >
      <HeaderChat />

      <div class="flex items-center gap-2">
        <Button variant="outline" class="cursor-pointer">
          <Video />
        </Button>

        <Button variant="outline" class="cursor-pointer">
          <Phone />
        </Button>

        <Button variant="outline" class="cursor-pointer">
          <Ellipsis />
        </Button>
      </div>
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
