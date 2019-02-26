<template lang="pug">
.slide-base
  .panel
    slot
</template>

<style lang="stylus" scoped>
@require "../styles/include"

.slide-base
  &
    position relative    
    width 100vw
    height 100vh
    display flex
    align-items center
    justify-content center

  .panel
    box-sizing border-box
    margin 5rem
    padding 3rem
    width 100%
    max-height s("calc(100% - %s)", @margin * 2)
    background-color white
    box-shadow 0 0 30px $cl-lightgray
    border-radius 5px
    overflow hidden
    overflow-x hidden
    overflow-y scroll

    +mobile()
      margin 3rem 1.5rem
      padding 1.5rem
      max-height s("calc(100% - %s)", @margin * 2)
</style>
