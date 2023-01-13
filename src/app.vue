<template>
  <div class="base">1</div>
  <div class="text-25px text-#ff6700 bg-#ccc">2</div>
  <test :msg="obj"></test>
  <button @click="toggle">toggle</button>
</template>

<script setup lang="ts">
import test from './components/test.vue';
import { request } from '@/apis';
import { ref } from 'vue';
request({ url: '1111111' });

const obj = ref(1);
const toggle = () => {
  obj.value++;
};
</script>

<style lang="scss">
.base {
  display: flex;
  width: 100px;
  height: 100px;
  font-size: 10px;
  background: #000;
  border: 1px solid #ccc;
}
</style>
