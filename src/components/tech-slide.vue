<template lang="pug">
slide-base
  .tech-slide
    h2 Web Engineer
    p 個人ウェブサイト・特設サイトをはじめ、様々なWebサービス開発に携わる。 クライアントサイド（JavaScript/CSS）開発を得意とする。
    dl
      dt 読める
      dd JavaScript/TypeScript, Vue.js, Java, C/C++, Ruby (on Rails)
      dt どちらかといえば読める
      dd Angular, Go, Haskell, Lisp (Scheme)
    hr
    h2 Products
    ul.products
      li.product
        img.thumb(src="../images/elmina.png")
        div
          a(href="https://elmina.net", target="_blank"): strong elmina.net
          p 楽曲制作サークル『elmina』ウェブサイト　デザイン／実装
      li.product
        img.thumb(src="../images/teikyou-dot-com.png")
        div
          a(href="https://teikyou.com", target="_blank"): strong テイキョウドットコム
          p 『提供／三浦 博健』個人ウェブサイト　デザイン／実装
    p._alignright etc...
</template>

<style lang="stylus" scoped>
@require "../styles/include"

.tech-slide
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
    height 150px
    margin-right 1.5rem
    border-radius 50%
    overflow hidden

    +mobile()
      margin 0
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

