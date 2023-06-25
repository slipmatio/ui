<script setup lang="ts">
import SlipmatButton from './components/SlipmatButton.vue'
</script>
<template>
  <div class="container flex flex-col space-y-4">
    <SlipmatButton primary>Hello primary</SlipmatButton>
    <SlipmatButton secondary>Hello secondary</SlipmatButton>
    <SlipmatButton is-submit>Hello submit</SlipmatButton>
    <SlipmatButton>Hello default</SlipmatButton>
  </div>
</template>
