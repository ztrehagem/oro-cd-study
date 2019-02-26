<template lang="pug">
slide-base
  .center-slide
    .row
      .selfy
        img(src="../images/photo.jpg")
      .intro
        small.title oRo コミュニケーションデザイン事業部 エンジニア
        strong.name 諏訪 重貴 / Shigeki Suwa
        div: small 24歳 (1995年 早生まれ)
        div: small 芝浦工業大学大学院 卒業見込 (修士課程)
    hr
    div
      p FLASH、Java Applet、ブラウザゲー、隠しページ・・・などが跋扈していた2000年代初頭にインターネットの世界に爆誕。 早々にHTML・CSSと出会い、今の今まで続く腐れ縁である。
      p
        | 中学で吹奏楽部に入り音楽と出会うが、不運なことにボカロEDMの世界に迷い込んでしまう。 高校から本格的にDTMをはじめ、大学ではサークルを立ち上げる。 現在は音楽サークル『
        a(href="https://elmina.net/", target="_blank") elmina
        | 』 として楽曲制作とアルバムCDの企画・制作進行をしている。
      p その傍ら、こつこつと積み重ねていたWebサイト制作の経験を活かし、インターン・アルバイトとして複数のWebサービス開発に携わってきた。
      p 本当に使いやすいWebサイトを作るのがどうやら好きみたいだ。
      p.alignright: small (2018/06/03)
    hr
    dl
      dt ポートフォリオ
      dd
        a(href="https://ztrehagem.github.io/", target="_blank") https://ztrehagem.github.io/
      dt Twitter
      dd
        a(href="https://twitter.com/ztrehagem", target="_blank") https://twitter.com/ztrehagem
      dt GitHub
      dd
        a(href="https://github.com/ztrehagem", target="_blank") https://github.com/ztrehagem
</template>

<style lang="stylus">
@require "../styles/include"

.center-slide
  .row
    display flex
    align-items center

    +mobile()
      display block

  .selfy
    max-width 150px
    border-radius 50%
    overflow hidden

    +mobile()
      display table
      margin 0 auto

  .intro
    margin-left 2rem

    +mobile()
      margin 0
      margin-top 2rem

  .name
    font-size 1.5em
    display block
    margin 1rem 0
    line-height 1

  .title
    color $cl-gray
    display block

  .alignright
    text-align right
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
