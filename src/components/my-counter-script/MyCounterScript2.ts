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
