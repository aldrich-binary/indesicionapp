import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  props: {
    value: Number,
  },
  setup({ value }) {
    const counter = ref(value ?? 0);
    const squareCounter = computed(() => counter.value * counter.value);
    const incrementCounter = () => {
      counter.value++;
    };
    const decrementCounter = () => {
      counter.value--;
    };
    const resetCounter = () => {
      counter.value = 0;
    };

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
