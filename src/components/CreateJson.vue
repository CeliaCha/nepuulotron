<template>
    <div class="create-json">
      <textarea cols="100" rows="5" v-model="text" id="normalText" type="text"/>
      <!-- <div class="display-text">{{text}}</div> -->
      <div v-if="text">
        <p class="display-text"  v-for="(string, index) in formattedText" :key="index">
          {{string}}
        </p>
      </div>
      <!-- <label for="title">Titre :</label>
      <input v-model="title" id="title" type="text"/>
      <label for="url">Image :</label>
      <input v-model="imageUrl" id="url" type="text"/>
      <button @click="addElement">OK</button>
      <button @click="addJson">Create Json</button>
      <a v-if="displayUploadJson" :href="jsonUrl" download>Upload json</a>
      <AddString @add-string="updateStrings"/> -->
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
      text: '',
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
  computed: {
    formattedText () {
      return this.text.split(/\r\n|\n\r|\n|\r/g).filter(item => item.match(/\S/))
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
  .create-json {
    /* display: flex; */
  }
  .display-text {
    width: 90%;
    height: auto;
    border: 1px solid black;
    margin: 0 0 5px;
  }

</style>
