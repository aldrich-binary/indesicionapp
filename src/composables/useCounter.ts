import { ref, computed } from "vue";

export const useCounter = (initialNumber?: number) => {
  const counter = ref(initialNumber ?? 0);

  const incrementCounter = () => {
    counter.value = counter.value + 1;
  };

  const decrementCounter = () => {
    counter.value = counter.value - 1;
  };

  const resetCounter = () => {
    counter.value = 0;
  };

  const squareCounter = computed(() => counter.value * counter.value);

  return {
    //values
    counter,
    squareCounter,
    //methods
    incrementCounter,
    decrementCounter,
    resetCounter,
  };
};
