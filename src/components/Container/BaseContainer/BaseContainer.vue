<template>
  <div class="container bg-gray-100 w-full h-full">
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
export default {
  name: "BaseContainer",
  props:{
    width:  {
      type: String,
      default: 'full',
      valida
    } 
  },
  setup() {},
};
</script>