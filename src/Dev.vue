<script setup lang="ts">
import { ref } from 'vue'
import SlipmatButton from './components/SlipmatButton.vue'

const testWorking = ref(false)

function startWorking() {
  testWorking.value = true
  setTimeout(() => {
    testWorking.value = false
  }, 1000)
}
</script>
<template>
  <h2>SlipmatButton</h2>
  <div class="w-full space-y-2">
    <div class="container flex flex-row items-center space-x-2">
      <SlipmatButton>primary</SlipmatButton>
      <SlipmatButton secondary>secondary</SlipmatButton>
    </div>
    <div class="container flex flex-row items-center space-x-2">
      <SlipmatButton data-testid="working" :is-working="true">working</SlipmatButton>
      <SlipmatButton
        data-testid="working-downloading"
        :is-working="true"
        working-text="Downloading"
      >
        downloading
      </SlipmatButton>
      <SlipmatButton
        data-testid="test-working"
        :is-working="testWorking"
        @click.prevent="startWorking"
        working-text="is working"
      >
        test working
      </SlipmatButton>
    </div>
    <div class="container flex flex-row items-center space-x-2">
      <SlipmatButton secondary :is-working="true">secondary</SlipmatButton>
      <SlipmatButton secondary :is-working="true" working-text="Secondary downloading">
        secondary downloading
      </SlipmatButton>
    </div>
    <div class="container flex flex-row items-center space-x-2">
      <SlipmatButton>no icon</SlipmatButton>
      <SlipmatButton icon="trash">trash</SlipmatButton>
      <SlipmatButton icon="new">new</SlipmatButton>
      <SlipmatButton icon="edit">edit</SlipmatButton>
      <SlipmatButton icon="download">download</SlipmatButton>
      <SlipmatButton icon="upload">upload</SlipmatButton>
      <SlipmatButton icon="reset">reset</SlipmatButton>
    </div>
    <div class="flex flex-col w-1/2 space-y-2">
      <SlipmatButton>normal width</SlipmatButton>
      <SlipmatButton full-width>full-width</SlipmatButton>
      <SlipmatButton secondary icon="new">normal new</SlipmatButton>
      <SlipmatButton secondary icon="new" full-width>full-width new</SlipmatButton>
    </div>
  </div>
</template>
