<template>
  <img src="https://cdn.shopify.com/s/files/1/0343/5246/3917/files/The_Camera_Store_Logo_1200x628_4690adac-aed6-43f1-af27-64e46fdd22da.jpg?v=1603922356" />
  <button> 
    <RouterLink to ='/detailCaption'>
      <DetailCaptionView>
      detail caption
    </DetailCaptionView>
    </RouterLink>
  </button>
</template>

<script setup>
import DetailCaptionView from './DetailCaptionView.vue';
</script>

<style scoped>
img {
  margin-top: 100px;
  width: 400px;
  height: 400px;
}
</style>