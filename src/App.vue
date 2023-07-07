<script setup lang="ts">
import { reactive } from "vue";
const initFlow = reactive({
  nodeName: "发起人",
  type: 0,
  priorityLevel: "",
  settype: "",
  selectMode: "",
  selectRange: "",
  directorLevel: "",
  examineMode: "",
  noHanderAction: "",
  examineEndDirectorLevel: "",
  ccSelfSelectFlag: "",
  conditionList: [],
  nodeUserList: [],
  childNode: {
    nodeName: "审批人",
    error: false,
    type: 1,
    settype: 2,
    selectMode: 0,
    selectRange: 0,
    directorLevel: 1,
    examineMode: 1,
    noHanderAction: 2,
    examineEndDirectorLevel: 0,
    childNode: {
      nodeName: "抄送人",
      type: 2,
      ccSelfSelectFlag: 1,
      childNode: null,
      nodeUserList: [],
      error: false,
    },
    nodeUserList: [],
  },
  conditionNodes: [],
});
</script>

<template>
  <div class="app">
    <VWorkFlow :nodeConfig="initFlow"></VWorkFlow>
  </div>
</template>

<style scoped lang="scss">
.app {
  height: 100%;
}
</style>
