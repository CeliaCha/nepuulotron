<template>
    <div>
      <label for="title">Titre :</label>
      <input v-model="title" id="title" type="text"/>
      <label for="url">Image :</label>
      <input v-model="imageUrl" id="url" type="text"/>
      <button @click="addElement">OK</button>
      <button @click="addJson">Create Json</button>
      <a v-if="displayUploadJson" :href="jsonUrl" download>Upload json</a>
      <AddString @add-string="updateStrings"/>
    </div>
</template>

<script>
import AddString from './AddString'

export default {
  components: { AddString },
  props: {
    data: Object
  },
  mounted () {
    console.log('App mounted!')
    if (localStorage.getItem('json')) this.json = JSON.parse(localStorage.getItem('json'))
  },
  data () {
    return {
      title: '',
      imageUrl: '',
      strings: [],
      json: [],
      jsonUrl: '',
      displayUploadJson: false,
    }
  },
  methods: {
    updateStrings (value) {
      console.log(value)
      this.strings = value
    },
    addElement () {
      const object = {}
      object.title = this.title
      object.imageUrl = this.imageUrl
      object.strings = this.strings
      this.json.push(object)
      this.title = ''
      this.imageUrl = ''
      this.strings = []
    },
    addJson () {
      let blob = new Blob([JSON.stringify(this.json, null, 2)], { type: 'application/json' })
      this.jsonUrl = window.URL.createObjectURL(blob)
      this.displayUploadJson = true
    }
  },
  watch: {
    json: {
      handler () {
        console.log('Json changed!')
        localStorage.setItem('json', JSON.stringify(this.json))
      },
      deep: true,
    },
  },
}
</script>

<style scoped>

</style>
