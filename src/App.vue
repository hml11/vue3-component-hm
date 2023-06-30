<script setup lang="ts">
import { ref } from "vue";
// import HelloWorld from './components/HelloWorld.vue'
const visiable = ref(false);
</script>

<template>
  <div>
    <el-button @click="visiable = true">打开dialog</el-button>
    <LanDialog v-model="visiable" title="查看" width="800px">
      <div>这是弹窗</div>
    </LanDialog>
  </div>
</template>

<style scoped></style>
