<template>
  <div class="button-container" v-bind:class="rootClassName">
    <button class="button-button button">{{ button }}</button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    rootClassName: String,
    button: {
      type: String,
      default: 'Get Started',
    },
  },
}
</script>

<style scoped>
.button-container {
  display: flex;
  position: relative;
}
.button-button {
  transition: 0.3s;
  margin-left: var(--dl-space-space-halfunit);
  padding-top: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-unit);
}
.button-button:hover {
  color: var(--dl-color-gray-white);
  background-color: var(--dl-color-gray-black);
}




</style>
