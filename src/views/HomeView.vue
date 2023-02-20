<template>
  <div class="home">
    <h2 ref="appTitleRef">{{  appTitle }}</h2>
    <h1>{{ counterData.title }}</h1>
    <div>
      <button @click="decrementCounter" class="btn">-</button>
      <span class="count">{{ counterData.count }}</span>
      <button @click="incrementCounter" class="btn">+</button>
      <button @click="incrementCounterPlusTwo(2)" class="btn">+</button>
    </div>
    <h5>Counter is = {{ oddOrEvent }}</h5>
    <div class="edit">
      <h4>Edit counter title</h4>
      <input v-model="counterData.title" type="text" v-autofocus/>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue';
import { useCounter } from '@/use/useCounter';
import { vAutofocus } from '@/directives/vAutofocus';
const counter = ref(0),
      counterTitle = ref('My Counter:');
      const { 
        counterData,
        appTitle,
        incrementCounter,
        decrementCounter,
        oddOrEvent,
        incrementCounterPlusTwo
        } = useCounter();


</script>

<style scope>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.count {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 60px;
}
</style>