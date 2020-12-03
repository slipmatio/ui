<template>
  <div id="app">
    <ui-sample />

    <DemoButton />

    <SlipmatButton primary>Hello</SlipmatButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// Uncomment import and local "components" registration if library is not registered globally.
import { UiSample, DemoButton, SlipmatButton } from '@/entry.esm'

export default defineComponent({
  name: 'ServeDev',
  components: {
    UiSample,
    DemoButton,
    SlipmatButton,
  },
})
</script>
