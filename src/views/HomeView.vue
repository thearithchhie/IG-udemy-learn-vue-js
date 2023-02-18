<template>
  <div class="home">
    <div>
      <button @click="decrementCounter" class="btn">-</button>
      <span class="count">{{ counter }}</span>
      <button @click="incrementCounter" class="btn">+</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const counter = ref(0);
    const incrementCounter = () => {
      counter.value++
    }
    const decrementCounter = () => {
      if(counter.value > 0) {
      counter.value--
     }
    }
    return {
      counter,
      incrementCounter,
      decrementCounter
    }
  }
}
</script>

<style scope>
.home {
  text-align: center;
  padding: 20px;
}
.btn, .count {
  font-size: 40px;
  margin: 10px;
}
</style>