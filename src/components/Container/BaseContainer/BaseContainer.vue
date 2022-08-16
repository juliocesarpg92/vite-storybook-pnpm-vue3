<template>
  <div class="container bg-gray-100 h-full" :class="containerClass()">
    <!-- header -->
    <div class="border-b">
      <slot name="header "> header </slot>
    </div>
    <!-- content -->
    <div>
      <slot name="content"> content </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseContainer",
  props: {
    width: {
      type: String,
      default: "full",
      validator: (val: string) => {
        return ["full", "half"].includes(val);
      },
    },
  },
  setup(props) {
    const containerClass = () => {
      return {
        "w-full": props.width === "full",
        "w-1/2": props.width === "half",
      };
    };

    return {
      containerClass,
    };
  },
});
</script>
