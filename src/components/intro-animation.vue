<template lang="pug">
.intro-animation(:class="{_active: started}")
  .center
    button.button(type="button", @click.prevent="start", :class="{_active: started}")
    .text(:class="{_active: started}")
      i.material-icons arrow_back
      span CLICK!
</template>

<style lang="stylus" scoped>
@require "../styles/include"

@keyframes first
  100%
    height calc(100vh + 2px)
    border-radius 0

@keyframes second
  100%
    width 1rem

@keyframes expand
  0%
    width 1rem
  100%
    width 100vw
    border-width 0

@keyframes opacity
  100%
    opacity 0
    visibility hidden

$easeOutBack = cubic-bezier(0.175, 0.885, 0.32, 1.275)
$easeInOutCirc = cubic-bezier(0.785, 0.135, 0.15, 0.86)
$easeInExpo = cubic-bezier(0.95, 0.05, 0.795, 0.035)

.intro-animation
  &
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    z-index 1000
    background-color $cl-light
    overflow hidden

    &._active
      animation:
        opacity 1s $easeInOutCirc 2s 1 forwards

  .center
    width 100%
    height 100%
    display flex
    align-items center
    justify-content center

  .button
    width 9rem
    height @width
    background-color white
    cursor pointer
    transition .1s
    transition-property width, height, border-radius, border-width, opacity, visibility
    border-radius 50%
    border 1px solid $cl-gray
    outline none

    +hover()
      &:not(._active)
        width 12rem
        height @width

    &._active
      animation: 
        first 0.4s $easeInOutCirc 0s 1 forwards,
        second 0.8s $easeInOutCirc 0.4s 1 forwards,
        expand 0.7s $easeInExpo 1.4s 1 forwards
    
  .text
    display inline-flex
    align-items center
    font-size 2rem
    transform translate(-1.5em, 1em) rotateZ(20deg)
    pointer-events none
    transition .5s
    transition-property opacity, visibility

    &._active
      opacity 0
      visibility hidden
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      started: false,
    };
  },
  methods: {
    start() {
      this.started = true;
    },
  },
})
</script>

