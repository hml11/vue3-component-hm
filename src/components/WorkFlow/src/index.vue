<template>
  <div class="work-flow">
    <div class="fd-nav-content">
      <section class="dingflow-design">
        <div class="zoom">
          <div
            class="zoom-out"
            :class="nowVal == 50 && 'disabled'"
            @click="zoomSize(1)"
          ></div>
          <span>{{ nowVal }}%</span>
          <div
            class="zoom-in"
            :class="nowVal == 300 && 'disabled'"
            @click="zoomSize(2)"
          ></div>
        </div>
        <div class="box-scale" :style="`transform: scale(${nowVal / 100});`">
          <nodeWrap
            v-model:nodeConfig="props.nodeConfig"
            @showDrawer="showDrawer"
          />
          <div class="end-node">
            <div class="end-node-circle"></div>
            <div class="end-node-text">流程结束</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup name="WorkFlow" lang="ts">
import { ref } from "vue";
import nodeWrap from "@/components/WorkFlow/src/nodeWrap.vue";

const props = defineProps({
  nodeConfig: {
    type: Object,
    default: () => ({}),
  },
});
const nowVal = ref(100);
// const reErr = ({ childNode }) => {
//   if (childNode) {
//     let { type, error, nodeName, conditionNodes } = childNode;
//     if (type == 1 || type == 2) {
//       if (error) {
//         tipList.value.push({
//           name: nodeName,
//           type: ["", "审核人", "抄送人"][type],
//         });
//       }
//       reErr(childNode);
//     } else if (type == 3) {
//       reErr(childNode);
//     } else if (type == 4) {
//       reErr(childNode);
//       for (var i = 0; i < conditionNodes.length; i++) {
//         if (conditionNodes[i].error) {
//           tipList.value.push({
//             name: conditionNodes[i].nodeName,
//             type: "条件",
//           });
//         }
//         reErr(conditionNodes[i]);
//       }
//     }
//   } else {
//     childNode = null;
//   }
// };
// const saveSet = async () => {
//   setIsTried(true);
//   tipList.value = [];
//   reErr(nodeConfig.value);
//   if (tipList.value.length != 0) {
//     tipVisible.value = true;
//     return;
//   }
//   processConfig.value.flowPermission = flowPermission.value;
//   // eslint-disable-next-line no-console
//   console.log(JSON.stringify(processConfig.value));
//   let res = await setWorkFlowData(processConfig.value);
//   if (res.code == 200) {
//     ElMessage.success("设置成功");
//     setTimeout(function () {
//       window.location.href = "";
//     }, 200);
//   }
// };

const showDrawer = (node: any) => {
  console.log("node", node);
};
const zoomSize = (type: number) => {
  if (type == 1) {
    if (nowVal.value == 50) {
      return;
    }
    nowVal.value -= 10;
  } else {
    if (nowVal.value == 300) {
      return;
    }
    nowVal.value += 10;
  }
};
</script>
<style lang="scss">
@import "./index.scss";
</style>
