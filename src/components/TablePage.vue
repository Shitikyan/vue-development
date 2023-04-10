<template>
  <div>
    <h1>Table Page</h1>
    <!-- <vue-good-table :columns="columns" :rows="rows" /> -->
  </div>
</template>

<!-- <script>
import axios from 'axios'
import { VueGoodTable } from 'vue-good-table'

export default {
  name: 'TablePage',
  data() {
    return {
      components: {
        VueGoodTable
      },
      columns: [
        {
          label: 'Country',
          field: 'country'
        },
        {
          label: 'Count',
          field: 'count',
          type: 'number'
        },
        {
          label: 'Date',
          field: 'date'
        },
        {
          label: 'Period',
          field: 'period'
        }
      ],
      rows: []
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      axios
        .get(
          'https://9e34429a-eba3-4e56-85f2-685706a08897.mock.pstmn.io/report/dau?dashboardUserId=abc123&periodFrom=1669852800&periodTo=1674063742&aggregateBy%5B0%5D=month&aggregateBy%5B1%5D=country'
        )
        .then((response) => {
          this.rows = response.data.items
          console.log(this.rows)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script> -->
