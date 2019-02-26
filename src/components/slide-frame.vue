<template lang="pug">
.slide-frame
  .slider(:style="{ transform: `translateX(${position * -100}vw)`}", ref="slider")
    sound-slide
    center-slide
    tech-slide
  .buttons
    button.button(type="button", @click.prevent="move(-1)", :disabled="isLeftEnd")
      i.material-icons chevron_left
    button.button(type="button", @click.prevent="move(1)", :disabled="isRightEnd")
      i.material-icons chevron_right
  .indicators
    button.indicator(v-for="i in indicatorsArray", @click.prevent="jump(i)")
      i.material-icons(v-if="position === i") radio_button_checked
      i.material-icons(v-else) radio_button_unchecked
</template>

<style lang="stylus" scoped>
@require "../styles/include"

.slide-frame
  &
    position relative
    width 100vw
    height 100vh
    overflow hidden

  .slider
    position absolute
    top 0
    left 0
    display flex
    transition .3s
    transition-property transform

  .buttons
    width 100%
    height 100%
    display flex
    justify-content space-between
    align-items center
  
  .button
    z-index 999
    font-size 2.5rem
    margin 0.5rem 0.2rem 0.5rem 0.3rem
    width 4rem
    height @width
    display flex
    justify-content center
    align-items center
    border-radius 50%
    transition 0.2s
    transition-property background-color

    +mobile()
      font-size 2rem
      width 2rem
      height @width

    &:not(:disabled)
      +hover()
        background-color alpha($cl-gray, 50%)
  
  .indicators
    position absolute
    bottom 0
    left 0
    width 100%
    display flex
    justify-content center
    align-items center

  .indicator
    padding 0.5rem
    color $cl-gray
    transition 0.2s
    transition-property color

    +hover()
      color $cl-dark
</style>

<script lang="ts">
import Vue from 'vue'
import CenterSlide from './center-slide.vue'
import SoundSlide from './sound-slide.vue'
import TechSlide from './tech-slide.vue'
export default Vue.extend({
  components: {
    CenterSlide,
    SoundSlide,
    TechSlide,
  },
  data() {
    return {
      position: 1,
      size: 0,
    };
  },
  computed: {
    isLeftEnd() {
      return this.position === 0;
    },
    isRightEnd() {
      return this.position === this.size - 1;
    },
    indicatorsArray() {
      return new Array(this.size).fill(0).map((z, i) => i);
    },
  },
  mounted() {
    this.size = this.$refs.slider.children.length;
  },
  methods: {
    move(amount) {
      this.position += amount;
      if (this.position < 0) this.position = 0;
      if (this.position >= this.size) this.position = this.size - 1;
    },
    jump(position) {
      this.position = position;
    },
  },
})
</script>
