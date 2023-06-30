<script setup lang="ts" name="LanDialog">
import { propTypes } from "@/utils/propTypes";
import { computed, useAttrs, useSlots } from "vue";
import { isNumber } from "@/utils/is";

const slots = useSlots();

const props = defineProps({
  modelValue: propTypes.bool.def(false),
  title: propTypes.string.def("Dialog"),
  maxHeight: propTypes.oneOfType([String, Number]).def("500px"),
});

const getBindValue = computed(() => {
  const delArr: string[] = ["title", "maxHeight"];
  const attrs = useAttrs();
  const obj = { ...attrs, ...props } as any;
  for (const key in obj) {
    if (delArr.indexOf(key) !== -1) {
      delete obj[key];
    }
  }
  return obj;
});

const dialogHeight = computed(() => {
  return isNumber(props.maxHeight) ? `${props.maxHeight}px` : props.maxHeight;
});
</script>

<template>
  <ElDialog
    v-bind="getBindValue"
    destroy-on-close
    lock-scroll
    draggable
    :close-on-click-modal="false"
  >
    <template #header>
      <div>
        <slot name="title">
          {{ title }}
        </slot>
      </div>
    </template>

    <ElScrollbar
      :style="{ height: dialogHeight }"
      wrap-style="padding: 0 20px 0 0;"
    >
      <slot></slot>
    </ElScrollbar>

    <template v-if="slots.footer" #footer>
      <slot name="footer"></slot>
    </template>
  </ElDialog>
</template>

<style lang="scss">
.el-dialog__header {
  margin-right: 0 !important;
  border-bottom: 1px solid var(--tags-view-border-color);
}

.el-dialog__body {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}

.el-dialog__footer {
  border-top: 1px solid var(--tags-view-border-color);
}

.is-hover {
  &:hover {
    color: var(--el-color-primary) !important;
  }
}

.dark {
  .el-dialog__header {
    border-bottom: 1px solid var(--el-border-color);
  }

  .el-dialog__footer {
    border-top: 1px solid var(--el-border-color);
  }
}
</style>
