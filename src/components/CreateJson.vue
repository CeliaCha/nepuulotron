<template>
    <div class="create-json">
      <textarea cols="100" rows="5" v-model="text" id="normalText" type="text"/>
      <!-- <div class="display-text">{{text}}</div> -->
      <div class="text" v-if="text">
        <p class="paragraph"  v-for="(paragraph, index) in formattedText" :key="index">
          {{paragraph}}
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

<style scoped >
  .create-json {
    /* display: flex; */
  }

  textarea {
    display: block;
    width: 90%;
    margin:auto;
  }

  .text {
    margin: 10px auto;
    width: 90%;
    height: 70vh;
    overflow: auto;
    border : 2px solid black;
  }
  .paragraph {
    width: 95%;
    height: auto;
    border: 1px solid lightgray;
    margin: 10px auto 10px;
    padding: 4px 4px 4px 4px;
  }

  .paragraph:hover {
    border: 1px solid black;
    background : rgb(245, 174, 68);
  }

</style>
