<template lang="pug">
slide-base
  .sound-slide
    h2 Sound Creator
    small Creator Name:&ensp;Rious / Megahertz
    p
      | トランス・ドラムンベースなど、シンセサウンドをメインとしたエレクトロニックな楽曲を得意とする。 ボーカル編集・マスタリングなども行う。 音楽サークル『
      a(href="https://elmina.net", target="_blank") elmina
      | 』主宰。
    hr
    h2 Products
    ul.products
      li.product
        a(href="https://elmina.net/products/elmn0005/", target="_blank"): strong elmina 04: daylight
      li.product
        a(href="https://elmina.net/products/elmn0004/", target="_blank"): strong Melodious Planet
      li.product
        a(href="http://info.kamomesano.info/tatsuta2/", target="_blank"): strong tatsuta2 compilation 2
    p etc...
</template>

<style lang="stylus" scoped>
@require "../styles/include"

.sound-slide
  .products
    margin 1.5rem 0

  .product
    display flex
    justify-content flex-start
    align-items center

    &:not(:last-child)
      margin-bottom 1.5rem

  .thumb
    flex 0 0 150px
    margin-right 1.5rem
    border-radius 50%
    overflow hidden

    +mobile()
      margin 0
  
  .img
    height 150px
    width auto
</style>


<script lang="ts">
import Vue from 'vue'
import SlideBase from './slide-base.vue';
export default Vue.extend({
  components: {
    SlideBase,
  },
})
</script>

