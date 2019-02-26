<template lang="pug">
div
  slide-frame
  intro-animation
</template>

<script lang="ts">
import Vue from 'vue'
import SlideFrame from './components/slide-frame.vue'
import IntroAnimation from './components/intro-animation.vue';
export default Vue.extend({
  components: {
    SlideFrame,
    IntroAnimation,
  },
})
</script>
