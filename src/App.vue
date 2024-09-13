<script setup>
import JSON from './components/JSON.vue'
import Form from './components/Form.vue'
import Bheader from './components/Bheader.vue';

</script>

<template>
  <div class="main-container">
    <header>
      <Bheader />
    </header>

    <main class="main-box">
      <router-view></router-view>
    </main>
  </div>
</template>


<style>
.highlighted-author {
  font-weight: bold;
  color: blue;
}

.main-box {
  display: grid;
  place-items: center;

}
</style>
