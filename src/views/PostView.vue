<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" key="post.id">
        <RouterLink to="`postDetail/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>
    <textarea v-autofocus />
    <div>
      <button @click="incrementCounter(2)">incrementCounter: {{ counterData.count }}</button>
    </div>
  </div>
</template>

<script setup>
import { vAutofocus } from '@/directives/vAutofocus';
import { useCounter } from '@/use/useCounter';
import { ref } from 'vue';
const { counterData, incrementCounter } = useCounter();
console.log(counterData);
const posts = ref([
  {
    id: 'id1',
    title: 'post 1'
  },
  {
    id: 'id2',
    title: 'post 2'
  },
  {
    id: 'id3',
    title: 'post 3'
  }
]);
</script>

<style scoped>

</style>