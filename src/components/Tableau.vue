<template>
    <div>
         <b-table :data="data" :columns="columns" :loading="isLoading"
            narrowed hoverable paginated pagination-simple mobile-cards
            :per-page="12"
            :current-page.sync="currentPage">
             <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon
                                icon="emoticon-sad"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Ce mot n'est pas dans le glossaire, soit parce que le Nepuulotron l'a oublié, soit parce qu'il est traduit littéralement dans la VF.</p>
                    </div>
                </section>
            </template>
            </b-table>
    </div>
</template>

<script>
import columns from '../data/columns.json'

export default {
  props: {
    data: Array
  },
  data () {
    return {
      isLoading: false,
      currentPage: 1,
      columns: columns
    }
  },
}
</script>

<style scoped>

</style>
