<script setup lang="ts">
import type { ChatMessageInterface } from "@/interfaces/chat-message-interface";
import ChatMessage from "./ChatMessage.vue";
import { useChat } from "@/composables/useChat";
import ChatBoobleLoading from "./ChatBoobleLoading.vue";
import { watch, ref } from "vue";

const { messages = [] } = defineProps<{ messages: ChatMessageInterface[] }>();
const { isFetching } = useChat();

const chatRef = ref<HTMLDivElement | null>(null);

watch(
  () => [...messages],
  () => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: "smooth",
    });
  },
  { flush: "post" }
);
</script>

<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="w-full flex flex-col space-y-2">
      <ChatMessage
        v-for="message in messages"
        :key="message.id"
        :itsMine="message.itsMine"
        :message="message.message"
        :image="message.image"
      />

      <div v-if="isFetching">
        <ChatBoobleLoading />
      </div>
    </div>
  </div>
</template>
