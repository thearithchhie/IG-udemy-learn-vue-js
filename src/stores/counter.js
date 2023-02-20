import { defineStore} from 'pinia';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 3
  },
  actions: {
    increment() {
      this.counter++
    }
  }
});