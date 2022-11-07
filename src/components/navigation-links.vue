<template>
  <nav class="navigation-links-nav" v-bind:class="rootClassName">
    <span class="navigation-links-text">{{ SecondPage }}</span>
  </nav>
</template>

<script>
export default {
  name: 'NavigationLinks',
  props: {
    SecondPage: {
      type: String,
      default: 'Second Page',
    },
    text: {
      type: String,
      default: 'About',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.navigation-links-nav {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}








@media(max-width: 767px) {
  .navigation-links-nav {
    align-items: flex-start;
    flex-direction: column;
  }
  .navigation-links-text {
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
