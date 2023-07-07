<template>
  <div class="add-node-btn-box">
    <div class="add-node-btn">
      <el-popover placement="right-start" v-model="visible" width="auto">
        <div class="add-node-popover-body">
          <a class="add-node-popover-item approver" @click="addType(1)">
            <div class="item-wrapper">
              <el-icon><Stamp /></el-icon>
            </div>
            <p>审批人</p>
          </a>
          <a class="add-node-popover-item notifier" @click="addType(2)">
            <div class="item-wrapper">
              <el-icon><Promotion /></el-icon>
            </div>
            <p>抄送人</p>
          </a>
          <a class="add-node-popover-item condition" @click="addType(4)">
            <div class="item-wrapper">
              <VIcon icon="svg-icon:branch" color="#15bc83"></VIcon>
            </div>
            <p>条件分支</p>
          </a>
        </div>
        <template #reference>
          <el-button type="primary" circle>
            <el-icon><Plus /></el-icon>
          </el-button>
        </template>
      </el-popover>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Plus, Stamp, Promotion } from "@element-plus/icons-vue";
import _ from "lodash";
let props = defineProps({
  childNodeP: {
    type: Object,
    default: () => ({}),
  },
});
let emits = defineEmits(["update:childNodeP"]);
let visible = ref(false);
const addType = (type: number) => {
  visible.value = false;
  if (type != 4) {
    var data;
    if (type == 1) {
      data = {
        nodeName: "审核人",
        error: true,
        type: 1,
        settype: 1,
        selectMode: 0,
        selectRange: 0,
        directorLevel: 1,
        examineMode: 1,
        noHanderAction: 1,
        examineEndDirectorLevel: 0,
        childNode: props.childNodeP,
        nodeUserList: [],
      };
    } else if (type == 2) {
      data = {
        nodeName: "抄送人",
        type: 2,
        ccSelfSelectFlag: 1,
        childNode: props.childNodeP,
        nodeUserList: [],
      };
    }
    emits("update:childNodeP", data);
  } else {
    emits("update:childNodeP", {
      nodeName: "路由",
      type: 4,
      childNode: null,
      conditionNodes: [
        {
          nodeName: "条件1",
          error: true,
          type: 3,
          priorityLevel: 1,
          conditionList: [],
          nodeUserList: [],
          childNode: _.cloneDeep(props.childNodeP),
        },
        {
          nodeName: "默认条件",
          type: 3,
          isDefault: true, // 是否默认
          priorityLevel: 2,
          conditionList: [],
          nodeUserList: [],
          childNode: _.cloneDeep(props.childNodeP),
        },
      ],
    });
  }
};
</script>
<style scoped lang="scss">
.add-node-btn-box {
  width: 240px;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    margin: auto;
    width: 2px;
    height: 100%;
    background-color: #cacaca;
  }
  .add-node-btn {
    user-select: none;
    width: 240px;
    padding: 20px 0 32px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    flex-shrink: 0;
    -webkit-box-flex: 1;
    flex-grow: 1;
  }
}
</style>
<style lang="scss">
.add-node-popover-body {
  display: flex;
  .add-node-popover-item {
    margin-right: 10px;
    cursor: pointer;
    text-align: center;
    flex: 1;
    color: #191f25 !important;
    .item-wrapper {
      user-select: none;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      margin-bottom: 5px;
      background: #fff;
      border: 1px solid #e2e2e2;
      border-radius: 50%;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      svg {
        width: 32px;
        height: 32px;
      }
      .el-icon {
        width: 32px;
        height: 32px;
        svg {
          font-size: 32px;
        }
      }
    }
    &.approver {
      .item-wrapper {
        color: #ff943e;
      }
    }
    &.notifier {
      .item-wrapper {
        color: #3296fa;
      }
    }
    &.condition {
      .item-wrapper {
        color: #15bc83;
      }
    }
    &:hover {
      .item-wrapper {
        background: #3296fa;
        box-shadow: 0 10px 20px 0 rgba(50, 150, 250, 0.4);
      }
      .el-icon {
        color: #fff;
      }
      svg {
        path {
          fill: #fff;
        }
      }
    }
    &:active {
      .item-wrapper {
        box-shadow: none;
        background: #eaeaea;
      }
      .el-icon {
        color: inherit;
      }
    }
  }
}
</style>
