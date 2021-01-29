<template>
  <button
    :type="buttonType"
    class="btn"
    :class="{
      'primary': isPrimary,
      'secondary': isSecondary,
      'full-width': isFullWidth,
    }"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="w-4 h-4 mr-1 -ml-1 animate-spin"
      v-if="isWorking"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      class="w-4 h-4 mr-1 -ml-1"
      v-if="icon === 'trash' && !isWorking"
    >
      <path
        fill-rule="evenodd"
        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
        clip-rule="evenodd"
      />
    </svg>
    <svg
      class="w-4 h-4 mr-1 -ml-1"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      v-if="icon === 'new' && !isWorking"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
    <svg
      class="w-4 h-4 mr-1 -ml-1"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      v-if="icon === 'edit' && !isWorking"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
    <svg
      class="w-4 h-4 mr-1 -ml-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      v-if="icon === 'download' && !isWorking"
    >
      <path
        fill-rule="evenodd"
        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
    <svg
      class="w-4 h-4 mr-1 -ml-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      v-if="icon === 'upload' && !isWorking"
    >
      <path
        fill-rule="evenodd"
        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
        clip-rule="evenodd"
      />
    </svg>
    <svg
      class="w-4 h-4 mr-1 -ml-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      v-if="icon === 'reset' && !isWorking"
    >
      <path
        fill-rule="evenodd"
        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
        clip-rule="evenodd"
      />
    </svg>
    <slot v-if="!isWorking" />
    <template v-if="isWorking">
      {{ workingText }}
    </template>
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default /*#__PURE__*/ defineComponent({
  props: {
    icon: {
      type: String,
      required: false,
    },
    isWorking: {
      type: Boolean,
      required: false,
    },
    workingText: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      isPrimary: false,
      isSecondary: false,
      buttonType: 'button',
      isFullWidth: false,
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
    if (this.$attrs['full-width'] !== undefined) {
      this.isFullWidth = true
    }
  },
})
</script>
<style>
.btn {
  @apply inline-flex px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 leading-5 transition duration-150 ease-in-out;
}

.btn.full-width {
  @apply justify-center w-full;
}

.btn.primary {
  @apply bg-slipmat-500 hover:bg-slipmat-600 dark:bg-slipmat-600 dark:hover:bg-slipmat-500 text-white focus:border-slipmat-400 hover:text-gray-100 active:bg-slipmat-500 focus:ring-opacity-50 focus:ring-slipmat-400 dark:focus:ring-slipmat-400;
}

.btn.secondary {
  @apply bg-white text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-slipmat-300 hover:bg-gray-50 active:bg-gray-50;
}

.btn.secondary svg {
  @apply text-gray-500;
}
</style>
