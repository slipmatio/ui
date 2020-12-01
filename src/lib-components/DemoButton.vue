<template>
  <button>DEMO</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default /*#__PURE__*/ defineComponent({
  props: {
    icon: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      isPrimary: false,
      isSecondary: false,
      buttonType: 'button',
    }
  },
  created() {
    if (this.$attrs.primary !== undefined) {
      this.isPrimary = true
    } else if (this.$attrs.secondary !== undefined) {
      this.isSecondary = true
    }
    if (this.$attrs.submit !== undefined) {
      this.buttonType = 'submit'
    }
  },
})
</script>
