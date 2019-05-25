<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <input v-model.number="currentPage" type="number" step="1"/>

    <!-- <input v-model="search" type="text" />
    <div v-for="item in filteredList" :key="item.french">
      <Item :data="item"/>
    </div> -->
    <Item/>
    <Canvas :currentPage="currentPage" v-on:getNumPages="setNumPages"/>

  </div>
</template>

<script>
import list from './data/list.json'
import Item from './components/Item'
import Canvas from './components/Canvas'

export default {
  name: 'app',
  components: { Canvas, Item },
  data () {
    return {
      msg: 'Welcome to the Nepuulotron !',
      list: list,
      search: '',
      numPages: 0,
      currentPage: 3,
    }
  },
  created () {
  },
  computed: {
    filteredList () {
      return this.list.filter(item => {
        const concat = (item.french + item.eng).toLowerCase()
        return concat.includes(this.search.toLowerCase().trim())
      })
    }
  },
  methods: {
    setNumPages (numPages) {
      this.numPages = numPages
      console.log('Nombres de pages : ' + numPages)
    }
  }
}
</script>

<style lang="scss">
  #app {
    color: #080f0b;
  }
</style>
