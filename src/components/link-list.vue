<template lang="pug">
.link-list
  a.link(v-for="item in links", :href="item.href", target="_blank") {{item.title}}
</template>

<style lang="stylus" scoped>
@require "../styles/include"

.link-list
  &
    margin-top 0.8rem

  .link
    display inline-flex
    align-items center
    justify-content center
    margin 0 0.8rem 0.8rem 0
    padding 0.2rem 0.4rem 0.1rem
    border 1px solid $cl-dark
    border-radius 5px
    text-decoration none
    font-size 0.8em

    +mobile()
      margin 0 0.5rem 0.5rem 0
</style>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    links: {
      type: Array,
      validator: links => links.every(link => link instanceof Object && link.href && link.title),
      required: true,
    },
  },
})
</script>

