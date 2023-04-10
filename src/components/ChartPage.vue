<template>
  <Bar ref="chart" :data="data" :options="options" />
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import axios from 'axios'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Bar
  },
  data() {
    return {
      data: {
        labels: ['2021-12', '2022-01'],
        datasets: [
          {
            label: 'US',
            data: [10, 20, 30],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          },
          {
            label: 'UA',
            data: [10, 20, 30],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'bottom'
          }
        }
      }
    }
  },
  mounted() {
    axios
      .get(
        'https://9e34429a-eba3-4e56-85f2-685706a08897.mock.pstmn.io/report/dau?dashboardUserId=abc123&periodFrom=1669852800&periodTo=1674063742&aggregateBy%5B0%5D=month&aggregateBy%5B1%5D=country'
      )
      .then((response) => {
        console.log(this.data)
        this.data.datasets = response.data.items.reduce((acc, curr) => {
          if (!acc.find((elem) => elem.label === curr.country)) {
            return [
              ...acc,
              {
                label: curr.country,
                data: [curr.count],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
              }
            ]
          }

          return acc.map((elem) => {
            if (elem.label === curr.country) {
              return { ...elem, data: [...elem.data, curr.count] }
            }

            return elem
          })
        }, [])

        // this.data.labels = response.data.items.map((item) => item.date)

        console.log(this.data)
        // Get the chart instance from the ref and call the update method to redraw the chart with the new data.
        this.$refs.chart.update()
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
