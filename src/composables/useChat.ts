import { sleep } from "@/components/chat/helpers/sleep";
import type { ChatMessageInterface } from "@/interfaces/chat-message-interface";
import { useQuery } from "@tanstack/vue-query";
import { ref } from "vue";

export const useChat = () => {
  const messages = ref<ChatMessageInterface[]>([]);

  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["answer"],
    queryFn: async () => {
      await sleep(1.5);
      const res = await fetch("https://yesno.wtf/api");
      if (!res.ok) {
        throw new Error("Error al cargar los datos");
      }
      return res.json();
    },
    enabled: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    gcTime: 10 * 60 * 1000,
  });

  const addMessage = async (text: string) => {
    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
      image: undefined,
    });

    //evaluar si el el texto termina en signo de interrogacion (?)
    const hasQuestionMark = text.includes("?");

    if (hasQuestionMark) {
      await refetch();

      // Agregar la respuesta de la API como mensaje del bot
      if (data.value) {
        messages.value.push({
          id: new Date().getTime() + 1, // +1 para evitar ID duplicado
          itsMine: false,
          message: data.value.answer === "yes" ? "¡Sí!" : "No",
          image: data.value.image,
        });
      }
    }
  };

  return {
    //values
    messages,
    isLoading,
    isFetching,
    //methods.
    addMessage,
  };
};
