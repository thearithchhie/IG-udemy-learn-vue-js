<template>
  <div class="post-detail">
    <h1>post detail</h1>
    <p>Display content from post page id {{ $route.params.id }}</p>
    <button @click="showPostId">show post id</button>
    <button @click="goHomeIn3Second">Go home in 3 second </button>
    <button @click="goToFirstPagePost">Go first page post </button>
  </div>
</template>

<script setup>
import { useRoute , useRouter} from 'vue-router';
const route = useRoute(); // Vue developer recommend use like this
const router = useRouter();
 
 const showPostId = () => {
  alert(`The ID of the page pos ${route.params.id}`);
 }
 const goHomeIn3Second = () => {
  setTimeout(() => {
    router.push({ name: 'home'});
  }, 2000);
 }

 const goToFirstPagePost = () => {
  router.push({name: 'postDetail', params: {
    id: 'id1'
  }})
 }
</script>

<style scoped>
button {
  margin: 10px;
  padding: 5px;
}
</style>
