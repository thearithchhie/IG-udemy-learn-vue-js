<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show Modal</button>
    <Teleport to="body">
      <div class="modal" v-if="showModal">
      <h1>This is a modal</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus nemo laboriosam, obcaecati soluta recusandae.</p>
      <button @click="showModal = false">Hide modal</button>
    </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);
</script>

<style scoped>
.modal {
  background-color: beige;
  padding: 10px;
  color: black;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
}
</style>